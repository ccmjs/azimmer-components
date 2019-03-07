/**
 * @overview ccm component forcreating a player
 * @author Arthur Zimmermann 2018
 * @license MIT License
 * @version 1.0.0
 * @changes
 * version 1.0.0 (20.01.2019)
 */

(function () {

    const component = {

        name: "badges",

        ccm: "https://ccmjs.github.io/ccm/ccm.js",

        config: {
            "html": {
                "badges": [
                    {
                        "tag": "h2",
                        "class": "badges-headline",
                        "inner": "Abzeichen"
                    },
                    {
                        "tag": "div",
                        "class": "badges-content",
                        "inner": ""
                    }
                ]
            },
            "css": ["ccm.load", "../badges/resources/default.css"],
            "store": ["ccm.store", {"name": "player"}]
        },

        Instance: function () {
            let playerStatus;

            this.addBadge = async badgeid => {
                this.store.get("game").then(result => playerStatus = result.value);
                this.badges.forEach(badge => {
                    if(badge.badgesid === badgeid){
                        badge.show = true;
                        playerStatus.badges.forEach(element => {
                            if (element.badgesid !== badgeid){
                                playerStatus.badges.push(badge);
                            }
                        });
                        if(playerStatus.badges.length === 0){
                            playerStatus.badges.push(badge);
                        }
                        this.store.set({"key":"game", "value":playerStatus});
                    }
                });
                this.renderBadges();
            };
            this.renderBadges = () => {
                let oldBadges =  this.element.querySelectorAll(".badge-wrapper");
                oldBadges.forEach(element => {
                    element.parentNode.removeChild(element);
                });
                playerStatus.badges.forEach(badge => {
                    if(badge.show){
                        let badgesContent = this.element.querySelector(".badges-content");

                        let badgeWrapper = document.createElement("figure");
                        badgeWrapper.className = "badge-wrapper";

                        let badgeIcon = document.createElement("img");
                        badgeIcon.className = "badges-icon";
                        badgeIcon.src = badge.icon;

                        let badgeTitle = document.createElement("figcaption");
                        badgeTitle.className = "badges-title";
                        badgeTitle.innerText = badge.title;

                        badgeWrapper.appendChild(badgeIcon);
                        badgeWrapper.appendChild(badgeTitle);

                        badgesContent.appendChild(badgeWrapper);
                    }
                })
            };
            this.start = async () => {
                await this.store.get("game").then(result => playerStatus = result.value);

                this.ccm.helper.setContent(this.element, this.ccm.helper.html(this.html.badges));
                this.renderBadges();
                if(this.testButton){
                    let testButton = document.createElement("button");
                    testButton.innerText="Fireing Events";
                    testButton.addEventListener("click",()=>this.addBadge("badges1"));
                    this.element.appendChild(testButton);
                }
            }
        }

    };

    let b = "ccm." + component.name + (component.version ? "-" + component.version.join(".") : "") + ".js";
    if (window.ccm && null === window.ccm.files[b]) return window.ccm.files[b] = component;
    (b = window.ccm && window.ccm.components[component.name]) && b.ccm && (component.ccm = b.ccm);
    "string" === typeof component.ccm && (component.ccm = {url: component.ccm});
    let c = (component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/) || ["latest"])[0];
    if (window.ccm && window.ccm[c]) window.ccm[c].component(component); else {
        var a = document.createElement("script");
        document.head.appendChild(a);
        component.ccm.integrity && a.setAttribute("integrity", component.ccm.integrity);
        component.ccm.crossorigin && a.setAttribute("crossorigin", component.ccm.crossorigin);
        a.onload = function () {
            window.ccm[c].component(component);
            document.head.removeChild(a)
        };
        a.src = component.ccm.url
    }
})();
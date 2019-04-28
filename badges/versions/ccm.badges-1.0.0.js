/**
 * @overview ccm component for progress bar
 * @author Arthur Zimmermann 2018
 * @license MIT License
 * @version 1.0.0
 * @changes
 * version 1.0.0 (12.10.2018)
 */

( function () {

    const component = {

        name: 'badges',

        version: [ 1, 0, 0 ],

        ccm: 'https://ccmjs.github.io/ccm/versions/ccm-20.1.0.js',

        config: {
            "html": {
                "badges": [
                    {
                        "tag": "h2",
                        "class": "badges-headline",
                        "inner": "Abzeichen: "
                    },
                    {
                        "tag": "div",
                        "class": "badges-content",
                        "inner": ""
                    }
                ]
            },
            "css": ["ccm.load", "https://ccmjs.github.io/azimmer-components/badges/resources/default.css"],
            "store": ["ccm.store", {"name": "player"}]
        },

        Instance: function () {
            let badgesArray = [];
            this.addBadge = async badgeid => {
                this.store.get("badges").then(result => {
                    this.badges.forEach(badge => {
                        if (badge.badgesid === badgeid && !this.element.querySelector("#"+badgeid)) {
                            badge.show = true;
                            result.value.forEach(element => {
                                if (element.badgesid !== badgeid) {
                                    result.value.push(badge);
                                    this.store.set({"key": "badges", "value": result.value});
                                    this.parent.comparegame.addBadges(badge);
                                }
                            });
                            if (result.value.length === 0 && !this.element.querySelector("#"+badgeid)) {
                                result.value.push(badge);
                                this.store.set({"key": "badges", "value": result.value});
                                this.parent.comparegame.addBadges(badge);
                            }
                        }
                    })
                }).then(() => {
                    this.renderBadges()
                });
            };
            this.renderBadges = () => {
                let oldBadges = this.element.querySelectorAll(".badge-wrapper");
                oldBadges.forEach(element => {
                    element.parentNode.removeChild(element);
                });
                this.store.get("badges").then(result => {
                    result.value.forEach(badge => {
                        if (badge.show) {
                            let oldBadges = this.element.querySelector("#"+badge.badgesid);
                            if(oldBadges){
                                oldBadges.parentNode.removeChild(oldBadges);
                            }
                            let badgesContent = this.element.querySelector(".badges-content");

                            let badgeWrapper = document.createElement("figure");
                            badgeWrapper.className = "badge-wrapper";
                            badgeWrapper.id = badge.badgesid;

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
                });

            };
            this.start = async () => {

                await this.store.get("badges").then(result => {
                    badgesArray = result.value;
                }).catch(error => {
                    this.store.set({"key": "badges", "value": []});
                });

                this.ccm.helper.setContent(this.element, this.ccm.helper.html(this.html.badges));
                this.renderBadges();
                if (this.testButton) {
                    let testButton = document.createElement("button");
                    testButton.innerText = "Fireing Events";
                    testButton.addEventListener("click", () => this.addBadge("badges1"));
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
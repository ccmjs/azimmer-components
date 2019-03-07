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

        name: "achievements",

        ccm: "https://ccmjs.github.io/ccm/ccm.js",

        config: {
            "html": {
                "achievement": [
                    {
                        "tag": "h2",
                        "class": "achievement-headline",
                        "inner": "Errungenschaften"
                    },
                    {
                        "tag": "div",
                        "class": "achievement-content",
                        "inner": ""
                    }
                ]
            },
            "css": ["ccm.load", "../achievements/resources/default.css"],
            "store": ["ccm.store", {"name": "player"}]
        },

        Instance: function () {
            let playerStatus;
            this.addAchievement = async achievementid => {
                await this.store.get("game").then(result => playerStatus = result.value);
                this.achievements.forEach(achievement => {
                    if(achievement.achievementid === achievementid){
                        achievement.show = true;
                        playerStatus.achievement.forEach(element => {
                            if (element.achievementid !== achievementid){
                                playerStatus.achievement.push(achievement);
                            }
                        });
                        if(playerStatus.achievement.length === 0){
                            playerStatus.achievement.push(achievement);
                        }
                        this.store.set({"key":"game", "value":playerStatus}).then(result => console.log(result));
                    }
                });
                this.renderAchievement();
            };
            this.renderAchievement = () => {
                let oldAchievement =  this.element.querySelectorAll(".achievement-wrapper");
                oldAchievement.forEach(element => {
                    element.parentNode.removeChild(element);
                });
                playerStatus.achievement.forEach(achievement => {
                    if(achievement.show){
                        let achievementContent = this.element.querySelector(".achievement-content");

                        let achievementWrapper = document.createElement("figure");
                        achievementWrapper.className = "achievement-wrapper";

                        let achievementIcon = document.createElement("img");
                        achievementIcon.className = "achievement-icon";
                        achievementIcon.src = achievement.icon;

                        let achievementTitle = document.createElement("figcaption");
                        achievementTitle.className = "achievement-title";
                        achievementTitle.innerText = achievement.title;

                        achievementWrapper.appendChild(achievementIcon);
                        achievementWrapper.appendChild(achievementTitle);

                        achievementContent.appendChild(achievementWrapper);
                    }
                })
            };
            this.start = async () => {
                await this.store.get("game").then(result => playerStatus = result.value);
                this.ccm.helper.setContent(this.element, this.ccm.helper.html(this.html.achievement));
                this.renderAchievement();

                if(this.testButton){
                    let testButton = document.createElement("button");
                    testButton.innerText="Fireing Events";
                    testButton.addEventListener("click",()=>this.addAchievement("achievement1"));
                    this.element.appendChild(testButton);
                }

                await this.store.get("game").then(result => {
                    this.achievements.forEach(achievement => {
                        Object.keys(achievement.condition).forEach(e =>{
                            if(result.value[e] === achievement.condition[e]){
                                this.addAchievement(achievement.achievementid);
                            }
                        })
                    });
                });
            };


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
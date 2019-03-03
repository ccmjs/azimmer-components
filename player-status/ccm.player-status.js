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

        name: "player-status",

        ccm: "https://ccmjs.github.io/ccm/ccm.js",

        config: {
            "html": {
                "player": {
                    "tag": "div",
                    "class": "player-status",
                    "inner": [
                        {
                            "tag": "div",
                            "class": "player-name",
                            "inner": {
                                "tag": "h1",
                                "inner": ""
                            }
                        },
                        {
                            "tag": "div",
                            "class": "level-container",
                            "inner": [
                                {"tag":"h2","class":"level-headline","inner":"Level: "},
                                {"tag":"div","class":"level-number","inner":""}
                            ]
                        },
                        {
                            "tag": "div",
                            "class": "badges-container",
                            "inner": ""
                        },
                        {
                            "tag": "div",
                            "class": "achievement-container",
                            "inner": ""
                        },
                        {
                            "tag": "div",
                            "class": "progress-bar",
                            "inner": ""
                        }
                    ]
                }
            },
            "css": ["ccm.load", "./player-status/resources/default.css"],
            "store": ["ccm.store", {"name": "player"}]
        },

        Instance: function () {

            this.setProgress = exp => {
                let counter = this.progressbar.getComplete();
                for (let i = 0; i < exp; i++) {
                    this.progressbar.setComplete(counter += 1);
                    if (this.progressbar.getComplete() <= this.progressbar.max) {
                        this.player.exp = this.progressbar.getComplete();
                    } else {
                        this.addLevel();
                        this.progressbar.start(this.progressbarConfig);
                        counter = this.progressbar.getComplete() + 1;
                    }
                }
                this.store.set({"key": "game", "value": this.player});
            };
            this.addLevel = async () => {
                this.player.level++;
                let playersLevel = this.element.querySelector(".level-number");
                playersLevel.innerHTML = this.player.level;
                await this.start();
            };
            this.progressbarConfig = {
                min: 0,
                max: 100,
                sign: "exp",
                complete: 0,
                showText: true
            };
            this.start = async () => {
                await this.store.get("game")
                    .then(result => {
                        this.player = result.value;
                    })
                    .catch(error => {
                        let name = prompt("Bitte Namen des Spielers eingeben:", "Spieler1");
                        const initalPlayerObj = {
                            "key": "game",
                            "value": {
                                "name": name,
                                "level": 1,
                                "badges": [],
                                "achievement": [],
                                "exp": 0,
                                "task_done": []
                            }
                        };
                        this.store.set(initalPlayerObj);
                        location.reload(true);
                    });
                this.ccm.helper.setContent(this.element, this.ccm.helper.html(this.html.player));
                let playersName = this.element.querySelector(".player-name").querySelector("h1");
                playersName.innerHTML = this.player.name;

                let playersLevel = this.element.querySelector(".level-number");
                playersLevel.innerHTML = this.player.level;

                let progressbarContainer = this.element.querySelector(".progress-bar");
                let badgesContainer = this.element.querySelector(".badges-container");
                let achievementsContainer = this.element.querySelector(".achievement-container");

                await this.progressbar.start();
                await this.badges.start();
                await this.achievement.start();
                this.progressbar.setComplete(this.player.exp);



                progressbarContainer.appendChild(this.progressbar.root);
                badgesContainer.appendChild(this.badges.root);
                achievementsContainer.appendChild(this.achievement.root);

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
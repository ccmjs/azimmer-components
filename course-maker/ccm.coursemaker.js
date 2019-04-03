/**
 * @overview ccm component for creating a player and player status
 * @author Arthur Zimmermann 2018
 * @license MIT License
 * @version 1.0.0
 * @changes
 * version 1.0.0 (20.01.2019)
 */

(function () {

    const component = {

        name: "coursemaker",

        ccm: "https://ccmjs.github.io/ccm/ccm.js",

        config: {
            "html": {
                "player": {
                    "tag": "div",
                    "class": "player-status",
                    "inner": [
                        {
                            "tag": "div",
                            "class": "menu-container",
                            "inner": [
                                {
                                    "tag": "div",
                                    "class": "game-menu",
                                    "inner": [
                                        {
                                            "tag": "img",
                                            "src": "./resources/home-icon-silhouette.svg",
                                            "class": "game-menu-icon"
                                        },
                                        {
                                            "tag": "span",
                                            "inner": "Spiel Übersicht"
                                        }
                                    ]
                                },
                                {
                                    "tag": "div",
                                    "class": "players-menu",
                                    "inner": [
                                        {
                                            "tag": "img",
                                            "src": "./resources/group-of-people.svg",
                                            "class": "players-menu-icon"
                                        },
                                        {
                                            "tag": "span",
                                            "inner": "Anderer Spieler"
                                        }
                                    ]
                                },
                                {
                                    "tag": "div",
                                    "class": "settings-menu",
                                    "inner": [
                                        {
                                            "tag": "img",
                                            "src": "./resources/settings.svg",
                                            "class": "settings-menu-icon"
                                        },
                                        {
                                            "tag": "span",
                                            "inner": "Spiel Einstellung"
                                        }
                                    ]
                                }
                            ],
                        },
                        {
                            "tag": "div",
                            "class": "comparegame-container",
                            "inner": "",
                        },
                        {
                            "tag": "div",
                            "class": "player-container",
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
                                    "class": "login",
                                    "inner": {}
                                },
                                {
                                    "tag": "div",
                                    "class": "level-container",
                                    "inner": [
                                        {"tag": "h2", "class": "level-headline", "inner": "Level: "},
                                        {"tag": "div", "class": "level-number", "inner": ""}
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
                                },
                                {
                                    "tag": "div",
                                    "class": "storyboard-container",
                                    "inner": "",
                                },
                            ]
                        },
                        {
                            "tag": "div",
                            "class": "settings-container",
                            "inner": "",
                        }
                    ]
                }
            },
            "css": ["ccm.load", "../course-maker/resources/default.css"],
            "store": ["ccm.store", {"name": "player"}],
            "remoteStore": ["ccm.store", {"name": "azimme2s_playerstatus", url: "wss://ccm2.inf.h-brs.de"}],
        },

        Instance: function () {
            this.renderAchievement = async () => {
                const achievementsContainer = this.element.querySelector(".achievement-container");
                this.achievement.start();
                achievementsContainer.appendChild(this.achievement.root);
            };
            this.renderBadges = async () => {
                const badgesContainer = this.element.querySelector(".badges-container");
                await this.badges.start();
                await badgesContainer.appendChild(this.badges.root);
            };
            this.renderProgressbar = async () => {
                const progressbarContainer = this.element.querySelector(".progress-bar");
                await this.progressbar.start(this.progressConfig);
                await progressbarContainer.appendChild(this.progressbar.root);
                await this.progressbar.setComplete(this.player.exp);
            };
            this.setProgress = exp => {

                let counter = this.progressbar.getComplete();
                for (let i = 0; i < exp; i++) {
                    setTimeout(() => {
                        this.progressbar.setComplete(counter += 1);

                        if (this.progressbar.getComplete() <= this.progressbar.max) {
                            this.player.exp = this.progressbar.getComplete();
                        }
                        else {
                            this.addLevel();
                            this.player.exp = this.progressbar.getComplete();
                            counter = this.progressbar.getComplete() + 1;

                        }
                    }, 50 * i);
                }
                this.store.set({"key": "game", "value": this.player});
                this.parent.comparegame.addGamme(this.player);
            };
            this.addLevel = async () => {
                this.player.level++;
                let playersLevel = this.element.querySelector(".level-number");
                playersLevel.innerHTML = this.player.level;
                this.parent.comparegame.addGamme(this.player);
                this.renderProgressbar();
                this.renderAchievement();
                this.parent.storyboard.start();
            };
            this.progressConfig = {
                complete: 0,
                sign: '%',
                showText: true,
                min: 0,
                max: 100,
            };
            this.checkForExistingPlayer = name => {
                let newName = name;
                this.remoteStore.get(name).then(r => {
                    console.log(r);
                    if (r === null) {
                        const initalPlayerObj = {
                            "key": "game",
                            "value": {
                                "name": newName,
                                "level": 1,
                                "exp": 0,
                            }
                        };
                        this.store.set(initalPlayerObj);
                        this.remoteStore.set({
                            "key": newName, "value": {
                                "name": newName,
                                "level": 1,
                                "exp": 0,
                                "achievements": [],
                                "badges": [],
                                "taskDone": []
                            }
                        });
                        location.reload(true);
                    }
                    else {
                        newName = prompt("Spieler existiert bereits, bitte neuen Spielernamen angeben:", "Spieler1");
                        this.checkForExistingPlayer(newName);
                    }
                }).catch(err => {
                    console.log(err);
                    const initalPlayerObj = {
                        "key": "game",
                        "value": {
                            "name": newName,
                            "level": 1,
                            "exp": 0,
                        }
                    };
                    this.store.set(initalPlayerObj);
                    this.remoteStore.set({
                        "key": newName, "value": {
                            "name": newName,
                            "level": 1,
                            "exp": 0,
                            "achievements": [],
                            "badges": [],
                            "taskDone": []
                        }
                    });
                    location.reload(true);
                });
            };
            this.start = async () => {
                await this.store.get("game")
                    .then(result => {
                        this.player = result.value;
                    })
                    .catch(async error => {
                        console.log(this.user);
                        //const login = this.element.querySelector(".login");
                        //this.user.start();
                        //login.appendChild(this.user.root);
                        let name = prompt("Bitte Namen des Spielers eingeben:", "Spieler1");
                        await this.checkForExistingPlayer(name);

                    });
                this.ccm.helper.setContent(this.element, this.ccm.helper.html(this.html.player));
                let playersName = this.element.querySelector(".player-name").querySelector("h1");
                playersName.innerHTML = this.player.name;

                let playersLevel = this.element.querySelector(".level-number");
                playersLevel.innerHTML = this.player.level;

                const player = this.element.querySelector(".player-container");
                const storyboard = this.element.querySelector(".storyboard-container");
                const comparegame = this.element.querySelector(".comparegame-container");

                const gameMenu = this.element.querySelector(".game-menu");
                const playersMenu = this.element.querySelector(".players-menu");
                const settingsMenu = this.element.querySelector(".settings-menu");

                this.storyboard.start();
                storyboard.appendChild(this.storyboard.root);

                gameMenu.addEventListener("click", () => {

                    const oldPlayerStatus = this.element.querySelector(".player-container");
                    if (oldPlayerStatus === null) this.element.appendChild(player); else oldPlayerStatus.parentNode.removeChild(player);
                    const oldComparegame = this.element.querySelector('#' + this.comparegame.index);
                    if (oldComparegame !== null) oldComparegame.parentNode.removeChild(oldComparegame);
                    const oldDeleteBtn = this.element.querySelector('.delete-btn');
                    if (oldDeleteBtn !== null) oldDeleteBtn.parentNode.removeChild(oldDeleteBtn);
                    this.element.appendChild(player);
                    storyboard.appendChild(this.storyboard.root);
                });
                playersMenu.addEventListener("click", () => {
                    const oldPlayerStatus = this.element.querySelector(".player-container");
                    if (oldPlayerStatus !== null) oldPlayerStatus.parentNode.removeChild(player);
                    const oldDeleteBtn = this.element.querySelector('.delete-btn');
                    if (oldDeleteBtn !== null) oldDeleteBtn.parentNode.removeChild(oldDeleteBtn);
                    const oldComparegame = this.element.querySelector('#' + this.comparegame.index);
                    if (oldComparegame === null) {
                        this.comparegame.start();
                        comparegame.appendChild(this.comparegame.root);
                    } else oldComparegame.parentNode.removeChild(oldComparegame);


                });
                settingsMenu.addEventListener("click", () => {
                    const deleteBtn = document.createElement("button");
                    deleteBtn.className = "delete-btn";
                    deleteBtn.innerHTML = "Spiel von vorne Beginnen";
                    deleteBtn.onclick = () => {
                    };
                    const settingContainer = this.element.querySelector(".settings-container");

                    const oldPlayerStatus = this.element.querySelector(".player-container");
                    if (oldPlayerStatus !== null) oldPlayerStatus.parentNode.removeChild(player);
                    const oldComparegame = this.element.querySelector('#' + this.comparegame.index);
                    if (oldComparegame !== null) oldComparegame.parentNode.removeChild(oldComparegame);
                    settingContainer.appendChild(deleteBtn);

                });


                await this.renderProgressbar();
                await this.renderAchievement();
                await this.renderBadges()

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
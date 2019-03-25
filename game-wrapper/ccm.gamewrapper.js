/**
 * @overview ccm component to store all the game elements for a game
 * @author Arthur Zimmermann 2018
 * @license MIT License
 * @version 1.0.0
 * @changes
 * version 1.0.0 (20.01.2019)
 */

(function () {

    const component = {

        name: "gamewrapper",

        ccm: "https://ccmjs.github.io/ccm/ccm.js",

        config: {
            "html": {
                "gamewrapper": [
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
                        "inner": "",
                    },
                    {
                        "tag": "div",
                        "class": "storyboard-container",
                        "inner": "",
                    }
                ]
            },
            "css": ["ccm.load", "./resources/default.css"],
        },

        Instance: function () {


            this.start = async () => {
                this.ccm.helper.setContent(this.element, this.ccm.helper.html(this.html.gamewrapper));
                const player = this.element.querySelector(".player-container");
                const storyboard = this.element.querySelector(".storyboard-container");
                const comparegame = this.element.querySelector(".comparegame-container");

                const gameMenu = this.element.querySelector(".game-menu");
                const playersMenu = this.element.querySelector(".players-menu");
                const settingsMenu = this.element.querySelector(".settings-menu");

                this.playerStatus.start();
                player.appendChild(this.playerStatus.root);
                this.storyboard.start();
                storyboard.appendChild(this.storyboard.root);

                gameMenu.addEventListener("click", () => {
                    player.parentNode.removeChild(player);
                    storyboard.parentNode.removeChild(storyboard);
                    comparegame.parentNode.removeChild(comparegame);
                    this.playerStatus.start();
                    player.appendChild(this.playerStatus.root);
                    this.storyboard.start();
                    storyboard.appendChild(this.storyboard.root);
                });
                playersMenu.addEventListener("click", () => {
                    player.parentNode.removeChild(player);
                    storyboard.parentNode.removeChild(storyboard);
                    comparegame.parentNode.removeChild(comparegame);
                    this.comparegame.start();
                    comparegame.appendChild(this.comparegame.root);
                });
                settingsMenu.addEventListener("click", () =>{})


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
/**
 * @overview ccm component for creating a player
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
                this.comparegame.start();
                comparegame.appendChild(this.comparegame.root);
                this.playerStatus.start();
                player.appendChild(this.playerStatus.root);
                this.storyboard.start();
                storyboard.appendChild(this.storyboard.root);

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
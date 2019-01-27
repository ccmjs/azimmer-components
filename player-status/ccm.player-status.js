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

        name: 'player-status',

        ccm: 'https://ccmjs.github.io/ccm/ccm.js',

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
                                "inner": "My Name"
                            }
                        },
                        {
                            "tag": "div",
                            "class": "level",
                            "inner": "Level"
                        },
                        {
                            "tag": "div",
                            "class": "badges",
                            "inner": "Abzeichen"
                        },
                        {
                            "tag": "div",
                            "class": "progress-bar",
                            "inner": ""
                        },
                        {
                            "tag": "button",
                            "class": "btn",
                            "inner": "Test"
                        },
                    ]
                }
            },
            "css": ["ccm.load", "./player-status/resources/default.css"],
            "store": ["ccm.store", {store: 'test'}],
        },

        Instance: function () {

            this.setProgress = exp => {
                let counter = this.progressbar.getComplete();
                for (let i = 0; i < exp; i++) {
                    this.progressbar.setComplete(counter += 1);
                    if (this.progressbar.getComplete() <= this.progressbar.max) {
                        console.log("Wenn kleiner als max");
                    } else {
                        this.addLevel();
                        console.log("wenn größer als max");
                        this.progressbar.start({
                            min: 0,
                            max: 100,
                            sign: 'exp',
                            complete: 0,
                            showText: true
                        });
                        counter = this.progressbar.getComplete()+1;
                    }
                }
            };
            this.addLevel = () => {
                this.player.level++;
            };
            this.player = {
                name: "Test",
                level: 1,
                badges: [],
                exp: 0,
                task_done: []
            };
            this.start = async () => {

                let playerObj = {};

                let getPlayerObj = (value) => {
                    playerObj = value;
                };


                if (!('indexedDB' in window)) {
                    console.log('This browser doesn\'t support IndexedDB');
                    return;
                }

                let resultDB = indexedDB.open('player', 1);

                resultDB.onupgradeneeded = function () {
                    // The database did not previously exist, so create object stores and indexes.
                    let db = resultDB.result;
                    let store = db.createObjectStore("player", {keyPath: "name"});
                    store.createIndex("name", "name", {unique: true});

                    // Populate with initial data.
                    store.put({
                        name: "Test",
                        level: 1,
                        badges: [],
                        exp: 0,
                        task_done: []
                    });
                };
                resultDB.onsuccess = function () {
                    db = resultDB.result;
                    let tx = db.transaction("player", "readonly");
                    let store = tx.objectStore("player");
                    let index = store.index("name");
                    let request = index.get("Test");

                    request.onsuccess = (event) => {
                        let playerData = event.target.result;
                        getPlayerObj(playerData);
                    };
                };


                this.ccm.helper.setContent(this.element, this.ccm.helper.html(this.html.player));

                let progressbarContainer = this.element.querySelector('.progress-bar');

                this.progressbar = await this.ccm.start('../progressbar/ccm.progressbar.js', {
                    min: 0,
                    max: 100,
                    sign: 'exp',
                    complete: 0,
                    showText: true
                });


                progressbarContainer.appendChild(this.progressbar.root);
                let button = this.element.querySelector('.btn');
                button.addEventListener('click', () => this.setProgress(30));

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
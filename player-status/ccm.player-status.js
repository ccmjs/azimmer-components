/**
 * @overview ccm component forcreating a player
 * @author Arthur Zimmermann 2018
 * @license MIT License
 * @version 1.0.0
 * @changes
 * version 1.0.0 (20.01.2019)
 */

( function () {

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
                                "tag":"h1",
                                "inner":"My Name"
                            }
                        },
                        {
                            "tag": "div",
                            "class": "level",
                            "inner": "Level"
                        },
                        {
                            "tag": "div",
                            "class": "abilities",
                            "inner": "Fähigkeiten"
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
                    ]
                }
            },
            "css": [ "ccm.load", "https://ccmjs.github.io/azimmer-components/progressbar/resources/default.css" ],
        },

        Instance: function () {

            this.start = async () => {
                if (!('indexedDB' in window)) {
                    console.log('This browser doesn\'t support IndexedDB');
                    return;
                }
                
                let resultDB = indexedDB.open('player', 1);

                 resultDB.onupgradeneeded = function() {
                    // The database did not previously exist, so create object stores and indexes.
                    let db = resultDB.result;
                    let store = db.createObjectStore("player", {keyPath: "name"});
                    store.createIndex("name", "name", {unique: true});
                  
                    // Populate with initial data.
                    store.put({
                        name: "Test", 
                        level: 1, 
                        badges: [],
                        abilitiys: [],
                        exp: 0,
                        task_done: []
                    });
                  };
                  
                  resultDB.onsuccess = function() {
                    db = resultDB.result;
                  };

                this.ccm.helper.setContent( this.element, this.ccm.helper.html( this.html.player ) );

                let progressbarConatiner = this.element.querySelector( '.progress-bar' );
                
                progressbarConatiner.appendChild(this.progressbar);
                

            };


        }

    };

    let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
} )();
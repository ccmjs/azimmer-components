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

        name: "comparegame",

        ccm: "https://ccmjs.github.io/ccm/ccm.js",

        config: {
            "html": {
                "comparegame": {
                    "tag": "div",
                    "class": "compare-window",
                    "inner": [
                        {
                            "tag":"h1",
                            "inner":"Andere Spieler"
                        },
                        {
                            "tag":"table",
                            "class":"compare-table",
                            "inner":{
                                "tag":"tr",
                                "inner": [
                                    {"tag":"th", "class":"header-rank", "inner":"Rank"},
                                    {"tag":"th", "class":"header-name", "inner":"Name"},
                                    {"tag":"th", "class":"header-level", "inner":"Level"},
                                    {"tag":"th", "class":"header-badges", "inner":"Anzahl Abzeichen"},
                                    {"tag":"th", "class":"header-achievements", "inner":"Anzahl Errungenschaften"},
                                    {"tag":"th", "class":"header-tasks", "inner":"Anzahl abgeschlossener Aufgaben"}
                                ]
                            }
                        }
                    ]
                }
            },
            "css": ["ccm.load", "../comparegame/resources/default.css"],
            "store": ["ccm.store", {store: 'playerstatus', url: 'wss://ccm.inf.h-brs.de'}]
        },

        Instance: function () {
            const _ = {_:{
                creator: "azimme2s",
                realm: "hbrsinfkaul",
                access: {
                    get:"all",
                    set: "all",
                    del: "creator"
                }
            }};
            this.start = async () => {
                this.ccm.helper.setContent(this.element, this.ccm.helper.html(this.html.comparegame));

                const headerRank = this.element.querySelector(".header-rank");
                const headerName = this.element.querySelector(".header-name");
                const headerLevel = this.element.querySelector(".header-level");
                const headerBadges = this.element.querySelector(".header-badges");
                const headerAchievements = this.element.querySelector(".header-achievements");
                const headerTasks = this.element.querySelector(".header-tasks");
                headerRank.addEventListener("click", () => this.sortTable(0));
                headerName.addEventListener("click", () => this.sortTable(1));
                headerLevel.addEventListener("click",() => this.sortTable(2));
                headerBadges.addEventListener("click", () => this.sortTable(3));
                headerAchievements.addEventListener("click", () => this.sortTable(4));
                headerTasks.addEventListener("click", () => this.sortTable(5));
                this.renderPlayerStatus();
            };
            this.renderPlayerStatus = () => {
                this.store.get("game").then(result=> console.log(result)).catch(error=> console.log(error));
                this.store.get("badges").then(result=> console.log(result)).catch(error=> console.log(error));
                this.store.get("achievements").then(result=> console.log(result)).catch(error=> console.log(error));
                this.store.get("tasksdone").then(result=> console.log(result)).catch(error=> console.log(error));
            };
            this.addGamme = game => {
              this.store.set({"key":"game", "value":Object.assign({},game,_)}).catch(error => console.log(error));
            };
            this.addBadges = badges => {
                this.store.set({"key":"badges", "value":Object.assign({},badges,_)}).catch(error => console.log(error));
            };
            this.addAchievements = achievements => {
                this.store.set({"key":"achievements", "value":Object.assign({},achievements,_)}).catch(error => console.log(error));
            };
            this.addTasksdone = tasksdone => {
                console.log({...tasksdone,..._});
                this.store.set({"key":"tasksdone", "value":Object.assign({},tasksdone,_)}).then(result => console.log(result)).catch(error => console.log(error));
            };
            this.sortTable = (n) => {
                let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
                table = document.getElementById("myTable");
                switching = true;
                //Set the sorting direction to ascending:
                dir = "asc";
                /*Make a loop that will continue until
                no switching has been done:*/
                while (switching) {
                    //start by saying: no switching is done:
                    switching = false;
                    rows = table.rows;
                    /*Loop through all table rows (except the
                    first, which contains table headers):*/
                    for (i = 1; i < (rows.length - 1); i++) {
                        //start by saying there should be no switching:
                        shouldSwitch = false;
                        /*Get the two elements you want to compare,
                        one from current row and one from the next:*/
                        x = rows[i].getElementsByTagName("TD")[n];
                        y = rows[i + 1].getElementsByTagName("TD")[n];
                        /*check if the two rows should switch place,
                        based on the direction, asc or desc:*/
                        if (dir === "asc") {
                            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                                //if so, mark as a switch and break the loop:
                                shouldSwitch= true;
                                break;
                            }
                        } else if (dir === "desc") {
                            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                                //if so, mark as a switch and break the loop:
                                shouldSwitch = true;
                                break;
                            }
                        }
                    }
                    if (shouldSwitch) {
                        /*If a switch has been marked, make the switch
                        and mark that a switch has been done:*/
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                        //Each time a switch is done, increase this count by 1:
                        switchcount ++;
                    } else {
                        /*If no switching has been done AND the direction is "asc",
                        set the direction to "desc" and run the while loop again.*/
                        if (switchcount === 0 && dir === "asc") {
                            dir = "desc";
                            switching = true;
                        }
                    }
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
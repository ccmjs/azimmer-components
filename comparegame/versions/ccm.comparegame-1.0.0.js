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

        name: 'comparegame',

        version: [ 1, 0, 0 ],

        ccm: 'https://ccmjs.github.io/ccm/versions/ccm-20.1.0.js',

        config: {
            "html": {
                "comparegame": {
                    "tag": "div",
                    "class": "compare-window",
                    "inner": [
                        {
                            "tag": "h1",
                            "inner": "Andere Spieler"
                        },
                        {
                            "tag": "table",
                            "class": "compare-table",
                            "id": "myTable",
                            "inner": {
                                "tag": "tr",
                                "inner": [
                                    {"tag": "th", "class": "header-name", "inner": "Name"},
                                    {"tag": "th", "class": "header-level", "inner": "Level"},
                                    {"tag": "th", "class": "header-badges", "inner": "Anzahl Abzeichen"},
                                    {"tag": "th", "class": "header-achievements", "inner": "Anzahl Errungenschaften"},
                                    {"tag": "th", "class": "header-tasks", "inner": "Anzahl abgeschlossener Aufgaben"}
                                ]
                            }
                        }
                    ]
                }
            },
            "css": ["ccm.load", "https://ccmjs.github.io/azimmer-components/comparegame/resources/default.css"],
            "store": ["ccm.store", {"name": "azimme2s_playerstatus", url: "wss://ccm2.inf.h-brs.de"}],
            "localStore": ["ccm.store", {"name": "player"}]
        },

        Instance: function () {
            const _ = {
                _: {
                    creator: "azimme2s",
                    realm: "hbrsinfkaul",
                    access: {
                        get: "all",
                        set: "all",
                        del: "creator"
                    }
                }
            };

            let player = {
                name: "",
                level: 0,
                exp: 0,
                badges: [],
                achievements: [],
                taskDone: []
            };
            let localPlayer;
            this.start = async () => {
                this.localStore.get("game").then(result => localPlayer = result.value).catch(error => console.log(error));
                this.ccm.helper.setContent(this.element, this.ccm.helper.html(this.html.comparegame));

                const headerName = this.element.querySelector(".header-name");
                const headerLevel = this.element.querySelector(".header-level");
                const headerBadges = this.element.querySelector(".header-badges");
                const headerAchievements = this.element.querySelector(".header-achievements");
                const headerTasks = this.element.querySelector(".header-tasks");
                headerName.addEventListener("click", () => this.sortTable(0));
                headerLevel.addEventListener("click", () => this.sortTable(1));
                headerBadges.addEventListener("click", () => this.sortTable(2));
                headerAchievements.addEventListener("click", () => this.sortTable(3));
                headerTasks.addEventListener("click", () => this.sortTable(4));
                this.renderPlayerStatus();
            };
            this.renderPlayerStatus = () => {
                //this.store.del(localPlayer.name);
                this.store.get().then(result => {
                    result.forEach(element => {
                        if (element.key === localPlayer.name) {
                            player = element.value;
                        }
                    });
                    result.forEach((element, index) => {
                        const tableRow = document.createElement("tr");

                        const tableElementName = document.createElement("td");
                        tableElementName.innerHTML = element.value.name;
                        const tableElementLevel = document.createElement("td");
                        tableElementLevel.innerHTML = element.value.level;
                        const tableElementBadge = document.createElement("td");
                        tableElementBadge.innerHTML = element.value.badges.length;
                        const tableElementAchievement = document.createElement("td");
                        tableElementAchievement.innerHTML = element.value.achievements.length;
                        const tableElementTask = document.createElement("td");
                        tableElementTask.innerHTML = element.value.taskDone.length;
                        tableRow.appendChild(tableElementName);
                        tableRow.appendChild(tableElementLevel);
                        tableRow.appendChild(tableElementBadge);
                        tableRow.appendChild(tableElementAchievement);
                        tableRow.appendChild(tableElementTask);

                        const table = this.element.querySelector(".compare-table");
                        table.appendChild(tableRow);
                    });
                }).catch(error => console.log(error));

            };
            this.addGame = game => {

                player.name = game.name;
                player.level = game.level;
                player.exp = game.exp;
                this.store.set({"key": localPlayer.name, "value": player}).catch(error => console.log(error));
            };
            this.addBadges = badges => {
                if (player.badges.length === 0) {
                    player.badges.push(badges);
                } else {
                    player.badges.forEach(element => {
                        if (element !== badges) {
                            player.badges.push(badges);
                        }
                    });
                }
                this.store.set({
                    "key": localPlayer.name,
                    "value": player
                }).catch(error => console.log(error));
            };
            this.addAchievements = achievements => {
                player.achievements.forEach(element => {
                    if (element !== achievements) {
                        player.achievements.push(achievements);
                    }
                });

                this.store.set({
                    "key": localPlayer.name,
                    "value": player
                }).catch(error => console.log(error));
            };
            this.addTasksdone = tasksdone => {
                if (player.taskDone.length === 0) {
                    player.taskDone.push(tasksdone);
                } else {
                    player.taskDone.forEach(element => {
                        if (element !== tasksdone) {
                            player.taskDone.push(tasksdone);
                        }
                    });
                }
                this.store.set({
                    "key": localPlayer.name,
                    "value": player
                }).then(result => console.log(result.value)).catch(error => console.log(error));
            };
            this.sortTable = (n) => {
                let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
                table = this.element.querySelector("#myTable");
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
                                shouldSwitch = true;
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
                        switchcount++;
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
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

        name: "storyboard",

        ccm: "https://ccmjs.github.io/ccm/ccm.js",

        config: {
            "html": {
                "storyboard": {
                    "tag": "div",
                    "class": "storyboard",
                    "inner": [
                        {"tag": "svg", "class": "svg"}
                    ]
                }
            },
            "css": ["ccm.load", "./resources/default.css"],
            "store": ["ccm.store", {"name": "player"}]
        },

        Instance: function () {


            this.start = async () => {
                this.ccm.helper.setContent(this.element, this.ccm.helper.html(this.html.storyboard));
                await this.renderMilestones();
                this.renderTasks();

            };
            this.renderMilestones = async () => {
                await this.store.get("game")
                    .then(result => {
                        this.player = result.value;
                    });
                const numberOfMilestones = this.milestones.length;
                let pathCoordinates = [];

                const storyboard = this.element.querySelector(".storyboard");
                const svg = this.element.querySelector(".svg");

                this.milestones.forEach((milestone, index) => {
                    const milestoneWrapper = document.createElement("span");
                    const milestoneTag = document.createElement("span");


                    milestoneWrapper.id = milestone.milestoneID;
                    milestoneWrapper.className = "milestone-wrapper";
                    if (milestone.conditions.level <= this.player.level) {
                        milestoneTag.style.backgroundColor = "black";
                        milestone.show = true;
                    }


                    if (index === 0) {
                        milestoneTag.className = "milestone-center";
                    }
                    else if (index % 2 === 0) {
                        milestoneTag.className = "milestone-top";
                    }
                    else if (index % 2 >= 0) {
                        milestoneTag.className = "milestone-bottom";
                    }
                    if (index === numberOfMilestones - 1) {
                        milestoneTag.className = "milestone-center";
                    }
                    milestoneWrapper.appendChild(milestoneTag);
                    storyboard.appendChild(milestoneWrapper);
                    console.log(milestoneTag.getBoundingClientRect());
                    pathCoordinates.push({
                        X: milestoneTag.offsetLeft + (milestoneTag.offsetWidth / 2),
                        Y: milestoneTag.offsetTop + (milestoneTag.offsetWidth / 2)
                    });
                });
                svg.appendChild(this.drawPath(pathCoordinates));
            };
            this.drawPath = (coordinates) => {
                const path = document.createElement("path");
                let pathString = "";
                coordinates.forEach((item, index) => {
                    if (index === 0) {
                        pathString += "M" + item.X + " " + item.Y + " ";
                    }
                    else {
                        pathString += "L" + item.X + " " + item.Y + " ";
                    }
                });
                path.setAttribute("d", pathString);
                path.setAttribute("stroke", "black");
                path.setAttribute("stroke-width","5");
                path.setAttribute("fill", "none");
                console.log(path);
                return path;
            };

            this.renderTasks = () => {
                this.tasks.forEach(task => {
                    const taskTag = document.createElement("span");
                    const milestoneWrapper = this.element.querySelector("#" + task.milestoneId);
                    taskTag.id = task.taskId;
                    if (task.challenge) {
                        taskTag.className = "challenge";
                        taskTag.style.top = Math.random() * milestoneWrapper.offsetHeight + "px";
                        taskTag.style.left = milestoneWrapper.offsetLeft + (Math.random() * milestoneWrapper.offsetWidth) + "px";
                    }
                    else {
                        taskTag.className = "task";
                        taskTag.style.top = Math.random() * milestoneWrapper.offsetHeight + "px";
                        taskTag.style.left = milestoneWrapper.offsetLeft + (Math.random() * milestoneWrapper.offsetWidth) + "px";
                    }
                    taskTag.addEventListener("click", () => {
                        const taskField = document.createElement("div");
                        taskField.className = "taskfield";

                        const testButton = document.createElement("button");
                        testButton.innerHTML = "Test Aufgaben button";
                        testButton.addEventListener("click", () => {
                            console.log("Hurray")
                        });
                        taskField.appendChild(testButton);
                        this.element.appendChild(taskField);
                    });
                    taskTag.innerHTML = task.task.title;

                    const result = this.milestones.find(milestone => milestone.milestoneID === task.milestoneId);
                    if (result.show === true) {
                        milestoneWrapper.appendChild(taskTag);
                    }


                })
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
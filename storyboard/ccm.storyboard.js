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
                    "inner": []
                }
            },
            "css": ["ccm.load", "./resources/default.css"],
            "store": ["ccm.store", {"name": "player"}]
        },

        Instance: function () {


            this.start = async () => {
                this.ccm.helper.setContent(this.element, this.ccm.helper.html(this.html.storyboard));
                this.renderMilestones();


            };
            this.renderMilestones = async () =>{
                await this.store.get("game")
                    .then(result => {
                        this.player = result.value;
                    });
                const numberOfMilestones = this.milestones.length;
                let left = 0;
                this.milestones.forEach((milestone, index) => {
                    const milestoneTag = document.createElement("span");
                    const storyboard = this.element.querySelector(".storyboard");

                    milestoneTag.className = "milestone";
                    milestoneTag.id = milestone.milestoneID;
                    if(milestone.conditions.level <= this.player.level){
                        milestoneTag.style.backgroundColor = "black";
                    }
                    left += (100/numberOfMilestones)/2;


                    if(index === 0){
                        milestoneTag.className = "milestone-center";
                    }
                    else if(index % 2 === 0) {
                        milestoneTag.className = "milestone-top";
                    }
                    else if(index % 2 >= 0) {
                        milestoneTag.className = "milestone-bottom";
                    }
                    if(index === numberOfMilestones-1) {
                        milestoneTag.className = "milestone-center";
                    }

                    storyboard.appendChild(milestoneTag);
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
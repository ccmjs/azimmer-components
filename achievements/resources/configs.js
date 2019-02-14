/**
 * @overview confirgurtion of the progress bar
 * @author Artur Zimmermann <artur.zimmermann@outlook.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files['configs.js'] = {

    "local": {

        "key": "local",
        "css.1": "resources/default.css",
    },

    "demo": {

        "key": "demo",
        "achievements": [
            {
                "icon": "./resources/podium.svg",
                "show": false,
                "title": "Level over 10!!!",
                "achievementid": "achievement1",
                "condition": {"level":10}
            }
        ],
        "testButton": true
    }
};
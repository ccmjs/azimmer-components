/**
 * @overview confirgurtion of the progress bar
 * @author Artur Zimmermann <artur.zimmermann@outlook.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files['configs.js'] = {

    "local": {

        "key": "local",
        "css.1": "resources/default.css",
        "progressbar": [
            "ccm.instance",
            "../progressbar/ccm.progressbar.js",
            {
                min: 0,
                max: 100,
                sign: 'exp',
                complete: 0,
                showText: true
            }
        ],
        "badges": [
            "ccm.instance",
            "../badges/ccm.badges.js",
            {"badges":[
                {
                    "icon": "../badges/resources/podium.svg",
                    "show": false,
                    "title": "Loop Master",
                    "badgesid": "badges1"
                }
            ]}
        ],
        "achievement": [
            "ccm.instance",
            "../achievements/ccm.achievements.js",
            {"achievements":[
                {
                    "icon": "../achievements/resources/podium.svg",
                    "show": false,
                    "title": "Level over 10!!!",
                    "achievementid": "achievement1",
                    "condition": {"level": 10}
                },
                {
                    "icon": "../achievements/resources/podium.svg",
                    "show": false,
                    "title": "Level over 20!!!",
                    "achievementid": "achievement2",
                    "condition": {"level": 20}
                }
            ]}
        ]

    },

    "demo": {

        "key": "demo",
    }
};
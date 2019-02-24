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
        "milestones": [
            {
                "conditions": {
                    "level": 1,
                    "tasksDone": []
                },
                "milestoneID":"ms1"
            },
            {
                "conditions": {
                    "level": 5,
                    "tasksDone": []
                },
                "milestoneID":"ms2"
            },
            {
                "conditions": {
                    "level": 10,
                    "tasksDone": []
                },
                "milestoneID":"ms3"
            },
            {
                "conditions": {
                    "level": 15,
                    "tasksDone": []
                },
                "milestoneID":"ms4"
            },
            {
                "conditions": {
                    "level": 20,
                    "tasksDone": []
                },
                "milestoneID":"ms5",
                "show":false
            },
        ]
    }
};
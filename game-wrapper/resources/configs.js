/**
 * @overview confirgurtion of the progress bar
 * @author Artur Zimmermann <artur.zimmermann@outlook.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files['configs.js'] = {

    "local": {

        "key": "local",
        "css.1": "./resources/default.css",
    },

    "demo": {
        "css.1": "./resources/default.css",
        "key": "demo",
        "playerStatus": [
            "ccm.instance",
            "../player-status/ccm.playerstatus.js",
            {
                "progressbar": [
                    "ccm.instance",
                    "../progressbar/ccm.progressbar.js",
                    {
                        "min": 0,
                        "max": 100,
                        "sign": 'exp',
                        "complete": 0,
                        "showText": true
                    }
                ],
                "badges": [
                    "ccm.instance",
                    "../badges/ccm.badges.js",
                    {
                        "badges": [
                            {
                                "icon": "../badges/resources/podium.svg",
                                "show": false,
                                "title": "Loop Master",
                                "badgesid": "badges1"
                            }
                        ]
                    }
                ],
                "achievement": [
                    "ccm.instance",
                    "../achievements/ccm.achievements.js",
                    {
                        "achievements": [
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
                        ]
                    }
                ]
            }
        ],
        "storyboard": [
            "ccm.instance",
            "../storyboard/ccm.storyboard.js",
            {
                "milestones": [
                    {
                        "conditions": {
                            "level": 1,
                            "tasksDone": []
                        },
                        "milestoneID": "ms1",
                        "show": false
                    },
                    {
                        "conditions": {
                            "level": 5,
                            "tasksDone": []
                        },
                        "milestoneID": "ms2",
                        "show": false
                    },
                    {
                        "conditions": {
                            "level": 10,
                            "tasksDone": []
                        },
                        "milestoneID": "ms3",
                        "show": false
                    },
                    {
                        "conditions": {
                            "level": 15,
                            "tasksDone": []
                        },
                        "milestoneID": "ms4",
                        "show": false
                    },
                    {
                        "conditions": {
                            "level": 30,
                            "tasksDone": []
                        },
                        "milestoneID": "ms5",
                        "show": false
                    },
                ],
                "tasks": [
                    {
                        "taskId": "task1",
                        "exp": 20,
                        "reward": "badges1",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": false,
                        "milestoneId": "ms1"
                    },
                    {
                        "taskId": "task2",
                        "exp": 20,
                        "reward": "badges1",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": false,
                        "milestoneId": "ms1"
                    },
                    {
                        "taskId": "task3",
                        "exp": 20,
                        "reward": "badges1",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": false,
                        "milestoneId": "ms1"
                    },
                    {
                        "taskId": "task4",
                        "exp": 20,
                        "reward": "badges5",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": false,
                        "milestoneId": "ms2"
                    },
                    {
                        "taskId": "task5",
                        "exp": 20,
                        "reward": "badges1",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": true,
                        "milestoneId": "ms2"
                    },
                    {
                        "taskId": "task6",
                        "exp": 20,
                        "reward": "badges1",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": false,
                        "milestoneId": "ms5"
                    }
                ]
            }
        ]
    }
};
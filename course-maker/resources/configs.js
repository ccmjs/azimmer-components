/**
 * @overview confirgurtion of the progress bar
 * @author Artur Zimmermann <artur.zimmermann@outlook.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files['configs.js'] = {

    "local": {

        "key": "local",
        "css.1": "../course-maker/resources/default.css",
        "comparegame": [
            "ccm.instance",
            "../comparegame/ccm.comparegame.js",
            {}
        ],
        "user": [
            "ccm.instance",
            "https://ccmjs.github.io/akless-components/user/versions/ccm.user-8.3.1.js", ["ccm.get", {
                "name": "user",
                "url": "https://ccm2.inf.h-brs.de"
            }, "1553463749330X8832057611960438"]
        ],
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
                        "exp": 200,
                        "reward": "badges1",
                        "task": {
                            "title": "task 1",
                            "task": [
                                "ccm.instance",
                                "https://ccmjs.github.io/akless-components/quiz/versions/ccm.quiz-4.0.0.js", ["ccm.get", {
                                    "name": "quiz",
                                    "url": "https://ccm2.inf.h-brs.de"
                                }, "1554676049039X26462158435937555"],
                            ],
                            "correct": 2
                        },
                        "taskDone": false,
                        "challenge": false,
                        "color": "green",
                        "milestoneId": "ms1"
                    },
                    {
                        "taskId": "task2",
                        "exp": 300,
                        "reward": "badges1",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": false,
                        "color": "green",
                        "milestoneId": "ms1"
                    },
                    {
                        "taskId": "task3",
                        "exp": 300,
                        "reward": "badges1",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": false,
                        "color": "green",
                        "milestoneId": "ms1"
                    },
                    {
                        "taskId": "task4",
                        "exp": 300,
                        "reward": "badges5",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": false,
                        "color": "green",
                        "milestoneId": "ms2"
                    },
                    {
                        "taskId": "task5",
                        "exp": 20,
                        "reward": "badges1",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": true,
                        "color": "red",
                        "milestoneId": "ms2"
                    },
                    {
                        "taskId": "task6",
                        "exp": 20,
                        "reward": "badges1",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": false,
                        "color": "green",
                        "milestoneId": "ms5"
                    }
                ]
            }
        ]
    },

    "demo": {

        "key": "demo",
        "comparegame": [
            "ccm.instance",
            "../comparegame/ccm.comparegame.js",
            {}
        ],
        "user": [
            "ccm.instance",
            "https://ccmjs.github.io/akless-components/user/versions/ccm.user-8.3.1.js", ["ccm.get", {
                "name": "user",
                "url": "https://ccm2.inf.h-brs.de"
            }, "1553463749330X8832057611960438"]
        ],
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
                        "exp": 80,
                        "reward": "badges1",
                        "task": {
                            "title": "task 1",
                            "task": [
                                "ccm.instance",
                                "https://ccmjs.github.io/akless-components/quiz/versions/ccm.quiz-4.0.0.js", ["ccm.get", {
                                    "name": "quiz",
                                    "url": "https://ccm2.inf.h-brs.de"
                                }, "1554676049039X26462158435937555"],
                            ],
                            "correct": 2
                        },
                        "taskDone": false,
                        "challenge": false,
                        "color": "green",
                        "milestoneId": "ms1"
                    },
                    {
                        "taskId": "task2",
                        "exp": 80,
                        "reward": "badges1",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": false,
                        "color": "green",
                        "milestoneId": "ms1"
                    },
                    {
                        "taskId": "task3",
                        "exp": 80,
                        "reward": "badges1",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": false,
                        "color": "green",
                        "milestoneId": "ms1"
                    },
                    {
                        "taskId": "task4",
                        "exp": 300,
                        "reward": "badges5",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": false,
                        "color": "green",
                        "milestoneId": "ms2"
                    },
                    {
                        "taskId": "task5",
                        "exp": 20,
                        "reward": "badges1",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": true,
                        "color": "red",
                        "milestoneId": "ms2"
                    },
                    {
                        "taskId": "task6",
                        "exp": 20,
                        "reward": "badges1",
                        "task": {"title": "Task 1", "task": "test"},
                        "taskDone": false,
                        "challenge": false,
                        "color": "green",
                        "milestoneId": "ms5"
                    }
                ]
            }
        ]
    }
};
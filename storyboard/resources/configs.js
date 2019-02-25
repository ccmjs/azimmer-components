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
                "milestoneID":"ms1",
                "show":false
            },
            {
                "conditions": {
                    "level": 5,
                    "tasksDone": []
                },
                "milestoneID":"ms2",
                "show":false
            },
            {
                "conditions": {
                    "level": 10,
                    "tasksDone": []
                },
                "milestoneID":"ms3",
                "show":false
            },
            {
                "conditions": {
                    "level": 15,
                    "tasksDone": []
                },
                "milestoneID":"ms4",
                "show":false
            },
            {
                "conditions": {
                    "level": 30,
                    "tasksDone": []
                },
                "milestoneID":"ms5",
                "show":false
            },
        ],
        "tasks": [
            {
                "taskId":"task1",
                "exp":20,
                "reward": "badges1",
                "task": {"title":"Task 1", "task":"test"},
                "taskDone":false,
                "challenge":false,
                "milestoneId": "ms1"
            },
            {
                "taskId":"task2",
                "exp":20,
                "reward": "badges1",
                "task": {"title":"Task 1", "task":"test"},
                "taskDone":false,
                "challenge":false,
                "milestoneId": "ms1"
            },
            {
                "taskId":"task3",
                "exp":20,
                "reward": "badges1",
                "task": {"title":"Task 1", "task":"test"},
                "taskDone":false,
                "challenge":false,
                "milestoneId": "ms1"
            },
            {
                "taskId":"task4",
                "exp":20,
                "reward": "badges5",
                "task": {"title":"Task 1", "task":"test"},
                "taskDone":false,
                "challenge":false,
                "milestoneId": "ms2"
            },
            {
                "taskId":"task5",
                "exp":20,
                "reward": "badges1",
                "task": {"title":"Task 1", "task":"test"},
                "taskDone":false,
                "challenge":true,
                "milestoneId": "ms2"
            },
            {
                "taskId":"task6",
                "exp":20,
                "reward": "badges1",
                "task": {"title":"Task 1", "task":"test"},
                "taskDone":false,
                "challenge":false,
                "milestoneId": "ms5"
            }
        ]
    }
};
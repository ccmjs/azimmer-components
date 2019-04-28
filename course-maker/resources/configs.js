/**
 * @overview confirgurtion of the progress bar
 * @author Artur Zimmermann <artur.zimmermann@outlook.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files['configs.js'] = {

    "local": {

        "key": "local",
        "css.1": "../course-maker/resources/default.css",
        "comparegame":[
            "ccm.instance",
            "https://ccmjs.github.io/azimmer-components/comparegame/versions/ccm.comparegame-1.0.0.js",
            [
                "ccm.get",
                {
                    "name":"comparegame",
                    "url":"https://ccm2.inf.h-brs.de"
                },
                "1556458215033X8312817882420207"
            ]
        ],
        "user":[
            "ccm.instance",
            "https://ccmjs.github.io/akless-components/user/versions/ccm.user-8.3.1.js",
            [
                "ccm.get",
                {
                    "name":"user",
                    "url":"https://ccm2.inf.h-brs.de"
                },
                "1553463749330X8832057611960438"
            ]
        ],
        "progressbar":[
            "ccm.instance",
            "https://ccmjs.github.io/azimmer-components/progressbar/versions/ccm.progressbar-1.0.3.js",
            [
                "ccm.get",
                {
                    "name":"progressbar",
                    "url":"https://ccm2.inf.h-brs.de"
                },
                "1556460441633X5283624043550244"
            ]
        ],
        "badges":[
            "ccm.instance",
            "../badges/ccm.badges.js",
            {
                "badges":[
                    {
                        "icon":"https://img.icons8.com/color/48/000000/yoda.png",
                        "show":false,
                        "title":"Plagiarism, You understand",
                        "badgesid":"badges1"
                    },
                    {
                        "icon":"https://img.icons8.com/dusk/64/000000/copyright.png",
                        "show":false,
                        "title":"Copyright",
                        "badgesid":"badges2"
                    },
                    {
                        "icon":"https://img.icons8.com/dusk/64/000000/dictionary.png",
                        "show":false,
                        "title":"You got Synonyms!",
                        "badgesid":"badges3"
                    },
                    {
                        "icon":"https://img.icons8.com/dusk/64/000000/graduation-cap.png",
                        "show":false,
                        "title":"You write it Harvard Style!",
                        "badgesid":"badges4"
                    },
                    {
                        "icon":"https://img.icons8.com/dusk/64/000000/business.png",
                        "show":false,
                        "title":"You know the Business Terms",
                        "badgesid":"badges5"
                    }
                ]
            }
        ],
        "achievement":[
            "ccm.instance",
            "../achievements/ccm.achievements.js",
            {
                "achievements":[
                    {
                        "icon":"https://img.icons8.com/dusk/64/000000/prize.png",
                        "show":false,
                        "title":"You've achieved the last Level",
                        "achievementid":"achievement1",
                        "condition":{
                            "level":5
                        }
                    },
                    {
                        "icon":"https://img.icons8.com/dusk/64/000000/prize.png",
                        "show":false,
                        "title":"You are half way throug",
                        "achievementid":"achievement2",
                        "condition":{
                            "tasksdone":7
                        }
                    }
                ]
            }
        ],
        "storyboard":[
            "ccm.instance",
            "../storyboard/ccm.storyboard.js",
            {
                "legend":[
                    {
                        "color":"green",
                        "difficulty":"mild"
                    },
                    {
                        "color":"yellow",
                        "difficulty":"medium"
                    },
                    {
                        "color":"red",
                        "difficulty":"hot"
                    }
                ],
                "milestones":[
                    {
                        "conditions":{
                            "level":1,
                            "tasksDone":[

                            ]
                        },
                        "milestoneID":"ms1",
                        "show":false
                    },
                    {
                        "conditions":{
                            "level":2,
                            "tasksDone":[

                            ]
                        },
                        "milestoneID":"ms2",
                        "show":false
                    },
                    {
                        "conditions":{
                            "level":3,
                            "tasksDone":[

                            ]
                        },
                        "milestoneID":"ms3",
                        "show":false
                    },
                    {
                        "conditions":{
                            "level":5,
                            "tasksDone":[

                            ]
                        },
                        "milestoneID":"ms4",
                        "show":false
                    }
                ],
                "tasks":[
                    {
                        "taskId":"task1",
                        "exp":20,
                        "task":{
                            "title":"Orientation Synonyms for Business",
                            "task":[
                                "ccm.instance",
                                "https://ccmjs.github.io/akless-components/quiz/versions/ccm.quiz-4.0.0.js",
                                [
                                    "ccm.get",
                                    {
                                        "name":"quiz",
                                        "url":"https://ccm2.inf.h-brs.de"
                                    },
                                    "1556396234646X10217328111669488"
                                ]
                            ],
                            "correct":4
                        },
                        "taskDone":false,
                        "color":"green",
                        "milestoneId":"ms1"
                    },
                    {
                        "taskId":"task2",
                        "exp":60,
                        "reward":"badges1",
                        "task":{
                            "title":"Orientation Plagiarism",
                            "task":[
                                "ccm.instance",
                                "https://ccmjs.github.io/akless-components/quiz/versions/ccm.quiz-4.0.0.js",
                                [
                                    "ccm.get",
                                    {
                                        "name":"quiz",
                                        "url":"https://ccm2.inf.h-brs.de"
                                    },
                                    "1556397545116X1106977153682338"
                                ]
                            ],
                            "correct":6
                        },
                        "taskDone":false,
                        "color":"red",
                        "milestoneId":"ms1"
                    },
                    {
                        "taskId":"task3",
                        "exp":60,
                        "reward":"badges2",
                        "task":{
                            "title":"Copyright Quiz",
                            "task":[
                                "ccm.instance",
                                "https://ccmjs.github.io/akless-components/quiz/versions/ccm.quiz-4.0.0.js",
                                [
                                    "ccm.get",
                                    {
                                        "name":"ws_quiz",
                                        "url":"https://ccm2.inf.h-brs.de"
                                    },
                                    "1551102800727X03369537420166302"
                                ]
                            ],
                            "correct":4
                        },
                        "taskDone":false,
                        "color":"red",
                        "milestoneId":"ms2"
                    },
                    {
                        "taskId":"task4",
                        "exp":20,
                        "task":{
                            "title":"Prepositions",
                            "task":[
                                "ccm.instance",
                                "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-5.0.3.js",
                                [
                                    "ccm.get",
                                    {
                                        "name":"ws_cloze",
                                        "url":"https://ccm2.inf.h-brs.de"
                                    },
                                    "1532619098174X18358119379539728"
                                ]
                            ],
                            "correct":4
                        },
                        "taskDone":false,
                        "color":"green",
                        "milestoneId":"ms1"
                    },
                    {
                        "taskId":"task5",
                        "exp":40,
                        "task":{
                            "title":"Environmental Impacts",
                            "task":[
                                "ccm.instance",
                                "https://ccmjs.github.io/akless-components/quiz/versions/ccm.quiz-4.0.0.js",
                                [
                                    "ccm.get",
                                    {
                                        "name":"ws_quiz",
                                        "url":"https://ccm2.inf.h-brs.de"
                                    },
                                    "1551866884232X5944570782214909"
                                ]
                            ],
                            "correct":4
                        },
                        "taskDone":false,
                        "color":"yellow",
                        "milestoneId":"ms1"
                    },
                    {
                        "taskId":"task6",
                        "exp":40,
                        "task":{
                            "title":"Sustainable Development Goals",
                            "task":[
                                "ccm.instance",
                                "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-5.0.3.js",
                                [
                                    "ccm.get",
                                    {
                                        "name":"ws_cloze",
                                        "url":"https://ccm2.inf.h-brs.de"
                                    },
                                    "1518692517201X6052264284794366"
                                ]
                            ],
                            "correct":4
                        },
                        "taskDone":false,
                        "color":"yellow",
                        "milestoneId":"ms2"
                    },
                    {
                        "taskId":"task7",
                        "exp":40,
                        "task":{
                            "title":"Department and Their Functions",
                            "task":[
                                "ccm.instance",
                                "https://ccmjs.github.io/akless-components/quiz/versions/ccm.quiz-4.0.0.js",
                                [
                                    "ccm.get",
                                    {
                                        "name":"ws_quiz",
                                        "url":"https://ccm2.inf.h-brs.de"
                                    },
                                    "1551176559802X7680942826300261"
                                ]
                            ],
                            "correct":10
                        },
                        "taskDone":false,
                        "color":"yellow",
                        "milestoneId":"ms2"
                    },
                    {
                        "taskId":"task8",
                        "exp":40,
                        "task":{
                            "title":"Academic Writing - Writing a Paper",
                            "task":[
                                "ccm.instance",
                                "https://ccmjs.github.io/akless-components/quick_decide/versions/ccm.quick_decide-1.4.0.js",
                                [
                                    "ccm.get",
                                    {
                                        "name":"ws_quiz",
                                        "url":"https://ccm2.inf.h-brs.de"
                                    },
                                    "1551878888102X5009422687917278"
                                ]
                            ],
                            "correct":4
                        },
                        "taskDone":false,
                        "color":"yellow",
                        "milestoneId":"ms2"
                    },
                    {
                        "taskId":"task9",
                        "exp":40,
                        "task":{
                            "title":"Academic Writing - Elements of a report",
                            "task":[
                                "ccm.instance",
                                "https://ccmjs.github.io/akless-components/quick_decide/versions/ccm.quick_decide-1.4.0.js",
                                [
                                    "ccm.get",
                                    {
                                        "name":"ws_quiz",
                                        "url":"https://ccm2.inf.h-brs.de"
                                    },
                                    "1551880826597X5991063326769972"
                                ]
                            ],
                            "correct":5
                        },
                        "taskDone":false,
                        "color":"yellow",
                        "milestoneId":"ms3"
                    },
                    {
                        "taskId":"task10",
                        "exp":60,
                        "reward":"badges3",
                        "task":{
                            "title":"Academic Writing - Synonyms 1",
                            "task":[
                                "ccm.instance",
                                "https://ccmjs.github.io/akless-components/quick_decide/versions/ccm.quick_decide-1.4.0.js",
                                [
                                    "ccm.get",
                                    {
                                        "name":"ws_quick_decide",
                                        "url":"https://ccm2.inf.h-brs.de"
                                    },
                                    "1551882889279X5113713024043782"
                                ]
                            ],
                            "correct":6
                        },
                        "taskDone":false,
                        "color":"red",
                        "milestoneId":"ms2"
                    },
                    {
                        "taskId":"task11",
                        "exp":60,
                        "reward":"badges4",
                        "task":{
                            "title":"Harvard Style Guide",
                            "task":[
                                "ccm.instance",
                                "https://ccmjs.github.io/akless-components/quiz/versions/ccm.quiz-4.0.0.js",
                                [
                                    "ccm.get",
                                    {
                                        "name":"ws_quiz",
                                        "url":"https://ccm2.inf.h-brs.de"
                                    },
                                    "1551954507918X022385292349272223"
                                ]
                            ],
                            "correct":9
                        },
                        "taskDone":false,
                        "color":"red",
                        "milestoneId":"ms3"
                    },
                    {
                        "taskId":"task12",
                        "exp":40,
                        "task":{
                            "title":"Academic Writing - Proofreading",
                            "task":[
                                "ccm.instance",
                                "https://ccmjs.github.io/tkless-components/mark_words/versions/ccm.mark_words-3.2.0.js",
                                [
                                    "ccm.get",
                                    {
                                        "name":"ws_mark_words",
                                        "url":"https://ccm2.inf.h-brs.de"
                                    },
                                    "1552295520898X4332962398806641"
                                ]
                            ],
                            "correct":4
                        },
                        "taskDone":false,
                        "color":"yellow",
                        "milestoneId":"ms3"
                    },
                    {
                        "taskId":"task15",
                        "exp":40,
                        "task":{
                            "title":"Differentiating Adverbs and Adjectives",
                            "task":[
                                "ccm.instance",
                                "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-5.0.3.js",
                                [
                                    "ccm.get",
                                    {
                                        "name":"ws_cloze",
                                        "url":"https://ccm2.inf.h-brs.de"
                                    },
                                    "1532002466475X8703464196203523"
                                ]
                            ],
                            "correct":4
                        },
                        "taskDone":false,
                        "color":"yellow",
                        "milestoneId":"ms3"
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
                "legend": [
                    {
                        "color": "red",
                        "difficulty": "hot"
                    },
                    {
                        "color": "green",
                        "difficulty": "mild"
                    },
                    {
                        "color": "yellow",
                        "difficulty": "medium"
                    }
                ],
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
/**
 * @overview confirgurtion of the progress bar
 * @author Artur Zimmermann <artur.zimmermann@outlook.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files['configs.js'] = {

    "local": {

        "key": "local",
        "css.1": "../storyboard/resources/default.css",
        "legend": [
            {
                "color":"red",
                "difficulty":"hot"
            },
            {
                "color":"green",
                "difficulty":"mild"
            },
            {
                "color":"yellow",
                "difficulty":"medium"
            }
        ],
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
                "color": "green",
                "milestoneId": "ms1"
            },
            {
                "taskId":"task2",
                "exp":20,
                "reward": "badges1",
                "task": {"title":"Task 1", "task":"test"},
                "taskDone":false,
                "challenge":false,
                "color": "green",
                "milestoneId": "ms1"
            },
            {
                "taskId":"task3",
                "exp":20,
                "reward": "badges1",
                "task": {"title":"Task 1", "task":"test"},
                "taskDone":false,
                "challenge":false,
                "color": "green",
                "milestoneId": "ms1"
            },
            {
                "taskId":"task4",
                "exp":20,
                "reward": "badges5",
                "task": {"title":"Task 1", "task":"test"},
                "taskDone":false,
                "challenge":false,
                "color": "green",
                "milestoneId": "ms2"
            },
            {
                "taskId":"task5",
                "exp":20,
                "reward": "badges1",
                "task": {"title":"Task 1", "task":"test"},
                "taskDone":false,
                "challenge":true,
                "color": "red",
                "milestoneId": "ms2"
            },
            {
                "taskId":"task6",
                "exp":20,
                "reward": "badges1",
                "task": {"title":"Task 1", "task":"test"},
                "taskDone":false,
                "challenge":false,
                "color": "green",
                "milestoneId": "ms5"
            }
        ]
    },

    "demo": {
        "key": "demo",
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
};
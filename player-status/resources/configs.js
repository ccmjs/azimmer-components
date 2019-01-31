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
        ]

    },

    "demo": {

        "key": "demo",
    }
};
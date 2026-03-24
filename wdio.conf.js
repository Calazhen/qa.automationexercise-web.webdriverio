exports.config = {
    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [],

    maxInstances: 5,

    baseUrl: 'https://automationexercise.com/',

    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--headless=new',
                    '--disable-gpu',
                    '--no-sandbox',
                    '--disable-dev-shm-usage'
                ],
                prefs: {
                    'credentials_enable_service': false,
                    'profile.password_manager_enabled': false,
                    'autofill.profile_enabled': false,
                    'autofill.credit_card_enabled': false
                }
            }
        }
    ],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // Suites configuradas
    suites: {
        smoke: [
            './test/specs/smoke/*.js'
        ],
        regression: [
            './test/specs/regression/*.js'
        ],
        features: [
            './test/specs/features/registrarUmUsuario.test.js'
        ],
        api: [
            './test/specs/api/*.js'
        ]
    },

    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    }
}
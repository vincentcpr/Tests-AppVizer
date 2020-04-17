// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
  
var {After, Before} = require('cucumber');


exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout:60000,
  allScriptsTimeout: 500000,
  ignoreUncaughtExceptions:true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox']
    }
  },
  baseUrl: 'http://localhost:4200/',

  specs: [
    './e2e/features/*.feature'
  ],

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: ['./e2e/steps/**/*.ts'],
    strict: true,
    format: [
      'json:reports/summary.json'
    ],
    dryRun: false,
    compiler: []
  },

  onPrepare() {
    require('pretty')
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

  },
  onComplete() {
    var reporter = require('cucumber-html-reporter');

    var options = {
      theme: 'bootstrap',
      jsonFile: 'reports/summary.json',
      output: 'reports/cucumber_report.html',
      reportSuiteAsScenarios: true,
      getPageTimeout:60000,
      ignoreUncaughtExceptions: true,
      allScriptsTimeout:500000,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        "App Version": "0.0.1",
        "Test Environment": "STAGING",
        "Browser": "Chrome  81",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Local"
      }
    };

    reporter.generate(options);
  }
}

After(async function (scenario) {
  var defer= protractor.promise.defer()
  try {
    if (scenario.failureException) {
      defer.fulfill(true)
    }
    else {
      defer.fulfill(true)
    }
    return defer.promise
  } catch (error) {
    console.log("catching error")
  }
});



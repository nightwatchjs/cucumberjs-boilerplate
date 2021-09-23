# cucumber-nightwatch-boilerplate

[Nigthwatch](https://nightwatchjs.org) is a popular open-source test automation framework.
Cucumber is the one of the popular tools that supports Behaviour Driven Development (BDD). The Cucumber built-in plugin of Nightwatch is bringing the ease of writing test scripts to BDD. 

### Overview
The test case in Cucumber are written as scenarios in simple language which then maps to code. This project shows some examples of Nightwatch end-to-end test written using Cucumber. 

### Setup 
- To run the tests in the repository
- clone the repository: `git clone https://github.com/gravityvi/cucumber-nightwatch-boilerplate.git`
- install the required dependencies `npm install`
- run the tests `npm test`


### Configuration 
Most of the cucumber options are picked through nightwatch config in order to decrease the effort while writing scripts. 
- feature path can be given as a string or an Array in the test runner options. All formats of feature path mentioned in [Cucumber CLI](https://github.com/cucumber/cucumber-js/blob/main/docs/cli.md#running-specific-features) are supported.
- parallel option can be also supplied as a test-runner option for cucumber. (no need to specify `thread_workers`)
- Example:
```
 test_runner: {
    type: 'cucumber',
    options: {
      feature_path: ['examples/cucumberJs/*/*.feature', 'examples/cucumberJs/features/*.feature'],
      parallel: 2
    }
  },
```




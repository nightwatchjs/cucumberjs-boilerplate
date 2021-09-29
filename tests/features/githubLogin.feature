@github
Feature: Github test
    I want to test if the github.com failed login screen displays an error

    Scenario: login with fake credentials
        Given I open the url "https://github.com/login"
        And   I clear the inputfield "#login_field"
        When  I add "nightwatch" to the inputfield "#login_field"
        And   I clear the inputfield "#password"
        And   I add "4444" to the inputfield "#password"
        And   I click on the button "[value='Sign in']"
        Then  I expect that element "#js-flash-container .flash-error" has the class "displayed"


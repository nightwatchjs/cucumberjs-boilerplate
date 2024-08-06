Feature: Github test
    As a Developer in Test
    I want to search for nightwatch repository
    So that I can use it in my future tests

Scenario: open URL
    Given I open the url "https://github.com/"
    Then  I expect the url to contain "github.com"
    And   I expect that the title is GitHub: Let’s build from here · GitHub"

@githubSearch
Scenario: search for nightwatch repository
    Given I open the url "https://github.com/search"
    And   I clear the inputfield "[placeholder='Search GitHub']"
    And   I add "nightwatch" to the inputfield "[placeholder='Search GitHub']"
    When  I press "ENTER"
    Then  I expect that container "div[data-testid='results-list']:first-child" contains the text "end-to-end testing framework written in Node.js"

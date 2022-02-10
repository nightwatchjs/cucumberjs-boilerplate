Feature: Github test
    As a Developer in Test
    I want to search for nightwatch repository
    So that I can use it in my future tests

Scenario: open URL
    Given I open the url "https://github.com/"
    Then  I expect the url to contain "github.com"
    And   I expect that the title is "GitHub: Where the world builds software · GitHub"

Scenario: search for nightwatch repository
    Given I open the url "https://github.com/search"
    And   I clear the inputfield "[placeholder='Search GitHub']"
    And   I add "nightwatch" to the inputfield "[placeholder='Search GitHub']"
    When  I press "ENTER"
    Then  I expect that element ".header-search-input" contains the text "nightwatch"
    And   I expect that container ".repo-list-item:first-child" contains the text "End-to-end testing framework written in Node.js and using the W3C Webdriver API"

Feature: Google Search
Background: Background name
  Given I open the url "https://google.com"
  Then I expect that the title is "Google"

@google
Scenario: Searching Google
  When I set "nightwatchjs" to the inputfield "input[name=q]"
  And I press "ENTER"
  Then I expect that container "#main" contains the text "Nightwatch.js"


Feature: DuckDuckGo Search
    I want to search for nightwatch on DuckDuckGo and check if the results contain Nightwatch.js

    
Background: Background name
  Given I open the url "https://duckduckgo.com"
  Then I expect that the title is "DuckDuckGo — Privacy, simplified."

@duckduckgo
Scenario: Searching DuckDuckGo
  When I set "nightwatchjs" to the inputfield "#search_form_input_homepage"
  And I press "ENTER"
  Then I expect that container "#links" contains the text "Nightwatch.js"


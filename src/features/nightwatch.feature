Feature: Nightwatch website

@nightwatch
Scenario: Check if the latest version of nightwatch
    Given I navigate to nightwatch home page
    And Version dropdown is visible
    Then The latest verison of nightwatch should be "1.7.10"
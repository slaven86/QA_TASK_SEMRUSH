Feature: Search for "semrush ai" on ecosia.org

  Scenario: Search in all categories
    Given I navigate to ecosia.org
    When I enter "semrush ai" in the search bar
    And I click the search button
    And I select the "All" category
    Then I should see search results containing "semrush ai"

  Scenario: Search in videos category
    Given I navigate to ecosia.org
    When I enter "semrush ai" in the search bar
    And I click the search button
    And I select the "Videos" category
    Then I should see only video results related to "semrush ai"

  Scenario: Search in images category
    Given I navigate to ecosia.org
    When I enter "semrush ai" in the search bar
    And I click the search button
    And I select the "Images" category
    Then I should see only image results related to "semrush ai"

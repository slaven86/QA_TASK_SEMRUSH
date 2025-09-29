Feature: Search for "prowly ai tools" images on ecosia.org

  Scenario: Search images by region
    Given I open ecosia.org
    When I search for "prowly ai tools"
    And I filter image results by "Region"
    Then I should see only images related with filtered region

  Scenario: Search images by type
    Given I open ecosia.org
    When I search for "prowly ai tools"
    And I filter image results by "GIF" "Type"
    Then I should see only GIF images

  Scenario: Search images by color
    Given I open ecosia.org
    When I search for "prowly ai tools"
    And I filter image results by "Red" "Color"
    Then I should see only images that contain the color "Red"

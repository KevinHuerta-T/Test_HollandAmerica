Feature: Holland America Test

  Scenario Outline: As a user, I can search for a cruise and see the intinerary

    Given I m on the Home Page of Holland America
    When I select a destination and date for the cruise
    Then I view the intinerary of the cruise to know more
    Then View the activities for one day

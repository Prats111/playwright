Feature: ECommerce Validation

  Scenario: Placing an order
    Given I login to ECommerce Application with "rahulshettyacademy" and "learning"
    When I add "IPhone X" to the cart
    And I click checkout button 
    And I select country "ind" and select "India" and click on purchase button
    Then Verify the success page should display

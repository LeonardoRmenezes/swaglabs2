Feature: Check Price List - swagLabs

    Scenario Outline: Check Price List
        Given access website 
        When fill login <username>
        And check the name item <name>
        And check the description item <description>
        And check the price item <price>
        Then confirmed order message should be displayed

        Examples:
            | username      | name                              | description                                                                                                                                                    | price  |
            | standard_user | Sauce Labs Backpack               | carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.                         | $29.99 |
            | standard_user | Sauce Labs Bike Light             | A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.|  $9.99 |
            | standard_user | Sauce Labs Bolt T-Shirt           || $15.99 |
            | standard_user | Sauce Labs Fleece Jacket          || $49.99 |
            | standard_user | Sauce Labs Onesie                 ||  $7.99 |
            | standard_user | Test.allTheThings() T-Shirt (Red) || $15.99 |

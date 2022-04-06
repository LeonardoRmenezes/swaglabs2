Feature: Make Purshase

    Background: Logged in site
        Given access website

    Scenario Outline: Add item to cart
        When add item with description <description>
        And click in add to cart
        And item value should be displayed <price>
        And click in checkout
        And fill in first name
        And fill in last name
        And fill in postal code
        And click in continue
        And check purchase values <price>
        And click in finish
        Then confirmed order message should be displayed

        Examples:
            | description              | price |
            | sauce-labs-fleece-jacket | 49.99 |

    Scenario Outline: Remove item from cart
        When add item with description <description>
        And click in add to cart
        And click in remove to cart <description>
        Then the checkout button will be hidden

        Examples:
            | description              | price |
            | sauce-labs-backpack      | 29.99 |

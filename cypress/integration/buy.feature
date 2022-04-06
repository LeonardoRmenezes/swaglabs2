Feature: Buy - swagLabs @buy

    Background: Make Buy name
        Given access site 
        #acessa e faz login

    Scenario: Add items to cart @buy_add
        And add item
        And click on shopping cart
        And click on checkout
        And fill in first name
        And fill in last name
        And fill in zip/postal code
        And click on continue
        And click on finish
        Then confirmed order message should be displayed.



#: Sauce Labs Backpack



    Scenario Outline: Add items to cart
        And add item: <describe> to cart
        And click 
        Then resultado

        Examples:
            | describe                | senha        |
            | sauce-labs-bike-light   | secret_sauce |
            | locked_out_user         | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |

    Scenario Outline: Add items to cart
        Given access site
        And log in
        And informar senha <senha>
        And clicar no botão login
        Then resultado

        Examples:
            | login                   | senha        |
            | standard_user           | secret_sauce |
            | locked_out_user         | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |





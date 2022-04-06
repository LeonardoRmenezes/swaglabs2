
Feature: CheckInventory - swagLabs

    Scenario Outline: CheckInventory
        Given access website with <username>
        When check inventory - item id: <id>
        And see model <model>
        And see price <price>
        And see img <img>
        
        Examples:
            | username      | id |           model          | price |                   img                           |  
            | standard_user | 0  |   Sauce Labs Bike Light  | $9.99 | /static/media/bike-light-1200x1500.a0c9caae.jpg
         #   | standard_user | 1  |
         #   | standard_user | 2  |
         #   | standard_user | 3  |
         #   | standard_user | 4  |
         #   | standard_user | 5  |


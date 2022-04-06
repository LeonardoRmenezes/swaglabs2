Feature: Login

    Scenario Outline: LoginTest
        Given access website with user:<username> password:<password>
        Then should display <result>

        Examples:
            | username                | password  |            result               |
            | standard_user           |           |       website main screen       |
            | standard_user           |  123XPTO  | username and password incorrect | 
            | locked_out_user         |           |       blocked user message      |
            | problem_user            |           |       website main screen       |
            | performance_glitch_user |           |       website main screen       |
            |                         |           |       username is required      |

#Epic sadface: Sorry, this user has been locked out.
#Epic sadface: Username and password do not match any user in this service

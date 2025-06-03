Feature: As a Customer

  I should be able to login into Orange HRM application

  Scenario Outline: Login to Orange HRM application with users @Smoke

    Given user launches the Orange HRM application site
    When user provides "<username>" and "<password>" to login into application
    Then user click Logout button

    # title-format: Login to Orange HRM application with user- <username>
    Examples:
    | username | password       |
    | admin    | Playwright     |
    | Admin    | Bitnami.12345  |


  Scenario: Navigate to PIM page @Regression

    Given user launches the Orange HRM application site
    When user provides "Admin" and "Bitnami.12345" to login into application
    When user should able to navigate to PIM page
    Then user click Logout button

  Scenario: Axe scan on Login Page

    Given user launches the Orange HRM application site
    When user checks accessibility check on the page

  Scenario: Axe scan on dashboard Page

    Given user launches the Orange HRM application site
    When user provides "Admin" and "Bitnami.12345" to login into application
    When user checks accessibility check on the page
    Then user click Logout button
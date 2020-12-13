Feature: Login for LeafTaps

Scenario Outline: Login Positive Flow

Given Launch the browser
And Maximize the browser
And Set the timeouts
And Enter the username as "<username>"
And Enter the password as "<password>"
When Clicking on the login button
Then Verify login successful

Examples:
    | username | password |
    | demosalesmanager | crmsfa |
    | democsr | crmsfa |
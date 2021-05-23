# Lab8_Starter

Names: Edward Yang and Elisa Brooks

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

- Answer: A (1) Within a Github action that runs whenever code is pushed

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

- No, The "message" feature seems to be comprised of multiple smaller parts that interact with each other (user write, user send, user receive). Therefore, unit testing would not be optimal in this situation since it is used for testing indiviual parts and not how parts interact with each other.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

- Yes, we can use a unit test to test the "max message length" feature beause it is a simple component that simply prevents the user from typing more than 80 characters. 

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

- Doing this will run the tests without a browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

- We would add ```await page.click('header > img');``` after ```await page.waitForTimeout(500);```.
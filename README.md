# Playwright-BDD with TypeScript

This project shows an automated testing framework using Playwright with TypeScript, Cucumber and Playwright BDD package. It also implements Allure integration with Playwright Test framework.


## Setup:

1. Clone the repository in your local machine.
2. Open the folder in VS Code
3. Open a terminal window
4. Run the command 'npm install'
5. Run the command 'npx playwright install chromium' (to install chromium browser)
5. Run the command 'npm run feature-gen'
6. Run the tests using the commang 'npm run test'

-> Installing Cucumber (https://github.com/cucumber/cucumber-js) 
   npm install @cucumber/cucumber

-> Install Playwright-bdd package 
   npm install playwright-bdd

## Playwright_BDD
Playwright BDD is the cucumber package that provides support by converting the cucumber feature files into playwright runner tests spec files. This means the use of built in Playwright features is not lost. Read more about it on (https://vitalets.github.io/playwright-bdd/#/).

-> Installing Cucumber (https://github.com/cucumber/cucumber-js) 
   npm install @cucumber/cucumber

-> Install Playwright-bdd package 
   npm install playwright-bdd

## Steps to configure Allure report

1. Open the terminal Visual studio code.  
2. Install the allure-playwright node package. To install, use the command: npm i -D @playwright/test allure-playwright
3. Install the allure-commandline node package. To install, use the command: npm install -D allure-commandline
 

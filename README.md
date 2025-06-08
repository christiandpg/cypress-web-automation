# 🧪 Cypress Web & API tests
[![CI](https://github.com/christiandpg/cypress-web-automation/actions/workflows/cypress.yml/badge.svg?branch=main)](https://github.com/christiandpg/cypress-web-automation/actions/workflows/cypress.yml)
## 🔍 Overview

This project contains automated tests for the SaudeDemo checkout functionality using Cypress. The adds a random product to the cart and performs the checkout, ensuring the application behaves as expected when interacting with the UI elements. There is also an additional API test that performs a GET request and checks information in the response.

## 📦 Features

- **Add to Cart Functionality**: Tests the capability of SauceDemo to add a product to the cart.
- **Complete the Checkout Functionality**: Validates the checkout works as expected.

## 🛠️ Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Cypress](https://www.cypress.io/) (can be installed via npm)

## 🚀 Installation

1. Clone the repository:

   ```
   git clone https://github.com/christiandpg/cypress-web-automation.git
   cd cypress-web-automation
2. Install dependencies:

    ```
    npm install
## 🏃 Running the Tests

To open the Cypress Test Runner, use the following command: `npx cypress open`

This will launch the Cypress GUI where you can run your tests interactively.

To run tests headlessly in the terminal, use: `npx cypress run`

![Cypress Tests](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTNtMm05NzU1b2tqMzgydTB2eWlpZWdkc3l0c2xjdmZlYXpocnB4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KNz7hiGVf7aEt9XNK5/giphy.gif)

## 🔄 Running the Tests in Github Actions

This repository includes a GitHub Actions workflow that allows you to run tests conveniently. You can select which branch to run the tests from, ensuring flexibility in your development process. Simply navigate to the Actions tab in the GitHub interface, choose your desired branch, and trigger the workflow to execute the tests. This setup helps maintain code quality and integrates seamlessly into your CI/CD pipeline.

## 🗂️ Test Structure

The tests are organized in the `cypress/e2e` directory. Each test suite is defined in a separate file for better organization and maintainability.

### Example Test Cases
1. SauceDemo UI Test
- Perform login and verifies that adding a product to the cart behaves as expected.
- Checks that the user can finalize the checkout flow.


2. DuckDuckGo API Test
- Performs a GET request and prints the Icon URL if it is present in the response.

## 🧑‍💻 Custom Commands

Custom commands are defined in `cypress/support/commands.js`. This allows for reusable API requests and simplifies test code.


## 🛡️ License

This project is licensed under the MIT License. See the LICENSE file for details.

## 📧 Contact

For any questions or feedback, feel free to reach out:

- Christian Gonçalves
- christiangoncalves@outlook.com

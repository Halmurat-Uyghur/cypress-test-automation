[![Cypress Tests](https://github.com/Halmurat-Uyghur/cypress-test-automation/actions/workflows/Test-Scheduler.yaml/badge.svg?branch=main)](https://github.com/Halmurat-Uyghur/cypress-test-automation/actions/workflows/Test-Scheduler.yaml)

# Cypress Test Automation

This project is a test automation suite using Cypress.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository
```bash
git clone https://github.com/Halmurat-Tahir/cypress-test-automation.git
```
2. Navigate to the project directory
```bash
cd cypress-test-automation
```
3. Install the dependencies
```bash
npm install
```

## Running the tests

Run the following command to execute the tests:

```bash
npm test
```

This will run the Cypress tests and generate a Mochawesome report.

## GitHub Actions

This project uses GitHub Actions for continuous integration. The workflow is defined in `.github/workflows/Test-Scheduler.yaml`. It runs the tests on every push to the repository and archives the Mochawesome reports.

## Code Structure

The main test script is located in `cypress/e2e/*.js`.

## Built With

- [Cypress](https://www.cypress.io/)
- [Mochawesome](https://www.npmjs.com/package/mochawesome)

## Authors

- **Halmurat Tahir**

## License

This project is licensed under the ISC License.
```

This `README.md` provides a brief introduction to your project, instructions for getting started, running the tests, and some additional information about the project.

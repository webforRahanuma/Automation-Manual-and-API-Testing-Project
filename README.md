# QA Testing Portfolio – Manual, API & UI Automation

Welcome to my **Software Quality Assurance (SQA) Testing Portfolio**.

This repository contains my hands-on testing work across **Manual Testing, API Testing, and UI Automation Testing**, including test cases, bug reports, API validations, automated test scripts, and test execution reports.


## 📌 Project Overview

This portfolio demonstrates practical experience in different areas of software testing:

* 🔍 Manual Testing
* 🌐 API Testing
* 🤖 UI Automation Testing
* 🧪 Functional & Regression Testing
* 📝 Test Case Design
* 🐞 Bug Reporting
* 🔄 Test Execution & Reporting

The goal is to demonstrate a structured QA workflow from test planning and execution to defect identification and automation.

## 📂 Repository Structure

Automation-Manual-and-API-Testing-Project/
│
├── 📁 Manual-Testing/
│   └── Manual testing documentation and reports
│
├── 📁 API-Testing/
│   └── Postman collections and API testing resources
│
└── 📁 UI-Automation/
    ├── 📁 pages/
    ├── 📁 tests/
    ├── 📁 utils/
    ├── 📁 playwright-report/
    ├── 📄 package.json
    ├── 📄 package-lock.json
    └── 📄 playwright.config.js

# 🔍 Manual Testing

The Manual Testing section contains QA documentation and testing artefacts.

### Activities Covered

* Test Scenario Design
* Test Case Writing
* Functional Testing
* Regression Testing
* Positive & Negative Testing
* Boundary Value Analysis
* Equivalence Partitioning
* Bug/Defect Reporting
* Test Execution
* Test Summary Reporting

### 📁 Location

➡️ **[Manual-Testing](./Manual-Testing)**

# 🌐 API Testing

API testing is performed using **Postman** with automated assertions and Newman execution.

### API Used

**JSONPlaceholder**

`https://jsonplaceholder.typicode.com/users`

### Testing Activities

* GET all users
* GET user by ID
* PUT user data
* HTTP status code validation
* Response body validation
* JSON field validation
* Dynamic variable handling
* Response data extraction
* Request chaining
* Postman test scripts
* Newman CLI execution

### Validation Examples

* Verify `200 OK` response
* Verify response contains user data
* Verify `id`, `name`, and `email`
* Store user ID dynamically
* Validate returned ID after update
* Validate required response fields

### 📁 Location

➡️ **[API-Testing](./API-Testing)**

---

# 🤖 UI Automation

UI automation is implemented using **Playwright with JavaScript**.

The automation project is based on the **OrangeHRM demo application**.

### Automation Framework

* Playwright
* JavaScript
* Node.js
* Page Object Model (POM)

### Automated Scenarios

* Login with valid credentials
* Employee management
* Add new employee
* Search and verify employee
* Leave management
* Apply leave
* Verify leave request
* Cancel leave request

### Framework Structure
UI-Automation/
│
├── pages/
│   └── Page Object classes
│
├── tests/
│   └── Playwright test cases
│
├── utils/
│   └── Reusable utilities
│
├── playwright-report/
│   └── HTML test execution report
│
├── package.json
├── package-lock.json
└── playwright.config.js

### Run UI Automation

Install dependencies:
npm install
Run Playwright tests:
npx playwright test
Run tests in Chromium:
npx playwright test --project=chromium
Generate/open the HTML report:
npx playwright show-report


### 📊 Test Report

The Playwright HTML execution report is available inside:

➡️ **[UI-Automation/playwright-report](./UI-Automation/playwright-report)**

---

# 🛠️ Tools & Technologies

| Area                | Tools / Technologies                        |
| ------------------- | ------------------------------------------- |
| Manual Testing      | Test Cases, Bug Reports, Functional Testing |
| API Testing         | Postman, Newman, REST API                   |
| UI Automation       | Playwright, JavaScript                      |
| Automation Pattern  | Page Object Model (POM)                     |
| Programming         | JavaScript                                  |
| API Data Format     | JSON                                        |
| Version Control     | Git & GitHub                                |
| Issue Tracking      | Jira                                        |
| Performance Testing | JMeter                                      |
| Database            | SQL                                         |

---

# 🧪 Testing Skills

### Manual Testing

* SDLC
* STLC
* Test Case Design
* Test Scenario Creation
* Functional Testing
* Regression Testing
* Smoke Testing
* Sanity Testing
* Retesting
* Exploratory Testing
* Boundary Value Analysis
* Equivalence Partitioning
* Bug Life Cycle
* Severity & Priority

### API Testing

* REST API
* HTTP Methods
* GET / POST / PUT / PATCH
* HTTP Status Codes
* JSON Validation
* Postman
* Postman Scripts
* Environment Variables
* Newman
* API Response Validation

### Automation Testing

* Playwright
* JavaScript
* Page Object Model
* Locators
* Assertions
* Test Hooks
* Test Configuration
* HTML Reports
* Automated Regression Testing

---

# 📈 QA Workflow

Requirement Analysis
        ↓
Test Planning
        ↓
Test Scenario Design
        ↓
Test Case Creation
        ↓
Test Execution
        ↓
Defect Reporting
        ↓
Retesting
        ↓
Regression Testing
        ↓
Automation
        ↓
Test Reporting

---

# 👩‍💻 About Me

I am an aspiring **Software Quality Assurance Engineer** interested in building reliable, user-focused software through structured testing and automation.

My current focus includes:

* Manual QA
* API Testing
* Playwright Automation
* SQL
* Postman & Newman
* Test Documentation
* Continuous improvement of QA practices

---

# 📫 Connect With Me

**GitHub:** [webforRahanuma](https://github.com/webforRahanuma)

---

## ⭐ Repository

This repository is continuously updated as I expand my QA testing skills and add new testing projects, automation scenarios, and testing techniques.

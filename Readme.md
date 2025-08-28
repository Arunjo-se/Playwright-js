## Playwright-js Project

This project contains end-to-end tests using [Playwright](https://playwright.dev/).

### Packages

<<<<<<< HEAD
1. \*\* dotenv
=======
1. **dotenv (for csv)
>>>>>>> f9472b2a8c29e6a63fb1fcf68f539a95b9f8492e
   ```
   npm install dotenv
   ```
2. **ExcelJS(Excel sheet)
   ```
   npm i exceljs@0.2.19
   ```

### Available Commands

1. **Run all end-to-end tests:**

   ```
   npx playwright test
   ```

2. **Start the interactive UI mode:**

   ```
   npx playwright test --ui
   ```

3. **Run tests only on Desktop Chrome:**

   ```
   npx playwright test --project=chromium
   ```

   Example (headed mode):

   ```
   npx playwright test example.spec.js --project=chromium --headed
   ```

4. **Run tests in a specific file:**

   ```
   npx playwright test <filename>
   ```

   Example:

   ```
   npx playwright test tests/basic/basic.spec.js
   ```

5. **Run tests in debug mode:**

   ```
   npx playwright test --debug
   ```

6. **Auto-generate tests with Codegen:**
   ```
   npx playwright codegen
   ```

### Suggested First Step

Start by running all tests:

```
npx playwright test
```

---

### Allure Report

```
npm install --save-dev @playwright/test allure-playwright
```

setup the config file (report section)

run test like(ex: npx playwright test basic.spec.js --project=chromium --headed )

```
allure generate allure-results --clean -o allure-report
```

```
allure open allure-report
```

### Test Files Order

1. `basic.spec.js`
2. `NewBrowser.spec.js`
3. `title.spec.js`

---

**Note:** Update the file paths as needed based on

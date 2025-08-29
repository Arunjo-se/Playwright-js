## Playwright-js Project

This project contains end-to-end tests using [Playwright](https://playwright.dev/).

### Packages

1. **dotenv

   ```
   npm install dotenv     
   ```
2. **ExcelJS(Excel sheet)
   ```
   npm i exceljs@0.2.19
   ```
3. ** CSV
   ```
   npm install csv-parse
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

**Note:** Update the file paths as needed based 

npm install @playwright/test --save-dev
npx playwright install

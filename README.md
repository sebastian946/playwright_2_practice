
# Assigment QA

## Description
- This project was created using Playwright. I implemented the POM methodology and also separated components. These components are not full pages but rather elements like cards or link text in the header.

## Commands
- The install packages is: 
```bash
  npm install
```

- The command for run the test:
```bash
  npx playwright test
````

- The command for show the report:
```bash
  npx playwright show-report
```

### **Description** 

#### The project has this file structure 
The project have this order files: 
```bash
├── page/
│   ├── components/                        # Automated Components
            ├── HeaderComponent.js         # Automated all the link in the header
            ├── SignInLoginComponent.js    # Automated popup forms
│   ├── CartPage/                          # Automated Cart page
│   ├── DetailProduct/                     # Automated DetailProduct page
│   └── HomePage/                          # Automated homepage page
├── tests/                                 # Folder with all automated test
    ├── ecommerce.spec.js /                # End to End automated test  
    ├── register.spec.js /                 # Test automated of register  
├── utils/
    ├── generateData.js /                  # Generate data to the test
├── README.md          
└── playwright.config.js                   # Configuration the playwright project
````

### Summary
- The project generates a screenshot, video, and trace upon completion, which serve as evidence of the automated tests.

- When you run the command `npx playwright test`, the browser runs in headless mode (without displaying the browser window). To watch the browser in action, run the command like this: ```npx playwright test --headed```.

- The project can run tests in different browsers such as Firefox, Chromium, and WebKit. 

- The project is set to retry failed test cases up to two times.

- The project currently has pipelines that run the automation and generate test result reports.
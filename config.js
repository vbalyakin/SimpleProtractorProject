exports.config = {  
    framework: "jasmine",
    seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumPort: 4444,
    capabilities: {
        "browserName": "chrome"
    },
    specs: ['todo-spec.js'],
    jasmineNodeOpts: {
        showColors: true
    },
    onPrepare: () => {
        browser.manage().window().maximize();
    }
};
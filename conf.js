exports.config = {   
    capabilities: {
        'generateReport':false,
        'takeScreenshots':false,
        'browserName': 'chrome',
       // 'platformName': 'mac',
      //  'browserVersionaa': '61',
        'accessKey': 'eyJhbGciOiJIUzI1NiJ9.eyJ4cC51IjoxMjU0NjIwLCJ4cC5wIjoxMjA3MDA1LCJ4cC5tIjoxNjAwODkxMDE4OTgwLCJleHAiOjE5MTYyNTEwMjEsImlzcyI6ImNvbS5leHBlcml0ZXN0In0.t-LOirn9s-Hs7-TkglyJbsxyK--Usw9KrinjdydkADQ' // can be use instead of username,password and project.
        //'username': '<cloudUsername>',
        //'password': '<cloudPassword>',
        //'projectName': '<cloudProject>' //only required if your user has several projects assigned to it. Otherwise, exclude this capability.
    },
 
    seleniumAddress: 'https://rbc.experitest.com:443//wd/hub', //use https if the cloud doesn't use SSL
SELENIUM_PROMISE_MANAGER:false,
specs:["spec.js"],
framework:"jasmine",
jasmineNodeOpts:{
    defaultTimeoutInterval:10000000,
},
allScriptTimeoout:10000,
};

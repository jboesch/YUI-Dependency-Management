var App = App || {};
App.Modules = {
    // Stylesheets
    css: {
        "jquery.tooltip.css": {
            path: "vendors/jquery.tooltip.css",
            // YUI automatically assumes our modules are all js files, UNLESS we specify otherwise. 
            // So here is where we specifically give it a type: 'css'
            type: "css"
        }
    },
    // JavaScripts
    js: {
        "App.User": {
            path: "App.User.js"
        },
        "App.Availability": {
            path: "App.Availability.js",
            requires: ["highcharts", "jquery.tooltip"]
        },
        // Vendors
        "highcharts": {
            path: "vendors/highcharts.js"  
        },
        "jquery.tooltip": {
            path: "vendors/jquery.tooltip.min.js",
            requires: ['jquery.tooltip.css']
        }
 
    }
}
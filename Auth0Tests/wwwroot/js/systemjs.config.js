/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    System.config({
        paths: {
            // paths serve as alias
            "js:": "js/"
        },
        // map tells the System loader where to look for things
        map: {
            "app": "js:app.js",
            "auth0-js": "js:auth0-js/auth0.min.js",
            "auth0-lock": "js:auth0-lock.js"
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            '.': { defaultExtension: "js" },
            "app": {},
            "auth0-js": {},
            "auth0-lock": {}
        }
    });
})(this);
# Here is some hint for developing this extension for the Firefox.

## Extension Anatomy
./manifest.json
    ./Background page
        /HTML
        /js
            /js files
    ./Content scripts
        /js
            /JavaScript files
        /css
            /css files
    ./Browser action
        /icons
        /popup
            /html|/css|/js
    ./Page action
        /icons
        /popup
        /html|/css|/js
    ./Options page
        /html|/css|/js
    ./Web accessible resources
        /contains the all file that need to using in the web pages.

read more about the Firefox extension anatomy in: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension


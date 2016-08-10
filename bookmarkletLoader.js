// tested for Chrome, IE
javascript:(function(){
        var head = document.getElementsByTagName("head")[0];
        var scriptElement = document.createElement("script");
        scriptElement.src = 'https://raw.githubusercontent.com/tobi-sh/Jira-Issue-Card-Printer/develop/bookmarklet.js';	
        head.appendChild(scriptElement);
        head.removeChild(scriptElement);
})();

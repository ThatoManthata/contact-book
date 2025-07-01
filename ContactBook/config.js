

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";//URL of the server
let apiKey = checkApiKey();

function checkApiKey() {                            //it checks if you have a API key that is set on your computer
    if (!localStorage.getItem("apiKey")) {          //You need a API key 
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}

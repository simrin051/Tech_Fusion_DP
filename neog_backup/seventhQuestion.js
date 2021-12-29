import fetch from "node-fetch";

var serverURL= "https://api.funtranslations.com/translate/minion.json";
    console.log("output.innerText "+getTranslationURL("simrin"));
    fetch(getTranslationURL("simrin"))
    .then(response=>{
        if(!response.ok) {
            return response.json().then(data => { throw new Error(data.error.message) })
           // return response.text().then(text => { throw new Error(text) })
           }
          else {
           return response.json();
    }})
    .then(json=>{console.log("JSON contents "+json.contents.translated);
    })
    .catch(errorHandler);

    function errorHandler(error)
    {

        console.log("error occured"+(error)); 
    }

  function getTranslationURL(text)
  {
   return serverURL +"?text="+text;
  }
 
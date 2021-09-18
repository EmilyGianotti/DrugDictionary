function setup() {
    noCanvas();
    

    let bgpage = chrome.extension.getBackgroundPage();
    drug_input = bgpage.drug;

    let url_1 = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    let url = url_1 + drug_input;
    
    loadJSON(url, gotData);

    function gotData(data) {
        createP(data[0].meanings[0].definitions[0].definition);
    }
    //def = "The drug def"
    createP("Drug: " + drug_input).style("font-size", "20pt")
    //createP(drug_input);
    
}
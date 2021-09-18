function setup() {
    noCanvas();
    
    let bgpage = chrome.extension.getBackgroundPage();
    drug = bgpage.drug;
    def = "The drug def"
    createP("Drug: " + drug).style("font-size", "20pt")
    createP(drug);
}
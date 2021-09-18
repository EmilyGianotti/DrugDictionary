function setup() {
    noCanvas();
    let bgpage = chrome.extension.getBackgroundPage();
    drug = bgpage.drug;
    createP(drug);
}
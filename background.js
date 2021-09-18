console.log('background running');

chrome.runtime.onMessage.addListener(receiver);

window.drug = "";

function receiver(request, sender, sendResponse) {
 console.log(request);
 drug = request.text;
}
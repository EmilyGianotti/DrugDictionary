console.log('background running');

chrome.runtime.onMessage.addListener(receiver);

window.drug = "hehe";

function receiver(request, sender, sendResponse) {
 console.log(request);
 drug = request.text;
}
window.addEventListener('mouseup', drugSelected);

function drugSelected() {
    console.log('drug selected');
    let selectedText = window.getSelection().toString();
    console.log(selectedText);
}
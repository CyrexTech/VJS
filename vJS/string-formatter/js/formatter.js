function upperCase(text){
    let firstText = text.slice(0,1);

    firstText = firstText.toUpperCase();
    text = firstText + text.slice(1,text.length);

    document.getElementById("display").innerHTML = text;
}
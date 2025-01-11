const field = document.getElementById("mainContainer");

//amount of elements
const numOfElem = 5;

//where the magic happens lol 
for(i = 0; i < numOfElem; i++){
    elem = undefined;
    elemPlace = undefined;

    var a = Math.floor(Math.random() * 4);
    console.log(a);
    switch(a){
        case 0:
            elem = HTMLelements.text[Math.floor(Math.random() * HTMLelements.text.length)];
            elemPlace = document.createElement(elem);
            break;
        case 1:
            elem = HTMLelements.buttons[Math.floor(Math.random() * HTMLelements.buttons.length)];
            elemPlace = document.createElement(elem);
            const hrefTxtArr = [];
            
            for(k = 0; k < Math.floor(Math.random() * 50); k++){
                hrefTxtArr.push(symbols.allSymbols[Math.floor(Math.random() * symbols.allSymbols.length)]);
            }
            hrefTxtArr.push(domains[Math.floor(Math.random() * domains.length)]);
            hrefTxtArr.unshift("https://");
            hrefTxt = hrefTxtArr.join("");
            elemPlace.setAttribute("href", hrefTxt); 
            break;
    }
    
    
    //generate amount of letters.
    var b = Math.floor(Math.random() * 50);
    var textArr = [];
    for(j = 0; j < b; j++){
        textArr.push(symbols.allSymbols[Math.floor(Math.random() * symbols.allSymbols.length)]);
    }
    field.appendChild(elemPlace);
    elemPlace.innerHTML = (textArr.join(""));
    elemPlace.style.color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    elemPlace.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    elemPlace.style.padding = `${Math.floor(Math.random() * dimCos.medium.max)}px ${Math.floor(Math.random() * dimCos.medium.max)}px ${Math.floor(Math.random() * dimCos.medium.max)}px ${Math.floor(Math.random() * dimCos.medium.max)}px`;
    elemPlace.style.fontSize = `${Math.floor(Math.random() * 65) + 5}px`
    //this line WILL traumatize you, enjoy!
    elemPlace.style.border = `${Math.floor(Math.random() * dimCos.small.max) + dimCos.small.min}px ${borderTypes[Math.floor(Math.random() * borderTypes.length)]} ${'#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
    elemPlace.style.margin = `${Math.floor(Math.random() * dimCos.large.max)}px ${Math.floor(Math.random() * dimCos.large.max)}px ${Math.floor(Math.random() * dimCos.large.max)}px ${Math.floor(Math.random() * dimCos.large.max)}px`;
    elemPlace.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    elemPlace.style.fontWeight = `${Math.floor(Math.random() * 3000) + 1500}`;
    elemPlace.style.textDecoration = `${textDecoration2[Math.floor(Math.random() * textDecoration2.length)]} ${textDecoration[Math.floor(Math.random() * textDecoration.length)]} ${Math.floor(Math.random() * 10)}px ${'#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
    elemPlace.style.textShadow = `${Math.floor(Math.random() * dimCos.tiny.max)}px ${Math.floor(Math.random() * dimCos.tiny.max)}px ${Math.floor(Math.random() * dimCos.tiny.max)}px ${'#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
    elemPlace.style.borderRadius = `${Math.floor(Math.random() * dimCos.small.max)}px`;
    var c = Math.floor(Math.random() * 10);
    if(c == 3 || c == 8){
        elemPlace.style.transform = `scale(${((Math.random() * 2) + 0.75).toFixed(2)})`;
    }

    document.body.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}
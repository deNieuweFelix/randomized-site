// This file will contain all resources the site will use.

//all symbols
const symbols = {
    //only standard letters
    plainAlphabet: [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ],
    //all ASCII characters i guess
    allSymbols: [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z', 'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V',
        'W', 'X', 'Y', 'Z', '0', '1',
        '2', '3', '4', '5', '6', '7',
        '8', '9', '!', '"', '#', '$',
        '%', '&', '\'', '(', ')', '*',
        '+', ',', '-', '.', '/', ':',
        ';', '<', '=', '>', '?', '@',
        '[', '\\', ']', '^', '_', '`',
        '{', '|', '}', '~', ' '
    ]
};

//some of the HTML elements.
const HTMLelements = {
    text: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'label'
    ],
    containers: [
        'div', 'section', 'article', 'marquee'
    ],
    buttons: [
        'a', 'button'
    ]
};

//all necessary css attributes
const attributes = [
    'height', 'width', 'backgroundColor'
];

//dimension constraints
const dimCos = {
    tiny: {
        min: 0,
        max: 25
    },
    small: {
        min: 10,
        max: 50
    },
    medium: {
        min: 25,
        max: 100
    },
    large: {
        min: 50,
        max: 200
    },
    larger: {
        min: 100,
        max: 400
    },
    huge: {
        min: 250,
        max: 600
    },
    massive: {
        min: 500,
        max: 1250
        //you know what else is massive?
    }
};

borderTypes = [
    'solid', 'dotted', 'inset', 'double',
    'dashed', 'groove', 'ridge', 'outset'
];

fonts = [
    'Arial', 'Verdana', 'Tahoma', 'Trebuchet', 'Times New Roman',
    'Georgia', 'Garamond', 'Courier New', 'Brush Script MT'
];

textDecoration = [
    'underline', 'overline', 'line-through', 'wavy'
];
textDecoration2 = [
    'underline', 'overline'
];
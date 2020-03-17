const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    //разбиваем на слова
    var wordArr = expr.split('**********');
    //разбиваем слова на буквы
    for (let i = 0; i < wordArr.length; i++) {
        wordArr[i] = wordArr[i].match(/[\S\s]{1,10}/g);
        // //удаляем лишние нули
        for (let j = 0; j < wordArr[i].length; j++) {
            wordArr[i][j] = wordArr[i][j].slice(wordArr[i][j].indexOf('1')).match(/[\S\s]{1,2}/g);
            //преобразовываем в точки и тире
            for (let k = 0; k < wordArr[i][j].length; k++) {
                if (wordArr[i][j][k] == 10) {
                    wordArr[i][j][k] = '.';
                }
                if (wordArr[i][j][k] == 11) {
                    wordArr[i][j][k] = '-';
                }
            }
            //собираем в код буквы
            wordArr[i][j] = wordArr[i][j].join('')
            wordArr[i][j] = MORSE_TABLE[wordArr[i][j]];
        }
        //собираем слова из букв
        wordArr[i] = wordArr[i].join('');
    }
    var result = wordArr.join(' ')
    return result
}

module.exports = {
    decode
}


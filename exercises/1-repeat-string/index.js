/**
 *
 */
const repeatString = (string, times) => {
    let repeatedString = '';
    let i ;
    if (times < 0 ) {
        return 'ERROR';
    } 
    else {
        for (i = 0; i < times; i++) {
        repeatedString = repeatedString + string ;
        }
    }
    return repeatedString;
}

module.exports = repeatString

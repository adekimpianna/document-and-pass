/**
 *
 */
const removeFromArray = (array, ...forDeletion) => {
    let newArray = array;
    return newArray.filter(item => !forDeletion.includes(item))
};

module.exports = removeFromArray

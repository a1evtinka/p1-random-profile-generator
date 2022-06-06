const randomProfile = require('random-profile-generator');

function generateNames(number) {
    const namesArray = [];
    for (i = 1; i <= number; i++) {
        namesArray.push(randomProfile.name());
    }
    return namesArray.join('\n');
}

console.log(generateNames(3));

module.exports = generateNames;

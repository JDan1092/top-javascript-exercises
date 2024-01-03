const findTheOldest = function(array) {
    // let total =0; Used people in the "function(people)"
    // let oldestPerson = {};
    // people.reduce((prev, curr) => {
    //     if ((curr.yearOfDeath - curr.yearOfBirth) > total) {
    //         total = (curr.yearOfDeath - curr.yearOfBirth);
    //         oldestPerson = curr;
    //     }
    //     return prev;
    // })
    // return oldestPerson; 
    //The code above only worked for the first 2 exercises


    return array.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(
            current.yearOfBirth,
            current.yearOfDeath
        );
        return oldestAge < currentAge ? current : oldest;
    });
};

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};
// Do not edit below this line
module.exports = findTheOldest;

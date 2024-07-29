const findTheOldest = function(people) {
    let newArr = people.sort((a, b) => {
        const currentYear = new Date().getFullYear();
        if (!a.yearOfDeath) aDeath = currentYear;
        else aDeath = a.yearOfDeath;
        if (!b.yearOfDeath) bDeath = currentYear;
        else bDeath = b.yearOfDeath;

        const ageA = aDeath - a.yearOfBirth;
        const ageB = bDeath - b.yearOfBirth;
        return ageA > ageB ? -1 : 1;
    });
    return newArr[0];

};

// Do not edit below this line
module.exports = findTheOldest;

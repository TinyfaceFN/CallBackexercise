let a = [{
    animal: 'dog',
    type: 'bulldog'
},
{
    animal: 'cat',
    type: 'persian '
}]

let b = [{
    first: 'austin',
    last: 'hughes'
}, {
    first: 'cat',
    last: 'dog'
}]

let c = [
    { first: 'Elie', last: "Schoppik" },
    { first: 'Tim', last: "Garcia", isCatOwner: true },
    { first: 'Matt', last: "Lane" },
    { first: 'Colt', last: "Steele", isCatOwner: true }
]

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let y = ['cat', 'dog', 'lengthofwords']

function doubleValues(array) {
    return array.map(function (val) {
        return val * 2
    })
}

function onlyEven(array) {
    return array.filter(function (val) {
        return val % 2 === 0

    })
}

function showFirstAndLast(array) {
    return array.map(function (val, index) {
        return val[0] + val[val.length - 1]
    }
    )
}

//Did this at first with an object its self, second one will be for array of objects 
function addKeyAndValue2(arrayOfObject, key, value) {
    let newArray = Object.entries(arrayOfObject)
    newArray.map(function (val, index, array) {
        arrayOfObject[`${key}`] = value
    })
    console.log(arrayOfObject)
}

//properly adds new key + val to array of objects 
function addKeyAndValue(arrayOfObject, key, value) {
    arrayOfObject.map(function (val, index, array) {
        val[`${key}`] = value
    })
    console.log(arrayOfObject)
}

function vowelCount(string) {
    let vowel = 'aeiou'
    let stringArray = string.split('')
    let obJectVowel = {}

    stringArray.forEach(function (letter) {
        let lowerLetter = letter.toLowerCase()
        if (vowel.includes(lowerLetter)) {
            if (obJectVowel[lowerLetter]) {
                obJectVowel[lowerLetter]++
            }
            else {
                obJectVowel[lowerLetter] = 1
            }
        }

    })
    return obJectVowel
}

function doubleValuesWithMap(array) {
    return array.map(function (val) {
        return val * 2
    })
}

function valTimesIndex(array) {
    return array.map(function (val, index) {
        return val * index
    })
}

function extractKey(arrayOfObjects, key) {
    let newArray = []
    arrayOfObjects.map(function (val) {
        newArray.push(val[key])
    }
    )
    return newArray
}

function extractFullName(arrayOfObjects) {
    newArray = []
    arrayOfObjects.map(function (value) {
        let newAddition = ` ${value.first} ${value.last}`
        newArray.push(newAddition)
    })
    return newArray
}

function filterByValue(arrayOfObjects, key) {
    newArray = []
    arrayOfObjects.map(function (val, index, array) {
        if (val[key] !== undefined) {
            newArray.push(val)
        }
    })
    return newArray
}

function find(array, value) {
    return array.filter(function (val) {
        return val === value
    })[0]
    //had to ref answer key for the [0] weird interaction
}

function findInObj(arrayOfObjects, key, value) {
    return arrayOfObjects.filter(function (val, index) {
        return val[key] === value
    })
    [0]
}

function removeVowels(string) {
    let vowel = 'aeiou'
    let newString = string.toLowerCase()
    let stringArray = newString.split('')
    let newStringArray = []
    stringArray.map(function (val) {
        if (!vowel.includes(val)) {
            newStringArray.push(val)

        }
    })
    return newStringArray.join('')
}

function doubleOddNumber(array) {
    let newArray = []
    array.map(function (val) {
        newArray.push(val * 2)
    })
    return newArray.filter(function (val) {
        return val % 3 === 0
    })
}
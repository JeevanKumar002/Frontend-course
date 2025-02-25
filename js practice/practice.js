// object practice
const objExp = {
    name: "sunny",
    age: 30,
    locality: "india",
};
console.log(objExp)

// array (combination of multiple objects)
const arrayExp = [{
    naam: "sophia",
    nationality: "saudi",
},

{
    naam: "alexa",
    nationality: "german",
},

{
    naam: "ava",
    nationality: "brazil",
},
];
console.log (arrayExp)

//including an array in between a string 
console.log(
    `Hi this is ${arrayExp[0].naam}, here`,
);

// Using .map
const Example = arrayExp.map((calling) => 
    {return calling});
console.log(Example)
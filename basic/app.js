let age = 27;
let name = "jayeon";
let fruits = [
    'π', 
    'π', 
    'π'
];
let book = {
    title:'λͺ¨λ μλ°μ€ν¬λ¦½νΈ Deep Dive', 
    author:'μ΄μλͺ¨', 
    price: 40500
};

// 1οΈβ£
let realAge;
function MinusAge() {
    realAge = age - 1;
}

MinusAge();
console.log(realAge);

// 2οΈβ£
let manAge;
function twoMinusAge(myAge) {
    let result;
    result = myAge - 2;
    return result;
}

manAge = twoMinusAge(age);
console.log(manAge);

// 3οΈβ£ 
let animal = {
    name : 'Puppy', // νλ‘νΌν°
    emoticon() { // λ©μλ
        console.log('πΆ');    
    }
};
animal.emoticon();
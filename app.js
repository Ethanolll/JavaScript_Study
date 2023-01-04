let age = 27;
let name = "jayeon";
let fruits = [
    '🍎', 
    '🍌', 
    '🍇'
];
let book = {
    title:'모던 자바스크립트 Deep Dive', 
    author:'이웅모', 
    price: 40500
};

// 1️⃣
let realAge;
function MinusAge() {
    realAge = age - 1;
}

MinusAge();
console.log(realAge);

// 2️⃣
let manAge;
function twoMinusAge(myAge) {
    let result;
    result = myAge - 2;
    return result;
}

manAge = twoMinusAge(age);
console.log(manAge);

// 3️⃣ 
let animal = {
    name : 'Puppy', // 프로퍼티
    emoticon() { // 메소드
        console.log('🐶');    
    }
};
animal.emoticon();
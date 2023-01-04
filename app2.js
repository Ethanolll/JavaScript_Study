// 과제 1️⃣ - 변수 선언 및 값 할당
// let dog = '🐶';
// let cat = '🐱';
// let fish = ['🐠', '🐟', '🐡'];

// 과제 2️⃣ 
// console.log(dog);
// console.log(cat);
// console.log(fish);

// 과제 3️⃣ - 그룹화시키기!
let animal = {
    dog: '🐶', 
    cat: '🐱', 
    fish: ['🐠', '🐟', '🐡'],
};
console.log(animal.dog);
console.log(animal.cat);
console.log(animal.fish);

// 과제 4️⃣ 
console.log(animal.fish[1]);

// 과제 5️⃣
function getListItem(array, arrayIndex) {
    let arrayElement = array[arrayIndex];
    return arrayElement;
}

// 과제 6️⃣
let firstAnimal = getListItem(animal.fish, 0);
console.log(firstAnimal);

// 1️⃣
let dog = '🐶';
let cat = '🐱';
let fish = ['🐠', '🐟', '🐡'];

console.log(dog);
console.log(cat);
console.log(fish);

// 2️⃣
let animal = {
    dog: '🐶', 
    cat: '🐱', 
    fish: ['🐠', '🐟', '🐡'],
};
console.log(animal.dog);
console.log(animal.cat);
console.log(animal.fish);
console.log(animal.fish[1]);

// 3️⃣
function getListItem(array, arrayIndex) {
    let arrayElement = array[arrayIndex];
    return arrayElement;
}

let firstFish = getListItem(animal.fish, 0);
console.log(firstFish);

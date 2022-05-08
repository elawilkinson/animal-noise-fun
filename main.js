let imgLoc = document.querySelector('#cutie');
let buttonsLoc = document.querySelector('#randos');
let animalButton = document.createElement('button');
animalButton.innerText = 'Click to get a cute animal.'
buttonsLoc.append(animalButton);

let animalDetails = document.createElement('ul');
buttonsLoc.append(animalDetails);

const dog = {
    name: 'dog',
    pic: 'https://clipart.world/wp-content/uploads/2020/06/dog-vector-1502158.jpg',
    eng: 'woof',
    fr: 'ouaf' ,
    bonus: 'blaf',
    ans: 'Dutch'
}

const cat = {
    name: 'cat',
    pic: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/6006/cat-clipart-md.png',
    eng: 'meow',
    fr: 'miaou',
    bonus: 'niav',
    ans: 'Ukrainian'
}

const duck = {
    name: 'duck',
    pic: 'https://clipart.world/wp-content/uploads/2020/07/happy-duck.jpg',
    eng: 'quack',
    fr: 'coin',
    bonus: 'praaks',
    ans: 'Estonian'
}

const cow = {
    name: 'cow',
    pic: 'https://www.kindpng.com/picc/m/38-386643_cow-clipart-cow-clipart-transparent-background-hd-png.png',
    eng: 'moo',
    fr: 'meux',
    bonus: 'eum-mae',
    ans: 'Korean' 
}

const sheep = {
    name: 'sheep',
    pic: 'https://clipart.world/wp-content/uploads/2020/07/cute-sheep.jpg',
    eng: 'baa',
    fr: 'beee',
    bonus: 'mbek',
    ans: 'Indonesian'
}

const rooster = {
    name: 'rooster',
    pic: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/6269/rooster-clipart-xl.png',
    eng: 'cock-a-doodle-doo',
    fr: 'cocorico',
    bonus: 'tsoo-ghoo-roo-ghoo',
    ans: 'Armenian'
}

const animalList = [dog, cat, duck, cow, sheep, rooster];
const langList = ['fr', 'eng', 'bonus'];
let randomAnim = animalList[Math.floor(Math.random()*animalList.length)];
let randoLang = langList[Math.floor(Math.random()*langList.length)]
console.log(animalList)
console.log(randomAnim);
console.log(randoLang);

function randoReturn(){    
    let newEntry = document.createElement('li');
    newEntry.textContent = randomAnim.name;
    animalDetails.append(newEntry);
}

animalButton.addEventListener('click', randoReturn);


// ## PLAN
// # Find (5) animals 
// # Store their noises in English
// # Store their noises in French
// # Store a list of excellent noises as a bonus option
// # Find pictures of the animals
// # Create randomise option for animals
// # Create randomise option for language
// # Create animal button
// # Create language button
// # Create display window for final result
// # Display chosen animal in h2
// # Display chosen language in h2

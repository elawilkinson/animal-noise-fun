// IDENTIFYING ELEMENTS
let animalDisplay = document.querySelector('#randos');
let submitButton = document.querySelector('#clickHere');
let animalDropdown = document.querySelector('#anims');
let langDropdown = document.querySelector('#langs');
let surpriseAnimal = document.querySelector('#anRa');

// DATA INPUT
const dog = {
    name: 'dog',
    pic: 'https://clipart.world/wp-content/uploads/2020/06/dog-vector-1502158.jpg',
    eng: 'woof',
    fr: 'ouaf ouaf',
    de: 'wau wau',
    ar: 'hao hao',
    bonus: 'blaf',
    ans: 'Dutch'
}

const cat = {
    name: 'cat',
    pic: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/6006/cat-clipart-md.png',
    eng: 'meow',
    fr: 'miaou miaou',
    de: 'miau miau',
    ar: 'miau miau',
    bonus: 'niav',
    ans: 'Ukrainian'
}

const duck = {
    name: 'duck',
    pic: 'https://clipart.world/wp-content/uploads/2020/07/happy-duck.jpg',
    eng: 'quack',
    fr: 'coin coin',
    de: 'quacken',
    ar: 'wak wak',
    bonus: 'praaks',
    ans: 'Estonian'
}

const cow = {
    name: 'cow',
    pic: 'https://www.kindpng.com/picc/m/38-386643_cow-clipart-cow-clipart-transparent-background-hd-png.png',
    eng: 'moo',
    fr: 'meuh meuh',
    de: 'muh muh',
    ar: 'moo moo',
    bonus: 'eum-mae',
    ans: 'Korean' 
}

const sheep = {
    name: 'sheep',
    pic: 'https://clipart.world/wp-content/uploads/2020/07/cute-sheep.jpg',
    eng: 'baa',
    fr: 'beee beee',
    de: 'maeh maeh',
    ar: 'baa baa',
    bonus: 'mbek',
    ans: 'Indonesian'
}

const rooster = {
    name: 'rooster',
    pic: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/6269/rooster-clipart-xl.png',
    eng: 'cock-a-doodle-doo',
    fr: 'cocorico',
    de: 'kikeriki',
    ar: 'ee-eeer',
    bonus: 'tsoo-ghoo-roo-ghoo',
    ans: 'Armenian'
}

const animalList = [dog, cat, duck, cow, sheep, rooster];
const langList = ['fr', 'eng', 'de', 'ar', 'bonus'];


// FINDING A RANDOM ANIMAL FOR THE 'SURPRISE' OPTION
function getIndex(){
    let randIndex =  Math.floor(Math.random() * (5 + 1));
    return randIndex;
}
let randIndex = getIndex();

function randoReturn(){
    let randomAnim = animalList[randIndex];
    let randoName = randomAnim.name;
    return randoName;
}
let surpAn = randoReturn();


// FUNCTIONALITY FOR INPUT FORM, SUBMIT BUTTON AND DISPLAY
function detailDisplay(){
    let animalChoice = animalDropdown[0];
    let animalDisp = animalChoice.value; 
    let arrayPos = parseInt(animalDisp);
    console.log(arrayPos);
    if(animalDisp === '6'){
        randIndex = getIndex();
        surpAn = randoReturn();
        console.log(surpAn);
        animalDisp = surpAn;     
        console.log(animalDisp);
        arrayPos = randIndex;
        console.log(arrayPos);
     }
    else{
        console.log(arrayPos);
        animalDisp = animalList[animalDisp].name;
        console.log(animalDisp);
     }
    let langChoice = langDropdown[0];
    let langDisp = langChoice.value;
    console.log(langDisp);
    let langRel = langDisp - 1; 
    console.log(langRel);
    console.log(langList[langRel]);
    if(langRel === 1){
        animalDisplay.innerText = `This ${animalDisp} would simply say...\n ${animalList[arrayPos].eng}`;
        }
    else if(langRel === 0){
        animalDisplay.innerText = `This ${animalDisp} would simply say...\n ${animalList[arrayPos].fr}`;
        }
    else if(langRel === 2){
        animalDisplay.innerText = `This ${animalDisp} would simply say...\n ${animalList[arrayPos].de}`;
        }
    else if(langRel === 3){
        animalDisplay.innerText = `This ${animalDisp} would simply say...\n ${animalList[arrayPos].ar}`;
        }
    else if(langRel === 4){
        animalDisplay.innerText = `This ${animalDisp} would simply say...\n ${animalList[arrayPos].bonus}, 
        because she is ${animalList[arrayPos].ans}`
        }
}
   
submitButton.addEventListener('click', detailDisplay);


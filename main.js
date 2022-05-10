let animalDisplay = document.querySelector('#randos');
let submitButton = document.querySelector('#clickHere');
let animalDropdown = document.querySelector('#anims');
let langDropdown = document.querySelector('#langs');

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

function randoReturn(){    
    let randomAnim = animalList[Math.floor(Math.random()*animalList.length)];
    let randoName = randomAnim.name;    
    let randoLang = langList[Math.floor(Math.random()*langList.length)]
    animalDisplay.textContent = `${randoName} / ${randoLang}`;    
    for(i=0; i<animalList.length; i++){
        if(randoName === animalList[i].name){
            let animalCard = animalList[i];
            if(randoLang === "eng"){
                console.log(animalCard.eng);
            }
            else if(randoLang === "fr"){
                console.log(animalCard.fr);
            }
            else if(randoLang === "bonus"){
                console.log(animalCard.bonus);
                console.log(animalCard.ans);
            }
        }
    }
}
// submitButton.addEventListener('click', randoReturn);

function detailDisplay(){
    let animalChoice = animalDropdown[0];
    let animalDisp = animalChoice.value; 
    let langChoice = langDropdown[0];
    let langDisp = langChoice.value;
    langDisp = langDisp - 1; 
    console.log(animalList[animalDisp].name);
    console.log(langList[langDisp]);
    }
submitButton.addEventListener('click', detailDisplay);

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

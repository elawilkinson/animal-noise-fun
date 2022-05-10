// async function animGenerate(){
//     console.log(cat.pic);
//     // let newImage = cat.pic;
//     // imgLoc.src = newImage;
// }

// function delayTry(){
//     setTimeout(animGenerate, 2000);
// }

// animalButton.addEventListener('click', delayTry);

// HTML 
 //  <img id="cutie" src="https://clipart.world/wp-content/uploads/2020/06/dog-vector-1502158.jpg"></img>

 // animalDetails.append(newEntry);

//  let buttonsLoc = document.querySelector('#buttonsHere');
// let animalButton = document.createElement('button');
// animalButton.innerText = 'Click to get a cute animal.'
// buttonsLoc.append(animalButton);

// IMAGE ELEMENT FOR LATER
// let imgLoc = document.querySelector('#cutie');
// let animalDetails = document.createElement('ul');
// animalDisplay.append(animalDetails);

// for(i=0; i<animalList.length; i++){
//     if(randoName === animalList[i].name){
//         let animalCard = animalList[i];
//         if(randoLang === "eng"){
//             console.log(animalCard.eng);
//         }
//         else if(randoLang === "fr"){
//             console.log(animalCard.fr);
//         }
//         else if(randoLang === "bonus"){
//             console.log(animalCard.bonus);
//             console.log(animalCard.ans);
//         }
//     }
// }


//     for(i=0; i<animalList.length; i++){
//         if(randoName === animalList[i].name){
//         let animalCard = animalList[i];
//          if(langRel === 1){
//             animalDisplay.innerText = `This ${randoName} would simply say...\n ${animalCard.eng}`;
//             console.log(animalCard.eng);
//             }
//         else if(langRel === 0){
//             animalDisplay.innerText = `This ${randoName} would simply say...\n ${animalCard.eng}`
//             console.log(animalCard.fr);
//             }
//         else if(langRel === 2){
//             animalDisplay.innerText = `This ${randoName} would simply say...\n ${animalCard.bonus}, 
//             because she is ${animalCard.ans}!`;
//             console.log(animalCard.bonus);
//             console.log(animalCard.ans);
//         }
//     }
//     }
    
// }

function indexFind(){
    let randIndex = 0;
    for(let count =0, count <animalList.length, count++){
        if(surpAn === animalList[count].name){
            randIndex = parseInt(animalList[count]);
            console.log(randIndex);
        }
    }

}

let indexPos = indexFind()
console.log(indexPos);


let randomAnim = animalList[Math.floor(Math.random()*animalList.length)];
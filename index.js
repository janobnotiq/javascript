// // We go to the gym if time is 8 and weather is good

// let time, isWeatherGood;

// time = window.prompt(`Time:`)
// isWeatherGood = window.prompt(`Weather good? (yes/no):`)

// if (isWeatherGood.toLocaleLowerCase() == "yes"){
//     isWeatherGood = true
// } else {
//     isWeatherGood = false
// }


// if (time == 8 && isWeatherGood){
//     window.alert(`Let's go to the gym`)
// } else {
//     window.alert(`We don't go`)
// }
// ---------------------------------------------------------------------------------



// document.getElementById("submitbnt").onclick = function(){
//     let yigindi = 0;
//     let son;

//     son = document.getElementById("raqam").value
//     son = Number(son)

//     for(let i = 1; i <= son; i++){
//         // if (i % 2 !== 0){
//         //     console.log(i)
//         // } else {
//         //     yigindi += i;
//         // }
//             yigindi += i;

//     }

//     document.getElementById("response").textContent = yigindi
// }

// ---------------------------------------------------------------------------

// let secret = Math.floor((Math.random()*100));
// let attempts = 0;
// let running = true;
// let option;

// while(running){
//     option = window.prompt(`1 dan 100 gacha bo'lgan qaysidir son bu, qani top-chi`)
//     option = Number(option)

//     if (isNaN(option)){
//         window.alert(`Son kiriting`)
//     } else if (option < 1 || option > 100){
//         window.alert(`1 dan 100 gacha ukaxon!`)
//     } else if (option > secret) {
//         window.alert("Bundan kichik")
//         attempts++;
//     } else if (option < secret){
//         window.alert(`Bundan katta`)
//         attempts++
//     } else{
//         console.log(option)
//     }

//     if (option === secret){
//         attempts++;
//         window.alert(`Siz ${attempts} urunishda bu son ${secret} ekanini topdingiz` )
//         running = false;
//         document.getElementById("res").textContent = "Qale"
//     }
// }
// ------------------------------------------------------------------------------------

let a = "Wertical"

function reverse_string(matn){
    let new_one = "";
    if (matn.length > 0){
        for (i=matn.length-1;i>=0;i--){
            new_one = new_one + matn.charAt(i)
        }
    }
    return new_one;
}
console.log(reverse_string(a))
console.log(a)
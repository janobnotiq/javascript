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



document.getElementById("submitbnt").onclick = function(){
    let yigindi = 0;
    let son;

    son = document.getElementById("raqam").value
    son = Number(son)

    while (son > 0){
        yigindi += son;
        son--;
    }

    document.getElementById("response").textContent = yigindi
}


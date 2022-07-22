let userScore = document.querySelector(".user");
let compScore = document.querySelector(".computer");
let userElement = document.querySelector(".userElement")
let compElement = document.querySelector(".compElement")
let reset = document.querySelector(".reset")
let results = document.querySelector(".results")

let score_of_user = 0, score_of_comp = 0

let buttons = document.querySelectorAll(".sys");

let random_value = ["rock","scissors","paper"]

buttons.forEach((item,index)=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();

        let userChoice = item.parentElement.className

        const random = Math.floor(Math.random() *  3) 
        let compChoice =  random_value[random]

        console.log("user" + userChoice + " comp" + compChoice);

        getPlay(userChoice, compChoice);

        userElement.textContent = userChoice.toUpperCase()
        compElement.textContent = compChoice.toUpperCase()
    })
})


const getPlay = (user,comp)=>{
    if(user === comp){
        score_of_user++
        score_of_comp++

        userScore.textContent = score_of_user
        compScore.textContent = score_of_comp

        results.textContent = "DRAW"
    }else if(user == "rock" && comp == "scissors"){
        score_of_user++
        userScore.textContent = score_of_user
    }else if(user == "paper" && comp == "rock"){
        score_of_user++
        userScore.textContent = score_of_user
    }else if(user == "scissors" && comp == "paper"){
        score_of_user++
        userScore.textContent = score_of_user
    }
    else{
        score_of_comp++
        compScore.textContent = score_of_comp
    }

    if(score_of_user === score_of_comp){
        results.textContent = "DRAW"
    }
    else if(score_of_user > score_of_comp){
        results.textContent = "USER"
    }else{
        results.textContent = "COMPUTER"
    }
}

reset.addEventListener('click',(e)=>{
    e.preventDefault();
    score_of_comp = 0
    score_of_user = 0
    userScore.textContent = score_of_user
    compScore.textContent = score_of_comp

    userElement.textContent = ""
    compElement.textContent = ""
    results.textContent = ""
})
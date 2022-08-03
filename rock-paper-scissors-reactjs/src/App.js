import './App.css';
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissors from './images/scissors.png'
import {useEffect, useState} from 'react'

function App() {

let random_value = ["rock","scissors","paper"]

const [userChoice, setUserChoice] = useState(null)
const [compChoice, setCompChoice] = useState(null)

const [userScore, setUserScore] = useState(0);
const [compScore, setCompScore] = useState(0);
const [results, setResults] = useState('')

const [disabled, setDisabled] = useState(false)

useEffect(() => {
  
  if((userChoice === "rock" && compChoice === "scissors") || (userChoice === "paper" && compChoice === "rock") || (userChoice === "scissors" && compChoice === "paper")){
    
    const newUserPoints = userScore+1 
    setUserScore(newUserPoints)

    if(newUserPoints === 5 ){
      setResults("USER") 
      setDisabled(!disabled)
    }

  }else if((userChoice === "scissors" && compChoice === "rock") || (userChoice === "rock" && compChoice === "paper") || (userChoice === "paper" && compChoice === "scissors")){
    
    const newCompPoints = compScore+1
    setCompScore(newCompPoints)

    if(newCompPoints === 5){
      setResults("COMPUTER")
      setDisabled(!disabled)
    }

  }
  else{
    const newPoints = userScore+1
    const newCmpPoints = compScore+1

    setUserScore(newPoints)
    setCompScore(newCmpPoints)

    if(newPoints === 5 && newCmpPoints === 5){
      setResults("DRAW")
      setDisabled(!disabled)
    }
    
  }

}, [userChoice,compChoice])


const compRandom = ()=>{
  let random = Math.floor(Math.random() *  3) 
  setCompChoice(random_value[random])
}

console.log("userchoice",userChoice,"","compchoice",compChoice,"","userscore",userScore,"","compscore",compScore,"disabled",disabled);

  return (
    <div className="text-center"> 
      <header className='my-6'>
        <h2 className='text-4xl font-black'>Rock Paper Scissors</h2>
      </header>
      <hr className='mt-6' />
      <main className='my-10 flex items-center justify-center flex-col'>
        <div className="text-2xl border-solid border-2 border-white py-2.5 px-6 w-36 rounded-md relative mb-5 before:content-['User'] before:absolute before:-left-6 before:bg-black before:text-lg after:content-['Computer'] after:absolute after:-right-16 after:bg-black after:text-lg">
            <span className="user">{userScore}</span> : <span>{compScore}</span>
        </div>
        <div className="flex mt-6 items-center justify-evenly w-96">
            <button className="rock"><img src={rock} onClick={(e)=>{
              e.preventDefault();
              setUserChoice(e.target.parentElement.className)
              compRandom();
            }} disabled={disabled} alt="rock" className="border-2 border-solid rounded-full cursor-pointer transition duration-150 w-24 hover:scale-110"/></button>
            <button className="paper"><img src={paper} onClick={(e)=>{
              e.preventDefault();
              setUserChoice(e.target.parentElement.className)
              compRandom();
            }} disabled={disabled} alt="paper" className="border-2 border-solid rounded-full cursor-pointer transition duration-150 w-24 hover:scale-110" /></button>
            <button className="scissors"><img src={scissors} onClick={(e)=>{
              e.preventDefault();
              setUserChoice(e.target.parentElement.className)
              compRandom();
            }} disabled={disabled} alt="scissors" className="border-2 border-solid rounded-full cursor-pointer transition duration-150 w-24 hover:scale-110" /></button>
        </div>
        <div className="my-6 flex justify-between w-96">
            <p>User choosen : <span>{userChoice ? userChoice : null}</span></p>
            <p>Computer choosen : <span>{compChoice ? compChoice : null}</span></p>
        </div>
        <div className="my-6">
            <p>Who WON!! :{results}</p>
        </div>
        <button className="px-5 py-2.5 border-2 border-solid cursor-pointer outline-none">Reset Game</button>
    </main>
    </div>
  );
}

export default App;

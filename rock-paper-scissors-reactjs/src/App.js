import './App.css';
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissors from './images/scissors.png'
import {useState} from 'react'

function App() {

let random_value = ["rock","scissors","paper"]

const [userChoice, setUserChoice] = useState('')
const [compChoice, setCompChoice] = useState('')

const [userScore, setUserScore] = useState(0);
const [compScore, setCompScore] = useState(0);
const [results, setResults] = useState('')

const compRandom = ()=>{
  let random = Math.floor(Math.random() *  3) 
  setCompChoice(random_value[random])
}

const resultsFun = (user,comp)=>{
  if(user === comp){
    setResults("DRAW") 
  }
  else if(user > comp){
      setResults("USER")
  }else{
      setResults("COMPUTER")
  }
}

const getPlay = (user,comp) =>{
  if(user == comp){
    setUserScore(userScore+1)
    setCompScore(compScore+1)
  }else if(user == "rock" && comp == "scissors"){
      setUserScore(userScore+1)
  }else if(user == "paper" && comp == "rock"){
      setUserScore(userScore+1)
  }else if(user == "scissors" && comp == "paper"){
      setUserScore(userScore+1)
  }
  else{
      setCompScore(compScore+1)
  }

  resultsFun(userScore,compScore);
}

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
            <div className="rock"><img src={rock} onClick={(e)=>{
              e.preventDefault();
              setUserChoice(e.target.parentElement.className)
              compRandom();
              getPlay(userChoice,compChoice)
            }} alt="rock" className="border-2 border-solid rounded-full cursor-pointer transition duration-150 w-24 hover:scale-110"/></div>
            <div className="paper"><img src={paper} onClick={(e)=>{
              e.preventDefault();
              setUserChoice(e.target.parentElement.className)
              compRandom();
              getPlay(userChoice,compChoice)
            }} alt="paper" className="border-2 border-solid rounded-full cursor-pointer transition duration-150 w-24 hover:scale-110" /></div>
            <div className="scissors"><img src={scissors} onClick={(e)=>{
              e.preventDefault();
              setUserChoice(e.target.parentElement.className)
              compRandom();
              getPlay(userChoice,compChoice)
            }} alt="scissors" className="border-2 border-solid rounded-full cursor-pointer transition duration-150 w-24 hover:scale-110" /></div>
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

import React, {useEffect, useState} from 'react';
import {getQuizData} from './services/quiz_services'
import {QuestionType} from "./types/quiz_types"
import QuestionsCard from "./Components/QuestionsCard"
import "./App.css"

let emptySelected:boolean=false
export function ABC(value:any){
  console.log("ABC", value)
  if(value === "" || value === "You must choose an option."){
    emptySelected = true
    return "You must choose an option."
  }
  return ""
}
function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [finishChecker, setFinishChecker] =  useState("");

  useEffect(()=>{
    async function fetchQuiz(){
      const questions:QuestionType[] = await getQuizData(5, "easy");
      console.log(questions);
      setQuiz(questions);
    }
    fetchQuiz()
  },[])

  const handleSubmit=(e:React.FormEvent<EventTarget>)=>{
    e.preventDefault()
    if(emptySelected === true){
      emptySelected=false
      return
    }
    if(currentStep !== quiz.length-1)
      setCurrentStep(++currentStep);
    else
      setFinishChecker("Done")
  }


  if(!quiz.length){
    return (
      <div style={{textAlign:"center", marginTop:"150px"}}>
        <img alt="Loading ..." src="https://i.pinimg.com/originals/58/4b/60/584b607f5c2ff075429dc0e7b8d142ef.gif" width="200" height="150"/>
      </div>
    )
  }
  return (
    <div className="App">
      <QuestionsCard
        options={quiz[currentStep].options}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />
      <h2 style={{textAlign:"center"}}>{finishChecker}</h2>
      
    </div>
    )
}
export default App;

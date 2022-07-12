import {Quiz, QuestionType} from "./../types/quiz_types"

const shuffleArray = (array: any[]) => 
    [...array].sort(()=> Math.random()-0.5)

export const getQuizData = async(totalQuestions: number, level: string) :Promise<QuestionType[]> =>{
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&category=18&difficulty=${level}&type=multiple`);
    const {results}  = await res.json();
    const quiz: QuestionType[]= results.map((questionObj: Quiz)=>{
        return{
            question:  questionObj.question,
            answer: questionObj.correct_answer,
            options: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz
}
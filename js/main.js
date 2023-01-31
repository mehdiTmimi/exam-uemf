import { resetBtn, submitBtn } from "./config.js";
import { addQuestion, verifier, vider } from "./questions.js";
import { Question } from "./Question.js";

const questions=[];

resetBtn.addEventListener('click',()=>{
    vider();
})
submitBtn.addEventListener('click',()=>{
    let content=questionInput.value
    let answer=answerInput.value
    if(answer=="true")
        answer=true
    else if(answer=="false")
        answer=false;
    let question = new Question(content,answer);
    console.log(question)
    if(!verifier(question))
        return alert("veuillez remplir tous les champs")

    addQuestion(questions,question);
    
    
})



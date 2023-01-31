import { answerInput, questionInput, questions } from "./config.js"

export const vider=()=>{
    questionInput.value=""
    answerInput.value=""
}
export const addQuestion=(tab,question)=>{
    tab.push(question)

    const mainDiv = document.createElement("div")
    const span = document.createElement("span")
    const div = document.createElement("div")
    const deleteBtn = document.createElement("button")
    const swithBtn = document.createElement("button")

    //tree construction
    mainDiv.appendChild(span)
    mainDiv.appendChild(div)
    mainDiv.appendChild(deleteBtn)
    mainDiv.appendChild(swithBtn)

    //attrs
    mainDiv.classList.add("question")
    if(question.answer)
        mainDiv.classList.add("true")
    else
        mainDiv.classList.add("false")

    span.classList.add("idQuestion")
    div.classList.add("content")
    deleteBtn.classList.add("delete")
    swithBtn.classList.add("switch")

    //contents
    span.innerText=tab.length
    div.innerText=question.content
    deleteBtn.innerText="Delete"
    swithBtn.innerText="Switch"

    deleteBtn.addEventListener('click',()=>{
        // TODO: delete question from array + from DOM 
        let position=tab.indexOf(question)
        tab.splice(position,1);
        mainDiv.remove();
        for(let i=position;i<questions.children.length;i++)
        {
            let element = questions.children[i];
            element.children[0].innerText=i+1;
            //element.children[0].innerText=parseInt(element.children[0].innerText)-1
        }
    })
    swithBtn.addEventListener('click',()=>{
        question.answer=!question.answer
        mainDiv.classList.remove("true")
        mainDiv.classList.remove("false")
        mainDiv.classList.add(question.answer+"")

    })

    questions.appendChild(mainDiv)
}

export const verifier = (question)=>{
    return question.content && typeof(question.answer)=="boolean";
}
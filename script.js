console.log("hi")
var quizContainer = document.querySelector('#quizContainer')
console.log(quizContainer)
var type, data,quizData;

let card=document.getElementById('card')
var prevButton=document.getElementById('prevButton')
var nextButton=document.getElementById('nextButton')
quizContainer.addEventListener('click', async function(e) {
    quizContainer.style.display="none";
    card.style.visibility="visible";
    prevButton.style.visibility="visible";
    prevButton.style.visibility="visible";
    nextButton.style.visibility="visible";
    type=e.target.id;
    console.log(type)
    console.log(`${type}.json`)
    data = await fetch(`./json/${type}.json`)
    quizData = await data.json();
    console.log(quizData)

   
    let output=quizData.map((element)=>{
        return`
        <div class="card-header card-body" id="questionList">
                ${element.question}
        </div>
            <ul class="list-group list-group-flush" id="optionList">
                <li class="list-group-item">
                    <div class="form-check">
                        <input class="form-check-input answerList" type="radio" name="answer" id="a">
                        <label class="form-check-label" for="a" id="a_option">
                        ${element.a}
                        </label>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="form-check">
                        <input class="form-check-input answerList" type="radio" name="answer" id="b">
                        <label class="form-check-label" for="b" id="b_option">
                        ${element.b}
                        </label>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="form-check">
                        <input class="form-check-input answerList" type="radio" name="answer" id="c">
                        <label class="form-check-label" for="c" id="c_option">
                        ${element.c}
                        </label>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="form-check">
                        <input class="form-check-input answerList" type="radio" name="answer" id="d">
                        <label class="form-check-label" for="d" id="d_option">
                        ${element.d}
                        </label>
                    </div>
                </li>
            </ul> 
            `
    })
    var count=0;
    card.innerHTML=output[0]
   
    console.log(output.length)
    // console.log(output)
    
    console.log(nextButton)

    nextButton.addEventListener("click",()=>{
        count++;
        console.log(count);
        console.log(output[count]);
        if(count>output.length-1){
            count=output.length-1                       
        }
        card.innerHTML=output[count];
       
    })
    
    prevButton.addEventListener("click",()=>{        
        count--;
        console.log(count)
        if(count<0){
            count=0            
        }
        card.innerHTML=output[count]
    })

    var answerList = document.querySelectorAll('.answerList')
    console.log(answerList)

    for(i=0;i<answerList.length;i++){
        console.log(answerList[i])
        
    }















   
})


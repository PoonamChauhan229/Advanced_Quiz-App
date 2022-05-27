var questionList = document.getElementById('questionList')
var answerList = document.querySelectorAll('.answerList')
console.log(answerList)


var a_option = document.getElementById('a_option')
var b_option = document.getElementById('b_option')
var c_option = document.getElementById('c_option')
var d_option = document.getElementById('d_option')

var quizContainer = document.getElementById('quizContainer')

let responseHtml;
let responseJs;
let score = 0;
var htmlQuizData = document.getElementById('htmlQuiz');
var jsQuizData = document.getElementById('jsQuiz');
let currentquizCount = 0;
console.log(currentquizCount)

if (htmlQuizData.addEventListener('click', async function htmlData() {        
    var dataHtml = await fetch('html.json')
    responseHtml = await dataHtml.json()
    console.log(responseHtml)
    inputData(responseHtml)
    
})) { }
else if (jsQuizData.addEventListener('click', async function jsQuiz() {
    var dataJs = await fetch('javascript.json')
    responseJs = await dataJs.json()
    console.log(responseJs)
    inputData(responseJs)
})) { }


function getquizData() {
    deSelect()
    let currentquizData = quizData[currentquizCount]
    console.log(currentquizData)

    questionList.innerText = quizData[currentquizCount].question
    a_option.innerText = quizData[currentquizCount].a;
    b_option.innerText = quizData[currentquizCount].b;
    c_option.innerText = quizData[currentquizCount].c;
    d_option.innerText = quizData[currentquizCount].d;

}

function inputData(response) {
    
    console.log(response)
    console.log(currentquizCount)
    let currentquizData = response[currentquizCount]
    console.log(currentquizData)
    questionList.innerText = response[currentquizCount].question
    a_option.innerText = response[currentquizCount].a;
    b_option.innerText = response[currentquizCount].b;
    c_option.innerText = response[currentquizCount].c;
    d_option.innerText = response[currentquizCount].d;

    var button = document.getElementById('button')
    button.addEventListener("click", function submit() {
        console.log(currentquizCount)
        let answer = getSelect();
        console.log(answer)
        console.log(response)
        console.log(response[currentquizCount].correct)


        if (answer === response[currentquizCount].correct) {
            score++;
        }
        currentquizCount++;
        console.log(currentquizCount)
        console.log(response.length)
        if (currentquizCount <response.length) {
            inputData(response);
        }
        else {
            quizContainer.innerHTML = `
                <h1>You have scored ${score}/${response.length}</h1>
                <button class="btn btn-primary mt-3 mb-3 px-5" type="button" onclick='location.reload()'>Reload</button>
                `
        }

    })
    // deSelect()
}


// console.log(currentquizCount)

function deSelect() {
    answerList.forEach(item => item.checked = false)

}

function getSelect() {
    let answer;
    answerList.forEach(item => {

        if (item.checked) {
            answer = item.id;
            // console.log(answer)

        }

        // console.log(answer)
    })
    return answer;
}











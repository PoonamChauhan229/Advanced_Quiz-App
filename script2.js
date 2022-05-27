
var htmlQuizData = document.getElementById('htmlQuiz');
var jsQuizData = document.getElementById('jsQuiz');


    if (htmlQuizData.addEventListener('click', async function htmlData() {        
        var dataHtml = await fetch('html.json')
        var responseHtml = await dataHtml.json()
        console.log(responseHtml)
        var quizData = responseHtml
        console.log(quizData)
        return quizData
    })) {console.log("HI")}
    else if (jsQuizData.addEventListener('click', async function jsQuiz() {
        var dataJs = await fetch('javascript.json')
        var responseJs = await dataJs.json()
        console.log(responseJs)
        var quizData = responseJs
        console.log(quizData)
        return quizData
    })){}

var questionList = document.getElementById('questionList')
var answerList = document.querySelectorAll('.answerList')
console.log(answerList)
var button = document.getElementById('button')

var a_option = document.getElementById('a_option')
var b_option = document.getElementById('b_option')
var c_option = document.getElementById('c_option')
var d_option = document.getElementById('d_option')

var quizContainer = document.getElementById('quizContainer')

let currentquizCount = 0;
let score = 0;


function getquizData() {
    var quizData = nameQuiz()
    console.log(quizData)
    deSelect()
    let currentquizData = quizData[currentquizCount]
    console.log(currentquizData)

    questionList.innerText = quizData[currentquizCount].question
    a_option.innerText = quizData[currentquizCount].a;
    b_option.innerText = quizData[currentquizCount].b;
    c_option.innerText = quizData[currentquizCount].c;
    d_option.innerText = quizData[currentquizCount].d;

}


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

button.addEventListener('click', function () {
    let answer = getSelect();
    // let answer;
    console.log(answer)
    console.log(quizData)
    console.log(quizData[currentquizCount].correct)
    
    
        if (answer === quizData[currentquizCount].correct) {
            score++;
        }
        currentquizCount++;
        if (currentquizCount < quizData.length) {
            getquizData();
        }
        else {
            quizContainer.innerHTML = `
                <h1>You have scored ${score}/${quizData.length}</h1>
                <button class="btn btn-primary mt-3 mb-3 px-5" type="button" onclick='location.reload()'>Reload</button>
                `
        }

})
getquizData();

console.log(currentquizCount)







var questions = [
    {
        question: "1. 2+2=?",
        answers: {
            1:'2',
            2:'4',
            3:'6',
            4:'5,5',
        },
        rightAnswers: 2,

    },
    {
        question: "2. 3+3=?",
        answers: {
            1:'2',
            2:'6',
            3:'7',
            4:'9',
        },
        rightAnswers: 2,
        
    },
    {
        question: "3. My favorite sport",
        answers: {
            1:'football',
            2:'bascketball',
            3:'tennis',
            4:'swimming',
        },
        rightAnswers: 2,
    
        },
        {
            question: "4. My favorite color",
        answers: {
            1:'pink',
            2:'black',
            3:'orange',
            4:'white',
        },
        rightAnswers: 2,
        },
        {
            question: "5. My favorite player",
        answers: {
            1:'Cristiano Ronaldo',
            2:'Michael Jordan',
            3:'Novack Jockovitch',
            4:'Leo Messi',
        },
        rightAnswers: 2,
        },
        {
            question: "6. Where i live",
            answers: {
                1:'Kiyv',
                2:'Kharkiv',
                3:'Dnepr',
                4:'Odessa',
            },
            rightAnswers: 2,
    
        },
        {
            question: "7. What my favorite game",
            answers: {
                1:'CS:GO',
                2:'PUBG',
                3:'Fortnite',
                4:'Brawl Stars',
            },
            rightAnswers: 2,
    
        },
        {
            question: "8. What my favorite drink",
            answers: {
                1:'Fanta',
                2:'Jack Daniels',
                3:'Juice',
                4:'Coka Cola',
            },
            rightAnswers: 2,
    
        },
        {
            question: "9. What my favorite subject",
            answers: {
                1:'Music',
                2:'Math',
                3:'Biology',
                4:'Physics',
            },
            rightAnswers: 2,
    
        },
        {
            question: "10. What my favorite programming language",
            answers: {
                1:'Java',
                2:'Java Script',
                3:'C++',
                4:'C#',
            },
            rightAnswers: 2,
    
        }
    ]

    var testContainer = document.getElementById("test");
    var resultButton = document.getElementById("resultButton");
    var resultContainer = document.getElementById("results");

    genarateTest(questions,testContainer,resultButton,resultContainer);

   function genarateTest(questions,testContainer,resultButton,resultContainer){
    function showQuestions(questions,testContainer){
        var out = [];
        var answers;
    

        for (var i=0; i<questions.length; i++){
            answers = [];

            for(var ans_text in questions[i].answers){
                answers.push('<label><br><input type="radio" name= "question'+i+'" value="'+ans_text+'">'+ans_text+') '+questions[i].answers[ans_text]+'</label>');
            }

            out.push('<div class = "question">'+questions[i].question +'</div>'+'<div class="answers">'+answers.join('')+'</div>');
        }

        testContainer.innerHTML = out.join('');

    }

    function showResults(questions, testContainer, resultContainer){
        var answersContainers = testContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var rightAnswersNum = 0;

        for (var i = 0; i<questions.length; i++){
            userAnswer = (answersContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if (userAnswer == questions[i].rightAnswers){
                answersContainers[i].style.color = "green";
                rightAnswersNum++;
            }else{
                answersContainers[i].style.color = "red";
            }
        }

        var resultStr;

        if(rightAnswersNum <5){
            resultStr = "Not good";
        }else if(rightAnswersNum == 6){
            resultStr = "return please";
        }else if(rightAnswersNum == 7){
            resultStr = "Not bad";
        }else if(rightAnswersNum == 8){
            resultStr = "Good"
        }else if(rightAnswersNum == 9){
            resultStr = "Nice"
        }else if(rightAnswersNum == 10){
            resultStr = "Perfact"
        }


        resultContainer.innerHTML = resultStr;
    }

    showQuestions(questions,testContainer);

    resultButton.onclick = function(){
        showResults(questions,testContainer,resultContainer);
    }

}

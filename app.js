const questions =[
    {
    'ques' : 'Which of the following is makable Language?',
    'a' : 'Html',
    'b' : 'css',
    'c' : 'java',
    'd' : 'c++',
    'correct' : 'a'
},

{
'ques' : 'In which year javaScript launnach?',
'a' : '1994',
'b' : '1995',
'c' : '1996',
'd' : '1997',
'correct' : 'b',
},
{
'ques' : 'What does Cascadin style sheet stort form?',
'a' : 'HTML',
'b' : 'CSS',
'c' : 'JON',
'd' : 'LLL',
'correct' : 'b',
}
]
let index=0;
let right=0,wrong=0;
let len=questions.length;
Question=document.getElementById('Question');
options=document.querySelectorAll('.options');
const loadQuestion = () =>{
    if (len===index) {
      end();
    } else {
        
        reset()
        const data = questions[index];
       // console.log(data);
        Question.innerHTML=`${index+1} ) ${data.ques}`;
    
        options[0].nextElementSibling.innerHTML=data.a;
        options[1].nextElementSibling.innerHTML=data.b;
        options[2].nextElementSibling.innerHTML=data.c;
        options[3].nextElementSibling.innerHTML=data.d;   
    }
}

const submit =()=>{
    const data = questions[index];
    let ans=getCorrectAnswer();
    if (ans===data.correct) {
       right++; 
       console.log("right")
    } else {
       wrong++;
    }
    index++;
    loadQuestion();
    return;

}
const getCorrectAnswer=()=>{
    let answer;
    options.forEach(input => {
        if (input.checked) {
           answer=input.value;
           
        }
       
        
    });
return answer;
}

const reset= () =>{
    options.forEach(input => {
      input.checked=false;
       
        
    });
}

const end=()=>{
    document.getElementById('box').innerHTML=`<h2 style="text-align:center"> your Score ${right}/${len}</h2>`
}

 loadQuestion();
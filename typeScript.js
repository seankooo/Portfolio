// 인풋 칸을 만들고 타자가 아무거나 눌릴 떄마다 스크립트 디브에 있는 텍스트랑 비교함. 루프 돌려 
// 타이핑 이벤트 리스너 
//const scriptDiv = document.getElementById("script1");
const scriptSpan= document.getElementById("script1");
const inputText = document.getElementById("inputText");
const inputSpan = document.getElementById("input");
const speedSpan = document.getElementById("speedSpan");
const accSpan = document.getElementById("accSpan");
const fileInput = document.getElementById('fileInput');

// let inputSize = scriptDiv.textContent.length;
// console.log(inputSize);

let time=0;
let countCorrect=0;
var startTime;
var endTime;
let inputLength;
let text ;
let index = 0;
var textArray= new Array();
//let script = scriptSpan.textContent;


function parseFile1() {
    const file = fileInput.files[0];
  
    if (!file) {
      alert('파일을 선택하세요.');
      return;
    }
  
    const reader = new FileReader();
   
    reader.onload = function(event) {
      const content = event.target.result;
      
      parseText(content);
      displayParsedContent(content);
      scriptSpan.textContent = textArray[0];
    };
  
    reader.readAsText(file);
}

  
  function parseText(script) {
    var start= 0;
    for(var i = 0; i <script.length; i++){
        if(script[i]=="." ){
            textArray.push(script.substring(start, i+1));
            start = i+1;
        }
    }
  }

  function displayParsedContent(parsedContent) {
    
    console.log(parsedContent);
  }






function initInterval(){
    inputLength = inputText.value.length;
    if(inputLength != 0){
       // console.log()
        setInterval(()=>{
            typingTime();
            speed();
    
        } , 500);
    }

}



// inputText.addEventListener("keydown", ()=>{
    


//     inputText.removeEventListener("keydown");
// });
//parseButton.addEventListener('click', parseFile());

inputText.addEventListener("input", ()=> {
    //renderInputText();
    text = inputText.value;
    inputLength = inputText.value.length;
    checkCorrectness();
    typingTime();
    initInterval();
});
next.addEventListener('click', ()=>{
   
    scriptSpan.textContent = textArray[index];
    console.log("index= " + index); 
    index++;
});

prev.addEventListener('click',()=>{
 
    scriptSpan.textContent = textArray[index];
    console.log("index= " + index);
    index--;

});



function typingTime(){
    
    console.log("inputlength= "+inputLength);
    var init = 0;

    if (inputLength == 1){
        
        
        startTime= new Date();
        console.log("startTime= " +startTime);
        console.log("endTime= " + endTime); 
    }
    else{
        endTime = new Date(); 
        console.log("startTime= " +startTime);
        console.log("endTime= " + endTime); 
      
        var timems = endTime - startTime;
        time= timems/1000;
        var timeM = time/60000;
      
        // console.log("밀리초= " + timems);
        // console.log("초= " + time);
        // console.log("분= " + timeM);
       
    }
}
   

 function speed(){
    //var length= inputText.Value.length

    // console.log("초= " + time);
    // console.log("speed= "+ countCorrect*60/time);
    var speed1 = Math.round(countCorrect*60/time); 
    var accuracy = countCorrect/inputLength;
    speedSpan.textContent = speed1;
    accSpan.textContent = accuracy*100 + "%";
    
 }

function checkCorrectness(){
    var text = inputText.value;
    var length= text.length;
    console.log("text길이 " + length);
    var script = scriptSpan.textContent;
    inputSpan.textContent = text;
    var changeColor=1;
    countCorrect = 0;
    for(var i = 0;i<length; i++){
    
        if (script[i] == text[i]){
            countCorrect++;
           
        }
        else if(script[i] != text[i]){
            inputSpan.classList.remove("textBlue");
            inputSpan.classList.add("textRed");
            inputText.style.color = "red";
            changeColor = 0;  
        }
    }
   
    if(changeColor){
        inputText.style.color = "green";
        inputSpan.classList.remove("textRed")
        inputSpan.classList.add("textBlue")
    } 
    if(length == script.length){

    }
    speed();


}


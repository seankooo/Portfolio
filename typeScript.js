// 인풋 칸을 만들고 타자가 아무거나 눌릴 떄마다 스크립트 디브에 있는 텍스트랑 비교함. 루프 돌려 
// 타이핑 이벤트 리스너 
//const scriptDiv = document.getElementById("script1");
const scriptSpan= document.getElementById("script1");
const inputText = document.getElementById("inputText");
const inputDiv =document.getElementById("inputDiv");
const speedSpan = document.getElementById("speedSpan");
const accSpan = document.getElementById("accSpan");
const fileInput = document.getElementById('fileInput');
const helpDiv = document.getElementById('helpDiv1');




let time=0;
let countCorrect=0;
let init = 1;
var startTime;
var endTime;
let inputLength=0;
let text ;
let index = 0;
let canClick = 1; 
let toggleHelp = false;

var textArray= ["Choose your love; love your choice.", 
                "God cares a lot more about who we are and about who we are becoming, than about who we once were." , 
                "Sometimes in life we become so focused on the finish line that we fail to find joy in the journey.",
                "There is only one happiness in this life, to love and be loved.",
                "Happiness consists not of having, but of being - not of possessing, but of enjoying."];

//let script = scriptSpan.textContent;
 scriptSpan.textContent = textArray[0];

function textAreaResize(){
    
    inputText.style.height = "3rem";
    inputText.style.height = inputText.scrollHeight + 'px';
}


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
    
      scriptSpan.textContent = textArray[0];
    };
  
    reader.readAsText(file);
}

  
  function parseText(script) {
    textArray = new Array();
    index=0;
    var tempString;
    var start= 0;
    for(var i = 0; i <script.length; i++){
        if(script[i]=='.' | script[i] =='!' | script[i] =='?' ){
               
            tempString = script.substring(start, i+1);
            tempString = tempString.replace(/^\s+/, "");         //왼쪽 공백제거
            tempString = tempString.replace(/\s+$/g, "");       //오른쪽 공백제거
            tempString = tempString.replace(/\n/g, "");         //행바꿈제거
            tempString = tempString.replace(/\r/g, "");         //엔터제거
            textArray.push(tempString);
            start = i+1;
            
            
        }
    }
  }



function initInterval(){
    inputLength = inputText.value.length;
    if(inputLength != 0){
     
        setInterval(()=>{
            typingTime();
            speed();
    
        } , 500);
    }

}



function typingTime(){
    


    if(inputLength == 0){
        init = 1; 
    }

   else if (init ==1 & inputLength == 1){
        init = 0;
        startTime= new Date();
    
    }
    else{
        endTime = new Date(); 
     
      
        var timems = endTime - startTime;
        time= timems/1000;
        var timeM = time/60000;
      

    }
}
   

 function speed(){
    
    var speed1 = Math.round(countCorrect*60/time); 
    var accuracy;
    if (inputLength == 0){
        accuracy = "";
    }
    else{
        accuracy =  Math.round(countCorrect/inputLength);

    }
    speedSpan.textContent = speed1;
    accSpan.textContent = accuracy*100 + "%";
    
 }

function checkCorrectness(){
   
    var script = textArray[index];
    var scriptLength = script.length;

 
    countCorrect = 0;
    let styledText = '';
    for(var i = 0; i<scriptLength; i++){
         if (i < inputLength){
            if (script[i] == text[i]){
                countCorrect++;
                styledText += '<span class="textBlue">' + script[i] + '</span>';
            }
            else if(script[i] != text[i]){
                styledText += '<span class="textRed">' + script[i] + '</span>';
               
            }
         }
         else {
            styledText += script[i];
         }
    }
    scriptSpan.innerHTML = styledText;

    if(inputLength == (scriptLength +1)){
        document.getElementById('next').click();
        inputText.value = '';
    }



}



//====================== Events ==========================


inputText.addEventListener("click",()=>{
    if(canClick) {
        inputText.value = "";
        canClick = 0;
    }
});




inputText.addEventListener("input", ()=> {
     typingTime();

    //renderInputText();
    text = inputText.value;
    inputLength = inputText.value.length;

    // let styledText = '';
    // for (let i = 0; i < text.length; i++) {
    //   if (i % 2 === 0) {
    //     styledText += '<span class="textRed">' + text[i] + '</span>';
    //   } else {
    //     styledText += text[i];
    //   }
    // }
    // inputSpan.innerHTML = styledText;
    // //inputText.value = styledText;

    checkCorrectness();
   
    initInterval();
    textAreaResize();
    //inputSpan.

});
helpButton1.addEventListener('click', ()=>{
    toggleHelp = !toggleHelp;
    if(toggleHelp){
        helpDiv.style.display = "block";
        helpButton1.textContent = "Close help"
    }
    else{
        helpDiv.style.display = "none";
        helpButton1.textContent = "Help"
    }

});

next.addEventListener('click', ()=>{
   if(index == textArray.length-1 ){
        index = 0;
   }
   else{
    index ++;
   }
    scriptSpan.textContent = textArray[index];
    inputText.value = "";


});

prev.addEventListener('click',()=>{
    if(index == 0 ){
        index = (textArray.length - 1) ;
   }
   else{
        index--;       
   }
    inputText.value = "";
    scriptSpan.textContent = textArray[index];
  

});

var selectedVar = "";

var resultVar = "";

var userChoice = document.getElementById('buttonChoice').innerHTML;

var computerChoice = 0;

var delayButtonRock = document.getElementById("rock");
var delayButtonPaper = document.getElementById("paper");
var delayButtonScissors = document.getElementById("scissors");
var delayButtonClear = document.getElementById("clear_bottom");

    
    
var winBar = "";
var loseBar = "";
var tieBar = "";
     
var winStyle = "";
var winWidth = "";
var winSlice = "";
    
    
var loseStyle = "";
var loseWidth = "";
var loseSlice = "";
    
    
var tieStyle = "";
var tieWidth = "";
var tieSlice = "";
    
    
var addWidth = "";
var subWidth = "";

function selectSign(selectedElementID) {
    
    disableButton();
    setTimeout(enableButton, 1100);
    
    clearTimeout(delayTime);
    setTimeout(delayTime, 900);
    
    selectedVar = selectedElementID;
    document.getElementById('buttonChoice').innerHTML = selectedVar;
    
    computerChoice = Math.random();
    document.getElementById('computer').innerHTML = computerChoice;
}

function delayTime() {
     if (computerChoice < 0.34) {
	   computerChoice = "ROCK";
    } else if(computerChoice > 0.33 && computerChoice < 0.67) {
	   computerChoice = "PAPER";
    } else {
	   computerChoice = "SCISSORS";
    } 
       document.getElementById('computer').innerHTML = computerChoice;  
    
    
    myButtonImg();
    compButtonImg();
    compareRes();
    resultCount();
    addClrButton();
    writeResult();
    resultBarSlide()
    setTimeout(removeOtherChilds, 1000);
}

function animateChoice(){
    document.getElementById('u_choice').className += ' u_choice_ani';
    document.getElementById("u_choice").style.backgroundImage = "url('UIIcons/rockImg.png')";
    
    document.getElementById('c_choice').className += ' c_choice_ani';
    document.getElementById("c_choice").style.backgroundImage = "url('UIIcons/rockImgComp.png')";
}

function animateChoiceRemove(){
    document.getElementById("c_choice").className = "chosed_icons";
    document.getElementById("u_choice").className = "chosed_icons";
}

function disableButton() {
    delayButtonRock.disabled = true;
    delayButtonPaper.disabled = true;
    delayButtonScissors.disabled = true;
    delayButtonClear.disabled = true;
    animateChoice();
    setTimeout(animateChoiceRemove, 900);
}

function enableButton() {
    delayButtonRock.disabled = false;
    delayButtonPaper.disabled = false;
    delayButtonScissors.disabled = false; 
    delayButtonClear.disabled = false; 
    }

function myButtonImg () {
    if (selectedVar === "ROCK") {
        document.getElementById("u_choice").style.backgroundImage = "url('UIIcons/rockImg.png')";
    } else if (selectedVar === "PAPER") {
        document.getElementById("u_choice").style.backgroundImage = "url('UIIcons/paperImg.png')";
    } else {
        document.getElementById("u_choice").style.backgroundImage = "url('UIIcons/scissorsImg.png')";
    }
}

function compButtonImg () {
    if (computerChoice === "ROCK") {
        document.getElementById("c_choice").style.backgroundImage = "url('UIIcons/rockImg.png')";
    } else if (computerChoice === "PAPER") {
        document.getElementById("c_choice").style.backgroundImage = "url('UIIcons/paperImg.png')";
    } else {
        document.getElementById("c_choice").style.backgroundImage = "url('UIIcons/scissorsImg.png')";
    }
}

function compareRes() {
    if(selectedVar === computerChoice) {
        document.getElementById("u_choice_icon").style.backgroundColor = "#3F6284";
        document.getElementById("c_choice_icon").style.backgroundColor = "#3F6284";
        resultVar = "TIE";
        
    } else if (selectedVar === "ROCK" && computerChoice === "SCISSORS") {
        document.getElementById("u_choice_icon").style.backgroundColor = "#3D865B";
        document.getElementById("c_choice_icon").style.backgroundColor = "#88232C";
        resultVar = "WIN";
    } else if (selectedVar === "ROCK" && computerChoice === "PAPER") {
        document.getElementById("u_choice_icon").style.backgroundColor = "#88232C";
        document.getElementById("c_choice_icon").style.backgroundColor = "#3D865B";
        resultVar = "LOST";
    }
    
     else if (selectedVar === "PAPER" && computerChoice === "ROCK") {
        document.getElementById("u_choice_icon").style.backgroundColor = "#3D865B";
        document.getElementById("c_choice_icon").style.backgroundColor = "#88232C";
        resultVar = "WIN";
    } else if (selectedVar === "PAPER" && computerChoice === "SCISSORS") {
        document.getElementById("u_choice_icon").style.backgroundColor = "#88232C";
        document.getElementById("c_choice_icon").style.backgroundColor = "#3D865B";
        resultVar = "LOST";
    }
    
     else if (selectedVar === "SCISSORS" && computerChoice === "PAPER") {
        document.getElementById("u_choice_icon").style.backgroundColor = "#3D865B";
        document.getElementById("c_choice_icon").style.backgroundColor = "#88232C";
        resultVar = "WIN";
    } else if (selectedVar === "SCISSORS" && computerChoice === "ROCK") {
        document.getElementById("u_choice_icon").style.backgroundColor = "#88232C";
        document.getElementById("c_choice_icon").style.backgroundColor = "#3D865B";
        resultVar = "LOST";
    }
}

function addClrButton() {
    document.getElementById("down_part").style.display = "block";  
    document.getElementById("clear_bottom").style.display = "block";
    document.getElementById("results_color").style.display = "block";
    
    document.getElementById("middle_part").style.borderRadius = "0";
}

function resultCount() {
    var paraResult = document.createElement("p");
    paraResult.className = "remove_list";
    
    var node = document.createTextNode(resultVar);
    
    paraResult.appendChild(node);
    
    var element = document.getElementById("result_count");
    
    
    if (resultVar === "WIN") {
        element.insertBefore(paraResult, element.firstChild);
        paraResult.style.backgroundColor = "#3D865B";
        
        document.getElementById("results_color").style.color = "#3D865B";
    } else if (resultVar === "LOST") {
        element.insertBefore(paraResult, element.firstChild);
        paraResult.style.backgroundColor = "#88232C";
        
        document.getElementById("results_color").style.color = "#88232C";
    } else {
        element.insertBefore(paraResult, element.firstChild);  
        paraResult.style.backgroundColor = "#3F6284";
        
        document.getElementById("results_color").style.color = "#3F6284";
    }
}

function writeResult() {
    
    var winsValue = document.getElementById("wins_table_result");
    var winsHtml = winsValue.innerHTML;
    
    var losesValue = document.getElementById("loses_table_result");
    var losesHtml = losesValue.innerHTML;
    
    var tiesValue = document.getElementById("ties_table_result");
    var tiesHtml = tiesValue.innerHTML;
    
    
    
    if(resultVar === "WIN") {
        winsHtml++;
        winsValue.innerHTML = winsHtml;
    } else if(resultVar === "LOST") {
        losesHtml++;
        losesValue.innerHTML = losesHtml;
    } else {
        tiesHtml++;
        tiesValue.innerHTML = tiesHtml;
    }
}

function resultBarSlide() {
    var winBar = document.getElementById("wins_bar");
    var loseBar = document.getElementById("loses_bar");
    var tieBar = document.getElementById("ties_bar");
     
    var winStyle = window.getComputedStyle(winBar);
    var winWidth = winStyle.getPropertyValue("width");
    var winSlice = parseInt(winWidth);
    
    
    var loseStyle = window.getComputedStyle(loseBar);
    var loseWidth = loseStyle.getPropertyValue("width");
    var loseSlice = parseInt(loseWidth);
    
    
    var tieStyle = window.getComputedStyle(tieBar);
    var tieWidth = tieStyle.getPropertyValue("width");
    var tieSlice = parseInt(tieWidth);
    
    
    var addWidth = 20;
    var subWidth = 10;
    
    if(resultVar === "WIN") {
        
        winBar.style.width =  winSlice + addWidth + "px";
        loseBar.style.width =  loseSlice - subWidth + "px";
        tieBar.style.width = tieSlice - subWidth + "px";
        document.getElementById("wins_bar").style.boxShadow = "inset 0px 0 0px 0px #1B1B1B";
        document.getElementById("loses_bar").style.boxShadow = "inset 0px 0 0px 0px #1B1B1B, inset 0px -30px 50px -30px #1b1b1b";
        document.getElementById("ties_bar").style.boxShadow = "inset 30px 0 50px -30px #1B1B1B, inset 0px -30px 50px -30px #1b1b1b";
        
        console.log(winBar.style.width);
        console.log(loseBar.style.width);
        console.log(tieBar.style.width);
    } else if(resultVar === "LOST") {
        
        winBar.style.width =  winSlice - subWidth + "px";
        loseBar.style.width =  loseSlice + addWidth + "px";
        tieBar.style.width = tieSlice - subWidth + "px";
        
        document.getElementById("wins_bar").style.boxShadow = "inset 0px 0 0px 0px #1B1B1B, inset 0px -30px 50px -30px #1b1b1b";
        document.getElementById("loses_bar").style.boxShadow = "inset 0px 0 0px 0px #1B1B1B";
        document.getElementById("ties_bar").style.boxShadow = "inset -30px 0 50px -30px #1B1B1B, inset 0px -30px 50px -30px #1b1b1b";
        
        console.log(winBar.style.width);
        console.log(loseBar.style.width);
        console.log(tieBar.style.width);
    } else {
        
        winBar.style.width =  winSlice - subWidth + "px";
        loseBar.style.width =  loseSlice - subWidth + "px";
        tieBar.style.width = tieSlice + addWidth + "px";
        
        document.getElementById("wins_bar").style.boxShadow = "inset -30px 0 50px -30px #1B1B1B, inset 0px -30px 50px -30px #1b1b1b";
        document.getElementById("loses_bar").style.boxShadow = "inset 30px 0 50px -30px #1B1B1B, inset 0px -30px 50px -30px #1b1b1b";
        document.getElementById("ties_bar").style.boxShadow = "inset 0px 0 0px 0px #1B1B1B";
        
        console.log(winBar.style.width);
        console.log(loseBar.style.width);
        console.log(tieBar.style.width);
    }
}

function clearF() { 
    document.getElementById("u_choice_icon").style.backgroundColor = "#1B1B1B";
    document.getElementById("c_choice_icon").style.backgroundColor = "#1B1B1B";
    document.getElementById("u_choice").style.backgroundImage = "";
    document.getElementById("c_choice").style.backgroundImage = "";

    document.getElementById("down_part").style.opacity = "0";
    document.getElementById("middle_part").style.borderRadius = "0 0 10px 10px";
    
    document.getElementById("u_choice").style.transition = "0.4s all";
    document.getElementById("c_choice").style.transition = "0.4s all";
    
    document.getElementById("wins_bar").style.width = "267px";
    document.getElementById("loses_bar").style.width = "267px";
    document.getElementById("ties_bar").style.width = "266px";
    
    
    console.log(document.getElementById("wins_bar").style.width);
    console.log(document.getElementById("loses_bar").style.width);
    console.log(document.getElementById("ties_bar").style.width);
    setTimeout(clearFAnimation, 400);
}

function clearFAnimation() {
    
    var removeScore = document.getElementsByClassName("remove_list");
    while (removeScore.length > 0) {
    removeScore[0].remove();
    }
    
    document.getElementById("wins_table_result").innerHTML = "0";
    document.getElementById("loses_table_result").innerHTML = "0";
    document.getElementById("ties_table_result").innerHTML = "0";
    
    document.getElementById("down_part").style.opacity = "1";
    
    document.getElementById("result_count").style.borderTop = "0";
    document.getElementById("result_count").style.borderBottom = "0";
    
    document.getElementById("down_part").style.display = "none";
    
    document.getElementById("u_choice").style.transition = "0s";
    document.getElementById("c_choice").style.transition = "0s";
}

function choiceRemoveTransition() {
}

function removeOtherChilds() {
    var removeScore = document.getElementsByClassName("remove_list");
    while (removeScore.length > 1) {
    removeScore[1].remove();
    }
}
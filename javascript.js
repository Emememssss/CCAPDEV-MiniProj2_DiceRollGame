var value1, value2, diceimagesrc;
var btncondition1; var btncondition2;

document.getElementById("btnply").disabled=true;

function btnplyset(){
    if (btncondition1==true && btncondition2==true){
        document.getElementById("btnply").disabled=false;
        document.getElementById("btnply").style.backgroundColor = "blue";

    }

    else
        document.getElementedById("btnply").disabled=true;

}


function diceimage(x){
    switch (x){
        case 1: diceimagesrc = "images/dice1.png"; break;
        case 2: diceimagesrc = "images/dice2.png"; break;
        case 3: diceimagesrc = "images/dice3.png"; break;
        case 4: diceimagesrc = "images/dice4.png"; break;
        case 5: diceimagesrc = "images/dice5.png"; break;
        case 6: diceimagesrc = "images/dice6.png"; break;
        default: diceimagesrc = "images/dice6.png";
    } 
}

function randomNumberdice1(){
    value1 = Math.floor(Math.random()*6);
    diceimage(value1);
    document.getElementById("dc1").src=diceimagesrc;
    document.getElementById("btn1").disabled=true;
    win();
    btncondition1=true;
    btnplyset();
}

function randomNumberdice2(){
    value2 = Math.floor(Math.random()*6);
    diceimage(value2);
    document.getElementById("dc2").src=diceimagesrc;
    document.getElementById("btn2").disabled=true;
    win();
    btncondition2=true;
    btnplyset();
}

function win(){
    if (value1!=0 && value2!=0){
        if(value1>value2){
            // document.getElementByID("h1_title").innerHTML="TEST";
            alert("win player1");
            document.getElementById("dicegame").innerHTML="🚩 Player 1 Wins!";
        }
        
        else if(value1<value2){
            // document.getElementByID("h1_title").innerHTML="TEST";
            alert("win player 2");
            document.getElementById("dicegame").innerHTML="🚩 Player 2 Wins!";

        }

        else if(value1==value2){
            // document.getElementByID("h1_title").innerHTML="TEST";
            alert("Draw!");
            document.getElementById("dicegame").innerHTML="Draw!";
        }

    }  
}
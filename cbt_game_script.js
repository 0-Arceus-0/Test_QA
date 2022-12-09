alert('Hello Welcome To My CBT PlatForm Good Luck')
var time = 0
var go = 1
var live = 9
var score = 0
var a;
var b;
var c;
var d;
var correct;
var ques;
var ans;
var tick = 0

var num = Math.floor((Math.random()*15)*1);

function buy(){
    if(score >=50){
        score = score - 50
        live++
    }
    else{
        alert("You Need 50 points to buy a life")
    }
}

setInterval(function(){
    if(time >0){
        time--
   }
}, 1000)

setInterval(function(){
    q.innerHTML = ques
    btn1.innerHTML = a
    btn2.innerHTML = b
    btn3.innerHTML = c
    btn4.innerHTML = d
    scores.innerHTML = "score: "+ score
    lives.innerHTML = "lives: "+ live

    if(live == 0){
        result.innerHTML = "Game Over"
        q.innerHTML=""
        btn1.style.display = "none"
        btn2.style.display = "none"
        btn3.style.display = "none"
        btn4.style.display = "none"        
    }

    if(tick ==1 && correct == a){
        btn1.style.backgroudcolor = "#2ECC71";
    }
    if(tick ==1 && correct == b){
        btn2.style.backgroudcolor = "#2ECC71";
    }
    if(tick ==1 && correct == c){
        btn3.style.backgroudcolor = "#2ECC71";
    }
    if(tick ==1 && correct == d){
        btn4.style.backgroudcolor = "#2ECC71";
    }
    if(time == 0 && go == 1){
        result.innerHTML =""
        tick =0

        btn1.style.ponterEvents = "auto"
        btn2.style.ponterEvents = "auto"
        btn3.style.ponterEvents = "auto"
        btn4.style.ponterEvents = "auto"

        btn1.style.backgroudcolor ="white";
        btn2.style.backgroudcolor ="white";
        btn3.style.backgroudcolor ="white";
        btn4.style.backgroudcolor ="white";

        var num = Math.floor((Math.random()*15)+1);
        
        switch(num){
            case 1:
                ques ="The match_____ before we reach the field"
                a = "start"
                b = "started"
                c = " had started"
                d = " Will start"
                correct = "had started"
                break;

                case 2:
                ques ="I shall wait here until he ___ back"
                a = "come"
                b = "comes"
                c = " had come"
                d = " Will come"
                correct = "comes"
                break;

                case 3:
                ques ="Hurry up, the taxi ____ waiting"
                a = "is"
                b = "started"
                c = " has been"
                d = " have started"
                correct = "is"
                break;

                case 4:
                ques ="I hate____ a racist "
                a = "been"
                b = "liking"
                c = "after"
                d = "bean"
                correct = "been"
                break;
                
                case 5:
                ques ="He____ here until you return"
                a = "will stay"
                b = "would stay"
                c = "stays"
                d = "none of these"
                correct = "will stay"
                break;

                case 6:
                ques ="Who is the President of Nigeria"
                a = "Hon.Nyesom Wike"
                b = "Bill Gate"
                c = "Mohammed Buhari"
                d =  "Atiku Abubaka"
                correct = "Mohammed Buhari"
                break;

                case 7:
                ques ="How many state Do Nigeria have"
                a = "35 states"
                b = "36 states"
                c = "38 states"
                d = "50 states"
                correct = "36 states"
                break;

                case 8:
                ques ="Chima and ___ are best friends"
                a = "I"
                b = "we"
                c = "us"
                d = "those"
                correct = "I"
                break;
                
                case 9:
                ques = "opposite of 'AFRAID'"
                a = "shy"
                b = "weak"
                c = "bold"
                d = "strong"
                correct = "bold"
                break;

                case 10:
                ques = "What is the full meaning of LGA"
                a = "Local Government Area"
                b = 'Locally Govern Area'
                c = "Loyal Government Area"
                d = "Legal Government Authority "
                correct = "Local Government Area"
                break;

                case 11:
                ques = "What is the correct spelling"
                a = "Untherstand"
                b = "Understand"
                c = "Onderstand"
                d = "Undastand"
                correct = "Understand"
                break;

                case 12:
                ques = "Nigeria Is made Out of How many lGA"
                a = "567LGA"
                b = "774LGA"
                c = "1276LGA"
                D = "None of above"
                correct = "774LGA"
                break;

                case 13:
                ques ="What Do Human Being Breath in"
                a = "Boron"
                b = "Carbon"
                c = "Oxygen"
                d = "Oxide"
                correct = "Oxygen"
                break;

                case 14:
                ques ="Nigeria Became a repulblic in __"
                a = "1960"
                b = "2022"
                c = "1963"
                d = "1970"
                correct = "1963"
                break;

                case 15:
                ques ="Unscrabble this Word 'chsool'"
                a = "hscool"
                b = "oochsl"
                c = "school"
                d =  "holosc"
                correct = "school"
        }
        go = 0
    }
    

    
}),1

function btn01(){
    tick = 1
    ans = a
    if(a == correct){
        result.innerHTML = "Correct"
        score = score + 10

    }
    else{
        result.innerHTML = "Wrong"
        live--

        btn1.style.backgroudcolor = "red";
        btn2.style.backgroudcolor = "White";
        btn3.style.backgroudcolor = "White";
        btn4.style.backgroudcolor = "White";
    }
    time = 3
    go = 1
    btn1.style.ponterEvents = "none"
    btn2.style.ponterEvents = "none"
    btn3.style.ponterEvents = "none"
    btn4.style.ponterEvents = "none"
}

function btn02(){
    tick = 1
    ans = b
    if(b == correct){
        result.innerHTML = "Correct"
        score = score + 10

    }
    else{
        result.innerHTML = "Wrong"
        live--

        btn2.style.backgroudcolor = "red";
        btn1.style.backgroudcolor = "White";
        btn3.style.backgroudcolor = "White";
        btn4.style.backgroudcolor = "White";
    }
    time = 3
    go = 1
    btn1.style.ponterEvents = "none"
    btn2.style.ponterEvents = "none"
    btn3.style.ponterEvents = "none"
    btn4.style.ponterEvents = "none"
}
function btn03(){
    tick = 1
    ans = c
    if(c == correct){
        result.innerHTML = "Correct"
        score = score + 10

    }
    else{
        result.innerHTML = "Wrong"
        live--

        btn3.style.backgroudcolor = "red";
        btn2.style.backgroudcolor = "White";
        btn1.style.backgroudcolor = "White";
        btn4.style.backgroudcolor = "White";
    }
    time = 3
    go = 1
    btn1.style.ponterEvents = "none"
    btn2.style.ponterEvents = "none"
    btn3.style.ponterEvents = "none"
    btn4.style.ponterEvents = "none"
}
function btn04(){
    tick = 1
    ans = d
    if(d == correct){
        result.innerHTML = "Correct"
        score = score + 10

    }
    else{
        result.innerHTML = "Wrong"
        live--

        btn4.style.backgroudcolor = "red";
        btn2.style.backgroudcolor = "White";
        btn3.style.backgroudcolor = "White";
        btn1.style.backgroudcolor = "White";
    }
    time = 3
    go = 1
    btn1.style.ponterEvents = "none"
    btn2.style.ponterEvents = "none"
    btn3.style.ponterEvents = "none"
    btn4.style.ponterEvents = "none"
}

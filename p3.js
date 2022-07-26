const uInput = document.querySelector('.uInput');
const msg = document.querySelector('.msg');
const check = document.querySelector('.check');
const check2 = document.querySelector('.check2');
const check3 = document.querySelector('.check3');
const butt = document.querySelector('.butt');
let score = 10;
let bs = 0;
var randomNum = Math.floor(Math.random() * 101);

console.log(randomNum);
check.addEventListener('click', function () {

    if (Number(uInput.value) === randomNum) {
        document.querySelector('.num').textContent = " " + randomNum;
        randomNum = Math.floor(Math.random() * 101);
        console.log(randomNum);
        bs += score;
        msg.textContent = 'Congrats! You win!';
        document.querySelector('.tl').style.display = "none";
        document.querySelector('.butt').style.display = "none";
        document.querySelector('.cont').style.display = "none";
        
        document.querySelector('.win').style.display = "block";
        
        document.querySelector('.score2').textContent = " " + score;
        document.querySelector('.highscore').textContent = " " + bs;
        document.querySelector('.highscore2').textContent = " " + bs;

        check2.addEventListener('click', function () { /*This is the play again button*/ 
            document.querySelector('.tl').style.display = "block";
            document.querySelector('.butt').style.display = "block";
            document.querySelector('.cont').style.display = "block";
            
            document.querySelector('.win').style.display = "none";
            score = 10;
            document.querySelector('.score').textContent = " " + score;
            msg.textContent = 'Guess a number.';
            document.querySelector('.msg').style.left = "43%";
        
            uInput.value = "";
        });

    }else if(Number(uInput.value) != randomNum && Number(uInput.value)){
        document.querySelector('.msg').style.left = "43%";
        
        if( Number(uInput.value)> randomNum){
            msg.textContent = 'Your number is high';
        } else{
            msg.textContent = 'Your guess is low';
        }
        score--;
        document.querySelector('.score').textContent = " " + score;
        document.querySelector('.store').textContent = Number(uInput.value); 


    }else if(!Number(uInput.value)){
        msg.textContent = 'You can only enter numbers between 1 and 100';
        document.querySelector('.msg').style.left = "20%";
        score--;
        document.querySelector('.score').textContent = " " + score;
    }


    if(score == 0){
        document.querySelector('.num2').textContent = " " + randomNum;
        document.querySelector('.butt').style.display = "none";
        document.querySelector('.cont').style.display = "none";
        document.querySelector('.lose').style.display = "block";

        check3.addEventListener('click', function () { /*This is the play again button*/ 
            document.querySelector('.tl').style.display = "block";
            document.querySelector('.butt').style.display = "block";
            document.querySelector('.cont').style.display = "block";
            
            document.querySelector('.lose').style.display = "none";
            score = 10;
            document.querySelector('.score').textContent = " " + score;
            msg.textContent = 'Guess a number.';
            document.querySelector('.msg').style.left = "43%";
        
            uInput.value = "";
        });
    }
});

butt.addEventListener('click', function () {
    randomNum = Math.floor(Math.random() * 101);
    console.log(randomNum);
    score = 10;
    document.querySelector('.score').textContent = " " + score;
    msg.textContent = 'Guess a number.';
    document.querySelector('.msg').style.left = "43%";

    uInput.value = "";

    document.querySelector('.store').textContent = '';
});












/*
    For After the gym make the guess history box.
*/
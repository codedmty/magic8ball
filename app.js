function getFormData(){ 
let userName=document.getElementById('name').value;
let userQuestion=document.getElementById('question').value;
let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')

if (userQuestion) {
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Dont count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  case 7:
    eightBall = 'The 8-ball appears broken, please try again';
    break;
                 }
let array = [userName, eightBall];

userName ? document.getElementById("insert").innerHTML = `Hey ${array[0]}, ${array[1]}`: document.getElementById("insert").innerHTML = `${array[1]}`;
} else {
    document.getElementById("insert").innerHTML = "Please enter a question for the Magic 8-Ball to answer"
}

return false;
}
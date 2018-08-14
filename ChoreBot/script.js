let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let openDoor1; 
let openDoor2; 
let openDoor3; 
let numClosedDoors = 3;
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let startButton = document.getElementById('start');
let currentlyPlaying = true;
const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  }else{
    return false;
  }
}

const isClicked = (door) => {
  if(door.src === closedDoorPath) {
    return false;
  }else{
    return true;
  }
} 

const playDoor = () => {
  numClosedDoors--;
  if (numClosedDoors === 0){
      gameOver('win');
  }
};

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0) {
     openDoor1 = botDoorPath;
     openDoor2 = beachDoorPath;
     openDoor3 = spaceDoorPath;
  }else if(choreDoor === 1) {
     openDoor2 = botDoorPath;
     openDoor3 = beachDoorPath;
     openDoor1 = spaceDoorPath;
  }else if(choreDoor === 2) {
     openDoor3 = botDoorPath;
     openDoor1 = beachDoorPath;
     openDoor2 = spaceDoorPath;
  }
}

let botDoorPath ="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

door1.onclick = () => {
  if (!isClicked(door1) && currentlyPlaying) {
    doorImage1.src = openDoor1;
 	  playDoor(door1);
  }
}

door2.onclick = () => {
  if (!isClicked(door2) && currentlyPlaying) {
  	doorImage2.src = openDoor2;
  	playDoor(door2);
  }
}
door3.onclick = () => {
  if (!isClicked(door3) && currentlyPlaying) {
    doorImage3.src = openDoor3;
    playDoor(door3);
  }
}
if (!currentlyPlaying) {
  startButton.onCLick = () => {
    startRound();
  }
}
const gameOver = (str) => {
  if (str === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }else{
    startButton.innerHTML =  'Game over! Play again?';
  }
  currentlyPlaying = false;
};

const startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
   doorImage2.src = closedDoorPath;
   doorImage3.src = closedDoorPath;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}
startRound();

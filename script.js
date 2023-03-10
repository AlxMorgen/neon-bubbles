const board = document.querySelector("#board");
const colors = ["#ffffff", "#d9d4d4", "#b8b8b8", "#878484", "#5e5c5c"];
const SQUARES_NUMBER = 500;



for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
  squareHeight = square.clientHeight
  squareWidth = square.clientWidth
  
}

function setColor(el) {
  const color = getRandomColor()  
  el.style.backgroundColor = `${color}`;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
 
}

function removeColor(el) {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = ""
  

}


function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length) 
   return colors[index]
}


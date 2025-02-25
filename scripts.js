const container = document.querySelector('.container')

let gridSides = 16

function createGrid() {
  gridSquares = gridSides * gridSides;

  for (let i = 0; i < gridSquares; i++) {
    const gridItem = document.createElement('div');
    container.appendChild(gridItem);
    gridItem.classList.add('gridItem');
    gridItem.addEventListener('mouseover', function () {
      //this.classList.add('hovered')});
      this.style.backgroundColor = getRandomColor(); // Assuming you have a getRandomColor function defined
    });
  }

  const gridItems = document.querySelectorAll('.gridItem'); // Moved outside the for loop
  const percentage = 100 / gridSides; // Calculate percentage

  gridItems.forEach((item) => {
    item.style.flexBasis = `${percentage}%`;
    item.style.paddingBottom = `${percentage}%`; // Creates a square effect
  });
}



createGrid()

function getNumberBetween1And100() {
  while (true) {
    let userInput = prompt("Please enter a number between 1 and 100:", "");
    // Check if user clicked Cancel
    if (userInput === null) {
      return null; // User canceled the prompt
    }
    // Convert to number and validate
    const number = Number(userInput);
    if (!isNaN(number) && number >= 1 && number <= 100) {
      return number; // Valid number
    } else {
      alert("Invalid input! Please enter a number between 1 and 100.");}
    }
  }

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }


function newGrid () {
  console.log("✅ newGrid() function called");
  const divs = document.querySelectorAll('.gridItem');
  divs.forEach(div => {
    div.remove();});
  gridSides = getNumberBetween1And100();
  if (gridSides !== null) {
    console.log("User entered: " + gridSides);
    createGrid(); // Create grid only once and only if we have a valid value
  } else {
    console.log("User canceled the input");
    gridSides = 16; // Revert to default if canceled
    createGrid(); // Still create a grid even if canceled (using default value)
  }
  }

const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log("🛑 Button clicked, calling newGrid()");
  newGrid();
});

console.log(getEventListeners(button));


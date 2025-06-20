const containerDiv = document.querySelector("#container");
const buttonContainer = document.createElement("div");
buttonContainer.className = "buttonContainer";

const newGridButton = document.createElement("button");
newGridButton.textContent = "New Grid";

const darkenGridButton = document.createElement("button");
darkenGridButton.textContent = "Darken Mode";

buttonContainer.appendChild(newGridButton);
buttonContainer.appendChild(darkenGridButton);
let darkMode = false;

function removeGrid() {
    const colNodes = document.querySelectorAll(".col");
    const rowNodes = document.querySelectorAll(".row");
    for( let node of colNodes)
    {
        node.remove();
    }

    for( let node of rowNodes)
    {
        node.remove();
    }

}
function newGrid() {
    let newSize;
    do{
        newSize = prompt("What size do you want to make your new grid?: (1-100)");
    } while(newSize < 0 || newSize > 100);

    removeGrid();

    createGrid(newSize);


}
newGridButton.addEventListener("click",newGrid);
darkenGridButton.addEventListener("click", ()=>darkMode = !darkMode);
document.body.insertBefore(buttonContainer, containerDiv);

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function hoverOver(event) {

    const randomColor = random_rgba();
    if(event.target.className === "col")
    {
        event.target.style.backgroundColor = randomColor;

         if(darkMode){

            event.target.style.opacity = 100;

         }
        

    }
        
   
}

function createGrid(size) {

    // const containerDiv = document.querySelector("#container");

    for(let i = 0; i < size; i++)
    {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        containerDiv.appendChild(rowDiv);
        rowDiv.addEventListener( "mouseover", hoverOver);
        for(let j = 0; j < size; j++)
        {
            const colDiv = document.createElement("div");
            colDiv.className = "col";
            rowDiv.appendChild(colDiv);   
        }
        
    }

}

createGrid(16);
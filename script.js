const container = document.getElementById('container');
const btn= document.getElementById('btn');
let gridNbr= 16;

createGrid(gridNbr);

// create and desrtoy grid functions
function createGrid(gridNbr) {
    for (let i = 0; i < gridNbr*gridNbr; i++) {
        let child = document.createElement('div');
        child.classList.add('child');
        // child.textContent= i; //to verify boxs position
        child.style.width= `calc(1000px / ${gridNbr} - 2px)`;
        child.style.height= `calc(1000px / ${gridNbr} - 2px)`;
        container.append(child);
    }

    // grid version with display:grid
    // container.style.display="grid";
    // container.style.gridTemplateColumns = `repeat( ${gridNbr}, 1fr)`;
    // container.style.gridTemplateRows = `repeat( ${gridNbr}, ${80 / gridNbr}dvh)`;

    // grid version with display: flex
    container.style.display= "flex";
    container.style.flexWrap= "wrap";


    children = document.querySelectorAll('.child');
    children.forEach(child => {
        child.onmouseover= ()=> {
            let randomColors= [Math.random()*255, Math.random()*255, Math.random()*255];
            child.classList.add('hover');
            child.style.background = `rgb( ${randomColors[0]}, ${randomColors[1]}, ${randomColors[2]}`;

        }
        child.onmouseleave= ()=> {
            child.classList.remove('hover');
            child.style.background= 'transparent';
        }
    });


}


function destroyGrid() {
    container.innerHTML = '';
    console.log(container.childElementCount);
}


// event listener on size setter button
btn.onclick= () =>{
    let size= prompt('Enter the number of box you want (size x size): ');
    gridNbr = size;
    destroyGrid();
    createGrid(gridNbr);
}

// pan ray effects
container.onmousemove= (e)=>{
    let point = document.createElement('span');
    point.classList.add("px");
    point.style.top= e.pageY + 'px';
    point.style.left= e.pageX + 'px';
    container.appendChild(point);

}

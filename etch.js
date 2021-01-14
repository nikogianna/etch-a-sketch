const container = document.querySelector('#container');

let size  = 50; 
let isDrawing = false;

drawAll();

function drawAll() {

    container.textContent= '';

    //Dynamically add a suitable padding dependent on the number 
    //of elements
    let padding = document.createElement("style");
    padding.innerHTML = `.pad {padding: ${27/size}rem;}`;
    document.body.appendChild(padding);

    for (let i = 0; i < size; i++) {

    let row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('margin');
    container.appendChild(row);

        for (let i = 0; i < size; i++) {
            let column = document.createElement('div');
            let bright = 100;
            column.classList.add('column');
            column.classList.add('pad');
            column.addEventListener("mousedown", (e) => isDrawing = true);
            column.addEventListener("mouseup", (e) => isDrawing = false);
            column.addEventListener("mouseover", (e) => {
                if (isDrawing) 
                    bright = bright > 10 ? bright - 10: bright;
                    // e.target.style["background-color"] = "purple";
                    e.target.style.cssText = `filter: brightness(${bright}%)`
            });
            // column.addEventListener("mouseover", (e) => console.log(e));

            row.appendChild(column);
        }
    }
}

function reset() {
    let resp = window.prompt("What size sketch do you want?");
    while ( resp > 100 ) {
       resp = window.prompt("Size has to be smaller than 100 per side!!!"); 
    }
    if ( resp <= 100 ) {
        size = resp;
        drawAll();
    } 

}
const button = document.getElementById('reset');
button.addEventListener('click', reset);




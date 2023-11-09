document.addEventListener('DOMContentLoaded', () => {

  //reference your grid
  const grid = document.querySelector('.grid');
  let element = document.createElement('div');
console.log('hello');
  let blue = element.style.backgroundImage = "url(/images/blue-candy.png)";
  grid.append(blue);
  //create your board using a for loop
  /*for (let i = 0; i < 64; i++) {
    let randomNumber = Math.floor(Math.random() * 6);
    let element = document.createElement('div');

    if (randomNumber === 0) {
      let blue = element.style.backgroundImage = "url('./images/blue-candy.png')";
      grid.appendChild(blue);
    } else if (randomNumber === 1) {
      grid.appendChild(element.style.backgroundImage = "url('./images/green-candy.png')");
    } else if (randomNumber === 2) {
      grid.appendChild(<div style="background-image: url('./images/orange-candy.png')"></div>);
    } else if (randomNumber === 3) {
      grid.appendChild(<div style="background-image: url('./images/purple-candy.png')"></div>);
    } else if (randomNumber === 4) {
      grid.appendChild(<div style="background-image: url('./images/red-candy.png')"></div>);
    } else {
      grid.appendChild(<div style="background-image: url('./images/yellow-candy.png')"></div>);
    }
  }
*/
})

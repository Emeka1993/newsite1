var Pictures;

// Describe this function...
function Setvalue() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  Pictures = ['https://i.ibb.co/J27q0JK/Screenshot-2022-05-27-at-23-42-57.png', 'https://i.ibb.co/k3vSrZW/Screenshot-2022-05-27-at-23-30-54.png', 'https://i.ibb.co/3mCpBn2/Screenshot-2022-05-27-at-23-42-41.png'];
}


Pictures = ['https://i.ibb.co/J27q0JK/Screenshot-2022-05-27-at-23-42-57.png', 'https://i.ibb.co/k3vSrZW/Screenshot-2022-05-27-at-23-30-54.png', 'https://i.ibb.co/3mCpBn2/Screenshot-2022-05-27-at-23-42-41.png'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", Pictures[0]);
element_image.style.backgroundColor = '#ffcc33';


document.getElementById('next').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", Pictures.shift());
  if (!Pictures.length) {
    Setvalue();
  }

});

document.getElementById('prev').addEventListener('click', (event) => {
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", Pictures.shift());
  if (!Pictures.length) {
    Setvalue();
  }

});

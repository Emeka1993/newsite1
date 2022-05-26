var Pictures;

// Describe this function...
function Setvalue() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  Pictures = ['https://media.istockphoto.com/photos/red-apple-with-leaf-picture-id683494078?k=20&m=683494078&s=612x612&w=0&h=MtHUc7vTTZGAAP4-o87T6v57g1KaJP5Vd_oh7LwQca8=', 'https://thumbs.dreamstime.com/b/whole-grain-bread-white-background-isolated-31522111.jpg', 'https://i.pinimg.com/736x/23/0f/ae/230faeb428fead8e1850b119241bbf90.jpg', 'https://media.istockphoto.com/photos/rice-picture-id671580286?b=1&k=20&m=671580286&s=170667a&w=0&h=KYFPR6L9O-hZlxu9CquocSItz9Idqlj_2gZSszNUndA=', ' https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?quality=90&resize=960,872'];
}


Pictures = ['https://media.istockphoto.com/photos/red-apple-with-leaf-picture-id683494078?k=20&m=683494078&s=612x612&w=0&h=MtHUc7vTTZGAAP4-o87T6v57g1KaJP5Vd_oh7LwQca8=', 'https://thumbs.dreamstime.com/b/whole-grain-bread-white-background-isolated-31522111.jpg', 'https://i.pinimg.com/736x/23/0f/ae/230faeb428fead8e1850b119241bbf90.jpg', 'https://media.istockphoto.com/photos/rice-picture-id671580286?b=1&k=20&m=671580286&s=170667a&w=0&h=KYFPR6L9O-hZlxu9CquocSItz9Idqlj_2gZSszNUndA=', ' https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?quality=90&resize=960,872'];
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

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


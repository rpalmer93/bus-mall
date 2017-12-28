'use strict';

var totalClicks = 0;

var imageOne = document.getElementById('imageOne');
var imageTwo = document.getElementById('imageTwo');
var imageThree = document.getElementById('imageThree');

Product.allProducts = [];

var imageArray = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg',
'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg',
'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg',
'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.image = filepath.split('/')[1];
  this.name = this.image.split('.')[0];
  this.timesShown = 0;
  this.shown = false;
  this.clicked = 0;
  this.previouslyShown = false;
  Product.allProducts.push(this);
};

for (var i = 0; i < 20; i++) {
  var nameExt = imageArray[i].split('/')[1];
  var name = nameExt.split('.')[0];
  new Product(name, imageArray[i]);
};

for (var i = 0; i < imageArray.length; i++) {
    Product.allProducts[i].clicked++;
}

function clickTracker () {
  // count up by 1 with a click, only on img that was clicked
  // renderImages();
  totalClicks++
}


// function addVote1() {
//   var imageDisplayed =
//   console.log(imageOne.src);
//   renderImages();
//
//   // return .clicked++;
//
// };
// function addVote2() {
//   console.log(imageTwo.src);
//   renderImages();
//   // Product.clicked += 1;
//
// };
// function addVote3() {
//   console.log(imageThree.src);
//   renderImages();
//   // Product.clicked += 1;
//
// };

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function renderImages() {
  imageOne.src = Product.allProducts[random(0, 20)].filepath;
  imageTwo.src = Product.allProducts[random(0, 20)].filepath;
  imageThree.src = Product.allProducts[random(0, 20)].filepath;

  if ((imageOne.src === imageTwo.src) || (imageOne.src === imageThree.src)) {

    imageOne.src = Product.allProducts[random(0, 20)].filepath
  };
  if ((imageTwo.src === imageOne.src) || (imageTwo.src === imageThree.src)) {

    imageTwo.src = Product.allProducts[random(0, 20)].filepath
  };
  if ((imageThree.src === imageTwo.src) || (imageThree.src === imageOne.src)) {

    imageThree.src = Product.allProducts[random(0, 20)].filepath
  };
};

imageOne.addEventListener('click', clickTracker);
imageTwo.addEventListener('click', clickTracker);
imageThree.addEventListener('click', clickTracker);


renderImages();

// Start of chart


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

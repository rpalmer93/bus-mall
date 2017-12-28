'use strict';

// var totalClicks = 0;

// Array of all images
var imageArray = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg',
'chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg',
'scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg',
'wine-glass.jpg'];

// Array of all objects stored with data
var allProducts = [];

var list = [];
if (localStorage.list) {
  list = JSON.parse(localStorage.list);
} else {
  list = [];

}

console.log(list);

function ImageConstructor(filepath) {
  this.name = filepath.split('.')[0];
  this.filepath = 'img/' + filepath;
  this.numClicks = 0;
  this.numShown = 0;
  allProducts.push(this);
}

var createProductsArray = function(){
  for(var i = 0; i < allProducts.length; i++){
    new ImageConstructor(imageArray[i]);
  }
  console.log('allProducts');
};

// Call the ImageConstructor to create an array of all objects, stored in allProducts array
createProductsArray();

var imageOne = document.getElementById('imageOne');
var imageTwo = document.getElementById('imageTwo');
var imageThree = document.getElementById('imageThree');
var ctx = document.getElementById("myChart").getContext('2d');

var randomOne, randomTwo, randomThree;

// Shows the images on the page
var showProducts = function(){
  // Random number between 0-20 for placeOne
  randomOne = Math.floor(Math.random() * imageArray.length);
  // Display randome images
  imageOne.src = allProducts[randomOne].filepath;
  // Add one to the numShown counter in the allProducts array
  allProducts[randomOne].numShown += 1;


  randomTwo = Math.floor(Math.random() * imageArray.length);
  while (randomOne === randomTwo) {
    randomTwo = Math.floor(Math.random() * imageArray.length);
  };
  placeTwo.src = allProducts[randomTwo].filepath;
  allProducts[randomTwo].numShown += 1;


  randomThree = Math.floor(Math.random() * imageArray.length);
  while (randomOne === randomThree || randomTwo === randomThree) {
    randThree = Math.floor(Math.random() * imageArray.length);
  }
  placeThree.src = allProducts[randomThree].filepath;
  allProducts[randomThree].numShown += 1;

  console.log([randomOne, randomTwo, randomThree]);
};

// Call showProducts function
showProducts();

var counter = 0;

// Event Listeners when images are clicked
imageOne.addEventListener('click', function(){
  allProducts[randomOne].numClicks += 1;
  counter += 1;
  if (counter >= 25) {
    // Remove the images
    save();
    document.getElementById('imageHolder').remove();
    // Collect Data
    collectData();
    console.log('numberOfTimesShown :: ', numberOfTimesShown);
    console.log('numberOfTimesClicked :: ', numberOfTimesClicked);
    // Show chart
    showMyChart();
    showMyCharttwo ();


  }
  showImages();
});

imageTwo.addEventListener('click', function(){
  allProducts[randomTwo].numClicks += 1;
  counter += 1;
  if (counter >= 25) {
    // Remove the images
    save();
    document.getElementById('imageHolder').remove();
    // Collect Data
    collectData();
    console.log('numberOfTimesShown :: ', numberOfTimesShown);
    console.log('numberOfTimesClicked :: ', numberOfTimesClicked);
    // Show chart
    showMyChart();
    showMyCharttwo ();
  }
  showImages();
});

imageThree.addEventListener('click', function(){
  allProducts[randomThree].numClicks += 1;
  counter += 1;
  if (counter >= 25) {
    // Remove the images
    save();
    document.getElementById('imageHolder').remove();
    // Collect Data
    collectData();
    console.log('numberOfTimesShown :: ', numberOfTimesShown);
    console.log('numberOfTimesClicked :: ', numberOfTimesClicked);
    // Show chart
    document.getElementById('chart');
    showMyChart();
    showMyCharttwo ();
  }
  showImages();
});

var numberOfTimesShown = [];
var numberOfTimesClicked = [];

function numberOfTimesClickedOut(){
  return numberOfTimesClicked;
};
numberOfTimesClickedOut();



var collectData = function() {
  for (var i = 0; i < allProducts.length; i++) {
    numberOfTimesShown.push(allProducts[i].numShown);
    numberOfTimesClicked.push(allProducts[i].numClicks);
  };
};


function showMyChart (){
  console.log('INSIDE CHART', numberOfTimesClicked);
  new Chart(ctx, {


    type: 'bar',
    data: {
         labels: ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'],
        datasets: [{
            label: ['Times Clicked'],
            data: numberOfTimesClicked,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'

            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    maintainAspectRatio: true,
    options: {
      responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

function save(){
  localStorage.list = JSON.stringify(allProducts);
}

'use strict' ;

// queryselector?

// constructor Function
function Imgobject (imgName, filePath) {
    this.imgName = imgName;
    this.filePath = filePath;
    this.timesShown = 0;
    this.timesClicked = 0;
}

// picture objects
let bag = new Imgobject ('bag','assets/bag.jpg');
let banana = new Imgobject ('banana', 'assets/banana.jpg');
let bathroom = new Imgobject ('bathroom','assets/bathroom.jpg');
let boots = new Imgobject ('boots','assets/boots.jpg');
let breakfast = new Imgobject ('breakfast','assets/breakfast.jpg');
let bubblegum = new Imgobject ('bubblegum', 'assets/bubblegum.jpg');
let chair = new Imgobject ('chair','assets/chair.jpg');
let cthulhu = new Imgobject ('cthulhu','assets/cthulhu.jpg');
let dogduck = new Imgobject ('dogduck','assets/dog-duck.jpg');
let dragon = new Imgobject ('dragon','assets/dragon.jpg');
let pen = new Imgobject ('pen','assets/pen.jpg');
let petsweep = new Imgobject ('petsweep','assets/pet-sweep.jpg');
let scissors = new Imgobject ('scissors','assets/scissors.jpg');
let shark = new Imgobject ('shark','assets/shark.jpg');
let sweep = new Imgobject ('sweep','assets/sweep.png');
let tauntaun = new Imgobject ('tauntaun','assets/tauntaun.jpg');
let unicorn = new Imgobject ('unicorn','assets/unicorn.jpg');
let watercan = new Imgobject ('watercan','assets/water-can.jpg');
let wineglass = new Imgobject ('wineglass','assets/wine-glass.jpg');

// img object array
let imgArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass];


let imgSpot = document.getElementById('imgSpot');
let listSpot = document.getElementById('list');
let buttonSpot = document.getElementById('button');
let chartSpot = document.getElementById('chart')
let chartParent = document.getElementsByClassName('chartGoesHere');
let y = 0;
let repeatImg = [];

function showResults () {
    listSpot.innerHTML = ''
    for (let j = 0; j < imgArray.length; j++) {
        let createList = document.createElement('li');
        createList.textContent = imgArray[j].imgName +' was shown: ' + imgArray[j].timesShown + ' and clicked: ' + imgArray[j].timesClicked + ' times';
        listSpot.appendChild(createList);
    }
}


function myChart () {
    let createChart = document.getElementById('chart').getContext('2d');
    let chartLabels = [];
    let chartViews = {
        label: 'Times shown',
        data: [],
        backgroundColor: ["red"],
    };
    let chartClicks = {
        label: 'Times clicked',
        data: [],
        backgroundColor: ["blue"],
    };

    for (let i = 0; i < imgArray.length; i++) {
        chartLabels[i] = imgArray[i].imgName;
        chartViews.data[i] = imgArray[i].timesShown;
        chartClicks.data[i] = imgArray[i].timesClicked;
    };

    let myChart = new Chart(createChart, {
        type: 'bar',
        data: {
            labels: chartLabels,
            datasets: [
                chartViews,
                chartClicks,
            ],
        },
        options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
    });


    console.log(myChart);
}

function randNumb () {
    return Math.floor((Math.random() * (imgArray.length)));
}

function displayImg () {

    while (repeatImg.length > 3) {
        repeatImg.shift()
    }

    while (repeatImg.length < 6) {
        let imgNumb = randNumb();
        if (!repeatImg.includes(imgNumb)) {
            repeatImg.push(imgNumb);
        }
    }
    
    for (let i = 0; i < 3; i++) {
        
        let addImg = document.createElement('button');
        addImg.innerHTML = '<img src=' + imgArray[repeatImg[i + 3]].filePath + '>';
        addImg.id = repeatImg[i + 3];
        imgSpot.appendChild(addImg);
        imgArray[repeatImg[i + 3]].timesShown++;
        let getImgId = document.getElementById(repeatImg[i + 3]);
        getImgId.addEventListener('click', function() {
            imgArray[repeatImg[i + 3]].timesClicked++
            imgSpot.innerHTML = ''; 
            y++;
            displayImg();  
        })
    }

    if (y == 25) { // shows results in list form
    let makeButton = document.createElement('button');
    makeButton.innerHTML = 'Results';
    makeButton.id = 'results'
    buttonSpot.appendChild(makeButton);
    let getButton = document.querySelector('#button');
    getButton.addEventListener('click', function () {
        showResults();
        myChart();
    });
    };
}

displayImg()








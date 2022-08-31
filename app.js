'use strict' ;

//  put 3 imgs from assests into <main> with clickable functionality, after clicking on one it displays another random set of 3, 25 times, clicking on a specific img logs each specific picture clicked, then displays a list of img filenames and the amount of times chosen

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
let dragon = new Imgobject ('dragon','assets/bag.jpg');
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

// random number generator



let imgSpot = document.getElementById('imgSpot');




function round2 () {
    for (let i = 0; i < 3; i++) {
        let x = Math.floor((Math.random() * (imgArray.length)));
        let addImg = document.createElement('input');
        addImg.id = imgArray[x].imgName;
        addImg.type = 'button';
        addImg.style = 'background: url('+imgArray[x].filePath+')';
        imgSpot.appendChild(addImg);
        imgArray[x].timesShown++;
        let getImgId = document.getElementById(imgArray[x].imgName);
        getImgId.addEventListener('click', function() {
            imgArray[x].timesClicked++
            imgSpot.innerHTML = '';
            round2()
        }); 
    }
}

round2();

// make a button that shows a list of results of pictures times clicked, and number of times shown






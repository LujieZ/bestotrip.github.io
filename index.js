const drops = [];
const quote = 'KEEP YOUR HEAD IN THE CLOUD.';
let i = 0;
let speed = 5000;
let canvas, headerHeight;
let h1, h2, section1, section2;

function windowResized() {
  headerHeight = document.getElementById('header').clientHeight - 65;
  resizeCanvas(windowWidth, headerHeight);

  section1 = document.getElementById('section1').getBoundingClientRect();
  section2 = document.getElementById('section2').getBoundingClientRect();
  // print(headerHeight, section1);
  h1.position(section1.x, section1.y-10);
  h2.position(section2.x, section2.y-10);
}

function createH1Element(section1) {
  h1 = createElement('h1', 'Lujie Zhao');
  h1.style('font', 'baskerville');
  h1.style('color', 'rgba(100, 100, 100, 0.5)');
  h1.position(section1.x+2, section1.y+7);
}

function createH2Element(section2) {
  h2 = createElement('h2', 'More About Me');
  h2.style('font-family', 'baskerville');
  h2.style('color', 'rgba(100, 100, 100, 0.5)');
  h2.position(section2.x, section2.y+9);
}

function setup() {
  headerHeight = document.getElementById('header').clientHeight - 65;
  canvas = createCanvas(windowWidth, headerHeight);
  canvas.position(0, 0);
  canvas.style('z-index','-3');
  section1 = document.getElementById('section1').getBoundingClientRect();
  section2 = document.getElementById('section2').getBoundingClientRect();
  // print(headerHeight, section1, section2);

  createH1Element(section1);
  createH2Element(section2);
  for(let i = 0; i < width; i++) {
    drops[i] = random(height);
  }
  stroke(0);
}

function draw() {
  background('#f5f2d5');
  for(let i = 0; i < drops.length; i++) {
    drops[i] += random(2);
    if (drops[i] > height) {
      drops[i] = 0;
    }
    point(i, drops[i]);
  }
  typerEffect();
}

function typerEffect() {
  if (i < quote.length) {
    document.getElementById("name").innerHTML += quote.charAt(i);
    i++;
    setTimeout(typerEffect, speed*100);
  }
}

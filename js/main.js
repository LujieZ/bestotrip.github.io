const drops = [];
const quote = 'KEEP YOUR HEAD IN THE CLOUD.';
let i = 0;
let speed = 5000;
let canvas, headerHeight;
let h1, h2, section1, section2;

function windowResized() {
  headerHeight = document.getElementById('header').clientHeight - 65;
  resizeCanvas(windowWidth, headerHeight);
  canvas.position(0, 0);

  if(document.location.pathname == '../index.html') {
    section1 = document.getElementById('section1').getBoundingClientRect();
    section2 = document.getElementById('section2').getBoundingClientRect();
    h1.position(section1.x, section1.y-10);
    h2.position(section2.x, section2.y-10);
  }
}

function setup() {
  headerHeight = document.getElementById('header').clientHeight - 65;
  canvas = createCanvas(windowWidth, headerHeight);
  canvas.position(0, 0);
  canvas.style('z-index','-3');

  if(document.location.pathname == '../index.html') {
    section1 = document.getElementById('section1').getBoundingClientRect();
    section2 = document.getElementById('section2').getBoundingClientRect();
  }

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

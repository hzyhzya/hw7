var sounds = [];

function preload() {
  soundFormats("m4a");
  for (var i = 0; i < 11; i++) {
    let sound = loadSound(i + ".m4a");
    sounds.push(sound);
  }
}

function setup() {
  createCanvas(700, 300);

  noStroke();
}

function draw() {
  background(225);

  //white keys
  for (var i = 0; i < 11; i++) {
    fill(255);


    if (sounds[i].isPlaying()) {
     fill(220);
    }

    rect(i * 65, 0, 60, 300);


  }


  //piano top
  fill(0);
  rect(0, 0, 700, 40)

  //black keys
  for (var x = 53; x < width; x = x + 65) {
    fill(0)
    rect(x, 0, 20, 150);
  }
}

function keyPressed() {
  if (key == "a") {
    sounds[0].play();
  }

  if (key == "s") {
    sounds[1].play();
  }

  if (key == "d") {
    sounds[2].play();
  }

  if (key == "f") {
    sounds[3].play();
  }

  if (key == "g") {
    sounds[4].play();
  }

  if (key == "h") {
    sounds[5].play();
  }

  if (key == "j") {
    sounds[6].play();
  }

  if (key == "k") {
    sounds[7].play();
  }

  if (key == "l") {
    sounds[8].play();
  }

  if (key == ";") {
    sounds[9].play();
  }

  if (key == "'") {
    sounds[10].play();
  }
}

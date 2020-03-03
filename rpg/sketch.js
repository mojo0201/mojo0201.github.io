// RPG
// Seth Jones
// 2/12/2020

//stats
let illusion = 15;
let conjuration = 15;
let destruction = 15;
let restoration = 15;
let alteration = 15;
let enchanting = 15;
let smithing = 15;
let heavyArmor = 15;
let block = 15;
let twoHanded = 15;
let oneHanded = 15;
let archery = 15;
let lightArmor = 15;
let sneak = 15;
let lockpicking = 15;
let pickpocket = 15;
let speech = 15;
let alchemy = 15;

//Background Variables
let backgroundOne;
let backgroundNumber = 1;

//Races
let argonian;
let argonianDescription;
let breton;
let bretonDescription;
let darkElf;
let darkElfDescription;
let highElf;
let highElfDescription;
let imperial;
let imperialDescription;
let khajiit;
let khajiitDescription;
let nord;
let nordDescription;
let orc;
let orcDescription;
let redguard;
let redguardDescription;
let woodElf;
let woodElfDescription;

//Player
let player;
let playerX = 256;
let playerY = 256;
let keyDownPeriod = 150;
let keyTimeNow;

//Rat
let rat;
let ratX = 384;
let ratY = 384;
let ratPeriod = 1000;
let ratTimeNow = 0;

//States
let up = false;
let down = false;
let right = false;
let left = false;
let state;

//Fonts
let oblivionFont;
let mainFont;

//constants
let characterSize = 32;

function preload() {
  //backgrounds
  backgroundOne = loadImage("assets/backroundOne.png");

  //races
  argonian = loadImage("assets/argonian.png");
  breton = loadImage("assets/breton.png");
  darkElf = loadImage("assets/darkElf.png");
  highElf = loadImage("assets/highElf.png");
  imperial = loadImage("assets/imperial.png");
  khajiit = loadImage("assets/khajiit.png");
  nord = loadImage("assets/nord.png");
  orc = loadImage("assets/orc.png");
  redguard = loadImage("assets/redguard.png");
  woodElf = loadImage("assets/woodElf.png");

  player = loadImage("assets/player.png");
  //enemys
  rat = loadImage("assets/rat.png");
  //fonts
  oblivionFont = loadFont("assets/oblivion.ttf");
  mainFont = loadFont("assets/8bit.ttf");
}

function setup() {
  createCanvas(512, 512);
  frameRate(30);
  textFont(mainFont);
}

function characterSelect() {
  background("black");
  //description
  argonianDescription =
    "This reptilian race, well-suited for the treacherous swamps of their Black Marsh homeland, has developed a natural resistance to diseases and the ability to breathe underwater. They can call upon the Histskin to regenerate health very quickly.";
  bretonDescription =
    "In addition to their quick and perceptive grasp of spellcraft, even the humblest of High Rock's Bretons can boast a resistance to magic. Bretons can call upon the Dragonskin power to absorb spells.";
  darkElfDescription =
    "Also known as 'Dunmer' in their homeland of Morrowind, dark elves are noted for their stealth and magic skills. They are naturally resistant to fire and can call upon their Ancestor's Wrath to surround themselves in fire.";
  highElfDescription =
    "Also known as 'Altmer' in their homeland of Summerset Isle, the high elves are the most strongly gifted in the arcane arts of all the races. They can call upon their Highborn power to regenerate Magicka quickly.";
  imperialDescription =
    "Natives of Cyrodiil, they have proved to be shrewd diplomats and traders. They are skilled with combat and magic. Anywhere gold coins might be found, Imperials always seem to find a few more. They can call upon the Voice of the Emperor to calm an enemy.";
  khajiitDescription =
    "Hailing from the province of Elsweyr, they are intelligent, quick, and agile. They make excellent thieves due to their natural stealthiness. All Khajiit can see in the dark at will and have unarmed claw attacks.";
  nordDescription =
    "Citizens of Skyrim, they are a tall and fair-haired people. Strong and hardy, Nords are famous for their resistance to cold and their talent as warriors. They can use a Battlecry to make opponents flee.";
  orcDescription =
    "The people of the Wrothgarian and Dragontail Mountains, Orcish smiths are prized for their craftsmanship. Orc troops in Heavy Armor are among the finest in the Empire, and are fearsome when using their Berserker Rage.";
  redguardDescription =
    "The most naturally talented warriors in Tamriel, the Redguards of Hammerfell have a hardy constitution and a natural resistance to poison. They can call upon an Adrenaline Rush in combat.";
  woodElfDescription =
    "The clanfolk of the Western Valenwood forests, also known as 'Bosmer'. Wood elves make good scouts and thieves, and there are no finer archers in all of Tamriel. They have natural resistances to both poisons and diseases. They can Command Animals to fight for them.";

  image(argonian, 96, characterSize, characterSize, characterSize);
  image(breton, 128, characterSize, characterSize, characterSize);
  image(darkElf, 160, characterSize, characterSize, characterSize);
  image(highElf, 192, characterSize, characterSize, characterSize);
  image(imperial, 224, characterSize, characterSize, characterSize);
  image(khajiit, 256, characterSize, characterSize, characterSize);
  image(nord, 288, characterSize, characterSize, characterSize);
  image(orc, 320, characterSize, characterSize, characterSize);
  image(redguard, 352, characterSize, characterSize, characterSize);
  image(woodElf, 384, characterSize, characterSize, characterSize);

  if (mouseX > 96 && mouseX < 128 && mouseY > 32 && mouseY < 64) {
    fill("white");
    textSize(14);
    text(argonianDescription, 32, 384, 448, 448);
  }
  if (mouseX > 128 && mouseX < 160 && mouseY > 32 && mouseY < 64) {
    fill("white");
    textSize(14);
    text(bretonDescription, 32, 384, 448, 448);
  }
  if (mouseX > 160 && mouseX < 192 && mouseY > 32 && mouseY < 64) {
    fill("white");
    textSize(14);
    text(darkElfDescription, 32, 384, 448, 448);
  }
  if (mouseX > 192 && mouseX < 224 && mouseY > 32 && mouseY < 64) {
    fill("white");
    textSize(14);
    text(highElfDescription, 32, 384, 448, 448);
  }
  if (mouseX > 224 && mouseX < 256 && mouseY > 32 && mouseY < 64) {
    fill("white");
    textSize(14);
    text(imperialDescription, 32, 384, 448, 448);
  } 
  if (mouseX > 256 && mouseX < 288 && mouseY > 32 && mouseY < 64) {
    fill("white");
    textSize(14);
    text(khajiitDescription, 32, 384, 448, 448);
  }  
  if (mouseX > 288 && mouseX < 320 && mouseY > 32 && mouseY < 64) {
    fill("white");
    textSize(14);
    text(nordDescription, 32, 384, 448, 448);
  }
  if (mouseX > 320 && mouseX < 352 && mouseY > 32 && mouseY < 64) {
    fill("white");
    textSize(14);
    text(orcDescription, 32, 384, 448, 448);
  }
  if (mouseX > 352 && mouseX < 384 && mouseY > 32 && mouseY < 64) {
    fill("white");
    textSize(14);
    text(redguardDescription, 32, 384, 448, 448);
  }
  if (mouseX > 384 && mouseX < 416 && mouseY > 32 && mouseY < 64) {
    fill("white");
    textSize(14);
    text(woodElfDescription, 32, 384, 448, 448);
  }
}

function ratMovement() {
  let chance = Math.ceil(random(0, 4));
  if (chance === 1) {
    if (ratY > characterSize) {
      ratY = ratY - characterSize;
    }
  } else if (chance === 2) {
    if (ratY < 448) {
      ratY = ratY + characterSize;
    }
  } else if (chance === 3) {
    if (ratX < 480) {
      ratX = ratX + characterSize;
    }
  } else if (chance === 4) {
    if (ratX > characterSize) {
      ratX = ratX - characterSize;
    }
  }
}

function keyPressed() {
  //Movement Keys
  if (keyCode === UP_ARROW || key === "w") {
    up = true;
    keyTimeNow = millis();
  }
  if (keyCode === DOWN_ARROW || key === "s") {
    down = true;
    keyTimeNow = millis();
  }
  if (keyCode === RIGHT_ARROW || key === "d") {
    right = true;
    keyTimeNow = millis();
  }
  if (keyCode === LEFT_ARROW || key === "a") {
    left = true;
    keyTimeNow = millis();
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW || key === "w") {
    up = false;
  }
  if (keyCode === DOWN_ARROW || key === "s") {
    down = false;
  }
  if (keyCode === RIGHT_ARROW || key === "d") {
    right = false;
  }
  if (keyCode === LEFT_ARROW || key === "a") {
    left = false;
  }
}

function movement() {
  if (playerX === ratX && playerY === ratY) {
    state = "battle";
    up = false;
    down = false;
    right = false;
    left = false;
  }
  if (up === true && millis() >= keyTimeNow + keyDownPeriod) {
    if (playerY > characterSize) {
      playerY -= characterSize;
      keyTimeNow = millis();
    }
  }
  if (down === true && millis() >= keyTimeNow + keyDownPeriod) {
    if (playerY < 448) {
      playerY += characterSize;
      keyTimeNow = millis();
    }
  }
  if (right === true && millis() >= keyTimeNow + keyDownPeriod) {
    if (playerX < 480) {
      playerX += characterSize;
      keyTimeNow = millis();
    }
  }
  if (left === true && millis() >= keyTimeNow + keyDownPeriod) {
    if (playerX > characterSize) {
      playerX -= characterSize;
      keyTimeNow = millis();
    }
  }
}

// function states(){
//   if (state === "battle") {
//   }
// }

function draw() {
  movement();
  background(backgroundOne);

  image(player, playerX, playerY, characterSize, characterSize);
  image(rat, ratX, ratY, characterSize, characterSize);
  characterSelect();

  if (ratX !== playerX && ratY !== playerY) {
    if (millis() >= ratTimeNow + ratPeriod) {
      ratMovement();
      ratTimeNow = millis();
    }
  } else if (ratX === playerX && ratY !== playerY) {
    if (millis() >= ratTimeNow + ratPeriod) {
      ratMovement();
      ratTimeNow = millis();
    }
  } else if (ratX !== playerX && ratY === playerY) {
    if (millis() >= ratTimeNow + ratPeriod) {
      ratMovement();
      ratTimeNow = millis();
    }
  }
}

// RPG
// Seth Jones
// 2/12/2020

//Background Variables
let backgroundOne;
let backgroundNumber = 0;

//detection
let overArgonian = false;
let overBreton = false;
let overDarkElf = false;
let overHighElf = false;
let overImperial = false;
let overKhajiit = false;
let overNord = false;
let overOrc = false;
let overRedguard = false;
let overWoodElf = false;

//races

let argonian;
let breton;
let darkElf;
let highElf;
let imperial;
let khajiit;
let nord;
let orc;
let redguard;
let woodElf;

//Player
let player = {
  x: 256,
  y: 256,
  health : 100,
  magicka : 100,
  illusion : 15,
  conjuration : 15,
  destruction : 15,
  restoration : 15,
  alteration : 15,
  enchanting : 15,
  smithing : 15,
  heavyArmor : 15,
  block : 15,
  twoHanded : 15,
  oneHanded : 15,
  archery : 15,
  lightArmor : 15,
  sneak : 15,
  lockpicking : 15,
  pickpocket : 15,
  speech : 15,
  alchemy : 15
};
let keyDownPeriod = 150;
let keyTimeNow;

//Rat
let rat = {
  x : 384,
  y : 384,
  health : 5,
  attack : 2
};
let ratSprite;
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
  //enemys
  ratSprite = loadImage("assets/rat.png");
  //fonts
  oblivionFont = loadFont("assets/oblivion.ttf");
  mainFont = loadFont("assets/8bit.ttf");
}

//N = 12.5 * N**2 + 62.5 * N - 75
//exp to go from level 1 to N

function setup() {
  createCanvas(512, 512);
  textFont(mainFont);
}

function characterSelect() {
  if (backgroundNumber === 0) {
    backgroundNumber = 0;
    background("black");
    //description
    let argonianDescription =
      "This reptilian race, well-suited for the treacherous swamps of their Black Marsh homeland, has developed a natural resistance to diseases and the ability to breathe underwater. They can call upon the Histskin to regenerate health very quickly.";
    let bretonDescription =
      "In addition to their quick and perceptive grasp of spellcraft, even the humblest of High Rocks Bretons can boast a resistance to magic. Bretons can call upon the Dragonskin power to absorb spells.";
    let darkElfDescription =
      "Also known as Dunmer in their homeland of Morrowind, dark elves are noted for their stealth and magic skills. They are naturally resistant to fire and can call upon their Ancestors Wrath to surround themselves in fire.";
    let highElfDescription =
      "Also known as Altmer in their homeland of Summerset Isle, the high elves are the most strongly gifted in the arcane arts of all the races. They can call upon their Highborn power to regenerate Magicka quickly.";
    let imperialDescription =
      "Natives of Cyrodiil, they have proved to be shrewd diplomats and traders. They are skilled with combat and magic. Anywhere gold coins might be found, Imperials always seem to find a few more. They can call upon the Voice of the Emperor to calm an enemy.";
    let khajiitDescription =
      "Hailing from the province of Elsweyr, they are intelligent, quick, and agile. They make excellent thieves due to their natural stealthiness. All Khajiit can see in the dark at will and have unarmed claw attacks.";
    let nordDescription =
      "Citizens of Skyrim, they are a tall and fair-haired people. Strong and hardy, Nords are famous for their resistance to cold and their talent as warriors. They can use a Battlecry to make opponents flee.";
    let orcDescription =
      "The people of the Wrothgarian and Dragontail Mountains, Orcish smiths are prized for their craftsmanship. Orc troops in Heavy Armor are among the finest in the Empire, and are fearsome when using their Berserker Rage.";
    let redguardDescription =
      "The most naturally talented warriors in Tamriel, the Redguards of Hammerfell have a hardy constitution and a natural resistance to poison. They can call upon an Adrenaline Rush in combat.";
    let woodElfDescription =
      "The clanfolk of the Western Valenwood forests, also known as Bosmer. Wood elves make good scouts and thieves, and there are no finer archers in all of Tamriel. They have natural resistances to both poisons and diseases. They can Command Animals to fight for them.";

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
      overArgonian = true;
      fill("white");
      //Name and Description
      textSize(20);
      text("The Argonian", 32, 300, 448, 384);
      textSize(14);
      text(argonianDescription, 32, 384, 448, 448);
      //Stat Increases
      text("Stat Increases", 32, 345);
      textSize(12);
      text(
        "10 Lockpicking 5 Sneak 5 Light Armor 5 Pickpocket 5 Restoration",
        32,
        365
      );
    }
    else {
      overArgonian = false;
    }

    if (mouseX > 128 && mouseX < 160 && mouseY > 32 && mouseY < 64) {
      overBreton = true;
      fill("white");
      //Name and Description
      textSize(20);
      text("The Breton", 32, 300, 448, 384);
      textSize(14);
      text(bretonDescription, 32, 384, 448, 448);
      //Stat Increases
      text("Stat Increases", 32, 345);
      textSize(12);
      text(
        "10 Conjuration 5 Speech 5 Alchemy 5 Illusion 5 Restoration 5 Alteration",
        32,
        365
      );
    }
    else {
      overBreton = false;
    }

    if (mouseX > 160 && mouseX < 192 && mouseY > 32 && mouseY < 64) {
      overDarkElf = true;
      fill("white");
      //Name and Description
      textSize(20);
      text("The Dark Elf", 32, 300, 448, 384);
      textSize(14);
      text(darkElfDescription, 32, 384, 448, 448);
      //Stat Increases
      text("Stat Increases", 32, 345);
      textSize(12);
      text("10 Destruction 5 Sneak 5 Alchemy 5 Light Armor 5 Illusion", 32, 365);
    }
    else {
      overDarkElf = false;
    }

    if (mouseX > 192 && mouseX < 224 && mouseY > 32 && mouseY < 64) {
      overHighElf = true;
      fill("white");
      //Name and Description
      textSize(20);
      text("The High Elf", 32, 300, 448, 384);
      textSize(14);
      text(highElfDescription, 32, 384, 448, 448);
      //Stat Increases
      text("Stat Increases", 32, 345);
      textSize(12);
      text(
        "10 Illusion 5 Destruction 5 Cojuration 5 Alteration 5 Restoration 5 Enchanting",
        32,
        365
      );
    }
    else {
      overHighElf = false;
    }

    if (mouseX > 224 && mouseX < 256 && mouseY > 32 && mouseY < 64) {
      overImperial = true;
      fill("white");
      //Name and Description
      textSize(20);
      text("The Imperial", 32, 300, 448, 384);
      textSize(14);
      text(imperialDescription, 32, 384, 448, 448);
      //Stat Increases
      text("Stat Increases", 32, 345);
      textSize(12);
      text(
        "10 Restoration 5 Enchanting 5 Heavy Armor 5 One-Handed 5 Block 5 Destruction",
        32,
        365
      );
    }
    else {
      overImperial = false;
    }

    if (mouseX > 256 && mouseX < 288 && mouseY > 32 && mouseY < 64) {
      overKhajiit = true;
      fill("white");
      //Name and Description
      textSize(20);
      text("The Khajiit", 32, 300, 448, 384);
      textSize(14);
      text(khajiitDescription, 32, 384, 448, 448);
      //Stat Increases
      text("Stat Increases", 32, 345);
      textSize(12);
      text(
        "10 Sneak 5 Lockpicking 5 Archery 5 Pickpocket 5 One-Handed 5 Alchemy",
        32,
        365
      );
    }
    else {
      overKhajiit = false;
    }

    if (mouseX > 288 && mouseX < 320 && mouseY > 32 && mouseY < 64) {
      overNord = true;
      fill("white");
      //Name and Description
      textSize(20);
      text("The Nord", 32, 300, 448, 384);
      textSize(14);
      text(nordDescription, 32, 384, 448, 448);
      //Stat Increases
      text("Stat Increases", 32, 345);
      textSize(12);
      text(
        "10 Two-Handed 5 Smithing 5 Block 5 Light Armor 5 One-Handed 5 Speech",
        32,
        365
      );
    }
    else {
      overNord = false;
    }

    if (mouseX > 320 && mouseX < 352 && mouseY > 32 && mouseY < 64) {
      overOrc = true;
      fill("white");
      //Name and Description
      textSize(20);
      text("The Orsimer", 32, 300, 448, 384);
      textSize(14);
      text(orcDescription, 32, 384, 448, 448);
      //Stat Increases
      text("Stat Increases", 32, 345);
      textSize(12);
      text(
        "10 Heavy Armor 5 Smithing 5 One-Handed 5 Block 5 Enchanting 5 Two-Handed",
        32,
        365
      );
    }
    else {
      overOrc = false;
    }

    if (mouseX > 352 && mouseX < 384 && mouseY > 32 && mouseY < 64) {
      overRedguard = true;
      fill("white");
      //Name and Description
      textSize(20);
      text("The Redguard", 32, 300, 448, 384);
      textSize(14);
      text(redguardDescription, 32, 384, 448, 448);
      //Stat Increases
      text("Stat Increases", 32, 345);
      textSize(12);
      text(
        "10 One-Handed 5 Archery 5 Block 5 Smithing 5 Destruction 5 Alteration",
        32,
        365
      );
    }
    else {
      overRedguard = false;
    }

    if (mouseX > 384 && mouseX < 416 && mouseY > 32 && mouseY < 64) {
      overWoodElf = true;
      fill("white");
      //Name and Description
      textSize(20);
      text("The Wood Elf", 32, 300, 448, 384);
      textSize(14);
      text(woodElfDescription, 32, 384, 448, 448);
      //Stat Increases
      text("Stat Increases", 32, 345);
      textSize(12);
      text(
        "10 Archery 5 Sneak 5 Alchemy 5 Lockpicking 5 Pickpocket 5 Light Armor",
        32,
        365
      );
    }
    else {
      overWoodElf = false;
    }
  }
}

function mousePressed() {
  if (backgroundNumber === 0) {
    if (overArgonian) {
      player.race = argonian;
      backgroundNumber = 1;
      background(backgroundOne);
      player.lockpicking += 10;
      player.sneak += 5;
      player.lightArmor += 5;
      player.pickpocket += 5;
      player.restoration += 5;
    }
    if (overBreton) {
      player.race = breton;
      backgroundNumber = 1;
      background(backgroundOne);
      player.conjuration += 10;
      player.speech += 5;
      player.alchemy += 5;
      player.illusion += 5;
      player.restoration += 5;
      player.alteration += 5;
    }
    if (overDarkElf) {
      player.race = darkElf;
      backgroundNumber = 1;
      background(backgroundOne);
      player.destruction += 10;
      player.sneak += 5;
      player.alchemy += 5;
      player.lightArmor += 5;
      player.illusion += 5;

    }
    if (overHighElf) {
      player.race = highElf;
      backgroundNumber = 1;
      background(backgroundOne);
      player.magicka += 50;
      player.illusion += 10;
      player.destruction += 5;
      player.conjuration += 5;
      player.alteration += 5;
      player.restoration += 5;
      player.enchanting += 5;
    }
    if (overImperial) {
      player.race = imperial;
      backgroundNumber = 1;
      background(backgroundOne);
      player.restoration += 10 ;
      player.enchanting += 5;
      player.heavyArmor += 5;
      player.oneHanded += 5;
      player.block += 5;
      player.destruction += 5;
    }
    if (overKhajiit) {
      player.race = khajiit;
      backgroundNumber = 1;
      background(backgroundOne);
      player.sneak += 10;
      player.lockpicking += 5; 
      player.archery += 5;
      player.pickpocket += 5;
      player.oneHanded += 5;
      player.alchemy += 5;
    }
    if (overNord) {
      player.race = nord;
      backgroundNumber = 1;
      background(backgroundOne);
      player.twoHanded += 10;
      player.smithing += 5;
      player.block += 5;
      player.lightArmor += 5;
      player.oneHanded += 5;
      player.speech += 5;
    }
    if (overOrc) {
      player.race = orc;
      backgroundNumber = 1;
      background(backgroundOne);
      player.heavyArmor += 10;
      player.smithing += 5;
      player.oneHanded += 5;
      player.block += 5;
      player.enchanting += 5;
      player.twoHanded += 5;
    }
    if (overRedguard) {
      player.race = redguard;
      backgroundNumber = 1;
      background(backgroundOne);
      player.oneHanded += 10;
      player.archery += 5;
      player.block += 5;
      player.smithing += 5;
      player.destruction += 5;
      player.alteration += 5;
    }
    if (overWoodElf) {
      player.race = woodElf;
      backgroundNumber = 1;
      background(backgroundOne);
      player.archery += 10;
      player.sneak += 5;
      player.alchemy += 5;
      player.lockpicking += 5;
      player.pickpocket += 5;
      player.lightArmor += 5;
    }
  }
}

function ratMovement() {
  let chance = Math.ceil(random(0, 4));
  if (chance === 1) {
    if (rat.y > characterSize) {
      rat.y = rat.y - characterSize;
    }
  }
  else if (chance === 2) {
    if (rat.y < 448) {
      rat.y = rat.y + characterSize;
    }
  }
  else if (chance === 3) {
    if (rat.x < 480) {
      rat.x = rat.x + characterSize;
    }
  }
  else if (chance === 4) {
    if (rat.x > characterSize) {
      rat.x = rat.x - characterSize;
    }
  }
}

function ratDetection() {
  if (rat.x !== player.x && rat.y !== player.y) {
    if (millis() >= ratTimeNow + ratPeriod) {
      ratMovement();
      ratTimeNow = millis();
    }
  }
  else if (rat.x === player.x && rat.y !== player.y) {
    if (millis() >= ratTimeNow + ratPeriod) {
      ratMovement();
      ratTimeNow = millis();
    }
  }
  else if (rat.x !== player.x && rat.y === player.y) {
    if (millis() >= ratTimeNow + ratPeriod) {
      ratMovement();
      ratTimeNow = millis();
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
  // if (key === "e"){

  // }
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
  if (player.x === rat.x && player.y === rat.y) {
    state = "battle";
    up = false;
    down = false;
    right = false;
    left = false;
  }
  if (up && millis() >= keyTimeNow + keyDownPeriod) {
    if (player.y > characterSize) {
      player.y -= characterSize;
      keyTimeNow = millis();
    }
  }
  if (down && millis() >= keyTimeNow + keyDownPeriod) {
    if (player.y < 448) {
      player.y += characterSize;
      keyTimeNow = millis();
    }
  }
  if (right && millis() >= keyTimeNow + keyDownPeriod) {
    if (player.x < 480) {
      player.x += characterSize;
      keyTimeNow = millis();
    }
  }
  if (left && millis() >= keyTimeNow + keyDownPeriod) {
    if (player.x > characterSize) {
      player.x -= characterSize;
      keyTimeNow = millis();
    }
  }
}

function draw() {
  characterSelect();
  if (backgroundNumber === 1) {
    movement();
    background(backgroundOne);
    image(player.race, player.x, player.y, characterSize, characterSize);
    image(ratSprite, rat.x, rat.y, characterSize, characterSize);
    ratDetection();

  }
}

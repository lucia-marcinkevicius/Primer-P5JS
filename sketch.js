var a = 22; // tamaño cuad negros
var b = 17; // tamaño cuad grises
var c = 13; // tamaño cuad blancos

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(255);

  noFill();
  bezier(42, 323, 45, 300, 55, 230, 150, 240); // ------ frente

  bezier(25, 385, -25, 365, 50, 370, 42, 323); // ------ nariz

  bezier(29, 398, 30, 379, 25, 388, 26, 385); // ------- surco

  bezier(32, 412, 5, 407, 30, 401, 29, 398); // -------- labio superior

  bezier(34, 433, 4, 423, 25, 417, 32, 413); // -------- labio inferior

  bezier(85, 460, 30, 475, 20, 467, 34, 433); // ------- mentón

  bezier(80, 461, 190, 455, -30, 590, 400, 590); // ---- linea cuello

  push(); // ----------------------------- 1er capa cuadrados
  angleMode(DEGREES);
  translate(100, 100);
  rotate(-20);
  push(); // ---------- negro
  fill(0);
  rect(110, 140, a, a);
  rect(40, 165, a, a);
  rect(70, 210, a, a);
  pop();
  push(); // ---------- gris oscuro
  fill(130);
  rect(155, 150, b, b);
  push(); // ----------- gris claro
  fill(230);
  rect(220, 250, b, b);
  pop();
  pop();
  // ------------------ blanco
  rect(180, 0, c, c);
  rect(350, 160, c, c);
  pop(); // ------------------------------ fin 1er capa cuadrados

  push(); // ------------------------------ 2da capa cuadrados
  push(); // ----------- negro
  fill(0);
  rect(160, 205, a, a);
  rect(275, 245, a, a);
  push(); // ----------- gris oscuro
  fill(130);
  rect(230, 140, b, b);
  rect(335, 235, b, b);
  pop();
  // ------------------ blanco
  fill(255);
  rect(508, -4, c, c);
  rect(400, 140, c, c);
  rect(505, 220, c, c);
  pop();
  pop(); // ------------------------------ fin 2da capa cuadrados

  push(); // ---------------------------- 3er capa cuadrados
  angleMode(DEGREES);
  translate(100, 100);
  rotate(20);
  push(); // --------- negro
  fill(0);
  rect(135, 50, a, a);
  rect(160, 130, a, a);
  rect(235, 115, a, a);
  pop();
  push(); // --------- gris claro
  fill(230);
  rect(340, -20, b, b);
  rect(135, -70, b, b);
  pop();
  // ----------------- blanco
  rect(180, -180, c, c);
  rect(195, -80, c, c);
  rect(320, -170, c, c);
  pop(); // ------------------------------ fin 3er capa cuadrados

  push(); // ------------------------------ 4ta capa cuadrados
  angleMode(DEGREES);
  translate(100, 100);
  rotate(40);
  push(); // ---------- negro
  fill(0);
  rect(110, -20, a, a);
  rect(190, 0, a, a);
  rect(240, 65, a, a);
  pop();
  push(); // ---------- gris claro
  fill(230);
  rect(180, -110, b, b);
  rect(255, -115, b, b);
  push(); // ----------- gris oscuro
  fill(130);
  rect(300, -10, b, b);
  pop();
  pop();
  // ----------------- blanco
  rect(170, -295, c, c);
  rect(190, -215, c, c);

  pop(); // ----------------------------- fin 4ta capa cuadrados

  //console.log("X:"+mouseX+"Y:"+mouseY);
}

// CSS Styles importieren; kann gelöscht werden falls nicht benötigt
import './style.css';

import { drawCircle } from './circle';

export function setup() {
  // Diese Funktion wird einmal beim Programmstart aufgerufen.
  // https://p5js.org/reference/#/p5/setup
  p.createCanvas(700, 500);
}

export function preload() {
  // Diese Funktion wird vor `setup` aufgerufen. Wir verwenden sie,
  // um z.B. Bilder zu laden.
  // https://p5js.org/reference/#/p5/preload
}

export function keyPressed() {
  // Diese Funktion wird aufgerufen, wenn eine Taste gedrückt wird.
  // https://p5js.org/reference/#/p5/keyPressed
  console.log(`Key ${p.keyCode} has been pressed`);
}

export function mousePressed() {
  // Diese Funktion wird aufgerufen, wenn die Mause geklickt wird.
  // https://p5js.org/reference/#/p5/mousePressed
  console.log(`Mouse was pressed at ${p.mouseX}/${p.mouseY}`);
}

export function draw() {
  // Diese Funktion wird aufgerufen, wenn der Bildschirm aktualisiert
  // werden muss.
  // https://p5js.org/reference/#/p5/draw
  p.background('yellow');

  // Beispiel zeichne ein Rectangle
  p.push();

  // translate to where you want the center of the ellipse to be
  //p.translate(p.width / 2, p.height / 2);
  p.translate(40, 40);

  // rotate using the frameCount (increases by one on each frame)
  p.rotate(p.frameCount * 0.025);
  p.stroke('red');
  p.fill('green');
  p.rect(-20, -20, 40, 40);
  p.pop();

  drawCircle({ x: 200, y: 100 });
}

import { p, start } from './setupCode';
start();

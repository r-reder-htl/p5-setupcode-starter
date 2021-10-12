// Wir laden p5js
import p5 = require('p5');
import { setup, draw, keyPressed, mousePressed, preload } from './index';

// Wir informieren p5js, welche Funktionen unser Programm bereitstellt.
// Mit TypeScript und p5js verwendet man am besten den "instance mode"
// statt dem "global mode" (https://p5js.org/reference/#/p5/p5).
// Man kann die Funktionen entfernen, die man in der jeweiligen Übung
// nicht braucht (z.B. kein Reagieren auf Tastatur -> `keyPressed` weg).
export let p: p5;
export function start(): p5 {
  return new p5((p5: p5) => {
    p = p5;
    p.preload = preload;
    p.setup = setup;

    p.draw = draw;
    p.keyPressed = keyPressed;
    p.mousePressed = mousePressed;
  });
}

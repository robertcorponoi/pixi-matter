"use strict";

import { PixiMatter, PhysicsSprite, PhysicsGraphics } from "../pixi-matter.js";

const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
});
document.body.appendChild(app.view);

const pixiMatter = new PixiMatter();

app.loader.add("elephant", "../examples/assets/elephant.png");
app.loader.add("giraffe", "../examples/assets/giraffe.png");

/**
 * Air Friction
 */
app.loader.load((loader, resources) => {
    const elephant1 = new PhysicsSprite(
        resources.elephant.texture,
        { x: 200, y: 100, width: 60, height: 60 },
        { frictionAir: 0.001 },
    );
    const elephant2 = new PhysicsSprite(
        resources.elephant.texture,
        { x: 400, y: 100, width: 60, height: 60 },
        { frictionAir: 0.05 },
    );
    const elephant3 = new PhysicsSprite(
        resources.elephant.texture,
        { x: 600, y: 100, width: 60, height: 60 },
        { frictionAir: 0.1 },
    );

    const wall1 = new PhysicsGraphics(
        { x: 0, y: 0, width: 800, height: 50 },
        { isStatic: true },
    );
    const wall2 = new PhysicsGraphics(
        { x: 750, y: 0, width: 50, height: 600 },
        { isStatic: true },
    );
    const wall3 = new PhysicsGraphics(
        { x: 0, y: 550, width: 800, height: 50 },
        { isStatic: true },
    );
    const wall4 = new PhysicsGraphics(
        { x: 0, y: 0, width: 50, height: 600 },
        { isStatic: true },
    );

    pixiMatter.addToWorld(
        elephant1,
        elephant2,
        elephant3,
        wall1,
        wall2,
        wall3,
        wall4,
    );
    app.stage.addChild(
        elephant1,
        elephant2,
        elephant3,
        wall1,
        wall2,
        wall3,
        wall4,
    );
});

app.ticker.add(() => pixiMatter.update());

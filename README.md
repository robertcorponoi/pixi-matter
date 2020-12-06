<p align="center">
  <img width="250" height="250" src="https://github.com/robertcorponoi/graphics/blob/master/pixi-matter/logo/logo.png?raw=true">
</p>

<h1 align="center">PixiMatter</h1>

<p align="center">Easily create pixi sprites and graphics objects with matter physics bodies.<p>

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/pixi-matter.svg?style=flat)](https://www.npmjs.com/package/pixi-matter)
  [![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/pixi-matter/badge.svg)](https://snyk.io/test/github/robertcorponoi/pixi-matter)
  ![npm](https://img.shields.io/npm/dt/pixi-matter)
  [![NPM downloads](https://img.shields.io/npm/dm/pixi-matter.svg?style=flat)](https://www.npmjs.com/package/pixi-matter)
  <a href="https://badge.fury.io/js/pixi-matter"><img src="https://img.shields.io/github/issues/robertcorponoi/pixi-matter.svg" alt="issues" height="18"></a>
  <a href="https://badge.fury.io/js/pixi-matter"><img src="https://img.shields.io/github/license/robertcorponoi/pixi-matter.svg" alt="license" height="18"></a>

</div>

## **Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [PixiMatter](#piximatter)
- [PhysicsSprite](#physicssprite)
  - [SpriteOptions](#spriteoptions)
- [PhysicsGraphics](#physicsgraphics)
  - [GraphicsOptions](#graphicsoptions)
- [Examples](#examples)

## **Installation**

To install this module through npm, use:

```
$ npm install pixi-matter
```

## **Usage**

`pixi-matter` consists of a main module that manages the running and updating of the matter engine and options modules that are used to create the pixi physics objects.

An example of a simple setup can be seen below, if you want to see specifics check out the [PixiMatter](#piximatter), [PhysicsSprite](#physicssprite), and [PhysicsGraphics](#physicsgraphics) sections.

```js
import { PixiMatter, PhysicsSprite } from 'pixi-matter';

// Create your PIXI Application however you wish and add it to the document.
const app = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0x000000 });
document.body.appendChild(app.view);

// Create a new instance of PixiMatter.
const pixiMatter = new PixiMatter();

// For this example we load up a rectangular and circular sprite, respectively.
app.loader.add('elephant', 'assets/elephant.png');
app.loader.add('giraffe', 'assets/giraffe.png');

app.loader.add((loader, resources) => {
  // Create two sprites from the elephant texture and one sprite from the giraffe texture loaded.
  // Take note that the first parameter is the texture, the second is an object where you have to
  // specify the sprite's options, and the third is the options for the physics body of the sprite.
  const elephant1 = new PhysicsSprite(resources.elephant.texture, { x: 200, y: 100, width: 60, height: 60 }, { frictionAir: 0.001 });
  const elephant2 = new PhysicsSprite(resources.elephant.texture, { x: 400, y: 100, width: 60, height: 60 }, { frictionAir: 0.05 });
  const giraffe = new PhysicsSprite(resources.elephant.texture, { x: 600, y: 100, width: 60, isCircle: true }, { frictionAir: 0.1 });

  // Add the sprites to the matter world so that they can be updated by the physics engine.
  pixiMatter.addToWorld(elephant1, elephant2, giraffe);

  // Add the sprites to the the renderer using pixi.
  app.stage.addChild(elephant1, elephant2, giraffe);
});

// Add the `update` method to the pixi ticker or custom animation function so that the position
// and rotation of the sprites added can be updated to match the position and rotation of their
// physics bodies.
app.ticker.add(() => pixiMatter.update());
```

## **PixiMatter**

The PixiMatter module is used to manage the Matter engine and world.

## **Properties**

### **engine**

The Matter engine.

**example:**

```js
import { PixiMatter } from 'pixi-matter';

const pixiMatter = new PixiMatter();
const engine = pixiMatter.engine;
```

### **pixiObjects**

Contains all of the pixi objects that have been added to the Matter world.

**example:**

```js
import { PixiMatter } from 'pixi-matter';

const pixiMatter = new PixiMatter();
const pixiObjects = pixiMatter.pixiObjects;
```

## **Methods**

### **update**

Updates the position and rotation of each pixi object added to the world according to where its physics body is. This needs to be called in the game loop of your application.

**example:**

```js
import { PixiMatter } from 'pixi-matter';

const app = new PIXI.Application();
const pixiMatter = new PixiMatter();

// Every tick PixiMatter will update the positions of objects added to match the positions of their physics bodies.
app.ticker.add(() => pixiMatter.update());
```

### **addToWorld**

Adds one or more pixi objects to the Matter world so that their positions can be updated.

| Name           | Type                             | Description                                  | Default |
|----------------|----------------------------------|----------------------------------------------|---------|
| ...pixiObjects | PhysicsSprite[] GraphicsSprite[] | The pixi object/s to add to the Matter world |         |

**example:**

```js
import { PixiMatter, PhysicsSprite, PhysicsGraphics } from 'pixi-matter';

const app = new PIXI.Application();
const pixiMatter = new PixiMatter();

const player = new PhysicsSprite(resources.elephant.texture, { x: 200, y: 100, width: 60, height: 60 }, { frictionAir: 0.001 });
const ground = new PhysicsGraphics({ x: 0, y: 0, width: 800, height: 50 }, { isStatic: true });

// The `player` and `ground` objects will now be updated by the Matter engine.
pixiMatter.addToWorld(player, ground);
```

## **removeFromWorld**

Removes one or more pixi objects from the Matter world.

| Name           | Type                             | Description                                       | Default |
|----------------|----------------------------------|---------------------------------------------------|---------|
| ...pixiObjects | PhysicsSprite[] GraphicsSprite[] | The pixi object/s to remove from the Matter world |         |

**example:**

```js
import { PixiMatter, PhysicsSprite, PhysicsGraphics } from 'pixi-matter';

const app = new PIXI.Application();
const pixiMatter = new PixiMatter();

const player = new PhysicsSprite(resources.elephant.texture, { x: 200, y: 100, width: 60, height: 60 }, { frictionAir: 0.001 });
const ground = new PhysicsGraphics({ x: 0, y: 0, width: 800, height: 50 }, { isStatic: true });

// The `ground` object is now no longer updated by the Matter engine.
pixiMatter.removeFromWorld(ground);
```

## **PhysicsSprite**

The PhysicsSprite module is used to create pixi sprites with physics bodies attached. To create a PhysicsSprite, you need to provide a texture, optional sprite options, and optional physics options.

| Name           | Type                   | Description                                                | Default                         |
|----------------|------------------------|------------------------------------------------------------|---------------------------------|
| texture        | PIXI.Texture           | The texture of the sprite                                  |                                 |
| spriteOptions  | SpriteOptions          | The options to define the initial properties of the sprite | { x: 0, y: 0, isCircle: false } |
| physicsOptions | Matter.IBodyDefinition | The options to apply to the sprite's body.                 |                                 |

### **SpriteOptions**

The following options available to set for SpriteOptions:

| Name     | Type    | Description                                                    | Default |
|----------|---------|----------------------------------------------------------------|---------|
| x        | number  | The initial x position of the sprite.                          | 0       |
| y        | number  | The initial y position of the sprite.                          | 0       |
| width    | number  | The width of the sprite and the sprite's physics body.         | 0       |
| height   | number  | The height of the sprite and the sprite's physics body.        | 0       |
| isCircle | boolean | Indicates whether the sprite's body should be circular or not. | false   |

### **PhysicsOptions**

The PhysicsOptions are no different than the options that can be passed to a Matter body so for the properties available check the [Matter body documentation](https://brm.io/matter-js/docs/classes/Body.html).

**examples:**

```js
import { PhysicsSprite } from 'pixi-matter';

// Creates a sprite with all of the default values.
const player = new PhysicsSprite(playerTexture);

// Creates a sprite with an initial position of (200, 100) and a width/height of 60 and sets its body to have a `frictionAir` value of 0.001.
const player = new PhysicsSprite(playerTexture, { x: 200, y: 100, width: 60, height: 60 }, { frictionAir: 0.001 });

// Creates a circular sprite with a circular physics body.
const player = new PhysicsSprite(playerTexture, { width: 100, isCircle: true });
```

## **Properties**

### **physicsOptions**

The Matter physics options for the sprite's body.

**example:**

```js
import { PhysicsSprite } from 'pixi-matter';

const player = new PhysicsSprite(resources.elephant.texture, { x: 200, y: 100, width: 60, height: 60 }, { frictionAir: 0.001 });

// Contains the default physics options with the custom `frictionAir` value of 0.001.
const physicsOptions = player.physicsOptions;
```

### **body**

The Matter physics body of the sprite.

**example:**

```js
import { PhysicsSprite } from 'pixi-matter';

const player = new PhysicsSprite(resources.elephant.texture, { x: 200, y: 100, width: 60, height: 60 }, { frictionAir: 0.001 });
const body = player.body;
```

## **PhysicsGraphics**

The PhysicsGraphics module is used to create a PIXI.Graphics object with a physics body attached to it. To create a PhysicsGraphics object, you need to specify the options for it and optionally you can change the physics options of its body.

| Name            | Type            | Description                                                                 | Default                                                                                    |
|-----------------|-----------------|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| graphicsOptions | GraphicsOptions | The options for the appearance and initial position of the graphics object. | { x: 0, y: 0, width: 100, height: 100, fill: 0x000000, lineWidth: 1, lineColor: 0xffffff } |
| physicsOptions  | PhysicsOptions  | The options to apply to the graphic object's physics body.                  |                                                                                            |

### **GraphicsOptions**

| Name      | Type   | Description                                                                            | Default  |
|-----------|--------|----------------------------------------------------------------------------------------|----------|
| x         | number | The initial x position of the graphics object.                                         | 0        |
| y         | number | The initial y position of the graphics object.                                         | 0        |
| width     | number | If the shape is a rectangle, this is the width of the rectangle and its physics body.  | 100      |
| height    | number | If the shape is a rectangle, this is the height of the rectangle and its physics body. | 100      |
| radius    | number | If the shape is a circle, this is the radius of the circle.                            |          |
| fill      | number | The color of the fill of the graphics object.                                          | 0x000000 |
| lineWidth | number | The thickness of the graphic object's line.                                            | 1        |
| lineColor | number | The color of the line of the graphic object.                                           | 0xffffff |

### **PhysicsOptions**

The PhysicsOptions are no different than the options that can be passed to a Matter body so for the properties available check the [Matter body documentation](https://brm.io/matter-js/docs/classes/Body.html).

**examples:**

```js
import { PhysicsGraphics } from 'pixi-matter';

// Creating a PhysicsGraphics object with the default paramters.
const wall = new PhysicsGraphics();

// Creating a PhysicsGraphics object with a starting position, custom dimensions, and a static physics body.
const wall = new PhysicsGraphics({ x: 10, y: 10, width: 800, height: 50 }, { isStatic: true });

// Creating a PhysicsGraphics object with a circular body.
const ball = new PhysicsGraphics({ x: 50, y: 50, radius: 100 });
```

## **Properties**

### **graphicsOptions**

The graphics options of the graphics object.

**example:**

```js
import { PhysicsGraphics } from 'pixi-matter';

const wall = new PhysicsGraphics({ x: 10, y: 10, width: 800, height: 50 }, { isStatic: true });

// Contains the custom position and width and height of the wall.
const graphicsOptions = wall.graphicsOptions;
```

### **physicsOptions**

The Matter physics options for the graphics object's body.

**example:**

```js
import { PhysicsGraphics } from 'pixi-matter';

const wall = new PhysicsGraphics({ x: 10, y: 10, width: 800, height: 50 }, { isStatic: true });

// Contains the default physics options of the graphics object's body along with the custom `isStatic` value of true.
const physicsOptions = wall.physicsOptions;
```

### **body**

The Matter physics body of the graphics object.

**example:**

```js
import { PhysicsGraphics } from 'pixi-matter';

const wall = new PhysicsGraphics({ x: 10, y: 10, width: 800, height: 50 }, { isStatic: true });

const body = wall.body;
```

## **Examples**

To run the examples for `pixi-matter`, first you have to start the localhost server with:

```bash
$ npm run examples
```

then you will need to navigate to https://localhost:3000 in your browser to run all of the available examples.

## **License**

MIT
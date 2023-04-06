import { Engine } from "matter-js";
import { PhysicsSprite } from "./physics_objects/physics_sprite";
import { PhysicsGraphics } from "./physics_objects/physics_graphics";
/**
 * Manages pixi objects within the Matter engine.
 */
export declare class PixiMatter {
    /**
     * A reference to the Matter engine.
     *
     * @private
     *
     * @property {Engine}
     */
    private _engine;
    /**
     * A reference to all of the pixi objects added to the world.
     *
     * @private
     *
     * @property {Array<PhysicsSprite|PhysicsGraphics>}
     */
    private _pixiObjects;
    constructor();
    /**
     * Returns the reference to the Matter engine.
     *
     * @returns {Engine}
     */
    get engine(): Engine;
    /**
     * Returns the pixi objects added to the world.
     *
     * @property {Array<PhysicsSprite|PhysicsGraphics>}
     */
    get pixiObjects(): (PhysicsSprite | PhysicsGraphics)[];
    /**
     * Updates the position of each pixi object added to the world.
     */
    update(): void;
    /**
     * Adds one or more pixi objects to the Matter world.
     *
     * @param {Array<PhysicsSprite|PhysicsGraphics>} pixiObjects The pixi object/s to add to the Matter world.
     */
    addToWorld(...pixiObjects: Array<PhysicsSprite | PhysicsGraphics>): void;
    /**
     * Removes one or more pixi sprites from the Matter world.
     *
     * @param {Array<PhysicsSprite|PhysicsGraphics>} pixiObjects The pixi object/s to remove from the Matter world.
     */
    removeFromWorld(...pixiObjects: Array<PhysicsSprite | PhysicsGraphics>): void;
}

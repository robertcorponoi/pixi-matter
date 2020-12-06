import { Sprite } from '@pixi/sprite';
import { Texture } from '@pixi/core';
import { Body, IBodyDefinition } from 'matter-js';
import { SpriteOptions } from '../interfaces/sprite_options';
/**
 * Extends the pixi sprite class to include a Matter body and its properties.
 */
export declare class PhysicsSprite extends Sprite {
    /**
     * A reference to the physics options for this sprite's body.
     *
     * @property {IBodyDefinition}
     */
    physicsOptions: IBodyDefinition;
    /**
     * The physics body of the sprite.
     *
     * @private
     *
     * @property {Body}
     */
    private _body;
    /**
     * @param {Texture} texture The texture of the sprite.
     * @param {SpriteOptions} spriteOptions The options to define the initial properties of the sprite.
     * @param {PhysicsOptions} physicsOptions The options to apply to the sprite's body.
     */
    constructor(texture: Texture, spriteOptions?: SpriteOptions, physicsOptions?: IBodyDefinition);
    /**
     * Returns the physics body of the sprite.
     *
     * @returns {Body}
     */
    get body(): Body;
    /**
     * Updates the position of the sprite according to where its body should be.
     */
    update(): void;
}

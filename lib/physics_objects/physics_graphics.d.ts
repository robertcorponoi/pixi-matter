import { Body, IBodyDefinition } from 'matter-js';
import { GraphicsOptions } from '../interfaces/graphics_options';
declare const GraphicsObject: any;
/**
 * Represents a rectangular or circular shape with a physics body attached to
 * it.
 */
export declare class PhysicsGraphics extends GraphicsObject {
    /**
     * A reference to the options for the graphic object's position and style.
     *
     * @property {GraphicsOptions}
     */
    graphicsOptions: GraphicsOptions;
    /**
     * A reference to the options for the graphic object's body.
     *
     * @property {IBodyDefinition}
     */
    physicsOptions: IBodyDefinition;
    /**
     * The physics body of the graphics object.
     *
     * @private
     *
     * @property {Body}
     */
    private _body;
    /**
     * @param {GraphicsOptions} graphicsOptions The options for the appearance and initial position of the graphics object.
     * @param {PhysicsOptions} physicsOptions The options to apply to the graphic object's body.
     */
    constructor(graphicsOptions?: GraphicsOptions, physicsOptions?: IBodyDefinition);
    /**
     * Creates the graphics object with the style options provided.
     *
     * @private
     */
    private _createShape;
    /**
     * Returns the body of the graphics object.
     *
     * @returns {Body}
     */
    get body(): Body;
    /**
     * Updates the position of the graphics object according to where its body
     * should be.
     */
    update(): void;
}
export {};

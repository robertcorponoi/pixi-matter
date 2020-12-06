'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhysicsGraphics = void 0;

var _graphics = require("@pixi/graphics");

var _matterJs = require("matter-js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Fix for issue with pixi throwing an error if there's a global pixi object
// and we try to extend the Graphics module.
// @ts-ignore
var GraphicsObject = window.PIXI ? window.PIXI.Graphics : _graphics.Graphics;
/**
 * Represents a rectangular or circular shape with a physics body attached to
 * it.
 */

var PhysicsGraphics = /*#__PURE__*/function (_GraphicsObject) {
  _inherits(PhysicsGraphics, _GraphicsObject);

  var _super = _createSuper(PhysicsGraphics);

  /**
   * A reference to the options for the graphic object's position and style.
   * 
   * @property {GraphicsOptions}
   */

  /**
   * A reference to the options for the graphic object's body.
   * 
   * @property {IBodyDefinition}
   */

  /**
   * The physics body of the graphics object.
   * 
   * @private
   * 
   * @property {Body}
   */

  /**
   * @param {GraphicsOptions} graphicsOptions The options for the appearance and initial position of the graphics object.
   * @param {PhysicsOptions} physicsOptions The options to apply to the graphic object's body.
   */
  function PhysicsGraphics(graphicsOptions) {
    var _this;

    var physicsOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PhysicsGraphics);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "graphicsOptions", {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      fill: 0x000000,
      lineWidth: 1,
      lineColor: 0xffffff
    });

    _defineProperty(_assertThisInitialized(_this), "physicsOptions", void 0);

    _defineProperty(_assertThisInitialized(_this), "_body", void 0);

    _this.graphicsOptions = Object.assign(_this.graphicsOptions, graphicsOptions);
    _this.physicsOptions = physicsOptions;
    var halfWidth = _this.graphicsOptions.width / 2;
    var halfHeight = _this.graphicsOptions.height / 2;
    _this.pivot.x = halfWidth;
    _this.pivot.y = halfHeight;

    _this._createShape();

    if (_this.graphicsOptions.radius) _this._body = _matterJs.Bodies.circle(_this.graphicsOptions.x, _this.graphicsOptions.y, _this.graphicsOptions.width, _this.physicsOptions);else _this._body = _matterJs.Bodies.rectangle(_this.graphicsOptions.x + halfWidth, _this.graphicsOptions.y + halfHeight, _this.graphicsOptions.width, _this.graphicsOptions.height, _this.physicsOptions);
    return _this;
  }
  /**
   * Creates the graphics object with the style options provided.
   * 
   * @private
   */


  _createClass(PhysicsGraphics, [{
    key: "_createShape",
    value: function _createShape() {
      this.beginFill(this.graphicsOptions.fill);
      this.lineStyle(this.graphicsOptions.lineWidth, this.graphicsOptions.lineColor);

      if (this.graphicsOptions.radius) {
        // If the graphics options has a value set for radius then we disregard width and
        // height and assume it's a circle.
        this.drawCircle(this.graphicsOptions.x, this.graphicsOptions.y, this.graphicsOptions.radius);
      } else {
        if (!this.graphicsOptions.width || !this.graphicsOptions.height) {
          // No radius and no width or height means we can't do anything so we error and
          // return early.
          console.error('No width or height provided for rectangle');
          return;
        }

        this.drawRect(this.x, this.y, this.graphicsOptions.width, this.graphicsOptions.height);
      }
    }
    /**
     * Returns the body of the graphics object.
     * 
     * @returns {Body}
     */

  }, {
    key: "update",

    /**
     * Updates the position of the graphics object according to where its body 
     * should be.
     */
    value: function update() {
      this.position.x = this._body.position.x;
      this.position.y = this._body.position.y;
      this.rotation = this._body.angle;
    }
  }, {
    key: "body",
    get: function get() {
      return this._body;
    }
  }]);

  return PhysicsGraphics;
}(GraphicsObject);

exports.PhysicsGraphics = PhysicsGraphics;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waHlzaWNzX29iamVjdHMvcGh5c2ljc19ncmFwaGljcy50cyJdLCJuYW1lcyI6WyJHcmFwaGljc09iamVjdCIsIndpbmRvdyIsIlBJWEkiLCJHcmFwaGljcyIsIlBoeXNpY3NHcmFwaGljcyIsImdyYXBoaWNzT3B0aW9ucyIsInBoeXNpY3NPcHRpb25zIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImZpbGwiLCJsaW5lV2lkdGgiLCJsaW5lQ29sb3IiLCJPYmplY3QiLCJhc3NpZ24iLCJoYWxmV2lkdGgiLCJoYWxmSGVpZ2h0IiwicGl2b3QiLCJfY3JlYXRlU2hhcGUiLCJyYWRpdXMiLCJfYm9keSIsIkJvZGllcyIsImNpcmNsZSIsInJlY3RhbmdsZSIsImJlZ2luRmlsbCIsImxpbmVTdHlsZSIsImRyYXdDaXJjbGUiLCJjb25zb2xlIiwiZXJyb3IiLCJkcmF3UmVjdCIsInBvc2l0aW9uIiwicm90YXRpb24iLCJhbmdsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxHQUFjRCxNQUFNLENBQUNDLElBQVAsQ0FBWUMsUUFBMUIsR0FBcUNBLGtCQUE1RDtBQUVBO0FBQ0E7QUFDQTtBQUNBOztJQUNhQyxlOzs7OztBQUNYO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBV0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFHRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJRTtBQUNGO0FBQ0E7QUFDQTtBQUNFLDJCQUFZQyxlQUFaLEVBQXFGO0FBQUE7O0FBQUEsUUFBdENDLGNBQXNDLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ25GOztBQURtRixzRUEvQmxEO0FBQ2pDQyxNQUFBQSxDQUFDLEVBQUUsQ0FEOEI7QUFFakNDLE1BQUFBLENBQUMsRUFBRSxDQUY4QjtBQUdqQ0MsTUFB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clxuXHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSAnQHBpeGkvZ3JhcGhpY3MnO1xyXG5pbXBvcnQgeyBCb2R5LCBCb2RpZXMsIElCb2R5RGVmaW5pdGlvbiB9IGZyb20gJ21hdHRlci1qcyc7XHJcbmltcG9ydCB7IEdyYXBoaWNzT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvZ3JhcGhpY3Nfb3B0aW9ucyc7XHJcblxyXG4vLyBGaXggZm9yIGlzc3VlIHdpdGggcGl4aSB0aHJvd2luZyBhbiBlcnJvciBpZiB0aGVyZSdzIGEgZ2xvYmFsIHBpeGkgb2JqZWN0XHJcbi8vIGFuZCB3ZSB0cnkgdG8gZXh0ZW5kIHRoZSBHcmFwaGljcyBtb2R1bGUuXHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3QgR3JhcGhpY3NPYmplY3QgPSB3aW5kb3cuUElYSSA/IHdpbmRvdy5QSVhJLkdyYXBoaWNzIDogR3JhcGhpY3M7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHJlY3Rhbmd1bGFyIG9yIGNpcmN1bGFyIHNoYXBlIHdpdGggYSBwaHlzaWNzIGJvZHkgYXR0YWNoZWQgdG9cclxuICogaXQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGh5c2ljc0dyYXBoaWNzIGV4dGVuZHMgR3JhcGhpY3NPYmplY3Qge1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIGZvciB0aGUgZ3JhcGhpYyBvYmplY3QncyBwb3NpdGlvbiBhbmQgc3R5bGUuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtHcmFwaGljc09wdGlvbnN9XHJcbiAgICovXHJcbiAgZ3JhcGhpY3NPcHRpb25zOiBHcmFwaGljc09wdGlvbnMgPSB7XHJcbiAgICB4OiAwLFxyXG4gICAgeTogMCxcclxuICAgIHdpZHRoOiAxMDAsXHJcbiAgICBoZWlnaHQ6IDEwMCxcclxuICAgIGZpbGw6IDB4MDAwMDAwLFxyXG4gICAgbGluZVdpZHRoOiAxLFxyXG4gICAgbGluZUNvbG9yOiAweGZmZmZmZixcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIGZvciB0aGUgZ3JhcGhpYyBvYmplY3QncyBib2R5LlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7SUJvZHlEZWZpbml0aW9ufVxyXG4gICAqL1xyXG4gIHBoeXNpY3NPcHRpb25zOiBJQm9keURlZmluaXRpb247XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBwaHlzaWNzIGJvZHkgb2YgdGhlIGdyYXBoaWNzIG9iamVjdC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7Qm9keX1cclxuICAgKi9cclxuICBwcml2YXRlIF9ib2R5OiBCb2R5O1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtHcmFwaGljc09wdGlvbnN9IGdyYXBoaWNzT3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIGFwcGVhcmFuY2UgYW5kIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIGdyYXBoaWNzIG9iamVjdC5cclxuICAgKiBAcGFyYW0ge1BoeXNpY3NPcHRpb25zfSBwaHlzaWNzT3B0aW9ucyBUaGUgb3B0aW9ucyB0byBhcHBseSB0byB0aGUgZ3JhcGhpYyBvYmplY3QncyBib2R5LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGdyYXBoaWNzT3B0aW9ucz86IEdyYXBoaWNzT3B0aW9ucywgcGh5c2ljc09wdGlvbnM6IElCb2R5RGVmaW5pdGlvbiA9IHt9KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLmdyYXBoaWNzT3B0aW9ucywgZ3JhcGhpY3NPcHRpb25zKTtcclxuICAgIHRoaXMucGh5c2ljc09wdGlvbnMgPSBwaHlzaWNzT3B0aW9ucztcclxuXHJcbiAgICBjb25zdCBoYWxmV2lkdGggPSB0aGlzLmdyYXBoaWNzT3B0aW9ucy53aWR0aCAvIDI7XHJcbiAgICBjb25zdCBoYWxmSGVpZ2h0ID0gdGhpcy5ncmFwaGljc09wdGlvbnMuaGVpZ2h0IC8gMjtcclxuXHJcbiAgICB0aGlzLnBpdm90LnggPSBoYWxmV2lkdGg7XHJcbiAgICB0aGlzLnBpdm90LnkgPSBoYWxmSGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuX2NyZWF0ZVNoYXBlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZ3JhcGhpY3NPcHRpb25zLnJhZGl1cykgdGhpcy5fYm9keSA9IEJvZGllcy5jaXJjbGUodGhpcy5ncmFwaGljc09wdGlvbnMueCwgdGhpcy5ncmFwaGljc09wdGlvbnMueSwgdGhpcy5ncmFwaGljc09wdGlvbnMud2lkdGgsIHRoaXMucGh5c2ljc09wdGlvbnMpO1xyXG4gICAgZWxzZSB0aGlzLl9ib2R5ID0gQm9kaWVzLnJlY3RhbmdsZSh0aGlzLmdyYXBoaWNzT3B0aW9ucy54ICsgaGFsZldpZHRoLCB0aGlzLmdyYXBoaWNzT3B0aW9ucy55ICsgaGFsZkhlaWdodCwgdGhpcy5ncmFwaGljc09wdGlvbnMud2lkdGgsIHRoaXMuZ3JhcGhpY3NPcHRpb25zLmhlaWdodCwgdGhpcy5waHlzaWNzT3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIHRoZSBncmFwaGljcyBvYmplY3Qgd2l0aCB0aGUgc3R5bGUgb3B0aW9ucyBwcm92aWRlZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2NyZWF0ZVNoYXBlKCkge1xyXG4gICAgdGhpcy5iZWdpbkZpbGwodGhpcy5ncmFwaGljc09wdGlvbnMuZmlsbCk7XHJcbiAgICB0aGlzLmxpbmVTdHlsZSh0aGlzLmdyYXBoaWNzT3B0aW9ucy5saW5lV2lkdGgsIHRoaXMuZ3JhcGhpY3NPcHRpb25zLmxpbmVDb2xvcik7XHJcblxyXG4gICAgaWYgKHRoaXMuZ3JhcGhpY3NPcHRpb25zLnJhZGl1cykge1xyXG4gICAgICAvLyBJZiB0aGUgZ3JhcGhpY3Mgb3B0aW9ucyBoYXMgYSB2YWx1ZSBzZXQgZm9yIHJhZGl1cyB0aGVuIHdlIGRpc3JlZ2FyZCB3aWR0aCBhbmRcclxuICAgICAgLy8gaGVpZ2h0IGFuZCBhc3N1bWUgaXQncyBhIGNpcmNsZS5cclxuICAgICAgdGhpcy5kcmF3Q2lyY2xlKHRoaXMuZ3JhcGhpY3NPcHRpb25zLnghLCB0aGlzLmdyYXBoaWNzT3B0aW9ucy55ISwgdGhpcy5ncmFwaGljc09wdGlvbnMucmFkaXVzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMuZ3JhcGhpY3NPcHRpb25zLndpZHRoIHx8ICF0aGlzLmdyYXBoaWNzT3B0aW9ucy5oZWlnaHQpIHtcclxuICAgICAgICAvLyBObyByYWRpdXMgYW5kIG5vIHdpZHRoIG9yIGhlaWdodCBtZWFucyB3ZSBjYW4ndCBkbyBhbnl0aGluZyBzbyB3ZSBlcnJvciBhbmRcclxuICAgICAgICAvLyByZXR1cm4gZWFybHkuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gd2lkdGggb3IgaGVpZ2h0IHByb3ZpZGVkIGZvciByZWN0YW5nbGUnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZHJhd1JlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuZ3JhcGhpY3NPcHRpb25zLndpZHRoLCB0aGlzLmdyYXBoaWNzT3B0aW9ucy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgYm9keSBvZiB0aGUgZ3JhcGhpY3Mgb2JqZWN0LlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtCb2R5fVxyXG4gICAqL1xyXG4gIGdldCBib2R5KCkgeyByZXR1cm4gdGhpcy5fYm9keTsgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZ3JhcGhpY3Mgb2JqZWN0IGFjY29yZGluZyB0byB3aGVyZSBpdHMgYm9keSBcclxuICAgKiBzaG91bGQgYmUuXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5fYm9keS5wb3NpdGlvbi54O1xyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5fYm9keS5wb3NpdGlvbi55O1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMuX2JvZHkuYW5nbGU7XHJcbiAgfVxyXG59Il19
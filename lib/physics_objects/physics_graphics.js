'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhysicsGraphics = void 0;
var _graphics = require("@pixi/graphics");
var _matterJs = require("matter-js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
   * @param {GraphicsOptions} graphicsOptions The options for the appearance and initial position of the graphics object.
   * @param {PhysicsOptions} physicsOptions The options to apply to the graphic object's body.
   */
  function PhysicsGraphics(graphicsOptions) {
    var _this;
    var physicsOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, PhysicsGraphics);
    _this = _super.call(this);
    /**
     * A reference to the options for the graphic object's position and style.
     * 
     * @property {GraphicsOptions}
     */
    _defineProperty(_assertThisInitialized(_this), "graphicsOptions", {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      fill: 0x000000,
      lineWidth: 1,
      lineColor: 0xffffff
    });
    /**
     * A reference to the options for the graphic object's body.
     * 
     * @property {IBodyDefinition}
     */
    _defineProperty(_assertThisInitialized(_this), "physicsOptions", void 0);
    /**
     * The physics body of the graphics object.
     * 
     * @private
     * 
     * @property {Body}
     */
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
    key: "body",
    get: function get() {
      return this._body;
    }

    /**
     * Updates the position of the graphics object according to where its body 
     * should be.
     */
  }, {
    key: "update",
    value: function update() {
      this.position.x = this._body.position.x;
      this.position.y = this._body.position.y;
      this.rotation = this._body.angle;
    }
  }]);
  return PhysicsGraphics;
}(GraphicsObject);
exports.PhysicsGraphics = PhysicsGraphics;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlBoeXNpY3NHcmFwaGljcyIsIl9ncmFwaGljcyIsInJlcXVpcmUiLCJfbWF0dGVySnMiLCJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsIl9zZXRQcm90b3R5cGVPZiIsIm8iLCJwIiwic2V0UHJvdG90eXBlT2YiLCJiaW5kIiwiX19wcm90b19fIiwiX2NyZWF0ZVN1cGVyIiwiRGVyaXZlZCIsImhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2NyZWF0ZVN1cGVySW50ZXJuYWwiLCJTdXBlciIsIl9nZXRQcm90b3R5cGVPZiIsInJlc3VsdCIsIk5ld1RhcmdldCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsImNhbGwiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiUmVmZXJlbmNlRXJyb3IiLCJzaGFtIiwiUHJveHkiLCJCb29sZWFuIiwidmFsdWVPZiIsImUiLCJnZXRQcm90b3R5cGVPZiIsIl9kZWZpbmVQcm9wZXJ0eSIsImFyZyIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInVuZGVmaW5lZCIsInJlcyIsIk51bWJlciIsIkdyYXBoaWNzT2JqZWN0Iiwid2luZG93IiwiUElYSSIsIkdyYXBoaWNzIiwiX0dyYXBoaWNzT2JqZWN0IiwiX3N1cGVyIiwiZ3JhcGhpY3NPcHRpb25zIiwiX3RoaXMiLCJwaHlzaWNzT3B0aW9ucyIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsIiwibGluZVdpZHRoIiwibGluZUNvbG9yIiwiYXNzaWduIiwiaGFsZldpZHRoIiwiaGFsZkhlaWdodCIsInBpdm90IiwiX2NyZWF0ZVNoYXBlIiwicmFkaXVzIiwiX2JvZHkiLCJCb2RpZXMiLCJjaXJjbGUiLCJyZWN0YW5nbGUiLCJiZWdpbkZpbGwiLCJsaW5lU3R5bGUiLCJkcmF3Q2lyY2xlIiwiY29uc29sZSIsImVycm9yIiwiZHJhd1JlY3QiLCJnZXQiLCJ1cGRhdGUiLCJwb3NpdGlvbiIsInJvdGF0aW9uIiwiYW5nbGUiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvcGh5c2ljc19vYmplY3RzL3BoeXNpY3NfZ3JhcGhpY3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSAnQHBpeGkvZ3JhcGhpY3MnO1xuaW1wb3J0IHsgQm9keSwgQm9kaWVzLCBJQm9keURlZmluaXRpb24gfSBmcm9tICdtYXR0ZXItanMnO1xuaW1wb3J0IHsgR3JhcGhpY3NPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ncmFwaGljc19vcHRpb25zJztcblxuLy8gRml4IGZvciBpc3N1ZSB3aXRoIHBpeGkgdGhyb3dpbmcgYW4gZXJyb3IgaWYgdGhlcmUncyBhIGdsb2JhbCBwaXhpIG9iamVjdFxuLy8gYW5kIHdlIHRyeSB0byBleHRlbmQgdGhlIEdyYXBoaWNzIG1vZHVsZS5cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IEdyYXBoaWNzT2JqZWN0ID0gd2luZG93LlBJWEkgPyB3aW5kb3cuUElYSS5HcmFwaGljcyA6IEdyYXBoaWNzO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSByZWN0YW5ndWxhciBvciBjaXJjdWxhciBzaGFwZSB3aXRoIGEgcGh5c2ljcyBib2R5IGF0dGFjaGVkIHRvXG4gKiBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFBoeXNpY3NHcmFwaGljcyBleHRlbmRzIEdyYXBoaWNzT2JqZWN0IHtcbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIGZvciB0aGUgZ3JhcGhpYyBvYmplY3QncyBwb3NpdGlvbiBhbmQgc3R5bGUuXG4gICAqIFxuICAgKiBAcHJvcGVydHkge0dyYXBoaWNzT3B0aW9uc31cbiAgICovXG4gIGdyYXBoaWNzT3B0aW9uczogR3JhcGhpY3NPcHRpb25zID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB3aWR0aDogMTAwLFxuICAgIGhlaWdodDogMTAwLFxuICAgIGZpbGw6IDB4MDAwMDAwLFxuICAgIGxpbmVXaWR0aDogMSxcbiAgICBsaW5lQ29sb3I6IDB4ZmZmZmZmLFxuICB9XG5cbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIGZvciB0aGUgZ3JhcGhpYyBvYmplY3QncyBib2R5LlxuICAgKiBcbiAgICogQHByb3BlcnR5IHtJQm9keURlZmluaXRpb259XG4gICAqL1xuICBwaHlzaWNzT3B0aW9uczogSUJvZHlEZWZpbml0aW9uO1xuXG4gIC8qKlxuICAgKiBUaGUgcGh5c2ljcyBib2R5IG9mIHRoZSBncmFwaGljcyBvYmplY3QuXG4gICAqIFxuICAgKiBAcHJpdmF0ZVxuICAgKiBcbiAgICogQHByb3BlcnR5IHtCb2R5fVxuICAgKi9cbiAgcHJpdmF0ZSBfYm9keTogQm9keTtcblxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0dyYXBoaWNzT3B0aW9uc30gZ3JhcGhpY3NPcHRpb25zIFRoZSBvcHRpb25zIGZvciB0aGUgYXBwZWFyYW5jZSBhbmQgaW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgZ3JhcGhpY3Mgb2JqZWN0LlxuICAgKiBAcGFyYW0ge1BoeXNpY3NPcHRpb25zfSBwaHlzaWNzT3B0aW9ucyBUaGUgb3B0aW9ucyB0byBhcHBseSB0byB0aGUgZ3JhcGhpYyBvYmplY3QncyBib2R5LlxuICAgKi9cbiAgY29uc3RydWN0b3IoZ3JhcGhpY3NPcHRpb25zPzogR3JhcGhpY3NPcHRpb25zLCBwaHlzaWNzT3B0aW9uczogSUJvZHlEZWZpbml0aW9uID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5ncmFwaGljc09wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMuZ3JhcGhpY3NPcHRpb25zLCBncmFwaGljc09wdGlvbnMpO1xuICAgIHRoaXMucGh5c2ljc09wdGlvbnMgPSBwaHlzaWNzT3B0aW9ucztcblxuICAgIGNvbnN0IGhhbGZXaWR0aCA9IHRoaXMuZ3JhcGhpY3NPcHRpb25zLndpZHRoIC8gMjtcbiAgICBjb25zdCBoYWxmSGVpZ2h0ID0gdGhpcy5ncmFwaGljc09wdGlvbnMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMucGl2b3QueCA9IGhhbGZXaWR0aDtcbiAgICB0aGlzLnBpdm90LnkgPSBoYWxmSGVpZ2h0O1xuXG4gICAgdGhpcy5fY3JlYXRlU2hhcGUoKTtcblxuICAgIGlmICh0aGlzLmdyYXBoaWNzT3B0aW9ucy5yYWRpdXMpIHRoaXMuX2JvZHkgPSBCb2RpZXMuY2lyY2xlKHRoaXMuZ3JhcGhpY3NPcHRpb25zLngsIHRoaXMuZ3JhcGhpY3NPcHRpb25zLnksIHRoaXMuZ3JhcGhpY3NPcHRpb25zLndpZHRoLCB0aGlzLnBoeXNpY3NPcHRpb25zKTtcbiAgICBlbHNlIHRoaXMuX2JvZHkgPSBCb2RpZXMucmVjdGFuZ2xlKHRoaXMuZ3JhcGhpY3NPcHRpb25zLnggKyBoYWxmV2lkdGgsIHRoaXMuZ3JhcGhpY3NPcHRpb25zLnkgKyBoYWxmSGVpZ2h0LCB0aGlzLmdyYXBoaWNzT3B0aW9ucy53aWR0aCwgdGhpcy5ncmFwaGljc09wdGlvbnMuaGVpZ2h0LCB0aGlzLnBoeXNpY3NPcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBncmFwaGljcyBvYmplY3Qgd2l0aCB0aGUgc3R5bGUgb3B0aW9ucyBwcm92aWRlZC5cbiAgICogXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVTaGFwZSgpIHtcbiAgICB0aGlzLmJlZ2luRmlsbCh0aGlzLmdyYXBoaWNzT3B0aW9ucy5maWxsKTtcbiAgICB0aGlzLmxpbmVTdHlsZSh0aGlzLmdyYXBoaWNzT3B0aW9ucy5saW5lV2lkdGgsIHRoaXMuZ3JhcGhpY3NPcHRpb25zLmxpbmVDb2xvcik7XG5cbiAgICBpZiAodGhpcy5ncmFwaGljc09wdGlvbnMucmFkaXVzKSB7XG4gICAgICAvLyBJZiB0aGUgZ3JhcGhpY3Mgb3B0aW9ucyBoYXMgYSB2YWx1ZSBzZXQgZm9yIHJhZGl1cyB0aGVuIHdlIGRpc3JlZ2FyZCB3aWR0aCBhbmRcbiAgICAgIC8vIGhlaWdodCBhbmQgYXNzdW1lIGl0J3MgYSBjaXJjbGUuXG4gICAgICB0aGlzLmRyYXdDaXJjbGUodGhpcy5ncmFwaGljc09wdGlvbnMueCEsIHRoaXMuZ3JhcGhpY3NPcHRpb25zLnkhLCB0aGlzLmdyYXBoaWNzT3B0aW9ucy5yYWRpdXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5ncmFwaGljc09wdGlvbnMud2lkdGggfHwgIXRoaXMuZ3JhcGhpY3NPcHRpb25zLmhlaWdodCkge1xuICAgICAgICAvLyBObyByYWRpdXMgYW5kIG5vIHdpZHRoIG9yIGhlaWdodCBtZWFucyB3ZSBjYW4ndCBkbyBhbnl0aGluZyBzbyB3ZSBlcnJvciBhbmRcbiAgICAgICAgLy8gcmV0dXJuIGVhcmx5LlxuICAgICAgICBjb25zb2xlLmVycm9yKCdObyB3aWR0aCBvciBoZWlnaHQgcHJvdmlkZWQgZm9yIHJlY3RhbmdsZScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZHJhd1JlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuZ3JhcGhpY3NPcHRpb25zLndpZHRoLCB0aGlzLmdyYXBoaWNzT3B0aW9ucy5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBib2R5IG9mIHRoZSBncmFwaGljcyBvYmplY3QuXG4gICAqIFxuICAgKiBAcmV0dXJucyB7Qm9keX1cbiAgICovXG4gIGdldCBib2R5KCkgeyByZXR1cm4gdGhpcy5fYm9keTsgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZ3JhcGhpY3Mgb2JqZWN0IGFjY29yZGluZyB0byB3aGVyZSBpdHMgYm9keSBcbiAgICogc2hvdWxkIGJlLlxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuX2JvZHkucG9zaXRpb24ueDtcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLl9ib2R5LnBvc2l0aW9uLnk7XG4gICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMuX2JvZHkuYW5nbGU7XG4gIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBQUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO0VBQUFDLEtBQUE7QUFBQTtBQUFBRCxPQUFBLENBQUFFLGVBQUE7QUFFWixJQUFBQyxTQUFBLEdBQUFDLE9BQUE7QUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7QUFBMEQsU0FBQUUsUUFBQUMsR0FBQSxzQ0FBQUQsT0FBQSx3QkFBQUUsTUFBQSx1QkFBQUEsTUFBQSxDQUFBQyxRQUFBLGFBQUFGLEdBQUEsa0JBQUFBLEdBQUEsZ0JBQUFBLEdBQUEsV0FBQUEsR0FBQSx5QkFBQUMsTUFBQSxJQUFBRCxHQUFBLENBQUFHLFdBQUEsS0FBQUYsTUFBQSxJQUFBRCxHQUFBLEtBQUFDLE1BQUEsQ0FBQUcsU0FBQSxxQkFBQUosR0FBQSxLQUFBRCxPQUFBLENBQUFDLEdBQUE7QUFBQSxTQUFBSyxnQkFBQUMsUUFBQSxFQUFBQyxXQUFBLFVBQUFELFFBQUEsWUFBQUMsV0FBQSxlQUFBQyxTQUFBO0FB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
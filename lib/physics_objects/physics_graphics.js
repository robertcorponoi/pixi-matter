"use strict";

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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
          console.error("No width or height provided for rectangle");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlBoeXNpY3NHcmFwaGljcyIsIl9ncmFwaGljcyIsInJlcXVpcmUiLCJfbWF0dGVySnMiLCJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsIl9zZXRQcm90b3R5cGVPZiIsIm8iLCJwIiwic2V0UHJvdG90eXBlT2YiLCJiaW5kIiwiX19wcm90b19fIiwiX2NyZWF0ZVN1cGVyIiwiRGVyaXZlZCIsImhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2NyZWF0ZVN1cGVySW50ZXJuYWwiLCJTdXBlciIsIl9nZXRQcm90b3R5cGVPZiIsInJlc3VsdCIsIk5ld1RhcmdldCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsImNhbGwiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiUmVmZXJlbmNlRXJyb3IiLCJzaGFtIiwiUHJveHkiLCJCb29sZWFuIiwidmFsdWVPZiIsImUiLCJnZXRQcm90b3R5cGVPZiIsIl9kZWZpbmVQcm9wZXJ0eSIsImFyZyIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInVuZGVmaW5lZCIsInJlcyIsIk51bWJlciIsIkdyYXBoaWNzT2JqZWN0Iiwid2luZG93IiwiUElYSSIsIkdyYXBoaWNzIiwiX0dyYXBoaWNzT2JqZWN0IiwiX3N1cGVyIiwiZ3JhcGhpY3NPcHRpb25zIiwiX3RoaXMiLCJwaHlzaWNzT3B0aW9ucyIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsIiwibGluZVdpZHRoIiwibGluZUNvbG9yIiwiYXNzaWduIiwiaGFsZldpZHRoIiwiaGFsZkhlaWdodCIsInBpdm90IiwiX2NyZWF0ZVNoYXBlIiwicmFkaXVzIiwiX2JvZHkiLCJCb2RpZXMiLCJjaXJjbGUiLCJyZWN0YW5nbGUiLCJiZWdpbkZpbGwiLCJsaW5lU3R5bGUiLCJkcmF3Q2lyY2xlIiwiY29uc29sZSIsImVycm9yIiwiZHJhd1JlY3QiLCJnZXQiLCJ1cGRhdGUiLCJwb3NpdGlvbiIsInJvdGF0aW9uIiwiYW5nbGUiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvcGh5c2ljc19vYmplY3RzL3BoeXNpY3NfZ3JhcGhpY3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcIkBwaXhpL2dyYXBoaWNzXCI7XG5pbXBvcnQgeyBCb2R5LCBCb2RpZXMsIElCb2R5RGVmaW5pdGlvbiB9IGZyb20gXCJtYXR0ZXItanNcIjtcbmltcG9ydCB7IEdyYXBoaWNzT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2dyYXBoaWNzX29wdGlvbnNcIjtcblxuLy8gRml4IGZvciBpc3N1ZSB3aXRoIHBpeGkgdGhyb3dpbmcgYW4gZXJyb3IgaWYgdGhlcmUncyBhIGdsb2JhbCBwaXhpIG9iamVjdFxuLy8gYW5kIHdlIHRyeSB0byBleHRlbmQgdGhlIEdyYXBoaWNzIG1vZHVsZS5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1pZ25vcmVcbmNvbnN0IEdyYXBoaWNzT2JqZWN0ID0gd2luZG93LlBJWEkgPyB3aW5kb3cuUElYSS5HcmFwaGljcyA6IEdyYXBoaWNzO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSByZWN0YW5ndWxhciBvciBjaXJjdWxhciBzaGFwZSB3aXRoIGEgcGh5c2ljcyBib2R5IGF0dGFjaGVkIHRvXG4gKiBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFBoeXNpY3NHcmFwaGljcyBleHRlbmRzIEdyYXBoaWNzT2JqZWN0IHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBmb3IgdGhlIGdyYXBoaWMgb2JqZWN0J3MgcG9zaXRpb24gYW5kIHN0eWxlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHtHcmFwaGljc09wdGlvbnN9XG4gICAgICovXG4gICAgZ3JhcGhpY3NPcHRpb25zOiBHcmFwaGljc09wdGlvbnMgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICBmaWxsOiAweDAwMDAwMCxcbiAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICBsaW5lQ29sb3I6IDB4ZmZmZmZmLFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBmb3IgdGhlIGdyYXBoaWMgb2JqZWN0J3MgYm9keS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB7SUJvZHlEZWZpbml0aW9ufVxuICAgICAqL1xuICAgIHBoeXNpY3NPcHRpb25zOiBJQm9keURlZmluaXRpb247XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGh5c2ljcyBib2R5IG9mIHRoZSBncmFwaGljcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHtCb2R5fVxuICAgICAqL1xuICAgIHByaXZhdGUgX2JvZHk6IEJvZHk7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0dyYXBoaWNzT3B0aW9uc30gZ3JhcGhpY3NPcHRpb25zIFRoZSBvcHRpb25zIGZvciB0aGUgYXBwZWFyYW5jZSBhbmQgaW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgZ3JhcGhpY3Mgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7UGh5c2ljc09wdGlvbnN9IHBoeXNpY3NPcHRpb25zIFRoZSBvcHRpb25zIHRvIGFwcGx5IHRvIHRoZSBncmFwaGljIG9iamVjdCdzIGJvZHkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGdyYXBoaWNzT3B0aW9ucz86IEdyYXBoaWNzT3B0aW9ucyxcbiAgICAgICAgcGh5c2ljc09wdGlvbnM6IElCb2R5RGVmaW5pdGlvbiA9IHt9LFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zLFxuICAgICAgICAgICAgZ3JhcGhpY3NPcHRpb25zLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnBoeXNpY3NPcHRpb25zID0gcGh5c2ljc09wdGlvbnM7XG5cbiAgICAgICAgY29uc3QgaGFsZldpZHRoID0gdGhpcy5ncmFwaGljc09wdGlvbnMud2lkdGggLyAyO1xuICAgICAgICBjb25zdCBoYWxmSGVpZ2h0ID0gdGhpcy5ncmFwaGljc09wdGlvbnMuaGVpZ2h0IC8gMjtcblxuICAgICAgICB0aGlzLnBpdm90LnggPSBoYWxmV2lkdGg7XG4gICAgICAgIHRoaXMucGl2b3QueSA9IGhhbGZIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5fY3JlYXRlU2hhcGUoKTtcblxuICAgICAgICBpZiAodGhpcy5ncmFwaGljc09wdGlvbnMucmFkaXVzKVxuICAgICAgICAgICAgdGhpcy5fYm9keSA9IEJvZGllcy5jaXJjbGUoXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc09wdGlvbnMueCxcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzT3B0aW9ucy55LFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zLndpZHRoLFxuICAgICAgICAgICAgICAgIHRoaXMucGh5c2ljc09wdGlvbnMsXG4gICAgICAgICAgICApO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9ib2R5ID0gQm9kaWVzLnJlY3RhbmdsZShcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzT3B0aW9ucy54ICsgaGFsZldpZHRoLFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zLnkgKyBoYWxmSGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zLndpZHRoLFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zLmhlaWdodCxcbiAgICAgICAgICAgICAgICB0aGlzLnBoeXNpY3NPcHRpb25zLFxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBncmFwaGljcyBvYmplY3Qgd2l0aCB0aGUgc3R5bGUgb3B0aW9ucyBwcm92aWRlZC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY3JlYXRlU2hhcGUoKSB7XG4gICAgICAgIHRoaXMuYmVnaW5GaWxsKHRoaXMuZ3JhcGhpY3NPcHRpb25zLmZpbGwpO1xuICAgICAgICB0aGlzLmxpbmVTdHlsZShcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zLmxpbmVXaWR0aCxcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zLmxpbmVDb2xvcixcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5ncmFwaGljc09wdGlvbnMucmFkaXVzKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZ3JhcGhpY3Mgb3B0aW9ucyBoYXMgYSB2YWx1ZSBzZXQgZm9yIHJhZGl1cyB0aGVuIHdlIGRpc3JlZ2FyZCB3aWR0aCBhbmRcbiAgICAgICAgICAgIC8vIGhlaWdodCBhbmQgYXNzdW1lIGl0J3MgYSBjaXJjbGUuXG4gICAgICAgICAgICB0aGlzLmRyYXdDaXJjbGUoXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc09wdGlvbnMueCEsXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc09wdGlvbnMueSEsXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc09wdGlvbnMucmFkaXVzLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ncmFwaGljc09wdGlvbnMud2lkdGggfHwgIXRoaXMuZ3JhcGhpY3NPcHRpb25zLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIC8vIE5vIHJhZGl1cyBhbmQgbm8gd2lkdGggb3IgaGVpZ2h0IG1lYW5zIHdlIGNhbid0IGRvIGFueXRoaW5nIHNvIHdlIGVycm9yIGFuZFxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBlYXJseS5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gd2lkdGggb3IgaGVpZ2h0IHByb3ZpZGVkIGZvciByZWN0YW5nbGVcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRyYXdSZWN0KFxuICAgICAgICAgICAgICAgIHRoaXMueCxcbiAgICAgICAgICAgICAgICB0aGlzLnksXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc09wdGlvbnMud2lkdGgsXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc09wdGlvbnMuaGVpZ2h0LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGJvZHkgb2YgdGhlIGdyYXBoaWNzIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtCb2R5fVxuICAgICAqL1xuICAgIGdldCBib2R5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm9keTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZ3JhcGhpY3Mgb2JqZWN0IGFjY29yZGluZyB0byB3aGVyZSBpdHMgYm9keVxuICAgICAqIHNob3VsZCBiZS5cbiAgICAgKi9cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuX2JvZHkucG9zaXRpb24ueDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5fYm9keS5wb3NpdGlvbi55O1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5fYm9keS5hbmdsZTtcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBQUNBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO0VBQUFDLEtBQUE7QUFBQTtBQUFBRCxPQUFBLENBQUFFLGVBQUE7QUFFYixJQUFBQyxTQUFBLEdBQUFDLE9BQUE7QUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7QUFBMEQsU0FBQUUsUUFBQUMsR0FBQSxzQ0FBQUQsT0FBQSx3QkFBQUUsTUFBQSx1QkFBQUEsTUFBQSxDQUFBQyxRQUFBLGFBQUFGLEdBQUEsa0JBQUFBLEdBQUEsZ0JBQUFBLEdBQUEsV0FBQUEsR0FBQSx5QkFBQUMsTUFBQSxJQUFBRCxHQUFBLENBQUFHLFdBQUEsS0FBQUYsTUFBQSxJQUFBRCxHQUFBLEtBQUFDLE1BQUEsQ0FBQUcsU0FBQSxxQkFBQUosR0FBQSxLQUFBRCxPQUFBLENBQUFDLEdBQUE7QUFBQSxTQUFBSyxnQkFBQUMsUUFBQSxFQUFBQyxXQUFBLFVBQUFELFFBQUEsWUFBQUMsV0FBQSxlQUFBQyxTQUFBO0FBQUEsU0FBQUMsa0JBQUFDLE1BQUEsRUFBQUMsS0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsS0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsVUFBQSxH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
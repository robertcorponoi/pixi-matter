"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhysicsGraphics = void 0;
var _pixi = require("pixi.js");
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
var GraphicsObject = window.PIXI ? window.PIXI.Graphics : _pixi.Graphics;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlBoeXNpY3NHcmFwaGljcyIsIl9waXhpIiwicmVxdWlyZSIsIl9tYXR0ZXJKcyIsIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiX3NldFByb3RvdHlwZU9mIiwibyIsInAiLCJzZXRQcm90b3R5cGVPZiIsImJpbmQiLCJfX3Byb3RvX18iLCJfY3JlYXRlU3VwZXIiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfY3JlYXRlU3VwZXJJbnRlcm5hbCIsIlN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwicmVzdWx0IiwiTmV3VGFyZ2V0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImFyZ3VtZW50cyIsImFwcGx5IiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJzZWxmIiwiY2FsbCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsInNoYW0iLCJQcm94eSIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiZSIsImdldFByb3RvdHlwZU9mIiwiX2RlZmluZVByb3BlcnR5IiwiYXJnIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwidW5kZWZpbmVkIiwicmVzIiwiTnVtYmVyIiwiR3JhcGhpY3NPYmplY3QiLCJ3aW5kb3ciLCJQSVhJIiwiR3JhcGhpY3MiLCJfR3JhcGhpY3NPYmplY3QiLCJfc3VwZXIiLCJncmFwaGljc09wdGlvbnMiLCJfdGhpcyIsInBoeXNpY3NPcHRpb25zIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImZpbGwiLCJsaW5lV2lkdGgiLCJsaW5lQ29sb3IiLCJhc3NpZ24iLCJoYWxmV2lkdGgiLCJoYWxmSGVpZ2h0IiwicGl2b3QiLCJfY3JlYXRlU2hhcGUiLCJyYWRpdXMiLCJfYm9keSIsIkJvZGllcyIsImNpcmNsZSIsInJlY3RhbmdsZSIsImJlZ2luRmlsbCIsImxpbmVTdHlsZSIsImRyYXdDaXJjbGUiLCJjb25zb2xlIiwiZXJyb3IiLCJkcmF3UmVjdCIsImdldCIsInVwZGF0ZSIsInBvc2l0aW9uIiwicm90YXRpb24iLCJhbmdsZSJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waHlzaWNzX29iamVjdHMvcGh5c2ljc19ncmFwaGljcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgQm9keSwgQm9kaWVzLCBJQm9keURlZmluaXRpb24gfSBmcm9tIFwibWF0dGVyLWpzXCI7XG5pbXBvcnQgeyBHcmFwaGljc09wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ncmFwaGljc19vcHRpb25zXCI7XG5cbi8vIEZpeCBmb3IgaXNzdWUgd2l0aCBwaXhpIHRocm93aW5nIGFuIGVycm9yIGlmIHRoZXJlJ3MgYSBnbG9iYWwgcGl4aSBvYmplY3Rcbi8vIGFuZCB3ZSB0cnkgdG8gZXh0ZW5kIHRoZSBHcmFwaGljcyBtb2R1bGUuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtaWdub3JlXG5jb25zdCBHcmFwaGljc09iamVjdCA9IHdpbmRvdy5QSVhJID8gd2luZG93LlBJWEkuR3JhcGhpY3MgOiBHcmFwaGljcztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVjdGFuZ3VsYXIgb3IgY2lyY3VsYXIgc2hhcGUgd2l0aCBhIHBoeXNpY3MgYm9keSBhdHRhY2hlZCB0b1xuICogaXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBQaHlzaWNzR3JhcGhpY3MgZXh0ZW5kcyBHcmFwaGljc09iamVjdCB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgZm9yIHRoZSBncmFwaGljIG9iamVjdCdzIHBvc2l0aW9uIGFuZCBzdHlsZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB7R3JhcGhpY3NPcHRpb25zfVxuICAgICAqL1xuICAgIGdyYXBoaWNzT3B0aW9uczogR3JhcGhpY3NPcHRpb25zID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgZmlsbDogMHgwMDAwMDAsXG4gICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgbGluZUNvbG9yOiAweGZmZmZmZixcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgZm9yIHRoZSBncmFwaGljIG9iamVjdCdzIGJvZHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkge0lCb2R5RGVmaW5pdGlvbn1cbiAgICAgKi9cbiAgICBwaHlzaWNzT3B0aW9uczogSUJvZHlEZWZpbml0aW9uO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHBoeXNpY3MgYm9keSBvZiB0aGUgZ3JhcGhpY3Mgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB7Qm9keX1cbiAgICAgKi9cbiAgICBwcml2YXRlIF9ib2R5OiBCb2R5O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtHcmFwaGljc09wdGlvbnN9IGdyYXBoaWNzT3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIGFwcGVhcmFuY2UgYW5kIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIGdyYXBoaWNzIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge1BoeXNpY3NPcHRpb25zfSBwaHlzaWNzT3B0aW9ucyBUaGUgb3B0aW9ucyB0byBhcHBseSB0byB0aGUgZ3JhcGhpYyBvYmplY3QncyBib2R5LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBncmFwaGljc09wdGlvbnM/OiBHcmFwaGljc09wdGlvbnMsXG4gICAgICAgIHBoeXNpY3NPcHRpb25zOiBJQm9keURlZmluaXRpb24gPSB7fSxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmdyYXBoaWNzT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzT3B0aW9ucyxcbiAgICAgICAgICAgIGdyYXBoaWNzT3B0aW9ucyxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5waHlzaWNzT3B0aW9ucyA9IHBoeXNpY3NPcHRpb25zO1xuXG4gICAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IHRoaXMuZ3JhcGhpY3NPcHRpb25zLndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9IHRoaXMuZ3JhcGhpY3NPcHRpb25zLmhlaWdodCAvIDI7XG5cbiAgICAgICAgdGhpcy5waXZvdC54ID0gaGFsZldpZHRoO1xuICAgICAgICB0aGlzLnBpdm90LnkgPSBoYWxmSGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuX2NyZWF0ZVNoYXBlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhpY3NPcHRpb25zLnJhZGl1cylcbiAgICAgICAgICAgIHRoaXMuX2JvZHkgPSBCb2RpZXMuY2lyY2xlKFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zLngsXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc09wdGlvbnMueSxcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzT3B0aW9ucy53aWR0aCxcbiAgICAgICAgICAgICAgICB0aGlzLnBoeXNpY3NPcHRpb25zLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fYm9keSA9IEJvZGllcy5yZWN0YW5nbGUoXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc09wdGlvbnMueCArIGhhbGZXaWR0aCxcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzT3B0aW9ucy55ICsgaGFsZkhlaWdodCxcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzT3B0aW9ucy53aWR0aCxcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzT3B0aW9ucy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgdGhpcy5waHlzaWNzT3B0aW9ucyxcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgZ3JhcGhpY3Mgb2JqZWN0IHdpdGggdGhlIHN0eWxlIG9wdGlvbnMgcHJvdmlkZWQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2NyZWF0ZVNoYXBlKCkge1xuICAgICAgICB0aGlzLmJlZ2luRmlsbCh0aGlzLmdyYXBoaWNzT3B0aW9ucy5maWxsKTtcbiAgICAgICAgdGhpcy5saW5lU3R5bGUoXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzT3B0aW9ucy5saW5lV2lkdGgsXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzT3B0aW9ucy5saW5lQ29sb3IsXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhpY3NPcHRpb25zLnJhZGl1cykge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGdyYXBoaWNzIG9wdGlvbnMgaGFzIGEgdmFsdWUgc2V0IGZvciByYWRpdXMgdGhlbiB3ZSBkaXNyZWdhcmQgd2lkdGggYW5kXG4gICAgICAgICAgICAvLyBoZWlnaHQgYW5kIGFzc3VtZSBpdCdzIGEgY2lyY2xlLlxuICAgICAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zLnghLFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zLnkhLFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zLnJhZGl1cyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3JhcGhpY3NPcHRpb25zLndpZHRoIHx8ICF0aGlzLmdyYXBoaWNzT3B0aW9ucy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAvLyBObyByYWRpdXMgYW5kIG5vIHdpZHRoIG9yIGhlaWdodCBtZWFucyB3ZSBjYW4ndCBkbyBhbnl0aGluZyBzbyB3ZSBlcnJvciBhbmRcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gZWFybHkuXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIHdpZHRoIG9yIGhlaWdodCBwcm92aWRlZCBmb3IgcmVjdGFuZ2xlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kcmF3UmVjdChcbiAgICAgICAgICAgICAgICB0aGlzLngsXG4gICAgICAgICAgICAgICAgdGhpcy55LFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zLndpZHRoLFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NPcHRpb25zLmhlaWdodCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBib2R5IG9mIHRoZSBncmFwaGljcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9keX1cbiAgICAgKi9cbiAgICBnZXQgYm9keSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvZHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGdyYXBoaWNzIG9iamVjdCBhY2NvcmRpbmcgdG8gd2hlcmUgaXRzIGJvZHlcbiAgICAgKiBzaG91bGQgYmUuXG4gICAgICovXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLl9ib2R5LnBvc2l0aW9uLng7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuX2JvZHkucG9zaXRpb24ueTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMuX2JvZHkuYW5nbGU7XG4gICAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUFDQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtFQUFBQyxLQUFBO0FBQUE7QUFBQUQsT0FBQSxDQUFBRSxlQUFBO0FBRWIsSUFBQUMsS0FBQSxHQUFBQyxPQUFBO0FBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO0FBQTBELFNBQUFFLFFBQUFDLEdBQUEsc0NBQUFELE9BQUEsd0JBQUFFLE1BQUEsdUJBQUFBLE1BQUEsQ0FBQUMsUUFBQSxhQUFBRixHQUFBLGtCQUFBQSxHQUFBLGdCQUFBQSxHQUFBLFdBQUFBLEdBQUEseUJBQUFDLE1BQUEsSUFBQUQsR0FBQSxDQUFBRyxXQUFBLEtBQUFGLE1BQUEsSUFBQUQsR0FBQSxLQUFBQyxNQUFBLENBQUFHLFNBQUEscUJBQUFKLEdBQUEsS0FBQUQsT0FBQSxDQUFBQyxHQUFBO0FBQUEsU0FBQUssZ0JBQUFDLFFBQUEsRUFBQUMsV0FBQSxVQUFBRCxRQUFBLFlBQUFDLFdBQUEsZUFBQUMsU0FBQTtBQUFBLFNBQUFDLGtCQUFBQyxNQUFBLEVBQUFDLEtBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELEtBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLFVBQUEsR0FBQUgsS0FBQSxD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
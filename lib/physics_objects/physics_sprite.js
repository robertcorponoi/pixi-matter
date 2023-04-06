'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhysicsSprite = void 0;
var _sprite = require("@pixi/sprite");
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
/**
 * Extends the pixi sprite class to include a Matter body and its properties.
 */
var PhysicsSprite = /*#__PURE__*/function (_Sprite) {
  _inherits(PhysicsSprite, _Sprite);
  var _super = _createSuper(PhysicsSprite);
  /**
   * @param {Texture} texture The texture of the sprite.
   * @param {SpriteOptions} spriteOptions The options to define the initial properties of the sprite.
   * @param {PhysicsOptions} physicsOptions The options to apply to the sprite's body.
   */
  function PhysicsSprite(texture) {
    var _this;
    var spriteOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var physicsOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, PhysicsSprite);
    _this = _super.call(this, texture);
    /**
     * A reference to the physics options for this sprite's body.
     * 
     * @property {IBodyDefinition}
     */
    _defineProperty(_assertThisInitialized(_this), "physicsOptions", void 0);
    /**
     * The physics body of the sprite.
     * 
     * @private
     * 
     * @property {Body}
     */
    _defineProperty(_assertThisInitialized(_this), "_body", void 0);
    _this.anchor.x = 0.5;
    _this.anchor.y = 0.5;
    _this.position.x = spriteOptions.x || 0;
    _this.position.y = spriteOptions.y || 0;
    if (spriteOptions.width) _this.width = spriteOptions.width;
    if (spriteOptions.height) _this.height = spriteOptions.height;
    _this.physicsOptions = physicsOptions;
    if (spriteOptions.isCircle) _this._body = _matterJs.Bodies.circle(_this.x, _this.y, _this.width, _this.physicsOptions);else _this._body = _matterJs.Bodies.rectangle(_this.x, _this.y, _this.width, _this.height, _this.physicsOptions);
    return _this;
  }

  /**
   * Returns the physics body of the sprite.
   * 
   * @returns {Body}
   */
  _createClass(PhysicsSprite, [{
    key: "body",
    get: function get() {
      return this._body;
    }

    /**
     * Updates the position of the sprite according to where its body should be.
     */
  }, {
    key: "update",
    value: function update() {
      this.position.x = this._body.position.x;
      this.position.y = this._body.position.y;
      this.rotation = this._body.angle;
    }
  }]);
  return PhysicsSprite;
}(_sprite.Sprite);
exports.PhysicsSprite = PhysicsSprite;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlBoeXNpY3NTcHJpdGUiLCJfc3ByaXRlIiwicmVxdWlyZSIsIl9tYXR0ZXJKcyIsIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiX3NldFByb3RvdHlwZU9mIiwibyIsInAiLCJzZXRQcm90b3R5cGVPZiIsImJpbmQiLCJfX3Byb3RvX18iLCJfY3JlYXRlU3VwZXIiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfY3JlYXRlU3VwZXJJbnRlcm5hbCIsIlN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwicmVzdWx0IiwiTmV3VGFyZ2V0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImFyZ3VtZW50cyIsImFwcGx5IiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJzZWxmIiwiY2FsbCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsInNoYW0iLCJQcm94eSIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiZSIsImdldFByb3RvdHlwZU9mIiwiX2RlZmluZVByb3BlcnR5IiwiYXJnIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwidW5kZWZpbmVkIiwicmVzIiwiTnVtYmVyIiwiX1Nwcml0ZSIsIl9zdXBlciIsInRleHR1cmUiLCJfdGhpcyIsInNwcml0ZU9wdGlvbnMiLCJwaHlzaWNzT3B0aW9ucyIsImFuY2hvciIsIngiLCJ5IiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImlzQ2lyY2xlIiwiX2JvZHkiLCJCb2RpZXMiLCJjaXJjbGUiLCJyZWN0YW5nbGUiLCJnZXQiLCJ1cGRhdGUiLCJyb3RhdGlvbiIsImFuZ2xlIiwiU3ByaXRlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BoeXNpY3Nfb2JqZWN0cy9waHlzaWNzX3Nwcml0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnQHBpeGkvc3ByaXRlJztcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICdAcGl4aS9jb3JlJztcbmltcG9ydCB7IEJvZHksIEJvZGllcywgSUJvZHlEZWZpbml0aW9uIH0gZnJvbSAnbWF0dGVyLWpzJztcblxuaW1wb3J0IHsgU3ByaXRlT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvc3ByaXRlX29wdGlvbnMnO1xuXG4vKipcbiAqIEV4dGVuZHMgdGhlIHBpeGkgc3ByaXRlIGNsYXNzIHRvIGluY2x1ZGUgYSBNYXR0ZXIgYm9keSBhbmQgaXRzIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBQaHlzaWNzU3ByaXRlIGV4dGVuZHMgU3ByaXRlIHtcbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBwaHlzaWNzIG9wdGlvbnMgZm9yIHRoaXMgc3ByaXRlJ3MgYm9keS5cbiAgICogXG4gICAqIEBwcm9wZXJ0eSB7SUJvZHlEZWZpbml0aW9ufVxuICAgKi9cbiAgcGh5c2ljc09wdGlvbnM6IElCb2R5RGVmaW5pdGlvbjtcblxuICAvKipcbiAgICogVGhlIHBoeXNpY3MgYm9keSBvZiB0aGUgc3ByaXRlLlxuICAgKiBcbiAgICogQHByaXZhdGVcbiAgICogXG4gICAqIEBwcm9wZXJ0eSB7Qm9keX1cbiAgICovXG4gIHByaXZhdGUgX2JvZHk6IEJvZHk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VGV4dHVyZX0gdGV4dHVyZSBUaGUgdGV4dHVyZSBvZiB0aGUgc3ByaXRlLlxuICAgKiBAcGFyYW0ge1Nwcml0ZU9wdGlvbnN9IHNwcml0ZU9wdGlvbnMgVGhlIG9wdGlvbnMgdG8gZGVmaW5lIHRoZSBpbml0aWFsIHByb3BlcnRpZXMgb2YgdGhlIHNwcml0ZS5cbiAgICogQHBhcmFtIHtQaHlzaWNzT3B0aW9uc30gcGh5c2ljc09wdGlvbnMgVGhlIG9wdGlvbnMgdG8gYXBwbHkgdG8gdGhlIHNwcml0ZSdzIGJvZHkuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlLCBzcHJpdGVPcHRpb25zOiBTcHJpdGVPcHRpb25zID0ge30sIHBoeXNpY3NPcHRpb25zOiBJQm9keURlZmluaXRpb24gPSB7fSkge1xuICAgIHN1cGVyKHRleHR1cmUpO1xuXG4gICAgdGhpcy5hbmNob3IueCA9IDAuNTtcbiAgICB0aGlzLmFuY2hvci55ID0gMC41O1xuXG4gICAgdGhpcy5wb3NpdGlvbi54ID0gc3ByaXRlT3B0aW9ucy54IHx8IDA7XG4gICAgdGhpcy5wb3NpdGlvbi55ID0gc3ByaXRlT3B0aW9ucy55IHx8IDA7XG5cbiAgICBpZiAoc3ByaXRlT3B0aW9ucy53aWR0aCkgdGhpcy53aWR0aCA9IHNwcml0ZU9wdGlvbnMud2lkdGg7XG4gICAgaWYgKHNwcml0ZU9wdGlvbnMuaGVpZ2h0KSB0aGlzLmhlaWdodCA9IHNwcml0ZU9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgdGhpcy5waHlzaWNzT3B0aW9ucyA9IHBoeXNpY3NPcHRpb25zO1xuXG4gICAgaWYgKHNwcml0ZU9wdGlvbnMuaXNDaXJjbGUpIHRoaXMuX2JvZHkgPSBCb2RpZXMuY2lyY2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLnBoeXNpY3NPcHRpb25zKTtcbiAgICBlbHNlIHRoaXMuX2JvZHkgPSBCb2RpZXMucmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5waHlzaWNzT3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGh5c2ljcyBib2R5IG9mIHRoZSBzcHJpdGUuXG4gICAqIFxuICAgKiBAcmV0dXJucyB7Qm9keX1cbiAgICovXG4gIGdldCBib2R5KCk6IEJvZHkgeyByZXR1cm4gdGhpcy5fYm9keTsgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgc3ByaXRlIGFjY29yZGluZyB0byB3aGVyZSBpdHMgYm9keSBzaG91bGQgYmUuXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5fYm9keS5wb3NpdGlvbi54O1xuICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuX2JvZHkucG9zaXRpb24ueTtcbiAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5fYm9keS5hbmdsZTtcbiAgfVxufSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFBQUEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7RUFBQUMsS0FBQTtBQUFBO0FBQUFELE9BQUEsQ0FBQUUsYUFBQTtBQUVaLElBQUFDLE9BQUEsR0FBQUMsT0FBQTtBQUVBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtBQUEwRCxTQUFBRSxRQUFBQyxHQUFBLHNDQUFBRCxPQUFBLHdCQUFBRSxNQUFBLHVCQUFBQSxNQUFBLENBQUFDLFFBQUEsYUFBQUYsR0FBQSxrQkFBQUEsR0FBQSxnQkFBQUEsR0FBQSxXQUFBQSxHQUFBLHlCQUFBQyxNQUFBLElBQUFELEdBQUEsQ0FBQUcsV0FBQSxLQUFBRixNQUFBLElBQUFELEdBQUEsS0FBQUMsTUFBQSxDQUFBRyxTQUFBLHFCQUFBSixHQUFBLEtBQUFELE9BQUEsQ0FBQUMsR0FBQTtBQUFBLFNBQUFLLGdCQUFBQyxRQUFBLEVB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
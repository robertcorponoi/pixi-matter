"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlBoeXNpY3NTcHJpdGUiLCJfc3ByaXRlIiwicmVxdWlyZSIsIl9tYXR0ZXJKcyIsIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiX3NldFByb3RvdHlwZU9mIiwibyIsInAiLCJzZXRQcm90b3R5cGVPZiIsImJpbmQiLCJfX3Byb3RvX18iLCJfY3JlYXRlU3VwZXIiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfY3JlYXRlU3VwZXJJbnRlcm5hbCIsIlN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwicmVzdWx0IiwiTmV3VGFyZ2V0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImFyZ3VtZW50cyIsImFwcGx5IiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJzZWxmIiwiY2FsbCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsInNoYW0iLCJQcm94eSIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiZSIsImdldFByb3RvdHlwZU9mIiwiX2RlZmluZVByb3BlcnR5IiwiYXJnIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwidW5kZWZpbmVkIiwicmVzIiwiTnVtYmVyIiwiX1Nwcml0ZSIsIl9zdXBlciIsInRleHR1cmUiLCJfdGhpcyIsInNwcml0ZU9wdGlvbnMiLCJwaHlzaWNzT3B0aW9ucyIsImFuY2hvciIsIngiLCJ5IiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImlzQ2lyY2xlIiwiX2JvZHkiLCJCb2RpZXMiLCJjaXJjbGUiLCJyZWN0YW5nbGUiLCJnZXQiLCJ1cGRhdGUiLCJyb3RhdGlvbiIsImFuZ2xlIiwiU3ByaXRlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BoeXNpY3Nfb2JqZWN0cy9waHlzaWNzX3Nwcml0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIkBwaXhpL3Nwcml0ZVwiO1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJAcGl4aS9jb3JlXCI7XG5pbXBvcnQgeyBCb2R5LCBCb2RpZXMsIElCb2R5RGVmaW5pdGlvbiB9IGZyb20gXCJtYXR0ZXItanNcIjtcblxuaW1wb3J0IHsgU3ByaXRlT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3Nwcml0ZV9vcHRpb25zXCI7XG5cbi8qKlxuICogRXh0ZW5kcyB0aGUgcGl4aSBzcHJpdGUgY2xhc3MgdG8gaW5jbHVkZSBhIE1hdHRlciBib2R5IGFuZCBpdHMgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFBoeXNpY3NTcHJpdGUgZXh0ZW5kcyBTcHJpdGUge1xuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBwaHlzaWNzIG9wdGlvbnMgZm9yIHRoaXMgc3ByaXRlJ3MgYm9keS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB7SUJvZHlEZWZpbml0aW9ufVxuICAgICAqL1xuICAgIHBoeXNpY3NPcHRpb25zOiBJQm9keURlZmluaXRpb247XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGh5c2ljcyBib2R5IG9mIHRoZSBzcHJpdGUuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHtCb2R5fVxuICAgICAqL1xuICAgIHByaXZhdGUgX2JvZHk6IEJvZHk7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1RleHR1cmV9IHRleHR1cmUgVGhlIHRleHR1cmUgb2YgdGhlIHNwcml0ZS5cbiAgICAgKiBAcGFyYW0ge1Nwcml0ZU9wdGlvbnN9IHNwcml0ZU9wdGlvbnMgVGhlIG9wdGlvbnMgdG8gZGVmaW5lIHRoZSBpbml0aWFsIHByb3BlcnRpZXMgb2YgdGhlIHNwcml0ZS5cbiAgICAgKiBAcGFyYW0ge1BoeXNpY3NPcHRpb25zfSBwaHlzaWNzT3B0aW9ucyBUaGUgb3B0aW9ucyB0byBhcHBseSB0byB0aGUgc3ByaXRlJ3MgYm9keS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgdGV4dHVyZTogVGV4dHVyZSxcbiAgICAgICAgc3ByaXRlT3B0aW9uczogU3ByaXRlT3B0aW9ucyA9IHt9LFxuICAgICAgICBwaHlzaWNzT3B0aW9uczogSUJvZHlEZWZpbml0aW9uID0ge30sXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUpO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnggPSAwLjU7XG4gICAgICAgIHRoaXMuYW5jaG9yLnkgPSAwLjU7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gc3ByaXRlT3B0aW9ucy54IHx8IDA7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHNwcml0ZU9wdGlvbnMueSB8fCAwO1xuXG4gICAgICAgIGlmIChzcHJpdGVPcHRpb25zLndpZHRoKSB0aGlzLndpZHRoID0gc3ByaXRlT3B0aW9ucy53aWR0aDtcbiAgICAgICAgaWYgKHNwcml0ZU9wdGlvbnMuaGVpZ2h0KSB0aGlzLmhlaWdodCA9IHNwcml0ZU9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMucGh5c2ljc09wdGlvbnMgPSBwaHlzaWNzT3B0aW9ucztcblxuICAgICAgICBpZiAoc3ByaXRlT3B0aW9ucy5pc0NpcmNsZSlcbiAgICAgICAgICAgIHRoaXMuX2JvZHkgPSBCb2RpZXMuY2lyY2xlKFxuICAgICAgICAgICAgICAgIHRoaXMueCxcbiAgICAgICAgICAgICAgICB0aGlzLnksXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCxcbiAgICAgICAgICAgICAgICB0aGlzLnBoeXNpY3NPcHRpb25zLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fYm9keSA9IEJvZGllcy5yZWN0YW5nbGUoXG4gICAgICAgICAgICAgICAgdGhpcy54LFxuICAgICAgICAgICAgICAgIHRoaXMueSxcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLFxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRoaXMucGh5c2ljc09wdGlvbnMsXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBoeXNpY3MgYm9keSBvZiB0aGUgc3ByaXRlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge0JvZHl9XG4gICAgICovXG4gICAgZ2V0IGJvZHkoKTogQm9keSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib2R5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBzcHJpdGUgYWNjb3JkaW5nIHRvIHdoZXJlIGl0cyBib2R5IHNob3VsZCBiZS5cbiAgICAgKi9cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuX2JvZHkucG9zaXRpb24ueDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5fYm9keS5wb3NpdGlvbi55O1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5fYm9keS5hbmdsZTtcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFB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
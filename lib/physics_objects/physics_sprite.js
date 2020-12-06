'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhysicsSprite = void 0;

var _sprite = require("@pixi/sprite");

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

/**
 * Extends the pixi sprite class to include a Matter body and its properties.
 */
var PhysicsSprite = /*#__PURE__*/function (_Sprite) {
  _inherits(PhysicsSprite, _Sprite);

  var _super = _createSuper(PhysicsSprite);

  /**
   * A reference to the physics options for this sprite's body.
   * 
   * @property {IBodyDefinition}
   */

  /**
   * The physics body of the sprite.
   * 
   * @private
   * 
   * @property {Body}
   */

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

    _defineProperty(_assertThisInitialized(_this), "physicsOptions", void 0);

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
    key: "update",

    /**
     * Updates the position of the sprite according to where its body should be.
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

  return PhysicsSprite;
}(_sprite.Sprite);

exports.PhysicsSprite = PhysicsSprite;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waHlzaWNzX29iamVjdHMvcGh5c2ljc19zcHJpdGUudHMiXSwibmFtZXMiOlsiUGh5c2ljc1Nwcml0ZSIsInRleHR1cmUiLCJzcHJpdGVPcHRpb25zIiwicGh5c2ljc09wdGlvbnMiLCJhbmNob3IiLCJ4IiwieSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJpc0NpcmNsZSIsIl9ib2R5IiwiQm9kaWVzIiwiY2lyY2xlIiwicmVjdGFuZ2xlIiwicm90YXRpb24iLCJhbmdsZSIsIlNwcml0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7SUFDYUEsYTs7Ozs7QUFDWDtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDRSx5QkFBWUMsT0FBWixFQUF1RztBQUFBOztBQUFBLFFBQXpFQyxhQUF5RSx1RUFBMUMsRUFBMEM7QUFBQSxRQUF0Q0MsY0FBc0MsdUVBQUosRUFBSTs7QUFBQTs7QUFDckcsOEJBQU1GLE9BQU47O0FBRHFHOztBQUFBOztBQUdyRyxVQUFLRyxNQUFMLENBQVlDLENBQVosR0FBZ0IsR0FBaEI7QUFDQSxVQUFLRCxNQUFMLENBQVlFLENBQVosR0FBZ0IsR0FBaEI7QUFFQSxVQUFLQyxRQUFMLENBQWNGLENBQWQsR0FBa0JILGFBQWEsQ0FBQ0csQ0FBZCxJQUFtQixDQUFyQztBQUNBLFVBQUtFLFFBQUwsQ0FBY0QsQ0FBZCxHQUFrQkosYUFBYSxDQUFDSSxDQUFkLElBQW1CLENBQXJDO0FBRUEsUUFBSUosYUFBYSxDQUFDTSxLQUFsQixFQUF5QixNQUFLQSxLQUFMLEdBQWFOLGFBQWEsQ0FBQ00sS0FBM0I7QUFDekIsUUFBSU4sYUFBYSxDQUFDTyxNQUFsQixFQUEwQixNQUFLQSxNQUFMLEdBQWNQLGFBQWEsQ0FBQ08sTUFBNUI7QUFFMUIsVUFBS04sY0FBTCxHQUFzQkEsY0FBdEI7QUFFQSxRQUFJRCxhQUFhLENBQUNRLFFBQWxCLEVBQTRCLE1BQUtDLEtBQUwsR0FBYUMsaUJBQU9DLE1BQVAsQ0FBYyxNQUFLUixDQUFuQixFQUFzQixNQUFLQyxDQUEzQixFQUE4QixNQUFLRSxLQUFuQyxFQUEwQyxNQUFLTCxjQUEvQyxDQUFiLENBQTVCLEtBQ0ssTUFBS1EsS0FBTCxHQUFhQyxpQkFBT0UsU0FBUCxDQUFpQixNQUFLVCxDQUF0QixFQUF5QixNQUFLQyxDQUE5QixFQUFpQyxNQUFLRSxLQUF0QyxFQUE2QyxNQUFLQyxNQUFsRCxFQUEwRCxNQUFLTixjQUEvRCxDQUFiO0FBZmdHO0FBZ0J0RztBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdFO0FBQ0Y7QUFDQTs2QkFDVztBQUNQLFdBQUtJLFFBQUwsQ0FBY0YsQ0FBZCxHQUFrQixLQUFLTSxLQUFMLENBQVdKLFFBQVgsQ0FBb0JGLENBQXRDO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRCxDQUFkLEdBQWtCLEtBQUtLLEtBQUwsQ0FBV0osUUFBWCxDQUFvQkQsQ0FBdEM7QUFDQSxXQUFLUyxRQUFMLEdBQWdCLEtBQUtKLEtBQUwsQ0FBV0ssS0FBM0I7QUFDRDs7O3dCQVRnQjtBQUFFLGFBQU8sS0FBS0wsS0FBWjtBQUFvQjs7OztFQTdDTk0sYyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnQHBpeGkvc3ByaXRlJztcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJ0BwaXhpL2NvcmUnO1xyXG5pbXBvcnQgeyBCb2R5LCBCb2RpZXMsIElCb2R5RGVmaW5pdGlvbiB9IGZyb20gJ21hdHRlci1qcyc7XHJcblxyXG5pbXBvcnQgeyBTcHJpdGVPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zcHJpdGVfb3B0aW9ucyc7XHJcblxyXG4vKipcclxuICogRXh0ZW5kcyB0aGUgcGl4aSBzcHJpdGUgY2xhc3MgdG8gaW5jbHVkZSBhIE1hdHRlciBib2R5IGFuZCBpdHMgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQaHlzaWNzU3ByaXRlIGV4dGVuZHMgU3ByaXRlIHtcclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgcGh5c2ljcyBvcHRpb25zIGZvciB0aGlzIHNwcml0ZSdzIGJvZHkuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtJQm9keURlZmluaXRpb259XHJcbiAgICovXHJcbiAgcGh5c2ljc09wdGlvbnM6IElCb2R5RGVmaW5pdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHBoeXNpY3MgYm9keSBvZiB0aGUgc3ByaXRlLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtCb2R5fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2JvZHk6IEJvZHk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7VGV4dHVyZX0gdGV4dHVyZSBUaGUgdGV4dHVyZSBvZiB0aGUgc3ByaXRlLlxyXG4gICAqIEBwYXJhbSB7U3ByaXRlT3B0aW9uc30gc3ByaXRlT3B0aW9ucyBUaGUgb3B0aW9ucyB0byBkZWZpbmUgdGhlIGluaXRpYWwgcHJvcGVydGllcyBvZiB0aGUgc3ByaXRlLlxyXG4gICAqIEBwYXJhbSB7UGh5c2ljc09wdGlvbnN9IHBoeXNpY3NPcHRpb25zIFRoZSBvcHRpb25zIHRvIGFwcGx5IHRvIHRoZSBzcHJpdGUncyBib2R5LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIHNwcml0ZU9wdGlvbnM6IFNwcml0ZU9wdGlvbnMgPSB7fSwgcGh5c2ljc09wdGlvbnM6IElCb2R5RGVmaW5pdGlvbiA9IHt9KSB7XHJcbiAgICBzdXBlcih0ZXh0dXJlKTtcclxuXHJcbiAgICB0aGlzLmFuY2hvci54ID0gMC41O1xyXG4gICAgdGhpcy5hbmNob3IueSA9IDAuNTtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSBzcHJpdGVPcHRpb25zLnggfHwgMDtcclxuICAgIHRoaXMucG9zaXRpb24ueSA9IHNwcml0ZU9wdGlvbnMueSB8fCAwO1xyXG5cclxuICAgIGlmIChzcHJpdGVPcHRpb25zLndpZHRoKSB0aGlzLndpZHRoID0gc3ByaXRlT3B0aW9ucy53aWR0aDtcclxuICAgIGlmIChzcHJpdGVPcHRpb25zLmhlaWdodCkgdGhpcy5oZWlnaHQgPSBzcHJpdGVPcHRpb25zLmhlaWdodDtcclxuXHJcbiAgICB0aGlzLnBoeXNpY3NPcHRpb25zID0gcGh5c2ljc09wdGlvbnM7XHJcblxyXG4gICAgaWYgKHNwcml0ZU9wdGlvbnMuaXNDaXJjbGUpIHRoaXMuX2JvZHkgPSBCb2RpZXMuY2lyY2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLnBoeXNpY3NPcHRpb25zKTtcclxuICAgIGVsc2UgdGhpcy5fYm9keSA9IEJvZGllcy5yZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnBoeXNpY3NPcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHBoeXNpY3MgYm9keSBvZiB0aGUgc3ByaXRlLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtCb2R5fVxyXG4gICAqL1xyXG4gIGdldCBib2R5KCk6IEJvZHkgeyByZXR1cm4gdGhpcy5fYm9keTsgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgc3ByaXRlIGFjY29yZGluZyB0byB3aGVyZSBpdHMgYm9keSBzaG91bGQgYmUuXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5fYm9keS5wb3NpdGlvbi54O1xyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5fYm9keS5wb3NpdGlvbi55O1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMuX2JvZHkuYW5nbGU7XHJcbiAgfVxyXG59Il19
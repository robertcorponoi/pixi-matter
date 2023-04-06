"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PixiMatter = void 0;
var _matterJs = require("matter-js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Manages pixi objects within the Matter engine.
 */
var PixiMatter = /*#__PURE__*/function () {
  function PixiMatter() {
    _classCallCheck(this, PixiMatter);
    /**
     * A reference to the Matter engine.
     *
     * @private
     *
     * @property {Engine}
     */
    _defineProperty(this, "_engine", _matterJs.Engine.create());
    /**
     * A reference to all of the pixi objects added to the world.
     *
     * @private
     *
     * @property {Array<PhysicsSprite|PhysicsGraphics>}
     */
    _defineProperty(this, "_pixiObjects", []);
    _matterJs.Engine.run(this.engine);
  }

  /**
   * Returns the reference to the Matter engine.
   *
   * @returns {Engine}
   */
  _createClass(PixiMatter, [{
    key: "engine",
    get: function get() {
      return this._engine;
    }

    /**
     * Returns the pixi objects added to the world.
     *
     * @property {Array<PhysicsSprite|PhysicsGraphics>}
     */
  }, {
    key: "pixiObjects",
    get: function get() {
      return this._pixiObjects;
    }

    /**
     * Updates the position of each pixi object added to the world.
     */
  }, {
    key: "update",
    value: function update() {
      this._pixiObjects.forEach(function (po) {
        return po.update();
      });
    }

    /**
     * Adds one or more pixi objects to the Matter world.
     *
     * @param {Array<PhysicsSprite|PhysicsGraphics>} pixiObjects The pixi object/s to add to the Matter world.
     */
  }, {
    key: "addToWorld",
    value: function addToWorld() {
      var _this = this;
      for (var _len = arguments.length, pixiObjects = new Array(_len), _key = 0; _key < _len; _key++) {
        pixiObjects[_key] = arguments[_key];
      }
      pixiObjects.forEach(function (po) {
        return _matterJs.World.addBody(_this.engine.world, po.body);
      });
      this._pixiObjects = this._pixiObjects.concat(pixiObjects);
    }

    /**
     * Removes one or more pixi sprites from the Matter world.
     *
     * @param {Array<PhysicsSprite|PhysicsGraphics>} pixiObjects The pixi object/s to remove from the Matter world.
     */
  }, {
    key: "removeFromWorld",
    value: function removeFromWorld() {
      var _this2 = this;
      for (var _len2 = arguments.length, pixiObjects = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        pixiObjects[_key2] = arguments[_key2];
      }
      pixiObjects.forEach(function (po) {
        return _matterJs.World.remove(_this2.engine.world, po.body);
      });
      this._pixiObjects = this._pixiObjects.filter(function (po) {
        return !pixiObjects.includes(po);
      });
    }
  }]);
  return PixiMatter;
}();
exports.PixiMatter = PixiMatter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlBpeGlNYXR0ZXIiLCJfbWF0dGVySnMiLCJyZXF1aXJlIiwiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfZGVmaW5lUHJvcGVydHkiLCJhcmciLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJ1bmRlZmluZWQiLCJyZXMiLCJjYWxsIiwiTnVtYmVyIiwiRW5naW5lIiwiY3JlYXRlIiwicnVuIiwiZW5naW5lIiwiZ2V0IiwiX2VuZ2luZSIsIl9waXhpT2JqZWN0cyIsInVwZGF0ZSIsImZvckVhY2giLCJwbyIsImFkZFRvV29ybGQiLCJfdGhpcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJwaXhpT2JqZWN0cyIsIkFycmF5IiwiX2tleSIsIldvcmxkIiwiYWRkQm9keSIsIndvcmxkIiwiYm9keSIsImNvbmNhdCIsInJlbW92ZUZyb21Xb3JsZCIsIl90aGlzMiIsIl9sZW4yIiwiX2tleTIiLCJyZW1vdmUiLCJmaWx0ZXIiLCJpbmNsdWRlcyJdLCJzb3VyY2VzIjpbIi4uL3NyYy9waXhpLW1hdHRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRW5naW5lLCBXb3JsZCB9IGZyb20gXCJtYXR0ZXItanNcIjtcblxuaW1wb3J0IHsgUGh5c2ljc1Nwcml0ZSB9IGZyb20gXCIuL3BoeXNpY3Nfb2JqZWN0cy9waHlzaWNzX3Nwcml0ZVwiO1xuaW1wb3J0IHsgUGh5c2ljc0dyYXBoaWNzIH0gZnJvbSBcIi4vcGh5c2ljc19vYmplY3RzL3BoeXNpY3NfZ3JhcGhpY3NcIjtcblxuLyoqXG4gKiBNYW5hZ2VzIHBpeGkgb2JqZWN0cyB3aXRoaW4gdGhlIE1hdHRlciBlbmdpbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBQaXhpTWF0dGVyIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgTWF0dGVyIGVuZ2luZS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkge0VuZ2luZX1cbiAgICAgKi9cbiAgICBwcml2YXRlIF9lbmdpbmUgPSBFbmdpbmUuY3JlYXRlKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byBhbGwgb2YgdGhlIHBpeGkgb2JqZWN0cyBhZGRlZCB0byB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHtBcnJheTxQaHlzaWNzU3ByaXRlfFBoeXNpY3NHcmFwaGljcz59XG4gICAgICovXG4gICAgcHJpdmF0ZSBfcGl4aU9iamVjdHM6IEFycmF5PFBoeXNpY3NTcHJpdGUgfCBQaHlzaWNzR3JhcGhpY3M+ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgRW5naW5lLnJ1bih0aGlzLmVuZ2luZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVmZXJlbmNlIHRvIHRoZSBNYXR0ZXIgZW5naW5lLlxuICAgICAqXG4gICAgICogQHJldHVybnMge0VuZ2luZX1cbiAgICAgKi9cbiAgICBnZXQgZW5naW5lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5naW5lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBpeGkgb2JqZWN0cyBhZGRlZCB0byB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkge0FycmF5PFBoeXNpY3NTcHJpdGV8UGh5c2ljc0dyYXBoaWNzPn1cbiAgICAgKi9cbiAgICBnZXQgcGl4aU9iamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waXhpT2JqZWN0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiBlYWNoIHBpeGkgb2JqZWN0IGFkZGVkIHRvIHRoZSB3b3JsZC5cbiAgICAgKi9cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuX3BpeGlPYmplY3RzLmZvckVhY2goKHBvKSA9PiBwby51cGRhdGUoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBvbmUgb3IgbW9yZSBwaXhpIG9iamVjdHMgdG8gdGhlIE1hdHRlciB3b3JsZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXk8UGh5c2ljc1Nwcml0ZXxQaHlzaWNzR3JhcGhpY3M+fSBwaXhpT2JqZWN0cyBUaGUgcGl4aSBvYmplY3QvcyB0byBhZGQgdG8gdGhlIE1hdHRlciB3b3JsZC5cbiAgICAgKi9cbiAgICBhZGRUb1dvcmxkKC4uLnBpeGlPYmplY3RzOiBBcnJheTxQaHlzaWNzU3ByaXRlIHwgUGh5c2ljc0dyYXBoaWNzPikge1xuICAgICAgICBwaXhpT2JqZWN0cy5mb3JFYWNoKChwbykgPT4gV29ybGQuYWRkQm9keSh0aGlzLmVuZ2luZS53b3JsZCwgcG8uYm9keSkpO1xuXG4gICAgICAgIHRoaXMuX3BpeGlPYmplY3RzID0gdGhpcy5fcGl4aU9iamVjdHMuY29uY2F0KHBpeGlPYmplY3RzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIG9uZSBvciBtb3JlIHBpeGkgc3ByaXRlcyBmcm9tIHRoZSBNYXR0ZXIgd29ybGQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5PFBoeXNpY3NTcHJpdGV8UGh5c2ljc0dyYXBoaWNzPn0gcGl4aU9iamVjdHMgVGhlIHBpeGkgb2JqZWN0L3MgdG8gcmVtb3ZlIGZyb20gdGhlIE1hdHRlciB3b3JsZC5cbiAgICAgKi9cbiAgICByZW1vdmVGcm9tV29ybGQoLi4ucGl4aU9iamVjdHM6IEFycmF5PFBoeXNpY3NTcHJpdGUgfCBQaHlzaWNzR3JhcGhpY3M+KSB7XG4gICAgICAgIHBpeGlPYmplY3RzLmZvckVhY2goKHBvKSA9PiBXb3JsZC5yZW1vdmUodGhpcy5lbmdpbmUud29ybGQsIHBvLmJvZHkpKTtcblxuICAgICAgICB0aGlzLl9waXhpT2JqZWN0cyA9IHRoaXMuX3BpeGlPYmplY3RzLmZpbHRlcihcbiAgICAgICAgICAgIChwbykgPT4gIXBpeGlPYmplY3RzLmluY2x1ZGVzKHBvKSxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBQUNBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO0VBQUFDLEtBQUE7QUFBQTtBQUFBRCxPQUFBLENBQUFFLFVBQUE7QUFFYixJQUFBQyxTQUFBLEdBQUFDLE9BQUE7QUFBMEMsU0FBQUMsUUFBQUMsR0FBQSxzQ0FBQUQsT0FBQSx3QkFBQUUsTUFBQSx1QkFBQUEsTUFBQSxDQUFBQyxRQUFBLGFBQUFGLEdBQUEsa0JBQUFBLEdBQUEsZ0JBQUFBLEdBQUEsV0FBQUEsR0FBQSx5QkFBQUMsTUFBQSxJQUFBRCxHQUFBLENBQUFHLFdBQUEsS0FBQUYsTUFBQSxJQUFBRCxHQUFBLEtBQUFDLE1BQUEsQ0FBQUcsU0FBQSxxQkFBQUosR0FBQSxLQUFBRCxPQUFBLENBQUFDLEdBQUE7QUFBQSxTQUFBSyxnQkFBQUMsUUFBQSxFQUFBQyxXQUFBLFVBQUFELFFBQUEsWUFBQUMsV0FBQSxlQUFBQyxTQUFBO0FBQUEsU0FBQUMsa0JBQUFDLE1BQUEsRUFBQUMsS0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsS0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsVUFBQSxHQUFBSCxLQUFBLENBQUFD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
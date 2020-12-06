'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PixiMatter = void 0;

var _matterJs = require("matter-js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Manages pixi objects within the Matter engine.
 */
var PixiMatter = /*#__PURE__*/function () {
  /**
   * A reference to the Matter engine.
   * 
   * @private
   * 
   * @property {Engine}
   */

  /**
   * A reference to all of the pixi objects added to the world.
   * 
   * @private
   * 
   * @property {Array<PhysicsSprite|PhysicsGraphics>}
   */
  function PixiMatter() {
    _classCallCheck(this, PixiMatter);

    _defineProperty(this, "_engine", _matterJs.Engine.create());

    _defineProperty(this, "_pixiObjects", []);

    _matterJs.Engine.run(this.engine);
  }
  /**
   * Returns the reference to the Matter engine.
   * 
   * @returns {Engine}
   */


  _createClass(PixiMatter, [{
    key: "update",

    /**
     * Updates the position of each pixi object added to the world.
     */
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
  }, {
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
  }]);

  return PixiMatter;
}();

exports.PixiMatter = PixiMatter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9waXhpLW1hdHRlci50cyJdLCJuYW1lcyI6WyJQaXhpTWF0dGVyIiwiRW5naW5lIiwiY3JlYXRlIiwicnVuIiwiZW5naW5lIiwiX3BpeGlPYmplY3RzIiwiZm9yRWFjaCIsInBvIiwidXBkYXRlIiwicGl4aU9iamVjdHMiLCJXb3JsZCIsImFkZEJvZHkiLCJ3b3JsZCIsImJvZHkiLCJjb25jYXQiLCJyZW1vdmUiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsIl9lbmdpbmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7SUFDYUEsVTtBQUNYO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0Usd0JBQWM7QUFBQTs7QUFBQSxxQ0FYSUMsaUJBQU9DLE1BQVAsRUFXSjs7QUFBQSwwQ0FGaUQsRUFFakQ7O0FBQ1pELHFCQUFPRSxHQUFQLENBQVcsS0FBS0MsTUFBaEI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQVVFO0FBQ0Y7QUFDQTs2QkFDVztBQUNQLFdBQUtDLFlBQUwsQ0FBa0JDLE9BQWxCLENBQTBCLFVBQUFDLEVBQUU7QUFBQSxlQUFJQSxFQUFFLENBQUNDLE1BQUgsRUFBSjtBQUFBLE9BQTVCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O2lDQUNxRTtBQUFBOztBQUFBLHdDQUFyREMsV0FBcUQ7QUFBckRBLFFBQUFBLFdBQXFEO0FBQUE7O0FBQ2pFQSxNQUFBQSxXQUFXLENBQUNILE9BQVosQ0FBb0IsVUFBQUMsRUFBRTtBQUFBLGVBQUlHLGdCQUFNQyxPQUFOLENBQWMsS0FBSSxDQUFDUCxNQUFMLENBQVlRLEtBQTFCLEVBQWlDTCxFQUFFLENBQUNNLElBQXBDLENBQUo7QUFBQSxPQUF0QjtBQUVBLFdBQUtSLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQlMsTUFBbEIsQ0FBeUJMLFdBQXpCLENBQXBCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O3NDQUMwRTtBQUFBOztBQUFBLHlDQUFyREEsV0FBcUQ7QUFBckRBLFFBQUFBLFdBQXFEO0FBQUE7O0FBQ3RFQSxNQUFBQSxXQUFXLENBQUNILE9BQVosQ0FBb0IsVUFBQUMsRUFBRTtBQUFBLGVBQUlHLGdCQUFNSyxNQUFOLENBQWEsTUFBSSxDQUFDWCxNQUFMLENBQVlRLEtBQXpCLEVBQWdDTCxFQUFFLENBQUNNLElBQW5DLENBQUo7QUFBQSxPQUF0QjtBQUVBLFdBQUtSLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQlcsTUFBbEIsQ0FBeUIsVUFBQVQsRUFBRTtBQUFBLGVBQUksQ0FBQ0UsV0FBVyxDQUFDUSxRQUFaLENBQXFCVixFQUFyQixDQUFMO0FBQUEsT0FBM0IsQ0FBcEI7QUFDRDs7O3dCQXBDWTtBQUFFLGFBQU8sS0FBS1csT0FBWjtBQUFzQjtBQUVyQztBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O3dCQUNvQjtBQUFFLGFBQU8sS0FBS2IsWUFBWjtBQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IHsgRW5naW5lLCBXb3JsZCB9IGZyb20gJ21hdHRlci1qcyc7XHJcblxyXG5pbXBvcnQgeyBQaHlzaWNzU3ByaXRlIH0gZnJvbSAnLi9waHlzaWNzX29iamVjdHMvcGh5c2ljc19zcHJpdGUnO1xyXG5pbXBvcnQgeyBQaHlzaWNzR3JhcGhpY3MgfSBmcm9tICcuL3BoeXNpY3Nfb2JqZWN0cy9waHlzaWNzX2dyYXBoaWNzJztcclxuXHJcbi8qKlxyXG4gKiBNYW5hZ2VzIHBpeGkgb2JqZWN0cyB3aXRoaW4gdGhlIE1hdHRlciBlbmdpbmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGl4aU1hdHRlciB7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIE1hdHRlciBlbmdpbmUuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0VuZ2luZX1cclxuICAgKi9cclxuICBwcml2YXRlIF9lbmdpbmUgPSBFbmdpbmUuY3JlYXRlKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIGFsbCBvZiB0aGUgcGl4aSBvYmplY3RzIGFkZGVkIHRvIHRoZSB3b3JsZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXk8UGh5c2ljc1Nwcml0ZXxQaHlzaWNzR3JhcGhpY3M+fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3BpeGlPYmplY3RzOiBBcnJheTxQaHlzaWNzU3ByaXRlIHwgUGh5c2ljc0dyYXBoaWNzPiA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIEVuZ2luZS5ydW4odGhpcy5lbmdpbmUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgcmVmZXJlbmNlIHRvIHRoZSBNYXR0ZXIgZW5naW5lLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtFbmdpbmV9XHJcbiAgICovXHJcbiAgZ2V0IGVuZ2luZSgpIHsgcmV0dXJuIHRoaXMuX2VuZ2luZTsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBwaXhpIG9iamVjdHMgYWRkZWQgdG8gdGhlIHdvcmxkLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXk8UGh5c2ljc1Nwcml0ZXxQaHlzaWNzR3JhcGhpY3M+fVxyXG4gICAqL1xyXG4gIGdldCBwaXhpT2JqZWN0cygpIHsgcmV0dXJuIHRoaXMuX3BpeGlPYmplY3RzOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIGVhY2ggcGl4aSBvYmplY3QgYWRkZWQgdG8gdGhlIHdvcmxkLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuX3BpeGlPYmplY3RzLmZvckVhY2gocG8gPT4gcG8udXBkYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBvbmUgb3IgbW9yZSBwaXhpIG9iamVjdHMgdG8gdGhlIE1hdHRlciB3b3JsZC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0FycmF5PFBoeXNpY3NTcHJpdGV8UGh5c2ljc0dyYXBoaWNzPn0gcGl4aU9iamVjdHMgVGhlIHBpeGkgb2JqZWN0L3MgdG8gYWRkIHRvIHRoZSBNYXR0ZXIgd29ybGQuXHJcbiAgICovXHJcbiAgYWRkVG9Xb3JsZCguLi5waXhpT2JqZWN0czogQXJyYXk8UGh5c2ljc1Nwcml0ZSB8IFBoeXNpY3NHcmFwaGljcz4pIHtcclxuICAgIHBpeGlPYmplY3RzLmZvckVhY2gocG8gPT4gV29ybGQuYWRkQm9keSh0aGlzLmVuZ2luZS53b3JsZCwgcG8uYm9keSkpO1xyXG5cclxuICAgIHRoaXMuX3BpeGlPYmplY3RzID0gdGhpcy5fcGl4aU9iamVjdHMuY29uY2F0KHBpeGlPYmplY3RzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgb25lIG9yIG1vcmUgcGl4aSBzcHJpdGVzIGZyb20gdGhlIE1hdHRlciB3b3JsZC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0FycmF5PFBoeXNpY3NTcHJpdGV8UGh5c2ljc0dyYXBoaWNzPn0gcGl4aU9iamVjdHMgVGhlIHBpeGkgb2JqZWN0L3MgdG8gcmVtb3ZlIGZyb20gdGhlIE1hdHRlciB3b3JsZC5cclxuICAgKi9cclxuICByZW1vdmVGcm9tV29ybGQoLi4ucGl4aU9iamVjdHM6IEFycmF5PFBoeXNpY3NTcHJpdGUgfCBQaHlzaWNzR3JhcGhpY3M+KSB7XHJcbiAgICBwaXhpT2JqZWN0cy5mb3JFYWNoKHBvID0+IFdvcmxkLnJlbW92ZSh0aGlzLmVuZ2luZS53b3JsZCwgcG8uYm9keSkpO1xyXG5cclxuICAgIHRoaXMuX3BpeGlPYmplY3RzID0gdGhpcy5fcGl4aU9iamVjdHMuZmlsdGVyKHBvID0+ICFwaXhpT2JqZWN0cy5pbmNsdWRlcyhwbykpO1xyXG4gIH1cclxufSJdfQ==
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var matterExports = {};
var matter = {
  get exports(){ return matterExports; },
  set exports(v){ matterExports = v; },
};

/*!
 * matter-js 0.19.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory();
	})(commonjsGlobal, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
	/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 		}
	/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
	/******/ 		if(mode & 1) value = __webpack_require__(value);
	/******/ 		if(mode & 8) return value;
	/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
	/******/ 		var ns = Object.create(null);
	/******/ 		__webpack_require__.r(ns);
	/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
	/******/ 		return ns;
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 20);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports) {

	/**
	* The `Matter.Common` module contains utility functions that are common to all modules.
	*
	* @class Common
	*/

	var Common = {};

	module.exports = Common;

	(function() {

	    Common._baseDelta = 1000 / 60;
	    Common._nextId = 0;
	    Common._seed = 0;
	    Common._nowStartTime = +(new Date());
	    Common._warnedOnce = {};
	    Common._decomp = null;
	    
	    /**
	     * Extends the object in the first argument using the object in the second argument.
	     * @method extend
	     * @param {} obj
	     * @param {boolean} deep
	     * @return {} obj extended
	     */
	    Common.extend = function(obj, deep) {
	        var argsStart,
	            deepClone;

	        if (typeof deep === 'boolean') {
	            argsStart = 2;
	            deepClone = deep;
	        } else {
	            argsStart = 1;
	            deepClone = true;
	        }

	        for (var i = argsStart; i < arguments.length; i++) {
	            var source = arguments[i];

	            if (source) {
	                for (var prop in source) {
	                    if (deepClone && source[prop] && source[prop].constructor === Object) {
	                        if (!obj[prop] || obj[prop].constructor === Object) {
	                            obj[prop] = obj[prop] || {};
	                            Common.extend(obj[prop], deepClone, source[prop]);
	                        } else {
	                            obj[prop] = source[prop];
	                        }
	                    } else {
	                        obj[prop] = source[prop];
	                    }
	                }
	            }
	        }
	        
	        return obj;
	    };

	    /**
	     * Creates a new clone of the object, if deep is true references will also be cloned.
	     * @method clone
	     * @param {} obj
	     * @param {bool} deep
	     * @return {} obj cloned
	     */
	    Common.clone = function(obj, deep) {
	        return Common.extend({}, deep, obj);
	    };

	    /**
	     * Returns the list of keys for the given object.
	     * @method keys
	     * @param {} obj
	     * @return {string[]} keys
	     */
	    Common.keys = function(obj) {
	        if (Object.keys)
	            return Object.keys(obj);

	        // avoid hasOwnProperty for performance
	        var keys = [];
	        for (var key in obj)
	            keys.push(key);
	        return keys;
	    };

	    /**
	     * Returns the list of values for the given object.
	     * @method values
	     * @param {} obj
	     * @return {array} Array of the objects property values
	     */
	    Common.values = function(obj) {
	        var values = [];
	        
	        if (Object.keys) {
	            var keys = Object.keys(obj);
	            for (var i = 0; i < keys.length; i++) {
	                values.push(obj[keys[i]]);
	            }
	            return values;
	        }
	        
	        // avoid hasOwnProperty for performance
	        for (var key in obj)
	            values.push(obj[key]);
	        return values;
	    };

	    /**
	     * Gets a value from `base` relative to the `path` string.
	     * @method get
	     * @param {} obj The base object
	     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
	     * @param {number} [begin] Path slice begin
	     * @param {number} [end] Path slice end
	     * @return {} The object at the given path
	     */
	    Common.get = function(obj, path, begin, end) {
	        path = path.split('.').slice(begin, end);

	        for (var i = 0; i < path.length; i += 1) {
	            obj = obj[path[i]];
	        }

	        return obj;
	    };

	    /**
	     * Sets a value on `base` relative to the given `path` string.
	     * @method set
	     * @param {} obj The base object
	     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
	     * @param {} val The value to set
	     * @param {number} [begin] Path slice begin
	     * @param {number} [end] Path slice end
	     * @return {} Pass through `val` for chaining
	     */
	    Common.set = function(obj, path, val, begin, end) {
	        var parts = path.split('.').slice(begin, end);
	        Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
	        return val;
	    };

	    /**
	     * Shuffles the given array in-place.
	     * The function uses a seeded random generator.
	     * @method shuffle
	     * @param {array} array
	     * @return {array} array shuffled randomly
	     */
	    Common.shuffle = function(array) {
	        for (var i = array.length - 1; i > 0; i--) {
	            var j = Math.floor(Common.random() * (i + 1));
	            var temp = array[i];
	            array[i] = array[j];
	            array[j] = temp;
	        }
	        return array;
	    };

	    /**
	     * Randomly chooses a value from a list with equal probability.
	     * The function uses a seeded random generator.
	     * @method choose
	     * @param {array} choices
	     * @return {object} A random choice object from the array
	     */
	    Common.choose = function(choices) {
	        return choices[Math.floor(Common.random() * choices.length)];
	    };

	    /**
	     * Returns true if the object is a HTMLElement, otherwise false.
	     * @method isElement
	     * @param {object} obj
	     * @return {boolean} True if the object is a HTMLElement, otherwise false
	     */
	    Common.isElement = function(obj) {
	        if (typeof HTMLElement !== 'undefined') {
	            return obj instanceof HTMLElement;
	        }

	        return !!(obj && obj.nodeType && obj.nodeName);
	    };

	    /**
	     * Returns true if the object is an array.
	     * @method isArray
	     * @param {object} obj
	     * @return {boolean} True if the object is an array, otherwise false
	     */
	    Common.isArray = function(obj) {
	        return Object.prototype.toString.call(obj) === '[object Array]';
	    };

	    /**
	     * Returns true if the object is a function.
	     * @method isFunction
	     * @param {object} obj
	     * @return {boolean} True if the object is a function, otherwise false
	     */
	    Common.isFunction = function(obj) {
	        return typeof obj === "function";
	    };

	    /**
	     * Returns true if the object is a plain object.
	     * @method isPlainObject
	     * @param {object} obj
	     * @return {boolean} True if the object is a plain object, otherwise false
	     */
	    Common.isPlainObject = function(obj) {
	        return typeof obj === 'object' && obj.constructor === Object;
	    };

	    /**
	     * Returns true if the object is a string.
	     * @method isString
	     * @param {object} obj
	     * @return {boolean} True if the object is a string, otherwise false
	     */
	    Common.isString = function(obj) {
	        return toString.call(obj) === '[object String]';
	    };
	    
	    /**
	     * Returns the given value clamped between a minimum and maximum value.
	     * @method clamp
	     * @param {number} value
	     * @param {number} min
	     * @param {number} max
	     * @return {number} The value clamped between min and max inclusive
	     */
	    Common.clamp = function(value, min, max) {
	        if (value < min)
	            return min;
	        if (value > max)
	            return max;
	        return value;
	    };
	    
	    /**
	     * Returns the sign of the given value.
	     * @method sign
	     * @param {number} value
	     * @return {number} -1 if negative, +1 if 0 or positive
	     */
	    Common.sign = function(value) {
	        return value < 0 ? -1 : 1;
	    };
	    
	    /**
	     * Returns the current timestamp since the time origin (e.g. from page load).
	     * The result is in milliseconds and will use high-resolution timing if available.
	     * @method now
	     * @return {number} the current timestamp in milliseconds
	     */
	    Common.now = function() {
	        if (typeof window !== 'undefined' && window.performance) {
	            if (window.performance.now) {
	                return window.performance.now();
	            } else if (window.performance.webkitNow) {
	                return window.performance.webkitNow();
	            }
	        }

	        if (Date.now) {
	            return Date.now();
	        }

	        return (new Date()) - Common._nowStartTime;
	    };
	    
	    /**
	     * Returns a random value between a minimum and a maximum value inclusive.
	     * The function uses a seeded random generator.
	     * @method random
	     * @param {number} min
	     * @param {number} max
	     * @return {number} A random number between min and max inclusive
	     */
	    Common.random = function(min, max) {
	        min = (typeof min !== "undefined") ? min : 0;
	        max = (typeof max !== "undefined") ? max : 1;
	        return min + _seededRandom() * (max - min);
	    };

	    var _seededRandom = function() {
	        // https://en.wikipedia.org/wiki/Linear_congruential_generator
	        Common._seed = (Common._seed * 9301 + 49297) % 233280;
	        return Common._seed / 233280;
	    };

	    /**
	     * Converts a CSS hex colour string into an integer.
	     * @method colorToNumber
	     * @param {string} colorString
	     * @return {number} An integer representing the CSS hex string
	     */
	    Common.colorToNumber = function(colorString) {
	        colorString = colorString.replace('#','');

	        if (colorString.length == 3) {
	            colorString = colorString.charAt(0) + colorString.charAt(0)
	                        + colorString.charAt(1) + colorString.charAt(1)
	                        + colorString.charAt(2) + colorString.charAt(2);
	        }

	        return parseInt(colorString, 16);
	    };

	    /**
	     * The console logging level to use, where each level includes all levels above and excludes the levels below.
	     * The default level is 'debug' which shows all console messages.  
	     *
	     * Possible level values are:
	     * - 0 = None
	     * - 1 = Debug
	     * - 2 = Info
	     * - 3 = Warn
	     * - 4 = Error
	     * @static
	     * @property logLevel
	     * @type {Number}
	     * @default 1
	     */
	    Common.logLevel = 1;

	    /**
	     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
	     * The message will be prefixed with 'matter-js' to make it easily identifiable.
	     * @method log
	     * @param ...objs {} The objects to log.
	     */
	    Common.log = function() {
	        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
	            console.log.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
	        }
	    };

	    /**
	     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
	     * The message will be prefixed with 'matter-js' to make it easily identifiable.
	     * @method info
	     * @param ...objs {} The objects to log.
	     */
	    Common.info = function() {
	        if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
	            console.info.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
	        }
	    };

	    /**
	     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
	     * The message will be prefixed with 'matter-js' to make it easily identifiable.
	     * @method warn
	     * @param ...objs {} The objects to log.
	     */
	    Common.warn = function() {
	        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
	            console.warn.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
	        }
	    };

	    /**
	     * Uses `Common.warn` to log the given message one time only.
	     * @method warnOnce
	     * @param ...objs {} The objects to log.
	     */
	    Common.warnOnce = function() {
	        var message = Array.prototype.slice.call(arguments).join(' ');

	        if (!Common._warnedOnce[message]) {
	            Common.warn(message);
	            Common._warnedOnce[message] = true;
	        }
	    };

	    /**
	     * Shows a deprecated console warning when the function on the given object is called.
	     * The target function will be replaced with a new function that first shows the warning
	     * and then calls the original function.
	     * @method deprecated
	     * @param {object} obj The object or module
	     * @param {string} name The property name of the function on obj
	     * @param {string} warning The one-time message to show if the function is called
	     */
	    Common.deprecated = function(obj, prop, warning) {
	        obj[prop] = Common.chain(function() {
	            Common.warnOnce('🔅 deprecated 🔅', warning);
	        }, obj[prop]);
	    };

	    /**
	     * Returns the next unique sequential ID.
	     * @method nextId
	     * @return {Number} Unique sequential ID
	     */
	    Common.nextId = function() {
	        return Common._nextId++;
	    };

	    /**
	     * A cross browser compatible indexOf implementation.
	     * @method indexOf
	     * @param {array} haystack
	     * @param {object} needle
	     * @return {number} The position of needle in haystack, otherwise -1.
	     */
	    Common.indexOf = function(haystack, needle) {
	        if (haystack.indexOf)
	            return haystack.indexOf(needle);

	        for (var i = 0; i < haystack.length; i++) {
	            if (haystack[i] === needle)
	                return i;
	        }

	        return -1;
	    };

	    /**
	     * A cross browser compatible array map implementation.
	     * @method map
	     * @param {array} list
	     * @param {function} func
	     * @return {array} Values from list transformed by func.
	     */
	    Common.map = function(list, func) {
	        if (list.map) {
	            return list.map(func);
	        }

	        var mapped = [];

	        for (var i = 0; i < list.length; i += 1) {
	            mapped.push(func(list[i]));
	        }

	        return mapped;
	    };

	    /**
	     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
	     * Circular dependencies are allowed.
	     * @method topologicalSort
	     * @param {object} graph
	     * @return {array} Partially ordered set of vertices in topological order.
	     */
	    Common.topologicalSort = function(graph) {
	        // https://github.com/mgechev/javascript-algorithms
	        // Copyright (c) Minko Gechev (MIT license)
	        // Modifications: tidy formatting and naming
	        var result = [],
	            visited = [],
	            temp = [];

	        for (var node in graph) {
	            if (!visited[node] && !temp[node]) {
	                Common._topologicalSort(node, visited, temp, graph, result);
	            }
	        }

	        return result;
	    };

	    Common._topologicalSort = function(node, visited, temp, graph, result) {
	        var neighbors = graph[node] || [];
	        temp[node] = true;

	        for (var i = 0; i < neighbors.length; i += 1) {
	            var neighbor = neighbors[i];

	            if (temp[neighbor]) {
	                // skip circular dependencies
	                continue;
	            }

	            if (!visited[neighbor]) {
	                Common._topologicalSort(neighbor, visited, temp, graph, result);
	            }
	        }

	        temp[node] = false;
	        visited[node] = true;

	        result.push(node);
	    };

	    /**
	     * Takes _n_ functions as arguments and returns a new function that calls them in order.
	     * The arguments applied when calling the new function will also be applied to every function passed.
	     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
	     * Therefore if a passed function does not return a value, the previously returned value is maintained.
	     * After all passed functions have been called the new function returns the last returned value (if any).
	     * If any of the passed functions are a chain, then the chain will be flattened.
	     * @method chain
	     * @param ...funcs {function} The functions to chain.
	     * @return {function} A new function that calls the passed functions in order.
	     */
	    Common.chain = function() {
	        var funcs = [];

	        for (var i = 0; i < arguments.length; i += 1) {
	            var func = arguments[i];

	            if (func._chained) {
	                // flatten already chained functions
	                funcs.push.apply(funcs, func._chained);
	            } else {
	                funcs.push(func);
	            }
	        }

	        var chain = function() {
	            // https://github.com/GoogleChrome/devtools-docs/issues/53#issuecomment-51941358
	            var lastResult,
	                args = new Array(arguments.length);

	            for (var i = 0, l = arguments.length; i < l; i++) {
	                args[i] = arguments[i];
	            }

	            for (i = 0; i < funcs.length; i += 1) {
	                var result = funcs[i].apply(lastResult, args);

	                if (typeof result !== 'undefined') {
	                    lastResult = result;
	                }
	            }

	            return lastResult;
	        };

	        chain._chained = funcs;

	        return chain;
	    };

	    /**
	     * Chains a function to excute before the original function on the given `path` relative to `base`.
	     * See also docs for `Common.chain`.
	     * @method chainPathBefore
	     * @param {} base The base object
	     * @param {string} path The path relative to `base`
	     * @param {function} func The function to chain before the original
	     * @return {function} The chained function that replaced the original
	     */
	    Common.chainPathBefore = function(base, path, func) {
	        return Common.set(base, path, Common.chain(
	            func,
	            Common.get(base, path)
	        ));
	    };

	    /**
	     * Chains a function to excute after the original function on the given `path` relative to `base`.
	     * See also docs for `Common.chain`.
	     * @method chainPathAfter
	     * @param {} base The base object
	     * @param {string} path The path relative to `base`
	     * @param {function} func The function to chain after the original
	     * @return {function} The chained function that replaced the original
	     */
	    Common.chainPathAfter = function(base, path, func) {
	        return Common.set(base, path, Common.chain(
	            Common.get(base, path),
	            func
	        ));
	    };

	    /**
	     * Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
	     * concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
	     * @method setDecomp
	     * @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
	     */
	    Common.setDecomp = function(decomp) {
	        Common._decomp = decomp;
	    };

	    /**
	     * Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
	     * otherwise returns the global `decomp` if set.
	     * @method getDecomp
	     * @return {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
	     */
	    Common.getDecomp = function() {
	        // get user provided decomp if set
	        var decomp = Common._decomp;

	        try {
	            // otherwise from window global
	            if (!decomp && typeof window !== 'undefined') {
	                decomp = window.decomp;
	            }
	    
	            // otherwise from node global
	            if (!decomp && typeof commonjsGlobal !== 'undefined') {
	                decomp = commonjsGlobal.decomp;
	            }
	        } catch (e) {
	            // decomp not available
	            decomp = null;
	        }

	        return decomp;
	    };
	})();


	/***/ }),
	/* 1 */
	/***/ (function(module, exports) {

	/**
	* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
	*
	* @class Bounds
	*/

	var Bounds = {};

	module.exports = Bounds;

	(function() {

	    /**
	     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
	     * @method create
	     * @param {vertices} vertices
	     * @return {bounds} A new bounds object
	     */
	    Bounds.create = function(vertices) {
	        var bounds = { 
	            min: { x: 0, y: 0 }, 
	            max: { x: 0, y: 0 }
	        };

	        if (vertices)
	            Bounds.update(bounds, vertices);
	        
	        return bounds;
	    };

	    /**
	     * Updates bounds using the given vertices and extends the bounds given a velocity.
	     * @method update
	     * @param {bounds} bounds
	     * @param {vertices} vertices
	     * @param {vector} velocity
	     */
	    Bounds.update = function(bounds, vertices, velocity) {
	        bounds.min.x = Infinity;
	        bounds.max.x = -Infinity;
	        bounds.min.y = Infinity;
	        bounds.max.y = -Infinity;

	        for (var i = 0; i < vertices.length; i++) {
	            var vertex = vertices[i];
	            if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
	            if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
	            if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
	            if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
	        }
	        
	        if (velocity) {
	            if (velocity.x > 0) {
	                bounds.max.x += velocity.x;
	            } else {
	                bounds.min.x += velocity.x;
	            }
	            
	            if (velocity.y > 0) {
	                bounds.max.y += velocity.y;
	            } else {
	                bounds.min.y += velocity.y;
	            }
	        }
	    };

	    /**
	     * Returns true if the bounds contains the given point.
	     * @method contains
	     * @param {bounds} bounds
	     * @param {vector} point
	     * @return {boolean} True if the bounds contain the point, otherwise false
	     */
	    Bounds.contains = function(bounds, point) {
	        return point.x >= bounds.min.x && point.x <= bounds.max.x 
	               && point.y >= bounds.min.y && point.y <= bounds.max.y;
	    };

	    /**
	     * Returns true if the two bounds intersect.
	     * @method overlaps
	     * @param {bounds} boundsA
	     * @param {bounds} boundsB
	     * @return {boolean} True if the bounds overlap, otherwise false
	     */
	    Bounds.overlaps = function(boundsA, boundsB) {
	        return (boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x
	                && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y);
	    };

	    /**
	     * Translates the bounds by the given vector.
	     * @method translate
	     * @param {bounds} bounds
	     * @param {vector} vector
	     */
	    Bounds.translate = function(bounds, vector) {
	        bounds.min.x += vector.x;
	        bounds.max.x += vector.x;
	        bounds.min.y += vector.y;
	        bounds.max.y += vector.y;
	    };

	    /**
	     * Shifts the bounds to the given position.
	     * @method shift
	     * @param {bounds} bounds
	     * @param {vector} position
	     */
	    Bounds.shift = function(bounds, position) {
	        var deltaX = bounds.max.x - bounds.min.x,
	            deltaY = bounds.max.y - bounds.min.y;
	            
	        bounds.min.x = position.x;
	        bounds.max.x = position.x + deltaX;
	        bounds.min.y = position.y;
	        bounds.max.y = position.y + deltaY;
	    };
	    
	})();


	/***/ }),
	/* 2 */
	/***/ (function(module, exports) {

	/**
	* The `Matter.Vector` module contains methods for creating and manipulating vectors.
	* Vectors are the basis of all the geometry related operations in the engine.
	* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Vector
	*/

	// TODO: consider params for reusing vector objects

	var Vector = {};

	module.exports = Vector;

	(function() {

	    /**
	     * Creates a new vector.
	     * @method create
	     * @param {number} x
	     * @param {number} y
	     * @return {vector} A new vector
	     */
	    Vector.create = function(x, y) {
	        return { x: x || 0, y: y || 0 };
	    };

	    /**
	     * Returns a new vector with `x` and `y` copied from the given `vector`.
	     * @method clone
	     * @param {vector} vector
	     * @return {vector} A new cloned vector
	     */
	    Vector.clone = function(vector) {
	        return { x: vector.x, y: vector.y };
	    };

	    /**
	     * Returns the magnitude (length) of a vector.
	     * @method magnitude
	     * @param {vector} vector
	     * @return {number} The magnitude of the vector
	     */
	    Vector.magnitude = function(vector) {
	        return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
	    };

	    /**
	     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
	     * @method magnitudeSquared
	     * @param {vector} vector
	     * @return {number} The squared magnitude of the vector
	     */
	    Vector.magnitudeSquared = function(vector) {
	        return (vector.x * vector.x) + (vector.y * vector.y);
	    };

	    /**
	     * Rotates the vector about (0, 0) by specified angle.
	     * @method rotate
	     * @param {vector} vector
	     * @param {number} angle
	     * @param {vector} [output]
	     * @return {vector} The vector rotated about (0, 0)
	     */
	    Vector.rotate = function(vector, angle, output) {
	        var cos = Math.cos(angle), sin = Math.sin(angle);
	        if (!output) output = {};
	        var x = vector.x * cos - vector.y * sin;
	        output.y = vector.x * sin + vector.y * cos;
	        output.x = x;
	        return output;
	    };

	    /**
	     * Rotates the vector about a specified point by specified angle.
	     * @method rotateAbout
	     * @param {vector} vector
	     * @param {number} angle
	     * @param {vector} point
	     * @param {vector} [output]
	     * @return {vector} A new vector rotated about the point
	     */
	    Vector.rotateAbout = function(vector, angle, point, output) {
	        var cos = Math.cos(angle), sin = Math.sin(angle);
	        if (!output) output = {};
	        var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
	        output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
	        output.x = x;
	        return output;
	    };

	    /**
	     * Normalises a vector (such that its magnitude is `1`).
	     * @method normalise
	     * @param {vector} vector
	     * @return {vector} A new vector normalised
	     */
	    Vector.normalise = function(vector) {
	        var magnitude = Vector.magnitude(vector);
	        if (magnitude === 0)
	            return { x: 0, y: 0 };
	        return { x: vector.x / magnitude, y: vector.y / magnitude };
	    };

	    /**
	     * Returns the dot-product of two vectors.
	     * @method dot
	     * @param {vector} vectorA
	     * @param {vector} vectorB
	     * @return {number} The dot product of the two vectors
	     */
	    Vector.dot = function(vectorA, vectorB) {
	        return (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y);
	    };

	    /**
	     * Returns the cross-product of two vectors.
	     * @method cross
	     * @param {vector} vectorA
	     * @param {vector} vectorB
	     * @return {number} The cross product of the two vectors
	     */
	    Vector.cross = function(vectorA, vectorB) {
	        return (vectorA.x * vectorB.y) - (vectorA.y * vectorB.x);
	    };

	    /**
	     * Returns the cross-product of three vectors.
	     * @method cross3
	     * @param {vector} vectorA
	     * @param {vector} vectorB
	     * @param {vector} vectorC
	     * @return {number} The cross product of the three vectors
	     */
	    Vector.cross3 = function(vectorA, vectorB, vectorC) {
	        return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
	    };

	    /**
	     * Adds the two vectors.
	     * @method add
	     * @param {vector} vectorA
	     * @param {vector} vectorB
	     * @param {vector} [output]
	     * @return {vector} A new vector of vectorA and vectorB added
	     */
	    Vector.add = function(vectorA, vectorB, output) {
	        if (!output) output = {};
	        output.x = vectorA.x + vectorB.x;
	        output.y = vectorA.y + vectorB.y;
	        return output;
	    };

	    /**
	     * Subtracts the two vectors.
	     * @method sub
	     * @param {vector} vectorA
	     * @param {vector} vectorB
	     * @param {vector} [output]
	     * @return {vector} A new vector of vectorA and vectorB subtracted
	     */
	    Vector.sub = function(vectorA, vectorB, output) {
	        if (!output) output = {};
	        output.x = vectorA.x - vectorB.x;
	        output.y = vectorA.y - vectorB.y;
	        return output;
	    };

	    /**
	     * Multiplies a vector and a scalar.
	     * @method mult
	     * @param {vector} vector
	     * @param {number} scalar
	     * @return {vector} A new vector multiplied by scalar
	     */
	    Vector.mult = function(vector, scalar) {
	        return { x: vector.x * scalar, y: vector.y * scalar };
	    };

	    /**
	     * Divides a vector and a scalar.
	     * @method div
	     * @param {vector} vector
	     * @param {number} scalar
	     * @return {vector} A new vector divided by scalar
	     */
	    Vector.div = function(vector, scalar) {
	        return { x: vector.x / scalar, y: vector.y / scalar };
	    };

	    /**
	     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
	     * @method perp
	     * @param {vector} vector
	     * @param {bool} [negate=false]
	     * @return {vector} The perpendicular vector
	     */
	    Vector.perp = function(vector, negate) {
	        negate = negate === true ? -1 : 1;
	        return { x: negate * -vector.y, y: negate * vector.x };
	    };

	    /**
	     * Negates both components of a vector such that it points in the opposite direction.
	     * @method neg
	     * @param {vector} vector
	     * @return {vector} The negated vector
	     */
	    Vector.neg = function(vector) {
	        return { x: -vector.x, y: -vector.y };
	    };

	    /**
	     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
	     * @method angle
	     * @param {vector} vectorA
	     * @param {vector} vectorB
	     * @return {number} The angle in radians
	     */
	    Vector.angle = function(vectorA, vectorB) {
	        return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
	    };

	    /**
	     * Temporary vector pool (not thread-safe).
	     * @property _temp
	     * @type {vector[]}
	     * @private
	     */
	    Vector._temp = [
	        Vector.create(), Vector.create(), 
	        Vector.create(), Vector.create(), 
	        Vector.create(), Vector.create()
	    ];

	})();

	/***/ }),
	/* 3 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
	* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
	* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Vertices
	*/

	var Vertices = {};

	module.exports = Vertices;

	var Vector = __webpack_require__(2);
	var Common = __webpack_require__(0);

	(function() {

	    /**
	     * Creates a new set of `Matter.Body` compatible vertices.
	     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
	     *
	     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
	     *
	     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
	     * but with some additional references required for efficient collision detection routines.
	     *
	     * Vertices must be specified in clockwise order.
	     *
	     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
	     *
	     * @method create
	     * @param {vector[]} points
	     * @param {body} body
	     */
	    Vertices.create = function(points, body) {
	        var vertices = [];

	        for (var i = 0; i < points.length; i++) {
	            var point = points[i],
	                vertex = {
	                    x: point.x,
	                    y: point.y,
	                    index: i,
	                    body: body,
	                    isInternal: false
	                };

	            vertices.push(vertex);
	        }

	        return vertices;
	    };

	    /**
	     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
	     * into a `Matter.Vertices` object for the given `Matter.Body`.
	     * For parsing SVG paths, see `Svg.pathToVertices`.
	     * @method fromPath
	     * @param {string} path
	     * @param {body} body
	     * @return {vertices} vertices
	     */
	    Vertices.fromPath = function(path, body) {
	        var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,
	            points = [];

	        path.replace(pathPattern, function(match, x, y) {
	            points.push({ x: parseFloat(x), y: parseFloat(y) });
	        });

	        return Vertices.create(points, body);
	    };

	    /**
	     * Returns the centre (centroid) of the set of vertices.
	     * @method centre
	     * @param {vertices} vertices
	     * @return {vector} The centre point
	     */
	    Vertices.centre = function(vertices) {
	        var area = Vertices.area(vertices, true),
	            centre = { x: 0, y: 0 },
	            cross,
	            temp,
	            j;

	        for (var i = 0; i < vertices.length; i++) {
	            j = (i + 1) % vertices.length;
	            cross = Vector.cross(vertices[i], vertices[j]);
	            temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
	            centre = Vector.add(centre, temp);
	        }

	        return Vector.div(centre, 6 * area);
	    };

	    /**
	     * Returns the average (mean) of the set of vertices.
	     * @method mean
	     * @param {vertices} vertices
	     * @return {vector} The average point
	     */
	    Vertices.mean = function(vertices) {
	        var average = { x: 0, y: 0 };

	        for (var i = 0; i < vertices.length; i++) {
	            average.x += vertices[i].x;
	            average.y += vertices[i].y;
	        }

	        return Vector.div(average, vertices.length);
	    };

	    /**
	     * Returns the area of the set of vertices.
	     * @method area
	     * @param {vertices} vertices
	     * @param {bool} signed
	     * @return {number} The area
	     */
	    Vertices.area = function(vertices, signed) {
	        var area = 0,
	            j = vertices.length - 1;

	        for (var i = 0; i < vertices.length; i++) {
	            area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
	            j = i;
	        }

	        if (signed)
	            return area / 2;

	        return Math.abs(area) / 2;
	    };

	    /**
	     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
	     * @method inertia
	     * @param {vertices} vertices
	     * @param {number} mass
	     * @return {number} The polygon's moment of inertia
	     */
	    Vertices.inertia = function(vertices, mass) {
	        var numerator = 0,
	            denominator = 0,
	            v = vertices,
	            cross,
	            j;

	        // find the polygon's moment of inertia, using second moment of area
	        // from equations at http://www.physicsforums.com/showthread.php?t=25293
	        for (var n = 0; n < v.length; n++) {
	            j = (n + 1) % v.length;
	            cross = Math.abs(Vector.cross(v[j], v[n]));
	            numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
	            denominator += cross;
	        }

	        return (mass / 6) * (numerator / denominator);
	    };

	    /**
	     * Translates the set of vertices in-place.
	     * @method translate
	     * @param {vertices} vertices
	     * @param {vector} vector
	     * @param {number} scalar
	     */
	    Vertices.translate = function(vertices, vector, scalar) {
	        scalar = typeof scalar !== 'undefined' ? scalar : 1;

	        var verticesLength = vertices.length,
	            translateX = vector.x * scalar,
	            translateY = vector.y * scalar,
	            i;
	        
	        for (i = 0; i < verticesLength; i++) {
	            vertices[i].x += translateX;
	            vertices[i].y += translateY;
	        }

	        return vertices;
	    };

	    /**
	     * Rotates the set of vertices in-place.
	     * @method rotate
	     * @param {vertices} vertices
	     * @param {number} angle
	     * @param {vector} point
	     */
	    Vertices.rotate = function(vertices, angle, point) {
	        if (angle === 0)
	            return;

	        var cos = Math.cos(angle),
	            sin = Math.sin(angle),
	            pointX = point.x,
	            pointY = point.y,
	            verticesLength = vertices.length,
	            vertex,
	            dx,
	            dy,
	            i;

	        for (i = 0; i < verticesLength; i++) {
	            vertex = vertices[i];
	            dx = vertex.x - pointX;
	            dy = vertex.y - pointY;
	            vertex.x = pointX + (dx * cos - dy * sin);
	            vertex.y = pointY + (dx * sin + dy * cos);
	        }

	        return vertices;
	    };

	    /**
	     * Returns `true` if the `point` is inside the set of `vertices`.
	     * @method contains
	     * @param {vertices} vertices
	     * @param {vector} point
	     * @return {boolean} True if the vertices contains point, otherwise false
	     */
	    Vertices.contains = function(vertices, point) {
	        var pointX = point.x,
	            pointY = point.y,
	            verticesLength = vertices.length,
	            vertex = vertices[verticesLength - 1],
	            nextVertex;

	        for (var i = 0; i < verticesLength; i++) {
	            nextVertex = vertices[i];

	            if ((pointX - vertex.x) * (nextVertex.y - vertex.y) 
	                + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) {
	                return false;
	            }

	            vertex = nextVertex;
	        }

	        return true;
	    };

	    /**
	     * Scales the vertices from a point (default is centre) in-place.
	     * @method scale
	     * @param {vertices} vertices
	     * @param {number} scaleX
	     * @param {number} scaleY
	     * @param {vector} point
	     */
	    Vertices.scale = function(vertices, scaleX, scaleY, point) {
	        if (scaleX === 1 && scaleY === 1)
	            return vertices;

	        point = point || Vertices.centre(vertices);

	        var vertex,
	            delta;

	        for (var i = 0; i < vertices.length; i++) {
	            vertex = vertices[i];
	            delta = Vector.sub(vertex, point);
	            vertices[i].x = point.x + delta.x * scaleX;
	            vertices[i].y = point.y + delta.y * scaleY;
	        }

	        return vertices;
	    };

	    /**
	     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
	     * The radius parameter is a single number or an array to specify the radius for each vertex.
	     * @method chamfer
	     * @param {vertices} vertices
	     * @param {number[]} radius
	     * @param {number} quality
	     * @param {number} qualityMin
	     * @param {number} qualityMax
	     */
	    Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
	        if (typeof radius === 'number') {
	            radius = [radius];
	        } else {
	            radius = radius || [8];
	        }

	        // quality defaults to -1, which is auto
	        quality = (typeof quality !== 'undefined') ? quality : -1;
	        qualityMin = qualityMin || 2;
	        qualityMax = qualityMax || 14;

	        var newVertices = [];

	        for (var i = 0; i < vertices.length; i++) {
	            var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1],
	                vertex = vertices[i],
	                nextVertex = vertices[(i + 1) % vertices.length],
	                currentRadius = radius[i < radius.length ? i : radius.length - 1];

	            if (currentRadius === 0) {
	                newVertices.push(vertex);
	                continue;
	            }

	            var prevNormal = Vector.normalise({ 
	                x: vertex.y - prevVertex.y, 
	                y: prevVertex.x - vertex.x
	            });

	            var nextNormal = Vector.normalise({ 
	                x: nextVertex.y - vertex.y, 
	                y: vertex.x - nextVertex.x
	            });

	            var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)),
	                radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius),
	                midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)),
	                scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));

	            var precision = quality;

	            if (quality === -1) {
	                // automatically decide precision
	                precision = Math.pow(currentRadius, 0.32) * 1.75;
	            }

	            precision = Common.clamp(precision, qualityMin, qualityMax);

	            // use an even value for precision, more likely to reduce axes by using symmetry
	            if (precision % 2 === 1)
	                precision += 1;

	            var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)),
	                theta = alpha / precision;

	            for (var j = 0; j < precision; j++) {
	                newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
	            }
	        }

	        return newVertices;
	    };

	    /**
	     * Sorts the input vertices into clockwise order in place.
	     * @method clockwiseSort
	     * @param {vertices} vertices
	     * @return {vertices} vertices
	     */
	    Vertices.clockwiseSort = function(vertices) {
	        var centre = Vertices.mean(vertices);

	        vertices.sort(function(vertexA, vertexB) {
	            return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
	        });

	        return vertices;
	    };

	    /**
	     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
	     * @method isConvex
	     * @param {vertices} vertices
	     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
	     */
	    Vertices.isConvex = function(vertices) {
	        // http://paulbourke.net/geometry/polygonmesh/
	        // Copyright (c) Paul Bourke (use permitted)

	        var flag = 0,
	            n = vertices.length,
	            i,
	            j,
	            k,
	            z;

	        if (n < 3)
	            return null;

	        for (i = 0; i < n; i++) {
	            j = (i + 1) % n;
	            k = (i + 2) % n;
	            z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
	            z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);

	            if (z < 0) {
	                flag |= 1;
	            } else if (z > 0) {
	                flag |= 2;
	            }

	            if (flag === 3) {
	                return false;
	            }
	        }

	        if (flag !== 0){
	            return true;
	        } else {
	            return null;
	        }
	    };

	    /**
	     * Returns the convex hull of the input vertices as a new array of points.
	     * @method hull
	     * @param {vertices} vertices
	     * @return [vertex] vertices
	     */
	    Vertices.hull = function(vertices) {
	        // http://geomalgorithms.com/a10-_hull-1.html

	        var upper = [],
	            lower = [], 
	            vertex,
	            i;

	        // sort vertices on x-axis (y-axis for ties)
	        vertices = vertices.slice(0);
	        vertices.sort(function(vertexA, vertexB) {
	            var dx = vertexA.x - vertexB.x;
	            return dx !== 0 ? dx : vertexA.y - vertexB.y;
	        });

	        // build lower hull
	        for (i = 0; i < vertices.length; i += 1) {
	            vertex = vertices[i];

	            while (lower.length >= 2 
	                   && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
	                lower.pop();
	            }

	            lower.push(vertex);
	        }

	        // build upper hull
	        for (i = vertices.length - 1; i >= 0; i -= 1) {
	            vertex = vertices[i];

	            while (upper.length >= 2 
	                   && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
	                upper.pop();
	            }

	            upper.push(vertex);
	        }

	        // concatenation of the lower and upper hulls gives the convex hull
	        // omit last points because they are repeated at the beginning of the other list
	        upper.pop();
	        lower.pop();

	        return upper.concat(lower);
	    };

	})();


	/***/ }),
	/* 4 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Body` module contains methods for creating and manipulating rigid bodies.
	* For creating bodies with common configurations such as rectangles, circles and other polygons see the module `Matter.Bodies`.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

	* @class Body
	*/

	var Body = {};

	module.exports = Body;

	var Vertices = __webpack_require__(3);
	var Vector = __webpack_require__(2);
	var Sleeping = __webpack_require__(7);
	var Common = __webpack_require__(0);
	var Bounds = __webpack_require__(1);
	var Axes = __webpack_require__(11);

	(function() {

	    Body._timeCorrection = true;
	    Body._inertiaScale = 4;
	    Body._nextCollidingGroupId = 1;
	    Body._nextNonCollidingGroupId = -1;
	    Body._nextCategory = 0x0001;
	    Body._baseDelta = 1000 / 60;

	    /**
	     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
	     * All properties have default values, and many are pre-calculated automatically based on other properties.
	     * Vertices must be specified in clockwise order.
	     * See the properties section below for detailed information on what you can pass via the `options` object.
	     * @method create
	     * @param {} options
	     * @return {body} body
	     */
	    Body.create = function(options) {
	        var defaults = {
	            id: Common.nextId(),
	            type: 'body',
	            label: 'Body',
	            parts: [],
	            plugin: {},
	            angle: 0,
	            vertices: Vertices.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
	            position: { x: 0, y: 0 },
	            force: { x: 0, y: 0 },
	            torque: 0,
	            positionImpulse: { x: 0, y: 0 },
	            constraintImpulse: { x: 0, y: 0, angle: 0 },
	            totalContacts: 0,
	            speed: 0,
	            angularSpeed: 0,
	            velocity: { x: 0, y: 0 },
	            angularVelocity: 0,
	            isSensor: false,
	            isStatic: false,
	            isSleeping: false,
	            motion: 0,
	            sleepThreshold: 60,
	            density: 0.001,
	            restitution: 0,
	            friction: 0.1,
	            frictionStatic: 0.5,
	            frictionAir: 0.01,
	            collisionFilter: {
	                category: 0x0001,
	                mask: 0xFFFFFFFF,
	                group: 0
	            },
	            slop: 0.05,
	            timeScale: 1,
	            render: {
	                visible: true,
	                opacity: 1,
	                strokeStyle: null,
	                fillStyle: null,
	                lineWidth: null,
	                sprite: {
	                    xScale: 1,
	                    yScale: 1,
	                    xOffset: 0,
	                    yOffset: 0
	                }
	            },
	            events: null,
	            bounds: null,
	            chamfer: null,
	            circleRadius: 0,
	            positionPrev: null,
	            anglePrev: 0,
	            parent: null,
	            axes: null,
	            area: 0,
	            mass: 0,
	            inertia: 0,
	            deltaTime: 1000 / 60,
	            _original: null
	        };

	        var body = Common.extend(defaults, options);

	        _initProperties(body, options);

	        return body;
	    };

	    /**
	     * Returns the next unique group index for which bodies will collide.
	     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
	     * See `body.collisionFilter` for more information.
	     * @method nextGroup
	     * @param {bool} [isNonColliding=false]
	     * @return {Number} Unique group index
	     */
	    Body.nextGroup = function(isNonColliding) {
	        if (isNonColliding)
	            return Body._nextNonCollidingGroupId--;

	        return Body._nextCollidingGroupId++;
	    };

	    /**
	     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
	     * There are 32 available. See `body.collisionFilter` for more information.
	     * @method nextCategory
	     * @return {Number} Unique category bitfield
	     */
	    Body.nextCategory = function() {
	        Body._nextCategory = Body._nextCategory << 1;
	        return Body._nextCategory;
	    };

	    /**
	     * Initialises body properties.
	     * @method _initProperties
	     * @private
	     * @param {body} body
	     * @param {} [options]
	     */
	    var _initProperties = function(body, options) {
	        options = options || {};

	        // init required properties (order is important)
	        Body.set(body, {
	            bounds: body.bounds || Bounds.create(body.vertices),
	            positionPrev: body.positionPrev || Vector.clone(body.position),
	            anglePrev: body.anglePrev || body.angle,
	            vertices: body.vertices,
	            parts: body.parts || [body],
	            isStatic: body.isStatic,
	            isSleeping: body.isSleeping,
	            parent: body.parent || body
	        });

	        Vertices.rotate(body.vertices, body.angle, body.position);
	        Axes.rotate(body.axes, body.angle);
	        Bounds.update(body.bounds, body.vertices, body.velocity);

	        // allow options to override the automatically calculated properties
	        Body.set(body, {
	            axes: options.axes || body.axes,
	            area: options.area || body.area,
	            mass: options.mass || body.mass,
	            inertia: options.inertia || body.inertia
	        });

	        // render properties
	        var defaultFillStyle = (body.isStatic ? '#14151f' : Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1'])),
	            defaultStrokeStyle = body.isStatic ? '#555' : '#ccc',
	            defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
	        body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
	        body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
	        body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
	        body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
	        body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
	    };

	    /**
	     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
	     * Prefer to use the actual setter functions in performance critical situations.
	     * @method set
	     * @param {body} body
	     * @param {} settings A property name (or map of properties and values) to set on the body.
	     * @param {} value The value to set if `settings` is a single property name.
	     */
	    Body.set = function(body, settings, value) {
	        var property;

	        if (typeof settings === 'string') {
	            property = settings;
	            settings = {};
	            settings[property] = value;
	        }

	        for (property in settings) {
	            if (!Object.prototype.hasOwnProperty.call(settings, property))
	                continue;

	            value = settings[property];
	            switch (property) {

	            case 'isStatic':
	                Body.setStatic(body, value);
	                break;
	            case 'isSleeping':
	                Sleeping.set(body, value);
	                break;
	            case 'mass':
	                Body.setMass(body, value);
	                break;
	            case 'density':
	                Body.setDensity(body, value);
	                break;
	            case 'inertia':
	                Body.setInertia(body, value);
	                break;
	            case 'vertices':
	                Body.setVertices(body, value);
	                break;
	            case 'position':
	                Body.setPosition(body, value);
	                break;
	            case 'angle':
	                Body.setAngle(body, value);
	                break;
	            case 'velocity':
	                Body.setVelocity(body, value);
	                break;
	            case 'angularVelocity':
	                Body.setAngularVelocity(body, value);
	                break;
	            case 'speed':
	                Body.setSpeed(body, value);
	                break;
	            case 'angularSpeed':
	                Body.setAngularSpeed(body, value);
	                break;
	            case 'parts':
	                Body.setParts(body, value);
	                break;
	            case 'centre':
	                Body.setCentre(body, value);
	                break;
	            default:
	                body[property] = value;

	            }
	        }
	    };

	    /**
	     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
	     * @method setStatic
	     * @param {body} body
	     * @param {bool} isStatic
	     */
	    Body.setStatic = function(body, isStatic) {
	        for (var i = 0; i < body.parts.length; i++) {
	            var part = body.parts[i];
	            part.isStatic = isStatic;

	            if (isStatic) {
	                part._original = {
	                    restitution: part.restitution,
	                    friction: part.friction,
	                    mass: part.mass,
	                    inertia: part.inertia,
	                    density: part.density,
	                    inverseMass: part.inverseMass,
	                    inverseInertia: part.inverseInertia
	                };

	                part.restitution = 0;
	                part.friction = 1;
	                part.mass = part.inertia = part.density = Infinity;
	                part.inverseMass = part.inverseInertia = 0;

	                part.positionPrev.x = part.position.x;
	                part.positionPrev.y = part.position.y;
	                part.anglePrev = part.angle;
	                part.angularVelocity = 0;
	                part.speed = 0;
	                part.angularSpeed = 0;
	                part.motion = 0;
	            } else if (part._original) {
	                part.restitution = part._original.restitution;
	                part.friction = part._original.friction;
	                part.mass = part._original.mass;
	                part.inertia = part._original.inertia;
	                part.density = part._original.density;
	                part.inverseMass = part._original.inverseMass;
	                part.inverseInertia = part._original.inverseInertia;

	                part._original = null;
	            }
	        }
	    };

	    /**
	     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
	     * @method setMass
	     * @param {body} body
	     * @param {number} mass
	     */
	    Body.setMass = function(body, mass) {
	        var moment = body.inertia / (body.mass / 6);
	        body.inertia = moment * (mass / 6);
	        body.inverseInertia = 1 / body.inertia;

	        body.mass = mass;
	        body.inverseMass = 1 / body.mass;
	        body.density = body.mass / body.area;
	    };

	    /**
	     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
	     * @method setDensity
	     * @param {body} body
	     * @param {number} density
	     */
	    Body.setDensity = function(body, density) {
	        Body.setMass(body, density * body.area);
	        body.density = density;
	    };

	    /**
	     * Sets the moment of inertia of the body. This is the second moment of area in two dimensions.
	     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
	     * @method setInertia
	     * @param {body} body
	     * @param {number} inertia
	     */
	    Body.setInertia = function(body, inertia) {
	        body.inertia = inertia;
	        body.inverseInertia = 1 / body.inertia;
	    };

	    /**
	     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
	     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
	     * They are then automatically translated to world space based on `body.position`.
	     *
	     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
	     * Vertices must form a convex hull. Concave vertices must be decomposed into convex parts.
	     * 
	     * @method setVertices
	     * @param {body} body
	     * @param {vector[]} vertices
	     */
	    Body.setVertices = function(body, vertices) {
	        // change vertices
	        if (vertices[0].body === body) {
	            body.vertices = vertices;
	        } else {
	            body.vertices = Vertices.create(vertices, body);
	        }

	        // update properties
	        body.axes = Axes.fromVertices(body.vertices);
	        body.area = Vertices.area(body.vertices);
	        Body.setMass(body, body.density * body.area);

	        // orient vertices around the centre of mass at origin (0, 0)
	        var centre = Vertices.centre(body.vertices);
	        Vertices.translate(body.vertices, centre, -1);

	        // update inertia while vertices are at origin (0, 0)
	        Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));

	        // update geometry
	        Vertices.translate(body.vertices, body.position);
	        Bounds.update(body.bounds, body.vertices, body.velocity);
	    };

	    /**
	     * Sets the parts of the `body` and updates mass, inertia and centroid.
	     * Each part will have its parent set to `body`.
	     * By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
	     * Note that this method will ensure that the first part in `body.parts` will always be the `body`.
	     * @method setParts
	     * @param {body} body
	     * @param {body[]} parts
	     * @param {bool} [autoHull=true]
	     */
	    Body.setParts = function(body, parts, autoHull) {
	        var i;

	        // add all the parts, ensuring that the first part is always the parent body
	        parts = parts.slice(0);
	        body.parts.length = 0;
	        body.parts.push(body);
	        body.parent = body;

	        for (i = 0; i < parts.length; i++) {
	            var part = parts[i];
	            if (part !== body) {
	                part.parent = body;
	                body.parts.push(part);
	            }
	        }

	        if (body.parts.length === 1)
	            return;

	        autoHull = typeof autoHull !== 'undefined' ? autoHull : true;

	        // find the convex hull of all parts to set on the parent body
	        if (autoHull) {
	            var vertices = [];
	            for (i = 0; i < parts.length; i++) {
	                vertices = vertices.concat(parts[i].vertices);
	            }

	            Vertices.clockwiseSort(vertices);

	            var hull = Vertices.hull(vertices),
	                hullCentre = Vertices.centre(hull);

	            Body.setVertices(body, hull);
	            Vertices.translate(body.vertices, hullCentre);
	        }

	        // sum the properties of all compound parts of the parent body
	        var total = Body._totalProperties(body);

	        body.area = total.area;
	        body.parent = body;
	        body.position.x = total.centre.x;
	        body.position.y = total.centre.y;
	        body.positionPrev.x = total.centre.x;
	        body.positionPrev.y = total.centre.y;

	        Body.setMass(body, total.mass);
	        Body.setInertia(body, total.inertia);
	        Body.setPosition(body, total.centre);
	    };

	    /**
	     * Set the centre of mass of the body. 
	     * The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
	     * The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
	     * This is equal to moving `body.position` but not the `body.vertices`.
	     * Invalid if the `centre` falls outside the body's convex hull.
	     * @method setCentre
	     * @param {body} body
	     * @param {vector} centre
	     * @param {bool} relative
	     */
	    Body.setCentre = function(body, centre, relative) {
	        if (!relative) {
	            body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
	            body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
	            body.position.x = centre.x;
	            body.position.y = centre.y;
	        } else {
	            body.positionPrev.x += centre.x;
	            body.positionPrev.y += centre.y;
	            body.position.x += centre.x;
	            body.position.y += centre.y;
	        }
	    };

	    /**
	     * Sets the position of the body. By default velocity is unchanged.
	     * If `updateVelocity` is `true` then velocity is inferred from the change in position.
	     * @method setPosition
	     * @param {body} body
	     * @param {vector} position
	     * @param {boolean} [updateVelocity=false]
	     */
	    Body.setPosition = function(body, position, updateVelocity) {
	        var delta = Vector.sub(position, body.position);

	        if (updateVelocity) {
	            body.positionPrev.x = body.position.x;
	            body.positionPrev.y = body.position.y;
	            body.velocity.x = delta.x;
	            body.velocity.y = delta.y;
	            body.speed = Vector.magnitude(delta);
	        } else {
	            body.positionPrev.x += delta.x;
	            body.positionPrev.y += delta.y;
	        }

	        for (var i = 0; i < body.parts.length; i++) {
	            var part = body.parts[i];
	            part.position.x += delta.x;
	            part.position.y += delta.y;
	            Vertices.translate(part.vertices, delta);
	            Bounds.update(part.bounds, part.vertices, body.velocity);
	        }
	    };

	    /**
	     * Sets the angle of the body. By default angular velocity is unchanged.
	     * If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
	     * @method setAngle
	     * @param {body} body
	     * @param {number} angle
	     * @param {boolean} [updateVelocity=false]
	     */
	    Body.setAngle = function(body, angle, updateVelocity) {
	        var delta = angle - body.angle;
	        
	        if (updateVelocity) {
	            body.anglePrev = body.angle;
	            body.angularVelocity = delta;
	            body.angularSpeed = Math.abs(delta);
	        } else {
	            body.anglePrev += delta;
	        }

	        for (var i = 0; i < body.parts.length; i++) {
	            var part = body.parts[i];
	            part.angle += delta;
	            Vertices.rotate(part.vertices, delta, body.position);
	            Axes.rotate(part.axes, delta);
	            Bounds.update(part.bounds, part.vertices, body.velocity);
	            if (i > 0) {
	                Vector.rotateAbout(part.position, delta, body.position, part.position);
	            }
	        }
	    };

	    /**
	     * Sets the current linear velocity of the body.  
	     * Affects body speed.
	     * @method setVelocity
	     * @param {body} body
	     * @param {vector} velocity
	     */
	    Body.setVelocity = function(body, velocity) {
	        var timeScale = body.deltaTime / Body._baseDelta;
	        body.positionPrev.x = body.position.x - velocity.x * timeScale;
	        body.positionPrev.y = body.position.y - velocity.y * timeScale;
	        body.velocity.x = (body.position.x - body.positionPrev.x) / timeScale;
	        body.velocity.y = (body.position.y - body.positionPrev.y) / timeScale;
	        body.speed = Vector.magnitude(body.velocity);
	    };

	    /**
	     * Gets the current linear velocity of the body.
	     * @method getVelocity
	     * @param {body} body
	     * @return {vector} velocity
	     */
	    Body.getVelocity = function(body) {
	        var timeScale = Body._baseDelta / body.deltaTime;

	        return {
	            x: (body.position.x - body.positionPrev.x) * timeScale,
	            y: (body.position.y - body.positionPrev.y) * timeScale
	        };
	    };

	    /**
	     * Gets the current linear speed of the body.  
	     * Equivalent to the magnitude of its velocity.
	     * @method getSpeed
	     * @param {body} body
	     * @return {number} speed
	     */
	    Body.getSpeed = function(body) {
	        return Vector.magnitude(Body.getVelocity(body));
	    };

	    /**
	     * Sets the current linear speed of the body.  
	     * Direction is maintained. Affects body velocity.
	     * @method setSpeed
	     * @param {body} body
	     * @param {number} speed
	     */
	    Body.setSpeed = function(body, speed) {
	        Body.setVelocity(body, Vector.mult(Vector.normalise(Body.getVelocity(body)), speed));
	    };

	    /**
	     * Sets the current rotational velocity of the body.  
	     * Affects body angular speed.
	     * @method setAngularVelocity
	     * @param {body} body
	     * @param {number} velocity
	     */
	    Body.setAngularVelocity = function(body, velocity) {
	        var timeScale = body.deltaTime / Body._baseDelta;
	        body.anglePrev = body.angle - velocity * timeScale;
	        body.angularVelocity = (body.angle - body.anglePrev) / timeScale;
	        body.angularSpeed = Math.abs(body.angularVelocity);
	    };

	    /**
	     * Gets the current rotational velocity of the body.
	     * @method getAngularVelocity
	     * @param {body} body
	     * @return {number} angular velocity
	     */
	    Body.getAngularVelocity = function(body) {
	        return (body.angle - body.anglePrev) * Body._baseDelta / body.deltaTime;
	    };

	    /**
	     * Gets the current rotational speed of the body.  
	     * Equivalent to the magnitude of its angular velocity.
	     * @method getAngularSpeed
	     * @param {body} body
	     * @return {number} angular speed
	     */
	    Body.getAngularSpeed = function(body) {
	        return Math.abs(Body.getAngularVelocity(body));
	    };

	    /**
	     * Sets the current rotational speed of the body.  
	     * Direction is maintained. Affects body angular velocity.
	     * @method setAngularSpeed
	     * @param {body} body
	     * @param {number} speed
	     */
	    Body.setAngularSpeed = function(body, speed) {
	        Body.setAngularVelocity(body, Common.sign(Body.getAngularVelocity(body)) * speed);
	    };

	    /**
	     * Moves a body by a given vector relative to its current position. By default velocity is unchanged.
	     * If `updateVelocity` is `true` then velocity is inferred from the change in position.
	     * @method translate
	     * @param {body} body
	     * @param {vector} translation
	     * @param {boolean} [updateVelocity=false]
	     */
	    Body.translate = function(body, translation, updateVelocity) {
	        Body.setPosition(body, Vector.add(body.position, translation), updateVelocity);
	    };

	    /**
	     * Rotates a body by a given angle relative to its current angle. By default angular velocity is unchanged.
	     * If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
	     * @method rotate
	     * @param {body} body
	     * @param {number} rotation
	     * @param {vector} [point]
	     * @param {boolean} [updateVelocity=false]
	     */
	    Body.rotate = function(body, rotation, point, updateVelocity) {
	        if (!point) {
	            Body.setAngle(body, body.angle + rotation, updateVelocity);
	        } else {
	            var cos = Math.cos(rotation),
	                sin = Math.sin(rotation),
	                dx = body.position.x - point.x,
	                dy = body.position.y - point.y;
	                
	            Body.setPosition(body, {
	                x: point.x + (dx * cos - dy * sin),
	                y: point.y + (dx * sin + dy * cos)
	            }, updateVelocity);

	            Body.setAngle(body, body.angle + rotation, updateVelocity);
	        }
	    };

	    /**
	     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
	     * @method scale
	     * @param {body} body
	     * @param {number} scaleX
	     * @param {number} scaleY
	     * @param {vector} [point]
	     */
	    Body.scale = function(body, scaleX, scaleY, point) {
	        var totalArea = 0,
	            totalInertia = 0;

	        point = point || body.position;

	        for (var i = 0; i < body.parts.length; i++) {
	            var part = body.parts[i];

	            // scale vertices
	            Vertices.scale(part.vertices, scaleX, scaleY, point);

	            // update properties
	            part.axes = Axes.fromVertices(part.vertices);
	            part.area = Vertices.area(part.vertices);
	            Body.setMass(part, body.density * part.area);

	            // update inertia (requires vertices to be at origin)
	            Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
	            Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
	            Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });

	            if (i > 0) {
	                totalArea += part.area;
	                totalInertia += part.inertia;
	            }

	            // scale position
	            part.position.x = point.x + (part.position.x - point.x) * scaleX;
	            part.position.y = point.y + (part.position.y - point.y) * scaleY;

	            // update bounds
	            Bounds.update(part.bounds, part.vertices, body.velocity);
	        }

	        // handle parent body
	        if (body.parts.length > 1) {
	            body.area = totalArea;

	            if (!body.isStatic) {
	                Body.setMass(body, body.density * totalArea);
	                Body.setInertia(body, totalInertia);
	            }
	        }

	        // handle circles
	        if (body.circleRadius) { 
	            if (scaleX === scaleY) {
	                body.circleRadius *= scaleX;
	            } else {
	                // body is no longer a circle
	                body.circleRadius = null;
	            }
	        }
	    };

	    /**
	     * Performs an update by integrating the equations of motion on the `body`.
	     * This is applied every update by `Matter.Engine` automatically.
	     * @method update
	     * @param {body} body
	     * @param {number} [deltaTime=16.666]
	     */
	    Body.update = function(body, deltaTime) {
	        deltaTime = (typeof deltaTime !== 'undefined' ? deltaTime : (1000 / 60)) * body.timeScale;

	        var deltaTimeSquared = deltaTime * deltaTime,
	            correction = Body._timeCorrection ? deltaTime / (body.deltaTime || deltaTime) : 1;

	        // from the previous step
	        var frictionAir = 1 - body.frictionAir * (deltaTime / Common._baseDelta),
	            velocityPrevX = (body.position.x - body.positionPrev.x) * correction,
	            velocityPrevY = (body.position.y - body.positionPrev.y) * correction;

	        // update velocity with Verlet integration
	        body.velocity.x = (velocityPrevX * frictionAir) + (body.force.x / body.mass) * deltaTimeSquared;
	        body.velocity.y = (velocityPrevY * frictionAir) + (body.force.y / body.mass) * deltaTimeSquared;

	        body.positionPrev.x = body.position.x;
	        body.positionPrev.y = body.position.y;
	        body.position.x += body.velocity.x;
	        body.position.y += body.velocity.y;
	        body.deltaTime = deltaTime;

	        // update angular velocity with Verlet integration
	        body.angularVelocity = ((body.angle - body.anglePrev) * frictionAir * correction) + (body.torque / body.inertia) * deltaTimeSquared;
	        body.anglePrev = body.angle;
	        body.angle += body.angularVelocity;

	        // transform the body geometry
	        for (var i = 0; i < body.parts.length; i++) {
	            var part = body.parts[i];

	            Vertices.translate(part.vertices, body.velocity);
	            
	            if (i > 0) {
	                part.position.x += body.velocity.x;
	                part.position.y += body.velocity.y;
	            }

	            if (body.angularVelocity !== 0) {
	                Vertices.rotate(part.vertices, body.angularVelocity, body.position);
	                Axes.rotate(part.axes, body.angularVelocity);
	                if (i > 0) {
	                    Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
	                }
	            }

	            Bounds.update(part.bounds, part.vertices, body.velocity);
	        }
	    };

	    /**
	     * Updates properties `body.velocity`, `body.speed`, `body.angularVelocity` and `body.angularSpeed` which are normalised in relation to `Body._baseDelta`.
	     * @method updateVelocities
	     * @param {body} body
	     */
	    Body.updateVelocities = function(body) {
	        var timeScale = Body._baseDelta / body.deltaTime,
	            bodyVelocity = body.velocity;

	        bodyVelocity.x = (body.position.x - body.positionPrev.x) * timeScale;
	        bodyVelocity.y = (body.position.y - body.positionPrev.y) * timeScale;
	        body.speed = Math.sqrt((bodyVelocity.x * bodyVelocity.x) + (bodyVelocity.y * bodyVelocity.y));

	        body.angularVelocity = (body.angle - body.anglePrev) * timeScale;
	        body.angularSpeed = Math.abs(body.angularVelocity);
	    };

	    /**
	     * Applies the `force` to the `body` from the force origin `position` in world-space, over a single timestep, including applying any resulting angular torque.
	     * 
	     * Forces are useful for effects like gravity, wind or rocket thrust, but can be difficult in practice when precise control is needed. In these cases see `Body.setVelocity` and `Body.setPosition` as an alternative.
	     * 
	     * The force from this function is only applied once for the duration of a single timestep, in other words the duration depends directly on the current engine update `delta` and the rate of calls to this function.
	     * 
	     * Therefore to account for time, you should apply the force constantly over as many engine updates as equivalent to the intended duration.
	     * 
	     * If all or part of the force duration is some fraction of a timestep, first multiply the force by `duration / timestep`.
	     * 
	     * The force origin `position` in world-space must also be specified. Passing `body.position` will result in zero angular effect as the force origin would be at the centre of mass.
	     * 
	     * The `body` will take time to accelerate under a force, the resulting effect depends on duration of the force, the body mass and other forces on the body including friction combined.
	     * @method applyForce
	     * @param {body} body
	     * @param {vector} position The force origin in world-space. Pass `body.position` to avoid angular torque.
	     * @param {vector} force
	     */
	    Body.applyForce = function(body, position, force) {
	        var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
	        body.force.x += force.x;
	        body.force.y += force.y;
	        body.torque += offset.x * force.y - offset.y * force.x;
	    };

	    /**
	     * Returns the sums of the properties of all compound parts of the parent body.
	     * @method _totalProperties
	     * @private
	     * @param {body} body
	     * @return {}
	     */
	    Body._totalProperties = function(body) {
	        // from equations at:
	        // https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
	        // http://output.to/sideway/default.asp?qno=121100087

	        var properties = {
	            mass: 0,
	            area: 0,
	            inertia: 0,
	            centre: { x: 0, y: 0 }
	        };

	        // sum the properties of all compound parts of the parent body
	        for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
	            var part = body.parts[i],
	                mass = part.mass !== Infinity ? part.mass : 1;

	            properties.mass += mass;
	            properties.area += part.area;
	            properties.inertia += part.inertia;
	            properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
	        }

	        properties.centre = Vector.div(properties.centre, properties.mass);

	        return properties;
	    };

	    /*
	    *
	    *  Events Documentation
	    *
	    */

	    /**
	    * Fired when a body starts sleeping (where `this` is the body).
	    *
	    * @event sleepStart
	    * @this {body} The body that has started sleeping
	    * @param {} event An event object
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when a body ends sleeping (where `this` is the body).
	    *
	    * @event sleepEnd
	    * @this {body} The body that has ended sleeping
	    * @param {} event An event object
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
	     *
	     * @property id
	     * @type number
	     */

	    /**
	     * _Read only_. Set by `Body.create`.
	     * 
	     * A `String` denoting the type of object.
	     *
	     * @readOnly
	     * @property type
	     * @type string
	     * @default "body"
	     */

	    /**
	     * An arbitrary `String` name to help the user identify and manage bodies.
	     *
	     * @property label
	     * @type string
	     * @default "Body"
	     */

	    /**
	     * _Read only_. Use `Body.setParts` to set. 
	     * 
	     * An array of bodies that make up this body. 
	     * The first body in the array must always be a self reference to the current body instance.
	     * All bodies in the `parts` array together form a single rigid compound body.
	     * Parts are allowed to overlap, have gaps or holes or even form concave bodies.
	     * Parts themselves should never be added to a `World`, only the parent body should be.
	     * Use `Body.setParts` when setting parts to ensure correct updates of all properties.
	     *
	     * @readOnly
	     * @property parts
	     * @type body[]
	     */

	    /**
	     * An object reserved for storing plugin-specific properties.
	     *
	     * @property plugin
	     * @type {}
	     */

	    /**
	     * _Read only_. Updated by `Body.setParts`.
	     * 
	     * A reference to the body that this is a part of. See `body.parts`.
	     * This is a self reference if the body is not a part of another body.
	     *
	     * @readOnly
	     * @property parent
	     * @type body
	     */

	    /**
	     * A `Number` specifying the angle of the body, in radians.
	     *
	     * @property angle
	     * @type number
	     * @default 0
	     */

	    /**
	     * _Read only_. Use `Body.setVertices` or `Body.setParts` to set. See also `Bodies.fromVertices`.
	     * 
	     * An array of `Vector` objects that specify the convex hull of the rigid body.
	     * These should be provided about the origin `(0, 0)`. E.g.
	     *
	     * `[{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]`
	     * 
	     * Vertices must always be convex, in clockwise order and must not contain any duplicate points.
	     * 
	     * Concave vertices should be decomposed into convex `parts`, see `Bodies.fromVertices` and `Body.setParts`.
	     *
	     * When set the vertices are translated such that `body.position` is at the centre of mass.
	     * Many other body properties are automatically calculated from these vertices when set including `density`, `area` and `inertia`.
	     * 
	     * The module `Matter.Vertices` contains useful methods for working with vertices.
	     *
	     * @readOnly
	     * @property vertices
	     * @type vector[]
	     */

	    /**
	     * _Read only_. Use `Body.setPosition` to set. 
	     * 
	     * A `Vector` that specifies the current world-space position of the body.
	     * 
	     * @readOnly
	     * @property position
	     * @type vector
	     * @default { x: 0, y: 0 }
	     */

	    /**
	     * A `Vector` that accumulates the total force applied to the body for a single update.
	     * Force is zeroed after every `Engine.update`, so constant forces should be applied for every update they are needed. See also `Body.applyForce`.
	     * 
	     * @property force
	     * @type vector
	     * @default { x: 0, y: 0 }
	     */

	    /**
	     * A `Number` that accumulates the total torque (turning force) applied to the body for a single update. See also `Body.applyForce`.
	     * Torque is zeroed after every `Engine.update`, so constant torques should be applied for every update they are needed.
	     *
	     * Torques result in angular acceleration on every update, which depends on body inertia and the engine update delta.
	     * 
	     * @property torque
	     * @type number
	     * @default 0
	     */

	    /**
	     * _Read only_. Use `Body.setSpeed` to set. 
	     * 
	     * See `Body.getSpeed` for details.
	     * 
	     * Equivalent to the magnitude of `body.velocity` (always positive).
	     * 
	     * @readOnly
	     * @property speed
	     * @type number
	     * @default 0
	     */

	    /**
	     * _Read only_. Use `Body.setVelocity` to set. 
	     * 
	     * See `Body.getVelocity` for details.
	     * 
	     * Equivalent to the magnitude of `body.angularVelocity` (always positive).
	     * 
	     * @readOnly
	     * @property velocity
	     * @type vector
	     * @default { x: 0, y: 0 }
	     */

	    /**
	     * _Read only_. Use `Body.setAngularSpeed` to set. 
	     * 
	     * See `Body.getAngularSpeed` for details.
	     * 
	     * 
	     * @readOnly
	     * @property angularSpeed
	     * @type number
	     * @default 0
	     */

	    /**
	     * _Read only_. Use `Body.setAngularVelocity` to set. 
	     * 
	     * See `Body.getAngularVelocity` for details.
	     * 
	     *
	     * @readOnly
	     * @property angularVelocity
	     * @type number
	     * @default 0
	     */

	    /**
	     * _Read only_. Use `Body.setStatic` to set. 
	     * 
	     * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
	     *
	     * @readOnly
	     * @property isStatic
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
	     *
	     * @property isSensor
	     * @type boolean
	     * @default false
	     */

	    /**
	     * _Read only_. Use `Sleeping.set` to set. 
	     * 
	     * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
	     *
	     * @readOnly
	     * @property isSleeping
	     * @type boolean
	     * @default false
	     */

	    /**
	     * _Read only_. Calculated during engine update only when sleeping is enabled.
	     * 
	     * A `Number` that loosely measures the amount of movement a body currently has.
	     *
	     * Derived from `body.speed^2 + body.angularSpeed^2`. See `Sleeping.update`.
	     * 
	     * @readOnly
	     * @property motion
	     * @type number
	     * @default 0
	     */

	    /**
	     * A `Number` that defines the length of time during which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
	     * 
	     * @property sleepThreshold
	     * @type number
	     * @default 60
	     */

	    /**
	     * _Read only_. Use `Body.setDensity` to set. 
	     * 
	     * A `Number` that defines the density of the body (mass per unit area).
	     * 
	     * Mass will also be updated when set.
	     *
	     * @readOnly
	     * @property density
	     * @type number
	     * @default 0.001
	     */

	    /**
	     * _Read only_. Use `Body.setMass` to set. 
	     * 
	     * A `Number` that defines the mass of the body.
	     * 
	     * Density will also be updated when set.
	     * 
	     * @readOnly
	     * @property mass
	     * @type number
	     */

	    /**
	     * _Read only_. Use `Body.setMass` to set. 
	     * 
	     * A `Number` that defines the inverse mass of the body (`1 / mass`).
	     *
	     * @readOnly
	     * @property inverseMass
	     * @type number
	     */

	    /**
	     * _Read only_. Automatically calculated when vertices, mass or density are set or set through `Body.setInertia`.
	     * 
	     * A `Number` that defines the moment of inertia of the body. This is the second moment of area in two dimensions.
	     * 
	     * Can be manually set to `Infinity` to prevent rotation of the body. See `Body.setInertia`.
	     * 
	     * @readOnly
	     * @property inertia
	     * @type number
	     */

	    /**
	     * _Read only_. Automatically calculated when vertices, mass or density are set or calculated by `Body.setInertia`.
	     * 
	     * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
	     * 
	     * @readOnly
	     * @property inverseInertia
	     * @type number
	     */

	    /**
	     * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
	     * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
	     * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
	     * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
	     *
	     * `Math.max(bodyA.restitution, bodyB.restitution)`
	     *
	     * @property restitution
	     * @type number
	     * @default 0
	     */

	    /**
	     * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
	     * A value of `0` means that the body may slide indefinitely.
	     * A value of `1` means the body may come to a stop almost instantly after a force is applied.
	     *
	     * The effects of the value may be non-linear. 
	     * High values may be unstable depending on the body.
	     * The engine uses a Coulomb friction model including static and kinetic friction.
	     * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
	     *
	     * `Math.min(bodyA.friction, bodyB.friction)`
	     *
	     * @property friction
	     * @type number
	     * @default 0.1
	     */

	    /**
	     * A `Number` that defines the static friction of the body (in the Coulomb friction model). 
	     * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
	     * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
	     * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
	     *
	     * @property frictionStatic
	     * @type number
	     * @default 0.5
	     */

	    /**
	     * A `Number` that defines the air friction of the body (air resistance). 
	     * A value of `0` means the body will never slow as it moves through space.
	     * The higher the value, the faster a body slows when moving through space.
	     * The effects of the value are non-linear. 
	     *
	     * @property frictionAir
	     * @type number
	     * @default 0.01
	     */

	    /**
	     * An `Object` that specifies the collision filtering properties of this body.
	     *
	     * Collisions between two bodies will obey the following rules:
	     * - If the two bodies have the same non-zero value of `collisionFilter.group`,
	     *   they will always collide if the value is positive, and they will never collide
	     *   if the value is negative.
	     * - If the two bodies have different values of `collisionFilter.group` or if one
	     *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
	     *
	     * Each body belongs to a collision category, given by `collisionFilter.category`. This
	     * value is used as a bit field and the category should have only one bit set, meaning that
	     * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
	     * different collision categories available.
	     *
	     * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
	     * the categories it collides with (the value is the bitwise AND value of all these categories).
	     *
	     * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
	     * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
	     * are both true.
	     *
	     * @property collisionFilter
	     * @type object
	     */

	    /**
	     * An Integer `Number`, that specifies the collision group this body belongs to.
	     * See `body.collisionFilter` for more information.
	     *
	     * @property collisionFilter.group
	     * @type object
	     * @default 0
	     */

	    /**
	     * A bit field that specifies the collision category this body belongs to.
	     * The category value should have only one bit set, for example `0x0001`.
	     * This means there are up to 32 unique collision categories available.
	     * See `body.collisionFilter` for more information.
	     *
	     * @property collisionFilter.category
	     * @type object
	     * @default 1
	     */

	    /**
	     * A bit mask that specifies the collision categories this body may collide with.
	     * See `body.collisionFilter` for more information.
	     *
	     * @property collisionFilter.mask
	     * @type object
	     * @default -1
	     */

	    /**
	     * A `Number` that specifies a thin boundary around the body where it is allowed to slightly sink into other bodies.
	     * 
	     * This is required for proper collision response, including friction and restitution effects.
	     * 
	     * The default should generally suffice in most cases. You may need to decrease this value for very small bodies that are nearing the default value in scale.
	     *
	     * @property slop
	     * @type number
	     * @default 0.05
	     */

	    /**
	     * A `Number` that specifies per-body time scaling.
	     *
	     * @property timeScale
	     * @type number
	     * @default 1
	     */

	    /**
	     * _Read only_. Updated during engine update.
	     * 
	     * A `Number` that records the last delta time value used to update this body.
	     * Used to calculate speed and velocity.
	     *
	     * @readOnly
	     * @property deltaTime
	     * @type number
	     * @default 1000 / 60
	     */

	    /**
	     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
	     *
	     * @property render
	     * @type object
	     */

	    /**
	     * A flag that indicates if the body should be rendered.
	     *
	     * @property render.visible
	     * @type boolean
	     * @default true
	     */

	    /**
	     * Sets the opacity to use when rendering.
	     *
	     * @property render.opacity
	     * @type number
	     * @default 1
	    */

	    /**
	     * An `Object` that defines the sprite properties to use when rendering, if any.
	     *
	     * @property render.sprite
	     * @type object
	     */

	    /**
	     * An `String` that defines the path to the image to use as the sprite texture, if any.
	     *
	     * @property render.sprite.texture
	     * @type string
	     */
	     
	    /**
	     * A `Number` that defines the scaling in the x-axis for the sprite, if any.
	     *
	     * @property render.sprite.xScale
	     * @type number
	     * @default 1
	     */

	    /**
	     * A `Number` that defines the scaling in the y-axis for the sprite, if any.
	     *
	     * @property render.sprite.yScale
	     * @type number
	     * @default 1
	     */

	    /**
	      * A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
	      *
	      * @property render.sprite.xOffset
	      * @type number
	      * @default 0
	      */

	    /**
	      * A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
	      *
	      * @property render.sprite.yOffset
	      * @type number
	      * @default 0
	      */

	    /**
	     * A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
	     * A value of `0` means no outline will be rendered.
	     *
	     * @property render.lineWidth
	     * @type number
	     * @default 0
	     */

	    /**
	     * A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
	     * It is the same as when using a canvas, so it accepts CSS style property values.
	     *
	     * @property render.fillStyle
	     * @type string
	     * @default a random colour
	     */

	    /**
	     * A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
	     * It is the same as when using a canvas, so it accepts CSS style property values.
	     *
	     * @property render.strokeStyle
	     * @type string
	     * @default a random colour
	     */

	    /**
	     * _Read only_. Calculated automatically when vertices are set.
	     * 
	     * An array of unique axis vectors (edge normals) used for collision detection.
	     * These are automatically calculated when vertices are set.
	     * They are constantly updated by `Body.update` during the simulation.
	     *
	     * @readOnly
	     * @property axes
	     * @type vector[]
	     */
	     
	    /**
	     * _Read only_. Calculated automatically when vertices are set.
	     * 
	     * A `Number` that measures the area of the body's convex hull.
	     * 
	     * @readOnly
	     * @property area
	     * @type string
	     * @default 
	     */

	    /**
	     * A `Bounds` object that defines the AABB region for the body.
	     * It is automatically calculated when vertices are set and constantly updated by `Body.update` during simulation.
	     * 
	     * @property bounds
	     * @type bounds
	     */

	})();


	/***/ }),
	/* 5 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Events` module contains methods to fire and listen to events on other objects.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Events
	*/

	var Events = {};

	module.exports = Events;

	var Common = __webpack_require__(0);

	(function() {

	    /**
	     * Subscribes a callback function to the given object's `eventName`.
	     * @method on
	     * @param {} object
	     * @param {string} eventNames
	     * @param {function} callback
	     */
	    Events.on = function(object, eventNames, callback) {
	        var names = eventNames.split(' '),
	            name;

	        for (var i = 0; i < names.length; i++) {
	            name = names[i];
	            object.events = object.events || {};
	            object.events[name] = object.events[name] || [];
	            object.events[name].push(callback);
	        }

	        return callback;
	    };

	    /**
	     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
	     * @method off
	     * @param {} object
	     * @param {string} eventNames
	     * @param {function} callback
	     */
	    Events.off = function(object, eventNames, callback) {
	        if (!eventNames) {
	            object.events = {};
	            return;
	        }

	        // handle Events.off(object, callback)
	        if (typeof eventNames === 'function') {
	            callback = eventNames;
	            eventNames = Common.keys(object.events).join(' ');
	        }

	        var names = eventNames.split(' ');

	        for (var i = 0; i < names.length; i++) {
	            var callbacks = object.events[names[i]],
	                newCallbacks = [];

	            if (callback && callbacks) {
	                for (var j = 0; j < callbacks.length; j++) {
	                    if (callbacks[j] !== callback)
	                        newCallbacks.push(callbacks[j]);
	                }
	            }

	            object.events[names[i]] = newCallbacks;
	        }
	    };

	    /**
	     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
	     * @method trigger
	     * @param {} object
	     * @param {string} eventNames
	     * @param {} event
	     */
	    Events.trigger = function(object, eventNames, event) {
	        var names,
	            name,
	            callbacks,
	            eventClone;

	        var events = object.events;
	        
	        if (events && Common.keys(events).length > 0) {
	            if (!event)
	                event = {};

	            names = eventNames.split(' ');

	            for (var i = 0; i < names.length; i++) {
	                name = names[i];
	                callbacks = events[name];

	                if (callbacks) {
	                    eventClone = Common.clone(event, false);
	                    eventClone.name = name;
	                    eventClone.source = object;

	                    for (var j = 0; j < callbacks.length; j++) {
	                        callbacks[j].apply(object, [eventClone]);
	                    }
	                }
	            }
	        }
	    };

	})();


	/***/ }),
	/* 6 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* A composite is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite` objects.
	*
	* They are a container that can represent complex objects made of multiple parts, even if they are not physically connected.
	* A composite could contain anything from a single body all the way up to a whole world.
	* 
	* When making any changes to composites, use the included functions rather than changing their properties directly.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Composite
	*/

	var Composite = {};

	module.exports = Composite;

	var Events = __webpack_require__(5);
	var Common = __webpack_require__(0);
	var Bounds = __webpack_require__(1);
	var Body = __webpack_require__(4);

	(function() {

	    /**
	     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
	     * See the properites section below for detailed information on what you can pass via the `options` object.
	     * @method create
	     * @param {} [options]
	     * @return {composite} A new composite
	     */
	    Composite.create = function(options) {
	        return Common.extend({ 
	            id: Common.nextId(),
	            type: 'composite',
	            parent: null,
	            isModified: false,
	            bodies: [], 
	            constraints: [], 
	            composites: [],
	            label: 'Composite',
	            plugin: {},
	            cache: {
	                allBodies: null,
	                allConstraints: null,
	                allComposites: null
	            }
	        }, options);
	    };

	    /**
	     * Sets the composite's `isModified` flag. 
	     * If `updateParents` is true, all parents will be set (default: false).
	     * If `updateChildren` is true, all children will be set (default: false).
	     * @private
	     * @method setModified
	     * @param {composite} composite
	     * @param {boolean} isModified
	     * @param {boolean} [updateParents=false]
	     * @param {boolean} [updateChildren=false]
	     */
	    Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
	        composite.isModified = isModified;

	        if (isModified && composite.cache) {
	            composite.cache.allBodies = null;
	            composite.cache.allConstraints = null;
	            composite.cache.allComposites = null;
	        }

	        if (updateParents && composite.parent) {
	            Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
	        }

	        if (updateChildren) {
	            for (var i = 0; i < composite.composites.length; i++) {
	                var childComposite = composite.composites[i];
	                Composite.setModified(childComposite, isModified, updateParents, updateChildren);
	            }
	        }
	    };

	    /**
	     * Generic single or multi-add function. Adds a single or an array of body(s), constraint(s) or composite(s) to the given composite.
	     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
	     * @method add
	     * @param {composite} composite
	     * @param {object|array} object A single or an array of body(s), constraint(s) or composite(s)
	     * @return {composite} The original composite with the objects added
	     */
	    Composite.add = function(composite, object) {
	        var objects = [].concat(object);

	        Events.trigger(composite, 'beforeAdd', { object: object });

	        for (var i = 0; i < objects.length; i++) {
	            var obj = objects[i];

	            switch (obj.type) {

	            case 'body':
	                // skip adding compound parts
	                if (obj.parent !== obj) {
	                    Common.warn('Composite.add: skipped adding a compound body part (you must add its parent instead)');
	                    break;
	                }

	                Composite.addBody(composite, obj);
	                break;
	            case 'constraint':
	                Composite.addConstraint(composite, obj);
	                break;
	            case 'composite':
	                Composite.addComposite(composite, obj);
	                break;
	            case 'mouseConstraint':
	                Composite.addConstraint(composite, obj.constraint);
	                break;

	            }
	        }

	        Events.trigger(composite, 'afterAdd', { object: object });

	        return composite;
	    };

	    /**
	     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
	     * Optionally searching its children recursively.
	     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
	     * @method remove
	     * @param {composite} composite
	     * @param {object|array} object
	     * @param {boolean} [deep=false]
	     * @return {composite} The original composite with the objects removed
	     */
	    Composite.remove = function(composite, object, deep) {
	        var objects = [].concat(object);

	        Events.trigger(composite, 'beforeRemove', { object: object });

	        for (var i = 0; i < objects.length; i++) {
	            var obj = objects[i];

	            switch (obj.type) {

	            case 'body':
	                Composite.removeBody(composite, obj, deep);
	                break;
	            case 'constraint':
	                Composite.removeConstraint(composite, obj, deep);
	                break;
	            case 'composite':
	                Composite.removeComposite(composite, obj, deep);
	                break;
	            case 'mouseConstraint':
	                Composite.removeConstraint(composite, obj.constraint);
	                break;

	            }
	        }

	        Events.trigger(composite, 'afterRemove', { object: object });

	        return composite;
	    };

	    /**
	     * Adds a composite to the given composite.
	     * @private
	     * @method addComposite
	     * @param {composite} compositeA
	     * @param {composite} compositeB
	     * @return {composite} The original compositeA with the objects from compositeB added
	     */
	    Composite.addComposite = function(compositeA, compositeB) {
	        compositeA.composites.push(compositeB);
	        compositeB.parent = compositeA;
	        Composite.setModified(compositeA, true, true, false);
	        return compositeA;
	    };

	    /**
	     * Removes a composite from the given composite, and optionally searching its children recursively.
	     * @private
	     * @method removeComposite
	     * @param {composite} compositeA
	     * @param {composite} compositeB
	     * @param {boolean} [deep=false]
	     * @return {composite} The original compositeA with the composite removed
	     */
	    Composite.removeComposite = function(compositeA, compositeB, deep) {
	        var position = Common.indexOf(compositeA.composites, compositeB);
	        if (position !== -1) {
	            Composite.removeCompositeAt(compositeA, position);
	        }

	        if (deep) {
	            for (var i = 0; i < compositeA.composites.length; i++){
	                Composite.removeComposite(compositeA.composites[i], compositeB, true);
	            }
	        }

	        return compositeA;
	    };

	    /**
	     * Removes a composite from the given composite.
	     * @private
	     * @method removeCompositeAt
	     * @param {composite} composite
	     * @param {number} position
	     * @return {composite} The original composite with the composite removed
	     */
	    Composite.removeCompositeAt = function(composite, position) {
	        composite.composites.splice(position, 1);
	        Composite.setModified(composite, true, true, false);
	        return composite;
	    };

	    /**
	     * Adds a body to the given composite.
	     * @private
	     * @method addBody
	     * @param {composite} composite
	     * @param {body} body
	     * @return {composite} The original composite with the body added
	     */
	    Composite.addBody = function(composite, body) {
	        composite.bodies.push(body);
	        Composite.setModified(composite, true, true, false);
	        return composite;
	    };

	    /**
	     * Removes a body from the given composite, and optionally searching its children recursively.
	     * @private
	     * @method removeBody
	     * @param {composite} composite
	     * @param {body} body
	     * @param {boolean} [deep=false]
	     * @return {composite} The original composite with the body removed
	     */
	    Composite.removeBody = function(composite, body, deep) {
	        var position = Common.indexOf(composite.bodies, body);
	        if (position !== -1) {
	            Composite.removeBodyAt(composite, position);
	        }

	        if (deep) {
	            for (var i = 0; i < composite.composites.length; i++){
	                Composite.removeBody(composite.composites[i], body, true);
	            }
	        }

	        return composite;
	    };

	    /**
	     * Removes a body from the given composite.
	     * @private
	     * @method removeBodyAt
	     * @param {composite} composite
	     * @param {number} position
	     * @return {composite} The original composite with the body removed
	     */
	    Composite.removeBodyAt = function(composite, position) {
	        composite.bodies.splice(position, 1);
	        Composite.setModified(composite, true, true, false);
	        return composite;
	    };

	    /**
	     * Adds a constraint to the given composite.
	     * @private
	     * @method addConstraint
	     * @param {composite} composite
	     * @param {constraint} constraint
	     * @return {composite} The original composite with the constraint added
	     */
	    Composite.addConstraint = function(composite, constraint) {
	        composite.constraints.push(constraint);
	        Composite.setModified(composite, true, true, false);
	        return composite;
	    };

	    /**
	     * Removes a constraint from the given composite, and optionally searching its children recursively.
	     * @private
	     * @method removeConstraint
	     * @param {composite} composite
	     * @param {constraint} constraint
	     * @param {boolean} [deep=false]
	     * @return {composite} The original composite with the constraint removed
	     */
	    Composite.removeConstraint = function(composite, constraint, deep) {
	        var position = Common.indexOf(composite.constraints, constraint);
	        if (position !== -1) {
	            Composite.removeConstraintAt(composite, position);
	        }

	        if (deep) {
	            for (var i = 0; i < composite.composites.length; i++){
	                Composite.removeConstraint(composite.composites[i], constraint, true);
	            }
	        }

	        return composite;
	    };

	    /**
	     * Removes a body from the given composite.
	     * @private
	     * @method removeConstraintAt
	     * @param {composite} composite
	     * @param {number} position
	     * @return {composite} The original composite with the constraint removed
	     */
	    Composite.removeConstraintAt = function(composite, position) {
	        composite.constraints.splice(position, 1);
	        Composite.setModified(composite, true, true, false);
	        return composite;
	    };

	    /**
	     * Removes all bodies, constraints and composites from the given composite.
	     * Optionally clearing its children recursively.
	     * @method clear
	     * @param {composite} composite
	     * @param {boolean} keepStatic
	     * @param {boolean} [deep=false]
	     */
	    Composite.clear = function(composite, keepStatic, deep) {
	        if (deep) {
	            for (var i = 0; i < composite.composites.length; i++){
	                Composite.clear(composite.composites[i], keepStatic, true);
	            }
	        }
	        
	        if (keepStatic) {
	            composite.bodies = composite.bodies.filter(function(body) { return body.isStatic; });
	        } else {
	            composite.bodies.length = 0;
	        }

	        composite.constraints.length = 0;
	        composite.composites.length = 0;

	        Composite.setModified(composite, true, true, false);

	        return composite;
	    };

	    /**
	     * Returns all bodies in the given composite, including all bodies in its children, recursively.
	     * @method allBodies
	     * @param {composite} composite
	     * @return {body[]} All the bodies
	     */
	    Composite.allBodies = function(composite) {
	        if (composite.cache && composite.cache.allBodies) {
	            return composite.cache.allBodies;
	        }

	        var bodies = [].concat(composite.bodies);

	        for (var i = 0; i < composite.composites.length; i++)
	            bodies = bodies.concat(Composite.allBodies(composite.composites[i]));

	        if (composite.cache) {
	            composite.cache.allBodies = bodies;
	        }

	        return bodies;
	    };

	    /**
	     * Returns all constraints in the given composite, including all constraints in its children, recursively.
	     * @method allConstraints
	     * @param {composite} composite
	     * @return {constraint[]} All the constraints
	     */
	    Composite.allConstraints = function(composite) {
	        if (composite.cache && composite.cache.allConstraints) {
	            return composite.cache.allConstraints;
	        }

	        var constraints = [].concat(composite.constraints);

	        for (var i = 0; i < composite.composites.length; i++)
	            constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));

	        if (composite.cache) {
	            composite.cache.allConstraints = constraints;
	        }

	        return constraints;
	    };

	    /**
	     * Returns all composites in the given composite, including all composites in its children, recursively.
	     * @method allComposites
	     * @param {composite} composite
	     * @return {composite[]} All the composites
	     */
	    Composite.allComposites = function(composite) {
	        if (composite.cache && composite.cache.allComposites) {
	            return composite.cache.allComposites;
	        }

	        var composites = [].concat(composite.composites);

	        for (var i = 0; i < composite.composites.length; i++)
	            composites = composites.concat(Composite.allComposites(composite.composites[i]));

	        if (composite.cache) {
	            composite.cache.allComposites = composites;
	        }

	        return composites;
	    };

	    /**
	     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
	     * @method get
	     * @param {composite} composite
	     * @param {number} id
	     * @param {string} type
	     * @return {object} The requested object, if found
	     */
	    Composite.get = function(composite, id, type) {
	        var objects,
	            object;

	        switch (type) {
	        case 'body':
	            objects = Composite.allBodies(composite);
	            break;
	        case 'constraint':
	            objects = Composite.allConstraints(composite);
	            break;
	        case 'composite':
	            objects = Composite.allComposites(composite).concat(composite);
	            break;
	        }

	        if (!objects)
	            return null;

	        object = objects.filter(function(object) { 
	            return object.id.toString() === id.toString(); 
	        });

	        return object.length === 0 ? null : object[0];
	    };

	    /**
	     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
	     * @method move
	     * @param {compositeA} compositeA
	     * @param {object[]} objects
	     * @param {compositeB} compositeB
	     * @return {composite} Returns compositeA
	     */
	    Composite.move = function(compositeA, objects, compositeB) {
	        Composite.remove(compositeA, objects);
	        Composite.add(compositeB, objects);
	        return compositeA;
	    };

	    /**
	     * Assigns new ids for all objects in the composite, recursively.
	     * @method rebase
	     * @param {composite} composite
	     * @return {composite} Returns composite
	     */
	    Composite.rebase = function(composite) {
	        var objects = Composite.allBodies(composite)
	            .concat(Composite.allConstraints(composite))
	            .concat(Composite.allComposites(composite));

	        for (var i = 0; i < objects.length; i++) {
	            objects[i].id = Common.nextId();
	        }

	        return composite;
	    };

	    /**
	     * Translates all children in the composite by a given vector relative to their current positions, 
	     * without imparting any velocity.
	     * @method translate
	     * @param {composite} composite
	     * @param {vector} translation
	     * @param {bool} [recursive=true]
	     */
	    Composite.translate = function(composite, translation, recursive) {
	        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

	        for (var i = 0; i < bodies.length; i++) {
	            Body.translate(bodies[i], translation);
	        }

	        return composite;
	    };

	    /**
	     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
	     * @method rotate
	     * @param {composite} composite
	     * @param {number} rotation
	     * @param {vector} point
	     * @param {bool} [recursive=true]
	     */
	    Composite.rotate = function(composite, rotation, point, recursive) {
	        var cos = Math.cos(rotation),
	            sin = Math.sin(rotation),
	            bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i],
	                dx = body.position.x - point.x,
	                dy = body.position.y - point.y;
	                
	            Body.setPosition(body, {
	                x: point.x + (dx * cos - dy * sin),
	                y: point.y + (dx * sin + dy * cos)
	            });

	            Body.rotate(body, rotation);
	        }

	        return composite;
	    };

	    /**
	     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
	     * @method scale
	     * @param {composite} composite
	     * @param {number} scaleX
	     * @param {number} scaleY
	     * @param {vector} point
	     * @param {bool} [recursive=true]
	     */
	    Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
	        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i],
	                dx = body.position.x - point.x,
	                dy = body.position.y - point.y;
	                
	            Body.setPosition(body, {
	                x: point.x + dx * scaleX,
	                y: point.y + dy * scaleY
	            });

	            Body.scale(body, scaleX, scaleY);
	        }

	        return composite;
	    };

	    /**
	     * Returns the union of the bounds of all of the composite's bodies.
	     * @method bounds
	     * @param {composite} composite The composite.
	     * @returns {bounds} The composite bounds.
	     */
	    Composite.bounds = function(composite) {
	        var bodies = Composite.allBodies(composite),
	            vertices = [];

	        for (var i = 0; i < bodies.length; i += 1) {
	            var body = bodies[i];
	            vertices.push(body.bounds.min, body.bounds.max);
	        }

	        return Bounds.create(vertices);
	    };

	    /*
	    *
	    *  Events Documentation
	    *
	    */

	    /**
	    * Fired when a call to `Composite.add` is made, before objects have been added.
	    *
	    * @event beforeAdd
	    * @param {} event An event object
	    * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when a call to `Composite.add` is made, after objects have been added.
	    *
	    * @event afterAdd
	    * @param {} event An event object
	    * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when a call to `Composite.remove` is made, before objects have been removed.
	    *
	    * @event beforeRemove
	    * @param {} event An event object
	    * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when a call to `Composite.remove` is made, after objects have been removed.
	    *
	    * @event afterRemove
	    * @param {} event An event object
	    * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
	     *
	     * @property id
	     * @type number
	     */

	    /**
	     * A `String` denoting the type of object.
	     *
	     * @property type
	     * @type string
	     * @default "composite"
	     * @readOnly
	     */

	    /**
	     * An arbitrary `String` name to help the user identify and manage composites.
	     *
	     * @property label
	     * @type string
	     * @default "Composite"
	     */

	    /**
	     * A flag that specifies whether the composite has been modified during the current step.
	     * This is automatically managed when bodies, constraints or composites are added or removed.
	     *
	     * @property isModified
	     * @type boolean
	     * @default false
	     */

	    /**
	     * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
	     *
	     * @property parent
	     * @type composite
	     * @default null
	     */

	    /**
	     * An array of `Body` that are _direct_ children of this composite.
	     * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
	     * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
	     *
	     * @property bodies
	     * @type body[]
	     * @default []
	     */

	    /**
	     * An array of `Constraint` that are _direct_ children of this composite.
	     * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
	     * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
	     *
	     * @property constraints
	     * @type constraint[]
	     * @default []
	     */

	    /**
	     * An array of `Composite` that are _direct_ children of this composite.
	     * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
	     * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
	     *
	     * @property composites
	     * @type composite[]
	     * @default []
	     */

	    /**
	     * An object reserved for storing plugin-specific properties.
	     *
	     * @property plugin
	     * @type {}
	     */

	    /**
	     * An object used for storing cached results for performance reasons.
	     * This is used internally only and is automatically managed.
	     *
	     * @private
	     * @property cache
	     * @type {}
	     */

	})();


	/***/ }),
	/* 7 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
	*
	* @class Sleeping
	*/

	var Sleeping = {};

	module.exports = Sleeping;

	var Body = __webpack_require__(4);
	var Events = __webpack_require__(5);
	var Common = __webpack_require__(0);

	(function() {

	    Sleeping._motionWakeThreshold = 0.18;
	    Sleeping._motionSleepThreshold = 0.08;
	    Sleeping._minBias = 0.9;

	    /**
	     * Puts bodies to sleep or wakes them up depending on their motion.
	     * @method update
	     * @param {body[]} bodies
	     * @param {number} delta
	     */
	    Sleeping.update = function(bodies, delta) {
	        var timeScale = delta / Common._baseDelta,
	            motionSleepThreshold = Sleeping._motionSleepThreshold;
	        
	        // update bodies sleeping status
	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i],
	                speed = Body.getSpeed(body),
	                angularSpeed = Body.getAngularSpeed(body),
	                motion = speed * speed + angularSpeed * angularSpeed;

	            // wake up bodies if they have a force applied
	            if (body.force.x !== 0 || body.force.y !== 0) {
	                Sleeping.set(body, false);
	                continue;
	            }

	            var minMotion = Math.min(body.motion, motion),
	                maxMotion = Math.max(body.motion, motion);
	        
	            // biased average motion estimation between frames
	            body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;

	            if (body.sleepThreshold > 0 && body.motion < motionSleepThreshold) {
	                body.sleepCounter += 1;
	                
	                if (body.sleepCounter >= body.sleepThreshold / timeScale) {
	                    Sleeping.set(body, true);
	                }
	            } else if (body.sleepCounter > 0) {
	                body.sleepCounter -= 1;
	            }
	        }
	    };

	    /**
	     * Given a set of colliding pairs, wakes the sleeping bodies involved.
	     * @method afterCollisions
	     * @param {pair[]} pairs
	     */
	    Sleeping.afterCollisions = function(pairs) {
	        var motionSleepThreshold = Sleeping._motionSleepThreshold;

	        // wake up bodies involved in collisions
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            
	            // don't wake inactive pairs
	            if (!pair.isActive)
	                continue;

	            var collision = pair.collision,
	                bodyA = collision.bodyA.parent, 
	                bodyB = collision.bodyB.parent;
	        
	            // don't wake if at least one body is static
	            if ((bodyA.isSleeping && bodyB.isSleeping) || bodyA.isStatic || bodyB.isStatic)
	                continue;
	        
	            if (bodyA.isSleeping || bodyB.isSleeping) {
	                var sleepingBody = (bodyA.isSleeping && !bodyA.isStatic) ? bodyA : bodyB,
	                    movingBody = sleepingBody === bodyA ? bodyB : bodyA;

	                if (!sleepingBody.isStatic && movingBody.motion > motionSleepThreshold) {
	                    Sleeping.set(sleepingBody, false);
	                }
	            }
	        }
	    };
	  
	    /**
	     * Set a body as sleeping or awake.
	     * @method set
	     * @param {body} body
	     * @param {boolean} isSleeping
	     */
	    Sleeping.set = function(body, isSleeping) {
	        var wasSleeping = body.isSleeping;

	        if (isSleeping) {
	            body.isSleeping = true;
	            body.sleepCounter = body.sleepThreshold;

	            body.positionImpulse.x = 0;
	            body.positionImpulse.y = 0;

	            body.positionPrev.x = body.position.x;
	            body.positionPrev.y = body.position.y;

	            body.anglePrev = body.angle;
	            body.speed = 0;
	            body.angularSpeed = 0;
	            body.motion = 0;

	            if (!wasSleeping) {
	                Events.trigger(body, 'sleepStart');
	            }
	        } else {
	            body.isSleeping = false;
	            body.sleepCounter = 0;

	            if (wasSleeping) {
	                Events.trigger(body, 'sleepEnd');
	            }
	        }
	    };

	})();


	/***/ }),
	/* 8 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Collision` module contains methods for detecting collisions between a given pair of bodies.
	*
	* For efficient detection between a list of bodies, see `Matter.Detector` and `Matter.Query`.
	*
	* See `Matter.Engine` for collision events.
	*
	* @class Collision
	*/

	var Collision = {};

	module.exports = Collision;

	var Vertices = __webpack_require__(3);
	var Pair = __webpack_require__(9);

	(function() {
	    var _supports = [];

	    var _overlapAB = {
	        overlap: 0,
	        axis: null
	    };

	    var _overlapBA = {
	        overlap: 0,
	        axis: null
	    };

	    /**
	     * Creates a new collision record.
	     * @method create
	     * @param {body} bodyA The first body part represented by the collision record
	     * @param {body} bodyB The second body part represented by the collision record
	     * @return {collision} A new collision record
	     */
	    Collision.create = function(bodyA, bodyB) {
	        return { 
	            pair: null,
	            collided: false,
	            bodyA: bodyA,
	            bodyB: bodyB,
	            parentA: bodyA.parent,
	            parentB: bodyB.parent,
	            depth: 0,
	            normal: { x: 0, y: 0 },
	            tangent: { x: 0, y: 0 },
	            penetration: { x: 0, y: 0 },
	            supports: []
	        };
	    };

	    /**
	     * Detect collision between two bodies.
	     * @method collides
	     * @param {body} bodyA
	     * @param {body} bodyB
	     * @param {pairs} [pairs] Optionally reuse collision records from existing pairs.
	     * @return {collision|null} A collision record if detected, otherwise null
	     */
	    Collision.collides = function(bodyA, bodyB, pairs) {
	        Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);

	        if (_overlapAB.overlap <= 0) {
	            return null;
	        }

	        Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);

	        if (_overlapBA.overlap <= 0) {
	            return null;
	        }

	        // reuse collision records for gc efficiency
	        var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)],
	            collision;

	        if (!pair) {
	            collision = Collision.create(bodyA, bodyB);
	            collision.collided = true;
	            collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
	            collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
	            collision.parentA = collision.bodyA.parent;
	            collision.parentB = collision.bodyB.parent;
	        } else {
	            collision = pair.collision;
	        }

	        bodyA = collision.bodyA;
	        bodyB = collision.bodyB;

	        var minOverlap;

	        if (_overlapAB.overlap < _overlapBA.overlap) {
	            minOverlap = _overlapAB;
	        } else {
	            minOverlap = _overlapBA;
	        }

	        var normal = collision.normal,
	            supports = collision.supports,
	            minAxis = minOverlap.axis,
	            minAxisX = minAxis.x,
	            minAxisY = minAxis.y;

	        // ensure normal is facing away from bodyA
	        if (minAxisX * (bodyB.position.x - bodyA.position.x) + minAxisY * (bodyB.position.y - bodyA.position.y) < 0) {
	            normal.x = minAxisX;
	            normal.y = minAxisY;
	        } else {
	            normal.x = -minAxisX;
	            normal.y = -minAxisY;
	        }
	        
	        collision.tangent.x = -normal.y;
	        collision.tangent.y = normal.x;

	        collision.depth = minOverlap.overlap;

	        collision.penetration.x = normal.x * collision.depth;
	        collision.penetration.y = normal.y * collision.depth;

	        // find support points, there is always either exactly one or two
	        var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1),
	            supportCount = 0;

	        // find the supports from bodyB that are inside bodyA
	        if (Vertices.contains(bodyA.vertices, supportsB[0])) {
	            supports[supportCount++] = supportsB[0];
	        }

	        if (Vertices.contains(bodyA.vertices, supportsB[1])) {
	            supports[supportCount++] = supportsB[1];
	        }

	        // find the supports from bodyA that are inside bodyB
	        if (supportCount < 2) {
	            var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);

	            if (Vertices.contains(bodyB.vertices, supportsA[0])) {
	                supports[supportCount++] = supportsA[0];
	            }

	            if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) {
	                supports[supportCount++] = supportsA[1];
	            }
	        }

	        // account for the edge case of overlapping but no vertex containment
	        if (supportCount === 0) {
	            supports[supportCount++] = supportsB[0];
	        }

	        // update supports array size
	        supports.length = supportCount;

	        return collision;
	    };

	    /**
	     * Find the overlap between two sets of vertices.
	     * @method _overlapAxes
	     * @private
	     * @param {object} result
	     * @param {vertices} verticesA
	     * @param {vertices} verticesB
	     * @param {axes} axes
	     */
	    Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
	        var verticesALength = verticesA.length,
	            verticesBLength = verticesB.length,
	            verticesAX = verticesA[0].x,
	            verticesAY = verticesA[0].y,
	            verticesBX = verticesB[0].x,
	            verticesBY = verticesB[0].y,
	            axesLength = axes.length,
	            overlapMin = Number.MAX_VALUE,
	            overlapAxisNumber = 0,
	            overlap,
	            overlapAB,
	            overlapBA,
	            dot,
	            i,
	            j;

	        for (i = 0; i < axesLength; i++) {
	            var axis = axes[i],
	                axisX = axis.x,
	                axisY = axis.y,
	                minA = verticesAX * axisX + verticesAY * axisY,
	                minB = verticesBX * axisX + verticesBY * axisY,
	                maxA = minA,
	                maxB = minB;
	            
	            for (j = 1; j < verticesALength; j += 1) {
	                dot = verticesA[j].x * axisX + verticesA[j].y * axisY;

	                if (dot > maxA) { 
	                    maxA = dot;
	                } else if (dot < minA) { 
	                    minA = dot;
	                }
	            }

	            for (j = 1; j < verticesBLength; j += 1) {
	                dot = verticesB[j].x * axisX + verticesB[j].y * axisY;

	                if (dot > maxB) { 
	                    maxB = dot;
	                } else if (dot < minB) { 
	                    minB = dot;
	                }
	            }

	            overlapAB = maxA - minB;
	            overlapBA = maxB - minA;
	            overlap = overlapAB < overlapBA ? overlapAB : overlapBA;

	            if (overlap < overlapMin) {
	                overlapMin = overlap;
	                overlapAxisNumber = i;

	                if (overlap <= 0) {
	                    // can not be intersecting
	                    break;
	                }
	            } 
	        }

	        result.axis = axes[overlapAxisNumber];
	        result.overlap = overlapMin;
	    };

	    /**
	     * Projects vertices on an axis and returns an interval.
	     * @method _projectToAxis
	     * @private
	     * @param {} projection
	     * @param {} vertices
	     * @param {} axis
	     */
	    Collision._projectToAxis = function(projection, vertices, axis) {
	        var min = vertices[0].x * axis.x + vertices[0].y * axis.y,
	            max = min;

	        for (var i = 1; i < vertices.length; i += 1) {
	            var dot = vertices[i].x * axis.x + vertices[i].y * axis.y;

	            if (dot > max) { 
	                max = dot; 
	            } else if (dot < min) { 
	                min = dot; 
	            }
	        }

	        projection.min = min;
	        projection.max = max;
	    };

	    /**
	     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
	     * @method _findSupports
	     * @private
	     * @param {body} bodyA
	     * @param {body} bodyB
	     * @param {vector} normal
	     * @param {number} direction
	     * @return [vector]
	     */
	    Collision._findSupports = function(bodyA, bodyB, normal, direction) {
	        var vertices = bodyB.vertices,
	            verticesLength = vertices.length,
	            bodyAPositionX = bodyA.position.x,
	            bodyAPositionY = bodyA.position.y,
	            normalX = normal.x * direction,
	            normalY = normal.y * direction,
	            nearestDistance = Number.MAX_VALUE,
	            vertexA,
	            vertexB,
	            vertexC,
	            distance,
	            j;

	        // find deepest vertex relative to the axis
	        for (j = 0; j < verticesLength; j += 1) {
	            vertexB = vertices[j];
	            distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);

	            // convex hill-climbing
	            if (distance < nearestDistance) {
	                nearestDistance = distance;
	                vertexA = vertexB;
	            }
	        }

	        // measure next vertex
	        vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
	        nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);

	        // compare with previous vertex
	        vertexB = vertices[(vertexA.index + 1) % verticesLength];
	        if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
	            _supports[0] = vertexA;
	            _supports[1] = vertexB;

	            return _supports;
	        }

	        _supports[0] = vertexA;
	        _supports[1] = vertexC;

	        return _supports;
	    };

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * A reference to the pair using this collision record, if there is one.
	     *
	     * @property pair
	     * @type {pair|null}
	     * @default null
	     */

	    /**
	     * A flag that indicates if the bodies were colliding when the collision was last updated.
	     * 
	     * @property collided
	     * @type boolean
	     * @default false
	     */

	    /**
	     * The first body part represented by the collision (see also `collision.parentA`).
	     * 
	     * @property bodyA
	     * @type body
	     */

	    /**
	     * The second body part represented by the collision (see also `collision.parentB`).
	     * 
	     * @property bodyB
	     * @type body
	     */

	    /**
	     * The first body represented by the collision (i.e. `collision.bodyA.parent`).
	     * 
	     * @property parentA
	     * @type body
	     */

	    /**
	     * The second body represented by the collision (i.e. `collision.bodyB.parent`).
	     * 
	     * @property parentB
	     * @type body
	     */

	    /**
	     * A `Number` that represents the minimum separating distance between the bodies along the collision normal.
	     *
	     * @readOnly
	     * @property depth
	     * @type number
	     * @default 0
	     */

	    /**
	     * A normalised `Vector` that represents the direction between the bodies that provides the minimum separating distance.
	     *
	     * @property normal
	     * @type vector
	     * @default { x: 0, y: 0 }
	     */

	    /**
	     * A normalised `Vector` that is the tangent direction to the collision normal.
	     *
	     * @property tangent
	     * @type vector
	     * @default { x: 0, y: 0 }
	     */

	    /**
	     * A `Vector` that represents the direction and depth of the collision.
	     *
	     * @property penetration
	     * @type vector
	     * @default { x: 0, y: 0 }
	     */

	    /**
	     * An array of body vertices that represent the support points in the collision.
	     * These are the deepest vertices (along the collision normal) of each body that are contained by the other body's vertices.
	     *
	     * @property supports
	     * @type vector[]
	     * @default []
	     */

	})();


	/***/ }),
	/* 9 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
	*
	* @class Pair
	*/

	var Pair = {};

	module.exports = Pair;

	var Contact = __webpack_require__(16);

	(function() {
	    
	    /**
	     * Creates a pair.
	     * @method create
	     * @param {collision} collision
	     * @param {number} timestamp
	     * @return {pair} A new pair
	     */
	    Pair.create = function(collision, timestamp) {
	        var bodyA = collision.bodyA,
	            bodyB = collision.bodyB;

	        var pair = {
	            id: Pair.id(bodyA, bodyB),
	            bodyA: bodyA,
	            bodyB: bodyB,
	            collision: collision,
	            contacts: [],
	            activeContacts: [],
	            separation: 0,
	            isActive: true,
	            confirmedActive: true,
	            isSensor: bodyA.isSensor || bodyB.isSensor,
	            timeCreated: timestamp,
	            timeUpdated: timestamp,
	            inverseMass: 0,
	            friction: 0,
	            frictionStatic: 0,
	            restitution: 0,
	            slop: 0
	        };

	        Pair.update(pair, collision, timestamp);

	        return pair;
	    };

	    /**
	     * Updates a pair given a collision.
	     * @method update
	     * @param {pair} pair
	     * @param {collision} collision
	     * @param {number} timestamp
	     */
	    Pair.update = function(pair, collision, timestamp) {
	        var contacts = pair.contacts,
	            supports = collision.supports,
	            activeContacts = pair.activeContacts,
	            parentA = collision.parentA,
	            parentB = collision.parentB,
	            parentAVerticesLength = parentA.vertices.length;
	        
	        pair.isActive = true;
	        pair.timeUpdated = timestamp;
	        pair.collision = collision;
	        pair.separation = collision.depth;
	        pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
	        pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
	        pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
	        pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
	        pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;

	        collision.pair = pair;
	        activeContacts.length = 0;
	        
	        for (var i = 0; i < supports.length; i++) {
	            var support = supports[i],
	                contactId = support.body === parentA ? support.index : parentAVerticesLength + support.index,
	                contact = contacts[contactId];

	            if (contact) {
	                activeContacts.push(contact);
	            } else {
	                activeContacts.push(contacts[contactId] = Contact.create(support));
	            }
	        }
	    };
	    
	    /**
	     * Set a pair as active or inactive.
	     * @method setActive
	     * @param {pair} pair
	     * @param {bool} isActive
	     * @param {number} timestamp
	     */
	    Pair.setActive = function(pair, isActive, timestamp) {
	        if (isActive) {
	            pair.isActive = true;
	            pair.timeUpdated = timestamp;
	        } else {
	            pair.isActive = false;
	            pair.activeContacts.length = 0;
	        }
	    };

	    /**
	     * Get the id for the given pair.
	     * @method id
	     * @param {body} bodyA
	     * @param {body} bodyB
	     * @return {string} Unique pairId
	     */
	    Pair.id = function(bodyA, bodyB) {
	        if (bodyA.id < bodyB.id) {
	            return 'A' + bodyA.id + 'B' + bodyB.id;
	        } else {
	            return 'A' + bodyB.id + 'B' + bodyA.id;
	        }
	    };

	})();


	/***/ }),
	/* 10 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
	* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
	* The stiffness of constraints can be modified to create springs or elastic.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Constraint
	*/

	var Constraint = {};

	module.exports = Constraint;

	var Vertices = __webpack_require__(3);
	var Vector = __webpack_require__(2);
	var Sleeping = __webpack_require__(7);
	var Bounds = __webpack_require__(1);
	var Axes = __webpack_require__(11);
	var Common = __webpack_require__(0);

	(function() {

	    Constraint._warming = 0.4;
	    Constraint._torqueDampen = 1;
	    Constraint._minLength = 0.000001;

	    /**
	     * Creates a new constraint.
	     * All properties have default values, and many are pre-calculated automatically based on other properties.
	     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
	     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
	     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
	     * See the properties section below for detailed information on what you can pass via the `options` object.
	     * @method create
	     * @param {} options
	     * @return {constraint} constraint
	     */
	    Constraint.create = function(options) {
	        var constraint = options;

	        // if bodies defined but no points, use body centre
	        if (constraint.bodyA && !constraint.pointA)
	            constraint.pointA = { x: 0, y: 0 };
	        if (constraint.bodyB && !constraint.pointB)
	            constraint.pointB = { x: 0, y: 0 };

	        // calculate static length using initial world space points
	        var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA,
	            initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB,
	            length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
	    
	        constraint.length = typeof constraint.length !== 'undefined' ? constraint.length : length;

	        // option defaults
	        constraint.id = constraint.id || Common.nextId();
	        constraint.label = constraint.label || 'Constraint';
	        constraint.type = 'constraint';
	        constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
	        constraint.damping = constraint.damping || 0;
	        constraint.angularStiffness = constraint.angularStiffness || 0;
	        constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
	        constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
	        constraint.plugin = {};

	        // render
	        var render = {
	            visible: true,
	            lineWidth: 2,
	            strokeStyle: '#ffffff',
	            type: 'line',
	            anchors: true
	        };

	        if (constraint.length === 0 && constraint.stiffness > 0.1) {
	            render.type = 'pin';
	            render.anchors = false;
	        } else if (constraint.stiffness < 0.9) {
	            render.type = 'spring';
	        }

	        constraint.render = Common.extend(render, constraint.render);

	        return constraint;
	    };

	    /**
	     * Prepares for solving by constraint warming.
	     * @private
	     * @method preSolveAll
	     * @param {body[]} bodies
	     */
	    Constraint.preSolveAll = function(bodies) {
	        for (var i = 0; i < bodies.length; i += 1) {
	            var body = bodies[i],
	                impulse = body.constraintImpulse;

	            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
	                continue;
	            }

	            body.position.x += impulse.x;
	            body.position.y += impulse.y;
	            body.angle += impulse.angle;
	        }
	    };

	    /**
	     * Solves all constraints in a list of collisions.
	     * @private
	     * @method solveAll
	     * @param {constraint[]} constraints
	     * @param {number} delta
	     */
	    Constraint.solveAll = function(constraints, delta) {
	        var timeScale = Common.clamp(delta / Common._baseDelta, 0, 1);

	        // Solve fixed constraints first.
	        for (var i = 0; i < constraints.length; i += 1) {
	            var constraint = constraints[i],
	                fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic),
	                fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

	            if (fixedA || fixedB) {
	                Constraint.solve(constraints[i], timeScale);
	            }
	        }

	        // Solve free constraints last.
	        for (i = 0; i < constraints.length; i += 1) {
	            constraint = constraints[i];
	            fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic);
	            fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

	            if (!fixedA && !fixedB) {
	                Constraint.solve(constraints[i], timeScale);
	            }
	        }
	    };

	    /**
	     * Solves a distance constraint with Gauss-Siedel method.
	     * @private
	     * @method solve
	     * @param {constraint} constraint
	     * @param {number} timeScale
	     */
	    Constraint.solve = function(constraint, timeScale) {
	        var bodyA = constraint.bodyA,
	            bodyB = constraint.bodyB,
	            pointA = constraint.pointA,
	            pointB = constraint.pointB;

	        if (!bodyA && !bodyB)
	            return;

	        // update reference angle
	        if (bodyA && !bodyA.isStatic) {
	            Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
	            constraint.angleA = bodyA.angle;
	        }
	        
	        // update reference angle
	        if (bodyB && !bodyB.isStatic) {
	            Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
	            constraint.angleB = bodyB.angle;
	        }

	        var pointAWorld = pointA,
	            pointBWorld = pointB;

	        if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
	        if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);

	        if (!pointAWorld || !pointBWorld)
	            return;

	        var delta = Vector.sub(pointAWorld, pointBWorld),
	            currentLength = Vector.magnitude(delta);

	        // prevent singularity
	        if (currentLength < Constraint._minLength) {
	            currentLength = Constraint._minLength;
	        }

	        // solve distance constraint with Gauss-Siedel method
	        var difference = (currentLength - constraint.length) / currentLength,
	            isRigid = constraint.stiffness >= 1 || constraint.length === 0,
	            stiffness = isRigid ? constraint.stiffness * timeScale 
	                : constraint.stiffness * timeScale * timeScale,
	            damping = constraint.damping * timeScale,
	            force = Vector.mult(delta, difference * stiffness),
	            massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0),
	            inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0),
	            resistanceTotal = massTotal + inertiaTotal,
	            torque,
	            share,
	            normal,
	            normalVelocity,
	            relativeVelocity;
	    
	        if (damping > 0) {
	            var zero = Vector.create();
	            normal = Vector.div(delta, currentLength);

	            relativeVelocity = Vector.sub(
	                bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero,
	                bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero
	            );

	            normalVelocity = Vector.dot(normal, relativeVelocity);
	        }

	        if (bodyA && !bodyA.isStatic) {
	            share = bodyA.inverseMass / massTotal;

	            // keep track of applied impulses for post solving
	            bodyA.constraintImpulse.x -= force.x * share;
	            bodyA.constraintImpulse.y -= force.y * share;

	            // apply forces
	            bodyA.position.x -= force.x * share;
	            bodyA.position.y -= force.y * share;

	            // apply damping
	            if (damping > 0) {
	                bodyA.positionPrev.x -= damping * normal.x * normalVelocity * share;
	                bodyA.positionPrev.y -= damping * normal.y * normalVelocity * share;
	            }

	            // apply torque
	            torque = (Vector.cross(pointA, force) / resistanceTotal) * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
	            bodyA.constraintImpulse.angle -= torque;
	            bodyA.angle -= torque;
	        }

	        if (bodyB && !bodyB.isStatic) {
	            share = bodyB.inverseMass / massTotal;

	            // keep track of applied impulses for post solving
	            bodyB.constraintImpulse.x += force.x * share;
	            bodyB.constraintImpulse.y += force.y * share;
	            
	            // apply forces
	            bodyB.position.x += force.x * share;
	            bodyB.position.y += force.y * share;

	            // apply damping
	            if (damping > 0) {
	                bodyB.positionPrev.x += damping * normal.x * normalVelocity * share;
	                bodyB.positionPrev.y += damping * normal.y * normalVelocity * share;
	            }

	            // apply torque
	            torque = (Vector.cross(pointB, force) / resistanceTotal) * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
	            bodyB.constraintImpulse.angle += torque;
	            bodyB.angle += torque;
	        }

	    };

	    /**
	     * Performs body updates required after solving constraints.
	     * @private
	     * @method postSolveAll
	     * @param {body[]} bodies
	     */
	    Constraint.postSolveAll = function(bodies) {
	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i],
	                impulse = body.constraintImpulse;

	            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
	                continue;
	            }

	            Sleeping.set(body, false);

	            // update geometry and reset
	            for (var j = 0; j < body.parts.length; j++) {
	                var part = body.parts[j];
	                
	                Vertices.translate(part.vertices, impulse);

	                if (j > 0) {
	                    part.position.x += impulse.x;
	                    part.position.y += impulse.y;
	                }

	                if (impulse.angle !== 0) {
	                    Vertices.rotate(part.vertices, impulse.angle, body.position);
	                    Axes.rotate(part.axes, impulse.angle);
	                    if (j > 0) {
	                        Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
	                    }
	                }

	                Bounds.update(part.bounds, part.vertices, body.velocity);
	            }

	            // dampen the cached impulse for warming next step
	            impulse.angle *= Constraint._warming;
	            impulse.x *= Constraint._warming;
	            impulse.y *= Constraint._warming;
	        }
	    };

	    /**
	     * Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
	     * @method pointAWorld
	     * @param {constraint} constraint
	     * @returns {vector} the world-space position
	     */
	    Constraint.pointAWorld = function(constraint) {
	        return {
	            x: (constraint.bodyA ? constraint.bodyA.position.x : 0) 
	                + (constraint.pointA ? constraint.pointA.x : 0),
	            y: (constraint.bodyA ? constraint.bodyA.position.y : 0) 
	                + (constraint.pointA ? constraint.pointA.y : 0)
	        };
	    };

	    /**
	     * Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
	     * @method pointBWorld
	     * @param {constraint} constraint
	     * @returns {vector} the world-space position
	     */
	    Constraint.pointBWorld = function(constraint) {
	        return {
	            x: (constraint.bodyB ? constraint.bodyB.position.x : 0) 
	                + (constraint.pointB ? constraint.pointB.x : 0),
	            y: (constraint.bodyB ? constraint.bodyB.position.y : 0) 
	                + (constraint.pointB ? constraint.pointB.y : 0)
	        };
	    };

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
	     *
	     * @property id
	     * @type number
	     */

	    /**
	     * A `String` denoting the type of object.
	     *
	     * @property type
	     * @type string
	     * @default "constraint"
	     * @readOnly
	     */

	    /**
	     * An arbitrary `String` name to help the user identify and manage bodies.
	     *
	     * @property label
	     * @type string
	     * @default "Constraint"
	     */

	    /**
	     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
	     *
	     * @property render
	     * @type object
	     */

	    /**
	     * A flag that indicates if the constraint should be rendered.
	     *
	     * @property render.visible
	     * @type boolean
	     * @default true
	     */

	    /**
	     * A `Number` that defines the line width to use when rendering the constraint outline.
	     * A value of `0` means no outline will be rendered.
	     *
	     * @property render.lineWidth
	     * @type number
	     * @default 2
	     */

	    /**
	     * A `String` that defines the stroke style to use when rendering the constraint outline.
	     * It is the same as when using a canvas, so it accepts CSS style property values.
	     *
	     * @property render.strokeStyle
	     * @type string
	     * @default a random colour
	     */

	    /**
	     * A `String` that defines the constraint rendering type. 
	     * The possible values are 'line', 'pin', 'spring'.
	     * An appropriate render type will be automatically chosen unless one is given in options.
	     *
	     * @property render.type
	     * @type string
	     * @default 'line'
	     */

	    /**
	     * A `Boolean` that defines if the constraint's anchor points should be rendered.
	     *
	     * @property render.anchors
	     * @type boolean
	     * @default true
	     */

	    /**
	     * The first possible `Body` that this constraint is attached to.
	     *
	     * @property bodyA
	     * @type body
	     * @default null
	     */

	    /**
	     * The second possible `Body` that this constraint is attached to.
	     *
	     * @property bodyB
	     * @type body
	     * @default null
	     */

	    /**
	     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
	     *
	     * @property pointA
	     * @type vector
	     * @default { x: 0, y: 0 }
	     */

	    /**
	     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
	     *
	     * @property pointB
	     * @type vector
	     * @default { x: 0, y: 0 }
	     */

	    /**
	     * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
	     * A value of `1` means the constraint should be very stiff.
	     * A value of `0.2` means the constraint acts like a soft spring.
	     *
	     * @property stiffness
	     * @type number
	     * @default 1
	     */

	    /**
	     * A `Number` that specifies the damping of the constraint, 
	     * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
	     * Damping will only be apparent when the constraint also has a very low `stiffness`.
	     * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
	     * A value of `0` means the constraint will apply no damping.
	     *
	     * @property damping
	     * @type number
	     * @default 0
	     */

	    /**
	     * A `Number` that specifies the target resting length of the constraint. 
	     * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
	     *
	     * @property length
	     * @type number
	     */

	    /**
	     * An object reserved for storing plugin-specific properties.
	     *
	     * @property plugin
	     * @type {}
	     */

	})();


	/***/ }),
	/* 11 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
	*
	* @class Axes
	*/

	var Axes = {};

	module.exports = Axes;

	var Vector = __webpack_require__(2);
	var Common = __webpack_require__(0);

	(function() {

	    /**
	     * Creates a new set of axes from the given vertices.
	     * @method fromVertices
	     * @param {vertices} vertices
	     * @return {axes} A new axes from the given vertices
	     */
	    Axes.fromVertices = function(vertices) {
	        var axes = {};

	        // find the unique axes, using edge normal gradients
	        for (var i = 0; i < vertices.length; i++) {
	            var j = (i + 1) % vertices.length, 
	                normal = Vector.normalise({ 
	                    x: vertices[j].y - vertices[i].y, 
	                    y: vertices[i].x - vertices[j].x
	                }),
	                gradient = (normal.y === 0) ? Infinity : (normal.x / normal.y);
	            
	            // limit precision
	            gradient = gradient.toFixed(3).toString();
	            axes[gradient] = normal;
	        }

	        return Common.values(axes);
	    };

	    /**
	     * Rotates a set of axes by the given angle.
	     * @method rotate
	     * @param {axes} axes
	     * @param {number} angle
	     */
	    Axes.rotate = function(axes, angle) {
	        if (angle === 0)
	            return;
	        
	        var cos = Math.cos(angle),
	            sin = Math.sin(angle);

	        for (var i = 0; i < axes.length; i++) {
	            var axis = axes[i],
	                xx;
	            xx = axis.x * cos - axis.y * sin;
	            axis.y = axis.x * sin + axis.y * cos;
	            axis.x = xx;
	        }
	    };

	})();


	/***/ }),
	/* 12 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Bodies` module contains factory methods for creating rigid body models 
	* with commonly used body configurations (such as rectangles, circles and other polygons).
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Bodies
	*/

	// TODO: true circle bodies

	var Bodies = {};

	module.exports = Bodies;

	var Vertices = __webpack_require__(3);
	var Common = __webpack_require__(0);
	var Body = __webpack_require__(4);
	var Bounds = __webpack_require__(1);
	var Vector = __webpack_require__(2);

	(function() {

	    /**
	     * Creates a new rigid body model with a rectangle hull. 
	     * The options parameter is an object that specifies any properties you wish to override the defaults.
	     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
	     * @method rectangle
	     * @param {number} x
	     * @param {number} y
	     * @param {number} width
	     * @param {number} height
	     * @param {object} [options]
	     * @return {body} A new rectangle body
	     */
	    Bodies.rectangle = function(x, y, width, height, options) {
	        options = options || {};

	        var rectangle = { 
	            label: 'Rectangle Body',
	            position: { x: x, y: y },
	            vertices: Vertices.fromPath('L 0 0 L ' + width + ' 0 L ' + width + ' ' + height + ' L 0 ' + height)
	        };

	        if (options.chamfer) {
	            var chamfer = options.chamfer;
	            rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, 
	                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
	            delete options.chamfer;
	        }

	        return Body.create(Common.extend({}, rectangle, options));
	    };
	    
	    /**
	     * Creates a new rigid body model with a trapezoid hull. 
	     * The options parameter is an object that specifies any properties you wish to override the defaults.
	     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
	     * @method trapezoid
	     * @param {number} x
	     * @param {number} y
	     * @param {number} width
	     * @param {number} height
	     * @param {number} slope
	     * @param {object} [options]
	     * @return {body} A new trapezoid body
	     */
	    Bodies.trapezoid = function(x, y, width, height, slope, options) {
	        options = options || {};

	        slope *= 0.5;
	        var roof = (1 - (slope * 2)) * width;
	        
	        var x1 = width * slope,
	            x2 = x1 + roof,
	            x3 = x2 + x1,
	            verticesPath;

	        if (slope < 0.5) {
	            verticesPath = 'L 0 0 L ' + x1 + ' ' + (-height) + ' L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
	        } else {
	            verticesPath = 'L 0 0 L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
	        }

	        var trapezoid = { 
	            label: 'Trapezoid Body',
	            position: { x: x, y: y },
	            vertices: Vertices.fromPath(verticesPath)
	        };

	        if (options.chamfer) {
	            var chamfer = options.chamfer;
	            trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, 
	                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
	            delete options.chamfer;
	        }

	        return Body.create(Common.extend({}, trapezoid, options));
	    };

	    /**
	     * Creates a new rigid body model with a circle hull. 
	     * The options parameter is an object that specifies any properties you wish to override the defaults.
	     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
	     * @method circle
	     * @param {number} x
	     * @param {number} y
	     * @param {number} radius
	     * @param {object} [options]
	     * @param {number} [maxSides]
	     * @return {body} A new circle body
	     */
	    Bodies.circle = function(x, y, radius, options, maxSides) {
	        options = options || {};

	        var circle = {
	            label: 'Circle Body',
	            circleRadius: radius
	        };
	        
	        // approximate circles with polygons until true circles implemented in SAT
	        maxSides = maxSides || 25;
	        var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));

	        // optimisation: always use even number of sides (half the number of unique axes)
	        if (sides % 2 === 1)
	            sides += 1;

	        return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
	    };

	    /**
	     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
	     * The options parameter is an object that specifies any properties you wish to override the defaults.
	     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
	     * @method polygon
	     * @param {number} x
	     * @param {number} y
	     * @param {number} sides
	     * @param {number} radius
	     * @param {object} [options]
	     * @return {body} A new regular polygon body
	     */
	    Bodies.polygon = function(x, y, sides, radius, options) {
	        options = options || {};

	        if (sides < 3)
	            return Bodies.circle(x, y, radius, options);

	        var theta = 2 * Math.PI / sides,
	            path = '',
	            offset = theta * 0.5;

	        for (var i = 0; i < sides; i += 1) {
	            var angle = offset + (i * theta),
	                xx = Math.cos(angle) * radius,
	                yy = Math.sin(angle) * radius;

	            path += 'L ' + xx.toFixed(3) + ' ' + yy.toFixed(3) + ' ';
	        }

	        var polygon = { 
	            label: 'Polygon Body',
	            position: { x: x, y: y },
	            vertices: Vertices.fromPath(path)
	        };

	        if (options.chamfer) {
	            var chamfer = options.chamfer;
	            polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, 
	                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
	            delete options.chamfer;
	        }

	        return Body.create(Common.extend({}, polygon, options));
	    };

	    /**
	     * Utility to create a compound body based on set(s) of vertices.
	     * 
	     * _Note:_ To optionally enable automatic concave vertices decomposition the [poly-decomp](https://github.com/schteppe/poly-decomp.js) 
	     * package must be first installed and provided see `Common.setDecomp`, otherwise the convex hull of each vertex set will be used.
	     * 
	     * The resulting vertices are reorientated about their centre of mass,
	     * and offset such that `body.position` corresponds to this point.
	     * 
	     * The resulting offset may be found if needed by subtracting `body.bounds` from the original input bounds.
	     * To later move the centre of mass see `Body.setCentre`.
	     * 
	     * Note that automatic conconcave decomposition results are not always optimal. 
	     * For best results, simplify the input vertices as much as possible first.
	     * By default this function applies some addtional simplification to help.
	     * 
	     * Some outputs may also require further manual processing afterwards to be robust.
	     * In particular some parts may need to be overlapped to avoid collision gaps.
	     * Thin parts and sharp points should be avoided or removed where possible.
	     *
	     * The options parameter object specifies any `Matter.Body` properties you wish to override the defaults.
	     * 
	     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
	     * @method fromVertices
	     * @param {number} x
	     * @param {number} y
	     * @param {array} vertexSets One or more arrays of vertex points e.g. `[[{ x: 0, y: 0 }...], ...]`.
	     * @param {object} [options] The body options.
	     * @param {bool} [flagInternal=false] Optionally marks internal edges with `isInternal`.
	     * @param {number} [removeCollinear=0.01] Threshold when simplifying vertices along the same edge.
	     * @param {number} [minimumArea=10] Threshold when removing small parts.
	     * @param {number} [removeDuplicatePoints=0.01] Threshold when simplifying nearby vertices.
	     * @return {body}
	     */
	    Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
	        var decomp = Common.getDecomp(),
	            canDecomp,
	            body,
	            parts,
	            isConvex,
	            isConcave,
	            vertices,
	            i,
	            j,
	            k,
	            v,
	            z;

	        // check decomp is as expected
	        canDecomp = Boolean(decomp && decomp.quickDecomp);

	        options = options || {};
	        parts = [];

	        flagInternal = typeof flagInternal !== 'undefined' ? flagInternal : false;
	        removeCollinear = typeof removeCollinear !== 'undefined' ? removeCollinear : 0.01;
	        minimumArea = typeof minimumArea !== 'undefined' ? minimumArea : 10;
	        removeDuplicatePoints = typeof removeDuplicatePoints !== 'undefined' ? removeDuplicatePoints : 0.01;

	        // ensure vertexSets is an array of arrays
	        if (!Common.isArray(vertexSets[0])) {
	            vertexSets = [vertexSets];
	        }

	        for (v = 0; v < vertexSets.length; v += 1) {
	            vertices = vertexSets[v];
	            isConvex = Vertices.isConvex(vertices);
	            isConcave = !isConvex;

	            if (isConcave && !canDecomp) {
	                Common.warnOnce(
	                    'Bodies.fromVertices: Install the \'poly-decomp\' library and use Common.setDecomp or provide \'decomp\' as a global to decompose concave vertices.'
	                );
	            }

	            if (isConvex || !canDecomp) {
	                if (isConvex) {
	                    vertices = Vertices.clockwiseSort(vertices);
	                } else {
	                    // fallback to convex hull when decomposition is not possible
	                    vertices = Vertices.hull(vertices);
	                }

	                parts.push({
	                    position: { x: x, y: y },
	                    vertices: vertices
	                });
	            } else {
	                // initialise a decomposition
	                var concave = vertices.map(function(vertex) {
	                    return [vertex.x, vertex.y];
	                });

	                // vertices are concave and simple, we can decompose into parts
	                decomp.makeCCW(concave);
	                if (removeCollinear !== false)
	                    decomp.removeCollinearPoints(concave, removeCollinear);
	                if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints)
	                    decomp.removeDuplicatePoints(concave, removeDuplicatePoints);

	                // use the quick decomposition algorithm (Bayazit)
	                var decomposed = decomp.quickDecomp(concave);

	                // for each decomposed chunk
	                for (i = 0; i < decomposed.length; i++) {
	                    var chunk = decomposed[i];

	                    // convert vertices into the correct structure
	                    var chunkVertices = chunk.map(function(vertices) {
	                        return {
	                            x: vertices[0],
	                            y: vertices[1]
	                        };
	                    });

	                    // skip small chunks
	                    if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
	                        continue;

	                    // create a compound part
	                    parts.push({
	                        position: Vertices.centre(chunkVertices),
	                        vertices: chunkVertices
	                    });
	                }
	            }
	        }

	        // create body parts
	        for (i = 0; i < parts.length; i++) {
	            parts[i] = Body.create(Common.extend(parts[i], options));
	        }

	        // flag internal edges (coincident part edges)
	        if (flagInternal) {
	            var coincident_max_dist = 5;

	            for (i = 0; i < parts.length; i++) {
	                var partA = parts[i];

	                for (j = i + 1; j < parts.length; j++) {
	                    var partB = parts[j];

	                    if (Bounds.overlaps(partA.bounds, partB.bounds)) {
	                        var pav = partA.vertices,
	                            pbv = partB.vertices;

	                        // iterate vertices of both parts
	                        for (k = 0; k < partA.vertices.length; k++) {
	                            for (z = 0; z < partB.vertices.length; z++) {
	                                // find distances between the vertices
	                                var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])),
	                                    db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));

	                                // if both vertices are very close, consider the edge concident (internal)
	                                if (da < coincident_max_dist && db < coincident_max_dist) {
	                                    pav[k].isInternal = true;
	                                    pbv[z].isInternal = true;
	                                }
	                            }
	                        }

	                    }
	                }
	            }
	        }

	        if (parts.length > 1) {
	            // create the parent body to be returned, that contains generated compound parts
	            body = Body.create(Common.extend({ parts: parts.slice(0) }, options));

	            // offset such that body.position is at the centre off mass
	            Body.setPosition(body, { x: x, y: y });

	            return body;
	        } else {
	            return parts[0];
	        }
	    };

	})();


	/***/ }),
	/* 13 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Detector` module contains methods for efficiently detecting collisions between a list of bodies using a broadphase algorithm.
	*
	* @class Detector
	*/

	var Detector = {};

	module.exports = Detector;

	var Common = __webpack_require__(0);
	var Collision = __webpack_require__(8);

	(function() {

	    /**
	     * Creates a new collision detector.
	     * @method create
	     * @param {} options
	     * @return {detector} A new collision detector
	     */
	    Detector.create = function(options) {
	        var defaults = {
	            bodies: [],
	            pairs: null
	        };

	        return Common.extend(defaults, options);
	    };

	    /**
	     * Sets the list of bodies in the detector.
	     * @method setBodies
	     * @param {detector} detector
	     * @param {body[]} bodies
	     */
	    Detector.setBodies = function(detector, bodies) {
	        detector.bodies = bodies.slice(0);
	    };

	    /**
	     * Clears the detector including its list of bodies.
	     * @method clear
	     * @param {detector} detector
	     */
	    Detector.clear = function(detector) {
	        detector.bodies = [];
	    };

	    /**
	     * Efficiently finds all collisions among all the bodies in `detector.bodies` using a broadphase algorithm.
	     * 
	     * _Note:_ The specific ordering of collisions returned is not guaranteed between releases and may change for performance reasons.
	     * If a specific ordering is required then apply a sort to the resulting array.
	     * @method collisions
	     * @param {detector} detector
	     * @return {collision[]} collisions
	     */
	    Detector.collisions = function(detector) {
	        var collisions = [],
	            pairs = detector.pairs,
	            bodies = detector.bodies,
	            bodiesLength = bodies.length,
	            canCollide = Detector.canCollide,
	            collides = Collision.collides,
	            i,
	            j;

	        bodies.sort(Detector._compareBoundsX);

	        for (i = 0; i < bodiesLength; i++) {
	            var bodyA = bodies[i],
	                boundsA = bodyA.bounds,
	                boundXMax = bodyA.bounds.max.x,
	                boundYMax = bodyA.bounds.max.y,
	                boundYMin = bodyA.bounds.min.y,
	                bodyAStatic = bodyA.isStatic || bodyA.isSleeping,
	                partsALength = bodyA.parts.length,
	                partsASingle = partsALength === 1;

	            for (j = i + 1; j < bodiesLength; j++) {
	                var bodyB = bodies[j],
	                    boundsB = bodyB.bounds;

	                if (boundsB.min.x > boundXMax) {
	                    break;
	                }

	                if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) {
	                    continue;
	                }

	                if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) {
	                    continue;
	                }

	                if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) {
	                    continue;
	                }

	                var partsBLength = bodyB.parts.length;

	                if (partsASingle && partsBLength === 1) {
	                    var collision = collides(bodyA, bodyB, pairs);

	                    if (collision) {
	                        collisions.push(collision);
	                    }
	                } else {
	                    var partsAStart = partsALength > 1 ? 1 : 0,
	                        partsBStart = partsBLength > 1 ? 1 : 0;
	                    
	                    for (var k = partsAStart; k < partsALength; k++) {
	                        var partA = bodyA.parts[k],
	                            boundsA = partA.bounds;

	                        for (var z = partsBStart; z < partsBLength; z++) {
	                            var partB = bodyB.parts[z],
	                                boundsB = partB.bounds;

	                            if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x
	                                || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) {
	                                continue;
	                            }

	                            var collision = collides(partA, partB, pairs);

	                            if (collision) {
	                                collisions.push(collision);
	                            }
	                        }
	                    }
	                }
	            }
	        }

	        return collisions;
	    };

	    /**
	     * Returns `true` if both supplied collision filters will allow a collision to occur.
	     * See `body.collisionFilter` for more information.
	     * @method canCollide
	     * @param {} filterA
	     * @param {} filterB
	     * @return {bool} `true` if collision can occur
	     */
	    Detector.canCollide = function(filterA, filterB) {
	        if (filterA.group === filterB.group && filterA.group !== 0)
	            return filterA.group > 0;

	        return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
	    };

	    /**
	     * The comparison function used in the broadphase algorithm.
	     * Returns the signed delta of the bodies bounds on the x-axis.
	     * @private
	     * @method _sortCompare
	     * @param {body} bodyA
	     * @param {body} bodyB
	     * @return {number} The signed delta used for sorting
	     */
	    Detector._compareBoundsX = function(bodyA, bodyB) {
	        return bodyA.bounds.min.x - bodyB.bounds.min.x;
	    };

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * The array of `Matter.Body` between which the detector finds collisions.
	     * 
	     * _Note:_ The order of bodies in this array _is not fixed_ and will be continually managed by the detector.
	     * @property bodies
	     * @type body[]
	     * @default []
	     */

	    /**
	     * Optional. A `Matter.Pairs` object from which previous collision objects may be reused. Intended for internal `Matter.Engine` usage.
	     * @property pairs
	     * @type {pairs|null}
	     * @default null
	     */

	})();


	/***/ }),
	/* 14 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
	*
	* @class Mouse
	*/

	var Mouse = {};

	module.exports = Mouse;

	var Common = __webpack_require__(0);

	(function() {

	    /**
	     * Creates a mouse input.
	     * @method create
	     * @param {HTMLElement} element
	     * @return {mouse} A new mouse
	     */
	    Mouse.create = function(element) {
	        var mouse = {};

	        if (!element) {
	            Common.log('Mouse.create: element was undefined, defaulting to document.body', 'warn');
	        }
	        
	        mouse.element = element || document.body;
	        mouse.absolute = { x: 0, y: 0 };
	        mouse.position = { x: 0, y: 0 };
	        mouse.mousedownPosition = { x: 0, y: 0 };
	        mouse.mouseupPosition = { x: 0, y: 0 };
	        mouse.offset = { x: 0, y: 0 };
	        mouse.scale = { x: 1, y: 1 };
	        mouse.wheelDelta = 0;
	        mouse.button = -1;
	        mouse.pixelRatio = parseInt(mouse.element.getAttribute('data-pixel-ratio'), 10) || 1;

	        mouse.sourceEvents = {
	            mousemove: null,
	            mousedown: null,
	            mouseup: null,
	            mousewheel: null
	        };
	        
	        mouse.mousemove = function(event) { 
	            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
	                touches = event.changedTouches;

	            if (touches) {
	                mouse.button = 0;
	                event.preventDefault();
	            }

	            mouse.absolute.x = position.x;
	            mouse.absolute.y = position.y;
	            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
	            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
	            mouse.sourceEvents.mousemove = event;
	        };
	        
	        mouse.mousedown = function(event) {
	            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
	                touches = event.changedTouches;

	            if (touches) {
	                mouse.button = 0;
	                event.preventDefault();
	            } else {
	                mouse.button = event.button;
	            }

	            mouse.absolute.x = position.x;
	            mouse.absolute.y = position.y;
	            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
	            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
	            mouse.mousedownPosition.x = mouse.position.x;
	            mouse.mousedownPosition.y = mouse.position.y;
	            mouse.sourceEvents.mousedown = event;
	        };
	        
	        mouse.mouseup = function(event) {
	            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
	                touches = event.changedTouches;

	            if (touches) {
	                event.preventDefault();
	            }
	            
	            mouse.button = -1;
	            mouse.absolute.x = position.x;
	            mouse.absolute.y = position.y;
	            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
	            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
	            mouse.mouseupPosition.x = mouse.position.x;
	            mouse.mouseupPosition.y = mouse.position.y;
	            mouse.sourceEvents.mouseup = event;
	        };

	        mouse.mousewheel = function(event) {
	            mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
	            event.preventDefault();
	        };

	        Mouse.setElement(mouse, mouse.element);

	        return mouse;
	    };

	    /**
	     * Sets the element the mouse is bound to (and relative to).
	     * @method setElement
	     * @param {mouse} mouse
	     * @param {HTMLElement} element
	     */
	    Mouse.setElement = function(mouse, element) {
	        mouse.element = element;

	        element.addEventListener('mousemove', mouse.mousemove);
	        element.addEventListener('mousedown', mouse.mousedown);
	        element.addEventListener('mouseup', mouse.mouseup);
	        
	        element.addEventListener('mousewheel', mouse.mousewheel);
	        element.addEventListener('DOMMouseScroll', mouse.mousewheel);

	        element.addEventListener('touchmove', mouse.mousemove);
	        element.addEventListener('touchstart', mouse.mousedown);
	        element.addEventListener('touchend', mouse.mouseup);
	    };

	    /**
	     * Clears all captured source events.
	     * @method clearSourceEvents
	     * @param {mouse} mouse
	     */
	    Mouse.clearSourceEvents = function(mouse) {
	        mouse.sourceEvents.mousemove = null;
	        mouse.sourceEvents.mousedown = null;
	        mouse.sourceEvents.mouseup = null;
	        mouse.sourceEvents.mousewheel = null;
	        mouse.wheelDelta = 0;
	    };

	    /**
	     * Sets the mouse position offset.
	     * @method setOffset
	     * @param {mouse} mouse
	     * @param {vector} offset
	     */
	    Mouse.setOffset = function(mouse, offset) {
	        mouse.offset.x = offset.x;
	        mouse.offset.y = offset.y;
	        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
	        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
	    };

	    /**
	     * Sets the mouse position scale.
	     * @method setScale
	     * @param {mouse} mouse
	     * @param {vector} scale
	     */
	    Mouse.setScale = function(mouse, scale) {
	        mouse.scale.x = scale.x;
	        mouse.scale.y = scale.y;
	        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
	        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
	    };
	    
	    /**
	     * Gets the mouse position relative to an element given a screen pixel ratio.
	     * @method _getRelativeMousePosition
	     * @private
	     * @param {} event
	     * @param {} element
	     * @param {number} pixelRatio
	     * @return {}
	     */
	    Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
	        var elementBounds = element.getBoundingClientRect(),
	            rootNode = (document.documentElement || document.body.parentNode || document.body),
	            scrollX = (window.pageXOffset !== undefined) ? window.pageXOffset : rootNode.scrollLeft,
	            scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : rootNode.scrollTop,
	            touches = event.changedTouches,
	            x, y;
	        
	        if (touches) {
	            x = touches[0].pageX - elementBounds.left - scrollX;
	            y = touches[0].pageY - elementBounds.top - scrollY;
	        } else {
	            x = event.pageX - elementBounds.left - scrollX;
	            y = event.pageY - elementBounds.top - scrollY;
	        }

	        return { 
	            x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
	            y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
	        };
	    };

	})();


	/***/ }),
	/* 15 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
	*
	* @class Plugin
	*/

	var Plugin = {};

	module.exports = Plugin;

	var Common = __webpack_require__(0);

	(function() {

	    Plugin._registry = {};

	    /**
	     * Registers a plugin object so it can be resolved later by name.
	     * @method register
	     * @param plugin {} The plugin to register.
	     * @return {object} The plugin.
	     */
	    Plugin.register = function(plugin) {
	        if (!Plugin.isPlugin(plugin)) {
	            Common.warn('Plugin.register:', Plugin.toString(plugin), 'does not implement all required fields.');
	        }

	        if (plugin.name in Plugin._registry) {
	            var registered = Plugin._registry[plugin.name],
	                pluginVersion = Plugin.versionParse(plugin.version).number,
	                registeredVersion = Plugin.versionParse(registered.version).number;

	            if (pluginVersion > registeredVersion) {
	                Common.warn('Plugin.register:', Plugin.toString(registered), 'was upgraded to', Plugin.toString(plugin));
	                Plugin._registry[plugin.name] = plugin;
	            } else if (pluginVersion < registeredVersion) {
	                Common.warn('Plugin.register:', Plugin.toString(registered), 'can not be downgraded to', Plugin.toString(plugin));
	            } else if (plugin !== registered) {
	                Common.warn('Plugin.register:', Plugin.toString(plugin), 'is already registered to different plugin object');
	            }
	        } else {
	            Plugin._registry[plugin.name] = plugin;
	        }

	        return plugin;
	    };

	    /**
	     * Resolves a dependency to a plugin object from the registry if it exists. 
	     * The `dependency` may contain a version, but only the name matters when resolving.
	     * @method resolve
	     * @param dependency {string} The dependency.
	     * @return {object} The plugin if resolved, otherwise `undefined`.
	     */
	    Plugin.resolve = function(dependency) {
	        return Plugin._registry[Plugin.dependencyParse(dependency).name];
	    };

	    /**
	     * Returns a pretty printed plugin name and version.
	     * @method toString
	     * @param plugin {} The plugin.
	     * @return {string} Pretty printed plugin name and version.
	     */
	    Plugin.toString = function(plugin) {
	        return typeof plugin === 'string' ? plugin : (plugin.name || 'anonymous') + '@' + (plugin.version || plugin.range || '0.0.0');
	    };

	    /**
	     * Returns `true` if the object meets the minimum standard to be considered a plugin.
	     * This means it must define the following properties:
	     * - `name`
	     * - `version`
	     * - `install`
	     * @method isPlugin
	     * @param obj {} The obj to test.
	     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
	     */
	    Plugin.isPlugin = function(obj) {
	        return obj && obj.name && obj.version && obj.install;
	    };

	    /**
	     * Returns `true` if a plugin with the given `name` been installed on `module`.
	     * @method isUsed
	     * @param module {} The module.
	     * @param name {string} The plugin name.
	     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
	     */
	    Plugin.isUsed = function(module, name) {
	        return module.used.indexOf(name) > -1;
	    };

	    /**
	     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
	     * If `plugin.for` is not specified then it is assumed to be applicable.
	     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
	     * @method isFor
	     * @param plugin {} The plugin.
	     * @param module {} The module.
	     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
	     */
	    Plugin.isFor = function(plugin, module) {
	        var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
	        return !plugin.for || (module.name === parsed.name && Plugin.versionSatisfies(module.version, parsed.range));
	    };

	    /**
	     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
	     * For installing plugins on `Matter` see the convenience function `Matter.use`.
	     * Plugins may be specified either by their name or a reference to the plugin object.
	     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
	     * Order is important, a topological sort is performed to find the best resulting order of installation.
	     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
	     * This function logs the resulting status of each dependency in the console, along with any warnings.
	     * - A green tick ✅ indicates a dependency was resolved and installed.
	     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
	     * - A red cross ❌ indicates a dependency could not be resolved.
	     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
	     * @method use
	     * @param module {} The module install plugins on.
	     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
	     */
	    Plugin.use = function(module, plugins) {
	        module.uses = (module.uses || []).concat(plugins || []);

	        if (module.uses.length === 0) {
	            Common.warn('Plugin.use:', Plugin.toString(module), 'does not specify any dependencies to install.');
	            return;
	        }

	        var dependencies = Plugin.dependencies(module),
	            sortedDependencies = Common.topologicalSort(dependencies),
	            status = [];

	        for (var i = 0; i < sortedDependencies.length; i += 1) {
	            if (sortedDependencies[i] === module.name) {
	                continue;
	            }

	            var plugin = Plugin.resolve(sortedDependencies[i]);

	            if (!plugin) {
	                status.push('❌ ' + sortedDependencies[i]);
	                continue;
	            }

	            if (Plugin.isUsed(module, plugin.name)) {
	                continue;
	            }

	            if (!Plugin.isFor(plugin, module)) {
	                Common.warn('Plugin.use:', Plugin.toString(plugin), 'is for', plugin.for, 'but installed on', Plugin.toString(module) + '.');
	                plugin._warned = true;
	            }

	            if (plugin.install) {
	                plugin.install(module);
	            } else {
	                Common.warn('Plugin.use:', Plugin.toString(plugin), 'does not specify an install function.');
	                plugin._warned = true;
	            }

	            if (plugin._warned) {
	                status.push('🔶 ' + Plugin.toString(plugin));
	                delete plugin._warned;
	            } else {
	                status.push('✅ ' + Plugin.toString(plugin));
	            }

	            module.used.push(plugin.name);
	        }

	        if (status.length > 0) {
	            Common.info(status.join('  '));
	        }
	    };

	    /**
	     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
	     * @method dependencies
	     * @param module {} The module.
	     * @return {object} A dependency graph.
	     */
	    Plugin.dependencies = function(module, tracked) {
	        var parsedBase = Plugin.dependencyParse(module),
	            name = parsedBase.name;

	        tracked = tracked || {};

	        if (name in tracked) {
	            return;
	        }

	        module = Plugin.resolve(module) || module;

	        tracked[name] = Common.map(module.uses || [], function(dependency) {
	            if (Plugin.isPlugin(dependency)) {
	                Plugin.register(dependency);
	            }

	            var parsed = Plugin.dependencyParse(dependency),
	                resolved = Plugin.resolve(dependency);

	            if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
	                Common.warn(
	                    'Plugin.dependencies:', Plugin.toString(resolved), 'does not satisfy',
	                    Plugin.toString(parsed), 'used by', Plugin.toString(parsedBase) + '.'
	                );

	                resolved._warned = true;
	                module._warned = true;
	            } else if (!resolved) {
	                Common.warn(
	                    'Plugin.dependencies:', Plugin.toString(dependency), 'used by',
	                    Plugin.toString(parsedBase), 'could not be resolved.'
	                );

	                module._warned = true;
	            }

	            return parsed.name;
	        });

	        for (var i = 0; i < tracked[name].length; i += 1) {
	            Plugin.dependencies(tracked[name][i], tracked);
	        }

	        return tracked;
	    };

	    /**
	     * Parses a dependency string into its components.
	     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
	     * See documentation for `Plugin.versionParse` for a description of the format.
	     * This function can also handle dependencies that are already resolved (e.g. a module object).
	     * @method dependencyParse
	     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
	     * @return {object} The dependency parsed into its components.
	     */
	    Plugin.dependencyParse = function(dependency) {
	        if (Common.isString(dependency)) {
	            var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;

	            if (!pattern.test(dependency)) {
	                Common.warn('Plugin.dependencyParse:', dependency, 'is not a valid dependency string.');
	            }

	            return {
	                name: dependency.split('@')[0],
	                range: dependency.split('@')[1] || '*'
	            };
	        }

	        return {
	            name: dependency.name,
	            range: dependency.range || dependency.version
	        };
	    };

	    /**
	     * Parses a version string into its components.  
	     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
	     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
	     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
	     * Only the following range types are supported:
	     * - Tilde ranges e.g. `~1.2.3`
	     * - Caret ranges e.g. `^1.2.3`
	     * - Greater than ranges e.g. `>1.2.3`
	     * - Greater than or equal ranges e.g. `>=1.2.3`
	     * - Exact version e.g. `1.2.3`
	     * - Any version `*`
	     * @method versionParse
	     * @param range {string} The version string.
	     * @return {object} The version range parsed into its components.
	     */
	    Plugin.versionParse = function(range) {
	        var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;

	        if (!pattern.test(range)) {
	            Common.warn('Plugin.versionParse:', range, 'is not a valid version or range.');
	        }

	        var parts = pattern.exec(range);
	        var major = Number(parts[4]);
	        var minor = Number(parts[5]);
	        var patch = Number(parts[6]);

	        return {
	            isRange: Boolean(parts[1] || parts[2]),
	            version: parts[3],
	            range: range,
	            operator: parts[1] || parts[2] || '',
	            major: major,
	            minor: minor,
	            patch: patch,
	            parts: [major, minor, patch],
	            prerelease: parts[7],
	            number: major * 1e8 + minor * 1e4 + patch
	        };
	    };

	    /**
	     * Returns `true` if `version` satisfies the given `range`.
	     * See documentation for `Plugin.versionParse` for a description of the format.
	     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
	     * @method versionSatisfies
	     * @param version {string} The version string.
	     * @param range {string} The range string.
	     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
	     */
	    Plugin.versionSatisfies = function(version, range) {
	        range = range || '*';

	        var r = Plugin.versionParse(range),
	            v = Plugin.versionParse(version);

	        if (r.isRange) {
	            if (r.operator === '*' || version === '*') {
	                return true;
	            }

	            if (r.operator === '>') {
	                return v.number > r.number;
	            }

	            if (r.operator === '>=') {
	                return v.number >= r.number;
	            }

	            if (r.operator === '~') {
	                return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
	            }

	            if (r.operator === '^') {
	                if (r.major > 0) {
	                    return v.major === r.major && v.number >= r.number;
	                }

	                if (r.minor > 0) {
	                    return v.minor === r.minor && v.patch >= r.patch;
	                }

	                return v.patch === r.patch;
	            }
	        }

	        return version === range || version === '*';
	    };

	})();


	/***/ }),
	/* 16 */
	/***/ (function(module, exports) {

	/**
	* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
	*
	* @class Contact
	*/

	var Contact = {};

	module.exports = Contact;

	(function() {

	    /**
	     * Creates a new contact.
	     * @method create
	     * @param {vertex} vertex
	     * @return {contact} A new contact
	     */
	    Contact.create = function(vertex) {
	        return {
	            vertex: vertex,
	            normalImpulse: 0,
	            tangentImpulse: 0
	        };
	    };

	})();


	/***/ }),
	/* 17 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Engine` module contains methods for creating and manipulating engines.
	* An engine is a controller that manages updating the simulation of the world.
	* See `Matter.Runner` for an optional game loop utility.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Engine
	*/

	var Engine = {};

	module.exports = Engine;

	var Sleeping = __webpack_require__(7);
	var Resolver = __webpack_require__(18);
	var Detector = __webpack_require__(13);
	var Pairs = __webpack_require__(19);
	var Events = __webpack_require__(5);
	var Composite = __webpack_require__(6);
	var Constraint = __webpack_require__(10);
	var Common = __webpack_require__(0);
	var Body = __webpack_require__(4);

	(function() {

	    /**
	     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
	     * All properties have default values, and many are pre-calculated automatically based on other properties.
	     * See the properties section below for detailed information on what you can pass via the `options` object.
	     * @method create
	     * @param {object} [options]
	     * @return {engine} engine
	     */
	    Engine.create = function(options) {
	        options = options || {};

	        var defaults = {
	            positionIterations: 6,
	            velocityIterations: 4,
	            constraintIterations: 2,
	            enableSleeping: false,
	            events: [],
	            plugin: {},
	            gravity: {
	                x: 0,
	                y: 1,
	                scale: 0.001
	            },
	            timing: {
	                timestamp: 0,
	                timeScale: 1,
	                lastDelta: 0,
	                lastElapsed: 0
	            }
	        };

	        var engine = Common.extend(defaults, options);

	        engine.world = options.world || Composite.create({ label: 'World' });
	        engine.pairs = options.pairs || Pairs.create();
	        engine.detector = options.detector || Detector.create();

	        // for temporary back compatibility only
	        engine.grid = { buckets: [] };
	        engine.world.gravity = engine.gravity;
	        engine.broadphase = engine.grid;
	        engine.metrics = {};
	        
	        return engine;
	    };

	    /**
	     * Moves the simulation forward in time by `delta` milliseconds.
	     * Triggers `beforeUpdate` and `afterUpdate` events.
	     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
	     * @method update
	     * @param {engine} engine
	     * @param {number} [delta=16.666]
	     */
	    Engine.update = function(engine, delta) {
	        var startTime = Common.now();

	        var world = engine.world,
	            detector = engine.detector,
	            pairs = engine.pairs,
	            timing = engine.timing,
	            timestamp = timing.timestamp,
	            i;

	        delta = typeof delta !== 'undefined' ? delta : Common._baseDelta;
	        delta *= timing.timeScale;

	        // increment timestamp
	        timing.timestamp += delta;
	        timing.lastDelta = delta;

	        // create an event object
	        var event = {
	            timestamp: timing.timestamp,
	            delta: delta
	        };

	        Events.trigger(engine, 'beforeUpdate', event);

	        // get all bodies and all constraints in the world
	        var allBodies = Composite.allBodies(world),
	            allConstraints = Composite.allConstraints(world);

	        // if the world has changed
	        if (world.isModified) {
	            // update the detector bodies
	            Detector.setBodies(detector, allBodies);

	            // reset all composite modified flags
	            Composite.setModified(world, false, false, true);
	        }

	        // update sleeping if enabled
	        if (engine.enableSleeping)
	            Sleeping.update(allBodies, delta);

	        // apply gravity to all bodies
	        Engine._bodiesApplyGravity(allBodies, engine.gravity);

	        // update all body position and rotation by integration
	        if (delta > 0) {
	            Engine._bodiesUpdate(allBodies, delta);
	        }

	        // update all constraints (first pass)
	        Constraint.preSolveAll(allBodies);
	        for (i = 0; i < engine.constraintIterations; i++) {
	            Constraint.solveAll(allConstraints, delta);
	        }
	        Constraint.postSolveAll(allBodies);

	        // find all collisions
	        detector.pairs = engine.pairs;
	        var collisions = Detector.collisions(detector);

	        // update collision pairs
	        Pairs.update(pairs, collisions, timestamp);

	        // wake up bodies involved in collisions
	        if (engine.enableSleeping)
	            Sleeping.afterCollisions(pairs.list);

	        // trigger collision events
	        if (pairs.collisionStart.length > 0)
	            Events.trigger(engine, 'collisionStart', { pairs: pairs.collisionStart });

	        // iteratively resolve position between collisions
	        var positionDamping = Common.clamp(20 / engine.positionIterations, 0, 1);
	        
	        Resolver.preSolvePosition(pairs.list);
	        for (i = 0; i < engine.positionIterations; i++) {
	            Resolver.solvePosition(pairs.list, delta, positionDamping);
	        }
	        Resolver.postSolvePosition(allBodies);

	        // update all constraints (second pass)
	        Constraint.preSolveAll(allBodies);
	        for (i = 0; i < engine.constraintIterations; i++) {
	            Constraint.solveAll(allConstraints, delta);
	        }
	        Constraint.postSolveAll(allBodies);

	        // iteratively resolve velocity between collisions
	        Resolver.preSolveVelocity(pairs.list);
	        for (i = 0; i < engine.velocityIterations; i++) {
	            Resolver.solveVelocity(pairs.list, delta);
	        }

	        // update body speed and velocity properties
	        Engine._bodiesUpdateVelocities(allBodies);

	        // trigger collision events
	        if (pairs.collisionActive.length > 0)
	            Events.trigger(engine, 'collisionActive', { pairs: pairs.collisionActive });

	        if (pairs.collisionEnd.length > 0)
	            Events.trigger(engine, 'collisionEnd', { pairs: pairs.collisionEnd });

	        // clear force buffers
	        Engine._bodiesClearForces(allBodies);

	        Events.trigger(engine, 'afterUpdate', event);

	        // log the time elapsed computing this update
	        engine.timing.lastElapsed = Common.now() - startTime;

	        return engine;
	    };
	    
	    /**
	     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
	     * @method merge
	     * @param {engine} engineA
	     * @param {engine} engineB
	     */
	    Engine.merge = function(engineA, engineB) {
	        Common.extend(engineA, engineB);
	        
	        if (engineB.world) {
	            engineA.world = engineB.world;

	            Engine.clear(engineA);

	            var bodies = Composite.allBodies(engineA.world);

	            for (var i = 0; i < bodies.length; i++) {
	                var body = bodies[i];
	                Sleeping.set(body, false);
	                body.id = Common.nextId();
	            }
	        }
	    };

	    /**
	     * Clears the engine pairs and detector.
	     * @method clear
	     * @param {engine} engine
	     */
	    Engine.clear = function(engine) {
	        Pairs.clear(engine.pairs);
	        Detector.clear(engine.detector);
	    };

	    /**
	     * Zeroes the `body.force` and `body.torque` force buffers.
	     * @method _bodiesClearForces
	     * @private
	     * @param {body[]} bodies
	     */
	    Engine._bodiesClearForces = function(bodies) {
	        var bodiesLength = bodies.length;

	        for (var i = 0; i < bodiesLength; i++) {
	            var body = bodies[i];

	            // reset force buffers
	            body.force.x = 0;
	            body.force.y = 0;
	            body.torque = 0;
	        }
	    };

	    /**
	     * Applies gravitational acceleration to all `bodies`.
	     * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet.
	     * 
	     * @method _bodiesApplyGravity
	     * @private
	     * @param {body[]} bodies
	     * @param {vector} gravity
	     */
	    Engine._bodiesApplyGravity = function(bodies, gravity) {
	        var gravityScale = typeof gravity.scale !== 'undefined' ? gravity.scale : 0.001,
	            bodiesLength = bodies.length;

	        if ((gravity.x === 0 && gravity.y === 0) || gravityScale === 0) {
	            return;
	        }
	        
	        for (var i = 0; i < bodiesLength; i++) {
	            var body = bodies[i];

	            if (body.isStatic || body.isSleeping)
	                continue;

	            // add the resultant force of gravity
	            body.force.y += body.mass * gravity.y * gravityScale;
	            body.force.x += body.mass * gravity.x * gravityScale;
	        }
	    };

	    /**
	     * Applies `Body.update` to all given `bodies`.
	     * @method _bodiesUpdate
	     * @private
	     * @param {body[]} bodies
	     * @param {number} delta The amount of time elapsed between updates
	     */
	    Engine._bodiesUpdate = function(bodies, delta) {
	        var bodiesLength = bodies.length;

	        for (var i = 0; i < bodiesLength; i++) {
	            var body = bodies[i];

	            if (body.isStatic || body.isSleeping)
	                continue;

	            Body.update(body, delta);
	        }
	    };

	    /**
	     * Applies `Body.updateVelocities` to all given `bodies`.
	     * @method _bodiesUpdateVelocities
	     * @private
	     * @param {body[]} bodies
	     */
	    Engine._bodiesUpdateVelocities = function(bodies) {
	        var bodiesLength = bodies.length;

	        for (var i = 0; i < bodiesLength; i++) {
	            Body.updateVelocities(bodies[i]);
	        }
	    };

	    /**
	     * A deprecated alias for `Runner.run`, use `Matter.Runner.run(engine)` instead and see `Matter.Runner` for more information.
	     * @deprecated use Matter.Runner.run(engine) instead
	     * @method run
	     * @param {engine} engine
	     */

	    /**
	    * Fired just before an update
	    *
	    * @event beforeUpdate
	    * @param {object} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {number} event.delta The delta time in milliseconds value used in the update
	    * @param {engine} event.source The source object of the event
	    * @param {string} event.name The name of the event
	    */

	    /**
	    * Fired after engine update and all collision events
	    *
	    * @event afterUpdate
	    * @param {object} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {number} event.delta The delta time in milliseconds value used in the update
	    * @param {engine} event.source The source object of the event
	    * @param {string} event.name The name of the event
	    */

	    /**
	    * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
	    *
	    * @event collisionStart
	    * @param {object} event An event object
	    * @param {pair[]} event.pairs List of affected pairs
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {number} event.delta The delta time in milliseconds value used in the update
	    * @param {engine} event.source The source object of the event
	    * @param {string} event.name The name of the event
	    */

	    /**
	    * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
	    *
	    * @event collisionActive
	    * @param {object} event An event object
	    * @param {pair[]} event.pairs List of affected pairs
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {number} event.delta The delta time in milliseconds value used in the update
	    * @param {engine} event.source The source object of the event
	    * @param {string} event.name The name of the event
	    */

	    /**
	    * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
	    *
	    * @event collisionEnd
	    * @param {object} event An event object
	    * @param {pair[]} event.pairs List of affected pairs
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {number} event.delta The delta time in milliseconds value used in the update
	    * @param {engine} event.source The source object of the event
	    * @param {string} event.name The name of the event
	    */

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * An integer `Number` that specifies the number of position iterations to perform each update.
	     * The higher the value, the higher quality the simulation will be at the expense of performance.
	     *
	     * @property positionIterations
	     * @type number
	     * @default 6
	     */

	    /**
	     * An integer `Number` that specifies the number of velocity iterations to perform each update.
	     * The higher the value, the higher quality the simulation will be at the expense of performance.
	     *
	     * @property velocityIterations
	     * @type number
	     * @default 4
	     */

	    /**
	     * An integer `Number` that specifies the number of constraint iterations to perform each update.
	     * The higher the value, the higher quality the simulation will be at the expense of performance.
	     * The default value of `2` is usually very adequate.
	     *
	     * @property constraintIterations
	     * @type number
	     * @default 2
	     */

	    /**
	     * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
	     * Sleeping can improve stability and performance, but often at the expense of accuracy.
	     *
	     * @property enableSleeping
	     * @type boolean
	     * @default false
	     */

	    /**
	     * An `Object` containing properties regarding the timing systems of the engine. 
	     *
	     * @property timing
	     * @type object
	     */

	    /**
	     * A `Number` that specifies the global scaling factor of time for all bodies.
	     * A value of `0` freezes the simulation.
	     * A value of `0.1` gives a slow-motion effect.
	     * A value of `1.2` gives a speed-up effect.
	     *
	     * @property timing.timeScale
	     * @type number
	     * @default 1
	     */

	    /**
	     * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
	     * It is incremented on every `Engine.update` by the given `delta` argument. 
	     * 
	     * @property timing.timestamp
	     * @type number
	     * @default 0
	     */

	    /**
	     * A `Number` that represents the total execution time elapsed during the last `Engine.update` in milliseconds.
	     * It is updated by timing from the start of the last `Engine.update` call until it ends.
	     *
	     * This value will also include the total execution time of all event handlers directly or indirectly triggered by the engine update.
	     * 
	     * @property timing.lastElapsed
	     * @type number
	     * @default 0
	     */

	    /**
	     * A `Number` that represents the `delta` value used in the last engine update.
	     * 
	     * @property timing.lastDelta
	     * @type number
	     * @default 0
	     */

	    /**
	     * A `Matter.Detector` instance.
	     *
	     * @property detector
	     * @type detector
	     * @default a Matter.Detector instance
	     */

	    /**
	     * A `Matter.Grid` instance.
	     *
	     * @deprecated replaced by `engine.detector`
	     * @property grid
	     * @type grid
	     * @default a Matter.Grid instance
	     */

	    /**
	     * Replaced by and now alias for `engine.grid`.
	     *
	     * @deprecated replaced by `engine.detector`
	     * @property broadphase
	     * @type grid
	     * @default a Matter.Grid instance
	     */

	    /**
	     * The root `Matter.Composite` instance that will contain all bodies, constraints and other composites to be simulated by this engine.
	     *
	     * @property world
	     * @type composite
	     * @default a Matter.Composite instance
	     */

	    /**
	     * An object reserved for storing plugin-specific properties.
	     *
	     * @property plugin
	     * @type {}
	     */

	    /**
	     * An optional gravitational acceleration applied to all bodies in `engine.world` on every update.
	     * 
	     * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet. For gravity in other contexts, disable this and apply forces as needed.
	     * 
	     * To disable set the `scale` component to `0`.
	     * 
	     * This is split into three components for ease of use:  
	     * a normalised direction (`x` and `y`) and magnitude (`scale`).
	     *
	     * @property gravity
	     * @type object
	     */

	    /**
	     * The gravitational direction normal `x` component, to be multiplied by `gravity.scale`.
	     * 
	     * @property gravity.x
	     * @type object
	     * @default 0
	     */

	    /**
	     * The gravitational direction normal `y` component, to be multiplied by `gravity.scale`.
	     *
	     * @property gravity.y
	     * @type object
	     * @default 1
	     */

	    /**
	     * The magnitude of the gravitational acceleration.
	     * 
	     * @property gravity.scale
	     * @type object
	     * @default 0.001
	     */

	})();


	/***/ }),
	/* 18 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Resolver` module contains methods for resolving collision pairs.
	*
	* @class Resolver
	*/

	var Resolver = {};

	module.exports = Resolver;

	var Vertices = __webpack_require__(3);
	var Common = __webpack_require__(0);
	var Bounds = __webpack_require__(1);

	(function() {

	    Resolver._restingThresh = 2;
	    Resolver._restingThreshTangent = Math.sqrt(6);
	    Resolver._positionDampen = 0.9;
	    Resolver._positionWarming = 0.8;
	    Resolver._frictionNormalMultiplier = 5;
	    Resolver._frictionMaxStatic = Number.MAX_VALUE;

	    /**
	     * Prepare pairs for position solving.
	     * @method preSolvePosition
	     * @param {pair[]} pairs
	     */
	    Resolver.preSolvePosition = function(pairs) {
	        var i,
	            pair,
	            activeCount,
	            pairsLength = pairs.length;

	        // find total contacts on each body
	        for (i = 0; i < pairsLength; i++) {
	            pair = pairs[i];
	            
	            if (!pair.isActive)
	                continue;
	            
	            activeCount = pair.activeContacts.length;
	            pair.collision.parentA.totalContacts += activeCount;
	            pair.collision.parentB.totalContacts += activeCount;
	        }
	    };

	    /**
	     * Find a solution for pair positions.
	     * @method solvePosition
	     * @param {pair[]} pairs
	     * @param {number} delta
	     * @param {number} [damping=1]
	     */
	    Resolver.solvePosition = function(pairs, delta, damping) {
	        var i,
	            pair,
	            collision,
	            bodyA,
	            bodyB,
	            normal,
	            contactShare,
	            positionImpulse,
	            positionDampen = Resolver._positionDampen * (damping || 1),
	            slopDampen = Common.clamp(delta / Common._baseDelta, 0, 1),
	            pairsLength = pairs.length;

	        // find impulses required to resolve penetration
	        for (i = 0; i < pairsLength; i++) {
	            pair = pairs[i];
	            
	            if (!pair.isActive || pair.isSensor)
	                continue;

	            collision = pair.collision;
	            bodyA = collision.parentA;
	            bodyB = collision.parentB;
	            normal = collision.normal;

	            // get current separation between body edges involved in collision
	            pair.separation = 
	                normal.x * (bodyB.positionImpulse.x + collision.penetration.x - bodyA.positionImpulse.x)
	                + normal.y * (bodyB.positionImpulse.y + collision.penetration.y - bodyA.positionImpulse.y);
	        }
	        
	        for (i = 0; i < pairsLength; i++) {
	            pair = pairs[i];

	            if (!pair.isActive || pair.isSensor)
	                continue;
	            
	            collision = pair.collision;
	            bodyA = collision.parentA;
	            bodyB = collision.parentB;
	            normal = collision.normal;
	            positionImpulse = pair.separation - pair.slop * slopDampen;

	            if (bodyA.isStatic || bodyB.isStatic)
	                positionImpulse *= 2;
	            
	            if (!(bodyA.isStatic || bodyA.isSleeping)) {
	                contactShare = positionDampen / bodyA.totalContacts;
	                bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
	                bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
	            }

	            if (!(bodyB.isStatic || bodyB.isSleeping)) {
	                contactShare = positionDampen / bodyB.totalContacts;
	                bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
	                bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
	            }
	        }
	    };

	    /**
	     * Apply position resolution.
	     * @method postSolvePosition
	     * @param {body[]} bodies
	     */
	    Resolver.postSolvePosition = function(bodies) {
	        var positionWarming = Resolver._positionWarming,
	            bodiesLength = bodies.length,
	            verticesTranslate = Vertices.translate,
	            boundsUpdate = Bounds.update;

	        for (var i = 0; i < bodiesLength; i++) {
	            var body = bodies[i],
	                positionImpulse = body.positionImpulse,
	                positionImpulseX = positionImpulse.x,
	                positionImpulseY = positionImpulse.y,
	                velocity = body.velocity;

	            // reset contact count
	            body.totalContacts = 0;

	            if (positionImpulseX !== 0 || positionImpulseY !== 0) {
	                // update body geometry
	                for (var j = 0; j < body.parts.length; j++) {
	                    var part = body.parts[j];
	                    verticesTranslate(part.vertices, positionImpulse);
	                    boundsUpdate(part.bounds, part.vertices, velocity);
	                    part.position.x += positionImpulseX;
	                    part.position.y += positionImpulseY;
	                }

	                // move the body without changing velocity
	                body.positionPrev.x += positionImpulseX;
	                body.positionPrev.y += positionImpulseY;

	                if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
	                    // reset cached impulse if the body has velocity along it
	                    positionImpulse.x = 0;
	                    positionImpulse.y = 0;
	                } else {
	                    // warm the next iteration
	                    positionImpulse.x *= positionWarming;
	                    positionImpulse.y *= positionWarming;
	                }
	            }
	        }
	    };

	    /**
	     * Prepare pairs for velocity solving.
	     * @method preSolveVelocity
	     * @param {pair[]} pairs
	     */
	    Resolver.preSolveVelocity = function(pairs) {
	        var pairsLength = pairs.length,
	            i,
	            j;
	        
	        for (i = 0; i < pairsLength; i++) {
	            var pair = pairs[i];
	            
	            if (!pair.isActive || pair.isSensor)
	                continue;
	            
	            var contacts = pair.activeContacts,
	                contactsLength = contacts.length,
	                collision = pair.collision,
	                bodyA = collision.parentA,
	                bodyB = collision.parentB,
	                normal = collision.normal,
	                tangent = collision.tangent;
	    
	            // resolve each contact
	            for (j = 0; j < contactsLength; j++) {
	                var contact = contacts[j],
	                    contactVertex = contact.vertex,
	                    normalImpulse = contact.normalImpulse,
	                    tangentImpulse = contact.tangentImpulse;
	    
	                if (normalImpulse !== 0 || tangentImpulse !== 0) {
	                    // total impulse from contact
	                    var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse,
	                        impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
	                    
	                    // apply impulse from contact
	                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
	                        bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
	                        bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
	                        bodyA.anglePrev += bodyA.inverseInertia * (
	                            (contactVertex.x - bodyA.position.x) * impulseY
	                            - (contactVertex.y - bodyA.position.y) * impulseX
	                        );
	                    }
	    
	                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
	                        bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
	                        bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
	                        bodyB.anglePrev -= bodyB.inverseInertia * (
	                            (contactVertex.x - bodyB.position.x) * impulseY 
	                            - (contactVertex.y - bodyB.position.y) * impulseX
	                        );
	                    }
	                }
	            }
	        }
	    };

	    /**
	     * Find a solution for pair velocities.
	     * @method solveVelocity
	     * @param {pair[]} pairs
	     * @param {number} delta
	     */
	    Resolver.solveVelocity = function(pairs, delta) {
	        var timeScale = delta / Common._baseDelta,
	            timeScaleSquared = timeScale * timeScale,
	            timeScaleCubed = timeScaleSquared * timeScale,
	            restingThresh = -Resolver._restingThresh * timeScale,
	            restingThreshTangent = Resolver._restingThreshTangent,
	            frictionNormalMultiplier = Resolver._frictionNormalMultiplier * timeScale,
	            frictionMaxStatic = Resolver._frictionMaxStatic,
	            pairsLength = pairs.length,
	            tangentImpulse,
	            maxFriction,
	            i,
	            j;

	        for (i = 0; i < pairsLength; i++) {
	            var pair = pairs[i];
	            
	            if (!pair.isActive || pair.isSensor)
	                continue;
	            
	            var collision = pair.collision,
	                bodyA = collision.parentA,
	                bodyB = collision.parentB,
	                bodyAVelocity = bodyA.velocity,
	                bodyBVelocity = bodyB.velocity,
	                normalX = collision.normal.x,
	                normalY = collision.normal.y,
	                tangentX = collision.tangent.x,
	                tangentY = collision.tangent.y,
	                contacts = pair.activeContacts,
	                contactsLength = contacts.length,
	                contactShare = 1 / contactsLength,
	                inverseMassTotal = bodyA.inverseMass + bodyB.inverseMass,
	                friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier;

	            // update body velocities
	            bodyAVelocity.x = bodyA.position.x - bodyA.positionPrev.x;
	            bodyAVelocity.y = bodyA.position.y - bodyA.positionPrev.y;
	            bodyBVelocity.x = bodyB.position.x - bodyB.positionPrev.x;
	            bodyBVelocity.y = bodyB.position.y - bodyB.positionPrev.y;
	            bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
	            bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;

	            // resolve each contact
	            for (j = 0; j < contactsLength; j++) {
	                var contact = contacts[j],
	                    contactVertex = contact.vertex;

	                var offsetAX = contactVertex.x - bodyA.position.x,
	                    offsetAY = contactVertex.y - bodyA.position.y,
	                    offsetBX = contactVertex.x - bodyB.position.x,
	                    offsetBY = contactVertex.y - bodyB.position.y;
	 
	                var velocityPointAX = bodyAVelocity.x - offsetAY * bodyA.angularVelocity,
	                    velocityPointAY = bodyAVelocity.y + offsetAX * bodyA.angularVelocity,
	                    velocityPointBX = bodyBVelocity.x - offsetBY * bodyB.angularVelocity,
	                    velocityPointBY = bodyBVelocity.y + offsetBX * bodyB.angularVelocity;

	                var relativeVelocityX = velocityPointAX - velocityPointBX,
	                    relativeVelocityY = velocityPointAY - velocityPointBY;

	                var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY,
	                    tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;

	                // coulomb friction
	                var normalOverlap = pair.separation + normalVelocity;
	                var normalForce = Math.min(normalOverlap, 1);
	                normalForce = normalOverlap < 0 ? 0 : normalForce;

	                var frictionLimit = normalForce * friction;

	                if (tangentVelocity < -frictionLimit || tangentVelocity > frictionLimit) {
	                    maxFriction = (tangentVelocity > 0 ? tangentVelocity : -tangentVelocity);
	                    tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleCubed;
	                    
	                    if (tangentImpulse < -maxFriction) {
	                        tangentImpulse = -maxFriction;
	                    } else if (tangentImpulse > maxFriction) {
	                        tangentImpulse = maxFriction;
	                    }
	                } else {
	                    tangentImpulse = tangentVelocity;
	                    maxFriction = frictionMaxStatic;
	                }

	                // account for mass, inertia and contact offset
	                var oAcN = offsetAX * normalY - offsetAY * normalX,
	                    oBcN = offsetBX * normalY - offsetBY * normalX,
	                    share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);

	                // raw impulses
	                var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
	                tangentImpulse *= share;

	                // handle high velocity and resting collisions separately
	                if (normalVelocity < restingThresh) {
	                    // high normal velocity so clear cached contact normal impulse
	                    contact.normalImpulse = 0;
	                } else {
	                    // solve resting collision constraints using Erin Catto's method (GDC08)
	                    // impulse constraint tends to 0
	                    var contactNormalImpulse = contact.normalImpulse;
	                    contact.normalImpulse += normalImpulse;
	                    if (contact.normalImpulse > 0) contact.normalImpulse = 0;
	                    normalImpulse = contact.normalImpulse - contactNormalImpulse;
	                }

	                // handle high velocity and resting collisions separately
	                if (tangentVelocity < -restingThreshTangent || tangentVelocity > restingThreshTangent) {
	                    // high tangent velocity so clear cached contact tangent impulse
	                    contact.tangentImpulse = 0;
	                } else {
	                    // solve resting collision constraints using Erin Catto's method (GDC08)
	                    // tangent impulse tends to -tangentSpeed or +tangentSpeed
	                    var contactTangentImpulse = contact.tangentImpulse;
	                    contact.tangentImpulse += tangentImpulse;
	                    if (contact.tangentImpulse < -maxFriction) contact.tangentImpulse = -maxFriction;
	                    if (contact.tangentImpulse > maxFriction) contact.tangentImpulse = maxFriction;
	                    tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
	                }

	                // total impulse from contact
	                var impulseX = normalX * normalImpulse + tangentX * tangentImpulse,
	                    impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
	                
	                // apply impulse from contact
	                if (!(bodyA.isStatic || bodyA.isSleeping)) {
	                    bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
	                    bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
	                    bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
	                }

	                if (!(bodyB.isStatic || bodyB.isSleeping)) {
	                    bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
	                    bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
	                    bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
	                }
	            }
	        }
	    };

	})();


	/***/ }),
	/* 19 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
	*
	* @class Pairs
	*/

	var Pairs = {};

	module.exports = Pairs;

	var Pair = __webpack_require__(9);
	var Common = __webpack_require__(0);

	(function() {

	    /**
	     * Creates a new pairs structure.
	     * @method create
	     * @param {object} options
	     * @return {pairs} A new pairs structure
	     */
	    Pairs.create = function(options) {
	        return Common.extend({ 
	            table: {},
	            list: [],
	            collisionStart: [],
	            collisionActive: [],
	            collisionEnd: []
	        }, options);
	    };

	    /**
	     * Updates pairs given a list of collisions.
	     * @method update
	     * @param {object} pairs
	     * @param {collision[]} collisions
	     * @param {number} timestamp
	     */
	    Pairs.update = function(pairs, collisions, timestamp) {
	        var pairsList = pairs.list,
	            pairsListLength = pairsList.length,
	            pairsTable = pairs.table,
	            collisionsLength = collisions.length,
	            collisionStart = pairs.collisionStart,
	            collisionEnd = pairs.collisionEnd,
	            collisionActive = pairs.collisionActive,
	            collision,
	            pairIndex,
	            pair,
	            i;

	        // clear collision state arrays, but maintain old reference
	        collisionStart.length = 0;
	        collisionEnd.length = 0;
	        collisionActive.length = 0;

	        for (i = 0; i < pairsListLength; i++) {
	            pairsList[i].confirmedActive = false;
	        }

	        for (i = 0; i < collisionsLength; i++) {
	            collision = collisions[i];
	            pair = collision.pair;

	            if (pair) {
	                // pair already exists (but may or may not be active)
	                if (pair.isActive) {
	                    // pair exists and is active
	                    collisionActive.push(pair);
	                } else {
	                    // pair exists but was inactive, so a collision has just started again
	                    collisionStart.push(pair);
	                }

	                // update the pair
	                Pair.update(pair, collision, timestamp);
	                pair.confirmedActive = true;
	            } else {
	                // pair did not exist, create a new pair
	                pair = Pair.create(collision, timestamp);
	                pairsTable[pair.id] = pair;

	                // push the new pair
	                collisionStart.push(pair);
	                pairsList.push(pair);
	            }
	        }

	        // find pairs that are no longer active
	        var removePairIndex = [];
	        pairsListLength = pairsList.length;

	        for (i = 0; i < pairsListLength; i++) {
	            pair = pairsList[i];
	            
	            if (!pair.confirmedActive) {
	                Pair.setActive(pair, false, timestamp);
	                collisionEnd.push(pair);

	                if (!pair.collision.bodyA.isSleeping && !pair.collision.bodyB.isSleeping) {
	                    removePairIndex.push(i);
	                }
	            }
	        }

	        // remove inactive pairs
	        for (i = 0; i < removePairIndex.length; i++) {
	            pairIndex = removePairIndex[i] - i;
	            pair = pairsList[pairIndex];
	            pairsList.splice(pairIndex, 1);
	            delete pairsTable[pair.id];
	        }
	    };

	    /**
	     * Clears the given pairs structure.
	     * @method clear
	     * @param {pairs} pairs
	     * @return {pairs} pairs
	     */
	    Pairs.clear = function(pairs) {
	        pairs.table = {};
	        pairs.list.length = 0;
	        pairs.collisionStart.length = 0;
	        pairs.collisionActive.length = 0;
	        pairs.collisionEnd.length = 0;
	        return pairs;
	    };

	})();


	/***/ }),
	/* 20 */
	/***/ (function(module, exports, __webpack_require__) {

	var Matter = module.exports = __webpack_require__(21);

	Matter.Axes = __webpack_require__(11);
	Matter.Bodies = __webpack_require__(12);
	Matter.Body = __webpack_require__(4);
	Matter.Bounds = __webpack_require__(1);
	Matter.Collision = __webpack_require__(8);
	Matter.Common = __webpack_require__(0);
	Matter.Composite = __webpack_require__(6);
	Matter.Composites = __webpack_require__(22);
	Matter.Constraint = __webpack_require__(10);
	Matter.Contact = __webpack_require__(16);
	Matter.Detector = __webpack_require__(13);
	Matter.Engine = __webpack_require__(17);
	Matter.Events = __webpack_require__(5);
	Matter.Grid = __webpack_require__(23);
	Matter.Mouse = __webpack_require__(14);
	Matter.MouseConstraint = __webpack_require__(24);
	Matter.Pair = __webpack_require__(9);
	Matter.Pairs = __webpack_require__(19);
	Matter.Plugin = __webpack_require__(15);
	Matter.Query = __webpack_require__(25);
	Matter.Render = __webpack_require__(26);
	Matter.Resolver = __webpack_require__(18);
	Matter.Runner = __webpack_require__(27);
	Matter.SAT = __webpack_require__(28);
	Matter.Sleeping = __webpack_require__(7);
	Matter.Svg = __webpack_require__(29);
	Matter.Vector = __webpack_require__(2);
	Matter.Vertices = __webpack_require__(3);
	Matter.World = __webpack_require__(30);

	// temporary back compatibility
	Matter.Engine.run = Matter.Runner.run;
	Matter.Common.deprecated(Matter.Engine, 'run', 'Engine.run ➤ use Matter.Runner.run(engine) instead');


	/***/ }),
	/* 21 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
	*
	* @class Matter
	*/

	var Matter = {};

	module.exports = Matter;

	var Plugin = __webpack_require__(15);
	var Common = __webpack_require__(0);

	(function() {

	    /**
	     * The library name.
	     * @property name
	     * @readOnly
	     * @type {String}
	     */
	    Matter.name = 'matter-js';

	    /**
	     * The library version.
	     * @property version
	     * @readOnly
	     * @type {String}
	     */
	    Matter.version =  "0.19.0" ;

	    /**
	     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
	     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
	     * @property uses
	     * @type {Array}
	     */
	    Matter.uses = [];

	    /**
	     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
	     * @property used
	     * @readOnly
	     * @type {Array}
	     */
	    Matter.used = [];

	    /**
	     * Installs the given plugins on the `Matter` namespace.
	     * This is a short-hand for `Plugin.use`, see it for more information.
	     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
	     * Avoid calling this function multiple times unless you intend to manually control installation order.
	     * @method use
	     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
	     */
	    Matter.use = function() {
	        Plugin.use(Matter, Array.prototype.slice.call(arguments));
	    };

	    /**
	     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
	     * See also docs for `Common.chain`.
	     * @method before
	     * @param {string} path The path relative to `Matter`
	     * @param {function} func The function to chain before the original
	     * @return {function} The chained function that replaced the original
	     */
	    Matter.before = function(path, func) {
	        path = path.replace(/^Matter./, '');
	        return Common.chainPathBefore(Matter, path, func);
	    };

	    /**
	     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
	     * See also docs for `Common.chain`.
	     * @method after
	     * @param {string} path The path relative to `Matter`
	     * @param {function} func The function to chain after the original
	     * @return {function} The chained function that replaced the original
	     */
	    Matter.after = function(path, func) {
	        path = path.replace(/^Matter./, '');
	        return Common.chainPathAfter(Matter, path, func);
	    };

	})();


	/***/ }),
	/* 22 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Composites` module contains factory methods for creating composite bodies
	* with commonly used configurations (such as stacks and chains).
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Composites
	*/

	var Composites = {};

	module.exports = Composites;

	var Composite = __webpack_require__(6);
	var Constraint = __webpack_require__(10);
	var Common = __webpack_require__(0);
	var Body = __webpack_require__(4);
	var Bodies = __webpack_require__(12);
	var deprecated = Common.deprecated;

	(function() {

	    /**
	     * Create a new composite containing bodies created in the callback in a grid arrangement.
	     * This function uses the body's bounds to prevent overlaps.
	     * @method stack
	     * @param {number} xx
	     * @param {number} yy
	     * @param {number} columns
	     * @param {number} rows
	     * @param {number} columnGap
	     * @param {number} rowGap
	     * @param {function} callback
	     * @return {composite} A new composite containing objects created in the callback
	     */
	    Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
	        var stack = Composite.create({ label: 'Stack' }),
	            x = xx,
	            y = yy,
	            lastBody,
	            i = 0;

	        for (var row = 0; row < rows; row++) {
	            var maxHeight = 0;
	            
	            for (var column = 0; column < columns; column++) {
	                var body = callback(x, y, column, row, lastBody, i);
	                    
	                if (body) {
	                    var bodyHeight = body.bounds.max.y - body.bounds.min.y,
	                        bodyWidth = body.bounds.max.x - body.bounds.min.x; 

	                    if (bodyHeight > maxHeight)
	                        maxHeight = bodyHeight;
	                    
	                    Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });

	                    x = body.bounds.max.x + columnGap;

	                    Composite.addBody(stack, body);
	                    
	                    lastBody = body;
	                    i += 1;
	                } else {
	                    x += columnGap;
	                }
	            }
	            
	            y += maxHeight + rowGap;
	            x = xx;
	        }

	        return stack;
	    };
	    
	    /**
	     * Chains all bodies in the given composite together using constraints.
	     * @method chain
	     * @param {composite} composite
	     * @param {number} xOffsetA
	     * @param {number} yOffsetA
	     * @param {number} xOffsetB
	     * @param {number} yOffsetB
	     * @param {object} options
	     * @return {composite} A new composite containing objects chained together with constraints
	     */
	    Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
	        var bodies = composite.bodies;
	        
	        for (var i = 1; i < bodies.length; i++) {
	            var bodyA = bodies[i - 1],
	                bodyB = bodies[i],
	                bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y,
	                bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, 
	                bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y,
	                bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
	        
	            var defaults = {
	                bodyA: bodyA,
	                pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
	                bodyB: bodyB,
	                pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
	            };
	            
	            var constraint = Common.extend(defaults, options);
	        
	            Composite.addConstraint(composite, Constraint.create(constraint));
	        }

	        composite.label += ' Chain';
	        
	        return composite;
	    };

	    /**
	     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
	     * @method mesh
	     * @param {composite} composite
	     * @param {number} columns
	     * @param {number} rows
	     * @param {boolean} crossBrace
	     * @param {object} options
	     * @return {composite} The composite containing objects meshed together with constraints
	     */
	    Composites.mesh = function(composite, columns, rows, crossBrace, options) {
	        var bodies = composite.bodies,
	            row,
	            col,
	            bodyA,
	            bodyB,
	            bodyC;
	        
	        for (row = 0; row < rows; row++) {
	            for (col = 1; col < columns; col++) {
	                bodyA = bodies[(col - 1) + (row * columns)];
	                bodyB = bodies[col + (row * columns)];
	                Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));
	            }

	            if (row > 0) {
	                for (col = 0; col < columns; col++) {
	                    bodyA = bodies[col + ((row - 1) * columns)];
	                    bodyB = bodies[col + (row * columns)];
	                    Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));

	                    if (crossBrace && col > 0) {
	                        bodyC = bodies[(col - 1) + ((row - 1) * columns)];
	                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
	                    }

	                    if (crossBrace && col < columns - 1) {
	                        bodyC = bodies[(col + 1) + ((row - 1) * columns)];
	                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
	                    }
	                }
	            }
	        }

	        composite.label += ' Mesh';
	        
	        return composite;
	    };
	    
	    /**
	     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
	     * This function uses the body's bounds to prevent overlaps.
	     * @method pyramid
	     * @param {number} xx
	     * @param {number} yy
	     * @param {number} columns
	     * @param {number} rows
	     * @param {number} columnGap
	     * @param {number} rowGap
	     * @param {function} callback
	     * @return {composite} A new composite containing objects created in the callback
	     */
	    Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
	        return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y, column, row, lastBody, i) {
	            var actualRows = Math.min(rows, Math.ceil(columns / 2)),
	                lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
	            
	            if (row > actualRows)
	                return;
	            
	            // reverse row order
	            row = actualRows - row;
	            
	            var start = row,
	                end = columns - 1 - row;

	            if (column < start || column > end)
	                return;
	            
	            // retroactively fix the first body's position, since width was unknown
	            if (i === 1) {
	                Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
	            }

	            var xOffset = lastBody ? column * lastBodyWidth : 0;
	            
	            return callback(xx + xOffset + column * columnGap, y, column, row, lastBody, i);
	        });
	    };

	    /**
	     * This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
	     * @deprecated moved to newtonsCradle example
	     * @method newtonsCradle
	     * @param {number} xx
	     * @param {number} yy
	     * @param {number} number
	     * @param {number} size
	     * @param {number} length
	     * @return {composite} A new composite newtonsCradle body
	     */
	    Composites.newtonsCradle = function(xx, yy, number, size, length) {
	        var newtonsCradle = Composite.create({ label: 'Newtons Cradle' });

	        for (var i = 0; i < number; i++) {
	            var separation = 1.9,
	                circle = Bodies.circle(xx + i * (size * separation), yy + length, size, 
	                    { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0.0001, slop: 1 }),
	                constraint = Constraint.create({ pointA: { x: xx + i * (size * separation), y: yy }, bodyB: circle });

	            Composite.addBody(newtonsCradle, circle);
	            Composite.addConstraint(newtonsCradle, constraint);
	        }

	        return newtonsCradle;
	    };

	    deprecated(Composites, 'newtonsCradle', 'Composites.newtonsCradle ➤ moved to newtonsCradle example');
	    
	    /**
	     * This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
	     * @deprecated moved to car example
	     * @method car
	     * @param {number} xx
	     * @param {number} yy
	     * @param {number} width
	     * @param {number} height
	     * @param {number} wheelSize
	     * @return {composite} A new composite car body
	     */
	    Composites.car = function(xx, yy, width, height, wheelSize) {
	        var group = Body.nextGroup(true),
	            wheelBase = 20,
	            wheelAOffset = -width * 0.5 + wheelBase,
	            wheelBOffset = width * 0.5 - wheelBase,
	            wheelYOffset = 0;
	    
	        var car = Composite.create({ label: 'Car' }),
	            body = Bodies.rectangle(xx, yy, width, height, { 
	                collisionFilter: {
	                    group: group
	                },
	                chamfer: {
	                    radius: height * 0.5
	                },
	                density: 0.0002
	            });
	    
	        var wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, { 
	            collisionFilter: {
	                group: group
	            },
	            friction: 0.8
	        });
	                    
	        var wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, { 
	            collisionFilter: {
	                group: group
	            },
	            friction: 0.8
	        });
	                    
	        var axelA = Constraint.create({
	            bodyB: body,
	            pointB: { x: wheelAOffset, y: wheelYOffset },
	            bodyA: wheelA,
	            stiffness: 1,
	            length: 0
	        });
	                        
	        var axelB = Constraint.create({
	            bodyB: body,
	            pointB: { x: wheelBOffset, y: wheelYOffset },
	            bodyA: wheelB,
	            stiffness: 1,
	            length: 0
	        });
	        
	        Composite.addBody(car, body);
	        Composite.addBody(car, wheelA);
	        Composite.addBody(car, wheelB);
	        Composite.addConstraint(car, axelA);
	        Composite.addConstraint(car, axelB);

	        return car;
	    };

	    deprecated(Composites, 'car', 'Composites.car ➤ moved to car example');

	    /**
	     * This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
	     * and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
	     * @deprecated moved to softBody and cloth examples
	     * @method softBody
	     * @param {number} xx
	     * @param {number} yy
	     * @param {number} columns
	     * @param {number} rows
	     * @param {number} columnGap
	     * @param {number} rowGap
	     * @param {boolean} crossBrace
	     * @param {number} particleRadius
	     * @param {} particleOptions
	     * @param {} constraintOptions
	     * @return {composite} A new composite softBody
	     */
	    Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
	        particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
	        constraintOptions = Common.extend({ stiffness: 0.2, render: { type: 'line', anchors: false } }, constraintOptions);

	        var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y) {
	            return Bodies.circle(x, y, particleRadius, particleOptions);
	        });

	        Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);

	        softBody.label = 'Soft Body';

	        return softBody;
	    };

	    deprecated(Composites, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples');
	})();


	/***/ }),
	/* 23 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* This module has now been replaced by `Matter.Detector`.
	*
	* All usage should be migrated to `Matter.Detector` or another alternative.
	* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
	*
	* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
	*
	* @class Grid
	* @deprecated
	*/

	var Grid = {};

	module.exports = Grid;

	var Pair = __webpack_require__(9);
	var Common = __webpack_require__(0);
	var deprecated = Common.deprecated;

	(function() {

	    /**
	     * Creates a new grid.
	     * @deprecated replaced by Matter.Detector
	     * @method create
	     * @param {} options
	     * @return {grid} A new grid
	     */
	    Grid.create = function(options) {
	        var defaults = {
	            buckets: {},
	            pairs: {},
	            pairsList: [],
	            bucketWidth: 48,
	            bucketHeight: 48
	        };

	        return Common.extend(defaults, options);
	    };

	    /**
	     * The width of a single grid bucket.
	     *
	     * @property bucketWidth
	     * @type number
	     * @default 48
	     */

	    /**
	     * The height of a single grid bucket.
	     *
	     * @property bucketHeight
	     * @type number
	     * @default 48
	     */

	    /**
	     * Updates the grid.
	     * @deprecated replaced by Matter.Detector
	     * @method update
	     * @param {grid} grid
	     * @param {body[]} bodies
	     * @param {engine} engine
	     * @param {boolean} forceUpdate
	     */
	    Grid.update = function(grid, bodies, engine, forceUpdate) {
	        var i, col, row,
	            world = engine.world,
	            buckets = grid.buckets,
	            bucket,
	            bucketId,
	            gridChanged = false;

	        for (i = 0; i < bodies.length; i++) {
	            var body = bodies[i];

	            if (body.isSleeping && !forceUpdate)
	                continue;

	            // temporary back compatibility bounds check
	            if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x
	                || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y))
	                continue;

	            var newRegion = Grid._getRegion(grid, body);

	            // if the body has changed grid region
	            if (!body.region || newRegion.id !== body.region.id || forceUpdate) {

	                if (!body.region || forceUpdate)
	                    body.region = newRegion;

	                var union = Grid._regionUnion(newRegion, body.region);

	                // update grid buckets affected by region change
	                // iterate over the union of both regions
	                for (col = union.startCol; col <= union.endCol; col++) {
	                    for (row = union.startRow; row <= union.endRow; row++) {
	                        bucketId = Grid._getBucketId(col, row);
	                        bucket = buckets[bucketId];

	                        var isInsideNewRegion = (col >= newRegion.startCol && col <= newRegion.endCol
	                                                && row >= newRegion.startRow && row <= newRegion.endRow);

	                        var isInsideOldRegion = (col >= body.region.startCol && col <= body.region.endCol
	                                                && row >= body.region.startRow && row <= body.region.endRow);

	                        // remove from old region buckets
	                        if (!isInsideNewRegion && isInsideOldRegion) {
	                            if (isInsideOldRegion) {
	                                if (bucket)
	                                    Grid._bucketRemoveBody(grid, bucket, body);
	                            }
	                        }

	                        // add to new region buckets
	                        if (body.region === newRegion || (isInsideNewRegion && !isInsideOldRegion) || forceUpdate) {
	                            if (!bucket)
	                                bucket = Grid._createBucket(buckets, bucketId);
	                            Grid._bucketAddBody(grid, bucket, body);
	                        }
	                    }
	                }

	                // set the new region
	                body.region = newRegion;

	                // flag changes so we can update pairs
	                gridChanged = true;
	            }
	        }

	        // update pairs list only if pairs changed (i.e. a body changed region)
	        if (gridChanged)
	            grid.pairsList = Grid._createActivePairsList(grid);
	    };

	    deprecated(Grid, 'update', 'Grid.update ➤ replaced by Matter.Detector');

	    /**
	     * Clears the grid.
	     * @deprecated replaced by Matter.Detector
	     * @method clear
	     * @param {grid} grid
	     */
	    Grid.clear = function(grid) {
	        grid.buckets = {};
	        grid.pairs = {};
	        grid.pairsList = [];
	    };

	    deprecated(Grid, 'clear', 'Grid.clear ➤ replaced by Matter.Detector');

	    /**
	     * Finds the union of two regions.
	     * @method _regionUnion
	     * @deprecated replaced by Matter.Detector
	     * @private
	     * @param {} regionA
	     * @param {} regionB
	     * @return {} region
	     */
	    Grid._regionUnion = function(regionA, regionB) {
	        var startCol = Math.min(regionA.startCol, regionB.startCol),
	            endCol = Math.max(regionA.endCol, regionB.endCol),
	            startRow = Math.min(regionA.startRow, regionB.startRow),
	            endRow = Math.max(regionA.endRow, regionB.endRow);

	        return Grid._createRegion(startCol, endCol, startRow, endRow);
	    };

	    /**
	     * Gets the region a given body falls in for a given grid.
	     * @method _getRegion
	     * @deprecated replaced by Matter.Detector
	     * @private
	     * @param {} grid
	     * @param {} body
	     * @return {} region
	     */
	    Grid._getRegion = function(grid, body) {
	        var bounds = body.bounds,
	            startCol = Math.floor(bounds.min.x / grid.bucketWidth),
	            endCol = Math.floor(bounds.max.x / grid.bucketWidth),
	            startRow = Math.floor(bounds.min.y / grid.bucketHeight),
	            endRow = Math.floor(bounds.max.y / grid.bucketHeight);

	        return Grid._createRegion(startCol, endCol, startRow, endRow);
	    };

	    /**
	     * Creates a region.
	     * @method _createRegion
	     * @deprecated replaced by Matter.Detector
	     * @private
	     * @param {} startCol
	     * @param {} endCol
	     * @param {} startRow
	     * @param {} endRow
	     * @return {} region
	     */
	    Grid._createRegion = function(startCol, endCol, startRow, endRow) {
	        return { 
	            id: startCol + ',' + endCol + ',' + startRow + ',' + endRow,
	            startCol: startCol, 
	            endCol: endCol, 
	            startRow: startRow, 
	            endRow: endRow 
	        };
	    };

	    /**
	     * Gets the bucket id at the given position.
	     * @method _getBucketId
	     * @deprecated replaced by Matter.Detector
	     * @private
	     * @param {} column
	     * @param {} row
	     * @return {string} bucket id
	     */
	    Grid._getBucketId = function(column, row) {
	        return 'C' + column + 'R' + row;
	    };

	    /**
	     * Creates a bucket.
	     * @method _createBucket
	     * @deprecated replaced by Matter.Detector
	     * @private
	     * @param {} buckets
	     * @param {} bucketId
	     * @return {} bucket
	     */
	    Grid._createBucket = function(buckets, bucketId) {
	        var bucket = buckets[bucketId] = [];
	        return bucket;
	    };

	    /**
	     * Adds a body to a bucket.
	     * @method _bucketAddBody
	     * @deprecated replaced by Matter.Detector
	     * @private
	     * @param {} grid
	     * @param {} bucket
	     * @param {} body
	     */
	    Grid._bucketAddBody = function(grid, bucket, body) {
	        var gridPairs = grid.pairs,
	            pairId = Pair.id,
	            bucketLength = bucket.length,
	            i;

	        // add new pairs
	        for (i = 0; i < bucketLength; i++) {
	            var bodyB = bucket[i];

	            if (body.id === bodyB.id || (body.isStatic && bodyB.isStatic))
	                continue;

	            // keep track of the number of buckets the pair exists in
	            // important for Grid.update to work
	            var id = pairId(body, bodyB),
	                pair = gridPairs[id];

	            if (pair) {
	                pair[2] += 1;
	            } else {
	                gridPairs[id] = [body, bodyB, 1];
	            }
	        }

	        // add to bodies (after pairs, otherwise pairs with self)
	        bucket.push(body);
	    };

	    /**
	     * Removes a body from a bucket.
	     * @method _bucketRemoveBody
	     * @deprecated replaced by Matter.Detector
	     * @private
	     * @param {} grid
	     * @param {} bucket
	     * @param {} body
	     */
	    Grid._bucketRemoveBody = function(grid, bucket, body) {
	        var gridPairs = grid.pairs,
	            pairId = Pair.id,
	            i;

	        // remove from bucket
	        bucket.splice(Common.indexOf(bucket, body), 1);

	        var bucketLength = bucket.length;

	        // update pair counts
	        for (i = 0; i < bucketLength; i++) {
	            // keep track of the number of buckets the pair exists in
	            // important for _createActivePairsList to work
	            var pair = gridPairs[pairId(body, bucket[i])];

	            if (pair)
	                pair[2] -= 1;
	        }
	    };

	    /**
	     * Generates a list of the active pairs in the grid.
	     * @method _createActivePairsList
	     * @deprecated replaced by Matter.Detector
	     * @private
	     * @param {} grid
	     * @return [] pairs
	     */
	    Grid._createActivePairsList = function(grid) {
	        var pair,
	            gridPairs = grid.pairs,
	            pairKeys = Common.keys(gridPairs),
	            pairKeysLength = pairKeys.length,
	            pairs = [],
	            k;

	        // iterate over grid.pairs
	        for (k = 0; k < pairKeysLength; k++) {
	            pair = gridPairs[pairKeys[k]];

	            // if pair exists in at least one bucket
	            // it is a pair that needs further collision testing so push it
	            if (pair[2] > 0) {
	                pairs.push(pair);
	            } else {
	                delete gridPairs[pairKeys[k]];
	            }
	        }

	        return pairs;
	    };
	    
	})();


	/***/ }),
	/* 24 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
	* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class MouseConstraint
	*/

	var MouseConstraint = {};

	module.exports = MouseConstraint;

	var Vertices = __webpack_require__(3);
	var Sleeping = __webpack_require__(7);
	var Mouse = __webpack_require__(14);
	var Events = __webpack_require__(5);
	var Detector = __webpack_require__(13);
	var Constraint = __webpack_require__(10);
	var Composite = __webpack_require__(6);
	var Common = __webpack_require__(0);
	var Bounds = __webpack_require__(1);

	(function() {

	    /**
	     * Creates a new mouse constraint.
	     * All properties have default values, and many are pre-calculated automatically based on other properties.
	     * See the properties section below for detailed information on what you can pass via the `options` object.
	     * @method create
	     * @param {engine} engine
	     * @param {} options
	     * @return {MouseConstraint} A new MouseConstraint
	     */
	    MouseConstraint.create = function(engine, options) {
	        var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);

	        if (!mouse) {
	            if (engine && engine.render && engine.render.canvas) {
	                mouse = Mouse.create(engine.render.canvas);
	            } else if (options && options.element) {
	                mouse = Mouse.create(options.element);
	            } else {
	                mouse = Mouse.create();
	                Common.warn('MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected');
	            }
	        }

	        var constraint = Constraint.create({ 
	            label: 'Mouse Constraint',
	            pointA: mouse.position,
	            pointB: { x: 0, y: 0 },
	            length: 0.01, 
	            stiffness: 0.1,
	            angularStiffness: 1,
	            render: {
	                strokeStyle: '#90EE90',
	                lineWidth: 3
	            }
	        });

	        var defaults = {
	            type: 'mouseConstraint',
	            mouse: mouse,
	            element: null,
	            body: null,
	            constraint: constraint,
	            collisionFilter: {
	                category: 0x0001,
	                mask: 0xFFFFFFFF,
	                group: 0
	            }
	        };

	        var mouseConstraint = Common.extend(defaults, options);

	        Events.on(engine, 'beforeUpdate', function() {
	            var allBodies = Composite.allBodies(engine.world);
	            MouseConstraint.update(mouseConstraint, allBodies);
	            MouseConstraint._triggerEvents(mouseConstraint);
	        });

	        return mouseConstraint;
	    };

	    /**
	     * Updates the given mouse constraint.
	     * @private
	     * @method update
	     * @param {MouseConstraint} mouseConstraint
	     * @param {body[]} bodies
	     */
	    MouseConstraint.update = function(mouseConstraint, bodies) {
	        var mouse = mouseConstraint.mouse,
	            constraint = mouseConstraint.constraint,
	            body = mouseConstraint.body;

	        if (mouse.button === 0) {
	            if (!constraint.bodyB) {
	                for (var i = 0; i < bodies.length; i++) {
	                    body = bodies[i];
	                    if (Bounds.contains(body.bounds, mouse.position) 
	                            && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
	                        for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
	                            var part = body.parts[j];
	                            if (Vertices.contains(part.vertices, mouse.position)) {
	                                constraint.pointA = mouse.position;
	                                constraint.bodyB = mouseConstraint.body = body;
	                                constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
	                                constraint.angleB = body.angle;

	                                Sleeping.set(body, false);
	                                Events.trigger(mouseConstraint, 'startdrag', { mouse: mouse, body: body });

	                                break;
	                            }
	                        }
	                    }
	                }
	            } else {
	                Sleeping.set(constraint.bodyB, false);
	                constraint.pointA = mouse.position;
	            }
	        } else {
	            constraint.bodyB = mouseConstraint.body = null;
	            constraint.pointB = null;

	            if (body)
	                Events.trigger(mouseConstraint, 'enddrag', { mouse: mouse, body: body });
	        }
	    };

	    /**
	     * Triggers mouse constraint events.
	     * @method _triggerEvents
	     * @private
	     * @param {mouse} mouseConstraint
	     */
	    MouseConstraint._triggerEvents = function(mouseConstraint) {
	        var mouse = mouseConstraint.mouse,
	            mouseEvents = mouse.sourceEvents;

	        if (mouseEvents.mousemove)
	            Events.trigger(mouseConstraint, 'mousemove', { mouse: mouse });

	        if (mouseEvents.mousedown)
	            Events.trigger(mouseConstraint, 'mousedown', { mouse: mouse });

	        if (mouseEvents.mouseup)
	            Events.trigger(mouseConstraint, 'mouseup', { mouse: mouse });

	        // reset the mouse state ready for the next step
	        Mouse.clearSourceEvents(mouse);
	    };

	    /*
	    *
	    *  Events Documentation
	    *
	    */

	    /**
	    * Fired when the mouse has moved (or a touch moves) during the last step
	    *
	    * @event mousemove
	    * @param {} event An event object
	    * @param {mouse} event.mouse The engine's mouse instance
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when the mouse is down (or a touch has started) during the last step
	    *
	    * @event mousedown
	    * @param {} event An event object
	    * @param {mouse} event.mouse The engine's mouse instance
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when the mouse is up (or a touch has ended) during the last step
	    *
	    * @event mouseup
	    * @param {} event An event object
	    * @param {mouse} event.mouse The engine's mouse instance
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when the user starts dragging a body
	    *
	    * @event startdrag
	    * @param {} event An event object
	    * @param {mouse} event.mouse The engine's mouse instance
	    * @param {body} event.body The body being dragged
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired when the user ends dragging a body
	    *
	    * @event enddrag
	    * @param {} event An event object
	    * @param {mouse} event.mouse The engine's mouse instance
	    * @param {body} event.body The body that has stopped being dragged
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * A `String` denoting the type of object.
	     *
	     * @property type
	     * @type string
	     * @default "constraint"
	     * @readOnly
	     */

	    /**
	     * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
	     *
	     * @property mouse
	     * @type mouse
	     * @default mouse
	     */

	    /**
	     * The `Body` that is currently being moved by the user, or `null` if no body.
	     *
	     * @property body
	     * @type body
	     * @default null
	     */

	    /**
	     * The `Constraint` object that is used to move the body during interaction.
	     *
	     * @property constraint
	     * @type constraint
	     */

	    /**
	     * An `Object` that specifies the collision filter properties.
	     * The collision filter allows the user to define which types of body this mouse constraint can interact with.
	     * See `body.collisionFilter` for more information.
	     *
	     * @property collisionFilter
	     * @type object
	     */

	})();


	/***/ }),
	/* 25 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Query` module contains methods for performing collision queries.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Query
	*/

	var Query = {};

	module.exports = Query;

	var Vector = __webpack_require__(2);
	var Collision = __webpack_require__(8);
	var Bounds = __webpack_require__(1);
	var Bodies = __webpack_require__(12);
	var Vertices = __webpack_require__(3);

	(function() {

	    /**
	     * Returns a list of collisions between `body` and `bodies`.
	     * @method collides
	     * @param {body} body
	     * @param {body[]} bodies
	     * @return {collision[]} Collisions
	     */
	    Query.collides = function(body, bodies) {
	        var collisions = [],
	            bodiesLength = bodies.length,
	            bounds = body.bounds,
	            collides = Collision.collides,
	            overlaps = Bounds.overlaps;

	        for (var i = 0; i < bodiesLength; i++) {
	            var bodyA = bodies[i],
	                partsALength = bodyA.parts.length,
	                partsAStart = partsALength === 1 ? 0 : 1;
	            
	            if (overlaps(bodyA.bounds, bounds)) {
	                for (var j = partsAStart; j < partsALength; j++) {
	                    var part = bodyA.parts[j];

	                    if (overlaps(part.bounds, bounds)) {
	                        var collision = collides(part, body);

	                        if (collision) {
	                            collisions.push(collision);
	                            break;
	                        }
	                    }
	                }
	            }
	        }

	        return collisions;
	    };

	    /**
	     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
	     * @method ray
	     * @param {body[]} bodies
	     * @param {vector} startPoint
	     * @param {vector} endPoint
	     * @param {number} [rayWidth]
	     * @return {collision[]} Collisions
	     */
	    Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
	        rayWidth = rayWidth || 1e-100;

	        var rayAngle = Vector.angle(startPoint, endPoint),
	            rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)),
	            rayX = (endPoint.x + startPoint.x) * 0.5,
	            rayY = (endPoint.y + startPoint.y) * 0.5,
	            ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }),
	            collisions = Query.collides(ray, bodies);

	        for (var i = 0; i < collisions.length; i += 1) {
	            var collision = collisions[i];
	            collision.body = collision.bodyB = collision.bodyA;            
	        }

	        return collisions;
	    };

	    /**
	     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
	     * @method region
	     * @param {body[]} bodies
	     * @param {bounds} bounds
	     * @param {bool} [outside=false]
	     * @return {body[]} The bodies matching the query
	     */
	    Query.region = function(bodies, bounds, outside) {
	        var result = [];

	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i],
	                overlaps = Bounds.overlaps(body.bounds, bounds);
	            if ((overlaps && !outside) || (!overlaps && outside))
	                result.push(body);
	        }

	        return result;
	    };

	    /**
	     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
	     * @method point
	     * @param {body[]} bodies
	     * @param {vector} point
	     * @return {body[]} The bodies matching the query
	     */
	    Query.point = function(bodies, point) {
	        var result = [];

	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i];
	            
	            if (Bounds.contains(body.bounds, point)) {
	                for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
	                    var part = body.parts[j];

	                    if (Bounds.contains(part.bounds, point)
	                        && Vertices.contains(part.vertices, point)) {
	                        result.push(body);
	                        break;
	                    }
	                }
	            }
	        }

	        return result;
	    };

	})();


	/***/ }),
	/* 26 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Render` module is a simple canvas based renderer for visualising instances of `Matter.Engine`.
	* It is intended for development and debugging purposes, but may also be suitable for simple games.
	* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
	*
	* @class Render
	*/

	var Render = {};

	module.exports = Render;

	var Body = __webpack_require__(4);
	var Common = __webpack_require__(0);
	var Composite = __webpack_require__(6);
	var Bounds = __webpack_require__(1);
	var Events = __webpack_require__(5);
	var Vector = __webpack_require__(2);
	var Mouse = __webpack_require__(14);

	(function() {

	    var _requestAnimationFrame,
	        _cancelAnimationFrame;

	    if (typeof window !== 'undefined') {
	        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
	                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame
	                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };

	        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
	                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
	    }

	    Render._goodFps = 30;
	    Render._goodDelta = 1000 / 60;

	    /**
	     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
	     * All properties have default values, and many are pre-calculated automatically based on other properties.
	     * See the properties section below for detailed information on what you can pass via the `options` object.
	     * @method create
	     * @param {object} [options]
	     * @return {render} A new renderer
	     */
	    Render.create = function(options) {
	        var defaults = {
	            engine: null,
	            element: null,
	            canvas: null,
	            mouse: null,
	            frameRequestId: null,
	            timing: {
	                historySize: 60,
	                delta: 0,
	                deltaHistory: [],
	                lastTime: 0,
	                lastTimestamp: 0,
	                lastElapsed: 0,
	                timestampElapsed: 0,
	                timestampElapsedHistory: [],
	                engineDeltaHistory: [],
	                engineElapsedHistory: [],
	                elapsedHistory: []
	            },
	            options: {
	                width: 800,
	                height: 600,
	                pixelRatio: 1,
	                background: '#14151f',
	                wireframeBackground: '#14151f',
	                hasBounds: !!options.bounds,
	                enabled: true,
	                wireframes: true,
	                showSleeping: true,
	                showDebug: false,
	                showStats: false,
	                showPerformance: false,
	                showBounds: false,
	                showVelocity: false,
	                showCollisions: false,
	                showSeparations: false,
	                showAxes: false,
	                showPositions: false,
	                showAngleIndicator: false,
	                showIds: false,
	                showVertexNumbers: false,
	                showConvexHulls: false,
	                showInternalEdges: false,
	                showMousePosition: false
	            }
	        };

	        var render = Common.extend(defaults, options);

	        if (render.canvas) {
	            render.canvas.width = render.options.width || render.canvas.width;
	            render.canvas.height = render.options.height || render.canvas.height;
	        }

	        render.mouse = options.mouse;
	        render.engine = options.engine;
	        render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
	        render.context = render.canvas.getContext('2d');
	        render.textures = {};

	        render.bounds = render.bounds || {
	            min: {
	                x: 0,
	                y: 0
	            },
	            max: {
	                x: render.canvas.width,
	                y: render.canvas.height
	            }
	        };

	        // for temporary back compatibility only
	        render.controller = Render;
	        render.options.showBroadphase = false;

	        if (render.options.pixelRatio !== 1) {
	            Render.setPixelRatio(render, render.options.pixelRatio);
	        }

	        if (Common.isElement(render.element)) {
	            render.element.appendChild(render.canvas);
	        }

	        return render;
	    };

	    /**
	     * Continuously updates the render canvas on the `requestAnimationFrame` event.
	     * @method run
	     * @param {render} render
	     */
	    Render.run = function(render) {
	        (function loop(time){
	            render.frameRequestId = _requestAnimationFrame(loop);
	            
	            _updateTiming(render, time);

	            Render.world(render, time);

	            if (render.options.showStats || render.options.showDebug) {
	                Render.stats(render, render.context, time);
	            }

	            if (render.options.showPerformance || render.options.showDebug) {
	                Render.performance(render, render.context, time);
	            }
	        })();
	    };

	    /**
	     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
	     * @method stop
	     * @param {render} render
	     */
	    Render.stop = function(render) {
	        _cancelAnimationFrame(render.frameRequestId);
	    };

	    /**
	     * Sets the pixel ratio of the renderer and updates the canvas.
	     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
	     * @method setPixelRatio
	     * @param {render} render
	     * @param {number} pixelRatio
	     */
	    Render.setPixelRatio = function(render, pixelRatio) {
	        var options = render.options,
	            canvas = render.canvas;

	        if (pixelRatio === 'auto') {
	            pixelRatio = _getPixelRatio(canvas);
	        }

	        options.pixelRatio = pixelRatio;
	        canvas.setAttribute('data-pixel-ratio', pixelRatio);
	        canvas.width = options.width * pixelRatio;
	        canvas.height = options.height * pixelRatio;
	        canvas.style.width = options.width + 'px';
	        canvas.style.height = options.height + 'px';
	    };

	    /**
	     * Positions and sizes the viewport around the given object bounds.
	     * Objects must have at least one of the following properties:
	     * - `object.bounds`
	     * - `object.position`
	     * - `object.min` and `object.max`
	     * - `object.x` and `object.y`
	     * @method lookAt
	     * @param {render} render
	     * @param {object[]} objects
	     * @param {vector} [padding]
	     * @param {bool} [center=true]
	     */
	    Render.lookAt = function(render, objects, padding, center) {
	        center = typeof center !== 'undefined' ? center : true;
	        objects = Common.isArray(objects) ? objects : [objects];
	        padding = padding || {
	            x: 0,
	            y: 0
	        };

	        // find bounds of all objects
	        var bounds = {
	            min: { x: Infinity, y: Infinity },
	            max: { x: -Infinity, y: -Infinity }
	        };

	        for (var i = 0; i < objects.length; i += 1) {
	            var object = objects[i],
	                min = object.bounds ? object.bounds.min : (object.min || object.position || object),
	                max = object.bounds ? object.bounds.max : (object.max || object.position || object);

	            if (min && max) {
	                if (min.x < bounds.min.x)
	                    bounds.min.x = min.x;

	                if (max.x > bounds.max.x)
	                    bounds.max.x = max.x;

	                if (min.y < bounds.min.y)
	                    bounds.min.y = min.y;

	                if (max.y > bounds.max.y)
	                    bounds.max.y = max.y;
	            }
	        }

	        // find ratios
	        var width = (bounds.max.x - bounds.min.x) + 2 * padding.x,
	            height = (bounds.max.y - bounds.min.y) + 2 * padding.y,
	            viewHeight = render.canvas.height,
	            viewWidth = render.canvas.width,
	            outerRatio = viewWidth / viewHeight,
	            innerRatio = width / height,
	            scaleX = 1,
	            scaleY = 1;

	        // find scale factor
	        if (innerRatio > outerRatio) {
	            scaleY = innerRatio / outerRatio;
	        } else {
	            scaleX = outerRatio / innerRatio;
	        }

	        // enable bounds
	        render.options.hasBounds = true;

	        // position and size
	        render.bounds.min.x = bounds.min.x;
	        render.bounds.max.x = bounds.min.x + width * scaleX;
	        render.bounds.min.y = bounds.min.y;
	        render.bounds.max.y = bounds.min.y + height * scaleY;

	        // center
	        if (center) {
	            render.bounds.min.x += width * 0.5 - (width * scaleX) * 0.5;
	            render.bounds.max.x += width * 0.5 - (width * scaleX) * 0.5;
	            render.bounds.min.y += height * 0.5 - (height * scaleY) * 0.5;
	            render.bounds.max.y += height * 0.5 - (height * scaleY) * 0.5;
	        }

	        // padding
	        render.bounds.min.x -= padding.x;
	        render.bounds.max.x -= padding.x;
	        render.bounds.min.y -= padding.y;
	        render.bounds.max.y -= padding.y;

	        // update mouse
	        if (render.mouse) {
	            Mouse.setScale(render.mouse, {
	                x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
	                y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
	            });

	            Mouse.setOffset(render.mouse, render.bounds.min);
	        }
	    };

	    /**
	     * Applies viewport transforms based on `render.bounds` to a render context.
	     * @method startViewTransform
	     * @param {render} render
	     */
	    Render.startViewTransform = function(render) {
	        var boundsWidth = render.bounds.max.x - render.bounds.min.x,
	            boundsHeight = render.bounds.max.y - render.bounds.min.y,
	            boundsScaleX = boundsWidth / render.options.width,
	            boundsScaleY = boundsHeight / render.options.height;

	        render.context.setTransform(
	            render.options.pixelRatio / boundsScaleX, 0, 0, 
	            render.options.pixelRatio / boundsScaleY, 0, 0
	        );
	        
	        render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
	    };

	    /**
	     * Resets all transforms on the render context.
	     * @method endViewTransform
	     * @param {render} render
	     */
	    Render.endViewTransform = function(render) {
	        render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
	    };

	    /**
	     * Renders the given `engine`'s `Matter.World` object.
	     * This is the entry point for all rendering and should be called every time the scene changes.
	     * @method world
	     * @param {render} render
	     */
	    Render.world = function(render, time) {
	        var startTime = Common.now(),
	            engine = render.engine,
	            world = engine.world,
	            canvas = render.canvas,
	            context = render.context,
	            options = render.options,
	            timing = render.timing;

	        var allBodies = Composite.allBodies(world),
	            allConstraints = Composite.allConstraints(world),
	            background = options.wireframes ? options.wireframeBackground : options.background,
	            bodies = [],
	            constraints = [],
	            i;

	        var event = {
	            timestamp: engine.timing.timestamp
	        };

	        Events.trigger(render, 'beforeRender', event);

	        // apply background if it has changed
	        if (render.currentBackground !== background)
	            _applyBackground(render, background);

	        // clear the canvas with a transparent fill, to allow the canvas background to show
	        context.globalCompositeOperation = 'source-in';
	        context.fillStyle = "transparent";
	        context.fillRect(0, 0, canvas.width, canvas.height);
	        context.globalCompositeOperation = 'source-over';

	        // handle bounds
	        if (options.hasBounds) {
	            // filter out bodies that are not in view
	            for (i = 0; i < allBodies.length; i++) {
	                var body = allBodies[i];
	                if (Bounds.overlaps(body.bounds, render.bounds))
	                    bodies.push(body);
	            }

	            // filter out constraints that are not in view
	            for (i = 0; i < allConstraints.length; i++) {
	                var constraint = allConstraints[i],
	                    bodyA = constraint.bodyA,
	                    bodyB = constraint.bodyB,
	                    pointAWorld = constraint.pointA,
	                    pointBWorld = constraint.pointB;

	                if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
	                if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);

	                if (!pointAWorld || !pointBWorld)
	                    continue;

	                if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
	                    constraints.push(constraint);
	            }

	            // transform the view
	            Render.startViewTransform(render);

	            // update mouse
	            if (render.mouse) {
	                Mouse.setScale(render.mouse, {
	                    x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
	                    y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
	                });

	                Mouse.setOffset(render.mouse, render.bounds.min);
	            }
	        } else {
	            constraints = allConstraints;
	            bodies = allBodies;

	            if (render.options.pixelRatio !== 1) {
	                render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
	            }
	        }

	        if (!options.wireframes || (engine.enableSleeping && options.showSleeping)) {
	            // fully featured rendering of bodies
	            Render.bodies(render, bodies, context);
	        } else {
	            if (options.showConvexHulls)
	                Render.bodyConvexHulls(render, bodies, context);

	            // optimised method for wireframes only
	            Render.bodyWireframes(render, bodies, context);
	        }

	        if (options.showBounds)
	            Render.bodyBounds(render, bodies, context);

	        if (options.showAxes || options.showAngleIndicator)
	            Render.bodyAxes(render, bodies, context);

	        if (options.showPositions)
	            Render.bodyPositions(render, bodies, context);

	        if (options.showVelocity)
	            Render.bodyVelocity(render, bodies, context);

	        if (options.showIds)
	            Render.bodyIds(render, bodies, context);

	        if (options.showSeparations)
	            Render.separations(render, engine.pairs.list, context);

	        if (options.showCollisions)
	            Render.collisions(render, engine.pairs.list, context);

	        if (options.showVertexNumbers)
	            Render.vertexNumbers(render, bodies, context);

	        if (options.showMousePosition)
	            Render.mousePosition(render, render.mouse, context);

	        Render.constraints(constraints, context);

	        if (options.hasBounds) {
	            // revert view transforms
	            Render.endViewTransform(render);
	        }

	        Events.trigger(render, 'afterRender', event);

	        // log the time elapsed computing this update
	        timing.lastElapsed = Common.now() - startTime;
	    };

	    /**
	     * Renders statistics about the engine and world useful for debugging.
	     * @private
	     * @method stats
	     * @param {render} render
	     * @param {RenderingContext} context
	     * @param {Number} time
	     */
	    Render.stats = function(render, context, time) {
	        var engine = render.engine,
	            world = engine.world,
	            bodies = Composite.allBodies(world),
	            parts = 0,
	            width = 55,
	            height = 44,
	            x = 0,
	            y = 0;
	        
	        // count parts
	        for (var i = 0; i < bodies.length; i += 1) {
	            parts += bodies[i].parts.length;
	        }

	        // sections
	        var sections = {
	            'Part': parts,
	            'Body': bodies.length,
	            'Cons': Composite.allConstraints(world).length,
	            'Comp': Composite.allComposites(world).length,
	            'Pair': engine.pairs.list.length
	        };

	        // background
	        context.fillStyle = '#0e0f19';
	        context.fillRect(x, y, width * 5.5, height);

	        context.font = '12px Arial';
	        context.textBaseline = 'top';
	        context.textAlign = 'right';

	        // sections
	        for (var key in sections) {
	            var section = sections[key];
	            // label
	            context.fillStyle = '#aaa';
	            context.fillText(key, x + width, y + 8);

	            // value
	            context.fillStyle = '#eee';
	            context.fillText(section, x + width, y + 26);

	            x += width;
	        }
	    };

	    /**
	     * Renders engine and render performance information.
	     * @private
	     * @method performance
	     * @param {render} render
	     * @param {RenderingContext} context
	     */
	    Render.performance = function(render, context) {
	        var engine = render.engine,
	            timing = render.timing,
	            deltaHistory = timing.deltaHistory,
	            elapsedHistory = timing.elapsedHistory,
	            timestampElapsedHistory = timing.timestampElapsedHistory,
	            engineDeltaHistory = timing.engineDeltaHistory,
	            engineElapsedHistory = timing.engineElapsedHistory,
	            lastEngineDelta = engine.timing.lastDelta;
	        
	        var deltaMean = _mean(deltaHistory),
	            elapsedMean = _mean(elapsedHistory),
	            engineDeltaMean = _mean(engineDeltaHistory),
	            engineElapsedMean = _mean(engineElapsedHistory),
	            timestampElapsedMean = _mean(timestampElapsedHistory),
	            rateMean = (timestampElapsedMean / deltaMean) || 0,
	            fps = (1000 / deltaMean) || 0;

	        var graphHeight = 4,
	            gap = 12,
	            width = 60,
	            height = 34,
	            x = 10,
	            y = 69;

	        // background
	        context.fillStyle = '#0e0f19';
	        context.fillRect(0, 50, gap * 4 + width * 5 + 22, height);

	        // show FPS
	        Render.status(
	            context, x, y, width, graphHeight, deltaHistory.length, 
	            Math.round(fps) + ' fps', 
	            fps / Render._goodFps,
	            function(i) { return (deltaHistory[i] / deltaMean) - 1; }
	        );

	        // show engine delta
	        Render.status(
	            context, x + gap + width, y, width, graphHeight, engineDeltaHistory.length,
	            lastEngineDelta.toFixed(2) + ' dt', 
	            Render._goodDelta / lastEngineDelta,
	            function(i) { return (engineDeltaHistory[i] / engineDeltaMean) - 1; }
	        );

	        // show engine update time
	        Render.status(
	            context, x + (gap + width) * 2, y, width, graphHeight, engineElapsedHistory.length,
	            engineElapsedMean.toFixed(2) + ' ut', 
	            1 - (engineElapsedMean / Render._goodFps),
	            function(i) { return (engineElapsedHistory[i] / engineElapsedMean) - 1; }
	        );

	        // show render time
	        Render.status(
	            context, x + (gap + width) * 3, y, width, graphHeight, elapsedHistory.length,
	            elapsedMean.toFixed(2) + ' rt', 
	            1 - (elapsedMean / Render._goodFps),
	            function(i) { return (elapsedHistory[i] / elapsedMean) - 1; }
	        );

	        // show effective speed
	        Render.status(
	            context, x + (gap + width) * 4, y, width, graphHeight, timestampElapsedHistory.length, 
	            rateMean.toFixed(2) + ' x', 
	            rateMean * rateMean * rateMean,
	            function(i) { return (((timestampElapsedHistory[i] / deltaHistory[i]) / rateMean) || 0) - 1; }
	        );
	    };

	    /**
	     * Renders a label, indicator and a chart.
	     * @private
	     * @method status
	     * @param {RenderingContext} context
	     * @param {number} x
	     * @param {number} y
	     * @param {number} width
	     * @param {number} height
	     * @param {number} count
	     * @param {string} label
	     * @param {string} indicator
	     * @param {function} plotY
	     */
	    Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
	        // background
	        context.strokeStyle = '#888';
	        context.fillStyle = '#444';
	        context.lineWidth = 1;
	        context.fillRect(x, y + 7, width, 1);

	        // chart
	        context.beginPath();
	        context.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));
	        for (var i = 0; i < width; i += 1) {
	            context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));
	        }
	        context.stroke();

	        // indicator
	        context.fillStyle = 'hsl(' + Common.clamp(25 + 95 * indicator, 0, 120) + ',100%,60%)';
	        context.fillRect(x, y - 7, 4, 4);

	        // label
	        context.font = '12px Arial';
	        context.textBaseline = 'middle';
	        context.textAlign = 'right';
	        context.fillStyle = '#eee';
	        context.fillText(label, x + width, y - 5);
	    };

	    /**
	     * Description
	     * @private
	     * @method constraints
	     * @param {constraint[]} constraints
	     * @param {RenderingContext} context
	     */
	    Render.constraints = function(constraints, context) {
	        var c = context;

	        for (var i = 0; i < constraints.length; i++) {
	            var constraint = constraints[i];

	            if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
	                continue;

	            var bodyA = constraint.bodyA,
	                bodyB = constraint.bodyB,
	                start,
	                end;

	            if (bodyA) {
	                start = Vector.add(bodyA.position, constraint.pointA);
	            } else {
	                start = constraint.pointA;
	            }

	            if (constraint.render.type === 'pin') {
	                c.beginPath();
	                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
	                c.closePath();
	            } else {
	                if (bodyB) {
	                    end = Vector.add(bodyB.position, constraint.pointB);
	                } else {
	                    end = constraint.pointB;
	                }

	                c.beginPath();
	                c.moveTo(start.x, start.y);

	                if (constraint.render.type === 'spring') {
	                    var delta = Vector.sub(end, start),
	                        normal = Vector.perp(Vector.normalise(delta)),
	                        coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)),
	                        offset;

	                    for (var j = 1; j < coils; j += 1) {
	                        offset = j % 2 === 0 ? 1 : -1;

	                        c.lineTo(
	                            start.x + delta.x * (j / coils) + normal.x * offset * 4,
	                            start.y + delta.y * (j / coils) + normal.y * offset * 4
	                        );
	                    }
	                }

	                c.lineTo(end.x, end.y);
	            }

	            if (constraint.render.lineWidth) {
	                c.lineWidth = constraint.render.lineWidth;
	                c.strokeStyle = constraint.render.strokeStyle;
	                c.stroke();
	            }

	            if (constraint.render.anchors) {
	                c.fillStyle = constraint.render.strokeStyle;
	                c.beginPath();
	                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
	                c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
	                c.closePath();
	                c.fill();
	            }
	        }
	    };

	    /**
	     * Description
	     * @private
	     * @method bodies
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodies = function(render, bodies, context) {
	        var c = context;
	            render.engine;
	            var options = render.options,
	            showInternalEdges = options.showInternalEdges || !options.wireframes,
	            body,
	            part,
	            i,
	            k;

	        for (i = 0; i < bodies.length; i++) {
	            body = bodies[i];

	            if (!body.render.visible)
	                continue;

	            // handle compound parts
	            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
	                part = body.parts[k];

	                if (!part.render.visible)
	                    continue;

	                if (options.showSleeping && body.isSleeping) {
	                    c.globalAlpha = 0.5 * part.render.opacity;
	                } else if (part.render.opacity !== 1) {
	                    c.globalAlpha = part.render.opacity;
	                }

	                if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
	                    // part sprite
	                    var sprite = part.render.sprite,
	                        texture = _getTexture(render, sprite.texture);

	                    c.translate(part.position.x, part.position.y);
	                    c.rotate(part.angle);

	                    c.drawImage(
	                        texture,
	                        texture.width * -sprite.xOffset * sprite.xScale,
	                        texture.height * -sprite.yOffset * sprite.yScale,
	                        texture.width * sprite.xScale,
	                        texture.height * sprite.yScale
	                    );

	                    // revert translation, hopefully faster than save / restore
	                    c.rotate(-part.angle);
	                    c.translate(-part.position.x, -part.position.y);
	                } else {
	                    // part polygon
	                    if (part.circleRadius) {
	                        c.beginPath();
	                        c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
	                    } else {
	                        c.beginPath();
	                        c.moveTo(part.vertices[0].x, part.vertices[0].y);

	                        for (var j = 1; j < part.vertices.length; j++) {
	                            if (!part.vertices[j - 1].isInternal || showInternalEdges) {
	                                c.lineTo(part.vertices[j].x, part.vertices[j].y);
	                            } else {
	                                c.moveTo(part.vertices[j].x, part.vertices[j].y);
	                            }

	                            if (part.vertices[j].isInternal && !showInternalEdges) {
	                                c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
	                            }
	                        }

	                        c.lineTo(part.vertices[0].x, part.vertices[0].y);
	                        c.closePath();
	                    }

	                    if (!options.wireframes) {
	                        c.fillStyle = part.render.fillStyle;

	                        if (part.render.lineWidth) {
	                            c.lineWidth = part.render.lineWidth;
	                            c.strokeStyle = part.render.strokeStyle;
	                            c.stroke();
	                        }

	                        c.fill();
	                    } else {
	                        c.lineWidth = 1;
	                        c.strokeStyle = '#bbb';
	                        c.stroke();
	                    }
	                }

	                c.globalAlpha = 1;
	            }
	        }
	    };

	    /**
	     * Optimised method for drawing body wireframes in one pass
	     * @private
	     * @method bodyWireframes
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyWireframes = function(render, bodies, context) {
	        var c = context,
	            showInternalEdges = render.options.showInternalEdges,
	            body,
	            part,
	            i,
	            j,
	            k;

	        c.beginPath();

	        // render all bodies
	        for (i = 0; i < bodies.length; i++) {
	            body = bodies[i];

	            if (!body.render.visible)
	                continue;

	            // handle compound parts
	            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
	                part = body.parts[k];

	                c.moveTo(part.vertices[0].x, part.vertices[0].y);

	                for (j = 1; j < part.vertices.length; j++) {
	                    if (!part.vertices[j - 1].isInternal || showInternalEdges) {
	                        c.lineTo(part.vertices[j].x, part.vertices[j].y);
	                    } else {
	                        c.moveTo(part.vertices[j].x, part.vertices[j].y);
	                    }

	                    if (part.vertices[j].isInternal && !showInternalEdges) {
	                        c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
	                    }
	                }

	                c.lineTo(part.vertices[0].x, part.vertices[0].y);
	            }
	        }

	        c.lineWidth = 1;
	        c.strokeStyle = '#bbb';
	        c.stroke();
	    };

	    /**
	     * Optimised method for drawing body convex hull wireframes in one pass
	     * @private
	     * @method bodyConvexHulls
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyConvexHulls = function(render, bodies, context) {
	        var c = context,
	            body,
	            i,
	            j;

	        c.beginPath();

	        // render convex hulls
	        for (i = 0; i < bodies.length; i++) {
	            body = bodies[i];

	            if (!body.render.visible || body.parts.length === 1)
	                continue;

	            c.moveTo(body.vertices[0].x, body.vertices[0].y);

	            for (j = 1; j < body.vertices.length; j++) {
	                c.lineTo(body.vertices[j].x, body.vertices[j].y);
	            }

	            c.lineTo(body.vertices[0].x, body.vertices[0].y);
	        }

	        c.lineWidth = 1;
	        c.strokeStyle = 'rgba(255,255,255,0.2)';
	        c.stroke();
	    };

	    /**
	     * Renders body vertex numbers.
	     * @private
	     * @method vertexNumbers
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.vertexNumbers = function(render, bodies, context) {
	        var c = context,
	            i,
	            j,
	            k;

	        for (i = 0; i < bodies.length; i++) {
	            var parts = bodies[i].parts;
	            for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
	                var part = parts[k];
	                for (j = 0; j < part.vertices.length; j++) {
	                    c.fillStyle = 'rgba(255,255,255,0.2)';
	                    c.fillText(i + '_' + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
	                }
	            }
	        }
	    };

	    /**
	     * Renders mouse position.
	     * @private
	     * @method mousePosition
	     * @param {render} render
	     * @param {mouse} mouse
	     * @param {RenderingContext} context
	     */
	    Render.mousePosition = function(render, mouse, context) {
	        var c = context;
	        c.fillStyle = 'rgba(255,255,255,0.8)';
	        c.fillText(mouse.position.x + '  ' + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
	    };

	    /**
	     * Draws body bounds
	     * @private
	     * @method bodyBounds
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyBounds = function(render, bodies, context) {
	        var c = context;
	            render.engine;
	            var options = render.options;

	        c.beginPath();

	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i];

	            if (body.render.visible) {
	                var parts = bodies[i].parts;
	                for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
	                    var part = parts[j];
	                    c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
	                }
	            }
	        }

	        if (options.wireframes) {
	            c.strokeStyle = 'rgba(255,255,255,0.08)';
	        } else {
	            c.strokeStyle = 'rgba(0,0,0,0.1)';
	        }

	        c.lineWidth = 1;
	        c.stroke();
	    };

	    /**
	     * Draws body angle indicators and axes
	     * @private
	     * @method bodyAxes
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyAxes = function(render, bodies, context) {
	        var c = context;
	            render.engine;
	            var options = render.options,
	            part,
	            i,
	            j,
	            k;

	        c.beginPath();

	        for (i = 0; i < bodies.length; i++) {
	            var body = bodies[i],
	                parts = body.parts;

	            if (!body.render.visible)
	                continue;

	            if (options.showAxes) {
	                // render all axes
	                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
	                    part = parts[j];
	                    for (k = 0; k < part.axes.length; k++) {
	                        var axis = part.axes[k];
	                        c.moveTo(part.position.x, part.position.y);
	                        c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
	                    }
	                }
	            } else {
	                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
	                    part = parts[j];
	                    for (k = 0; k < part.axes.length; k++) {
	                        // render a single axis indicator
	                        c.moveTo(part.position.x, part.position.y);
	                        c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length-1].x) / 2,
	                            (part.vertices[0].y + part.vertices[part.vertices.length-1].y) / 2);
	                    }
	                }
	            }
	        }

	        if (options.wireframes) {
	            c.strokeStyle = 'indianred';
	            c.lineWidth = 1;
	        } else {
	            c.strokeStyle = 'rgba(255, 255, 255, 0.4)';
	            c.globalCompositeOperation = 'overlay';
	            c.lineWidth = 2;
	        }

	        c.stroke();
	        c.globalCompositeOperation = 'source-over';
	    };

	    /**
	     * Draws body positions
	     * @private
	     * @method bodyPositions
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyPositions = function(render, bodies, context) {
	        var c = context;
	            render.engine;
	            var options = render.options,
	            body,
	            part,
	            i,
	            k;

	        c.beginPath();

	        // render current positions
	        for (i = 0; i < bodies.length; i++) {
	            body = bodies[i];

	            if (!body.render.visible)
	                continue;

	            // handle compound parts
	            for (k = 0; k < body.parts.length; k++) {
	                part = body.parts[k];
	                c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
	                c.closePath();
	            }
	        }

	        if (options.wireframes) {
	            c.fillStyle = 'indianred';
	        } else {
	            c.fillStyle = 'rgba(0,0,0,0.5)';
	        }
	        c.fill();

	        c.beginPath();

	        // render previous positions
	        for (i = 0; i < bodies.length; i++) {
	            body = bodies[i];
	            if (body.render.visible) {
	                c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
	                c.closePath();
	            }
	        }

	        c.fillStyle = 'rgba(255,165,0,0.8)';
	        c.fill();
	    };

	    /**
	     * Draws body velocity
	     * @private
	     * @method bodyVelocity
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyVelocity = function(render, bodies, context) {
	        var c = context;

	        c.beginPath();

	        for (var i = 0; i < bodies.length; i++) {
	            var body = bodies[i];

	            if (!body.render.visible)
	                continue;

	            var velocity = Body.getVelocity(body);

	            c.moveTo(body.position.x, body.position.y);
	            c.lineTo(body.position.x + velocity.x, body.position.y + velocity.y);
	        }

	        c.lineWidth = 3;
	        c.strokeStyle = 'cornflowerblue';
	        c.stroke();
	    };

	    /**
	     * Draws body ids
	     * @private
	     * @method bodyIds
	     * @param {render} render
	     * @param {body[]} bodies
	     * @param {RenderingContext} context
	     */
	    Render.bodyIds = function(render, bodies, context) {
	        var c = context,
	            i,
	            j;

	        for (i = 0; i < bodies.length; i++) {
	            if (!bodies[i].render.visible)
	                continue;

	            var parts = bodies[i].parts;
	            for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
	                var part = parts[j];
	                c.font = "12px Arial";
	                c.fillStyle = 'rgba(255,255,255,0.5)';
	                c.fillText(part.id, part.position.x + 10, part.position.y - 10);
	            }
	        }
	    };

	    /**
	     * Description
	     * @private
	     * @method collisions
	     * @param {render} render
	     * @param {pair[]} pairs
	     * @param {RenderingContext} context
	     */
	    Render.collisions = function(render, pairs, context) {
	        var c = context,
	            options = render.options,
	            pair,
	            collision,
	            i,
	            j;

	        c.beginPath();

	        // render collision positions
	        for (i = 0; i < pairs.length; i++) {
	            pair = pairs[i];

	            if (!pair.isActive)
	                continue;

	            collision = pair.collision;
	            for (j = 0; j < pair.activeContacts.length; j++) {
	                var contact = pair.activeContacts[j],
	                    vertex = contact.vertex;
	                c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
	            }
	        }

	        if (options.wireframes) {
	            c.fillStyle = 'rgba(255,255,255,0.7)';
	        } else {
	            c.fillStyle = 'orange';
	        }
	        c.fill();

	        c.beginPath();

	        // render collision normals
	        for (i = 0; i < pairs.length; i++) {
	            pair = pairs[i];

	            if (!pair.isActive)
	                continue;

	            collision = pair.collision;

	            if (pair.activeContacts.length > 0) {
	                var normalPosX = pair.activeContacts[0].vertex.x,
	                    normalPosY = pair.activeContacts[0].vertex.y;

	                if (pair.activeContacts.length === 2) {
	                    normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
	                    normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
	                }

	                if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
	                    c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
	                } else {
	                    c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
	                }

	                c.lineTo(normalPosX, normalPosY);
	            }
	        }

	        if (options.wireframes) {
	            c.strokeStyle = 'rgba(255,165,0,0.7)';
	        } else {
	            c.strokeStyle = 'orange';
	        }

	        c.lineWidth = 1;
	        c.stroke();
	    };

	    /**
	     * Description
	     * @private
	     * @method separations
	     * @param {render} render
	     * @param {pair[]} pairs
	     * @param {RenderingContext} context
	     */
	    Render.separations = function(render, pairs, context) {
	        var c = context,
	            options = render.options,
	            pair,
	            collision,
	            bodyA,
	            bodyB,
	            i;

	        c.beginPath();

	        // render separations
	        for (i = 0; i < pairs.length; i++) {
	            pair = pairs[i];

	            if (!pair.isActive)
	                continue;

	            collision = pair.collision;
	            bodyA = collision.bodyA;
	            bodyB = collision.bodyB;

	            var k = 1;

	            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
	            if (bodyB.isStatic) k = 0;

	            c.moveTo(bodyB.position.x, bodyB.position.y);
	            c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);

	            k = 1;

	            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
	            if (bodyA.isStatic) k = 0;

	            c.moveTo(bodyA.position.x, bodyA.position.y);
	            c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
	        }

	        if (options.wireframes) {
	            c.strokeStyle = 'rgba(255,165,0,0.5)';
	        } else {
	            c.strokeStyle = 'orange';
	        }
	        c.stroke();
	    };

	    /**
	     * Description
	     * @private
	     * @method inspector
	     * @param {inspector} inspector
	     * @param {RenderingContext} context
	     */
	    Render.inspector = function(inspector, context) {
	        inspector.engine;
	            var selected = inspector.selected,
	            render = inspector.render,
	            options = render.options,
	            bounds;

	        if (options.hasBounds) {
	            var boundsWidth = render.bounds.max.x - render.bounds.min.x,
	                boundsHeight = render.bounds.max.y - render.bounds.min.y,
	                boundsScaleX = boundsWidth / render.options.width,
	                boundsScaleY = boundsHeight / render.options.height;

	            context.scale(1 / boundsScaleX, 1 / boundsScaleY);
	            context.translate(-render.bounds.min.x, -render.bounds.min.y);
	        }

	        for (var i = 0; i < selected.length; i++) {
	            var item = selected[i].data;

	            context.translate(0.5, 0.5);
	            context.lineWidth = 1;
	            context.strokeStyle = 'rgba(255,165,0,0.9)';
	            context.setLineDash([1,2]);

	            switch (item.type) {

	            case 'body':

	                // render body selections
	                bounds = item.bounds;
	                context.beginPath();
	                context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3),
	                    Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
	                context.closePath();
	                context.stroke();

	                break;

	            case 'constraint':

	                // render constraint selections
	                var point = item.pointA;
	                if (item.bodyA)
	                    point = item.pointB;
	                context.beginPath();
	                context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
	                context.closePath();
	                context.stroke();

	                break;

	            }

	            context.setLineDash([]);
	            context.translate(-0.5, -0.5);
	        }

	        // render selection region
	        if (inspector.selectStart !== null) {
	            context.translate(0.5, 0.5);
	            context.lineWidth = 1;
	            context.strokeStyle = 'rgba(255,165,0,0.6)';
	            context.fillStyle = 'rgba(255,165,0,0.1)';
	            bounds = inspector.selectBounds;
	            context.beginPath();
	            context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y),
	                Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
	            context.closePath();
	            context.stroke();
	            context.fill();
	            context.translate(-0.5, -0.5);
	        }

	        if (options.hasBounds)
	            context.setTransform(1, 0, 0, 1, 0, 0);
	    };

	    /**
	     * Updates render timing.
	     * @method _updateTiming
	     * @private
	     * @param {render} render
	     * @param {number} time
	     */
	    var _updateTiming = function(render, time) {
	        var engine = render.engine,
	            timing = render.timing,
	            historySize = timing.historySize,
	            timestamp = engine.timing.timestamp;

	        timing.delta = time - timing.lastTime || Render._goodDelta;
	        timing.lastTime = time;

	        timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
	        timing.lastTimestamp = timestamp;

	        timing.deltaHistory.unshift(timing.delta);
	        timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);

	        timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
	        timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);

	        timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
	        timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);

	        timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
	        timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);

	        timing.elapsedHistory.unshift(timing.lastElapsed);
	        timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
	    };

	    /**
	     * Returns the mean value of the given numbers.
	     * @method _mean
	     * @private
	     * @param {Number[]} values
	     * @return {Number} the mean of given values
	     */
	    var _mean = function(values) {
	        var result = 0;
	        for (var i = 0; i < values.length; i += 1) {
	            result += values[i];
	        }
	        return (result / values.length) || 0;
	    };

	    /**
	     * @method _createCanvas
	     * @private
	     * @param {} width
	     * @param {} height
	     * @return canvas
	     */
	    var _createCanvas = function(width, height) {
	        var canvas = document.createElement('canvas');
	        canvas.width = width;
	        canvas.height = height;
	        canvas.oncontextmenu = function() { return false; };
	        canvas.onselectstart = function() { return false; };
	        return canvas;
	    };

	    /**
	     * Gets the pixel ratio of the canvas.
	     * @method _getPixelRatio
	     * @private
	     * @param {HTMLElement} canvas
	     * @return {Number} pixel ratio
	     */
	    var _getPixelRatio = function(canvas) {
	        var context = canvas.getContext('2d'),
	            devicePixelRatio = window.devicePixelRatio || 1,
	            backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio
	                                      || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio
	                                      || context.backingStorePixelRatio || 1;

	        return devicePixelRatio / backingStorePixelRatio;
	    };

	    /**
	     * Gets the requested texture (an Image) via its path
	     * @method _getTexture
	     * @private
	     * @param {render} render
	     * @param {string} imagePath
	     * @return {Image} texture
	     */
	    var _getTexture = function(render, imagePath) {
	        var image = render.textures[imagePath];

	        if (image)
	            return image;

	        image = render.textures[imagePath] = new Image();
	        image.src = imagePath;

	        return image;
	    };

	    /**
	     * Applies the background to the canvas using CSS.
	     * @method applyBackground
	     * @private
	     * @param {render} render
	     * @param {string} background
	     */
	    var _applyBackground = function(render, background) {
	        var cssBackground = background;

	        if (/(jpg|gif|png)$/.test(background))
	            cssBackground = 'url(' + background + ')';

	        render.canvas.style.background = cssBackground;
	        render.canvas.style.backgroundSize = "contain";
	        render.currentBackground = background;
	    };

	    /*
	    *
	    *  Events Documentation
	    *
	    */

	    /**
	    * Fired before rendering
	    *
	    * @event beforeRender
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired after rendering
	    *
	    * @event afterRender
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * A back-reference to the `Matter.Render` module.
	     *
	     * @deprecated
	     * @property controller
	     * @type render
	     */

	    /**
	     * A reference to the `Matter.Engine` instance to be used.
	     *
	     * @property engine
	     * @type engine
	     */

	    /**
	     * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
	     *
	     * @property element
	     * @type HTMLElement
	     * @default null
	     */

	    /**
	     * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
	     *
	     * @property canvas
	     * @type HTMLCanvasElement
	     * @default null
	     */

	    /**
	     * A `Bounds` object that specifies the drawing view region.
	     * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
	     * This allows for creating views that can pan or zoom around the scene.
	     * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
	     *
	     * @property bounds
	     * @type bounds
	     */

	    /**
	     * The 2d rendering context from the `render.canvas` element.
	     *
	     * @property context
	     * @type CanvasRenderingContext2D
	     */

	    /**
	     * The sprite texture cache.
	     *
	     * @property textures
	     * @type {}
	     */

	    /**
	     * The mouse to render if `render.options.showMousePosition` is enabled.
	     *
	     * @property mouse
	     * @type mouse
	     * @default null
	     */

	    /**
	     * The configuration options of the renderer.
	     *
	     * @property options
	     * @type {}
	     */

	    /**
	     * The target width in pixels of the `render.canvas` to be created.
	     * See also the `options.pixelRatio` property to change render quality.
	     *
	     * @property options.width
	     * @type number
	     * @default 800
	     */

	    /**
	     * The target height in pixels of the `render.canvas` to be created.
	     * See also the `options.pixelRatio` property to change render quality.
	     *
	     * @property options.height
	     * @type number
	     * @default 600
	     */

	    /**
	     * The [pixel ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) to use when rendering.
	     *
	     * @property options.pixelRatio
	     * @type number
	     * @default 1
	     */

	    /**
	     * A CSS background color string to use when `render.options.wireframes` is disabled.
	     * This may be also set to `'transparent'` or equivalent.
	     *
	     * @property options.background
	     * @type string
	     * @default '#14151f'
	     */

	    /**
	     * A CSS background color string to use when `render.options.wireframes` is enabled.
	     * This may be also set to `'transparent'` or equivalent.
	     *
	     * @property options.wireframeBackground
	     * @type string
	     * @default '#14151f'
	     */

	    /**
	     * A flag that specifies if `render.bounds` should be used when rendering.
	     *
	     * @property options.hasBounds
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable all debug information overlays together.  
	     * This includes and has priority over the values of:
	     *
	     * - `render.options.showStats`
	     * - `render.options.showPerformance`
	     *
	     * @property options.showDebug
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable the engine stats info overlay.  
	     * From left to right, the values shown are:
	     *
	     * - body parts total
	     * - body total
	     * - constraints total
	     * - composites total
	     * - collision pairs total
	     *
	     * @property options.showStats
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable performance charts.  
	     * From left to right, the values shown are:
	     *
	     * - average render frequency (e.g. 60 fps)
	     * - exact engine delta time used for last update (e.g. 16.66ms)
	     * - average engine execution duration (e.g. 5.00ms)
	     * - average render execution duration (e.g. 0.40ms)
	     * - average effective play speed (e.g. '1.00x' is 'real-time')
	     *
	     * Each value is recorded over a fixed sample of past frames (60 frames).
	     *
	     * A chart shown below each value indicates the variance from the average over the sample.
	     * The more stable or fixed the value is the flatter the chart will appear.
	     *
	     * @property options.showPerformance
	     * @type boolean
	     * @default false
	     */
	    
	    /**
	     * A flag to enable or disable rendering entirely.
	     *
	     * @property options.enabled
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to toggle wireframe rendering otherwise solid fill rendering is used.
	     *
	     * @property options.wireframes
	     * @type boolean
	     * @default true
	     */

	    /**
	     * A flag to enable or disable sleeping bodies indicators.
	     *
	     * @property options.showSleeping
	     * @type boolean
	     * @default true
	     */

	    /**
	     * A flag to enable or disable the debug information overlay.
	     *
	     * @property options.showDebug
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable the collision broadphase debug overlay.
	     *
	     * @deprecated no longer implemented
	     * @property options.showBroadphase
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable the body bounds debug overlay.
	     *
	     * @property options.showBounds
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable the body velocity debug overlay.
	     *
	     * @property options.showVelocity
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable the body collisions debug overlay.
	     *
	     * @property options.showCollisions
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable the collision resolver separations debug overlay.
	     *
	     * @property options.showSeparations
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable the body axes debug overlay.
	     *
	     * @property options.showAxes
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable the body positions debug overlay.
	     *
	     * @property options.showPositions
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable the body angle debug overlay.
	     *
	     * @property options.showAngleIndicator
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable the body and part ids debug overlay.
	     *
	     * @property options.showIds
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable the body vertex numbers debug overlay.
	     *
	     * @property options.showVertexNumbers
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable the body convex hulls debug overlay.
	     *
	     * @property options.showConvexHulls
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable the body internal edges debug overlay.
	     *
	     * @property options.showInternalEdges
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A flag to enable or disable the mouse position debug overlay.
	     *
	     * @property options.showMousePosition
	     * @type boolean
	     * @default false
	     */

	})();


	/***/ }),
	/* 27 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Runner` module is an optional utility which provides a game loop, 
	* that handles continuously updating a `Matter.Engine` for you within a browser.
	* It is intended for development and debugging purposes, but may also be suitable for simple games.
	* If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
	* Instead just call `Engine.update(engine, delta)` in your own loop.
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Runner
	*/

	var Runner = {};

	module.exports = Runner;

	var Events = __webpack_require__(5);
	var Engine = __webpack_require__(17);
	var Common = __webpack_require__(0);

	(function() {

	    var _requestAnimationFrame,
	        _cancelAnimationFrame;

	    if (typeof window !== 'undefined') {
	        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
	                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
	   
	        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame 
	                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
	    }

	    if (!_requestAnimationFrame) {
	        var _frameTimeout;

	        _requestAnimationFrame = function(callback){ 
	            _frameTimeout = setTimeout(function() { 
	                callback(Common.now()); 
	            }, 1000 / 60);
	        };

	        _cancelAnimationFrame = function() {
	            clearTimeout(_frameTimeout);
	        };
	    }

	    /**
	     * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
	     * @method create
	     * @param {} options
	     */
	    Runner.create = function(options) {
	        var defaults = {
	            fps: 60,
	            deltaSampleSize: 60,
	            counterTimestamp: 0,
	            frameCounter: 0,
	            deltaHistory: [],
	            timePrev: null,
	            frameRequestId: null,
	            isFixed: false,
	            enabled: true
	        };

	        var runner = Common.extend(defaults, options);

	        runner.delta = runner.delta || 1000 / runner.fps;
	        runner.deltaMin = runner.deltaMin || 1000 / runner.fps;
	        runner.deltaMax = runner.deltaMax || 1000 / (runner.fps * 0.5);
	        runner.fps = 1000 / runner.delta;

	        return runner;
	    };

	    /**
	     * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
	     * @method run
	     * @param {engine} engine
	     */
	    Runner.run = function(runner, engine) {
	        // create runner if engine is first argument
	        if (typeof runner.positionIterations !== 'undefined') {
	            engine = runner;
	            runner = Runner.create();
	        }

	        (function run(time){
	            runner.frameRequestId = _requestAnimationFrame(run);

	            if (time && runner.enabled) {
	                Runner.tick(runner, engine, time);
	            }
	        })();

	        return runner;
	    };

	    /**
	     * A game loop utility that updates the engine and renderer by one step (a 'tick').
	     * Features delta smoothing, time correction and fixed or dynamic timing.
	     * Consider just `Engine.update(engine, delta)` if you're using your own loop.
	     * @method tick
	     * @param {runner} runner
	     * @param {engine} engine
	     * @param {number} time
	     */
	    Runner.tick = function(runner, engine, time) {
	        var timing = engine.timing,
	            delta;

	        if (runner.isFixed) {
	            // fixed timestep
	            delta = runner.delta;
	        } else {
	            // dynamic timestep based on wall clock between calls
	            delta = (time - runner.timePrev) || runner.delta;
	            runner.timePrev = time;

	            // optimistically filter delta over a few frames, to improve stability
	            runner.deltaHistory.push(delta);
	            runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
	            delta = Math.min.apply(null, runner.deltaHistory);

	            // limit delta
	            delta = delta < runner.deltaMin ? runner.deltaMin : delta;
	            delta = delta > runner.deltaMax ? runner.deltaMax : delta;

	            // update engine timing object
	            runner.delta = delta;
	        }

	        // create an event object
	        var event = {
	            timestamp: timing.timestamp
	        };

	        Events.trigger(runner, 'beforeTick', event);

	        // fps counter
	        runner.frameCounter += 1;
	        if (time - runner.counterTimestamp >= 1000) {
	            runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1000);
	            runner.counterTimestamp = time;
	            runner.frameCounter = 0;
	        }

	        Events.trigger(runner, 'tick', event);

	        // update
	        Events.trigger(runner, 'beforeUpdate', event);

	        Engine.update(engine, delta);

	        Events.trigger(runner, 'afterUpdate', event);

	        Events.trigger(runner, 'afterTick', event);
	    };

	    /**
	     * Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
	     * If you wish to only temporarily pause the engine, see `engine.enabled` instead.
	     * @method stop
	     * @param {runner} runner
	     */
	    Runner.stop = function(runner) {
	        _cancelAnimationFrame(runner.frameRequestId);
	    };

	    /**
	     * Alias for `Runner.run`.
	     * @method start
	     * @param {runner} runner
	     * @param {engine} engine
	     */
	    Runner.start = function(runner, engine) {
	        Runner.run(runner, engine);
	    };

	    /*
	    *
	    *  Events Documentation
	    *
	    */

	    /**
	    * Fired at the start of a tick, before any updates to the engine or timing
	    *
	    * @event beforeTick
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired after engine timing updated, but just before update
	    *
	    * @event tick
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired at the end of a tick, after engine update and after rendering
	    *
	    * @event afterTick
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired before update
	    *
	    * @event beforeUpdate
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /**
	    * Fired after update
	    *
	    * @event afterUpdate
	    * @param {} event An event object
	    * @param {number} event.timestamp The engine.timing.timestamp of the event
	    * @param {} event.source The source object of the event
	    * @param {} event.name The name of the event
	    */

	    /*
	    *
	    *  Properties Documentation
	    *
	    */

	    /**
	     * A flag that specifies whether the runner is running or not.
	     *
	     * @property enabled
	     * @type boolean
	     * @default true
	     */

	    /**
	     * A `Boolean` that specifies if the runner should use a fixed timestep (otherwise it is variable).
	     * If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic).
	     * If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
	     *
	     * @property isFixed
	     * @type boolean
	     * @default false
	     */

	    /**
	     * A `Number` that specifies the time step between updates in milliseconds.
	     * If `engine.timing.isFixed` is set to `true`, then `delta` is fixed.
	     * If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
	     *
	     * @property delta
	     * @type number
	     * @default 1000 / 60
	     */

	})();


	/***/ }),
	/* 28 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* This module has now been replaced by `Matter.Collision`.
	*
	* All usage should be migrated to `Matter.Collision`.
	* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
	*
	* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
	*
	* @class SAT
	* @deprecated
	*/

	var SAT = {};

	module.exports = SAT;

	var Collision = __webpack_require__(8);
	var Common = __webpack_require__(0);
	var deprecated = Common.deprecated;

	(function() {

	    /**
	     * Detect collision between two bodies using the Separating Axis Theorem.
	     * @deprecated replaced by Collision.collides
	     * @method collides
	     * @param {body} bodyA
	     * @param {body} bodyB
	     * @return {collision} collision
	     */
	    SAT.collides = function(bodyA, bodyB) {
	        return Collision.collides(bodyA, bodyB);
	    };

	    deprecated(SAT, 'collides', 'SAT.collides ➤ replaced by Collision.collides');

	})();


	/***/ }),
	/* 29 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
	*
	* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
	*
	* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	*
	* @class Svg
	*/

	var Svg = {};

	module.exports = Svg;

	__webpack_require__(1);
	var Common = __webpack_require__(0);

	(function() {

	    /**
	     * Converts an SVG path into an array of vector points.
	     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
	     * See `Bodies.fromVertices` which provides support for this.
	     * Note that this function is not guaranteed to support complex paths (such as those with holes).
	     * You must load the `pathseg.js` polyfill on newer browsers.
	     * @method pathToVertices
	     * @param {SVGPathElement} path
	     * @param {Number} [sampleLength=15]
	     * @return {Vector[]} points
	     */
	    Svg.pathToVertices = function(path, sampleLength) {
	        if (typeof window !== 'undefined' && !('SVGPathSeg' in window)) {
	            Common.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
	        }

	        // https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
	        var i, il, total, point, segment, segments, 
	            segmentsQueue, lastSegment, 
	            lastPoint, segmentIndex, points = [],
	            lx, ly, length = 0, x = 0, y = 0;

	        sampleLength = sampleLength || 15;

	        var addPoint = function(px, py, pathSegType) {
	            // all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
	            var isRelative = pathSegType % 2 === 1 && pathSegType > 1;

	            // when the last point doesn't equal the current point add the current point
	            if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
	                if (lastPoint && isRelative) {
	                    lx = lastPoint.x;
	                    ly = lastPoint.y;
	                } else {
	                    lx = 0;
	                    ly = 0;
	                }

	                var point = {
	                    x: lx + px,
	                    y: ly + py
	                };

	                // set last point
	                if (isRelative || !lastPoint) {
	                    lastPoint = point;
	                }

	                points.push(point);

	                x = lx + px;
	                y = ly + py;
	            }
	        };

	        var addSegmentPoint = function(segment) {
	            var segType = segment.pathSegTypeAsLetter.toUpperCase();

	            // skip path ends
	            if (segType === 'Z') 
	                return;

	            // map segment to x and y
	            switch (segType) {

	            case 'M':
	            case 'L':
	            case 'T':
	            case 'C':
	            case 'S':
	            case 'Q':
	                x = segment.x;
	                y = segment.y;
	                break;
	            case 'H':
	                x = segment.x;
	                break;
	            case 'V':
	                y = segment.y;
	                break;
	            }

	            addPoint(x, y, segment.pathSegType);
	        };

	        // ensure path is absolute
	        Svg._svgPathToAbsolute(path);

	        // get total length
	        total = path.getTotalLength();

	        // queue segments
	        segments = [];
	        for (i = 0; i < path.pathSegList.numberOfItems; i += 1)
	            segments.push(path.pathSegList.getItem(i));

	        segmentsQueue = segments.concat();

	        // sample through path
	        while (length < total) {
	            // get segment at position
	            segmentIndex = path.getPathSegAtLength(length);
	            segment = segments[segmentIndex];

	            // new segment
	            if (segment != lastSegment) {
	                while (segmentsQueue.length && segmentsQueue[0] != segment)
	                    addSegmentPoint(segmentsQueue.shift());

	                lastSegment = segment;
	            }

	            // add points in between when curving
	            // TODO: adaptive sampling
	            switch (segment.pathSegTypeAsLetter.toUpperCase()) {

	            case 'C':
	            case 'T':
	            case 'S':
	            case 'Q':
	            case 'A':
	                point = path.getPointAtLength(length);
	                addPoint(point.x, point.y, 0);
	                break;

	            }

	            // increment by sample value
	            length += sampleLength;
	        }

	        // add remaining segments not passed by sampling
	        for (i = 0, il = segmentsQueue.length; i < il; ++i)
	            addSegmentPoint(segmentsQueue[i]);

	        return points;
	    };

	    Svg._svgPathToAbsolute = function(path) {
	        // http://phrogz.net/convert-svg-path-to-all-absolute-commands
	        // Copyright (c) Gavin Kistner
	        // http://phrogz.net/js/_ReuseLicense.txt
	        // Modifications: tidy formatting and naming
	        var x0, y0, x1, y1, x2, y2, segs = path.pathSegList,
	            x = 0, y = 0, len = segs.numberOfItems;

	        for (var i = 0; i < len; ++i) {
	            var seg = segs.getItem(i),
	                segType = seg.pathSegTypeAsLetter;

	            if (/[MLHVCSQTA]/.test(segType)) {
	                if ('x' in seg) x = seg.x;
	                if ('y' in seg) y = seg.y;
	            } else {
	                if ('x1' in seg) x1 = x + seg.x1;
	                if ('x2' in seg) x2 = x + seg.x2;
	                if ('y1' in seg) y1 = y + seg.y1;
	                if ('y2' in seg) y2 = y + seg.y2;
	                if ('x' in seg) x += seg.x;
	                if ('y' in seg) y += seg.y;

	                switch (segType) {

	                case 'm':
	                    segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
	                    break;
	                case 'l':
	                    segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
	                    break;
	                case 'h':
	                    segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
	                    break;
	                case 'v':
	                    segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
	                    break;
	                case 'c':
	                    segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
	                    break;
	                case 's':
	                    segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
	                    break;
	                case 'q':
	                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
	                    break;
	                case 't':
	                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
	                    break;
	                case 'a':
	                    segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
	                    break;
	                case 'z':
	                case 'Z':
	                    x = x0;
	                    y = y0;
	                    break;

	                }
	            }

	            if (segType == 'M' || segType == 'm') {
	                x0 = x;
	                y0 = y;
	            }
	        }
	    };

	})();

	/***/ }),
	/* 30 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	* This module has now been replaced by `Matter.Composite`.
	*
	* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
	* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
	*
	* The property `world.gravity` has been moved to `engine.gravity`.
	*
	* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
	* Eventually this alias module will be marked as deprecated and then later removed in a future release.
	*
	* @class World
	*/

	var World = {};

	module.exports = World;

	var Composite = __webpack_require__(6);
	__webpack_require__(0);

	(function() {

	    /**
	     * See above, aliases for back compatibility only
	     */
	    World.create = Composite.create;
	    World.add = Composite.add;
	    World.remove = Composite.remove;
	    World.clear = Composite.clear;
	    World.addComposite = Composite.addComposite;
	    World.addBody = Composite.addBody;
	    World.addConstraint = Composite.addConstraint;

	})();


	/***/ })
	/******/ ]);
	});
} (matter));

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
    _defineProperty(this, "_engine", matterExports.Engine.create());
    /**
     * A reference to all of the pixi objects added to the world.
     *
     * @private
     *
     * @property {Array<PhysicsSprite|PhysicsGraphics>}
     */
    _defineProperty(this, "_pixiObjects", []);
    matterExports.Engine.run(this.engine);
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
        return matterExports.World.addBody(_this.engine.world, po.body);
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
        return matterExports.World.remove(_this2.engine.world, po.body);
      });
      this._pixiObjects = this._pixiObjects.filter(function (po) {
        return !pixiObjects.includes(po);
      });
    }
  }]);
  return PixiMatter;
}();

var ENV = /* @__PURE__ */ ((ENV2) => {
  ENV2[ENV2["WEBGL_LEGACY"] = 0] = "WEBGL_LEGACY";
  ENV2[ENV2["WEBGL"] = 1] = "WEBGL";
  ENV2[ENV2["WEBGL2"] = 2] = "WEBGL2";
  return ENV2;
})(ENV || {});
var RENDERER_TYPE = /* @__PURE__ */ ((RENDERER_TYPE2) => {
  RENDERER_TYPE2[RENDERER_TYPE2["UNKNOWN"] = 0] = "UNKNOWN";
  RENDERER_TYPE2[RENDERER_TYPE2["WEBGL"] = 1] = "WEBGL";
  RENDERER_TYPE2[RENDERER_TYPE2["CANVAS"] = 2] = "CANVAS";
  return RENDERER_TYPE2;
})(RENDERER_TYPE || {});
var BUFFER_BITS = /* @__PURE__ */ ((BUFFER_BITS2) => {
  BUFFER_BITS2[BUFFER_BITS2["COLOR"] = 16384] = "COLOR";
  BUFFER_BITS2[BUFFER_BITS2["DEPTH"] = 256] = "DEPTH";
  BUFFER_BITS2[BUFFER_BITS2["STENCIL"] = 1024] = "STENCIL";
  return BUFFER_BITS2;
})(BUFFER_BITS || {});
var BLEND_MODES = /* @__PURE__ */ ((BLEND_MODES2) => {
  BLEND_MODES2[BLEND_MODES2["NORMAL"] = 0] = "NORMAL";
  BLEND_MODES2[BLEND_MODES2["ADD"] = 1] = "ADD";
  BLEND_MODES2[BLEND_MODES2["MULTIPLY"] = 2] = "MULTIPLY";
  BLEND_MODES2[BLEND_MODES2["SCREEN"] = 3] = "SCREEN";
  BLEND_MODES2[BLEND_MODES2["OVERLAY"] = 4] = "OVERLAY";
  BLEND_MODES2[BLEND_MODES2["DARKEN"] = 5] = "DARKEN";
  BLEND_MODES2[BLEND_MODES2["LIGHTEN"] = 6] = "LIGHTEN";
  BLEND_MODES2[BLEND_MODES2["COLOR_DODGE"] = 7] = "COLOR_DODGE";
  BLEND_MODES2[BLEND_MODES2["COLOR_BURN"] = 8] = "COLOR_BURN";
  BLEND_MODES2[BLEND_MODES2["HARD_LIGHT"] = 9] = "HARD_LIGHT";
  BLEND_MODES2[BLEND_MODES2["SOFT_LIGHT"] = 10] = "SOFT_LIGHT";
  BLEND_MODES2[BLEND_MODES2["DIFFERENCE"] = 11] = "DIFFERENCE";
  BLEND_MODES2[BLEND_MODES2["EXCLUSION"] = 12] = "EXCLUSION";
  BLEND_MODES2[BLEND_MODES2["HUE"] = 13] = "HUE";
  BLEND_MODES2[BLEND_MODES2["SATURATION"] = 14] = "SATURATION";
  BLEND_MODES2[BLEND_MODES2["COLOR"] = 15] = "COLOR";
  BLEND_MODES2[BLEND_MODES2["LUMINOSITY"] = 16] = "LUMINOSITY";
  BLEND_MODES2[BLEND_MODES2["NORMAL_NPM"] = 17] = "NORMAL_NPM";
  BLEND_MODES2[BLEND_MODES2["ADD_NPM"] = 18] = "ADD_NPM";
  BLEND_MODES2[BLEND_MODES2["SCREEN_NPM"] = 19] = "SCREEN_NPM";
  BLEND_MODES2[BLEND_MODES2["NONE"] = 20] = "NONE";
  BLEND_MODES2[BLEND_MODES2["SRC_OVER"] = 0] = "SRC_OVER";
  BLEND_MODES2[BLEND_MODES2["SRC_IN"] = 21] = "SRC_IN";
  BLEND_MODES2[BLEND_MODES2["SRC_OUT"] = 22] = "SRC_OUT";
  BLEND_MODES2[BLEND_MODES2["SRC_ATOP"] = 23] = "SRC_ATOP";
  BLEND_MODES2[BLEND_MODES2["DST_OVER"] = 24] = "DST_OVER";
  BLEND_MODES2[BLEND_MODES2["DST_IN"] = 25] = "DST_IN";
  BLEND_MODES2[BLEND_MODES2["DST_OUT"] = 26] = "DST_OUT";
  BLEND_MODES2[BLEND_MODES2["DST_ATOP"] = 27] = "DST_ATOP";
  BLEND_MODES2[BLEND_MODES2["ERASE"] = 26] = "ERASE";
  BLEND_MODES2[BLEND_MODES2["SUBTRACT"] = 28] = "SUBTRACT";
  BLEND_MODES2[BLEND_MODES2["XOR"] = 29] = "XOR";
  return BLEND_MODES2;
})(BLEND_MODES || {});
var DRAW_MODES = /* @__PURE__ */ ((DRAW_MODES2) => {
  DRAW_MODES2[DRAW_MODES2["POINTS"] = 0] = "POINTS";
  DRAW_MODES2[DRAW_MODES2["LINES"] = 1] = "LINES";
  DRAW_MODES2[DRAW_MODES2["LINE_LOOP"] = 2] = "LINE_LOOP";
  DRAW_MODES2[DRAW_MODES2["LINE_STRIP"] = 3] = "LINE_STRIP";
  DRAW_MODES2[DRAW_MODES2["TRIANGLES"] = 4] = "TRIANGLES";
  DRAW_MODES2[DRAW_MODES2["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
  DRAW_MODES2[DRAW_MODES2["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
  return DRAW_MODES2;
})(DRAW_MODES || {});
var FORMATS = /* @__PURE__ */ ((FORMATS2) => {
  FORMATS2[FORMATS2["RGBA"] = 6408] = "RGBA";
  FORMATS2[FORMATS2["RGB"] = 6407] = "RGB";
  FORMATS2[FORMATS2["RG"] = 33319] = "RG";
  FORMATS2[FORMATS2["RED"] = 6403] = "RED";
  FORMATS2[FORMATS2["RGBA_INTEGER"] = 36249] = "RGBA_INTEGER";
  FORMATS2[FORMATS2["RGB_INTEGER"] = 36248] = "RGB_INTEGER";
  FORMATS2[FORMATS2["RG_INTEGER"] = 33320] = "RG_INTEGER";
  FORMATS2[FORMATS2["RED_INTEGER"] = 36244] = "RED_INTEGER";
  FORMATS2[FORMATS2["ALPHA"] = 6406] = "ALPHA";
  FORMATS2[FORMATS2["LUMINANCE"] = 6409] = "LUMINANCE";
  FORMATS2[FORMATS2["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
  FORMATS2[FORMATS2["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
  FORMATS2[FORMATS2["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
  return FORMATS2;
})(FORMATS || {});
var TARGETS = /* @__PURE__ */ ((TARGETS2) => {
  TARGETS2[TARGETS2["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
  TARGETS2[TARGETS2["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
  TARGETS2[TARGETS2["TEXTURE_2D_ARRAY"] = 35866] = "TEXTURE_2D_ARRAY";
  TARGETS2[TARGETS2["TEXTURE_CUBE_MAP_POSITIVE_X"] = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
  TARGETS2[TARGETS2["TEXTURE_CUBE_MAP_NEGATIVE_X"] = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
  TARGETS2[TARGETS2["TEXTURE_CUBE_MAP_POSITIVE_Y"] = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
  TARGETS2[TARGETS2["TEXTURE_CUBE_MAP_NEGATIVE_Y"] = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
  TARGETS2[TARGETS2["TEXTURE_CUBE_MAP_POSITIVE_Z"] = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
  TARGETS2[TARGETS2["TEXTURE_CUBE_MAP_NEGATIVE_Z"] = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
  return TARGETS2;
})(TARGETS || {});
var TYPES = /* @__PURE__ */ ((TYPES2) => {
  TYPES2[TYPES2["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
  TYPES2[TYPES2["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
  TYPES2[TYPES2["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
  TYPES2[TYPES2["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
  TYPES2[TYPES2["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
  TYPES2[TYPES2["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
  TYPES2[TYPES2["UNSIGNED_INT_10F_11F_11F_REV"] = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
  TYPES2[TYPES2["UNSIGNED_INT_2_10_10_10_REV"] = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
  TYPES2[TYPES2["UNSIGNED_INT_24_8"] = 34042] = "UNSIGNED_INT_24_8";
  TYPES2[TYPES2["UNSIGNED_INT_5_9_9_9_REV"] = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
  TYPES2[TYPES2["BYTE"] = 5120] = "BYTE";
  TYPES2[TYPES2["SHORT"] = 5122] = "SHORT";
  TYPES2[TYPES2["INT"] = 5124] = "INT";
  TYPES2[TYPES2["FLOAT"] = 5126] = "FLOAT";
  TYPES2[TYPES2["FLOAT_32_UNSIGNED_INT_24_8_REV"] = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
  TYPES2[TYPES2["HALF_FLOAT"] = 36193] = "HALF_FLOAT";
  return TYPES2;
})(TYPES || {});
var SAMPLER_TYPES = /* @__PURE__ */ ((SAMPLER_TYPES2) => {
  SAMPLER_TYPES2[SAMPLER_TYPES2["FLOAT"] = 0] = "FLOAT";
  SAMPLER_TYPES2[SAMPLER_TYPES2["INT"] = 1] = "INT";
  SAMPLER_TYPES2[SAMPLER_TYPES2["UINT"] = 2] = "UINT";
  return SAMPLER_TYPES2;
})(SAMPLER_TYPES || {});
var SCALE_MODES = /* @__PURE__ */ ((SCALE_MODES2) => {
  SCALE_MODES2[SCALE_MODES2["NEAREST"] = 0] = "NEAREST";
  SCALE_MODES2[SCALE_MODES2["LINEAR"] = 1] = "LINEAR";
  return SCALE_MODES2;
})(SCALE_MODES || {});
var WRAP_MODES = /* @__PURE__ */ ((WRAP_MODES2) => {
  WRAP_MODES2[WRAP_MODES2["CLAMP"] = 33071] = "CLAMP";
  WRAP_MODES2[WRAP_MODES2["REPEAT"] = 10497] = "REPEAT";
  WRAP_MODES2[WRAP_MODES2["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
  return WRAP_MODES2;
})(WRAP_MODES || {});
var MIPMAP_MODES = /* @__PURE__ */ ((MIPMAP_MODES2) => {
  MIPMAP_MODES2[MIPMAP_MODES2["OFF"] = 0] = "OFF";
  MIPMAP_MODES2[MIPMAP_MODES2["POW2"] = 1] = "POW2";
  MIPMAP_MODES2[MIPMAP_MODES2["ON"] = 2] = "ON";
  MIPMAP_MODES2[MIPMAP_MODES2["ON_MANUAL"] = 3] = "ON_MANUAL";
  return MIPMAP_MODES2;
})(MIPMAP_MODES || {});
var ALPHA_MODES = /* @__PURE__ */ ((ALPHA_MODES2) => {
  ALPHA_MODES2[ALPHA_MODES2["NPM"] = 0] = "NPM";
  ALPHA_MODES2[ALPHA_MODES2["UNPACK"] = 1] = "UNPACK";
  ALPHA_MODES2[ALPHA_MODES2["PMA"] = 2] = "PMA";
  ALPHA_MODES2[ALPHA_MODES2["NO_PREMULTIPLIED_ALPHA"] = 0] = "NO_PREMULTIPLIED_ALPHA";
  ALPHA_MODES2[ALPHA_MODES2["PREMULTIPLY_ON_UPLOAD"] = 1] = "PREMULTIPLY_ON_UPLOAD";
  ALPHA_MODES2[ALPHA_MODES2["PREMULTIPLIED_ALPHA"] = 2] = "PREMULTIPLIED_ALPHA";
  return ALPHA_MODES2;
})(ALPHA_MODES || {});
var CLEAR_MODES = /* @__PURE__ */ ((CLEAR_MODES2) => {
  CLEAR_MODES2[CLEAR_MODES2["NO"] = 0] = "NO";
  CLEAR_MODES2[CLEAR_MODES2["YES"] = 1] = "YES";
  CLEAR_MODES2[CLEAR_MODES2["AUTO"] = 2] = "AUTO";
  CLEAR_MODES2[CLEAR_MODES2["BLEND"] = 0] = "BLEND";
  CLEAR_MODES2[CLEAR_MODES2["CLEAR"] = 1] = "CLEAR";
  CLEAR_MODES2[CLEAR_MODES2["BLIT"] = 2] = "BLIT";
  return CLEAR_MODES2;
})(CLEAR_MODES || {});
var GC_MODES = /* @__PURE__ */ ((GC_MODES2) => {
  GC_MODES2[GC_MODES2["AUTO"] = 0] = "AUTO";
  GC_MODES2[GC_MODES2["MANUAL"] = 1] = "MANUAL";
  return GC_MODES2;
})(GC_MODES || {});
var PRECISION = /* @__PURE__ */ ((PRECISION2) => {
  PRECISION2["LOW"] = "lowp";
  PRECISION2["MEDIUM"] = "mediump";
  PRECISION2["HIGH"] = "highp";
  return PRECISION2;
})(PRECISION || {});
var MASK_TYPES = /* @__PURE__ */ ((MASK_TYPES2) => {
  MASK_TYPES2[MASK_TYPES2["NONE"] = 0] = "NONE";
  MASK_TYPES2[MASK_TYPES2["SCISSOR"] = 1] = "SCISSOR";
  MASK_TYPES2[MASK_TYPES2["STENCIL"] = 2] = "STENCIL";
  MASK_TYPES2[MASK_TYPES2["SPRITE"] = 3] = "SPRITE";
  MASK_TYPES2[MASK_TYPES2["COLOR"] = 4] = "COLOR";
  return MASK_TYPES2;
})(MASK_TYPES || {});
var MSAA_QUALITY = /* @__PURE__ */ ((MSAA_QUALITY2) => {
  MSAA_QUALITY2[MSAA_QUALITY2["NONE"] = 0] = "NONE";
  MSAA_QUALITY2[MSAA_QUALITY2["LOW"] = 2] = "LOW";
  MSAA_QUALITY2[MSAA_QUALITY2["MEDIUM"] = 4] = "MEDIUM";
  MSAA_QUALITY2[MSAA_QUALITY2["HIGH"] = 8] = "HIGH";
  return MSAA_QUALITY2;
})(MSAA_QUALITY || {});
var BUFFER_TYPE = /* @__PURE__ */ ((BUFFER_TYPE2) => {
  BUFFER_TYPE2[BUFFER_TYPE2["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
  BUFFER_TYPE2[BUFFER_TYPE2["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
  BUFFER_TYPE2[BUFFER_TYPE2["UNIFORM_BUFFER"] = 35345] = "UNIFORM_BUFFER";
  return BUFFER_TYPE2;
})(BUFFER_TYPE || {});

const BrowserAdapter = {
  createCanvas: (width, height) => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
  },
  getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
  getWebGLRenderingContext: () => WebGLRenderingContext,
  getNavigator: () => navigator,
  getBaseUrl: () => document.baseURI ?? window.location.href,
  getFontFaceSet: () => document.fonts,
  fetch: (url, options) => fetch(url, options),
  parseXML: (xml) => {
    const parser = new DOMParser();
    return parser.parseFromString(xml, "text/xml");
  }
};

const settings = {
  ADAPTER: BrowserAdapter,
  RESOLUTION: 1,
  CREATE_IMAGE_BITMAP: false,
  ROUND_PIXELS: false
};

var appleIphone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
var amazonTablet = /Silk/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackBerry = /BlackBerry/i;
var otherBlackBerry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
var isAppleTabletOnIos13 = function (navigator) {
    return (typeof navigator !== 'undefined' &&
        navigator.platform === 'MacIntel' &&
        typeof navigator.maxTouchPoints === 'number' &&
        navigator.maxTouchPoints > 1 &&
        typeof MSStream === 'undefined');
};
function createMatch(userAgent) {
    return function (regex) { return regex.test(userAgent); };
}
function isMobile$1(param) {
    var nav = {
        userAgent: '',
        platform: '',
        maxTouchPoints: 0
    };
    if (!param && typeof navigator !== 'undefined') {
        nav = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
    }
    else if (typeof param === 'string') {
        nav.userAgent = param;
    }
    else if (param && param.userAgent) {
        nav = {
            userAgent: param.userAgent,
            platform: param.platform,
            maxTouchPoints: param.maxTouchPoints || 0
        };
    }
    var userAgent = nav.userAgent;
    var tmp = userAgent.split('[FBAN');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    tmp = userAgent.split('Twitter');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    var match = createMatch(userAgent);
    var result = {
        apple: {
            phone: match(appleIphone) && !match(windowsPhone),
            ipod: match(appleIpod),
            tablet: !match(appleIphone) &&
                (match(appleTablet) || isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone),
            universal: match(appleUniversal),
            device: (match(appleIphone) ||
                match(appleIpod) ||
                match(appleTablet) ||
                match(appleUniversal) ||
                isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone)
        },
        amazon: {
            phone: match(amazonPhone),
            tablet: !match(amazonPhone) && match(amazonTablet),
            device: match(amazonPhone) || match(amazonTablet)
        },
        android: {
            phone: (!match(windowsPhone) && match(amazonPhone)) ||
                (!match(windowsPhone) && match(androidPhone)),
            tablet: !match(windowsPhone) &&
                !match(amazonPhone) &&
                !match(androidPhone) &&
                (match(amazonTablet) || match(androidTablet)),
            device: (!match(windowsPhone) &&
                (match(amazonPhone) ||
                    match(amazonTablet) ||
                    match(androidPhone) ||
                    match(androidTablet))) ||
                match(/\bokhttp\b/i)
        },
        windows: {
            phone: match(windowsPhone),
            tablet: match(windowsTablet),
            device: match(windowsPhone) || match(windowsTablet)
        },
        other: {
            blackberry: match(otherBlackBerry),
            blackberry10: match(otherBlackBerry10),
            opera: match(otherOpera),
            firefox: match(otherFirefox),
            chrome: match(otherChrome),
            device: match(otherBlackBerry) ||
                match(otherBlackBerry10) ||
                match(otherOpera) ||
                match(otherFirefox) ||
                match(otherChrome)
        },
        any: false,
        phone: false,
        tablet: false
    };
    result.any =
        result.apple.device ||
            result.android.device ||
            result.windows.device ||
            result.other.device;
    result.phone =
        result.apple.phone || result.android.phone || result.windows.phone;
    result.tablet =
        result.apple.tablet || result.android.tablet || result.windows.tablet;
    return result;
}

const isMobileCall = isMobile$1.default ?? isMobile$1;
const isMobile = isMobileCall(globalThis.navigator);

settings.RETINA_PREFIX = /@([0-9\.]+)x/;
settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;

var eventemitter3Exports = {};
var eventemitter3 = {
  get exports(){ return eventemitter3Exports; },
  set exports(v){ eventemitter3Exports = v; },
};

(function (module) {

	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @private
	 */
	function Events() {}

	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);

	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}

	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Add a listener for a given event.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} once Specify if the listener is a one-time listener.
	 * @returns {EventEmitter}
	 * @private
	 */
	function addListener(emitter, event, fn, context, once) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('The listener must be a function');
	  }

	  var listener = new EE(fn, context || emitter, once)
	    , evt = prefix ? prefix + event : event;

	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
	  else emitter._events[evt] = [emitter._events[evt], listener];

	  return emitter;
	}

	/**
	 * Clear event by name.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} evt The Event name.
	 * @private
	 */
	function clearEvent(emitter, evt) {
	  if (--emitter._eventsCount === 0) emitter._events = new Events();
	  else delete emitter._events[evt];
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;

	  if (this._eventsCount === 0) return names;

	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Array} The registered listeners.
	 * @public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  var evt = prefix ? prefix + event : event
	    , handlers = this._events[evt];

	  if (!handlers) return [];
	  if (handlers.fn) return [handlers.fn];

	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
	    ee[i] = handlers[i].fn;
	  }

	  return ee;
	};

	/**
	 * Return the number of listeners listening to a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Number} The number of listeners.
	 * @public
	 */
	EventEmitter.prototype.listenerCount = function listenerCount(event) {
	  var evt = prefix ? prefix + event : event
	    , listeners = this._events[evt];

	  if (!listeners) return 0;
	  if (listeners.fn) return 1;
	  return listeners.length;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Add a listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  return addListener(this, event, fn, context, false);
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  return addListener(this, event, fn, context, true);
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {*} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    clearEvent(this, evt);
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	      listeners.fn === fn &&
	      (!once || listeners.once) &&
	      (!context || listeners.context === context)
	    ) {
	      clearEvent(this, evt);
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	        listeners[i].fn !== fn ||
	        (once && !listeners[i].once) ||
	        (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else clearEvent(this, evt);
	  }

	  return this;
	};

	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {(String|Symbol)} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) clearEvent(this, evt);
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;

	//
	// Expose the module.
	//
	{
	  module.exports = EventEmitter;
	}
} (eventemitter3));

var earcutExports = {};
var earcut$1 = {
  get exports(){ return earcutExports; },
  set exports(v){ earcutExports = v; },
};

earcut$1.exports = earcut;
earcutExports.default = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode || outerNode.next === outerNode.prev) return triangles;

    var minX, minY, maxX, maxY, x, y, invSize;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 32767 / invSize : 0;
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim | 0);
            triangles.push(ear.i / dim | 0);
            triangles.push(next.i / dim | 0);

            removeNode(ear);

            // skipping the next vertex leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;

    // triangle bbox; min & max are calculated like this for speed
    var x0 = ax < bx ? (ax < cx ? ax : cx) : (bx < cx ? bx : cx),
        y0 = ay < by ? (ay < cy ? ay : cy) : (by < cy ? by : cy),
        x1 = ax > bx ? (ax > cx ? ax : cx) : (bx > cx ? bx : cx),
        y1 = ay > by ? (ay > cy ? ay : cy) : (by > cy ? by : cy);

    var p = c.next;
    while (p !== a) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 &&
            pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, invSize) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;

    // triangle bbox; min & max are calculated like this for speed
    var x0 = ax < bx ? (ax < cx ? ax : cx) : (bx < cx ? bx : cx),
        y0 = ay < by ? (ay < cy ? ay : cy) : (by < cy ? by : cy),
        x1 = ax > bx ? (ax > cx ? ax : cx) : (bx > cx ? bx : cx),
        y1 = ay > by ? (ay > cy ? ay : cy) : (by > cy ? by : cy);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(x0, y0, minX, minY, invSize),
        maxZ = zOrder(x1, y1, minX, minY, invSize);

    var p = ear.prevZ,
        n = ear.nextZ;

    // look for points inside the triangle in both directions
    while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c &&
            pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;

        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c &&
            pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    // look for remaining points in decreasing z-order
    while (p && p.z >= minZ) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c &&
            pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    // look for remaining points in increasing z-order
    while (n && n.z <= maxZ) {
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c &&
            pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim | 0);
            triangles.push(p.i / dim | 0);
            triangles.push(b.i / dim | 0);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return filterPoints(p);
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, invSize, 0);
                earcutLinked(c, triangles, dim, minX, minY, invSize, 0);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        outerNode = eliminateHole(queue[i], outerNode);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    var bridge = findHoleBridge(hole, outerNode);
    if (!bridge) {
        return outerNode;
    }

    var bridgeReverse = splitPolygon(bridge, hole);

    // filter collinear points around the cuts
    filterPoints(bridgeReverse, bridgeReverse.next);
    return filterPoints(bridge, bridge.next);
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                m = p.x < p.next.x ? p : p.next;
                if (x === hx) return m; // hole touches outer segment; pick leftmost endpoint
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m;

    do {
        if (hx >= p.x && p.x >= mx && hx !== p.x &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if (locallyInside(p, hole) &&
                (tan < tanMin || (tan === tanMin && (p.x > m.x || (p.x === m.x && sectorContainsSector(m, p)))))) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    } while (p !== stop);

    return m;
}

// whether sector in vertex m contains sector in vertex p in the same coordinates
function sectorContainsSector(m, p) {
    return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
    var p = start;
    do {
        if (p.z === 0) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = (x - minX) * invSize | 0;
    y = (y - minY) * invSize | 0;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) >= (ax - px) * (cy - py) &&
           (ax - px) * (by - py) >= (bx - px) * (ay - py) &&
           (bx - px) * (cy - py) >= (cx - px) * (by - py);
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
           (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
            (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
            equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    var o1 = sign$1(area(p1, q1, p2));
    var o2 = sign$1(area(p1, q1, q2));
    var o3 = sign$1(area(p2, q2, p1));
    var o4 = sign$1(area(p2, q2, q1));

    if (o1 !== o2 && o3 !== o4) return true; // general case

    if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
    if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
    if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
    if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

    return false;
}

// for collinear points p, q, r, check if point q lies on segment pr
function onSegment(p, q, r) {
    return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}

function sign$1(num) {
    return num > 0 ? 1 : num < 0 ? -1 : 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertex index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertex nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = 0;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};

var punycodeExports = {};
var punycode$1 = {
  get exports(){ return punycodeExports; },
  set exports(v){ punycodeExports = v; },
};

/*! https://mths.be/punycode v1.3.2 by @mathias */

(function (module, exports) {
(function(root) {

		/** Detect free variables */
		var freeExports = exports &&
			!exports.nodeType && exports;
		var freeModule = module &&
			!module.nodeType && module;
		var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(commonjsGlobal));
} (punycode$1, punycodeExports));

var util$1 = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};

var querystring$1 = {};

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var decode = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

var encode = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

querystring$1.decode = querystring$1.parse = decode;
querystring$1.encode = querystring$1.stringify = encode;

var punycode = punycodeExports;
var util = util$1;

var parse = urlParse;
var resolve = urlResolve;
var format = urlFormat;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = querystring$1;

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

const url = {
  parse: parse,
  format: format,
  resolve: resolve
};

const warnings = {};
function deprecation(version, message, ignoreDepth = 3) {
  if (warnings[message]) {
    return;
  }
  let stack = new Error().stack;
  if (typeof stack === "undefined") {
    console.warn("PixiJS Deprecation Warning: ", `${message}
Deprecated since v${version}`);
  } else {
    stack = stack.split("\n").splice(ignoreDepth).join("\n");
    if (console.groupCollapsed) {
      console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${message}
Deprecated since v${version}`);
      console.warn(stack);
      console.groupEnd();
    } else {
      console.warn("PixiJS Deprecation Warning: ", `${message}
Deprecated since v${version}`);
      console.warn(stack);
    }
  }
  warnings[message] = true;
}

let supported;
function isWebGLSupported() {
  if (typeof supported === "undefined") {
    supported = function supported2() {
      const contextOptions = {
        stencil: true,
        failIfMajorPerformanceCaveat: settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
      };
      try {
        if (!settings.ADAPTER.getWebGLRenderingContext()) {
          return false;
        }
        const canvas = settings.ADAPTER.createCanvas();
        let gl = canvas.getContext("webgl", contextOptions) || canvas.getContext("experimental-webgl", contextOptions);
        const success = !!gl?.getContextAttributes()?.stencil;
        if (gl) {
          const loseContext = gl.getExtension("WEBGL_lose_context");
          if (loseContext) {
            loseContext.loseContext();
          }
        }
        gl = null;
        return success;
      } catch (e) {
        return false;
      }
    }();
  }
  return supported;
}

var r={grad:.9,turn:360,rad:360/(2*Math.PI)},t=function(r){return "string"==typeof r?r.length>0:"number"==typeof r},n=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*r)/n+0},e=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),r>n?n:r>t?r:t},u=function(r){return (r=isFinite(r)?r%360:0)>0?r:r+360},a=function(r){return {r:e(r.r,0,255),g:e(r.g,0,255),b:e(r.b,0,255),a:e(r.a)}},o=function(r){return {r:n(r.r),g:n(r.g),b:n(r.b),a:n(r.a,3)}},i=/^#([0-9a-f]{3,8})$/i,s=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},h=function(r){var t=r.r,n=r.g,e=r.b,u=r.a,a=Math.max(t,n,e),o=a-Math.min(t,n,e),i=o?a===t?(n-e)/o:a===n?2+(e-t)/o:4+(t-n)/o:0;return {h:60*(i<0?i+6:i),s:a?o/a*100:0,v:a/255*100,a:u}},b=function(r){var t=r.h,n=r.s,e=r.v,u=r.a;t=t/360*6,n/=100,e/=100;var a=Math.floor(t),o=e*(1-n),i=e*(1-(t-a)*n),s=e*(1-(1-t+a)*n),h=a%6;return {r:255*[e,i,o,o,s,e][h],g:255*[s,e,e,i,o,o][h],b:255*[o,o,s,e,e,i][h],a:u}},g=function(r){return {h:u(r.h),s:e(r.s,0,100),l:e(r.l,0,100),a:e(r.a)}},d=function(r){return {h:n(r.h),s:n(r.s),l:n(r.l),a:n(r.a,3)}},f=function(r){return b((n=(t=r).s,{h:t.h,s:(n*=((e=t.l)<50?e:100-e)/100)>0?2*n/(e+n)*100:0,v:e+n,a:t.a}));var t,n,e;},c=function(r){return {h:(t=h(r)).h,s:(u=(200-(n=t.s))*(e=t.v)/100)>0&&u<200?n*e/100/(u<=100?u:200-u)*100:0,l:u/2,a:t.a};var t,n,e,u;},l=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,p=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,v=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(r){var t=i.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:4===r.length?n(parseInt(r[3]+r[3],16)/255,2):1}:6===r.length||8===r.length?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:8===r.length?n(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=v.exec(r)||m.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:a({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(t){var n=l.exec(t)||p.exec(t);if(!n)return null;var e,u,a=g({h:(e=n[1],u=n[2],void 0===u&&(u="deg"),Number(e)*(r[u]||1)),s:Number(n[3]),l:Number(n[4]),a:void 0===n[5]?1:Number(n[5])/(n[6]?100:1)});return f(a)},"hsl"]],object:[[function(r){var n=r.r,e=r.g,u=r.b,o=r.a,i=void 0===o?1:o;return t(n)&&t(e)&&t(u)?a({r:Number(n),g:Number(e),b:Number(u),a:Number(i)}):null},"rgb"],[function(r){var n=r.h,e=r.s,u=r.l,a=r.a,o=void 0===a?1:a;if(!t(n)||!t(e)||!t(u))return null;var i=g({h:Number(n),s:Number(e),l:Number(u),a:Number(o)});return f(i)},"hsl"],[function(r){var n=r.h,a=r.s,o=r.v,i=r.a,s=void 0===i?1:i;if(!t(n)||!t(a)||!t(o))return null;var h=function(r){return {h:u(r.h),s:e(r.s,0,100),v:e(r.v,0,100),a:e(r.a)}}({h:Number(n),s:Number(a),v:Number(o),a:Number(s)});return b(h)},"hsv"]]},N=function(r,t){for(var n=0;n<t.length;n++){var e=t[n][0](r);if(e)return [e,t[n][1]]}return [null,void 0]},x=function(r){return "string"==typeof r?N(r.trim(),y.string):"object"==typeof r&&null!==r?N(r,y.object):[null,void 0]},M=function(r,t){var n=c(r);return {h:n.h,s:e(n.s+100*t,0,100),l:n.l,a:n.a}},H=function(r){return (299*r.r+587*r.g+114*r.b)/1e3/255},$=function(r,t){var n=c(r);return {h:n.h,s:n.s,l:e(n.l+100*t,0,100),a:n.a}},j=function(){function r(r){this.parsed=x(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1};}return r.prototype.isValid=function(){return null!==this.parsed},r.prototype.brightness=function(){return n(H(this.rgba),2)},r.prototype.isDark=function(){return H(this.rgba)<.5},r.prototype.isLight=function(){return H(this.rgba)>=.5},r.prototype.toHex=function(){return r=o(this.rgba),t=r.r,e=r.g,u=r.b,i=(a=r.a)<1?s(n(255*a)):"","#"+s(t)+s(e)+s(u)+i;var r,t,e,u,a,i;},r.prototype.toRgb=function(){return o(this.rgba)},r.prototype.toRgbString=function(){return r=o(this.rgba),t=r.r,n=r.g,e=r.b,(u=r.a)<1?"rgba("+t+", "+n+", "+e+", "+u+")":"rgb("+t+", "+n+", "+e+")";var r,t,n,e,u;},r.prototype.toHsl=function(){return d(c(this.rgba))},r.prototype.toHslString=function(){return r=d(c(this.rgba)),t=r.h,n=r.s,e=r.l,(u=r.a)<1?"hsla("+t+", "+n+"%, "+e+"%, "+u+")":"hsl("+t+", "+n+"%, "+e+"%)";var r,t,n,e,u;},r.prototype.toHsv=function(){return r=h(this.rgba),{h:n(r.h),s:n(r.s),v:n(r.v),a:n(r.a,3)};var r;},r.prototype.invert=function(){return w({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r;},r.prototype.saturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,r))},r.prototype.desaturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,-r))},r.prototype.grayscale=function(){return w(M(this.rgba,-1))},r.prototype.lighten=function(r){return void 0===r&&(r=.1),w($(this.rgba,r))},r.prototype.darken=function(r){return void 0===r&&(r=.1),w($(this.rgba,-r))},r.prototype.rotate=function(r){return void 0===r&&(r=15),this.hue(this.hue()+r)},r.prototype.alpha=function(r){return "number"==typeof r?w({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):n(this.rgba.a,3);var t;},r.prototype.hue=function(r){var t=c(this.rgba);return "number"==typeof r?w({h:r,s:t.s,l:t.l,a:t.a}):n(t.h)},r.prototype.isEqual=function(r){return this.toHex()===w(r).toHex()},r}(),w=function(r){return r instanceof j?r:new j(r)},S=[],k=function(r){r.forEach(function(r){S.indexOf(r)<0&&(r(j,y),S.push(r));});};

function namesPlugin(e,f){var a={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var d in a)r[a[d]]=d;var l={};e.prototype.toName=function(f){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return "transparent";var d,i,n=r[this.toHex()];if(n)return n;if(null==f?void 0:f.closest){var o=this.toRgb(),t=1/0,b="black";if(!l.length)for(var c in a)l[c]=new e(a[c]).toRgb();for(var g in a){var u=(d=o,i=l[g],Math.pow(d.r-i.r,2)+Math.pow(d.g-i.g,2)+Math.pow(d.b-i.b,2));u<t&&(t=u,b=g);}return b}};f.string.push([function(f){var r=f.toLowerCase(),d="transparent"===r?"#0000":a[r];return d?new e(d).toRgb():null},"name"]);}

k([namesPlugin]);
const _Color = class {
  constructor(value = 16777215) {
    this._value = null;
    this._components = new Float32Array(4);
    this._components.fill(1);
    this._int = 16777215;
    this.value = value;
  }
  get red() {
    return this._components[0];
  }
  get green() {
    return this._components[1];
  }
  get blue() {
    return this._components[2];
  }
  get alpha() {
    return this._components[3];
  }
  setValue(value) {
    this.value = value;
    return this;
  }
  set value(value) {
    if (value instanceof _Color) {
      this._value = this.cloneSource(value._value);
      this._int = value._int;
      this._components.set(value._components);
    } else if (value === null) {
      throw new Error("Cannot set PIXI.Color#value to null");
    } else if (this._value === null || !this.isSourceEqual(this._value, value)) {
      this.normalize(value);
      this._value = this.cloneSource(value);
    }
  }
  get value() {
    return this._value;
  }
  cloneSource(value) {
    if (typeof value === "string" || typeof value === "number" || value instanceof Number || value === null) {
      return value;
    } else if (Array.isArray(value) || ArrayBuffer.isView(value)) {
      return value.slice(0);
    } else if (typeof value === "object" && value !== null) {
      return { ...value };
    }
    return value;
  }
  isSourceEqual(value1, value2) {
    const type1 = typeof value1;
    const type2 = typeof value2;
    if (type1 !== type2) {
      return false;
    } else if (type1 === "number" || type1 === "string" || value1 instanceof Number) {
      return value1 === value2;
    } else if (Array.isArray(value1) && Array.isArray(value2) || ArrayBuffer.isView(value1) && ArrayBuffer.isView(value2)) {
      if (value1.length !== value2.length) {
        return false;
      }
      return value1.every((v, i) => v === value2[i]);
    } else if (value1 !== null && value2 !== null) {
      const keys1 = Object.keys(value1);
      const keys2 = Object.keys(value2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      return keys1.every((key) => value1[key] === value2[key]);
    }
    return value1 === value2;
  }
  toRgba() {
    const [r, g, b, a] = this._components;
    return { r, g, b, a };
  }
  toRgb() {
    const [r, g, b] = this._components;
    return { r, g, b };
  }
  toRgbaString() {
    const [r, g, b] = this.toUint8RgbArray();
    return `rgba(${r},${g},${b},${this.alpha})`;
  }
  toUint8RgbArray(out) {
    const [r, g, b] = this._components;
    out = out ?? [];
    out[0] = Math.round(r * 255);
    out[1] = Math.round(g * 255);
    out[2] = Math.round(b * 255);
    return out;
  }
  toRgbArray(out) {
    out = out ?? [];
    const [r, g, b] = this._components;
    out[0] = r;
    out[1] = g;
    out[2] = b;
    return out;
  }
  toNumber() {
    return this._int;
  }
  toLittleEndianNumber() {
    const value = this._int;
    return (value >> 16) + (value & 65280) + ((value & 255) << 16);
  }
  multiply(value) {
    const [r, g, b, a] = _Color.temp.setValue(value)._components;
    this._components[0] *= r;
    this._components[1] *= g;
    this._components[2] *= b;
    this._components[3] *= a;
    this.refreshInt();
    this._value = null;
    return this;
  }
  premultiply(alpha, applyToRGB = true) {
    if (applyToRGB) {
      this._components[0] *= alpha;
      this._components[1] *= alpha;
      this._components[2] *= alpha;
    }
    this._components[3] = alpha;
    this.refreshInt();
    this._value = null;
    return this;
  }
  toPremultiplied(alpha, applyToRGB = true) {
    if (alpha === 1) {
      return (255 << 24) + this._int;
    }
    if (alpha === 0) {
      return applyToRGB ? 0 : this._int;
    }
    let r = this._int >> 16 & 255;
    let g = this._int >> 8 & 255;
    let b = this._int & 255;
    if (applyToRGB) {
      r = r * alpha + 0.5 | 0;
      g = g * alpha + 0.5 | 0;
      b = b * alpha + 0.5 | 0;
    }
    return (alpha * 255 << 24) + (r << 16) + (g << 8) + b;
  }
  toHex() {
    const hexString = this._int.toString(16);
    return `#${"000000".substring(0, 6 - hexString.length) + hexString}`;
  }
  toHexa() {
    const alphaValue = Math.round(this._components[3] * 255);
    const alphaString = alphaValue.toString(16);
    return this.toHex() + "00".substring(0, 2 - alphaString.length) + alphaString;
  }
  setAlpha(alpha) {
    this._components[3] = this._clamp(alpha);
    return this;
  }
  round(steps) {
    const [r, g, b] = this._components;
    this._components[0] = Math.round(r * steps) / steps;
    this._components[1] = Math.round(g * steps) / steps;
    this._components[2] = Math.round(b * steps) / steps;
    this.refreshInt();
    this._value = null;
    return this;
  }
  toArray(out) {
    out = out ?? [];
    const [r, g, b, a] = this._components;
    out[0] = r;
    out[1] = g;
    out[2] = b;
    out[3] = a;
    return out;
  }
  normalize(value) {
    let r;
    let g;
    let b;
    let a;
    if ((typeof value === "number" || value instanceof Number) && value >= 0 && value <= 16777215) {
      const int = value;
      r = (int >> 16 & 255) / 255;
      g = (int >> 8 & 255) / 255;
      b = (int & 255) / 255;
      a = 1;
    } else if ((Array.isArray(value) || value instanceof Float32Array) && value.length >= 3 && value.length <= 4) {
      value = this._clamp(value);
      [r, g, b, a = 1] = value;
    } else if ((value instanceof Uint8Array || value instanceof Uint8ClampedArray) && value.length >= 3 && value.length <= 4) {
      value = this._clamp(value, 0, 255);
      [r, g, b, a = 255] = value;
      r /= 255;
      g /= 255;
      b /= 255;
      a /= 255;
    } else if (typeof value === "string" || typeof value === "object") {
      if (typeof value === "string") {
        const match = _Color.HEX_PATTERN.exec(value);
        if (match) {
          value = `#${match[2]}`;
        }
      }
      const color = w(value);
      if (color.isValid()) {
        ({ r, g, b, a } = color.rgba);
        r /= 255;
        g /= 255;
        b /= 255;
      }
    }
    if (r !== void 0) {
      this._components[0] = r;
      this._components[1] = g;
      this._components[2] = b;
      this._components[3] = a;
      this.refreshInt();
    } else {
      throw new Error(`Unable to convert color ${value}`);
    }
  }
  refreshInt() {
    this._clamp(this._components);
    const [r, g, b] = this._components;
    this._int = (r * 255 << 16) + (g * 255 << 8) + (b * 255 | 0);
  }
  _clamp(value, min = 0, max = 1) {
    if (typeof value === "number") {
      return Math.min(Math.max(value, min), max);
    }
    value.forEach((v, i) => {
      value[i] = Math.min(Math.max(v, min), max);
    });
    return value;
  }
};
let Color = _Color;
Color.shared = new _Color();
Color.temp = new _Color();
Color.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;

function mapPremultipliedBlendModes() {
  const pm = [];
  const npm = [];
  for (let i = 0; i < 32; i++) {
    pm[i] = i;
    npm[i] = i;
  }
  pm[BLEND_MODES.NORMAL_NPM] = BLEND_MODES.NORMAL;
  pm[BLEND_MODES.ADD_NPM] = BLEND_MODES.ADD;
  pm[BLEND_MODES.SCREEN_NPM] = BLEND_MODES.SCREEN;
  npm[BLEND_MODES.NORMAL] = BLEND_MODES.NORMAL_NPM;
  npm[BLEND_MODES.ADD] = BLEND_MODES.ADD_NPM;
  npm[BLEND_MODES.SCREEN] = BLEND_MODES.SCREEN_NPM;
  const array = [];
  array.push(npm);
  array.push(pm);
  return array;
}
const premultiplyBlendMode = mapPremultipliedBlendModes();

function getBufferType(array) {
  if (array.BYTES_PER_ELEMENT === 4) {
    if (array instanceof Float32Array) {
      return "Float32Array";
    } else if (array instanceof Uint32Array) {
      return "Uint32Array";
    }
    return "Int32Array";
  } else if (array.BYTES_PER_ELEMENT === 2) {
    if (array instanceof Uint16Array) {
      return "Uint16Array";
    }
  } else if (array.BYTES_PER_ELEMENT === 1) {
    if (array instanceof Uint8Array) {
      return "Uint8Array";
    }
  }
  return null;
}

function nextPow2(v) {
  v += v === 0 ? 1 : 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
}
function isPow2(v) {
  return !(v & v - 1) && !!v;
}
function log2(v) {
  let r = (v > 65535 ? 1 : 0) << 4;
  v >>>= r;
  let shift = (v > 255 ? 1 : 0) << 3;
  v >>>= shift;
  r |= shift;
  shift = (v > 15 ? 1 : 0) << 2;
  v >>>= shift;
  r |= shift;
  shift = (v > 3 ? 1 : 0) << 1;
  v >>>= shift;
  r |= shift;
  return r | v >> 1;
}

function removeItems(arr, startIdx, removeCount) {
  const length = arr.length;
  let i;
  if (startIdx >= length || removeCount === 0) {
    return;
  }
  removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
  const len = length - removeCount;
  for (i = startIdx; i < len; ++i) {
    arr[i] = arr[i + removeCount];
  }
  arr.length = len;
}

function sign(n) {
  if (n === 0)
    return 0;
  return n < 0 ? -1 : 1;
}

let nextUid = 0;
function uid() {
  return ++nextUid;
}

const ProgramCache = {};
const TextureCache = /* @__PURE__ */ Object.create(null);
const BaseTextureCache = /* @__PURE__ */ Object.create(null);

let tempAnchor;
function determineCrossOrigin(url$1, loc = globalThis.location) {
  if (url$1.startsWith("data:")) {
    return "";
  }
  loc = loc || globalThis.location;
  if (!tempAnchor) {
    tempAnchor = document.createElement("a");
  }
  tempAnchor.href = url$1;
  const parsedUrl = url.parse(tempAnchor.href);
  const samePort = !parsedUrl.port && loc.port === "" || parsedUrl.port === loc.port;
  if (parsedUrl.hostname !== loc.hostname || !samePort || parsedUrl.protocol !== loc.protocol) {
    return "anonymous";
  }
  return "";
}

function getResolutionOfUrl(url, defaultValue = 1) {
  const resolution = settings.RETINA_PREFIX?.exec(url);
  if (resolution) {
    return parseFloat(resolution[1]);
  }
  return defaultValue;
}

var ExtensionType = /* @__PURE__ */ ((ExtensionType2) => {
  ExtensionType2["Renderer"] = "renderer";
  ExtensionType2["Application"] = "application";
  ExtensionType2["RendererSystem"] = "renderer-webgl-system";
  ExtensionType2["RendererPlugin"] = "renderer-webgl-plugin";
  ExtensionType2["CanvasRendererSystem"] = "renderer-canvas-system";
  ExtensionType2["CanvasRendererPlugin"] = "renderer-canvas-plugin";
  ExtensionType2["Asset"] = "asset";
  ExtensionType2["LoadParser"] = "load-parser";
  ExtensionType2["ResolveParser"] = "resolve-parser";
  ExtensionType2["CacheParser"] = "cache-parser";
  ExtensionType2["DetectionParser"] = "detection-parser";
  return ExtensionType2;
})(ExtensionType || {});
const normalizeExtension = (ext) => {
  if (typeof ext === "function" || typeof ext === "object" && ext.extension) {
    if (!ext.extension) {
      throw new Error("Extension class must have an extension object");
    }
    const metadata = typeof ext.extension !== "object" ? { type: ext.extension } : ext.extension;
    ext = { ...metadata, ref: ext };
  }
  if (typeof ext === "object") {
    ext = { ...ext };
  } else {
    throw new Error("Invalid extension type");
  }
  if (typeof ext.type === "string") {
    ext.type = [ext.type];
  }
  return ext;
};
const normalizePriority = (ext, defaultPriority) => normalizeExtension(ext).priority ?? defaultPriority;
const extensions = {
  _addHandlers: {},
  _removeHandlers: {},
  _queue: {},
  remove(...extensions2) {
    extensions2.map(normalizeExtension).forEach((ext) => {
      ext.type.forEach((type) => this._removeHandlers[type]?.(ext));
    });
    return this;
  },
  add(...extensions2) {
    extensions2.map(normalizeExtension).forEach((ext) => {
      ext.type.forEach((type) => {
        const handlers = this._addHandlers;
        const queue = this._queue;
        if (!handlers[type]) {
          queue[type] = queue[type] || [];
          queue[type].push(ext);
        } else {
          handlers[type](ext);
        }
      });
    });
    return this;
  },
  handle(type, onAdd, onRemove) {
    const addHandlers = this._addHandlers;
    const removeHandlers = this._removeHandlers;
    if (addHandlers[type] || removeHandlers[type]) {
      throw new Error(`Extension type ${type} already has a handler`);
    }
    addHandlers[type] = onAdd;
    removeHandlers[type] = onRemove;
    const queue = this._queue;
    if (queue[type]) {
      queue[type].forEach((ext) => onAdd(ext));
      delete queue[type];
    }
    return this;
  },
  handleByMap(type, map) {
    return this.handle(type, (extension) => {
      map[extension.name] = extension.ref;
    }, (extension) => {
      delete map[extension.name];
    });
  },
  handleByList(type, list, defaultPriority = -1) {
    return this.handle(type, (extension) => {
      if (list.includes(extension.ref)) {
        return;
      }
      list.push(extension.ref);
      list.sort((a, b) => normalizePriority(b, defaultPriority) - normalizePriority(a, defaultPriority));
    }, (extension) => {
      const index = list.indexOf(extension.ref);
      if (index !== -1) {
        list.splice(index, 1);
      }
    });
  }
};

class ViewableBuffer {
  constructor(sizeOrBuffer) {
    if (typeof sizeOrBuffer === "number") {
      this.rawBinaryData = new ArrayBuffer(sizeOrBuffer);
    } else if (sizeOrBuffer instanceof Uint8Array) {
      this.rawBinaryData = sizeOrBuffer.buffer;
    } else {
      this.rawBinaryData = sizeOrBuffer;
    }
    this.uint32View = new Uint32Array(this.rawBinaryData);
    this.float32View = new Float32Array(this.rawBinaryData);
  }
  get int8View() {
    if (!this._int8View) {
      this._int8View = new Int8Array(this.rawBinaryData);
    }
    return this._int8View;
  }
  get uint8View() {
    if (!this._uint8View) {
      this._uint8View = new Uint8Array(this.rawBinaryData);
    }
    return this._uint8View;
  }
  get int16View() {
    if (!this._int16View) {
      this._int16View = new Int16Array(this.rawBinaryData);
    }
    return this._int16View;
  }
  get uint16View() {
    if (!this._uint16View) {
      this._uint16View = new Uint16Array(this.rawBinaryData);
    }
    return this._uint16View;
  }
  get int32View() {
    if (!this._int32View) {
      this._int32View = new Int32Array(this.rawBinaryData);
    }
    return this._int32View;
  }
  view(type) {
    return this[`${type}View`];
  }
  destroy() {
    this.rawBinaryData = null;
    this._int8View = null;
    this._uint8View = null;
    this._int16View = null;
    this._uint16View = null;
    this._int32View = null;
    this.uint32View = null;
    this.float32View = null;
  }
  static sizeOf(type) {
    switch (type) {
      case "int8":
      case "uint8":
        return 1;
      case "int16":
      case "uint16":
        return 2;
      case "int32":
      case "uint32":
      case "float32":
        return 4;
      default:
        throw new Error(`${type} isn't a valid view type`);
    }
  }
}

const fragTemplate = [
  "precision mediump float;",
  "void main(void){",
  "float test = 0.1;",
  "%forloop%",
  "gl_FragColor = vec4(0.0);",
  "}"
].join("\n");
function generateIfTestSrc(maxIfs) {
  let src = "";
  for (let i = 0; i < maxIfs; ++i) {
    if (i > 0) {
      src += "\nelse ";
    }
    if (i < maxIfs - 1) {
      src += `if(test == ${i}.0){}`;
    }
  }
  return src;
}
function checkMaxIfStatementsInShader(maxIfs, gl) {
  if (maxIfs === 0) {
    throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
  }
  const shader = gl.createShader(gl.FRAGMENT_SHADER);
  while (true) {
    const fragmentSrc = fragTemplate.replace(/%forloop%/gi, generateIfTestSrc(maxIfs));
    gl.shaderSource(shader, fragmentSrc);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      maxIfs = maxIfs / 2 | 0;
    } else {
      break;
    }
  }
  return maxIfs;
}

const BLEND$1 = 0;
const OFFSET$1 = 1;
const CULLING$1 = 2;
const DEPTH_TEST$1 = 3;
const WINDING$1 = 4;
const DEPTH_MASK$1 = 5;
class State {
  constructor() {
    this.data = 0;
    this.blendMode = BLEND_MODES.NORMAL;
    this.polygonOffset = 0;
    this.blend = true;
    this.depthMask = true;
  }
  get blend() {
    return !!(this.data & 1 << BLEND$1);
  }
  set blend(value) {
    if (!!(this.data & 1 << BLEND$1) !== value) {
      this.data ^= 1 << BLEND$1;
    }
  }
  get offsets() {
    return !!(this.data & 1 << OFFSET$1);
  }
  set offsets(value) {
    if (!!(this.data & 1 << OFFSET$1) !== value) {
      this.data ^= 1 << OFFSET$1;
    }
  }
  get culling() {
    return !!(this.data & 1 << CULLING$1);
  }
  set culling(value) {
    if (!!(this.data & 1 << CULLING$1) !== value) {
      this.data ^= 1 << CULLING$1;
    }
  }
  get depthTest() {
    return !!(this.data & 1 << DEPTH_TEST$1);
  }
  set depthTest(value) {
    if (!!(this.data & 1 << DEPTH_TEST$1) !== value) {
      this.data ^= 1 << DEPTH_TEST$1;
    }
  }
  get depthMask() {
    return !!(this.data & 1 << DEPTH_MASK$1);
  }
  set depthMask(value) {
    if (!!(this.data & 1 << DEPTH_MASK$1) !== value) {
      this.data ^= 1 << DEPTH_MASK$1;
    }
  }
  get clockwiseFrontFace() {
    return !!(this.data & 1 << WINDING$1);
  }
  set clockwiseFrontFace(value) {
    if (!!(this.data & 1 << WINDING$1) !== value) {
      this.data ^= 1 << WINDING$1;
    }
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(value) {
    this.blend = value !== BLEND_MODES.NONE;
    this._blendMode = value;
  }
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(value) {
    this.offsets = !!value;
    this._polygonOffset = value;
  }
  toString() {
    return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
  }
  static for2d() {
    const state = new State();
    state.depthTest = false;
    state.blend = true;
    return state;
  }
}

const INSTALLED = [];
function autoDetectResource(source, options) {
  if (!source) {
    return null;
  }
  let extension = "";
  if (typeof source === "string") {
    const result = /\.(\w{3,4})(?:$|\?|#)/i.exec(source);
    if (result) {
      extension = result[1].toLowerCase();
    }
  }
  for (let i = INSTALLED.length - 1; i >= 0; --i) {
    const ResourcePlugin = INSTALLED[i];
    if (ResourcePlugin.test && ResourcePlugin.test(source, extension)) {
      return new ResourcePlugin(source, options);
    }
  }
  throw new Error("Unrecognized source type to auto-detect Resource");
}

class Runner {
  constructor(name) {
    this.items = [];
    this._name = name;
    this._aliasCount = 0;
  }
  emit(a0, a1, a2, a3, a4, a5, a6, a7) {
    if (arguments.length > 8) {
      throw new Error("max arguments reached");
    }
    const { name, items } = this;
    this._aliasCount++;
    for (let i = 0, len = items.length; i < len; i++) {
      items[i][name](a0, a1, a2, a3, a4, a5, a6, a7);
    }
    if (items === this.items) {
      this._aliasCount--;
    }
    return this;
  }
  ensureNonAliasedItems() {
    if (this._aliasCount > 0 && this.items.length > 1) {
      this._aliasCount = 0;
      this.items = this.items.slice(0);
    }
  }
  add(item) {
    if (item[this._name]) {
      this.ensureNonAliasedItems();
      this.remove(item);
      this.items.push(item);
    }
    return this;
  }
  remove(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.ensureNonAliasedItems();
      this.items.splice(index, 1);
    }
    return this;
  }
  contains(item) {
    return this.items.includes(item);
  }
  removeAll() {
    this.ensureNonAliasedItems();
    this.items.length = 0;
    return this;
  }
  destroy() {
    this.removeAll();
    this.items = null;
    this._name = null;
  }
  get empty() {
    return this.items.length === 0;
  }
  get name() {
    return this._name;
  }
}
Object.defineProperties(Runner.prototype, {
  dispatch: { value: Runner.prototype.emit },
  run: { value: Runner.prototype.emit }
});

class Resource {
  constructor(width = 0, height = 0) {
    this._width = width;
    this._height = height;
    this.destroyed = false;
    this.internal = false;
    this.onResize = new Runner("setRealSize");
    this.onUpdate = new Runner("update");
    this.onError = new Runner("onError");
  }
  bind(baseTexture) {
    this.onResize.add(baseTexture);
    this.onUpdate.add(baseTexture);
    this.onError.add(baseTexture);
    if (this._width || this._height) {
      this.onResize.emit(this._width, this._height);
    }
  }
  unbind(baseTexture) {
    this.onResize.remove(baseTexture);
    this.onUpdate.remove(baseTexture);
    this.onError.remove(baseTexture);
  }
  resize(width, height) {
    if (width !== this._width || height !== this._height) {
      this._width = width;
      this._height = height;
      this.onResize.emit(width, height);
    }
  }
  get valid() {
    return !!this._width && !!this._height;
  }
  update() {
    if (!this.destroyed) {
      this.onUpdate.emit();
    }
  }
  load() {
    return Promise.resolve(this);
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  style(_renderer, _baseTexture, _glTexture) {
    return false;
  }
  dispose() {
  }
  destroy() {
    if (!this.destroyed) {
      this.destroyed = true;
      this.dispose();
      this.onError.removeAll();
      this.onError = null;
      this.onResize.removeAll();
      this.onResize = null;
      this.onUpdate.removeAll();
      this.onUpdate = null;
    }
  }
  static test(_source, _extension) {
    return false;
  }
}

class BufferResource extends Resource {
  constructor(source, options) {
    const { width, height } = options || {};
    if (!width || !height) {
      throw new Error("BufferResource width or height invalid");
    }
    super(width, height);
    this.data = source;
  }
  upload(renderer, baseTexture, glTexture) {
    const gl = renderer.gl;
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === ALPHA_MODES.UNPACK);
    const width = baseTexture.realWidth;
    const height = baseTexture.realHeight;
    if (glTexture.width === width && glTexture.height === height) {
      gl.texSubImage2D(baseTexture.target, 0, 0, 0, width, height, baseTexture.format, glTexture.type, this.data);
    } else {
      glTexture.width = width;
      glTexture.height = height;
      gl.texImage2D(baseTexture.target, 0, glTexture.internalFormat, width, height, 0, baseTexture.format, glTexture.type, this.data);
    }
    return true;
  }
  dispose() {
    this.data = null;
  }
  static test(source) {
    return source instanceof Float32Array || source instanceof Uint8Array || source instanceof Uint32Array;
  }
}

const defaultBufferOptions = {
  scaleMode: SCALE_MODES.NEAREST,
  format: FORMATS.RGBA,
  alphaMode: ALPHA_MODES.NPM
};
const _BaseTexture = class extends eventemitter3Exports {
  constructor(resource = null, options = null) {
    super();
    options = Object.assign({}, _BaseTexture.defaultOptions, options);
    const {
      alphaMode,
      mipmap,
      anisotropicLevel,
      scaleMode,
      width,
      height,
      wrapMode,
      format,
      type,
      target,
      resolution,
      resourceOptions
    } = options;
    if (resource && !(resource instanceof Resource)) {
      resource = autoDetectResource(resource, resourceOptions);
      resource.internal = true;
    }
    this.resolution = resolution || settings.RESOLUTION;
    this.width = Math.round((width || 0) * this.resolution) / this.resolution;
    this.height = Math.round((height || 0) * this.resolution) / this.resolution;
    this._mipmap = mipmap;
    this.anisotropicLevel = anisotropicLevel;
    this._wrapMode = wrapMode;
    this._scaleMode = scaleMode;
    this.format = format;
    this.type = type;
    this.target = target;
    this.alphaMode = alphaMode;
    this.uid = uid();
    this.touched = 0;
    this.isPowerOfTwo = false;
    this._refreshPOT();
    this._glTextures = {};
    this.dirtyId = 0;
    this.dirtyStyleId = 0;
    this.cacheId = null;
    this.valid = width > 0 && height > 0;
    this.textureCacheIds = [];
    this.destroyed = false;
    this.resource = null;
    this._batchEnabled = 0;
    this._batchLocation = 0;
    this.parentTextureArray = null;
    this.setResource(resource);
  }
  get realWidth() {
    return Math.round(this.width * this.resolution);
  }
  get realHeight() {
    return Math.round(this.height * this.resolution);
  }
  get mipmap() {
    return this._mipmap;
  }
  set mipmap(value) {
    if (this._mipmap !== value) {
      this._mipmap = value;
      this.dirtyStyleId++;
    }
  }
  get scaleMode() {
    return this._scaleMode;
  }
  set scaleMode(value) {
    if (this._scaleMode !== value) {
      this._scaleMode = value;
      this.dirtyStyleId++;
    }
  }
  get wrapMode() {
    return this._wrapMode;
  }
  set wrapMode(value) {
    if (this._wrapMode !== value) {
      this._wrapMode = value;
      this.dirtyStyleId++;
    }
  }
  setStyle(scaleMode, mipmap) {
    let dirty;
    if (scaleMode !== void 0 && scaleMode !== this.scaleMode) {
      this.scaleMode = scaleMode;
      dirty = true;
    }
    if (mipmap !== void 0 && mipmap !== this.mipmap) {
      this.mipmap = mipmap;
      dirty = true;
    }
    if (dirty) {
      this.dirtyStyleId++;
    }
    return this;
  }
  setSize(desiredWidth, desiredHeight, resolution) {
    resolution = resolution || this.resolution;
    return this.setRealSize(desiredWidth * resolution, desiredHeight * resolution, resolution);
  }
  setRealSize(realWidth, realHeight, resolution) {
    this.resolution = resolution || this.resolution;
    this.width = Math.round(realWidth) / this.resolution;
    this.height = Math.round(realHeight) / this.resolution;
    this._refreshPOT();
    this.update();
    return this;
  }
  _refreshPOT() {
    this.isPowerOfTwo = isPow2(this.realWidth) && isPow2(this.realHeight);
  }
  setResolution(resolution) {
    const oldResolution = this.resolution;
    if (oldResolution === resolution) {
      return this;
    }
    this.resolution = resolution;
    if (this.valid) {
      this.width = Math.round(this.width * oldResolution) / resolution;
      this.height = Math.round(this.height * oldResolution) / resolution;
      this.emit("update", this);
    }
    this._refreshPOT();
    return this;
  }
  setResource(resource) {
    if (this.resource === resource) {
      return this;
    }
    if (this.resource) {
      throw new Error("Resource can be set only once");
    }
    resource.bind(this);
    this.resource = resource;
    return this;
  }
  update() {
    if (!this.valid) {
      if (this.width > 0 && this.height > 0) {
        this.valid = true;
        this.emit("loaded", this);
        this.emit("update", this);
      }
    } else {
      this.dirtyId++;
      this.dirtyStyleId++;
      this.emit("update", this);
    }
  }
  onError(event) {
    this.emit("error", this, event);
  }
  destroy() {
    if (this.resource) {
      this.resource.unbind(this);
      if (this.resource.internal) {
        this.resource.destroy();
      }
      this.resource = null;
    }
    if (this.cacheId) {
      delete BaseTextureCache[this.cacheId];
      delete TextureCache[this.cacheId];
      this.cacheId = null;
    }
    this.dispose();
    _BaseTexture.removeFromCache(this);
    this.textureCacheIds = null;
    this.destroyed = true;
  }
  dispose() {
    this.emit("dispose", this);
  }
  castToBaseTexture() {
    return this;
  }
  static from(source, options, strict = settings.STRICT_TEXTURE_CACHE) {
    const isFrame = typeof source === "string";
    let cacheId = null;
    if (isFrame) {
      cacheId = source;
    } else {
      if (!source._pixiId) {
        const prefix = options?.pixiIdPrefix || "pixiid";
        source._pixiId = `${prefix}_${uid()}`;
      }
      cacheId = source._pixiId;
    }
    let baseTexture = BaseTextureCache[cacheId];
    if (isFrame && strict && !baseTexture) {
      throw new Error(`The cacheId "${cacheId}" does not exist in BaseTextureCache.`);
    }
    if (!baseTexture) {
      baseTexture = new _BaseTexture(source, options);
      baseTexture.cacheId = cacheId;
      _BaseTexture.addToCache(baseTexture, cacheId);
    }
    return baseTexture;
  }
  static fromBuffer(buffer, width, height, options) {
    buffer = buffer || new Float32Array(width * height * 4);
    const resource = new BufferResource(buffer, { width, height });
    const type = buffer instanceof Float32Array ? TYPES.FLOAT : TYPES.UNSIGNED_BYTE;
    return new _BaseTexture(resource, Object.assign({}, defaultBufferOptions, { type }, options));
  }
  static addToCache(baseTexture, id) {
    if (id) {
      if (!baseTexture.textureCacheIds.includes(id)) {
        baseTexture.textureCacheIds.push(id);
      }
      if (BaseTextureCache[id] && BaseTextureCache[id] !== baseTexture) {
        console.warn(`BaseTexture added to the cache with an id [${id}] that already had an entry`);
      }
      BaseTextureCache[id] = baseTexture;
    }
  }
  static removeFromCache(baseTexture) {
    if (typeof baseTexture === "string") {
      const baseTextureFromCache = BaseTextureCache[baseTexture];
      if (baseTextureFromCache) {
        const index = baseTextureFromCache.textureCacheIds.indexOf(baseTexture);
        if (index > -1) {
          baseTextureFromCache.textureCacheIds.splice(index, 1);
        }
        delete BaseTextureCache[baseTexture];
        return baseTextureFromCache;
      }
    } else if (baseTexture?.textureCacheIds) {
      for (let i = 0; i < baseTexture.textureCacheIds.length; ++i) {
        delete BaseTextureCache[baseTexture.textureCacheIds[i]];
      }
      baseTexture.textureCacheIds.length = 0;
      return baseTexture;
    }
    return null;
  }
};
let BaseTexture = _BaseTexture;
BaseTexture.defaultOptions = {
  mipmap: MIPMAP_MODES.POW2,
  anisotropicLevel: 0,
  scaleMode: SCALE_MODES.LINEAR,
  wrapMode: WRAP_MODES.CLAMP,
  alphaMode: ALPHA_MODES.UNPACK,
  target: TARGETS.TEXTURE_2D,
  format: FORMATS.RGBA,
  type: TYPES.UNSIGNED_BYTE
};
BaseTexture._globalBatch = 0;

class BatchDrawCall {
  constructor() {
    this.texArray = null;
    this.blend = 0;
    this.type = DRAW_MODES.TRIANGLES;
    this.start = 0;
    this.size = 0;
    this.data = null;
  }
}

let UID$4 = 0;
class Buffer {
  constructor(data, _static = true, index = false) {
    this.data = data || new Float32Array(1);
    this._glBuffers = {};
    this._updateID = 0;
    this.index = index;
    this.static = _static;
    this.id = UID$4++;
    this.disposeRunner = new Runner("disposeBuffer");
  }
  update(data) {
    if (data instanceof Array) {
      data = new Float32Array(data);
    }
    this.data = data || this.data;
    this._updateID++;
  }
  dispose() {
    this.disposeRunner.emit(this, false);
  }
  destroy() {
    this.dispose();
    this.data = null;
  }
  set index(value) {
    this.type = value ? BUFFER_TYPE.ELEMENT_ARRAY_BUFFER : BUFFER_TYPE.ARRAY_BUFFER;
  }
  get index() {
    return this.type === BUFFER_TYPE.ELEMENT_ARRAY_BUFFER;
  }
  static from(data) {
    if (data instanceof Array) {
      data = new Float32Array(data);
    }
    return new Buffer(data);
  }
}

class Attribute {
  constructor(buffer, size = 0, normalized = false, type = TYPES.FLOAT, stride, start, instance, divisor = 1) {
    this.buffer = buffer;
    this.size = size;
    this.normalized = normalized;
    this.type = type;
    this.stride = stride;
    this.start = start;
    this.instance = instance;
    this.divisor = divisor;
  }
  destroy() {
    this.buffer = null;
  }
  static from(buffer, size, normalized, type, stride) {
    return new Attribute(buffer, size, normalized, type, stride);
  }
}

const map$1 = {
  Float32Array,
  Uint32Array,
  Int32Array,
  Uint8Array
};
function interleaveTypedArrays(arrays, sizes) {
  let outSize = 0;
  let stride = 0;
  const views = {};
  for (let i = 0; i < arrays.length; i++) {
    stride += sizes[i];
    outSize += arrays[i].length;
  }
  const buffer = new ArrayBuffer(outSize * 4);
  let out = null;
  let littleOffset = 0;
  for (let i = 0; i < arrays.length; i++) {
    const size = sizes[i];
    const array = arrays[i];
    const type = getBufferType(array);
    if (!views[type]) {
      views[type] = new map$1[type](buffer);
    }
    out = views[type];
    for (let j = 0; j < array.length; j++) {
      const indexStart = (j / size | 0) * stride + littleOffset;
      const index = j % size;
      out[indexStart + index] = array[j];
    }
    littleOffset += size;
  }
  return new Float32Array(buffer);
}

const byteSizeMap$1 = { 5126: 4, 5123: 2, 5121: 1 };
let UID$3 = 0;
const map = {
  Float32Array,
  Uint32Array,
  Int32Array,
  Uint8Array,
  Uint16Array
};
class Geometry {
  constructor(buffers = [], attributes = {}) {
    this.buffers = buffers;
    this.indexBuffer = null;
    this.attributes = attributes;
    this.glVertexArrayObjects = {};
    this.id = UID$3++;
    this.instanced = false;
    this.instanceCount = 1;
    this.disposeRunner = new Runner("disposeGeometry");
    this.refCount = 0;
  }
  addAttribute(id, buffer, size = 0, normalized = false, type, stride, start, instance = false) {
    if (!buffer) {
      throw new Error("You must pass a buffer when creating an attribute");
    }
    if (!(buffer instanceof Buffer)) {
      if (buffer instanceof Array) {
        buffer = new Float32Array(buffer);
      }
      buffer = new Buffer(buffer);
    }
    const ids = id.split("|");
    if (ids.length > 1) {
      for (let i = 0; i < ids.length; i++) {
        this.addAttribute(ids[i], buffer, size, normalized, type);
      }
      return this;
    }
    let bufferIndex = this.buffers.indexOf(buffer);
    if (bufferIndex === -1) {
      this.buffers.push(buffer);
      bufferIndex = this.buffers.length - 1;
    }
    this.attributes[id] = new Attribute(bufferIndex, size, normalized, type, stride, start, instance);
    this.instanced = this.instanced || instance;
    return this;
  }
  getAttribute(id) {
    return this.attributes[id];
  }
  getBuffer(id) {
    return this.buffers[this.getAttribute(id).buffer];
  }
  addIndex(buffer) {
    if (!(buffer instanceof Buffer)) {
      if (buffer instanceof Array) {
        buffer = new Uint16Array(buffer);
      }
      buffer = new Buffer(buffer);
    }
    buffer.type = BUFFER_TYPE.ELEMENT_ARRAY_BUFFER;
    this.indexBuffer = buffer;
    if (!this.buffers.includes(buffer)) {
      this.buffers.push(buffer);
    }
    return this;
  }
  getIndex() {
    return this.indexBuffer;
  }
  interleave() {
    if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer)
      return this;
    const arrays = [];
    const sizes = [];
    const interleavedBuffer = new Buffer();
    let i;
    for (i in this.attributes) {
      const attribute = this.attributes[i];
      const buffer = this.buffers[attribute.buffer];
      arrays.push(buffer.data);
      sizes.push(attribute.size * byteSizeMap$1[attribute.type] / 4);
      attribute.buffer = 0;
    }
    interleavedBuffer.data = interleaveTypedArrays(arrays, sizes);
    for (i = 0; i < this.buffers.length; i++) {
      if (this.buffers[i] !== this.indexBuffer) {
        this.buffers[i].destroy();
      }
    }
    this.buffers = [interleavedBuffer];
    if (this.indexBuffer) {
      this.buffers.push(this.indexBuffer);
    }
    return this;
  }
  getSize() {
    for (const i in this.attributes) {
      const attribute = this.attributes[i];
      const buffer = this.buffers[attribute.buffer];
      return buffer.data.length / (attribute.stride / 4 || attribute.size);
    }
    return 0;
  }
  dispose() {
    this.disposeRunner.emit(this, false);
  }
  destroy() {
    this.dispose();
    this.buffers = null;
    this.indexBuffer = null;
    this.attributes = null;
  }
  clone() {
    const geometry = new Geometry();
    for (let i = 0; i < this.buffers.length; i++) {
      geometry.buffers[i] = new Buffer(this.buffers[i].data.slice(0));
    }
    for (const i in this.attributes) {
      const attrib = this.attributes[i];
      geometry.attributes[i] = new Attribute(attrib.buffer, attrib.size, attrib.normalized, attrib.type, attrib.stride, attrib.start, attrib.instance);
    }
    if (this.indexBuffer) {
      geometry.indexBuffer = geometry.buffers[this.buffers.indexOf(this.indexBuffer)];
      geometry.indexBuffer.type = BUFFER_TYPE.ELEMENT_ARRAY_BUFFER;
    }
    return geometry;
  }
  static merge(geometries) {
    const geometryOut = new Geometry();
    const arrays = [];
    const sizes = [];
    const offsets = [];
    let geometry;
    for (let i = 0; i < geometries.length; i++) {
      geometry = geometries[i];
      for (let j = 0; j < geometry.buffers.length; j++) {
        sizes[j] = sizes[j] || 0;
        sizes[j] += geometry.buffers[j].data.length;
        offsets[j] = 0;
      }
    }
    for (let i = 0; i < geometry.buffers.length; i++) {
      arrays[i] = new map[getBufferType(geometry.buffers[i].data)](sizes[i]);
      geometryOut.buffers[i] = new Buffer(arrays[i]);
    }
    for (let i = 0; i < geometries.length; i++) {
      geometry = geometries[i];
      for (let j = 0; j < geometry.buffers.length; j++) {
        arrays[j].set(geometry.buffers[j].data, offsets[j]);
        offsets[j] += geometry.buffers[j].data.length;
      }
    }
    geometryOut.attributes = geometry.attributes;
    if (geometry.indexBuffer) {
      geometryOut.indexBuffer = geometryOut.buffers[geometry.buffers.indexOf(geometry.indexBuffer)];
      geometryOut.indexBuffer.type = BUFFER_TYPE.ELEMENT_ARRAY_BUFFER;
      let offset = 0;
      let stride = 0;
      let offset2 = 0;
      let bufferIndexToCount = 0;
      for (let i = 0; i < geometry.buffers.length; i++) {
        if (geometry.buffers[i] !== geometry.indexBuffer) {
          bufferIndexToCount = i;
          break;
        }
      }
      for (const i in geometry.attributes) {
        const attribute = geometry.attributes[i];
        if ((attribute.buffer | 0) === bufferIndexToCount) {
          stride += attribute.size * byteSizeMap$1[attribute.type] / 4;
        }
      }
      for (let i = 0; i < geometries.length; i++) {
        const indexBufferData = geometries[i].indexBuffer.data;
        for (let j = 0; j < indexBufferData.length; j++) {
          geometryOut.indexBuffer.data[j + offset2] += offset;
        }
        offset += geometries[i].buffers[bufferIndexToCount].data.length / stride;
        offset2 += indexBufferData.length;
      }
    }
    return geometryOut;
  }
}

class BatchGeometry extends Geometry {
  constructor(_static = false) {
    super();
    this._buffer = new Buffer(null, _static, false);
    this._indexBuffer = new Buffer(null, _static, true);
    this.addAttribute("aVertexPosition", this._buffer, 2, false, TYPES.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, false, TYPES.FLOAT).addAttribute("aColor", this._buffer, 4, true, TYPES.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, true, TYPES.FLOAT).addIndex(this._indexBuffer);
  }
}

const PI_2 = Math.PI * 2;
const RAD_TO_DEG = 180 / Math.PI;
const DEG_TO_RAD = Math.PI / 180;
var SHAPES = /* @__PURE__ */ ((SHAPES2) => {
  SHAPES2[SHAPES2["POLY"] = 0] = "POLY";
  SHAPES2[SHAPES2["RECT"] = 1] = "RECT";
  SHAPES2[SHAPES2["CIRC"] = 2] = "CIRC";
  SHAPES2[SHAPES2["ELIP"] = 3] = "ELIP";
  SHAPES2[SHAPES2["RREC"] = 4] = "RREC";
  return SHAPES2;
})(SHAPES || {});

class Point {
  constructor(x = 0, y = 0) {
    this.x = 0;
    this.y = 0;
    this.x = x;
    this.y = y;
  }
  clone() {
    return new Point(this.x, this.y);
  }
  copyFrom(p) {
    this.set(p.x, p.y);
    return this;
  }
  copyTo(p) {
    p.set(this.x, this.y);
    return p;
  }
  equals(p) {
    return p.x === this.x && p.y === this.y;
  }
  set(x = 0, y = x) {
    this.x = x;
    this.y = y;
    return this;
  }
  toString() {
    return `[@pixi/math:Point x=${this.x} y=${this.y}]`;
  }
}

const tempPoints$1 = [new Point(), new Point(), new Point(), new Point()];
class Rectangle {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this.x = Number(x);
    this.y = Number(y);
    this.width = Number(width);
    this.height = Number(height);
    this.type = SHAPES.RECT;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  static get EMPTY() {
    return new Rectangle(0, 0, 0, 0);
  }
  clone() {
    return new Rectangle(this.x, this.y, this.width, this.height);
  }
  copyFrom(rectangle) {
    this.x = rectangle.x;
    this.y = rectangle.y;
    this.width = rectangle.width;
    this.height = rectangle.height;
    return this;
  }
  copyTo(rectangle) {
    rectangle.x = this.x;
    rectangle.y = this.y;
    rectangle.width = this.width;
    rectangle.height = this.height;
    return rectangle;
  }
  contains(x, y) {
    if (this.width <= 0 || this.height <= 0) {
      return false;
    }
    if (x >= this.x && x < this.x + this.width) {
      if (y >= this.y && y < this.y + this.height) {
        return true;
      }
    }
    return false;
  }
  intersects(other, transform) {
    if (!transform) {
      const x02 = this.x < other.x ? other.x : this.x;
      const x12 = this.right > other.right ? other.right : this.right;
      if (x12 <= x02) {
        return false;
      }
      const y02 = this.y < other.y ? other.y : this.y;
      const y12 = this.bottom > other.bottom ? other.bottom : this.bottom;
      return y12 > y02;
    }
    const x0 = this.left;
    const x1 = this.right;
    const y0 = this.top;
    const y1 = this.bottom;
    if (x1 <= x0 || y1 <= y0) {
      return false;
    }
    const lt = tempPoints$1[0].set(other.left, other.top);
    const lb = tempPoints$1[1].set(other.left, other.bottom);
    const rt = tempPoints$1[2].set(other.right, other.top);
    const rb = tempPoints$1[3].set(other.right, other.bottom);
    if (rt.x <= lt.x || lb.y <= lt.y) {
      return false;
    }
    const s = Math.sign(transform.a * transform.d - transform.b * transform.c);
    if (s === 0) {
      return false;
    }
    transform.apply(lt, lt);
    transform.apply(lb, lb);
    transform.apply(rt, rt);
    transform.apply(rb, rb);
    if (Math.max(lt.x, lb.x, rt.x, rb.x) <= x0 || Math.min(lt.x, lb.x, rt.x, rb.x) >= x1 || Math.max(lt.y, lb.y, rt.y, rb.y) <= y0 || Math.min(lt.y, lb.y, rt.y, rb.y) >= y1) {
      return false;
    }
    const nx = s * (lb.y - lt.y);
    const ny = s * (lt.x - lb.x);
    const n00 = nx * x0 + ny * y0;
    const n10 = nx * x1 + ny * y0;
    const n01 = nx * x0 + ny * y1;
    const n11 = nx * x1 + ny * y1;
    if (Math.max(n00, n10, n01, n11) <= nx * lt.x + ny * lt.y || Math.min(n00, n10, n01, n11) >= nx * rb.x + ny * rb.y) {
      return false;
    }
    const mx = s * (lt.y - rt.y);
    const my = s * (rt.x - lt.x);
    const m00 = mx * x0 + my * y0;
    const m10 = mx * x1 + my * y0;
    const m01 = mx * x0 + my * y1;
    const m11 = mx * x1 + my * y1;
    if (Math.max(m00, m10, m01, m11) <= mx * lt.x + my * lt.y || Math.min(m00, m10, m01, m11) >= mx * rb.x + my * rb.y) {
      return false;
    }
    return true;
  }
  pad(paddingX = 0, paddingY = paddingX) {
    this.x -= paddingX;
    this.y -= paddingY;
    this.width += paddingX * 2;
    this.height += paddingY * 2;
    return this;
  }
  fit(rectangle) {
    const x1 = Math.max(this.x, rectangle.x);
    const x2 = Math.min(this.x + this.width, rectangle.x + rectangle.width);
    const y1 = Math.max(this.y, rectangle.y);
    const y2 = Math.min(this.y + this.height, rectangle.y + rectangle.height);
    this.x = x1;
    this.width = Math.max(x2 - x1, 0);
    this.y = y1;
    this.height = Math.max(y2 - y1, 0);
    return this;
  }
  ceil(resolution = 1, eps = 1e-3) {
    const x2 = Math.ceil((this.x + this.width - eps) * resolution) / resolution;
    const y2 = Math.ceil((this.y + this.height - eps) * resolution) / resolution;
    this.x = Math.floor((this.x + eps) * resolution) / resolution;
    this.y = Math.floor((this.y + eps) * resolution) / resolution;
    this.width = x2 - this.x;
    this.height = y2 - this.y;
    return this;
  }
  enlarge(rectangle) {
    const x1 = Math.min(this.x, rectangle.x);
    const x2 = Math.max(this.x + this.width, rectangle.x + rectangle.width);
    const y1 = Math.min(this.y, rectangle.y);
    const y2 = Math.max(this.y + this.height, rectangle.y + rectangle.height);
    this.x = x1;
    this.width = x2 - x1;
    this.y = y1;
    this.height = y2 - y1;
    return this;
  }
  toString() {
    return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
  }
}

class Circle {
  constructor(x = 0, y = 0, radius = 0) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.type = SHAPES.CIRC;
  }
  clone() {
    return new Circle(this.x, this.y, this.radius);
  }
  contains(x, y) {
    if (this.radius <= 0) {
      return false;
    }
    const r2 = this.radius * this.radius;
    let dx = this.x - x;
    let dy = this.y - y;
    dx *= dx;
    dy *= dy;
    return dx + dy <= r2;
  }
  getBounds() {
    return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
  toString() {
    return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
  }
}

class Ellipse {
  constructor(x = 0, y = 0, halfWidth = 0, halfHeight = 0) {
    this.x = x;
    this.y = y;
    this.width = halfWidth;
    this.height = halfHeight;
    this.type = SHAPES.ELIP;
  }
  clone() {
    return new Ellipse(this.x, this.y, this.width, this.height);
  }
  contains(x, y) {
    if (this.width <= 0 || this.height <= 0) {
      return false;
    }
    let normx = (x - this.x) / this.width;
    let normy = (y - this.y) / this.height;
    normx *= normx;
    normy *= normy;
    return normx + normy <= 1;
  }
  getBounds() {
    return new Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
  }
  toString() {
    return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
  }
}

class Polygon {
  constructor(...points) {
    let flat = Array.isArray(points[0]) ? points[0] : points;
    if (typeof flat[0] !== "number") {
      const p = [];
      for (let i = 0, il = flat.length; i < il; i++) {
        p.push(flat[i].x, flat[i].y);
      }
      flat = p;
    }
    this.points = flat;
    this.type = SHAPES.POLY;
    this.closeStroke = true;
  }
  clone() {
    const points = this.points.slice();
    const polygon = new Polygon(points);
    polygon.closeStroke = this.closeStroke;
    return polygon;
  }
  contains(x, y) {
    let inside = false;
    const length = this.points.length / 2;
    for (let i = 0, j = length - 1; i < length; j = i++) {
      const xi = this.points[i * 2];
      const yi = this.points[i * 2 + 1];
      const xj = this.points[j * 2];
      const yj = this.points[j * 2 + 1];
      const intersect = yi > y !== yj > y && x < (xj - xi) * ((y - yi) / (yj - yi)) + xi;
      if (intersect) {
        inside = !inside;
      }
    }
    return inside;
  }
  toString() {
    return `[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce((pointsDesc, currentPoint) => `${pointsDesc}, ${currentPoint}`, "")}]`;
  }
}

class RoundedRectangle {
  constructor(x = 0, y = 0, width = 0, height = 0, radius = 20) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.radius = radius;
    this.type = SHAPES.RREC;
  }
  clone() {
    return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
  }
  contains(x, y) {
    if (this.width <= 0 || this.height <= 0) {
      return false;
    }
    if (x >= this.x && x <= this.x + this.width) {
      if (y >= this.y && y <= this.y + this.height) {
        const radius = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
        if (y >= this.y + radius && y <= this.y + this.height - radius || x >= this.x + radius && x <= this.x + this.width - radius) {
          return true;
        }
        let dx = x - (this.x + radius);
        let dy = y - (this.y + radius);
        const radius2 = radius * radius;
        if (dx * dx + dy * dy <= radius2) {
          return true;
        }
        dx = x - (this.x + this.width - radius);
        if (dx * dx + dy * dy <= radius2) {
          return true;
        }
        dy = y - (this.y + this.height - radius);
        if (dx * dx + dy * dy <= radius2) {
          return true;
        }
        dx = x - (this.x + radius);
        if (dx * dx + dy * dy <= radius2) {
          return true;
        }
      }
    }
    return false;
  }
  toString() {
    return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
  }
}

class Matrix {
  constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
    this.array = null;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
  }
  fromArray(array) {
    this.a = array[0];
    this.b = array[1];
    this.c = array[3];
    this.d = array[4];
    this.tx = array[2];
    this.ty = array[5];
  }
  set(a, b, c, d, tx, ty) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
    return this;
  }
  toArray(transpose, out) {
    if (!this.array) {
      this.array = new Float32Array(9);
    }
    const array = out || this.array;
    if (transpose) {
      array[0] = this.a;
      array[1] = this.b;
      array[2] = 0;
      array[3] = this.c;
      array[4] = this.d;
      array[5] = 0;
      array[6] = this.tx;
      array[7] = this.ty;
      array[8] = 1;
    } else {
      array[0] = this.a;
      array[1] = this.c;
      array[2] = this.tx;
      array[3] = this.b;
      array[4] = this.d;
      array[5] = this.ty;
      array[6] = 0;
      array[7] = 0;
      array[8] = 1;
    }
    return array;
  }
  apply(pos, newPos) {
    newPos = newPos || new Point();
    const x = pos.x;
    const y = pos.y;
    newPos.x = this.a * x + this.c * y + this.tx;
    newPos.y = this.b * x + this.d * y + this.ty;
    return newPos;
  }
  applyInverse(pos, newPos) {
    newPos = newPos || new Point();
    const id = 1 / (this.a * this.d + this.c * -this.b);
    const x = pos.x;
    const y = pos.y;
    newPos.x = this.d * id * x + -this.c * id * y + (this.ty * this.c - this.tx * this.d) * id;
    newPos.y = this.a * id * y + -this.b * id * x + (-this.ty * this.a + this.tx * this.b) * id;
    return newPos;
  }
  translate(x, y) {
    this.tx += x;
    this.ty += y;
    return this;
  }
  scale(x, y) {
    this.a *= x;
    this.d *= y;
    this.c *= x;
    this.b *= y;
    this.tx *= x;
    this.ty *= y;
    return this;
  }
  rotate(angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const a1 = this.a;
    const c1 = this.c;
    const tx1 = this.tx;
    this.a = a1 * cos - this.b * sin;
    this.b = a1 * sin + this.b * cos;
    this.c = c1 * cos - this.d * sin;
    this.d = c1 * sin + this.d * cos;
    this.tx = tx1 * cos - this.ty * sin;
    this.ty = tx1 * sin + this.ty * cos;
    return this;
  }
  append(matrix) {
    const a1 = this.a;
    const b1 = this.b;
    const c1 = this.c;
    const d1 = this.d;
    this.a = matrix.a * a1 + matrix.b * c1;
    this.b = matrix.a * b1 + matrix.b * d1;
    this.c = matrix.c * a1 + matrix.d * c1;
    this.d = matrix.c * b1 + matrix.d * d1;
    this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
    this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;
    return this;
  }
  setTransform(x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {
    this.a = Math.cos(rotation + skewY) * scaleX;
    this.b = Math.sin(rotation + skewY) * scaleX;
    this.c = -Math.sin(rotation - skewX) * scaleY;
    this.d = Math.cos(rotation - skewX) * scaleY;
    this.tx = x - (pivotX * this.a + pivotY * this.c);
    this.ty = y - (pivotX * this.b + pivotY * this.d);
    return this;
  }
  prepend(matrix) {
    const tx1 = this.tx;
    if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
      const a1 = this.a;
      const c1 = this.c;
      this.a = a1 * matrix.a + this.b * matrix.c;
      this.b = a1 * matrix.b + this.b * matrix.d;
      this.c = c1 * matrix.a + this.d * matrix.c;
      this.d = c1 * matrix.b + this.d * matrix.d;
    }
    this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
    this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;
    return this;
  }
  decompose(transform) {
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const pivot = transform.pivot;
    const skewX = -Math.atan2(-c, d);
    const skewY = Math.atan2(b, a);
    const delta = Math.abs(skewX + skewY);
    if (delta < 1e-5 || Math.abs(PI_2 - delta) < 1e-5) {
      transform.rotation = skewY;
      transform.skew.x = transform.skew.y = 0;
    } else {
      transform.rotation = 0;
      transform.skew.x = skewX;
      transform.skew.y = skewY;
    }
    transform.scale.x = Math.sqrt(a * a + b * b);
    transform.scale.y = Math.sqrt(c * c + d * d);
    transform.position.x = this.tx + (pivot.x * a + pivot.y * c);
    transform.position.y = this.ty + (pivot.x * b + pivot.y * d);
    return transform;
  }
  invert() {
    const a1 = this.a;
    const b1 = this.b;
    const c1 = this.c;
    const d1 = this.d;
    const tx1 = this.tx;
    const n = a1 * d1 - b1 * c1;
    this.a = d1 / n;
    this.b = -b1 / n;
    this.c = -c1 / n;
    this.d = a1 / n;
    this.tx = (c1 * this.ty - d1 * tx1) / n;
    this.ty = -(a1 * this.ty - b1 * tx1) / n;
    return this;
  }
  identity() {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.tx = 0;
    this.ty = 0;
    return this;
  }
  clone() {
    const matrix = new Matrix();
    matrix.a = this.a;
    matrix.b = this.b;
    matrix.c = this.c;
    matrix.d = this.d;
    matrix.tx = this.tx;
    matrix.ty = this.ty;
    return matrix;
  }
  copyTo(matrix) {
    matrix.a = this.a;
    matrix.b = this.b;
    matrix.c = this.c;
    matrix.d = this.d;
    matrix.tx = this.tx;
    matrix.ty = this.ty;
    return matrix;
  }
  copyFrom(matrix) {
    this.a = matrix.a;
    this.b = matrix.b;
    this.c = matrix.c;
    this.d = matrix.d;
    this.tx = matrix.tx;
    this.ty = matrix.ty;
    return this;
  }
  toString() {
    return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
  }
  static get IDENTITY() {
    return new Matrix();
  }
  static get TEMP_MATRIX() {
    return new Matrix();
  }
}

const ux = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
const uy = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
const vx = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
const vy = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
const rotationCayley = [];
const rotationMatrices = [];
const signum = Math.sign;
function init() {
  for (let i = 0; i < 16; i++) {
    const row = [];
    rotationCayley.push(row);
    for (let j = 0; j < 16; j++) {
      const _ux = signum(ux[i] * ux[j] + vx[i] * uy[j]);
      const _uy = signum(uy[i] * ux[j] + vy[i] * uy[j]);
      const _vx = signum(ux[i] * vx[j] + vx[i] * vy[j]);
      const _vy = signum(uy[i] * vx[j] + vy[i] * vy[j]);
      for (let k = 0; k < 16; k++) {
        if (ux[k] === _ux && uy[k] === _uy && vx[k] === _vx && vy[k] === _vy) {
          row.push(k);
          break;
        }
      }
    }
  }
  for (let i = 0; i < 16; i++) {
    const mat = new Matrix();
    mat.set(ux[i], uy[i], vx[i], vy[i], 0, 0);
    rotationMatrices.push(mat);
  }
}
init();
const groupD8 = {
  E: 0,
  SE: 1,
  S: 2,
  SW: 3,
  W: 4,
  NW: 5,
  N: 6,
  NE: 7,
  MIRROR_VERTICAL: 8,
  MAIN_DIAGONAL: 10,
  MIRROR_HORIZONTAL: 12,
  REVERSE_DIAGONAL: 14,
  uX: (ind) => ux[ind],
  uY: (ind) => uy[ind],
  vX: (ind) => vx[ind],
  vY: (ind) => vy[ind],
  inv: (rotation) => {
    if (rotation & 8) {
      return rotation & 15;
    }
    return -rotation & 7;
  },
  add: (rotationSecond, rotationFirst) => rotationCayley[rotationSecond][rotationFirst],
  sub: (rotationSecond, rotationFirst) => rotationCayley[rotationSecond][groupD8.inv(rotationFirst)],
  rotate180: (rotation) => rotation ^ 4,
  isVertical: (rotation) => (rotation & 3) === 2,
  byDirection: (dx, dy) => {
    if (Math.abs(dx) * 2 <= Math.abs(dy)) {
      if (dy >= 0) {
        return groupD8.S;
      }
      return groupD8.N;
    } else if (Math.abs(dy) * 2 <= Math.abs(dx)) {
      if (dx > 0) {
        return groupD8.E;
      }
      return groupD8.W;
    } else if (dy > 0) {
      if (dx > 0) {
        return groupD8.SE;
      }
      return groupD8.SW;
    } else if (dx > 0) {
      return groupD8.NE;
    }
    return groupD8.NW;
  },
  matrixAppendRotationInv: (matrix, rotation, tx = 0, ty = 0) => {
    const mat = rotationMatrices[groupD8.inv(rotation)];
    mat.tx = tx;
    mat.ty = ty;
    matrix.append(mat);
  }
};

class ObservablePoint {
  constructor(cb, scope, x = 0, y = 0) {
    this._x = x;
    this._y = y;
    this.cb = cb;
    this.scope = scope;
  }
  clone(cb = this.cb, scope = this.scope) {
    return new ObservablePoint(cb, scope, this._x, this._y);
  }
  set(x = 0, y = x) {
    if (this._x !== x || this._y !== y) {
      this._x = x;
      this._y = y;
      this.cb.call(this.scope);
    }
    return this;
  }
  copyFrom(p) {
    if (this._x !== p.x || this._y !== p.y) {
      this._x = p.x;
      this._y = p.y;
      this.cb.call(this.scope);
    }
    return this;
  }
  copyTo(p) {
    p.set(this._x, this._y);
    return p;
  }
  equals(p) {
    return p.x === this._x && p.y === this._y;
  }
  toString() {
    return `[@pixi/math:ObservablePoint x=${0} y=${0} scope=${this.scope}]`;
  }
  get x() {
    return this._x;
  }
  set x(value) {
    if (this._x !== value) {
      this._x = value;
      this.cb.call(this.scope);
    }
  }
  get y() {
    return this._y;
  }
  set y(value) {
    if (this._y !== value) {
      this._y = value;
      this.cb.call(this.scope);
    }
  }
}

const _Transform = class {
  constructor() {
    this.worldTransform = new Matrix();
    this.localTransform = new Matrix();
    this.position = new ObservablePoint(this.onChange, this, 0, 0);
    this.scale = new ObservablePoint(this.onChange, this, 1, 1);
    this.pivot = new ObservablePoint(this.onChange, this, 0, 0);
    this.skew = new ObservablePoint(this.updateSkew, this, 0, 0);
    this._rotation = 0;
    this._cx = 1;
    this._sx = 0;
    this._cy = 0;
    this._sy = 1;
    this._localID = 0;
    this._currentLocalID = 0;
    this._worldID = 0;
    this._parentID = 0;
  }
  onChange() {
    this._localID++;
  }
  updateSkew() {
    this._cx = Math.cos(this._rotation + this.skew.y);
    this._sx = Math.sin(this._rotation + this.skew.y);
    this._cy = -Math.sin(this._rotation - this.skew.x);
    this._sy = Math.cos(this._rotation - this.skew.x);
    this._localID++;
  }
  toString() {
    return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
  }
  updateLocalTransform() {
    const lt = this.localTransform;
    if (this._localID !== this._currentLocalID) {
      lt.a = this._cx * this.scale.x;
      lt.b = this._sx * this.scale.x;
      lt.c = this._cy * this.scale.y;
      lt.d = this._sy * this.scale.y;
      lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
      lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
      this._currentLocalID = this._localID;
      this._parentID = -1;
    }
  }
  updateTransform(parentTransform) {
    const lt = this.localTransform;
    if (this._localID !== this._currentLocalID) {
      lt.a = this._cx * this.scale.x;
      lt.b = this._sx * this.scale.x;
      lt.c = this._cy * this.scale.y;
      lt.d = this._sy * this.scale.y;
      lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
      lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
      this._currentLocalID = this._localID;
      this._parentID = -1;
    }
    if (this._parentID !== parentTransform._worldID) {
      const pt = parentTransform.worldTransform;
      const wt = this.worldTransform;
      wt.a = lt.a * pt.a + lt.b * pt.c;
      wt.b = lt.a * pt.b + lt.b * pt.d;
      wt.c = lt.c * pt.a + lt.d * pt.c;
      wt.d = lt.c * pt.b + lt.d * pt.d;
      wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
      wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;
      this._parentID = parentTransform._worldID;
      this._worldID++;
    }
  }
  setFromMatrix(matrix) {
    matrix.decompose(this);
    this._localID++;
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(value) {
    if (this._rotation !== value) {
      this._rotation = value;
      this.updateSkew();
    }
  }
};
let Transform = _Transform;
Transform.IDENTITY = new _Transform();

var defaultFragment$2 = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}";

var defaultVertex$2 = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n";

function compileShader(gl, type, src) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  return shader;
}

function booleanArray(size) {
  const array = new Array(size);
  for (let i = 0; i < array.length; i++) {
    array[i] = false;
  }
  return array;
}
function defaultValue(type, size) {
  switch (type) {
    case "float":
      return 0;
    case "vec2":
      return new Float32Array(2 * size);
    case "vec3":
      return new Float32Array(3 * size);
    case "vec4":
      return new Float32Array(4 * size);
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray":
      return 0;
    case "ivec2":
      return new Int32Array(2 * size);
    case "ivec3":
      return new Int32Array(3 * size);
    case "ivec4":
      return new Int32Array(4 * size);
    case "uvec2":
      return new Uint32Array(2 * size);
    case "uvec3":
      return new Uint32Array(3 * size);
    case "uvec4":
      return new Uint32Array(4 * size);
    case "bool":
      return false;
    case "bvec2":
      return booleanArray(2 * size);
    case "bvec3":
      return booleanArray(3 * size);
    case "bvec4":
      return booleanArray(4 * size);
    case "mat2":
      return new Float32Array([
        1,
        0,
        0,
        1
      ]);
    case "mat3":
      return new Float32Array([
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ]);
    case "mat4":
      return new Float32Array([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ]);
  }
  return null;
}

const uniformParsers = [
  {
    test: (data) => data.type === "float" && data.size === 1 && !data.isArray,
    code: (name) => `
            if(uv["${name}"] !== ud["${name}"].value)
            {
                ud["${name}"].value = uv["${name}"]
                gl.uniform1f(ud["${name}"].location, uv["${name}"])
            }
            `
  },
  {
    test: (data, uniform) => (data.type === "sampler2D" || data.type === "samplerCube" || data.type === "sampler2DArray") && data.size === 1 && !data.isArray && (uniform == null || uniform.castToBaseTexture !== void 0),
    code: (name) => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${name}"], t);

            if(ud["${name}"].value !== t)
            {
                ud["${name}"].value = t;
                gl.uniform1i(ud["${name}"].location, t);
; // eslint-disable-line max-len
            }`
  },
  {
    test: (data, uniform) => data.type === "mat3" && data.size === 1 && !data.isArray && uniform.a !== void 0,
    code: (name) => `
            gl.uniformMatrix3fv(ud["${name}"].location, false, uv["${name}"].toArray(true));
            `,
    codeUbo: (name) => `
                var ${name}_matrix = uv.${name}.toArray(true);

                data[offset] = ${name}_matrix[0];
                data[offset+1] = ${name}_matrix[1];
                data[offset+2] = ${name}_matrix[2];
        
                data[offset + 4] = ${name}_matrix[3];
                data[offset + 5] = ${name}_matrix[4];
                data[offset + 6] = ${name}_matrix[5];
        
                data[offset + 8] = ${name}_matrix[6];
                data[offset + 9] = ${name}_matrix[7];
                data[offset + 10] = ${name}_matrix[8];
            `
  },
  {
    test: (data, uniform) => data.type === "vec2" && data.size === 1 && !data.isArray && uniform.x !== void 0,
    code: (name) => `
                cv = ud["${name}"].value;
                v = uv["${name}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${name}"].location, v.x, v.y);
                }`,
    codeUbo: (name) => `
                v = uv.${name};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `
  },
  {
    test: (data) => data.type === "vec2" && data.size === 1 && !data.isArray,
    code: (name) => `
                cv = ud["${name}"].value;
                v = uv["${name}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${name}"].location, v[0], v[1]);
                }
            `
  },
  {
    test: (data, uniform) => data.type === "vec4" && data.size === 1 && !data.isArray && uniform.width !== void 0,
    code: (name) => `
                cv = ud["${name}"].value;
                v = uv["${name}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${name}"].location, v.x, v.y, v.width, v.height)
                }`,
    codeUbo: (name) => `
                    v = uv.${name};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `
  },
  {
    test: (data, uniform) => data.type === "vec4" && data.size === 1 && !data.isArray && uniform.red !== void 0,
    code: (name) => `
                cv = ud["${name}"].value;
                v = uv["${name}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${name}"].location, v.red, v.green, v.blue, v.alpha)
                }`,
    codeUbo: (name) => `
                    v = uv.${name};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `
  },
  {
    test: (data, uniform) => data.type === "vec3" && data.size === 1 && !data.isArray && uniform.red !== void 0,
    code: (name) => `
                cv = ud["${name}"].value;
                v = uv["${name}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${name}"].location, v.red, v.green, v.blue)
                }`,
    codeUbo: (name) => `
                    v = uv.${name};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `
  },
  {
    test: (data) => data.type === "vec4" && data.size === 1 && !data.isArray,
    code: (name) => `
                cv = ud["${name}"].value;
                v = uv["${name}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${name}"].location, v[0], v[1], v[2], v[3])
                }`
  }
];

const GLSL_TO_SINGLE_SETTERS_CACHED = {
  float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
  vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
  vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
  vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
  int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
  ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
  ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
  uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
  uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
  uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
  uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
  bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
  bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
  bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
  bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
  mat2: "gl.uniformMatrix2fv(location, false, v)",
  mat3: "gl.uniformMatrix3fv(location, false, v)",
  mat4: "gl.uniformMatrix4fv(location, false, v)",
  sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`
};
const GLSL_TO_ARRAY_SETTERS = {
  float: `gl.uniform1fv(location, v)`,
  vec2: `gl.uniform2fv(location, v)`,
  vec3: `gl.uniform3fv(location, v)`,
  vec4: "gl.uniform4fv(location, v)",
  mat4: "gl.uniformMatrix4fv(location, false, v)",
  mat3: "gl.uniformMatrix3fv(location, false, v)",
  mat2: "gl.uniformMatrix2fv(location, false, v)",
  int: "gl.uniform1iv(location, v)",
  ivec2: "gl.uniform2iv(location, v)",
  ivec3: "gl.uniform3iv(location, v)",
  ivec4: "gl.uniform4iv(location, v)",
  uint: "gl.uniform1uiv(location, v)",
  uvec2: "gl.uniform2uiv(location, v)",
  uvec3: "gl.uniform3uiv(location, v)",
  uvec4: "gl.uniform4uiv(location, v)",
  bool: "gl.uniform1iv(location, v)",
  bvec2: "gl.uniform2iv(location, v)",
  bvec3: "gl.uniform3iv(location, v)",
  bvec4: "gl.uniform4iv(location, v)",
  sampler2D: "gl.uniform1iv(location, v)",
  samplerCube: "gl.uniform1iv(location, v)",
  sampler2DArray: "gl.uniform1iv(location, v)"
};
function generateUniformsSync(group, uniformData) {
  const funcFragments = [`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];
  for (const i in group.uniforms) {
    const data = uniformData[i];
    if (!data) {
      if (group.uniforms[i]?.group) {
        if (group.uniforms[i].ubo) {
          funcFragments.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${i}, '${i}');
                    `);
        } else {
          funcFragments.push(`
                        renderer.shader.syncUniformGroup(uv.${i}, syncData);
                    `);
        }
      }
      continue;
    }
    const uniform = group.uniforms[i];
    let parsed = false;
    for (let j = 0; j < uniformParsers.length; j++) {
      if (uniformParsers[j].test(data, uniform)) {
        funcFragments.push(uniformParsers[j].code(i, uniform));
        parsed = true;
        break;
      }
    }
    if (!parsed) {
      const templateType = data.size === 1 && !data.isArray ? GLSL_TO_SINGLE_SETTERS_CACHED : GLSL_TO_ARRAY_SETTERS;
      const template = templateType[data.type].replace("location", `ud["${i}"].location`);
      funcFragments.push(`
            cu = ud["${i}"];
            cv = cu.value;
            v = uv["${i}"];
            ${template};`);
    }
  }
  return new Function("ud", "uv", "renderer", "syncData", funcFragments.join("\n"));
}

const unknownContext = {};
let context = unknownContext;
function getTestContext() {
  if (context === unknownContext || context?.isContextLost()) {
    const canvas = settings.ADAPTER.createCanvas();
    let gl;
    if (settings.PREFER_ENV >= ENV.WEBGL2) {
      gl = canvas.getContext("webgl2", {});
    }
    if (!gl) {
      gl = canvas.getContext("webgl", {}) || canvas.getContext("experimental-webgl", {});
      if (!gl) {
        gl = null;
      } else {
        gl.getExtension("WEBGL_draw_buffers");
      }
    }
    context = gl;
  }
  return context;
}

let maxFragmentPrecision;
function getMaxFragmentPrecision() {
  if (!maxFragmentPrecision) {
    maxFragmentPrecision = PRECISION.MEDIUM;
    const gl = getTestContext();
    if (gl) {
      if (gl.getShaderPrecisionFormat) {
        const shaderFragment = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
        maxFragmentPrecision = shaderFragment.precision ? PRECISION.HIGH : PRECISION.MEDIUM;
      }
    }
  }
  return maxFragmentPrecision;
}

function logPrettyShaderError(gl, shader) {
  const shaderSrc = gl.getShaderSource(shader).split("\n").map((line, index) => `${index}: ${line}`);
  const shaderLog = gl.getShaderInfoLog(shader);
  const splitShader = shaderLog.split("\n");
  const dedupe = {};
  const lineNumbers = splitShader.map((line) => parseFloat(line.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter((n) => {
    if (n && !dedupe[n]) {
      dedupe[n] = true;
      return true;
    }
    return false;
  });
  const logArgs = [""];
  lineNumbers.forEach((number) => {
    shaderSrc[number - 1] = `%c${shaderSrc[number - 1]}%c`;
    logArgs.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
  });
  const fragmentSourceToLog = shaderSrc.join("\n");
  logArgs[0] = fragmentSourceToLog;
  console.error(shaderLog);
  console.groupCollapsed("click to view full shader code");
  console.warn(...logArgs);
  console.groupEnd();
}
function logProgramError(gl, program, vertexShader, fragmentShader) {
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      logPrettyShaderError(gl, vertexShader);
    }
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      logPrettyShaderError(gl, fragmentShader);
    }
    console.error("PixiJS Error: Could not initialize shader.");
    if (gl.getProgramInfoLog(program) !== "") {
      console.warn("PixiJS Warning: gl.getProgramInfoLog()", gl.getProgramInfoLog(program));
    }
  }
}

const GLSL_TO_SIZE = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  int: 1,
  ivec2: 2,
  ivec3: 3,
  ivec4: 4,
  uint: 1,
  uvec2: 2,
  uvec3: 3,
  uvec4: 4,
  bool: 1,
  bvec2: 2,
  bvec3: 3,
  bvec4: 4,
  mat2: 4,
  mat3: 9,
  mat4: 16,
  sampler2D: 1
};
function mapSize(type) {
  return GLSL_TO_SIZE[type];
}

let GL_TABLE = null;
const GL_TO_GLSL_TYPES = {
  FLOAT: "float",
  FLOAT_VEC2: "vec2",
  FLOAT_VEC3: "vec3",
  FLOAT_VEC4: "vec4",
  INT: "int",
  INT_VEC2: "ivec2",
  INT_VEC3: "ivec3",
  INT_VEC4: "ivec4",
  UNSIGNED_INT: "uint",
  UNSIGNED_INT_VEC2: "uvec2",
  UNSIGNED_INT_VEC3: "uvec3",
  UNSIGNED_INT_VEC4: "uvec4",
  BOOL: "bool",
  BOOL_VEC2: "bvec2",
  BOOL_VEC3: "bvec3",
  BOOL_VEC4: "bvec4",
  FLOAT_MAT2: "mat2",
  FLOAT_MAT3: "mat3",
  FLOAT_MAT4: "mat4",
  SAMPLER_2D: "sampler2D",
  INT_SAMPLER_2D: "sampler2D",
  UNSIGNED_INT_SAMPLER_2D: "sampler2D",
  SAMPLER_CUBE: "samplerCube",
  INT_SAMPLER_CUBE: "samplerCube",
  UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
  SAMPLER_2D_ARRAY: "sampler2DArray",
  INT_SAMPLER_2D_ARRAY: "sampler2DArray",
  UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
};
function mapType(gl, type) {
  if (!GL_TABLE) {
    const typeNames = Object.keys(GL_TO_GLSL_TYPES);
    GL_TABLE = {};
    for (let i = 0; i < typeNames.length; ++i) {
      const tn = typeNames[i];
      GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
    }
  }
  return GL_TABLE[type];
}

function setPrecision(src, requestedPrecision, maxSupportedPrecision) {
  if (src.substring(0, 9) !== "precision") {
    let precision = requestedPrecision;
    if (requestedPrecision === PRECISION.HIGH && maxSupportedPrecision !== PRECISION.HIGH) {
      precision = PRECISION.MEDIUM;
    }
    return `precision ${precision} float;
${src}`;
  } else if (maxSupportedPrecision !== PRECISION.HIGH && src.substring(0, 15) === "precision highp") {
    return src.replace("precision highp", "precision mediump");
  }
  return src;
}

let unsafeEval;
function unsafeEvalSupported() {
  if (typeof unsafeEval === "boolean") {
    return unsafeEval;
  }
  try {
    const func = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
    unsafeEval = func({ a: "b" }, "a", "b") === true;
  } catch (e) {
    unsafeEval = false;
  }
  return unsafeEval;
}

let UID$2 = 0;
const nameCache = {};
const _Program = class {
  constructor(vertexSrc, fragmentSrc, name = "pixi-shader", extra = {}) {
    this.extra = {};
    this.id = UID$2++;
    this.vertexSrc = vertexSrc || _Program.defaultVertexSrc;
    this.fragmentSrc = fragmentSrc || _Program.defaultFragmentSrc;
    this.vertexSrc = this.vertexSrc.trim();
    this.fragmentSrc = this.fragmentSrc.trim();
    this.extra = extra;
    if (this.vertexSrc.substring(0, 8) !== "#version") {
      name = name.replace(/\s+/g, "-");
      if (nameCache[name]) {
        nameCache[name]++;
        name += `-${nameCache[name]}`;
      } else {
        nameCache[name] = 1;
      }
      this.vertexSrc = `#define SHADER_NAME ${name}
${this.vertexSrc}`;
      this.fragmentSrc = `#define SHADER_NAME ${name}
${this.fragmentSrc}`;
      this.vertexSrc = setPrecision(this.vertexSrc, _Program.defaultVertexPrecision, PRECISION.HIGH);
      this.fragmentSrc = setPrecision(this.fragmentSrc, _Program.defaultFragmentPrecision, getMaxFragmentPrecision());
    }
    this.glPrograms = {};
    this.syncUniforms = null;
  }
  static get defaultVertexSrc() {
    return defaultVertex$2;
  }
  static get defaultFragmentSrc() {
    return defaultFragment$2;
  }
  static from(vertexSrc, fragmentSrc, name) {
    const key = vertexSrc + fragmentSrc;
    let program = ProgramCache[key];
    if (!program) {
      ProgramCache[key] = program = new _Program(vertexSrc, fragmentSrc, name);
    }
    return program;
  }
};
let Program = _Program;
Program.defaultVertexPrecision = PRECISION.HIGH;
Program.defaultFragmentPrecision = isMobile.apple.device ? PRECISION.HIGH : PRECISION.MEDIUM;

let UID$1 = 0;
class UniformGroup {
  constructor(uniforms, isStatic, isUbo) {
    this.group = true;
    this.syncUniforms = {};
    this.dirtyId = 0;
    this.id = UID$1++;
    this.static = !!isStatic;
    this.ubo = !!isUbo;
    if (uniforms instanceof Buffer) {
      this.buffer = uniforms;
      this.buffer.type = BUFFER_TYPE.UNIFORM_BUFFER;
      this.autoManage = false;
      this.ubo = true;
    } else {
      this.uniforms = uniforms;
      if (this.ubo) {
        this.buffer = new Buffer(new Float32Array(1));
        this.buffer.type = BUFFER_TYPE.UNIFORM_BUFFER;
        this.autoManage = true;
      }
    }
  }
  update() {
    this.dirtyId++;
    if (!this.autoManage && this.buffer) {
      this.buffer.update();
    }
  }
  add(name, uniforms, _static) {
    if (!this.ubo) {
      this.uniforms[name] = new UniformGroup(uniforms, _static);
    } else {
      throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
    }
  }
  static from(uniforms, _static, _ubo) {
    return new UniformGroup(uniforms, _static, _ubo);
  }
  static uboFrom(uniforms, _static) {
    return new UniformGroup(uniforms, _static ?? true, true);
  }
}

class Shader {
  constructor(program, uniforms) {
    this.uniformBindCount = 0;
    this.program = program;
    if (uniforms) {
      if (uniforms instanceof UniformGroup) {
        this.uniformGroup = uniforms;
      } else {
        this.uniformGroup = new UniformGroup(uniforms);
      }
    } else {
      this.uniformGroup = new UniformGroup({});
    }
    this.disposeRunner = new Runner("disposeShader");
  }
  checkUniformExists(name, group) {
    if (group.uniforms[name]) {
      return true;
    }
    for (const i in group.uniforms) {
      const uniform = group.uniforms[i];
      if (uniform.group) {
        if (this.checkUniformExists(name, uniform)) {
          return true;
        }
      }
    }
    return false;
  }
  destroy() {
    this.uniformGroup = null;
    this.disposeRunner.emit(this);
    this.disposeRunner.destroy();
  }
  get uniforms() {
    return this.uniformGroup.uniforms;
  }
  static from(vertexSrc, fragmentSrc, uniforms) {
    const program = Program.from(vertexSrc, fragmentSrc);
    return new Shader(program, uniforms);
  }
}

class BatchShaderGenerator {
  constructor(vertexSrc, fragTemplate) {
    this.vertexSrc = vertexSrc;
    this.fragTemplate = fragTemplate;
    this.programCache = {};
    this.defaultGroupCache = {};
    if (!fragTemplate.includes("%count%")) {
      throw new Error('Fragment template must contain "%count%".');
    }
    if (!fragTemplate.includes("%forloop%")) {
      throw new Error('Fragment template must contain "%forloop%".');
    }
  }
  generateShader(maxTextures) {
    if (!this.programCache[maxTextures]) {
      const sampleValues = new Int32Array(maxTextures);
      for (let i = 0; i < maxTextures; i++) {
        sampleValues[i] = i;
      }
      this.defaultGroupCache[maxTextures] = UniformGroup.from({ uSamplers: sampleValues }, true);
      let fragmentSrc = this.fragTemplate;
      fragmentSrc = fragmentSrc.replace(/%count%/gi, `${maxTextures}`);
      fragmentSrc = fragmentSrc.replace(/%forloop%/gi, this.generateSampleSrc(maxTextures));
      this.programCache[maxTextures] = new Program(this.vertexSrc, fragmentSrc);
    }
    const uniforms = {
      tint: new Float32Array([1, 1, 1, 1]),
      translationMatrix: new Matrix(),
      default: this.defaultGroupCache[maxTextures]
    };
    return new Shader(this.programCache[maxTextures], uniforms);
  }
  generateSampleSrc(maxTextures) {
    let src = "";
    src += "\n";
    src += "\n";
    for (let i = 0; i < maxTextures; i++) {
      if (i > 0) {
        src += "\nelse ";
      }
      if (i < maxTextures - 1) {
        src += `if(vTextureId < ${i}.5)`;
      }
      src += "\n{";
      src += `
	color = texture2D(uSamplers[${i}], vTextureCoord);`;
      src += "\n}";
    }
    src += "\n";
    src += "\n";
    return src;
  }
}

class BatchTextureArray {
  constructor() {
    this.elements = [];
    this.ids = [];
    this.count = 0;
  }
  clear() {
    for (let i = 0; i < this.count; i++) {
      this.elements[i] = null;
    }
    this.count = 0;
  }
}

function canUploadSameBuffer() {
  return !isMobile.apple.device;
}

function maxRecommendedTextures(max) {
  let allowMax = true;
  const navigator = settings.ADAPTER.getNavigator();
  if (isMobile.tablet || isMobile.phone) {
    if (isMobile.apple.device) {
      const match = navigator.userAgent.match(/OS (\d+)_(\d+)?/);
      if (match) {
        const majorVersion = parseInt(match[1], 10);
        if (majorVersion < 11) {
          allowMax = false;
        }
      }
    }
    if (isMobile.android.device) {
      const match = navigator.userAgent.match(/Android\s([0-9.]*)/);
      if (match) {
        const majorVersion = parseInt(match[1], 10);
        if (majorVersion < 7) {
          allowMax = false;
        }
      }
    }
  }
  return allowMax ? max : 4;
}

class ObjectRenderer {
  constructor(renderer) {
    this.renderer = renderer;
  }
  flush() {
  }
  destroy() {
    this.renderer = null;
  }
  start() {
  }
  stop() {
    this.flush();
  }
  render(_object) {
  }
}

var defaultFragment$1 = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n";

var defaultVertex$1 = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n";

const _BatchRenderer = class extends ObjectRenderer {
  constructor(renderer) {
    super(renderer);
    this.setShaderGenerator();
    this.geometryClass = BatchGeometry;
    this.vertexSize = 6;
    this.state = State.for2d();
    this.size = _BatchRenderer.defaultBatchSize * 4;
    this._vertexCount = 0;
    this._indexCount = 0;
    this._bufferedElements = [];
    this._bufferedTextures = [];
    this._bufferSize = 0;
    this._shader = null;
    this._packedGeometries = [];
    this._packedGeometryPoolSize = 2;
    this._flushId = 0;
    this._aBuffers = {};
    this._iBuffers = {};
    this.maxTextures = 1;
    this.renderer.on("prerender", this.onPrerender, this);
    renderer.runners.contextChange.add(this);
    this._dcIndex = 0;
    this._aIndex = 0;
    this._iIndex = 0;
    this._attributeBuffer = null;
    this._indexBuffer = null;
    this._tempBoundTextures = [];
  }
  static get defaultMaxTextures() {
    this._defaultMaxTextures = this._defaultMaxTextures ?? maxRecommendedTextures(32);
    return this._defaultMaxTextures;
  }
  static set defaultMaxTextures(value) {
    this._defaultMaxTextures = value;
  }
  static get canUploadSameBuffer() {
    this._canUploadSameBuffer = this._canUploadSameBuffer ?? canUploadSameBuffer();
    return this._canUploadSameBuffer;
  }
  static set canUploadSameBuffer(value) {
    this._canUploadSameBuffer = value;
  }
  get MAX_TEXTURES() {
    deprecation("7.1.0", "BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures");
    return this.maxTextures;
  }
  static get defaultVertexSrc() {
    return defaultVertex$1;
  }
  static get defaultFragmentTemplate() {
    return defaultFragment$1;
  }
  setShaderGenerator({
    vertex = _BatchRenderer.defaultVertexSrc,
    fragment = _BatchRenderer.defaultFragmentTemplate
  } = {}) {
    this.shaderGenerator = new BatchShaderGenerator(vertex, fragment);
  }
  contextChange() {
    const gl = this.renderer.gl;
    if (settings.PREFER_ENV === ENV.WEBGL_LEGACY) {
      this.maxTextures = 1;
    } else {
      this.maxTextures = Math.min(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), _BatchRenderer.defaultMaxTextures);
      this.maxTextures = checkMaxIfStatementsInShader(this.maxTextures, gl);
    }
    this._shader = this.shaderGenerator.generateShader(this.maxTextures);
    for (let i = 0; i < this._packedGeometryPoolSize; i++) {
      this._packedGeometries[i] = new this.geometryClass();
    }
    this.initFlushBuffers();
  }
  initFlushBuffers() {
    const {
      _drawCallPool,
      _textureArrayPool
    } = _BatchRenderer;
    const MAX_SPRITES = this.size / 4;
    const MAX_TA = Math.floor(MAX_SPRITES / this.maxTextures) + 1;
    while (_drawCallPool.length < MAX_SPRITES) {
      _drawCallPool.push(new BatchDrawCall());
    }
    while (_textureArrayPool.length < MAX_TA) {
      _textureArrayPool.push(new BatchTextureArray());
    }
    for (let i = 0; i < this.maxTextures; i++) {
      this._tempBoundTextures[i] = null;
    }
  }
  onPrerender() {
    this._flushId = 0;
  }
  render(element) {
    if (!element._texture.valid) {
      return;
    }
    if (this._vertexCount + element.vertexData.length / 2 > this.size) {
      this.flush();
    }
    this._vertexCount += element.vertexData.length / 2;
    this._indexCount += element.indices.length;
    this._bufferedTextures[this._bufferSize] = element._texture.baseTexture;
    this._bufferedElements[this._bufferSize++] = element;
  }
  buildTexturesAndDrawCalls() {
    const {
      _bufferedTextures: textures,
      maxTextures
    } = this;
    const textureArrays = _BatchRenderer._textureArrayPool;
    const batch = this.renderer.batch;
    const boundTextures = this._tempBoundTextures;
    const touch = this.renderer.textureGC.count;
    let TICK = ++BaseTexture._globalBatch;
    let countTexArrays = 0;
    let texArray = textureArrays[0];
    let start = 0;
    batch.copyBoundTextures(boundTextures, maxTextures);
    for (let i = 0; i < this._bufferSize; ++i) {
      const tex = textures[i];
      textures[i] = null;
      if (tex._batchEnabled === TICK) {
        continue;
      }
      if (texArray.count >= maxTextures) {
        batch.boundArray(texArray, boundTextures, TICK, maxTextures);
        this.buildDrawCalls(texArray, start, i);
        start = i;
        texArray = textureArrays[++countTexArrays];
        ++TICK;
      }
      tex._batchEnabled = TICK;
      tex.touched = touch;
      texArray.elements[texArray.count++] = tex;
    }
    if (texArray.count > 0) {
      batch.boundArray(texArray, boundTextures, TICK, maxTextures);
      this.buildDrawCalls(texArray, start, this._bufferSize);
      ++countTexArrays;
      ++TICK;
    }
    for (let i = 0; i < boundTextures.length; i++) {
      boundTextures[i] = null;
    }
    BaseTexture._globalBatch = TICK;
  }
  buildDrawCalls(texArray, start, finish) {
    const {
      _bufferedElements: elements,
      _attributeBuffer,
      _indexBuffer,
      vertexSize
    } = this;
    const drawCalls = _BatchRenderer._drawCallPool;
    let dcIndex = this._dcIndex;
    let aIndex = this._aIndex;
    let iIndex = this._iIndex;
    let drawCall = drawCalls[dcIndex];
    drawCall.start = this._iIndex;
    drawCall.texArray = texArray;
    for (let i = start; i < finish; ++i) {
      const sprite = elements[i];
      const tex = sprite._texture.baseTexture;
      const spriteBlendMode = premultiplyBlendMode[tex.alphaMode ? 1 : 0][sprite.blendMode];
      elements[i] = null;
      if (start < i && drawCall.blend !== spriteBlendMode) {
        drawCall.size = iIndex - drawCall.start;
        start = i;
        drawCall = drawCalls[++dcIndex];
        drawCall.texArray = texArray;
        drawCall.start = iIndex;
      }
      this.packInterleavedGeometry(sprite, _attributeBuffer, _indexBuffer, aIndex, iIndex);
      aIndex += sprite.vertexData.length / 2 * vertexSize;
      iIndex += sprite.indices.length;
      drawCall.blend = spriteBlendMode;
    }
    if (start < finish) {
      drawCall.size = iIndex - drawCall.start;
      ++dcIndex;
    }
    this._dcIndex = dcIndex;
    this._aIndex = aIndex;
    this._iIndex = iIndex;
  }
  bindAndClearTexArray(texArray) {
    const textureSystem = this.renderer.texture;
    for (let j = 0; j < texArray.count; j++) {
      textureSystem.bind(texArray.elements[j], texArray.ids[j]);
      texArray.elements[j] = null;
    }
    texArray.count = 0;
  }
  updateGeometry() {
    const {
      _packedGeometries: packedGeometries,
      _attributeBuffer: attributeBuffer,
      _indexBuffer: indexBuffer
    } = this;
    if (!_BatchRenderer.canUploadSameBuffer) {
      if (this._packedGeometryPoolSize <= this._flushId) {
        this._packedGeometryPoolSize++;
        packedGeometries[this._flushId] = new this.geometryClass();
      }
      packedGeometries[this._flushId]._buffer.update(attributeBuffer.rawBinaryData);
      packedGeometries[this._flushId]._indexBuffer.update(indexBuffer);
      this.renderer.geometry.bind(packedGeometries[this._flushId]);
      this.renderer.geometry.updateBuffers();
      this._flushId++;
    } else {
      packedGeometries[this._flushId]._buffer.update(attributeBuffer.rawBinaryData);
      packedGeometries[this._flushId]._indexBuffer.update(indexBuffer);
      this.renderer.geometry.updateBuffers();
    }
  }
  drawBatches() {
    const dcCount = this._dcIndex;
    const { gl, state: stateSystem } = this.renderer;
    const drawCalls = _BatchRenderer._drawCallPool;
    let curTexArray = null;
    for (let i = 0; i < dcCount; i++) {
      const { texArray, type, size, start, blend } = drawCalls[i];
      if (curTexArray !== texArray) {
        curTexArray = texArray;
        this.bindAndClearTexArray(texArray);
      }
      this.state.blendMode = blend;
      stateSystem.set(this.state);
      gl.drawElements(type, size, gl.UNSIGNED_SHORT, start * 2);
    }
  }
  flush() {
    if (this._vertexCount === 0) {
      return;
    }
    this._attributeBuffer = this.getAttributeBuffer(this._vertexCount);
    this._indexBuffer = this.getIndexBuffer(this._indexCount);
    this._aIndex = 0;
    this._iIndex = 0;
    this._dcIndex = 0;
    this.buildTexturesAndDrawCalls();
    this.updateGeometry();
    this.drawBatches();
    this._bufferSize = 0;
    this._vertexCount = 0;
    this._indexCount = 0;
  }
  start() {
    this.renderer.state.set(this.state);
    this.renderer.texture.ensureSamplerType(this.maxTextures);
    this.renderer.shader.bind(this._shader);
    if (_BatchRenderer.canUploadSameBuffer) {
      this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
    }
  }
  stop() {
    this.flush();
  }
  destroy() {
    for (let i = 0; i < this._packedGeometryPoolSize; i++) {
      if (this._packedGeometries[i]) {
        this._packedGeometries[i].destroy();
      }
    }
    this.renderer.off("prerender", this.onPrerender, this);
    this._aBuffers = null;
    this._iBuffers = null;
    this._packedGeometries = null;
    this._attributeBuffer = null;
    this._indexBuffer = null;
    if (this._shader) {
      this._shader.destroy();
      this._shader = null;
    }
    super.destroy();
  }
  getAttributeBuffer(size) {
    const roundedP2 = nextPow2(Math.ceil(size / 8));
    const roundedSizeIndex = log2(roundedP2);
    const roundedSize = roundedP2 * 8;
    if (this._aBuffers.length <= roundedSizeIndex) {
      this._iBuffers.length = roundedSizeIndex + 1;
    }
    let buffer = this._aBuffers[roundedSize];
    if (!buffer) {
      this._aBuffers[roundedSize] = buffer = new ViewableBuffer(roundedSize * this.vertexSize * 4);
    }
    return buffer;
  }
  getIndexBuffer(size) {
    const roundedP2 = nextPow2(Math.ceil(size / 12));
    const roundedSizeIndex = log2(roundedP2);
    const roundedSize = roundedP2 * 12;
    if (this._iBuffers.length <= roundedSizeIndex) {
      this._iBuffers.length = roundedSizeIndex + 1;
    }
    let buffer = this._iBuffers[roundedSizeIndex];
    if (!buffer) {
      this._iBuffers[roundedSizeIndex] = buffer = new Uint16Array(roundedSize);
    }
    return buffer;
  }
  packInterleavedGeometry(element, attributeBuffer, indexBuffer, aIndex, iIndex) {
    const {
      uint32View,
      float32View
    } = attributeBuffer;
    const packedVertices = aIndex / this.vertexSize;
    const uvs = element.uvs;
    const indicies = element.indices;
    const vertexData = element.vertexData;
    const textureId = element._texture.baseTexture._batchLocation;
    const alpha = Math.min(element.worldAlpha, 1);
    const argb = Color.shared.setValue(element._tintRGB).toPremultiplied(alpha, element._texture.baseTexture.alphaMode > 0);
    for (let i = 0; i < vertexData.length; i += 2) {
      float32View[aIndex++] = vertexData[i];
      float32View[aIndex++] = vertexData[i + 1];
      float32View[aIndex++] = uvs[i];
      float32View[aIndex++] = uvs[i + 1];
      uint32View[aIndex++] = argb;
      float32View[aIndex++] = textureId;
    }
    for (let i = 0; i < indicies.length; i++) {
      indexBuffer[iIndex++] = packedVertices + indicies[i];
    }
  }
};
let BatchRenderer = _BatchRenderer;
BatchRenderer.defaultBatchSize = 4096;
BatchRenderer.extension = {
  name: "batch",
  type: ExtensionType.RendererPlugin
};
BatchRenderer._drawCallPool = [];
BatchRenderer._textureArrayPool = [];
extensions.add(BatchRenderer);

var defaultFragment = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n";

var defaultVertex = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";

const _Filter = class extends Shader {
  constructor(vertexSrc, fragmentSrc, uniforms) {
    const program = Program.from(vertexSrc || _Filter.defaultVertexSrc, fragmentSrc || _Filter.defaultFragmentSrc);
    super(program, uniforms);
    this.padding = 0;
    this.resolution = _Filter.defaultResolution;
    this.multisample = _Filter.defaultMultisample;
    this.enabled = true;
    this.autoFit = true;
    this.state = new State();
  }
  apply(filterManager, input, output, clearMode, _currentState) {
    filterManager.applyFilter(this, input, output, clearMode);
  }
  get blendMode() {
    return this.state.blendMode;
  }
  set blendMode(value) {
    this.state.blendMode = value;
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(value) {
    this._resolution = value;
  }
  static get defaultVertexSrc() {
    return defaultVertex;
  }
  static get defaultFragmentSrc() {
    return defaultFragment;
  }
};
let Filter = _Filter;
Filter.defaultResolution = 1;
Filter.defaultMultisample = MSAA_QUALITY.NONE;

class BackgroundSystem {
  constructor() {
    this.clearBeforeRender = true;
    this._backgroundColor = new Color(0);
    this.alpha = 1;
  }
  init(options) {
    this.clearBeforeRender = options.clearBeforeRender;
    const { backgroundColor, background, backgroundAlpha } = options;
    const color = background ?? backgroundColor;
    if (color !== void 0) {
      this.color = color;
    }
    this.alpha = backgroundAlpha;
  }
  get color() {
    return this._backgroundColor.value;
  }
  set color(value) {
    this._backgroundColor.setValue(value);
  }
  get alpha() {
    return this._backgroundColor.alpha;
  }
  set alpha(value) {
    this._backgroundColor.setAlpha(value);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  destroy() {
  }
}
BackgroundSystem.defaultOptions = {
  backgroundAlpha: 1,
  backgroundColor: 0,
  clearBeforeRender: true
};
BackgroundSystem.extension = {
  type: [
    ExtensionType.RendererSystem,
    ExtensionType.CanvasRendererSystem
  ],
  name: "background"
};
extensions.add(BackgroundSystem);

class BatchSystem {
  constructor(renderer) {
    this.renderer = renderer;
    this.emptyRenderer = new ObjectRenderer(renderer);
    this.currentRenderer = this.emptyRenderer;
  }
  setObjectRenderer(objectRenderer) {
    if (this.currentRenderer === objectRenderer) {
      return;
    }
    this.currentRenderer.stop();
    this.currentRenderer = objectRenderer;
    this.currentRenderer.start();
  }
  flush() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  reset() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  copyBoundTextures(arr, maxTextures) {
    const { boundTextures } = this.renderer.texture;
    for (let i = maxTextures - 1; i >= 0; --i) {
      arr[i] = boundTextures[i] || null;
      if (arr[i]) {
        arr[i]._batchLocation = i;
      }
    }
  }
  boundArray(texArray, boundTextures, batchId, maxTextures) {
    const { elements, ids, count } = texArray;
    let j = 0;
    for (let i = 0; i < count; i++) {
      const tex = elements[i];
      const loc = tex._batchLocation;
      if (loc >= 0 && loc < maxTextures && boundTextures[loc] === tex) {
        ids[i] = loc;
        continue;
      }
      while (j < maxTextures) {
        const bound = boundTextures[j];
        if (bound && bound._batchEnabled === batchId && bound._batchLocation === j) {
          j++;
          continue;
        }
        ids[i] = j;
        tex._batchLocation = j;
        boundTextures[j] = tex;
        break;
      }
    }
  }
  destroy() {
    this.renderer = null;
  }
}
BatchSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "batch"
};
extensions.add(BatchSystem);

let CONTEXT_UID_COUNTER = 0;
class ContextSystem {
  constructor(renderer) {
    this.renderer = renderer;
    this.webGLVersion = 1;
    this.extensions = {};
    this.supports = {
      uint32Indices: false
    };
    this.handleContextLost = this.handleContextLost.bind(this);
    this.handleContextRestored = this.handleContextRestored.bind(this);
  }
  get isLost() {
    return !this.gl || this.gl.isContextLost();
  }
  contextChange(gl) {
    this.gl = gl;
    this.renderer.gl = gl;
    this.renderer.CONTEXT_UID = CONTEXT_UID_COUNTER++;
  }
  init(options) {
    if (options.context) {
      this.initFromContext(options.context);
    } else {
      const alpha = this.renderer.background.alpha < 1;
      const premultipliedAlpha = options.premultipliedAlpha;
      this.preserveDrawingBuffer = options.preserveDrawingBuffer;
      this.useContextAlpha = options.useContextAlpha;
      this.powerPreference = options.powerPreference;
      this.initFromOptions({
        alpha,
        premultipliedAlpha,
        antialias: options.antialias,
        stencil: true,
        preserveDrawingBuffer: options.preserveDrawingBuffer,
        powerPreference: options.powerPreference
      });
    }
  }
  initFromContext(gl) {
    this.gl = gl;
    this.validateContext(gl);
    this.renderer.gl = gl;
    this.renderer.CONTEXT_UID = CONTEXT_UID_COUNTER++;
    this.renderer.runners.contextChange.emit(gl);
    const view = this.renderer.view;
    if (view.addEventListener !== void 0) {
      view.addEventListener("webglcontextlost", this.handleContextLost, false);
      view.addEventListener("webglcontextrestored", this.handleContextRestored, false);
    }
  }
  initFromOptions(options) {
    const gl = this.createContext(this.renderer.view, options);
    this.initFromContext(gl);
  }
  createContext(canvas, options) {
    let gl;
    if (settings.PREFER_ENV >= ENV.WEBGL2) {
      gl = canvas.getContext("webgl2", options);
    }
    if (gl) {
      this.webGLVersion = 2;
    } else {
      this.webGLVersion = 1;
      gl = canvas.getContext("webgl", options) || canvas.getContext("experimental-webgl", options);
      if (!gl) {
        throw new Error("This browser does not support WebGL. Try using the canvas renderer");
      }
    }
    this.gl = gl;
    this.getExtensions();
    return this.gl;
  }
  getExtensions() {
    const { gl } = this;
    const common = {
      loseContext: gl.getExtension("WEBGL_lose_context"),
      anisotropicFiltering: gl.getExtension("EXT_texture_filter_anisotropic"),
      floatTextureLinear: gl.getExtension("OES_texture_float_linear"),
      s3tc: gl.getExtension("WEBGL_compressed_texture_s3tc"),
      s3tc_sRGB: gl.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
      etc: gl.getExtension("WEBGL_compressed_texture_etc"),
      etc1: gl.getExtension("WEBGL_compressed_texture_etc1"),
      pvrtc: gl.getExtension("WEBGL_compressed_texture_pvrtc") || gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
      atc: gl.getExtension("WEBGL_compressed_texture_atc"),
      astc: gl.getExtension("WEBGL_compressed_texture_astc")
    };
    if (this.webGLVersion === 1) {
      Object.assign(this.extensions, common, {
        drawBuffers: gl.getExtension("WEBGL_draw_buffers"),
        depthTexture: gl.getExtension("WEBGL_depth_texture"),
        vertexArrayObject: gl.getExtension("OES_vertex_array_object") || gl.getExtension("MOZ_OES_vertex_array_object") || gl.getExtension("WEBKIT_OES_vertex_array_object"),
        uint32ElementIndex: gl.getExtension("OES_element_index_uint"),
        floatTexture: gl.getExtension("OES_texture_float"),
        floatTextureLinear: gl.getExtension("OES_texture_float_linear"),
        textureHalfFloat: gl.getExtension("OES_texture_half_float"),
        textureHalfFloatLinear: gl.getExtension("OES_texture_half_float_linear")
      });
    } else if (this.webGLVersion === 2) {
      Object.assign(this.extensions, common, {
        colorBufferFloat: gl.getExtension("EXT_color_buffer_float")
      });
    }
  }
  handleContextLost(event) {
    event.preventDefault();
    setTimeout(() => {
      if (this.gl.isContextLost() && this.extensions.loseContext) {
        this.extensions.loseContext.restoreContext();
      }
    }, 0);
  }
  handleContextRestored() {
    this.renderer.runners.contextChange.emit(this.gl);
  }
  destroy() {
    const view = this.renderer.view;
    this.renderer = null;
    if (view.removeEventListener !== void 0) {
      view.removeEventListener("webglcontextlost", this.handleContextLost);
      view.removeEventListener("webglcontextrestored", this.handleContextRestored);
    }
    this.gl.useProgram(null);
    if (this.extensions.loseContext) {
      this.extensions.loseContext.loseContext();
    }
  }
  postrender() {
    if (this.renderer.objectRenderer.renderingToScreen) {
      this.gl.flush();
    }
  }
  validateContext(gl) {
    const attributes = gl.getContextAttributes();
    const isWebGl2 = "WebGL2RenderingContext" in globalThis && gl instanceof globalThis.WebGL2RenderingContext;
    if (isWebGl2) {
      this.webGLVersion = 2;
    }
    if (attributes && !attributes.stencil) {
      console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
    }
    const hasuint32 = isWebGl2 || !!gl.getExtension("OES_element_index_uint");
    this.supports.uint32Indices = hasuint32;
    if (!hasuint32) {
      console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly");
    }
  }
}
ContextSystem.defaultOptions = {
  context: null,
  antialias: false,
  premultipliedAlpha: true,
  preserveDrawingBuffer: false,
  powerPreference: "default"
};
ContextSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "context"
};
extensions.add(ContextSystem);

class DepthResource extends BufferResource {
  upload(renderer, baseTexture, glTexture) {
    const gl = renderer.gl;
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === ALPHA_MODES.UNPACK);
    const width = baseTexture.realWidth;
    const height = baseTexture.realHeight;
    if (glTexture.width === width && glTexture.height === height) {
      gl.texSubImage2D(baseTexture.target, 0, 0, 0, width, height, baseTexture.format, glTexture.type, this.data);
    } else {
      glTexture.width = width;
      glTexture.height = height;
      gl.texImage2D(baseTexture.target, 0, glTexture.internalFormat, width, height, 0, baseTexture.format, glTexture.type, this.data);
    }
    return true;
  }
}

class Framebuffer {
  constructor(width, height) {
    this.width = Math.round(width || 100);
    this.height = Math.round(height || 100);
    this.stencil = false;
    this.depth = false;
    this.dirtyId = 0;
    this.dirtyFormat = 0;
    this.dirtySize = 0;
    this.depthTexture = null;
    this.colorTextures = [];
    this.glFramebuffers = {};
    this.disposeRunner = new Runner("disposeFramebuffer");
    this.multisample = MSAA_QUALITY.NONE;
  }
  get colorTexture() {
    return this.colorTextures[0];
  }
  addColorTexture(index = 0, texture) {
    this.colorTextures[index] = texture || new BaseTexture(null, {
      scaleMode: SCALE_MODES.NEAREST,
      resolution: 1,
      mipmap: MIPMAP_MODES.OFF,
      width: this.width,
      height: this.height
    });
    this.dirtyId++;
    this.dirtyFormat++;
    return this;
  }
  addDepthTexture(texture) {
    this.depthTexture = texture || new BaseTexture(new DepthResource(null, { width: this.width, height: this.height }), {
      scaleMode: SCALE_MODES.NEAREST,
      resolution: 1,
      width: this.width,
      height: this.height,
      mipmap: MIPMAP_MODES.OFF,
      format: FORMATS.DEPTH_COMPONENT,
      type: TYPES.UNSIGNED_SHORT
    });
    this.dirtyId++;
    this.dirtyFormat++;
    return this;
  }
  enableDepth() {
    this.depth = true;
    this.dirtyId++;
    this.dirtyFormat++;
    return this;
  }
  enableStencil() {
    this.stencil = true;
    this.dirtyId++;
    this.dirtyFormat++;
    return this;
  }
  resize(width, height) {
    width = Math.round(width);
    height = Math.round(height);
    if (width === this.width && height === this.height)
      return;
    this.width = width;
    this.height = height;
    this.dirtyId++;
    this.dirtySize++;
    for (let i = 0; i < this.colorTextures.length; i++) {
      const texture = this.colorTextures[i];
      const resolution = texture.resolution;
      texture.setSize(width / resolution, height / resolution);
    }
    if (this.depthTexture) {
      const resolution = this.depthTexture.resolution;
      this.depthTexture.setSize(width / resolution, height / resolution);
    }
  }
  dispose() {
    this.disposeRunner.emit(this, false);
  }
  destroyDepthTexture() {
    if (this.depthTexture) {
      this.depthTexture.destroy();
      this.depthTexture = null;
      ++this.dirtyId;
      ++this.dirtyFormat;
    }
  }
}

class BaseRenderTexture extends BaseTexture {
  constructor(options = {}) {
    if (typeof options === "number") {
      const width = arguments[0];
      const height = arguments[1];
      const scaleMode = arguments[2];
      const resolution = arguments[3];
      options = { width, height, scaleMode, resolution };
    }
    options.width = options.width || 100;
    options.height = options.height || 100;
    options.multisample ?? (options.multisample = MSAA_QUALITY.NONE);
    super(null, options);
    this.mipmap = MIPMAP_MODES.OFF;
    this.valid = true;
    this._clear = new Color([0, 0, 0, 0]);
    this.framebuffer = new Framebuffer(this.realWidth, this.realHeight).addColorTexture(0, this);
    this.framebuffer.multisample = options.multisample;
    this.maskStack = [];
    this.filterStack = [{}];
  }
  set clearColor(value) {
    this._clear.setValue(value);
  }
  get clearColor() {
    return this._clear.value;
  }
  get clear() {
    return this._clear;
  }
  resize(desiredWidth, desiredHeight) {
    this.framebuffer.resize(desiredWidth * this.resolution, desiredHeight * this.resolution);
    this.setRealSize(this.framebuffer.width, this.framebuffer.height);
  }
  dispose() {
    this.framebuffer.dispose();
    super.dispose();
  }
  destroy() {
    super.destroy();
    this.framebuffer.destroyDepthTexture();
    this.framebuffer = null;
  }
}

class BaseImageResource extends Resource {
  constructor(source) {
    const sourceAny = source;
    const width = sourceAny.naturalWidth || sourceAny.videoWidth || sourceAny.width;
    const height = sourceAny.naturalHeight || sourceAny.videoHeight || sourceAny.height;
    super(width, height);
    this.source = source;
    this.noSubImage = false;
  }
  static crossOrigin(element, url, crossorigin) {
    if (crossorigin === void 0 && !url.startsWith("data:")) {
      element.crossOrigin = determineCrossOrigin(url);
    } else if (crossorigin !== false) {
      element.crossOrigin = typeof crossorigin === "string" ? crossorigin : "anonymous";
    }
  }
  upload(renderer, baseTexture, glTexture, source) {
    const gl = renderer.gl;
    const width = baseTexture.realWidth;
    const height = baseTexture.realHeight;
    source = source || this.source;
    if (typeof HTMLImageElement !== "undefined" && source instanceof HTMLImageElement) {
      if (!source.complete || source.naturalWidth === 0) {
        return false;
      }
    } else if (typeof HTMLVideoElement !== "undefined" && source instanceof HTMLVideoElement) {
      if (source.readyState <= 1 && source.buffered.length === 0) {
        return false;
      }
    }
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === ALPHA_MODES.UNPACK);
    if (!this.noSubImage && baseTexture.target === gl.TEXTURE_2D && glTexture.width === width && glTexture.height === height) {
      gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, baseTexture.format, glTexture.type, source);
    } else {
      glTexture.width = width;
      glTexture.height = height;
      gl.texImage2D(baseTexture.target, 0, glTexture.internalFormat, baseTexture.format, glTexture.type, source);
    }
    return true;
  }
  update() {
    if (this.destroyed) {
      return;
    }
    const source = this.source;
    const width = source.naturalWidth || source.videoWidth || source.width;
    const height = source.naturalHeight || source.videoHeight || source.height;
    this.resize(width, height);
    super.update();
  }
  dispose() {
    this.source = null;
  }
}

class ImageResource extends BaseImageResource {
  constructor(source, options) {
    options = options || {};
    if (typeof source === "string") {
      const imageElement = new Image();
      BaseImageResource.crossOrigin(imageElement, source, options.crossorigin);
      imageElement.src = source;
      source = imageElement;
    }
    super(source);
    if (!source.complete && !!this._width && !!this._height) {
      this._width = 0;
      this._height = 0;
    }
    this.url = source.src;
    this._process = null;
    this.preserveBitmap = false;
    this.createBitmap = (options.createBitmap ?? settings.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap;
    this.alphaMode = typeof options.alphaMode === "number" ? options.alphaMode : null;
    this.bitmap = null;
    this._load = null;
    if (options.autoLoad !== false) {
      this.load();
    }
  }
  load(createBitmap) {
    if (this._load) {
      return this._load;
    }
    if (createBitmap !== void 0) {
      this.createBitmap = createBitmap;
    }
    this._load = new Promise((resolve, reject) => {
      const source = this.source;
      this.url = source.src;
      const completed = () => {
        if (this.destroyed) {
          return;
        }
        source.onload = null;
        source.onerror = null;
        this.resize(source.width, source.height);
        this._load = null;
        if (this.createBitmap) {
          resolve(this.process());
        } else {
          resolve(this);
        }
      };
      if (source.complete && source.src) {
        completed();
      } else {
        source.onload = completed;
        source.onerror = (event) => {
          reject(event);
          this.onError.emit(event);
        };
      }
    });
    return this._load;
  }
  process() {
    const source = this.source;
    if (this._process !== null) {
      return this._process;
    }
    if (this.bitmap !== null || !globalThis.createImageBitmap) {
      return Promise.resolve(this);
    }
    const createImageBitmap = globalThis.createImageBitmap;
    const cors = !source.crossOrigin || source.crossOrigin === "anonymous";
    this._process = fetch(source.src, {
      mode: cors ? "cors" : "no-cors"
    }).then((r) => r.blob()).then((blob) => createImageBitmap(blob, 0, 0, source.width, source.height, {
      premultiplyAlpha: this.alphaMode === null || this.alphaMode === ALPHA_MODES.UNPACK ? "premultiply" : "none"
    })).then((bitmap) => {
      if (this.destroyed) {
        return Promise.reject();
      }
      this.bitmap = bitmap;
      this.update();
      this._process = null;
      return Promise.resolve(this);
    });
    return this._process;
  }
  upload(renderer, baseTexture, glTexture) {
    if (typeof this.alphaMode === "number") {
      baseTexture.alphaMode = this.alphaMode;
    }
    if (!this.createBitmap) {
      return super.upload(renderer, baseTexture, glTexture);
    }
    if (!this.bitmap) {
      this.process();
      if (!this.bitmap) {
        return false;
      }
    }
    super.upload(renderer, baseTexture, glTexture, this.bitmap);
    if (!this.preserveBitmap) {
      let flag = true;
      const glTextures = baseTexture._glTextures;
      for (const key in glTextures) {
        const otherTex = glTextures[key];
        if (otherTex !== glTexture && otherTex.dirtyId !== baseTexture.dirtyId) {
          flag = false;
          break;
        }
      }
      if (flag) {
        if (this.bitmap.close) {
          this.bitmap.close();
        }
        this.bitmap = null;
      }
    }
    return true;
  }
  dispose() {
    this.source.onload = null;
    this.source.onerror = null;
    super.dispose();
    if (this.bitmap) {
      this.bitmap.close();
      this.bitmap = null;
    }
    this._process = null;
    this._load = null;
  }
  static test(source) {
    return typeof HTMLImageElement !== "undefined" && (typeof source === "string" || source instanceof HTMLImageElement);
  }
}

class TextureUvs {
  constructor() {
    this.x0 = 0;
    this.y0 = 0;
    this.x1 = 1;
    this.y1 = 0;
    this.x2 = 1;
    this.y2 = 1;
    this.x3 = 0;
    this.y3 = 1;
    this.uvsFloat32 = new Float32Array(8);
  }
  set(frame, baseFrame, rotate) {
    const tw = baseFrame.width;
    const th = baseFrame.height;
    if (rotate) {
      const w2 = frame.width / 2 / tw;
      const h2 = frame.height / 2 / th;
      const cX = frame.x / tw + w2;
      const cY = frame.y / th + h2;
      rotate = groupD8.add(rotate, groupD8.NW);
      this.x0 = cX + w2 * groupD8.uX(rotate);
      this.y0 = cY + h2 * groupD8.uY(rotate);
      rotate = groupD8.add(rotate, 2);
      this.x1 = cX + w2 * groupD8.uX(rotate);
      this.y1 = cY + h2 * groupD8.uY(rotate);
      rotate = groupD8.add(rotate, 2);
      this.x2 = cX + w2 * groupD8.uX(rotate);
      this.y2 = cY + h2 * groupD8.uY(rotate);
      rotate = groupD8.add(rotate, 2);
      this.x3 = cX + w2 * groupD8.uX(rotate);
      this.y3 = cY + h2 * groupD8.uY(rotate);
    } else {
      this.x0 = frame.x / tw;
      this.y0 = frame.y / th;
      this.x1 = (frame.x + frame.width) / tw;
      this.y1 = frame.y / th;
      this.x2 = (frame.x + frame.width) / tw;
      this.y2 = (frame.y + frame.height) / th;
      this.x3 = frame.x / tw;
      this.y3 = (frame.y + frame.height) / th;
    }
    this.uvsFloat32[0] = this.x0;
    this.uvsFloat32[1] = this.y0;
    this.uvsFloat32[2] = this.x1;
    this.uvsFloat32[3] = this.y1;
    this.uvsFloat32[4] = this.x2;
    this.uvsFloat32[5] = this.y2;
    this.uvsFloat32[6] = this.x3;
    this.uvsFloat32[7] = this.y3;
  }
  toString() {
    return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
  }
}

const DEFAULT_UVS = new TextureUvs();
function removeAllHandlers(tex) {
  tex.destroy = function _emptyDestroy() {
  };
  tex.on = function _emptyOn() {
  };
  tex.once = function _emptyOnce() {
  };
  tex.emit = function _emptyEmit() {
  };
}
class Texture extends eventemitter3Exports {
  constructor(baseTexture, frame, orig, trim, rotate, anchor, borders) {
    super();
    this.noFrame = false;
    if (!frame) {
      this.noFrame = true;
      frame = new Rectangle(0, 0, 1, 1);
    }
    if (baseTexture instanceof Texture) {
      baseTexture = baseTexture.baseTexture;
    }
    this.baseTexture = baseTexture;
    this._frame = frame;
    this.trim = trim;
    this.valid = false;
    this._uvs = DEFAULT_UVS;
    this.uvMatrix = null;
    this.orig = orig || frame;
    this._rotate = Number(rotate || 0);
    if (rotate === true) {
      this._rotate = 2;
    } else if (this._rotate % 2 !== 0) {
      throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
    }
    this.defaultAnchor = anchor ? new Point(anchor.x, anchor.y) : new Point(0, 0);
    this.defaultBorders = borders;
    this._updateID = 0;
    this.textureCacheIds = [];
    if (!baseTexture.valid) {
      baseTexture.once("loaded", this.onBaseTextureUpdated, this);
    } else if (this.noFrame) {
      if (baseTexture.valid) {
        this.onBaseTextureUpdated(baseTexture);
      }
    } else {
      this.frame = frame;
    }
    if (this.noFrame) {
      baseTexture.on("update", this.onBaseTextureUpdated, this);
    }
  }
  update() {
    if (this.baseTexture.resource) {
      this.baseTexture.resource.update();
    }
  }
  onBaseTextureUpdated(baseTexture) {
    if (this.noFrame) {
      if (!this.baseTexture.valid) {
        return;
      }
      this._frame.width = baseTexture.width;
      this._frame.height = baseTexture.height;
      this.valid = true;
      this.updateUvs();
    } else {
      this.frame = this._frame;
    }
    this.emit("update", this);
  }
  destroy(destroyBase) {
    if (this.baseTexture) {
      if (destroyBase) {
        const { resource } = this.baseTexture;
        if (resource?.url && TextureCache[resource.url]) {
          Texture.removeFromCache(resource.url);
        }
        this.baseTexture.destroy();
      }
      this.baseTexture.off("loaded", this.onBaseTextureUpdated, this);
      this.baseTexture.off("update", this.onBaseTextureUpdated, this);
      this.baseTexture = null;
    }
    this._frame = null;
    this._uvs = null;
    this.trim = null;
    this.orig = null;
    this.valid = false;
    Texture.removeFromCache(this);
    this.textureCacheIds = null;
  }
  clone() {
    const clonedFrame = this._frame.clone();
    const clonedOrig = this._frame === this.orig ? clonedFrame : this.orig.clone();
    const clonedTexture = new Texture(this.baseTexture, !this.noFrame && clonedFrame, clonedOrig, this.trim?.clone(), this.rotate, this.defaultAnchor, this.defaultBorders);
    if (this.noFrame) {
      clonedTexture._frame = clonedFrame;
    }
    return clonedTexture;
  }
  updateUvs() {
    if (this._uvs === DEFAULT_UVS) {
      this._uvs = new TextureUvs();
    }
    this._uvs.set(this._frame, this.baseTexture, this.rotate);
    this._updateID++;
  }
  static from(source, options = {}, strict = settings.STRICT_TEXTURE_CACHE) {
    const isFrame = typeof source === "string";
    let cacheId = null;
    if (isFrame) {
      cacheId = source;
    } else if (source instanceof BaseTexture) {
      if (!source.cacheId) {
        const prefix = options?.pixiIdPrefix || "pixiid";
        source.cacheId = `${prefix}-${uid()}`;
        BaseTexture.addToCache(source, source.cacheId);
      }
      cacheId = source.cacheId;
    } else {
      if (!source._pixiId) {
        const prefix = options?.pixiIdPrefix || "pixiid";
        source._pixiId = `${prefix}_${uid()}`;
      }
      cacheId = source._pixiId;
    }
    let texture = TextureCache[cacheId];
    if (isFrame && strict && !texture) {
      throw new Error(`The cacheId "${cacheId}" does not exist in TextureCache.`);
    }
    if (!texture && !(source instanceof BaseTexture)) {
      if (!options.resolution) {
        options.resolution = getResolutionOfUrl(source);
      }
      texture = new Texture(new BaseTexture(source, options));
      texture.baseTexture.cacheId = cacheId;
      BaseTexture.addToCache(texture.baseTexture, cacheId);
      Texture.addToCache(texture, cacheId);
    } else if (!texture && source instanceof BaseTexture) {
      texture = new Texture(source);
      Texture.addToCache(texture, cacheId);
    }
    return texture;
  }
  static fromURL(url, options) {
    const resourceOptions = Object.assign({ autoLoad: false }, options?.resourceOptions);
    const texture = Texture.from(url, Object.assign({ resourceOptions }, options), false);
    const resource = texture.baseTexture.resource;
    if (texture.baseTexture.valid) {
      return Promise.resolve(texture);
    }
    return resource.load().then(() => Promise.resolve(texture));
  }
  static fromBuffer(buffer, width, height, options) {
    return new Texture(BaseTexture.fromBuffer(buffer, width, height, options));
  }
  static fromLoader(source, imageUrl, name, options) {
    const baseTexture = new BaseTexture(source, Object.assign({
      scaleMode: BaseTexture.defaultOptions.scaleMode,
      resolution: getResolutionOfUrl(imageUrl)
    }, options));
    const { resource } = baseTexture;
    if (resource instanceof ImageResource) {
      resource.url = imageUrl;
    }
    const texture = new Texture(baseTexture);
    if (!name) {
      name = imageUrl;
    }
    BaseTexture.addToCache(texture.baseTexture, name);
    Texture.addToCache(texture, name);
    if (name !== imageUrl) {
      BaseTexture.addToCache(texture.baseTexture, imageUrl);
      Texture.addToCache(texture, imageUrl);
    }
    if (texture.baseTexture.valid) {
      return Promise.resolve(texture);
    }
    return new Promise((resolve) => {
      texture.baseTexture.once("loaded", () => resolve(texture));
    });
  }
  static addToCache(texture, id) {
    if (id) {
      if (!texture.textureCacheIds.includes(id)) {
        texture.textureCacheIds.push(id);
      }
      if (TextureCache[id] && TextureCache[id] !== texture) {
        console.warn(`Texture added to the cache with an id [${id}] that already had an entry`);
      }
      TextureCache[id] = texture;
    }
  }
  static removeFromCache(texture) {
    if (typeof texture === "string") {
      const textureFromCache = TextureCache[texture];
      if (textureFromCache) {
        const index = textureFromCache.textureCacheIds.indexOf(texture);
        if (index > -1) {
          textureFromCache.textureCacheIds.splice(index, 1);
        }
        delete TextureCache[texture];
        return textureFromCache;
      }
    } else if (texture?.textureCacheIds) {
      for (let i = 0; i < texture.textureCacheIds.length; ++i) {
        if (TextureCache[texture.textureCacheIds[i]] === texture) {
          delete TextureCache[texture.textureCacheIds[i]];
        }
      }
      texture.textureCacheIds.length = 0;
      return texture;
    }
    return null;
  }
  get resolution() {
    return this.baseTexture.resolution;
  }
  get frame() {
    return this._frame;
  }
  set frame(frame) {
    this._frame = frame;
    this.noFrame = false;
    const { x, y, width, height } = frame;
    const xNotFit = x + width > this.baseTexture.width;
    const yNotFit = y + height > this.baseTexture.height;
    if (xNotFit || yNotFit) {
      const relationship = xNotFit && yNotFit ? "and" : "or";
      const errorX = `X: ${x} + ${width} = ${x + width} > ${this.baseTexture.width}`;
      const errorY = `Y: ${y} + ${height} = ${y + height} > ${this.baseTexture.height}`;
      throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${errorX} ${relationship} ${errorY}`);
    }
    this.valid = width && height && this.baseTexture.valid;
    if (!this.trim && !this.rotate) {
      this.orig = frame;
    }
    if (this.valid) {
      this.updateUvs();
    }
  }
  get rotate() {
    return this._rotate;
  }
  set rotate(rotate) {
    this._rotate = rotate;
    if (this.valid) {
      this.updateUvs();
    }
  }
  get width() {
    return this.orig.width;
  }
  get height() {
    return this.orig.height;
  }
  castToBaseTexture() {
    return this.baseTexture;
  }
  static get EMPTY() {
    if (!Texture._EMPTY) {
      Texture._EMPTY = new Texture(new BaseTexture());
      removeAllHandlers(Texture._EMPTY);
      removeAllHandlers(Texture._EMPTY.baseTexture);
    }
    return Texture._EMPTY;
  }
  static get WHITE() {
    if (!Texture._WHITE) {
      const canvas = settings.ADAPTER.createCanvas(16, 16);
      const context = canvas.getContext("2d");
      canvas.width = 16;
      canvas.height = 16;
      context.fillStyle = "white";
      context.fillRect(0, 0, 16, 16);
      Texture._WHITE = new Texture(BaseTexture.from(canvas));
      removeAllHandlers(Texture._WHITE);
      removeAllHandlers(Texture._WHITE.baseTexture);
    }
    return Texture._WHITE;
  }
}

class RenderTexture extends Texture {
  constructor(baseRenderTexture, frame) {
    super(baseRenderTexture, frame);
    this.valid = true;
    this.filterFrame = null;
    this.filterPoolKey = null;
    this.updateUvs();
  }
  get framebuffer() {
    return this.baseTexture.framebuffer;
  }
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(value) {
    this.framebuffer.multisample = value;
  }
  resize(desiredWidth, desiredHeight, resizeBaseTexture = true) {
    const resolution = this.baseTexture.resolution;
    const width = Math.round(desiredWidth * resolution) / resolution;
    const height = Math.round(desiredHeight * resolution) / resolution;
    this.valid = width > 0 && height > 0;
    this._frame.width = this.orig.width = width;
    this._frame.height = this.orig.height = height;
    if (resizeBaseTexture) {
      this.baseTexture.resize(width, height);
    }
    this.updateUvs();
  }
  setResolution(resolution) {
    const { baseTexture } = this;
    if (baseTexture.resolution === resolution) {
      return;
    }
    baseTexture.setResolution(resolution);
    this.resize(baseTexture.width, baseTexture.height, false);
  }
  static create(options) {
    return new RenderTexture(new BaseRenderTexture(options));
  }
}

class RenderTexturePool {
  constructor(textureOptions) {
    this.texturePool = {};
    this.textureOptions = textureOptions || {};
    this.enableFullScreen = false;
    this._pixelsWidth = 0;
    this._pixelsHeight = 0;
  }
  createTexture(realWidth, realHeight, multisample = MSAA_QUALITY.NONE) {
    const baseRenderTexture = new BaseRenderTexture(Object.assign({
      width: realWidth,
      height: realHeight,
      resolution: 1,
      multisample
    }, this.textureOptions));
    return new RenderTexture(baseRenderTexture);
  }
  getOptimalTexture(minWidth, minHeight, resolution = 1, multisample = MSAA_QUALITY.NONE) {
    let key;
    minWidth = Math.ceil(minWidth * resolution - 1e-6);
    minHeight = Math.ceil(minHeight * resolution - 1e-6);
    if (!this.enableFullScreen || minWidth !== this._pixelsWidth || minHeight !== this._pixelsHeight) {
      minWidth = nextPow2(minWidth);
      minHeight = nextPow2(minHeight);
      key = ((minWidth & 65535) << 16 | minHeight & 65535) >>> 0;
      if (multisample > 1) {
        key += multisample * 4294967296;
      }
    } else {
      key = multisample > 1 ? -multisample : -1;
    }
    if (!this.texturePool[key]) {
      this.texturePool[key] = [];
    }
    let renderTexture = this.texturePool[key].pop();
    if (!renderTexture) {
      renderTexture = this.createTexture(minWidth, minHeight, multisample);
    }
    renderTexture.filterPoolKey = key;
    renderTexture.setResolution(resolution);
    return renderTexture;
  }
  getFilterTexture(input, resolution, multisample) {
    const filterTexture = this.getOptimalTexture(input.width, input.height, resolution || input.resolution, multisample || MSAA_QUALITY.NONE);
    filterTexture.filterFrame = input.filterFrame;
    return filterTexture;
  }
  returnTexture(renderTexture) {
    const key = renderTexture.filterPoolKey;
    renderTexture.filterFrame = null;
    this.texturePool[key].push(renderTexture);
  }
  returnFilterTexture(renderTexture) {
    this.returnTexture(renderTexture);
  }
  clear(destroyTextures) {
    destroyTextures = destroyTextures !== false;
    if (destroyTextures) {
      for (const i in this.texturePool) {
        const textures = this.texturePool[i];
        if (textures) {
          for (let j = 0; j < textures.length; j++) {
            textures[j].destroy(true);
          }
        }
      }
    }
    this.texturePool = {};
  }
  setScreenSize(size) {
    if (size.width === this._pixelsWidth && size.height === this._pixelsHeight) {
      return;
    }
    this.enableFullScreen = size.width > 0 && size.height > 0;
    for (const i in this.texturePool) {
      if (!(Number(i) < 0)) {
        continue;
      }
      const textures = this.texturePool[i];
      if (textures) {
        for (let j = 0; j < textures.length; j++) {
          textures[j].destroy(true);
        }
      }
      this.texturePool[i] = [];
    }
    this._pixelsWidth = size.width;
    this._pixelsHeight = size.height;
  }
}
RenderTexturePool.SCREEN_KEY = -1;

class Quad extends Geometry {
  constructor() {
    super();
    this.addAttribute("aVertexPosition", new Float32Array([
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1
    ])).addIndex([0, 1, 3, 2]);
  }
}

class QuadUv extends Geometry {
  constructor() {
    super();
    this.vertices = new Float32Array([
      -1,
      -1,
      1,
      -1,
      1,
      1,
      -1,
      1
    ]);
    this.uvs = new Float32Array([
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1
    ]);
    this.vertexBuffer = new Buffer(this.vertices);
    this.uvBuffer = new Buffer(this.uvs);
    this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]);
  }
  map(targetTextureFrame, destinationFrame) {
    let x = 0;
    let y = 0;
    this.uvs[0] = x;
    this.uvs[1] = y;
    this.uvs[2] = x + destinationFrame.width / targetTextureFrame.width;
    this.uvs[3] = y;
    this.uvs[4] = x + destinationFrame.width / targetTextureFrame.width;
    this.uvs[5] = y + destinationFrame.height / targetTextureFrame.height;
    this.uvs[6] = x;
    this.uvs[7] = y + destinationFrame.height / targetTextureFrame.height;
    x = destinationFrame.x;
    y = destinationFrame.y;
    this.vertices[0] = x;
    this.vertices[1] = y;
    this.vertices[2] = x + destinationFrame.width;
    this.vertices[3] = y;
    this.vertices[4] = x + destinationFrame.width;
    this.vertices[5] = y + destinationFrame.height;
    this.vertices[6] = x;
    this.vertices[7] = y + destinationFrame.height;
    this.invalidate();
    return this;
  }
  invalidate() {
    this.vertexBuffer._updateID++;
    this.uvBuffer._updateID++;
    return this;
  }
}

class FilterState {
  constructor() {
    this.renderTexture = null;
    this.target = null;
    this.legacy = false;
    this.resolution = 1;
    this.multisample = MSAA_QUALITY.NONE;
    this.sourceFrame = new Rectangle();
    this.destinationFrame = new Rectangle();
    this.bindingSourceFrame = new Rectangle();
    this.bindingDestinationFrame = new Rectangle();
    this.filters = [];
    this.transform = null;
  }
  clear() {
    this.target = null;
    this.filters = null;
    this.renderTexture = null;
  }
}

const tempPoints = [new Point(), new Point(), new Point(), new Point()];
const tempMatrix$2 = new Matrix();
class FilterSystem {
  constructor(renderer) {
    this.renderer = renderer;
    this.defaultFilterStack = [{}];
    this.texturePool = new RenderTexturePool();
    this.statePool = [];
    this.quad = new Quad();
    this.quadUv = new QuadUv();
    this.tempRect = new Rectangle();
    this.activeState = {};
    this.globalUniforms = new UniformGroup({
      outputFrame: new Rectangle(),
      inputSize: new Float32Array(4),
      inputPixel: new Float32Array(4),
      inputClamp: new Float32Array(4),
      resolution: 1,
      filterArea: new Float32Array(4),
      filterClamp: new Float32Array(4)
    }, true);
    this.forceClear = false;
    this.useMaxPadding = false;
  }
  init() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  push(target, filters) {
    const renderer = this.renderer;
    const filterStack = this.defaultFilterStack;
    const state = this.statePool.pop() || new FilterState();
    const renderTextureSystem = this.renderer.renderTexture;
    let resolution = filters[0].resolution;
    let multisample = filters[0].multisample;
    let padding = filters[0].padding;
    let autoFit = filters[0].autoFit;
    let legacy = filters[0].legacy ?? true;
    for (let i = 1; i < filters.length; i++) {
      const filter = filters[i];
      resolution = Math.min(resolution, filter.resolution);
      multisample = Math.min(multisample, filter.multisample);
      padding = this.useMaxPadding ? Math.max(padding, filter.padding) : padding + filter.padding;
      autoFit = autoFit && filter.autoFit;
      legacy = legacy || (filter.legacy ?? true);
    }
    if (filterStack.length === 1) {
      this.defaultFilterStack[0].renderTexture = renderTextureSystem.current;
    }
    filterStack.push(state);
    state.resolution = resolution;
    state.multisample = multisample;
    state.legacy = legacy;
    state.target = target;
    state.sourceFrame.copyFrom(target.filterArea || target.getBounds(true));
    state.sourceFrame.pad(padding);
    const sourceFrameProjected = this.tempRect.copyFrom(renderTextureSystem.sourceFrame);
    if (renderer.projection.transform) {
      this.transformAABB(tempMatrix$2.copyFrom(renderer.projection.transform).invert(), sourceFrameProjected);
    }
    if (autoFit) {
      state.sourceFrame.fit(sourceFrameProjected);
      if (state.sourceFrame.width <= 0 || state.sourceFrame.height <= 0) {
        state.sourceFrame.width = 0;
        state.sourceFrame.height = 0;
      }
    } else if (!state.sourceFrame.intersects(sourceFrameProjected)) {
      state.sourceFrame.width = 0;
      state.sourceFrame.height = 0;
    }
    this.roundFrame(state.sourceFrame, renderTextureSystem.current ? renderTextureSystem.current.resolution : renderer.resolution, renderTextureSystem.sourceFrame, renderTextureSystem.destinationFrame, renderer.projection.transform);
    state.renderTexture = this.getOptimalFilterTexture(state.sourceFrame.width, state.sourceFrame.height, resolution, multisample);
    state.filters = filters;
    state.destinationFrame.width = state.renderTexture.width;
    state.destinationFrame.height = state.renderTexture.height;
    const destinationFrame = this.tempRect;
    destinationFrame.x = 0;
    destinationFrame.y = 0;
    destinationFrame.width = state.sourceFrame.width;
    destinationFrame.height = state.sourceFrame.height;
    state.renderTexture.filterFrame = state.sourceFrame;
    state.bindingSourceFrame.copyFrom(renderTextureSystem.sourceFrame);
    state.bindingDestinationFrame.copyFrom(renderTextureSystem.destinationFrame);
    state.transform = renderer.projection.transform;
    renderer.projection.transform = null;
    renderTextureSystem.bind(state.renderTexture, state.sourceFrame, destinationFrame);
    renderer.framebuffer.clear(0, 0, 0, 0);
  }
  pop() {
    const filterStack = this.defaultFilterStack;
    const state = filterStack.pop();
    const filters = state.filters;
    this.activeState = state;
    const globalUniforms = this.globalUniforms.uniforms;
    globalUniforms.outputFrame = state.sourceFrame;
    globalUniforms.resolution = state.resolution;
    const inputSize = globalUniforms.inputSize;
    const inputPixel = globalUniforms.inputPixel;
    const inputClamp = globalUniforms.inputClamp;
    inputSize[0] = state.destinationFrame.width;
    inputSize[1] = state.destinationFrame.height;
    inputSize[2] = 1 / inputSize[0];
    inputSize[3] = 1 / inputSize[1];
    inputPixel[0] = Math.round(inputSize[0] * state.resolution);
    inputPixel[1] = Math.round(inputSize[1] * state.resolution);
    inputPixel[2] = 1 / inputPixel[0];
    inputPixel[3] = 1 / inputPixel[1];
    inputClamp[0] = 0.5 * inputPixel[2];
    inputClamp[1] = 0.5 * inputPixel[3];
    inputClamp[2] = state.sourceFrame.width * inputSize[2] - 0.5 * inputPixel[2];
    inputClamp[3] = state.sourceFrame.height * inputSize[3] - 0.5 * inputPixel[3];
    if (state.legacy) {
      const filterArea = globalUniforms.filterArea;
      filterArea[0] = state.destinationFrame.width;
      filterArea[1] = state.destinationFrame.height;
      filterArea[2] = state.sourceFrame.x;
      filterArea[3] = state.sourceFrame.y;
      globalUniforms.filterClamp = globalUniforms.inputClamp;
    }
    this.globalUniforms.update();
    const lastState = filterStack[filterStack.length - 1];
    this.renderer.framebuffer.blit();
    if (filters.length === 1) {
      filters[0].apply(this, state.renderTexture, lastState.renderTexture, CLEAR_MODES.BLEND, state);
      this.returnFilterTexture(state.renderTexture);
    } else {
      let flip = state.renderTexture;
      let flop = this.getOptimalFilterTexture(flip.width, flip.height, state.resolution);
      flop.filterFrame = flip.filterFrame;
      let i = 0;
      for (i = 0; i < filters.length - 1; ++i) {
        if (i === 1 && state.multisample > 1) {
          flop = this.getOptimalFilterTexture(flip.width, flip.height, state.resolution);
          flop.filterFrame = flip.filterFrame;
        }
        filters[i].apply(this, flip, flop, CLEAR_MODES.CLEAR, state);
        const t = flip;
        flip = flop;
        flop = t;
      }
      filters[i].apply(this, flip, lastState.renderTexture, CLEAR_MODES.BLEND, state);
      if (i > 1 && state.multisample > 1) {
        this.returnFilterTexture(state.renderTexture);
      }
      this.returnFilterTexture(flip);
      this.returnFilterTexture(flop);
    }
    state.clear();
    this.statePool.push(state);
  }
  bindAndClear(filterTexture, clearMode = CLEAR_MODES.CLEAR) {
    const {
      renderTexture: renderTextureSystem,
      state: stateSystem
    } = this.renderer;
    if (filterTexture === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture) {
      this.renderer.projection.transform = this.activeState.transform;
    } else {
      this.renderer.projection.transform = null;
    }
    if (filterTexture?.filterFrame) {
      const destinationFrame = this.tempRect;
      destinationFrame.x = 0;
      destinationFrame.y = 0;
      destinationFrame.width = filterTexture.filterFrame.width;
      destinationFrame.height = filterTexture.filterFrame.height;
      renderTextureSystem.bind(filterTexture, filterTexture.filterFrame, destinationFrame);
    } else if (filterTexture !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture) {
      renderTextureSystem.bind(filterTexture);
    } else {
      this.renderer.renderTexture.bind(filterTexture, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
    }
    const autoClear = stateSystem.stateId & 1 || this.forceClear;
    if (clearMode === CLEAR_MODES.CLEAR || clearMode === CLEAR_MODES.BLIT && autoClear) {
      this.renderer.framebuffer.clear(0, 0, 0, 0);
    }
  }
  applyFilter(filter, input, output, clearMode) {
    const renderer = this.renderer;
    renderer.state.set(filter.state);
    this.bindAndClear(output, clearMode);
    filter.uniforms.uSampler = input;
    filter.uniforms.filterGlobals = this.globalUniforms;
    renderer.shader.bind(filter);
    filter.legacy = !!filter.program.attributeData.aTextureCoord;
    if (filter.legacy) {
      this.quadUv.map(input._frame, input.filterFrame);
      renderer.geometry.bind(this.quadUv);
      renderer.geometry.draw(DRAW_MODES.TRIANGLES);
    } else {
      renderer.geometry.bind(this.quad);
      renderer.geometry.draw(DRAW_MODES.TRIANGLE_STRIP);
    }
  }
  calculateSpriteMatrix(outputMatrix, sprite) {
    const { sourceFrame, destinationFrame } = this.activeState;
    const { orig } = sprite._texture;
    const mappedMatrix = outputMatrix.set(destinationFrame.width, 0, 0, destinationFrame.height, sourceFrame.x, sourceFrame.y);
    const worldTransform = sprite.worldTransform.copyTo(Matrix.TEMP_MATRIX);
    worldTransform.invert();
    mappedMatrix.prepend(worldTransform);
    mappedMatrix.scale(1 / orig.width, 1 / orig.height);
    mappedMatrix.translate(sprite.anchor.x, sprite.anchor.y);
    return mappedMatrix;
  }
  destroy() {
    this.renderer = null;
    this.texturePool.clear(false);
  }
  getOptimalFilterTexture(minWidth, minHeight, resolution = 1, multisample = MSAA_QUALITY.NONE) {
    return this.texturePool.getOptimalTexture(minWidth, minHeight, resolution, multisample);
  }
  getFilterTexture(input, resolution, multisample) {
    if (typeof input === "number") {
      const swap = input;
      input = resolution;
      resolution = swap;
    }
    input = input || this.activeState.renderTexture;
    const filterTexture = this.texturePool.getOptimalTexture(input.width, input.height, resolution || input.resolution, multisample || MSAA_QUALITY.NONE);
    filterTexture.filterFrame = input.filterFrame;
    return filterTexture;
  }
  returnFilterTexture(renderTexture) {
    this.texturePool.returnTexture(renderTexture);
  }
  emptyPool() {
    this.texturePool.clear(true);
  }
  resize() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  transformAABB(matrix, rect) {
    const lt = tempPoints[0];
    const lb = tempPoints[1];
    const rt = tempPoints[2];
    const rb = tempPoints[3];
    lt.set(rect.left, rect.top);
    lb.set(rect.left, rect.bottom);
    rt.set(rect.right, rect.top);
    rb.set(rect.right, rect.bottom);
    matrix.apply(lt, lt);
    matrix.apply(lb, lb);
    matrix.apply(rt, rt);
    matrix.apply(rb, rb);
    const x0 = Math.min(lt.x, lb.x, rt.x, rb.x);
    const y0 = Math.min(lt.y, lb.y, rt.y, rb.y);
    const x1 = Math.max(lt.x, lb.x, rt.x, rb.x);
    const y1 = Math.max(lt.y, lb.y, rt.y, rb.y);
    rect.x = x0;
    rect.y = y0;
    rect.width = x1 - x0;
    rect.height = y1 - y0;
  }
  roundFrame(frame, resolution, bindingSourceFrame, bindingDestinationFrame, transform) {
    if (frame.width <= 0 || frame.height <= 0 || bindingSourceFrame.width <= 0 || bindingSourceFrame.height <= 0) {
      return;
    }
    if (transform) {
      const { a, b, c, d } = transform;
      if ((Math.abs(b) > 1e-4 || Math.abs(c) > 1e-4) && (Math.abs(a) > 1e-4 || Math.abs(d) > 1e-4)) {
        return;
      }
    }
    transform = transform ? tempMatrix$2.copyFrom(transform) : tempMatrix$2.identity();
    transform.translate(-bindingSourceFrame.x, -bindingSourceFrame.y).scale(bindingDestinationFrame.width / bindingSourceFrame.width, bindingDestinationFrame.height / bindingSourceFrame.height).translate(bindingDestinationFrame.x, bindingDestinationFrame.y);
    this.transformAABB(transform, frame);
    frame.ceil(resolution);
    this.transformAABB(transform.invert(), frame);
  }
}
FilterSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "filter"
};
extensions.add(FilterSystem);

class GLFramebuffer {
  constructor(framebuffer) {
    this.framebuffer = framebuffer;
    this.stencil = null;
    this.dirtyId = -1;
    this.dirtyFormat = -1;
    this.dirtySize = -1;
    this.multisample = MSAA_QUALITY.NONE;
    this.msaaBuffer = null;
    this.blitFramebuffer = null;
    this.mipLevel = 0;
  }
}

const tempRectangle = new Rectangle();
class FramebufferSystem {
  constructor(renderer) {
    this.renderer = renderer;
    this.managedFramebuffers = [];
    this.unknownFramebuffer = new Framebuffer(10, 10);
    this.msaaSamples = null;
  }
  contextChange() {
    this.disposeAll(true);
    const gl = this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID;
    this.current = this.unknownFramebuffer;
    this.viewport = new Rectangle();
    this.hasMRT = true;
    this.writeDepthTexture = true;
    if (this.renderer.context.webGLVersion === 1) {
      let nativeDrawBuffersExtension = this.renderer.context.extensions.drawBuffers;
      let nativeDepthTextureExtension = this.renderer.context.extensions.depthTexture;
      if (settings.PREFER_ENV === ENV.WEBGL_LEGACY) {
        nativeDrawBuffersExtension = null;
        nativeDepthTextureExtension = null;
      }
      if (nativeDrawBuffersExtension) {
        gl.drawBuffers = (activeTextures) => nativeDrawBuffersExtension.drawBuffersWEBGL(activeTextures);
      } else {
        this.hasMRT = false;
        gl.drawBuffers = () => {
        };
      }
      if (!nativeDepthTextureExtension) {
        this.writeDepthTexture = false;
      }
    } else {
      this.msaaSamples = gl.getInternalformatParameter(gl.RENDERBUFFER, gl.RGBA8, gl.SAMPLES);
    }
  }
  bind(framebuffer, frame, mipLevel = 0) {
    const { gl } = this;
    if (framebuffer) {
      const fbo = framebuffer.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(framebuffer);
      if (this.current !== framebuffer) {
        this.current = framebuffer;
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.framebuffer);
      }
      if (fbo.mipLevel !== mipLevel) {
        framebuffer.dirtyId++;
        framebuffer.dirtyFormat++;
        fbo.mipLevel = mipLevel;
      }
      if (fbo.dirtyId !== framebuffer.dirtyId) {
        fbo.dirtyId = framebuffer.dirtyId;
        if (fbo.dirtyFormat !== framebuffer.dirtyFormat) {
          fbo.dirtyFormat = framebuffer.dirtyFormat;
          fbo.dirtySize = framebuffer.dirtySize;
          this.updateFramebuffer(framebuffer, mipLevel);
        } else if (fbo.dirtySize !== framebuffer.dirtySize) {
          fbo.dirtySize = framebuffer.dirtySize;
          this.resizeFramebuffer(framebuffer);
        }
      }
      for (let i = 0; i < framebuffer.colorTextures.length; i++) {
        const tex = framebuffer.colorTextures[i];
        this.renderer.texture.unbind(tex.parentTextureArray || tex);
      }
      if (framebuffer.depthTexture) {
        this.renderer.texture.unbind(framebuffer.depthTexture);
      }
      if (frame) {
        const mipWidth = frame.width >> mipLevel;
        const mipHeight = frame.height >> mipLevel;
        const scale = mipWidth / frame.width;
        this.setViewport(frame.x * scale, frame.y * scale, mipWidth, mipHeight);
      } else {
        const mipWidth = framebuffer.width >> mipLevel;
        const mipHeight = framebuffer.height >> mipLevel;
        this.setViewport(0, 0, mipWidth, mipHeight);
      }
    } else {
      if (this.current) {
        this.current = null;
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      }
      if (frame) {
        this.setViewport(frame.x, frame.y, frame.width, frame.height);
      } else {
        this.setViewport(0, 0, this.renderer.width, this.renderer.height);
      }
    }
  }
  setViewport(x, y, width, height) {
    const v = this.viewport;
    x = Math.round(x);
    y = Math.round(y);
    width = Math.round(width);
    height = Math.round(height);
    if (v.width !== width || v.height !== height || v.x !== x || v.y !== y) {
      v.x = x;
      v.y = y;
      v.width = width;
      v.height = height;
      this.gl.viewport(x, y, width, height);
    }
  }
  get size() {
    if (this.current) {
      return { x: 0, y: 0, width: this.current.width, height: this.current.height };
    }
    return { x: 0, y: 0, width: this.renderer.width, height: this.renderer.height };
  }
  clear(r, g, b, a, mask = BUFFER_BITS.COLOR | BUFFER_BITS.DEPTH) {
    const { gl } = this;
    gl.clearColor(r, g, b, a);
    gl.clear(mask);
  }
  initFramebuffer(framebuffer) {
    const { gl } = this;
    const fbo = new GLFramebuffer(gl.createFramebuffer());
    fbo.multisample = this.detectSamples(framebuffer.multisample);
    framebuffer.glFramebuffers[this.CONTEXT_UID] = fbo;
    this.managedFramebuffers.push(framebuffer);
    framebuffer.disposeRunner.add(this);
    return fbo;
  }
  resizeFramebuffer(framebuffer) {
    const { gl } = this;
    const fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
    if (fbo.stencil) {
      gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.stencil);
      if (fbo.msaaBuffer) {
        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, gl.DEPTH24_STENCIL8, framebuffer.width, framebuffer.height);
      } else {
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, framebuffer.width, framebuffer.height);
      }
    }
    const colorTextures = framebuffer.colorTextures;
    let count = colorTextures.length;
    if (!gl.drawBuffers) {
      count = Math.min(count, 1);
    }
    for (let i = 0; i < count; i++) {
      const texture = colorTextures[i];
      const parentTexture = texture.parentTextureArray || texture;
      this.renderer.texture.bind(parentTexture, 0);
      if (i === 0 && fbo.msaaBuffer) {
        gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.msaaBuffer);
        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, parentTexture._glTextures[this.CONTEXT_UID].internalFormat, framebuffer.width, framebuffer.height);
      }
    }
    if (framebuffer.depthTexture && this.writeDepthTexture) {
      this.renderer.texture.bind(framebuffer.depthTexture, 0);
    }
  }
  updateFramebuffer(framebuffer, mipLevel) {
    const { gl } = this;
    const fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
    const colorTextures = framebuffer.colorTextures;
    let count = colorTextures.length;
    if (!gl.drawBuffers) {
      count = Math.min(count, 1);
    }
    if (fbo.multisample > 1 && this.canMultisampleFramebuffer(framebuffer)) {
      fbo.msaaBuffer = fbo.msaaBuffer || gl.createRenderbuffer();
    } else if (fbo.msaaBuffer) {
      gl.deleteRenderbuffer(fbo.msaaBuffer);
      fbo.msaaBuffer = null;
      if (fbo.blitFramebuffer) {
        fbo.blitFramebuffer.dispose();
        fbo.blitFramebuffer = null;
      }
    }
    const activeTextures = [];
    for (let i = 0; i < count; i++) {
      const texture = colorTextures[i];
      const parentTexture = texture.parentTextureArray || texture;
      this.renderer.texture.bind(parentTexture, 0);
      if (i === 0 && fbo.msaaBuffer) {
        gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.msaaBuffer);
        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, parentTexture._glTextures[this.CONTEXT_UID].internalFormat, framebuffer.width, framebuffer.height);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, fbo.msaaBuffer);
      } else {
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, texture.target, parentTexture._glTextures[this.CONTEXT_UID].texture, mipLevel);
        activeTextures.push(gl.COLOR_ATTACHMENT0 + i);
      }
    }
    if (activeTextures.length > 1) {
      gl.drawBuffers(activeTextures);
    }
    if (framebuffer.depthTexture) {
      const writeDepthTexture = this.writeDepthTexture;
      if (writeDepthTexture) {
        const depthTexture = framebuffer.depthTexture;
        this.renderer.texture.bind(depthTexture, 0);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, depthTexture._glTextures[this.CONTEXT_UID].texture, mipLevel);
      }
    }
    if ((framebuffer.stencil || framebuffer.depth) && !(framebuffer.depthTexture && this.writeDepthTexture)) {
      fbo.stencil = fbo.stencil || gl.createRenderbuffer();
      gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.stencil);
      if (fbo.msaaBuffer) {
        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, gl.DEPTH24_STENCIL8, framebuffer.width, framebuffer.height);
      } else {
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, framebuffer.width, framebuffer.height);
      }
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, fbo.stencil);
    } else if (fbo.stencil) {
      gl.deleteRenderbuffer(fbo.stencil);
      fbo.stencil = null;
    }
  }
  canMultisampleFramebuffer(framebuffer) {
    return this.renderer.context.webGLVersion !== 1 && framebuffer.colorTextures.length <= 1 && !framebuffer.depthTexture;
  }
  detectSamples(samples) {
    const { msaaSamples } = this;
    let res = MSAA_QUALITY.NONE;
    if (samples <= 1 || msaaSamples === null) {
      return res;
    }
    for (let i = 0; i < msaaSamples.length; i++) {
      if (msaaSamples[i] <= samples) {
        res = msaaSamples[i];
        break;
      }
    }
    if (res === 1) {
      res = MSAA_QUALITY.NONE;
    }
    return res;
  }
  blit(framebuffer, sourcePixels, destPixels) {
    const { current, renderer, gl, CONTEXT_UID } = this;
    if (renderer.context.webGLVersion !== 2) {
      return;
    }
    if (!current) {
      return;
    }
    const fbo = current.glFramebuffers[CONTEXT_UID];
    if (!fbo) {
      return;
    }
    if (!framebuffer) {
      if (!fbo.msaaBuffer) {
        return;
      }
      const colorTexture = current.colorTextures[0];
      if (!colorTexture) {
        return;
      }
      if (!fbo.blitFramebuffer) {
        fbo.blitFramebuffer = new Framebuffer(current.width, current.height);
        fbo.blitFramebuffer.addColorTexture(0, colorTexture);
      }
      framebuffer = fbo.blitFramebuffer;
      if (framebuffer.colorTextures[0] !== colorTexture) {
        framebuffer.colorTextures[0] = colorTexture;
        framebuffer.dirtyId++;
        framebuffer.dirtyFormat++;
      }
      if (framebuffer.width !== current.width || framebuffer.height !== current.height) {
        framebuffer.width = current.width;
        framebuffer.height = current.height;
        framebuffer.dirtyId++;
        framebuffer.dirtySize++;
      }
    }
    if (!sourcePixels) {
      sourcePixels = tempRectangle;
      sourcePixels.width = current.width;
      sourcePixels.height = current.height;
    }
    if (!destPixels) {
      destPixels = sourcePixels;
    }
    const sameSize = sourcePixels.width === destPixels.width && sourcePixels.height === destPixels.height;
    this.bind(framebuffer);
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, fbo.framebuffer);
    gl.blitFramebuffer(sourcePixels.left, sourcePixels.top, sourcePixels.right, sourcePixels.bottom, destPixels.left, destPixels.top, destPixels.right, destPixels.bottom, gl.COLOR_BUFFER_BIT, sameSize ? gl.NEAREST : gl.LINEAR);
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, framebuffer.glFramebuffers[this.CONTEXT_UID].framebuffer);
  }
  disposeFramebuffer(framebuffer, contextLost) {
    const fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
    const gl = this.gl;
    if (!fbo) {
      return;
    }
    delete framebuffer.glFramebuffers[this.CONTEXT_UID];
    const index = this.managedFramebuffers.indexOf(framebuffer);
    if (index >= 0) {
      this.managedFramebuffers.splice(index, 1);
    }
    framebuffer.disposeRunner.remove(this);
    if (!contextLost) {
      gl.deleteFramebuffer(fbo.framebuffer);
      if (fbo.msaaBuffer) {
        gl.deleteRenderbuffer(fbo.msaaBuffer);
      }
      if (fbo.stencil) {
        gl.deleteRenderbuffer(fbo.stencil);
      }
    }
    if (fbo.blitFramebuffer) {
      this.disposeFramebuffer(fbo.blitFramebuffer, contextLost);
    }
  }
  disposeAll(contextLost) {
    const list = this.managedFramebuffers;
    this.managedFramebuffers = [];
    for (let i = 0; i < list.length; i++) {
      this.disposeFramebuffer(list[i], contextLost);
    }
  }
  forceStencil() {
    const framebuffer = this.current;
    if (!framebuffer) {
      return;
    }
    const fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
    if (!fbo || fbo.stencil) {
      return;
    }
    framebuffer.stencil = true;
    const w = framebuffer.width;
    const h = framebuffer.height;
    const gl = this.gl;
    const stencil = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, stencil);
    if (fbo.msaaBuffer) {
      gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, gl.DEPTH24_STENCIL8, w, h);
    } else {
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, w, h);
    }
    fbo.stencil = stencil;
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, stencil);
  }
  reset() {
    this.current = this.unknownFramebuffer;
    this.viewport = new Rectangle();
  }
  destroy() {
    this.renderer = null;
  }
}
FramebufferSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "framebuffer"
};
extensions.add(FramebufferSystem);

const byteSizeMap = { 5126: 4, 5123: 2, 5121: 1 };
class GeometrySystem {
  constructor(renderer) {
    this.renderer = renderer;
    this._activeGeometry = null;
    this._activeVao = null;
    this.hasVao = true;
    this.hasInstance = true;
    this.canUseUInt32ElementIndex = false;
    this.managedGeometries = {};
  }
  contextChange() {
    this.disposeAll(true);
    const gl = this.gl = this.renderer.gl;
    const context = this.renderer.context;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID;
    if (context.webGLVersion !== 2) {
      let nativeVaoExtension = this.renderer.context.extensions.vertexArrayObject;
      if (settings.PREFER_ENV === ENV.WEBGL_LEGACY) {
        nativeVaoExtension = null;
      }
      if (nativeVaoExtension) {
        gl.createVertexArray = () => nativeVaoExtension.createVertexArrayOES();
        gl.bindVertexArray = (vao) => nativeVaoExtension.bindVertexArrayOES(vao);
        gl.deleteVertexArray = (vao) => nativeVaoExtension.deleteVertexArrayOES(vao);
      } else {
        this.hasVao = false;
        gl.createVertexArray = () => null;
        gl.bindVertexArray = () => null;
        gl.deleteVertexArray = () => null;
      }
    }
    if (context.webGLVersion !== 2) {
      const instanceExt = gl.getExtension("ANGLE_instanced_arrays");
      if (instanceExt) {
        gl.vertexAttribDivisor = (a, b) => instanceExt.vertexAttribDivisorANGLE(a, b);
        gl.drawElementsInstanced = (a, b, c, d, e) => instanceExt.drawElementsInstancedANGLE(a, b, c, d, e);
        gl.drawArraysInstanced = (a, b, c, d) => instanceExt.drawArraysInstancedANGLE(a, b, c, d);
      } else {
        this.hasInstance = false;
      }
    }
    this.canUseUInt32ElementIndex = context.webGLVersion === 2 || !!context.extensions.uint32ElementIndex;
  }
  bind(geometry, shader) {
    shader = shader || this.renderer.shader.shader;
    const { gl } = this;
    let vaos = geometry.glVertexArrayObjects[this.CONTEXT_UID];
    let incRefCount = false;
    if (!vaos) {
      this.managedGeometries[geometry.id] = geometry;
      geometry.disposeRunner.add(this);
      geometry.glVertexArrayObjects[this.CONTEXT_UID] = vaos = {};
      incRefCount = true;
    }
    const vao = vaos[shader.program.id] || this.initGeometryVao(geometry, shader, incRefCount);
    this._activeGeometry = geometry;
    if (this._activeVao !== vao) {
      this._activeVao = vao;
      if (this.hasVao) {
        gl.bindVertexArray(vao);
      } else {
        this.activateVao(geometry, shader.program);
      }
    }
    this.updateBuffers();
  }
  reset() {
    this.unbind();
  }
  updateBuffers() {
    const geometry = this._activeGeometry;
    const bufferSystem = this.renderer.buffer;
    for (let i = 0; i < geometry.buffers.length; i++) {
      const buffer = geometry.buffers[i];
      bufferSystem.update(buffer);
    }
  }
  checkCompatibility(geometry, program) {
    const geometryAttributes = geometry.attributes;
    const shaderAttributes = program.attributeData;
    for (const j in shaderAttributes) {
      if (!geometryAttributes[j]) {
        throw new Error(`shader and geometry incompatible, geometry missing the "${j}" attribute`);
      }
    }
  }
  getSignature(geometry, program) {
    const attribs = geometry.attributes;
    const shaderAttributes = program.attributeData;
    const strings = ["g", geometry.id];
    for (const i in attribs) {
      if (shaderAttributes[i]) {
        strings.push(i, shaderAttributes[i].location);
      }
    }
    return strings.join("-");
  }
  initGeometryVao(geometry, shader, incRefCount = true) {
    const gl = this.gl;
    const CONTEXT_UID = this.CONTEXT_UID;
    const bufferSystem = this.renderer.buffer;
    const program = shader.program;
    if (!program.glPrograms[CONTEXT_UID]) {
      this.renderer.shader.generateProgram(shader);
    }
    this.checkCompatibility(geometry, program);
    const signature = this.getSignature(geometry, program);
    const vaoObjectHash = geometry.glVertexArrayObjects[this.CONTEXT_UID];
    let vao = vaoObjectHash[signature];
    if (vao) {
      vaoObjectHash[program.id] = vao;
      return vao;
    }
    const buffers = geometry.buffers;
    const attributes = geometry.attributes;
    const tempStride = {};
    const tempStart = {};
    for (const j in buffers) {
      tempStride[j] = 0;
      tempStart[j] = 0;
    }
    for (const j in attributes) {
      if (!attributes[j].size && program.attributeData[j]) {
        attributes[j].size = program.attributeData[j].size;
      } else if (!attributes[j].size) {
        console.warn(`PIXI Geometry attribute '${j}' size cannot be determined (likely the bound shader does not have the attribute)`);
      }
      tempStride[attributes[j].buffer] += attributes[j].size * byteSizeMap[attributes[j].type];
    }
    for (const j in attributes) {
      const attribute = attributes[j];
      const attribSize = attribute.size;
      if (attribute.stride === void 0) {
        if (tempStride[attribute.buffer] === attribSize * byteSizeMap[attribute.type]) {
          attribute.stride = 0;
        } else {
          attribute.stride = tempStride[attribute.buffer];
        }
      }
      if (attribute.start === void 0) {
        attribute.start = tempStart[attribute.buffer];
        tempStart[attribute.buffer] += attribSize * byteSizeMap[attribute.type];
      }
    }
    vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    for (let i = 0; i < buffers.length; i++) {
      const buffer = buffers[i];
      bufferSystem.bind(buffer);
      if (incRefCount) {
        buffer._glBuffers[CONTEXT_UID].refCount++;
      }
    }
    this.activateVao(geometry, program);
    vaoObjectHash[program.id] = vao;
    vaoObjectHash[signature] = vao;
    gl.bindVertexArray(null);
    bufferSystem.unbind(BUFFER_TYPE.ARRAY_BUFFER);
    return vao;
  }
  disposeGeometry(geometry, contextLost) {
    if (!this.managedGeometries[geometry.id]) {
      return;
    }
    delete this.managedGeometries[geometry.id];
    const vaos = geometry.glVertexArrayObjects[this.CONTEXT_UID];
    const gl = this.gl;
    const buffers = geometry.buffers;
    const bufferSystem = this.renderer?.buffer;
    geometry.disposeRunner.remove(this);
    if (!vaos) {
      return;
    }
    if (bufferSystem) {
      for (let i = 0; i < buffers.length; i++) {
        const buf = buffers[i]._glBuffers[this.CONTEXT_UID];
        if (buf) {
          buf.refCount--;
          if (buf.refCount === 0 && !contextLost) {
            bufferSystem.dispose(buffers[i], contextLost);
          }
        }
      }
    }
    if (!contextLost) {
      for (const vaoId in vaos) {
        if (vaoId[0] === "g") {
          const vao = vaos[vaoId];
          if (this._activeVao === vao) {
            this.unbind();
          }
          gl.deleteVertexArray(vao);
        }
      }
    }
    delete geometry.glVertexArrayObjects[this.CONTEXT_UID];
  }
  disposeAll(contextLost) {
    const all = Object.keys(this.managedGeometries);
    for (let i = 0; i < all.length; i++) {
      this.disposeGeometry(this.managedGeometries[all[i]], contextLost);
    }
  }
  activateVao(geometry, program) {
    const gl = this.gl;
    const CONTEXT_UID = this.CONTEXT_UID;
    const bufferSystem = this.renderer.buffer;
    const buffers = geometry.buffers;
    const attributes = geometry.attributes;
    if (geometry.indexBuffer) {
      bufferSystem.bind(geometry.indexBuffer);
    }
    let lastBuffer = null;
    for (const j in attributes) {
      const attribute = attributes[j];
      const buffer = buffers[attribute.buffer];
      const glBuffer = buffer._glBuffers[CONTEXT_UID];
      if (program.attributeData[j]) {
        if (lastBuffer !== glBuffer) {
          bufferSystem.bind(buffer);
          lastBuffer = glBuffer;
        }
        const location = program.attributeData[j].location;
        gl.enableVertexAttribArray(location);
        gl.vertexAttribPointer(location, attribute.size, attribute.type || gl.FLOAT, attribute.normalized, attribute.stride, attribute.start);
        if (attribute.instance) {
          if (this.hasInstance) {
            gl.vertexAttribDivisor(location, attribute.divisor);
          } else {
            throw new Error("geometry error, GPU Instancing is not supported on this device");
          }
        }
      }
    }
  }
  draw(type, size, start, instanceCount) {
    const { gl } = this;
    const geometry = this._activeGeometry;
    if (geometry.indexBuffer) {
      const byteSize = geometry.indexBuffer.data.BYTES_PER_ELEMENT;
      const glType = byteSize === 2 ? gl.UNSIGNED_SHORT : gl.UNSIGNED_INT;
      if (byteSize === 2 || byteSize === 4 && this.canUseUInt32ElementIndex) {
        if (geometry.instanced) {
          gl.drawElementsInstanced(type, size || geometry.indexBuffer.data.length, glType, (start || 0) * byteSize, instanceCount || 1);
        } else {
          gl.drawElements(type, size || geometry.indexBuffer.data.length, glType, (start || 0) * byteSize);
        }
      } else {
        console.warn("unsupported index buffer type: uint32");
      }
    } else if (geometry.instanced) {
      gl.drawArraysInstanced(type, start, size || geometry.getSize(), instanceCount || 1);
    } else {
      gl.drawArrays(type, start, size || geometry.getSize());
    }
    return this;
  }
  unbind() {
    this.gl.bindVertexArray(null);
    this._activeVao = null;
    this._activeGeometry = null;
  }
  destroy() {
    this.renderer = null;
  }
}
GeometrySystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "geometry"
};
extensions.add(GeometrySystem);

const tempMat = new Matrix();
class TextureMatrix {
  constructor(texture, clampMargin) {
    this._texture = texture;
    this.mapCoord = new Matrix();
    this.uClampFrame = new Float32Array(4);
    this.uClampOffset = new Float32Array(2);
    this._textureID = -1;
    this._updateID = 0;
    this.clampOffset = 0;
    this.clampMargin = typeof clampMargin === "undefined" ? 0.5 : clampMargin;
    this.isSimple = false;
  }
  get texture() {
    return this._texture;
  }
  set texture(value) {
    this._texture = value;
    this._textureID = -1;
  }
  multiplyUvs(uvs, out) {
    if (out === void 0) {
      out = uvs;
    }
    const mat = this.mapCoord;
    for (let i = 0; i < uvs.length; i += 2) {
      const x = uvs[i];
      const y = uvs[i + 1];
      out[i] = x * mat.a + y * mat.c + mat.tx;
      out[i + 1] = x * mat.b + y * mat.d + mat.ty;
    }
    return out;
  }
  update(forceUpdate) {
    const tex = this._texture;
    if (!tex || !tex.valid) {
      return false;
    }
    if (!forceUpdate && this._textureID === tex._updateID) {
      return false;
    }
    this._textureID = tex._updateID;
    this._updateID++;
    const uvs = tex._uvs;
    this.mapCoord.set(uvs.x1 - uvs.x0, uvs.y1 - uvs.y0, uvs.x3 - uvs.x0, uvs.y3 - uvs.y0, uvs.x0, uvs.y0);
    const orig = tex.orig;
    const trim = tex.trim;
    if (trim) {
      tempMat.set(orig.width / trim.width, 0, 0, orig.height / trim.height, -trim.x / trim.width, -trim.y / trim.height);
      this.mapCoord.append(tempMat);
    }
    const texBase = tex.baseTexture;
    const frame = this.uClampFrame;
    const margin = this.clampMargin / texBase.resolution;
    const offset = this.clampOffset;
    frame[0] = (tex._frame.x + margin + offset) / texBase.width;
    frame[1] = (tex._frame.y + margin + offset) / texBase.height;
    frame[2] = (tex._frame.x + tex._frame.width - margin + offset) / texBase.width;
    frame[3] = (tex._frame.y + tex._frame.height - margin + offset) / texBase.height;
    this.uClampOffset[0] = offset / texBase.realWidth;
    this.uClampOffset[1] = offset / texBase.realHeight;
    this.isSimple = tex._frame.width === texBase.width && tex._frame.height === texBase.height && tex.rotate === 0;
    return true;
  }
}

var fragment = "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n";

var vertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n";

class SpriteMaskFilter extends Filter {
  constructor(vertexSrc, fragmentSrc, uniforms) {
    let sprite = null;
    if (typeof vertexSrc !== "string" && fragmentSrc === void 0 && uniforms === void 0) {
      sprite = vertexSrc;
      vertexSrc = void 0;
      fragmentSrc = void 0;
      uniforms = void 0;
    }
    super(vertexSrc || vertex, fragmentSrc || fragment, uniforms);
    this.maskSprite = sprite;
    this.maskMatrix = new Matrix();
  }
  get maskSprite() {
    return this._maskSprite;
  }
  set maskSprite(value) {
    this._maskSprite = value;
    if (this._maskSprite) {
      this._maskSprite.renderable = false;
    }
  }
  apply(filterManager, input, output, clearMode) {
    const maskSprite = this._maskSprite;
    const tex = maskSprite._texture;
    if (!tex.valid) {
      return;
    }
    if (!tex.uvMatrix) {
      tex.uvMatrix = new TextureMatrix(tex, 0);
    }
    tex.uvMatrix.update();
    this.uniforms.npmAlpha = tex.baseTexture.alphaMode ? 0 : 1;
    this.uniforms.mask = tex;
    this.uniforms.otherMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, maskSprite).prepend(tex.uvMatrix.mapCoord);
    this.uniforms.alpha = maskSprite.worldAlpha;
    this.uniforms.maskClamp = tex.uvMatrix.uClampFrame;
    filterManager.applyFilter(this, input, output, clearMode);
  }
}

class MaskData {
  constructor(maskObject = null) {
    this.type = MASK_TYPES.NONE;
    this.autoDetect = true;
    this.maskObject = maskObject || null;
    this.pooled = false;
    this.isMaskData = true;
    this.resolution = null;
    this.multisample = Filter.defaultMultisample;
    this.enabled = true;
    this.colorMask = 15;
    this._filters = null;
    this._stencilCounter = 0;
    this._scissorCounter = 0;
    this._scissorRect = null;
    this._scissorRectLocal = null;
    this._colorMask = 15;
    this._target = null;
  }
  get filter() {
    return this._filters ? this._filters[0] : null;
  }
  set filter(value) {
    if (value) {
      if (this._filters) {
        this._filters[0] = value;
      } else {
        this._filters = [value];
      }
    } else {
      this._filters = null;
    }
  }
  reset() {
    if (this.pooled) {
      this.maskObject = null;
      this.type = MASK_TYPES.NONE;
      this.autoDetect = true;
    }
    this._target = null;
    this._scissorRectLocal = null;
  }
  copyCountersOrReset(maskAbove) {
    if (maskAbove) {
      this._stencilCounter = maskAbove._stencilCounter;
      this._scissorCounter = maskAbove._scissorCounter;
      this._scissorRect = maskAbove._scissorRect;
    } else {
      this._stencilCounter = 0;
      this._scissorCounter = 0;
      this._scissorRect = null;
    }
  }
}

class MaskSystem {
  constructor(renderer) {
    this.renderer = renderer;
    this.enableScissor = true;
    this.alphaMaskPool = [];
    this.maskDataPool = [];
    this.maskStack = [];
    this.alphaMaskIndex = 0;
  }
  setMaskStack(maskStack) {
    this.maskStack = maskStack;
    this.renderer.scissor.setMaskStack(maskStack);
    this.renderer.stencil.setMaskStack(maskStack);
  }
  push(target, maskDataOrTarget) {
    let maskData = maskDataOrTarget;
    if (!maskData.isMaskData) {
      const d = this.maskDataPool.pop() || new MaskData();
      d.pooled = true;
      d.maskObject = maskDataOrTarget;
      maskData = d;
    }
    const maskAbove = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
    maskData.copyCountersOrReset(maskAbove);
    maskData._colorMask = maskAbove ? maskAbove._colorMask : 15;
    if (maskData.autoDetect) {
      this.detect(maskData);
    }
    maskData._target = target;
    if (maskData.type !== MASK_TYPES.SPRITE) {
      this.maskStack.push(maskData);
    }
    if (maskData.enabled) {
      switch (maskData.type) {
        case MASK_TYPES.SCISSOR:
          this.renderer.scissor.push(maskData);
          break;
        case MASK_TYPES.STENCIL:
          this.renderer.stencil.push(maskData);
          break;
        case MASK_TYPES.SPRITE:
          maskData.copyCountersOrReset(null);
          this.pushSpriteMask(maskData);
          break;
        case MASK_TYPES.COLOR:
          this.pushColorMask(maskData);
          break;
      }
    }
    if (maskData.type === MASK_TYPES.SPRITE) {
      this.maskStack.push(maskData);
    }
  }
  pop(target) {
    const maskData = this.maskStack.pop();
    if (!maskData || maskData._target !== target) {
      return;
    }
    if (maskData.enabled) {
      switch (maskData.type) {
        case MASK_TYPES.SCISSOR:
          this.renderer.scissor.pop(maskData);
          break;
        case MASK_TYPES.STENCIL:
          this.renderer.stencil.pop(maskData.maskObject);
          break;
        case MASK_TYPES.SPRITE:
          this.popSpriteMask(maskData);
          break;
        case MASK_TYPES.COLOR:
          this.popColorMask(maskData);
          break;
      }
    }
    maskData.reset();
    if (maskData.pooled) {
      this.maskDataPool.push(maskData);
    }
    if (this.maskStack.length !== 0) {
      const maskCurrent = this.maskStack[this.maskStack.length - 1];
      if (maskCurrent.type === MASK_TYPES.SPRITE && maskCurrent._filters) {
        maskCurrent._filters[0].maskSprite = maskCurrent.maskObject;
      }
    }
  }
  detect(maskData) {
    const maskObject = maskData.maskObject;
    if (!maskObject) {
      maskData.type = MASK_TYPES.COLOR;
    } else if (maskObject.isSprite) {
      maskData.type = MASK_TYPES.SPRITE;
    } else if (this.enableScissor && this.renderer.scissor.testScissor(maskData)) {
      maskData.type = MASK_TYPES.SCISSOR;
    } else {
      maskData.type = MASK_TYPES.STENCIL;
    }
  }
  pushSpriteMask(maskData) {
    const { maskObject } = maskData;
    const target = maskData._target;
    let alphaMaskFilter = maskData._filters;
    if (!alphaMaskFilter) {
      alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex];
      if (!alphaMaskFilter) {
        alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex] = [new SpriteMaskFilter()];
      }
    }
    const renderer = this.renderer;
    const renderTextureSystem = renderer.renderTexture;
    let resolution;
    let multisample;
    if (renderTextureSystem.current) {
      const renderTexture = renderTextureSystem.current;
      resolution = maskData.resolution || renderTexture.resolution;
      multisample = maskData.multisample ?? renderTexture.multisample;
    } else {
      resolution = maskData.resolution || renderer.resolution;
      multisample = maskData.multisample ?? renderer.multisample;
    }
    alphaMaskFilter[0].resolution = resolution;
    alphaMaskFilter[0].multisample = multisample;
    alphaMaskFilter[0].maskSprite = maskObject;
    const stashFilterArea = target.filterArea;
    target.filterArea = maskObject.getBounds(true);
    renderer.filter.push(target, alphaMaskFilter);
    target.filterArea = stashFilterArea;
    if (!maskData._filters) {
      this.alphaMaskIndex++;
    }
  }
  popSpriteMask(maskData) {
    this.renderer.filter.pop();
    if (maskData._filters) {
      maskData._filters[0].maskSprite = null;
    } else {
      this.alphaMaskIndex--;
      this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null;
    }
  }
  pushColorMask(maskData) {
    const currColorMask = maskData._colorMask;
    const nextColorMask = maskData._colorMask = currColorMask & maskData.colorMask;
    if (nextColorMask !== currColorMask) {
      this.renderer.gl.colorMask((nextColorMask & 1) !== 0, (nextColorMask & 2) !== 0, (nextColorMask & 4) !== 0, (nextColorMask & 8) !== 0);
    }
  }
  popColorMask(maskData) {
    const currColorMask = maskData._colorMask;
    const nextColorMask = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
    if (nextColorMask !== currColorMask) {
      this.renderer.gl.colorMask((nextColorMask & 1) !== 0, (nextColorMask & 2) !== 0, (nextColorMask & 4) !== 0, (nextColorMask & 8) !== 0);
    }
  }
  destroy() {
    this.renderer = null;
  }
}
MaskSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "mask"
};
extensions.add(MaskSystem);

class AbstractMaskSystem {
  constructor(renderer) {
    this.renderer = renderer;
    this.maskStack = [];
    this.glConst = 0;
  }
  getStackLength() {
    return this.maskStack.length;
  }
  setMaskStack(maskStack) {
    const { gl } = this.renderer;
    const curStackLen = this.getStackLength();
    this.maskStack = maskStack;
    const newStackLen = this.getStackLength();
    if (newStackLen !== curStackLen) {
      if (newStackLen === 0) {
        gl.disable(this.glConst);
      } else {
        gl.enable(this.glConst);
        this._useCurrent();
      }
    }
  }
  _useCurrent() {
  }
  destroy() {
    this.renderer = null;
    this.maskStack = null;
  }
}

const tempMatrix$1 = new Matrix();
const rectPool = [];
const _ScissorSystem = class extends AbstractMaskSystem {
  constructor(renderer) {
    super(renderer);
    this.glConst = settings.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST;
  }
  getStackLength() {
    const maskData = this.maskStack[this.maskStack.length - 1];
    if (maskData) {
      return maskData._scissorCounter;
    }
    return 0;
  }
  calcScissorRect(maskData) {
    if (maskData._scissorRectLocal) {
      return;
    }
    const prevData = maskData._scissorRect;
    const { maskObject } = maskData;
    const { renderer } = this;
    const renderTextureSystem = renderer.renderTexture;
    const rect = maskObject.getBounds(true, rectPool.pop() ?? new Rectangle());
    this.roundFrameToPixels(rect, renderTextureSystem.current ? renderTextureSystem.current.resolution : renderer.resolution, renderTextureSystem.sourceFrame, renderTextureSystem.destinationFrame, renderer.projection.transform);
    if (prevData) {
      rect.fit(prevData);
    }
    maskData._scissorRectLocal = rect;
  }
  static isMatrixRotated(matrix) {
    if (!matrix) {
      return false;
    }
    const { a, b, c, d } = matrix;
    return (Math.abs(b) > 1e-4 || Math.abs(c) > 1e-4) && (Math.abs(a) > 1e-4 || Math.abs(d) > 1e-4);
  }
  testScissor(maskData) {
    const { maskObject } = maskData;
    if (!maskObject.isFastRect || !maskObject.isFastRect()) {
      return false;
    }
    if (_ScissorSystem.isMatrixRotated(maskObject.worldTransform)) {
      return false;
    }
    if (_ScissorSystem.isMatrixRotated(this.renderer.projection.transform)) {
      return false;
    }
    this.calcScissorRect(maskData);
    const rect = maskData._scissorRectLocal;
    return rect.width > 0 && rect.height > 0;
  }
  roundFrameToPixels(frame, resolution, bindingSourceFrame, bindingDestinationFrame, transform) {
    if (_ScissorSystem.isMatrixRotated(transform)) {
      return;
    }
    transform = transform ? tempMatrix$1.copyFrom(transform) : tempMatrix$1.identity();
    transform.translate(-bindingSourceFrame.x, -bindingSourceFrame.y).scale(bindingDestinationFrame.width / bindingSourceFrame.width, bindingDestinationFrame.height / bindingSourceFrame.height).translate(bindingDestinationFrame.x, bindingDestinationFrame.y);
    this.renderer.filter.transformAABB(transform, frame);
    frame.fit(bindingDestinationFrame);
    frame.x = Math.round(frame.x * resolution);
    frame.y = Math.round(frame.y * resolution);
    frame.width = Math.round(frame.width * resolution);
    frame.height = Math.round(frame.height * resolution);
  }
  push(maskData) {
    if (!maskData._scissorRectLocal) {
      this.calcScissorRect(maskData);
    }
    const { gl } = this.renderer;
    if (!maskData._scissorRect) {
      gl.enable(gl.SCISSOR_TEST);
    }
    maskData._scissorCounter++;
    maskData._scissorRect = maskData._scissorRectLocal;
    this._useCurrent();
  }
  pop(maskData) {
    const { gl } = this.renderer;
    if (maskData) {
      rectPool.push(maskData._scissorRectLocal);
    }
    if (this.getStackLength() > 0) {
      this._useCurrent();
    } else {
      gl.disable(gl.SCISSOR_TEST);
    }
  }
  _useCurrent() {
    const rect = this.maskStack[this.maskStack.length - 1]._scissorRect;
    let y;
    if (this.renderer.renderTexture.current) {
      y = rect.y;
    } else {
      y = this.renderer.height - rect.height - rect.y;
    }
    this.renderer.gl.scissor(rect.x, y, rect.width, rect.height);
  }
};
let ScissorSystem = _ScissorSystem;
ScissorSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "scissor"
};
extensions.add(ScissorSystem);

class StencilSystem extends AbstractMaskSystem {
  constructor(renderer) {
    super(renderer);
    this.glConst = settings.ADAPTER.getWebGLRenderingContext().STENCIL_TEST;
  }
  getStackLength() {
    const maskData = this.maskStack[this.maskStack.length - 1];
    if (maskData) {
      return maskData._stencilCounter;
    }
    return 0;
  }
  push(maskData) {
    const maskObject = maskData.maskObject;
    const { gl } = this.renderer;
    const prevMaskCount = maskData._stencilCounter;
    if (prevMaskCount === 0) {
      this.renderer.framebuffer.forceStencil();
      gl.clearStencil(0);
      gl.clear(gl.STENCIL_BUFFER_BIT);
      gl.enable(gl.STENCIL_TEST);
    }
    maskData._stencilCounter++;
    const colorMask = maskData._colorMask;
    if (colorMask !== 0) {
      maskData._colorMask = 0;
      gl.colorMask(false, false, false, false);
    }
    gl.stencilFunc(gl.EQUAL, prevMaskCount, 4294967295);
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);
    maskObject.renderable = true;
    maskObject.render(this.renderer);
    this.renderer.batch.flush();
    maskObject.renderable = false;
    if (colorMask !== 0) {
      maskData._colorMask = colorMask;
      gl.colorMask((colorMask & 1) !== 0, (colorMask & 2) !== 0, (colorMask & 4) !== 0, (colorMask & 8) !== 0);
    }
    this._useCurrent();
  }
  pop(maskObject) {
    const gl = this.renderer.gl;
    if (this.getStackLength() === 0) {
      gl.disable(gl.STENCIL_TEST);
    } else {
      const maskData = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
      const colorMask = maskData ? maskData._colorMask : 15;
      if (colorMask !== 0) {
        maskData._colorMask = 0;
        gl.colorMask(false, false, false, false);
      }
      gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);
      maskObject.renderable = true;
      maskObject.render(this.renderer);
      this.renderer.batch.flush();
      maskObject.renderable = false;
      if (colorMask !== 0) {
        maskData._colorMask = colorMask;
        gl.colorMask((colorMask & 1) !== 0, (colorMask & 2) !== 0, (colorMask & 4) !== 0, (colorMask & 8) !== 0);
      }
      this._useCurrent();
    }
  }
  _useCurrent() {
    const gl = this.renderer.gl;
    gl.stencilFunc(gl.EQUAL, this.getStackLength(), 4294967295);
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
  }
}
StencilSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "stencil"
};
extensions.add(StencilSystem);

class PluginSystem {
  constructor(renderer) {
    this.renderer = renderer;
    this.plugins = {};
    Object.defineProperties(this.plugins, {
      extract: {
        enumerable: false,
        get() {
          deprecation("7.0.0", "renderer.plugins.extract has moved to renderer.extract");
          return renderer.extract;
        }
      },
      prepare: {
        enumerable: false,
        get() {
          deprecation("7.0.0", "renderer.plugins.prepare has moved to renderer.prepare");
          return renderer.prepare;
        }
      },
      interaction: {
        enumerable: false,
        get() {
          deprecation("7.0.0", "renderer.plugins.interaction has been deprecated, use renderer.events");
          return renderer.events;
        }
      }
    });
  }
  init() {
    const staticMap = this.rendererPlugins;
    for (const o in staticMap) {
      this.plugins[o] = new staticMap[o](this.renderer);
    }
  }
  destroy() {
    for (const o in this.plugins) {
      this.plugins[o].destroy();
      this.plugins[o] = null;
    }
  }
}
PluginSystem.extension = {
  type: [
    ExtensionType.RendererSystem,
    ExtensionType.CanvasRendererSystem
  ],
  name: "_plugin"
};
extensions.add(PluginSystem);

class ProjectionSystem {
  constructor(renderer) {
    this.renderer = renderer;
    this.destinationFrame = null;
    this.sourceFrame = null;
    this.defaultFrame = null;
    this.projectionMatrix = new Matrix();
    this.transform = null;
  }
  update(destinationFrame, sourceFrame, resolution, root) {
    this.destinationFrame = destinationFrame || this.destinationFrame || this.defaultFrame;
    this.sourceFrame = sourceFrame || this.sourceFrame || destinationFrame;
    this.calculateProjection(this.destinationFrame, this.sourceFrame, resolution, root);
    if (this.transform) {
      this.projectionMatrix.append(this.transform);
    }
    const renderer = this.renderer;
    renderer.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix;
    renderer.globalUniforms.update();
    if (renderer.shader.shader) {
      renderer.shader.syncUniformGroup(renderer.shader.shader.uniforms.globals);
    }
  }
  calculateProjection(_destinationFrame, sourceFrame, _resolution, root) {
    const pm = this.projectionMatrix;
    const sign = !root ? 1 : -1;
    pm.identity();
    pm.a = 1 / sourceFrame.width * 2;
    pm.d = sign * (1 / sourceFrame.height * 2);
    pm.tx = -1 - sourceFrame.x * pm.a;
    pm.ty = -sign - sourceFrame.y * pm.d;
  }
  setTransform(_matrix) {
  }
  destroy() {
    this.renderer = null;
  }
}
ProjectionSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "projection"
};
extensions.add(ProjectionSystem);

const tempTransform = new Transform();
class GenerateTextureSystem {
  constructor(renderer) {
    this.renderer = renderer;
    this._tempMatrix = new Matrix();
  }
  generateTexture(displayObject, options) {
    const { region: manualRegion, ...textureOptions } = options || {};
    const region = manualRegion || displayObject.getLocalBounds(null, true);
    if (region.width === 0)
      region.width = 1;
    if (region.height === 0)
      region.height = 1;
    const renderTexture = RenderTexture.create({
      width: region.width,
      height: region.height,
      ...textureOptions
    });
    this._tempMatrix.tx = -region.x;
    this._tempMatrix.ty = -region.y;
    const transform = displayObject.transform;
    displayObject.transform = tempTransform;
    this.renderer.render(displayObject, {
      renderTexture,
      transform: this._tempMatrix,
      skipUpdateTransform: !!displayObject.parent,
      blit: true
    });
    displayObject.transform = transform;
    return renderTexture;
  }
  destroy() {
  }
}
GenerateTextureSystem.extension = {
  type: [
    ExtensionType.RendererSystem,
    ExtensionType.CanvasRendererSystem
  ],
  name: "textureGenerator"
};
extensions.add(GenerateTextureSystem);

const tempRect = new Rectangle();
const tempRect2 = new Rectangle();
class RenderTextureSystem {
  constructor(renderer) {
    this.renderer = renderer;
    this.defaultMaskStack = [];
    this.current = null;
    this.sourceFrame = new Rectangle();
    this.destinationFrame = new Rectangle();
    this.viewportFrame = new Rectangle();
  }
  contextChange() {
    const attributes = this.renderer?.gl.getContextAttributes();
    this._rendererPremultipliedAlpha = !!(attributes && attributes.alpha && attributes.premultipliedAlpha);
  }
  bind(renderTexture = null, sourceFrame, destinationFrame) {
    const renderer = this.renderer;
    this.current = renderTexture;
    let baseTexture;
    let framebuffer;
    let resolution;
    if (renderTexture) {
      baseTexture = renderTexture.baseTexture;
      resolution = baseTexture.resolution;
      if (!sourceFrame) {
        tempRect.width = renderTexture.frame.width;
        tempRect.height = renderTexture.frame.height;
        sourceFrame = tempRect;
      }
      if (!destinationFrame) {
        tempRect2.x = renderTexture.frame.x;
        tempRect2.y = renderTexture.frame.y;
        tempRect2.width = sourceFrame.width;
        tempRect2.height = sourceFrame.height;
        destinationFrame = tempRect2;
      }
      framebuffer = baseTexture.framebuffer;
    } else {
      resolution = renderer.resolution;
      if (!sourceFrame) {
        tempRect.width = renderer._view.screen.width;
        tempRect.height = renderer._view.screen.height;
        sourceFrame = tempRect;
      }
      if (!destinationFrame) {
        destinationFrame = tempRect;
        destinationFrame.width = sourceFrame.width;
        destinationFrame.height = sourceFrame.height;
      }
    }
    const viewportFrame = this.viewportFrame;
    viewportFrame.x = destinationFrame.x * resolution;
    viewportFrame.y = destinationFrame.y * resolution;
    viewportFrame.width = destinationFrame.width * resolution;
    viewportFrame.height = destinationFrame.height * resolution;
    if (!renderTexture) {
      viewportFrame.y = renderer.view.height - (viewportFrame.y + viewportFrame.height);
    }
    viewportFrame.ceil();
    this.renderer.framebuffer.bind(framebuffer, viewportFrame);
    this.renderer.projection.update(destinationFrame, sourceFrame, resolution, !framebuffer);
    if (renderTexture) {
      this.renderer.mask.setMaskStack(baseTexture.maskStack);
    } else {
      this.renderer.mask.setMaskStack(this.defaultMaskStack);
    }
    this.sourceFrame.copyFrom(sourceFrame);
    this.destinationFrame.copyFrom(destinationFrame);
  }
  clear(clearColor, mask) {
    const fallbackColor = this.current ? this.current.baseTexture.clear : this.renderer.background.backgroundColor;
    const color = Color.shared.setValue(clearColor ? clearColor : fallbackColor);
    if (this.current && this.current.baseTexture.alphaMode > 0 || !this.current && this._rendererPremultipliedAlpha) {
      color.premultiply(color.alpha);
    }
    const destinationFrame = this.destinationFrame;
    const baseFrame = this.current ? this.current.baseTexture : this.renderer._view.screen;
    const clearMask = destinationFrame.width !== baseFrame.width || destinationFrame.height !== baseFrame.height;
    if (clearMask) {
      let { x, y, width, height } = this.viewportFrame;
      x = Math.round(x);
      y = Math.round(y);
      width = Math.round(width);
      height = Math.round(height);
      this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
      this.renderer.gl.scissor(x, y, width, height);
    }
    this.renderer.framebuffer.clear(color.red, color.green, color.blue, color.alpha, mask);
    if (clearMask) {
      this.renderer.scissor.pop();
    }
  }
  resize() {
    this.bind(null);
  }
  reset() {
    this.bind(null);
  }
  destroy() {
    this.renderer = null;
  }
}
RenderTextureSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "renderTexture"
};
extensions.add(RenderTextureSystem);

class GLProgram {
  constructor(program, uniformData) {
    this.program = program;
    this.uniformData = uniformData;
    this.uniformGroups = {};
    this.uniformDirtyGroups = {};
    this.uniformBufferBindings = {};
  }
  destroy() {
    this.uniformData = null;
    this.uniformGroups = null;
    this.uniformDirtyGroups = null;
    this.uniformBufferBindings = null;
    this.program = null;
  }
}

function getAttributeData(program, gl) {
  const attributes = {};
  const totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < totalAttributes; i++) {
    const attribData = gl.getActiveAttrib(program, i);
    if (attribData.name.startsWith("gl_")) {
      continue;
    }
    const type = mapType(gl, attribData.type);
    const data = {
      type,
      name: attribData.name,
      size: mapSize(type),
      location: gl.getAttribLocation(program, attribData.name)
    };
    attributes[attribData.name] = data;
  }
  return attributes;
}

function getUniformData(program, gl) {
  const uniforms = {};
  const totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  for (let i = 0; i < totalUniforms; i++) {
    const uniformData = gl.getActiveUniform(program, i);
    const name = uniformData.name.replace(/\[.*?\]$/, "");
    const isArray = !!uniformData.name.match(/\[.*?\]$/);
    const type = mapType(gl, uniformData.type);
    uniforms[name] = {
      name,
      index: i,
      type,
      size: uniformData.size,
      isArray,
      value: defaultValue(type, uniformData.size)
    };
  }
  return uniforms;
}

function generateProgram(gl, program) {
  const glVertShader = compileShader(gl, gl.VERTEX_SHADER, program.vertexSrc);
  const glFragShader = compileShader(gl, gl.FRAGMENT_SHADER, program.fragmentSrc);
  const webGLProgram = gl.createProgram();
  gl.attachShader(webGLProgram, glVertShader);
  gl.attachShader(webGLProgram, glFragShader);
  const transformFeedbackVaryings = program.extra?.transformFeedbackVaryings;
  if (transformFeedbackVaryings) {
    if (typeof gl.transformFeedbackVaryings !== "function") {
      console.warn(`TransformFeedback is not supported but TransformFeedbackVaryings are given.`);
    } else {
      gl.transformFeedbackVaryings(webGLProgram, transformFeedbackVaryings.names, transformFeedbackVaryings.bufferMode === "separate" ? gl.SEPARATE_ATTRIBS : gl.INTERLEAVED_ATTRIBS);
    }
  }
  gl.linkProgram(webGLProgram);
  if (!gl.getProgramParameter(webGLProgram, gl.LINK_STATUS)) {
    logProgramError(gl, webGLProgram, glVertShader, glFragShader);
  }
  program.attributeData = getAttributeData(webGLProgram, gl);
  program.uniformData = getUniformData(webGLProgram, gl);
  if (!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(program.vertexSrc)) {
    const keys = Object.keys(program.attributeData);
    keys.sort((a, b) => a > b ? 1 : -1);
    for (let i = 0; i < keys.length; i++) {
      program.attributeData[keys[i]].location = i;
      gl.bindAttribLocation(webGLProgram, i, keys[i]);
    }
    gl.linkProgram(webGLProgram);
  }
  gl.deleteShader(glVertShader);
  gl.deleteShader(glFragShader);
  const uniformData = {};
  for (const i in program.uniformData) {
    const data = program.uniformData[i];
    uniformData[i] = {
      location: gl.getUniformLocation(webGLProgram, i),
      value: defaultValue(data.type, data.size)
    };
  }
  const glProgram = new GLProgram(webGLProgram, uniformData);
  return glProgram;
}

function uboUpdate(_ud, _uv, _renderer, _syncData, buffer) {
  _renderer.buffer.update(buffer);
}
const UBO_TO_SINGLE_SETTERS = {
  float: `
        data[offset] = v;
    `,
  vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
  vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
  vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
  mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
  mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
  mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `
};
const GLSL_TO_STD40_SIZE = {
  float: 4,
  vec2: 8,
  vec3: 12,
  vec4: 16,
  int: 4,
  ivec2: 8,
  ivec3: 12,
  ivec4: 16,
  uint: 4,
  uvec2: 8,
  uvec3: 12,
  uvec4: 16,
  bool: 4,
  bvec2: 8,
  bvec3: 12,
  bvec4: 16,
  mat2: 16 * 2,
  mat3: 16 * 3,
  mat4: 16 * 4
};
function createUBOElements(uniformData) {
  const uboElements = uniformData.map((data) => ({
    data,
    offset: 0,
    dataLen: 0,
    dirty: 0
  }));
  let size = 0;
  let chunkSize = 0;
  let offset = 0;
  for (let i = 0; i < uboElements.length; i++) {
    const uboElement = uboElements[i];
    size = GLSL_TO_STD40_SIZE[uboElement.data.type];
    if (uboElement.data.size > 1) {
      size = Math.max(size, 16) * uboElement.data.size;
    }
    uboElement.dataLen = size;
    if (chunkSize % size !== 0 && chunkSize < 16) {
      const lineUpValue = chunkSize % size % 16;
      chunkSize += lineUpValue;
      offset += lineUpValue;
    }
    if (chunkSize + size > 16) {
      offset = Math.ceil(offset / 16) * 16;
      uboElement.offset = offset;
      offset += size;
      chunkSize = size;
    } else {
      uboElement.offset = offset;
      chunkSize += size;
      offset += size;
    }
  }
  offset = Math.ceil(offset / 16) * 16;
  return { uboElements, size: offset };
}
function getUBOData(uniforms, uniformData) {
  const usedUniformDatas = [];
  for (const i in uniforms) {
    if (uniformData[i]) {
      usedUniformDatas.push(uniformData[i]);
    }
  }
  usedUniformDatas.sort((a, b) => a.index - b.index);
  return usedUniformDatas;
}
function generateUniformBufferSync(group, uniformData) {
  if (!group.autoManage) {
    return { size: 0, syncFunc: uboUpdate };
  }
  const usedUniformDatas = getUBOData(group.uniforms, uniformData);
  const { uboElements, size } = createUBOElements(usedUniformDatas);
  const funcFragments = [`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];
  for (let i = 0; i < uboElements.length; i++) {
    const uboElement = uboElements[i];
    const uniform = group.uniforms[uboElement.data.name];
    const name = uboElement.data.name;
    let parsed = false;
    for (let j = 0; j < uniformParsers.length; j++) {
      const uniformParser = uniformParsers[j];
      if (uniformParser.codeUbo && uniformParser.test(uboElement.data, uniform)) {
        funcFragments.push(`offset = ${uboElement.offset / 4};`, uniformParsers[j].codeUbo(uboElement.data.name, uniform));
        parsed = true;
        break;
      }
    }
    if (!parsed) {
      if (uboElement.data.size > 1) {
        const size2 = mapSize(uboElement.data.type);
        const rowSize = Math.max(GLSL_TO_STD40_SIZE[uboElement.data.type] / 16, 1);
        const elementSize = size2 / rowSize;
        const remainder = (4 - elementSize % 4) % 4;
        funcFragments.push(`
                cv = ud.${name}.value;
                v = uv.${name};
                offset = ${uboElement.offset / 4};

                t = 0;

                for(var i=0; i < ${uboElement.data.size * rowSize}; i++)
                {
                    for(var j = 0; j < ${elementSize}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${remainder};
                }

                `);
      } else {
        const template = UBO_TO_SINGLE_SETTERS[uboElement.data.type];
        funcFragments.push(`
                cv = ud.${name}.value;
                v = uv.${name};
                offset = ${uboElement.offset / 4};
                ${template};
                `);
      }
    }
  }
  funcFragments.push(`
       renderer.buffer.update(buffer);
    `);
  return {
    size,
    syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", funcFragments.join("\n"))
  };
}

let UID = 0;
const defaultSyncData = { textureCount: 0, uboCount: 0 };
class ShaderSystem {
  constructor(renderer) {
    this.destroyed = false;
    this.renderer = renderer;
    this.systemCheck();
    this.gl = null;
    this.shader = null;
    this.program = null;
    this.cache = {};
    this._uboCache = {};
    this.id = UID++;
  }
  systemCheck() {
    if (!unsafeEvalSupported()) {
      throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.");
    }
  }
  contextChange(gl) {
    this.gl = gl;
    this.reset();
  }
  bind(shader, dontSync) {
    shader.disposeRunner.add(this);
    shader.uniforms.globals = this.renderer.globalUniforms;
    const program = shader.program;
    const glProgram = program.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(shader);
    this.shader = shader;
    if (this.program !== program) {
      this.program = program;
      this.gl.useProgram(glProgram.program);
    }
    if (!dontSync) {
      defaultSyncData.textureCount = 0;
      defaultSyncData.uboCount = 0;
      this.syncUniformGroup(shader.uniformGroup, defaultSyncData);
    }
    return glProgram;
  }
  setUniforms(uniforms) {
    const shader = this.shader.program;
    const glProgram = shader.glPrograms[this.renderer.CONTEXT_UID];
    shader.syncUniforms(glProgram.uniformData, uniforms, this.renderer);
  }
  syncUniformGroup(group, syncData) {
    const glProgram = this.getGlProgram();
    if (!group.static || group.dirtyId !== glProgram.uniformDirtyGroups[group.id]) {
      glProgram.uniformDirtyGroups[group.id] = group.dirtyId;
      this.syncUniforms(group, glProgram, syncData);
    }
  }
  syncUniforms(group, glProgram, syncData) {
    const syncFunc = group.syncUniforms[this.shader.program.id] || this.createSyncGroups(group);
    syncFunc(glProgram.uniformData, group.uniforms, this.renderer, syncData);
  }
  createSyncGroups(group) {
    const id = this.getSignature(group, this.shader.program.uniformData, "u");
    if (!this.cache[id]) {
      this.cache[id] = generateUniformsSync(group, this.shader.program.uniformData);
    }
    group.syncUniforms[this.shader.program.id] = this.cache[id];
    return group.syncUniforms[this.shader.program.id];
  }
  syncUniformBufferGroup(group, name) {
    const glProgram = this.getGlProgram();
    if (!group.static || group.dirtyId !== 0 || !glProgram.uniformGroups[group.id]) {
      group.dirtyId = 0;
      const syncFunc = glProgram.uniformGroups[group.id] || this.createSyncBufferGroup(group, glProgram, name);
      group.buffer.update();
      syncFunc(glProgram.uniformData, group.uniforms, this.renderer, defaultSyncData, group.buffer);
    }
    this.renderer.buffer.bindBufferBase(group.buffer, glProgram.uniformBufferBindings[name]);
  }
  createSyncBufferGroup(group, glProgram, name) {
    const { gl } = this.renderer;
    this.renderer.buffer.bind(group.buffer);
    const uniformBlockIndex = this.gl.getUniformBlockIndex(glProgram.program, name);
    glProgram.uniformBufferBindings[name] = this.shader.uniformBindCount;
    gl.uniformBlockBinding(glProgram.program, uniformBlockIndex, this.shader.uniformBindCount);
    this.shader.uniformBindCount++;
    const id = this.getSignature(group, this.shader.program.uniformData, "ubo");
    let uboData = this._uboCache[id];
    if (!uboData) {
      uboData = this._uboCache[id] = generateUniformBufferSync(group, this.shader.program.uniformData);
    }
    if (group.autoManage) {
      const data = new Float32Array(uboData.size / 4);
      group.buffer.update(data);
    }
    glProgram.uniformGroups[group.id] = uboData.syncFunc;
    return glProgram.uniformGroups[group.id];
  }
  getSignature(group, uniformData, preFix) {
    const uniforms = group.uniforms;
    const strings = [`${preFix}-`];
    for (const i in uniforms) {
      strings.push(i);
      if (uniformData[i]) {
        strings.push(uniformData[i].type);
      }
    }
    return strings.join("-");
  }
  getGlProgram() {
    if (this.shader) {
      return this.shader.program.glPrograms[this.renderer.CONTEXT_UID];
    }
    return null;
  }
  generateProgram(shader) {
    const gl = this.gl;
    const program = shader.program;
    const glProgram = generateProgram(gl, program);
    program.glPrograms[this.renderer.CONTEXT_UID] = glProgram;
    return glProgram;
  }
  reset() {
    this.program = null;
    this.shader = null;
  }
  disposeShader(shader) {
    if (this.shader === shader) {
      this.shader = null;
    }
  }
  destroy() {
    this.renderer = null;
    this.destroyed = true;
  }
}
ShaderSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "shader"
};
extensions.add(ShaderSystem);

class StartupSystem {
  constructor(renderer) {
    this.renderer = renderer;
  }
  run(options) {
    const { renderer } = this;
    renderer.runners.init.emit(renderer.options);
    if (options.hello) {
      console.log(`PixiJS ${"7.2.4"} - ${renderer.rendererLogId} - https://pixijs.com`);
    }
    renderer.resize(renderer.screen.width, renderer.screen.height);
  }
  destroy() {
  }
}
StartupSystem.defaultOptions = {
  hello: false
};
StartupSystem.extension = {
  type: [
    ExtensionType.RendererSystem,
    ExtensionType.CanvasRendererSystem
  ],
  name: "startup"
};
extensions.add(StartupSystem);

function mapWebGLBlendModesToPixi(gl, array = []) {
  array[BLEND_MODES.NORMAL] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.ADD] = [gl.ONE, gl.ONE];
  array[BLEND_MODES.MULTIPLY] = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.SCREEN] = [gl.ONE, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.OVERLAY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.DARKEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.LIGHTEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.COLOR_DODGE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.COLOR_BURN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.HARD_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.SOFT_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.DIFFERENCE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.EXCLUSION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.HUE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.SATURATION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.COLOR] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.LUMINOSITY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.NONE] = [0, 0];
  array[BLEND_MODES.NORMAL_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.ADD_NPM] = [gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE];
  array[BLEND_MODES.SCREEN_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.SRC_IN] = [gl.DST_ALPHA, gl.ZERO];
  array[BLEND_MODES.SRC_OUT] = [gl.ONE_MINUS_DST_ALPHA, gl.ZERO];
  array[BLEND_MODES.SRC_ATOP] = [gl.DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.DST_OVER] = [gl.ONE_MINUS_DST_ALPHA, gl.ONE];
  array[BLEND_MODES.DST_IN] = [gl.ZERO, gl.SRC_ALPHA];
  array[BLEND_MODES.DST_OUT] = [gl.ZERO, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.DST_ATOP] = [gl.ONE_MINUS_DST_ALPHA, gl.SRC_ALPHA];
  array[BLEND_MODES.XOR] = [gl.ONE_MINUS_DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES.SUBTRACT] = [gl.ONE, gl.ONE, gl.ONE, gl.ONE, gl.FUNC_REVERSE_SUBTRACT, gl.FUNC_ADD];
  return array;
}

const BLEND = 0;
const OFFSET = 1;
const CULLING = 2;
const DEPTH_TEST = 3;
const WINDING = 4;
const DEPTH_MASK = 5;
const _StateSystem = class {
  constructor() {
    this.gl = null;
    this.stateId = 0;
    this.polygonOffset = 0;
    this.blendMode = BLEND_MODES.NONE;
    this._blendEq = false;
    this.map = [];
    this.map[BLEND] = this.setBlend;
    this.map[OFFSET] = this.setOffset;
    this.map[CULLING] = this.setCullFace;
    this.map[DEPTH_TEST] = this.setDepthTest;
    this.map[WINDING] = this.setFrontFace;
    this.map[DEPTH_MASK] = this.setDepthMask;
    this.checks = [];
    this.defaultState = new State();
    this.defaultState.blend = true;
  }
  contextChange(gl) {
    this.gl = gl;
    this.blendModes = mapWebGLBlendModesToPixi(gl);
    this.set(this.defaultState);
    this.reset();
  }
  set(state) {
    state = state || this.defaultState;
    if (this.stateId !== state.data) {
      let diff = this.stateId ^ state.data;
      let i = 0;
      while (diff) {
        if (diff & 1) {
          this.map[i].call(this, !!(state.data & 1 << i));
        }
        diff = diff >> 1;
        i++;
      }
      this.stateId = state.data;
    }
    for (let i = 0; i < this.checks.length; i++) {
      this.checks[i](this, state);
    }
  }
  forceState(state) {
    state = state || this.defaultState;
    for (let i = 0; i < this.map.length; i++) {
      this.map[i].call(this, !!(state.data & 1 << i));
    }
    for (let i = 0; i < this.checks.length; i++) {
      this.checks[i](this, state);
    }
    this.stateId = state.data;
  }
  setBlend(value) {
    this.updateCheck(_StateSystem.checkBlendMode, value);
    this.gl[value ? "enable" : "disable"](this.gl.BLEND);
  }
  setOffset(value) {
    this.updateCheck(_StateSystem.checkPolygonOffset, value);
    this.gl[value ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
  }
  setDepthTest(value) {
    this.gl[value ? "enable" : "disable"](this.gl.DEPTH_TEST);
  }
  setDepthMask(value) {
    this.gl.depthMask(value);
  }
  setCullFace(value) {
    this.gl[value ? "enable" : "disable"](this.gl.CULL_FACE);
  }
  setFrontFace(value) {
    this.gl.frontFace(this.gl[value ? "CW" : "CCW"]);
  }
  setBlendMode(value) {
    if (value === this.blendMode) {
      return;
    }
    this.blendMode = value;
    const mode = this.blendModes[value];
    const gl = this.gl;
    if (mode.length === 2) {
      gl.blendFunc(mode[0], mode[1]);
    } else {
      gl.blendFuncSeparate(mode[0], mode[1], mode[2], mode[3]);
    }
    if (mode.length === 6) {
      this._blendEq = true;
      gl.blendEquationSeparate(mode[4], mode[5]);
    } else if (this._blendEq) {
      this._blendEq = false;
      gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
    }
  }
  setPolygonOffset(value, scale) {
    this.gl.polygonOffset(value, scale);
  }
  reset() {
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);
    this.forceState(this.defaultState);
    this._blendEq = true;
    this.blendMode = -1;
    this.setBlendMode(0);
  }
  updateCheck(func, value) {
    const index = this.checks.indexOf(func);
    if (value && index === -1) {
      this.checks.push(func);
    } else if (!value && index !== -1) {
      this.checks.splice(index, 1);
    }
  }
  static checkBlendMode(system, state) {
    system.setBlendMode(state.blendMode);
  }
  static checkPolygonOffset(system, state) {
    system.setPolygonOffset(1, state.polygonOffset);
  }
  destroy() {
    this.gl = null;
  }
};
let StateSystem = _StateSystem;
StateSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "state"
};
extensions.add(StateSystem);

class SystemManager extends eventemitter3Exports {
  constructor() {
    super(...arguments);
    this.runners = {};
    this._systemsHash = {};
  }
  setup(config) {
    this.addRunners(...config.runners);
    const priority = (config.priority ?? []).filter((key) => config.systems[key]);
    const orderByPriority = [
      ...priority,
      ...Object.keys(config.systems).filter((key) => !priority.includes(key))
    ];
    for (const i of orderByPriority) {
      this.addSystem(config.systems[i], i);
    }
  }
  addRunners(...runnerIds) {
    runnerIds.forEach((runnerId) => {
      this.runners[runnerId] = new Runner(runnerId);
    });
  }
  addSystem(ClassRef, name) {
    const system = new ClassRef(this);
    if (this[name]) {
      throw new Error(`Whoops! The name "${name}" is already in use`);
    }
    this[name] = system;
    this._systemsHash[name] = system;
    for (const i in this.runners) {
      this.runners[i].add(system);
    }
    return this;
  }
  emitWithCustomOptions(runner, options) {
    const systemHashKeys = Object.keys(this._systemsHash);
    runner.items.forEach((system) => {
      const systemName = systemHashKeys.find((systemId) => this._systemsHash[systemId] === system);
      system[runner.name](options[systemName]);
    });
  }
  destroy() {
    Object.values(this.runners).forEach((runner) => {
      runner.destroy();
    });
    this._systemsHash = {};
  }
}

const _TextureGCSystem = class {
  constructor(renderer) {
    this.renderer = renderer;
    this.count = 0;
    this.checkCount = 0;
    this.maxIdle = _TextureGCSystem.defaultMaxIdle;
    this.checkCountMax = _TextureGCSystem.defaultCheckCountMax;
    this.mode = _TextureGCSystem.defaultMode;
  }
  postrender() {
    if (!this.renderer.objectRenderer.renderingToScreen) {
      return;
    }
    this.count++;
    if (this.mode === GC_MODES.MANUAL) {
      return;
    }
    this.checkCount++;
    if (this.checkCount > this.checkCountMax) {
      this.checkCount = 0;
      this.run();
    }
  }
  run() {
    const tm = this.renderer.texture;
    const managedTextures = tm.managedTextures;
    let wasRemoved = false;
    for (let i = 0; i < managedTextures.length; i++) {
      const texture = managedTextures[i];
      if (!texture.framebuffer && this.count - texture.touched > this.maxIdle) {
        tm.destroyTexture(texture, true);
        managedTextures[i] = null;
        wasRemoved = true;
      }
    }
    if (wasRemoved) {
      let j = 0;
      for (let i = 0; i < managedTextures.length; i++) {
        if (managedTextures[i] !== null) {
          managedTextures[j++] = managedTextures[i];
        }
      }
      managedTextures.length = j;
    }
  }
  unload(displayObject) {
    const tm = this.renderer.texture;
    const texture = displayObject._texture;
    if (texture && !texture.framebuffer) {
      tm.destroyTexture(texture);
    }
    for (let i = displayObject.children.length - 1; i >= 0; i--) {
      this.unload(displayObject.children[i]);
    }
  }
  destroy() {
    this.renderer = null;
  }
};
let TextureGCSystem = _TextureGCSystem;
TextureGCSystem.defaultMode = GC_MODES.AUTO;
TextureGCSystem.defaultMaxIdle = 60 * 60;
TextureGCSystem.defaultCheckCountMax = 60 * 10;
TextureGCSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "textureGC"
};
extensions.add(TextureGCSystem);

class GLTexture {
  constructor(texture) {
    this.texture = texture;
    this.width = -1;
    this.height = -1;
    this.dirtyId = -1;
    this.dirtyStyleId = -1;
    this.mipmap = false;
    this.wrapMode = 33071;
    this.type = TYPES.UNSIGNED_BYTE;
    this.internalFormat = FORMATS.RGBA;
    this.samplerType = 0;
  }
}

function mapTypeAndFormatToInternalFormat(gl) {
  let table;
  if ("WebGL2RenderingContext" in globalThis && gl instanceof globalThis.WebGL2RenderingContext) {
    table = {
      [TYPES.UNSIGNED_BYTE]: {
        [FORMATS.RGBA]: gl.RGBA8,
        [FORMATS.RGB]: gl.RGB8,
        [FORMATS.RG]: gl.RG8,
        [FORMATS.RED]: gl.R8,
        [FORMATS.RGBA_INTEGER]: gl.RGBA8UI,
        [FORMATS.RGB_INTEGER]: gl.RGB8UI,
        [FORMATS.RG_INTEGER]: gl.RG8UI,
        [FORMATS.RED_INTEGER]: gl.R8UI,
        [FORMATS.ALPHA]: gl.ALPHA,
        [FORMATS.LUMINANCE]: gl.LUMINANCE,
        [FORMATS.LUMINANCE_ALPHA]: gl.LUMINANCE_ALPHA
      },
      [TYPES.BYTE]: {
        [FORMATS.RGBA]: gl.RGBA8_SNORM,
        [FORMATS.RGB]: gl.RGB8_SNORM,
        [FORMATS.RG]: gl.RG8_SNORM,
        [FORMATS.RED]: gl.R8_SNORM,
        [FORMATS.RGBA_INTEGER]: gl.RGBA8I,
        [FORMATS.RGB_INTEGER]: gl.RGB8I,
        [FORMATS.RG_INTEGER]: gl.RG8I,
        [FORMATS.RED_INTEGER]: gl.R8I
      },
      [TYPES.UNSIGNED_SHORT]: {
        [FORMATS.RGBA_INTEGER]: gl.RGBA16UI,
        [FORMATS.RGB_INTEGER]: gl.RGB16UI,
        [FORMATS.RG_INTEGER]: gl.RG16UI,
        [FORMATS.RED_INTEGER]: gl.R16UI,
        [FORMATS.DEPTH_COMPONENT]: gl.DEPTH_COMPONENT16
      },
      [TYPES.SHORT]: {
        [FORMATS.RGBA_INTEGER]: gl.RGBA16I,
        [FORMATS.RGB_INTEGER]: gl.RGB16I,
        [FORMATS.RG_INTEGER]: gl.RG16I,
        [FORMATS.RED_INTEGER]: gl.R16I
      },
      [TYPES.UNSIGNED_INT]: {
        [FORMATS.RGBA_INTEGER]: gl.RGBA32UI,
        [FORMATS.RGB_INTEGER]: gl.RGB32UI,
        [FORMATS.RG_INTEGER]: gl.RG32UI,
        [FORMATS.RED_INTEGER]: gl.R32UI,
        [FORMATS.DEPTH_COMPONENT]: gl.DEPTH_COMPONENT24
      },
      [TYPES.INT]: {
        [FORMATS.RGBA_INTEGER]: gl.RGBA32I,
        [FORMATS.RGB_INTEGER]: gl.RGB32I,
        [FORMATS.RG_INTEGER]: gl.RG32I,
        [FORMATS.RED_INTEGER]: gl.R32I
      },
      [TYPES.FLOAT]: {
        [FORMATS.RGBA]: gl.RGBA32F,
        [FORMATS.RGB]: gl.RGB32F,
        [FORMATS.RG]: gl.RG32F,
        [FORMATS.RED]: gl.R32F,
        [FORMATS.DEPTH_COMPONENT]: gl.DEPTH_COMPONENT32F
      },
      [TYPES.HALF_FLOAT]: {
        [FORMATS.RGBA]: gl.RGBA16F,
        [FORMATS.RGB]: gl.RGB16F,
        [FORMATS.RG]: gl.RG16F,
        [FORMATS.RED]: gl.R16F
      },
      [TYPES.UNSIGNED_SHORT_5_6_5]: {
        [FORMATS.RGB]: gl.RGB565
      },
      [TYPES.UNSIGNED_SHORT_4_4_4_4]: {
        [FORMATS.RGBA]: gl.RGBA4
      },
      [TYPES.UNSIGNED_SHORT_5_5_5_1]: {
        [FORMATS.RGBA]: gl.RGB5_A1
      },
      [TYPES.UNSIGNED_INT_2_10_10_10_REV]: {
        [FORMATS.RGBA]: gl.RGB10_A2,
        [FORMATS.RGBA_INTEGER]: gl.RGB10_A2UI
      },
      [TYPES.UNSIGNED_INT_10F_11F_11F_REV]: {
        [FORMATS.RGB]: gl.R11F_G11F_B10F
      },
      [TYPES.UNSIGNED_INT_5_9_9_9_REV]: {
        [FORMATS.RGB]: gl.RGB9_E5
      },
      [TYPES.UNSIGNED_INT_24_8]: {
        [FORMATS.DEPTH_STENCIL]: gl.DEPTH24_STENCIL8
      },
      [TYPES.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
        [FORMATS.DEPTH_STENCIL]: gl.DEPTH32F_STENCIL8
      }
    };
  } else {
    table = {
      [TYPES.UNSIGNED_BYTE]: {
        [FORMATS.RGBA]: gl.RGBA,
        [FORMATS.RGB]: gl.RGB,
        [FORMATS.ALPHA]: gl.ALPHA,
        [FORMATS.LUMINANCE]: gl.LUMINANCE,
        [FORMATS.LUMINANCE_ALPHA]: gl.LUMINANCE_ALPHA
      },
      [TYPES.UNSIGNED_SHORT_5_6_5]: {
        [FORMATS.RGB]: gl.RGB
      },
      [TYPES.UNSIGNED_SHORT_4_4_4_4]: {
        [FORMATS.RGBA]: gl.RGBA
      },
      [TYPES.UNSIGNED_SHORT_5_5_5_1]: {
        [FORMATS.RGBA]: gl.RGBA
      }
    };
  }
  return table;
}

class TextureSystem {
  constructor(renderer) {
    this.renderer = renderer;
    this.boundTextures = [];
    this.currentLocation = -1;
    this.managedTextures = [];
    this._unknownBoundTextures = false;
    this.unknownTexture = new BaseTexture();
    this.hasIntegerTextures = false;
  }
  contextChange() {
    const gl = this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID;
    this.webGLVersion = this.renderer.context.webGLVersion;
    this.internalFormats = mapTypeAndFormatToInternalFormat(gl);
    const maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
    this.boundTextures.length = maxTextures;
    for (let i = 0; i < maxTextures; i++) {
      this.boundTextures[i] = null;
    }
    this.emptyTextures = {};
    const emptyTexture2D = new GLTexture(gl.createTexture());
    gl.bindTexture(gl.TEXTURE_2D, emptyTexture2D.texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4));
    this.emptyTextures[gl.TEXTURE_2D] = emptyTexture2D;
    this.emptyTextures[gl.TEXTURE_CUBE_MAP] = new GLTexture(gl.createTexture());
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.emptyTextures[gl.TEXTURE_CUBE_MAP].texture);
    for (let i = 0; i < 6; i++) {
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    }
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    for (let i = 0; i < this.boundTextures.length; i++) {
      this.bind(null, i);
    }
  }
  bind(texture, location = 0) {
    const { gl } = this;
    texture = texture?.castToBaseTexture();
    if (texture?.valid && !texture.parentTextureArray) {
      texture.touched = this.renderer.textureGC.count;
      const glTexture = texture._glTextures[this.CONTEXT_UID] || this.initTexture(texture);
      if (this.boundTextures[location] !== texture) {
        if (this.currentLocation !== location) {
          this.currentLocation = location;
          gl.activeTexture(gl.TEXTURE0 + location);
        }
        gl.bindTexture(texture.target, glTexture.texture);
      }
      if (glTexture.dirtyId !== texture.dirtyId) {
        if (this.currentLocation !== location) {
          this.currentLocation = location;
          gl.activeTexture(gl.TEXTURE0 + location);
        }
        this.updateTexture(texture);
      } else if (glTexture.dirtyStyleId !== texture.dirtyStyleId) {
        this.updateTextureStyle(texture);
      }
      this.boundTextures[location] = texture;
    } else {
      if (this.currentLocation !== location) {
        this.currentLocation = location;
        gl.activeTexture(gl.TEXTURE0 + location);
      }
      gl.bindTexture(gl.TEXTURE_2D, this.emptyTextures[gl.TEXTURE_2D].texture);
      this.boundTextures[location] = null;
    }
  }
  reset() {
    this._unknownBoundTextures = true;
    this.hasIntegerTextures = false;
    this.currentLocation = -1;
    for (let i = 0; i < this.boundTextures.length; i++) {
      this.boundTextures[i] = this.unknownTexture;
    }
  }
  unbind(texture) {
    const { gl, boundTextures } = this;
    if (this._unknownBoundTextures) {
      this._unknownBoundTextures = false;
      for (let i = 0; i < boundTextures.length; i++) {
        if (boundTextures[i] === this.unknownTexture) {
          this.bind(null, i);
        }
      }
    }
    for (let i = 0; i < boundTextures.length; i++) {
      if (boundTextures[i] === texture) {
        if (this.currentLocation !== i) {
          gl.activeTexture(gl.TEXTURE0 + i);
          this.currentLocation = i;
        }
        gl.bindTexture(texture.target, this.emptyTextures[texture.target].texture);
        boundTextures[i] = null;
      }
    }
  }
  ensureSamplerType(maxTextures) {
    const { boundTextures, hasIntegerTextures, CONTEXT_UID } = this;
    if (!hasIntegerTextures) {
      return;
    }
    for (let i = maxTextures - 1; i >= 0; --i) {
      const tex = boundTextures[i];
      if (tex) {
        const glTexture = tex._glTextures[CONTEXT_UID];
        if (glTexture.samplerType !== SAMPLER_TYPES.FLOAT) {
          this.renderer.texture.unbind(tex);
        }
      }
    }
  }
  initTexture(texture) {
    const glTexture = new GLTexture(this.gl.createTexture());
    glTexture.dirtyId = -1;
    texture._glTextures[this.CONTEXT_UID] = glTexture;
    this.managedTextures.push(texture);
    texture.on("dispose", this.destroyTexture, this);
    return glTexture;
  }
  initTextureType(texture, glTexture) {
    glTexture.internalFormat = this.internalFormats[texture.type]?.[texture.format] ?? texture.format;
    if (this.webGLVersion === 2 && texture.type === TYPES.HALF_FLOAT) {
      glTexture.type = this.gl.HALF_FLOAT;
    } else {
      glTexture.type = texture.type;
    }
  }
  updateTexture(texture) {
    const glTexture = texture._glTextures[this.CONTEXT_UID];
    if (!glTexture) {
      return;
    }
    const renderer = this.renderer;
    this.initTextureType(texture, glTexture);
    if (texture.resource?.upload(renderer, texture, glTexture)) {
      if (glTexture.samplerType !== SAMPLER_TYPES.FLOAT) {
        this.hasIntegerTextures = true;
      }
    } else {
      const width = texture.realWidth;
      const height = texture.realHeight;
      const gl = renderer.gl;
      if (glTexture.width !== width || glTexture.height !== height || glTexture.dirtyId < 0) {
        glTexture.width = width;
        glTexture.height = height;
        gl.texImage2D(texture.target, 0, glTexture.internalFormat, width, height, 0, texture.format, glTexture.type, null);
      }
    }
    if (texture.dirtyStyleId !== glTexture.dirtyStyleId) {
      this.updateTextureStyle(texture);
    }
    glTexture.dirtyId = texture.dirtyId;
  }
  destroyTexture(texture, skipRemove) {
    const { gl } = this;
    texture = texture.castToBaseTexture();
    if (texture._glTextures[this.CONTEXT_UID]) {
      this.unbind(texture);
      gl.deleteTexture(texture._glTextures[this.CONTEXT_UID].texture);
      texture.off("dispose", this.destroyTexture, this);
      delete texture._glTextures[this.CONTEXT_UID];
      if (!skipRemove) {
        const i = this.managedTextures.indexOf(texture);
        if (i !== -1) {
          removeItems(this.managedTextures, i, 1);
        }
      }
    }
  }
  updateTextureStyle(texture) {
    const glTexture = texture._glTextures[this.CONTEXT_UID];
    if (!glTexture) {
      return;
    }
    if ((texture.mipmap === MIPMAP_MODES.POW2 || this.webGLVersion !== 2) && !texture.isPowerOfTwo) {
      glTexture.mipmap = false;
    } else {
      glTexture.mipmap = texture.mipmap >= 1;
    }
    if (this.webGLVersion !== 2 && !texture.isPowerOfTwo) {
      glTexture.wrapMode = WRAP_MODES.CLAMP;
    } else {
      glTexture.wrapMode = texture.wrapMode;
    }
    if (texture.resource?.style(this.renderer, texture, glTexture)) ; else {
      this.setStyle(texture, glTexture);
    }
    glTexture.dirtyStyleId = texture.dirtyStyleId;
  }
  setStyle(texture, glTexture) {
    const gl = this.gl;
    if (glTexture.mipmap && texture.mipmap !== MIPMAP_MODES.ON_MANUAL) {
      gl.generateMipmap(texture.target);
    }
    gl.texParameteri(texture.target, gl.TEXTURE_WRAP_S, glTexture.wrapMode);
    gl.texParameteri(texture.target, gl.TEXTURE_WRAP_T, glTexture.wrapMode);
    if (glTexture.mipmap) {
      gl.texParameteri(texture.target, gl.TEXTURE_MIN_FILTER, texture.scaleMode === SCALE_MODES.LINEAR ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
      const anisotropicExt = this.renderer.context.extensions.anisotropicFiltering;
      if (anisotropicExt && texture.anisotropicLevel > 0 && texture.scaleMode === SCALE_MODES.LINEAR) {
        const level = Math.min(texture.anisotropicLevel, gl.getParameter(anisotropicExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
        gl.texParameterf(texture.target, anisotropicExt.TEXTURE_MAX_ANISOTROPY_EXT, level);
      }
    } else {
      gl.texParameteri(texture.target, gl.TEXTURE_MIN_FILTER, texture.scaleMode === SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
    }
    gl.texParameteri(texture.target, gl.TEXTURE_MAG_FILTER, texture.scaleMode === SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
  }
  destroy() {
    this.renderer = null;
  }
}
TextureSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "texture"
};
extensions.add(TextureSystem);

class TransformFeedbackSystem {
  constructor(renderer) {
    this.renderer = renderer;
  }
  contextChange() {
    this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID;
  }
  bind(transformFeedback) {
    const { gl, CONTEXT_UID } = this;
    const glTransformFeedback = transformFeedback._glTransformFeedbacks[CONTEXT_UID] || this.createGLTransformFeedback(transformFeedback);
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, glTransformFeedback);
  }
  unbind() {
    const { gl } = this;
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
  }
  beginTransformFeedback(drawMode, shader) {
    const { gl, renderer } = this;
    if (shader) {
      renderer.shader.bind(shader);
    }
    gl.beginTransformFeedback(drawMode);
  }
  endTransformFeedback() {
    const { gl } = this;
    gl.endTransformFeedback();
  }
  createGLTransformFeedback(tf) {
    const { gl, renderer, CONTEXT_UID } = this;
    const glTransformFeedback = gl.createTransformFeedback();
    tf._glTransformFeedbacks[CONTEXT_UID] = glTransformFeedback;
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, glTransformFeedback);
    for (let i = 0; i < tf.buffers.length; i++) {
      const buffer = tf.buffers[i];
      if (!buffer)
        continue;
      renderer.buffer.update(buffer);
      buffer._glBuffers[CONTEXT_UID].refCount++;
      gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, i, buffer._glBuffers[CONTEXT_UID].buffer || null);
    }
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
    tf.disposeRunner.add(this);
    return glTransformFeedback;
  }
  disposeTransformFeedback(tf, contextLost) {
    const glTF = tf._glTransformFeedbacks[this.CONTEXT_UID];
    const gl = this.gl;
    tf.disposeRunner.remove(this);
    const bufferSystem = this.renderer.buffer;
    if (bufferSystem) {
      for (let i = 0; i < tf.buffers.length; i++) {
        const buffer = tf.buffers[i];
        if (!buffer)
          continue;
        const buf = buffer._glBuffers[this.CONTEXT_UID];
        if (buf) {
          buf.refCount--;
          if (buf.refCount === 0 && !contextLost) {
            bufferSystem.dispose(buffer, contextLost);
          }
        }
      }
    }
    if (!glTF) {
      return;
    }
    if (!contextLost) {
      gl.deleteTransformFeedback(glTF);
    }
    delete tf._glTransformFeedbacks[this.CONTEXT_UID];
  }
  destroy() {
    this.renderer = null;
  }
}
TransformFeedbackSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "transformFeedback"
};
extensions.add(TransformFeedbackSystem);

class ViewSystem {
  constructor(renderer) {
    this.renderer = renderer;
  }
  init(options) {
    this.screen = new Rectangle(0, 0, options.width, options.height);
    this.element = options.view || settings.ADAPTER.createCanvas();
    this.resolution = options.resolution || settings.RESOLUTION;
    this.autoDensity = !!options.autoDensity;
  }
  resizeView(desiredScreenWidth, desiredScreenHeight) {
    this.element.width = Math.round(desiredScreenWidth * this.resolution);
    this.element.height = Math.round(desiredScreenHeight * this.resolution);
    const screenWidth = this.element.width / this.resolution;
    const screenHeight = this.element.height / this.resolution;
    this.screen.width = screenWidth;
    this.screen.height = screenHeight;
    if (this.autoDensity) {
      this.element.style.width = `${screenWidth}px`;
      this.element.style.height = `${screenHeight}px`;
    }
    this.renderer.emit("resize", screenWidth, screenHeight);
    this.renderer.runners.resize.emit(this.screen.width, this.screen.height);
  }
  destroy(removeView) {
    if (removeView) {
      this.element.parentNode?.removeChild(this.element);
    }
    this.renderer = null;
    this.element = null;
    this.screen = null;
  }
}
ViewSystem.defaultOptions = {
  width: 800,
  height: 600,
  resolution: settings.RESOLUTION,
  autoDensity: false
};
ViewSystem.extension = {
  type: [
    ExtensionType.RendererSystem,
    ExtensionType.CanvasRendererSystem
  ],
  name: "_view"
};
extensions.add(ViewSystem);

settings.PREFER_ENV = ENV.WEBGL2;
settings.STRICT_TEXTURE_CACHE = false;
settings.RENDER_OPTIONS = {
  ...ContextSystem.defaultOptions,
  ...BackgroundSystem.defaultOptions,
  ...ViewSystem.defaultOptions,
  ...StartupSystem.defaultOptions
};
Object.defineProperties(settings, {
  WRAP_MODE: {
    get() {
      return BaseTexture.defaultOptions.wrapMode;
    },
    set(value) {
      deprecation("7.1.0", "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode");
      BaseTexture.defaultOptions.wrapMode = value;
    }
  },
  SCALE_MODE: {
    get() {
      return BaseTexture.defaultOptions.scaleMode;
    },
    set(value) {
      deprecation("7.1.0", "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode");
      BaseTexture.defaultOptions.scaleMode = value;
    }
  },
  MIPMAP_TEXTURES: {
    get() {
      return BaseTexture.defaultOptions.mipmap;
    },
    set(value) {
      deprecation("7.1.0", "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap");
      BaseTexture.defaultOptions.mipmap = value;
    }
  },
  ANISOTROPIC_LEVEL: {
    get() {
      return BaseTexture.defaultOptions.anisotropicLevel;
    },
    set(value) {
      deprecation("7.1.0", "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel");
      BaseTexture.defaultOptions.anisotropicLevel = value;
    }
  },
  FILTER_RESOLUTION: {
    get() {
      deprecation("7.1.0", "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution");
      return Filter.defaultResolution;
    },
    set(value) {
      Filter.defaultResolution = value;
    }
  },
  FILTER_MULTISAMPLE: {
    get() {
      deprecation("7.1.0", "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample");
      return Filter.defaultMultisample;
    },
    set(value) {
      Filter.defaultMultisample = value;
    }
  },
  SPRITE_MAX_TEXTURES: {
    get() {
      return BatchRenderer.defaultMaxTextures;
    },
    set(value) {
      deprecation("7.1.0", "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures");
      BatchRenderer.defaultMaxTextures = value;
    }
  },
  SPRITE_BATCH_SIZE: {
    get() {
      return BatchRenderer.defaultBatchSize;
    },
    set(value) {
      deprecation("7.1.0", "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize");
      BatchRenderer.defaultBatchSize = value;
    }
  },
  CAN_UPLOAD_SAME_BUFFER: {
    get() {
      return BatchRenderer.canUploadSameBuffer;
    },
    set(value) {
      deprecation("7.1.0", "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer");
      BatchRenderer.canUploadSameBuffer = value;
    }
  },
  GC_MODE: {
    get() {
      return TextureGCSystem.defaultMode;
    },
    set(value) {
      deprecation("7.1.0", "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode");
      TextureGCSystem.defaultMode = value;
    }
  },
  GC_MAX_IDLE: {
    get() {
      return TextureGCSystem.defaultMaxIdle;
    },
    set(value) {
      deprecation("7.1.0", "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle");
      TextureGCSystem.defaultMaxIdle = value;
    }
  },
  GC_MAX_CHECK_COUNT: {
    get() {
      return TextureGCSystem.defaultCheckCountMax;
    },
    set(value) {
      deprecation("7.1.0", "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax");
      TextureGCSystem.defaultCheckCountMax = value;
    }
  },
  PRECISION_VERTEX: {
    get() {
      return Program.defaultVertexPrecision;
    },
    set(value) {
      deprecation("7.1.0", "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision");
      Program.defaultVertexPrecision = value;
    }
  },
  PRECISION_FRAGMENT: {
    get() {
      return Program.defaultFragmentPrecision;
    },
    set(value) {
      deprecation("7.1.0", "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision");
      Program.defaultFragmentPrecision = value;
    }
  }
});

var UPDATE_PRIORITY = /* @__PURE__ */ ((UPDATE_PRIORITY2) => {
  UPDATE_PRIORITY2[UPDATE_PRIORITY2["INTERACTION"] = 50] = "INTERACTION";
  UPDATE_PRIORITY2[UPDATE_PRIORITY2["HIGH"] = 25] = "HIGH";
  UPDATE_PRIORITY2[UPDATE_PRIORITY2["NORMAL"] = 0] = "NORMAL";
  UPDATE_PRIORITY2[UPDATE_PRIORITY2["LOW"] = -25] = "LOW";
  UPDATE_PRIORITY2[UPDATE_PRIORITY2["UTILITY"] = -50] = "UTILITY";
  return UPDATE_PRIORITY2;
})(UPDATE_PRIORITY || {});

class TickerListener {
  constructor(fn, context = null, priority = 0, once = false) {
    this.next = null;
    this.previous = null;
    this._destroyed = false;
    this.fn = fn;
    this.context = context;
    this.priority = priority;
    this.once = once;
  }
  match(fn, context = null) {
    return this.fn === fn && this.context === context;
  }
  emit(deltaTime) {
    if (this.fn) {
      if (this.context) {
        this.fn.call(this.context, deltaTime);
      } else {
        this.fn(deltaTime);
      }
    }
    const redirect = this.next;
    if (this.once) {
      this.destroy(true);
    }
    if (this._destroyed) {
      this.next = null;
    }
    return redirect;
  }
  connect(previous) {
    this.previous = previous;
    if (previous.next) {
      previous.next.previous = this;
    }
    this.next = previous.next;
    previous.next = this;
  }
  destroy(hard = false) {
    this._destroyed = true;
    this.fn = null;
    this.context = null;
    if (this.previous) {
      this.previous.next = this.next;
    }
    if (this.next) {
      this.next.previous = this.previous;
    }
    const redirect = this.next;
    this.next = hard ? null : redirect;
    this.previous = null;
    return redirect;
  }
}

const _Ticker = class {
  constructor() {
    this.autoStart = false;
    this.deltaTime = 1;
    this.lastTime = -1;
    this.speed = 1;
    this.started = false;
    this._requestId = null;
    this._maxElapsedMS = 100;
    this._minElapsedMS = 0;
    this._protected = false;
    this._lastFrame = -1;
    this._head = new TickerListener(null, null, Infinity);
    this.deltaMS = 1 / _Ticker.targetFPMS;
    this.elapsedMS = 1 / _Ticker.targetFPMS;
    this._tick = (time) => {
      this._requestId = null;
      if (this.started) {
        this.update(time);
        if (this.started && this._requestId === null && this._head.next) {
          this._requestId = requestAnimationFrame(this._tick);
        }
      }
    };
  }
  _requestIfNeeded() {
    if (this._requestId === null && this._head.next) {
      this.lastTime = performance.now();
      this._lastFrame = this.lastTime;
      this._requestId = requestAnimationFrame(this._tick);
    }
  }
  _cancelIfNeeded() {
    if (this._requestId !== null) {
      cancelAnimationFrame(this._requestId);
      this._requestId = null;
    }
  }
  _startIfPossible() {
    if (this.started) {
      this._requestIfNeeded();
    } else if (this.autoStart) {
      this.start();
    }
  }
  add(fn, context, priority = UPDATE_PRIORITY.NORMAL) {
    return this._addListener(new TickerListener(fn, context, priority));
  }
  addOnce(fn, context, priority = UPDATE_PRIORITY.NORMAL) {
    return this._addListener(new TickerListener(fn, context, priority, true));
  }
  _addListener(listener) {
    let current = this._head.next;
    let previous = this._head;
    if (!current) {
      listener.connect(previous);
    } else {
      while (current) {
        if (listener.priority > current.priority) {
          listener.connect(previous);
          break;
        }
        previous = current;
        current = current.next;
      }
      if (!listener.previous) {
        listener.connect(previous);
      }
    }
    this._startIfPossible();
    return this;
  }
  remove(fn, context) {
    let listener = this._head.next;
    while (listener) {
      if (listener.match(fn, context)) {
        listener = listener.destroy();
      } else {
        listener = listener.next;
      }
    }
    if (!this._head.next) {
      this._cancelIfNeeded();
    }
    return this;
  }
  get count() {
    if (!this._head) {
      return 0;
    }
    let count = 0;
    let current = this._head;
    while (current = current.next) {
      count++;
    }
    return count;
  }
  start() {
    if (!this.started) {
      this.started = true;
      this._requestIfNeeded();
    }
  }
  stop() {
    if (this.started) {
      this.started = false;
      this._cancelIfNeeded();
    }
  }
  destroy() {
    if (!this._protected) {
      this.stop();
      let listener = this._head.next;
      while (listener) {
        listener = listener.destroy(true);
      }
      this._head.destroy();
      this._head = null;
    }
  }
  update(currentTime = performance.now()) {
    let elapsedMS;
    if (currentTime > this.lastTime) {
      elapsedMS = this.elapsedMS = currentTime - this.lastTime;
      if (elapsedMS > this._maxElapsedMS) {
        elapsedMS = this._maxElapsedMS;
      }
      elapsedMS *= this.speed;
      if (this._minElapsedMS) {
        const delta = currentTime - this._lastFrame | 0;
        if (delta < this._minElapsedMS) {
          return;
        }
        this._lastFrame = currentTime - delta % this._minElapsedMS;
      }
      this.deltaMS = elapsedMS;
      this.deltaTime = this.deltaMS * _Ticker.targetFPMS;
      const head = this._head;
      let listener = head.next;
      while (listener) {
        listener = listener.emit(this.deltaTime);
      }
      if (!head.next) {
        this._cancelIfNeeded();
      }
    } else {
      this.deltaTime = this.deltaMS = this.elapsedMS = 0;
    }
    this.lastTime = currentTime;
  }
  get FPS() {
    return 1e3 / this.elapsedMS;
  }
  get minFPS() {
    return 1e3 / this._maxElapsedMS;
  }
  set minFPS(fps) {
    const minFPS = Math.min(this.maxFPS, fps);
    const minFPMS = Math.min(Math.max(0, minFPS) / 1e3, _Ticker.targetFPMS);
    this._maxElapsedMS = 1 / minFPMS;
  }
  get maxFPS() {
    if (this._minElapsedMS) {
      return Math.round(1e3 / this._minElapsedMS);
    }
    return 0;
  }
  set maxFPS(fps) {
    if (fps === 0) {
      this._minElapsedMS = 0;
    } else {
      const maxFPS = Math.max(this.minFPS, fps);
      this._minElapsedMS = 1 / (maxFPS / 1e3);
    }
  }
  static get shared() {
    if (!_Ticker._shared) {
      const shared = _Ticker._shared = new _Ticker();
      shared.autoStart = true;
      shared._protected = true;
    }
    return _Ticker._shared;
  }
  static get system() {
    if (!_Ticker._system) {
      const system = _Ticker._system = new _Ticker();
      system.autoStart = true;
      system._protected = true;
    }
    return _Ticker._system;
  }
};
let Ticker = _Ticker;
Ticker.targetFPMS = 0.06;

Object.defineProperties(settings, {
  TARGET_FPMS: {
    get() {
      return Ticker.targetFPMS;
    },
    set(value) {
      deprecation("7.1.0", "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS");
      Ticker.targetFPMS = value;
    }
  }
});

class TickerPlugin {
  static init(options) {
    options = Object.assign({
      autoStart: true,
      sharedTicker: false
    }, options);
    Object.defineProperty(this, "ticker", {
      set(ticker) {
        if (this._ticker) {
          this._ticker.remove(this.render, this);
        }
        this._ticker = ticker;
        if (ticker) {
          ticker.add(this.render, this, UPDATE_PRIORITY.LOW);
        }
      },
      get() {
        return this._ticker;
      }
    });
    this.stop = () => {
      this._ticker.stop();
    };
    this.start = () => {
      this._ticker.start();
    };
    this._ticker = null;
    this.ticker = options.sharedTicker ? Ticker.shared : new Ticker();
    if (options.autoStart) {
      this.start();
    }
  }
  static destroy() {
    if (this._ticker) {
      const oldTicker = this._ticker;
      this.ticker = null;
      oldTicker.destroy();
    }
  }
}
TickerPlugin.extension = ExtensionType.Application;
extensions.add(TickerPlugin);

const renderers = [];
extensions.handleByList(ExtensionType.Renderer, renderers);

class MultisampleSystem {
  constructor(renderer) {
    this.renderer = renderer;
  }
  contextChange(gl) {
    let samples;
    if (this.renderer.context.webGLVersion === 1) {
      const framebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      samples = gl.getParameter(gl.SAMPLES);
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    } else {
      const framebuffer = gl.getParameter(gl.DRAW_FRAMEBUFFER_BINDING);
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
      samples = gl.getParameter(gl.SAMPLES);
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, framebuffer);
    }
    if (samples >= MSAA_QUALITY.HIGH) {
      this.multisample = MSAA_QUALITY.HIGH;
    } else if (samples >= MSAA_QUALITY.MEDIUM) {
      this.multisample = MSAA_QUALITY.MEDIUM;
    } else if (samples >= MSAA_QUALITY.LOW) {
      this.multisample = MSAA_QUALITY.LOW;
    } else {
      this.multisample = MSAA_QUALITY.NONE;
    }
  }
  destroy() {
  }
}
MultisampleSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "_multisample"
};
extensions.add(MultisampleSystem);

class GLBuffer {
  constructor(buffer) {
    this.buffer = buffer || null;
    this.updateID = -1;
    this.byteLength = -1;
    this.refCount = 0;
  }
}

class BufferSystem {
  constructor(renderer) {
    this.renderer = renderer;
    this.managedBuffers = {};
    this.boundBufferBases = {};
  }
  destroy() {
    this.renderer = null;
  }
  contextChange() {
    this.disposeAll(true);
    this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID;
  }
  bind(buffer) {
    const { gl, CONTEXT_UID } = this;
    const glBuffer = buffer._glBuffers[CONTEXT_UID] || this.createGLBuffer(buffer);
    gl.bindBuffer(buffer.type, glBuffer.buffer);
  }
  unbind(type) {
    const { gl } = this;
    gl.bindBuffer(type, null);
  }
  bindBufferBase(buffer, index) {
    const { gl, CONTEXT_UID } = this;
    if (this.boundBufferBases[index] !== buffer) {
      const glBuffer = buffer._glBuffers[CONTEXT_UID] || this.createGLBuffer(buffer);
      this.boundBufferBases[index] = buffer;
      gl.bindBufferBase(gl.UNIFORM_BUFFER, index, glBuffer.buffer);
    }
  }
  bindBufferRange(buffer, index, offset) {
    const { gl, CONTEXT_UID } = this;
    offset = offset || 0;
    const glBuffer = buffer._glBuffers[CONTEXT_UID] || this.createGLBuffer(buffer);
    gl.bindBufferRange(gl.UNIFORM_BUFFER, index || 0, glBuffer.buffer, offset * 256, 256);
  }
  update(buffer) {
    const { gl, CONTEXT_UID } = this;
    const glBuffer = buffer._glBuffers[CONTEXT_UID] || this.createGLBuffer(buffer);
    if (buffer._updateID === glBuffer.updateID) {
      return;
    }
    glBuffer.updateID = buffer._updateID;
    gl.bindBuffer(buffer.type, glBuffer.buffer);
    if (glBuffer.byteLength >= buffer.data.byteLength) {
      gl.bufferSubData(buffer.type, 0, buffer.data);
    } else {
      const drawType = buffer.static ? gl.STATIC_DRAW : gl.DYNAMIC_DRAW;
      glBuffer.byteLength = buffer.data.byteLength;
      gl.bufferData(buffer.type, buffer.data, drawType);
    }
  }
  dispose(buffer, contextLost) {
    if (!this.managedBuffers[buffer.id]) {
      return;
    }
    delete this.managedBuffers[buffer.id];
    const glBuffer = buffer._glBuffers[this.CONTEXT_UID];
    const gl = this.gl;
    buffer.disposeRunner.remove(this);
    if (!glBuffer) {
      return;
    }
    if (!contextLost) {
      gl.deleteBuffer(glBuffer.buffer);
    }
    delete buffer._glBuffers[this.CONTEXT_UID];
  }
  disposeAll(contextLost) {
    const all = Object.keys(this.managedBuffers);
    for (let i = 0; i < all.length; i++) {
      this.dispose(this.managedBuffers[all[i]], contextLost);
    }
  }
  createGLBuffer(buffer) {
    const { CONTEXT_UID, gl } = this;
    buffer._glBuffers[CONTEXT_UID] = new GLBuffer(gl.createBuffer());
    this.managedBuffers[buffer.id] = buffer;
    buffer.disposeRunner.add(this);
    return buffer._glBuffers[CONTEXT_UID];
  }
}
BufferSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "buffer"
};
extensions.add(BufferSystem);

class ObjectRendererSystem {
  constructor(renderer) {
    this.renderer = renderer;
  }
  render(displayObject, options) {
    const renderer = this.renderer;
    let renderTexture;
    let clear;
    let transform;
    let skipUpdateTransform;
    if (options) {
      renderTexture = options.renderTexture;
      clear = options.clear;
      transform = options.transform;
      skipUpdateTransform = options.skipUpdateTransform;
    }
    this.renderingToScreen = !renderTexture;
    renderer.runners.prerender.emit();
    renderer.emit("prerender");
    renderer.projection.transform = transform;
    if (renderer.context.isLost) {
      return;
    }
    if (!renderTexture) {
      this.lastObjectRendered = displayObject;
    }
    if (!skipUpdateTransform) {
      const cacheParent = displayObject.enableTempParent();
      displayObject.updateTransform();
      displayObject.disableTempParent(cacheParent);
    }
    renderer.renderTexture.bind(renderTexture);
    renderer.batch.currentRenderer.start();
    if (clear ?? renderer.background.clearBeforeRender) {
      renderer.renderTexture.clear();
    }
    displayObject.render(renderer);
    renderer.batch.currentRenderer.flush();
    if (renderTexture) {
      if (options.blit) {
        renderer.framebuffer.blit();
      }
      renderTexture.baseTexture.update();
    }
    renderer.runners.postrender.emit();
    renderer.projection.transform = null;
    renderer.emit("postrender");
  }
  destroy() {
    this.renderer = null;
    this.lastObjectRendered = null;
  }
}
ObjectRendererSystem.extension = {
  type: ExtensionType.RendererSystem,
  name: "objectRenderer"
};
extensions.add(ObjectRendererSystem);

const _Renderer = class extends SystemManager {
  constructor(options) {
    super();
    this.type = RENDERER_TYPE.WEBGL;
    options = Object.assign({}, settings.RENDER_OPTIONS, options);
    this.gl = null;
    this.CONTEXT_UID = 0;
    this.globalUniforms = new UniformGroup({
      projectionMatrix: new Matrix()
    }, true);
    const systemConfig = {
      runners: [
        "init",
        "destroy",
        "contextChange",
        "resolutionChange",
        "reset",
        "update",
        "postrender",
        "prerender",
        "resize"
      ],
      systems: _Renderer.__systems,
      priority: [
        "_view",
        "textureGenerator",
        "background",
        "_plugin",
        "startup",
        "context",
        "state",
        "texture",
        "buffer",
        "geometry",
        "framebuffer",
        "transformFeedback",
        "mask",
        "scissor",
        "stencil",
        "projection",
        "textureGC",
        "filter",
        "renderTexture",
        "batch",
        "objectRenderer",
        "_multisample"
      ]
    };
    this.setup(systemConfig);
    if ("useContextAlpha" in options) {
      deprecation("7.0.0", "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead");
      options.premultipliedAlpha = options.useContextAlpha && options.useContextAlpha !== "notMultiplied";
      options.backgroundAlpha = options.useContextAlpha === false ? 1 : options.backgroundAlpha;
    }
    this._plugin.rendererPlugins = _Renderer.__plugins;
    this.options = options;
    this.startup.run(this.options);
  }
  static test(options) {
    if (options?.forceCanvas) {
      return false;
    }
    return isWebGLSupported();
  }
  render(displayObject, options) {
    this.objectRenderer.render(displayObject, options);
  }
  resize(desiredScreenWidth, desiredScreenHeight) {
    this._view.resizeView(desiredScreenWidth, desiredScreenHeight);
  }
  reset() {
    this.runners.reset.emit();
    return this;
  }
  clear() {
    this.renderTexture.bind();
    this.renderTexture.clear();
  }
  destroy(removeView = false) {
    this.runners.destroy.items.reverse();
    this.emitWithCustomOptions(this.runners.destroy, {
      _view: removeView
    });
    super.destroy();
  }
  get plugins() {
    return this._plugin.plugins;
  }
  get multisample() {
    return this._multisample.multisample;
  }
  get width() {
    return this._view.element.width;
  }
  get height() {
    return this._view.element.height;
  }
  get resolution() {
    return this._view.resolution;
  }
  set resolution(value) {
    this._view.resolution = value;
    this.runners.resolutionChange.emit(value);
  }
  get autoDensity() {
    return this._view.autoDensity;
  }
  get view() {
    return this._view.element;
  }
  get screen() {
    return this._view.screen;
  }
  get lastObjectRendered() {
    return this.objectRenderer.lastObjectRendered;
  }
  get renderingToScreen() {
    return this.objectRenderer.renderingToScreen;
  }
  get rendererLogId() {
    return `WebGL ${this.context.webGLVersion}`;
  }
  get clearBeforeRender() {
    deprecation("7.0.0", "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead.");
    return this.background.clearBeforeRender;
  }
  get useContextAlpha() {
    deprecation("7.0.0", "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead.");
    return this.context.useContextAlpha;
  }
  get preserveDrawingBuffer() {
    deprecation("7.0.0", "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context");
    return this.context.preserveDrawingBuffer;
  }
  get backgroundColor() {
    deprecation("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead.");
    return this.background.color;
  }
  set backgroundColor(value) {
    deprecation("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead.");
    this.background.color = value;
  }
  get backgroundAlpha() {
    deprecation("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead.");
    return this.background.alpha;
  }
  set backgroundAlpha(value) {
    deprecation("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead.");
    this.background.alpha = value;
  }
  get powerPreference() {
    deprecation("7.0.0", "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context");
    return this.context.powerPreference;
  }
  generateTexture(displayObject, options) {
    return this.textureGenerator.generateTexture(displayObject, options);
  }
};
let Renderer = _Renderer;
Renderer.extension = {
  type: ExtensionType.Renderer,
  priority: 1
};
Renderer.__plugins = {};
Renderer.__systems = {};
extensions.handleByMap(ExtensionType.RendererPlugin, Renderer.__plugins);
extensions.handleByMap(ExtensionType.RendererSystem, Renderer.__systems);
extensions.add(Renderer);

class AbstractMultiResource extends Resource {
  constructor(length, options) {
    const { width, height } = options || {};
    super(width, height);
    this.items = [];
    this.itemDirtyIds = [];
    for (let i = 0; i < length; i++) {
      const partTexture = new BaseTexture();
      this.items.push(partTexture);
      this.itemDirtyIds.push(-2);
    }
    this.length = length;
    this._load = null;
    this.baseTexture = null;
  }
  initFromArray(resources, options) {
    for (let i = 0; i < this.length; i++) {
      if (!resources[i]) {
        continue;
      }
      if (resources[i].castToBaseTexture) {
        this.addBaseTextureAt(resources[i].castToBaseTexture(), i);
      } else if (resources[i] instanceof Resource) {
        this.addResourceAt(resources[i], i);
      } else {
        this.addResourceAt(autoDetectResource(resources[i], options), i);
      }
    }
  }
  dispose() {
    for (let i = 0, len = this.length; i < len; i++) {
      this.items[i].destroy();
    }
    this.items = null;
    this.itemDirtyIds = null;
    this._load = null;
  }
  addResourceAt(resource, index) {
    if (!this.items[index]) {
      throw new Error(`Index ${index} is out of bounds`);
    }
    if (resource.valid && !this.valid) {
      this.resize(resource.width, resource.height);
    }
    this.items[index].setResource(resource);
    return this;
  }
  bind(baseTexture) {
    if (this.baseTexture !== null) {
      throw new Error("Only one base texture per TextureArray is allowed");
    }
    super.bind(baseTexture);
    for (let i = 0; i < this.length; i++) {
      this.items[i].parentTextureArray = baseTexture;
      this.items[i].on("update", baseTexture.update, baseTexture);
    }
  }
  unbind(baseTexture) {
    super.unbind(baseTexture);
    for (let i = 0; i < this.length; i++) {
      this.items[i].parentTextureArray = null;
      this.items[i].off("update", baseTexture.update, baseTexture);
    }
  }
  load() {
    if (this._load) {
      return this._load;
    }
    const resources = this.items.map((item) => item.resource).filter((item) => item);
    const promises = resources.map((item) => item.load());
    this._load = Promise.all(promises).then(() => {
      const { realWidth, realHeight } = this.items[0];
      this.resize(realWidth, realHeight);
      return Promise.resolve(this);
    });
    return this._load;
  }
}

class ArrayResource extends AbstractMultiResource {
  constructor(source, options) {
    const { width, height } = options || {};
    let urls;
    let length;
    if (Array.isArray(source)) {
      urls = source;
      length = source.length;
    } else {
      length = source;
    }
    super(length, { width, height });
    if (urls) {
      this.initFromArray(urls, options);
    }
  }
  addBaseTextureAt(baseTexture, index) {
    if (baseTexture.resource) {
      this.addResourceAt(baseTexture.resource, index);
    } else {
      throw new Error("ArrayResource does not support RenderTexture");
    }
    return this;
  }
  bind(baseTexture) {
    super.bind(baseTexture);
    baseTexture.target = TARGETS.TEXTURE_2D_ARRAY;
  }
  upload(renderer, texture, glTexture) {
    const { length, itemDirtyIds, items } = this;
    const { gl } = renderer;
    if (glTexture.dirtyId < 0) {
      gl.texImage3D(gl.TEXTURE_2D_ARRAY, 0, glTexture.internalFormat, this._width, this._height, length, 0, texture.format, glTexture.type, null);
    }
    for (let i = 0; i < length; i++) {
      const item = items[i];
      if (itemDirtyIds[i] < item.dirtyId) {
        itemDirtyIds[i] = item.dirtyId;
        if (item.valid) {
          gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, 0, 0, 0, i, item.resource.width, item.resource.height, 1, texture.format, glTexture.type, item.resource.source);
        }
      }
    }
    return true;
  }
}

class CanvasResource extends BaseImageResource {
  constructor(source) {
    super(source);
  }
  static test(source) {
    const { OffscreenCanvas } = globalThis;
    if (OffscreenCanvas && source instanceof OffscreenCanvas) {
      return true;
    }
    return globalThis.HTMLCanvasElement && source instanceof HTMLCanvasElement;
  }
}

const _CubeResource = class extends AbstractMultiResource {
  constructor(source, options) {
    const { width, height, autoLoad, linkBaseTexture } = options || {};
    if (source && source.length !== _CubeResource.SIDES) {
      throw new Error(`Invalid length. Got ${source.length}, expected 6`);
    }
    super(6, { width, height });
    for (let i = 0; i < _CubeResource.SIDES; i++) {
      this.items[i].target = TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + i;
    }
    this.linkBaseTexture = linkBaseTexture !== false;
    if (source) {
      this.initFromArray(source, options);
    }
    if (autoLoad !== false) {
      this.load();
    }
  }
  bind(baseTexture) {
    super.bind(baseTexture);
    baseTexture.target = TARGETS.TEXTURE_CUBE_MAP;
  }
  addBaseTextureAt(baseTexture, index, linkBaseTexture) {
    if (linkBaseTexture === void 0) {
      linkBaseTexture = this.linkBaseTexture;
    }
    if (!this.items[index]) {
      throw new Error(`Index ${index} is out of bounds`);
    }
    if (!this.linkBaseTexture || baseTexture.parentTextureArray || Object.keys(baseTexture._glTextures).length > 0) {
      if (baseTexture.resource) {
        this.addResourceAt(baseTexture.resource, index);
      } else {
        throw new Error(`CubeResource does not support copying of renderTexture.`);
      }
    } else {
      baseTexture.target = TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + index;
      baseTexture.parentTextureArray = this.baseTexture;
      this.items[index] = baseTexture;
    }
    if (baseTexture.valid && !this.valid) {
      this.resize(baseTexture.realWidth, baseTexture.realHeight);
    }
    this.items[index] = baseTexture;
    return this;
  }
  upload(renderer, _baseTexture, glTexture) {
    const dirty = this.itemDirtyIds;
    for (let i = 0; i < _CubeResource.SIDES; i++) {
      const side = this.items[i];
      if (dirty[i] < side.dirtyId || glTexture.dirtyId < _baseTexture.dirtyId) {
        if (side.valid && side.resource) {
          side.resource.upload(renderer, side, glTexture);
          dirty[i] = side.dirtyId;
        } else if (dirty[i] < -1) {
          renderer.gl.texImage2D(side.target, 0, glTexture.internalFormat, _baseTexture.realWidth, _baseTexture.realHeight, 0, _baseTexture.format, glTexture.type, null);
          dirty[i] = -1;
        }
      }
    }
    return true;
  }
  static test(source) {
    return Array.isArray(source) && source.length === _CubeResource.SIDES;
  }
};
let CubeResource = _CubeResource;
CubeResource.SIDES = 6;

class ImageBitmapResource extends BaseImageResource {
  constructor(source, options) {
    options = options || {};
    let baseSource;
    let url;
    if (typeof source === "string") {
      baseSource = ImageBitmapResource.EMPTY;
      url = source;
    } else {
      baseSource = source;
      url = null;
    }
    super(baseSource);
    this.url = url;
    this.crossOrigin = options.crossOrigin ?? true;
    this.alphaMode = typeof options.alphaMode === "number" ? options.alphaMode : null;
    this._load = null;
    if (options.autoLoad !== false) {
      this.load();
    }
  }
  load() {
    if (this._load) {
      return this._load;
    }
    this._load = new Promise(async (resolve, reject) => {
      if (this.url === null) {
        resolve(this);
        return;
      }
      try {
        const response = await settings.ADAPTER.fetch(this.url, {
          mode: this.crossOrigin ? "cors" : "no-cors"
        });
        if (this.destroyed)
          return;
        const imageBlob = await response.blob();
        if (this.destroyed)
          return;
        const imageBitmap = await createImageBitmap(imageBlob, {
          premultiplyAlpha: this.alphaMode === null || this.alphaMode === ALPHA_MODES.UNPACK ? "premultiply" : "none"
        });
        if (this.destroyed)
          return;
        this.source = imageBitmap;
        this.update();
        resolve(this);
      } catch (e) {
        if (this.destroyed)
          return;
        reject(e);
        this.onError.emit(e);
      }
    });
    return this._load;
  }
  upload(renderer, baseTexture, glTexture) {
    if (!(this.source instanceof ImageBitmap)) {
      this.load();
      return false;
    }
    if (typeof this.alphaMode === "number") {
      baseTexture.alphaMode = this.alphaMode;
    }
    return super.upload(renderer, baseTexture, glTexture);
  }
  dispose() {
    if (this.source instanceof ImageBitmap) {
      this.source.close();
    }
    super.dispose();
    this._load = null;
  }
  static test(source) {
    return !!globalThis.createImageBitmap && typeof ImageBitmap !== "undefined" && (typeof source === "string" || source instanceof ImageBitmap);
  }
  static get EMPTY() {
    ImageBitmapResource._EMPTY = ImageBitmapResource._EMPTY ?? settings.ADAPTER.createCanvas(0, 0);
    return ImageBitmapResource._EMPTY;
  }
}

const _SVGResource = class extends BaseImageResource {
  constructor(sourceBase64, options) {
    options = options || {};
    super(settings.ADAPTER.createCanvas());
    this._width = 0;
    this._height = 0;
    this.svg = sourceBase64;
    this.scale = options.scale || 1;
    this._overrideWidth = options.width;
    this._overrideHeight = options.height;
    this._resolve = null;
    this._crossorigin = options.crossorigin;
    this._load = null;
    if (options.autoLoad !== false) {
      this.load();
    }
  }
  load() {
    if (this._load) {
      return this._load;
    }
    this._load = new Promise((resolve) => {
      this._resolve = () => {
        this.resize(this.source.width, this.source.height);
        resolve(this);
      };
      if (_SVGResource.SVG_XML.test(this.svg.trim())) {
        if (!btoa) {
          throw new Error("Your browser doesn't support base64 conversions.");
        }
        this.svg = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`;
      }
      this._loadSvg();
    });
    return this._load;
  }
  _loadSvg() {
    const tempImage = new Image();
    BaseImageResource.crossOrigin(tempImage, this.svg, this._crossorigin);
    tempImage.src = this.svg;
    tempImage.onerror = (event) => {
      if (!this._resolve) {
        return;
      }
      tempImage.onerror = null;
      this.onError.emit(event);
    };
    tempImage.onload = () => {
      if (!this._resolve) {
        return;
      }
      const svgWidth = tempImage.width;
      const svgHeight = tempImage.height;
      if (!svgWidth || !svgHeight) {
        throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
      }
      let width = svgWidth * this.scale;
      let height = svgHeight * this.scale;
      if (this._overrideWidth || this._overrideHeight) {
        width = this._overrideWidth || this._overrideHeight / svgHeight * svgWidth;
        height = this._overrideHeight || this._overrideWidth / svgWidth * svgHeight;
      }
      width = Math.round(width);
      height = Math.round(height);
      const canvas = this.source;
      canvas.width = width;
      canvas.height = height;
      canvas._pixiId = `canvas_${uid()}`;
      canvas.getContext("2d").drawImage(tempImage, 0, 0, svgWidth, svgHeight, 0, 0, width, height);
      this._resolve();
      this._resolve = null;
    };
  }
  static getSize(svgString) {
    const sizeMatch = _SVGResource.SVG_SIZE.exec(svgString);
    const size = {};
    if (sizeMatch) {
      size[sizeMatch[1]] = Math.round(parseFloat(sizeMatch[3]));
      size[sizeMatch[5]] = Math.round(parseFloat(sizeMatch[7]));
    }
    return size;
  }
  dispose() {
    super.dispose();
    this._resolve = null;
    this._crossorigin = null;
  }
  static test(source, extension) {
    return extension === "svg" || typeof source === "string" && source.startsWith("data:image/svg+xml") || typeof source === "string" && _SVGResource.SVG_XML.test(source);
  }
};
let SVGResource = _SVGResource;
SVGResource.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m;
SVGResource.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;

const _VideoResource = class extends BaseImageResource {
  constructor(source, options) {
    options = options || {};
    if (!(source instanceof HTMLVideoElement)) {
      const videoElement = document.createElement("video");
      videoElement.setAttribute("preload", "auto");
      videoElement.setAttribute("webkit-playsinline", "");
      videoElement.setAttribute("playsinline", "");
      if (typeof source === "string") {
        source = [source];
      }
      const firstSrc = source[0].src || source[0];
      BaseImageResource.crossOrigin(videoElement, firstSrc, options.crossorigin);
      for (let i = 0; i < source.length; ++i) {
        const sourceElement = document.createElement("source");
        let { src, mime } = source[i];
        src = src || source[i];
        const baseSrc = src.split("?").shift().toLowerCase();
        const ext = baseSrc.slice(baseSrc.lastIndexOf(".") + 1);
        mime = mime || _VideoResource.MIME_TYPES[ext] || `video/${ext}`;
        sourceElement.src = src;
        sourceElement.type = mime;
        videoElement.appendChild(sourceElement);
      }
      source = videoElement;
    }
    super(source);
    this.noSubImage = true;
    this._autoUpdate = true;
    this._isConnectedToTicker = false;
    this._updateFPS = options.updateFPS || 0;
    this._msToNextUpdate = 0;
    this.autoPlay = options.autoPlay !== false;
    this._load = null;
    this._resolve = null;
    this._onCanPlay = this._onCanPlay.bind(this);
    this._onError = this._onError.bind(this);
    if (options.autoLoad !== false) {
      this.load();
    }
  }
  update(_deltaTime = 0) {
    if (!this.destroyed) {
      const elapsedMS = Ticker.shared.elapsedMS * this.source.playbackRate;
      this._msToNextUpdate = Math.floor(this._msToNextUpdate - elapsedMS);
      if (!this._updateFPS || this._msToNextUpdate <= 0) {
        super.update();
        this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0;
      }
    }
  }
  load() {
    if (this._load) {
      return this._load;
    }
    const source = this.source;
    if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA) && source.width && source.height) {
      source.complete = true;
    }
    source.addEventListener("play", this._onPlayStart.bind(this));
    source.addEventListener("pause", this._onPlayStop.bind(this));
    if (!this._isSourceReady()) {
      source.addEventListener("canplay", this._onCanPlay);
      source.addEventListener("canplaythrough", this._onCanPlay);
      source.addEventListener("error", this._onError, true);
    } else {
      this._onCanPlay();
    }
    this._load = new Promise((resolve) => {
      if (this.valid) {
        resolve(this);
      } else {
        this._resolve = resolve;
        source.load();
      }
    });
    return this._load;
  }
  _onError(event) {
    this.source.removeEventListener("error", this._onError, true);
    this.onError.emit(event);
  }
  _isSourcePlaying() {
    const source = this.source;
    return !source.paused && !source.ended && this._isSourceReady();
  }
  _isSourceReady() {
    const source = this.source;
    return source.readyState > 2;
  }
  _onPlayStart() {
    if (!this.valid) {
      this._onCanPlay();
    }
    if (this.autoUpdate && !this._isConnectedToTicker) {
      Ticker.shared.add(this.update, this);
      this._isConnectedToTicker = true;
    }
  }
  _onPlayStop() {
    if (this._isConnectedToTicker) {
      Ticker.shared.remove(this.update, this);
      this._isConnectedToTicker = false;
    }
  }
  _onCanPlay() {
    const source = this.source;
    source.removeEventListener("canplay", this._onCanPlay);
    source.removeEventListener("canplaythrough", this._onCanPlay);
    const valid = this.valid;
    this.resize(source.videoWidth, source.videoHeight);
    if (!valid && this._resolve) {
      this._resolve(this);
      this._resolve = null;
    }
    if (this._isSourcePlaying()) {
      this._onPlayStart();
    } else if (this.autoPlay) {
      source.play();
    }
  }
  dispose() {
    if (this._isConnectedToTicker) {
      Ticker.shared.remove(this.update, this);
      this._isConnectedToTicker = false;
    }
    const source = this.source;
    if (source) {
      source.removeEventListener("error", this._onError, true);
      source.pause();
      source.src = "";
      source.load();
    }
    super.dispose();
  }
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(value) {
    if (value !== this._autoUpdate) {
      this._autoUpdate = value;
      if (!this._autoUpdate && this._isConnectedToTicker) {
        Ticker.shared.remove(this.update, this);
        this._isConnectedToTicker = false;
      } else if (this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying()) {
        Ticker.shared.add(this.update, this);
        this._isConnectedToTicker = true;
      }
    }
  }
  get updateFPS() {
    return this._updateFPS;
  }
  set updateFPS(value) {
    if (value !== this._updateFPS) {
      this._updateFPS = value;
    }
  }
  static test(source, extension) {
    return globalThis.HTMLVideoElement && source instanceof HTMLVideoElement || _VideoResource.TYPES.includes(extension);
  }
};
let VideoResource = _VideoResource;
VideoResource.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"];
VideoResource.MIME_TYPES = {
  ogv: "video/ogg",
  mov: "video/quicktime",
  m4v: "video/mp4"
};

INSTALLED.push(ImageBitmapResource, ImageResource, CanvasResource, VideoResource, SVGResource, BufferResource, CubeResource, ArrayResource);

class Bounds {
  constructor() {
    this.minX = Infinity;
    this.minY = Infinity;
    this.maxX = -Infinity;
    this.maxY = -Infinity;
    this.rect = null;
    this.updateID = -1;
  }
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY;
  }
  clear() {
    this.minX = Infinity;
    this.minY = Infinity;
    this.maxX = -Infinity;
    this.maxY = -Infinity;
  }
  getRectangle(rect) {
    if (this.minX > this.maxX || this.minY > this.maxY) {
      return Rectangle.EMPTY;
    }
    rect = rect || new Rectangle(0, 0, 1, 1);
    rect.x = this.minX;
    rect.y = this.minY;
    rect.width = this.maxX - this.minX;
    rect.height = this.maxY - this.minY;
    return rect;
  }
  addPoint(point) {
    this.minX = Math.min(this.minX, point.x);
    this.maxX = Math.max(this.maxX, point.x);
    this.minY = Math.min(this.minY, point.y);
    this.maxY = Math.max(this.maxY, point.y);
  }
  addPointMatrix(matrix, point) {
    const { a, b, c, d, tx, ty } = matrix;
    const x = a * point.x + c * point.y + tx;
    const y = b * point.x + d * point.y + ty;
    this.minX = Math.min(this.minX, x);
    this.maxX = Math.max(this.maxX, x);
    this.minY = Math.min(this.minY, y);
    this.maxY = Math.max(this.maxY, y);
  }
  addQuad(vertices) {
    let minX = this.minX;
    let minY = this.minY;
    let maxX = this.maxX;
    let maxY = this.maxY;
    let x = vertices[0];
    let y = vertices[1];
    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;
    x = vertices[2];
    y = vertices[3];
    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;
    x = vertices[4];
    y = vertices[5];
    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;
    x = vertices[6];
    y = vertices[7];
    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;
    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }
  addFrame(transform, x0, y0, x1, y1) {
    this.addFrameMatrix(transform.worldTransform, x0, y0, x1, y1);
  }
  addFrameMatrix(matrix, x0, y0, x1, y1) {
    const a = matrix.a;
    const b = matrix.b;
    const c = matrix.c;
    const d = matrix.d;
    const tx = matrix.tx;
    const ty = matrix.ty;
    let minX = this.minX;
    let minY = this.minY;
    let maxX = this.maxX;
    let maxY = this.maxY;
    let x = a * x0 + c * y0 + tx;
    let y = b * x0 + d * y0 + ty;
    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;
    x = a * x1 + c * y0 + tx;
    y = b * x1 + d * y0 + ty;
    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;
    x = a * x0 + c * y1 + tx;
    y = b * x0 + d * y1 + ty;
    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;
    x = a * x1 + c * y1 + tx;
    y = b * x1 + d * y1 + ty;
    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;
    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }
  addVertexData(vertexData, beginOffset, endOffset) {
    let minX = this.minX;
    let minY = this.minY;
    let maxX = this.maxX;
    let maxY = this.maxY;
    for (let i = beginOffset; i < endOffset; i += 2) {
      const x = vertexData[i];
      const y = vertexData[i + 1];
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
    }
    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }
  addVertices(transform, vertices, beginOffset, endOffset) {
    this.addVerticesMatrix(transform.worldTransform, vertices, beginOffset, endOffset);
  }
  addVerticesMatrix(matrix, vertices, beginOffset, endOffset, padX = 0, padY = padX) {
    const a = matrix.a;
    const b = matrix.b;
    const c = matrix.c;
    const d = matrix.d;
    const tx = matrix.tx;
    const ty = matrix.ty;
    let minX = this.minX;
    let minY = this.minY;
    let maxX = this.maxX;
    let maxY = this.maxY;
    for (let i = beginOffset; i < endOffset; i += 2) {
      const rawX = vertices[i];
      const rawY = vertices[i + 1];
      const x = a * rawX + c * rawY + tx;
      const y = d * rawY + b * rawX + ty;
      minX = Math.min(minX, x - padX);
      maxX = Math.max(maxX, x + padX);
      minY = Math.min(minY, y - padY);
      maxY = Math.max(maxY, y + padY);
    }
    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }
  addBounds(bounds) {
    const minX = this.minX;
    const minY = this.minY;
    const maxX = this.maxX;
    const maxY = this.maxY;
    this.minX = bounds.minX < minX ? bounds.minX : minX;
    this.minY = bounds.minY < minY ? bounds.minY : minY;
    this.maxX = bounds.maxX > maxX ? bounds.maxX : maxX;
    this.maxY = bounds.maxY > maxY ? bounds.maxY : maxY;
  }
  addBoundsMask(bounds, mask) {
    const _minX = bounds.minX > mask.minX ? bounds.minX : mask.minX;
    const _minY = bounds.minY > mask.minY ? bounds.minY : mask.minY;
    const _maxX = bounds.maxX < mask.maxX ? bounds.maxX : mask.maxX;
    const _maxY = bounds.maxY < mask.maxY ? bounds.maxY : mask.maxY;
    if (_minX <= _maxX && _minY <= _maxY) {
      const minX = this.minX;
      const minY = this.minY;
      const maxX = this.maxX;
      const maxY = this.maxY;
      this.minX = _minX < minX ? _minX : minX;
      this.minY = _minY < minY ? _minY : minY;
      this.maxX = _maxX > maxX ? _maxX : maxX;
      this.maxY = _maxY > maxY ? _maxY : maxY;
    }
  }
  addBoundsMatrix(bounds, matrix) {
    this.addFrameMatrix(matrix, bounds.minX, bounds.minY, bounds.maxX, bounds.maxY);
  }
  addBoundsArea(bounds, area) {
    const _minX = bounds.minX > area.x ? bounds.minX : area.x;
    const _minY = bounds.minY > area.y ? bounds.minY : area.y;
    const _maxX = bounds.maxX < area.x + area.width ? bounds.maxX : area.x + area.width;
    const _maxY = bounds.maxY < area.y + area.height ? bounds.maxY : area.y + area.height;
    if (_minX <= _maxX && _minY <= _maxY) {
      const minX = this.minX;
      const minY = this.minY;
      const maxX = this.maxX;
      const maxY = this.maxY;
      this.minX = _minX < minX ? _minX : minX;
      this.minY = _minY < minY ? _minY : minY;
      this.maxX = _maxX > maxX ? _maxX : maxX;
      this.maxY = _maxY > maxY ? _maxY : maxY;
    }
  }
  pad(paddingX = 0, paddingY = paddingX) {
    if (!this.isEmpty()) {
      this.minX -= paddingX;
      this.maxX += paddingX;
      this.minY -= paddingY;
      this.maxY += paddingY;
    }
  }
  addFramePad(x0, y0, x1, y1, padX, padY) {
    x0 -= padX;
    y0 -= padY;
    x1 += padX;
    y1 += padY;
    this.minX = this.minX < x0 ? this.minX : x0;
    this.maxX = this.maxX > x1 ? this.maxX : x1;
    this.minY = this.minY < y0 ? this.minY : y0;
    this.maxY = this.maxY > y1 ? this.maxY : y1;
  }
}

class DisplayObject extends eventemitter3Exports {
  constructor() {
    super();
    this.tempDisplayObjectParent = null;
    this.transform = new Transform();
    this.alpha = 1;
    this.visible = true;
    this.renderable = true;
    this.cullable = false;
    this.cullArea = null;
    this.parent = null;
    this.worldAlpha = 1;
    this._lastSortedIndex = 0;
    this._zIndex = 0;
    this.filterArea = null;
    this.filters = null;
    this._enabledFilters = null;
    this._bounds = new Bounds();
    this._localBounds = null;
    this._boundsID = 0;
    this._boundsRect = null;
    this._localBoundsRect = null;
    this._mask = null;
    this._maskRefCount = 0;
    this._destroyed = false;
    this.isSprite = false;
    this.isMask = false;
  }
  static mixin(source) {
    const keys = Object.keys(source);
    for (let i = 0; i < keys.length; ++i) {
      const propertyName = keys[i];
      Object.defineProperty(DisplayObject.prototype, propertyName, Object.getOwnPropertyDescriptor(source, propertyName));
    }
  }
  get destroyed() {
    return this._destroyed;
  }
  _recursivePostUpdateTransform() {
    if (this.parent) {
      this.parent._recursivePostUpdateTransform();
      this.transform.updateTransform(this.parent.transform);
    } else {
      this.transform.updateTransform(this._tempDisplayObjectParent.transform);
    }
  }
  updateTransform() {
    this._boundsID++;
    this.transform.updateTransform(this.parent.transform);
    this.worldAlpha = this.alpha * this.parent.worldAlpha;
  }
  getBounds(skipUpdate, rect) {
    if (!skipUpdate) {
      if (!this.parent) {
        this.parent = this._tempDisplayObjectParent;
        this.updateTransform();
        this.parent = null;
      } else {
        this._recursivePostUpdateTransform();
        this.updateTransform();
      }
    }
    if (this._bounds.updateID !== this._boundsID) {
      this.calculateBounds();
      this._bounds.updateID = this._boundsID;
    }
    if (!rect) {
      if (!this._boundsRect) {
        this._boundsRect = new Rectangle();
      }
      rect = this._boundsRect;
    }
    return this._bounds.getRectangle(rect);
  }
  getLocalBounds(rect) {
    if (!rect) {
      if (!this._localBoundsRect) {
        this._localBoundsRect = new Rectangle();
      }
      rect = this._localBoundsRect;
    }
    if (!this._localBounds) {
      this._localBounds = new Bounds();
    }
    const transformRef = this.transform;
    const parentRef = this.parent;
    this.parent = null;
    this.transform = this._tempDisplayObjectParent.transform;
    const worldBounds = this._bounds;
    const worldBoundsID = this._boundsID;
    this._bounds = this._localBounds;
    const bounds = this.getBounds(false, rect);
    this.parent = parentRef;
    this.transform = transformRef;
    this._bounds = worldBounds;
    this._bounds.updateID += this._boundsID - worldBoundsID;
    return bounds;
  }
  toGlobal(position, point, skipUpdate = false) {
    if (!skipUpdate) {
      this._recursivePostUpdateTransform();
      if (!this.parent) {
        this.parent = this._tempDisplayObjectParent;
        this.displayObjectUpdateTransform();
        this.parent = null;
      } else {
        this.displayObjectUpdateTransform();
      }
    }
    return this.worldTransform.apply(position, point);
  }
  toLocal(position, from, point, skipUpdate) {
    if (from) {
      position = from.toGlobal(position, point, skipUpdate);
    }
    if (!skipUpdate) {
      this._recursivePostUpdateTransform();
      if (!this.parent) {
        this.parent = this._tempDisplayObjectParent;
        this.displayObjectUpdateTransform();
        this.parent = null;
      } else {
        this.displayObjectUpdateTransform();
      }
    }
    return this.worldTransform.applyInverse(position, point);
  }
  setParent(container) {
    if (!container || !container.addChild) {
      throw new Error("setParent: Argument must be a Container");
    }
    container.addChild(this);
    return container;
  }
  removeFromParent() {
    this.parent?.removeChild(this);
  }
  setTransform(x = 0, y = 0, scaleX = 1, scaleY = 1, rotation = 0, skewX = 0, skewY = 0, pivotX = 0, pivotY = 0) {
    this.position.x = x;
    this.position.y = y;
    this.scale.x = !scaleX ? 1 : scaleX;
    this.scale.y = !scaleY ? 1 : scaleY;
    this.rotation = rotation;
    this.skew.x = skewX;
    this.skew.y = skewY;
    this.pivot.x = pivotX;
    this.pivot.y = pivotY;
    return this;
  }
  destroy(_options) {
    this.removeFromParent();
    this._destroyed = true;
    this.transform = null;
    this.parent = null;
    this._bounds = null;
    this.mask = null;
    this.cullArea = null;
    this.filters = null;
    this.filterArea = null;
    this.hitArea = null;
    this.eventMode = "auto";
    this.interactiveChildren = false;
    this.emit("destroyed");
    this.removeAllListeners();
  }
  get _tempDisplayObjectParent() {
    if (this.tempDisplayObjectParent === null) {
      this.tempDisplayObjectParent = new TemporaryDisplayObject();
    }
    return this.tempDisplayObjectParent;
  }
  enableTempParent() {
    const myParent = this.parent;
    this.parent = this._tempDisplayObjectParent;
    return myParent;
  }
  disableTempParent(cacheParent) {
    this.parent = cacheParent;
  }
  get x() {
    return this.position.x;
  }
  set x(value) {
    this.transform.position.x = value;
  }
  get y() {
    return this.position.y;
  }
  set y(value) {
    this.transform.position.y = value;
  }
  get worldTransform() {
    return this.transform.worldTransform;
  }
  get localTransform() {
    return this.transform.localTransform;
  }
  get position() {
    return this.transform.position;
  }
  set position(value) {
    this.transform.position.copyFrom(value);
  }
  get scale() {
    return this.transform.scale;
  }
  set scale(value) {
    this.transform.scale.copyFrom(value);
  }
  get pivot() {
    return this.transform.pivot;
  }
  set pivot(value) {
    this.transform.pivot.copyFrom(value);
  }
  get skew() {
    return this.transform.skew;
  }
  set skew(value) {
    this.transform.skew.copyFrom(value);
  }
  get rotation() {
    return this.transform.rotation;
  }
  set rotation(value) {
    this.transform.rotation = value;
  }
  get angle() {
    return this.transform.rotation * RAD_TO_DEG;
  }
  set angle(value) {
    this.transform.rotation = value * DEG_TO_RAD;
  }
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(value) {
    this._zIndex = value;
    if (this.parent) {
      this.parent.sortDirty = true;
    }
  }
  get worldVisible() {
    let item = this;
    do {
      if (!item.visible) {
        return false;
      }
      item = item.parent;
    } while (item);
    return true;
  }
  get mask() {
    return this._mask;
  }
  set mask(value) {
    if (this._mask === value) {
      return;
    }
    if (this._mask) {
      const maskObject = this._mask.isMaskData ? this._mask.maskObject : this._mask;
      if (maskObject) {
        maskObject._maskRefCount--;
        if (maskObject._maskRefCount === 0) {
          maskObject.renderable = true;
          maskObject.isMask = false;
        }
      }
    }
    this._mask = value;
    if (this._mask) {
      const maskObject = this._mask.isMaskData ? this._mask.maskObject : this._mask;
      if (maskObject) {
        if (maskObject._maskRefCount === 0) {
          maskObject.renderable = false;
          maskObject.isMask = true;
        }
        maskObject._maskRefCount++;
      }
    }
  }
}
class TemporaryDisplayObject extends DisplayObject {
  constructor() {
    super(...arguments);
    this.sortDirty = null;
  }
}
DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;

const tempMatrix = new Matrix();
function sortChildren(a, b) {
  if (a.zIndex === b.zIndex) {
    return a._lastSortedIndex - b._lastSortedIndex;
  }
  return a.zIndex - b.zIndex;
}
const _Container = class extends DisplayObject {
  constructor() {
    super();
    this.children = [];
    this.sortableChildren = _Container.defaultSortableChildren;
    this.sortDirty = false;
  }
  onChildrenChange(_length) {
  }
  addChild(...children) {
    if (children.length > 1) {
      for (let i = 0; i < children.length; i++) {
        this.addChild(children[i]);
      }
    } else {
      const child = children[0];
      if (child.parent) {
        child.parent.removeChild(child);
      }
      child.parent = this;
      this.sortDirty = true;
      child.transform._parentID = -1;
      this.children.push(child);
      this._boundsID++;
      this.onChildrenChange(this.children.length - 1);
      this.emit("childAdded", child, this, this.children.length - 1);
      child.emit("added", this);
    }
    return children[0];
  }
  addChildAt(child, index) {
    if (index < 0 || index > this.children.length) {
      throw new Error(`${child}addChildAt: The index ${index} supplied is out of bounds ${this.children.length}`);
    }
    if (child.parent) {
      child.parent.removeChild(child);
    }
    child.parent = this;
    this.sortDirty = true;
    child.transform._parentID = -1;
    this.children.splice(index, 0, child);
    this._boundsID++;
    this.onChildrenChange(index);
    child.emit("added", this);
    this.emit("childAdded", child, this, index);
    return child;
  }
  swapChildren(child, child2) {
    if (child === child2) {
      return;
    }
    const index1 = this.getChildIndex(child);
    const index2 = this.getChildIndex(child2);
    this.children[index1] = child2;
    this.children[index2] = child;
    this.onChildrenChange(index1 < index2 ? index1 : index2);
  }
  getChildIndex(child) {
    const index = this.children.indexOf(child);
    if (index === -1) {
      throw new Error("The supplied DisplayObject must be a child of the caller");
    }
    return index;
  }
  setChildIndex(child, index) {
    if (index < 0 || index >= this.children.length) {
      throw new Error(`The index ${index} supplied is out of bounds ${this.children.length}`);
    }
    const currentIndex = this.getChildIndex(child);
    removeItems(this.children, currentIndex, 1);
    this.children.splice(index, 0, child);
    this.onChildrenChange(index);
  }
  getChildAt(index) {
    if (index < 0 || index >= this.children.length) {
      throw new Error(`getChildAt: Index (${index}) does not exist.`);
    }
    return this.children[index];
  }
  removeChild(...children) {
    if (children.length > 1) {
      for (let i = 0; i < children.length; i++) {
        this.removeChild(children[i]);
      }
    } else {
      const child = children[0];
      const index = this.children.indexOf(child);
      if (index === -1)
        return null;
      child.parent = null;
      child.transform._parentID = -1;
      removeItems(this.children, index, 1);
      this._boundsID++;
      this.onChildrenChange(index);
      child.emit("removed", this);
      this.emit("childRemoved", child, this, index);
    }
    return children[0];
  }
  removeChildAt(index) {
    const child = this.getChildAt(index);
    child.parent = null;
    child.transform._parentID = -1;
    removeItems(this.children, index, 1);
    this._boundsID++;
    this.onChildrenChange(index);
    child.emit("removed", this);
    this.emit("childRemoved", child, this, index);
    return child;
  }
  removeChildren(beginIndex = 0, endIndex = this.children.length) {
    const begin = beginIndex;
    const end = endIndex;
    const range = end - begin;
    let removed;
    if (range > 0 && range <= end) {
      removed = this.children.splice(begin, range);
      for (let i = 0; i < removed.length; ++i) {
        removed[i].parent = null;
        if (removed[i].transform) {
          removed[i].transform._parentID = -1;
        }
      }
      this._boundsID++;
      this.onChildrenChange(beginIndex);
      for (let i = 0; i < removed.length; ++i) {
        removed[i].emit("removed", this);
        this.emit("childRemoved", removed[i], this, i);
      }
      return removed;
    } else if (range === 0 && this.children.length === 0) {
      return [];
    }
    throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
  }
  sortChildren() {
    let sortRequired = false;
    for (let i = 0, j = this.children.length; i < j; ++i) {
      const child = this.children[i];
      child._lastSortedIndex = i;
      if (!sortRequired && child.zIndex !== 0) {
        sortRequired = true;
      }
    }
    if (sortRequired && this.children.length > 1) {
      this.children.sort(sortChildren);
    }
    this.sortDirty = false;
  }
  updateTransform() {
    if (this.sortableChildren && this.sortDirty) {
      this.sortChildren();
    }
    this._boundsID++;
    this.transform.updateTransform(this.parent.transform);
    this.worldAlpha = this.alpha * this.parent.worldAlpha;
    for (let i = 0, j = this.children.length; i < j; ++i) {
      const child = this.children[i];
      if (child.visible) {
        child.updateTransform();
      }
    }
  }
  calculateBounds() {
    this._bounds.clear();
    this._calculateBounds();
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (!child.visible || !child.renderable) {
        continue;
      }
      child.calculateBounds();
      if (child._mask) {
        const maskObject = child._mask.isMaskData ? child._mask.maskObject : child._mask;
        if (maskObject) {
          maskObject.calculateBounds();
          this._bounds.addBoundsMask(child._bounds, maskObject._bounds);
        } else {
          this._bounds.addBounds(child._bounds);
        }
      } else if (child.filterArea) {
        this._bounds.addBoundsArea(child._bounds, child.filterArea);
      } else {
        this._bounds.addBounds(child._bounds);
      }
    }
    this._bounds.updateID = this._boundsID;
  }
  getLocalBounds(rect, skipChildrenUpdate = false) {
    const result = super.getLocalBounds(rect);
    if (!skipChildrenUpdate) {
      for (let i = 0, j = this.children.length; i < j; ++i) {
        const child = this.children[i];
        if (child.visible) {
          child.updateTransform();
        }
      }
    }
    return result;
  }
  _calculateBounds() {
  }
  _renderWithCulling(renderer) {
    const sourceFrame = renderer.renderTexture.sourceFrame;
    if (!(sourceFrame.width > 0 && sourceFrame.height > 0)) {
      return;
    }
    let bounds;
    let transform;
    if (this.cullArea) {
      bounds = this.cullArea;
      transform = this.worldTransform;
    } else if (this._render !== _Container.prototype._render) {
      bounds = this.getBounds(true);
    }
    const projectionTransform = renderer.projection.transform;
    if (projectionTransform) {
      if (transform) {
        transform = tempMatrix.copyFrom(transform);
        transform.prepend(projectionTransform);
      } else {
        transform = projectionTransform;
      }
    }
    if (bounds && sourceFrame.intersects(bounds, transform)) {
      this._render(renderer);
    } else if (this.cullArea) {
      return;
    }
    for (let i = 0, j = this.children.length; i < j; ++i) {
      const child = this.children[i];
      const childCullable = child.cullable;
      child.cullable = childCullable || !this.cullArea;
      child.render(renderer);
      child.cullable = childCullable;
    }
  }
  render(renderer) {
    if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
      return;
    }
    if (this._mask || this.filters?.length) {
      this.renderAdvanced(renderer);
    } else if (this.cullable) {
      this._renderWithCulling(renderer);
    } else {
      this._render(renderer);
      for (let i = 0, j = this.children.length; i < j; ++i) {
        this.children[i].render(renderer);
      }
    }
  }
  renderAdvanced(renderer) {
    const filters = this.filters;
    const mask = this._mask;
    if (filters) {
      if (!this._enabledFilters) {
        this._enabledFilters = [];
      }
      this._enabledFilters.length = 0;
      for (let i = 0; i < filters.length; i++) {
        if (filters[i].enabled) {
          this._enabledFilters.push(filters[i]);
        }
      }
    }
    const flush = filters && this._enabledFilters?.length || mask && (!mask.isMaskData || mask.enabled && (mask.autoDetect || mask.type !== MASK_TYPES.NONE));
    if (flush) {
      renderer.batch.flush();
    }
    if (filters && this._enabledFilters?.length) {
      renderer.filter.push(this, this._enabledFilters);
    }
    if (mask) {
      renderer.mask.push(this, this._mask);
    }
    if (this.cullable) {
      this._renderWithCulling(renderer);
    } else {
      this._render(renderer);
      for (let i = 0, j = this.children.length; i < j; ++i) {
        this.children[i].render(renderer);
      }
    }
    if (flush) {
      renderer.batch.flush();
    }
    if (mask) {
      renderer.mask.pop(this);
    }
    if (filters && this._enabledFilters?.length) {
      renderer.filter.pop();
    }
  }
  _render(_renderer) {
  }
  destroy(options) {
    super.destroy();
    this.sortDirty = false;
    const destroyChildren = typeof options === "boolean" ? options : options?.children;
    const oldChildren = this.removeChildren(0, this.children.length);
    if (destroyChildren) {
      for (let i = 0; i < oldChildren.length; ++i) {
        oldChildren[i].destroy(options);
      }
    }
  }
  get width() {
    return this.scale.x * this.getLocalBounds().width;
  }
  set width(value) {
    const width = this.getLocalBounds().width;
    if (width !== 0) {
      this.scale.x = value / width;
    } else {
      this.scale.x = 1;
    }
    this._width = value;
  }
  get height() {
    return this.scale.y * this.getLocalBounds().height;
  }
  set height(value) {
    const height = this.getLocalBounds().height;
    if (height !== 0) {
      this.scale.y = value / height;
    } else {
      this.scale.y = 1;
    }
    this._height = value;
  }
};
let Container = _Container;
Container.defaultSortableChildren = false;
Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;

Object.defineProperties(settings, {
  SORTABLE_CHILDREN: {
    get() {
      return Container.defaultSortableChildren;
    },
    set(value) {
      deprecation("7.1.0", "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren");
      Container.defaultSortableChildren = value;
    }
  }
});

const tempPoint = new Point();
const indices = new Uint16Array([0, 1, 2, 0, 2, 3]);
class Sprite extends Container {
  constructor(texture) {
    super();
    this._anchor = new ObservablePoint(this._onAnchorUpdate, this, texture ? texture.defaultAnchor.x : 0, texture ? texture.defaultAnchor.y : 0);
    this._texture = null;
    this._width = 0;
    this._height = 0;
    this._tintColor = new Color(16777215);
    this._tintRGB = null;
    this.tint = 16777215;
    this.blendMode = BLEND_MODES.NORMAL;
    this._cachedTint = 16777215;
    this.uvs = null;
    this.texture = texture || Texture.EMPTY;
    this.vertexData = new Float32Array(8);
    this.vertexTrimmedData = null;
    this._transformID = -1;
    this._textureID = -1;
    this._transformTrimmedID = -1;
    this._textureTrimmedID = -1;
    this.indices = indices;
    this.pluginName = "batch";
    this.isSprite = true;
    this._roundPixels = settings.ROUND_PIXELS;
  }
  _onTextureUpdate() {
    this._textureID = -1;
    this._textureTrimmedID = -1;
    this._cachedTint = 16777215;
    if (this._width) {
      this.scale.x = sign(this.scale.x) * this._width / this._texture.orig.width;
    }
    if (this._height) {
      this.scale.y = sign(this.scale.y) * this._height / this._texture.orig.height;
    }
  }
  _onAnchorUpdate() {
    this._transformID = -1;
    this._transformTrimmedID = -1;
  }
  calculateVertices() {
    const texture = this._texture;
    if (this._transformID === this.transform._worldID && this._textureID === texture._updateID) {
      return;
    }
    if (this._textureID !== texture._updateID) {
      this.uvs = this._texture._uvs.uvsFloat32;
    }
    this._transformID = this.transform._worldID;
    this._textureID = texture._updateID;
    const wt = this.transform.worldTransform;
    const a = wt.a;
    const b = wt.b;
    const c = wt.c;
    const d = wt.d;
    const tx = wt.tx;
    const ty = wt.ty;
    const vertexData = this.vertexData;
    const trim = texture.trim;
    const orig = texture.orig;
    const anchor = this._anchor;
    let w0 = 0;
    let w1 = 0;
    let h0 = 0;
    let h1 = 0;
    if (trim) {
      w1 = trim.x - anchor._x * orig.width;
      w0 = w1 + trim.width;
      h1 = trim.y - anchor._y * orig.height;
      h0 = h1 + trim.height;
    } else {
      w1 = -anchor._x * orig.width;
      w0 = w1 + orig.width;
      h1 = -anchor._y * orig.height;
      h0 = h1 + orig.height;
    }
    vertexData[0] = a * w1 + c * h1 + tx;
    vertexData[1] = d * h1 + b * w1 + ty;
    vertexData[2] = a * w0 + c * h1 + tx;
    vertexData[3] = d * h1 + b * w0 + ty;
    vertexData[4] = a * w0 + c * h0 + tx;
    vertexData[5] = d * h0 + b * w0 + ty;
    vertexData[6] = a * w1 + c * h0 + tx;
    vertexData[7] = d * h0 + b * w1 + ty;
    if (this._roundPixels) {
      const resolution = settings.RESOLUTION;
      for (let i = 0; i < vertexData.length; ++i) {
        vertexData[i] = Math.round(vertexData[i] * resolution) / resolution;
      }
    }
  }
  calculateTrimmedVertices() {
    if (!this.vertexTrimmedData) {
      this.vertexTrimmedData = new Float32Array(8);
    } else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) {
      return;
    }
    this._transformTrimmedID = this.transform._worldID;
    this._textureTrimmedID = this._texture._updateID;
    const texture = this._texture;
    const vertexData = this.vertexTrimmedData;
    const orig = texture.orig;
    const anchor = this._anchor;
    const wt = this.transform.worldTransform;
    const a = wt.a;
    const b = wt.b;
    const c = wt.c;
    const d = wt.d;
    const tx = wt.tx;
    const ty = wt.ty;
    const w1 = -anchor._x * orig.width;
    const w0 = w1 + orig.width;
    const h1 = -anchor._y * orig.height;
    const h0 = h1 + orig.height;
    vertexData[0] = a * w1 + c * h1 + tx;
    vertexData[1] = d * h1 + b * w1 + ty;
    vertexData[2] = a * w0 + c * h1 + tx;
    vertexData[3] = d * h1 + b * w0 + ty;
    vertexData[4] = a * w0 + c * h0 + tx;
    vertexData[5] = d * h0 + b * w0 + ty;
    vertexData[6] = a * w1 + c * h0 + tx;
    vertexData[7] = d * h0 + b * w1 + ty;
  }
  _render(renderer) {
    this.calculateVertices();
    renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]);
    renderer.plugins[this.pluginName].render(this);
  }
  _calculateBounds() {
    const trim = this._texture.trim;
    const orig = this._texture.orig;
    if (!trim || trim.width === orig.width && trim.height === orig.height) {
      this.calculateVertices();
      this._bounds.addQuad(this.vertexData);
    } else {
      this.calculateTrimmedVertices();
      this._bounds.addQuad(this.vertexTrimmedData);
    }
  }
  getLocalBounds(rect) {
    if (this.children.length === 0) {
      if (!this._localBounds) {
        this._localBounds = new Bounds();
      }
      this._localBounds.minX = this._texture.orig.width * -this._anchor._x;
      this._localBounds.minY = this._texture.orig.height * -this._anchor._y;
      this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x);
      this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y);
      if (!rect) {
        if (!this._localBoundsRect) {
          this._localBoundsRect = new Rectangle();
        }
        rect = this._localBoundsRect;
      }
      return this._localBounds.getRectangle(rect);
    }
    return super.getLocalBounds.call(this, rect);
  }
  containsPoint(point) {
    this.worldTransform.applyInverse(point, tempPoint);
    const width = this._texture.orig.width;
    const height = this._texture.orig.height;
    const x1 = -width * this.anchor.x;
    let y1 = 0;
    if (tempPoint.x >= x1 && tempPoint.x < x1 + width) {
      y1 = -height * this.anchor.y;
      if (tempPoint.y >= y1 && tempPoint.y < y1 + height) {
        return true;
      }
    }
    return false;
  }
  destroy(options) {
    super.destroy(options);
    this._texture.off("update", this._onTextureUpdate, this);
    this._anchor = null;
    const destroyTexture = typeof options === "boolean" ? options : options?.texture;
    if (destroyTexture) {
      const destroyBaseTexture = typeof options === "boolean" ? options : options?.baseTexture;
      this._texture.destroy(!!destroyBaseTexture);
    }
    this._texture = null;
  }
  static from(source, options) {
    const texture = source instanceof Texture ? source : Texture.from(source, options);
    return new Sprite(texture);
  }
  set roundPixels(value) {
    if (this._roundPixels !== value) {
      this._transformID = -1;
    }
    this._roundPixels = value;
  }
  get roundPixels() {
    return this._roundPixels;
  }
  get width() {
    return Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(value) {
    const s = sign(this.scale.x) || 1;
    this.scale.x = s * value / this._texture.orig.width;
    this._width = value;
  }
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(value) {
    const s = sign(this.scale.y) || 1;
    this.scale.y = s * value / this._texture.orig.height;
    this._height = value;
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(value) {
    this._anchor.copyFrom(value);
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(value) {
    this._tintColor.setValue(value);
    this._tintRGB = this._tintColor.toLittleEndianNumber();
  }
  get tintValue() {
    return this._tintColor.toNumber();
  }
  get texture() {
    return this._texture;
  }
  set texture(value) {
    if (this._texture === value) {
      return;
    }
    if (this._texture) {
      this._texture.off("update", this._onTextureUpdate, this);
    }
    this._texture = value || Texture.EMPTY;
    this._cachedTint = 16777215;
    this._textureID = -1;
    this._textureTrimmedID = -1;
    if (value) {
      if (value.baseTexture.valid) {
        this._onTextureUpdate();
      } else {
        value.once("update", this._onTextureUpdate, this);
      }
    }
  }
}

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
    if (spriteOptions.isCircle) _this._body = matterExports.Bodies.circle(_this.x, _this.y, _this.width, _this.physicsOptions);else _this._body = matterExports.Bodies.rectangle(_this.x, _this.y, _this.width, _this.height, _this.physicsOptions);
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
}(Sprite);

const buildCircle = {
  build(graphicsData) {
    const points = graphicsData.points;
    let x;
    let y;
    let dx;
    let dy;
    let rx;
    let ry;
    if (graphicsData.type === SHAPES.CIRC) {
      const circle = graphicsData.shape;
      x = circle.x;
      y = circle.y;
      rx = ry = circle.radius;
      dx = dy = 0;
    } else if (graphicsData.type === SHAPES.ELIP) {
      const ellipse = graphicsData.shape;
      x = ellipse.x;
      y = ellipse.y;
      rx = ellipse.width;
      ry = ellipse.height;
      dx = dy = 0;
    } else {
      const roundedRect = graphicsData.shape;
      const halfWidth = roundedRect.width / 2;
      const halfHeight = roundedRect.height / 2;
      x = roundedRect.x + halfWidth;
      y = roundedRect.y + halfHeight;
      rx = ry = Math.max(0, Math.min(roundedRect.radius, Math.min(halfWidth, halfHeight)));
      dx = halfWidth - rx;
      dy = halfHeight - ry;
    }
    if (!(rx >= 0 && ry >= 0 && dx >= 0 && dy >= 0)) {
      points.length = 0;
      return;
    }
    const n = Math.ceil(2.3 * Math.sqrt(rx + ry));
    const m = n * 8 + (dx ? 4 : 0) + (dy ? 4 : 0);
    points.length = m;
    if (m === 0) {
      return;
    }
    if (n === 0) {
      points.length = 8;
      points[0] = points[6] = x + dx;
      points[1] = points[3] = y + dy;
      points[2] = points[4] = x - dx;
      points[5] = points[7] = y - dy;
      return;
    }
    let j1 = 0;
    let j2 = n * 4 + (dx ? 2 : 0) + 2;
    let j3 = j2;
    let j4 = m;
    {
      const x0 = dx + rx;
      const y0 = dy;
      const x1 = x + x0;
      const x2 = x - x0;
      const y1 = y + y0;
      points[j1++] = x1;
      points[j1++] = y1;
      points[--j2] = y1;
      points[--j2] = x2;
      if (dy) {
        const y2 = y - y0;
        points[j3++] = x2;
        points[j3++] = y2;
        points[--j4] = y2;
        points[--j4] = x1;
      }
    }
    for (let i = 1; i < n; i++) {
      const a = Math.PI / 2 * (i / n);
      const x0 = dx + Math.cos(a) * rx;
      const y0 = dy + Math.sin(a) * ry;
      const x1 = x + x0;
      const x2 = x - x0;
      const y1 = y + y0;
      const y2 = y - y0;
      points[j1++] = x1;
      points[j1++] = y1;
      points[--j2] = y1;
      points[--j2] = x2;
      points[j3++] = x2;
      points[j3++] = y2;
      points[--j4] = y2;
      points[--j4] = x1;
    }
    {
      const x0 = dx;
      const y0 = dy + ry;
      const x1 = x + x0;
      const x2 = x - x0;
      const y1 = y + y0;
      const y2 = y - y0;
      points[j1++] = x1;
      points[j1++] = y1;
      points[--j4] = y2;
      points[--j4] = x1;
      if (dx) {
        points[j1++] = x2;
        points[j1++] = y1;
        points[--j4] = y2;
        points[--j4] = x2;
      }
    }
  },
  triangulate(graphicsData, graphicsGeometry) {
    const points = graphicsData.points;
    const verts = graphicsGeometry.points;
    const indices = graphicsGeometry.indices;
    if (points.length === 0) {
      return;
    }
    let vertPos = verts.length / 2;
    const center = vertPos;
    let x;
    let y;
    if (graphicsData.type !== SHAPES.RREC) {
      const circle = graphicsData.shape;
      x = circle.x;
      y = circle.y;
    } else {
      const roundedRect = graphicsData.shape;
      x = roundedRect.x + roundedRect.width / 2;
      y = roundedRect.y + roundedRect.height / 2;
    }
    const matrix = graphicsData.matrix;
    verts.push(graphicsData.matrix ? matrix.a * x + matrix.c * y + matrix.tx : x, graphicsData.matrix ? matrix.b * x + matrix.d * y + matrix.ty : y);
    vertPos++;
    verts.push(points[0], points[1]);
    for (let i = 2; i < points.length; i += 2) {
      verts.push(points[i], points[i + 1]);
      indices.push(vertPos++, center, vertPos);
    }
    indices.push(center + 1, center, vertPos);
  }
};

function fixOrientation(points, hole = false) {
  const m = points.length;
  if (m < 6) {
    return;
  }
  let area = 0;
  for (let i = 0, x1 = points[m - 2], y1 = points[m - 1]; i < m; i += 2) {
    const x2 = points[i];
    const y2 = points[i + 1];
    area += (x2 - x1) * (y2 + y1);
    x1 = x2;
    y1 = y2;
  }
  if (!hole && area > 0 || hole && area <= 0) {
    const n = m / 2;
    for (let i = n + n % 2; i < m; i += 2) {
      const i1 = m - i - 2;
      const i2 = m - i - 1;
      const i3 = i;
      const i4 = i + 1;
      [points[i1], points[i3]] = [points[i3], points[i1]];
      [points[i2], points[i4]] = [points[i4], points[i2]];
    }
  }
}
const buildPoly = {
  build(graphicsData) {
    graphicsData.points = graphicsData.shape.points.slice();
  },
  triangulate(graphicsData, graphicsGeometry) {
    let points = graphicsData.points;
    const holes = graphicsData.holes;
    const verts = graphicsGeometry.points;
    const indices = graphicsGeometry.indices;
    if (points.length >= 6) {
      fixOrientation(points, false);
      const holeArray = [];
      for (let i = 0; i < holes.length; i++) {
        const hole = holes[i];
        fixOrientation(hole.points, true);
        holeArray.push(points.length / 2);
        points = points.concat(hole.points);
      }
      const triangles = earcutExports(points, holeArray, 2);
      if (!triangles) {
        return;
      }
      const vertPos = verts.length / 2;
      for (let i = 0; i < triangles.length; i += 3) {
        indices.push(triangles[i] + vertPos);
        indices.push(triangles[i + 1] + vertPos);
        indices.push(triangles[i + 2] + vertPos);
      }
      for (let i = 0; i < points.length; i++) {
        verts.push(points[i]);
      }
    }
  }
};

const buildRectangle = {
  build(graphicsData) {
    const rectData = graphicsData.shape;
    const x = rectData.x;
    const y = rectData.y;
    const width = rectData.width;
    const height = rectData.height;
    const points = graphicsData.points;
    points.length = 0;
    if (!(width >= 0 && height >= 0)) {
      return;
    }
    points.push(x, y, x + width, y, x + width, y + height, x, y + height);
  },
  triangulate(graphicsData, graphicsGeometry) {
    const points = graphicsData.points;
    const verts = graphicsGeometry.points;
    if (points.length === 0) {
      return;
    }
    const vertPos = verts.length / 2;
    verts.push(points[0], points[1], points[2], points[3], points[6], points[7], points[4], points[5]);
    graphicsGeometry.indices.push(vertPos, vertPos + 1, vertPos + 2, vertPos + 1, vertPos + 2, vertPos + 3);
  }
};

const buildRoundedRectangle = {
  build(graphicsData) {
    buildCircle.build(graphicsData);
  },
  triangulate(graphicsData, graphicsGeometry) {
    buildCircle.triangulate(graphicsData, graphicsGeometry);
  }
};

var LINE_JOIN = /* @__PURE__ */ ((LINE_JOIN2) => {
  LINE_JOIN2["MITER"] = "miter";
  LINE_JOIN2["BEVEL"] = "bevel";
  LINE_JOIN2["ROUND"] = "round";
  return LINE_JOIN2;
})(LINE_JOIN || {});
var LINE_CAP = /* @__PURE__ */ ((LINE_CAP2) => {
  LINE_CAP2["BUTT"] = "butt";
  LINE_CAP2["ROUND"] = "round";
  LINE_CAP2["SQUARE"] = "square";
  return LINE_CAP2;
})(LINE_CAP || {});
const curves = {
  adaptive: true,
  maxLength: 10,
  minSegments: 8,
  maxSegments: 2048,
  epsilon: 1e-4,
  _segmentsCount(length, defaultSegments = 20) {
    if (!this.adaptive || !length || isNaN(length)) {
      return defaultSegments;
    }
    let result = Math.ceil(length / this.maxLength);
    if (result < this.minSegments) {
      result = this.minSegments;
    } else if (result > this.maxSegments) {
      result = this.maxSegments;
    }
    return result;
  }
};

class ArcUtils {
  static curveTo(x1, y1, x2, y2, radius, points) {
    const fromX = points[points.length - 2];
    const fromY = points[points.length - 1];
    const a1 = fromY - y1;
    const b1 = fromX - x1;
    const a2 = y2 - y1;
    const b2 = x2 - x1;
    const mm = Math.abs(a1 * b2 - b1 * a2);
    if (mm < 1e-8 || radius === 0) {
      if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
        points.push(x1, y1);
      }
      return null;
    }
    const dd = a1 * a1 + b1 * b1;
    const cc = a2 * a2 + b2 * b2;
    const tt = a1 * a2 + b1 * b2;
    const k1 = radius * Math.sqrt(dd) / mm;
    const k2 = radius * Math.sqrt(cc) / mm;
    const j1 = k1 * tt / dd;
    const j2 = k2 * tt / cc;
    const cx = k1 * b2 + k2 * b1;
    const cy = k1 * a2 + k2 * a1;
    const px = b1 * (k2 + j1);
    const py = a1 * (k2 + j1);
    const qx = b2 * (k1 + j2);
    const qy = a2 * (k1 + j2);
    const startAngle = Math.atan2(py - cy, px - cx);
    const endAngle = Math.atan2(qy - cy, qx - cx);
    return {
      cx: cx + x1,
      cy: cy + y1,
      radius,
      startAngle,
      endAngle,
      anticlockwise: b1 * a2 > b2 * a1
    };
  }
  static arc(_startX, _startY, cx, cy, radius, startAngle, endAngle, _anticlockwise, points) {
    const sweep = endAngle - startAngle;
    const n = curves._segmentsCount(Math.abs(sweep) * radius, Math.ceil(Math.abs(sweep) / PI_2) * 40);
    const theta = sweep / (n * 2);
    const theta2 = theta * 2;
    const cTheta = Math.cos(theta);
    const sTheta = Math.sin(theta);
    const segMinus = n - 1;
    const remainder = segMinus % 1 / segMinus;
    for (let i = 0; i <= segMinus; ++i) {
      const real = i + remainder * i;
      const angle = theta + startAngle + theta2 * real;
      const c = Math.cos(angle);
      const s = -Math.sin(angle);
      points.push((cTheta * c + sTheta * s) * radius + cx, (cTheta * -s + sTheta * c) * radius + cy);
    }
  }
}

class BatchPart {
  constructor() {
    this.reset();
  }
  begin(style, startIndex, attribStart) {
    this.reset();
    this.style = style;
    this.start = startIndex;
    this.attribStart = attribStart;
  }
  end(endIndex, endAttrib) {
    this.attribSize = endAttrib - this.attribStart;
    this.size = endIndex - this.start;
  }
  reset() {
    this.style = null;
    this.size = 0;
    this.start = 0;
    this.attribStart = 0;
    this.attribSize = 0;
  }
}

class BezierUtils {
  static curveLength(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY) {
    const n = 10;
    let result = 0;
    let t = 0;
    let t2 = 0;
    let t3 = 0;
    let nt = 0;
    let nt2 = 0;
    let nt3 = 0;
    let x = 0;
    let y = 0;
    let dx = 0;
    let dy = 0;
    let prevX = fromX;
    let prevY = fromY;
    for (let i = 1; i <= n; ++i) {
      t = i / n;
      t2 = t * t;
      t3 = t2 * t;
      nt = 1 - t;
      nt2 = nt * nt;
      nt3 = nt2 * nt;
      x = nt3 * fromX + 3 * nt2 * t * cpX + 3 * nt * t2 * cpX2 + t3 * toX;
      y = nt3 * fromY + 3 * nt2 * t * cpY + 3 * nt * t2 * cpY2 + t3 * toY;
      dx = prevX - x;
      dy = prevY - y;
      prevX = x;
      prevY = y;
      result += Math.sqrt(dx * dx + dy * dy);
    }
    return result;
  }
  static curveTo(cpX, cpY, cpX2, cpY2, toX, toY, points) {
    const fromX = points[points.length - 2];
    const fromY = points[points.length - 1];
    points.length -= 2;
    const n = curves._segmentsCount(BezierUtils.curveLength(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY));
    let dt = 0;
    let dt2 = 0;
    let dt3 = 0;
    let t2 = 0;
    let t3 = 0;
    points.push(fromX, fromY);
    for (let i = 1, j = 0; i <= n; ++i) {
      j = i / n;
      dt = 1 - j;
      dt2 = dt * dt;
      dt3 = dt2 * dt;
      t2 = j * j;
      t3 = t2 * j;
      points.push(dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX, dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
    }
  }
}

function square(x, y, nx, ny, innerWeight, outerWeight, clockwise, verts) {
  const ix = x - nx * innerWeight;
  const iy = y - ny * innerWeight;
  const ox = x + nx * outerWeight;
  const oy = y + ny * outerWeight;
  let exx;
  let eyy;
  if (clockwise) {
    exx = ny;
    eyy = -nx;
  } else {
    exx = -ny;
    eyy = nx;
  }
  const eix = ix + exx;
  const eiy = iy + eyy;
  const eox = ox + exx;
  const eoy = oy + eyy;
  verts.push(eix, eiy, eox, eoy);
  return 2;
}
function round(cx, cy, sx, sy, ex, ey, verts, clockwise) {
  const cx2p0x = sx - cx;
  const cy2p0y = sy - cy;
  let angle0 = Math.atan2(cx2p0x, cy2p0y);
  let angle1 = Math.atan2(ex - cx, ey - cy);
  if (clockwise && angle0 < angle1) {
    angle0 += Math.PI * 2;
  } else if (!clockwise && angle0 > angle1) {
    angle1 += Math.PI * 2;
  }
  let startAngle = angle0;
  const angleDiff = angle1 - angle0;
  const absAngleDiff = Math.abs(angleDiff);
  const radius = Math.sqrt(cx2p0x * cx2p0x + cy2p0y * cy2p0y);
  const segCount = (15 * absAngleDiff * Math.sqrt(radius) / Math.PI >> 0) + 1;
  const angleInc = angleDiff / segCount;
  startAngle += angleInc;
  if (clockwise) {
    verts.push(cx, cy, sx, sy);
    for (let i = 1, angle = startAngle; i < segCount; i++, angle += angleInc) {
      verts.push(cx, cy, cx + Math.sin(angle) * radius, cy + Math.cos(angle) * radius);
    }
    verts.push(cx, cy, ex, ey);
  } else {
    verts.push(sx, sy, cx, cy);
    for (let i = 1, angle = startAngle; i < segCount; i++, angle += angleInc) {
      verts.push(cx + Math.sin(angle) * radius, cy + Math.cos(angle) * radius, cx, cy);
    }
    verts.push(ex, ey, cx, cy);
  }
  return segCount * 2;
}
function buildNonNativeLine(graphicsData, graphicsGeometry) {
  const shape = graphicsData.shape;
  let points = graphicsData.points || shape.points.slice();
  const eps = graphicsGeometry.closePointEps;
  if (points.length === 0) {
    return;
  }
  const style = graphicsData.lineStyle;
  const firstPoint = new Point(points[0], points[1]);
  const lastPoint = new Point(points[points.length - 2], points[points.length - 1]);
  const closedShape = shape.type !== SHAPES.POLY || shape.closeStroke;
  const closedPath = Math.abs(firstPoint.x - lastPoint.x) < eps && Math.abs(firstPoint.y - lastPoint.y) < eps;
  if (closedShape) {
    points = points.slice();
    if (closedPath) {
      points.pop();
      points.pop();
      lastPoint.set(points[points.length - 2], points[points.length - 1]);
    }
    const midPointX = (firstPoint.x + lastPoint.x) * 0.5;
    const midPointY = (lastPoint.y + firstPoint.y) * 0.5;
    points.unshift(midPointX, midPointY);
    points.push(midPointX, midPointY);
  }
  const verts = graphicsGeometry.points;
  const length = points.length / 2;
  let indexCount = points.length;
  const indexStart = verts.length / 2;
  const width = style.width / 2;
  const widthSquared = width * width;
  const miterLimitSquared = style.miterLimit * style.miterLimit;
  let x0 = points[0];
  let y0 = points[1];
  let x1 = points[2];
  let y1 = points[3];
  let x2 = 0;
  let y2 = 0;
  let perpx = -(y0 - y1);
  let perpy = x0 - x1;
  let perp1x = 0;
  let perp1y = 0;
  let dist = Math.sqrt(perpx * perpx + perpy * perpy);
  perpx /= dist;
  perpy /= dist;
  perpx *= width;
  perpy *= width;
  const ratio = style.alignment;
  const innerWeight = (1 - ratio) * 2;
  const outerWeight = ratio * 2;
  if (!closedShape) {
    if (style.cap === LINE_CAP.ROUND) {
      indexCount += round(x0 - perpx * (innerWeight - outerWeight) * 0.5, y0 - perpy * (innerWeight - outerWeight) * 0.5, x0 - perpx * innerWeight, y0 - perpy * innerWeight, x0 + perpx * outerWeight, y0 + perpy * outerWeight, verts, true) + 2;
    } else if (style.cap === LINE_CAP.SQUARE) {
      indexCount += square(x0, y0, perpx, perpy, innerWeight, outerWeight, true, verts);
    }
  }
  verts.push(x0 - perpx * innerWeight, y0 - perpy * innerWeight, x0 + perpx * outerWeight, y0 + perpy * outerWeight);
  for (let i = 1; i < length - 1; ++i) {
    x0 = points[(i - 1) * 2];
    y0 = points[(i - 1) * 2 + 1];
    x1 = points[i * 2];
    y1 = points[i * 2 + 1];
    x2 = points[(i + 1) * 2];
    y2 = points[(i + 1) * 2 + 1];
    perpx = -(y0 - y1);
    perpy = x0 - x1;
    dist = Math.sqrt(perpx * perpx + perpy * perpy);
    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;
    perp1x = -(y1 - y2);
    perp1y = x1 - x2;
    dist = Math.sqrt(perp1x * perp1x + perp1y * perp1y);
    perp1x /= dist;
    perp1y /= dist;
    perp1x *= width;
    perp1y *= width;
    const dx0 = x1 - x0;
    const dy0 = y0 - y1;
    const dx1 = x1 - x2;
    const dy1 = y2 - y1;
    const dot = dx0 * dx1 + dy0 * dy1;
    const cross = dy0 * dx1 - dy1 * dx0;
    const clockwise = cross < 0;
    if (Math.abs(cross) < 1e-3 * Math.abs(dot)) {
      verts.push(x1 - perpx * innerWeight, y1 - perpy * innerWeight, x1 + perpx * outerWeight, y1 + perpy * outerWeight);
      if (dot >= 0) {
        if (style.join === LINE_JOIN.ROUND) {
          indexCount += round(x1, y1, x1 - perpx * innerWeight, y1 - perpy * innerWeight, x1 - perp1x * innerWeight, y1 - perp1y * innerWeight, verts, false) + 4;
        } else {
          indexCount += 2;
        }
        verts.push(x1 - perp1x * outerWeight, y1 - perp1y * outerWeight, x1 + perp1x * innerWeight, y1 + perp1y * innerWeight);
      }
      continue;
    }
    const c1 = (-perpx + x0) * (-perpy + y1) - (-perpx + x1) * (-perpy + y0);
    const c2 = (-perp1x + x2) * (-perp1y + y1) - (-perp1x + x1) * (-perp1y + y2);
    const px = (dx0 * c2 - dx1 * c1) / cross;
    const py = (dy1 * c1 - dy0 * c2) / cross;
    const pdist = (px - x1) * (px - x1) + (py - y1) * (py - y1);
    const imx = x1 + (px - x1) * innerWeight;
    const imy = y1 + (py - y1) * innerWeight;
    const omx = x1 - (px - x1) * outerWeight;
    const omy = y1 - (py - y1) * outerWeight;
    const smallerInsideSegmentSq = Math.min(dx0 * dx0 + dy0 * dy0, dx1 * dx1 + dy1 * dy1);
    const insideWeight = clockwise ? innerWeight : outerWeight;
    const smallerInsideDiagonalSq = smallerInsideSegmentSq + insideWeight * insideWeight * widthSquared;
    const insideMiterOk = pdist <= smallerInsideDiagonalSq;
    let join = style.join;
    if (join === LINE_JOIN.MITER && pdist / widthSquared > miterLimitSquared) {
      join = LINE_JOIN.BEVEL;
    }
    if (insideMiterOk) {
      switch (join) {
        case LINE_JOIN.MITER: {
          verts.push(imx, imy, omx, omy);
          break;
        }
        case LINE_JOIN.BEVEL: {
          if (clockwise) {
            verts.push(imx, imy, x1 + perpx * outerWeight, y1 + perpy * outerWeight, imx, imy, x1 + perp1x * outerWeight, y1 + perp1y * outerWeight);
          } else {
            verts.push(x1 - perpx * innerWeight, y1 - perpy * innerWeight, omx, omy, x1 - perp1x * innerWeight, y1 - perp1y * innerWeight, omx, omy);
          }
          indexCount += 2;
          break;
        }
        case LINE_JOIN.ROUND: {
          if (clockwise) {
            verts.push(imx, imy, x1 + perpx * outerWeight, y1 + perpy * outerWeight);
            indexCount += round(x1, y1, x1 + perpx * outerWeight, y1 + perpy * outerWeight, x1 + perp1x * outerWeight, y1 + perp1y * outerWeight, verts, true) + 4;
            verts.push(imx, imy, x1 + perp1x * outerWeight, y1 + perp1y * outerWeight);
          } else {
            verts.push(x1 - perpx * innerWeight, y1 - perpy * innerWeight, omx, omy);
            indexCount += round(x1, y1, x1 - perpx * innerWeight, y1 - perpy * innerWeight, x1 - perp1x * innerWeight, y1 - perp1y * innerWeight, verts, false) + 4;
            verts.push(x1 - perp1x * innerWeight, y1 - perp1y * innerWeight, omx, omy);
          }
          break;
        }
      }
    } else {
      verts.push(x1 - perpx * innerWeight, y1 - perpy * innerWeight, x1 + perpx * outerWeight, y1 + perpy * outerWeight);
      switch (join) {
        case LINE_JOIN.MITER: {
          if (clockwise) {
            verts.push(omx, omy, omx, omy);
          } else {
            verts.push(imx, imy, imx, imy);
          }
          indexCount += 2;
          break;
        }
        case LINE_JOIN.ROUND: {
          if (clockwise) {
            indexCount += round(x1, y1, x1 + perpx * outerWeight, y1 + perpy * outerWeight, x1 + perp1x * outerWeight, y1 + perp1y * outerWeight, verts, true) + 2;
          } else {
            indexCount += round(x1, y1, x1 - perpx * innerWeight, y1 - perpy * innerWeight, x1 - perp1x * innerWeight, y1 - perp1y * innerWeight, verts, false) + 2;
          }
          break;
        }
      }
      verts.push(x1 - perp1x * innerWeight, y1 - perp1y * innerWeight, x1 + perp1x * outerWeight, y1 + perp1y * outerWeight);
      indexCount += 2;
    }
  }
  x0 = points[(length - 2) * 2];
  y0 = points[(length - 2) * 2 + 1];
  x1 = points[(length - 1) * 2];
  y1 = points[(length - 1) * 2 + 1];
  perpx = -(y0 - y1);
  perpy = x0 - x1;
  dist = Math.sqrt(perpx * perpx + perpy * perpy);
  perpx /= dist;
  perpy /= dist;
  perpx *= width;
  perpy *= width;
  verts.push(x1 - perpx * innerWeight, y1 - perpy * innerWeight, x1 + perpx * outerWeight, y1 + perpy * outerWeight);
  if (!closedShape) {
    if (style.cap === LINE_CAP.ROUND) {
      indexCount += round(x1 - perpx * (innerWeight - outerWeight) * 0.5, y1 - perpy * (innerWeight - outerWeight) * 0.5, x1 - perpx * innerWeight, y1 - perpy * innerWeight, x1 + perpx * outerWeight, y1 + perpy * outerWeight, verts, false) + 2;
    } else if (style.cap === LINE_CAP.SQUARE) {
      indexCount += square(x1, y1, perpx, perpy, innerWeight, outerWeight, false, verts);
    }
  }
  const indices = graphicsGeometry.indices;
  const eps2 = curves.epsilon * curves.epsilon;
  for (let i = indexStart; i < indexCount + indexStart - 2; ++i) {
    x0 = verts[i * 2];
    y0 = verts[i * 2 + 1];
    x1 = verts[(i + 1) * 2];
    y1 = verts[(i + 1) * 2 + 1];
    x2 = verts[(i + 2) * 2];
    y2 = verts[(i + 2) * 2 + 1];
    if (Math.abs(x0 * (y1 - y2) + x1 * (y2 - y0) + x2 * (y0 - y1)) < eps2) {
      continue;
    }
    indices.push(i, i + 1, i + 2);
  }
}
function buildNativeLine(graphicsData, graphicsGeometry) {
  let i = 0;
  const shape = graphicsData.shape;
  const points = graphicsData.points || shape.points;
  const closedShape = shape.type !== SHAPES.POLY || shape.closeStroke;
  if (points.length === 0)
    return;
  const verts = graphicsGeometry.points;
  const indices = graphicsGeometry.indices;
  const length = points.length / 2;
  const startIndex = verts.length / 2;
  let currentIndex = startIndex;
  verts.push(points[0], points[1]);
  for (i = 1; i < length; i++) {
    verts.push(points[i * 2], points[i * 2 + 1]);
    indices.push(currentIndex, currentIndex + 1);
    currentIndex++;
  }
  if (closedShape) {
    indices.push(currentIndex, startIndex);
  }
}
function buildLine(graphicsData, graphicsGeometry) {
  if (graphicsData.lineStyle.native) {
    buildNativeLine(graphicsData, graphicsGeometry);
  } else {
    buildNonNativeLine(graphicsData, graphicsGeometry);
  }
}

class QuadraticUtils {
  static curveLength(fromX, fromY, cpX, cpY, toX, toY) {
    const ax = fromX - 2 * cpX + toX;
    const ay = fromY - 2 * cpY + toY;
    const bx = 2 * cpX - 2 * fromX;
    const by = 2 * cpY - 2 * fromY;
    const a = 4 * (ax * ax + ay * ay);
    const b = 4 * (ax * bx + ay * by);
    const c = bx * bx + by * by;
    const s = 2 * Math.sqrt(a + b + c);
    const a2 = Math.sqrt(a);
    const a32 = 2 * a * a2;
    const c2 = 2 * Math.sqrt(c);
    const ba = b / a2;
    return (a32 * s + a2 * b * (s - c2) + (4 * c * a - b * b) * Math.log((2 * a2 + ba + s) / (ba + c2))) / (4 * a32);
  }
  static curveTo(cpX, cpY, toX, toY, points) {
    const fromX = points[points.length - 2];
    const fromY = points[points.length - 1];
    const n = curves._segmentsCount(QuadraticUtils.curveLength(fromX, fromY, cpX, cpY, toX, toY));
    let xa = 0;
    let ya = 0;
    for (let i = 1; i <= n; ++i) {
      const j = i / n;
      xa = fromX + (cpX - fromX) * j;
      ya = fromY + (cpY - fromY) * j;
      points.push(xa + (cpX + (toX - cpX) * j - xa) * j, ya + (cpY + (toY - cpY) * j - ya) * j);
    }
  }
}

const FILL_COMMANDS = {
  [SHAPES.POLY]: buildPoly,
  [SHAPES.CIRC]: buildCircle,
  [SHAPES.ELIP]: buildCircle,
  [SHAPES.RECT]: buildRectangle,
  [SHAPES.RREC]: buildRoundedRectangle
};
const BATCH_POOL = [];
const DRAW_CALL_POOL = [];

class GraphicsData {
  constructor(shape, fillStyle = null, lineStyle = null, matrix = null) {
    this.points = [];
    this.holes = [];
    this.shape = shape;
    this.lineStyle = lineStyle;
    this.fillStyle = fillStyle;
    this.matrix = matrix;
    this.type = shape.type;
  }
  clone() {
    return new GraphicsData(this.shape, this.fillStyle, this.lineStyle, this.matrix);
  }
  destroy() {
    this.shape = null;
    this.holes.length = 0;
    this.holes = null;
    this.points.length = 0;
    this.points = null;
    this.lineStyle = null;
    this.fillStyle = null;
  }
}

const tmpPoint = new Point();
const _GraphicsGeometry = class extends BatchGeometry {
  constructor() {
    super();
    this.closePointEps = 1e-4;
    this.boundsPadding = 0;
    this.uvsFloat32 = null;
    this.indicesUint16 = null;
    this.batchable = false;
    this.points = [];
    this.colors = [];
    this.uvs = [];
    this.indices = [];
    this.textureIds = [];
    this.graphicsData = [];
    this.drawCalls = [];
    this.batchDirty = -1;
    this.batches = [];
    this.dirty = 0;
    this.cacheDirty = -1;
    this.clearDirty = 0;
    this.shapeIndex = 0;
    this._bounds = new Bounds();
    this.boundsDirty = -1;
  }
  get bounds() {
    this.updateBatches();
    if (this.boundsDirty !== this.dirty) {
      this.boundsDirty = this.dirty;
      this.calculateBounds();
    }
    return this._bounds;
  }
  invalidate() {
    this.boundsDirty = -1;
    this.dirty++;
    this.batchDirty++;
    this.shapeIndex = 0;
    this.points.length = 0;
    this.colors.length = 0;
    this.uvs.length = 0;
    this.indices.length = 0;
    this.textureIds.length = 0;
    for (let i = 0; i < this.drawCalls.length; i++) {
      this.drawCalls[i].texArray.clear();
      DRAW_CALL_POOL.push(this.drawCalls[i]);
    }
    this.drawCalls.length = 0;
    for (let i = 0; i < this.batches.length; i++) {
      const batchPart = this.batches[i];
      batchPart.reset();
      BATCH_POOL.push(batchPart);
    }
    this.batches.length = 0;
  }
  clear() {
    if (this.graphicsData.length > 0) {
      this.invalidate();
      this.clearDirty++;
      this.graphicsData.length = 0;
    }
    return this;
  }
  drawShape(shape, fillStyle = null, lineStyle = null, matrix = null) {
    const data = new GraphicsData(shape, fillStyle, lineStyle, matrix);
    this.graphicsData.push(data);
    this.dirty++;
    return this;
  }
  drawHole(shape, matrix = null) {
    if (!this.graphicsData.length) {
      return null;
    }
    const data = new GraphicsData(shape, null, null, matrix);
    const lastShape = this.graphicsData[this.graphicsData.length - 1];
    data.lineStyle = lastShape.lineStyle;
    lastShape.holes.push(data);
    this.dirty++;
    return this;
  }
  destroy() {
    super.destroy();
    for (let i = 0; i < this.graphicsData.length; ++i) {
      this.graphicsData[i].destroy();
    }
    this.points.length = 0;
    this.points = null;
    this.colors.length = 0;
    this.colors = null;
    this.uvs.length = 0;
    this.uvs = null;
    this.indices.length = 0;
    this.indices = null;
    this.indexBuffer.destroy();
    this.indexBuffer = null;
    this.graphicsData.length = 0;
    this.graphicsData = null;
    this.drawCalls.length = 0;
    this.drawCalls = null;
    this.batches.length = 0;
    this.batches = null;
    this._bounds = null;
  }
  containsPoint(point) {
    const graphicsData = this.graphicsData;
    for (let i = 0; i < graphicsData.length; ++i) {
      const data = graphicsData[i];
      if (!data.fillStyle.visible) {
        continue;
      }
      if (data.shape) {
        if (data.matrix) {
          data.matrix.applyInverse(point, tmpPoint);
        } else {
          tmpPoint.copyFrom(point);
        }
        if (data.shape.contains(tmpPoint.x, tmpPoint.y)) {
          let hitHole = false;
          if (data.holes) {
            for (let i2 = 0; i2 < data.holes.length; i2++) {
              const hole = data.holes[i2];
              if (hole.shape.contains(tmpPoint.x, tmpPoint.y)) {
                hitHole = true;
                break;
              }
            }
          }
          if (!hitHole) {
            return true;
          }
        }
      }
    }
    return false;
  }
  updateBatches() {
    if (!this.graphicsData.length) {
      this.batchable = true;
      return;
    }
    if (!this.validateBatching()) {
      return;
    }
    this.cacheDirty = this.dirty;
    const uvs = this.uvs;
    const graphicsData = this.graphicsData;
    let batchPart = null;
    let currentStyle = null;
    if (this.batches.length > 0) {
      batchPart = this.batches[this.batches.length - 1];
      currentStyle = batchPart.style;
    }
    for (let i = this.shapeIndex; i < graphicsData.length; i++) {
      this.shapeIndex++;
      const data = graphicsData[i];
      const fillStyle = data.fillStyle;
      const lineStyle = data.lineStyle;
      const command = FILL_COMMANDS[data.type];
      command.build(data);
      if (data.matrix) {
        this.transformPoints(data.points, data.matrix);
      }
      if (fillStyle.visible || lineStyle.visible) {
        this.processHoles(data.holes);
      }
      for (let j = 0; j < 2; j++) {
        const style = j === 0 ? fillStyle : lineStyle;
        if (!style.visible)
          continue;
        const nextTexture = style.texture.baseTexture;
        const index2 = this.indices.length;
        const attribIndex = this.points.length / 2;
        nextTexture.wrapMode = WRAP_MODES.REPEAT;
        if (j === 0) {
          this.processFill(data);
        } else {
          this.processLine(data);
        }
        const size = this.points.length / 2 - attribIndex;
        if (size === 0)
          continue;
        if (batchPart && !this._compareStyles(currentStyle, style)) {
          batchPart.end(index2, attribIndex);
          batchPart = null;
        }
        if (!batchPart) {
          batchPart = BATCH_POOL.pop() || new BatchPart();
          batchPart.begin(style, index2, attribIndex);
          this.batches.push(batchPart);
          currentStyle = style;
        }
        this.addUvs(this.points, uvs, style.texture, attribIndex, size, style.matrix);
      }
    }
    const index = this.indices.length;
    const attrib = this.points.length / 2;
    if (batchPart) {
      batchPart.end(index, attrib);
    }
    if (this.batches.length === 0) {
      this.batchable = true;
      return;
    }
    const need32 = attrib > 65535;
    if (this.indicesUint16 && this.indices.length === this.indicesUint16.length && need32 === this.indicesUint16.BYTES_PER_ELEMENT > 2) {
      this.indicesUint16.set(this.indices);
    } else {
      this.indicesUint16 = need32 ? new Uint32Array(this.indices) : new Uint16Array(this.indices);
    }
    this.batchable = this.isBatchable();
    if (this.batchable) {
      this.packBatches();
    } else {
      this.buildDrawCalls();
    }
  }
  _compareStyles(styleA, styleB) {
    if (!styleA || !styleB) {
      return false;
    }
    if (styleA.texture.baseTexture !== styleB.texture.baseTexture) {
      return false;
    }
    if (styleA.color + styleA.alpha !== styleB.color + styleB.alpha) {
      return false;
    }
    if (!!styleA.native !== !!styleB.native) {
      return false;
    }
    return true;
  }
  validateBatching() {
    if (this.dirty === this.cacheDirty || !this.graphicsData.length) {
      return false;
    }
    for (let i = 0, l = this.graphicsData.length; i < l; i++) {
      const data = this.graphicsData[i];
      const fill = data.fillStyle;
      const line = data.lineStyle;
      if (fill && !fill.texture.baseTexture.valid)
        return false;
      if (line && !line.texture.baseTexture.valid)
        return false;
    }
    return true;
  }
  packBatches() {
    this.batchDirty++;
    this.uvsFloat32 = new Float32Array(this.uvs);
    const batches = this.batches;
    for (let i = 0, l = batches.length; i < l; i++) {
      const batch = batches[i];
      for (let j = 0; j < batch.size; j++) {
        const index = batch.start + j;
        this.indicesUint16[index] = this.indicesUint16[index] - batch.attribStart;
      }
    }
  }
  isBatchable() {
    if (this.points.length > 65535 * 2) {
      return false;
    }
    const batches = this.batches;
    for (let i = 0; i < batches.length; i++) {
      if (batches[i].style.native) {
        return false;
      }
    }
    return this.points.length < _GraphicsGeometry.BATCHABLE_SIZE * 2;
  }
  buildDrawCalls() {
    let TICK = ++BaseTexture._globalBatch;
    for (let i = 0; i < this.drawCalls.length; i++) {
      this.drawCalls[i].texArray.clear();
      DRAW_CALL_POOL.push(this.drawCalls[i]);
    }
    this.drawCalls.length = 0;
    const colors = this.colors;
    const textureIds = this.textureIds;
    let currentGroup = DRAW_CALL_POOL.pop();
    if (!currentGroup) {
      currentGroup = new BatchDrawCall();
      currentGroup.texArray = new BatchTextureArray();
    }
    currentGroup.texArray.count = 0;
    currentGroup.start = 0;
    currentGroup.size = 0;
    currentGroup.type = DRAW_MODES.TRIANGLES;
    let textureCount = 0;
    let currentTexture = null;
    let textureId = 0;
    let native = false;
    let drawMode = DRAW_MODES.TRIANGLES;
    let index = 0;
    this.drawCalls.push(currentGroup);
    for (let i = 0; i < this.batches.length; i++) {
      const data = this.batches[i];
      const maxTextures = 8;
      const style = data.style;
      const nextTexture = style.texture.baseTexture;
      if (native !== !!style.native) {
        native = !!style.native;
        drawMode = native ? DRAW_MODES.LINES : DRAW_MODES.TRIANGLES;
        currentTexture = null;
        textureCount = maxTextures;
        TICK++;
      }
      if (currentTexture !== nextTexture) {
        currentTexture = nextTexture;
        if (nextTexture._batchEnabled !== TICK) {
          if (textureCount === maxTextures) {
            TICK++;
            textureCount = 0;
            if (currentGroup.size > 0) {
              currentGroup = DRAW_CALL_POOL.pop();
              if (!currentGroup) {
                currentGroup = new BatchDrawCall();
                currentGroup.texArray = new BatchTextureArray();
              }
              this.drawCalls.push(currentGroup);
            }
            currentGroup.start = index;
            currentGroup.size = 0;
            currentGroup.texArray.count = 0;
            currentGroup.type = drawMode;
          }
          nextTexture.touched = 1;
          nextTexture._batchEnabled = TICK;
          nextTexture._batchLocation = textureCount;
          nextTexture.wrapMode = WRAP_MODES.REPEAT;
          currentGroup.texArray.elements[currentGroup.texArray.count++] = nextTexture;
          textureCount++;
        }
      }
      currentGroup.size += data.size;
      index += data.size;
      textureId = nextTexture._batchLocation;
      this.addColors(colors, style.color, style.alpha, data.attribSize, data.attribStart);
      this.addTextureIds(textureIds, textureId, data.attribSize, data.attribStart);
    }
    BaseTexture._globalBatch = TICK;
    this.packAttributes();
  }
  packAttributes() {
    const verts = this.points;
    const uvs = this.uvs;
    const colors = this.colors;
    const textureIds = this.textureIds;
    const glPoints = new ArrayBuffer(verts.length * 3 * 4);
    const f32 = new Float32Array(glPoints);
    const u32 = new Uint32Array(glPoints);
    let p = 0;
    for (let i = 0; i < verts.length / 2; i++) {
      f32[p++] = verts[i * 2];
      f32[p++] = verts[i * 2 + 1];
      f32[p++] = uvs[i * 2];
      f32[p++] = uvs[i * 2 + 1];
      u32[p++] = colors[i];
      f32[p++] = textureIds[i];
    }
    this._buffer.update(glPoints);
    this._indexBuffer.update(this.indicesUint16);
  }
  processFill(data) {
    if (data.holes.length) {
      buildPoly.triangulate(data, this);
    } else {
      const command = FILL_COMMANDS[data.type];
      command.triangulate(data, this);
    }
  }
  processLine(data) {
    buildLine(data, this);
    for (let i = 0; i < data.holes.length; i++) {
      buildLine(data.holes[i], this);
    }
  }
  processHoles(holes) {
    for (let i = 0; i < holes.length; i++) {
      const hole = holes[i];
      const command = FILL_COMMANDS[hole.type];
      command.build(hole);
      if (hole.matrix) {
        this.transformPoints(hole.points, hole.matrix);
      }
    }
  }
  calculateBounds() {
    const bounds = this._bounds;
    bounds.clear();
    bounds.addVertexData(this.points, 0, this.points.length);
    bounds.pad(this.boundsPadding, this.boundsPadding);
  }
  transformPoints(points, matrix) {
    for (let i = 0; i < points.length / 2; i++) {
      const x = points[i * 2];
      const y = points[i * 2 + 1];
      points[i * 2] = matrix.a * x + matrix.c * y + matrix.tx;
      points[i * 2 + 1] = matrix.b * x + matrix.d * y + matrix.ty;
    }
  }
  addColors(colors, color, alpha, size, offset = 0) {
    const bgr = Color.shared.setValue(color).toLittleEndianNumber();
    const result = Color.shared.setValue(bgr).toPremultiplied(alpha);
    colors.length = Math.max(colors.length, offset + size);
    for (let i = 0; i < size; i++) {
      colors[offset + i] = result;
    }
  }
  addTextureIds(textureIds, id, size, offset = 0) {
    textureIds.length = Math.max(textureIds.length, offset + size);
    for (let i = 0; i < size; i++) {
      textureIds[offset + i] = id;
    }
  }
  addUvs(verts, uvs, texture, start, size, matrix = null) {
    let index = 0;
    const uvsStart = uvs.length;
    const frame = texture.frame;
    while (index < size) {
      let x = verts[(start + index) * 2];
      let y = verts[(start + index) * 2 + 1];
      if (matrix) {
        const nx = matrix.a * x + matrix.c * y + matrix.tx;
        y = matrix.b * x + matrix.d * y + matrix.ty;
        x = nx;
      }
      index++;
      uvs.push(x / frame.width, y / frame.height);
    }
    const baseTexture = texture.baseTexture;
    if (frame.width < baseTexture.width || frame.height < baseTexture.height) {
      this.adjustUvs(uvs, texture, uvsStart, size);
    }
  }
  adjustUvs(uvs, texture, start, size) {
    const baseTexture = texture.baseTexture;
    const eps = 1e-6;
    const finish = start + size * 2;
    const frame = texture.frame;
    const scaleX = frame.width / baseTexture.width;
    const scaleY = frame.height / baseTexture.height;
    let offsetX = frame.x / frame.width;
    let offsetY = frame.y / frame.height;
    let minX = Math.floor(uvs[start] + eps);
    let minY = Math.floor(uvs[start + 1] + eps);
    for (let i = start + 2; i < finish; i += 2) {
      minX = Math.min(minX, Math.floor(uvs[i] + eps));
      minY = Math.min(minY, Math.floor(uvs[i + 1] + eps));
    }
    offsetX -= minX;
    offsetY -= minY;
    for (let i = start; i < finish; i += 2) {
      uvs[i] = (uvs[i] + offsetX) * scaleX;
      uvs[i + 1] = (uvs[i + 1] + offsetY) * scaleY;
    }
  }
};
let GraphicsGeometry = _GraphicsGeometry;
GraphicsGeometry.BATCHABLE_SIZE = 100;

class FillStyle {
  constructor() {
    this.color = 16777215;
    this.alpha = 1;
    this.texture = Texture.WHITE;
    this.matrix = null;
    this.visible = false;
    this.reset();
  }
  clone() {
    const obj = new FillStyle();
    obj.color = this.color;
    obj.alpha = this.alpha;
    obj.texture = this.texture;
    obj.matrix = this.matrix;
    obj.visible = this.visible;
    return obj;
  }
  reset() {
    this.color = 16777215;
    this.alpha = 1;
    this.texture = Texture.WHITE;
    this.matrix = null;
    this.visible = false;
  }
  destroy() {
    this.texture = null;
    this.matrix = null;
  }
}

class LineStyle extends FillStyle {
  constructor() {
    super(...arguments);
    this.width = 0;
    this.alignment = 0.5;
    this.native = false;
    this.cap = LINE_CAP.BUTT;
    this.join = LINE_JOIN.MITER;
    this.miterLimit = 10;
  }
  clone() {
    const obj = new LineStyle();
    obj.color = this.color;
    obj.alpha = this.alpha;
    obj.texture = this.texture;
    obj.matrix = this.matrix;
    obj.visible = this.visible;
    obj.width = this.width;
    obj.alignment = this.alignment;
    obj.native = this.native;
    obj.cap = this.cap;
    obj.join = this.join;
    obj.miterLimit = this.miterLimit;
    return obj;
  }
  reset() {
    super.reset();
    this.color = 0;
    this.alignment = 0.5;
    this.width = 0;
    this.native = false;
  }
}

const DEFAULT_SHADERS = {};
const _Graphics = class extends Container {
  constructor(geometry = null) {
    super();
    this.shader = null;
    this.pluginName = "batch";
    this.currentPath = null;
    this.batches = [];
    this.batchTint = -1;
    this.batchDirty = -1;
    this.vertexData = null;
    this._fillStyle = new FillStyle();
    this._lineStyle = new LineStyle();
    this._matrix = null;
    this._holeMode = false;
    this.state = State.for2d();
    this._geometry = geometry || new GraphicsGeometry();
    this._geometry.refCount++;
    this._transformID = -1;
    this._tintColor = new Color(16777215);
    this.blendMode = BLEND_MODES.NORMAL;
  }
  get geometry() {
    return this._geometry;
  }
  clone() {
    this.finishPoly();
    return new _Graphics(this._geometry);
  }
  set blendMode(value) {
    this.state.blendMode = value;
  }
  get blendMode() {
    return this.state.blendMode;
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(value) {
    this._tintColor.setValue(value);
  }
  get fill() {
    return this._fillStyle;
  }
  get line() {
    return this._lineStyle;
  }
  lineStyle(options = null, color = 0, alpha, alignment = 0.5, native = false) {
    if (typeof options === "number") {
      options = { width: options, color, alpha, alignment, native };
    }
    return this.lineTextureStyle(options);
  }
  lineTextureStyle(options) {
    const defaultLineStyleOptions = {
      width: 0,
      texture: Texture.WHITE,
      color: options?.texture ? 16777215 : 0,
      matrix: null,
      alignment: 0.5,
      native: false,
      cap: LINE_CAP.BUTT,
      join: LINE_JOIN.MITER,
      miterLimit: 10
    };
    options = Object.assign(defaultLineStyleOptions, options);
    this.normalizeColor(options);
    if (this.currentPath) {
      this.startPoly();
    }
    const visible = options.width > 0 && options.alpha > 0;
    if (!visible) {
      this._lineStyle.reset();
    } else {
      if (options.matrix) {
        options.matrix = options.matrix.clone();
        options.matrix.invert();
      }
      Object.assign(this._lineStyle, { visible }, options);
    }
    return this;
  }
  startPoly() {
    if (this.currentPath) {
      const points = this.currentPath.points;
      const len = this.currentPath.points.length;
      if (len > 2) {
        this.drawShape(this.currentPath);
        this.currentPath = new Polygon();
        this.currentPath.closeStroke = false;
        this.currentPath.points.push(points[len - 2], points[len - 1]);
      }
    } else {
      this.currentPath = new Polygon();
      this.currentPath.closeStroke = false;
    }
  }
  finishPoly() {
    if (this.currentPath) {
      if (this.currentPath.points.length > 2) {
        this.drawShape(this.currentPath);
        this.currentPath = null;
      } else {
        this.currentPath.points.length = 0;
      }
    }
  }
  moveTo(x, y) {
    this.startPoly();
    this.currentPath.points[0] = x;
    this.currentPath.points[1] = y;
    return this;
  }
  lineTo(x, y) {
    if (!this.currentPath) {
      this.moveTo(0, 0);
    }
    const points = this.currentPath.points;
    const fromX = points[points.length - 2];
    const fromY = points[points.length - 1];
    if (fromX !== x || fromY !== y) {
      points.push(x, y);
    }
    return this;
  }
  _initCurve(x = 0, y = 0) {
    if (this.currentPath) {
      if (this.currentPath.points.length === 0) {
        this.currentPath.points = [x, y];
      }
    } else {
      this.moveTo(x, y);
    }
  }
  quadraticCurveTo(cpX, cpY, toX, toY) {
    this._initCurve();
    const points = this.currentPath.points;
    if (points.length === 0) {
      this.moveTo(0, 0);
    }
    QuadraticUtils.curveTo(cpX, cpY, toX, toY, points);
    return this;
  }
  bezierCurveTo(cpX, cpY, cpX2, cpY2, toX, toY) {
    this._initCurve();
    BezierUtils.curveTo(cpX, cpY, cpX2, cpY2, toX, toY, this.currentPath.points);
    return this;
  }
  arcTo(x1, y1, x2, y2, radius) {
    this._initCurve(x1, y1);
    const points = this.currentPath.points;
    const result = ArcUtils.curveTo(x1, y1, x2, y2, radius, points);
    if (result) {
      const { cx, cy, radius: radius2, startAngle, endAngle, anticlockwise } = result;
      this.arc(cx, cy, radius2, startAngle, endAngle, anticlockwise);
    }
    return this;
  }
  arc(cx, cy, radius, startAngle, endAngle, anticlockwise = false) {
    if (startAngle === endAngle) {
      return this;
    }
    if (!anticlockwise && endAngle <= startAngle) {
      endAngle += PI_2;
    } else if (anticlockwise && startAngle <= endAngle) {
      startAngle += PI_2;
    }
    const sweep = endAngle - startAngle;
    if (sweep === 0) {
      return this;
    }
    const startX = cx + Math.cos(startAngle) * radius;
    const startY = cy + Math.sin(startAngle) * radius;
    const eps = this._geometry.closePointEps;
    let points = this.currentPath ? this.currentPath.points : null;
    if (points) {
      const xDiff = Math.abs(points[points.length - 2] - startX);
      const yDiff = Math.abs(points[points.length - 1] - startY);
      if (xDiff < eps && yDiff < eps) ; else {
        points.push(startX, startY);
      }
    } else {
      this.moveTo(startX, startY);
      points = this.currentPath.points;
    }
    ArcUtils.arc(startX, startY, cx, cy, radius, startAngle, endAngle, anticlockwise, points);
    return this;
  }
  beginFill(color = 0, alpha) {
    return this.beginTextureFill({ texture: Texture.WHITE, color, alpha });
  }
  normalizeColor(options) {
    const temp = Color.shared.setValue(options.color ?? 0);
    options.color = temp.toNumber();
    options.alpha ?? (options.alpha = temp.alpha);
  }
  beginTextureFill(options) {
    const defaultOptions = {
      texture: Texture.WHITE,
      color: 16777215,
      matrix: null
    };
    options = Object.assign(defaultOptions, options);
    this.normalizeColor(options);
    if (this.currentPath) {
      this.startPoly();
    }
    const visible = options.alpha > 0;
    if (!visible) {
      this._fillStyle.reset();
    } else {
      if (options.matrix) {
        options.matrix = options.matrix.clone();
        options.matrix.invert();
      }
      Object.assign(this._fillStyle, { visible }, options);
    }
    return this;
  }
  endFill() {
    this.finishPoly();
    this._fillStyle.reset();
    return this;
  }
  drawRect(x, y, width, height) {
    return this.drawShape(new Rectangle(x, y, width, height));
  }
  drawRoundedRect(x, y, width, height, radius) {
    return this.drawShape(new RoundedRectangle(x, y, width, height, radius));
  }
  drawCircle(x, y, radius) {
    return this.drawShape(new Circle(x, y, radius));
  }
  drawEllipse(x, y, width, height) {
    return this.drawShape(new Ellipse(x, y, width, height));
  }
  drawPolygon(...path) {
    let points;
    let closeStroke = true;
    const poly = path[0];
    if (poly.points) {
      closeStroke = poly.closeStroke;
      points = poly.points;
    } else if (Array.isArray(path[0])) {
      points = path[0];
    } else {
      points = path;
    }
    const shape = new Polygon(points);
    shape.closeStroke = closeStroke;
    this.drawShape(shape);
    return this;
  }
  drawShape(shape) {
    if (!this._holeMode) {
      this._geometry.drawShape(shape, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix);
    } else {
      this._geometry.drawHole(shape, this._matrix);
    }
    return this;
  }
  clear() {
    this._geometry.clear();
    this._lineStyle.reset();
    this._fillStyle.reset();
    this._boundsID++;
    this._matrix = null;
    this._holeMode = false;
    this.currentPath = null;
    return this;
  }
  isFastRect() {
    const data = this._geometry.graphicsData;
    return data.length === 1 && data[0].shape.type === SHAPES.RECT && !data[0].matrix && !data[0].holes.length && !(data[0].lineStyle.visible && data[0].lineStyle.width);
  }
  _render(renderer) {
    this.finishPoly();
    const geometry = this._geometry;
    geometry.updateBatches();
    if (geometry.batchable) {
      if (this.batchDirty !== geometry.batchDirty) {
        this._populateBatches();
      }
      this._renderBatched(renderer);
    } else {
      renderer.batch.flush();
      this._renderDirect(renderer);
    }
  }
  _populateBatches() {
    const geometry = this._geometry;
    const blendMode = this.blendMode;
    const len = geometry.batches.length;
    this.batchTint = -1;
    this._transformID = -1;
    this.batchDirty = geometry.batchDirty;
    this.batches.length = len;
    this.vertexData = new Float32Array(geometry.points);
    for (let i = 0; i < len; i++) {
      const gI = geometry.batches[i];
      const color = gI.style.color;
      const vertexData = new Float32Array(this.vertexData.buffer, gI.attribStart * 4 * 2, gI.attribSize * 2);
      const uvs = new Float32Array(geometry.uvsFloat32.buffer, gI.attribStart * 4 * 2, gI.attribSize * 2);
      const indices = new Uint16Array(geometry.indicesUint16.buffer, gI.start * 2, gI.size);
      const batch = {
        vertexData,
        blendMode,
        indices,
        uvs,
        _batchRGB: Color.shared.setValue(color).toRgbArray(),
        _tintRGB: color,
        _texture: gI.style.texture,
        alpha: gI.style.alpha,
        worldAlpha: 1
      };
      this.batches[i] = batch;
    }
  }
  _renderBatched(renderer) {
    if (!this.batches.length) {
      return;
    }
    renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]);
    this.calculateVertices();
    this.calculateTints();
    for (let i = 0, l = this.batches.length; i < l; i++) {
      const batch = this.batches[i];
      batch.worldAlpha = this.worldAlpha * batch.alpha;
      renderer.plugins[this.pluginName].render(batch);
    }
  }
  _renderDirect(renderer) {
    const shader = this._resolveDirectShader(renderer);
    const geometry = this._geometry;
    const worldAlpha = this.worldAlpha;
    const uniforms = shader.uniforms;
    const drawCalls = geometry.drawCalls;
    uniforms.translationMatrix = this.transform.worldTransform;
    Color.shared.setValue(this._tintColor).premultiply(worldAlpha).toArray(uniforms.tint);
    renderer.shader.bind(shader);
    renderer.geometry.bind(geometry, shader);
    renderer.state.set(this.state);
    for (let i = 0, l = drawCalls.length; i < l; i++) {
      this._renderDrawCallDirect(renderer, geometry.drawCalls[i]);
    }
  }
  _renderDrawCallDirect(renderer, drawCall) {
    const { texArray, type, size, start } = drawCall;
    const groupTextureCount = texArray.count;
    for (let j = 0; j < groupTextureCount; j++) {
      renderer.texture.bind(texArray.elements[j], j);
    }
    renderer.geometry.draw(type, size, start);
  }
  _resolveDirectShader(renderer) {
    let shader = this.shader;
    const pluginName = this.pluginName;
    if (!shader) {
      if (!DEFAULT_SHADERS[pluginName]) {
        const { maxTextures } = renderer.plugins[pluginName];
        const sampleValues = new Int32Array(maxTextures);
        for (let i = 0; i < maxTextures; i++) {
          sampleValues[i] = i;
        }
        const uniforms = {
          tint: new Float32Array([1, 1, 1, 1]),
          translationMatrix: new Matrix(),
          default: UniformGroup.from({ uSamplers: sampleValues }, true)
        };
        const program = renderer.plugins[pluginName]._shader.program;
        DEFAULT_SHADERS[pluginName] = new Shader(program, uniforms);
      }
      shader = DEFAULT_SHADERS[pluginName];
    }
    return shader;
  }
  _calculateBounds() {
    this.finishPoly();
    const geometry = this._geometry;
    if (!geometry.graphicsData.length) {
      return;
    }
    const { minX, minY, maxX, maxY } = geometry.bounds;
    this._bounds.addFrame(this.transform, minX, minY, maxX, maxY);
  }
  containsPoint(point) {
    this.worldTransform.applyInverse(point, _Graphics._TEMP_POINT);
    return this._geometry.containsPoint(_Graphics._TEMP_POINT);
  }
  calculateTints() {
    if (this.batchTint !== this.tint) {
      this.batchTint = this._tintColor.toNumber();
      for (let i = 0; i < this.batches.length; i++) {
        const batch = this.batches[i];
        batch._tintRGB = Color.shared.setValue(this._tintColor).multiply(batch._batchRGB).toLittleEndianNumber();
      }
    }
  }
  calculateVertices() {
    const wtID = this.transform._worldID;
    if (this._transformID === wtID) {
      return;
    }
    this._transformID = wtID;
    const wt = this.transform.worldTransform;
    const a = wt.a;
    const b = wt.b;
    const c = wt.c;
    const d = wt.d;
    const tx = wt.tx;
    const ty = wt.ty;
    const data = this._geometry.points;
    const vertexData = this.vertexData;
    let count = 0;
    for (let i = 0; i < data.length; i += 2) {
      const x = data[i];
      const y = data[i + 1];
      vertexData[count++] = a * x + c * y + tx;
      vertexData[count++] = d * y + b * x + ty;
    }
  }
  closePath() {
    const currentPath = this.currentPath;
    if (currentPath) {
      currentPath.closeStroke = true;
      this.finishPoly();
    }
    return this;
  }
  setMatrix(matrix) {
    this._matrix = matrix;
    return this;
  }
  beginHole() {
    this.finishPoly();
    this._holeMode = true;
    return this;
  }
  endHole() {
    this.finishPoly();
    this._holeMode = false;
    return this;
  }
  destroy(options) {
    this._geometry.refCount--;
    if (this._geometry.refCount === 0) {
      this._geometry.dispose();
    }
    this._matrix = null;
    this.currentPath = null;
    this._lineStyle.destroy();
    this._lineStyle = null;
    this._fillStyle.destroy();
    this._fillStyle = null;
    this._geometry = null;
    this.shader = null;
    this.vertexData = null;
    this.batches.length = 0;
    this.batches = null;
    super.destroy(options);
  }
};
let Graphics = _Graphics;
Graphics.curves = curves;
Graphics._TEMP_POINT = new Point();

// Fix for issue with pixi throwing an error if there's a global pixi object
// and we try to extend the Graphics module.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var GraphicsObject = window.PIXI ? window.PIXI.Graphics : Graphics;

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
    if (_this.graphicsOptions.radius) _this._body = matterExports.Bodies.circle(_this.graphicsOptions.x, _this.graphicsOptions.y, _this.graphicsOptions.width, _this.physicsOptions);else _this._body = matterExports.Bodies.rectangle(_this.graphicsOptions.x + halfWidth, _this.graphicsOptions.y + halfHeight, _this.graphicsOptions.width, _this.graphicsOptions.height, _this.physicsOptions);
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

export { PhysicsGraphics, PhysicsSprite, PixiMatter };

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


/**
 * Angular UTILS
 */
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utilsRegistr = require("./utils/registr");

/**
 * Angular MODULES
 */

var _applicationServicesImmovablesService = require("./application/services/immovables.service");

var _applicationServicesCacheService = require("./application/services/cache.service");

var _applicationConfigAppViewConfig = require("./application/config/app.view.config");

var _applicationConfigAppViewConfig2 = _interopRequireDefault(_applicationConfigAppViewConfig);

var _applicationControllersAppController = require("./application/controllers/app.controller");

var _applicationDirectivesSelectorDirective = require("./application/directives/selector.directive");

var _applicationServicesDataServiceJs = require("./application/services/data.service.js");

var _applicationServicesComponentService = require("./application/services/component.service");

var _applicationServicesLocationService = require("./application/services/location.service");

var _applicationDirectivesFilterDirective = require("./application/directives/filter.directive");

var _applicationDirectivesSliderDirective = require("./application/directives/slider.directive");

var _applicationDirectivesToggleDirective = require("./application/directives/toggle.directive");

var _applicationControllersMapController = require("./application/controllers/map.controller");

var _applicationServicesMapService = require("./application/services/map.service");

var _applicationServicesMapMarkerService = require("./application/services/map.marker.service");

var _applicationServicesMapPopupService = require("./application/services/map.popup.service");

var _applicationFiltersCutFilterJs = require("./application/filters/cut.filter.js");

var _applicationDirectivesFavoriteDirectiveJs = require("./application/directives/favorite.directive.js");

var _applicationDirectivesPopupDirectiveJs = require("./application/directives/popup.directive.js");

var _applicationServicesFavoriteServiceJs = require("./application/services/favorite.service.js");

/**
 * Suite plugins and modules
 */

var _modulesFavoriteJs = require("./modules/favorite.js");

var _modulesGalleryJs = require("./modules/gallery.js");

var _modulesAppMenuJs = require("./modules/app.menu.js");

var _modulesAppBackgroundJs = require("./modules/app.background.js");

var _modulesPopupJs = require("./modules/popup.js");

var _modulesModalJs = require("./modules/modal.js");

var _modulesHeaderJs = require("./modules/header.js");

var _modulesSelectorCityJs = require("./modules/selector.city.js");

var _modulesSelectorJs = require("./modules/selector.js");

var _modulesInputPhoneJs = require("./modules/input.phone.js");

//load es6-7 features
require("babelify/polyfill");

var property = require("./property/propertyCtrl");
var onLoad = require("./load");

/**
 * Init suite plugins and modules
 * after page load
 */
$(function () {
    _modulesGalleryJs.gallery.init();
    _modulesFavoriteJs.favorite.init();
    _modulesAppMenuJs.menu.init();
    _modulesAppBackgroundJs.background.init();
    _modulesPopupJs.popup.init();
    _modulesModalJs.modal.init();
    _modulesHeaderJs.header.init();
    _modulesSelectorCityJs.citySelector.init();
    _modulesSelectorJs.selector.init();
    _modulesInputPhoneJs.inputPhone.init(".phone-mask");

    onLoad();
});

angular.module("app", ["ngRoute", "floatThead"]).constant("appViewConfig", _applicationConfigAppViewConfig2["default"]).filter("cut", function () {
    return _applicationFiltersCutFilterJs.cut;
});

(0, _utilsRegistr.register)("app").service("cacheService", _applicationServicesCacheService.CacheService).service("immovablesService", _applicationServicesImmovablesService.ImmovablesService).service("componentService", _applicationServicesComponentService.ComponentService).service("favoriteService", _applicationServicesFavoriteServiceJs.FavoriteService).service("locationService", _applicationServicesLocationService.LocationService).service("dataService", _applicationServicesDataServiceJs.DataService).service("mapService", _applicationServicesMapService.MapService).service("mapPopupService", _applicationServicesMapPopupService.MapPopupService).service("mapMarkerService", _applicationServicesMapMarkerService.MapMarkerService).directive("selector", _applicationDirectivesSelectorDirective.SelectorDirective).directive("filter", _applicationDirectivesFilterDirective.FilterDirective).directive("slider", _applicationDirectivesSliderDirective.SliderDirective).directive("toggle", _applicationDirectivesToggleDirective.ToggleDirective).directive("popup", _applicationDirectivesPopupDirectiveJs.PopupDirective).directive("favorite", _applicationDirectivesFavoriteDirectiveJs.FavoriteDirective).controller("MapController", _applicationControllersMapController.MapController).controller("AppController", _applicationControllersAppController.AppController);

angular.module("property", [property.name]);

$(".search__table-line").click(function () {
    alert("addwadafaewgsehes");
});

$(".search_table").click(function () {
    alert("2141412");
});

},{"./application/config/app.view.config":90,"./application/controllers/app.controller":91,"./application/controllers/map.controller":92,"./application/directives/favorite.directive.js":93,"./application/directives/filter.directive":94,"./application/directives/popup.directive.js":95,"./application/directives/selector.directive":96,"./application/directives/slider.directive":97,"./application/directives/toggle.directive":98,"./application/filters/cut.filter.js":99,"./application/services/cache.service":100,"./application/services/component.service":101,"./application/services/data.service.js":102,"./application/services/favorite.service.js":103,"./application/services/immovables.service":104,"./application/services/location.service":105,"./application/services/map.marker.service":106,"./application/services/map.popup.service":107,"./application/services/map.service":108,"./load":109,"./modules/app.background.js":110,"./modules/app.menu.js":111,"./modules/favorite.js":112,"./modules/gallery.js":113,"./modules/header.js":114,"./modules/input.phone.js":115,"./modules/modal.js":116,"./modules/popup.js":117,"./modules/selector.city.js":118,"./modules/selector.js":119,"./property/propertyCtrl":120,"./utils/registr":121,"babelify/polyfill":89}],2:[function(require,module,exports){
(function (global){
"use strict";

require("core-js/shim");

require("regenerator/runtime");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel/polyfill is allowed");
}
global._babelPolyfill = true;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"core-js/shim":86,"regenerator/runtime":87}],3:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var $ = require('./$');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = $.toObject($this)
      , length = $.toLength(O.length)
      , index  = $.toIndex(fromIndex, length)
      , value;
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index;
    } return !IS_INCLUDES && -1;
  };
};
},{"./$":23}],4:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var $   = require('./$')
  , ctx = require('./$.ctx');
module.exports = function(TYPE){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
  return function($this, callbackfn, that){
    var O      = Object($.assertDefined($this))
      , self   = $.ES5Object(O)
      , f      = ctx(callbackfn, that, 3)
      , length = $.toLength(self.length)
      , index  = 0
      , result = IS_MAP ? Array(length) : IS_FILTER ? [] : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./$":23,"./$.ctx":12}],5:[function(require,module,exports){
var $ = require('./$');
function assert(condition, msg1, msg2){
  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
}
assert.def = $.assertDefined;
assert.fn = function(it){
  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
  return it;
};
assert.obj = function(it){
  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
assert.inst = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
module.exports = assert;
},{"./$":23}],6:[function(require,module,exports){
var $        = require('./$')
  , enumKeys = require('./$.enum-keys');
// 19.1.2.1 Object.assign(target, source, ...)
/* eslint-disable no-unused-vars */
module.exports = Object.assign || function assign(target, source){
/* eslint-enable no-unused-vars */
  var T = Object($.assertDefined(target))
    , l = arguments.length
    , i = 1;
  while(l > i){
    var S      = $.ES5Object(arguments[i++])
      , keys   = enumKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)T[key = keys[j++]] = S[key];
  }
  return T;
};
},{"./$":23,"./$.enum-keys":15}],7:[function(require,module,exports){
var $        = require('./$')
  , TAG      = require('./$.wks')('toStringTag')
  , toString = {}.toString;
function cof(it){
  return toString.call(it).slice(8, -1);
}
cof.classof = function(it){
  var O, T;
  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
};
cof.set = function(it, tag, stat){
  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
};
module.exports = cof;
},{"./$":23,"./$.wks":37}],8:[function(require,module,exports){
'use strict';
var $        = require('./$')
  , ctx      = require('./$.ctx')
  , safe     = require('./$.uid').safe
  , assert   = require('./$.assert')
  , forOf    = require('./$.for-of')
  , step     = require('./$.iter').step
  , has      = $.has
  , set      = $.set
  , isObject = $.isObject
  , hide     = $.hide
  , isFrozen = Object.isFrozen || $.core.Object.isFrozen
  , ID       = safe('id')
  , O1       = safe('O1')
  , LAST     = safe('last')
  , FIRST    = safe('first')
  , ITER     = safe('iter')
  , SIZE     = $.DESC ? safe('size') : 'size'
  , id       = 0;

function fastKey(it, create){
  // return primitive with prefix
  if(!isObject(it))return (typeof it == 'string' ? 'S' : 'P') + it;
  // can't set id to frozen object
  if(isFrozen(it))return 'F';
  if(!has(it, ID)){
    // not necessary to add id
    if(!create)return 'E';
    // add missing object id
    hide(it, ID, ++id);
  // return object id with prefix
  } return 'O' + it[ID];
}

function getEntry(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index != 'F')return that[O1][index];
  // frozen object case
  for(entry = that[FIRST]; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
}

module.exports = {
  getConstructor: function(NAME, IS_MAP, ADDER){
    function C(){
      var that     = assert.inst(this, C, NAME)
        , iterable = arguments[0];
      set(that, O1, $.create(null));
      set(that, SIZE, 0);
      set(that, LAST, undefined);
      set(that, FIRST, undefined);
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    }
    $.mix(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that[FIRST] = that[LAST] = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that[O1][entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that[FIRST] == entry)that[FIRST] = next;
          if(that[LAST] == entry)that[LAST] = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        var f = ctx(callbackfn, arguments[1], 3)
          , entry;
        while(entry = entry ? entry.n : this[FIRST]){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if($.DESC)$.setDesc(C.prototype, 'size', {
      get: function(){
        return assert.def(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that[LAST] = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that[LAST],          // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that[FIRST])that[FIRST] = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index != 'F')that[O1][index] = entry;
    } return that;
  },
  getEntry: getEntry,
  // add .keys, .values, .entries, [@@iterator]
  // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
  setIter: function(C, NAME, IS_MAP){
    require('./$.iter-define')(C, NAME, function(iterated, kind){
      set(this, ITER, {o: iterated, k: kind});
    }, function(){
      var iter  = this[ITER]
        , kind  = iter.k
        , entry = iter.l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])){
        // or finish the iteration
        iter.o = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
  }
};
},{"./$":23,"./$.assert":5,"./$.ctx":12,"./$.for-of":16,"./$.iter":22,"./$.iter-define":20,"./$.uid":35}],9:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $def  = require('./$.def')
  , forOf = require('./$.for-of');
module.exports = function(NAME){
  $def($def.P, NAME, {
    toJSON: function toJSON(){
      var arr = [];
      forOf(this, false, arr.push, arr);
      return arr;
    }
  });
};
},{"./$.def":13,"./$.for-of":16}],10:[function(require,module,exports){
'use strict';
var $         = require('./$')
  , safe      = require('./$.uid').safe
  , assert    = require('./$.assert')
  , forOf     = require('./$.for-of')
  , _has      = $.has
  , isObject  = $.isObject
  , hide      = $.hide
  , isFrozen  = Object.isFrozen || $.core.Object.isFrozen
  , id        = 0
  , ID        = safe('id')
  , WEAK      = safe('weak')
  , LEAK      = safe('leak')
  , method    = require('./$.array-methods')
  , find      = method(5)
  , findIndex = method(6);
function findFrozen(store, key){
  return find(store.array, function(it){
    return it[0] === key;
  });
}
// fallback for frozen keys
function leakStore(that){
  return that[LEAK] || hide(that, LEAK, {
    array: [],
    get: function(key){
      var entry = findFrozen(this, key);
      if(entry)return entry[1];
    },
    has: function(key){
      return !!findFrozen(this, key);
    },
    set: function(key, value){
      var entry = findFrozen(this, key);
      if(entry)entry[1] = value;
      else this.array.push([key, value]);
    },
    'delete': function(key){
      var index = findIndex(this.array, function(it){
        return it[0] === key;
      });
      if(~index)this.array.splice(index, 1);
      return !!~index;
    }
  })[LEAK];
}

module.exports = {
  getConstructor: function(NAME, IS_MAP, ADDER){
    function C(){
      $.set(assert.inst(this, C, NAME), ID, id++);
      var iterable = arguments[0];
      if(iterable != undefined)forOf(iterable, IS_MAP, this[ADDER], this);
    }
    $.mix(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        if(isFrozen(key))return leakStore(this)['delete'](key);
        return _has(key, WEAK) && _has(key[WEAK], this[ID]) && delete key[WEAK][this[ID]];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        if(isFrozen(key))return leakStore(this).has(key);
        return _has(key, WEAK) && _has(key[WEAK], this[ID]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    if(isFrozen(assert.obj(key))){
      leakStore(that).set(key, value);
    } else {
      _has(key, WEAK) || hide(key, WEAK, {});
      key[WEAK][that[ID]] = value;
    } return that;
  },
  leakStore: leakStore,
  WEAK: WEAK,
  ID: ID
};
},{"./$":23,"./$.array-methods":4,"./$.assert":5,"./$.for-of":16,"./$.uid":35}],11:[function(require,module,exports){
'use strict';
var $     = require('./$')
  , $def  = require('./$.def')
  , BUGGY = require('./$.iter').BUGGY
  , forOf = require('./$.for-of')
  , species = require('./$.species')
  , assertInstance = require('./$.assert').inst;

module.exports = function(NAME, methods, common, IS_MAP, IS_WEAK){
  var Base  = $.g[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  function fixMethod(KEY, CHAIN){
    var method = proto[KEY];
    if($.FW)proto[KEY] = function(a, b){
      var result = method.call(this, a === 0 ? 0 : a, b);
      return CHAIN ? this : result;
    };
  }
  if(!$.isFunction(C) || !(IS_WEAK || !BUGGY && proto.forEach && proto.entries)){
    // create collection constructor
    C = common.getConstructor(NAME, IS_MAP, ADDER);
    $.mix(C.prototype, methods);
  } else {
    var inst  = new C
      , chain = inst[ADDER](IS_WEAK ? {} : -0, 1)
      , buggyZero;
    // wrap for init collections from iterable
    if(!require('./$.iter-detect')(function(iter){ new C(iter); })){ // eslint-disable-line no-new
      C = function(){
        assertInstance(this, C, NAME);
        var that     = new Base
          , iterable = arguments[0];
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      };
      C.prototype = proto;
      if($.FW)proto.constructor = C;
    }
    IS_WEAK || inst.forEach(function(val, key){
      buggyZero = 1 / key === -Infinity;
    });
    // fix converting -0 key to +0
    if(buggyZero){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    // + fix .add & .set for chaining
    if(buggyZero || chain !== inst)fixMethod(ADDER, true);
  }

  require('./$.cof').set(C, NAME);

  O[NAME] = C;
  $def($def.G + $def.W + $def.F * (C != Base), O);
  species(C);
  species($.core[NAME]); // for wrapper

  if(!IS_WEAK)common.setIter(C, NAME, IS_MAP);

  return C;
};
},{"./$":23,"./$.assert":5,"./$.cof":7,"./$.def":13,"./$.for-of":16,"./$.iter":22,"./$.iter-detect":21,"./$.species":29}],12:[function(require,module,exports){
// Optional / simple context binding
var assertFunction = require('./$.assert').fn;
module.exports = function(fn, that, length){
  assertFunction(fn);
  if(~length && that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  } return function(/* ...args */){
      return fn.apply(that, arguments);
    };
};
},{"./$.assert":5}],13:[function(require,module,exports){
var $          = require('./$')
  , global     = $.g
  , core       = $.core
  , isFunction = $.isFunction;
function ctx(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
}
global.core = core;
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
function $def(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {}).prototype
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    if(type & $def.B && own)exp = ctx(out, global);
    else exp = type & $def.P && isFunction(out) ? ctx(Function.call, out) : out;
    // extend global
    if(target && !own){
      if(isGlobal)target[key] = out;
      else delete target[key] && $.hide(target, key, out);
    }
    // export
    if(exports[key] != out)$.hide(exports, key, exp);
  }
}
module.exports = $def;
},{"./$":23}],14:[function(require,module,exports){
var $        = require('./$')
  , document = $.g.document
  , isObject = $.isObject
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$":23}],15:[function(require,module,exports){
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getDesc    = $.getDesc
    , getSymbols = $.getSymbols;
  if(getSymbols)$.each.call(getSymbols(it), function(key){
    if(getDesc(it, key).enumerable)keys.push(key);
  });
  return keys;
};
},{"./$":23}],16:[function(require,module,exports){
var ctx  = require('./$.ctx')
  , get  = require('./$.iter').get
  , call = require('./$.iter-call');
module.exports = function(iterable, entries, fn, that){
  var iterator = get(iterable)
    , f        = ctx(fn, that, entries ? 2 : 1)
    , step;
  while(!(step = iterator.next()).done){
    if(call(iterator, f, step.value, entries) === false){
      return call.close(iterator);
    }
  }
};
},{"./$.ctx":12,"./$.iter":22,"./$.iter-call":19}],17:[function(require,module,exports){
module.exports = function($){
  $.FW   = true;
  $.path = $.g;
  return $;
};
},{}],18:[function(require,module,exports){
// Fast apply
// http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
  } return              fn.apply(that, args);
};
},{}],19:[function(require,module,exports){
var assertObject = require('./$.assert').obj;
function close(iterator){
  var ret = iterator['return'];
  if(ret !== undefined)assertObject(ret.call(iterator));
}
function call(iterator, fn, value, entries){
  try {
    return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
  } catch(e){
    close(iterator);
    throw e;
  }
}
call.close = close;
module.exports = call;
},{"./$.assert":5}],20:[function(require,module,exports){
var $def            = require('./$.def')
  , $               = require('./$')
  , cof             = require('./$.cof')
  , $iter           = require('./$.iter')
  , SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , FF_ITERATOR     = '@@iterator'
  , KEYS            = 'keys'
  , VALUES          = 'values'
  , Iterators       = $iter.Iterators;
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
  $iter.create(Constructor, NAME, next);
  function createMethod(kind){
    function $$(that){
      return new Constructor(that, kind);
    }
    switch(kind){
      case KEYS: return function keys(){ return $$(this); };
      case VALUES: return function values(){ return $$(this); };
    } return function entries(){ return $$(this); };
  }
  var TAG      = NAME + ' Iterator'
    , proto    = Base.prototype
    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , _default = _native || createMethod(DEFAULT)
    , methods, key;
  // Fix native
  if(_native){
    var IteratorPrototype = $.getProto(_default.call(new Base));
    // Set @@toStringTag to native iterators
    cof.set(IteratorPrototype, TAG, true);
    // FF fix
    if($.FW && $.has(proto, FF_ITERATOR))$iter.set(IteratorPrototype, $.that);
  }
  // Define iterator
  if($.FW)$iter.set(proto, _default);
  // Plug for library
  Iterators[NAME] = _default;
  Iterators[TAG]  = $.that;
  if(DEFAULT){
    methods = {
      keys:    IS_SET            ? _default : createMethod(KEYS),
      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
      entries: DEFAULT != VALUES ? _default : createMethod('entries')
    };
    if(FORCE)for(key in methods){
      if(!(key in proto))$.hide(proto, key, methods[key]);
    } else $def($def.P + $def.F * $iter.BUGGY, NAME, methods);
  }
};
},{"./$":23,"./$.cof":7,"./$.def":13,"./$.iter":22,"./$.wks":37}],21:[function(require,module,exports){
var SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , SAFE_CLOSING    = false;
try {
  var riter = [7][SYMBOL_ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }
module.exports = function(exec){
  if(!SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[SYMBOL_ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[SYMBOL_ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":37}],22:[function(require,module,exports){
'use strict';
var $                 = require('./$')
  , cof               = require('./$.cof')
  , assertObject      = require('./$.assert').obj
  , SYMBOL_ITERATOR   = require('./$.wks')('iterator')
  , FF_ITERATOR       = '@@iterator'
  , Iterators         = {}
  , IteratorPrototype = {};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
setIterator(IteratorPrototype, $.that);
function setIterator(O, value){
  $.hide(O, SYMBOL_ITERATOR, value);
  // Add iterator for FF iterator protocol
  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
}

module.exports = {
  // Safari has buggy iterators w/o `next`
  BUGGY: 'keys' in [] && !('next' in [].keys()),
  Iterators: Iterators,
  step: function(done, value){
    return {value: value, done: !!done};
  },
  is: function(it){
    var O      = Object(it)
      , Symbol = $.g.Symbol
      , SYM    = Symbol && Symbol.iterator || FF_ITERATOR;
    return SYM in O || SYMBOL_ITERATOR in O || $.has(Iterators, cof.classof(O));
  },
  get: function(it){
    var Symbol  = $.g.Symbol
      , ext     = it[Symbol && Symbol.iterator || FF_ITERATOR]
      , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[cof.classof(it)];
    return assertObject(getIter.call(it));
  },
  set: setIterator,
  create: function(Constructor, NAME, next, proto){
    Constructor.prototype = $.create(proto || IteratorPrototype, {next: $.desc(1, next)});
    cof.set(Constructor, NAME + ' Iterator');
  }
};
},{"./$":23,"./$.assert":5,"./$.cof":7,"./$.wks":37}],23:[function(require,module,exports){
'use strict';
var global = typeof self != 'undefined' ? self : Function('return this')()
  , core   = {}
  , defineProperty = Object.defineProperty
  , hasOwnProperty = {}.hasOwnProperty
  , ceil  = Math.ceil
  , floor = Math.floor
  , max   = Math.max
  , min   = Math.min;
// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
var DESC = !!function(){
  try {
    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
  } catch(e){ /* empty */ }
}();
var hide = createDefiner(1);
// 7.1.4 ToInteger
function toInteger(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
}
function desc(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
}
function simpleSet(object, key, value){
  object[key] = value;
  return object;
}
function createDefiner(bitmap){
  return DESC ? function(object, key, value){
    return $.setDesc(object, key, desc(bitmap, value));
  } : simpleSet;
}

function isObject(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
}
function isFunction(it){
  return typeof it == 'function';
}
function assertDefined(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
}

var $ = module.exports = require('./$.fw')({
  g: global,
  core: core,
  html: global.document && document.documentElement,
  // http://jsperf.com/core-js-isobject
  isObject:   isObject,
  isFunction: isFunction,
  it: function(it){
    return it;
  },
  that: function(){
    return this;
  },
  // 7.1.4 ToInteger
  toInteger: toInteger,
  // 7.1.15 ToLength
  toLength: function(it){
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  },
  toIndex: function(index, length){
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  },
  has: function(it, key){
    return hasOwnProperty.call(it, key);
  },
  create:     Object.create,
  getProto:   Object.getPrototypeOf,
  DESC:       DESC,
  desc:       desc,
  getDesc:    Object.getOwnPropertyDescriptor,
  setDesc:    defineProperty,
  setDescs:   Object.defineProperties,
  getKeys:    Object.keys,
  getNames:   Object.getOwnPropertyNames,
  getSymbols: Object.getOwnPropertySymbols,
  assertDefined: assertDefined,
  // Dummy, fix for not array-like ES3 string in es5 module
  ES5Object: Object,
  toObject: function(it){
    return $.ES5Object(assertDefined(it));
  },
  hide: hide,
  def: createDefiner(0),
  set: global.Symbol ? simpleSet : hide,
  mix: function(target, src){
    for(var key in src)hide(target, key, src[key]);
    return target;
  },
  each: [].forEach
});
/* eslint-disable no-undef */
if(typeof __e != 'undefined')__e = core;
if(typeof __g != 'undefined')__g = global;
},{"./$.fw":17}],24:[function(require,module,exports){
var $ = require('./$');
module.exports = function(object, el){
  var O      = $.toObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":23}],25:[function(require,module,exports){
var $            = require('./$')
  , assertObject = require('./$.assert').obj;
module.exports = function ownKeys(it){
  assertObject(it);
  var keys       = $.getNames(it)
    , getSymbols = $.getSymbols;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};
},{"./$":23,"./$.assert":5}],26:[function(require,module,exports){
'use strict';
var $      = require('./$')
  , invoke = require('./$.invoke')
  , assertFunction = require('./$.assert').fn;
module.exports = function(/* ...pargs */){
  var fn     = assertFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = $.path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that    = this
      , _length = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !_length)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(_length > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};
},{"./$":23,"./$.assert":5,"./$.invoke":18}],27:[function(require,module,exports){
'use strict';
module.exports = function(regExp, replace, isStatic){
  var replacer = replace === Object(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(isStatic ? it : this).replace(regExp, replacer);
  };
};
},{}],28:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var $      = require('./$')
  , assert = require('./$.assert');
function check(O, proto){
  assert.obj(O);
  assert(proto === null || $.isObject(proto), proto, ": can't set as prototype!");
}
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
    ? function(buggy, set){
        try {
          set = require('./$.ctx')(Function.call, $.getDesc(Object.prototype, '__proto__').set, 2);
          set({}, []);
        } catch(e){ buggy = true; }
        return function setPrototypeOf(O, proto){
          check(O, proto);
          if(buggy)O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }()
    : undefined),
  check: check
};
},{"./$":23,"./$.assert":5,"./$.ctx":12}],29:[function(require,module,exports){
var $       = require('./$')
  , SPECIES = require('./$.wks')('species');
module.exports = function(C){
  if($.DESC && !(SPECIES in C))$.setDesc(C, SPECIES, {
    configurable: true,
    get: $.that
  });
};
},{"./$":23,"./$.wks":37}],30:[function(require,module,exports){
// true  -> String#at
// false -> String#codePointAt
var $ = require('./$');
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String($.assertDefined(that))
      , i = $.toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l
      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$":23}],31:[function(require,module,exports){
// http://wiki.ecmascript.org/doku.php?id=strawman:string_padding
var $      = require('./$')
  , repeat = require('./$.string-repeat');

module.exports = function(that, minLength, fillChar, left){
  // 1. Let O be CheckObjectCoercible(this value).
  // 2. Let S be ToString(O).
  var S = String($.assertDefined(that));
  // 4. If intMinLength is undefined, return S.
  if(minLength === undefined)return S;
  // 4. Let intMinLength be ToInteger(minLength).
  var intMinLength = $.toInteger(minLength);
  // 5. Let fillLen be the number of characters in S minus intMinLength.
  var fillLen = intMinLength - S.length;
  // 6. If fillLen < 0, then throw a RangeError exception.
  // 7. If fillLen is +∞, then throw a RangeError exception.
  if(fillLen < 0 || fillLen === Infinity){
    throw new RangeError('Cannot satisfy string length ' + minLength + ' for string: ' + S);
  }
  // 8. Let sFillStr be the string represented by fillStr.
  // 9. If sFillStr is undefined, let sFillStr be a space character.
  var sFillStr = fillChar === undefined ? ' ' : String(fillChar);
  // 10. Let sFillVal be a String made of sFillStr, repeated until fillLen is met.
  var sFillVal = repeat.call(sFillStr, Math.ceil(fillLen / sFillStr.length));
  // truncate if we overflowed
  if(sFillVal.length > fillLen)sFillVal = left
    ? sFillVal.slice(sFillVal.length - fillLen)
    : sFillVal.slice(0, fillLen);
  // 11. Return a string made from sFillVal, followed by S.
  // 11. Return a String made from S, followed by sFillVal.
  return left ? sFillVal.concat(S) : S.concat(sFillVal);
};
},{"./$":23,"./$.string-repeat":32}],32:[function(require,module,exports){
'use strict';
var $ = require('./$');

module.exports = function repeat(count){
  var str = String($.assertDefined(this))
    , res = ''
    , n   = $.toInteger(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};
},{"./$":23}],33:[function(require,module,exports){
'use strict';
var $      = require('./$')
  , ctx    = require('./$.ctx')
  , cof    = require('./$.cof')
  , invoke = require('./$.invoke')
  , cel    = require('./$.dom-create')
  , global             = $.g
  , isFunction         = $.isFunction
  , html               = $.html
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , postMessage        = global.postMessage
  , addEventListener   = global.addEventListener
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
function run(){
  var id = +this;
  if($.has(queue, id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
}
function listner(event){
  run.call(event.data);
}
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!isFunction(setTask) || !isFunction(clearTask)){
  setTask = function(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(isFunction(fn) ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(cof(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Modern browsers, skip implementation for WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is object
  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
    defer = function(id){
      postMessage(id, '*');
    };
    addEventListener('message', listner, false);
  // WebWorkers
  } else if(isFunction(MessageChannel)){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$":23,"./$.cof":7,"./$.ctx":12,"./$.dom-create":14,"./$.invoke":18}],34:[function(require,module,exports){
module.exports = function(exec){
  try {
    exec();
    return false;
  } catch(e){
    return true;
  }
};
},{}],35:[function(require,module,exports){
var sid = 0;
function uid(key){
  return 'Symbol(' + key + ')_' + (++sid + Math.random()).toString(36);
}
uid.safe = require('./$').g.Symbol || uid;
module.exports = uid;
},{"./$":23}],36:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var $           = require('./$')
  , UNSCOPABLES = require('./$.wks')('unscopables');
if($.FW && !(UNSCOPABLES in []))$.hide(Array.prototype, UNSCOPABLES, {});
module.exports = function(key){
  if($.FW)[][UNSCOPABLES][key] = true;
};
},{"./$":23,"./$.wks":37}],37:[function(require,module,exports){
var global = require('./$').g
  , store  = {};
module.exports = function(name){
  return store[name] || (store[name] =
    global.Symbol && global.Symbol[name] || require('./$.uid').safe('Symbol.' + name));
};
},{"./$":23,"./$.uid":35}],38:[function(require,module,exports){
var $                = require('./$')
  , cel              = require('./$.dom-create')
  , cof              = require('./$.cof')
  , $def             = require('./$.def')
  , invoke           = require('./$.invoke')
  , arrayMethod      = require('./$.array-methods')
  , IE_PROTO         = require('./$.uid').safe('__proto__')
  , assert           = require('./$.assert')
  , assertObject     = assert.obj
  , ObjectProto      = Object.prototype
  , html             = $.html
  , A                = []
  , _slice           = A.slice
  , _join            = A.join
  , classof          = cof.classof
  , has              = $.has
  , defineProperty   = $.setDesc
  , getOwnDescriptor = $.getDesc
  , defineProperties = $.setDescs
  , isFunction       = $.isFunction
  , toObject         = $.toObject
  , toLength         = $.toLength
  , toIndex          = $.toIndex
  , IE8_DOM_DEFINE   = false
  , $indexOf         = require('./$.array-includes')(false)
  , $forEach         = arrayMethod(0)
  , $map             = arrayMethod(1)
  , $filter          = arrayMethod(2)
  , $some            = arrayMethod(3)
  , $every           = arrayMethod(4);

if(!$.DESC){
  try {
    IE8_DOM_DEFINE = defineProperty(cel('div'), 'x',
      {get: function(){ return 8; }}
    ).x == 8;
  } catch(e){ /* empty */ }
  $.setDesc = function(O, P, Attributes){
    if(IE8_DOM_DEFINE)try {
      return defineProperty(O, P, Attributes);
    } catch(e){ /* empty */ }
    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
    if('value' in Attributes)assertObject(O)[P] = Attributes.value;
    return O;
  };
  $.getDesc = function(O, P){
    if(IE8_DOM_DEFINE)try {
      return getOwnDescriptor(O, P);
    } catch(e){ /* empty */ }
    if(has(O, P))return $.desc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
  };
  $.setDescs = defineProperties = function(O, Properties){
    assertObject(O);
    var keys   = $.getKeys(Properties)
      , length = keys.length
      , i = 0
      , P;
    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
    return O;
  };
}
$def($def.S + $def.F * !$.DESC, 'Object', {
  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $.getDesc,
  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  defineProperty: $.setDesc,
  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
  defineProperties: defineProperties
});

  // IE 8- don't enum bug keys
var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
            'toLocaleString,toString,valueOf').split(',')
  // Additional keys for getOwnPropertyNames
  , keys2 = keys1.concat('length', 'prototype')
  , keysLen1 = keys1.length;

// Create object with `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = cel('iframe')
    , i      = keysLen1
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write('<script>document.F=Object</script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict.prototype[keys1[i]];
  return createDict();
};
function createGetKeys(names, length){
  return function(object){
    var O      = toObject(object)
      , i      = 0
      , result = []
      , key;
    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(length > i)if(has(O, key = names[i++])){
      ~$indexOf(result, key) || result.push(key);
    }
    return result;
  };
}
function isPrimitive(it){ return !$.isObject(it); }
function Empty(){}
$def($def.S, 'Object', {
  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  getPrototypeOf: $.getProto = $.getProto || function(O){
    O = Object(assert.def(O));
    if(has(O, IE_PROTO))return O[IE_PROTO];
    if(isFunction(O.constructor) && O instanceof O.constructor){
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  },
  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  create: $.create = $.create || function(O, /*?*/Properties){
    var result;
    if(O !== null){
      Empty.prototype = assertObject(O);
      result = new Empty();
      Empty.prototype = null;
      // add "__proto__" for Object.getPrototypeOf shim
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : defineProperties(result, Properties);
  },
  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false),
  // 19.1.2.17 / 15.2.3.8 Object.seal(O)
  seal: $.it, // <- cap
  // 19.1.2.5 / 15.2.3.9 Object.freeze(O)
  freeze: $.it, // <- cap
  // 19.1.2.15 / 15.2.3.10 Object.preventExtensions(O)
  preventExtensions: $.it, // <- cap
  // 19.1.2.13 / 15.2.3.11 Object.isSealed(O)
  isSealed: isPrimitive, // <- cap
  // 19.1.2.12 / 15.2.3.12 Object.isFrozen(O)
  isFrozen: isPrimitive, // <- cap
  // 19.1.2.11 / 15.2.3.13 Object.isExtensible(O)
  isExtensible: $.isObject // <- cap
});

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
$def($def.P, 'Function', {
  bind: function(that /*, args... */){
    var fn       = assert.fn(this)
      , partArgs = _slice.call(arguments, 1);
    function bound(/* args... */){
      var args = partArgs.concat(_slice.call(arguments));
      return invoke(fn, args, this instanceof bound ? $.create(fn.prototype) : that);
    }
    if(fn.prototype)bound.prototype = fn.prototype;
    return bound;
  }
});

// Fix for not array-like ES3 string and DOM objects
if(!(0 in Object('z') && 'z'[0] == 'z')){
  $.ES5Object = function(it){
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
}

var buggySlice = true;
try {
  if(html)_slice.call(html);
  buggySlice = false;
} catch(e){ /* empty */ }

$def($def.P + $def.F * buggySlice, 'Array', {
  slice: function slice(begin, end){
    var len   = toLength(this.length)
      , klass = cof(this);
    end = end === undefined ? len : end;
    if(klass == 'Array')return _slice.call(this, begin, end);
    var start  = toIndex(begin, len)
      , upTo   = toIndex(end, len)
      , size   = toLength(upTo - start)
      , cloned = Array(size)
      , i      = 0;
    for(; i < size; i++)cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

$def($def.P + $def.F * ($.ES5Object != Object), 'Array', {
  join: function join(){
    return _join.apply($.ES5Object(this), arguments);
  }
});

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
$def($def.S, 'Array', {
  isArray: function(arg){
    return cof(arg) == 'Array';
  }
});
function createArrayReduce(isRight){
  return function(callbackfn, memo){
    assert.fn(callbackfn);
    var O      = toObject(this)
      , length = toLength(O.length)
      , index  = isRight ? length - 1 : 0
      , i      = isRight ? -1 : 1;
    if(arguments.length < 2)for(;;){
      if(index in O){
        memo = O[index];
        index += i;
        break;
      }
      index += i;
      assert(isRight ? index >= 0 : length > index, 'Reduce of empty array with no initial value');
    }
    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
      memo = callbackfn(memo, O[index], index, this);
    }
    return memo;
  };
}
$def($def.P, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: $.each = $.each || function forEach(callbackfn/*, that = undefined */){
    return $forEach(this, callbackfn, arguments[1]);
  },
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn/*, that = undefined */){
    return $map(this, callbackfn, arguments[1]);
  },
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn/*, that = undefined */){
    return $filter(this, callbackfn, arguments[1]);
  },
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn/*, that = undefined */){
    return $some(this, callbackfn, arguments[1]);
  },
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn/*, that = undefined */){
    return $every(this, callbackfn, arguments[1]);
  },
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: createArrayReduce(false),
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: createArrayReduce(true),
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(el /*, fromIndex = 0 */){
    return $indexOf(this, el, arguments[1]);
  },
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
    var O      = toObject(this)
      , length = toLength(O.length)
      , index  = length - 1;
    if(arguments.length > 1)index = Math.min(index, $.toInteger(fromIndex));
    if(index < 0)index = toLength(length + index);
    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
    return -1;
  }
});

// 21.1.3.25 / 15.5.4.20 String.prototype.trim()
$def($def.P, 'String', {trim: require('./$.replacer')(/^\s*([\s\S]*\S)?\s*$/, '$1')});

// 20.3.3.1 / 15.9.4.4 Date.now()
$def($def.S, 'Date', {now: function(){
  return +new Date;
}});

function lz(num){
  return num > 9 ? num : '0' + num;
}

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
// PhantomJS and old webkit had a broken Date implementation.
var date       = new Date(-5e13 - 1)
  , brokenDate = !(date.toISOString && date.toISOString() == '0385-07-25T07:06:39.999Z'
      && require('./$.throws')(function(){ new Date(NaN).toISOString(); }));
$def($def.P + $def.F * brokenDate, 'Date', {toISOString: function(){
  if(!isFinite(this))throw RangeError('Invalid time value');
  var d = this
    , y = d.getUTCFullYear()
    , m = d.getUTCMilliseconds()
    , s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
}});

if(classof(function(){ return arguments; }()) == 'Object')cof.classof = function(it){
  var tag = classof(it);
  return tag == 'Object' && isFunction(it.callee) ? 'Arguments' : tag;
};
},{"./$":23,"./$.array-includes":3,"./$.array-methods":4,"./$.assert":5,"./$.cof":7,"./$.def":13,"./$.dom-create":14,"./$.invoke":18,"./$.replacer":27,"./$.throws":34,"./$.uid":35}],39:[function(require,module,exports){
'use strict';
var $       = require('./$')
  , $def    = require('./$.def')
  , toIndex = $.toIndex;
$def($def.P, 'Array', {
  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
  copyWithin: function copyWithin(target/* = 0 */, start /* = 0, end = @length */){
    var O     = Object($.assertDefined(this))
      , len   = $.toLength(O.length)
      , to    = toIndex(target, len)
      , from  = toIndex(start, len)
      , end   = arguments[2]
      , fin   = end === undefined ? len : toIndex(end, len)
      , count = Math.min(fin - from, len - to)
      , inc   = 1;
    if(from < to && to < from + count){
      inc  = -1;
      from = from + count - 1;
      to   = to   + count - 1;
    }
    while(count-- > 0){
      if(from in O)O[to] = O[from];
      else delete O[to];
      to   += inc;
      from += inc;
    } return O;
  }
});
require('./$.unscope')('copyWithin');
},{"./$":23,"./$.def":13,"./$.unscope":36}],40:[function(require,module,exports){
'use strict';
var $       = require('./$')
  , $def    = require('./$.def')
  , toIndex = $.toIndex;
$def($def.P, 'Array', {
  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
  fill: function fill(value /*, start = 0, end = @length */){
    var O      = Object($.assertDefined(this))
      , length = $.toLength(O.length)
      , index  = toIndex(arguments[1], length)
      , end    = arguments[2]
      , endPos = end === undefined ? length : toIndex(end, length);
    while(endPos > index)O[index++] = value;
    return O;
  }
});
require('./$.unscope')('fill');
},{"./$":23,"./$.def":13,"./$.unscope":36}],41:[function(require,module,exports){
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var KEY    = 'findIndex'
  , $def   = require('./$.def')
  , forced = true
  , $find  = require('./$.array-methods')(6);
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$def($def.P + $def.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments[1]);
  }
});
require('./$.unscope')(KEY);
},{"./$.array-methods":4,"./$.def":13,"./$.unscope":36}],42:[function(require,module,exports){
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var KEY    = 'find'
  , $def   = require('./$.def')
  , forced = true
  , $find  = require('./$.array-methods')(5);
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$def($def.P + $def.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments[1]);
  }
});
require('./$.unscope')(KEY);
},{"./$.array-methods":4,"./$.def":13,"./$.unscope":36}],43:[function(require,module,exports){
var $     = require('./$')
  , ctx   = require('./$.ctx')
  , $def  = require('./$.def')
  , $iter = require('./$.iter')
  , call  = require('./$.iter-call');
$def($def.S + $def.F * !require('./$.iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = Object($.assertDefined(arrayLike))
      , mapfn   = arguments[1]
      , mapping = mapfn !== undefined
      , f       = mapping ? ctx(mapfn, arguments[2], 2) : undefined
      , index   = 0
      , length, result, step, iterator;
    if($iter.is(O)){
      iterator = $iter.get(O);
      // strange IE quirks mode bug -> use typeof instead of isFunction
      result   = new (typeof this == 'function' ? this : Array);
      for(; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, f, [step.value, index], true) : step.value;
      }
    } else {
      // strange IE quirks mode bug -> use typeof instead of isFunction
      result = new (typeof this == 'function' ? this : Array)(length = $.toLength(O.length));
      for(; length > index; index++){
        result[index] = mapping ? f(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});
},{"./$":23,"./$.ctx":12,"./$.def":13,"./$.iter":22,"./$.iter-call":19,"./$.iter-detect":21}],44:[function(require,module,exports){
var $          = require('./$')
  , setUnscope = require('./$.unscope')
  , ITER       = require('./$.uid').safe('iter')
  , $iter      = require('./$.iter')
  , step       = $iter.step
  , Iterators  = $iter.Iterators;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var iter  = this[ITER]
    , O     = iter.o
    , kind  = iter.k
    , index = iter.i++;
  if(!O || index >= O.length){
    iter.o = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

setUnscope('keys');
setUnscope('values');
setUnscope('entries');
},{"./$":23,"./$.iter":22,"./$.iter-define":20,"./$.uid":35,"./$.unscope":36}],45:[function(require,module,exports){
var $def = require('./$.def');
$def($def.S, 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , length = arguments.length
      // strange IE quirks mode bug -> use typeof instead of isFunction
      , result = new (typeof this == 'function' ? this : Array)(length);
    while(length > index)result[index] = arguments[index++];
    result.length = length;
    return result;
  }
});
},{"./$.def":13}],46:[function(require,module,exports){
require('./$.species')(Array);
},{"./$.species":29}],47:[function(require,module,exports){
var $             = require('./$')
  , HAS_INSTANCE  = require('./$.wks')('hasInstance')
  , FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
  if(!$.isFunction(this) || !$.isObject(O))return false;
  if(!$.isObject(this.prototype))return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while(O = $.getProto(O))if(this.prototype === O)return true;
  return false;
}});
},{"./$":23,"./$.wks":37}],48:[function(require,module,exports){
'use strict';
var $    = require('./$')
  , NAME = 'name'
  , setDesc = $.setDesc
  , FunctionProto = Function.prototype;
// 19.2.4.2 name
NAME in FunctionProto || $.FW && $.DESC && setDesc(FunctionProto, NAME, {
  configurable: true,
  get: function(){
    var match = String(this).match(/^\s*function ([^ (]*)/)
      , name  = match ? match[1] : '';
    $.has(this, NAME) || setDesc(this, NAME, $.desc(5, name));
    return name;
  },
  set: function(value){
    $.has(this, NAME) || setDesc(this, NAME, $.desc(0, value));
  }
});
},{"./$":23}],49:[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.1 Map Objects
require('./$.collection')('Map', {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./$.collection":11,"./$.collection-strong":8}],50:[function(require,module,exports){
var Infinity = 1 / 0
  , $def  = require('./$.def')
  , E     = Math.E
  , pow   = Math.pow
  , abs   = Math.abs
  , exp   = Math.exp
  , log   = Math.log
  , sqrt  = Math.sqrt
  , ceil  = Math.ceil
  , floor = Math.floor
  , EPSILON   = pow(2, -52)
  , EPSILON32 = pow(2, -23)
  , MAX32     = pow(2, 127) * (2 - EPSILON32)
  , MIN32     = pow(2, -126);
function roundTiesToEven(n){
  return n + 1 / EPSILON - 1 / EPSILON;
}

// 20.2.2.28 Math.sign(x)
function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
}
// 20.2.2.5 Math.asinh(x)
function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
}
// 20.2.2.14 Math.expm1(x)
function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
}

$def($def.S, 'Math', {
  // 20.2.2.3 Math.acosh(x)
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : isFinite(x) ? log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
  },
  // 20.2.2.5 Math.asinh(x)
  asinh: asinh,
  // 20.2.2.7 Math.atanh(x)
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
  },
  // 20.2.2.9 Math.cbrt(x)
  cbrt: function cbrt(x){
    return sign(x = +x) * pow(abs(x), 1 / 3);
  },
  // 20.2.2.11 Math.clz32(x)
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - floor(log(x + 0.5) * Math.LOG2E) : 32;
  },
  // 20.2.2.12 Math.cosh(x)
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  },
  // 20.2.2.14 Math.expm1(x)
  expm1: expm1,
  // 20.2.2.16 Math.fround(x)
  fround: function fround(x){
    var $abs  = abs(x)
      , $sign = sign(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  },
  // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , len1 = arguments.length
      , len2 = len1
      , args = Array(len1)
      , larg = 0
      , arg;
    while(len1--){
      arg = args[len1] = abs(arguments[len1]);
      if(arg == Infinity)return Infinity;
      if(arg > larg)larg = arg;
    }
    larg = larg || 1;
    while(len2--)sum += pow(args[len2] / larg, 2);
    return larg * sqrt(sum);
  },
  // 20.2.2.18 Math.imul(x, y)
  imul: function imul(x, y){
    var UInt16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UInt16 & xn
      , yl = UInt16 & yn;
    return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
  },
  // 20.2.2.20 Math.log1p(x)
  log1p: function log1p(x){
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
  },
  // 20.2.2.21 Math.log10(x)
  log10: function log10(x){
    return log(x) / Math.LN10;
  },
  // 20.2.2.22 Math.log2(x)
  log2: function log2(x){
    return log(x) / Math.LN2;
  },
  // 20.2.2.28 Math.sign(x)
  sign: sign,
  // 20.2.2.30 Math.sinh(x)
  sinh: function sinh(x){
    return abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
  },
  // 20.2.2.33 Math.tanh(x)
  tanh: function tanh(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  },
  // 20.2.2.34 Math.trunc(x)
  trunc: function trunc(it){
    return (it > 0 ? floor : ceil)(it);
  }
});
},{"./$.def":13}],51:[function(require,module,exports){
'use strict';
var $          = require('./$')
  , isObject   = $.isObject
  , isFunction = $.isFunction
  , NUMBER     = 'Number'
  , $Number    = $.g[NUMBER]
  , Base       = $Number
  , proto      = $Number.prototype;
function toPrimitive(it){
  var fn, val;
  if(isFunction(fn = it.valueOf) && !isObject(val = fn.call(it)))return val;
  if(isFunction(fn = it.toString) && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to number");
}
function toNumber(it){
  if(isObject(it))it = toPrimitive(it);
  if(typeof it == 'string' && it.length > 2 && it.charCodeAt(0) == 48){
    var binary = false;
    switch(it.charCodeAt(1)){
      case 66 : case 98  : binary = true;
      case 79 : case 111 : return parseInt(it.slice(2), binary ? 2 : 8);
    }
  } return +it;
}
if($.FW && !($Number('0o1') && $Number('0b1'))){
  $Number = function Number(it){
    return this instanceof $Number ? new Base(toNumber(it)) : toNumber(it);
  };
  $.each.call($.DESC ? $.getNames(Base) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES6 (in case, if modules with ES6 Number statics required before):
      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
      'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
    ).split(','), function(key){
      if($.has(Base, key) && !$.has($Number, key)){
        $.setDesc($Number, key, $.getDesc(Base, key));
      }
    }
  );
  $Number.prototype = proto;
  proto.constructor = $Number;
  $.hide($.g, NUMBER, $Number);
}
},{"./$":23}],52:[function(require,module,exports){
var $     = require('./$')
  , $def  = require('./$.def')
  , abs   = Math.abs
  , floor = Math.floor
  , _isFinite = $.g.isFinite
  , MAX_SAFE_INTEGER = 0x1fffffffffffff; // pow(2, 53) - 1 == 9007199254740991;
function isInteger(it){
  return !$.isObject(it) && _isFinite(it) && floor(it) === it;
}
$def($def.S, 'Number', {
  // 20.1.2.1 Number.EPSILON
  EPSILON: Math.pow(2, -52),
  // 20.1.2.2 Number.isFinite(number)
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  },
  // 20.1.2.3 Number.isInteger(number)
  isInteger: isInteger,
  // 20.1.2.4 Number.isNaN(number)
  isNaN: function isNaN(number){
    return number != number;
  },
  // 20.1.2.5 Number.isSafeInteger(number)
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
  },
  // 20.1.2.6 Number.MAX_SAFE_INTEGER
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
  // 20.1.2.10 Number.MIN_SAFE_INTEGER
  MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
  // 20.1.2.12 Number.parseFloat(string)
  parseFloat: parseFloat,
  // 20.1.2.13 Number.parseInt(string, radix)
  parseInt: parseInt
});
},{"./$":23,"./$.def":13}],53:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $def = require('./$.def');
$def($def.S, 'Object', {assign: require('./$.assign')});
},{"./$.assign":6,"./$.def":13}],54:[function(require,module,exports){
// 19.1.3.10 Object.is(value1, value2)
var $def = require('./$.def');
$def($def.S, 'Object', {
  is: function is(x, y){
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  }
});
},{"./$.def":13}],55:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $def = require('./$.def');
$def($def.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.def":13,"./$.set-proto":28}],56:[function(require,module,exports){
var $        = require('./$')
  , $def     = require('./$.def')
  , isObject = $.isObject
  , toObject = $.toObject;
function wrapObjectMethod(METHOD, MODE){
  var fn  = ($.core.Object || {})[METHOD] || Object[METHOD]
    , f   = 0
    , o   = {};
  o[METHOD] = MODE == 1 ? function(it){
    return isObject(it) ? fn(it) : it;
  } : MODE == 2 ? function(it){
    return isObject(it) ? fn(it) : true;
  } : MODE == 3 ? function(it){
    return isObject(it) ? fn(it) : false;
  } : MODE == 4 ? function getOwnPropertyDescriptor(it, key){
    return fn(toObject(it), key);
  } : MODE == 5 ? function getPrototypeOf(it){
    return fn(Object($.assertDefined(it)));
  } : function(it){
    return fn(toObject(it));
  };
  try {
    fn('z');
  } catch(e){
    f = 1;
  }
  $def($def.S + $def.F * f, 'Object', o);
}
wrapObjectMethod('freeze', 1);
wrapObjectMethod('seal', 1);
wrapObjectMethod('preventExtensions', 1);
wrapObjectMethod('isFrozen', 2);
wrapObjectMethod('isSealed', 2);
wrapObjectMethod('isExtensible', 3);
wrapObjectMethod('getOwnPropertyDescriptor', 4);
wrapObjectMethod('getPrototypeOf', 5);
wrapObjectMethod('keys');
wrapObjectMethod('getOwnPropertyNames');
},{"./$":23,"./$.def":13}],57:[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var $   = require('./$')
  , cof = require('./$.cof')
  , src = String({}.toString)
  , tmp = {};
function toString(){
  return '[object ' + cof.classof(this) + ']';
}
// lodash uses String(Object.prototype.toString) in isNative
toString.toString = function(){
  return src;
};
tmp[require('./$.wks')('toStringTag')] = 'z';
if($.FW && cof(tmp) != 'z')$.hide(Object.prototype, 'toString', toString);
},{"./$":23,"./$.cof":7,"./$.wks":37}],58:[function(require,module,exports){
'use strict';
var $        = require('./$')
  , ctx      = require('./$.ctx')
  , cof      = require('./$.cof')
  , $def     = require('./$.def')
  , assert   = require('./$.assert')
  , forOf    = require('./$.for-of')
  , setProto = require('./$.set-proto').set
  , species  = require('./$.species')
  , SPECIES  = require('./$.wks')('species')
  , RECORD   = require('./$.uid').safe('record')
  , PROMISE  = 'Promise'
  , global   = $.g
  , process  = global.process
  , asap     = process && process.nextTick || require('./$.task').set
  , P        = global[PROMISE]
  , isFunction     = $.isFunction
  , isObject       = $.isObject
  , assertFunction = assert.fn
  , assertObject   = assert.obj;

var useNative = function(){
  var test, works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = isFunction(P) && isFunction(P.resolve) && P.resolve(test = new P(function(){})) == test;
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
function getConstructor(C){
  var S = assertObject(C)[SPECIES];
  return S != undefined ? S : C;
}
function isThenable(it){
  var then;
  if(isObject(it))then = it.then;
  return isFunction(then) ? then : false;
}
function notify(record){
  var chain = record.c;
  if(chain.length)asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    function run(react){
      var cb = ok ? react.ok : react.fail
        , ret, then;
      try {
        if(cb){
          if(!ok)record.h = true;
          ret = cb === true ? value : cb(value);
          if(ret === react.P){
            react.rej(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(ret)){
            then.call(ret, react.res, react.rej);
          } else react.res(ret);
        } else react.rej(value);
      } catch(err){
        react.rej(err);
      }
    }
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
  });
}
function isUnhandled(promise){
  var record = promise[RECORD]
    , chain  = record.a || record.c
    , i      = 0
    , react;
  if(record.h)return false;
  while(chain.length > i){
    react = chain[i++];
    if(react.fail || !isUnhandled(react.P))return false;
  } return true;
}
function $reject(value){
  var record = this
    , promise;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  setTimeout(function(){
    asap(function(){
      if(isUnhandled(promise = record.p)){
        if(cof(process) == 'process'){
          process.emit('unhandledRejection', value, promise);
        } else if(global.console && isFunction(console.error)){
          console.error('Unhandled promise rejection', value);
        }
      }
      record.a = undefined;
    });
  }, 1);
  notify(record);
}
function $resolve(value){
  var record = this
    , then, wrapper;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(then = isThenable(value)){
      wrapper = {r: record, d: false}; // wrap
      then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
    } else {
      record.v = value;
      record.s = 1;
      notify(record);
    }
  } catch(err){
    $reject.call(wrapper || {r: record, d: false}, err); // wrap
  }
}

// constructor polyfill
if(!useNative){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    assertFunction(executor);
    var record = {
      p: assert.inst(this, P, PROMISE),       // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false                                // <- handled rejection
    };
    $.hide(this, RECORD, record);
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  $.mix(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var S = assertObject(assertObject(this).constructor)[SPECIES];
      var react = {
        ok:   isFunction(onFulfilled) ? onFulfilled : true,
        fail: isFunction(onRejected)  ? onRejected  : false
      };
      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
        react.res = assertFunction(res);
        react.rej = assertFunction(rej);
      });
      var record = this[RECORD];
      record.c.push(react);
      if(record.a)record.a.push(react);
      record.s && notify(record);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

// export
$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
cof.set(P, PROMISE);
species(P);
species($.core[PROMISE]); // for wrapper

// statics
$def($def.S + $def.F * !useNative, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    return new (getConstructor(this))(function(res, rej){
      rej(r);
    });
  },
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    return isObject(x) && RECORD in x && $.getProto(x) === this.prototype
      ? x : new (getConstructor(this))(function(res){
        res(x);
      });
  }
});
$def($def.S + $def.F * !(useNative && require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C      = getConstructor(this)
      , values = [];
    return new C(function(res, rej){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        C.resolve(promise).then(function(value){
          results[index] = value;
          --remaining || res(results);
        }, rej);
      });
      else res(results);
    });
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C = getConstructor(this);
    return new C(function(res, rej){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(res, rej);
      });
    });
  }
});
},{"./$":23,"./$.assert":5,"./$.cof":7,"./$.ctx":12,"./$.def":13,"./$.for-of":16,"./$.iter-detect":21,"./$.set-proto":28,"./$.species":29,"./$.task":33,"./$.uid":35,"./$.wks":37}],59:[function(require,module,exports){
var $         = require('./$')
  , $def      = require('./$.def')
  , setProto  = require('./$.set-proto')
  , $iter     = require('./$.iter')
  , ITERATOR  = require('./$.wks')('iterator')
  , ITER      = require('./$.uid').safe('iter')
  , step      = $iter.step
  , assert    = require('./$.assert')
  , isObject  = $.isObject
  , getProto  = $.getProto
  , $Reflect  = $.g.Reflect
  , _apply    = Function.apply
  , assertObject = assert.obj
  , _isExtensible = Object.isExtensible || $.isObject
  , _preventExtensions = Object.preventExtensions || $.it
  // IE TP has broken Reflect.enumerate
  , buggyEnumerate = !($Reflect && $Reflect.enumerate && ITERATOR in $Reflect.enumerate({}));

function Enumerate(iterated){
  $.set(this, ITER, {o: iterated, k: undefined, i: 0});
}
$iter.create(Enumerate, 'Object', function(){
  var iter = this[ITER]
    , keys = iter.k
    , key;
  if(keys == undefined){
    iter.k = keys = [];
    for(key in iter.o)keys.push(key);
  }
  do {
    if(iter.i >= keys.length)return step(1);
  } while(!((key = keys[iter.i++]) in iter.o));
  return step(0, key);
});

var reflect = {
  // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
  apply: function apply(target, thisArgument, argumentsList){
    return _apply.call(target, thisArgument, argumentsList);
  },
  // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
  construct: function construct(target, argumentsList /*, newTarget*/){
    var proto    = assert.fn(arguments.length < 3 ? target : arguments[2]).prototype
      , instance = $.create(isObject(proto) ? proto : Object.prototype)
      , result   = _apply.call(target, instance, argumentsList);
    return isObject(result) ? result : instance;
  },
  // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
  defineProperty: function defineProperty(target, propertyKey, attributes){
    assertObject(target);
    try {
      $.setDesc(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  },
  // 26.1.4 Reflect.deleteProperty(target, propertyKey)
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = $.getDesc(assertObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  },
  // 26.1.6 Reflect.get(target, propertyKey [, receiver])
  get: function get(target, propertyKey/*, receiver*/){
    var receiver = arguments.length < 3 ? target : arguments[2]
      , desc = $.getDesc(assertObject(target), propertyKey), proto;
    if(desc)return $.has(desc, 'value')
      ? desc.value
      : desc.get === undefined
        ? undefined
        : desc.get.call(receiver);
    return isObject(proto = getProto(target))
      ? get(proto, propertyKey, receiver)
      : undefined;
  },
  // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return $.getDesc(assertObject(target), propertyKey);
  },
  // 26.1.8 Reflect.getPrototypeOf(target)
  getPrototypeOf: function getPrototypeOf(target){
    return getProto(assertObject(target));
  },
  // 26.1.9 Reflect.has(target, propertyKey)
  has: function has(target, propertyKey){
    return propertyKey in target;
  },
  // 26.1.10 Reflect.isExtensible(target)
  isExtensible: function isExtensible(target){
    return _isExtensible(assertObject(target));
  },
  // 26.1.11 Reflect.ownKeys(target)
  ownKeys: require('./$.own-keys'),
  // 26.1.12 Reflect.preventExtensions(target)
  preventExtensions: function preventExtensions(target){
    assertObject(target);
    try {
      _preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  },
  // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
  set: function set(target, propertyKey, V/*, receiver*/){
    var receiver = arguments.length < 4 ? target : arguments[3]
      , ownDesc  = $.getDesc(assertObject(target), propertyKey)
      , existingDescriptor, proto;
    if(!ownDesc){
      if(isObject(proto = getProto(target))){
        return set(proto, propertyKey, V, receiver);
      }
      ownDesc = $.desc(0);
    }
    if($.has(ownDesc, 'value')){
      if(ownDesc.writable === false || !isObject(receiver))return false;
      existingDescriptor = $.getDesc(receiver, propertyKey) || $.desc(0);
      existingDescriptor.value = V;
      $.setDesc(receiver, propertyKey, existingDescriptor);
      return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }
};
// 26.1.14 Reflect.setPrototypeOf(target, proto)
if(setProto)reflect.setPrototypeOf = function setPrototypeOf(target, proto){
  setProto.check(target, proto);
  try {
    setProto.set(target, proto);
    return true;
  } catch(e){
    return false;
  }
};

$def($def.G, {Reflect: {}});

$def($def.S + $def.F * buggyEnumerate, 'Reflect', {
  // 26.1.5 Reflect.enumerate(target)
  enumerate: function enumerate(target){
    return new Enumerate(assertObject(target));
  }
});

$def($def.S, 'Reflect', reflect);
},{"./$":23,"./$.assert":5,"./$.def":13,"./$.iter":22,"./$.own-keys":25,"./$.set-proto":28,"./$.uid":35,"./$.wks":37}],60:[function(require,module,exports){
var $       = require('./$')
  , cof     = require('./$.cof')
  , $RegExp = $.g.RegExp
  , Base    = $RegExp
  , proto   = $RegExp.prototype
  , re      = /a/g
  // "new" creates a new object
  , CORRECT_NEW = new $RegExp(re) !== re
  // RegExp allows a regex with flags as the pattern
  , ALLOWS_RE_WITH_FLAGS = function(){
    try {
      return $RegExp(re, 'i') == '/a/i';
    } catch(e){ /* empty */ }
  }();
if($.FW && $.DESC){
  if(!CORRECT_NEW || !ALLOWS_RE_WITH_FLAGS){
    $RegExp = function RegExp(pattern, flags){
      var patternIsRegExp  = cof(pattern) == 'RegExp'
        , flagsIsUndefined = flags === undefined;
      if(!(this instanceof $RegExp) && patternIsRegExp && flagsIsUndefined)return pattern;
      return CORRECT_NEW
        ? new Base(patternIsRegExp && !flagsIsUndefined ? pattern.source : pattern, flags)
        : new Base(patternIsRegExp ? pattern.source : pattern
          , patternIsRegExp && flagsIsUndefined ? pattern.flags : flags);
    };
    $.each.call($.getNames(Base), function(key){
      key in $RegExp || $.setDesc($RegExp, key, {
        configurable: true,
        get: function(){ return Base[key]; },
        set: function(it){ Base[key] = it; }
      });
    });
    proto.constructor = $RegExp;
    $RegExp.prototype = proto;
    $.hide($.g, 'RegExp', $RegExp);
  }
  // 21.2.5.3 get RegExp.prototype.flags()
  if(/./g.flags != 'g')$.setDesc(proto, 'flags', {
    configurable: true,
    get: require('./$.replacer')(/^.*\/(\w*)$/, '$1')
  });
}
require('./$.species')($RegExp);
},{"./$":23,"./$.cof":7,"./$.replacer":27,"./$.species":29}],61:[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.2 Set Objects
require('./$.collection')('Set', {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./$.collection":11,"./$.collection-strong":8}],62:[function(require,module,exports){
'use strict';
var $def = require('./$.def')
  , $at  = require('./$.string-at')(false);
$def($def.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at(this, pos);
  }
});
},{"./$.def":13,"./$.string-at":30}],63:[function(require,module,exports){
'use strict';
var $    = require('./$')
  , cof  = require('./$.cof')
  , $def = require('./$.def')
  , toLength = $.toLength;

// should throw error on regex
$def($def.P + $def.F * !require('./$.throws')(function(){ 'q'.endsWith(/./); }), 'String', {
  // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    if(cof(searchString) == 'RegExp')throw TypeError();
    var that = String($.assertDefined(this))
      , endPosition = arguments[1]
      , len = toLength(that.length)
      , end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    searchString += '';
    return that.slice(end - searchString.length, end) === searchString;
  }
});
},{"./$":23,"./$.cof":7,"./$.def":13,"./$.throws":34}],64:[function(require,module,exports){
var $def    = require('./$.def')
  , toIndex = require('./$').toIndex
  , fromCharCode = String.fromCharCode
  , $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$def($def.S + $def.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res = []
      , len = arguments.length
      , i   = 0
      , code;
    while(len > i){
      code = +arguments[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});
},{"./$":23,"./$.def":13}],65:[function(require,module,exports){
'use strict';
var $    = require('./$')
  , cof  = require('./$.cof')
  , $def = require('./$.def');

$def($def.P, 'String', {
  // 21.1.3.7 String.prototype.includes(searchString, position = 0)
  includes: function includes(searchString /*, position = 0 */){
    if(cof(searchString) == 'RegExp')throw TypeError();
    return !!~String($.assertDefined(this)).indexOf(searchString, arguments[1]);
  }
});
},{"./$":23,"./$.cof":7,"./$.def":13}],66:[function(require,module,exports){
var set   = require('./$').set
  , $at   = require('./$.string-at')(true)
  , ITER  = require('./$.uid').safe('iter')
  , $iter = require('./$.iter')
  , step  = $iter.step;

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  set(this, ITER, {o: String(iterated), i: 0});
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var iter  = this[ITER]
    , O     = iter.o
    , index = iter.i
    , point;
  if(index >= O.length)return step(1);
  point = $at(O, index);
  iter.i += point.length;
  return step(0, point);
});
},{"./$":23,"./$.iter":22,"./$.iter-define":20,"./$.string-at":30,"./$.uid":35}],67:[function(require,module,exports){
var $    = require('./$')
  , $def = require('./$.def');

$def($def.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl = $.toObject(callSite.raw)
      , len = $.toLength(tpl.length)
      , sln = arguments.length
      , res = []
      , i   = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < sln)res.push(String(arguments[i]));
    } return res.join('');
  }
});
},{"./$":23,"./$.def":13}],68:[function(require,module,exports){
var $def = require('./$.def');

$def($def.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./$.string-repeat')
});
},{"./$.def":13,"./$.string-repeat":32}],69:[function(require,module,exports){
'use strict';
var $    = require('./$')
  , cof  = require('./$.cof')
  , $def = require('./$.def');

// should throw error on regex
$def($def.P + $def.F * !require('./$.throws')(function(){ 'q'.startsWith(/./); }), 'String', {
  // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
  startsWith: function startsWith(searchString /*, position = 0 */){
    if(cof(searchString) == 'RegExp')throw TypeError();
    var that  = String($.assertDefined(this))
      , index = $.toLength(Math.min(arguments[1], that.length));
    searchString += '';
    return that.slice(index, index + searchString.length) === searchString;
  }
});
},{"./$":23,"./$.cof":7,"./$.def":13,"./$.throws":34}],70:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $        = require('./$')
  , setTag   = require('./$.cof').set
  , uid      = require('./$.uid')
  , $def     = require('./$.def')
  , keyOf    = require('./$.keyof')
  , enumKeys = require('./$.enum-keys')
  , assertObject = require('./$.assert').obj
  , has      = $.has
  , $create  = $.create
  , getDesc  = $.getDesc
  , setDesc  = $.setDesc
  , desc     = $.desc
  , getNames = $.getNames
  , toObject = $.toObject
  , $Symbol  = $.g.Symbol
  , setter   = false
  , TAG      = uid('tag')
  , HIDDEN   = uid('hidden')
  , SymbolRegistry = {}
  , AllSymbols = {}
  , useNative = $.isFunction($Symbol);

function wrap(tag){
  var sym = AllSymbols[tag] = $.set($create($Symbol.prototype), TAG, tag);
  $.DESC && setter && setDesc(Object.prototype, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setDesc(this, tag, desc(1, value));
    }
  });
  return sym;
}

function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, desc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D.enumerable = false;
    }
  } return setDesc(it, key, D);
}
function defineProperties(it, P){
  assertObject(it);
  var keys = enumKeys(P = toObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)defineProperty(it, key = keys[i++], P[key]);
  return it;
}
function create(it, P){
  return P === undefined ? $create(it) : defineProperties($create(it), P);
}
function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
}
function getOwnPropertyNames(it){
  var names  = getNames(toObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
}
function getOwnPropertySymbols(it){
  var names  = getNames(toObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
}

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(description){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
    return wrap(uid(description));
  };
  $.hide($Symbol.prototype, 'toString', function(){
    return this[TAG];
  });

  $.create     = create;
  $.setDesc    = defineProperty;
  $.getDesc    = getOwnPropertyDescriptor;
  $.setDescs   = defineProperties;
  $.getNames   = getOwnPropertyNames;
  $.getSymbols = getOwnPropertySymbols;
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
    'species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), function(it){
    var sym = require('./$.wks')(it);
    symbolStatics[it] = useNative ? sym : wrap(sym);
  }
);

setter = true;

$def($def.G + $def.W, {Symbol: $Symbol});

$def($def.S, 'Symbol', symbolStatics);

$def($def.S + $def.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: getOwnPropertySymbols
});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setTag($.g.JSON, 'JSON', true);
},{"./$":23,"./$.assert":5,"./$.cof":7,"./$.def":13,"./$.enum-keys":15,"./$.keyof":24,"./$.uid":35,"./$.wks":37}],71:[function(require,module,exports){
'use strict';
var $         = require('./$')
  , weak      = require('./$.collection-weak')
  , leakStore = weak.leakStore
  , ID        = weak.ID
  , WEAK      = weak.WEAK
  , has       = $.has
  , isObject  = $.isObject
  , isFrozen  = Object.isFrozen || $.core.Object.isFrozen
  , tmp       = {};

// 23.3 WeakMap Objects
var WeakMap = require('./$.collection')('WeakMap', {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      if(isFrozen(key))return leakStore(this).get(key);
      if(has(key, WEAK))return key[WEAK][this[ID]];
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
}, weak, true, true);

// IE11 WeakMap frozen keys fix
if($.FW && new WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  $.each.call(['delete', 'has', 'get', 'set'], function(key){
    var method = WeakMap.prototype[key];
    WeakMap.prototype[key] = function(a, b){
      // store frozen objects on leaky map
      if(isObject(a) && isFrozen(a)){
        var result = leakStore(this)[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    };
  });
}
},{"./$":23,"./$.collection":11,"./$.collection-weak":10}],72:[function(require,module,exports){
'use strict';
var weak = require('./$.collection-weak');

// 23.4 WeakSet Objects
require('./$.collection')('WeakSet', {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);
},{"./$.collection":11,"./$.collection-weak":10}],73:[function(require,module,exports){
// https://github.com/domenic/Array.prototype.includes
var $def      = require('./$.def')
  , $includes = require('./$.array-includes')(true);
$def($def.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments[1]);
  }
});
require('./$.unscope')('includes');
},{"./$.array-includes":3,"./$.def":13,"./$.unscope":36}],74:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
require('./$.collection-to-json')('Map');
},{"./$.collection-to-json":9}],75:[function(require,module,exports){
// https://gist.github.com/WebReflection/9353781
var $       = require('./$')
  , $def    = require('./$.def')
  , ownKeys = require('./$.own-keys');

$def($def.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O      = $.toObject(object)
      , result = {};
    $.each.call(ownKeys(O), function(key){
      $.setDesc(result, key, $.desc(0, $.getDesc(O, key)));
    });
    return result;
  }
});
},{"./$":23,"./$.def":13,"./$.own-keys":25}],76:[function(require,module,exports){
// http://goo.gl/XkBrjD
var $    = require('./$')
  , $def = require('./$.def');
function createObjectToArray(isEntries){
  return function(object){
    var O      = $.toObject(object)
      , keys   = $.getKeys(O)
      , length = keys.length
      , i      = 0
      , result = Array(length)
      , key;
    if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
    else while(length > i)result[i] = O[keys[i++]];
    return result;
  };
}
$def($def.S, 'Object', {
  values:  createObjectToArray(false),
  entries: createObjectToArray(true)
});
},{"./$":23,"./$.def":13}],77:[function(require,module,exports){
// https://gist.github.com/kangax/9698100
var $def = require('./$.def');
$def($def.S, 'RegExp', {
  escape: require('./$.replacer')(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)
});
},{"./$.def":13,"./$.replacer":27}],78:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
require('./$.collection-to-json')('Set');
},{"./$.collection-to-json":9}],79:[function(require,module,exports){
// https://github.com/mathiasbynens/String.prototype.at
'use strict';
var $def = require('./$.def')
  , $at  = require('./$.string-at')(true);
$def($def.P, 'String', {
  at: function at(pos){
    return $at(this, pos);
  }
});
},{"./$.def":13,"./$.string-at":30}],80:[function(require,module,exports){
'use strict';
var $def = require('./$.def')
  , $pad = require('./$.string-pad');
$def($def.P, 'String', {
  lpad: function lpad(n){
    return $pad(this, n, arguments[1], true);
  }
});
},{"./$.def":13,"./$.string-pad":31}],81:[function(require,module,exports){
'use strict';
var $def = require('./$.def')
  , $pad = require('./$.string-pad');
$def($def.P, 'String', {
  rpad: function rpad(n){
    return $pad(this, n, arguments[1], false);
  }
});
},{"./$.def":13,"./$.string-pad":31}],82:[function(require,module,exports){
// JavaScript 1.6 / Strawman array statics shim
var $       = require('./$')
  , $def    = require('./$.def')
  , $Array  = $.core.Array || Array
  , statics = {};
function setStatics(keys, length){
  $.each.call(keys.split(','), function(key){
    if(length == undefined && key in $Array)statics[key] = $Array[key];
    else if(key in [])statics[key] = require('./$.ctx')(Function.call, [][key], length);
  });
}
setStatics('pop,reverse,shift,keys,values,entries', 1);
setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
           'reduce,reduceRight,copyWithin,fill,turn');
$def($def.S, 'Array', statics);
},{"./$":23,"./$.ctx":12,"./$.def":13}],83:[function(require,module,exports){
require('./es6.array.iterator');
var $           = require('./$')
  , Iterators   = require('./$.iter').Iterators
  , ITERATOR    = require('./$.wks')('iterator')
  , ArrayValues = Iterators.Array
  , NodeList    = $.g.NodeList;
if($.FW && NodeList && !(ITERATOR in NodeList.prototype)){
  $.hide(NodeList.prototype, ITERATOR, ArrayValues);
}
Iterators.NodeList = ArrayValues;
},{"./$":23,"./$.iter":22,"./$.wks":37,"./es6.array.iterator":44}],84:[function(require,module,exports){
var $def  = require('./$.def')
  , $task = require('./$.task');
$def($def.G + $def.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});
},{"./$.def":13,"./$.task":33}],85:[function(require,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var $         = require('./$')
  , $def      = require('./$.def')
  , invoke    = require('./$.invoke')
  , partial   = require('./$.partial')
  , navigator = $.g.navigator
  , MSIE      = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
function wrap(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      $.isFunction(fn) ? fn : Function(fn)
    ), time);
  } : set;
}
$def($def.G + $def.B + $def.F * MSIE, {
  setTimeout:  wrap($.g.setTimeout),
  setInterval: wrap($.g.setInterval)
});
},{"./$":23,"./$.def":13,"./$.invoke":18,"./$.partial":26}],86:[function(require,module,exports){
require('./modules/es5');
require('./modules/es6.symbol');
require('./modules/es6.object.assign');
require('./modules/es6.object.is');
require('./modules/es6.object.set-prototype-of');
require('./modules/es6.object.to-string');
require('./modules/es6.object.statics-accept-primitives');
require('./modules/es6.function.name');
require('./modules/es6.function.has-instance');
require('./modules/es6.number.constructor');
require('./modules/es6.number.statics');
require('./modules/es6.math');
require('./modules/es6.string.from-code-point');
require('./modules/es6.string.raw');
require('./modules/es6.string.iterator');
require('./modules/es6.string.code-point-at');
require('./modules/es6.string.ends-with');
require('./modules/es6.string.includes');
require('./modules/es6.string.repeat');
require('./modules/es6.string.starts-with');
require('./modules/es6.array.from');
require('./modules/es6.array.of');
require('./modules/es6.array.iterator');
require('./modules/es6.array.species');
require('./modules/es6.array.copy-within');
require('./modules/es6.array.fill');
require('./modules/es6.array.find');
require('./modules/es6.array.find-index');
require('./modules/es6.regexp');
require('./modules/es6.promise');
require('./modules/es6.map');
require('./modules/es6.set');
require('./modules/es6.weak-map');
require('./modules/es6.weak-set');
require('./modules/es6.reflect');
require('./modules/es7.array.includes');
require('./modules/es7.string.at');
require('./modules/es7.string.lpad');
require('./modules/es7.string.rpad');
require('./modules/es7.regexp.escape');
require('./modules/es7.object.get-own-property-descriptors');
require('./modules/es7.object.to-array');
require('./modules/es7.map.to-json');
require('./modules/es7.set.to-json');
require('./modules/js.array.statics');
require('./modules/web.timers');
require('./modules/web.immediate');
require('./modules/web.dom.iterable');
module.exports = require('./modules/$').core;

},{"./modules/$":23,"./modules/es5":38,"./modules/es6.array.copy-within":39,"./modules/es6.array.fill":40,"./modules/es6.array.find":42,"./modules/es6.array.find-index":41,"./modules/es6.array.from":43,"./modules/es6.array.iterator":44,"./modules/es6.array.of":45,"./modules/es6.array.species":46,"./modules/es6.function.has-instance":47,"./modules/es6.function.name":48,"./modules/es6.map":49,"./modules/es6.math":50,"./modules/es6.number.constructor":51,"./modules/es6.number.statics":52,"./modules/es6.object.assign":53,"./modules/es6.object.is":54,"./modules/es6.object.set-prototype-of":55,"./modules/es6.object.statics-accept-primitives":56,"./modules/es6.object.to-string":57,"./modules/es6.promise":58,"./modules/es6.reflect":59,"./modules/es6.regexp":60,"./modules/es6.set":61,"./modules/es6.string.code-point-at":62,"./modules/es6.string.ends-with":63,"./modules/es6.string.from-code-point":64,"./modules/es6.string.includes":65,"./modules/es6.string.iterator":66,"./modules/es6.string.raw":67,"./modules/es6.string.repeat":68,"./modules/es6.string.starts-with":69,"./modules/es6.symbol":70,"./modules/es6.weak-map":71,"./modules/es6.weak-set":72,"./modules/es7.array.includes":73,"./modules/es7.map.to-json":74,"./modules/es7.object.get-own-property-descriptors":75,"./modules/es7.object.to-array":76,"./modules/es7.regexp.escape":77,"./modules/es7.set.to-json":78,"./modules/es7.string.at":79,"./modules/es7.string.lpad":80,"./modules/es7.string.rpad":81,"./modules/js.array.statics":82,"./modules/web.dom.iterable":83,"./modules/web.immediate":84,"./modules/web.timers":85}],87:[function(require,module,exports){
(function (global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol =
    typeof Symbol === "function" && Symbol.iterator || "@@iterator";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = Object.create((outerFn || Generator).prototype);

    generator._invoke = makeInvokeMethod(
      innerFn, self || null,
      new Context(tryLocsList || [])
    );

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    genFun.__proto__ = GeneratorFunctionPrototype;
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    return new Promise(function(resolve, reject) {
      var generator = wrap(innerFn, outerFn, self, tryLocsList);
      var callNext = step.bind(generator, "next");
      var callThrow = step.bind(generator, "throw");

      function step(method, arg) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
          return;
        }

        var info = record.arg;
        if (info.done) {
          resolve(info.value);
        } else {
          Promise.resolve(info.value).then(callNext, callThrow);
        }
      }

      callNext();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            delete context.sent;
          }

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  function defineGeneratorMethod(method) {
    Gp[method] = function(arg) {
      return this._invoke(method, arg);
    };
  }
  defineGeneratorMethod("next");
  defineGeneratorMethod("throw");
  defineGeneratorMethod("return");

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset();
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function() {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      // Pre-initialize at least 20 temporary variables to enable hidden
      // class optimizations for simple generators.
      for (var tempIndex = 0, tempName;
           hasOwn.call(this, tempName = "t" + tempIndex) || tempIndex < 20;
           ++tempIndex) {
        this[tempName] = null;
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          return this.complete(entry.completion, entry.afterLoc);
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],88:[function(require,module,exports){
module.exports = require("./lib/babel/polyfill");

},{"./lib/babel/polyfill":2}],89:[function(require,module,exports){
module.exports = require("babel-core/polyfill");

},{"babel-core/polyfill":88}],90:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = {
    'filter': {
        'subtype': 'buy',
        'sort': 'cost',
        'direction': 'asc'
    },
    'views': {
        'map': {
            text: 'Карта',
            value: 'map',
            active: false
        },
        'table': {
            text: 'Список',
            value: 'table',
            active: false
        },
        'grid': {
            text: 'Плитка',
            value: 'grid',
            active: false
        }
    },
    'transactions': {
        'buy': {
            name: 'Купить',
            type: 'buy',
            active: true
        },
        'rent': {
            name: 'Снять',
            type: 'rent',
            active: false
        }
    },
    'buildings': {
        'new': {
            active: true,
            filter: {
                'type': 'new'
            }
        },
        'flat': {
            active: false,
            filter: {
                'type': 'flat'
            }
        },
        'house': {
            active: false,
            filter: {
                'type': 'house'
            }
        },
        'commercial': {
            active: false,
            filter: {
                'type': 'commercial'
            }
        },
        'land': {
            active: false,
            filter: {
                'type': 'land'
            }
        }
    },
    'sort': {
        'table': {
            'rooms': {
                name: 'Количеству комнат',
                value: 'rooms',
                direction: 'asc'
            },
            'floor': {
                name: 'Этажу',
                value: 'floor',
                direction: 'asc'
            },
            'square': {
                name: 'Площади',
                value: 'square',
                direction: 'asc'
            },
            'cost': {
                name: 'Цене',
                value: 'cost',
                direction: 'asc'
            },
            'square_land': {
                value: 'square_land',
                direction: 'asc'
            },
            'top_floor': {
                value: 'top_floor',
                direction: 'asc'
            }
        },
        'grid': [{
            name: 'Количеству комнат',
            value: 'rooms'
        }, {
            name: 'Этажу',
            value: 'floor'
        }, {
            name: 'Площади',
            value: 'square'
        }, {
            name: 'Цене',
            value: 'cost'
        }]
    },
    'sorts': {
        'rooms': {
            name: 'Количеству комнат',
            value: 'rooms',
            direction: 'asc'
        },
        'floor': {
            name: 'Этажу',
            value: 'floor',
            direction: 'asc'
        },
        'square': {
            name: 'Площади',
            value: 'square',
            direction: 'asc'
        },
        'cost': {
            name: 'Цене',
            value: 'cost',
            direction: 'asc'
        },
        'square_land': {
            value: 'square_land',
            direction: 'asc'
        },
        'top_floor': {
            value: 'top_floor',
            direction: 'asc'
        }
    },
    'table': {
        'headers': [{
            name: 'Фото',
            'class': 'search__table-line-box-img',
            sort: false
        }, {
            name: 'Комнат',
            'class': '',
            sort: true,
            sortField: 'rooms'
        }, {
            name: 'Адрес',
            'class': 'search__table-line-box-address',
            sort: false
        }, {
            name: 'Этаж',
            additional: 'Материал',
            'class': 'search__table-line-box-floor',
            sort: true,
            sortField: 'floor'
        }, {
            name: 'Площадь',
            'class': '',
            sort: true,
            sortField: 'square'
        }, {
            name: 'Тип жилья',
            additional: 'Год сдачи',
            'class': 'search__table-line-box-type',
            sort: false
        }, {
            name: 'Цена, р.',
            'class': 'search__table-line-box-cost',
            additional: 'Цена за м<sup>2</sup>',
            sort: true,
            sortField: 'cost'
        }]
    },
    'subtype': 'buy',
    'sortvalue': 'cost',
    'direction': 'asc',
    'view': 'table',
    'building': 'new'
};
module.exports = exports['default'];

},{}],91:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TIMEOUT = new WeakMap();
var INIT = new WeakMap();
var DATASERVICE = new WeakMap();
var VIEWCONFIG = new WeakMap();
var ROOTSCOPE = new WeakMap();
var SCE = new WeakMap();
var COMPONENTSERVICE = new WeakMap();
var LOCATIONSERVICE = new WeakMap();

/**
 * ViewModal
 */
var vm = {};

var AppController = (function () {
    /*@ngInject*/

    function AppController($timeout, $sce, $rootScope, appViewConfig, dataService, componentService, locationService) {
        var _this = this;

        _classCallCheck(this, AppController);

        TIMEOUT.set(this, $timeout);
        DATASERVICE.set(this, dataService);
        VIEWCONFIG.set(this, appViewConfig);
        COMPONENTSERVICE.set(this, componentService);
        LOCATIONSERVICE.set(this, locationService);
        ROOTSCOPE.set(this, $rootScope);
        SCE.set(this, $sce);
        /**
         * ViewModal init
         * @type {MapController}
         */
        vm = this;

        INIT.set(this, function () {
            /**
             * Get data from DataService
             */
            vm.table = DATASERVICE.get(_this).getData('table');
            vm.tableHeaders = DATASERVICE.get(_this).getData('tableHeaders');
            vm.gridSorts = DATASERVICE.get(_this).getData('gridSorts');
            vm.grid = DATASERVICE.get(_this).getData('grid');
            vm.map = DATASERVICE.get(_this).getData('map');
            vm.transactions = DATASERVICE.get(_this).getData('transactions');
            vm.buildings = DATASERVICE.get(_this).getData('buildings');
            vm.building = DATASERVICE.get(_this).getData('building');
            vm.views = DATASERVICE.get(_this).getData('views');
            vm.view = DATASERVICE.get(_this).getData('view');
            vm.sorts = DATASERVICE.get(_this).getData('sorts');

            vm.floatTheadSettings = {
                scrollingTop: 120,
                useAbsolutePositioning: false,
                enableAria: true,
                autoReflow: true
            };

            /**
             * Events list
             */
            ROOTSCOPE.get(_this).$on('filterUpdate', function (event, data) {
                LOCATIONSERVICE.get(_this).set(data);
                ROOTSCOPE.get(_this).$applyAsync();
            });

            ROOTSCOPE.get(_this).$on('transactionTypeUpdate', function (event, data) {
                vm.transactions = DATASERVICE.get(_this).getData('transactions');
                ROOTSCOPE.get(_this).$applyAsync();
            });

            ROOTSCOPE.get(_this).$on('dataUpdate', function (event, data) {
                vm.buildings = DATASERVICE.get(_this).getData('buildings');
                vm.building = DATASERVICE.get(_this).getData('building');

                vm.views = DATASERVICE.get(_this).getData('views');
                vm.view = DATASERVICE.get(_this).getData('view');
                vm[vm.view] = DATASERVICE.get(_this).getData(vm.view);
                vm.tableHeaders = DATASERVICE.get(_this).getData('tableHeaders');
                vm.gridSorts = DATASERVICE.get(_this).getData('gridSorts');

                ROOTSCOPE.get(_this).$applyAsync();
            });

            ROOTSCOPE.get(_this).$on('buildingTypeUpdate', function (event, data) {
                vm.buildings = DATASERVICE.get(_this).getData('buildings');
                vm.building = DATASERVICE.get(_this).getData('building');

                ROOTSCOPE.get(_this).$applyAsync();
            });

            ROOTSCOPE.get(_this).$on('viewTypeUpdate', function (event, data) {
                vm.views = DATASERVICE.get(_this).getData('views');
                vm.view = DATASERVICE.get(_this).getData('view');
                vm[vm.view] = DATASERVICE.get(_this).getData(vm.view);
                vm.tableHeaders = DATASERVICE.get(_this).getData('tableHeaders');
                vm.gridSorts = DATASERVICE.get(_this).getData('gridSorts');

                ROOTSCOPE.get(_this).$applyAsync();
            });

            /**
             * Set vm update on location cahnge event
             */
            window.onhashchange = function () {
                vm.update();
            };

            vm.update();
        });
        INIT.get(this)();
    }
    AppController.$inject = ["$timeout", "$sce", "$rootScope", "appViewConfig", "dataService", "componentService", "locationService"];

    _createClass(AppController, [{
        key: 'trustDangerousSnippet',
        value: function trustDangerousSnippet(snippet) {
            return SCE.get(this).trustAsHtml(snippet);
        }
    }, {
        key: 'selectViewType',
        value: function selectViewType(type) {
            DATASERVICE.get(this).viewType(type);
        }
    }, {
        key: 'selectTransactionType',
        value: function selectTransactionType(type) {
            DATASERVICE.get(this).transactionType(type);
        }
    }, {
        key: 'selectBuildingType',
        value: function selectBuildingType(type) {
            DATASERVICE.get(this).buildingType(type);
        }
    }, {
        key: 'sort',
        value: function sort(params) {
            DATASERVICE.get(this).sort(params);
        }
    }, {
        key: 'goPage',
        value: function goPage(value) {
            if (value != '...') {
                var data = {};
                data['page'] = value;
                DATASERVICE.get(vm).updateBuildingFilter(vm.building, data);
            }
        }
    }, {
        key: 'goLink',
        value: function goLink(value) {
            window.location.href = value;
        }
    }, {
        key: 'isFavorite',
        value: function isFavorite(uid) {
            return DATASERVICE.get(vm).isFavorite(uid);
        }
    }, {
        key: 'update',
        value: function update() {
            /**
             * Get curent url
             */
            var search = LOCATIONSERVICE.get(vm).get();

            DATASERVICE.get(vm).updateBuildingFilterGlobal(search.type, search);
            /**
             * Update viewModel sates with data taken in url
             */
            vm.sort({ sort: search.sort, direction: search.direction });
            vm.selectViewType(search.view);
            vm.selectBuildingType(search.type);
            vm.selectTransactionType(search.subtype);

            /**
             * Update data in components
             */
            COMPONENTSERVICE.get(vm).update(search);
            console.log('update visual components finish');
            /**
             * Load
             */
            DATASERVICE.get(vm).loadData();
        }
    }]);

    return AppController;
})();

exports.AppController = AppController;

},{}],92:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var INIT = new WeakMap();
var ROOTSCOPE = new WeakMap();
var TIMEOUT = new WeakMap();
var MAPSERVICE = new WeakMap();

/**
 * ViewModal
 */
var vm = {};

var MapController = (function () {
    /*@ngInject*/

    function MapController($rootScope, $timeout, mapService) {
        var _this = this;

        _classCallCheck(this, MapController);

        ROOTSCOPE.set(this, $rootScope);
        TIMEOUT.set(this, $timeout);
        MAPSERVICE.set(this, mapService);
        /**
         * ViewModal init
         * @type {MapController}
         */
        vm = this;

        INIT.set(this, function () {
            /**
             * Events list
             */
            ROOTSCOPE.get(_this).$on('updateMap', function (event, data) {
                console.log('map: try update');
                vm.showMap().then(function () {
                    console.log('map: updating');
                    vm.updateMap(data);
                }).then(function () {
                    vm.resizeMap();
                })['catch'](function (error) {
                    throw new Error(error);
                });
                ROOTSCOPE.get(_this).$applyAsync();
            });

            ROOTSCOPE.get(_this).$on('showMap', function (event, data) {
                vm.showMap();
                ROOTSCOPE.get(_this).$applyAsync();
            });

            ROOTSCOPE.get(_this).$on('hideMap', function (event, data) {
                vm.hideMap();
                ROOTSCOPE.get(_this).$applyAsync();
            });
        });
        INIT.get(this)();
    }
    MapController.$inject = ["$rootScope", "$timeout", "mapService"];

    _createClass(MapController, [{
        key: 'hideMap',
        value: function hideMap() {
            MAPSERVICE.get(vm).hideMap();
        }
    }, {
        key: 'showMap',
        value: function showMap() {
            return vm.loadMap().then(function (resolve) {
                console.log(resolve);

                MAPSERVICE.get(vm).showMap();
            });
        }
    }, {
        key: 'updateMap',
        value: function updateMap(data) {
            MAPSERVICE.get(vm).updateMap(data);
        }
    }, {
        key: 'resizeMap',
        value: function resizeMap() {
            MAPSERVICE.get(vm).resizeMap();
        }
    }, {
        key: 'loadMap',
        value: function loadMap() {
            return new Promise(function (resolve) {
                function action() {
                    if (MAPSERVICE.get(vm).isLoad) {
                        resolve('map: is load');
                    } else {
                        //LOAD MAP
                        console.log('map: try load');
                        MAPSERVICE.get(vm).loadMap();
                        TIMEOUT.get(vm)(function () {
                            action();
                        }, 50);
                    }
                }
                action();
            });
        }
    }]);

    return MapController;
})();

exports.MapController = MapController;

},{}],93:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TIMEOUT = new WeakMap();
var self = {};

var FavoriteDirective = (function () {
    /*@ngInject*/

    function FavoriteDirective($timeout) {
        _classCallCheck(this, FavoriteDirective);

        TIMEOUT.set(this, $timeout);

        self = this;
    }
    FavoriteDirective.$inject = ["$timeout"];

    _createClass(FavoriteDirective, [{
        key: "link",
        value: function link(scope, element) {
            TIMEOUT.get(self)(function () {
                window.favorite.update(element);
            }, 0);
        }
    }]);

    return FavoriteDirective;
})();

exports.FavoriteDirective = FavoriteDirective;

},{}],94:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TIMEOUT = new WeakMap();
var DATASERVICE = new WeakMap();
var self = {};

var FilterDirective = (function () {
    /*@ngInject*/

    function FilterDirective($timeout, dataService) {
        _classCallCheck(this, FilterDirective);

        TIMEOUT.set(this, $timeout);
        DATASERVICE.set(this, dataService);
        this.scope = {
            filterField: '@',
            filterValue: '@'
        };

        self = this;
    }
    FilterDirective.$inject = ["$timeout", "dataService"];

    _createClass(FilterDirective, [{
        key: 'link',
        value: function link(scope) {
            TIMEOUT.get(self)(function () {
                DATASERVICE.get(self).updateFilter(scope.filterField, scope.filterValue);
            }, 0);
        }
    }]);

    return FilterDirective;
})();

exports.FilterDirective = FilterDirective;

},{}],95:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TIMEOUT = new WeakMap();
var self = {};

var PopupDirective = (function () {
    /*@ngInject*/

    function PopupDirective($timeout) {
        _classCallCheck(this, PopupDirective);

        TIMEOUT.set(this, $timeout);
        this.scope = {
            popupText: '@',
            popupPosition: '@'
        };

        self = this;
    }
    PopupDirective.$inject = ["$timeout"];

    _createClass(PopupDirective, [{
        key: 'link',
        value: function link(scope, element) {
            TIMEOUT.get(self)(function () {
                window.popup(element, scope.popupText, scope.popupPosition);
            }, 0);
        }
    }]);

    return PopupDirective;
})();

exports.PopupDirective = PopupDirective;

},{}],96:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DATASERVICE = new WeakMap();
var CACHESERVICE = new WeakMap();
var self = {};

var SelectorDirective = (function () {
    /*@ngInject*/

    function SelectorDirective(dataService, cacheService) {
        _classCallCheck(this, SelectorDirective);

        DATASERVICE.set(this, dataService);
        CACHESERVICE.set(this, cacheService);
        this.scope = {
            filterField: '@',
            typeOfBuilding: '@'
        };

        self = this;
    }
    SelectorDirective.$inject = ["dataService", "cacheService"];

    _createClass(SelectorDirective, [{
        key: 'link',

        // optional compile function
        //compile(tElement) {
        //    tElement.css('position', 'absolute');
        //}

        // optional link function
        value: function link(scope, element) {
            CACHESERVICE.get(self).components.push({
                element: element,
                type: 'selector',
                typeOfBuilding: scope.typeOfBuilding,
                filterField: scope.filterField
            });

            $(element).chosen({ width: '100%', disable_search_threshold: 10 });

            $(element).on('change', function (evt, params) {
                if (params.selected == 'any') {
                    selectAny();
                } else {
                    $('option[value="any"]', element).prop('selected', false);
                    $(element).trigger('chosen:updated');
                }
                if (params.deselected == 'any') {
                    selectAny();
                } else {
                    if ($('option:selected', element).map(function () {
                        return this.value;
                    }).get().join(',') == '') {
                        selectAny();
                    }
                }

                function selectAny() {
                    $('option', element).prop('selected', false);
                    $('option[value="any"]', element).prop('selected', true);
                    $(element).trigger('chosen:updated');
                }

                applyFilter(evt, params);
            });
            //FILTER FUNCTIONS
            function applyFilter() {
                var data = {};
                data[scope.filterField] = $('option:selected', element).map(function () {
                    return this.value;
                }).get().join(',');
                DATASERVICE.get(self).updateBuildingFilter(scope.typeOfBuilding, data);
            }
        }
    }]);

    return SelectorDirective;
})();

exports.SelectorDirective = SelectorDirective;

},{}],97:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DATASERVICE = new WeakMap();
var CACHESERVICE = new WeakMap();
var TIMEOUT = new WeakMap();
var self = {};

var SliderDirective = (function () {
    /*@ngInject*/

    function SliderDirective($timeout, dataService, cacheService) {
        _classCallCheck(this, SliderDirective);

        DATASERVICE.set(this, dataService);
        CACHESERVICE.set(this, cacheService);
        TIMEOUT.set(this, $timeout);
        this.scope = {
            filterField: '@',
            value: '@',
            range: '@',
            postfix: '@',
            typeOfBuilding: '@'
        };

        self = this;
    }
    SliderDirective.$inject = ["$timeout", "dataService", "cacheService"];

    _createClass(SliderDirective, [{
        key: 'link',

        // optional link function
        value: function link(scope, element) {
            var values = scope.value.split(';');
            var ranges = scope.range.split(';');
            var slider = {};
            var beforeInput = $('.before', $(element).parent());
            var afterInput = $('.after', $(element).parent());

            //beforeInput это первый input в который вводится minPrice
            //так же нужно описать и для второго инпута с чуть другими данными

            beforeInput.change(function () {
                var after = parseInt(afterInput.val());
                var before = parseInt(beforeInput.val());
                if (before < parseInt(values[0])) {
                    before = values[0];
                }
                if (before > parseInt(values[1])) {
                    before = values[1];
                }
                if (before > after) {
                    before = after;
                }
                slider.update({
                    from: before
                });
            });

            afterInput.change(function () {
                var after = parseInt(afterInput.val());
                var before = parseInt(beforeInput.val());
                if (after > parseInt(values[1])) {
                    after = values[1];
                }
                if (after < parseInt(values[0])) {
                    after = values[0];
                }
                if (after < before) {
                    after = before;
                }
                slider.update({
                    to: after
                });
            });

            //UI FUNCTIONS
            TIMEOUT.get(self)(function () {
                $(element).ionRangeSlider({
                    min: +values[0],
                    max: +values[1],
                    type: 'double',
                    postfix: ' ' + scope.postfix,
                    step: 1,
                    force_edges: true,
                    from: +ranges[0],
                    to: +ranges[1],
                    onFinish: function onFinish(a) {
                        applyFilter(a);
                    },
                    onStart: function onStart(a) {
                        applyFilter(a, 'start');
                    },
                    onUpdate: function onUpdate(a) {
                        applyFilter(a);
                    }
                });

                slider = $(element).data('ionRangeSlider');

                CACHESERVICE.get(self).components.push({
                    element: element,
                    slider: $(element).data('ionRangeSlider'),
                    type: 'slider',
                    typeOfBuilding: scope.typeOfBuilding,
                    propertyMin: scope.filterField + '_min',
                    propertyMax: scope.filterField + '_max',
                    filterField: scope.filterField,
                    beforeInput: beforeInput,
                    afterInput: afterInput
                });
            });

            //FILTER FUNCTIONS
            function applyFilter(a, state) {
                beforeInput.val(a.from);
                afterInput.val(a.to);

                var data = {};
                data[scope.filterField + '_min'] = a.from;
                data[scope.filterField + '_max'] = a.to;

                DATASERVICE.get(self).updateBuildingFilter(scope.typeOfBuilding, data, state);
            }
        }
    }]);

    return SliderDirective;
})();

exports.SliderDirective = SliderDirective;

},{}],98:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DATASERVICE = new WeakMap();
var CACHESERVICE = new WeakMap();
var TIMEOUT = new WeakMap();
var self = {};

var ToggleDirective = (function () {
    /*@ngInject*/

    function ToggleDirective($timeout, dataService, cacheService) {
        _classCallCheck(this, ToggleDirective);

        DATASERVICE.set(this, dataService);
        CACHESERVICE.set(this, cacheService);
        TIMEOUT.set(this, $timeout);
        this.scope = {
            values: '@',
            filterField: '@',
            typeOfBuilding: '@'
        };

        self = this;
    }
    ToggleDirective.$inject = ["$timeout", "dataService", "cacheService"];

    _createClass(ToggleDirective, [{
        key: 'link',

        // optional link function
        value: function link(scope, element) {
            CACHESERVICE.get(self).components.push({
                element: element,
                type: 'toggle',
                typeOfBuilding: scope.typeOfBuilding,
                filterField: scope.filterField
            });

            var values = scope.values.split(';');

            $.each(values, function (index, value) {
                var text = value.split(':')[0];
                var queryText = value.split(':')[1] || text;
                var active = value.split(':')[2] ? true : false;

                var item = $('<span></span>').addClass('search__toggle-element-item').attr('value', queryText);

                item.on('click', function () {
                    if (item.hasClass('active')) {
                        item.removeClass('active');
                    } else {
                        item.addClass('active');
                    }
                    applyFilter();
                });

                if (active) item.addClass('active');
                var itemText = $('<span></span>').addClass('search__toggle-element-item-text');

                itemText.append(text);
                item.append(itemText);
                element.append(item);
            });

            //FILTER FUNCTIONS
            function applyFilter(state) {
                var items = $('.search__toggle-element-item', element);
                var query = [];
                $.each(items, function (index, element) {
                    if ($(element).hasClass('active')) query.push($(element).attr('value'));
                });
                var data = {};
                data[scope.filterField] = query.toString();

                DATASERVICE.get(self).updateBuildingFilter(scope.typeOfBuilding, data, state);
            }

            TIMEOUT.get(self)(function () {
                applyFilter('start');
            }, 0);
        }
    }]);

    return ToggleDirective;
})();

exports.ToggleDirective = ToggleDirective;

},{}],99:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.cut = cut;

function cut(value, wordwise, max, tail) {
    if (!value) return '';

    max = parseInt(max, 10);
    if (!max) return value;
    if (value.length <= max) return value;

    value = value.substr(0, max);
    if (wordwise) {
        var lastspace = value.lastIndexOf(' ');
        if (lastspace != -1) {
            value = value.substr(0, lastspace);
        }
    }

    return value + (tail || ' …');
}

},{}],100:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CacheService =
/*@ngInject*/
function CacheService() {
    _classCallCheck(this, CacheService);

    //inject private

    this.immovables = new Map();
    this.timeout = new Map();
    this.components = [];
};

exports.CacheService = CacheService;

},{}],101:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TIMEOUT = new WeakMap();
var CACHESERVICE = new WeakMap();
var self;

var ComponentService = (function () {
    /*@ngInject*/

    function ComponentService($timeout, cacheService) {
        _classCallCheck(this, ComponentService);

        //inject private
        TIMEOUT.set(this, $timeout);
        CACHESERVICE.set(this, cacheService);

        self = this;
    }
    ComponentService.$inject = ["$timeout", "cacheService"];

    _createClass(ComponentService, [{
        key: 'update',
        value: function update(search) {
            var components = CACHESERVICE.get(self).components;

            /**
             * Timeout fix for wait loading
             */
            TIMEOUT.get(self)(function () {
                $('.ui-accordion-header').each(function (index, item) {
                    var $item = $(item);

                    if ($item.data('building-type') === search.type) {
                        //check for active state
                        if (!$item.hasClass('ui-accordion-header-active')) {
                            $item.click();
                        }
                    }
                });

                $(components).each(function (index, item) {
                    if (search.type == item.typeOfBuilding) {
                        if (item.type == 'slider') {
                            var from = search[item.propertyMin];
                            var to = search[item.propertyMax];

                            if (from && to) {
                                TIMEOUT.get(self)(function () {
                                    item.slider.update({
                                        to: +to,
                                        from: +from
                                    });
                                }, 0);
                            }
                        }

                        if (item.type == 'selector') {
                            var values;

                            if (search[item.filterField] != null && search[item.filterField] != '') values = search[item.filterField].split(',');

                            $('option', item.element).prop('selected', false);

                            if (values != null) {
                                $.each(values, function (i, name) {
                                    $('option[value=' + name + ']', item.element).prop('selected', true);
                                });
                            } else {
                                $('option[value="any"]', item.element).prop('selected', true);
                            }

                            $(item.element).trigger('chosen:updated');
                        }

                        if (item.type == 'toggle') {

                            var items = $('.search__toggle-element-item', item.element);
                            var query = search[item.filterField] ? search[item.filterField].split(',') : null;

                            if (query === null) {
                                items.removeClass('active');
                            }

                            if (items != null && query != null) {
                                $.each(items, function (index, element) {
                                    $(element).removeClass('active');
                                    $.each(query, function (index, item) {
                                        var localQuery = $(element).attr('value').split(',');
                                        if (localQuery != null && localQuery.length > 0) {
                                            $.each(localQuery, function (index, localItem) {
                                                if (localItem == item) $(element).addClass('active');
                                            });
                                        }
                                    });
                                });
                            }
                        }
                    }
                });
            }, 0);
        }
    }]);

    return ComponentService;
})();

exports.ComponentService = ComponentService;

},{}],102:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TIMEOUT = new WeakMap();
var INIT = new WeakMap();
var IMMOVABLESSERVICE = new WeakMap();
var VIEWCONFIG = new WeakMap();
var LOCATIONSERVICE = new WeakMap();
var CACHESERVICE = new WeakMap();
var FAVORITESERVICE = new WeakMap();
var ROOTSCOPE = new WeakMap();

var self = {};

var DataService = (function () {
    /*@ngInject*/

    function DataService($timeout, $rootScope, immovablesService, appViewConfig, locationService, cacheService, favoriteService) {
        var _this = this;

        _classCallCheck(this, DataService);

        //inject private
        TIMEOUT.set(this, $timeout);
        IMMOVABLESSERVICE.set(this, immovablesService);
        VIEWCONFIG.set(this, appViewConfig);
        CACHESERVICE.set(this, cacheService);
        ROOTSCOPE.set(this, $rootScope);
        LOCATIONSERVICE.set(this, locationService);
        FAVORITESERVICE.set(this, favoriteService);
        /**
         * Create Data Model instance
         * @type {DataService}
         */
        self = this;

        INIT.set(this, function () {
            var search = LOCATIONSERVICE.get(_this).get();

            self.map = {};
            self.table = {};
            self.grid = {};

            self.tableHeaders = VIEWCONFIG.get(_this).table.headers;
            self.gridSorts = VIEWCONFIG.get(_this).sort.grid;
            self.sorts = VIEWCONFIG.get(_this).sorts;
            self.views = VIEWCONFIG.get(_this).views;
            self.buildings = VIEWCONFIG.get(_this).buildings;
            self.transactions = VIEWCONFIG.get(_this).transactions;
            /**
             * Set values from LOCATION and config file
             * @type {*|view|sample.view|.filter.view|$rootScope.globalFilter.view|WindowProxy}
             */
            self.view = search.view;
            self.building = search.type;

            self.filter = {
                'subtype': search.subtype,
                'sort': search.sort,
                'direction': search.direction,
                'view': self.view,
                'city': search.city
            };
        });

        INIT.get(this)();
    }
    DataService.$inject = ["$timeout", "$rootScope", "immovablesService", "appViewConfig", "locationService", "cacheService", "favoriteService"];

    _createClass(DataService, [{
        key: 'transactionType',

        /**
         * Change transation type
         * @param value
         * @constructor
         */
        value: function transactionType(value) {
            $.each(self.transactions, function (name, transation) {
                if (transation.active == true && name == value) {
                    return false;
                }
                if (value == transation.type) {
                    transation.active = true;
                    self.updateFilter('subtype', transation.type);
                } else {
                    transation.active = false;
                }
            });

            ROOTSCOPE.get(this).$broadcast('transactionTypeUpdate', value);
        }
    }, {
        key: 'buildingType',

        /**
         * Change type of displayed building
         * @param value
         * @constructor
         */
        value: function buildingType(value) {
            $.each(self.buildings, function (name, type) {
                if (name == value) {
                    type.active = true;
                    self.building = value;

                    var typeOfBuildingFilter = self.buildings[self.building].filter;

                    ROOTSCOPE.get(self).$broadcast('filterUpdate', _.assign({}, typeOfBuildingFilter, self.filter));
                } else {
                    type.active = false;
                }
            });

            ROOTSCOPE.get(this).$broadcast('buildingTypeUpdate', value);
        }
    }, {
        key: 'viewType',

        /**
         * Change type of view
         * @param value
         * @constructor
         */
        value: function viewType(value) {
            $.each(self.views, function (name, view) {
                if (view.active == true && name == value) {
                    return false;
                }
                if (name == value) {
                    view.active = true;
                    self.view = name;
                } else {
                    view.active = false;
                }
            });

            if (value == 'map') {
                ROOTSCOPE.get(self).$broadcast('showMap');
            } else {
                ROOTSCOPE.get(self).$broadcast('hideMap');
            }

            self.updateFilter('view', value);
            ROOTSCOPE.get(self).$broadcast('viewTypeUpdate', value);
        }
    }, {
        key: 'getData',

        /**
         * Get data from service
         * @param key
         * @returns {*}
         * @constructor
         */
        value: function getData(key) {
            return self[key];
        }
    }, {
        key: 'setData',

        /**
         * Set data to service
         * @param key
         * @param value
         */
        value: function setData(key, value) {
            self[key] = value;
        }
    }, {
        key: 'updateBuildingFilter',

        /**
         * Update building search filter
         * @param building
         * @param key
         * @param value
         * @param state
         * @returns {boolean}
         * @constructor
         */
        value: function updateBuildingFilter(building, data) {
            var state = arguments[2] === undefined ? 'stop' : arguments[2];

            if (state === 'start') return false;

            _.assign(self.buildings[building].filter, data);

            if (self.building === building) {
                self.updateFilter();
            }
        }
    }, {
        key: 'updateBuildingFilterGlobal',

        /**
         * Update all values in building filet
         * @param building
         * @param data
         * @returns {boolean}
         */
        value: function updateBuildingFilterGlobal(building, data) {
            if (building == null) return false;

            self.buildings[building].filter = data;
            self.updateFilter();
        }
    }, {
        key: 'updateFilter',

        /**
         * Update search global filter
         * @param key
         * @param value
         * @constructor
         */
        value: function updateFilter() {
            var key = arguments[0] === undefined ? null : arguments[0];
            var value = arguments[1] === undefined ? null : arguments[1];

            if (key != null || value != null) self.filter[key] = value;

            var filter = _.assign({}, self.buildings[self.building].filter, self.filter);

            ROOTSCOPE.get(this).$broadcast('filterUpdate', filter);
        }
    }, {
        key: 'sort',

        /**
         * sort data in model
         * @param params
         * @constructor
         */
        value: function sort() {
            var params = arguments[0] === undefined ? {} : arguments[0];

            params.page = params.page || '1';
            params.direction = params.direction || 'asc';
            params.sort = params.sort || 'cost';

            var direction = self.sorts[params.sort].direction;

            $.each(self.sorts, function (key) {
                self.sorts[key].direction = params.direction == 'asc' ? 'asc' : 'desc';
                if (params.sort == key) {
                    self.sorts[key].direction = params.direction == 'asc' ? 'desc' : 'asc';
                }
            });

            self.updateFilter('sort', params.sort);
            self.updateFilter('direction', params.direction);
        }
    }, {
        key: 'isFavorite',
        value: function isFavorite(uid) {
            return FAVORITESERVICE.get(self).isFavorite(uid);
        }
    }, {
        key: 'loadData',

        /**
         * Load data from IMMOVABLESSERVICE
         */
        value: function loadData() {
            ROOTSCOPE.get(self).infoText = 'Идёт загрузка';
            NProgress.start();

            TIMEOUT.get(this).cancel(CACHESERVICE.get(this).timeout.get('loadData'));

            CACHESERVICE.get(this).timeout.set('loadData', TIMEOUT.get(this)(function () {
                IMMOVABLESSERVICE.get(self).get(LOCATIONSERVICE.get(self).get()).then(function (data) {
                    self.applyData(data);
                    if (data.view === 'map') ROOTSCOPE.get(self).$broadcast('updateMap', data);
                    NProgress.done();
                    console.log('loading items count: ' + data.items.length);
                });
            }, 0));
        }
    }, {
        key: 'applyData',

        /**
         * Apply data to model
         * @param data
         */
        value: function applyData(data) {
            console.log('loading item type: ' + data.view);
            self[data.view].items = data.items;
            self[data.view].pages = data.pages;
            self.tableHeaders = data.tableHeaders || self.tableHeaders;
            self.gridSorts = data.gridSorts || self.gridSorts;

            ROOTSCOPE.get(self).$broadcast('dataUpdate');
            ROOTSCOPE.get(self).infoText = 'Нет подходящих вариантов';
        }
    }]);

    return DataService;
})();

exports.DataService = DataService;

},{}],103:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TIMEOUT = new WeakMap();
var self;

var FavoriteService = (function () {

    /*@ngInject*/

    function FavoriteService($timeout) {
        _classCallCheck(this, FavoriteService);

        //inject private
        TIMEOUT.set(this, $timeout);

        /**
         *
         * @type {FavoriteService}
         */
        self = this;
    }
    FavoriteService.$inject = ["$timeout"];

    _createClass(FavoriteService, [{
        key: 'isFavorite',
        value: function isFavorite(uid) {
            var favoriteCookie = $.cookie('favorite') || {};
            return favoriteCookie[uid];
        }
    }]);

    return FavoriteService;
})();

exports.FavoriteService = FavoriteService;

},{}],104:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var HTTP = new WeakMap();
var Q = new WeakMap();
var CACHESERVICE = new WeakMap();
var LOCATIONSERVICE = new WeakMap();
var self;

var ImmovablesService = (function () {

    /*@ngInject*/

    function ImmovablesService($http, $q, cacheService, locationService) {
        _classCallCheck(this, ImmovablesService);

        //inject private
        HTTP.set(this, $http);
        LOCATIONSERVICE.set(this, locationService);
        Q.set(this, $q);
        CACHESERVICE.set(this, cacheService);

        self = this;
    }
    ImmovablesService.$inject = ["$http", "$q", "cacheService", "locationService"];

    _createClass(ImmovablesService, [{
        key: 'get',

        /**
         * Get data from server with query content curent url location data
         * @returns {*}
         */
        value: function get() {
            var search = arguments[0] === undefined ? {} : arguments[0];

            var cachedData = self.getFromCache(search);

            if (cachedData != null) {
                var deferred = Q.get(self).defer();
                deferred.resolve(cachedData);
                return deferred.promise;
            } else {
                /**
                 * Get data from server
                 */
                return HTTP.get(self)({
                    method: 'get',
                    url: '/site/search',
                    //url: '/site/search',
                    params: search
                }).then(function (result) {
                    var sample = {
                        'pages': result.data.paginate || [],
                        'items': result.data.items || [],
                        'tableHeaders': result.data.table_fields,
                        'gridSorts': result.data.grid_sorts,
                        'view': result.data.view || 'list'
                    };

                    var key = JSON.stringify(search);
                    CACHESERVICE.get(self).immovables.set(key, sample);

                    /**
                     * Return format data
                     */
                    return sample;
                });
            }
        }
    }, {
        key: 'getFromCache',

        /**
         * Get data from cache
         * @returns {*}
         */
        value: function getFromCache(search) {
            var key = JSON.stringify(search);
            return CACHESERVICE.get(self).immovables.get(key);
        }
    }]);

    return ImmovablesService;
})();

exports.ImmovablesService = ImmovablesService;

},{}],105:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LOCATION = new WeakMap();
var VIEWCONFIG = new WeakMap();
var self;

var LocationService = (function () {

    /*@ngInject*/

    function LocationService($location, appViewConfig) {
        _classCallCheck(this, LocationService);

        //inject private
        LOCATION.set(this, $location);
        VIEWCONFIG.set(this, appViewConfig);

        self = this;
    }
    LocationService.$inject = ["$location", "appViewConfig"];

    _createClass(LocationService, [{
        key: "set",
        value: function set(data) {
            LOCATION.get(self).search(data);
        }
    }, {
        key: "get",
        value: function get() {
            var search = LOCATION.get(self).search();

            search.view = search.view || VIEWCONFIG.get(self).view;
            search.type = search.type || VIEWCONFIG.get(self).building;
            search.subtype = search.subtype || VIEWCONFIG.get(self).subtype;
            search.sort = search.sort || VIEWCONFIG.get(self).sortvalue;
            search.direction = search.direction || VIEWCONFIG.get(self).direction;
            search.city = search.city || VIEWCONFIG.get(self).city;

            return search;
        }
    }]);

    return LocationService;
})();

exports.LocationService = LocationService;

},{}],106:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MAPPOPUPSERVICE = new WeakMap();
var self;

var MapMarkerService = (function () {

    /*@ngInject*/

    function MapMarkerService(mapPopupService) {
        _classCallCheck(this, MapMarkerService);

        //inject private
        MAPPOPUPSERVICE.set(this, mapPopupService);

        self = this;
    }
    MapMarkerService.$inject = ["mapPopupService"];

    _createClass(MapMarkerService, [{
        key: 'specialMarker',
        value: function specialMarker(data) {
            var specialMarkerIcon = DG.icon({
                iconUrl: '/img/icon-map-special.png',
                iconRetinaUrl: '/img/icon-map-special@2x.png',
                iconSize: [38, 65],
                iconAnchor: [19, 65],
                shadowUrl: '/img/icon-map-special-shadow.png',
                shadowRetinaUrl: '/img/icon-map-special-shadow@2x.png',
                shadowSize: [53, 26],
                shadowAnchor: [3, 23]
            });

            var marker = new PruneCluster.Marker(data.lat, data.long, {
                icon: specialMarkerIcon
            });

            MAPPOPUPSERVICE.get(self).createPopup(marker, data);

            return marker;
        }
    }, {
        key: 'defaultMarker',
        value: function defaultMarker(data) {
            var markerIcon = DG.icon({
                iconUrl: '/img/icon-map.png',
                iconRetinaUrl: '/img/icon-map@2x.png',
                iconSize: [29, 50],
                iconAnchor: [15, 50],
                shadowUrl: '/img/icon-map-shadow.png',
                shadowRetinaUrl: '/img/icon-map-shadow@2x.png',
                shadowSize: [40, 19],
                shadowAnchor: [3, 18]
            });

            var marker = new PruneCluster.Marker(data.lat, data.long, {
                icon: markerIcon
            });

            MAPPOPUPSERVICE.get(self).createPopup(marker, data);

            return marker;
        }
    }, {
        key: 'createMarker',
        value: function createMarker(data) {
            var marker;
            if (data.special === false) {
                marker = self.defaultMarker(data);
                marker.category = 0;
                return marker;
            } else {
                marker = self.specialMarker(data);
                marker.category = 1;
                return marker;
            }
        }
    }]);

    return MapMarkerService;
})();

exports.MapMarkerService = MapMarkerService;

},{}],107:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var self;

var MapPopupService = (function () {

    /*@ngInject*/

    function MapPopupService($rootScope, $timeout) {
        _classCallCheck(this, MapPopupService);

        //inject private

        self = this;
    }
    MapPopupService.$inject = ["$rootScope", "$timeout"];

    _createClass(MapPopupService, [{
        key: 'createPopup',
        value: function createPopup(marker, data) {
            var img = '',
                icons = '';

            if (data.rassrochka === '1') icons += '<a href="/" class="search__list-item-icons-icon search__map-list-item-icon prosent popup-rasr"></a> ';
            if (data.mortagage === '1') icons += '<a href="/" class="search__list-item-icons-icon search__map-list-item-icon credit popup-ipo"></a> ';
            if (data.matcapital === '1') icons += '<a href="/" class="search__list-item-icons-icon search__map-list-item-icon baby popup-mother"></a> ';

            var html = '<div class=""> ' + icons + ' </div>\n            <a href="' + data.uri + '" class="balloon-title">' + data.title + '</a>\n            <p class="balloon-field"><span class="balloon-field-name">Адрес: </span>\n            <span class="balloon-field-value">' + data.address + '</span></p>\n            <p class="balloon-field"><span class="balloon-field-name">Этаж: </span>\n            <span class="balloon-field-value"> ' + data.floor + '/' + data.top_floor + '</span></p>\n            <p class="balloon-field"><span class="balloon-field-name">Площадь: </span>\n            <span class="balloon-field-value">' + data.square + ' м<sup>2</sup></span></p>\n            <p class="balloon-cost">' + data.cost + ' руб.</p>';

            if (data.special) {
                img = '<img class="img img-responsive balloon-img" src="' + data.image + '" alt=""/>';

                marker.data.popupOptions = {
                    className: 'map-spidlifer-popup map-spidlifer-popup-special',
                    offset: L.point(0, -20)
                };
            } else {
                marker.data.popupOptions = {
                    className: 'map-spidlifer-popup',
                    offset: L.point(0, -20)
                };
            }
            marker.data.popup = img + html;
        }
    }, {
        key: 'createClusterMarker',
        value: function createClusterMarker(cluster) {
            var c = 'search__map-bullet-',
                html = '',
                size = {
                height: 0,
                width: 0
            },
                anchor = {
                top: 0,
                left: 0
            };

            if (cluster.stats[1] === 0) {
                c += 'normal';
                size = {
                    height: 50,
                    width: 28
                };
                anchor = {
                    top: 50,
                    left: 14
                };
                html = '<div><span>' + cluster.stats[0] + '</span></div>';
            }
            //if special + nomal
            else if (cluster.stats[1] > 0 && cluster.stats[0] > 0) {
                c += 'small';
                size = {
                    height: 64,
                    width: 38
                };
                anchor = {
                    top: 64,
                    left: 19
                };
                html = '<div><span class="special">' + cluster.stats[1] + '</span>\n            <span class="normal">' + cluster.stats[0] + '</span></div>';
            }
            //if only special
            else if (cluster.stats[1] > 0) {
                c += 'special';
                size = {
                    height: 64,
                    width: 38
                };
                anchor = {
                    top: 64,
                    left: 19
                };
                html = '<div><span>' + cluster.stats[1] + '</span></div>';
            }

            return new L.DivIcon({
                html: html,
                className: c,
                iconSize: L.point(size.width, size.height),
                iconAnchor: L.point(anchor.left, anchor.top)
            });
        }
    }]);

    return MapPopupService;
})();

exports.MapPopupService = MapPopupService;

},{}],108:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ROOTSCOPE = new WeakMap();
var TIMEOUT = new WeakMap();
var MAPMARKERSERVICE = new WeakMap();
var MAPPOPUPSERVICE = new WeakMap();
var LOCATIONSERVICE = new WeakMap();

var self;

var MapService = (function () {

    /*@ngInject*/

    function MapService($rootScope, $timeout, locationService, mapPopupService, mapMarkerService) {
        _classCallCheck(this, MapService);

        //inject private
        ROOTSCOPE.set(this, $rootScope);
        TIMEOUT.set(this, $timeout);
        MAPMARKERSERVICE.set(this, mapMarkerService);
        MAPPOPUPSERVICE.set(this, mapPopupService);
        LOCATIONSERVICE.set(this, locationService);

        self = this;

        self.listOfApartment = {};
        self.isLoad = false;
        self.isRent = false;

        jQuery(window).on('resize', _.debounce(self.resizeMap, 150));
    }
    MapService.$inject = ["$rootScope", "$timeout", "locationService", "mapPopupService", "mapMarkerService"];

    _createClass(MapService, [{
        key: 'updateMap',
        value: function updateMap(data) {

            if (!self.markers) {
                self.markers = new PruneClusterForLeaflet();
                /**
                 * Overwrite library methode
                 * @param cluster
                 * @returns {*}
                 * @constructor
                 */
                self.markers.BuildLeafletClusterIcon = function (cluster) {
                    return MAPPOPUPSERVICE.get(self).createClusterMarker(cluster);
                };
                /**
                 * Overwrite library methode
                 * @param marker
                 * @param data
                 * @param category
                 * @constructor
                 */
                self.markers.PrepareLeafletMarker = function (marker, data, category) {
                    if (data.icon) {
                        if (typeof data.icon === 'function') {
                            marker.setIcon(data.icon(data, category));
                        } else {
                            marker.setIcon(data.icon);
                        }
                    }

                    if (data.popup) {
                        var content = typeof data.popup === 'function' ? data.popup(data, category) : data.popup;
                        if (marker.getPopup()) {
                            marker.setPopupContent(content, data.popupOptions);
                        } else {
                            marker.bindPopup(content, data.popupOptions).on('click', function (e) {
                                TIMEOUT.get(self)(function () {
                                    $('.balloon-title').click(function () {
                                        document.location.href = $(this).prop('href');
                                    });
                                }, 50);
                            });
                        }
                    }
                };
                /**
                 * Overwrite library methode
                 * @param data
                 * @constructor
                 */
                self.markers.spiderfier.Spiderfy = function (data) {

                    var spidliferTableHeaderHeight = 40,
                        spidliferTableRowHeight = 60,
                        spidliferHeight = [],
                        streetList = {},
                        spidliferBody = '',
                        spidliferBegin = '<div class="search__map-catalog-wrapper">',
                        spidliferTableFooter = '</table>',
                        spidliferEnd = '</div>';

                    /**
                     * Make object key:value {street: apartments}
                     */
                    _.forEach(data.markers, function (value, key) {
                        var street = _.trim(value.data.street);
                        if (streetList[street] == null) {
                            streetList[street] = [];
                        }
                        streetList[street].push(value.data);
                    });

                    //each street adress of map place
                    _.forEach(streetList, function (apartments, address) {
                        /**
                         * Height popup window set
                         * @type {number}
                         */
                        spidliferHeight.push(spidliferTableHeaderHeight);
                        /**
                         * Cut window
                         */
                        address = self.truncateString(address, 30);

                        /**
                         * Set popup table header html
                         */

                        var squareCost = '';

                        if (!self.isRent) squareCost = '<span class="map-spidlifer-header-prefix">Цена за м<sup>2</sup>';

                        spidliferBody += '<table class="map-spidlifer">\n                        <tr>\n                        <th class="map-spidlifer-header"></th>\n                        <th class="map-spidlifer-header map-spidlifer-header-address">' + address + '</th>\n                        <th class="map-spidlifer-header">Этаж</th>\n                        <th class="map-spidlifer-header">Площадь</th>\n                        <th class="map-spidlifer-header map-spidlifer-header-cost">Цена, р.\n                        ' + squareCost + '\n                        </span></th>\n                        </tr>\n                        ';

                        //eache apartment
                        _.forOwn(apartments, function (apartment, index) {
                            var icons = '';
                            /**
                             * Height popup window set
                             * @type {number}
                             */
                            spidliferHeight.push(spidliferTableRowHeight);
                            /**
                             * Cut string
                             */
                            apartment.title = self.truncateString(apartment.title, 25);
                            /**
                             * Set icons
                             */
                            apartment.rassrochka === '1' ? icons += '<a href="/" class="search__table-line-icons-icon prosent popup-rasr"></a>' : '';
                            apartment.matcapital === '1' ? icons += '<a href="/" class="search__table-line-icons-icon baby popup-mother"></a>' : '';
                            apartment.mortagage === '1' ? icons += '<a href="/" class="search__table-line-icons-icon credit popup-ipo"></a>' : '';

                            /**
                             * set row html
                             */
                            var square = '';

                            if (apartment.subtype !== 'rent') {
                                square = '<span class="text">~' + apartment.square_price + ' т.р./м<sup>2</sup></span>';
                            }

                            spidliferBody += '<tr class="map-spidlifer-row ' + (apartment.special ? 'map-spidlifer-row-special' : '') + '">\n                            <td class="map-spidlifer-column map-spidlifer-column-favorite">\n                                <div data-id="' + apartment.id + '" class="item-favorite"></div>\n                            </td>\n                            <td class="map-spidlifer-column map-spidlifer-column-address">\n                            <a href="' + apartment.url + '" class="map-spidlifer-column-text map-spidlifer-column-link">' + apartment.title + '</a>\n                            </td>\n                            <td class="map-spidlifer-column"><span class="map-spidlifer-column-text">' + apartment.floor + '/' + apartment.top_floor + '</span></td>\n                            <td class="map-spidlifer-column"><span class="map-spidlifer-column-text">' + apartment.square + ' м<sup>2</sup></span></td>\n                            <td class="map-spidlifer-column map-spidlifer-column-cost"><span class="map-spidlifer-column-text map-spidlifer-column-cost-text">' + apartment.cost + '</span>\n                            <span class="map-spidlifer-column-text-prefix">\n                            ' + icons + '\n                            ' + square + '\n                            </span>\n                            </td>\n                            </tr>';
                        });

                        /**
                         * Set end of table html
                         */
                        spidliferBody += spidliferTableFooter;
                    });

                    /**
                     * Calculate height of spidlifer window
                     * @type {number}
                     */
                    var iCount = spidliferHeight.length > 6 ? 6 : spidliferHeight.length;
                    var spidliferHeights = 0;

                    for (var i = 0; i < iCount; i++) {
                        spidliferHeights += spidliferHeight[i];
                    }

                    /**
                     * Make spidlifer window
                     * @type {L.DivIcon}
                     */
                    var myIcon = new L.DivIcon({
                        html: spidliferBegin + spidliferBody + spidliferEnd,
                        className: 'search__map-catalog-wrapper',
                        iconSize: L.point(550, spidliferHeights),
                        //отступы
                        iconAnchor: L.point(275, spidliferHeights + 15)
                    });

                    /**
                     * close spidlifer window
                     */
                    self.markers.spiderfier.Unspiderfy();

                    /**
                     * Add it to map
                     */
                    self.listOfApartment = L.marker([data.center.lat, data.center.lng], {
                        icon: myIcon
                    }).addTo(self.map);

                    /**
                     * Turn on scroll on spidlifer
                     */
                    $('.search__map-catalog-wrapper').css('height', spidliferHeights).mCustomScrollbar({
                        scrollInertia: 0,
                        mouseWheelPixels: 25
                    }).click(function (e) {
                        return false;
                    });

                    /**
                     * On spidlifer popup row click go to apartmant page
                     */
                    $('.map-spidlifer-column-link').click(function (e) {
                        window.location.href = $(e.currentTarget).attr('href');
                    });
                    window.favorite.update();
                };
                /**
                 * Owerwrite library methode
                 * @param data
                 * @constructor
                 */
                self.markers.spiderfier.Unspiderfy = function (data) {
                    if (self.listOfApartment.removeFrom) self.listOfApartment.removeFrom(self.map);
                };
            }

            self.markers.RemoveMarkers();

            /**
             * Parse data
             */
            if (data.items != null) {
                $.each(data.items, function (index, value) {
                    /**
                     * Check lat long cords for empty or 0
                     */
                    if (!(value.lat != null && value.long != null && value.lat != 0 && value.long != 0)) {} else {

                        var marker = MAPMARKERSERVICE.get(self).createMarker(value);
                        /**
                         * Set data to library marker object
                         */
                        marker.data.title = value.title;
                        marker.data.url = value.uri;
                        marker.data.address = value.address;
                        marker.data.floor = value.floor;
                        marker.data.top_floor = value.top_floor;
                        marker.data.square = value.square;
                        marker.data.cost = value.cost;
                        marker.data.special = value.special;
                        marker.data.image = value.image;
                        marker.data.id = value.uid;
                        marker.data.favorite = value.favorite;
                        marker.data.square_price = value.square_price;
                        marker.data.rassrochka = value.rassrochka;
                        marker.data.matcapital = value.matcapital;
                        marker.data.mortagage = value.mortagage;
                        marker.data.street = value.address_street;
                        marker.data.flat = value.address_flat;
                        marker.data.subtype = value.subtype;

                        /**
                         * Check for rent subtype
                         */
                        self.isRent = value.subtype === 'rent';

                        self.markers.RegisterMarker(marker);
                    }
                });
            }
            self.map.removeLayer(self.markers);
            self.map.addLayer(self.markers);
        }
    }, {
        key: 'loadMap',

        /**
         * Load 2GIS map
         */
        value: function loadMap() {
            DG.then(function () {
                console.log('map: plugin load');
                /**
                 * Load plugin for clusterize objects on map
                 */
                if (!self.isLoad) return DG.plugin('/bower_components/PruneCluster/dist/PruneCluster.js');
            }).then(function () {
                /**
                 * Init 2GIS map
                 */
                if (!self.isLoad) {
                    self.map = DG.map('map', {
                        zoom: 13,
                        fullscreenControl: false,
                        zoomControl: false
                    });
                    console.log('map: load');
                }
            }).then(function () {
                self.isLoad = true;
            });
        }
    }, {
        key: 'showMap',

        /**
         * show 2GIS map
         */
        value: function showMap() {
            if (LOCATIONSERVICE.get(self).get().view === 'map') {
                console.log('map: show');
                $('.map').css('display', 'block');
                $('#accordion-wrapper').height(window.innerHeight - 200);
            }
        }
    }, {
        key: 'hideMap',

        /**
         * hide 2GIS page
         */
        value: function hideMap() {
            console.log('map: hide');
            $('.map').css('display', 'none');
            $('#accordion-wrapper').height('auto');
        }
    }, {
        key: 'truncateString',

        /**
         *
         * @param str
         * @param length
         * @returns {*}
         */
        value: function truncateString(str, length) {
            return str.length > length ? str.substring(0, length - 3) + '...' : str;
        }
    }, {
        key: 'resizeMap',

        /**
         * On resize event
         */
        value: function resizeMap() {
            try {
                var offset = $('#accordion').offset(),
                    posX = offset.left + $('#accordion').width(),
                    gBounds = self.markers.Cluster.ComputeGlobalBounds(),
                    southWest = L.latLng(gBounds.minLat, gBounds.minLng),
                    northEast = L.latLng(gBounds.maxLat, gBounds.maxLng),
                    bounds = L.latLngBounds(southWest, northEast);

                self.map.invalidateSize();

                self.map.fitBounds(bounds, {
                    paddingTopLeft: [posX + 10, 185],
                    paddingBottomRight: [offset.left, 200]
                });

                $('.search__map-special-wrapper').css('margin-top', window.innerHeight - 282);
                $('.search__map-special-item').click(function (e) {
                    window.location.href = $('.search__map-special-item-address', e.currentTarget).attr('href');
                });
                $('#accordion-wrapper').height(window.innerHeight - 200);
            } catch (e) {
                throw new Error(e);
            }
        }
    }]);

    return MapService;
})();

exports.MapService = MapService;

},{}],109:[function(require,module,exports){
'use strict';

module.exports = function () {
    /**
     * Load
     */
    //$('.content').css('visibility', 'visible');
    //$('.loader').css('display', 'none');

    $('.search__btn-filter-more').click(function () {
        var next = $(this).next();
        var nextDisplay = next.css('display');

        if (nextDisplay == 'block') {
            next.css('display', 'none');
        } else {
            next.css('display', 'block');
        }
    });

    window.mapItem = function () {
        $('.search__map-list-item').click(function () {
            var link = $('.search__map-list-item-address', this);
            window.location.href = link.attr('href');
        });
    };

    window.truncateString = function (str, length) {
        return str.length > length ? str.substring(0, length - 3) + '...' : str;
    };

    $('.form__btn').click(function (e) {
        $('.form__btn').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('href');
        if (id) {
            $('.form__block').removeClass('active');
            $(id).addClass('active');
        }

        e.preventDefault();
        e.stopPropagation();
    });

    (function () {
        var $cols = $('.search__map-catalog-row:first td', '.search__map-catalog-wrapper');
        var $headers = $('.search__map-catalog-header-field', '.search__map-catalog-wrapper');

        $.each($headers, function (index, item) {
            var width = $($cols[index]).width();

            $(item).width(width);
        });
    })();

    $('.faq__spoiler-title').click(function () {
        if ($(this).hasClass('active')) {
            $('.faq__spoiler-title').removeClass('active');
            $(this).removeClass('active');
        } else {
            $('.faq__spoiler-title').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.faq__spoiler-item-hide').click(function () {
        $('.faq__spoiler-title').removeClass('active');
    });

    $('.my-table-lol').floatThead({
        useAbsolutePositioning: false,
        scrollingTop: 80
    });
};

},{}],110:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var background = (function () {
    function background() {
        _classCallCheck(this, background);
    }

    _createClass(background, null, [{
        key: "init",

        /**
         * Backstretch plugin for set background image with maximum performanse
         */
        value: function init() {
            $("body").backstretch("/img/main-bg.jpg");
        }
    }]);

    return background;
})();

exports.background = background;

},{}],111:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var menu = (function () {
    function menu() {
        _classCallCheck(this, menu);
    }

    _createClass(menu, null, [{
        key: "init",
        value: function init() {
            /**
             * Jquery UI accordion plugin module
             */
            $("#accordion").accordion({
                heightStyle: "content",
                icons: false,
                collapsible: true,
                animate: 150
            });

            /**
             * Custom scrollbar loader
             */
            $("#accordion-wrapper").mCustomScrollbar({
                scrollInertia: 0
            });
        }
    }]);

    return menu;
})();

exports.menu = menu;

},{}],112:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _this;

var favorite = (function () {
    function favorite() {
        _classCallCheck(this, favorite);
    }

    _createClass(favorite, null, [{
        key: 'init',
        value: function init() {
            _this = this;

            /**
             * Set settings to cookie plugin
             * @type {boolean}
             */
            $.cookie.json = true;

            /**
             * one time update on load for static pages
             */
            _this.update();
            _this.updateCounter();

            /**
             * Set global as to module
             * @type {update}
             */
            window.favorite = _this;
        }
    }, {
        key: 'isFavorite',
        value: function isFavorite(uid) {
            var favoriteCookie = $.cookie('favorite') || {};
            return favoriteCookie[uid];
        }
    }, {
        key: 'update',

        /**
         * Update favorite for new elements
         */
        value: function update(element) {
            /**
             * Bind event on all favorite elements
             */
            $(element || '.item-favorite').each(function (index, element) {
                var $element = $(element),
                    id = $element.data('id'),
                    value = _this.isFavorite(id) || $element.hasClass('active');

                _this.setFavoriteToBrowser(id, value, $element);
            }).click(function (e) {
                _this.click(e.currentTarget);
            });
        }
    }, {
        key: 'click',

        /**
         * click on favorite element
         * @param element
         */
        value: function click(element) {
            var $element = $(element),
                id = $element.data('id'),
                value = _this.isFavorite(id) || $element.hasClass('active');

            _this.changeFavoriteStatus(id, value, $element);
        }
    }, {
        key: 'changeFavoriteStatus',

        /**
         * Set favorite item on server
         * @param id
         * @param value
         * @returns {*}
         */
        value: function changeFavoriteStatus(id, value, $element) {
            //change value
            value = !value;
            //log
            console.log('set favorite id: ' + id + ', value: ' + value);
            //update favorite status anyware
            _this.setFavoriteToBrowser(id, value, $element);
            _this.setFavoriteToCookie(id, value);
            _this.setFavoriteToServer(id, value);
            _this.updateCounter();
        }
    }, {
        key: 'setFavoriteToBrowser',

        /**
         * Set favorite status in browser
         * @param id
         * @param value
         */
        value: function setFavoriteToBrowser(id, value, $element) {
            if (value) {
                $element.addClass('active');
            } else {
                $element.removeClass('active');
            }
        }
    }, {
        key: 'setFavoriteToCookie',

        /**
         * Save favorite item to cookie
         * @param id
         * @param value
         */
        value: function setFavoriteToCookie(id, value) {
            //get favorite from cookie or crate new cookie object
            var favorite = $.cookie('favorite') || {};
            //update favorite status
            favorite[id] = value;
            //update cookie
            $.cookie('favorite', favorite, { path: '/', expires: 365 });
        }
    }, {
        key: 'setFavoriteToServer',

        /**
         * Update favorite status on server
         * @param id
         * @param value
         */
        value: function setFavoriteToServer(id, value) {
            $.ajax({
                url: '/site/favorite/',
                dataType: 'json',
                data: {
                    id: id,
                    value: value,
                    format: 'json'
                }
            });
        }
    }, {
        key: 'updateCounter',

        /**
         * Update favorite counter status
         */
        value: function updateCounter() {
            var favoriteCookie = $.cookie('favorite') || {};
            var countFavoriteCookie = 0;

            if (typeof favoriteCookie === 'string') {
                favoriteCookie = JSON.parse(favoriteCookie);
            }

            _.forOwn(favoriteCookie, function (value) {
                if (value === true) {
                    countFavoriteCookie++;
                }
            });

            $('.favorite-counter').text(countFavoriteCookie);
        }
    }]);

    return favorite;
})();

exports.favorite = favorite;

},{}],113:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var gallery = (function () {
    function gallery() {
        _classCallCheck(this, gallery);
    }

    _createClass(gallery, null, [{
        key: 'init',
        value: function init() {
            $('.fotorama').fotorama({
                allowfullscreen: true,
                thumbwidth: 100,
                thumbheight: 70,
                thumbborderwidth: 3,
                thumbmargin: 10,
               // autoplay: 12000
            });
        }
    }]);

    return gallery;
})();

exports.gallery = gallery;

},{}],114:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _this;

var header = (function () {
    function header() {
        _classCallCheck(this, header);
    }

    _createClass(header, null, [{
        key: 'init',

        /**
         * Init header modules
         */
        value: function init() {
            _this = this;
            $('.header__menu-list-item-dropdown-container').hover(_this.showUserMenu, _this.hideUserMenu);
        }
    }, {
        key: 'showUserMenu',

        /**
         * Show header user menu
         * @param e - jquery event
         */
        value: function showUserMenu(e) {
            $('.header__menu-list-item-dropdown-wrapper', e.currentTarget).css('display', 'block');
        }
    }, {
        key: 'hideUserMenu',

        /**
         * Hide header user menu
         * @param e - jquery event
         */
        value: function hideUserMenu(e) {
            $('.header__menu-list-item-dropdown-wrapper', e.currentTarget).css('display', 'none');
        }
    }]);

    return header;
})();

exports.header = header;

},{}],115:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var inputPhone = (function () {
    function inputPhone() {
        _classCallCheck(this, inputPhone);
    }

    _createClass(inputPhone, null, [{
        key: "init",
        value: function init(selector) {
            $(selector).mask("+7(999) 999-99-99").on("blur", function () {
                var last = $(this).val().substr($(this).val().indexOf("-") + 1);

                if (last.length == 3) {
                    var move = $(this).val().substr($(this).val().indexOf("-") - 1, 1);
                    var lastfour = move + last;

                    var first = $(this).val().substr(0, 9);

                    $(this).val(first + "-" + lastfour);
                }
            });
        }
    }]);

    return inputPhone;
})();

exports.inputPhone = inputPhone;

},{}],116:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _this;

var modal = (function () {
    function modal() {
        _classCallCheck(this, modal);
    }

    _createClass(modal, null, [{
        key: 'init',

        /**
         * Init module
         */
        value: function init() {
            _this = this;

            /**
             * each all modal windows select element
             * chek for active-load
             */
            $('.mymodal').each(function () {
                //curent element
                var $element = $(this);
                if ($element.hasClass('active-load')) {
                    $element.addClass('active');

                    _this.activate($element);
                }
            });

            $('.show-modal').click(_this.open);
        }
    }, {
        key: 'open',

        /**
         * Show modal if click on model activation link
         * @param e
         */
        value: function open(e) {
            var id = $(this).attr('href');

            if (id) {
                $(id).addClass('active');
            }

            _this.activate(id);

            e.preventDefault();
            e.stopPropagation();
        }
    }, {
        key: 'close',

        /**
         * Close modal window
         * @param element
         */
        value: function close(element) {
            $(element).closest('.mymodal').removeClass('active');
        }
    }, {
        key: 'activate',
        value: function activate(select) {
            var $modalWindow = $('.mymodal__window', select),
                child = $modalWindow.children(),
                childHeight = $(child).outerHeight(true),
                childWidth = $(child).outerWidth(true);

            $modalWindow.height(childHeight).width(childWidth).click(function (e) {
                e.stopPropagation();
            });

            $('.mymodal').click(function (e) {
                _this.close(e.currentTarget);
                e.preventDefault();
                e.stopPropagation();
            }).on({
                'mousewheel': function mousewheel(e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });

            $('.mymodal__close').click(function (e) {
                _this.close(e.currentTarget);
                e.preventDefault();
                e.stopPropagation();
            });
        }
    }]);

    return modal;
})();

exports.modal = modal;

},{}],117:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _this;

var popup = (function () {
    function popup() {
        _classCallCheck(this, popup);
    }

    _createClass(popup, null, [{
        key: "init",
        value: function init() {
            _this = this;

            _this.popupList = [{
                selector: ".popup-favorite",
                text: "В избранном можно сравнивать объявления",
                position: "top left"
            }, {
                selector: ".popup-mother",
                text: "Материнский капитал",
                position: "top right"
            }, {
                selector: ".popup-ipo",
                text: "В ипотеку",
                position: "top right"
            }, {
                selector: ".popup-rasr",
                text: "В рассрочку",
                position: "top right"
            }];

            $.each(_this.popupList, function (i, popup) {
                $(popup.selector).each(function (index, item) {
                    new Drop({
                        target: item,
                        content: popup.text,
                        position: popup.position,
                        openOn: "hover",
                        classes: "drop-theme-arrows-bounce drop-hero"
                    });
                });
            });

            _this.link();

            window.popup = _this.update;
        }
    }, {
        key: "update",
        value: function update(element, text, position) {
            new Drop({
                target: element[0],
                content: text,
                position: position,
                openOn: "hover",
                classes: "drop-theme-arrows-bounce drop-hero"
            });

            _this.link(element[0]);
        }
    }, {
        key: "link",
        value: function link(element) {
            $(element || ".drop-target").click(function (e) {
                var href = $(e.currentTarget).attr("href");
                if (href) window.location.href = href;
                e.preventDefault();

                return false;
            });
        }
    }]);

    return popup;
})();

exports.popup = popup;

},{}],118:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _this;

var citySelector = (function () {
    function citySelector() {
        _classCallCheck(this, citySelector);
    }

    _createClass(citySelector, null, [{
        key: "init",
        value: function init() {
            _this = this;
            _this.$citySelect = $(".chosen-select-city");
            _this.$distSelect = $(".chosen-select-dist");

            _this.$distSelect.chosen({
                disable_search_threshold: 10,
                width: "100%",
                placeholder_text_single: "Выберите Район"
            });

            _this.$citySelect.chosen({
                disable_search_threshold: 10,
                width: "100%",
                placeholder_text_single: "Выберите город"
            }).on("change", function (evt, params) {
                _this.loadDist(params.selected);
            });
        }
    }, {
        key: "loadDist",
        value: function loadDist(cityId) {
            $.ajax({
                url: "/site/districts",
                type: "GET",
                dataType: "json",
                data: {
                    city: cityId
                }
            }).done(function (data) {
                _this.applyDist(data);
            });
        }
    }, {
        key: "applyDist",
        value: function applyDist(data) {
            _this.$distSelect.empty();
            $.each(data.districts, function (index, item) {
                _this.$distSelect.append("<option  value=\"" + item.id + "\">" + item.name + "</option>");
            });
            _this.$distSelect.trigger("chosen:updated");
        }
    }]);

    return citySelector;
})();

exports.citySelector = citySelector;

},{}],119:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var selector = (function () {
    function selector() {
        _classCallCheck(this, selector);
    }

    _createClass(selector, null, [{
        key: "init",
        value: function init() {
            $(".mortgages__form-dropdown").chosen({
                disable_search_threshold: 10,
                width: "220px",
                height: "100%"
            });

            $(".staff__filter-competence-dropdown").chosen({
                disable_search_threshold: 10,
                width: "28%",
                height: "30px"
            });

            $(".add-page__dropdown").chosen({
                disable_search_threshold: 10,
                width: "35%",
                height: "30px"
            });
        }
    }]);

    return selector;
})();

exports.selector = selector;

},{}],120:[function(require,module,exports){
'use strict';

module.exports = angular.module('propertyCtrl', []).controller('propertyCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
    $scope.toggle = 'gallery';
    $scope.center = [];

    var map;

    $scope.changeToggle = function (value) {
        $scope.toggle = value;
        $timeout(function () {
            try {
                DG.then(function () {
                    map.invalidateSize();

                    var markerIcon = DG.icon({
                        iconUrl: '/img/icon-map.png',
                        iconRetinaUrl: '/img/icon-map@2x.png',
                        iconSize: [29, 50],
                        iconAnchor: [15, 50],
                        shadowUrl: '/img/icon-map-shadow.png',
                        shadowRetinaUrl: '/img/icon-map-shadow@2x.png',
                        shadowSize: [40, 19],
                        shadowAnchor: [3, 18]
                    });

                    var marker = DG.marker($scope.center, { icon: markerIcon });

                    map.addLayer(marker);
                });
            } catch (e) {}
        }, 30);
    };

    function init() {
        $timeout(function () {
            DG.then(function () {
                map = DG.map('map', {
                    'center': $scope.center,
                    'zoom': 14,
                    fullscreenControl: false,
                    zoomControl: false
                });
            });
        }, 10);
    }
    init();
}]);

},{}],121:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var _bind = Function.prototype.bind;
/**
 * A helper class to simplify registering Angular components and provide a consistent syntax for doing so.
 */
exports.register = register;

function register(appName) {

    var app = angular.module(appName);

    return {
        directive: directive,
        controller: controller,
        service: service,
        provider: provider,
        factory: factory
    };

    function directive(name, constructorFn) {

        constructorFn = _normalizeConstructor(constructorFn);

        if (!constructorFn.prototype.compile) {
            // create an empty compile function if none was defined.
            constructorFn.prototype.compile = function () {};
        }

        var originalCompileFn = _cloneFunction(constructorFn.prototype.compile);

        // Decorate the compile method to automatically return the link method (if it exists)
        // and bind it to the context of the constructor (so `this` works correctly).
        // This gets around the problem of a non-lexical "this" which occurs when the directive class itself
        // returns `this.link` from within the compile function.
        _override(constructorFn.prototype, 'compile', function () {
            return function () {
                originalCompileFn.apply(this, arguments);

                if (constructorFn.prototype.link) {
                    return constructorFn.prototype.link.bind(this);
                }
            };
        });

        var factoryArray = _createFactoryArray(constructorFn);

        app.directive(name, factoryArray);
        return this;
    }

    function controller(name, contructorFn) {
        app.controller(name, contructorFn);
        return this;
    }

    function service(name, contructorFn) {
        app.service(name, contructorFn);
        return this;
    }

    function provider(name, constructorFn) {
        app.provider(name, constructorFn);
        return this;
    }

    function factory(name, constructorFn) {
        constructorFn = _normalizeConstructor(constructorFn);
        var factoryArray = _createFactoryArray(constructorFn);
        app.factory(name, factoryArray);
        return this;
    }

    /**
     * If the constructorFn is an array of type ['dep1', 'dep2', ..., constructor() {}]
     * we need to pull out the array of dependencies and add it as an $inject property of the
     * actual constructor function.
     * @param input
     * @returns {*}
     * @private
     */
    function _normalizeConstructor(input) {
        var constructorFn;

        if (input.constructor === Array) {
            //
            var injected = input.slice(0, input.length - 1);
            constructorFn = input[input.length - 1];
            constructorFn.$inject = injected;
        } else {
            constructorFn = input;
        }

        return constructorFn;
    }

    /**
     * Convert a constructor function into a factory function which returns a new instance of that
     * constructor, with the correct dependencies automatically injected as arguments.
     *
     * In order to inject the dependencies, they must be attached to the constructor function with the
     * `$inject` property annotation.
     *
     * @param constructorFn
     * @returns {Array.<T>}
     * @private
     */
    function _createFactoryArray(constructorFn) {
        // get the array of dependencies that are needed by this component (as contained in the `$inject` array)
        var args = constructorFn.$inject || [];
        var factoryArray = args.slice(); // create a copy of the array
        // The factoryArray uses Angular's array notation whereby each element of the array is the name of a
        // dependency, and the final item is the factory function itself.
        factoryArray.push(function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            //return new constructorFn(...args);
            var instance = new (_bind.apply(constructorFn, [null].concat(args)))();
            for (var key in instance) {
                instance[key] = instance[key];
            }
            return instance;
        });

        return factoryArray;
    }

    /**
     * Clone a function
     * @param original
     * @returns {Function}
     */
    function _cloneFunction(original) {
        return function () {
            return original.apply(this, arguments);
        };
    }

    /**
     * Override an object's method with a new one specified by `callback`.
     * @param object
     * @param methodName
     * @param callback
     */
    function _override(object, methodName, callback) {
        object[methodName] = callback(object[methodName]);
    }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvYXBwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL2xpYi9iYWJlbC9wb2x5ZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktaW5jbHVkZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmFycmF5LW1ldGhvZHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmFzc2VydC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5jb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmNvbGxlY3Rpb24tc3Ryb25nLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmNvbGxlY3Rpb24td2Vhay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuY3R4LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5kZWYuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmRvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmVudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5mdy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuaW52b2tlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLWNhbGwuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmtleW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5vd24ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQucGFydGlhbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQucmVwbGFjZXIuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLnNldC1wcm90by5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuc3BlY2llcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5zdHJpbmctcGFkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5zdHJpbmctcmVwZWF0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC50YXNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC50aHJvd3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLnVpZC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQudW5zY29wZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQud2tzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM1LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmNvcHktd2l0aGluLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbGwuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXAuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnN0YXRpY3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnNldC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuY29kZS1wb2ludC1hdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcucmF3LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN0YXJ0cy13aXRoLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLXNldC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5hcnJheS5pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QudG8tYXJyYXkuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcuYXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLmxwYWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnJwYWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9qcy5hcnJheS5zdGF0aWNzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5pbW1lZGlhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL3NoaW0uanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yL3J1bnRpbWUuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvcG9seWZpbGwuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvcG9seWZpbGwuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvYXBwbGljYXRpb24vY29uZmlnL2FwcC52aWV3LmNvbmZpZy5qcyIsIi9Vc2Vycy9zZW15b24vRG9jdW1lbnRzL05lZHZpemltb3N0L3NyYy9qcy9hcHBsaWNhdGlvbi9jb250cm9sbGVycy9hcHAuY29udHJvbGxlci5qcyIsIi9Vc2Vycy9zZW15b24vRG9jdW1lbnRzL05lZHZpemltb3N0L3NyYy9qcy9hcHBsaWNhdGlvbi9jb250cm9sbGVycy9tYXAuY29udHJvbGxlci5qcyIsIi9Vc2Vycy9zZW15b24vRG9jdW1lbnRzL05lZHZpemltb3N0L3NyYy9qcy9hcHBsaWNhdGlvbi9kaXJlY3RpdmVzL2Zhdm9yaXRlLmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9zZW15b24vRG9jdW1lbnRzL05lZHZpemltb3N0L3NyYy9qcy9hcHBsaWNhdGlvbi9kaXJlY3RpdmVzL2ZpbHRlci5kaXJlY3RpdmUuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvYXBwbGljYXRpb24vZGlyZWN0aXZlcy9wb3B1cC5kaXJlY3RpdmUuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvYXBwbGljYXRpb24vZGlyZWN0aXZlcy9zZWxlY3Rvci5kaXJlY3RpdmUuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvYXBwbGljYXRpb24vZGlyZWN0aXZlcy9zbGlkZXIuZGlyZWN0aXZlLmpzIiwiL1VzZXJzL3NlbXlvbi9Eb2N1bWVudHMvTmVkdml6aW1vc3Qvc3JjL2pzL2FwcGxpY2F0aW9uL2RpcmVjdGl2ZXMvdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9zZW15b24vRG9jdW1lbnRzL05lZHZpemltb3N0L3NyYy9qcy9hcHBsaWNhdGlvbi9maWx0ZXJzL2N1dC5maWx0ZXIuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvYXBwbGljYXRpb24vc2VydmljZXMvY2FjaGUuc2VydmljZS5qcyIsIi9Vc2Vycy9zZW15b24vRG9jdW1lbnRzL05lZHZpemltb3N0L3NyYy9qcy9hcHBsaWNhdGlvbi9zZXJ2aWNlcy9jb21wb25lbnQuc2VydmljZS5qcyIsIi9Vc2Vycy9zZW15b24vRG9jdW1lbnRzL05lZHZpemltb3N0L3NyYy9qcy9hcHBsaWNhdGlvbi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvYXBwbGljYXRpb24vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZS5qcyIsIi9Vc2Vycy9zZW15b24vRG9jdW1lbnRzL05lZHZpemltb3N0L3NyYy9qcy9hcHBsaWNhdGlvbi9zZXJ2aWNlcy9pbW1vdmFibGVzLnNlcnZpY2UuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvYXBwbGljYXRpb24vc2VydmljZXMvbG9jYXRpb24uc2VydmljZS5qcyIsIi9Vc2Vycy9zZW15b24vRG9jdW1lbnRzL05lZHZpemltb3N0L3NyYy9qcy9hcHBsaWNhdGlvbi9zZXJ2aWNlcy9tYXAubWFya2VyLnNlcnZpY2UuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvYXBwbGljYXRpb24vc2VydmljZXMvbWFwLnBvcHVwLnNlcnZpY2UuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvYXBwbGljYXRpb24vc2VydmljZXMvbWFwLnNlcnZpY2UuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvbG9hZC5qcyIsIi9Vc2Vycy9zZW15b24vRG9jdW1lbnRzL05lZHZpemltb3N0L3NyYy9qcy9tb2R1bGVzL2FwcC5iYWNrZ3JvdW5kLmpzIiwiL1VzZXJzL3NlbXlvbi9Eb2N1bWVudHMvTmVkdml6aW1vc3Qvc3JjL2pzL21vZHVsZXMvYXBwLm1lbnUuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvbW9kdWxlcy9mYXZvcml0ZS5qcyIsIi9Vc2Vycy9zZW15b24vRG9jdW1lbnRzL05lZHZpemltb3N0L3NyYy9qcy9tb2R1bGVzL2dhbGxlcnkuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvbW9kdWxlcy9oZWFkZXIuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvbW9kdWxlcy9pbnB1dC5waG9uZS5qcyIsIi9Vc2Vycy9zZW15b24vRG9jdW1lbnRzL05lZHZpemltb3N0L3NyYy9qcy9tb2R1bGVzL21vZGFsLmpzIiwiL1VzZXJzL3NlbXlvbi9Eb2N1bWVudHMvTmVkdml6aW1vc3Qvc3JjL2pzL21vZHVsZXMvcG9wdXAuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvbW9kdWxlcy9zZWxlY3Rvci5jaXR5LmpzIiwiL1VzZXJzL3NlbXlvbi9Eb2N1bWVudHMvTmVkdml6aW1vc3Qvc3JjL2pzL21vZHVsZXMvc2VsZWN0b3IuanMiLCIvVXNlcnMvc2VteW9uL0RvY3VtZW50cy9OZWR2aXppbW9zdC9zcmMvanMvcHJvcGVydHkvcHJvcGVydHlDdHJsLmpzIiwiL1VzZXJzL3NlbXlvbi9Eb2N1bWVudHMvTmVkdml6aW1vc3Qvc3JjL2pzL3V0aWxzL3JlZ2lz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QUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QzFDLGlCQUFLLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtBQUN0Qix3QkFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQztBQUNELG1CQUFPLFFBQVEsQ0FBQztTQUNuQixDQUFDLENBQUM7O0FBRUgsZUFBTyxZQUFZLENBQUM7S0FDdkI7Ozs7Ozs7QUFPRCxhQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUU7QUFDOUIsZUFBTyxZQUFXO0FBQ2QsbUJBQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDMUMsQ0FBQztLQUNMOzs7Ozs7OztBQVFELGFBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO0FBQzdDLGNBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7S0FDcEQ7Q0FFSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvL2xvYWQgZXM2LTcgZmVhdHVyZXNcbnJlcXVpcmUoXCJiYWJlbGlmeS9wb2x5ZmlsbFwiKTtcblxuLyoqXG4gKiBBbmd1bGFyIFVUSUxTXG4gKi9cbmltcG9ydCB7cmVnaXN0ZXJ9IGZyb20gXCIuL3V0aWxzL3JlZ2lzdHJcIjtcbi8qKlxuICogQW5ndWxhciBNT0RVTEVTXG4gKi9cbmltcG9ydCB7SW1tb3ZhYmxlc1NlcnZpY2V9IGZyb20gXCIuL2FwcGxpY2F0aW9uL3NlcnZpY2VzL2ltbW92YWJsZXMuc2VydmljZVwiO1xuaW1wb3J0IHtDYWNoZVNlcnZpY2V9IGZyb20gJy4vYXBwbGljYXRpb24vc2VydmljZXMvY2FjaGUuc2VydmljZSc7XG5pbXBvcnQgQXBwVmlld0NvbmZpZyBmcm9tIFwiLi9hcHBsaWNhdGlvbi9jb25maWcvYXBwLnZpZXcuY29uZmlnXCI7XG5pbXBvcnQge0FwcENvbnRyb2xsZXJ9IGZyb20gXCIuL2FwcGxpY2F0aW9uL2NvbnRyb2xsZXJzL2FwcC5jb250cm9sbGVyXCI7XG5pbXBvcnQge1NlbGVjdG9yRGlyZWN0aXZlfSBmcm9tIFwiLi9hcHBsaWNhdGlvbi9kaXJlY3RpdmVzL3NlbGVjdG9yLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4vYXBwbGljYXRpb24vc2VydmljZXMvZGF0YS5zZXJ2aWNlLmpzXCI7XG5pbXBvcnQge0NvbXBvbmVudFNlcnZpY2V9IGZyb20gXCIuL2FwcGxpY2F0aW9uL3NlcnZpY2VzL2NvbXBvbmVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge0xvY2F0aW9uU2VydmljZX0gZnJvbSBcIi4vYXBwbGljYXRpb24vc2VydmljZXMvbG9jYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtGaWx0ZXJEaXJlY3RpdmV9IGZyb20gXCIuL2FwcGxpY2F0aW9uL2RpcmVjdGl2ZXMvZmlsdGVyLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtTbGlkZXJEaXJlY3RpdmV9IGZyb20gXCIuL2FwcGxpY2F0aW9uL2RpcmVjdGl2ZXMvc2xpZGVyLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtUb2dnbGVEaXJlY3RpdmV9IGZyb20gXCIuL2FwcGxpY2F0aW9uL2RpcmVjdGl2ZXMvdG9nZ2xlLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtNYXBDb250cm9sbGVyfSBmcm9tIFwiLi9hcHBsaWNhdGlvbi9jb250cm9sbGVycy9tYXAuY29udHJvbGxlclwiO1xuaW1wb3J0IHtNYXBTZXJ2aWNlfSBmcm9tIFwiLi9hcHBsaWNhdGlvbi9zZXJ2aWNlcy9tYXAuc2VydmljZVwiO1xuaW1wb3J0IHtNYXBNYXJrZXJTZXJ2aWNlfSBmcm9tIFwiLi9hcHBsaWNhdGlvbi9zZXJ2aWNlcy9tYXAubWFya2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7TWFwUG9wdXBTZXJ2aWNlfSBmcm9tIFwiLi9hcHBsaWNhdGlvbi9zZXJ2aWNlcy9tYXAucG9wdXAuc2VydmljZVwiO1xuaW1wb3J0IHtjdXR9IGZyb20gXCIuL2FwcGxpY2F0aW9uL2ZpbHRlcnMvY3V0LmZpbHRlci5qc1wiO1xuaW1wb3J0IHtGYXZvcml0ZURpcmVjdGl2ZX0gZnJvbSAnLi9hcHBsaWNhdGlvbi9kaXJlY3RpdmVzL2Zhdm9yaXRlLmRpcmVjdGl2ZS5qcyc7XG5pbXBvcnQge1BvcHVwRGlyZWN0aXZlfSBmcm9tICcuL2FwcGxpY2F0aW9uL2RpcmVjdGl2ZXMvcG9wdXAuZGlyZWN0aXZlLmpzJztcbmltcG9ydCB7RmF2b3JpdGVTZXJ2aWNlfSBmcm9tICcuL2FwcGxpY2F0aW9uL3NlcnZpY2VzL2Zhdm9yaXRlLnNlcnZpY2UuanMnO1xuXG4vKipcbiAqIFN1aXRlIHBsdWdpbnMgYW5kIG1vZHVsZXNcbiAqL1xuaW1wb3J0IHtmYXZvcml0ZX0gZnJvbSBcIi4vbW9kdWxlcy9mYXZvcml0ZS5qc1wiO1xuaW1wb3J0IHtnYWxsZXJ5fSBmcm9tICcuL21vZHVsZXMvZ2FsbGVyeS5qcyc7XG5pbXBvcnQge21lbnV9IGZyb20gJy4vbW9kdWxlcy9hcHAubWVudS5qcyc7XG5pbXBvcnQge2JhY2tncm91bmR9IGZyb20gJy4vbW9kdWxlcy9hcHAuYmFja2dyb3VuZC5qcyc7XG5pbXBvcnQge3BvcHVwfSBmcm9tICcuL21vZHVsZXMvcG9wdXAuanMnO1xuaW1wb3J0IHttb2RhbH0gZnJvbSAnLi9tb2R1bGVzL21vZGFsLmpzJztcbmltcG9ydCB7aGVhZGVyfSBmcm9tICcuL21vZHVsZXMvaGVhZGVyLmpzJztcbmltcG9ydCB7Y2l0eVNlbGVjdG9yfSBmcm9tICcuL21vZHVsZXMvc2VsZWN0b3IuY2l0eS5qcyc7XG5pbXBvcnQge3NlbGVjdG9yfSBmcm9tICcuL21vZHVsZXMvc2VsZWN0b3IuanMnO1xuaW1wb3J0IHtpbnB1dFBob25lfSBmcm9tIFwiLi9tb2R1bGVzL2lucHV0LnBob25lLmpzXCI7XG5cbnZhciBwcm9wZXJ0eSA9IHJlcXVpcmUoJy4vcHJvcGVydHkvcHJvcGVydHlDdHJsJyk7XG52YXIgb25Mb2FkID0gcmVxdWlyZSgnLi9sb2FkJyk7XG5cbi8qKlxuICogSW5pdCBzdWl0ZSBwbHVnaW5zIGFuZCBtb2R1bGVzXG4gKiBhZnRlciBwYWdlIGxvYWRcbiAqL1xuJCgoKSA9PiB7XG4gICAgZ2FsbGVyeS5pbml0KCk7XG4gICAgZmF2b3JpdGUuaW5pdCgpO1xuICAgIG1lbnUuaW5pdCgpO1xuICAgIGJhY2tncm91bmQuaW5pdCgpO1xuICAgIHBvcHVwLmluaXQoKTtcbiAgICBtb2RhbC5pbml0KCk7XG4gICAgaGVhZGVyLmluaXQoKTtcbiAgICBjaXR5U2VsZWN0b3IuaW5pdCgpO1xuICAgIHNlbGVjdG9yLmluaXQoKTtcbiAgICBpbnB1dFBob25lLmluaXQoJy5waG9uZS1tYXNrJyk7XG5cbiAgICBvbkxvYWQoKTtcbn0pO1xuXG5hbmd1bGFyXG4gICAgLm1vZHVsZSgnYXBwJywgW1xuICAgICAgICAnbmdSb3V0ZScsXG4gICAgICAgICdmbG9hdFRoZWFkJ1xuICAgIF0pLmNvbnN0YW50KCdhcHBWaWV3Q29uZmlnJywgQXBwVmlld0NvbmZpZylcbiAgICAuZmlsdGVyKCdjdXQnLCAoKSA9PiB7IHJldHVybiBjdXQ7IH0pO1xuXG5yZWdpc3RlcignYXBwJylcbiAgICAuc2VydmljZSgnY2FjaGVTZXJ2aWNlJywgQ2FjaGVTZXJ2aWNlKVxuICAgIC5zZXJ2aWNlKCdpbW1vdmFibGVzU2VydmljZScsIEltbW92YWJsZXNTZXJ2aWNlKVxuICAgIC5zZXJ2aWNlKCdjb21wb25lbnRTZXJ2aWNlJywgQ29tcG9uZW50U2VydmljZSlcbiAgICAuc2VydmljZSgnZmF2b3JpdGVTZXJ2aWNlJywgRmF2b3JpdGVTZXJ2aWNlKVxuICAgIC5zZXJ2aWNlKCdsb2NhdGlvblNlcnZpY2UnLCBMb2NhdGlvblNlcnZpY2UpXG4gICAgLnNlcnZpY2UoJ2RhdGFTZXJ2aWNlJywgRGF0YVNlcnZpY2UpXG4gICAgLnNlcnZpY2UoJ21hcFNlcnZpY2UnLCBNYXBTZXJ2aWNlKVxuICAgIC5zZXJ2aWNlKCdtYXBQb3B1cFNlcnZpY2UnLCBNYXBQb3B1cFNlcnZpY2UpXG4gICAgLnNlcnZpY2UoJ21hcE1hcmtlclNlcnZpY2UnLCBNYXBNYXJrZXJTZXJ2aWNlKVxuICAgIC5kaXJlY3RpdmUoJ3NlbGVjdG9yJyxTZWxlY3RvckRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdmaWx0ZXInLEZpbHRlckRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXInLFNsaWRlckRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCd0b2dnbGUnLFRvZ2dsZURpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdwb3B1cCcsIFBvcHVwRGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUoJ2Zhdm9yaXRlJywgRmF2b3JpdGVEaXJlY3RpdmUpXG4gICAgLmNvbnRyb2xsZXIoJ01hcENvbnRyb2xsZXInLCBNYXBDb250cm9sbGVyKVxuICAgIC5jb250cm9sbGVyKCdBcHBDb250cm9sbGVyJywgQXBwQ29udHJvbGxlcik7XG5cblxuYW5ndWxhci5tb2R1bGUoJ3Byb3BlcnR5JywgW1xuICAgIHByb3BlcnR5Lm5hbWVcbl0pO1xuXG5cbiQoJy5zZWFyY2hfX3RhYmxlLWxpbmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgYWxlcnQoJ2FkZHdhZGFmYWV3Z3NlaGVzJyk7XG59KTtcblxuJCgnLnNlYXJjaF90YWJsZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBhbGVydCgnMjE0MTQxMicpO1xufSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiY29yZS1qcy9zaGltXCIpO1xuXG5yZXF1aXJlKFwicmVnZW5lcmF0b3IvcnVudGltZVwiKTtcblxuaWYgKGdsb2JhbC5fYmFiZWxQb2x5ZmlsbCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJvbmx5IG9uZSBpbnN0YW5jZSBvZiBiYWJlbC9wb2x5ZmlsbCBpcyBhbGxvd2VkXCIpO1xufVxuZ2xvYmFsLl9iYWJlbFBvbHlmaWxsID0gdHJ1ZTsiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXHJcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXHJcbnZhciAkID0gcmVxdWlyZSgnLi8kJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xyXG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XHJcbiAgICB2YXIgTyAgICAgID0gJC50b09iamVjdCgkdGhpcylcclxuICAgICAgLCBsZW5ndGggPSAkLnRvTGVuZ3RoKE8ubGVuZ3RoKVxyXG4gICAgICAsIGluZGV4ICA9ICQudG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcclxuICAgICAgLCB2YWx1ZTtcclxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcclxuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xyXG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xyXG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4O1xyXG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xyXG4gIH07XHJcbn07IiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXHJcbi8vIDEgLT4gQXJyYXkjbWFwXHJcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXHJcbi8vIDMgLT4gQXJyYXkjc29tZVxyXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XHJcbi8vIDUgLT4gQXJyYXkjZmluZFxyXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxyXG52YXIgJCAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGN0eCA9IHJlcXVpcmUoJy4vJC5jdHgnKTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFKXtcclxuICB2YXIgSVNfTUFQICAgICAgICA9IFRZUEUgPT0gMVxyXG4gICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXHJcbiAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcclxuICAgICwgSVNfRVZFUlkgICAgICA9IFRZUEUgPT0gNFxyXG4gICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XHJcbiAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcclxuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xyXG4gICAgdmFyIE8gICAgICA9IE9iamVjdCgkLmFzc2VydERlZmluZWQoJHRoaXMpKVxyXG4gICAgICAsIHNlbGYgICA9ICQuRVM1T2JqZWN0KE8pXHJcbiAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXHJcbiAgICAgICwgbGVuZ3RoID0gJC50b0xlbmd0aChzZWxmLmxlbmd0aClcclxuICAgICAgLCBpbmRleCAgPSAwXHJcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gQXJyYXkobGVuZ3RoKSA6IElTX0ZJTFRFUiA/IFtdIDogdW5kZWZpbmVkXHJcbiAgICAgICwgdmFsLCByZXM7XHJcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xyXG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcclxuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcclxuICAgICAgaWYoVFlQRSl7XHJcbiAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXHJcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xyXG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcclxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXHJcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XHJcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXHJcbiAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcclxuICB9O1xyXG59OyIsInZhciAkID0gcmVxdWlyZSgnLi8kJyk7XHJcbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1zZzEsIG1zZzIpe1xyXG4gIGlmKCFjb25kaXRpb24pdGhyb3cgVHlwZUVycm9yKG1zZzIgPyBtc2cxICsgbXNnMiA6IG1zZzEpO1xyXG59XHJcbmFzc2VydC5kZWYgPSAkLmFzc2VydERlZmluZWQ7XHJcbmFzc2VydC5mbiA9IGZ1bmN0aW9uKGl0KXtcclxuICBpZighJC5pc0Z1bmN0aW9uKGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xyXG4gIHJldHVybiBpdDtcclxufTtcclxuYXNzZXJ0Lm9iaiA9IGZ1bmN0aW9uKGl0KXtcclxuICBpZighJC5pc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xyXG4gIHJldHVybiBpdDtcclxufTtcclxuYXNzZXJ0Lmluc3QgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUpe1xyXG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpdGhyb3cgVHlwZUVycm9yKG5hbWUgKyBcIjogdXNlIHRoZSAnbmV3JyBvcGVyYXRvciFcIik7XHJcbiAgcmV0dXJuIGl0O1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2VydDsiLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgZW51bUtleXMgPSByZXF1aXJlKCcuLyQuZW51bS1rZXlzJyk7XHJcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7XHJcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuICB2YXIgVCA9IE9iamVjdCgkLmFzc2VydERlZmluZWQodGFyZ2V0KSlcclxuICAgICwgbCA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICwgaSA9IDE7XHJcbiAgd2hpbGUobCA+IGkpe1xyXG4gICAgdmFyIFMgICAgICA9ICQuRVM1T2JqZWN0KGFyZ3VtZW50c1tpKytdKVxyXG4gICAgICAsIGtleXMgICA9IGVudW1LZXlzKFMpXHJcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICAgLCBqICAgICAgPSAwXHJcbiAgICAgICwga2V5O1xyXG4gICAgd2hpbGUobGVuZ3RoID4gailUW2tleSA9IGtleXNbaisrXV0gPSBTW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBUO1xyXG59OyIsInZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBUQUcgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKVxyXG4gICwgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcclxuZnVuY3Rpb24gY29mKGl0KXtcclxuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xyXG59XHJcbmNvZi5jbGFzc29mID0gZnVuY3Rpb24oaXQpe1xyXG4gIHZhciBPLCBUO1xyXG4gIHJldHVybiBpdCA9PSB1bmRlZmluZWQgPyBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiAnTnVsbCdcclxuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtUQUddKSA9PSAnc3RyaW5nJyA/IFQgOiBjb2YoTyk7XHJcbn07XHJcbmNvZi5zZXQgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcclxuICBpZihpdCAmJiAhJC5oYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpJC5oaWRlKGl0LCBUQUcsIHRhZyk7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gY29mOyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGN0eCAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXHJcbiAgLCBzYWZlICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKS5zYWZlXHJcbiAgLCBhc3NlcnQgICA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKVxyXG4gICwgZm9yT2YgICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcclxuICAsIHN0ZXAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXInKS5zdGVwXHJcbiAgLCBoYXMgICAgICA9ICQuaGFzXHJcbiAgLCBzZXQgICAgICA9ICQuc2V0XHJcbiAgLCBpc09iamVjdCA9ICQuaXNPYmplY3RcclxuICAsIGhpZGUgICAgID0gJC5oaWRlXHJcbiAgLCBpc0Zyb3plbiA9IE9iamVjdC5pc0Zyb3plbiB8fCAkLmNvcmUuT2JqZWN0LmlzRnJvemVuXHJcbiAgLCBJRCAgICAgICA9IHNhZmUoJ2lkJylcclxuICAsIE8xICAgICAgID0gc2FmZSgnTzEnKVxyXG4gICwgTEFTVCAgICAgPSBzYWZlKCdsYXN0JylcclxuICAsIEZJUlNUICAgID0gc2FmZSgnZmlyc3QnKVxyXG4gICwgSVRFUiAgICAgPSBzYWZlKCdpdGVyJylcclxuICAsIFNJWkUgICAgID0gJC5ERVNDID8gc2FmZSgnc2l6ZScpIDogJ3NpemUnXHJcbiAgLCBpZCAgICAgICA9IDA7XHJcblxyXG5mdW5jdGlvbiBmYXN0S2V5KGl0LCBjcmVhdGUpe1xyXG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcclxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xyXG4gIC8vIGNhbid0IHNldCBpZCB0byBmcm96ZW4gb2JqZWN0XHJcbiAgaWYoaXNGcm96ZW4oaXQpKXJldHVybiAnRic7XHJcbiAgaWYoIWhhcyhpdCwgSUQpKXtcclxuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIGlkXHJcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XHJcbiAgICAvLyBhZGQgbWlzc2luZyBvYmplY3QgaWRcclxuICAgIGhpZGUoaXQsIElELCArK2lkKTtcclxuICAvLyByZXR1cm4gb2JqZWN0IGlkIHdpdGggcHJlZml4XHJcbiAgfSByZXR1cm4gJ08nICsgaXRbSURdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFbnRyeSh0aGF0LCBrZXkpe1xyXG4gIC8vIGZhc3QgY2FzZVxyXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XHJcbiAgaWYoaW5kZXggIT0gJ0YnKXJldHVybiB0aGF0W08xXVtpbmRleF07XHJcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXHJcbiAgZm9yKGVudHJ5ID0gdGhhdFtGSVJTVF07IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xyXG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKE5BTUUsIElTX01BUCwgQURERVIpe1xyXG4gICAgZnVuY3Rpb24gQygpe1xyXG4gICAgICB2YXIgdGhhdCAgICAgPSBhc3NlcnQuaW5zdCh0aGlzLCBDLCBOQU1FKVxyXG4gICAgICAgICwgaXRlcmFibGUgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgIHNldCh0aGF0LCBPMSwgJC5jcmVhdGUobnVsbCkpO1xyXG4gICAgICBzZXQodGhhdCwgU0laRSwgMCk7XHJcbiAgICAgIHNldCh0aGF0LCBMQVNULCB1bmRlZmluZWQpO1xyXG4gICAgICBzZXQodGhhdCwgRklSU1QsIHVuZGVmaW5lZCk7XHJcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XHJcbiAgICB9XHJcbiAgICAkLm1peChDLnByb3RvdHlwZSwge1xyXG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcclxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXHJcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xyXG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0W08xXSwgZW50cnkgPSB0aGF0W0ZJUlNUXTsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XHJcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcclxuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGF0W0ZJUlNUXSA9IHRoYXRbTEFTVF0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcclxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXHJcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcclxuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xyXG4gICAgICAgIGlmKGVudHJ5KXtcclxuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxyXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xyXG4gICAgICAgICAgZGVsZXRlIHRoYXRbTzFdW2VudHJ5LmldO1xyXG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XHJcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XHJcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XHJcbiAgICAgICAgICBpZih0aGF0W0ZJUlNUXSA9PSBlbnRyeSl0aGF0W0ZJUlNUXSA9IG5leHQ7XHJcbiAgICAgICAgICBpZih0aGF0W0xBU1RdID09IGVudHJ5KXRoYXRbTEFTVF0gPSBwcmV2O1xyXG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xyXG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcclxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcclxuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0sIDMpXHJcbiAgICAgICAgICAsIGVudHJ5O1xyXG4gICAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpc1tGSVJTVF0pe1xyXG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcclxuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxyXG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXHJcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxyXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xyXG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYoJC5ERVNDKSQuc2V0RGVzYyhDLnByb3RvdHlwZSwgJ3NpemUnLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gYXNzZXJ0LmRlZih0aGlzW1NJWkVdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQztcclxuICB9LFxyXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XHJcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXHJcbiAgICAgICwgcHJldiwgaW5kZXg7XHJcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcclxuICAgIGlmKGVudHJ5KXtcclxuICAgICAgZW50cnkudiA9IHZhbHVlO1xyXG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhhdFtMQVNUXSA9IGVudHJ5ID0ge1xyXG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxyXG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcclxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcclxuICAgICAgICBwOiBwcmV2ID0gdGhhdFtMQVNUXSwgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcclxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxyXG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXHJcbiAgICAgIH07XHJcbiAgICAgIGlmKCF0aGF0W0ZJUlNUXSl0aGF0W0ZJUlNUXSA9IGVudHJ5O1xyXG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xyXG4gICAgICB0aGF0W1NJWkVdKys7XHJcbiAgICAgIC8vIGFkZCB0byBpbmRleFxyXG4gICAgICBpZihpbmRleCAhPSAnRicpdGhhdFtPMV1baW5kZXhdID0gZW50cnk7XHJcbiAgICB9IHJldHVybiB0aGF0O1xyXG4gIH0sXHJcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxyXG4gIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxyXG4gIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcclxuICBzZXRJdGVyOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xyXG4gICAgcmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xyXG4gICAgICBzZXQodGhpcywgSVRFUiwge286IGl0ZXJhdGVkLCBrOiBraW5kfSk7XHJcbiAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgaXRlciAgPSB0aGlzW0lURVJdXHJcbiAgICAgICAgLCBraW5kICA9IGl0ZXIua1xyXG4gICAgICAgICwgZW50cnkgPSBpdGVyLmw7XHJcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxyXG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcclxuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcclxuICAgICAgaWYoIWl0ZXIubyB8fCAhKGl0ZXIubCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogaXRlci5vW0ZJUlNUXSkpe1xyXG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXHJcbiAgICAgICAgaXRlci5vID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcclxuICAgICAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcclxuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcclxuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcclxuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnICwgIUlTX01BUCwgdHJ1ZSk7XHJcbiAgfVxyXG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cclxudmFyICRkZWYgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCBmb3JPZiA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcclxuICAkZGVmKCRkZWYuUCwgTkFNRSwge1xyXG4gICAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oKXtcclxuICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICBmb3JPZih0aGlzLCBmYWxzZSwgYXJyLnB1c2gsIGFycik7XHJcbiAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIHNhZmUgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKS5zYWZlXHJcbiAgLCBhc3NlcnQgICAgPSByZXF1aXJlKCcuLyQuYXNzZXJ0JylcclxuICAsIGZvck9mICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxyXG4gICwgX2hhcyAgICAgID0gJC5oYXNcclxuICAsIGlzT2JqZWN0ICA9ICQuaXNPYmplY3RcclxuICAsIGhpZGUgICAgICA9ICQuaGlkZVxyXG4gICwgaXNGcm96ZW4gID0gT2JqZWN0LmlzRnJvemVuIHx8ICQuY29yZS5PYmplY3QuaXNGcm96ZW5cclxuICAsIGlkICAgICAgICA9IDBcclxuICAsIElEICAgICAgICA9IHNhZmUoJ2lkJylcclxuICAsIFdFQUsgICAgICA9IHNhZmUoJ3dlYWsnKVxyXG4gICwgTEVBSyAgICAgID0gc2FmZSgnbGVhaycpXHJcbiAgLCBtZXRob2QgICAgPSByZXF1aXJlKCcuLyQuYXJyYXktbWV0aG9kcycpXHJcbiAgLCBmaW5kICAgICAgPSBtZXRob2QoNSlcclxuICAsIGZpbmRJbmRleCA9IG1ldGhvZCg2KTtcclxuZnVuY3Rpb24gZmluZEZyb3plbihzdG9yZSwga2V5KXtcclxuICByZXR1cm4gZmluZChzdG9yZS5hcnJheSwgZnVuY3Rpb24oaXQpe1xyXG4gICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XHJcbiAgfSk7XHJcbn1cclxuLy8gZmFsbGJhY2sgZm9yIGZyb3plbiBrZXlzXHJcbmZ1bmN0aW9uIGxlYWtTdG9yZSh0aGF0KXtcclxuICByZXR1cm4gdGhhdFtMRUFLXSB8fCBoaWRlKHRoYXQsIExFQUssIHtcclxuICAgIGFycmF5OiBbXSxcclxuICAgIGdldDogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgdmFyIGVudHJ5ID0gZmluZEZyb3plbih0aGlzLCBrZXkpO1xyXG4gICAgICBpZihlbnRyeSlyZXR1cm4gZW50cnlbMV07XHJcbiAgICB9LFxyXG4gICAgaGFzOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICByZXR1cm4gISFmaW5kRnJvemVuKHRoaXMsIGtleSk7XHJcbiAgICB9LFxyXG4gICAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgICAgdmFyIGVudHJ5ID0gZmluZEZyb3plbih0aGlzLCBrZXkpO1xyXG4gICAgICBpZihlbnRyeSllbnRyeVsxXSA9IHZhbHVlO1xyXG4gICAgICBlbHNlIHRoaXMuYXJyYXkucHVzaChba2V5LCB2YWx1ZV0pO1xyXG4gICAgfSxcclxuICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICB2YXIgaW5kZXggPSBmaW5kSW5kZXgodGhpcy5hcnJheSwgZnVuY3Rpb24oaXQpe1xyXG4gICAgICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xyXG4gICAgICB9KTtcclxuICAgICAgaWYofmluZGV4KXRoaXMuYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgcmV0dXJuICEhfmluZGV4O1xyXG4gICAgfVxyXG4gIH0pW0xFQUtdO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24oTkFNRSwgSVNfTUFQLCBBRERFUil7XHJcbiAgICBmdW5jdGlvbiBDKCl7XHJcbiAgICAgICQuc2V0KGFzc2VydC5pbnN0KHRoaXMsIEMsIE5BTUUpLCBJRCwgaWQrKyk7XHJcbiAgICAgIHZhciBpdGVyYWJsZSA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoaXNbQURERVJdLCB0aGlzKTtcclxuICAgIH1cclxuICAgICQubWl4KEMucHJvdG90eXBlLCB7XHJcbiAgICAgIC8vIDIzLjMuMy4yIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXHJcbiAgICAgIC8vIDIzLjQuMy4zIFdlYWtTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcclxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmKGlzRnJvemVuKGtleSkpcmV0dXJuIGxlYWtTdG9yZSh0aGlzKVsnZGVsZXRlJ10oa2V5KTtcclxuICAgICAgICByZXR1cm4gX2hhcyhrZXksIFdFQUspICYmIF9oYXMoa2V5W1dFQUtdLCB0aGlzW0lEXSkgJiYgZGVsZXRlIGtleVtXRUFLXVt0aGlzW0lEXV07XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIDIzLjMuMy40IFdlYWtNYXAucHJvdG90eXBlLmhhcyhrZXkpXHJcbiAgICAgIC8vIDIzLjQuMy40IFdlYWtTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcclxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcclxuICAgICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYoaXNGcm96ZW4oa2V5KSlyZXR1cm4gbGVha1N0b3JlKHRoaXMpLmhhcyhrZXkpO1xyXG4gICAgICAgIHJldHVybiBfaGFzKGtleSwgV0VBSykgJiYgX2hhcyhrZXlbV0VBS10sIHRoaXNbSURdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQztcclxuICB9LFxyXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XHJcbiAgICBpZihpc0Zyb3plbihhc3NlcnQub2JqKGtleSkpKXtcclxuICAgICAgbGVha1N0b3JlKHRoYXQpLnNldChrZXksIHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9oYXMoa2V5LCBXRUFLKSB8fCBoaWRlKGtleSwgV0VBSywge30pO1xyXG4gICAgICBrZXlbV0VBS11bdGhhdFtJRF1dID0gdmFsdWU7XHJcbiAgICB9IHJldHVybiB0aGF0O1xyXG4gIH0sXHJcbiAgbGVha1N0b3JlOiBsZWFrU3RvcmUsXHJcbiAgV0VBSzogV0VBSyxcclxuICBJRDogSURcclxufTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCAkZGVmICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgQlVHR1kgPSByZXF1aXJlKCcuLyQuaXRlcicpLkJVR0dZXHJcbiAgLCBmb3JPZiA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxyXG4gICwgc3BlY2llcyA9IHJlcXVpcmUoJy4vJC5zcGVjaWVzJylcclxuICAsIGFzc2VydEluc3RhbmNlID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpLmluc3Q7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcclxuICB2YXIgQmFzZSAgPSAkLmdbTkFNRV1cclxuICAgICwgQyAgICAgPSBCYXNlXHJcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xyXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcclxuICAgICwgTyAgICAgPSB7fTtcclxuICBmdW5jdGlvbiBmaXhNZXRob2QoS0VZLCBDSEFJTil7XHJcbiAgICB2YXIgbWV0aG9kID0gcHJvdG9bS0VZXTtcclxuICAgIGlmKCQuRlcpcHJvdG9bS0VZXSA9IGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICB2YXIgcmVzdWx0ID0gbWV0aG9kLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTtcclxuICAgICAgcmV0dXJuIENIQUlOID8gdGhpcyA6IHJlc3VsdDtcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmKCEkLmlzRnVuY3Rpb24oQykgfHwgIShJU19XRUFLIHx8ICFCVUdHWSAmJiBwcm90by5mb3JFYWNoICYmIHByb3RvLmVudHJpZXMpKXtcclxuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXHJcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKE5BTUUsIElTX01BUCwgQURERVIpO1xyXG4gICAgJC5taXgoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgaW5zdCAgPSBuZXcgQ1xyXG4gICAgICAsIGNoYWluID0gaW5zdFtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpXHJcbiAgICAgICwgYnVnZ3laZXJvO1xyXG4gICAgLy8gd3JhcCBmb3IgaW5pdCBjb2xsZWN0aW9ucyBmcm9tIGl0ZXJhYmxlXHJcbiAgICBpZighcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7IG5ldyBDKGl0ZXIpOyB9KSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XHJcbiAgICAgIEMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGFzc2VydEluc3RhbmNlKHRoaXMsIEMsIE5BTUUpO1xyXG4gICAgICAgIHZhciB0aGF0ICAgICA9IG5ldyBCYXNlXHJcbiAgICAgICAgICAsIGl0ZXJhYmxlID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoYXQ7XHJcbiAgICAgIH07XHJcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XHJcbiAgICAgIGlmKCQuRlcpcHJvdG8uY29uc3RydWN0b3IgPSBDO1xyXG4gICAgfVxyXG4gICAgSVNfV0VBSyB8fCBpbnN0LmZvckVhY2goZnVuY3Rpb24odmFsLCBrZXkpe1xyXG4gICAgICBidWdneVplcm8gPSAxIC8ga2V5ID09PSAtSW5maW5pdHk7XHJcbiAgICB9KTtcclxuICAgIC8vIGZpeCBjb252ZXJ0aW5nIC0wIGtleSB0byArMFxyXG4gICAgaWYoYnVnZ3laZXJvKXtcclxuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcclxuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcclxuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XHJcbiAgICB9XHJcbiAgICAvLyArIGZpeCAuYWRkICYgLnNldCBmb3IgY2hhaW5pbmdcclxuICAgIGlmKGJ1Z2d5WmVybyB8fCBjaGFpbiAhPT0gaW5zdClmaXhNZXRob2QoQURERVIsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWlyZSgnLi8kLmNvZicpLnNldChDLCBOQU1FKTtcclxuXHJcbiAgT1tOQU1FXSA9IEM7XHJcbiAgJGRlZigkZGVmLkcgKyAkZGVmLlcgKyAkZGVmLkYgKiAoQyAhPSBCYXNlKSwgTyk7XHJcbiAgc3BlY2llcyhDKTtcclxuICBzcGVjaWVzKCQuY29yZVtOQU1FXSk7IC8vIGZvciB3cmFwcGVyXHJcblxyXG4gIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRJdGVyKEMsIE5BTUUsIElTX01BUCk7XHJcblxyXG4gIHJldHVybiBDO1xyXG59OyIsIi8vIE9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xyXG52YXIgYXNzZXJ0RnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYXNzZXJ0JykuZm47XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XHJcbiAgYXNzZXJ0RnVuY3Rpb24oZm4pO1xyXG4gIGlmKH5sZW5ndGggJiYgdGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcclxuICBzd2l0Y2gobGVuZ3RoKXtcclxuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xyXG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcclxuICAgIH07XHJcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XHJcbiAgICB9O1xyXG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XHJcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xyXG4gICAgfTtcclxuICB9IHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcclxuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG59OyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGdsb2JhbCAgICAgPSAkLmdcclxuICAsIGNvcmUgICAgICAgPSAkLmNvcmVcclxuICAsIGlzRnVuY3Rpb24gPSAkLmlzRnVuY3Rpb247XHJcbmZ1bmN0aW9uIGN0eChmbiwgdGhhdCl7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcclxuICB9O1xyXG59XHJcbmdsb2JhbC5jb3JlID0gY29yZTtcclxuLy8gdHlwZSBiaXRtYXBcclxuJGRlZi5GID0gMTsgIC8vIGZvcmNlZFxyXG4kZGVmLkcgPSAyOyAgLy8gZ2xvYmFsXHJcbiRkZWYuUyA9IDQ7ICAvLyBzdGF0aWNcclxuJGRlZi5QID0gODsgIC8vIHByb3RvXHJcbiRkZWYuQiA9IDE2OyAvLyBiaW5kXHJcbiRkZWYuVyA9IDMyOyAvLyB3cmFwXHJcbmZ1bmN0aW9uICRkZWYodHlwZSwgbmFtZSwgc291cmNlKXtcclxuICB2YXIga2V5LCBvd24sIG91dCwgZXhwXHJcbiAgICAsIGlzR2xvYmFsID0gdHlwZSAmICRkZWYuR1xyXG4gICAgLCB0YXJnZXQgICA9IGlzR2xvYmFsID8gZ2xvYmFsIDogdHlwZSAmICRkZWYuU1xyXG4gICAgICAgID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSkucHJvdG90eXBlXHJcbiAgICAsIGV4cG9ydHMgID0gaXNHbG9iYWwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcclxuICBpZihpc0dsb2JhbClzb3VyY2UgPSBuYW1lO1xyXG4gIGZvcihrZXkgaW4gc291cmNlKXtcclxuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxyXG4gICAgb3duID0gISh0eXBlICYgJGRlZi5GKSAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcclxuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXHJcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xyXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcclxuICAgIGlmKHR5cGUgJiAkZGVmLkIgJiYgb3duKWV4cCA9IGN0eChvdXQsIGdsb2JhbCk7XHJcbiAgICBlbHNlIGV4cCA9IHR5cGUgJiAkZGVmLlAgJiYgaXNGdW5jdGlvbihvdXQpID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XHJcbiAgICAvLyBleHRlbmQgZ2xvYmFsXHJcbiAgICBpZih0YXJnZXQgJiYgIW93bil7XHJcbiAgICAgIGlmKGlzR2xvYmFsKXRhcmdldFtrZXldID0gb3V0O1xyXG4gICAgICBlbHNlIGRlbGV0ZSB0YXJnZXRba2V5XSAmJiAkLmhpZGUodGFyZ2V0LCBrZXksIG91dCk7XHJcbiAgICB9XHJcbiAgICAvLyBleHBvcnRcclxuICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpJC5oaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSAkZGVmOyIsInZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBkb2N1bWVudCA9ICQuZy5kb2N1bWVudFxyXG4gICwgaXNPYmplY3QgPSAkLmlzT2JqZWN0XHJcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXHJcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XHJcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcclxufTsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcclxuICB2YXIga2V5cyAgICAgICA9ICQuZ2V0S2V5cyhpdClcclxuICAgICwgZ2V0RGVzYyAgICA9ICQuZ2V0RGVzY1xyXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzO1xyXG4gIGlmKGdldFN5bWJvbHMpJC5lYWNoLmNhbGwoZ2V0U3ltYm9scyhpdCksIGZ1bmN0aW9uKGtleSl7XHJcbiAgICBpZihnZXREZXNjKGl0LCBrZXkpLmVudW1lcmFibGUpa2V5cy5wdXNoKGtleSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGtleXM7XHJcbn07IiwidmFyIGN0eCAgPSByZXF1aXJlKCcuLyQuY3R4JylcclxuICAsIGdldCAgPSByZXF1aXJlKCcuLyQuaXRlcicpLmdldFxyXG4gICwgY2FsbCA9IHJlcXVpcmUoJy4vJC5pdGVyLWNhbGwnKTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQpe1xyXG4gIHZhciBpdGVyYXRvciA9IGdldChpdGVyYWJsZSlcclxuICAgICwgZiAgICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcclxuICAgICwgc3RlcDtcclxuICB3aGlsZSghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpe1xyXG4gICAgaWYoY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcykgPT09IGZhbHNlKXtcclxuICAgICAgcmV0dXJuIGNhbGwuY2xvc2UoaXRlcmF0b3IpO1xyXG4gICAgfVxyXG4gIH1cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCQpe1xyXG4gICQuRlcgICA9IHRydWU7XHJcbiAgJC5wYXRoID0gJC5nO1xyXG4gIHJldHVybiAkO1xyXG59OyIsIi8vIEZhc3QgYXBwbHlcclxuLy8gaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xyXG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcclxuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xyXG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XHJcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XHJcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XHJcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XHJcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICBjYXNlIDU6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSk7XHJcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xyXG59OyIsInZhciBhc3NlcnRPYmplY3QgPSByZXF1aXJlKCcuLyQuYXNzZXJ0Jykub2JqO1xyXG5mdW5jdGlvbiBjbG9zZShpdGVyYXRvcil7XHJcbiAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcclxuICBpZihyZXQgIT09IHVuZGVmaW5lZClhc3NlcnRPYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcclxufVxyXG5mdW5jdGlvbiBjYWxsKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFzc2VydE9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcclxuICB9IGNhdGNoKGUpe1xyXG4gICAgY2xvc2UoaXRlcmF0b3IpO1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuY2FsbC5jbG9zZSA9IGNsb3NlO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGNhbGw7IiwidmFyICRkZWYgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgJCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGNvZiAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxyXG4gICwgJGl0ZXIgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXInKVxyXG4gICwgU1lNQk9MX0lURVJBVE9SID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXHJcbiAgLCBGRl9JVEVSQVRPUiAgICAgPSAnQEBpdGVyYXRvcidcclxuICAsIEtFWVMgICAgICAgICAgICA9ICdrZXlzJ1xyXG4gICwgVkFMVUVTICAgICAgICAgID0gJ3ZhbHVlcydcclxuICAsIEl0ZXJhdG9ycyAgICAgICA9ICRpdGVyLkl0ZXJhdG9ycztcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRSl7XHJcbiAgJGl0ZXIuY3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcclxuICBmdW5jdGlvbiBjcmVhdGVNZXRob2Qoa2luZCl7XHJcbiAgICBmdW5jdGlvbiAkJCh0aGF0KXtcclxuICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGF0LCBraW5kKTtcclxuICAgIH1cclxuICAgIHN3aXRjaChraW5kKXtcclxuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gJCQodGhpcyk7IH07XHJcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkJCh0aGlzKTsgfTtcclxuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuICQkKHRoaXMpOyB9O1xyXG4gIH1cclxuICB2YXIgVEFHICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcclxuICAgICwgcHJvdG8gICAgPSBCYXNlLnByb3RvdHlwZVxyXG4gICAgLCBfbmF0aXZlICA9IHByb3RvW1NZTUJPTF9JVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cclxuICAgICwgX2RlZmF1bHQgPSBfbmF0aXZlIHx8IGNyZWF0ZU1ldGhvZChERUZBVUxUKVxyXG4gICAgLCBtZXRob2RzLCBrZXk7XHJcbiAgLy8gRml4IG5hdGl2ZVxyXG4gIGlmKF9uYXRpdmUpe1xyXG4gICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gJC5nZXRQcm90byhfZGVmYXVsdC5jYWxsKG5ldyBCYXNlKSk7XHJcbiAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXHJcbiAgICBjb2Yuc2V0KEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xyXG4gICAgLy8gRkYgZml4XHJcbiAgICBpZigkLkZXICYmICQuaGFzKHByb3RvLCBGRl9JVEVSQVRPUikpJGl0ZXIuc2V0KEl0ZXJhdG9yUHJvdG90eXBlLCAkLnRoYXQpO1xyXG4gIH1cclxuICAvLyBEZWZpbmUgaXRlcmF0b3JcclxuICBpZigkLkZXKSRpdGVyLnNldChwcm90bywgX2RlZmF1bHQpO1xyXG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcclxuICBJdGVyYXRvcnNbTkFNRV0gPSBfZGVmYXVsdDtcclxuICBJdGVyYXRvcnNbVEFHXSAgPSAkLnRoYXQ7XHJcbiAgaWYoREVGQVVMVCl7XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgICAgICAgICA/IF9kZWZhdWx0IDogY3JlYXRlTWV0aG9kKEtFWVMpLFxyXG4gICAgICB2YWx1ZXM6ICBERUZBVUxUID09IFZBTFVFUyA/IF9kZWZhdWx0IDogY3JlYXRlTWV0aG9kKFZBTFVFUyksXHJcbiAgICAgIGVudHJpZXM6IERFRkFVTFQgIT0gVkFMVUVTID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoJ2VudHJpZXMnKVxyXG4gICAgfTtcclxuICAgIGlmKEZPUkNFKWZvcihrZXkgaW4gbWV0aG9kcyl7XHJcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSkkLmhpZGUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcclxuICAgIH0gZWxzZSAkZGVmKCRkZWYuUCArICRkZWYuRiAqICRpdGVyLkJVR0dZLCBOQU1FLCBtZXRob2RzKTtcclxuICB9XHJcbn07IiwidmFyIFNZTUJPTF9JVEVSQVRPUiA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxyXG4gICwgU0FGRV9DTE9TSU5HICAgID0gZmFsc2U7XHJcbnRyeSB7XHJcbiAgdmFyIHJpdGVyID0gWzddW1NZTUJPTF9JVEVSQVRPUl0oKTtcclxuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xyXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xyXG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XHJcbiAgaWYoIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XHJcbiAgdmFyIHNhZmUgPSBmYWxzZTtcclxuICB0cnkge1xyXG4gICAgdmFyIGFyciAgPSBbN11cclxuICAgICAgLCBpdGVyID0gYXJyW1NZTUJPTF9JVEVSQVRPUl0oKTtcclxuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHNhZmUgPSB0cnVlOyB9O1xyXG4gICAgYXJyW1NZTUJPTF9JVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcclxuICAgIGV4ZWMoYXJyKTtcclxuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XHJcbiAgcmV0dXJuIHNhZmU7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgY29mICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuY29mJylcclxuICAsIGFzc2VydE9iamVjdCAgICAgID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpLm9ialxyXG4gICwgU1lNQk9MX0lURVJBVE9SICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcclxuICAsIEZGX0lURVJBVE9SICAgICAgID0gJ0BAaXRlcmF0b3InXHJcbiAgLCBJdGVyYXRvcnMgICAgICAgICA9IHt9XHJcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xyXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxyXG5zZXRJdGVyYXRvcihJdGVyYXRvclByb3RvdHlwZSwgJC50aGF0KTtcclxuZnVuY3Rpb24gc2V0SXRlcmF0b3IoTywgdmFsdWUpe1xyXG4gICQuaGlkZShPLCBTWU1CT0xfSVRFUkFUT1IsIHZhbHVlKTtcclxuICAvLyBBZGQgaXRlcmF0b3IgZm9yIEZGIGl0ZXJhdG9yIHByb3RvY29sXHJcbiAgaWYoRkZfSVRFUkFUT1IgaW4gW10pJC5oaWRlKE8sIEZGX0lURVJBVE9SLCB2YWx1ZSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcclxuICBCVUdHWTogJ2tleXMnIGluIFtdICYmICEoJ25leHQnIGluIFtdLmtleXMoKSksXHJcbiAgSXRlcmF0b3JzOiBJdGVyYXRvcnMsXHJcbiAgc3RlcDogZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xyXG4gICAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XHJcbiAgfSxcclxuICBpczogZnVuY3Rpb24oaXQpe1xyXG4gICAgdmFyIE8gICAgICA9IE9iamVjdChpdClcclxuICAgICAgLCBTeW1ib2wgPSAkLmcuU3ltYm9sXHJcbiAgICAgICwgU1lNICAgID0gU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciB8fCBGRl9JVEVSQVRPUjtcclxuICAgIHJldHVybiBTWU0gaW4gTyB8fCBTWU1CT0xfSVRFUkFUT1IgaW4gTyB8fCAkLmhhcyhJdGVyYXRvcnMsIGNvZi5jbGFzc29mKE8pKTtcclxuICB9LFxyXG4gIGdldDogZnVuY3Rpb24oaXQpe1xyXG4gICAgdmFyIFN5bWJvbCAgPSAkLmcuU3ltYm9sXHJcbiAgICAgICwgZXh0ICAgICA9IGl0W1N5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3IgfHwgRkZfSVRFUkFUT1JdXHJcbiAgICAgICwgZ2V0SXRlciA9IGV4dCB8fCBpdFtTWU1CT0xfSVRFUkFUT1JdIHx8IEl0ZXJhdG9yc1tjb2YuY2xhc3NvZihpdCldO1xyXG4gICAgcmV0dXJuIGFzc2VydE9iamVjdChnZXRJdGVyLmNhbGwoaXQpKTtcclxuICB9LFxyXG4gIHNldDogc2V0SXRlcmF0b3IsXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCwgcHJvdG8pe1xyXG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gJC5jcmVhdGUocHJvdG8gfHwgSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiAkLmRlc2MoMSwgbmV4dCl9KTtcclxuICAgIGNvZi5zZXQoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XHJcbiAgfVxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxudmFyIGdsb2JhbCA9IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClcclxuICAsIGNvcmUgICA9IHt9XHJcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxyXG4gICwgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eVxyXG4gICwgY2VpbCAgPSBNYXRoLmNlaWxcclxuICAsIGZsb29yID0gTWF0aC5mbG9vclxyXG4gICwgbWF4ICAgPSBNYXRoLm1heFxyXG4gICwgbWluICAgPSBNYXRoLm1pbjtcclxuLy8gVGhlIGVuZ2luZSB3b3JrcyBmaW5lIHdpdGggZGVzY3JpcHRvcnM/IFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHkuXHJcbnZhciBERVNDID0gISFmdW5jdGlvbigpe1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDI7IH19KS5hID09IDI7XHJcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxyXG59KCk7XHJcbnZhciBoaWRlID0gY3JlYXRlRGVmaW5lcigxKTtcclxuLy8gNy4xLjQgVG9JbnRlZ2VyXHJcbmZ1bmN0aW9uIHRvSW50ZWdlcihpdCl7XHJcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XHJcbn1cclxuZnVuY3Rpb24gZGVzYyhiaXRtYXAsIHZhbHVlKXtcclxuICByZXR1cm4ge1xyXG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxyXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxyXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxyXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxyXG4gIH07XHJcbn1cclxuZnVuY3Rpb24gc2ltcGxlU2V0KG9iamVjdCwga2V5LCB2YWx1ZSl7XHJcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcclxuICByZXR1cm4gb2JqZWN0O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZURlZmluZXIoYml0bWFwKXtcclxuICByZXR1cm4gREVTQyA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XHJcbiAgICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBkZXNjKGJpdG1hcCwgdmFsdWUpKTtcclxuICB9IDogc2ltcGxlU2V0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdChpdCl7XHJcbiAgcmV0dXJuIGl0ICE9PSBudWxsICYmICh0eXBlb2YgaXQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIGl0ID09ICdmdW5jdGlvbicpO1xyXG59XHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oaXQpe1xyXG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJztcclxufVxyXG5mdW5jdGlvbiBhc3NlcnREZWZpbmVkKGl0KXtcclxuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xyXG4gIHJldHVybiBpdDtcclxufVxyXG5cclxudmFyICQgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mdycpKHtcclxuICBnOiBnbG9iYWwsXHJcbiAgY29yZTogY29yZSxcclxuICBodG1sOiBnbG9iYWwuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxyXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvcmUtanMtaXNvYmplY3RcclxuICBpc09iamVjdDogICBpc09iamVjdCxcclxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxyXG4gIGl0OiBmdW5jdGlvbihpdCl7XHJcbiAgICByZXR1cm4gaXQ7XHJcbiAgfSxcclxuICB0aGF0OiBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfSxcclxuICAvLyA3LjEuNCBUb0ludGVnZXJcclxuICB0b0ludGVnZXI6IHRvSW50ZWdlcixcclxuICAvLyA3LjEuMTUgVG9MZW5ndGhcclxuICB0b0xlbmd0aDogZnVuY3Rpb24oaXQpe1xyXG4gICAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcclxuICB9LFxyXG4gIHRvSW5kZXg6IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xyXG4gICAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xyXG4gICAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XHJcbiAgfSxcclxuICBoYXM6IGZ1bmN0aW9uKGl0LCBrZXkpe1xyXG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XHJcbiAgfSxcclxuICBjcmVhdGU6ICAgICBPYmplY3QuY3JlYXRlLFxyXG4gIGdldFByb3RvOiAgIE9iamVjdC5nZXRQcm90b3R5cGVPZixcclxuICBERVNDOiAgICAgICBERVNDLFxyXG4gIGRlc2M6ICAgICAgIGRlc2MsXHJcbiAgZ2V0RGVzYzogICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcclxuICBzZXREZXNjOiAgICBkZWZpbmVQcm9wZXJ0eSxcclxuICBzZXREZXNjczogICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcclxuICBnZXRLZXlzOiAgICBPYmplY3Qua2V5cyxcclxuICBnZXROYW1lczogICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcclxuICBnZXRTeW1ib2xzOiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxyXG4gIGFzc2VydERlZmluZWQ6IGFzc2VydERlZmluZWQsXHJcbiAgLy8gRHVtbXksIGZpeCBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZyBpbiBlczUgbW9kdWxlXHJcbiAgRVM1T2JqZWN0OiBPYmplY3QsXHJcbiAgdG9PYmplY3Q6IGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiAkLkVTNU9iamVjdChhc3NlcnREZWZpbmVkKGl0KSk7XHJcbiAgfSxcclxuICBoaWRlOiBoaWRlLFxyXG4gIGRlZjogY3JlYXRlRGVmaW5lcigwKSxcclxuICBzZXQ6IGdsb2JhbC5TeW1ib2wgPyBzaW1wbGVTZXQgOiBoaWRlLFxyXG4gIG1peDogZnVuY3Rpb24odGFyZ2V0LCBzcmMpe1xyXG4gICAgZm9yKHZhciBrZXkgaW4gc3JjKWhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfSxcclxuICBlYWNoOiBbXS5mb3JFYWNoXHJcbn0pO1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5pZih0eXBlb2YgX19lICE9ICd1bmRlZmluZWQnKV9fZSA9IGNvcmU7XHJcbmlmKHR5cGVvZiBfX2cgIT0gJ3VuZGVmaW5lZCcpX19nID0gZ2xvYmFsOyIsInZhciAkID0gcmVxdWlyZSgnLi8kJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XHJcbiAgdmFyIE8gICAgICA9ICQudG9PYmplY3Qob2JqZWN0KVxyXG4gICAgLCBrZXlzICAgPSAkLmdldEtleXMoTylcclxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICwgaW5kZXggID0gMFxyXG4gICAgLCBrZXk7XHJcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcclxufTsiLCJ2YXIgJCAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGFzc2VydE9iamVjdCA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKS5vYmo7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gb3duS2V5cyhpdCl7XHJcbiAgYXNzZXJ0T2JqZWN0KGl0KTtcclxuICB2YXIga2V5cyAgICAgICA9ICQuZ2V0TmFtZXMoaXQpXHJcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHM7XHJcbiAgcmV0dXJuIGdldFN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRTeW1ib2xzKGl0KSkgOiBrZXlzO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBpbnZva2UgPSByZXF1aXJlKCcuLyQuaW52b2tlJylcclxuICAsIGFzc2VydEZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpLmZuO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKC8qIC4uLnBhcmdzICovKXtcclxuICB2YXIgZm4gICAgID0gYXNzZXJ0RnVuY3Rpb24odGhpcylcclxuICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgLCBwYXJncyAgPSBBcnJheShsZW5ndGgpXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwgXyAgICAgID0gJC5wYXRoLl9cclxuICAgICwgaG9sZGVyID0gZmFsc2U7XHJcbiAgd2hpbGUobGVuZ3RoID4gaSlpZigocGFyZ3NbaV0gPSBhcmd1bWVudHNbaSsrXSkgPT09IF8paG9sZGVyID0gdHJ1ZTtcclxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XHJcbiAgICB2YXIgdGhhdCAgICA9IHRoaXNcclxuICAgICAgLCBfbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAsIGogPSAwLCBrID0gMCwgYXJncztcclxuICAgIGlmKCFob2xkZXIgJiYgIV9sZW5ndGgpcmV0dXJuIGludm9rZShmbiwgcGFyZ3MsIHRoYXQpO1xyXG4gICAgYXJncyA9IHBhcmdzLnNsaWNlKCk7XHJcbiAgICBpZihob2xkZXIpZm9yKDtsZW5ndGggPiBqOyBqKyspaWYoYXJnc1tqXSA9PT0gXylhcmdzW2pdID0gYXJndW1lbnRzW2srK107XHJcbiAgICB3aGlsZShfbGVuZ3RoID4gaylhcmdzLnB1c2goYXJndW1lbnRzW2srK10pO1xyXG4gICAgcmV0dXJuIGludm9rZShmbiwgYXJncywgdGhhdCk7XHJcbiAgfTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVnRXhwLCByZXBsYWNlLCBpc1N0YXRpYyl7XHJcbiAgdmFyIHJlcGxhY2VyID0gcmVwbGFjZSA9PT0gT2JqZWN0KHJlcGxhY2UpID8gZnVuY3Rpb24ocGFydCl7XHJcbiAgICByZXR1cm4gcmVwbGFjZVtwYXJ0XTtcclxuICB9IDogcmVwbGFjZTtcclxuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xyXG4gICAgcmV0dXJuIFN0cmluZyhpc1N0YXRpYyA/IGl0IDogdGhpcykucmVwbGFjZShyZWdFeHAsIHJlcGxhY2VyKTtcclxuICB9O1xyXG59OyIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xyXG52YXIgJCAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGFzc2VydCA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKTtcclxuZnVuY3Rpb24gY2hlY2soTywgcHJvdG8pe1xyXG4gIGFzc2VydC5vYmooTyk7XHJcbiAgYXNzZXJ0KHByb3RvID09PSBudWxsIHx8ICQuaXNPYmplY3QocHJvdG8pLCBwcm90bywgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICA/IGZ1bmN0aW9uKGJ1Z2d5LCBzZXQpe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBzZXQgPSByZXF1aXJlKCcuLyQuY3R4JykoRnVuY3Rpb24uY2FsbCwgJC5nZXREZXNjKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xyXG4gICAgICAgICAgc2V0KHt9LCBbXSk7XHJcbiAgICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcclxuICAgICAgICAgIGNoZWNrKE8sIHByb3RvKTtcclxuICAgICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XHJcbiAgICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XHJcbiAgICAgICAgICByZXR1cm4gTztcclxuICAgICAgICB9O1xyXG4gICAgICB9KClcclxuICAgIDogdW5kZWZpbmVkKSxcclxuICBjaGVjazogY2hlY2tcclxufTsiLCJ2YXIgJCAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBTUEVDSUVTID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQyl7XHJcbiAgaWYoJC5ERVNDICYmICEoU1BFQ0lFUyBpbiBDKSkkLnNldERlc2MoQywgU1BFQ0lFUywge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiAkLnRoYXRcclxuICB9KTtcclxufTsiLCIvLyB0cnVlICAtPiBTdHJpbmcjYXRcclxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XHJcbnZhciAkID0gcmVxdWlyZSgnLi8kJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcclxuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcclxuICAgIHZhciBzID0gU3RyaW5nKCQuYXNzZXJ0RGVmaW5lZCh0aGF0KSlcclxuICAgICAgLCBpID0gJC50b0ludGVnZXIocG9zKVxyXG4gICAgICAsIGwgPSBzLmxlbmd0aFxyXG4gICAgICAsIGEsIGI7XHJcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xyXG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcclxuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGxcclxuICAgICAgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXHJcbiAgICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcclxuICAgICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcclxuICB9O1xyXG59OyIsIi8vIGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPXN0cmF3bWFuOnN0cmluZ19wYWRkaW5nXHJcbnZhciAkICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgcmVwZWF0ID0gcmVxdWlyZSgnLi8kLnN0cmluZy1yZXBlYXQnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgbWluTGVuZ3RoLCBmaWxsQ2hhciwgbGVmdCl7XHJcbiAgLy8gMS4gTGV0IE8gYmUgQ2hlY2tPYmplY3RDb2VyY2libGUodGhpcyB2YWx1ZSkuXHJcbiAgLy8gMi4gTGV0IFMgYmUgVG9TdHJpbmcoTykuXHJcbiAgdmFyIFMgPSBTdHJpbmcoJC5hc3NlcnREZWZpbmVkKHRoYXQpKTtcclxuICAvLyA0LiBJZiBpbnRNaW5MZW5ndGggaXMgdW5kZWZpbmVkLCByZXR1cm4gUy5cclxuICBpZihtaW5MZW5ndGggPT09IHVuZGVmaW5lZClyZXR1cm4gUztcclxuICAvLyA0LiBMZXQgaW50TWluTGVuZ3RoIGJlIFRvSW50ZWdlcihtaW5MZW5ndGgpLlxyXG4gIHZhciBpbnRNaW5MZW5ndGggPSAkLnRvSW50ZWdlcihtaW5MZW5ndGgpO1xyXG4gIC8vIDUuIExldCBmaWxsTGVuIGJlIHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBpbiBTIG1pbnVzIGludE1pbkxlbmd0aC5cclxuICB2YXIgZmlsbExlbiA9IGludE1pbkxlbmd0aCAtIFMubGVuZ3RoO1xyXG4gIC8vIDYuIElmIGZpbGxMZW4gPCAwLCB0aGVuIHRocm93IGEgUmFuZ2VFcnJvciBleGNlcHRpb24uXHJcbiAgLy8gNy4gSWYgZmlsbExlbiBpcyAr4oieLCB0aGVuIHRocm93IGEgUmFuZ2VFcnJvciBleGNlcHRpb24uXHJcbiAgaWYoZmlsbExlbiA8IDAgfHwgZmlsbExlbiA9PT0gSW5maW5pdHkpe1xyXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Nhbm5vdCBzYXRpc2Z5IHN0cmluZyBsZW5ndGggJyArIG1pbkxlbmd0aCArICcgZm9yIHN0cmluZzogJyArIFMpO1xyXG4gIH1cclxuICAvLyA4LiBMZXQgc0ZpbGxTdHIgYmUgdGhlIHN0cmluZyByZXByZXNlbnRlZCBieSBmaWxsU3RyLlxyXG4gIC8vIDkuIElmIHNGaWxsU3RyIGlzIHVuZGVmaW5lZCwgbGV0IHNGaWxsU3RyIGJlIGEgc3BhY2UgY2hhcmFjdGVyLlxyXG4gIHZhciBzRmlsbFN0ciA9IGZpbGxDaGFyID09PSB1bmRlZmluZWQgPyAnICcgOiBTdHJpbmcoZmlsbENoYXIpO1xyXG4gIC8vIDEwLiBMZXQgc0ZpbGxWYWwgYmUgYSBTdHJpbmcgbWFkZSBvZiBzRmlsbFN0ciwgcmVwZWF0ZWQgdW50aWwgZmlsbExlbiBpcyBtZXQuXHJcbiAgdmFyIHNGaWxsVmFsID0gcmVwZWF0LmNhbGwoc0ZpbGxTdHIsIE1hdGguY2VpbChmaWxsTGVuIC8gc0ZpbGxTdHIubGVuZ3RoKSk7XHJcbiAgLy8gdHJ1bmNhdGUgaWYgd2Ugb3ZlcmZsb3dlZFxyXG4gIGlmKHNGaWxsVmFsLmxlbmd0aCA+IGZpbGxMZW4pc0ZpbGxWYWwgPSBsZWZ0XHJcbiAgICA/IHNGaWxsVmFsLnNsaWNlKHNGaWxsVmFsLmxlbmd0aCAtIGZpbGxMZW4pXHJcbiAgICA6IHNGaWxsVmFsLnNsaWNlKDAsIGZpbGxMZW4pO1xyXG4gIC8vIDExLiBSZXR1cm4gYSBzdHJpbmcgbWFkZSBmcm9tIHNGaWxsVmFsLCBmb2xsb3dlZCBieSBTLlxyXG4gIC8vIDExLiBSZXR1cm4gYSBTdHJpbmcgbWFkZSBmcm9tIFMsIGZvbGxvd2VkIGJ5IHNGaWxsVmFsLlxyXG4gIHJldHVybiBsZWZ0ID8gc0ZpbGxWYWwuY29uY2F0KFMpIDogUy5jb25jYXQoc0ZpbGxWYWwpO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLyQnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KXtcclxuICB2YXIgc3RyID0gU3RyaW5nKCQuYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICwgcmVzID0gJydcclxuICAgICwgbiAgID0gJC50b0ludGVnZXIoY291bnQpO1xyXG4gIGlmKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpdGhyb3cgUmFuZ2VFcnJvcihcIkNvdW50IGNhbid0IGJlIG5lZ2F0aXZlXCIpO1xyXG4gIGZvcig7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKWlmKG4gJiAxKXJlcyArPSBzdHI7XHJcbiAgcmV0dXJuIHJlcztcclxufTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgY3R4ICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXHJcbiAgLCBjb2YgICAgPSByZXF1aXJlKCcuLyQuY29mJylcclxuICAsIGludm9rZSA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKVxyXG4gICwgY2VsICAgID0gcmVxdWlyZSgnLi8kLmRvbS1jcmVhdGUnKVxyXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gJC5nXHJcbiAgLCBpc0Z1bmN0aW9uICAgICAgICAgPSAkLmlzRnVuY3Rpb25cclxuICAsIGh0bWwgICAgICAgICAgICAgICA9ICQuaHRtbFxyXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcclxuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcclxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxyXG4gICwgcG9zdE1lc3NhZ2UgICAgICAgID0gZ2xvYmFsLnBvc3RNZXNzYWdlXHJcbiAgLCBhZGRFdmVudExpc3RlbmVyICAgPSBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lclxyXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXHJcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXHJcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxyXG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcclxuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xyXG5mdW5jdGlvbiBydW4oKXtcclxuICB2YXIgaWQgPSArdGhpcztcclxuICBpZigkLmhhcyhxdWV1ZSwgaWQpKXtcclxuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcclxuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XHJcbiAgICBmbigpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBsaXN0bmVyKGV2ZW50KXtcclxuICBydW4uY2FsbChldmVudC5kYXRhKTtcclxufVxyXG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XHJcbmlmKCFpc0Z1bmN0aW9uKHNldFRhc2spIHx8ICFpc0Z1bmN0aW9uKGNsZWFyVGFzaykpe1xyXG4gIHNldFRhc2sgPSBmdW5jdGlvbihmbil7XHJcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcclxuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XHJcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcclxuICAgICAgaW52b2tlKGlzRnVuY3Rpb24oZm4pID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xyXG4gICAgfTtcclxuICAgIGRlZmVyKGNvdW50ZXIpO1xyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfTtcclxuICBjbGVhclRhc2sgPSBmdW5jdGlvbihpZCl7XHJcbiAgICBkZWxldGUgcXVldWVbaWRdO1xyXG4gIH07XHJcbiAgLy8gTm9kZS5qcyAwLjgtXHJcbiAgaWYoY29mKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcclxuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xyXG4gICAgfTtcclxuICAvLyBNb2Rlcm4gYnJvd3NlcnMsIHNraXAgaW1wbGVtZW50YXRpb24gZm9yIFdlYldvcmtlcnNcclxuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyBvYmplY3RcclxuICB9IGVsc2UgaWYoYWRkRXZlbnRMaXN0ZW5lciAmJiBpc0Z1bmN0aW9uKHBvc3RNZXNzYWdlKSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xyXG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XHJcbiAgICAgIHBvc3RNZXNzYWdlKGlkLCAnKicpO1xyXG4gICAgfTtcclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0bmVyLCBmYWxzZSk7XHJcbiAgLy8gV2ViV29ya2Vyc1xyXG4gIH0gZWxzZSBpZihpc0Z1bmN0aW9uKE1lc3NhZ2VDaGFubmVsKSl7XHJcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xyXG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XHJcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RuZXI7XHJcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcclxuICAvLyBJRTgtXHJcbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcclxuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xyXG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcclxuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgc2V0OiAgIHNldFRhc2ssXHJcbiAgY2xlYXI6IGNsZWFyVGFza1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XHJcbiAgdHJ5IHtcclxuICAgIGV4ZWMoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGNhdGNoKGUpe1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59OyIsInZhciBzaWQgPSAwO1xyXG5mdW5jdGlvbiB1aWQoa2V5KXtcclxuICByZXR1cm4gJ1N5bWJvbCgnICsga2V5ICsgJylfJyArICgrK3NpZCArIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDM2KTtcclxufVxyXG51aWQuc2FmZSA9IHJlcXVpcmUoJy4vJCcpLmcuU3ltYm9sIHx8IHVpZDtcclxubW9kdWxlLmV4cG9ydHMgPSB1aWQ7IiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxyXG52YXIgJCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuLyQud2tzJykoJ3Vuc2NvcGFibGVzJyk7XHJcbmlmKCQuRlcgJiYgIShVTlNDT1BBQkxFUyBpbiBbXSkpJC5oaWRlKEFycmF5LnByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHt9KTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xyXG4gIGlmKCQuRlcpW11bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xyXG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQnKS5nXHJcbiAgLCBzdG9yZSAgPSB7fTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcclxuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cclxuICAgIGdsb2JhbC5TeW1ib2wgJiYgZ2xvYmFsLlN5bWJvbFtuYW1lXSB8fCByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnU3ltYm9sLicgKyBuYW1lKSk7XHJcbn07IiwidmFyICQgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgY2VsICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5kb20tY3JlYXRlJylcclxuICAsIGNvZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuY29mJylcclxuICAsICRkZWYgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIGludm9rZSAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaW52b2tlJylcclxuICAsIGFycmF5TWV0aG9kICAgICAgPSByZXF1aXJlKCcuLyQuYXJyYXktbWV0aG9kcycpXHJcbiAgLCBJRV9QUk9UTyAgICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpLnNhZmUoJ19fcHJvdG9fXycpXHJcbiAgLCBhc3NlcnQgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpXHJcbiAgLCBhc3NlcnRPYmplY3QgICAgID0gYXNzZXJ0Lm9ialxyXG4gICwgT2JqZWN0UHJvdG8gICAgICA9IE9iamVjdC5wcm90b3R5cGVcclxuICAsIGh0bWwgICAgICAgICAgICAgPSAkLmh0bWxcclxuICAsIEEgICAgICAgICAgICAgICAgPSBbXVxyXG4gICwgX3NsaWNlICAgICAgICAgICA9IEEuc2xpY2VcclxuICAsIF9qb2luICAgICAgICAgICAgPSBBLmpvaW5cclxuICAsIGNsYXNzb2YgICAgICAgICAgPSBjb2YuY2xhc3NvZlxyXG4gICwgaGFzICAgICAgICAgICAgICA9ICQuaGFzXHJcbiAgLCBkZWZpbmVQcm9wZXJ0eSAgID0gJC5zZXREZXNjXHJcbiAgLCBnZXRPd25EZXNjcmlwdG9yID0gJC5nZXREZXNjXHJcbiAgLCBkZWZpbmVQcm9wZXJ0aWVzID0gJC5zZXREZXNjc1xyXG4gICwgaXNGdW5jdGlvbiAgICAgICA9ICQuaXNGdW5jdGlvblxyXG4gICwgdG9PYmplY3QgICAgICAgICA9ICQudG9PYmplY3RcclxuICAsIHRvTGVuZ3RoICAgICAgICAgPSAkLnRvTGVuZ3RoXHJcbiAgLCB0b0luZGV4ICAgICAgICAgID0gJC50b0luZGV4XHJcbiAgLCBJRThfRE9NX0RFRklORSAgID0gZmFsc2VcclxuICAsICRpbmRleE9mICAgICAgICAgPSByZXF1aXJlKCcuLyQuYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcclxuICAsICRmb3JFYWNoICAgICAgICAgPSBhcnJheU1ldGhvZCgwKVxyXG4gICwgJG1hcCAgICAgICAgICAgICA9IGFycmF5TWV0aG9kKDEpXHJcbiAgLCAkZmlsdGVyICAgICAgICAgID0gYXJyYXlNZXRob2QoMilcclxuICAsICRzb21lICAgICAgICAgICAgPSBhcnJheU1ldGhvZCgzKVxyXG4gICwgJGV2ZXJ5ICAgICAgICAgICA9IGFycmF5TWV0aG9kKDQpO1xyXG5cclxuaWYoISQuREVTQyl7XHJcbiAgdHJ5IHtcclxuICAgIElFOF9ET01fREVGSU5FID0gZGVmaW5lUHJvcGVydHkoY2VsKCdkaXYnKSwgJ3gnLFxyXG4gICAgICB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gODsgfX1cclxuICAgICkueCA9PSA4O1xyXG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cclxuICAkLnNldERlc2MgPSBmdW5jdGlvbihPLCBQLCBBdHRyaWJ1dGVzKXtcclxuICAgIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XHJcbiAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcclxuICAgIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cclxuICAgIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xyXG4gICAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKWFzc2VydE9iamVjdChPKVtQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XHJcbiAgICByZXR1cm4gTztcclxuICB9O1xyXG4gICQuZ2V0RGVzYyA9IGZ1bmN0aW9uKE8sIFApe1xyXG4gICAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcclxuICAgICAgcmV0dXJuIGdldE93bkRlc2NyaXB0b3IoTywgUCk7XHJcbiAgICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XHJcbiAgICBpZihoYXMoTywgUCkpcmV0dXJuICQuZGVzYyghT2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChPLCBQKSwgT1tQXSk7XHJcbiAgfTtcclxuICAkLnNldERlc2NzID0gZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uKE8sIFByb3BlcnRpZXMpe1xyXG4gICAgYXNzZXJ0T2JqZWN0KE8pO1xyXG4gICAgdmFyIGtleXMgICA9ICQuZ2V0S2V5cyhQcm9wZXJ0aWVzKVxyXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXHJcbiAgICAgICwgaSA9IDBcclxuICAgICAgLCBQO1xyXG4gICAgd2hpbGUobGVuZ3RoID4gaSkkLnNldERlc2MoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XHJcbiAgICByZXR1cm4gTztcclxuICB9O1xyXG59XHJcbiRkZWYoJGRlZi5TICsgJGRlZi5GICogISQuREVTQywgJ09iamVjdCcsIHtcclxuICAvLyAxOS4xLjIuNiAvIDE1LjIuMy4zIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcclxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICQuZ2V0RGVzYyxcclxuICAvLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxyXG4gIGRlZmluZVByb3BlcnR5OiAkLnNldERlc2MsXHJcbiAgLy8gMTkuMS4yLjMgLyAxNS4yLjMuNyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxyXG4gIGRlZmluZVByb3BlcnRpZXM6IGRlZmluZVByb3BlcnRpZXNcclxufSk7XHJcblxyXG4gIC8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcclxudmFyIGtleXMxID0gKCdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLCcgK1xyXG4gICAgICAgICAgICAndG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZicpLnNwbGl0KCcsJylcclxuICAvLyBBZGRpdGlvbmFsIGtleXMgZm9yIGdldE93blByb3BlcnR5TmFtZXNcclxuICAsIGtleXMyID0ga2V5czEuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJylcclxuICAsIGtleXNMZW4xID0ga2V5czEubGVuZ3RoO1xyXG5cclxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcclxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xyXG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXHJcbiAgdmFyIGlmcmFtZSA9IGNlbCgnaWZyYW1lJylcclxuICAgICwgaSAgICAgID0ga2V5c0xlbjFcclxuICAgICwgZ3QgICAgID0gJz4nXHJcbiAgICAsIGlmcmFtZURvY3VtZW50O1xyXG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXHJcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcclxuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XHJcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcclxuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XHJcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoJzxzY3JpcHQ+ZG9jdW1lbnQuRj1PYmplY3Q8L3NjcmlwdCcgKyBndCk7XHJcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcclxuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcclxuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3QucHJvdG90eXBlW2tleXMxW2ldXTtcclxuICByZXR1cm4gY3JlYXRlRGljdCgpO1xyXG59O1xyXG5mdW5jdGlvbiBjcmVhdGVHZXRLZXlzKG5hbWVzLCBsZW5ndGgpe1xyXG4gIHJldHVybiBmdW5jdGlvbihvYmplY3Qpe1xyXG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KG9iamVjdClcclxuICAgICAgLCBpICAgICAgPSAwXHJcbiAgICAgICwgcmVzdWx0ID0gW11cclxuICAgICAgLCBrZXk7XHJcbiAgICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XHJcbiAgICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXHJcbiAgICB3aGlsZShsZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XHJcbiAgICAgIH4kaW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxufVxyXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShpdCl7IHJldHVybiAhJC5pc09iamVjdChpdCk7IH1cclxuZnVuY3Rpb24gRW1wdHkoKXt9XHJcbiRkZWYoJGRlZi5TLCAnT2JqZWN0Jywge1xyXG4gIC8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXHJcbiAgZ2V0UHJvdG90eXBlT2Y6ICQuZ2V0UHJvdG8gPSAkLmdldFByb3RvIHx8IGZ1bmN0aW9uKE8pe1xyXG4gICAgTyA9IE9iamVjdChhc3NlcnQuZGVmKE8pKTtcclxuICAgIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xyXG4gICAgaWYoaXNGdW5jdGlvbihPLmNvbnN0cnVjdG9yKSAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XHJcbiAgICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcclxuICAgIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XHJcbiAgfSxcclxuICAvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXHJcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJC5nZXROYW1lcyA9ICQuZ2V0TmFtZXMgfHwgY3JlYXRlR2V0S2V5cyhrZXlzMiwga2V5czIubGVuZ3RoLCB0cnVlKSxcclxuICAvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcclxuICBjcmVhdGU6ICQuY3JlYXRlID0gJC5jcmVhdGUgfHwgZnVuY3Rpb24oTywgLyo/Ki9Qcm9wZXJ0aWVzKXtcclxuICAgIHZhciByZXN1bHQ7XHJcbiAgICBpZihPICE9PSBudWxsKXtcclxuICAgICAgRW1wdHkucHJvdG90eXBlID0gYXNzZXJ0T2JqZWN0KE8pO1xyXG4gICAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcclxuICAgICAgRW1wdHkucHJvdG90eXBlID0gbnVsbDtcclxuICAgICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBzaGltXHJcbiAgICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xyXG4gICAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcclxuICAgIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XHJcbiAgfSxcclxuICAvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcclxuICBrZXlzOiAkLmdldEtleXMgPSAkLmdldEtleXMgfHwgY3JlYXRlR2V0S2V5cyhrZXlzMSwga2V5c0xlbjEsIGZhbHNlKSxcclxuICAvLyAxOS4xLjIuMTcgLyAxNS4yLjMuOCBPYmplY3Quc2VhbChPKVxyXG4gIHNlYWw6ICQuaXQsIC8vIDwtIGNhcFxyXG4gIC8vIDE5LjEuMi41IC8gMTUuMi4zLjkgT2JqZWN0LmZyZWV6ZShPKVxyXG4gIGZyZWV6ZTogJC5pdCwgLy8gPC0gY2FwXHJcbiAgLy8gMTkuMS4yLjE1IC8gMTUuMi4zLjEwIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhPKVxyXG4gIHByZXZlbnRFeHRlbnNpb25zOiAkLml0LCAvLyA8LSBjYXBcclxuICAvLyAxOS4xLjIuMTMgLyAxNS4yLjMuMTEgT2JqZWN0LmlzU2VhbGVkKE8pXHJcbiAgaXNTZWFsZWQ6IGlzUHJpbWl0aXZlLCAvLyA8LSBjYXBcclxuICAvLyAxOS4xLjIuMTIgLyAxNS4yLjMuMTIgT2JqZWN0LmlzRnJvemVuKE8pXHJcbiAgaXNGcm96ZW46IGlzUHJpbWl0aXZlLCAvLyA8LSBjYXBcclxuICAvLyAxOS4xLjIuMTEgLyAxNS4yLjMuMTMgT2JqZWN0LmlzRXh0ZW5zaWJsZShPKVxyXG4gIGlzRXh0ZW5zaWJsZTogJC5pc09iamVjdCAvLyA8LSBjYXBcclxufSk7XHJcblxyXG4vLyAxOS4yLjMuMiAvIDE1LjMuNC41IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKHRoaXNBcmcsIGFyZ3MuLi4pXHJcbiRkZWYoJGRlZi5QLCAnRnVuY3Rpb24nLCB7XHJcbiAgYmluZDogZnVuY3Rpb24odGhhdCAvKiwgYXJncy4uLiAqLyl7XHJcbiAgICB2YXIgZm4gICAgICAgPSBhc3NlcnQuZm4odGhpcylcclxuICAgICAgLCBwYXJ0QXJncyA9IF9zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcbiAgICBmdW5jdGlvbiBib3VuZCgvKiBhcmdzLi4uICovKXtcclxuICAgICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSk7XHJcbiAgICAgIHJldHVybiBpbnZva2UoZm4sIGFyZ3MsIHRoaXMgaW5zdGFuY2VvZiBib3VuZCA/ICQuY3JlYXRlKGZuLnByb3RvdHlwZSkgOiB0aGF0KTtcclxuICAgIH1cclxuICAgIGlmKGZuLnByb3RvdHlwZSlib3VuZC5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XHJcbiAgICByZXR1cm4gYm91bmQ7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIEZpeCBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZyBhbmQgRE9NIG9iamVjdHNcclxuaWYoISgwIGluIE9iamVjdCgneicpICYmICd6J1swXSA9PSAneicpKXtcclxuICAkLkVTNU9iamVjdCA9IGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcclxuICB9O1xyXG59XHJcblxyXG52YXIgYnVnZ3lTbGljZSA9IHRydWU7XHJcbnRyeSB7XHJcbiAgaWYoaHRtbClfc2xpY2UuY2FsbChodG1sKTtcclxuICBidWdneVNsaWNlID0gZmFsc2U7XHJcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cclxuXHJcbiRkZWYoJGRlZi5QICsgJGRlZi5GICogYnVnZ3lTbGljZSwgJ0FycmF5Jywge1xyXG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShiZWdpbiwgZW5kKXtcclxuICAgIHZhciBsZW4gICA9IHRvTGVuZ3RoKHRoaXMubGVuZ3RoKVxyXG4gICAgICAsIGtsYXNzID0gY29mKHRoaXMpO1xyXG4gICAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiBlbmQ7XHJcbiAgICBpZihrbGFzcyA9PSAnQXJyYXknKXJldHVybiBfc2xpY2UuY2FsbCh0aGlzLCBiZWdpbiwgZW5kKTtcclxuICAgIHZhciBzdGFydCAgPSB0b0luZGV4KGJlZ2luLCBsZW4pXHJcbiAgICAgICwgdXBUbyAgID0gdG9JbmRleChlbmQsIGxlbilcclxuICAgICAgLCBzaXplICAgPSB0b0xlbmd0aCh1cFRvIC0gc3RhcnQpXHJcbiAgICAgICwgY2xvbmVkID0gQXJyYXkoc2l6ZSlcclxuICAgICAgLCBpICAgICAgPSAwO1xyXG4gICAgZm9yKDsgaSA8IHNpemU7IGkrKyljbG9uZWRbaV0gPSBrbGFzcyA9PSAnU3RyaW5nJ1xyXG4gICAgICA/IHRoaXMuY2hhckF0KHN0YXJ0ICsgaSlcclxuICAgICAgOiB0aGlzW3N0YXJ0ICsgaV07XHJcbiAgICByZXR1cm4gY2xvbmVkO1xyXG4gIH1cclxufSk7XHJcblxyXG4kZGVmKCRkZWYuUCArICRkZWYuRiAqICgkLkVTNU9iamVjdCAhPSBPYmplY3QpLCAnQXJyYXknLCB7XHJcbiAgam9pbjogZnVuY3Rpb24gam9pbigpe1xyXG4gICAgcmV0dXJuIF9qb2luLmFwcGx5KCQuRVM1T2JqZWN0KHRoaXMpLCBhcmd1bWVudHMpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyAyMi4xLjIuMiAvIDE1LjQuMy4yIEFycmF5LmlzQXJyYXkoYXJnKVxyXG4kZGVmKCRkZWYuUywgJ0FycmF5Jywge1xyXG4gIGlzQXJyYXk6IGZ1bmN0aW9uKGFyZyl7XHJcbiAgICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5JztcclxuICB9XHJcbn0pO1xyXG5mdW5jdGlvbiBjcmVhdGVBcnJheVJlZHVjZShpc1JpZ2h0KXtcclxuICByZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2tmbiwgbWVtbyl7XHJcbiAgICBhc3NlcnQuZm4oY2FsbGJhY2tmbik7XHJcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QodGhpcylcclxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcclxuICAgICAgLCBpbmRleCAgPSBpc1JpZ2h0ID8gbGVuZ3RoIC0gMSA6IDBcclxuICAgICAgLCBpICAgICAgPSBpc1JpZ2h0ID8gLTEgOiAxO1xyXG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA8IDIpZm9yKDs7KXtcclxuICAgICAgaWYoaW5kZXggaW4gTyl7XHJcbiAgICAgICAgbWVtbyA9IE9baW5kZXhdO1xyXG4gICAgICAgIGluZGV4ICs9IGk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgaW5kZXggKz0gaTtcclxuICAgICAgYXNzZXJ0KGlzUmlnaHQgPyBpbmRleCA+PSAwIDogbGVuZ3RoID4gaW5kZXgsICdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBmb3IoO2lzUmlnaHQgPyBpbmRleCA+PSAwIDogbGVuZ3RoID4gaW5kZXg7IGluZGV4ICs9IGkpaWYoaW5kZXggaW4gTyl7XHJcbiAgICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIE9baW5kZXhdLCBpbmRleCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWVtbztcclxuICB9O1xyXG59XHJcbiRkZWYoJGRlZi5QLCAnQXJyYXknLCB7XHJcbiAgLy8gMjIuMS4zLjEwIC8gMTUuNC40LjE4IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXHJcbiAgZm9yRWFjaDogJC5lYWNoID0gJC5lYWNoIHx8IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcclxuICAgIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xyXG4gIH0sXHJcbiAgLy8gMjIuMS4zLjE1IC8gMTUuNC40LjE5IEFycmF5LnByb3RvdHlwZS5tYXAoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcclxuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xyXG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcclxuICB9LFxyXG4gIC8vIDIyLjEuMy43IC8gMTUuNC40LjIwIEFycmF5LnByb3RvdHlwZS5maWx0ZXIoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcclxuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xyXG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcclxuICB9LFxyXG4gIC8vIDIyLjEuMy4yMyAvIDE1LjQuNC4xNyBBcnJheS5wcm90b3R5cGUuc29tZShjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxyXG4gIHNvbWU6IGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcclxuICAgIHJldHVybiAkc29tZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xyXG4gIH0sXHJcbiAgLy8gMjIuMS4zLjUgLyAxNS40LjQuMTYgQXJyYXkucHJvdG90eXBlLmV2ZXJ5KGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXHJcbiAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XHJcbiAgICByZXR1cm4gJGV2ZXJ5KHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XHJcbiAgfSxcclxuICAvLyAyMi4xLjMuMTggLyAxNS40LjQuMjEgQXJyYXkucHJvdG90eXBlLnJlZHVjZShjYWxsYmFja2ZuIFssIGluaXRpYWxWYWx1ZV0pXHJcbiAgcmVkdWNlOiBjcmVhdGVBcnJheVJlZHVjZShmYWxzZSksXHJcbiAgLy8gMjIuMS4zLjE5IC8gMTUuNC40LjIyIEFycmF5LnByb3RvdHlwZS5yZWR1Y2VSaWdodChjYWxsYmFja2ZuIFssIGluaXRpYWxWYWx1ZV0pXHJcbiAgcmVkdWNlUmlnaHQ6IGNyZWF0ZUFycmF5UmVkdWNlKHRydWUpLFxyXG4gIC8vIDIyLjEuMy4xMSAvIDE1LjQuNC4xNCBBcnJheS5wcm90b3R5cGUuaW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXHJcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihlbCAvKiwgZnJvbUluZGV4ID0gMCAqLyl7XHJcbiAgICByZXR1cm4gJGluZGV4T2YodGhpcywgZWwsIGFyZ3VtZW50c1sxXSk7XHJcbiAgfSxcclxuICAvLyAyMi4xLjMuMTQgLyAxNS40LjQuMTUgQXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mKHNlYXJjaEVsZW1lbnQgWywgZnJvbUluZGV4XSlcclxuICBsYXN0SW5kZXhPZjogZnVuY3Rpb24oZWwsIGZyb21JbmRleCAvKiA9IEBbKi0xXSAqLyl7XHJcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QodGhpcylcclxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcclxuICAgICAgLCBpbmRleCAgPSBsZW5ndGggLSAxO1xyXG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpaW5kZXggPSBNYXRoLm1pbihpbmRleCwgJC50b0ludGVnZXIoZnJvbUluZGV4KSk7XHJcbiAgICBpZihpbmRleCA8IDApaW5kZXggPSB0b0xlbmd0aChsZW5ndGggKyBpbmRleCk7XHJcbiAgICBmb3IoO2luZGV4ID49IDA7IGluZGV4LS0paWYoaW5kZXggaW4gTylpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIGluZGV4O1xyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyAyMS4xLjMuMjUgLyAxNS41LjQuMjAgU3RyaW5nLnByb3RvdHlwZS50cmltKClcclxuJGRlZigkZGVmLlAsICdTdHJpbmcnLCB7dHJpbTogcmVxdWlyZSgnLi8kLnJlcGxhY2VyJykoL15cXHMqKFtcXHNcXFNdKlxcUyk/XFxzKiQvLCAnJDEnKX0pO1xyXG5cclxuLy8gMjAuMy4zLjEgLyAxNS45LjQuNCBEYXRlLm5vdygpXHJcbiRkZWYoJGRlZi5TLCAnRGF0ZScsIHtub3c6IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuICtuZXcgRGF0ZTtcclxufX0pO1xyXG5cclxuZnVuY3Rpb24gbHoobnVtKXtcclxuICByZXR1cm4gbnVtID4gOSA/IG51bSA6ICcwJyArIG51bTtcclxufVxyXG5cclxuLy8gMjAuMy40LjM2IC8gMTUuOS41LjQzIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKClcclxuLy8gUGhhbnRvbUpTIGFuZCBvbGQgd2Via2l0IGhhZCBhIGJyb2tlbiBEYXRlIGltcGxlbWVudGF0aW9uLlxyXG52YXIgZGF0ZSAgICAgICA9IG5ldyBEYXRlKC01ZTEzIC0gMSlcclxuICAsIGJyb2tlbkRhdGUgPSAhKGRhdGUudG9JU09TdHJpbmcgJiYgZGF0ZS50b0lTT1N0cmluZygpID09ICcwMzg1LTA3LTI1VDA3OjA2OjM5Ljk5OVonXHJcbiAgICAgICYmIHJlcXVpcmUoJy4vJC50aHJvd3MnKShmdW5jdGlvbigpeyBuZXcgRGF0ZShOYU4pLnRvSVNPU3RyaW5nKCk7IH0pKTtcclxuJGRlZigkZGVmLlAgKyAkZGVmLkYgKiBicm9rZW5EYXRlLCAnRGF0ZScsIHt0b0lTT1N0cmluZzogZnVuY3Rpb24oKXtcclxuICBpZighaXNGaW5pdGUodGhpcykpdGhyb3cgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XHJcbiAgdmFyIGQgPSB0aGlzXHJcbiAgICAsIHkgPSBkLmdldFVUQ0Z1bGxZZWFyKClcclxuICAgICwgbSA9IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKClcclxuICAgICwgcyA9IHkgPCAwID8gJy0nIDogeSA+IDk5OTkgPyAnKycgOiAnJztcclxuICByZXR1cm4gcyArICgnMDAwMDAnICsgTWF0aC5hYnMoeSkpLnNsaWNlKHMgPyAtNiA6IC00KSArXHJcbiAgICAnLScgKyBseihkLmdldFVUQ01vbnRoKCkgKyAxKSArICctJyArIGx6KGQuZ2V0VVRDRGF0ZSgpKSArXHJcbiAgICAnVCcgKyBseihkLmdldFVUQ0hvdXJzKCkpICsgJzonICsgbHooZC5nZXRVVENNaW51dGVzKCkpICtcclxuICAgICc6JyArIGx6KGQuZ2V0VVRDU2Vjb25kcygpKSArICcuJyArIChtID4gOTkgPyBtIDogJzAnICsgbHoobSkpICsgJ1onO1xyXG59fSk7XHJcblxyXG5pZihjbGFzc29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ09iamVjdCcpY29mLmNsYXNzb2YgPSBmdW5jdGlvbihpdCl7XHJcbiAgdmFyIHRhZyA9IGNsYXNzb2YoaXQpO1xyXG4gIHJldHVybiB0YWcgPT0gJ09iamVjdCcgJiYgaXNGdW5jdGlvbihpdC5jYWxsZWUpID8gJ0FyZ3VtZW50cycgOiB0YWc7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCAkZGVmICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCB0b0luZGV4ID0gJC50b0luZGV4O1xyXG4kZGVmKCRkZWYuUCwgJ0FycmF5Jywge1xyXG4gIC8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxyXG4gIGNvcHlXaXRoaW46IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0LyogPSAwICovLCBzdGFydCAvKiA9IDAsIGVuZCA9IEBsZW5ndGggKi8pe1xyXG4gICAgdmFyIE8gICAgID0gT2JqZWN0KCQuYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgLCBsZW4gICA9ICQudG9MZW5ndGgoTy5sZW5ndGgpXHJcbiAgICAgICwgdG8gICAgPSB0b0luZGV4KHRhcmdldCwgbGVuKVxyXG4gICAgICAsIGZyb20gID0gdG9JbmRleChzdGFydCwgbGVuKVxyXG4gICAgICAsIGVuZCAgID0gYXJndW1lbnRzWzJdXHJcbiAgICAgICwgZmluICAgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IHRvSW5kZXgoZW5kLCBsZW4pXHJcbiAgICAgICwgY291bnQgPSBNYXRoLm1pbihmaW4gLSBmcm9tLCBsZW4gLSB0bylcclxuICAgICAgLCBpbmMgICA9IDE7XHJcbiAgICBpZihmcm9tIDwgdG8gJiYgdG8gPCBmcm9tICsgY291bnQpe1xyXG4gICAgICBpbmMgID0gLTE7XHJcbiAgICAgIGZyb20gPSBmcm9tICsgY291bnQgLSAxO1xyXG4gICAgICB0byAgID0gdG8gICArIGNvdW50IC0gMTtcclxuICAgIH1cclxuICAgIHdoaWxlKGNvdW50LS0gPiAwKXtcclxuICAgICAgaWYoZnJvbSBpbiBPKU9bdG9dID0gT1tmcm9tXTtcclxuICAgICAgZWxzZSBkZWxldGUgT1t0b107XHJcbiAgICAgIHRvICAgKz0gaW5jO1xyXG4gICAgICBmcm9tICs9IGluYztcclxuICAgIH0gcmV0dXJuIE87XHJcbiAgfVxyXG59KTtcclxucmVxdWlyZSgnLi8kLnVuc2NvcGUnKSgnY29weVdpdGhpbicpOyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgJGRlZiAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgdG9JbmRleCA9ICQudG9JbmRleDtcclxuJGRlZigkZGVmLlAsICdBcnJheScsIHtcclxuICAvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcclxuICBmaWxsOiBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qLCBzdGFydCA9IDAsIGVuZCA9IEBsZW5ndGggKi8pe1xyXG4gICAgdmFyIE8gICAgICA9IE9iamVjdCgkLmFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICwgbGVuZ3RoID0gJC50b0xlbmd0aChPLmxlbmd0aClcclxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGFyZ3VtZW50c1sxXSwgbGVuZ3RoKVxyXG4gICAgICAsIGVuZCAgICA9IGFyZ3VtZW50c1syXVxyXG4gICAgICAsIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9JbmRleChlbmQsIGxlbmd0aCk7XHJcbiAgICB3aGlsZShlbmRQb3MgPiBpbmRleClPW2luZGV4KytdID0gdmFsdWU7XHJcbiAgICByZXR1cm4gTztcclxuICB9XHJcbn0pO1xyXG5yZXF1aXJlKCcuLyQudW5zY29wZScpKCdmaWxsJyk7IiwiJ3VzZSBzdHJpY3QnO1xyXG4vLyAyMi4xLjMuOSBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcclxudmFyIEtFWSAgICA9ICdmaW5kSW5kZXgnXHJcbiAgLCAkZGVmICAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIGZvcmNlZCA9IHRydWVcclxuICAsICRmaW5kICA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJykoNik7XHJcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXHJcbmlmKEtFWSBpbiBbXSlBcnJheSgxKVtLRVldKGZ1bmN0aW9uKCl7IGZvcmNlZCA9IGZhbHNlOyB9KTtcclxuJGRlZigkZGVmLlAgKyAkZGVmLkYgKiBmb3JjZWQsICdBcnJheScsIHtcclxuICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xyXG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XHJcbiAgfVxyXG59KTtcclxucmVxdWlyZSgnLi8kLnVuc2NvcGUnKShLRVkpOyIsIid1c2Ugc3RyaWN0JztcclxuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG52YXIgS0VZICAgID0gJ2ZpbmQnXHJcbiAgLCAkZGVmICAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIGZvcmNlZCA9IHRydWVcclxuICAsICRmaW5kICA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJykoNSk7XHJcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXHJcbmlmKEtFWSBpbiBbXSlBcnJheSgxKVtLRVldKGZ1bmN0aW9uKCl7IGZvcmNlZCA9IGZhbHNlOyB9KTtcclxuJGRlZigkZGVmLlAgKyAkZGVmLkYgKiBmb3JjZWQsICdBcnJheScsIHtcclxuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XHJcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcclxuICB9XHJcbn0pO1xyXG5yZXF1aXJlKCcuLyQudW5zY29wZScpKEtFWSk7IiwidmFyICQgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGN0eCAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXHJcbiAgLCAkZGVmICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgJGl0ZXIgPSByZXF1aXJlKCcuLyQuaXRlcicpXHJcbiAgLCBjYWxsICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNhbGwnKTtcclxuJGRlZigkZGVmLlMgKyAkZGVmLkYgKiAhcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XHJcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xyXG4gICAgdmFyIE8gICAgICAgPSBPYmplY3QoJC5hc3NlcnREZWZpbmVkKGFycmF5TGlrZSkpXHJcbiAgICAgICwgbWFwZm4gICA9IGFyZ3VtZW50c1sxXVxyXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICwgZiAgICAgICA9IG1hcHBpbmcgPyBjdHgobWFwZm4sIGFyZ3VtZW50c1syXSwgMikgOiB1bmRlZmluZWRcclxuICAgICAgLCBpbmRleCAgID0gMFxyXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcclxuICAgIGlmKCRpdGVyLmlzKE8pKXtcclxuICAgICAgaXRlcmF0b3IgPSAkaXRlci5nZXQoTyk7XHJcbiAgICAgIC8vIHN0cmFuZ2UgSUUgcXVpcmtzIG1vZGUgYnVnIC0+IHVzZSB0eXBlb2YgaW5zdGVhZCBvZiBpc0Z1bmN0aW9uXHJcbiAgICAgIHJlc3VsdCAgID0gbmV3ICh0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5KTtcclxuICAgICAgZm9yKDsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcclxuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIGYsIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gc3RyYW5nZSBJRSBxdWlya3MgbW9kZSBidWcgLT4gdXNlIHR5cGVvZiBpbnN0ZWFkIG9mIGlzRnVuY3Rpb25cclxuICAgICAgcmVzdWx0ID0gbmV3ICh0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5KShsZW5ndGggPSAkLnRvTGVuZ3RoKE8ubGVuZ3RoKSk7XHJcbiAgICAgIGZvcig7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcclxuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IGYoT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufSk7IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgc2V0VW5zY29wZSA9IHJlcXVpcmUoJy4vJC51bnNjb3BlJylcclxuICAsIElURVIgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnaXRlcicpXHJcbiAgLCAkaXRlciAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXInKVxyXG4gICwgc3RlcCAgICAgICA9ICRpdGVyLnN0ZXBcclxuICAsIEl0ZXJhdG9ycyAgPSAkaXRlci5JdGVyYXRvcnM7XHJcblxyXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXHJcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXHJcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcclxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXHJcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XHJcbiAgJC5zZXQodGhpcywgSVRFUiwge286ICQudG9PYmplY3QoaXRlcmF0ZWQpLCBpOiAwLCBrOiBraW5kfSk7XHJcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxyXG59LCBmdW5jdGlvbigpe1xyXG4gIHZhciBpdGVyICA9IHRoaXNbSVRFUl1cclxuICAgICwgTyAgICAgPSBpdGVyLm9cclxuICAgICwga2luZCAgPSBpdGVyLmtcclxuICAgICwgaW5kZXggPSBpdGVyLmkrKztcclxuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XHJcbiAgICBpdGVyLm8gPSB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gc3RlcCgxKTtcclxuICB9XHJcbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XHJcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XHJcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xyXG59LCAndmFsdWVzJyk7XHJcblxyXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXHJcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XHJcblxyXG5zZXRVbnNjb3BlKCdrZXlzJyk7XHJcbnNldFVuc2NvcGUoJ3ZhbHVlcycpO1xyXG5zZXRVbnNjb3BlKCdlbnRyaWVzJyk7IiwidmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcbiRkZWYoJGRlZi5TLCAnQXJyYXknLCB7XHJcbiAgLy8gMjIuMS4yLjMgQXJyYXkub2YoIC4uLml0ZW1zKVxyXG4gIG9mOiBmdW5jdGlvbiBvZigvKiAuLi5hcmdzICovKXtcclxuICAgIHZhciBpbmRleCAgPSAwXHJcbiAgICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAvLyBzdHJhbmdlIElFIHF1aXJrcyBtb2RlIGJ1ZyAtPiB1c2UgdHlwZW9mIGluc3RlYWQgb2YgaXNGdW5jdGlvblxyXG4gICAgICAsIHJlc3VsdCA9IG5ldyAodHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheSkobGVuZ3RoKTtcclxuICAgIHdoaWxlKGxlbmd0aCA+IGluZGV4KXJlc3VsdFtpbmRleF0gPSBhcmd1bWVudHNbaW5kZXgrK107XHJcbiAgICByZXN1bHQubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn0pOyIsInJlcXVpcmUoJy4vJC5zcGVjaWVzJykoQXJyYXkpOyIsInZhciAkICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIEhBU19JTlNUQU5DRSAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2hhc0luc3RhbmNlJylcclxuICAsIEZ1bmN0aW9uUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbi8vIDE5LjIuMy42IEZ1bmN0aW9uLnByb3RvdHlwZVtAQGhhc0luc3RhbmNlXShWKVxyXG5pZighKEhBU19JTlNUQU5DRSBpbiBGdW5jdGlvblByb3RvKSkkLnNldERlc2MoRnVuY3Rpb25Qcm90bywgSEFTX0lOU1RBTkNFLCB7dmFsdWU6IGZ1bmN0aW9uKE8pe1xyXG4gIGlmKCEkLmlzRnVuY3Rpb24odGhpcykgfHwgISQuaXNPYmplY3QoTykpcmV0dXJuIGZhbHNlO1xyXG4gIGlmKCEkLmlzT2JqZWN0KHRoaXMucHJvdG90eXBlKSlyZXR1cm4gTyBpbnN0YW5jZW9mIHRoaXM7XHJcbiAgLy8gZm9yIGVudmlyb25tZW50IHcvbyBuYXRpdmUgYEBAaGFzSW5zdGFuY2VgIGxvZ2ljIGVub3VnaCBgaW5zdGFuY2VvZmAsIGJ1dCBhZGQgdGhpczpcclxuICB3aGlsZShPID0gJC5nZXRQcm90byhPKSlpZih0aGlzLnByb3RvdHlwZSA9PT0gTylyZXR1cm4gdHJ1ZTtcclxuICByZXR1cm4gZmFsc2U7XHJcbn19KTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIE5BTUUgPSAnbmFtZSdcclxuICAsIHNldERlc2MgPSAkLnNldERlc2NcclxuICAsIEZ1bmN0aW9uUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbi8vIDE5LjIuNC4yIG5hbWVcclxuTkFNRSBpbiBGdW5jdGlvblByb3RvIHx8ICQuRlcgJiYgJC5ERVNDICYmIHNldERlc2MoRnVuY3Rpb25Qcm90bywgTkFNRSwge1xyXG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICBnZXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgbWF0Y2ggPSBTdHJpbmcodGhpcykubWF0Y2goL15cXHMqZnVuY3Rpb24gKFteIChdKikvKVxyXG4gICAgICAsIG5hbWUgID0gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnO1xyXG4gICAgJC5oYXModGhpcywgTkFNRSkgfHwgc2V0RGVzYyh0aGlzLCBOQU1FLCAkLmRlc2MoNSwgbmFtZSkpO1xyXG4gICAgcmV0dXJuIG5hbWU7XHJcbiAgfSxcclxuICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICQuaGFzKHRoaXMsIE5BTUUpIHx8IHNldERlc2ModGhpcywgTkFNRSwgJC5kZXNjKDAsIHZhbHVlKSk7XHJcbiAgfVxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi1zdHJvbmcnKTtcclxuXHJcbi8vIDIzLjEgTWFwIE9iamVjdHNcclxucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnTWFwJywge1xyXG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcclxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xyXG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XHJcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcclxuICB9LFxyXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXHJcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XHJcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG59LCBzdHJvbmcsIHRydWUpOyIsInZhciBJbmZpbml0eSA9IDEgLyAwXHJcbiAgLCAkZGVmICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgRSAgICAgPSBNYXRoLkVcclxuICAsIHBvdyAgID0gTWF0aC5wb3dcclxuICAsIGFicyAgID0gTWF0aC5hYnNcclxuICAsIGV4cCAgID0gTWF0aC5leHBcclxuICAsIGxvZyAgID0gTWF0aC5sb2dcclxuICAsIHNxcnQgID0gTWF0aC5zcXJ0XHJcbiAgLCBjZWlsICA9IE1hdGguY2VpbFxyXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yXHJcbiAgLCBFUFNJTE9OICAgPSBwb3coMiwgLTUyKVxyXG4gICwgRVBTSUxPTjMyID0gcG93KDIsIC0yMylcclxuICAsIE1BWDMyICAgICA9IHBvdygyLCAxMjcpICogKDIgLSBFUFNJTE9OMzIpXHJcbiAgLCBNSU4zMiAgICAgPSBwb3coMiwgLTEyNik7XHJcbmZ1bmN0aW9uIHJvdW5kVGllc1RvRXZlbihuKXtcclxuICByZXR1cm4gbiArIDEgLyBFUFNJTE9OIC0gMSAvIEVQU0lMT047XHJcbn1cclxuXHJcbi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcclxuZnVuY3Rpb24gc2lnbih4KXtcclxuICByZXR1cm4gKHggPSAreCkgPT0gMCB8fCB4ICE9IHggPyB4IDogeCA8IDAgPyAtMSA6IDE7XHJcbn1cclxuLy8gMjAuMi4yLjUgTWF0aC5hc2luaCh4KVxyXG5mdW5jdGlvbiBhc2luaCh4KXtcclxuICByZXR1cm4gIWlzRmluaXRlKHggPSAreCkgfHwgeCA9PSAwID8geCA6IHggPCAwID8gLWFzaW5oKC14KSA6IGxvZyh4ICsgc3FydCh4ICogeCArIDEpKTtcclxufVxyXG4vLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxyXG5mdW5jdGlvbiBleHBtMSh4KXtcclxuICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiB4ID4gLTFlLTYgJiYgeCA8IDFlLTYgPyB4ICsgeCAqIHggLyAyIDogZXhwKHgpIC0gMTtcclxufVxyXG5cclxuJGRlZigkZGVmLlMsICdNYXRoJywge1xyXG4gIC8vIDIwLjIuMi4zIE1hdGguYWNvc2goeClcclxuICBhY29zaDogZnVuY3Rpb24gYWNvc2goeCl7XHJcbiAgICByZXR1cm4gKHggPSAreCkgPCAxID8gTmFOIDogaXNGaW5pdGUoeCkgPyBsb2coeCAvIEUgKyBzcXJ0KHggKyAxKSAqIHNxcnQoeCAtIDEpIC8gRSkgKyAxIDogeDtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcclxuICBhc2luaDogYXNpbmgsXHJcbiAgLy8gMjAuMi4yLjcgTWF0aC5hdGFuaCh4KVxyXG4gIGF0YW5oOiBmdW5jdGlvbiBhdGFuaCh4KXtcclxuICAgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IGxvZygoMSArIHgpIC8gKDEgLSB4KSkgLyAyO1xyXG4gIH0sXHJcbiAgLy8gMjAuMi4yLjkgTWF0aC5jYnJ0KHgpXHJcbiAgY2JydDogZnVuY3Rpb24gY2JydCh4KXtcclxuICAgIHJldHVybiBzaWduKHggPSAreCkgKiBwb3coYWJzKHgpLCAxIC8gMyk7XHJcbiAgfSxcclxuICAvLyAyMC4yLjIuMTEgTWF0aC5jbHozMih4KVxyXG4gIGNsejMyOiBmdW5jdGlvbiBjbHozMih4KXtcclxuICAgIHJldHVybiAoeCA+Pj49IDApID8gMzEgLSBmbG9vcihsb2coeCArIDAuNSkgKiBNYXRoLkxPRzJFKSA6IDMyO1xyXG4gIH0sXHJcbiAgLy8gMjAuMi4yLjEyIE1hdGguY29zaCh4KVxyXG4gIGNvc2g6IGZ1bmN0aW9uIGNvc2goeCl7XHJcbiAgICByZXR1cm4gKGV4cCh4ID0gK3gpICsgZXhwKC14KSkgLyAyO1xyXG4gIH0sXHJcbiAgLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcclxuICBleHBtMTogZXhwbTEsXHJcbiAgLy8gMjAuMi4yLjE2IE1hdGguZnJvdW5kKHgpXHJcbiAgZnJvdW5kOiBmdW5jdGlvbiBmcm91bmQoeCl7XHJcbiAgICB2YXIgJGFicyAgPSBhYnMoeClcclxuICAgICAgLCAkc2lnbiA9IHNpZ24oeClcclxuICAgICAgLCBhLCByZXN1bHQ7XHJcbiAgICBpZigkYWJzIDwgTUlOMzIpcmV0dXJuICRzaWduICogcm91bmRUaWVzVG9FdmVuKCRhYnMgLyBNSU4zMiAvIEVQU0lMT04zMikgKiBNSU4zMiAqIEVQU0lMT04zMjtcclxuICAgIGEgPSAoMSArIEVQU0lMT04zMiAvIEVQU0lMT04pICogJGFicztcclxuICAgIHJlc3VsdCA9IGEgLSAoYSAtICRhYnMpO1xyXG4gICAgaWYocmVzdWx0ID4gTUFYMzIgfHwgcmVzdWx0ICE9IHJlc3VsdClyZXR1cm4gJHNpZ24gKiBJbmZpbml0eTtcclxuICAgIHJldHVybiAkc2lnbiAqIHJlc3VsdDtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi4xNyBNYXRoLmh5cG90KFt2YWx1ZTFbLCB2YWx1ZTJbLCDigKYgXV1dKVxyXG4gIGh5cG90OiBmdW5jdGlvbiBoeXBvdCh2YWx1ZTEsIHZhbHVlMil7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICAgIHZhciBzdW0gID0gMFxyXG4gICAgICAsIGxlbjEgPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICwgbGVuMiA9IGxlbjFcclxuICAgICAgLCBhcmdzID0gQXJyYXkobGVuMSlcclxuICAgICAgLCBsYXJnID0gMFxyXG4gICAgICAsIGFyZztcclxuICAgIHdoaWxlKGxlbjEtLSl7XHJcbiAgICAgIGFyZyA9IGFyZ3NbbGVuMV0gPSBhYnMoYXJndW1lbnRzW2xlbjFdKTtcclxuICAgICAgaWYoYXJnID09IEluZmluaXR5KXJldHVybiBJbmZpbml0eTtcclxuICAgICAgaWYoYXJnID4gbGFyZylsYXJnID0gYXJnO1xyXG4gICAgfVxyXG4gICAgbGFyZyA9IGxhcmcgfHwgMTtcclxuICAgIHdoaWxlKGxlbjItLSlzdW0gKz0gcG93KGFyZ3NbbGVuMl0gLyBsYXJnLCAyKTtcclxuICAgIHJldHVybiBsYXJnICogc3FydChzdW0pO1xyXG4gIH0sXHJcbiAgLy8gMjAuMi4yLjE4IE1hdGguaW11bCh4LCB5KVxyXG4gIGltdWw6IGZ1bmN0aW9uIGltdWwoeCwgeSl7XHJcbiAgICB2YXIgVUludDE2ID0gMHhmZmZmXHJcbiAgICAgICwgeG4gPSAreFxyXG4gICAgICAsIHluID0gK3lcclxuICAgICAgLCB4bCA9IFVJbnQxNiAmIHhuXHJcbiAgICAgICwgeWwgPSBVSW50MTYgJiB5bjtcclxuICAgIHJldHVybiAwIHwgeGwgKiB5bCArICgoVUludDE2ICYgeG4gPj4+IDE2KSAqIHlsICsgeGwgKiAoVUludDE2ICYgeW4gPj4+IDE2KSA8PCAxNiA+Pj4gMCk7XHJcbiAgfSxcclxuICAvLyAyMC4yLjIuMjAgTWF0aC5sb2cxcCh4KVxyXG4gIGxvZzFwOiBmdW5jdGlvbiBsb2cxcCh4KXtcclxuICAgIHJldHVybiAoeCA9ICt4KSA+IC0xZS04ICYmIHggPCAxZS04ID8geCAtIHggKiB4IC8gMiA6IGxvZygxICsgeCk7XHJcbiAgfSxcclxuICAvLyAyMC4yLjIuMjEgTWF0aC5sb2cxMCh4KVxyXG4gIGxvZzEwOiBmdW5jdGlvbiBsb2cxMCh4KXtcclxuICAgIHJldHVybiBsb2coeCkgLyBNYXRoLkxOMTA7XHJcbiAgfSxcclxuICAvLyAyMC4yLjIuMjIgTWF0aC5sb2cyKHgpXHJcbiAgbG9nMjogZnVuY3Rpb24gbG9nMih4KXtcclxuICAgIHJldHVybiBsb2coeCkgLyBNYXRoLkxOMjtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcclxuICBzaWduOiBzaWduLFxyXG4gIC8vIDIwLjIuMi4zMCBNYXRoLnNpbmgoeClcclxuICBzaW5oOiBmdW5jdGlvbiBzaW5oKHgpe1xyXG4gICAgcmV0dXJuIGFicyh4ID0gK3gpIDwgMSA/IChleHBtMSh4KSAtIGV4cG0xKC14KSkgLyAyIDogKGV4cCh4IC0gMSkgLSBleHAoLXggLSAxKSkgKiAoRSAvIDIpO1xyXG4gIH0sXHJcbiAgLy8gMjAuMi4yLjMzIE1hdGgudGFuaCh4KVxyXG4gIHRhbmg6IGZ1bmN0aW9uIHRhbmgoeCl7XHJcbiAgICB2YXIgYSA9IGV4cG0xKHggPSAreClcclxuICAgICAgLCBiID0gZXhwbTEoLXgpO1xyXG4gICAgcmV0dXJuIGEgPT0gSW5maW5pdHkgPyAxIDogYiA9PSBJbmZpbml0eSA/IC0xIDogKGEgLSBiKSAvIChleHAoeCkgKyBleHAoLXgpKTtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi4zNCBNYXRoLnRydW5jKHgpXHJcbiAgdHJ1bmM6IGZ1bmN0aW9uIHRydW5jKGl0KXtcclxuICAgIHJldHVybiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XHJcbiAgfVxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGlzT2JqZWN0ICAgPSAkLmlzT2JqZWN0XHJcbiAgLCBpc0Z1bmN0aW9uID0gJC5pc0Z1bmN0aW9uXHJcbiAgLCBOVU1CRVIgICAgID0gJ051bWJlcidcclxuICAsICROdW1iZXIgICAgPSAkLmdbTlVNQkVSXVxyXG4gICwgQmFzZSAgICAgICA9ICROdW1iZXJcclxuICAsIHByb3RvICAgICAgPSAkTnVtYmVyLnByb3RvdHlwZTtcclxuZnVuY3Rpb24gdG9QcmltaXRpdmUoaXQpe1xyXG4gIHZhciBmbiwgdmFsO1xyXG4gIGlmKGlzRnVuY3Rpb24oZm4gPSBpdC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XHJcbiAgaWYoaXNGdW5jdGlvbihmbiA9IGl0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XHJcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gbnVtYmVyXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHRvTnVtYmVyKGl0KXtcclxuICBpZihpc09iamVjdChpdCkpaXQgPSB0b1ByaW1pdGl2ZShpdCk7XHJcbiAgaWYodHlwZW9mIGl0ID09ICdzdHJpbmcnICYmIGl0Lmxlbmd0aCA+IDIgJiYgaXQuY2hhckNvZGVBdCgwKSA9PSA0OCl7XHJcbiAgICB2YXIgYmluYXJ5ID0gZmFsc2U7XHJcbiAgICBzd2l0Y2goaXQuY2hhckNvZGVBdCgxKSl7XHJcbiAgICAgIGNhc2UgNjYgOiBjYXNlIDk4ICA6IGJpbmFyeSA9IHRydWU7XHJcbiAgICAgIGNhc2UgNzkgOiBjYXNlIDExMSA6IHJldHVybiBwYXJzZUludChpdC5zbGljZSgyKSwgYmluYXJ5ID8gMiA6IDgpO1xyXG4gICAgfVxyXG4gIH0gcmV0dXJuICtpdDtcclxufVxyXG5pZigkLkZXICYmICEoJE51bWJlcignMG8xJykgJiYgJE51bWJlcignMGIxJykpKXtcclxuICAkTnVtYmVyID0gZnVuY3Rpb24gTnVtYmVyKGl0KXtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgJE51bWJlciA/IG5ldyBCYXNlKHRvTnVtYmVyKGl0KSkgOiB0b051bWJlcihpdCk7XHJcbiAgfTtcclxuICAkLmVhY2guY2FsbCgkLkRFU0MgPyAkLmdldE5hbWVzKEJhc2UpIDogKFxyXG4gICAgICAvLyBFUzM6XHJcbiAgICAgICdNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSwnICtcclxuICAgICAgLy8gRVM2IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVM2IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XHJcbiAgICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXHJcbiAgICAgICdNSU5fU0FGRV9JTlRFR0VSLHBhcnNlRmxvYXQscGFyc2VJbnQsaXNJbnRlZ2VyJ1xyXG4gICAgKS5zcGxpdCgnLCcpLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgICBpZigkLmhhcyhCYXNlLCBrZXkpICYmICEkLmhhcygkTnVtYmVyLCBrZXkpKXtcclxuICAgICAgICAkLnNldERlc2MoJE51bWJlciwga2V5LCAkLmdldERlc2MoQmFzZSwga2V5KSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApO1xyXG4gICROdW1iZXIucHJvdG90eXBlID0gcHJvdG87XHJcbiAgcHJvdG8uY29uc3RydWN0b3IgPSAkTnVtYmVyO1xyXG4gICQuaGlkZSgkLmcsIE5VTUJFUiwgJE51bWJlcik7XHJcbn0iLCJ2YXIgJCAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgJGRlZiAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIGFicyAgID0gTWF0aC5hYnNcclxuICAsIGZsb29yID0gTWF0aC5mbG9vclxyXG4gICwgX2lzRmluaXRlID0gJC5nLmlzRmluaXRlXHJcbiAgLCBNQVhfU0FGRV9JTlRFR0VSID0gMHgxZmZmZmZmZmZmZmZmZjsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MTtcclxuZnVuY3Rpb24gaXNJbnRlZ2VyKGl0KXtcclxuICByZXR1cm4gISQuaXNPYmplY3QoaXQpICYmIF9pc0Zpbml0ZShpdCkgJiYgZmxvb3IoaXQpID09PSBpdDtcclxufVxyXG4kZGVmKCRkZWYuUywgJ051bWJlcicsIHtcclxuICAvLyAyMC4xLjIuMSBOdW1iZXIuRVBTSUxPTlxyXG4gIEVQU0lMT046IE1hdGgucG93KDIsIC01MiksXHJcbiAgLy8gMjAuMS4yLjIgTnVtYmVyLmlzRmluaXRlKG51bWJlcilcclxuICBpc0Zpbml0ZTogZnVuY3Rpb24gaXNGaW5pdGUoaXQpe1xyXG4gICAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnbnVtYmVyJyAmJiBfaXNGaW5pdGUoaXQpO1xyXG4gIH0sXHJcbiAgLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXHJcbiAgaXNJbnRlZ2VyOiBpc0ludGVnZXIsXHJcbiAgLy8gMjAuMS4yLjQgTnVtYmVyLmlzTmFOKG51bWJlcilcclxuICBpc05hTjogZnVuY3Rpb24gaXNOYU4obnVtYmVyKXtcclxuICAgIHJldHVybiBudW1iZXIgIT0gbnVtYmVyO1xyXG4gIH0sXHJcbiAgLy8gMjAuMS4yLjUgTnVtYmVyLmlzU2FmZUludGVnZXIobnVtYmVyKVxyXG4gIGlzU2FmZUludGVnZXI6IGZ1bmN0aW9uIGlzU2FmZUludGVnZXIobnVtYmVyKXtcclxuICAgIHJldHVybiBpc0ludGVnZXIobnVtYmVyKSAmJiBhYnMobnVtYmVyKSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xyXG4gIH0sXHJcbiAgLy8gMjAuMS4yLjYgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcclxuICBNQVhfU0FGRV9JTlRFR0VSOiBNQVhfU0FGRV9JTlRFR0VSLFxyXG4gIC8vIDIwLjEuMi4xMCBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUlxyXG4gIE1JTl9TQUZFX0lOVEVHRVI6IC1NQVhfU0FGRV9JTlRFR0VSLFxyXG4gIC8vIDIwLjEuMi4xMiBOdW1iZXIucGFyc2VGbG9hdChzdHJpbmcpXHJcbiAgcGFyc2VGbG9hdDogcGFyc2VGbG9hdCxcclxuICAvLyAyMC4xLjIuMTMgTnVtYmVyLnBhcnNlSW50KHN0cmluZywgcmFkaXgpXHJcbiAgcGFyc2VJbnQ6IHBhcnNlSW50XHJcbn0pOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXHJcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xyXG4kZGVmKCRkZWYuUywgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vJC5hc3NpZ24nKX0pOyIsIi8vIDE5LjEuMy4xMCBPYmplY3QuaXModmFsdWUxLCB2YWx1ZTIpXHJcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xyXG4kZGVmKCRkZWYuUywgJ09iamVjdCcsIHtcclxuICBpczogZnVuY3Rpb24gaXMoeCwgeSl7XHJcbiAgICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcclxuICB9XHJcbn0pOyIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXHJcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xyXG4kZGVmKCRkZWYuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi8kLnNldC1wcm90bycpLnNldH0pOyIsInZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCAkZGVmICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgaXNPYmplY3QgPSAkLmlzT2JqZWN0XHJcbiAgLCB0b09iamVjdCA9ICQudG9PYmplY3Q7XHJcbmZ1bmN0aW9uIHdyYXBPYmplY3RNZXRob2QoTUVUSE9ELCBNT0RFKXtcclxuICB2YXIgZm4gID0gKCQuY29yZS5PYmplY3QgfHwge30pW01FVEhPRF0gfHwgT2JqZWN0W01FVEhPRF1cclxuICAgICwgZiAgID0gMFxyXG4gICAgLCBvICAgPSB7fTtcclxuICBvW01FVEhPRF0gPSBNT0RFID09IDEgPyBmdW5jdGlvbihpdCl7XHJcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XHJcbiAgfSA6IE1PREUgPT0gMiA/IGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiB0cnVlO1xyXG4gIH0gOiBNT0RFID09IDMgPyBmdW5jdGlvbihpdCl7XHJcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogZmFsc2U7XHJcbiAgfSA6IE1PREUgPT0gNCA/IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcclxuICAgIHJldHVybiBmbih0b09iamVjdChpdCksIGtleSk7XHJcbiAgfSA6IE1PREUgPT0gNSA/IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcclxuICAgIHJldHVybiBmbihPYmplY3QoJC5hc3NlcnREZWZpbmVkKGl0KSkpO1xyXG4gIH0gOiBmdW5jdGlvbihpdCl7XHJcbiAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpKTtcclxuICB9O1xyXG4gIHRyeSB7XHJcbiAgICBmbigneicpO1xyXG4gIH0gY2F0Y2goZSl7XHJcbiAgICBmID0gMTtcclxuICB9XHJcbiAgJGRlZigkZGVmLlMgKyAkZGVmLkYgKiBmLCAnT2JqZWN0Jywgbyk7XHJcbn1cclxud3JhcE9iamVjdE1ldGhvZCgnZnJlZXplJywgMSk7XHJcbndyYXBPYmplY3RNZXRob2QoJ3NlYWwnLCAxKTtcclxud3JhcE9iamVjdE1ldGhvZCgncHJldmVudEV4dGVuc2lvbnMnLCAxKTtcclxud3JhcE9iamVjdE1ldGhvZCgnaXNGcm96ZW4nLCAyKTtcclxud3JhcE9iamVjdE1ldGhvZCgnaXNTZWFsZWQnLCAyKTtcclxud3JhcE9iamVjdE1ldGhvZCgnaXNFeHRlbnNpYmxlJywgMyk7XHJcbndyYXBPYmplY3RNZXRob2QoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIDQpO1xyXG53cmFwT2JqZWN0TWV0aG9kKCdnZXRQcm90b3R5cGVPZicsIDUpO1xyXG53cmFwT2JqZWN0TWV0aG9kKCdrZXlzJyk7XHJcbndyYXBPYmplY3RNZXRob2QoJ2dldE93blByb3BlcnR5TmFtZXMnKTsiLCIndXNlIHN0cmljdCc7XHJcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxyXG52YXIgJCAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKVxyXG4gICwgc3JjID0gU3RyaW5nKHt9LnRvU3RyaW5nKVxyXG4gICwgdG1wID0ge307XHJcbmZ1bmN0aW9uIHRvU3RyaW5nKCl7XHJcbiAgcmV0dXJuICdbb2JqZWN0ICcgKyBjb2YuY2xhc3NvZih0aGlzKSArICddJztcclxufVxyXG4vLyBsb2Rhc2ggdXNlcyBTdHJpbmcoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykgaW4gaXNOYXRpdmVcclxudG9TdHJpbmcudG9TdHJpbmcgPSBmdW5jdGlvbigpe1xyXG4gIHJldHVybiBzcmM7XHJcbn07XHJcbnRtcFtyZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xyXG5pZigkLkZXICYmIGNvZih0bXApICE9ICd6JykkLmhpZGUoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgdG9TdHJpbmcpOyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGN0eCAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXHJcbiAgLCBjb2YgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxyXG4gICwgJGRlZiAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIGFzc2VydCAgID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpXHJcbiAgLCBmb3JPZiAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxyXG4gICwgc2V0UHJvdG8gPSByZXF1aXJlKCcuLyQuc2V0LXByb3RvJykuc2V0XHJcbiAgLCBzcGVjaWVzICA9IHJlcXVpcmUoJy4vJC5zcGVjaWVzJylcclxuICAsIFNQRUNJRVMgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJylcclxuICAsIFJFQ09SRCAgID0gcmVxdWlyZSgnLi8kLnVpZCcpLnNhZmUoJ3JlY29yZCcpXHJcbiAgLCBQUk9NSVNFICA9ICdQcm9taXNlJ1xyXG4gICwgZ2xvYmFsICAgPSAkLmdcclxuICAsIHByb2Nlc3MgID0gZ2xvYmFsLnByb2Nlc3NcclxuICAsIGFzYXAgICAgID0gcHJvY2VzcyAmJiBwcm9jZXNzLm5leHRUaWNrIHx8IHJlcXVpcmUoJy4vJC50YXNrJykuc2V0XHJcbiAgLCBQICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxyXG4gICwgaXNGdW5jdGlvbiAgICAgPSAkLmlzRnVuY3Rpb25cclxuICAsIGlzT2JqZWN0ICAgICAgID0gJC5pc09iamVjdFxyXG4gICwgYXNzZXJ0RnVuY3Rpb24gPSBhc3NlcnQuZm5cclxuICAsIGFzc2VydE9iamVjdCAgID0gYXNzZXJ0Lm9iajtcclxuXHJcbnZhciB1c2VOYXRpdmUgPSBmdW5jdGlvbigpe1xyXG4gIHZhciB0ZXN0LCB3b3JrcyA9IGZhbHNlO1xyXG4gIGZ1bmN0aW9uIFAyKHgpe1xyXG4gICAgdmFyIHNlbGYgPSBuZXcgUCh4KTtcclxuICAgIHNldFByb3RvKHNlbGYsIFAyLnByb3RvdHlwZSk7XHJcbiAgICByZXR1cm4gc2VsZjtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIHdvcmtzID0gaXNGdW5jdGlvbihQKSAmJiBpc0Z1bmN0aW9uKFAucmVzb2x2ZSkgJiYgUC5yZXNvbHZlKHRlc3QgPSBuZXcgUChmdW5jdGlvbigpe30pKSA9PSB0ZXN0O1xyXG4gICAgc2V0UHJvdG8oUDIsIFApO1xyXG4gICAgUDIucHJvdG90eXBlID0gJC5jcmVhdGUoUC5wcm90b3R5cGUsIHtjb25zdHJ1Y3Rvcjoge3ZhbHVlOiBQMn19KTtcclxuICAgIC8vIGFjdHVhbCBGaXJlZm94IGhhcyBicm9rZW4gc3ViY2xhc3Mgc3VwcG9ydCwgdGVzdCB0aGF0XHJcbiAgICBpZighKFAyLnJlc29sdmUoNSkudGhlbihmdW5jdGlvbigpe30pIGluc3RhbmNlb2YgUDIpKXtcclxuICAgICAgd29ya3MgPSBmYWxzZTtcclxuICAgIH1cclxuICB9IGNhdGNoKGUpeyB3b3JrcyA9IGZhbHNlOyB9XHJcbiAgcmV0dXJuIHdvcmtzO1xyXG59KCk7XHJcblxyXG4vLyBoZWxwZXJzXHJcbmZ1bmN0aW9uIGdldENvbnN0cnVjdG9yKEMpe1xyXG4gIHZhciBTID0gYXNzZXJ0T2JqZWN0KEMpW1NQRUNJRVNdO1xyXG4gIHJldHVybiBTICE9IHVuZGVmaW5lZCA/IFMgOiBDO1xyXG59XHJcbmZ1bmN0aW9uIGlzVGhlbmFibGUoaXQpe1xyXG4gIHZhciB0aGVuO1xyXG4gIGlmKGlzT2JqZWN0KGl0KSl0aGVuID0gaXQudGhlbjtcclxuICByZXR1cm4gaXNGdW5jdGlvbih0aGVuKSA/IHRoZW4gOiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBub3RpZnkocmVjb3JkKXtcclxuICB2YXIgY2hhaW4gPSByZWNvcmQuYztcclxuICBpZihjaGFpbi5sZW5ndGgpYXNhcChmdW5jdGlvbigpe1xyXG4gICAgdmFyIHZhbHVlID0gcmVjb3JkLnZcclxuICAgICAgLCBvayAgICA9IHJlY29yZC5zID09IDFcclxuICAgICAgLCBpICAgICA9IDA7XHJcbiAgICBmdW5jdGlvbiBydW4ocmVhY3Qpe1xyXG4gICAgICB2YXIgY2IgPSBvayA/IHJlYWN0Lm9rIDogcmVhY3QuZmFpbFxyXG4gICAgICAgICwgcmV0LCB0aGVuO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmKGNiKXtcclxuICAgICAgICAgIGlmKCFvaylyZWNvcmQuaCA9IHRydWU7XHJcbiAgICAgICAgICByZXQgPSBjYiA9PT0gdHJ1ZSA/IHZhbHVlIDogY2IodmFsdWUpO1xyXG4gICAgICAgICAgaWYocmV0ID09PSByZWFjdC5QKXtcclxuICAgICAgICAgICAgcmVhY3QucmVqKFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcclxuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXQpKXtcclxuICAgICAgICAgICAgdGhlbi5jYWxsKHJldCwgcmVhY3QucmVzLCByZWFjdC5yZWopO1xyXG4gICAgICAgICAgfSBlbHNlIHJlYWN0LnJlcyhyZXQpO1xyXG4gICAgICAgIH0gZWxzZSByZWFjdC5yZWoodmFsdWUpO1xyXG4gICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgcmVhY3QucmVqKGVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxyXG4gICAgY2hhaW4ubGVuZ3RoID0gMDtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBpc1VuaGFuZGxlZChwcm9taXNlKXtcclxuICB2YXIgcmVjb3JkID0gcHJvbWlzZVtSRUNPUkRdXHJcbiAgICAsIGNoYWluICA9IHJlY29yZC5hIHx8IHJlY29yZC5jXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwgcmVhY3Q7XHJcbiAgaWYocmVjb3JkLmgpcmV0dXJuIGZhbHNlO1xyXG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xyXG4gICAgcmVhY3QgPSBjaGFpbltpKytdO1xyXG4gICAgaWYocmVhY3QuZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3QuUCkpcmV0dXJuIGZhbHNlO1xyXG4gIH0gcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gJHJlamVjdCh2YWx1ZSl7XHJcbiAgdmFyIHJlY29yZCA9IHRoaXNcclxuICAgICwgcHJvbWlzZTtcclxuICBpZihyZWNvcmQuZClyZXR1cm47XHJcbiAgcmVjb3JkLmQgPSB0cnVlO1xyXG4gIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXHJcbiAgcmVjb3JkLnYgPSB2YWx1ZTtcclxuICByZWNvcmQucyA9IDI7XHJcbiAgcmVjb3JkLmEgPSByZWNvcmQuYy5zbGljZSgpO1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgIGFzYXAoZnVuY3Rpb24oKXtcclxuICAgICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSA9IHJlY29yZC5wKSl7XHJcbiAgICAgICAgaWYoY29mKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XHJcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcclxuICAgICAgICB9IGVsc2UgaWYoZ2xvYmFsLmNvbnNvbGUgJiYgaXNGdW5jdGlvbihjb25zb2xlLmVycm9yKSl7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJlY29yZC5hID0gdW5kZWZpbmVkO1xyXG4gICAgfSk7XHJcbiAgfSwgMSk7XHJcbiAgbm90aWZ5KHJlY29yZCk7XHJcbn1cclxuZnVuY3Rpb24gJHJlc29sdmUodmFsdWUpe1xyXG4gIHZhciByZWNvcmQgPSB0aGlzXHJcbiAgICAsIHRoZW4sIHdyYXBwZXI7XHJcbiAgaWYocmVjb3JkLmQpcmV0dXJuO1xyXG4gIHJlY29yZC5kID0gdHJ1ZTtcclxuICByZWNvcmQgPSByZWNvcmQuciB8fCByZWNvcmQ7IC8vIHVud3JhcFxyXG4gIHRyeSB7XHJcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xyXG4gICAgICB3cmFwcGVyID0ge3I6IHJlY29yZCwgZDogZmFsc2V9OyAvLyB3cmFwXHJcbiAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlY29yZC52ID0gdmFsdWU7XHJcbiAgICAgIHJlY29yZC5zID0gMTtcclxuICAgICAgbm90aWZ5KHJlY29yZCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaChlcnIpe1xyXG4gICAgJHJlamVjdC5jYWxsKHdyYXBwZXIgfHwge3I6IHJlY29yZCwgZDogZmFsc2V9LCBlcnIpOyAvLyB3cmFwXHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxyXG5pZighdXNlTmF0aXZlKXtcclxuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxyXG4gIFAgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcclxuICAgIGFzc2VydEZ1bmN0aW9uKGV4ZWN1dG9yKTtcclxuICAgIHZhciByZWNvcmQgPSB7XHJcbiAgICAgIHA6IGFzc2VydC5pbnN0KHRoaXMsIFAsIFBST01JU0UpLCAgICAgICAvLyA8LSBwcm9taXNlXHJcbiAgICAgIGM6IFtdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcclxuICAgICAgYTogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXHJcbiAgICAgIHM6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxyXG4gICAgICBkOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gZG9uZVxyXG4gICAgICB2OiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcclxuICAgICAgaDogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGhhbmRsZWQgcmVqZWN0aW9uXHJcbiAgICB9O1xyXG4gICAgJC5oaWRlKHRoaXMsIFJFQ09SRCwgcmVjb3JkKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgcmVjb3JkLCAxKSwgY3R4KCRyZWplY3QsIHJlY29yZCwgMSkpO1xyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAkcmVqZWN0LmNhbGwocmVjb3JkLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgJC5taXgoUC5wcm90b3R5cGUsIHtcclxuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXHJcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcclxuICAgICAgdmFyIFMgPSBhc3NlcnRPYmplY3QoYXNzZXJ0T2JqZWN0KHRoaXMpLmNvbnN0cnVjdG9yKVtTUEVDSUVTXTtcclxuICAgICAgdmFyIHJlYWN0ID0ge1xyXG4gICAgICAgIG9rOiAgIGlzRnVuY3Rpb24ob25GdWxmaWxsZWQpID8gb25GdWxmaWxsZWQgOiB0cnVlLFxyXG4gICAgICAgIGZhaWw6IGlzRnVuY3Rpb24ob25SZWplY3RlZCkgID8gb25SZWplY3RlZCAgOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgICB2YXIgcHJvbWlzZSA9IHJlYWN0LlAgPSBuZXcgKFMgIT0gdW5kZWZpbmVkID8gUyA6IFApKGZ1bmN0aW9uKHJlcywgcmVqKXtcclxuICAgICAgICByZWFjdC5yZXMgPSBhc3NlcnRGdW5jdGlvbihyZXMpO1xyXG4gICAgICAgIHJlYWN0LnJlaiA9IGFzc2VydEZ1bmN0aW9uKHJlaik7XHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgcmVjb3JkID0gdGhpc1tSRUNPUkRdO1xyXG4gICAgICByZWNvcmQuYy5wdXNoKHJlYWN0KTtcclxuICAgICAgaWYocmVjb3JkLmEpcmVjb3JkLmEucHVzaChyZWFjdCk7XHJcbiAgICAgIHJlY29yZC5zICYmIG5vdGlmeShyZWNvcmQpO1xyXG4gICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH0sXHJcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxyXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8gZXhwb3J0XHJcbiRkZWYoJGRlZi5HICsgJGRlZi5XICsgJGRlZi5GICogIXVzZU5hdGl2ZSwge1Byb21pc2U6IFB9KTtcclxuY29mLnNldChQLCBQUk9NSVNFKTtcclxuc3BlY2llcyhQKTtcclxuc3BlY2llcygkLmNvcmVbUFJPTUlTRV0pOyAvLyBmb3Igd3JhcHBlclxyXG5cclxuLy8gc3RhdGljc1xyXG4kZGVmKCRkZWYuUyArICRkZWYuRiAqICF1c2VOYXRpdmUsIFBST01JU0UsIHtcclxuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxyXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xyXG4gICAgcmV0dXJuIG5ldyAoZ2V0Q29uc3RydWN0b3IodGhpcykpKGZ1bmN0aW9uKHJlcywgcmVqKXtcclxuICAgICAgcmVqKHIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcclxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xyXG4gICAgcmV0dXJuIGlzT2JqZWN0KHgpICYmIFJFQ09SRCBpbiB4ICYmICQuZ2V0UHJvdG8oeCkgPT09IHRoaXMucHJvdG90eXBlXHJcbiAgICAgID8geCA6IG5ldyAoZ2V0Q29uc3RydWN0b3IodGhpcykpKGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgcmVzKHgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4kZGVmKCRkZWYuUyArICRkZWYuRiAqICEodXNlTmF0aXZlICYmIHJlcXVpcmUoJy4vJC5pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xyXG4gIFAuYWxsKGl0ZXIpWydjYXRjaCddKGZ1bmN0aW9uKCl7fSk7XHJcbn0pKSwgUFJPTUlTRSwge1xyXG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxyXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcclxuICAgIHZhciBDICAgICAgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKVxyXG4gICAgICAsIHZhbHVlcyA9IFtdO1xyXG4gICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uKHJlcywgcmVqKXtcclxuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCB2YWx1ZXMucHVzaCwgdmFsdWVzKTtcclxuICAgICAgdmFyIHJlbWFpbmluZyA9IHZhbHVlcy5sZW5ndGhcclxuICAgICAgICAsIHJlc3VsdHMgICA9IEFycmF5KHJlbWFpbmluZyk7XHJcbiAgICAgIGlmKHJlbWFpbmluZykkLmVhY2guY2FsbCh2YWx1ZXMsIGZ1bmN0aW9uKHByb21pc2UsIGluZGV4KXtcclxuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzKHJlc3VsdHMpO1xyXG4gICAgICAgIH0sIHJlaik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlbHNlIHJlcyhyZXN1bHRzKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxyXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xyXG4gICAgdmFyIEMgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKTtcclxuICAgIHJldHVybiBuZXcgQyhmdW5jdGlvbihyZXMsIHJlail7XHJcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XHJcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4ocmVzLCByZWopO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7IiwidmFyICQgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCAkZGVmICAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIHNldFByb3RvICA9IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKVxyXG4gICwgJGl0ZXIgICAgID0gcmVxdWlyZSgnLi8kLml0ZXInKVxyXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXHJcbiAgLCBJVEVSICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnaXRlcicpXHJcbiAgLCBzdGVwICAgICAgPSAkaXRlci5zdGVwXHJcbiAgLCBhc3NlcnQgICAgPSByZXF1aXJlKCcuLyQuYXNzZXJ0JylcclxuICAsIGlzT2JqZWN0ICA9ICQuaXNPYmplY3RcclxuICAsIGdldFByb3RvICA9ICQuZ2V0UHJvdG9cclxuICAsICRSZWZsZWN0ICA9ICQuZy5SZWZsZWN0XHJcbiAgLCBfYXBwbHkgICAgPSBGdW5jdGlvbi5hcHBseVxyXG4gICwgYXNzZXJ0T2JqZWN0ID0gYXNzZXJ0Lm9ialxyXG4gICwgX2lzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgJC5pc09iamVjdFxyXG4gICwgX3ByZXZlbnRFeHRlbnNpb25zID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zIHx8ICQuaXRcclxuICAvLyBJRSBUUCBoYXMgYnJva2VuIFJlZmxlY3QuZW51bWVyYXRlXHJcbiAgLCBidWdneUVudW1lcmF0ZSA9ICEoJFJlZmxlY3QgJiYgJFJlZmxlY3QuZW51bWVyYXRlICYmIElURVJBVE9SIGluICRSZWZsZWN0LmVudW1lcmF0ZSh7fSkpO1xyXG5cclxuZnVuY3Rpb24gRW51bWVyYXRlKGl0ZXJhdGVkKXtcclxuICAkLnNldCh0aGlzLCBJVEVSLCB7bzogaXRlcmF0ZWQsIGs6IHVuZGVmaW5lZCwgaTogMH0pO1xyXG59XHJcbiRpdGVyLmNyZWF0ZShFbnVtZXJhdGUsICdPYmplY3QnLCBmdW5jdGlvbigpe1xyXG4gIHZhciBpdGVyID0gdGhpc1tJVEVSXVxyXG4gICAgLCBrZXlzID0gaXRlci5rXHJcbiAgICAsIGtleTtcclxuICBpZihrZXlzID09IHVuZGVmaW5lZCl7XHJcbiAgICBpdGVyLmsgPSBrZXlzID0gW107XHJcbiAgICBmb3Ioa2V5IGluIGl0ZXIubylrZXlzLnB1c2goa2V5KTtcclxuICB9XHJcbiAgZG8ge1xyXG4gICAgaWYoaXRlci5pID49IGtleXMubGVuZ3RoKXJldHVybiBzdGVwKDEpO1xyXG4gIH0gd2hpbGUoISgoa2V5ID0ga2V5c1tpdGVyLmkrK10pIGluIGl0ZXIubykpO1xyXG4gIHJldHVybiBzdGVwKDAsIGtleSk7XHJcbn0pO1xyXG5cclxudmFyIHJlZmxlY3QgPSB7XHJcbiAgLy8gMjYuMS4xIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3QpXHJcbiAgYXBwbHk6IGZ1bmN0aW9uIGFwcGx5KHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcmd1bWVudHNMaXN0KXtcclxuICAgIHJldHVybiBfYXBwbHkuY2FsbCh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdCk7XHJcbiAgfSxcclxuICAvLyAyNi4xLjIgUmVmbGVjdC5jb25zdHJ1Y3QodGFyZ2V0LCBhcmd1bWVudHNMaXN0IFssIG5ld1RhcmdldF0pXHJcbiAgY29uc3RydWN0OiBmdW5jdGlvbiBjb25zdHJ1Y3QodGFyZ2V0LCBhcmd1bWVudHNMaXN0IC8qLCBuZXdUYXJnZXQqLyl7XHJcbiAgICB2YXIgcHJvdG8gICAgPSBhc3NlcnQuZm4oYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl0pLnByb3RvdHlwZVxyXG4gICAgICAsIGluc3RhbmNlID0gJC5jcmVhdGUoaXNPYmplY3QocHJvdG8pID8gcHJvdG8gOiBPYmplY3QucHJvdG90eXBlKVxyXG4gICAgICAsIHJlc3VsdCAgID0gX2FwcGx5LmNhbGwodGFyZ2V0LCBpbnN0YW5jZSwgYXJndW1lbnRzTGlzdCk7XHJcbiAgICByZXR1cm4gaXNPYmplY3QocmVzdWx0KSA/IHJlc3VsdCA6IGluc3RhbmNlO1xyXG4gIH0sXHJcbiAgLy8gMjYuMS4zIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcylcclxuICBkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyl7XHJcbiAgICBhc3NlcnRPYmplY3QodGFyZ2V0KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICQuc2V0RGVzYyh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGNhdGNoKGUpe1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyAyNi4xLjQgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KVxyXG4gIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KXtcclxuICAgIHZhciBkZXNjID0gJC5nZXREZXNjKGFzc2VydE9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XHJcbiAgICByZXR1cm4gZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUgPyBmYWxzZSA6IGRlbGV0ZSB0YXJnZXRbcHJvcGVydHlLZXldO1xyXG4gIH0sXHJcbiAgLy8gMjYuMS42IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkgWywgcmVjZWl2ZXJdKVxyXG4gIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkvKiwgcmVjZWl2ZXIqLyl7XHJcbiAgICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXVxyXG4gICAgICAsIGRlc2MgPSAkLmdldERlc2MoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KSwgcHJvdG87XHJcbiAgICBpZihkZXNjKXJldHVybiAkLmhhcyhkZXNjLCAndmFsdWUnKVxyXG4gICAgICA/IGRlc2MudmFsdWVcclxuICAgICAgOiBkZXNjLmdldCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICA6IGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xyXG4gICAgcmV0dXJuIGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG8odGFyZ2V0KSlcclxuICAgICAgPyBnZXQocHJvdG8sIHByb3BlcnR5S2V5LCByZWNlaXZlcilcclxuICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgfSxcclxuICAvLyAyNi4xLjcgUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSlcclxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KXtcclxuICAgIHJldHVybiAkLmdldERlc2MoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcclxuICB9LFxyXG4gIC8vIDI2LjEuOCBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldClcclxuICBnZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KXtcclxuICAgIHJldHVybiBnZXRQcm90byhhc3NlcnRPYmplY3QodGFyZ2V0KSk7XHJcbiAgfSxcclxuICAvLyAyNi4xLjkgUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wZXJ0eUtleSlcclxuICBoYXM6IGZ1bmN0aW9uIGhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KXtcclxuICAgIHJldHVybiBwcm9wZXJ0eUtleSBpbiB0YXJnZXQ7XHJcbiAgfSxcclxuICAvLyAyNi4xLjEwIFJlZmxlY3QuaXNFeHRlbnNpYmxlKHRhcmdldClcclxuICBpc0V4dGVuc2libGU6IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZSh0YXJnZXQpe1xyXG4gICAgcmV0dXJuIF9pc0V4dGVuc2libGUoYXNzZXJ0T2JqZWN0KHRhcmdldCkpO1xyXG4gIH0sXHJcbiAgLy8gMjYuMS4xMSBSZWZsZWN0Lm93bktleXModGFyZ2V0KVxyXG4gIG93bktleXM6IHJlcXVpcmUoJy4vJC5vd24ta2V5cycpLFxyXG4gIC8vIDI2LjEuMTIgUmVmbGVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpXHJcbiAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCl7XHJcbiAgICBhc3NlcnRPYmplY3QodGFyZ2V0KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIF9wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIDI2LjEuMTMgUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgViBbLCByZWNlaXZlcl0pXHJcbiAgc2V0OiBmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgVi8qLCByZWNlaXZlciovKXtcclxuICAgIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCA0ID8gdGFyZ2V0IDogYXJndW1lbnRzWzNdXHJcbiAgICAgICwgb3duRGVzYyAgPSAkLmdldERlc2MoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KVxyXG4gICAgICAsIGV4aXN0aW5nRGVzY3JpcHRvciwgcHJvdG87XHJcbiAgICBpZighb3duRGVzYyl7XHJcbiAgICAgIGlmKGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG8odGFyZ2V0KSkpe1xyXG4gICAgICAgIHJldHVybiBzZXQocHJvdG8sIHByb3BlcnR5S2V5LCBWLCByZWNlaXZlcik7XHJcbiAgICAgIH1cclxuICAgICAgb3duRGVzYyA9ICQuZGVzYygwKTtcclxuICAgIH1cclxuICAgIGlmKCQuaGFzKG93bkRlc2MsICd2YWx1ZScpKXtcclxuICAgICAgaWYob3duRGVzYy53cml0YWJsZSA9PT0gZmFsc2UgfHwgIWlzT2JqZWN0KHJlY2VpdmVyKSlyZXR1cm4gZmFsc2U7XHJcbiAgICAgIGV4aXN0aW5nRGVzY3JpcHRvciA9ICQuZ2V0RGVzYyhyZWNlaXZlciwgcHJvcGVydHlLZXkpIHx8ICQuZGVzYygwKTtcclxuICAgICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcclxuICAgICAgJC5zZXREZXNjKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSwgZXhpc3RpbmdEZXNjcmlwdG9yKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3duRGVzYy5zZXQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogKG93bkRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIFYpLCB0cnVlKTtcclxuICB9XHJcbn07XHJcbi8vIDI2LjEuMTQgUmVmbGVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKVxyXG5pZihzZXRQcm90bylyZWZsZWN0LnNldFByb3RvdHlwZU9mID0gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90byl7XHJcbiAgc2V0UHJvdG8uY2hlY2sodGFyZ2V0LCBwcm90byk7XHJcbiAgdHJ5IHtcclxuICAgIHNldFByb3RvLnNldCh0YXJnZXQsIHByb3RvKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2goZSl7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuJGRlZigkZGVmLkcsIHtSZWZsZWN0OiB7fX0pO1xyXG5cclxuJGRlZigkZGVmLlMgKyAkZGVmLkYgKiBidWdneUVudW1lcmF0ZSwgJ1JlZmxlY3QnLCB7XHJcbiAgLy8gMjYuMS41IFJlZmxlY3QuZW51bWVyYXRlKHRhcmdldClcclxuICBlbnVtZXJhdGU6IGZ1bmN0aW9uIGVudW1lcmF0ZSh0YXJnZXQpe1xyXG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhdGUoYXNzZXJ0T2JqZWN0KHRhcmdldCkpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kZGVmKCRkZWYuUywgJ1JlZmxlY3QnLCByZWZsZWN0KTsiLCJ2YXIgJCAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBjb2YgICAgID0gcmVxdWlyZSgnLi8kLmNvZicpXHJcbiAgLCAkUmVnRXhwID0gJC5nLlJlZ0V4cFxyXG4gICwgQmFzZSAgICA9ICRSZWdFeHBcclxuICAsIHByb3RvICAgPSAkUmVnRXhwLnByb3RvdHlwZVxyXG4gICwgcmUgICAgICA9IC9hL2dcclxuICAvLyBcIm5ld1wiIGNyZWF0ZXMgYSBuZXcgb2JqZWN0XHJcbiAgLCBDT1JSRUNUX05FVyA9IG5ldyAkUmVnRXhwKHJlKSAhPT0gcmVcclxuICAvLyBSZWdFeHAgYWxsb3dzIGEgcmVnZXggd2l0aCBmbGFncyBhcyB0aGUgcGF0dGVyblxyXG4gICwgQUxMT1dTX1JFX1dJVEhfRkxBR1MgPSBmdW5jdGlvbigpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuICRSZWdFeHAocmUsICdpJykgPT0gJy9hL2knO1xyXG4gICAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxyXG4gIH0oKTtcclxuaWYoJC5GVyAmJiAkLkRFU0Mpe1xyXG4gIGlmKCFDT1JSRUNUX05FVyB8fCAhQUxMT1dTX1JFX1dJVEhfRkxBR1Mpe1xyXG4gICAgJFJlZ0V4cCA9IGZ1bmN0aW9uIFJlZ0V4cChwYXR0ZXJuLCBmbGFncyl7XHJcbiAgICAgIHZhciBwYXR0ZXJuSXNSZWdFeHAgID0gY29mKHBhdHRlcm4pID09ICdSZWdFeHAnXHJcbiAgICAgICAgLCBmbGFnc0lzVW5kZWZpbmVkID0gZmxhZ3MgPT09IHVuZGVmaW5lZDtcclxuICAgICAgaWYoISh0aGlzIGluc3RhbmNlb2YgJFJlZ0V4cCkgJiYgcGF0dGVybklzUmVnRXhwICYmIGZsYWdzSXNVbmRlZmluZWQpcmV0dXJuIHBhdHRlcm47XHJcbiAgICAgIHJldHVybiBDT1JSRUNUX05FV1xyXG4gICAgICAgID8gbmV3IEJhc2UocGF0dGVybklzUmVnRXhwICYmICFmbGFnc0lzVW5kZWZpbmVkID8gcGF0dGVybi5zb3VyY2UgOiBwYXR0ZXJuLCBmbGFncylcclxuICAgICAgICA6IG5ldyBCYXNlKHBhdHRlcm5Jc1JlZ0V4cCA/IHBhdHRlcm4uc291cmNlIDogcGF0dGVyblxyXG4gICAgICAgICAgLCBwYXR0ZXJuSXNSZWdFeHAgJiYgZmxhZ3NJc1VuZGVmaW5lZCA/IHBhdHRlcm4uZmxhZ3MgOiBmbGFncyk7XHJcbiAgICB9O1xyXG4gICAgJC5lYWNoLmNhbGwoJC5nZXROYW1lcyhCYXNlKSwgZnVuY3Rpb24oa2V5KXtcclxuICAgICAga2V5IGluICRSZWdFeHAgfHwgJC5zZXREZXNjKCRSZWdFeHAsIGtleSwge1xyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBCYXNlW2tleV07IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbihpdCl7IEJhc2Vba2V5XSA9IGl0OyB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBwcm90by5jb25zdHJ1Y3RvciA9ICRSZWdFeHA7XHJcbiAgICAkUmVnRXhwLnByb3RvdHlwZSA9IHByb3RvO1xyXG4gICAgJC5oaWRlKCQuZywgJ1JlZ0V4cCcsICRSZWdFeHApO1xyXG4gIH1cclxuICAvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXHJcbiAgaWYoLy4vZy5mbGFncyAhPSAnZycpJC5zZXREZXNjKHByb3RvLCAnZmxhZ3MnLCB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IHJlcXVpcmUoJy4vJC5yZXBsYWNlcicpKC9eLipcXC8oXFx3KikkLywgJyQxJylcclxuICB9KTtcclxufVxyXG5yZXF1aXJlKCcuLyQuc3BlY2llcycpKCRSZWdFeHApOyIsIid1c2Ugc3RyaWN0JztcclxudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXN0cm9uZycpO1xyXG5cclxuLy8gMjMuMiBTZXQgT2JqZWN0c1xyXG5yZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdTZXQnLCB7XHJcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXHJcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xyXG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xyXG4gIH1cclxufSwgc3Ryb25nKTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCAkYXQgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKGZhbHNlKTtcclxuJGRlZigkZGVmLlAsICdTdHJpbmcnLCB7XHJcbiAgLy8gMjEuMS4zLjMgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdChwb3MpXHJcbiAgY29kZVBvaW50QXQ6IGZ1bmN0aW9uIGNvZGVQb2ludEF0KHBvcyl7XHJcbiAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XHJcbiAgfVxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGNvZiAgPSByZXF1aXJlKCcuLyQuY29mJylcclxuICAsICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIHRvTGVuZ3RoID0gJC50b0xlbmd0aDtcclxuXHJcbi8vIHNob3VsZCB0aHJvdyBlcnJvciBvbiByZWdleFxyXG4kZGVmKCRkZWYuUCArICRkZWYuRiAqICFyZXF1aXJlKCcuLyQudGhyb3dzJykoZnVuY3Rpb24oKXsgJ3EnLmVuZHNXaXRoKC8uLyk7IH0pLCAnU3RyaW5nJywge1xyXG4gIC8vIDIxLjEuMy42IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgoc2VhcmNoU3RyaW5nIFssIGVuZFBvc2l0aW9uXSlcclxuICBlbmRzV2l0aDogZnVuY3Rpb24gZW5kc1dpdGgoc2VhcmNoU3RyaW5nIC8qLCBlbmRQb3NpdGlvbiA9IEBsZW5ndGggKi8pe1xyXG4gICAgaWYoY29mKHNlYXJjaFN0cmluZykgPT0gJ1JlZ0V4cCcpdGhyb3cgVHlwZUVycm9yKCk7XHJcbiAgICB2YXIgdGhhdCA9IFN0cmluZygkLmFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICwgZW5kUG9zaXRpb24gPSBhcmd1bWVudHNbMV1cclxuICAgICAgLCBsZW4gPSB0b0xlbmd0aCh0aGF0Lmxlbmd0aClcclxuICAgICAgLCBlbmQgPSBlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gbGVuIDogTWF0aC5taW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLCBsZW4pO1xyXG4gICAgc2VhcmNoU3RyaW5nICs9ICcnO1xyXG4gICAgcmV0dXJuIHRoYXQuc2xpY2UoZW5kIC0gc2VhcmNoU3RyaW5nLmxlbmd0aCwgZW5kKSA9PT0gc2VhcmNoU3RyaW5nO1xyXG4gIH1cclxufSk7IiwidmFyICRkZWYgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIHRvSW5kZXggPSByZXF1aXJlKCcuLyQnKS50b0luZGV4XHJcbiAgLCBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXHJcbiAgLCAkZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xyXG5cclxuLy8gbGVuZ3RoIHNob3VsZCBiZSAxLCBvbGQgRkYgcHJvYmxlbVxyXG4kZGVmKCRkZWYuUyArICRkZWYuRiAqICghISRmcm9tQ29kZVBvaW50ICYmICRmcm9tQ29kZVBvaW50Lmxlbmd0aCAhPSAxKSwgJ1N0cmluZycsIHtcclxuICAvLyAyMS4xLjIuMiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKVxyXG4gIGZyb21Db2RlUG9pbnQ6IGZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoeCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICAgIHZhciByZXMgPSBbXVxyXG4gICAgICAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICAgLCBpICAgPSAwXHJcbiAgICAgICwgY29kZTtcclxuICAgIHdoaWxlKGxlbiA+IGkpe1xyXG4gICAgICBjb2RlID0gK2FyZ3VtZW50c1tpKytdO1xyXG4gICAgICBpZih0b0luZGV4KGNvZGUsIDB4MTBmZmZmKSAhPT0gY29kZSl0aHJvdyBSYW5nZUVycm9yKGNvZGUgKyAnIGlzIG5vdCBhIHZhbGlkIGNvZGUgcG9pbnQnKTtcclxuICAgICAgcmVzLnB1c2goY29kZSA8IDB4MTAwMDBcclxuICAgICAgICA/IGZyb21DaGFyQ29kZShjb2RlKVxyXG4gICAgICAgIDogZnJvbUNoYXJDb2RlKCgoY29kZSAtPSAweDEwMDAwKSA+PiAxMCkgKyAweGQ4MDAsIGNvZGUgJSAweDQwMCArIDB4ZGMwMClcclxuICAgICAgKTtcclxuICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcclxuICB9XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgY29mICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxyXG4gICwgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKTtcclxuXHJcbiRkZWYoJGRlZi5QLCAnU3RyaW5nJywge1xyXG4gIC8vIDIxLjEuMy43IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbiA9IDApXHJcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZyAvKiwgcG9zaXRpb24gPSAwICovKXtcclxuICAgIGlmKGNvZihzZWFyY2hTdHJpbmcpID09ICdSZWdFeHAnKXRocm93IFR5cGVFcnJvcigpO1xyXG4gICAgcmV0dXJuICEhflN0cmluZygkLmFzc2VydERlZmluZWQodGhpcykpLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBhcmd1bWVudHNbMV0pO1xyXG4gIH1cclxufSk7IiwidmFyIHNldCAgID0gcmVxdWlyZSgnLi8kJykuc2V0XHJcbiAgLCAkYXQgICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKSh0cnVlKVxyXG4gICwgSVRFUiAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnaXRlcicpXHJcbiAgLCAkaXRlciA9IHJlcXVpcmUoJy4vJC5pdGVyJylcclxuICAsIHN0ZXAgID0gJGl0ZXIuc3RlcDtcclxuXHJcbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcclxucmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xyXG4gIHNldCh0aGlzLCBJVEVSLCB7bzogU3RyaW5nKGl0ZXJhdGVkKSwgaTogMH0pO1xyXG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXHJcbn0sIGZ1bmN0aW9uKCl7XHJcbiAgdmFyIGl0ZXIgID0gdGhpc1tJVEVSXVxyXG4gICAgLCBPICAgICA9IGl0ZXIub1xyXG4gICAgLCBpbmRleCA9IGl0ZXIuaVxyXG4gICAgLCBwb2ludDtcclxuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4gc3RlcCgxKTtcclxuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XHJcbiAgaXRlci5pICs9IHBvaW50Lmxlbmd0aDtcclxuICByZXR1cm4gc3RlcCgwLCBwb2ludCk7XHJcbn0pOyIsInZhciAkICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcblxyXG4kZGVmKCRkZWYuUywgJ1N0cmluZycsIHtcclxuICAvLyAyMS4xLjIuNCBTdHJpbmcucmF3KGNhbGxTaXRlLCAuLi5zdWJzdGl0dXRpb25zKVxyXG4gIHJhdzogZnVuY3Rpb24gcmF3KGNhbGxTaXRlKXtcclxuICAgIHZhciB0cGwgPSAkLnRvT2JqZWN0KGNhbGxTaXRlLnJhdylcclxuICAgICAgLCBsZW4gPSAkLnRvTGVuZ3RoKHRwbC5sZW5ndGgpXHJcbiAgICAgICwgc2xuID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAsIHJlcyA9IFtdXHJcbiAgICAgICwgaSAgID0gMDtcclxuICAgIHdoaWxlKGxlbiA+IGkpe1xyXG4gICAgICByZXMucHVzaChTdHJpbmcodHBsW2krK10pKTtcclxuICAgICAgaWYoaSA8IHNsbilyZXMucHVzaChTdHJpbmcoYXJndW1lbnRzW2ldKSk7XHJcbiAgICB9IHJldHVybiByZXMuam9pbignJyk7XHJcbiAgfVxyXG59KTsiLCJ2YXIgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKTtcclxuXHJcbiRkZWYoJGRlZi5QLCAnU3RyaW5nJywge1xyXG4gIC8vIDIxLjEuMy4xMyBTdHJpbmcucHJvdG90eXBlLnJlcGVhdChjb3VudClcclxuICByZXBlYXQ6IHJlcXVpcmUoJy4vJC5zdHJpbmctcmVwZWF0JylcclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBjb2YgID0gcmVxdWlyZSgnLi8kLmNvZicpXHJcbiAgLCAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xyXG5cclxuLy8gc2hvdWxkIHRocm93IGVycm9yIG9uIHJlZ2V4XHJcbiRkZWYoJGRlZi5QICsgJGRlZi5GICogIXJlcXVpcmUoJy4vJC50aHJvd3MnKShmdW5jdGlvbigpeyAncScuc3RhcnRzV2l0aCgvLi8pOyB9KSwgJ1N0cmluZycsIHtcclxuICAvLyAyMS4xLjMuMTggU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKHNlYXJjaFN0cmluZyBbLCBwb3NpdGlvbiBdKVxyXG4gIHN0YXJ0c1dpdGg6IGZ1bmN0aW9uIHN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIC8qLCBwb3NpdGlvbiA9IDAgKi8pe1xyXG4gICAgaWYoY29mKHNlYXJjaFN0cmluZykgPT0gJ1JlZ0V4cCcpdGhyb3cgVHlwZUVycm9yKCk7XHJcbiAgICB2YXIgdGhhdCAgPSBTdHJpbmcoJC5hc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAsIGluZGV4ID0gJC50b0xlbmd0aChNYXRoLm1pbihhcmd1bWVudHNbMV0sIHRoYXQubGVuZ3RoKSk7XHJcbiAgICBzZWFyY2hTdHJpbmcgKz0gJyc7XHJcbiAgICByZXR1cm4gdGhhdC5zbGljZShpbmRleCwgaW5kZXggKyBzZWFyY2hTdHJpbmcubGVuZ3RoKSA9PT0gc2VhcmNoU3RyaW5nO1xyXG4gIH1cclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXHJcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBzZXRUYWcgICA9IHJlcXVpcmUoJy4vJC5jb2YnKS5zZXRcclxuICAsIHVpZCAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXHJcbiAgLCAkZGVmICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwga2V5T2YgICAgPSByZXF1aXJlKCcuLyQua2V5b2YnKVxyXG4gICwgZW51bUtleXMgPSByZXF1aXJlKCcuLyQuZW51bS1rZXlzJylcclxuICAsIGFzc2VydE9iamVjdCA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKS5vYmpcclxuICAsIGhhcyAgICAgID0gJC5oYXNcclxuICAsICRjcmVhdGUgID0gJC5jcmVhdGVcclxuICAsIGdldERlc2MgID0gJC5nZXREZXNjXHJcbiAgLCBzZXREZXNjICA9ICQuc2V0RGVzY1xyXG4gICwgZGVzYyAgICAgPSAkLmRlc2NcclxuICAsIGdldE5hbWVzID0gJC5nZXROYW1lc1xyXG4gICwgdG9PYmplY3QgPSAkLnRvT2JqZWN0XHJcbiAgLCAkU3ltYm9sICA9ICQuZy5TeW1ib2xcclxuICAsIHNldHRlciAgID0gZmFsc2VcclxuICAsIFRBRyAgICAgID0gdWlkKCd0YWcnKVxyXG4gICwgSElEREVOICAgPSB1aWQoJ2hpZGRlbicpXHJcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHt9XHJcbiAgLCBBbGxTeW1ib2xzID0ge31cclxuICAsIHVzZU5hdGl2ZSA9ICQuaXNGdW5jdGlvbigkU3ltYm9sKTtcclxuXHJcbmZ1bmN0aW9uIHdyYXAodGFnKXtcclxuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gJC5zZXQoJGNyZWF0ZSgkU3ltYm9sLnByb3RvdHlwZSksIFRBRywgdGFnKTtcclxuICAkLkRFU0MgJiYgc2V0dGVyICYmIHNldERlc2MoT2JqZWN0LnByb3RvdHlwZSwgdGFnLCB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xyXG4gICAgICBzZXREZXNjKHRoaXMsIHRhZywgZGVzYygxLCB2YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBzeW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xyXG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xyXG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XHJcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpc2V0RGVzYyhpdCwgSElEREVOLCBkZXNjKDEsIHt9KSk7XHJcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xyXG4gICAgICBELmVudW1lcmFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9IHJldHVybiBzZXREZXNjKGl0LCBrZXksIEQpO1xyXG59XHJcbmZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xyXG4gIGFzc2VydE9iamVjdChpdCk7XHJcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9PYmplY3QoUCkpXHJcbiAgICAsIGkgICAgPSAwXHJcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxyXG4gICAgLCBrZXk7XHJcbiAgd2hpbGUobCA+IGkpZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcclxuICByZXR1cm4gaXQ7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcclxuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gJGNyZWF0ZShpdCkgOiBkZWZpbmVQcm9wZXJ0aWVzKCRjcmVhdGUoaXQpLCBQKTtcclxufVxyXG5mdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XHJcbiAgdmFyIEQgPSBnZXREZXNjKGl0ID0gdG9PYmplY3QoaXQpLCBrZXkpO1xyXG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xyXG4gIHJldHVybiBEO1xyXG59XHJcbmZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xyXG4gIHZhciBuYW1lcyAgPSBnZXROYW1lcyh0b09iamVjdChpdCkpXHJcbiAgICAsIHJlc3VsdCA9IFtdXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwga2V5O1xyXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOKXJlc3VsdC5wdXNoKGtleSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xyXG4gIHZhciBuYW1lcyAgPSBnZXROYW1lcyh0b09iamVjdChpdCkpXHJcbiAgICAsIHJlc3VsdCA9IFtdXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwga2V5O1xyXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXHJcbmlmKCF1c2VOYXRpdmUpe1xyXG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woZGVzY3JpcHRpb24pe1xyXG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcclxuICAgIHJldHVybiB3cmFwKHVpZChkZXNjcmlwdGlvbikpO1xyXG4gIH07XHJcbiAgJC5oaWRlKCRTeW1ib2wucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIHRoaXNbVEFHXTtcclxuICB9KTtcclxuXHJcbiAgJC5jcmVhdGUgICAgID0gY3JlYXRlO1xyXG4gICQuc2V0RGVzYyAgICA9IGRlZmluZVByb3BlcnR5O1xyXG4gICQuZ2V0RGVzYyAgICA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcclxuICAkLnNldERlc2NzICAgPSBkZWZpbmVQcm9wZXJ0aWVzO1xyXG4gICQuZ2V0TmFtZXMgICA9IGdldE93blByb3BlcnR5TmFtZXM7XHJcbiAgJC5nZXRTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xyXG59XHJcblxyXG52YXIgc3ltYm9sU3RhdGljcyA9IHtcclxuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcclxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcclxuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcclxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXHJcbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcclxuICB9LFxyXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxyXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XHJcbiAgICByZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XHJcbiAgfSxcclxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXHJcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxyXG59O1xyXG4vLyAxOS40LjIuMiBTeW1ib2wuaGFzSW5zdGFuY2VcclxuLy8gMTkuNC4yLjMgU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZVxyXG4vLyAxOS40LjIuNCBTeW1ib2wuaXRlcmF0b3JcclxuLy8gMTkuNC4yLjYgU3ltYm9sLm1hdGNoXHJcbi8vIDE5LjQuMi44IFN5bWJvbC5yZXBsYWNlXHJcbi8vIDE5LjQuMi45IFN5bWJvbC5zZWFyY2hcclxuLy8gMTkuNC4yLjEwIFN5bWJvbC5zcGVjaWVzXHJcbi8vIDE5LjQuMi4xMSBTeW1ib2wuc3BsaXRcclxuLy8gMTkuNC4yLjEyIFN5bWJvbC50b1ByaW1pdGl2ZVxyXG4vLyAxOS40LjIuMTMgU3ltYm9sLnRvU3RyaW5nVGFnXHJcbi8vIDE5LjQuMi4xNCBTeW1ib2wudW5zY29wYWJsZXNcclxuJC5lYWNoLmNhbGwoKFxyXG4gICAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCwnICtcclxuICAgICdzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xyXG4gICkuc3BsaXQoJywnKSwgZnVuY3Rpb24oaXQpe1xyXG4gICAgdmFyIHN5bSA9IHJlcXVpcmUoJy4vJC53a3MnKShpdCk7XHJcbiAgICBzeW1ib2xTdGF0aWNzW2l0XSA9IHVzZU5hdGl2ZSA/IHN5bSA6IHdyYXAoc3ltKTtcclxuICB9XHJcbik7XHJcblxyXG5zZXR0ZXIgPSB0cnVlO1xyXG5cclxuJGRlZigkZGVmLkcgKyAkZGVmLlcsIHtTeW1ib2w6ICRTeW1ib2x9KTtcclxuXHJcbiRkZWYoJGRlZi5TLCAnU3ltYm9sJywgc3ltYm9sU3RhdGljcyk7XHJcblxyXG4kZGVmKCRkZWYuUyArICRkZWYuRiAqICF1c2VOYXRpdmUsICdPYmplY3QnLCB7XHJcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxyXG4gIGNyZWF0ZTogY3JlYXRlLFxyXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxyXG4gIGRlZmluZVByb3BlcnR5OiBkZWZpbmVQcm9wZXJ0eSxcclxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxyXG4gIGRlZmluZVByb3BlcnRpZXM6IGRlZmluZVByb3BlcnRpZXMsXHJcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxyXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxyXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXHJcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogZ2V0T3duUHJvcGVydHlOYW1lcyxcclxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXHJcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcclxufSk7XHJcblxyXG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXHJcbnNldFRhZygkU3ltYm9sLCAnU3ltYm9sJyk7XHJcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cclxuc2V0VGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XHJcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXHJcbnNldFRhZygkLmcuSlNPTiwgJ0pTT04nLCB0cnVlKTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgd2VhayAgICAgID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24td2VhaycpXHJcbiAgLCBsZWFrU3RvcmUgPSB3ZWFrLmxlYWtTdG9yZVxyXG4gICwgSUQgICAgICAgID0gd2Vhay5JRFxyXG4gICwgV0VBSyAgICAgID0gd2Vhay5XRUFLXHJcbiAgLCBoYXMgICAgICAgPSAkLmhhc1xyXG4gICwgaXNPYmplY3QgID0gJC5pc09iamVjdFxyXG4gICwgaXNGcm96ZW4gID0gT2JqZWN0LmlzRnJvemVuIHx8ICQuY29yZS5PYmplY3QuaXNGcm96ZW5cclxuICAsIHRtcCAgICAgICA9IHt9O1xyXG5cclxuLy8gMjMuMyBXZWFrTWFwIE9iamVjdHNcclxudmFyIFdlYWtNYXAgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdXZWFrTWFwJywge1xyXG4gIC8vIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXHJcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcclxuICAgIGlmKGlzT2JqZWN0KGtleSkpe1xyXG4gICAgICBpZihpc0Zyb3plbihrZXkpKXJldHVybiBsZWFrU3RvcmUodGhpcykuZ2V0KGtleSk7XHJcbiAgICAgIGlmKGhhcyhrZXksIFdFQUspKXJldHVybiBrZXlbV0VBS11bdGhpc1tJRF1dO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gMjMuMy4zLjUgV2Vha01hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXHJcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XHJcbiAgICByZXR1cm4gd2Vhay5kZWYodGhpcywga2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG59LCB3ZWFrLCB0cnVlLCB0cnVlKTtcclxuXHJcbi8vIElFMTEgV2Vha01hcCBmcm96ZW4ga2V5cyBmaXhcclxuaWYoJC5GVyAmJiBuZXcgV2Vha01hcCgpLnNldCgoT2JqZWN0LmZyZWV6ZSB8fCBPYmplY3QpKHRtcCksIDcpLmdldCh0bXApICE9IDcpe1xyXG4gICQuZWFjaC5jYWxsKFsnZGVsZXRlJywgJ2hhcycsICdnZXQnLCAnc2V0J10sIGZ1bmN0aW9uKGtleSl7XHJcbiAgICB2YXIgbWV0aG9kID0gV2Vha01hcC5wcm90b3R5cGVba2V5XTtcclxuICAgIFdlYWtNYXAucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgLy8gc3RvcmUgZnJvemVuIG9iamVjdHMgb24gbGVha3kgbWFwXHJcbiAgICAgIGlmKGlzT2JqZWN0KGEpICYmIGlzRnJvemVuKGEpKXtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbGVha1N0b3JlKHRoaXMpW2tleV0oYSwgYik7XHJcbiAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XHJcbiAgICAgIC8vIHN0b3JlIGFsbCB0aGUgcmVzdCBvbiBuYXRpdmUgd2Vha21hcFxyXG4gICAgICB9IHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCBhLCBiKTtcclxuICAgIH07XHJcbiAgfSk7XHJcbn0iLCIndXNlIHN0cmljdCc7XHJcbnZhciB3ZWFrID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24td2VhaycpO1xyXG5cclxuLy8gMjMuNCBXZWFrU2V0IE9iamVjdHNcclxucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnV2Vha1NldCcsIHtcclxuICAvLyAyMy40LjMuMSBXZWFrU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXHJcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xyXG4gICAgcmV0dXJuIHdlYWsuZGVmKHRoaXMsIHZhbHVlLCB0cnVlKTtcclxuICB9XHJcbn0sIHdlYWssIGZhbHNlLCB0cnVlKTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vZG9tZW5pYy9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcclxudmFyICRkZWYgICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi8kLmFycmF5LWluY2x1ZGVzJykodHJ1ZSk7XHJcbiRkZWYoJGRlZi5QLCAnQXJyYXknLCB7XHJcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qLCBmcm9tSW5kZXggPSAwICovKXtcclxuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50c1sxXSk7XHJcbiAgfVxyXG59KTtcclxucmVxdWlyZSgnLi8kLnVuc2NvcGUnKSgnaW5jbHVkZXMnKTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXHJcbnJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXRvLWpzb24nKSgnTWFwJyk7IiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi85MzUzNzgxXHJcbnZhciAkICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsICRkZWYgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIG93bktleXMgPSByZXF1aXJlKCcuLyQub3duLWtleXMnKTtcclxuXHJcbiRkZWYoJGRlZi5TLCAnT2JqZWN0Jywge1xyXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqZWN0KXtcclxuICAgIHZhciBPICAgICAgPSAkLnRvT2JqZWN0KG9iamVjdClcclxuICAgICAgLCByZXN1bHQgPSB7fTtcclxuICAgICQuZWFjaC5jYWxsKG93bktleXMoTyksIGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICQuc2V0RGVzYyhyZXN1bHQsIGtleSwgJC5kZXNjKDAsICQuZ2V0RGVzYyhPLCBrZXkpKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59KTsiLCIvLyBodHRwOi8vZ29vLmdsL1hrQnJqRFxyXG52YXIgJCAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xyXG5mdW5jdGlvbiBjcmVhdGVPYmplY3RUb0FycmF5KGlzRW50cmllcyl7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCl7XHJcbiAgICB2YXIgTyAgICAgID0gJC50b09iamVjdChvYmplY3QpXHJcbiAgICAgICwga2V5cyAgID0gJC5nZXRLZXlzKE8pXHJcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICAgLCBpICAgICAgPSAwXHJcbiAgICAgICwgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKVxyXG4gICAgICAsIGtleTtcclxuICAgIGlmKGlzRW50cmllcyl3aGlsZShsZW5ndGggPiBpKXJlc3VsdFtpXSA9IFtrZXkgPSBrZXlzW2krK10sIE9ba2V5XV07XHJcbiAgICBlbHNlIHdoaWxlKGxlbmd0aCA+IGkpcmVzdWx0W2ldID0gT1trZXlzW2krK11dO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9O1xyXG59XHJcbiRkZWYoJGRlZi5TLCAnT2JqZWN0Jywge1xyXG4gIHZhbHVlczogIGNyZWF0ZU9iamVjdFRvQXJyYXkoZmFsc2UpLFxyXG4gIGVudHJpZXM6IGNyZWF0ZU9iamVjdFRvQXJyYXkodHJ1ZSlcclxufSk7IiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20va2FuZ2F4Lzk2OTgxMDBcclxudmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcbiRkZWYoJGRlZi5TLCAnUmVnRXhwJywge1xyXG4gIGVzY2FwZTogcmVxdWlyZSgnLi8kLnJlcGxhY2VyJykoLyhbXFxcXFxcLVtcXF17fSgpKis/LixeJHxdKS9nLCAnXFxcXCQxJywgdHJ1ZSlcclxufSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxyXG5yZXF1aXJlKCcuLyQuY29sbGVjdGlvbi10by1qc29uJykoJ1NldCcpOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgJGF0ICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKSh0cnVlKTtcclxuJGRlZigkZGVmLlAsICdTdHJpbmcnLCB7XHJcbiAgYXQ6IGZ1bmN0aW9uIGF0KHBvcyl7XHJcbiAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XHJcbiAgfVxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCAkcGFkID0gcmVxdWlyZSgnLi8kLnN0cmluZy1wYWQnKTtcclxuJGRlZigkZGVmLlAsICdTdHJpbmcnLCB7XHJcbiAgbHBhZDogZnVuY3Rpb24gbHBhZChuKXtcclxuICAgIHJldHVybiAkcGFkKHRoaXMsIG4sIGFyZ3VtZW50c1sxXSwgdHJ1ZSk7XHJcbiAgfVxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCAkcGFkID0gcmVxdWlyZSgnLi8kLnN0cmluZy1wYWQnKTtcclxuJGRlZigkZGVmLlAsICdTdHJpbmcnLCB7XHJcbiAgcnBhZDogZnVuY3Rpb24gcnBhZChuKXtcclxuICAgIHJldHVybiAkcGFkKHRoaXMsIG4sIGFyZ3VtZW50c1sxXSwgZmFsc2UpO1xyXG4gIH1cclxufSk7IiwiLy8gSmF2YVNjcmlwdCAxLjYgLyBTdHJhd21hbiBhcnJheSBzdGF0aWNzIHNoaW1cclxudmFyICQgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgJGRlZiAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgJEFycmF5ICA9ICQuY29yZS5BcnJheSB8fCBBcnJheVxyXG4gICwgc3RhdGljcyA9IHt9O1xyXG5mdW5jdGlvbiBzZXRTdGF0aWNzKGtleXMsIGxlbmd0aCl7XHJcbiAgJC5lYWNoLmNhbGwoa2V5cy5zcGxpdCgnLCcpLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgaWYobGVuZ3RoID09IHVuZGVmaW5lZCAmJiBrZXkgaW4gJEFycmF5KXN0YXRpY3Nba2V5XSA9ICRBcnJheVtrZXldO1xyXG4gICAgZWxzZSBpZihrZXkgaW4gW10pc3RhdGljc1trZXldID0gcmVxdWlyZSgnLi8kLmN0eCcpKEZ1bmN0aW9uLmNhbGwsIFtdW2tleV0sIGxlbmd0aCk7XHJcbiAgfSk7XHJcbn1cclxuc2V0U3RhdGljcygncG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllcycsIDEpO1xyXG5zZXRTdGF0aWNzKCdpbmRleE9mLGV2ZXJ5LHNvbWUsZm9yRWFjaCxtYXAsZmlsdGVyLGZpbmQsZmluZEluZGV4LGluY2x1ZGVzJywgMyk7XHJcbnNldFN0YXRpY3MoJ2pvaW4sc2xpY2UsY29uY2F0LHB1c2gsc3BsaWNlLHVuc2hpZnQsc29ydCxsYXN0SW5kZXhPZiwnICtcclxuICAgICAgICAgICAncmVkdWNlLHJlZHVjZVJpZ2h0LGNvcHlXaXRoaW4sZmlsbCx0dXJuJyk7XHJcbiRkZWYoJGRlZi5TLCAnQXJyYXknLCBzdGF0aWNzKTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xyXG52YXIgJCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgSXRlcmF0b3JzICAgPSByZXF1aXJlKCcuLyQuaXRlcicpLkl0ZXJhdG9yc1xyXG4gICwgSVRFUkFUT1IgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcclxuICAsIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5XHJcbiAgLCBOb2RlTGlzdCAgICA9ICQuZy5Ob2RlTGlzdDtcclxuaWYoJC5GVyAmJiBOb2RlTGlzdCAmJiAhKElURVJBVE9SIGluIE5vZGVMaXN0LnByb3RvdHlwZSkpe1xyXG4gICQuaGlkZShOb2RlTGlzdC5wcm90b3R5cGUsIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XHJcbn1cclxuSXRlcmF0b3JzLk5vZGVMaXN0ID0gQXJyYXlWYWx1ZXM7IiwidmFyICRkZWYgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCAkdGFzayA9IHJlcXVpcmUoJy4vJC50YXNrJyk7XHJcbiRkZWYoJGRlZi5HICsgJGRlZi5CLCB7XHJcbiAgc2V0SW1tZWRpYXRlOiAgICR0YXNrLnNldCxcclxuICBjbGVhckltbWVkaWF0ZTogJHRhc2suY2xlYXJcclxufSk7IiwiLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxyXG52YXIgJCAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsICRkZWYgICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgaW52b2tlICAgID0gcmVxdWlyZSgnLi8kLmludm9rZScpXHJcbiAgLCBwYXJ0aWFsICAgPSByZXF1aXJlKCcuLyQucGFydGlhbCcpXHJcbiAgLCBuYXZpZ2F0b3IgPSAkLmcubmF2aWdhdG9yXHJcbiAgLCBNU0lFICAgICAgPSAhIW5hdmlnYXRvciAmJiAvTVNJRSAuXFwuLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXHJcbmZ1bmN0aW9uIHdyYXAoc2V0KXtcclxuICByZXR1cm4gTVNJRSA/IGZ1bmN0aW9uKGZuLCB0aW1lIC8qLCAuLi5hcmdzICovKXtcclxuICAgIHJldHVybiBzZXQoaW52b2tlKFxyXG4gICAgICBwYXJ0aWFsLFxyXG4gICAgICBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMiksXHJcbiAgICAgICQuaXNGdW5jdGlvbihmbikgPyBmbiA6IEZ1bmN0aW9uKGZuKVxyXG4gICAgKSwgdGltZSk7XHJcbiAgfSA6IHNldDtcclxufVxyXG4kZGVmKCRkZWYuRyArICRkZWYuQiArICRkZWYuRiAqIE1TSUUsIHtcclxuICBzZXRUaW1lb3V0OiAgd3JhcCgkLmcuc2V0VGltZW91dCksXHJcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoJC5nLnNldEludGVydmFsKVxyXG59KTsiLCJyZXF1aXJlKCcuL21vZHVsZXMvZXM1Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZScpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZScpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3RvcicpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5zdGF0aWNzJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcucmF3Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5vZicpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmNvcHktd2l0aGluJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZmlsbCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZpbmQnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hcCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnNldCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LndlYWstbWFwJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYud2Vhay1zZXQnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcuYXQnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcubHBhZCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy5ycGFkJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZScpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JqZWN0LnRvLWFycmF5Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zZXQudG8tanNvbicpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvanMuYXJyYXkuc3RhdGljcycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLnRpbWVycycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLmltbWVkaWF0ZScpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbW9kdWxlcy8kJykuY29yZTtcclxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgaXRlcmF0b3JTeW1ib2wgPVxuICAgIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZSgob3V0ZXJGbiB8fCBHZW5lcmF0b3IpLnByb3RvdHlwZSk7XG5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoXG4gICAgICBpbm5lckZuLCBzZWxmIHx8IG51bGwsXG4gICAgICBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSlcbiAgICApO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbmVyYXRvciA9IHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpO1xuICAgICAgdmFyIGNhbGxOZXh0ID0gc3RlcC5iaW5kKGdlbmVyYXRvciwgXCJuZXh0XCIpO1xuICAgICAgdmFyIGNhbGxUaHJvdyA9IHN0ZXAuYmluZChnZW5lcmF0b3IsIFwidGhyb3dcIik7XG5cbiAgICAgIGZ1bmN0aW9uIHN0ZXAobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUoaW5mby52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGluZm8udmFsdWUpLnRoZW4oY2FsbE5leHQsIGNhbGxUaHJvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FsbE5leHQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIiB8fFxuICAgICAgICAgICAgICAobWV0aG9kID09PSBcInRocm93XCIgJiYgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgLy8gQSByZXR1cm4gb3IgdGhyb3cgKHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyB0aHJvd1xuICAgICAgICAgICAgLy8gbWV0aG9kKSBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgaWYgKHJldHVybk1ldGhvZCkge1xuICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gocmV0dXJuTWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgYXJnKTtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmV0dXJuIG1ldGhvZCB0aHJldyBhbiBleGNlcHRpb24sIGxldCB0aGF0XG4gICAgICAgICAgICAgICAgLy8gZXhjZXB0aW9uIHByZXZhaWwgb3ZlciB0aGUgb3JpZ2luYWwgcmV0dXJuIG9yIHRocm93LlxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aCB0aGUgb3V0ZXIgcmV0dXJuLCBub3cgdGhhdCB0aGUgZGVsZWdhdGVcbiAgICAgICAgICAgICAgLy8gaXRlcmF0b3IgaGFzIGJlZW4gdGVybWluYXRlZC5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSxcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yLFxuICAgICAgICAgICAgYXJnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gTGlrZSByZXR1cm5pbmcgZ2VuZXJhdG9yLnRocm93KHVuY2F1Z2h0KSwgYnV0IHdpdGhvdXQgdGhlXG4gICAgICAgICAgICAvLyBvdmVyaGVhZCBvZiBhbiBleHRyYSBmdW5jdGlvbiBjYWxsLlxuICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERlbGVnYXRlIGdlbmVyYXRvciByYW4gYW5kIGhhbmRsZWQgaXRzIG93biBleGNlcHRpb25zIHNvXG4gICAgICAgICAgLy8gcmVnYXJkbGVzcyBvZiB3aGF0IHRoZSBtZXRob2Qgd2FzLCB3ZSBjb250aW51ZSBhcyBpZiBpdCBpc1xuICAgICAgICAgIC8vIFwibmV4dFwiIHdpdGggYW4gdW5kZWZpbmVkIGFyZy5cbiAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG4gICAgICAgICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkKSB7XG4gICAgICAgICAgICBjb250ZXh0LnNlbnQgPSBhcmc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBjb250ZXh0LnNlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBhcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmRlbGVnYXRlICYmIG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBkZWZpbmVHZW5lcmF0b3JNZXRob2QobWV0aG9kKSB7XG4gICAgR3BbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgfTtcbiAgfVxuICBkZWZpbmVHZW5lcmF0b3JNZXRob2QoXCJuZXh0XCIpO1xuICBkZWZpbmVHZW5lcmF0b3JNZXRob2QoXCJ0aHJvd1wiKTtcbiAgZGVmaW5lR2VuZXJhdG9yTWV0aG9kKFwicmV0dXJuXCIpO1xuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICB0aGlzLnNlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgLy8gUHJlLWluaXRpYWxpemUgYXQgbGVhc3QgMjAgdGVtcG9yYXJ5IHZhcmlhYmxlcyB0byBlbmFibGUgaGlkZGVuXG4gICAgICAvLyBjbGFzcyBvcHRpbWl6YXRpb25zIGZvciBzaW1wbGUgZ2VuZXJhdG9ycy5cbiAgICAgIGZvciAodmFyIHRlbXBJbmRleCA9IDAsIHRlbXBOYW1lO1xuICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCB0ZW1wTmFtZSA9IFwidFwiICsgdGVtcEluZGV4KSB8fCB0ZW1wSW5kZXggPCAyMDtcbiAgICAgICAgICAgKyt0ZW1wSW5kZXgpIHtcbiAgICAgICAgdGhpc1t0ZW1wTmFtZV0gPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG4gICAgICAgIHJldHVybiAhIWNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gIC8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuICAvLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXNcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2xpYi9iYWJlbC9wb2x5ZmlsbFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLWNvcmUvcG9seWZpbGxcIik7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgXCJmaWx0ZXJcIjoge1xuICAgICAgICAnc3VidHlwZSc6ICdidXknLFxuICAgICAgICAnc29ydCc6ICdjb3N0JyxcbiAgICAgICAgJ2RpcmVjdGlvbic6ICdhc2MnXG4gICAgfSxcbiAgICBcInZpZXdzXCI6IHtcbiAgICAgICAgJ21hcCc6IHtcbiAgICAgICAgICAgIHRleHQ6ICfQmtCw0YDRgtCwJyxcbiAgICAgICAgICAgIHZhbHVlOiAnbWFwJyxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhYmxlJzoge1xuICAgICAgICAgICAgdGV4dDogJ9Ch0L/QuNGB0L7QuicsXG4gICAgICAgICAgICB2YWx1ZTogJ3RhYmxlJyxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgJ2dyaWQnOiB7XG4gICAgICAgICAgICB0ZXh0OiAn0J/Qu9C40YLQutCwJyxcbiAgICAgICAgICAgIHZhbHVlOiAnZ3JpZCcsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwidHJhbnNhY3Rpb25zXCI6IHtcbiAgICAgICAgJ2J1eSc6IHtcbiAgICAgICAgICAgIG5hbWU6ICfQmtGD0L/QuNGC0YwnLFxuICAgICAgICAgICAgdHlwZTogJ2J1eScsXG4gICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgJ3JlbnQnOiB7XG4gICAgICAgICAgICBuYW1lOiAn0KHQvdGP0YLRjCcsXG4gICAgICAgICAgICB0eXBlOiAncmVudCcsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiYnVpbGRpbmdzXCI6IHtcbiAgICAgICAgJ25ldyc6IHtcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICd0eXBlJzogJ25ldydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2ZsYXQnOiB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnZmxhdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2hvdXNlJzoge1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICd0eXBlJzogJ2hvdXNlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY29tbWVyY2lhbCc6IHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdjb21tZXJjaWFsJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnbGFuZCc6IHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdsYW5kJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInNvcnRcIjoge1xuICAgICAgICBcInRhYmxlXCI6IHtcbiAgICAgICAgICAgICdyb29tcyc6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAn0JrQvtC70LjRh9C10YHRgtCy0YMg0LrQvtC80L3QsNGCJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3Jvb21zJyxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdhc2MnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2Zsb29yJzoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICfQrdGC0LDQttGDJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2Zsb29yJyxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdhc2MnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3NxdWFyZSc6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAn0J/Qu9C+0YnQsNC00LgnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnc3F1YXJlJyxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdhc2MnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2Nvc3QnOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ9Cm0LXQvdC1JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2Nvc3QnLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2FzYydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnc3F1YXJlX2xhbmQnOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICdzcXVhcmVfbGFuZCcsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnYXNjJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd0b3BfZmxvb3InOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICd0b3BfZmxvb3InLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2FzYydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJncmlkXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAn0JrQvtC70LjRh9C10YHRgtCy0YMg0LrQvtC80L3QsNGCJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3Jvb21zJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAn0K3RgtCw0LbRgycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmbG9vcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ9Cf0LvQvtGJ0LDQtNC4JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3NxdWFyZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ9Cm0LXQvdC1JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2Nvc3QnXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIFwic29ydHNcIiA6IHtcbiAgICAgICAgJ3Jvb21zJzoge1xuICAgICAgICAgICAgbmFtZTogJ9Ca0L7Qu9C40YfQtdGB0YLQstGDINC60L7QvNC90LDRgicsXG4gICAgICAgICAgICB2YWx1ZTogJ3Jvb21zJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2FzYydcbiAgICAgICAgfSxcbiAgICAgICAgJ2Zsb29yJzoge1xuICAgICAgICAgICAgbmFtZTogJ9Ct0YLQsNC20YMnLFxuICAgICAgICAgICAgdmFsdWU6ICdmbG9vcicsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdhc2MnXG4gICAgICAgIH0sXG4gICAgICAgICdzcXVhcmUnOiB7XG4gICAgICAgICAgICBuYW1lOiAn0J/Qu9C+0YnQsNC00LgnLFxuICAgICAgICAgICAgdmFsdWU6ICdzcXVhcmUnLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnYXNjJ1xuICAgICAgICB9LFxuICAgICAgICAnY29zdCc6IHtcbiAgICAgICAgICAgIG5hbWU6ICfQptC10L3QtScsXG4gICAgICAgICAgICB2YWx1ZTogJ2Nvc3QnLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnYXNjJ1xuICAgICAgICB9LFxuICAgICAgICAnc3F1YXJlX2xhbmQnOiB7XG4gICAgICAgICAgICB2YWx1ZTogJ3NxdWFyZV9sYW5kJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2FzYydcbiAgICAgICAgfSxcbiAgICAgICAgJ3RvcF9mbG9vcic6IHtcbiAgICAgICAgICAgIHZhbHVlOiAndG9wX2Zsb29yJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2FzYydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJ0YWJsZVwiOiB7XG4gICAgICAgIFwiaGVhZGVyc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ9Ck0L7RgtC+JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3NlYXJjaF9fdGFibGUtbGluZS1ib3gtaW1nJyxcbiAgICAgICAgICAgICAgICBzb3J0OiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAn0JrQvtC80L3QsNGCJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJycsXG4gICAgICAgICAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzb3J0RmllbGQ6ICdyb29tcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ9CQ0LTRgNC10YEnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnc2VhcmNoX190YWJsZS1saW5lLWJveC1hZGRyZXNzJyxcbiAgICAgICAgICAgICAgICBzb3J0OiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAn0K3RgtCw0LYnLFxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWw6ICfQnNCw0YLQtdGA0LjQsNC7JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3NlYXJjaF9fdGFibGUtbGluZS1ib3gtZmxvb3InLFxuICAgICAgICAgICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc29ydEZpZWxkOiAnZmxvb3InXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICfQn9C70L7RidCw0LTRjCcsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICcnLFxuICAgICAgICAgICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc29ydEZpZWxkOiAnc3F1YXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAn0KLQuNC/INC20LjQu9GM0Y8nLFxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWw6ICfQk9C+0LQg0YHQtNCw0YfQuCcsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdzZWFyY2hfX3RhYmxlLWxpbmUtYm94LXR5cGUnLFxuICAgICAgICAgICAgICAgIHNvcnQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICfQptC10L3QsCwg0YAuJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3NlYXJjaF9fdGFibGUtbGluZS1ib3gtY29zdCcsXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbDogJ9Cm0LXQvdCwINC30LAg0Lw8c3VwPjI8L3N1cD4nLFxuICAgICAgICAgICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc29ydEZpZWxkOiAnY29zdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAgJ3N1YnR5cGUnOiAnYnV5JyxcbiAgICAnc29ydHZhbHVlJzogJ2Nvc3QnLFxuICAgICdkaXJlY3Rpb24nOiAnYXNjJyxcbiAgICAndmlldyc6ICdncmlkJyxcbiAgICAnYnVpbGRpbmcnOiAnbmV3J1xufSIsImNvbnN0IFRJTUVPVVQgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgSU5JVCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBEQVRBU0VSVklDRSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBWSUVXQ09ORklHID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IFJPT1RTQ09QRSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBTQ0UgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgQ09NUE9ORU5UU0VSVklDRSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBMT0NBVElPTlNFUlZJQ0UgPSBuZXcgV2Vha01hcCgpO1xuXG4vKipcbiAqIFZpZXdNb2RhbFxuICovXG52YXIgdm0gPSB7fTtcblxuZXhwb3J0IGNsYXNzIEFwcENvbnRyb2xsZXIge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3RvcigkdGltZW91dCwgJHNjZSwgJHJvb3RTY29wZSwgYXBwVmlld0NvbmZpZywgZGF0YVNlcnZpY2UsIGNvbXBvbmVudFNlcnZpY2UsIGxvY2F0aW9uU2VydmljZSkge1xuICAgICAgICBUSU1FT1VULnNldCh0aGlzLCAkdGltZW91dCk7XG4gICAgICAgIERBVEFTRVJWSUNFLnNldCh0aGlzLCBkYXRhU2VydmljZSk7XG4gICAgICAgIFZJRVdDT05GSUcuc2V0KHRoaXMsIGFwcFZpZXdDb25maWcpO1xuICAgICAgICBDT01QT05FTlRTRVJWSUNFLnNldCh0aGlzLCBjb21wb25lbnRTZXJ2aWNlKTtcbiAgICAgICAgTE9DQVRJT05TRVJWSUNFLnNldCh0aGlzLCBsb2NhdGlvblNlcnZpY2UpO1xuICAgICAgICBST09UU0NPUEUuc2V0KHRoaXMsICRyb290U2NvcGUpO1xuICAgICAgICBTQ0Uuc2V0KHRoaXMsICRzY2UpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVmlld01vZGFsIGluaXRcbiAgICAgICAgICogQHR5cGUge01hcENvbnRyb2xsZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB2bSA9IHRoaXM7XG5cbiAgICAgICAgSU5JVC5zZXQodGhpcywgKCkgPT4ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgZGF0YSBmcm9tIERhdGFTZXJ2aWNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZtLnRhYmxlID0gREFUQVNFUlZJQ0UuZ2V0KHRoaXMpLmdldERhdGEoJ3RhYmxlJyk7XG4gICAgICAgICAgICB2bS50YWJsZUhlYWRlcnMgPSBEQVRBU0VSVklDRS5nZXQodGhpcykuZ2V0RGF0YSgndGFibGVIZWFkZXJzJyk7XG4gICAgICAgICAgICB2bS5ncmlkU29ydHMgPSBEQVRBU0VSVklDRS5nZXQodGhpcykuZ2V0RGF0YSgnZ3JpZFNvcnRzJyk7XG4gICAgICAgICAgICB2bS5ncmlkID0gREFUQVNFUlZJQ0UuZ2V0KHRoaXMpLmdldERhdGEoJ2dyaWQnKTtcbiAgICAgICAgICAgIHZtLm1hcCA9IERBVEFTRVJWSUNFLmdldCh0aGlzKS5nZXREYXRhKCdtYXAnKTtcbiAgICAgICAgICAgIHZtLnRyYW5zYWN0aW9ucyA9IERBVEFTRVJWSUNFLmdldCh0aGlzKS5nZXREYXRhKCd0cmFuc2FjdGlvbnMnKTtcbiAgICAgICAgICAgIHZtLmJ1aWxkaW5ncyA9IERBVEFTRVJWSUNFLmdldCh0aGlzKS5nZXREYXRhKCdidWlsZGluZ3MnKTtcbiAgICAgICAgICAgIHZtLmJ1aWxkaW5nID0gREFUQVNFUlZJQ0UuZ2V0KHRoaXMpLmdldERhdGEoJ2J1aWxkaW5nJyk7XG4gICAgICAgICAgICB2bS52aWV3cyA9IERBVEFTRVJWSUNFLmdldCh0aGlzKS5nZXREYXRhKCd2aWV3cycpO1xuICAgICAgICAgICAgdm0udmlldyA9IERBVEFTRVJWSUNFLmdldCh0aGlzKS5nZXREYXRhKCd2aWV3Jyk7XG4gICAgICAgICAgICB2bS5zb3J0cyA9IERBVEFTRVJWSUNFLmdldCh0aGlzKS5nZXREYXRhKCdzb3J0cycpO1xuXG4gICAgICAgICAgICB2bS5mbG9hdFRoZWFkU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nVG9wOiAxMjAsXG4gICAgICAgICAgICAgICAgdXNlQWJzb2x1dGVQb3NpdGlvbmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZW5hYmxlQXJpYTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvUmVmbG93OiB0cnVlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEV2ZW50cyBsaXN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFJPT1RTQ09QRS5nZXQodGhpcykuJG9uKCdmaWx0ZXJVcGRhdGUnLCAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBMT0NBVElPTlNFUlZJQ0UuZ2V0KHRoaXMpLnNldChkYXRhKTtcbiAgICAgICAgICAgICAgICBST09UU0NPUEUuZ2V0KHRoaXMpLiRhcHBseUFzeW5jKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgUk9PVFNDT1BFLmdldCh0aGlzKS4kb24oJ3RyYW5zYWN0aW9uVHlwZVVwZGF0ZScsIChldmVudCwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHZtLnRyYW5zYWN0aW9ucyA9IERBVEFTRVJWSUNFLmdldCh0aGlzKS5nZXREYXRhKCd0cmFuc2FjdGlvbnMnKTtcbiAgICAgICAgICAgICAgICBST09UU0NPUEUuZ2V0KHRoaXMpLiRhcHBseUFzeW5jKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgUk9PVFNDT1BFLmdldCh0aGlzKS4kb24oJ2RhdGFVcGRhdGUnLCAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB2bS5idWlsZGluZ3MgPSBEQVRBU0VSVklDRS5nZXQodGhpcykuZ2V0RGF0YSgnYnVpbGRpbmdzJyk7XG4gICAgICAgICAgICAgICAgdm0uYnVpbGRpbmcgPSBEQVRBU0VSVklDRS5nZXQodGhpcykuZ2V0RGF0YSgnYnVpbGRpbmcnKTtcblxuICAgICAgICAgICAgICAgIHZtLnZpZXdzID0gREFUQVNFUlZJQ0UuZ2V0KHRoaXMpLmdldERhdGEoJ3ZpZXdzJyk7XG4gICAgICAgICAgICAgICAgdm0udmlldyA9IERBVEFTRVJWSUNFLmdldCh0aGlzKS5nZXREYXRhKCd2aWV3Jyk7XG4gICAgICAgICAgICAgICAgdm1bdm0udmlld10gPSBEQVRBU0VSVklDRS5nZXQodGhpcykuZ2V0RGF0YSh2bS52aWV3KTtcbiAgICAgICAgICAgICAgICB2bS50YWJsZUhlYWRlcnMgPSBEQVRBU0VSVklDRS5nZXQodGhpcykuZ2V0RGF0YSgndGFibGVIZWFkZXJzJyk7XG4gICAgICAgICAgICAgICAgdm0uZ3JpZFNvcnRzID0gREFUQVNFUlZJQ0UuZ2V0KHRoaXMpLmdldERhdGEoJ2dyaWRTb3J0cycpO1xuXG4gICAgICAgICAgICAgICAgUk9PVFNDT1BFLmdldCh0aGlzKS4kYXBwbHlBc3luYygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFJPT1RTQ09QRS5nZXQodGhpcykuJG9uKCdidWlsZGluZ1R5cGVVcGRhdGUnLCAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB2bS5idWlsZGluZ3MgPSBEQVRBU0VSVklDRS5nZXQodGhpcykuZ2V0RGF0YSgnYnVpbGRpbmdzJyk7XG4gICAgICAgICAgICAgICAgdm0uYnVpbGRpbmcgPSBEQVRBU0VSVklDRS5nZXQodGhpcykuZ2V0RGF0YSgnYnVpbGRpbmcnKTtcblxuICAgICAgICAgICAgICAgIFJPT1RTQ09QRS5nZXQodGhpcykuJGFwcGx5QXN5bmMoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBST09UU0NPUEUuZ2V0KHRoaXMpLiRvbigndmlld1R5cGVVcGRhdGUnLCAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB2bS52aWV3cyA9IERBVEFTRVJWSUNFLmdldCh0aGlzKS5nZXREYXRhKCd2aWV3cycpO1xuICAgICAgICAgICAgICAgIHZtLnZpZXcgPSBEQVRBU0VSVklDRS5nZXQodGhpcykuZ2V0RGF0YSgndmlldycpO1xuICAgICAgICAgICAgICAgIHZtW3ZtLnZpZXddID0gREFUQVNFUlZJQ0UuZ2V0KHRoaXMpLmdldERhdGEodm0udmlldyk7XG4gICAgICAgICAgICAgICAgdm0udGFibGVIZWFkZXJzID0gREFUQVNFUlZJQ0UuZ2V0KHRoaXMpLmdldERhdGEoJ3RhYmxlSGVhZGVycycpO1xuICAgICAgICAgICAgICAgIHZtLmdyaWRTb3J0cyA9IERBVEFTRVJWSUNFLmdldCh0aGlzKS5nZXREYXRhKCdncmlkU29ydHMnKTtcblxuICAgICAgICAgICAgICAgIFJPT1RTQ09QRS5nZXQodGhpcykuJGFwcGx5QXN5bmMoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNldCB2bSB1cGRhdGUgb24gbG9jYXRpb24gY2FobmdlIGV2ZW50XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHdpbmRvdy5vbmhhc2hjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdm0udXBkYXRlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2bS51cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIElOSVQuZ2V0KHRoaXMpKCk7XG4gICAgfVxuXG4gICAgdHJ1c3REYW5nZXJvdXNTbmlwcGV0KHNuaXBwZXQpIHtcbiAgICAgICAgcmV0dXJuIFNDRS5nZXQodGhpcykudHJ1c3RBc0h0bWwoc25pcHBldCk7XG4gICAgfVxuXG4gICAgc2VsZWN0Vmlld1R5cGUodHlwZSkge1xuICAgICAgICBEQVRBU0VSVklDRS5nZXQodGhpcykudmlld1R5cGUodHlwZSk7XG4gICAgfVxuXG4gICAgc2VsZWN0VHJhbnNhY3Rpb25UeXBlKHR5cGUpIHtcbiAgICAgICAgREFUQVNFUlZJQ0UuZ2V0KHRoaXMpLnRyYW5zYWN0aW9uVHlwZSh0eXBlKTtcbiAgICB9XG5cbiAgICBzZWxlY3RCdWlsZGluZ1R5cGUodHlwZSkge1xuICAgICAgICBEQVRBU0VSVklDRS5nZXQodGhpcykuYnVpbGRpbmdUeXBlKHR5cGUpO1xuICAgIH1cblxuICAgIHNvcnQocGFyYW1zKSB7XG4gICAgICAgIERBVEFTRVJWSUNFLmdldCh0aGlzKS5zb3J0KHBhcmFtcyk7XG4gICAgfVxuXG4gICAgZ29QYWdlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSBcIi4uLlwiKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICAgICAgZGF0YVsncGFnZSddID0gdmFsdWU7XG4gICAgICAgICAgICBEQVRBU0VSVklDRS5nZXQodm0pLnVwZGF0ZUJ1aWxkaW5nRmlsdGVyKHZtLmJ1aWxkaW5nLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvTGluayh2YWx1ZSkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGlzRmF2b3JpdGUodWlkKSB7XG4gICAgICAgIHJldHVybiBEQVRBU0VSVklDRS5nZXQodm0pLmlzRmF2b3JpdGUodWlkKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgY3VyZW50IHVybFxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHNlYXJjaCA9IExPQ0FUSU9OU0VSVklDRS5nZXQodm0pLmdldCgpO1xuXG4gICAgICAgIERBVEFTRVJWSUNFLmdldCh2bSkudXBkYXRlQnVpbGRpbmdGaWx0ZXJHbG9iYWwoc2VhcmNoLnR5cGUsIHNlYXJjaCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgdmlld01vZGVsIHNhdGVzIHdpdGggZGF0YSB0YWtlbiBpbiB1cmxcbiAgICAgICAgICovXG4gICAgICAgIHZtLnNvcnQoe3NvcnQ6IHNlYXJjaC5zb3J0LCBkaXJlY3Rpb246IHNlYXJjaC5kaXJlY3Rpb259KTtcbiAgICAgICAgdm0uc2VsZWN0Vmlld1R5cGUoc2VhcmNoLnZpZXcpO1xuICAgICAgICB2bS5zZWxlY3RCdWlsZGluZ1R5cGUoc2VhcmNoLnR5cGUpO1xuICAgICAgICB2bS5zZWxlY3RUcmFuc2FjdGlvblR5cGUoc2VhcmNoLnN1YnR5cGUpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgZGF0YSBpbiBjb21wb25lbnRzXG4gICAgICAgICAqL1xuICAgICAgICBDT01QT05FTlRTRVJWSUNFLmdldCh2bSkudXBkYXRlKHNlYXJjaCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgdmlzdWFsIGNvbXBvbmVudHMgZmluaXNoJyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb2FkXG4gICAgICAgICAqL1xuICAgICAgICBEQVRBU0VSVklDRS5nZXQodm0pLmxvYWREYXRhKCk7XG4gICAgfVxufVxuXG4iLCJjb25zdCBJTklUID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IFJPT1RTQ09QRSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBUSU1FT1VUID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IE1BUFNFUlZJQ0UgPSBuZXcgV2Vha01hcCgpO1xuXG4vKipcbiAqIFZpZXdNb2RhbFxuICovXG52YXIgdm0gPSB7fTtcblxuZXhwb3J0IGNsYXNzIE1hcENvbnRyb2xsZXIge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkdGltZW91dCxtYXBTZXJ2aWNlKSB7XG4gICAgICAgIFJPT1RTQ09QRS5zZXQodGhpcywgJHJvb3RTY29wZSk7XG4gICAgICAgIFRJTUVPVVQuc2V0KHRoaXMsICR0aW1lb3V0KTtcbiAgICAgICAgTUFQU0VSVklDRS5zZXQodGhpcywgbWFwU2VydmljZSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWaWV3TW9kYWwgaW5pdFxuICAgICAgICAgKiBAdHlwZSB7TWFwQ29udHJvbGxlcn1cbiAgICAgICAgICovXG4gICAgICAgIHZtID0gdGhpcztcblxuICAgICAgICBJTklULnNldCh0aGlzLCAoKSA9PiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEV2ZW50cyBsaXN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFJPT1RTQ09QRS5nZXQodGhpcykuJG9uKCd1cGRhdGVNYXAnLCAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWFwOiB0cnkgdXBkYXRlJyk7XG4gICAgICAgICAgICAgICAgdm0uc2hvd01hcCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWFwOiB1cGRhdGluZycpO1xuICAgICAgICAgICAgICAgICAgICB2bS51cGRhdGVNYXAoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZtLnJlc2l6ZU1hcCgpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFJPT1RTQ09QRS5nZXQodGhpcykuJGFwcGx5QXN5bmMoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBST09UU0NPUEUuZ2V0KHRoaXMpLiRvbignc2hvd01hcCcsIChldmVudCwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHZtLnNob3dNYXAoKTtcbiAgICAgICAgICAgICAgICBST09UU0NPUEUuZ2V0KHRoaXMpLiRhcHBseUFzeW5jKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgUk9PVFNDT1BFLmdldCh0aGlzKS4kb24oJ2hpZGVNYXAnLCAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB2bS5oaWRlTWFwKCk7XG4gICAgICAgICAgICAgICAgUk9PVFNDT1BFLmdldCh0aGlzKS4kYXBwbHlBc3luYygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBJTklULmdldCh0aGlzKSgpO1xuICAgIH1cblxuICAgIGhpZGVNYXAoKSB7XG4gICAgICAgIE1BUFNFUlZJQ0UuZ2V0KHZtKS5oaWRlTWFwKCk7XG4gICAgfVxuXG4gICAgc2hvd01hcCgpIHtcbiAgICAgICAgcmV0dXJuIHZtLmxvYWRNYXAoKS50aGVuKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNvbHZlKTtcblxuICAgICAgICAgICAgTUFQU0VSVklDRS5nZXQodm0pLnNob3dNYXAoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTWFwKGRhdGEpIHtcbiAgICAgICAgTUFQU0VSVklDRS5nZXQodm0pLnVwZGF0ZU1hcChkYXRhKTtcbiAgICB9XG5cbiAgICByZXNpemVNYXAoKSB7XG4gICAgICAgIE1BUFNFUlZJQ0UuZ2V0KHZtKS5yZXNpemVNYXAoKTtcbiAgICB9XG5cbiAgICBsb2FkTWFwKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBmdW5jdGlvbiBhY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYoTUFQU0VSVklDRS5nZXQodm0pLmlzTG9hZCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCdtYXA6IGlzIGxvYWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL0xPQUQgTUFQXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXA6IHRyeSBsb2FkJyk7XG4gICAgICAgICAgICAgICAgICAgIE1BUFNFUlZJQ0UuZ2V0KHZtKS5sb2FkTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgIFRJTUVPVVQuZ2V0KHZtKSgoKSA9PiB7IGFjdGlvbigpOyB9LCA1MCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJjb25zdCBUSU1FT1VUID0gbmV3IFdlYWtNYXAoKTtcbnZhciBzZWxmID0ge307XG5cbmV4cG9ydCBjbGFzcyBGYXZvcml0ZURpcmVjdGl2ZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0KSB7XG4gICAgICAgIFRJTUVPVVQuc2V0KHRoaXMsICR0aW1lb3V0KTtcblxuICAgICAgICBzZWxmID0gdGhpcztcbiAgICB9XG5cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50KSB7XG4gICAgICAgIFRJTUVPVVQuZ2V0KHNlbGYpKCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5mYXZvcml0ZS51cGRhdGUoZWxlbWVudCk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbn1cbiIsImNvbnN0IFRJTUVPVVQgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgREFUQVNFUlZJQ0UgPSBuZXcgV2Vha01hcCgpO1xudmFyIHNlbGYgPSB7fTtcblxuZXhwb3J0IGNsYXNzIEZpbHRlckRpcmVjdGl2ZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0LCBkYXRhU2VydmljZSkge1xuICAgICAgICBUSU1FT1VULnNldCh0aGlzLCAkdGltZW91dCk7XG4gICAgICAgIERBVEFTRVJWSUNFLnNldCh0aGlzLCBkYXRhU2VydmljZSk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSB7XG4gICAgICAgICAgICBmaWx0ZXJGaWVsZDogJ0AnLFxuICAgICAgICAgICAgZmlsdGVyVmFsdWU6ICdAJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgIH1cblxuICAgIGxpbmsoc2NvcGUpIHtcbiAgICAgICAgVElNRU9VVC5nZXQoc2VsZikoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgREFUQVNFUlZJQ0UuZ2V0KHNlbGYpLnVwZGF0ZUZpbHRlcihzY29wZS5maWx0ZXJGaWVsZCwgc2NvcGUuZmlsdGVyVmFsdWUpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG59XG4iLCJjb25zdCBUSU1FT1VUID0gbmV3IFdlYWtNYXAoKTtcbnZhciBzZWxmID0ge307XG5cbmV4cG9ydCBjbGFzcyBQb3B1cERpcmVjdGl2ZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0KSB7XG4gICAgICAgIFRJTUVPVVQuc2V0KHRoaXMsICR0aW1lb3V0KTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHtcbiAgICAgICAgICAgIHBvcHVwVGV4dDogJ0AnLFxuICAgICAgICAgICAgcG9wdXBQb3NpdGlvbjogJ0AnXG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgfVxuXG4gICAgbGluayhzY29wZSwgZWxlbWVudCkge1xuICAgICAgICBUSU1FT1VULmdldChzZWxmKSgoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucG9wdXAoZWxlbWVudCwgc2NvcGUucG9wdXBUZXh0LCBzY29wZS5wb3B1cFBvc2l0aW9uKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxufVxuIiwiY29uc3QgREFUQVNFUlZJQ0UgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgQ0FDSEVTRVJWSUNFID0gbmV3IFdlYWtNYXAoKTtcbnZhciBzZWxmID0ge307XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RvckRpcmVjdGl2ZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKGRhdGFTZXJ2aWNlLCBjYWNoZVNlcnZpY2UpIHtcbiAgICAgICAgREFUQVNFUlZJQ0Uuc2V0KHRoaXMsIGRhdGFTZXJ2aWNlKTtcbiAgICAgICAgQ0FDSEVTRVJWSUNFLnNldCh0aGlzLCBjYWNoZVNlcnZpY2UpO1xuICAgICAgICB0aGlzLnNjb3BlID0ge1xuICAgICAgICAgICAgZmlsdGVyRmllbGQ6ICdAJyxcbiAgICAgICAgICAgIHR5cGVPZkJ1aWxkaW5nOiAnQCdcbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmID0gdGhpcztcbiAgICB9XG5cbiAgICAvLyBvcHRpb25hbCBjb21waWxlIGZ1bmN0aW9uXG4gICAgLy9jb21waWxlKHRFbGVtZW50KSB7XG4gICAgLy8gICAgdEVsZW1lbnQuY3NzKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgIC8vfVxuXG4gICAgLy8gb3B0aW9uYWwgbGluayBmdW5jdGlvblxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQpIHtcbiAgICAgICAgQ0FDSEVTRVJWSUNFLmdldChzZWxmKS5jb21wb25lbnRzLnB1c2goe1xuICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICAgIHR5cGU6ICdzZWxlY3RvcicsXG4gICAgICAgICAgICB0eXBlT2ZCdWlsZGluZzogc2NvcGUudHlwZU9mQnVpbGRpbmcsXG4gICAgICAgICAgICBmaWx0ZXJGaWVsZDogc2NvcGUuZmlsdGVyRmllbGRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChlbGVtZW50KS5jaG9zZW4oe3dpZHRoOiAnMTAwJScsIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMTB9KTtcblxuICAgICAgICAkKGVsZW1lbnQpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZ0LCBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuc2VsZWN0ZWQgPT0gJ2FueScpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RBbnkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnb3B0aW9uW3ZhbHVlPVwiYW55XCJdJywgZWxlbWVudCkucHJvcCgnc2VsZWN0ZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS50cmlnZ2VyKCdjaG9zZW46dXBkYXRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy5kZXNlbGVjdGVkID09ICdhbnknKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0QW55KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkKFwib3B0aW9uOnNlbGVjdGVkXCIsIGVsZW1lbnQpLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KS5nZXQoKS5qb2luKFwiLFwiKSA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbnkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNlbGVjdEFueSgpIHtcbiAgICAgICAgICAgICAgICAkKCdvcHRpb24nLCBlbGVtZW50KS5wcm9wKCdzZWxlY3RlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAkKCdvcHRpb25bdmFsdWU9XCJhbnlcIl0nLCBlbGVtZW50KS5wcm9wKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkudHJpZ2dlcignY2hvc2VuOnVwZGF0ZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXBwbHlGaWx0ZXIoZXZ0LCBwYXJhbXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy9GSUxURVIgRlVOQ1RJT05TXG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5RmlsdGVyKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgIGRhdGFbc2NvcGUuZmlsdGVyRmllbGRdID0gICQoXCJvcHRpb246c2VsZWN0ZWRcIiwgZWxlbWVudCkubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVxuICAgICAgICAgICAgfSkuZ2V0KCkuam9pbihcIixcIik7XG4gICAgICAgICAgICBEQVRBU0VSVklDRS5nZXQoc2VsZikudXBkYXRlQnVpbGRpbmdGaWx0ZXIoc2NvcGUudHlwZU9mQnVpbGRpbmcsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiY29uc3QgREFUQVNFUlZJQ0UgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgQ0FDSEVTRVJWSUNFID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IFRJTUVPVVQgPSBuZXcgV2Vha01hcCgpO1xudmFyIHNlbGYgPSB7fTtcblxuZXhwb3J0IGNsYXNzIFNsaWRlckRpcmVjdGl2ZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0ICxkYXRhU2VydmljZSwgY2FjaGVTZXJ2aWNlKSB7XG4gICAgICAgIERBVEFTRVJWSUNFLnNldCh0aGlzLCBkYXRhU2VydmljZSk7XG4gICAgICAgIENBQ0hFU0VSVklDRS5zZXQodGhpcywgY2FjaGVTZXJ2aWNlKTtcbiAgICAgICAgVElNRU9VVC5zZXQodGhpcywgJHRpbWVvdXQpO1xuICAgICAgICB0aGlzLnNjb3BlID0ge1xuICAgICAgICAgICAgZmlsdGVyRmllbGQ6ICdAJyxcbiAgICAgICAgICAgIHZhbHVlOiAnQCcsXG4gICAgICAgICAgICByYW5nZTogJ0AnLFxuICAgICAgICAgICAgcG9zdGZpeDogJ0AnLFxuICAgICAgICAgICAgdHlwZU9mQnVpbGRpbmc6ICdAJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgIH1cblxuICAgIC8vIG9wdGlvbmFsIGxpbmsgZnVuY3Rpb25cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBzY29wZS52YWx1ZS5zcGxpdCgnOycpO1xuICAgICAgICB2YXIgcmFuZ2VzID0gc2NvcGUucmFuZ2Uuc3BsaXQoJzsnKTtcbiAgICAgICAgdmFyIHNsaWRlciA9IHt9O1xuICAgICAgICB2YXIgYmVmb3JlSW5wdXQgPSAkKCcuYmVmb3JlJywgJChlbGVtZW50KS5wYXJlbnQoKSk7XG4gICAgICAgIHZhciBhZnRlcklucHV0ID0gJCgnLmFmdGVyJywgJChlbGVtZW50KS5wYXJlbnQoKSk7XG5cbiAgICAgICAgLy9iZWZvcmVJbnB1dCDRjdGC0L4g0L/QtdGA0LLRi9C5IGlucHV0INCyINC60L7RgtC+0YDRi9C5INCy0LLQvtC00LjRgtGB0Y8gbWluUHJpY2VcbiAgICAgICAgLy/RgtCw0Log0LbQtSDQvdGD0LbQvdC+INC+0L/QuNGB0LDRgtGMINC4INC00LvRjyDQstGC0L7RgNC+0LPQviDQuNC90L/Rg9GC0LAg0YEg0YfRg9GC0Ywg0LTRgNGD0LPQuNC80Lgg0LTQsNC90L3Ri9C80LhcblxuICAgICAgICBiZWZvcmVJbnB1dC5jaGFuZ2UoKCkgPT4ge1xuICAgICAgICAgICAgdmFyIGFmdGVyID0gcGFyc2VJbnQoYWZ0ZXJJbnB1dC52YWwoKSk7XG4gICAgICAgICAgICB2YXIgYmVmb3JlID0gcGFyc2VJbnQoYmVmb3JlSW5wdXQudmFsKCkpO1xuICAgICAgICAgICAgaWYgKGJlZm9yZSA8IHBhcnNlSW50KHZhbHVlc1swXSkpIHtcbiAgICAgICAgICAgICAgICBiZWZvcmUgPSB2YWx1ZXNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmVmb3JlID4gcGFyc2VJbnQodmFsdWVzWzFdKSkge1xuICAgICAgICAgICAgICAgIGJlZm9yZSA9IHZhbHVlc1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiZWZvcmUgPiBhZnRlcikge1xuICAgICAgICAgICAgICAgIGJlZm9yZSA9IGFmdGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2xpZGVyLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgZnJvbTogYmVmb3JlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWZ0ZXJJbnB1dC5jaGFuZ2UoKCkgPT4ge1xuICAgICAgICAgICAgdmFyIGFmdGVyID0gcGFyc2VJbnQoYWZ0ZXJJbnB1dC52YWwoKSk7XG4gICAgICAgICAgICB2YXIgYmVmb3JlID0gcGFyc2VJbnQoYmVmb3JlSW5wdXQudmFsKCkpO1xuICAgICAgICAgICAgaWYgKGFmdGVyID4gcGFyc2VJbnQodmFsdWVzWzFdKSkge1xuICAgICAgICAgICAgICAgIGFmdGVyID0gdmFsdWVzWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFmdGVyIDwgcGFyc2VJbnQodmFsdWVzWzBdKSkge1xuICAgICAgICAgICAgICAgIGFmdGVyID0gdmFsdWVzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFmdGVyIDwgYmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgYWZ0ZXIgPSBiZWZvcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzbGlkZXIudXBkYXRlKHtcbiAgICAgICAgICAgICAgICB0bzogYWZ0ZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL1VJIEZVTkNUSU9OU1xuICAgICAgICBUSU1FT1VULmdldChzZWxmKSgoKSA9PiB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmlvblJhbmdlU2xpZGVyKHtcbiAgICAgICAgICAgICAgICBtaW46ICt2YWx1ZXNbMF0sXG4gICAgICAgICAgICAgICAgbWF4OiArdmFsdWVzWzFdLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZG91YmxlXCIsXG4gICAgICAgICAgICAgICAgcG9zdGZpeDogXCIgXCIgKyBzY29wZS5wb3N0Zml4LFxuICAgICAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgICAgICAgZm9yY2VfZWRnZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgZnJvbTogK3Jhbmdlc1swXSxcbiAgICAgICAgICAgICAgICB0bzogK3Jhbmdlc1sxXSxcbiAgICAgICAgICAgICAgICBvbkZpbmlzaDogYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGx5RmlsdGVyKGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdGFydDogYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGx5RmlsdGVyKGEsICdzdGFydCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6IGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcHBseUZpbHRlcihhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2xpZGVyID0gJChlbGVtZW50KS5kYXRhKFwiaW9uUmFuZ2VTbGlkZXJcIik7XG5cbiAgICAgICAgICAgIENBQ0hFU0VSVklDRS5nZXQoc2VsZikuY29tcG9uZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgICAgIHNsaWRlcjogJChlbGVtZW50KS5kYXRhKFwiaW9uUmFuZ2VTbGlkZXJcIiksXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NsaWRlcicsXG4gICAgICAgICAgICAgICAgdHlwZU9mQnVpbGRpbmc6IHNjb3BlLnR5cGVPZkJ1aWxkaW5nLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5TWluOiBzY29wZS5maWx0ZXJGaWVsZCArICdfbWluJyxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU1heDogc2NvcGUuZmlsdGVyRmllbGQgKyAnX21heCcsXG4gICAgICAgICAgICAgICAgZmlsdGVyRmllbGQ6IHNjb3BlLmZpbHRlckZpZWxkLFxuICAgICAgICAgICAgICAgIGJlZm9yZUlucHV0OiBiZWZvcmVJbnB1dCxcbiAgICAgICAgICAgICAgICBhZnRlcklucHV0OiBhZnRlcklucHV0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9GSUxURVIgRlVOQ1RJT05TXG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5RmlsdGVyKGEsIHN0YXRlKSB7XG4gICAgICAgICAgICBiZWZvcmVJbnB1dC52YWwoYS5mcm9tKTtcbiAgICAgICAgICAgIGFmdGVySW5wdXQudmFsKGEudG8pO1xuXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICAgICAgZGF0YVtzY29wZS5maWx0ZXJGaWVsZCArICdfbWluJ10gPSBhLmZyb207XG4gICAgICAgICAgICBkYXRhW3Njb3BlLmZpbHRlckZpZWxkICsgJ19tYXgnXSA9IGEudG87XG5cbiAgICAgICAgICAgIERBVEFTRVJWSUNFLmdldChzZWxmKS51cGRhdGVCdWlsZGluZ0ZpbHRlcihzY29wZS50eXBlT2ZCdWlsZGluZywgZGF0YSwgIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImNvbnN0IERBVEFTRVJWSUNFID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IENBQ0hFU0VSVklDRSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBUSU1FT1VUID0gbmV3IFdlYWtNYXAoKTtcbnZhciBzZWxmID0ge307XG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVEaXJlY3RpdmUge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3RvcigkdGltZW91dCAsZGF0YVNlcnZpY2UsIGNhY2hlU2VydmljZSkge1xuICAgICAgICBEQVRBU0VSVklDRS5zZXQodGhpcywgZGF0YVNlcnZpY2UpO1xuICAgICAgICBDQUNIRVNFUlZJQ0Uuc2V0KHRoaXMsIGNhY2hlU2VydmljZSk7XG4gICAgICAgIFRJTUVPVVQuc2V0KHRoaXMsICR0aW1lb3V0KTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHtcbiAgICAgICAgICAgIHZhbHVlczogJ0AnLFxuICAgICAgICAgICAgZmlsdGVyRmllbGQ6ICdAJyxcbiAgICAgICAgICAgIHR5cGVPZkJ1aWxkaW5nOiAnQCdcbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmID0gdGhpcztcbiAgICB9XG5cbiAgICAvLyBvcHRpb25hbCBsaW5rIGZ1bmN0aW9uXG4gICAgbGluayhzY29wZSwgZWxlbWVudCkge1xuICAgICAgICBDQUNIRVNFUlZJQ0UuZ2V0KHNlbGYpLmNvbXBvbmVudHMucHVzaCh7XG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgdHlwZTogJ3RvZ2dsZScsXG4gICAgICAgICAgICB0eXBlT2ZCdWlsZGluZzogc2NvcGUudHlwZU9mQnVpbGRpbmcsXG4gICAgICAgICAgICBmaWx0ZXJGaWVsZDogc2NvcGUuZmlsdGVyRmllbGRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHZhbHVlcyA9IHNjb3BlLnZhbHVlcy5zcGxpdCgnOycpO1xuXG4gICAgICAgICQuZWFjaCh2YWx1ZXMsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gdmFsdWUuc3BsaXQoJzonKVswXTtcbiAgICAgICAgICAgIHZhciBxdWVyeVRleHQgPSB2YWx1ZS5zcGxpdCgnOicpWzFdIHx8IHRleHQ7XG4gICAgICAgICAgICB2YXIgYWN0aXZlID0gdmFsdWUuc3BsaXQoJzonKVsyXSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKCc8c3Bhbj48L3NwYW4+JylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NlYXJjaF9fdG9nZ2xlLWVsZW1lbnQtaXRlbScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgcXVlcnlUZXh0KTtcblxuICAgICAgICAgICAgaXRlbS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcHBseUZpbHRlcigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmUpIGl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdmFyIGl0ZW1UZXh0ID0gJCgnPHNwYW4+PC9zcGFuPicpLmFkZENsYXNzKCdzZWFyY2hfX3RvZ2dsZS1lbGVtZW50LWl0ZW0tdGV4dCcpO1xuXG4gICAgICAgICAgICBpdGVtVGV4dC5hcHBlbmQodGV4dCk7XG4gICAgICAgICAgICBpdGVtLmFwcGVuZChpdGVtVGV4dCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZChpdGVtKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvL0ZJTFRFUiBGVU5DVElPTlNcbiAgICAgICAgZnVuY3Rpb24gYXBwbHlGaWx0ZXIoc3RhdGUpIHtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9ICQoJy5zZWFyY2hfX3RvZ2dsZS1lbGVtZW50LWl0ZW0nLCBlbGVtZW50KTtcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IFtdO1xuICAgICAgICAgICAgJC5lYWNoKGl0ZW1zLCBmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5oYXNDbGFzcygnYWN0aXZlJykpXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LnB1c2goJChlbGVtZW50KS5hdHRyKCd2YWx1ZScpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgIGRhdGFbc2NvcGUuZmlsdGVyRmllbGRdID0gcXVlcnkudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgREFUQVNFUlZJQ0UuZ2V0KHNlbGYpLnVwZGF0ZUJ1aWxkaW5nRmlsdGVyKHNjb3BlLnR5cGVPZkJ1aWxkaW5nLCBkYXRhLCBzdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBUSU1FT1VULmdldChzZWxmKSgoKSA9PiB7XG4gICAgICAgICAgICBhcHBseUZpbHRlcignc3RhcnQnKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGN1dCh2YWx1ZSwgd29yZHdpc2UsIG1heCwgdGFpbCkgIHtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XG5cbiAgICBtYXggPSBwYXJzZUludChtYXgsIDEwKTtcbiAgICBpZiAoIW1heCkgcmV0dXJuIHZhbHVlO1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gbWF4KSByZXR1cm4gdmFsdWU7XG5cbiAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCBtYXgpO1xuICAgIGlmICh3b3Jkd2lzZSkge1xuICAgICAgICB2YXIgbGFzdHNwYWNlID0gdmFsdWUubGFzdEluZGV4T2YoJyAnKTtcbiAgICAgICAgaWYgKGxhc3RzcGFjZSAhPSAtMSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgbGFzdHNwYWNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZSArICh0YWlsIHx8ICcg4oCmJyk7XG59IiwiZXhwb3J0IGNsYXNzIENhY2hlU2VydmljZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL2luamVjdCBwcml2YXRlXG5cbiAgICAgICAgdGhpcy5pbW1vdmFibGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xuICAgIH1cbn0iLCJjb25zdCBUSU1FT1VUID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IENBQ0hFU0VSVklDRSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgc2VsZjtcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFNlcnZpY2Uge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3RvcigkdGltZW91dCwgY2FjaGVTZXJ2aWNlKSB7XG4gICAgICAgIC8vaW5qZWN0IHByaXZhdGVcbiAgICAgICAgVElNRU9VVC5zZXQodGhpcywgJHRpbWVvdXQpO1xuICAgICAgICBDQUNIRVNFUlZJQ0Uuc2V0KHRoaXMsIGNhY2hlU2VydmljZSk7XG5cbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgfVxuXG4gICAgdXBkYXRlKHNlYXJjaCkge1xuICAgICAgICB2YXIgY29tcG9uZW50cyA9IENBQ0hFU0VSVklDRS5nZXQoc2VsZikuY29tcG9uZW50cztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGltZW91dCBmaXggZm9yIHdhaXQgbG9hZGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgVElNRU9VVC5nZXQoc2VsZikoKCkgPT4ge1xuICAgICAgICAgICAgJCgnLnVpLWFjY29yZGlvbi1oZWFkZXInKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciAkaXRlbSA9ICQoaXRlbSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJGl0ZW0uZGF0YSgnYnVpbGRpbmctdHlwZScpID09PSBzZWFyY2gudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGZvciBhY3RpdmUgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkaXRlbS5oYXNDbGFzcygndWktYWNjb3JkaW9uLWhlYWRlci1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGl0ZW0uY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICQoY29tcG9uZW50cykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLnR5cGUgPT0gaXRlbS50eXBlT2ZCdWlsZGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09ICdzbGlkZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZnJvbSA9IHNlYXJjaFtpdGVtLnByb3BlcnR5TWluXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0byA9IHNlYXJjaFtpdGVtLnByb3BlcnR5TWF4XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyb20gJiYgdG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUSU1FT1VULmdldChzZWxmKSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2xpZGVyLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogK3RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogK2Zyb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09ICdzZWxlY3RvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hbaXRlbS5maWx0ZXJGaWVsZF0gIT0gbnVsbCAmJiBzZWFyY2hbaXRlbS5maWx0ZXJGaWVsZF0gIT0gXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBzZWFyY2hbaXRlbS5maWx0ZXJGaWVsZF0uc3BsaXQoJywnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnb3B0aW9uJywgaXRlbS5lbGVtZW50KS5wcm9wKCdzZWxlY3RlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHZhbHVlcywgZnVuY3Rpb24gKGksIG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnb3B0aW9uW3ZhbHVlPScgKyBuYW1lICsgJ10nLCBpdGVtLmVsZW1lbnQpLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ29wdGlvblt2YWx1ZT1cImFueVwiXScsIGl0ZW0uZWxlbWVudCkucHJvcCgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJChpdGVtLmVsZW1lbnQpLnRyaWdnZXIoXCJjaG9zZW46dXBkYXRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT0gJ3RvZ2dsZScpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gJCgnLnNlYXJjaF9fdG9nZ2xlLWVsZW1lbnQtaXRlbScsIGl0ZW0uZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSBzZWFyY2hbaXRlbS5maWx0ZXJGaWVsZF0gPyBzZWFyY2hbaXRlbS5maWx0ZXJGaWVsZF0uc3BsaXQoJywnKSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1zICE9IG51bGwgJiYgcXVlcnkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChpdGVtcywgZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2gocXVlcnksIGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsUXVlcnkgPSAkKGVsZW1lbnQpLmF0dHIoJ3ZhbHVlJykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbFF1ZXJ5ICE9IG51bGwgJiYgbG9jYWxRdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGxvY2FsUXVlcnksIGZ1bmN0aW9uIChpbmRleCwgbG9jYWxJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbEl0ZW0gPT0gaXRlbSkgJChlbGVtZW50KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbn0iLCJjb25zdCBUSU1FT1VUID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IElOSVQgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgSU1NT1ZBQkxFU1NFUlZJQ0UgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgVklFV0NPTkZJRyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBMT0NBVElPTlNFUlZJQ0UgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgQ0FDSEVTRVJWSUNFID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IEZBVk9SSVRFU0VSVklDRSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBST09UU0NPUEUgPSBuZXcgV2Vha01hcCgpO1xuXG52YXIgc2VsZiA9IHt9O1xuXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3RvcigkdGltZW91dCwgJHJvb3RTY29wZSwgaW1tb3ZhYmxlc1NlcnZpY2UsIGFwcFZpZXdDb25maWcsIGxvY2F0aW9uU2VydmljZSwgY2FjaGVTZXJ2aWNlLCBmYXZvcml0ZVNlcnZpY2UpIHtcbiAgICAgICAgLy9pbmplY3QgcHJpdmF0ZVxuICAgICAgICBUSU1FT1VULnNldCh0aGlzLCAkdGltZW91dCk7XG4gICAgICAgIElNTU9WQUJMRVNTRVJWSUNFLnNldCh0aGlzLCBpbW1vdmFibGVzU2VydmljZSk7XG4gICAgICAgIFZJRVdDT05GSUcuc2V0KHRoaXMsIGFwcFZpZXdDb25maWcpO1xuICAgICAgICBDQUNIRVNFUlZJQ0Uuc2V0KHRoaXMsIGNhY2hlU2VydmljZSk7XG4gICAgICAgIFJPT1RTQ09QRS5zZXQodGhpcywgJHJvb3RTY29wZSk7XG4gICAgICAgIExPQ0FUSU9OU0VSVklDRS5zZXQodGhpcywgbG9jYXRpb25TZXJ2aWNlKTtcbiAgICAgICAgRkFWT1JJVEVTRVJWSUNFLnNldCh0aGlzLCBmYXZvcml0ZVNlcnZpY2UpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIERhdGEgTW9kZWwgaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUge0RhdGFTZXJ2aWNlfVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgSU5JVC5zZXQodGhpcywgKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHNlYXJjaCA9IExPQ0FUSU9OU0VSVklDRS5nZXQodGhpcykuZ2V0KCk7XG5cbiAgICAgICAgICAgIHNlbGYubWFwID0ge307XG4gICAgICAgICAgICBzZWxmLnRhYmxlID0ge307XG4gICAgICAgICAgICBzZWxmLmdyaWQgPSB7fTtcblxuICAgICAgICAgICAgc2VsZi50YWJsZUhlYWRlcnMgPSBWSUVXQ09ORklHLmdldCh0aGlzKS50YWJsZS5oZWFkZXJzO1xuICAgICAgICAgICAgc2VsZi5ncmlkU29ydHMgPSBWSUVXQ09ORklHLmdldCh0aGlzKS5zb3J0LmdyaWQ7XG4gICAgICAgICAgICBzZWxmLnNvcnRzID0gVklFV0NPTkZJRy5nZXQodGhpcykuc29ydHM7XG4gICAgICAgICAgICBzZWxmLnZpZXdzID0gVklFV0NPTkZJRy5nZXQodGhpcykudmlld3M7XG4gICAgICAgICAgICBzZWxmLmJ1aWxkaW5ncyA9IFZJRVdDT05GSUcuZ2V0KHRoaXMpLmJ1aWxkaW5ncztcbiAgICAgICAgICAgIHNlbGYudHJhbnNhY3Rpb25zID0gVklFV0NPTkZJRy5nZXQodGhpcykudHJhbnNhY3Rpb25zO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTZXQgdmFsdWVzIGZyb20gTE9DQVRJT04gYW5kIGNvbmZpZyBmaWxlXG4gICAgICAgICAgICAgKiBAdHlwZSB7Knx2aWV3fHNhbXBsZS52aWV3fC5maWx0ZXIudmlld3wkcm9vdFNjb3BlLmdsb2JhbEZpbHRlci52aWV3fFdpbmRvd1Byb3h5fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxmLnZpZXcgPSBzZWFyY2gudmlldztcbiAgICAgICAgICAgIHNlbGYuYnVpbGRpbmcgPSBzZWFyY2gudHlwZTtcblxuICAgICAgICAgICAgc2VsZi5maWx0ZXIgPSB7XG4gICAgICAgICAgICAgICAgJ3N1YnR5cGUnOiBzZWFyY2guc3VidHlwZSxcbiAgICAgICAgICAgICAgICAnc29ydCc6IHNlYXJjaC5zb3J0LFxuICAgICAgICAgICAgICAgICdkaXJlY3Rpb24nOiBzZWFyY2guZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgICd2aWV3Jzogc2VsZi52aWV3LFxuICAgICAgICAgICAgICAgICdjaXR5Jzogc2VhcmNoLmNpdHlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIElOSVQuZ2V0KHRoaXMpKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRyYW5zYXRpb24gdHlwZVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIHRyYW5zYWN0aW9uVHlwZSh2YWx1ZSkge1xuICAgICAgICAkLmVhY2goc2VsZi50cmFuc2FjdGlvbnMsIGZ1bmN0aW9uIChuYW1lLCB0cmFuc2F0aW9uKSB7XG4gICAgICAgICAgICBpZiAodHJhbnNhdGlvbi5hY3RpdmUgPT0gdHJ1ZSAmJiBuYW1lID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlID09IHRyYW5zYXRpb24udHlwZSkge1xuICAgICAgICAgICAgICAgIHRyYW5zYXRpb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZUZpbHRlcignc3VidHlwZScsIHRyYW5zYXRpb24udHlwZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyYW5zYXRpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFJPT1RTQ09QRS5nZXQodGhpcykuJGJyb2FkY2FzdCgndHJhbnNhY3Rpb25UeXBlVXBkYXRlJywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0eXBlIG9mIGRpc3BsYXllZCBidWlsZGluZ1xuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGJ1aWxkaW5nVHlwZSh2YWx1ZSkge1xuICAgICAgICAkLmVhY2goc2VsZi5idWlsZGluZ3MsIGZ1bmN0aW9uIChuYW1lLCB0eXBlKSB7XG4gICAgICAgICAgICBpZiAobmFtZSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHR5cGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxmLmJ1aWxkaW5nID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgdHlwZU9mQnVpbGRpbmdGaWx0ZXIgPSBzZWxmLmJ1aWxkaW5nc1tzZWxmLmJ1aWxkaW5nXS5maWx0ZXI7XG5cbiAgICAgICAgICAgICAgICBST09UU0NPUEUuZ2V0KHNlbGYpLiRicm9hZGNhc3QoJ2ZpbHRlclVwZGF0ZScsIF8uYXNzaWduKHt9LCB0eXBlT2ZCdWlsZGluZ0ZpbHRlciwgc2VsZi5maWx0ZXIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHlwZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgUk9PVFNDT1BFLmdldCh0aGlzKS4kYnJvYWRjYXN0KCdidWlsZGluZ1R5cGVVcGRhdGUnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHR5cGUgb2Ygdmlld1xuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIHZpZXdUeXBlKHZhbHVlKSB7XG4gICAgICAgICQuZWFjaChzZWxmLnZpZXdzLCBmdW5jdGlvbiAobmFtZSwgdmlldykge1xuICAgICAgICAgICAgaWYgKHZpZXcuYWN0aXZlID09IHRydWUgJiYgbmFtZSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYW1lID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmlldy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYudmlldyA9IG5hbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PSAnbWFwJykge1xuICAgICAgICAgICAgUk9PVFNDT1BFLmdldChzZWxmKS4kYnJvYWRjYXN0KCdzaG93TWFwJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBST09UU0NPUEUuZ2V0KHNlbGYpLiRicm9hZGNhc3QoJ2hpZGVNYXAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYudXBkYXRlRmlsdGVyKCd2aWV3JywgdmFsdWUpO1xuICAgICAgICBST09UU0NPUEUuZ2V0KHNlbGYpLiRicm9hZGNhc3QoJ3ZpZXdUeXBlVXBkYXRlJywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBkYXRhIGZyb20gc2VydmljZVxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBnZXREYXRhKGtleSkge1xuICAgICAgICByZXR1cm4gc2VsZltrZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBkYXRhIHRvIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc2V0RGF0YShrZXksIHZhbHVlKSB7XG4gICAgICAgIHNlbGZba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBidWlsZGluZyBzZWFyY2ggZmlsdGVyXG4gICAgICogQHBhcmFtIGJ1aWxkaW5nXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIHVwZGF0ZUJ1aWxkaW5nRmlsdGVyKGJ1aWxkaW5nLCBkYXRhLCBzdGF0ZSA9IFwic3RvcFwiKSB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gXCJzdGFydFwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIF8uYXNzaWduKHNlbGYuYnVpbGRpbmdzW2J1aWxkaW5nXS5maWx0ZXIsIGRhdGEpO1xuXG4gICAgICAgIGlmIChzZWxmLmJ1aWxkaW5nID09PSBidWlsZGluZykge1xuICAgICAgICAgICAgc2VsZi51cGRhdGVGaWx0ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGFsbCB2YWx1ZXMgaW4gYnVpbGRpbmcgZmlsZXRcbiAgICAgKiBAcGFyYW0gYnVpbGRpbmdcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHVwZGF0ZUJ1aWxkaW5nRmlsdGVyR2xvYmFsKGJ1aWxkaW5nLCBkYXRhKSB7XG4gICAgICAgIGlmKGJ1aWxkaW5nID09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBzZWxmLmJ1aWxkaW5nc1tidWlsZGluZ10uZmlsdGVyID0gZGF0YTtcbiAgICAgICAgc2VsZi51cGRhdGVGaWx0ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgc2VhcmNoIGdsb2JhbCBmaWx0ZXJcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgdXBkYXRlRmlsdGVyKGtleSA9IG51bGwsIHZhbHVlID0gbnVsbCkge1xuICAgICAgICBpZiAoa2V5ICE9IG51bGwgfHwgdmFsdWUgIT0gbnVsbCkgc2VsZi5maWx0ZXJba2V5XSA9IHZhbHVlO1xuXG4gICAgICAgIHZhciBmaWx0ZXIgPVxuICAgICAgICAgICAgXy5hc3NpZ24oXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgc2VsZi5idWlsZGluZ3Nbc2VsZi5idWlsZGluZ10uZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNlbGYuZmlsdGVyKTtcblxuICAgICAgICBST09UU0NPUEUuZ2V0KHRoaXMpLiRicm9hZGNhc3QoJ2ZpbHRlclVwZGF0ZScsIGZpbHRlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc29ydCBkYXRhIGluIG1vZGVsXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIHNvcnQocGFyYW1zID0ge30pIHtcbiAgICAgICAgcGFyYW1zLnBhZ2UgPSBwYXJhbXMucGFnZSB8fCAnMSc7XG4gICAgICAgIHBhcmFtcy5kaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uIHx8ICdhc2MnO1xuICAgICAgICBwYXJhbXMuc29ydCA9IHBhcmFtcy5zb3J0IHx8ICdjb3N0JztcblxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gc2VsZi5zb3J0c1twYXJhbXMuc29ydF0uZGlyZWN0aW9uO1xuXG4gICAgICAgICQuZWFjaChzZWxmLnNvcnRzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBzZWxmLnNvcnRzW2tleV0uZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbiA9PSAnYXNjJyA/ICdhc2MnIDogJ2Rlc2MnO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5zb3J0ID09IGtleSkge1xuICAgICAgICAgICAgICAgIHNlbGYuc29ydHNba2V5XS5kaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uID09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGYudXBkYXRlRmlsdGVyKCdzb3J0JywgcGFyYW1zLnNvcnQpO1xuICAgICAgICBzZWxmLnVwZGF0ZUZpbHRlcignZGlyZWN0aW9uJywgcGFyYW1zLmRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgaXNGYXZvcml0ZSh1aWQpIHtcbiAgICAgICAgcmV0dXJuIEZBVk9SSVRFU0VSVklDRS5nZXQoc2VsZikuaXNGYXZvcml0ZSh1aWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgZGF0YSBmcm9tIElNTU9WQUJMRVNTRVJWSUNFXG4gICAgICovXG4gICAgbG9hZERhdGEoKSB7XG4gICAgICAgIFJPT1RTQ09QRS5nZXQoc2VsZikuaW5mb1RleHQgPSBcItCY0LTRkdGCINC30LDQs9GA0YPQt9C60LBcIjtcbiAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XG5cbiAgICAgICAgVElNRU9VVC5nZXQodGhpcykuY2FuY2VsKENBQ0hFU0VSVklDRS5nZXQodGhpcykudGltZW91dC5nZXQoJ2xvYWREYXRhJykpO1xuXG4gICAgICAgIENBQ0hFU0VSVklDRS5nZXQodGhpcykudGltZW91dC5zZXQoJ2xvYWREYXRhJywgVElNRU9VVC5nZXQodGhpcykoKCkgPT4ge1xuICAgICAgICAgICAgSU1NT1ZBQkxFU1NFUlZJQ0VcbiAgICAgICAgICAgICAgICAuZ2V0KHNlbGYpXG4gICAgICAgICAgICAgICAgLmdldChMT0NBVElPTlNFUlZJQ0UuZ2V0KHNlbGYpLmdldCgpKVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFwcGx5RGF0YShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudmlldyA9PT0gJ21hcCcpICBST09UU0NPUEUuZ2V0KHNlbGYpLiRicm9hZGNhc3QoJ3VwZGF0ZU1hcCcsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbG9hZGluZyBpdGVtcyBjb3VudDogJHtkYXRhLml0ZW1zLmxlbmd0aH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGRhdGEgdG8gbW9kZWxcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIGFwcGx5RGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBsb2FkaW5nIGl0ZW0gdHlwZTogJHtkYXRhLnZpZXd9YCk7XG4gICAgICAgIHNlbGZbZGF0YS52aWV3XS5pdGVtcyA9IGRhdGEuaXRlbXM7XG4gICAgICAgIHNlbGZbZGF0YS52aWV3XS5wYWdlcyA9IGRhdGEucGFnZXM7XG4gICAgICAgIHNlbGYudGFibGVIZWFkZXJzID0gZGF0YS50YWJsZUhlYWRlcnMgfHwgc2VsZi50YWJsZUhlYWRlcnM7XG4gICAgICAgIHNlbGYuZ3JpZFNvcnRzID0gZGF0YS5ncmlkU29ydHMgfHwgc2VsZi5ncmlkU29ydHM7XG5cbiAgICAgICAgUk9PVFNDT1BFLmdldChzZWxmKS4kYnJvYWRjYXN0KCdkYXRhVXBkYXRlJyk7XG4gICAgICAgIFJPT1RTQ09QRS5nZXQoc2VsZikuaW5mb1RleHQgPSBcItCd0LXRgiDQv9C+0LTRhdC+0LTRj9GJ0LjRhSDQstCw0YDQuNCw0L3RgtC+0LJcIjtcbiAgICB9XG59IiwiY29uc3QgVElNRU9VVCA9IG5ldyBXZWFrTWFwKCk7XG52YXIgc2VsZjtcblxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlU2VydmljZSB7XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHRpbWVvdXQpIHtcbiAgICAgICAgLy9pbmplY3QgcHJpdmF0ZVxuICAgICAgICBUSU1FT1VULnNldCh0aGlzLCAkdGltZW91dCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtGYXZvcml0ZVNlcnZpY2V9XG4gICAgICAgICAqL1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICB9XG5cbiAgICBpc0Zhdm9yaXRlKHVpZCkge1xuICAgICAgICBsZXQgZmF2b3JpdGVDb29raWUgPSAkLmNvb2tpZSgnZmF2b3JpdGUnKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZhdm9yaXRlQ29va2llW3VpZF07XG4gICAgfVxufVxuXG4iLCJjb25zdCBIVFRQID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IFEgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgQ0FDSEVTRVJWSUNFID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IExPQ0FUSU9OU0VSVklDRSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgc2VsZjtcblxuZXhwb3J0IGNsYXNzIEltbW92YWJsZXNTZXJ2aWNlIHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgJHEsIGNhY2hlU2VydmljZSwgbG9jYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIC8vaW5qZWN0IHByaXZhdGVcbiAgICAgICAgSFRUUC5zZXQodGhpcywgJGh0dHApO1xuICAgICAgICBMT0NBVElPTlNFUlZJQ0Uuc2V0KHRoaXMsIGxvY2F0aW9uU2VydmljZSk7XG4gICAgICAgIFEuc2V0KHRoaXMsICRxKTtcbiAgICAgICAgQ0FDSEVTRVJWSUNFLnNldCh0aGlzLCBjYWNoZVNlcnZpY2UpO1xuXG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBkYXRhIGZyb20gc2VydmVyIHdpdGggcXVlcnkgY29udGVudCBjdXJlbnQgdXJsIGxvY2F0aW9uIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQoc2VhcmNoID0ge30pIHtcbiAgICAgICAgdmFyIGNhY2hlZERhdGEgPSBzZWxmLmdldEZyb21DYWNoZShzZWFyY2gpO1xuXG4gICAgICAgIGlmKGNhY2hlZERhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUS5nZXQoc2VsZikuZGVmZXIoKTtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoY2FjaGVkRGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IGRhdGEgZnJvbSBzZXJ2ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIEhUVFBcbiAgICAgICAgICAgICAgICAuZ2V0KHNlbGYpXG4gICAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2RvbXNjYW4ucnUvc2l0ZS9zZWFyY2gnLFxuICAgICAgICAgICAgICAgICAgICAvL3VybDogJy9zaXRlL3NlYXJjaCcsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogc2VhcmNoXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2FtcGxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWdlc1wiOiByZXN1bHQuZGF0YS5wYWdpbmF0ZSB8fCBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogcmVzdWx0LmRhdGEuaXRlbXMgfHwgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlSGVhZGVyc1wiOiByZXN1bHQuZGF0YS50YWJsZV9maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImdyaWRTb3J0c1wiOiByZXN1bHQuZGF0YS5ncmlkX3NvcnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCI6IHJlc3VsdC5kYXRhLnZpZXcgfHwgXCJsaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoc2VhcmNoKTtcbiAgICAgICAgICAgICAgICAgICAgQ0FDSEVTRVJWSUNFLmdldChzZWxmKS5pbW1vdmFibGVzLnNldChrZXksIHNhbXBsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIFJldHVybiBmb3JtYXQgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNhbXBsZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBkYXRhIGZyb20gY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRGcm9tQ2FjaGUoc2VhcmNoKSB7XG4gICAgICAgIGxldCBrZXkgPSBKU09OLnN0cmluZ2lmeShzZWFyY2gpO1xuICAgICAgICByZXR1cm4gQ0FDSEVTRVJWSUNFLmdldChzZWxmKS5pbW1vdmFibGVzLmdldChrZXkpO1xuICAgIH1cbn1cblxuIiwiY29uc3QgTE9DQVRJT04gPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgVklFV0NPTkZJRyA9IG5ldyBXZWFrTWFwKCk7XG52YXIgc2VsZjtcblxuZXhwb3J0IGNsYXNzIExvY2F0aW9uU2VydmljZSB7XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJGxvY2F0aW9uLCBhcHBWaWV3Q29uZmlnKSB7XG4gICAgICAgIC8vaW5qZWN0IHByaXZhdGVcbiAgICAgICAgTE9DQVRJT04uc2V0KHRoaXMsICRsb2NhdGlvbik7XG4gICAgICAgIFZJRVdDT05GSUcuc2V0KHRoaXMsIGFwcFZpZXdDb25maWcpO1xuXG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgIH1cblxuICAgIHNldChkYXRhKSB7XG4gICAgICAgIExPQ0FUSU9OLmdldChzZWxmKS5zZWFyY2goZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0KCkge1xuICAgICAgICB2YXIgc2VhcmNoID0gTE9DQVRJT04uZ2V0KHNlbGYpLnNlYXJjaCgpO1xuXG4gICAgICAgIHNlYXJjaC52aWV3ID0gc2VhcmNoLnZpZXcgfHwgVklFV0NPTkZJRy5nZXQoc2VsZikudmlldztcbiAgICAgICAgc2VhcmNoLnR5cGUgPSBzZWFyY2gudHlwZSB8fCBWSUVXQ09ORklHLmdldChzZWxmKS5idWlsZGluZztcbiAgICAgICAgc2VhcmNoLnN1YnR5cGUgPSBzZWFyY2guc3VidHlwZSB8fCBWSUVXQ09ORklHLmdldChzZWxmKS5zdWJ0eXBlO1xuICAgICAgICBzZWFyY2guc29ydCA9IHNlYXJjaC5zb3J0IHx8IFZJRVdDT05GSUcuZ2V0KHNlbGYpLnNvcnR2YWx1ZTtcbiAgICAgICAgc2VhcmNoLmRpcmVjdGlvbiA9IHNlYXJjaC5kaXJlY3Rpb24gfHwgVklFV0NPTkZJRy5nZXQoc2VsZikuZGlyZWN0aW9uO1xuICAgICAgICBzZWFyY2guY2l0eSA9IHNlYXJjaC5jaXR5IHx8IFZJRVdDT05GSUcuZ2V0KHNlbGYpLmNpdHk7XG5cbiAgICAgICAgcmV0dXJuIHNlYXJjaDtcbiAgICB9XG59XG5cbiIsImNvbnN0IE1BUFBPUFVQU0VSVklDRSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgc2VsZjtcblxuZXhwb3J0IGNsYXNzIE1hcE1hcmtlclNlcnZpY2Uge1xuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKG1hcFBvcHVwU2VydmljZSkge1xuICAgICAgICAvL2luamVjdCBwcml2YXRlXG4gICAgICAgIE1BUFBPUFVQU0VSVklDRS5zZXQodGhpcywgbWFwUG9wdXBTZXJ2aWNlKTtcblxuICAgICAgICBzZWxmID0gdGhpcztcbiAgICB9XG5cbiAgICBzcGVjaWFsTWFya2VyKGRhdGEpIHtcbiAgICAgICAgdmFyIHNwZWNpYWxNYXJrZXJJY29uID0gREcuaWNvbih7XG4gICAgICAgICAgICBpY29uVXJsOiAnL2ltZy9pY29uLW1hcC1zcGVjaWFsLnBuZycsXG4gICAgICAgICAgICBpY29uUmV0aW5hVXJsOiAnL2ltZy9pY29uLW1hcC1zcGVjaWFsQDJ4LnBuZycsXG4gICAgICAgICAgICBpY29uU2l6ZTogWzM4LCA2NV0sXG4gICAgICAgICAgICBpY29uQW5jaG9yOiBbMTksIDY1XSxcbiAgICAgICAgICAgIHNoYWRvd1VybDogJy9pbWcvaWNvbi1tYXAtc3BlY2lhbC1zaGFkb3cucG5nJyxcbiAgICAgICAgICAgIHNoYWRvd1JldGluYVVybDogJy9pbWcvaWNvbi1tYXAtc3BlY2lhbC1zaGFkb3dAMngucG5nJyxcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IFs1MywgMjZdLFxuICAgICAgICAgICAgc2hhZG93QW5jaG9yOiBbMywgMjNdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgUHJ1bmVDbHVzdGVyLk1hcmtlcihkYXRhLmxhdCwgZGF0YS5sb25nLCB7XG4gICAgICAgICAgICBpY29uOiBzcGVjaWFsTWFya2VySWNvblxuICAgICAgICB9KTtcblxuICAgICAgICBNQVBQT1BVUFNFUlZJQ0UuZ2V0KHNlbGYpLmNyZWF0ZVBvcHVwKG1hcmtlciwgZGF0YSk7XG5cbiAgICAgICAgcmV0dXJuIG1hcmtlcjtcbiAgICB9XG5cbiAgICBkZWZhdWx0TWFya2VyKGRhdGEpIHtcbiAgICAgICAgdmFyIG1hcmtlckljb24gPSBERy5pY29uKHtcbiAgICAgICAgICAgIGljb25Vcmw6ICcvaW1nL2ljb24tbWFwLnBuZycsXG4gICAgICAgICAgICBpY29uUmV0aW5hVXJsOiAnL2ltZy9pY29uLW1hcEAyeC5wbmcnLFxuICAgICAgICAgICAgaWNvblNpemU6IFsyOSwgNTBdLFxuICAgICAgICAgICAgaWNvbkFuY2hvcjogWzE1LCA1MF0sXG4gICAgICAgICAgICBzaGFkb3dVcmw6ICcvaW1nL2ljb24tbWFwLXNoYWRvdy5wbmcnLFxuICAgICAgICAgICAgc2hhZG93UmV0aW5hVXJsOiAnL2ltZy9pY29uLW1hcC1zaGFkb3dAMngucG5nJyxcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IFs0MCwgMTldLFxuICAgICAgICAgICAgc2hhZG93QW5jaG9yOiBbMywgMThdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgUHJ1bmVDbHVzdGVyLk1hcmtlcihkYXRhLmxhdCwgZGF0YS5sb25nLCB7XG4gICAgICAgICAgICBpY29uOiBtYXJrZXJJY29uXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgTUFQUE9QVVBTRVJWSUNFLmdldChzZWxmKS5jcmVhdGVQb3B1cChtYXJrZXIsIGRhdGEpO1xuXG4gICAgICAgIHJldHVybiBtYXJrZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlTWFya2VyKGRhdGEpIHtcbiAgICAgICAgdmFyIG1hcmtlcjtcbiAgICAgICAgaWYgKGRhdGEuc3BlY2lhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG1hcmtlciA9IHNlbGYuZGVmYXVsdE1hcmtlcihkYXRhKTtcbiAgICAgICAgICAgIG1hcmtlci5jYXRlZ29yeSA9IDA7XG4gICAgICAgICAgICByZXR1cm4gbWFya2VyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFya2VyID0gc2VsZi5zcGVjaWFsTWFya2VyKGRhdGEpO1xuICAgICAgICAgICAgbWFya2VyLmNhdGVnb3J5ID0gMTtcbiAgICAgICAgICAgIHJldHVybiBtYXJrZXI7XG4gICAgICAgIH1cbiAgICB9XG59IiwidmFyIHNlbGY7XG5cbmV4cG9ydCBjbGFzcyBNYXBQb3B1cFNlcnZpY2Uge1xuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XG4gICAgICAgIC8vaW5qZWN0IHByaXZhdGVcblxuICAgICAgICBzZWxmID0gdGhpcztcbiAgICB9XG5cbiAgICBjcmVhdGVQb3B1cChtYXJrZXIsIGRhdGEpIHtcbiAgICAgICAgdmFyIGltZyA9ICcnLFxuICAgICAgICAgICAgaWNvbnMgPSAnJztcblxuICAgICAgICBpZiAoZGF0YS5yYXNzcm9jaGthID09PSAnMScpIGljb25zICs9ICc8YSBocmVmPVwiL1wiIGNsYXNzPVwic2VhcmNoX19saXN0LWl0ZW0taWNvbnMtaWNvbiBzZWFyY2hfX21hcC1saXN0LWl0ZW0taWNvbiBwcm9zZW50IHBvcHVwLXJhc3JcIj48L2E+ICc7XG4gICAgICAgIGlmIChkYXRhLm1vcnRhZ2FnZSA9PT0gJzEnKSBpY29ucyArPSAnPGEgaHJlZj1cIi9cIiBjbGFzcz1cInNlYXJjaF9fbGlzdC1pdGVtLWljb25zLWljb24gc2VhcmNoX19tYXAtbGlzdC1pdGVtLWljb24gY3JlZGl0IHBvcHVwLWlwb1wiPjwvYT4gJztcbiAgICAgICAgaWYgKGRhdGEubWF0Y2FwaXRhbCA9PT0gJzEnKSBpY29ucyArPSAnPGEgaHJlZj1cIi9cIiBjbGFzcz1cInNlYXJjaF9fbGlzdC1pdGVtLWljb25zLWljb24gc2VhcmNoX19tYXAtbGlzdC1pdGVtLWljb24gYmFieSBwb3B1cC1tb3RoZXJcIj48L2E+ICc7XG5cbiAgICAgICAgdmFyIGh0bWwgPVxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJcIj4gJHtpY29uc30gPC9kaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiJHtkYXRhLnVyaX1cIiBjbGFzcz1cImJhbGxvb24tdGl0bGVcIj4ke2RhdGEudGl0bGV9PC9hPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJiYWxsb29uLWZpZWxkXCI+PHNwYW4gY2xhc3M9XCJiYWxsb29uLWZpZWxkLW5hbWVcIj7QkNC00YDQtdGBOiA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhbGxvb24tZmllbGQtdmFsdWVcIj4ke2RhdGEuYWRkcmVzc308L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJiYWxsb29uLWZpZWxkXCI+PHNwYW4gY2xhc3M9XCJiYWxsb29uLWZpZWxkLW5hbWVcIj7QrdGC0LDQtjogPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWxsb29uLWZpZWxkLXZhbHVlXCI+ICR7ZGF0YS5mbG9vcn0vJHtkYXRhLnRvcF9mbG9vcn08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJiYWxsb29uLWZpZWxkXCI+PHNwYW4gY2xhc3M9XCJiYWxsb29uLWZpZWxkLW5hbWVcIj7Qn9C70L7RidCw0LTRjDogPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWxsb29uLWZpZWxkLXZhbHVlXCI+JHtkYXRhLnNxdWFyZSB9INC8PHN1cD4yPC9zdXA+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiYmFsbG9vbi1jb3N0XCI+JHtkYXRhLmNvc3R9INGA0YPQsS48L3A+YDtcblxuXG4gICAgICAgIGlmIChkYXRhLnNwZWNpYWwpIHtcbiAgICAgICAgICAgIGltZyA9IGA8aW1nIGNsYXNzPVwiaW1nIGltZy1yZXNwb25zaXZlIGJhbGxvb24taW1nXCIgc3JjPVwiJHtkYXRhLmltYWdlfVwiIGFsdD1cIlwiLz5gO1xuXG4gICAgICAgICAgICBtYXJrZXIuZGF0YS5wb3B1cE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBgbWFwLXNwaWRsaWZlci1wb3B1cCBtYXAtc3BpZGxpZmVyLXBvcHVwLXNwZWNpYWxgLFxuICAgICAgICAgICAgICAgIG9mZnNldDogTC5wb2ludCgwLCAtMjApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXJrZXIuZGF0YS5wb3B1cE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBgbWFwLXNwaWRsaWZlci1wb3B1cGAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBMLnBvaW50KDAsIC0yMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYXJrZXIuZGF0YS5wb3B1cCA9IGltZyArIGh0bWw7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2x1c3Rlck1hcmtlcihjbHVzdGVyKSB7XG4gICAgICAgIHZhciBjID0gJ3NlYXJjaF9fbWFwLWJ1bGxldC0nLFxuICAgICAgICAgICAgaHRtbCA9IFwiXCIsXG4gICAgICAgICAgICBzaXplID0ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFuY2hvciA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBpZiAoY2x1c3Rlci5zdGF0c1sxXSA9PT0gMCkge1xuICAgICAgICAgICAgYyArPSBcIm5vcm1hbFwiO1xuICAgICAgICAgICAgc2l6ZSA9IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyOFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFuY2hvciA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IDUwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDE0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbCA9IGA8ZGl2PjxzcGFuPiR7Y2x1c3Rlci5zdGF0c1swXX08L3NwYW4+PC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIHNwZWNpYWwgKyBub21hbFxuICAgICAgICBlbHNlIGlmIChjbHVzdGVyLnN0YXRzWzFdID4gMCAmJiBjbHVzdGVyLnN0YXRzWzBdID4gMCkge1xuICAgICAgICAgICAgYyArPSBcInNtYWxsXCI7XG4gICAgICAgICAgICBzaXplID0ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjQsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYW5jaG9yID0ge1xuICAgICAgICAgICAgICAgIHRvcDogNjQsXG4gICAgICAgICAgICAgICAgbGVmdDogMTlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sID0gYDxkaXY+PHNwYW4gY2xhc3M9XCJzcGVjaWFsXCI+JHtjbHVzdGVyLnN0YXRzWzFdfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibm9ybWFsXCI+JHtjbHVzdGVyLnN0YXRzWzBdfTwvc3Bhbj48L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgb25seSBzcGVjaWFsXG4gICAgICAgIGVsc2UgaWYgKGNsdXN0ZXIuc3RhdHNbMV0gPiAwKSB7XG4gICAgICAgICAgICBjICs9IFwic3BlY2lhbFwiO1xuICAgICAgICAgICAgc2l6ZSA9IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY0LFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzOFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFuY2hvciA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IDY0LFxuICAgICAgICAgICAgICAgIGxlZnQ6IDE5XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbCA9IGA8ZGl2PjxzcGFuPiR7Y2x1c3Rlci5zdGF0c1sxXX08L3NwYW4+PC9kaXY+YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgTC5EaXZJY29uKHtcbiAgICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgICBjbGFzc05hbWU6IGMsXG4gICAgICAgICAgICBpY29uU2l6ZTogTC5wb2ludChzaXplLndpZHRoLCBzaXplLmhlaWdodCksXG4gICAgICAgICAgICBpY29uQW5jaG9yOiBMLnBvaW50KGFuY2hvci5sZWZ0LCBhbmNob3IudG9wKVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiY29uc3QgUk9PVFNDT1BFID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IFRJTUVPVVQgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgTUFQTUFSS0VSU0VSVklDRSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBNQVBQT1BVUFNFUlZJQ0UgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgTE9DQVRJT05TRVJWSUNFID0gbmV3IFdlYWtNYXAoKTtcblxudmFyIHNlbGY7XG5cbmV4cG9ydCBjbGFzcyBNYXBTZXJ2aWNlIHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkdGltZW91dCwgbG9jYXRpb25TZXJ2aWNlLCBtYXBQb3B1cFNlcnZpY2UsIG1hcE1hcmtlclNlcnZpY2UpIHtcbiAgICAgICAgLy9pbmplY3QgcHJpdmF0ZVxuICAgICAgICBST09UU0NPUEUuc2V0KHRoaXMsICRyb290U2NvcGUpO1xuICAgICAgICBUSU1FT1VULnNldCh0aGlzLCAkdGltZW91dCk7XG4gICAgICAgIE1BUE1BUktFUlNFUlZJQ0Uuc2V0KHRoaXMsIG1hcE1hcmtlclNlcnZpY2UpO1xuICAgICAgICBNQVBQT1BVUFNFUlZJQ0Uuc2V0KHRoaXMsIG1hcFBvcHVwU2VydmljZSk7XG4gICAgICAgIExPQ0FUSU9OU0VSVklDRS5zZXQodGhpcywgbG9jYXRpb25TZXJ2aWNlKTtcblxuICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLmxpc3RPZkFwYXJ0bWVudCA9IHt9O1xuICAgICAgICBzZWxmLmlzTG9hZCA9IGZhbHNlO1xuICAgICAgICBzZWxmLmlzUmVudCA9IGZhbHNlO1xuXG4gICAgICAgIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKHNlbGYucmVzaXplTWFwLCAxNTApKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNYXAoZGF0YSkge1xuXG4gICAgICAgIGlmICghc2VsZi5tYXJrZXJzKSB7XG4gICAgICAgICAgICBzZWxmLm1hcmtlcnMgPSBuZXcgUHJ1bmVDbHVzdGVyRm9yTGVhZmxldCgpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBPdmVyd3JpdGUgbGlicmFyeSBtZXRob2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0gY2x1c3RlclxuICAgICAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZi5tYXJrZXJzLkJ1aWxkTGVhZmxldENsdXN0ZXJJY29uID0gZnVuY3Rpb24gKGNsdXN0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTUFQUE9QVVBTRVJWSUNFLmdldChzZWxmKS5jcmVhdGVDbHVzdGVyTWFya2VyKGNsdXN0ZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogT3ZlcndyaXRlIGxpYnJhcnkgbWV0aG9kZVxuICAgICAgICAgICAgICogQHBhcmFtIG1hcmtlclxuICAgICAgICAgICAgICogQHBhcmFtIGRhdGFcbiAgICAgICAgICAgICAqIEBwYXJhbSBjYXRlZ29yeVxuICAgICAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGYubWFya2Vycy5QcmVwYXJlTGVhZmxldE1hcmtlciA9IGZ1bmN0aW9uIChtYXJrZXIsIGRhdGEsIGNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaWNvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEuaWNvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnNldEljb24oZGF0YS5pY29uKGRhdGEsIGNhdGVnb3J5KSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc2V0SWNvbihkYXRhLmljb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucG9wdXApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0eXBlb2YgZGF0YS5wb3B1cCA9PT0gJ2Z1bmN0aW9uJyA/IGRhdGEucG9wdXAoZGF0YSwgY2F0ZWdvcnkpIDogZGF0YS5wb3B1cDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcmtlci5nZXRQb3B1cCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNvbnRlbnQsIGRhdGEucG9wdXBPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5iaW5kUG9wdXAoY29udGVudCwgZGF0YS5wb3B1cE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRJTUVPVVQuZ2V0KHNlbGYpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5iYWxsb29uLXRpdGxlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAkKHRoaXMpLnByb3AoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE92ZXJ3cml0ZSBsaWJyYXJ5IG1ldGhvZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZi5tYXJrZXJzLnNwaWRlcmZpZXIuU3BpZGVyZnkgPSBmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHNwaWRsaWZlclRhYmxlSGVhZGVySGVpZ2h0ID0gNDAsXG4gICAgICAgICAgICAgICAgICAgIHNwaWRsaWZlclRhYmxlUm93SGVpZ2h0ID0gNjAsXG4gICAgICAgICAgICAgICAgICAgIHNwaWRsaWZlckhlaWdodCA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBzdHJlZXRMaXN0ID0ge30sXG4gICAgICAgICAgICAgICAgICAgIHNwaWRsaWZlckJvZHkgPSBgYCxcbiAgICAgICAgICAgICAgICAgICAgc3BpZGxpZmVyQmVnaW4gPSBgPGRpdiBjbGFzcz1cInNlYXJjaF9fbWFwLWNhdGFsb2ctd3JhcHBlclwiPmAsXG4gICAgICAgICAgICAgICAgICAgIHNwaWRsaWZlclRhYmxlRm9vdGVyID0gYDwvdGFibGU+YCxcbiAgICAgICAgICAgICAgICAgICAgc3BpZGxpZmVyRW5kID0gYDwvZGl2PmA7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBNYWtlIG9iamVjdCBrZXk6dmFsdWUge3N0cmVldDogYXBhcnRtZW50c31cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBfLmZvckVhY2goZGF0YS5tYXJrZXJzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyZWV0ID0gXy50cmltKHZhbHVlLmRhdGEuc3RyZWV0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmVldExpc3Rbc3RyZWV0XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJlZXRMaXN0W3N0cmVldF0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdHJlZXRMaXN0W3N0cmVldF0ucHVzaCh2YWx1ZS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vZWFjaCBzdHJlZXQgYWRyZXNzIG9mIG1hcCBwbGFjZVxuICAgICAgICAgICAgICAgIF8uZm9yRWFjaChzdHJlZXRMaXN0LCAoYXBhcnRtZW50cywgYWRkcmVzcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogSGVpZ2h0IHBvcHVwIHdpbmRvdyBzZXRcbiAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHNwaWRsaWZlckhlaWdodC5wdXNoKHNwaWRsaWZlclRhYmxlSGVhZGVySGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEN1dCB3aW5kb3dcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBzZWxmLnRydW5jYXRlU3RyaW5nKGFkZHJlc3MsIDMwKTtcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogU2V0IHBvcHVwIHRhYmxlIGhlYWRlciBodG1sXG4gICAgICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcXVhcmVDb3N0ID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLmlzUmVudCkgc3F1YXJlQ29zdCA9IGA8c3BhbiBjbGFzcz1cIm1hcC1zcGlkbGlmZXItaGVhZGVyLXByZWZpeFwiPtCm0LXQvdCwINC30LAg0Lw8c3VwPjI8L3N1cD5gO1xuXG4gICAgICAgICAgICAgICAgICAgIHNwaWRsaWZlckJvZHkgKz1cbiAgICAgICAgICAgICAgICAgICAgICAgIGA8dGFibGUgY2xhc3M9XCJtYXAtc3BpZGxpZmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJtYXAtc3BpZGxpZmVyLWhlYWRlclwiPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJtYXAtc3BpZGxpZmVyLWhlYWRlciBtYXAtc3BpZGxpZmVyLWhlYWRlci1hZGRyZXNzXCI+JHthZGRyZXNzfTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJtYXAtc3BpZGxpZmVyLWhlYWRlclwiPtCt0YLQsNC2PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cIm1hcC1zcGlkbGlmZXItaGVhZGVyXCI+0J/Qu9C+0YnQsNC00Yw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwibWFwLXNwaWRsaWZlci1oZWFkZXIgbWFwLXNwaWRsaWZlci1oZWFkZXItY29zdFwiPtCm0LXQvdCwLCDRgC5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7c3F1YXJlQ29zdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9lYWNoZSBhcGFydG1lbnRcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JPd24oYXBhcnRtZW50cywgKGFwYXJ0bWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpY29ucyA9IGBgO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBIZWlnaHQgcG9wdXAgd2luZG93IHNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BpZGxpZmVySGVpZ2h0LnB1c2goc3BpZGxpZmVyVGFibGVSb3dIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBDdXQgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwYXJ0bWVudC50aXRsZSA9IHNlbGYudHJ1bmNhdGVTdHJpbmcoYXBhcnRtZW50LnRpdGxlLCAyNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFNldCBpY29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGFydG1lbnQucmFzc3JvY2hrYSA9PT0gJzEnID8gaWNvbnMgKz0gYDxhIGhyZWY9XCIvXCIgY2xhc3M9XCJzZWFyY2hfX3RhYmxlLWxpbmUtaWNvbnMtaWNvbiBwcm9zZW50IHBvcHVwLXJhc3JcIj48L2E+YCA6IGBgO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBhcnRtZW50Lm1hdGNhcGl0YWwgPT09ICcxJyA/IGljb25zICs9IGA8YSBocmVmPVwiL1wiIGNsYXNzPVwic2VhcmNoX190YWJsZS1saW5lLWljb25zLWljb24gYmFieSBwb3B1cC1tb3RoZXJcIj48L2E+YCA6IGBgO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBhcnRtZW50Lm1vcnRhZ2FnZSA9PT0gJzEnID8gaWNvbnMgKz0gYDxhIGhyZWY9XCIvXCIgY2xhc3M9XCJzZWFyY2hfX3RhYmxlLWxpbmUtaWNvbnMtaWNvbiBjcmVkaXQgcG9wdXAtaXBvXCI+PC9hPmAgOiBgYDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBzZXQgcm93IGh0bWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNxdWFyZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBhcnRtZW50LnN1YnR5cGUgIT09IFwicmVudFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlID0gYDxzcGFuIGNsYXNzPVwidGV4dFwiPn4ke2FwYXJ0bWVudC5zcXVhcmVfcHJpY2V9INGCLtGALi/QvDxzdXA+Mjwvc3VwPjwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGlkbGlmZXJCb2R5ICs9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDx0ciBjbGFzcz1cIm1hcC1zcGlkbGlmZXItcm93ICR7YXBhcnRtZW50LnNwZWNpYWwgPyBcIm1hcC1zcGlkbGlmZXItcm93LXNwZWNpYWxcIiA6IFwiXCJ9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwibWFwLXNwaWRsaWZlci1jb2x1bW4gbWFwLXNwaWRsaWZlci1jb2x1bW4tZmF2b3JpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWlkPVwiJHthcGFydG1lbnQuaWR9XCIgY2xhc3M9XCJpdGVtLWZhdm9yaXRlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJtYXAtc3BpZGxpZmVyLWNvbHVtbiBtYXAtc3BpZGxpZmVyLWNvbHVtbi1hZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7YXBhcnRtZW50LnVybH1cIiBjbGFzcz1cIm1hcC1zcGlkbGlmZXItY29sdW1uLXRleHQgbWFwLXNwaWRsaWZlci1jb2x1bW4tbGlua1wiPiR7YXBhcnRtZW50LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIm1hcC1zcGlkbGlmZXItY29sdW1uXCI+PHNwYW4gY2xhc3M9XCJtYXAtc3BpZGxpZmVyLWNvbHVtbi10ZXh0XCI+JHthcGFydG1lbnQuZmxvb3J9LyR7YXBhcnRtZW50LnRvcF9mbG9vcn08L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJtYXAtc3BpZGxpZmVyLWNvbHVtblwiPjxzcGFuIGNsYXNzPVwibWFwLXNwaWRsaWZlci1jb2x1bW4tdGV4dFwiPiR7YXBhcnRtZW50LnNxdWFyZX0g0Lw8c3VwPjI8L3N1cD48L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJtYXAtc3BpZGxpZmVyLWNvbHVtbiBtYXAtc3BpZGxpZmVyLWNvbHVtbi1jb3N0XCI+PHNwYW4gY2xhc3M9XCJtYXAtc3BpZGxpZmVyLWNvbHVtbi10ZXh0IG1hcC1zcGlkbGlmZXItY29sdW1uLWNvc3QtdGV4dFwiPiR7YXBhcnRtZW50LmNvc3R9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFwLXNwaWRsaWZlci1jb2x1bW4tdGV4dC1wcmVmaXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ljb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3F1YXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIFNldCBlbmQgb2YgdGFibGUgaHRtbFxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgc3BpZGxpZmVyQm9keSArPSBzcGlkbGlmZXJUYWJsZUZvb3RlcjtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIENhbGN1bGF0ZSBoZWlnaHQgb2Ygc3BpZGxpZmVyIHdpbmRvd1xuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIGlDb3VudCA9IHNwaWRsaWZlckhlaWdodC5sZW5ndGggPiA2ID8gNiA6IHNwaWRsaWZlckhlaWdodC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIHNwaWRsaWZlckhlaWdodHMgPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzcGlkbGlmZXJIZWlnaHRzICs9IHNwaWRsaWZlckhlaWdodFtpXTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIE1ha2Ugc3BpZGxpZmVyIHdpbmRvd1xuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtMLkRpdkljb259XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIG15SWNvbiA9IG5ldyBMLkRpdkljb24oe1xuICAgICAgICAgICAgICAgICAgICBodG1sOiBzcGlkbGlmZXJCZWdpbiArIHNwaWRsaWZlckJvZHkgKyBzcGlkbGlmZXJFbmQsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlYXJjaF9fbWFwLWNhdGFsb2ctd3JhcHBlcicsXG4gICAgICAgICAgICAgICAgICAgIGljb25TaXplOiBMLnBvaW50KDU1MCwgc3BpZGxpZmVySGVpZ2h0cyksXG4gICAgICAgICAgICAgICAgICAgIC8v0L7RgtGB0YLRg9C/0YtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkFuY2hvcjogTC5wb2ludCgyNzUsIHNwaWRsaWZlckhlaWdodHMgKyAxNSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIGNsb3NlIHNwaWRsaWZlciB3aW5kb3dcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBzZWxmLm1hcmtlcnMuc3BpZGVyZmllci5VbnNwaWRlcmZ5KCk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBZGQgaXQgdG8gbWFwXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgc2VsZi5saXN0T2ZBcGFydG1lbnQgPSBMLm1hcmtlcihbZGF0YS5jZW50ZXIubGF0LCBkYXRhLmNlbnRlci5sbmddLCB7XG4gICAgICAgICAgICAgICAgICAgIGljb246IG15SWNvblxuICAgICAgICAgICAgICAgIH0pLmFkZFRvKHNlbGYubWFwKTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFR1cm4gb24gc2Nyb2xsIG9uIHNwaWRsaWZlclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICQoXCIuc2VhcmNoX19tYXAtY2F0YWxvZy13cmFwcGVyXCIpXG4gICAgICAgICAgICAgICAgICAgIC5jc3MoJ2hlaWdodCcsIHNwaWRsaWZlckhlaWdodHMpXG4gICAgICAgICAgICAgICAgICAgIC5tQ3VzdG9tU2Nyb2xsYmFyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbEluZXJ0aWE6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZVdoZWVsUGl4ZWxzOiAyNVxuICAgICAgICAgICAgICAgICAgICB9KS5jbGljayhlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBPbiBzcGlkbGlmZXIgcG9wdXAgcm93IGNsaWNrIGdvIHRvIGFwYXJ0bWFudCBwYWdlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgJCgnLm1hcC1zcGlkbGlmZXItY29sdW1uLWxpbmsnKS5jbGljayhlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAkKGUuY3VycmVudFRhcmdldCkuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5mYXZvcml0ZS51cGRhdGUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE93ZXJ3cml0ZSBsaWJyYXJ5IG1ldGhvZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZi5tYXJrZXJzLnNwaWRlcmZpZXIuVW5zcGlkZXJmeSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubGlzdE9mQXBhcnRtZW50LnJlbW92ZUZyb20pIHNlbGYubGlzdE9mQXBhcnRtZW50LnJlbW92ZUZyb20oc2VsZi5tYXApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYubWFya2Vycy5SZW1vdmVNYXJrZXJzKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlIGRhdGFcbiAgICAgICAgICovXG4gICAgICAgIGlmIChkYXRhLml0ZW1zICE9IG51bGwpIHtcbiAgICAgICAgICAgICQuZWFjaChkYXRhLml0ZW1zLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQ2hlY2sgbGF0IGxvbmcgY29yZHMgZm9yIGVtcHR5IG9yIDBcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoISh2YWx1ZS5sYXQgIT0gbnVsbCAmJiB2YWx1ZS5sb25nICE9IG51bGwgJiYgdmFsdWUubGF0ICE9IDAgJiYgdmFsdWUubG9uZyAhPSAwKSkge1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hcmtlciA9IE1BUE1BUktFUlNFUlZJQ0UuZ2V0KHNlbGYpLmNyZWF0ZU1hcmtlcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBTZXQgZGF0YSB0byBsaWJyYXJ5IG1hcmtlciBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5kYXRhLnRpdGxlID0gdmFsdWUudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5kYXRhLnVybCA9IHZhbHVlLnVyaTtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLmRhdGEuYWRkcmVzcyA9IHZhbHVlLmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5kYXRhLmZsb29yID0gdmFsdWUuZmxvb3I7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5kYXRhLnRvcF9mbG9vciA9IHZhbHVlLnRvcF9mbG9vcjtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLmRhdGEuc3F1YXJlID0gdmFsdWUuc3F1YXJlO1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXIuZGF0YS5jb3N0ID0gdmFsdWUuY29zdDtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLmRhdGEuc3BlY2lhbCA9IHZhbHVlLnNwZWNpYWw7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5kYXRhLmltYWdlID0gdmFsdWUuaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5kYXRhLmlkID0gdmFsdWUudWlkO1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXIuZGF0YS5mYXZvcml0ZSA9IHZhbHVlLmZhdm9yaXRlO1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXIuZGF0YS5zcXVhcmVfcHJpY2UgPSB2YWx1ZS5zcXVhcmVfcHJpY2U7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5kYXRhLnJhc3Nyb2Noa2EgPSB2YWx1ZS5yYXNzcm9jaGthO1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXIuZGF0YS5tYXRjYXBpdGFsID0gdmFsdWUubWF0Y2FwaXRhbDtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLmRhdGEubW9ydGFnYWdlID0gdmFsdWUubW9ydGFnYWdlO1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXIuZGF0YS5zdHJlZXQgPSB2YWx1ZS5hZGRyZXNzX3N0cmVldDtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLmRhdGEuZmxhdCA9IHZhbHVlLmFkZHJlc3NfZmxhdDtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLmRhdGEuc3VidHlwZSA9IHZhbHVlLnN1YnR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIENoZWNrIGZvciByZW50IHN1YnR5cGVcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaXNSZW50ID0gdmFsdWUuc3VidHlwZSA9PT0gXCJyZW50XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXJrZXJzLlJlZ2lzdGVyTWFya2VyKG1hcmtlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5tYXAucmVtb3ZlTGF5ZXIoc2VsZi5tYXJrZXJzKTtcbiAgICAgICAgc2VsZi5tYXAuYWRkTGF5ZXIoc2VsZi5tYXJrZXJzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIDJHSVMgbWFwXG4gICAgICovXG4gICAgbG9hZE1hcCgpIHtcbiAgICAgICAgREcudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWFwOiBwbHVnaW4gbG9hZCcpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBMb2FkIHBsdWdpbiBmb3IgY2x1c3Rlcml6ZSBvYmplY3RzIG9uIG1hcFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNMb2FkKSByZXR1cm4gREcucGx1Z2luKFwiL2Jvd2VyX2NvbXBvbmVudHMvUHJ1bmVDbHVzdGVyL2Rpc3QvUHJ1bmVDbHVzdGVyLmpzXCIpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSW5pdCAyR0lTIG1hcFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNMb2FkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tYXAgPSBERy5tYXAoJ21hcCcsIHtcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTMsXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgem9vbUNvbnRyb2w6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21hcDogbG9hZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuaXNMb2FkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2hvdyAyR0lTIG1hcFxuICAgICAqL1xuICAgIHNob3dNYXAoKSB7XG4gICAgICAgIGlmIChMT0NBVElPTlNFUlZJQ0UuZ2V0KHNlbGYpLmdldCgpLnZpZXcgPT09ICdtYXAnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWFwOiBzaG93Jyk7XG4gICAgICAgICAgICAkKCcubWFwJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICAgICAkKFwiI2FjY29yZGlvbi13cmFwcGVyXCIpLmhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQgLSAyNDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaGlkZSAyR0lTIHBhZ2VcbiAgICAgKi9cbiAgICBoaWRlTWFwKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWFwOiBoaWRlJyk7XG4gICAgICAgICQoJy5tYXAnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAkKFwiI2FjY29yZGlvbi13cmFwcGVyXCIpLmhlaWdodCgnYXV0bycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0clxuICAgICAqIEBwYXJhbSBsZW5ndGhcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICB0cnVuY2F0ZVN0cmluZyhzdHIsIGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gc3RyLmxlbmd0aCA+IGxlbmd0aCA/IHN0ci5zdWJzdHJpbmcoMCwgbGVuZ3RoIC0gMykgKyAnLi4uJyA6IHN0clxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIHJlc2l6ZSBldmVudFxuICAgICAqL1xuICAgIHJlc2l6ZU1hcCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkKFwiI2FjY29yZGlvblwiKS5vZmZzZXQoKSxcbiAgICAgICAgICAgICAgICBwb3NYID0gb2Zmc2V0LmxlZnQgKyAkKFwiI2FjY29yZGlvblwiKS53aWR0aCgpLFxuICAgICAgICAgICAgICAgIGdCb3VuZHMgPSBzZWxmLm1hcmtlcnMuQ2x1c3Rlci5Db21wdXRlR2xvYmFsQm91bmRzKCksXG4gICAgICAgICAgICAgICAgc291dGhXZXN0ID0gTC5sYXRMbmcoZ0JvdW5kcy5taW5MYXQsIGdCb3VuZHMubWluTG5nKSxcbiAgICAgICAgICAgICAgICBub3J0aEVhc3QgPSBMLmxhdExuZyhnQm91bmRzLm1heExhdCwgZ0JvdW5kcy5tYXhMbmcpLFxuICAgICAgICAgICAgICAgIGJvdW5kcyA9IEwubGF0TG5nQm91bmRzKHNvdXRoV2VzdCwgbm9ydGhFYXN0KTtcblxuICAgICAgICAgICAgc2VsZi5tYXAuaW52YWxpZGF0ZVNpemUoKTtcblxuICAgICAgICAgICAgc2VsZi5tYXAuZml0Qm91bmRzKGJvdW5kcywge1xuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BMZWZ0OiBbcG9zWCArIDEwLCAxODVdLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b21SaWdodDogW29mZnNldC5sZWZ0LCAyMDBdXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChcIi5zZWFyY2hfX21hcC1zcGVjaWFsLXdyYXBwZXJcIikuY3NzKCdtYXJnaW4tdG9wJywgd2luZG93LmlubmVySGVpZ2h0IC0gMjgyKTtcbiAgICAgICAgICAgICQoJy5zZWFyY2hfX21hcC1zcGVjaWFsLWl0ZW0nKS5jbGljayhlID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICQoJy5zZWFyY2hfX21hcC1zcGVjaWFsLWl0ZW0tYWRkcmVzcycsIGUuY3VycmVudFRhcmdldCkuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKFwiI2FjY29yZGlvbi13cmFwcGVyXCIpLmhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMDApO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93KG5ldyBFcnJvcihlKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBMb2FkXG4gICAgICovXG4gICAgICAgIC8vJCgnLmNvbnRlbnQnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAvLyQoJy5sb2FkZXInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXG4gICAgJCgnLnNlYXJjaF9fYnRuLWZpbHRlci1tb3JlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmV4dCA9ICQodGhpcykubmV4dCgpO1xuICAgICAgICB2YXIgbmV4dERpc3BsYXkgPSBuZXh0LmNzcygnZGlzcGxheScpO1xuXG4gICAgICAgIGlmIChuZXh0RGlzcGxheSA9PSAnYmxvY2snKSB7XG4gICAgICAgICAgICBuZXh0LmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB3aW5kb3cubWFwSXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnNlYXJjaF9fbWFwLWxpc3QtaXRlbScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsaW5rID0gJCgnLnNlYXJjaF9fbWFwLWxpc3QtaXRlbS1hZGRyZXNzJywgdGhpcyk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxpbmsuYXR0cignaHJlZicpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93LnRydW5jYXRlU3RyaW5nID0gKHN0ciwgbGVuZ3RoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdHIubGVuZ3RoID4gbGVuZ3RoID8gc3RyLnN1YnN0cmluZygwLCBsZW5ndGggLSAzKSArICcuLi4nIDogc3RyXG4gICAgfTtcblxuICAgICQoJy5mb3JtX19idG4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAkKCcuZm9ybV9fYnRuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgJCgnLmZvcm1fX2Jsb2NrJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJChpZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRjb2xzID0gJCgnLnNlYXJjaF9fbWFwLWNhdGFsb2ctcm93OmZpcnN0IHRkJywgJy5zZWFyY2hfX21hcC1jYXRhbG9nLXdyYXBwZXInKTtcbiAgICAgICAgdmFyICRoZWFkZXJzID0gJCgnLnNlYXJjaF9fbWFwLWNhdGFsb2ctaGVhZGVyLWZpZWxkJywgJy5zZWFyY2hfX21hcC1jYXRhbG9nLXdyYXBwZXInKTtcblxuICAgICAgICAkLmVhY2goJGhlYWRlcnMsIGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gJCgkY29sc1tpbmRleF0pLndpZHRoKCk7XG5cbiAgICAgICAgICAgICQoaXRlbSkud2lkdGgod2lkdGgpO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG5cbiAgICAkKCcuZmFxX19zcG9pbGVyLXRpdGxlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICQoJy5mYXFfX3Nwb2lsZXItdGl0bGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5mYXFfX3Nwb2lsZXItdGl0bGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmZhcV9fc3BvaWxlci1pdGVtLWhpZGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5mYXFfX3Nwb2lsZXItdGl0bGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cblxuICAgICQoJy5teS10YWJsZS1sb2wnKS5mbG9hdFRoZWFkKFxuICAgICAgICB7XG4gICAgICAgICAgICB1c2VBYnNvbHV0ZVBvc2l0aW9uaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNjcm9sbGluZ1RvcDogODBcbiAgICAgICAgfVxuICAgICk7XG5cbn07XG4iLCJleHBvcnQgY2xhc3MgYmFja2dyb3VuZCB7XG4gICAgLyoqXG4gICAgICogQmFja3N0cmV0Y2ggcGx1Z2luIGZvciBzZXQgYmFja2dyb3VuZCBpbWFnZSB3aXRoIG1heGltdW0gcGVyZm9ybWFuc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5pdCgpIHtcbiAgICAgICAgJCgnYm9keScpLmJhY2tzdHJldGNoKFwiL2ltZy9tYWluLWJnLmpwZ1wiKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIG1lbnUge1xuICAgIHN0YXRpYyBpbml0KCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogSnF1ZXJ5IFVJIGFjY29yZGlvbiBwbHVnaW4gbW9kdWxlXG4gICAgICAgICAqL1xuICAgICAgICAkKFwiI2FjY29yZGlvblwiKS5hY2NvcmRpb24oe1xuICAgICAgICAgICAgaGVpZ2h0U3R5bGU6IFwiY29udGVudFwiLFxuICAgICAgICAgICAgaWNvbnM6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICBhbmltYXRlOiAxNTBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1c3RvbSBzY3JvbGxiYXIgbG9hZGVyXG4gICAgICAgICAqL1xuICAgICAgICAkKFwiI2FjY29yZGlvbi13cmFwcGVyXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xuICAgICAgICAgICAgc2Nyb2xsSW5lcnRpYTogMFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJ2YXIgX3RoaXM7XG5cbmV4cG9ydCBjbGFzcyBmYXZvcml0ZSB7XG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIF90aGlzID0gdGhpcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHNldHRpbmdzIHRvIGNvb2tpZSBwbHVnaW5cbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICAkLmNvb2tpZS5qc29uID0gdHJ1ZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogb25lIHRpbWUgdXBkYXRlIG9uIGxvYWQgZm9yIHN0YXRpYyBwYWdlc1xuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMudXBkYXRlKCk7XG4gICAgICAgIF90aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IGdsb2JhbCBhcyB0byBtb2R1bGVcbiAgICAgICAgICogQHR5cGUge3VwZGF0ZX1cbiAgICAgICAgICovXG4gICAgICAgIHdpbmRvdy5mYXZvcml0ZSA9IF90aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0Zhdm9yaXRlKHVpZCkge1xuICAgICAgICB2YXIgZmF2b3JpdGVDb29raWUgPSAkLmNvb2tpZSgnZmF2b3JpdGUnKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZhdm9yaXRlQ29va2llW3VpZF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGZhdm9yaXRlIGZvciBuZXcgZWxlbWVudHNcbiAgICAgKi9cbiAgICBzdGF0aWMgdXBkYXRlKGVsZW1lbnQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmQgZXZlbnQgb24gYWxsIGZhdm9yaXRlIGVsZW1lbnRzXG4gICAgICAgICAqL1xuICAgICAgICAkKGVsZW1lbnQgfHwgJy5pdGVtLWZhdm9yaXRlJylcbiAgICAgICAgICAgIC5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgICAgIGlkID0gJGVsZW1lbnQuZGF0YSgnaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBfdGhpcy5pc0Zhdm9yaXRlKGlkKSB8fCAkZWxlbWVudC5oYXNDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRGYXZvcml0ZVRvQnJvd3NlcihpZCwgdmFsdWUsICRlbGVtZW50KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2xpY2soZSA9PiB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xpY2soZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNsaWNrIG9uIGZhdm9yaXRlIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIHN0YXRpYyBjbGljayhlbGVtZW50KSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCksXG4gICAgICAgICAgICBpZCA9ICRlbGVtZW50LmRhdGEoJ2lkJyksXG4gICAgICAgICAgICB2YWx1ZSA9IF90aGlzLmlzRmF2b3JpdGUoaWQpIHx8ICRlbGVtZW50Lmhhc0NsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICBfdGhpcy5jaGFuZ2VGYXZvcml0ZVN0YXR1cyhpZCwgdmFsdWUsICRlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZmF2b3JpdGUgaXRlbSBvbiBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY2hhbmdlRmF2b3JpdGVTdGF0dXMoaWQsIHZhbHVlLCAkZWxlbWVudCkge1xuICAgICAgICAvL2NoYW5nZSB2YWx1ZVxuICAgICAgICB2YWx1ZSA9ICF2YWx1ZTtcbiAgICAgICAgLy9sb2dcbiAgICAgICAgY29uc29sZS5sb2coYHNldCBmYXZvcml0ZSBpZDogJHtpZH0sIHZhbHVlOiAke3ZhbHVlfWApO1xuICAgICAgICAvL3VwZGF0ZSBmYXZvcml0ZSBzdGF0dXMgYW55d2FyZVxuICAgICAgICBfdGhpcy5zZXRGYXZvcml0ZVRvQnJvd3NlcihpZCwgdmFsdWUsICRlbGVtZW50KTtcbiAgICAgICAgX3RoaXMuc2V0RmF2b3JpdGVUb0Nvb2tpZShpZCwgdmFsdWUpO1xuICAgICAgICBfdGhpcy5zZXRGYXZvcml0ZVRvU2VydmVyKGlkLCB2YWx1ZSk7XG4gICAgICAgIF90aGlzLnVwZGF0ZUNvdW50ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZmF2b3JpdGUgc3RhdHVzIGluIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0RmF2b3JpdGVUb0Jyb3dzZXIoaWQsIHZhbHVlLCAkZWxlbWVudCkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICRlbGVtZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgZmF2b3JpdGUgaXRlbSB0byBjb29raWVcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0RmF2b3JpdGVUb0Nvb2tpZShpZCwgdmFsdWUpIHtcbiAgICAgICAgLy9nZXQgZmF2b3JpdGUgZnJvbSBjb29raWUgb3IgY3JhdGUgbmV3IGNvb2tpZSBvYmplY3RcbiAgICAgICAgdmFyIGZhdm9yaXRlID0gJC5jb29raWUoJ2Zhdm9yaXRlJykgfHwge307XG4gICAgICAgIC8vdXBkYXRlIGZhdm9yaXRlIHN0YXR1c1xuICAgICAgICBmYXZvcml0ZVtpZF0gPSB2YWx1ZTtcbiAgICAgICAgLy91cGRhdGUgY29va2llXG4gICAgICAgICQuY29va2llKCdmYXZvcml0ZScsIGZhdm9yaXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZmF2b3JpdGUgc3RhdHVzIG9uIHNlcnZlclxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXRGYXZvcml0ZVRvU2VydmVyKGlkLCB2YWx1ZSkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9yZWFsLWVzdGF0ZS1kZXYuYnVyZWF1aXQuY29tL3NpdGUvZmF2b3JpdGUvXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdqc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBmYXZvcml0ZSBjb3VudGVyIHN0YXR1c1xuICAgICAqL1xuICAgIHN0YXRpYyB1cGRhdGVDb3VudGVyKCkge1xuICAgICAgICBsZXQgZmF2b3JpdGVDb29raWUgPSAkLmNvb2tpZSgnZmF2b3JpdGUnKSB8fCB7fTtcbiAgICAgICAgbGV0IGNvdW50RmF2b3JpdGVDb29raWUgPSAwO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZmF2b3JpdGVDb29raWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBmYXZvcml0ZUNvb2tpZSA9IEpTT04ucGFyc2UoZmF2b3JpdGVDb29raWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5mb3JPd24oZmF2b3JpdGVDb29raWUsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY291bnRGYXZvcml0ZUNvb2tpZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZmF2b3JpdGUtY291bnRlcicpLnRleHQoY291bnRGYXZvcml0ZUNvb2tpZSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBnYWxsZXJ5IHtcbiAgICBzdGF0aWMgaW5pdCgpIHtcbiAgICAgICAgJCgnLmZvdG9yYW1hJykuZm90b3JhbWEoe1xuICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICAgICAgdGh1bWJ3aWR0aDogMTAwLFxuICAgICAgICAgICAgdGh1bWJoZWlnaHQ6IDcwLFxuICAgICAgICAgICAgdGh1bWJib3JkZXJ3aWR0aDogMyxcbiAgICAgICAgICAgIHRodW1ibWFyZ2luOiAxMCxcbiAgICAgICAgICAgIGF1dG9wbGF5OiAxMjAwMFxuICAgICAgICB9KTtcbiAgICB9XG59IiwidmFyIF90aGlzO1xuZXhwb3J0IGNsYXNzIGhlYWRlciB7XG4gICAgLyoqXG4gICAgICogSW5pdCBoZWFkZXIgbW9kdWxlc1xuICAgICAqL1xuICAgIHN0YXRpYyBpbml0KCkge1xuICAgICAgICBfdGhpcyA9IHRoaXM7XG4gICAgICAgICQoJy5oZWFkZXJfX21lbnUtbGlzdC1pdGVtLWRyb3Bkb3duLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAuaG92ZXIoX3RoaXMuc2hvd1VzZXJNZW51LCBfdGhpcy5oaWRlVXNlck1lbnUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgaGVhZGVyIHVzZXIgbWVudVxuICAgICAqIEBwYXJhbSBlIC0ganF1ZXJ5IGV2ZW50XG4gICAgICovXG4gICAgc3RhdGljIHNob3dVc2VyTWVudShlKSB7XG4gICAgICAgICQoJy5oZWFkZXJfX21lbnUtbGlzdC1pdGVtLWRyb3Bkb3duLXdyYXBwZXInLCBlLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBoZWFkZXIgdXNlciBtZW51XG4gICAgICogQHBhcmFtIGUgLSBqcXVlcnkgZXZlbnRcbiAgICAgKi9cbiAgICBzdGF0aWMgaGlkZVVzZXJNZW51KGUpIHtcbiAgICAgICAgJCgnLmhlYWRlcl9fbWVudS1saXN0LWl0ZW0tZHJvcGRvd24td3JhcHBlcicsIGUuY3VycmVudFRhcmdldClcbiAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH1cbn0iLCJcbmV4cG9ydCBjbGFzcyBpbnB1dFBob25lIHtcbiAgICBzdGF0aWMgaW5pdChzZWxlY3Rvcikge1xuICAgICAgICAkKHNlbGVjdG9yKVxuICAgICAgICAgICAgLm1hc2soXCIrNyg5OTkpIDk5OS05OS05OVwiKVxuICAgICAgICAgICAgLm9uKFwiYmx1clwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBsYXN0ID0gJCh0aGlzKS52YWwoKS5zdWJzdHIoICQodGhpcykudmFsKCkuaW5kZXhPZihcIi1cIikgKyAxICk7XG5cbiAgICAgICAgICAgIGlmKCBsYXN0Lmxlbmd0aCA9PSAzICkge1xuICAgICAgICAgICAgICAgIHZhciBtb3ZlID0gJCh0aGlzKS52YWwoKS5zdWJzdHIoICQodGhpcykudmFsKCkuaW5kZXhPZihcIi1cIikgLSAxLCAxICk7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3Rmb3VyID0gbW92ZSArIGxhc3Q7XG5cbiAgICAgICAgICAgICAgICB2YXIgZmlyc3QgPSAkKHRoaXMpLnZhbCgpLnN1YnN0ciggMCwgOSApO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS52YWwoIGZpcnN0ICsgJy0nICsgbGFzdGZvdXIgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsInZhciBfdGhpcztcblxuZXhwb3J0IGNsYXNzIG1vZGFsIHtcbiAgICAvKipcbiAgICAgKiBJbml0IG1vZHVsZVxuICAgICAqL1xuICAgIHN0YXRpYyBpbml0KCkge1xuICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGVhY2ggYWxsIG1vZGFsIHdpbmRvd3Mgc2VsZWN0IGVsZW1lbnRcbiAgICAgICAgICogY2hlayBmb3IgYWN0aXZlLWxvYWRcbiAgICAgICAgICovXG4gICAgICAgICQoJy5teW1vZGFsJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2N1cmVudCBlbGVtZW50XG4gICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCRlbGVtZW50Lmhhc0NsYXNzKCdhY3RpdmUtbG9hZCcpKSB7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGUoJGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hvdy1tb2RhbCcpLmNsaWNrKF90aGlzLm9wZW4pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgbW9kYWwgaWYgY2xpY2sgb24gbW9kZWwgYWN0aXZhdGlvbiBsaW5rXG4gICAgICogQHBhcmFtIGVcbiAgICAgKi9cbiAgICBzdGF0aWMgb3BlbihlKSB7XG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgJChpZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuYWN0aXZhdGUoaWQpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZSBtb2RhbCB3aW5kb3dcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIHN0YXRpYyBjbG9zZShlbGVtZW50KSB7XG4gICAgICAgICQoZWxlbWVudCkuY2xvc2VzdCgnLm15bW9kYWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFjdGl2YXRlKHNlbGVjdCkge1xuICAgICAgICB2YXIgJG1vZGFsV2luZG93ID0gJCgnLm15bW9kYWxfX3dpbmRvdycsIHNlbGVjdCksXG4gICAgICAgICAgICBjaGlsZCA9ICRtb2RhbFdpbmRvdy5jaGlsZHJlbigpLFxuICAgICAgICAgICAgY2hpbGRIZWlnaHQgPSAkKGNoaWxkKS5vdXRlckhlaWdodCh0cnVlKSxcbiAgICAgICAgICAgIGNoaWxkV2lkdGggPSAkKGNoaWxkKS5vdXRlcldpZHRoKHRydWUpO1xuXG4gICAgICAgICRtb2RhbFdpbmRvd1xuICAgICAgICAgICAgLmhlaWdodChjaGlsZEhlaWdodCkud2lkdGgoY2hpbGRXaWR0aClcbiAgICAgICAgICAgIC5jbGljayhlID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLm15bW9kYWwnKS5jbGljayhlID0+IHtcbiAgICAgICAgICAgIF90aGlzLmNsb3NlKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KS5vbih7XG4gICAgICAgICAgICAnbW91c2V3aGVlbCc6IGUgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcubXltb2RhbF9fY2xvc2UnKS5jbGljayhlID0+IHtcbiAgICAgICAgICAgIF90aGlzLmNsb3NlKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KVxuICAgIH1cbn0iLCJ2YXIgX3RoaXM7XG5cbmV4cG9ydCBjbGFzcyBwb3B1cCB7XG5cbiAgICBzdGF0aWMgaW5pdCgpIHtcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIF90aGlzLnBvcHVwTGlzdCA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCIucG9wdXAtZmF2b3JpdGVcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBcItCSINC40LfQsdGA0LDQvdC90L7QvCDQvNC+0LbQvdC+INGB0YDQsNCy0L3QuNCy0LDRgtGMINC+0LHRitGP0LLQu9C10L3QuNGPXCIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AgbGVmdCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiLnBvcHVwLW1vdGhlclwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwi0JzQsNGC0LXRgNC40L3RgdC60LjQuSDQutCw0L/QuNGC0LDQu1wiLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wIHJpZ2h0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCIucG9wdXAtaXBvXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogXCLQkiDQuNC/0L7RgtC10LrRg1wiLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wIHJpZ2h0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCIucG9wdXAtcmFzclwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwi0JIg0YDQsNGB0YHRgNC+0YfQutGDXCIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AgcmlnaHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cblxuICAgICAgICAkLmVhY2goX3RoaXMucG9wdXBMaXN0LCAoaSwgcG9wdXApID0+IHtcbiAgICAgICAgICAgICQocG9wdXAuc2VsZWN0b3IpLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3IERyb3Aoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHBvcHVwLnRleHQsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3B1cC5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgb3Blbk9uOiAnaG92ZXInLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnZHJvcC10aGVtZS1hcnJvd3MtYm91bmNlIGRyb3AtaGVybydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5saW5rKCk7XG5cbiAgICAgICAgd2luZG93LnBvcHVwID0gX3RoaXMudXBkYXRlO1xuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGUoZWxlbWVudCwgdGV4dCwgcG9zaXRpb24pIHtcbiAgICAgICAgbmV3IERyb3Aoe1xuICAgICAgICAgICAgdGFyZ2V0OiBlbGVtZW50WzBdLFxuICAgICAgICAgICAgY29udGVudDogdGV4dCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgICAgIG9wZW5PbjogJ2hvdmVyJyxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdkcm9wLXRoZW1lLWFycm93cy1ib3VuY2UgZHJvcC1oZXJvJ1xuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5saW5rKGVsZW1lbnRbMF0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBsaW5rKGVsZW1lbnQpIHtcbiAgICAgICAgJChlbGVtZW50IHx8ICcuZHJvcC10YXJnZXQnKS5jbGljayhlID0+IHtcbiAgICAgICAgICAgIHZhciBocmVmID0gJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIGlmIChocmVmKSB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsInZhciBfdGhpcztcblxuZXhwb3J0IGNsYXNzIGNpdHlTZWxlY3RvciB7XG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICAgICAgX3RoaXMuJGNpdHlTZWxlY3QgPSAkKFwiLmNob3Nlbi1zZWxlY3QtY2l0eVwiKTtcbiAgICAgICAgX3RoaXMuJGRpc3RTZWxlY3QgPSAkKFwiLmNob3Nlbi1zZWxlY3QtZGlzdFwiKTtcblxuICAgICAgICBfdGhpcy4kZGlzdFNlbGVjdC5jaG9zZW4oe1xuICAgICAgICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAxMCxcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyX3RleHRfc2luZ2xlOiBcItCS0YvQsdC10YDQuNGC0LUg0KDQsNC50L7QvVwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLiRjaXR5U2VsZWN0LmNob3Nlbih7XG4gICAgICAgICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDEwLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXJfdGV4dF9zaW5nbGU6IFwi0JLRi9Cx0LXRgNC40YLQtSDQs9C+0YDQvtC0XCJcbiAgICAgICAgfSkub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChldnQsIHBhcmFtcykge1xuICAgICAgICAgICAgX3RoaXMubG9hZERpc3QocGFyYW1zLnNlbGVjdGVkKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZERpc3QoY2l0eUlkKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL3JlYWwtZXN0YXRlLWRldi5idXJlYXVpdC5jb20vc2l0ZS9kaXN0cmljdHNcIixcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgY2l0eTogY2l0eUlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIF90aGlzLmFwcGx5RGlzdChkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFwcGx5RGlzdChkYXRhKSB7XG4gICAgICAgIF90aGlzLiRkaXN0U2VsZWN0LmVtcHR5KCk7XG4gICAgICAgICQuZWFjaChkYXRhLmRpc3RyaWN0cywgKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICBfdGhpcy4kZGlzdFNlbGVjdC5hcHBlbmQoJzxvcHRpb24gIHZhbHVlPVwiJyArIGl0ZW0uaWQgKyAnXCI+JyArIGl0ZW0ubmFtZSArICc8L29wdGlvbj4nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLiRkaXN0U2VsZWN0LnRyaWdnZXIoJ2Nob3Nlbjp1cGRhdGVkJyk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGNsYXNzIHNlbGVjdG9yIHtcbiAgICBzdGF0aWMgaW5pdCgpIHtcbiAgICAgICAgJChcIi5tb3J0Z2FnZXNfX2Zvcm0tZHJvcGRvd25cIikuY2hvc2VuKHtcbiAgICAgICAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMTAsXG4gICAgICAgICAgICB3aWR0aDogJzIyMHB4JyxcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChcIi5zdGFmZl9fZmlsdGVyLWNvbXBldGVuY2UtZHJvcGRvd25cIikuY2hvc2VuKHtcbiAgICAgICAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMTAsXG4gICAgICAgICAgICB3aWR0aDogJzI4JScsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoXCIuYWRkLXBhZ2VfX2Ryb3Bkb3duXCIpLmNob3Nlbih7XG4gICAgICAgICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDEwLFxuICAgICAgICAgICAgd2lkdGg6ICczNSUnLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIlxuICAgICAgICB9KTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyXG4gICAgLm1vZHVsZSgncHJvcGVydHlDdHJsJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ3Byb3BlcnR5Q3RybCcsIFsnJHNjb3BlJywgJyRyb290U2NvcGUnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkdGltZW91dCkge1xuICAgICAgICAkc2NvcGUudG9nZ2xlID0gJ2dhbGxlcnknO1xuICAgICAgICAkc2NvcGUuY2VudGVyID0gW107XG5cbiAgICAgICAgdmFyIG1hcDtcblxuICAgICAgICAkc2NvcGUuY2hhbmdlVG9nZ2xlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICRzY29wZS50b2dnbGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIERHLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmludmFsaWRhdGVTaXplKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXJrZXJJY29uID0gREcuaWNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVybDogJy9pbWcvaWNvbi1tYXAucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uUmV0aW5hVXJsOiAnL2ltZy9pY29uLW1hcEAyeC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25TaXplOiBbMjksIDUwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQW5jaG9yOiBbMTUsIDUwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dVcmw6ICcvaW1nL2ljb24tbWFwLXNoYWRvdy5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd1JldGluYVVybDogJy9pbWcvaWNvbi1tYXAtc2hhZG93QDJ4LnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93U2l6ZTogWzQwLCAxOV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93QW5jaG9yOiBbMywgMThdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hcmtlciA9IERHLm1hcmtlcigkc2NvcGUuY2VudGVyLCB7aWNvbjogbWFya2VySWNvbn0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkTGF5ZXIobWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgfSwzMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIERHLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBtYXAgPSBERy5tYXAoJ21hcCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2VudGVyXCI6ICRzY29wZS5jZW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMTQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB6b29tQ29udHJvbDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LDEwKTtcbiAgICAgICAgfVxuICAgICAgICBpbml0KCk7XG4gICAgfV0pOyIsIi8qKlxuICogQSBoZWxwZXIgY2xhc3MgdG8gc2ltcGxpZnkgcmVnaXN0ZXJpbmcgQW5ndWxhciBjb21wb25lbnRzIGFuZCBwcm92aWRlIGEgY29uc2lzdGVudCBzeW50YXggZm9yIGRvaW5nIHNvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIoYXBwTmFtZSkge1xuXG4gICAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKGFwcE5hbWUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlyZWN0aXZlOiBkaXJlY3RpdmUsXG4gICAgICAgIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXG4gICAgICAgIHNlcnZpY2U6IHNlcnZpY2UsXG4gICAgICAgIHByb3ZpZGVyOiBwcm92aWRlcixcbiAgICAgICAgZmFjdG9yeTogZmFjdG9yeVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgY29uc3RydWN0b3JGbikge1xuXG4gICAgICAgIGNvbnN0cnVjdG9yRm4gPSBfbm9ybWFsaXplQ29uc3RydWN0b3IoY29uc3RydWN0b3JGbik7XG5cbiAgICAgICAgaWYgKCFjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5jb21waWxlKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gZW1wdHkgY29tcGlsZSBmdW5jdGlvbiBpZiBub25lIHdhcyBkZWZpbmVkLlxuICAgICAgICAgICAgY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSA9ICgpID0+IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9yaWdpbmFsQ29tcGlsZUZuID0gX2Nsb25lRnVuY3Rpb24oY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSk7XG5cbiAgICAgICAgLy8gRGVjb3JhdGUgdGhlIGNvbXBpbGUgbWV0aG9kIHRvIGF1dG9tYXRpY2FsbHkgcmV0dXJuIHRoZSBsaW5rIG1ldGhvZCAoaWYgaXQgZXhpc3RzKVxuICAgICAgICAvLyBhbmQgYmluZCBpdCB0byB0aGUgY29udGV4dCBvZiB0aGUgY29uc3RydWN0b3IgKHNvIGB0aGlzYCB3b3JrcyBjb3JyZWN0bHkpLlxuICAgICAgICAvLyBUaGlzIGdldHMgYXJvdW5kIHRoZSBwcm9ibGVtIG9mIGEgbm9uLWxleGljYWwgXCJ0aGlzXCIgd2hpY2ggb2NjdXJzIHdoZW4gdGhlIGRpcmVjdGl2ZSBjbGFzcyBpdHNlbGZcbiAgICAgICAgLy8gcmV0dXJucyBgdGhpcy5saW5rYCBmcm9tIHdpdGhpbiB0aGUgY29tcGlsZSBmdW5jdGlvbi5cbiAgICAgICAgX292ZXJyaWRlKGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLCAnY29tcGlsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxDb21waWxlRm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5saW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5saW5rLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGZhY3RvcnlBcnJheSA9IF9jcmVhdGVGYWN0b3J5QXJyYXkoY29uc3RydWN0b3JGbik7XG5cbiAgICAgICAgYXBwLmRpcmVjdGl2ZShuYW1lLCBmYWN0b3J5QXJyYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250cm9sbGVyKG5hbWUsIGNvbnRydWN0b3JGbikge1xuICAgICAgICBhcHAuY29udHJvbGxlcihuYW1lLCBjb250cnVjdG9yRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXJ2aWNlKG5hbWUsIGNvbnRydWN0b3JGbikge1xuICAgICAgICBhcHAuc2VydmljZShuYW1lLCBjb250cnVjdG9yRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm92aWRlcihuYW1lLCBjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIGFwcC5wcm92aWRlcihuYW1lLCBjb25zdHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmFjdG9yeShuYW1lLCBjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIGNvbnN0cnVjdG9yRm4gPSBfbm9ybWFsaXplQ29uc3RydWN0b3IoY29uc3RydWN0b3JGbik7XG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pO1xuICAgICAgICBhcHAuZmFjdG9yeShuYW1lLCBmYWN0b3J5QXJyYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgY29uc3RydWN0b3JGbiBpcyBhbiBhcnJheSBvZiB0eXBlIFsnZGVwMScsICdkZXAyJywgLi4uLCBjb25zdHJ1Y3RvcigpIHt9XVxuICAgICAqIHdlIG5lZWQgdG8gcHVsbCBvdXQgdGhlIGFycmF5IG9mIGRlcGVuZGVuY2llcyBhbmQgYWRkIGl0IGFzIGFuICRpbmplY3QgcHJvcGVydHkgb2YgdGhlXG4gICAgICogYWN0dWFsIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSBpbnB1dFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvckZuO1xuXG4gICAgICAgIGlmIChpbnB1dC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB2YXIgaW5qZWN0ZWQgPSBpbnB1dC5zbGljZSgwLCBpbnB1dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4gPSBpbnB1dFtpbnB1dC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4uJGluamVjdCA9IGluamVjdGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JGbiA9IGlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGludG8gYSBmYWN0b3J5IGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhhdFxuICAgICAqIGNvbnN0cnVjdG9yLCB3aXRoIHRoZSBjb3JyZWN0IGRlcGVuZGVuY2llcyBhdXRvbWF0aWNhbGx5IGluamVjdGVkIGFzIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEluIG9yZGVyIHRvIGluamVjdCB0aGUgZGVwZW5kZW5jaWVzLCB0aGV5IG11c3QgYmUgYXR0YWNoZWQgdG8gdGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHdpdGggdGhlXG4gICAgICogYCRpbmplY3RgIHByb3BlcnR5IGFubm90YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uc3RydWN0b3JGblxuICAgICAqIEByZXR1cm5zIHtBcnJheS48VD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBhcnJheSBvZiBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgbmVlZGVkIGJ5IHRoaXMgY29tcG9uZW50IChhcyBjb250YWluZWQgaW4gdGhlIGAkaW5qZWN0YCBhcnJheSlcbiAgICAgICAgdmFyIGFyZ3MgPSBjb25zdHJ1Y3RvckZuLiRpbmplY3QgfHwgW107XG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBhcmdzLnNsaWNlKCk7IC8vIGNyZWF0ZSBhIGNvcHkgb2YgdGhlIGFycmF5XG4gICAgICAgIC8vIFRoZSBmYWN0b3J5QXJyYXkgdXNlcyBBbmd1bGFyJ3MgYXJyYXkgbm90YXRpb24gd2hlcmVieSBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IGlzIHRoZSBuYW1lIG9mIGFcbiAgICAgICAgLy8gZGVwZW5kZW5jeSwgYW5kIHRoZSBmaW5hbCBpdGVtIGlzIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICAgICAgZmFjdG9yeUFycmF5LnB1c2goKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIC8vcmV0dXJuIG5ldyBjb25zdHJ1Y3RvckZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yRm4oLi4uYXJncyk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZVtrZXldID0gaW5zdGFuY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZhY3RvcnlBcnJheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZSBhIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIG9yaWdpbmFsXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jbG9uZUZ1bmN0aW9uKG9yaWdpbmFsKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIGFuIG9iamVjdCdzIG1ldGhvZCB3aXRoIGEgbmV3IG9uZSBzcGVjaWZpZWQgYnkgYGNhbGxiYWNrYC5cbiAgICAgKiBAcGFyYW0gb2JqZWN0XG4gICAgICogQHBhcmFtIG1ldGhvZE5hbWVcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfb3ZlcnJpZGUob2JqZWN0LCBtZXRob2ROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBvYmplY3RbbWV0aG9kTmFtZV0gPSBjYWxsYmFjayhvYmplY3RbbWV0aG9kTmFtZV0pXG4gICAgfVxuXG59Il19

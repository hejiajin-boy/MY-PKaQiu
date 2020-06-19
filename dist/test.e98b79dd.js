// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
//引入字符串

/*import string from './css.js'*/
var string = "\n\n.skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.skin * ::before,\n.skin *::after {\n    box-sizing: border-box;\n}\n\n\n\n\n/*1. \u76AE\u80A4 */\n\n.skin {\n    position: relative;\n    background: #ffdb00;\n    /* \u5168\u5C4F */\n    min-height: 100vh;\n}\n\n\n/* 2.\u9F3B\u5B50 */\n\n.nose {\n    border: 10px solid black;\n    /*\u4E24\u8FB9\u900F\u660E\uFF0C*/\n    border-color: black transparent transparent;\n    bottom: none;\n    width: 0;\n    height: 0;\n    position: relative;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;\n    /* \u63D0\u9AD8\u4F18\u5148\u7EA7 \u4E0A\u5634\u5507\u88AB\u906E\u4E86 */\n    z-index: 10;\n}\n\n\n/* \u9F3B\u5B50\u52A8\u753B\u6548\u679C\u6447\u6643 */\n\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n    }\n    33% {\n        transform: rotate(15deg);\n    }\n    66% {\n        transform: rotate(-15deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n.nose:hover {\n    transform-origin: 50% 100%;\n    animation: wave 0.7s infinite linear;\n}\n\n.yuan {\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    /* border: 1px solid skyblue; */\n    top: -16px;\n    left: -10px;\n    /* \u957F\u65B9\u5F62\u53D8\u5706\u5F27 */\n    border-radius: 10px 10px 0 0;\n    background-color: black;\n}\n\n\n/* 3.\u773C\u775B */\n\n.eye {\n    border: 1px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius: 50%;\n}\n\n\n/* \u7528\u4F2A\u5143\u7D20\u505A\u5C0F\u5706 */\n\n.eye::before {\n    content: '';\n    display: block;\n    border: 3px solid #000;\n    width: 25px;\n    height: 25px;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n    top: 4px;\n}\n\n\n/* \u5DE6\u53F3\u4E00\u767E\u8DDD\u79BB */\n\n.eye.left {\n    transform: translateX(-100px);\n}\n\n.eye.right {\n    transform: translateX(100px);\n}\n\n\n/* 4.\u5634\u5DF4 */\n\n.mouth {\n    /* border: 1px solid red; */\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n}\n\n\n/* 4.1\u4E0A\u5634\u5507 */\n\n.mouth .up {\n    position: relative;\n    top: -20px;\n    z-index: 1;\n}\n\n\n/* (1) \u5DE6\u5634\u5507 */\n\n.mouth .up .lip {\n    border: 3px solid black;\n    height: 30px;\n    width: 100px;\n    background: #ffdb00;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: relative;\n    /* \u5C45\u4E2D\u7684\u505A\u6CD5 */\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n}\n\n.mouth .up .lip::before {\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background: #ffdb00;\n}\n\n.mouth .up .lip.left {\n    /* \u692D\u5706 */\n    border-radius: 0 0 0 50px;\n    /* \u503E\u659C */\n    transform: rotate(-15deg) translateX(-53px);\n}\n\n.mouth .up .lip.left::before {\n    right: -6px;\n}\n\n\n/* (2) \u53F3\u5634\u5507 */\n\n.mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n    /* \u503E\u659C */\n    transform: rotate(15deg) translateX(53px);\n}\n\n.mouth .up .lip.right::before {\n    left: -6px;\n}\n\n\n/* 4.2\u4E0B\u5634\u5507 */\n\n.mouth .down {\n    /* border: 1px solid red; */\n    height: 250px;\n    position: absolute;\n    top: 5px;\n    width: 100%;\n    overflow: hidden;\n}\n\n\n/* \u7B2C\u4E00\u4E2A\u5706 */\n\n.mouth .down .yuan1 {\n    border: 1px solid black;\n    width: 150px;\n    height: 1000px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    /* \u505A\u820C\u5934 */\n    border-radius: 75px/300px;\n    background: #9b000a;\n    overflow: hidden;\n}\n\n\n/* \u7B2C\u4E8C\u4E2A\u5706 */\n\n.mouth .down .yuan1 .yuan2 {\n    border: 1px solid green;\n    width: 200px;\n    height: 300px;\n    background: #ff485f;\n    position: absolute;\n    bottom: -105px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n}\n\n\n/* 5.\u8138\u988A */\n\n.face {\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 200px;\n    margin-left: -44px;\n    z-index: 3;\n}\n\n\n/* \u95EA\u7535\u52A8\u753B */\n\n.face>img {\n    /* border: 1px solid red; */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}\n\n\n/* 5.1\u5DE6\u8138 */\n\n.face.left {\n    transform: translateX(-180px);\n    background: #ff0000;\n    border-radius: 50%;\n}\n\n.face.left>img {\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n}\n\n\n/* 5.2\u53F3\u8138 */\n\n.face.right {\n    transform: translateX(180px);\n    background: #ff0000;\n    border-radius: 50%;\n}";
var n = 1;
demo.innerText = string.substr(from = 0, n);
demo2.innerHTML = string.substr(from = 0, n); //时间间隔

var time = 100;

var run = function run() {
  n += 1; //判断字符串的长度，并停止执行。

  if (n > string.length) {
    window.clearInterval(id);
    return;
  }

  console.log(n + ':' + string.substr(from = 0, n));
  demo.innerText = string.substr(from = 0, n);
  demo2.innerHTML = string.substr(from = 0, n); //滚动条一直处于最下方

  demo.scrollTop = demo.scrollHeight;
}; //重设闹钟


var play = function play() {
  return setInterval(run, time);
};

var id = play(); //砸掉当前闹钟

var pause = function pause() {
  window.clearInterval(id);
}; //1.暂停


btnPause.onclick = function () {
  pause();
}; //2.播放


btnPlay.onclick = function () {
  id = play();
}; //3.慢速


btnSlow.onclick = function () {
  pause();
  time = 300;
  id = play();
}; //4.中速


btnNormal.onclick = function () {
  pause();
  time = 100;
  id = play();
}; //5.快速


btnFast.onclick = function () {
  pause();
  time = 0;
  id = play();
};
},{}],"C:/Users/19858/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55098" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/19858/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map
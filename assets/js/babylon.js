(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("babylonjs", [], factory);
	else if(typeof exports === 'object')
		exports["babylonjs"] = factory();
	else
		root["BABYLON"] = factory();
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../node_modules/tslib/tslib.es6.js":
/*!***************************************************!*\
  !*** ../../../../node_modules/tslib/tslib.es6.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "../../../lts/core/dist/Actions/abstractActionManager.js":
/*!***************************************************************!*\
  !*** ../../../lts/core/dist/Actions/abstractActionManager.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractActionManager": () => (/* binding */ AbstractActionManager)
/* harmony export */ });
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/constants */ "../../../lts/core/dist/Engines/constants.js");

/**
 * Abstract class used to decouple action Manager from scene and meshes.
 * Do not instantiate.
 * @see https://doc.babylonjs.com/how_to/how_to_use_actions
 */
var AbstractActionManager = /** @class */ (function () {
    function AbstractActionManager() {
        /** Gets the cursor to use when hovering items */
        this.hoverCursor = "";
        /** Gets the list of actions */
        this.actions = new Array();
        /**
         * Gets or sets a boolean indicating that the manager is recursive meaning that it can trigger action from children
         */
        this.isRecursive = false;
    }
    Object.defineProperty(AbstractActionManager, "HasTriggers", {
        /**
         * Does exist one action manager with at least one trigger
         **/
        get: function () {
            for (var t in AbstractActionManager.Triggers) {
                if (Object.prototype.hasOwnProperty.call(AbstractActionManager.Triggers, t)) {
                    return true;
                }
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractActionManager, "HasPickTriggers", {
        /**
         * Does exist one action manager with at least one pick trigger
         **/
        get: function () {
            for (var t in AbstractActionManager.Triggers) {
                if (Object.prototype.hasOwnProperty.call(AbstractActionManager.Triggers, t)) {
                    var tAsInt = parseInt(t);
                    if (tAsInt >= _Engines_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.ACTION_OnPickTrigger && tAsInt <= _Engines_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.ACTION_OnPickUpTrigger) {
                        return true;
                    }
                }
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Does exist one action manager that handles actions of a given trigger
     * @param trigger defines the trigger to be tested
     * @return a boolean indicating whether the trigger is handled by at least one action manager
     **/
    AbstractActionManager.HasSpecificTrigger = function (trigger) {
        for (var t in AbstractActionManager.Triggers) {
            if (Object.prototype.hasOwnProperty.call(AbstractActionManager.Triggers, t)) {
                var tAsInt = parseInt(t);
                if (tAsInt === trigger) {
                    return true;
                }
            }
        }
        return false;
    };
    /** Gets the list of active triggers */
    AbstractActionManager.Triggers = {};
    return AbstractActionManager;
}());



/***/ }),

/***/ "../../../lts/core/dist/Actions/action.js":
/*!************************************************!*\
  !*** ../../../lts/core/dist/Actions/action.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/observable */ "../../../lts/core/dist/Misc/observable.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Maths_math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Maths/math.color */ "../../../lts/core/dist/Maths/math.color.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Misc/typeStore */ "../../../lts/core/dist/Misc/typeStore.js");




/**
 * The action to be carried out following a trigger
 * @see https://doc.babylonjs.com/how_to/how_to_use_actions#available-actions
 */
var Action = /** @class */ (function () {
    /**
     * Creates a new Action
     * @param triggerOptions the trigger, with or without parameters, for the action
     * @param condition an optional determinant of action
     */
    function Action(
    /** the trigger, with or without parameters, for the action */
    triggerOptions, condition) {
        this.triggerOptions = triggerOptions;
        /**
         * An event triggered prior to action being executed.
         */
        this.onBeforeExecuteObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        if (triggerOptions.parameter) {
            this.trigger = triggerOptions.trigger;
            this._triggerParameter = triggerOptions.parameter;
        }
        else if (triggerOptions.trigger) {
            this.trigger = triggerOptions.trigger;
        }
        else {
            this.trigger = triggerOptions;
        }
        this._nextActiveAction = this;
        this._condition = condition;
    }
    /**
     * Internal only
     * @hidden
     */
    Action.prototype._prepare = function () { };
    /**
     * Gets the trigger parameter
     * @returns the trigger parameter
     */
    Action.prototype.getTriggerParameter = function () {
        return this._triggerParameter;
    };
    /**
     * Sets the trigger parameter
     * @param value defines the new trigger parameter
     */
    Action.prototype.setTriggerParameter = function (value) {
        this._triggerParameter = value;
    };
    /**
     * Internal only - Returns if the current condition allows to run the action
     * @hidden
     */
    Action.prototype._evaluateConditionForCurrentFrame = function () {
        var condition = this._condition;
        if (!condition) {
            return true;
        }
        var currentRenderId = this._actionManager.getScene().getRenderId();
        // We cache the current evaluation for the current frame
        if (condition._evaluationId !== currentRenderId) {
            condition._evaluationId = currentRenderId;
            condition._currentResult = condition.isValid();
        }
        return condition._currentResult;
    };
    /**
     * Internal only - executes current action event
     * @param evt
     * @hidden
     */
    Action.prototype._executeCurrent = function (evt) {
        var isConditionValid = this._evaluateConditionForCurrentFrame();
        if (!isConditionValid) {
            return;
        }
        this.onBeforeExecuteObservable.notifyObservers(this);
        this._nextActiveAction.execute(evt);
        this.skipToNextActiveAction();
    };
    /**
     * Execute placeholder for child classes
     * @param evt optional action event
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Action.prototype.execute = function (evt) { };
    /**
     * Skips to next active action
     */
    Action.prototype.skipToNextActiveAction = function () {
        if (this._nextActiveAction._child) {
            if (!this._nextActiveAction._child._actionManager) {
                this._nextActiveAction._child._actionManager = this._actionManager;
            }
            this._nextActiveAction = this._nextActiveAction._child;
        }
        else {
            this._nextActiveAction = this;
        }
    };
    /**
     * Adds action to chain of actions, may be a DoNothingAction
     * @param action defines the next action to execute
     * @returns The action passed in
     * @see https://www.babylonjs-playground.com/#1T30HR#0
     */
    Action.prototype.then = function (action) {
        this._child = action;
        action._actionManager = this._actionManager;
        action._prepare();
        return action;
    };
    /**
     * Internal only
     * @param propertyPath
     * @hidden
     */
    Action.prototype._getProperty = function (propertyPath) {
        return this._actionManager._getProperty(propertyPath);
    };
    /**
     * Internal only
     * @param target
     * @param propertyPath
     * @hidden
     */
    Action.prototype._getEffectiveTarget = function (target, propertyPath) {
        return this._actionManager._getEffectiveTarget(target, propertyPath);
    };
    /**
     * Serialize placeholder for child classes
     * @param parent of child
     * @returns the serialized object
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Action.prototype.serialize = function (parent) { };
    /**
     * Internal only called by serialize
     * @param serializedAction
     * @param parent
     * @hidden
     */
    Action.prototype._serialize = function (serializedAction, parent) {
        var serializationObject = {
            type: 1,
            children: [],
            name: serializedAction.name,
            properties: serializedAction.properties || [],
        };
        // Serialize child
        if (this._child) {
            this._child.serialize(serializationObject);
        }
        // Check if "this" has a condition
        if (this._condition) {
            var serializedCondition = this._condition.serialize();
            serializedCondition.children.push(serializationObject);
            if (parent) {
                parent.children.push(serializedCondition);
            }
            return serializedCondition;
        }
        if (parent) {
            parent.children.push(serializationObject);
        }
        return serializationObject;
    };
    /**
     * Internal only
     * @param value
     * @hidden
     */
    Action._SerializeValueAsString = function (value) {
        if (typeof value === "number") {
            return value.toString();
        }
        if (typeof value === "boolean") {
            return value ? "true" : "false";
        }
        if (value instanceof _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2) {
            return value.x + ", " + value.y;
        }
        if (value instanceof _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3) {
            return value.x + ", " + value.y + ", " + value.z;
        }
        if (value instanceof _Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color3) {
            return value.r + ", " + value.g + ", " + value.b;
        }
        if (value instanceof _Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color4) {
            return value.r + ", " + value.g + ", " + value.b + ", " + value.a;
        }
        return value; // string
    };
    /**
     * Internal only
     * @param target
     * @hidden
     */
    Action._GetTargetProperty = function (target) {
        return {
            name: "target",
            targetType: target._isMesh
                ? "MeshProperties"
                : target._isLight
                    ? "LightProperties"
                    : target._isCamera
                        ? "CameraProperties"
                        : "SceneProperties",
            value: target._isScene ? "Scene" : target.name,
        };
    };
    return Action;
}());

(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__.RegisterClass)("BABYLON.Action", Action);


/***/ }),

/***/ "../../../lts/core/dist/Actions/actionEvent.js":
/*!*****************************************************!*\
  !*** ../../../lts/core/dist/Actions/actionEvent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionEvent": () => (/* binding */ ActionEvent)
/* harmony export */ });
/**
 * ActionEvent is the event being sent when an action is triggered.
 */
var ActionEvent = /** @class */ (function () {
    /**
     * Creates a new ActionEvent
     * @param source The mesh or sprite that triggered the action
     * @param pointerX The X mouse cursor position at the time of the event
     * @param pointerY The Y mouse cursor position at the time of the event
     * @param meshUnderPointer The mesh that is currently pointed at (can be null)
     * @param sourceEvent the original (browser) event that triggered the ActionEvent
     * @param additionalData additional data for the event
     */
    function ActionEvent(
    /** The mesh or sprite that triggered the action */
    source, 
    /** The X mouse cursor position at the time of the event */
    pointerX, 
    /** The Y mouse cursor position at the time of the event */
    pointerY, 
    /** The mesh that is currently pointed at (can be null) */
    meshUnderPointer, 
    /** the original (browser) event that triggered the ActionEvent */
    sourceEvent, 
    /** additional data for the event */
    additionalData) {
        this.source = source;
        this.pointerX = pointerX;
        this.pointerY = pointerY;
        this.meshUnderPointer = meshUnderPointer;
        this.sourceEvent = sourceEvent;
        this.additionalData = additionalData;
    }
    /**
     * Helper function to auto-create an ActionEvent from a source mesh.
     * @param source The source mesh that triggered the event
     * @param evt The original (browser) event
     * @param additionalData additional data for the event
     * @returns the new ActionEvent
     */
    ActionEvent.CreateNew = function (source, evt, additionalData) {
        var scene = source.getScene();
        return new ActionEvent(source, scene.pointerX, scene.pointerY, scene.meshUnderPointer || source, evt, additionalData);
    };
    /**
     * Helper function to auto-create an ActionEvent from a source sprite
     * @param source The source sprite that triggered the event
     * @param scene Scene associated with the sprite
     * @param evt The original (browser) event
     * @param additionalData additional data for the event
     * @returns the new ActionEvent
     */
    ActionEvent.CreateNewFromSprite = function (source, scene, evt, additionalData) {
        return new ActionEvent(source, scene.pointerX, scene.pointerY, scene.meshUnderPointer, evt, additionalData);
    };
    /**
     * Helper function to auto-create an ActionEvent from a scene. If triggered by a mesh use ActionEvent.CreateNew
     * @param scene the scene where the event occurred
     * @param evt The original (browser) event
     * @returns the new ActionEvent
     */
    ActionEvent.CreateNewFromScene = function (scene, evt) {
        return new ActionEvent(null, scene.pointerX, scene.pointerY, scene.meshUnderPointer, evt);
    };
    /**
     * Helper function to auto-create an ActionEvent from a primitive
     * @param prim defines the target primitive
     * @param pointerPos defines the pointer position
     * @param evt The original (browser) event
     * @param additionalData additional data for the event
     * @returns the new ActionEvent
     */
    ActionEvent.CreateNewFromPrimitive = function (prim, pointerPos, evt, additionalData) {
        return new ActionEvent(prim, pointerPos.x, pointerPos.y, null, evt, additionalData);
    };
    return ActionEvent;
}());



/***/ }),

/***/ "../../../lts/core/dist/Actions/actionManager.js":
/*!*******************************************************!*\
  !*** ../../../lts/core/dist/Actions/actionManager.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionManager": () => (/* binding */ ActionManager)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Maths_math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Maths/math.color */ "../../../lts/core/dist/Maths/math.color.js");
/* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./condition */ "../../../lts/core/dist/Actions/condition.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action */ "../../../lts/core/dist/Actions/action.js");
/* harmony import */ var _directActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directActions */ "../../../lts/core/dist/Actions/directActions.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Engines/engineStore */ "../../../lts/core/dist/Engines/engineStore.js");
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Misc/logger */ "../../../lts/core/dist/Misc/logger.js");
/* harmony import */ var _Misc_deepCopier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Misc/deepCopier */ "../../../lts/core/dist/Misc/deepCopier.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Misc/typeStore */ "../../../lts/core/dist/Misc/typeStore.js");
/* harmony import */ var _abstractActionManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./abstractActionManager */ "../../../lts/core/dist/Actions/abstractActionManager.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Engines/constants */ "../../../lts/core/dist/Engines/constants.js");












/**
 * Action Manager manages all events to be triggered on a given mesh or the global scene.
 * A single scene can have many Action Managers to handle predefined actions on specific meshes.
 * @see https://doc.babylonjs.com/how_to/how_to_use_actions
 */
var ActionManager = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ActionManager, _super);
    /**
     * Creates a new action manager
     * @param scene defines the hosting scene
     */
    function ActionManager(scene) {
        var _this = _super.call(this) || this;
        scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_6__.EngineStore.LastCreatedScene;
        if (!scene) {
            return _this;
        }
        _this._scene = scene;
        scene.actionManagers.push(_this);
        return _this;
    }
    // Methods
    /**
     * Releases all associated resources
     */
    ActionManager.prototype.dispose = function () {
        var index = this._scene.actionManagers.indexOf(this);
        for (var i = 0; i < this.actions.length; i++) {
            var action = this.actions[i];
            ActionManager.Triggers[action.trigger]--;
            if (ActionManager.Triggers[action.trigger] === 0) {
                delete ActionManager.Triggers[action.trigger];
            }
        }
        if (index > -1) {
            this._scene.actionManagers.splice(index, 1);
        }
    };
    /**
     * Gets hosting scene
     * @returns the hosting scene
     */
    ActionManager.prototype.getScene = function () {
        return this._scene;
    };
    /**
     * Does this action manager handles actions of any of the given triggers
     * @param triggers defines the triggers to be tested
     * @return a boolean indicating whether one (or more) of the triggers is handled
     */
    ActionManager.prototype.hasSpecificTriggers = function (triggers) {
        for (var index = 0; index < this.actions.length; index++) {
            var action = this.actions[index];
            if (triggers.indexOf(action.trigger) > -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * Does this action manager handles actions of any of the given triggers. This function takes two arguments for
     * speed.
     * @param triggerA defines the trigger to be tested
     * @param triggerB defines the trigger to be tested
     * @return a boolean indicating whether one (or more) of the triggers is handled
     */
    ActionManager.prototype.hasSpecificTriggers2 = function (triggerA, triggerB) {
        for (var index = 0; index < this.actions.length; index++) {
            var action = this.actions[index];
            if (triggerA == action.trigger || triggerB == action.trigger) {
                return true;
            }
        }
        return false;
    };
    /**
     * Does this action manager handles actions of a given trigger
     * @param trigger defines the trigger to be tested
     * @param parameterPredicate defines an optional predicate to filter triggers by parameter
     * @return whether the trigger is handled
     */
    ActionManager.prototype.hasSpecificTrigger = function (trigger, parameterPredicate) {
        for (var index = 0; index < this.actions.length; index++) {
            var action = this.actions[index];
            if (action.trigger === trigger) {
                if (parameterPredicate) {
                    if (parameterPredicate(action.getTriggerParameter())) {
                        return true;
                    }
                }
                else {
                    return true;
                }
            }
        }
        return false;
    };
    Object.defineProperty(ActionManager.prototype, "hasPointerTriggers", {
        /**
         * Does this action manager has pointer triggers
         */
        get: function () {
            for (var index = 0; index < this.actions.length; index++) {
                var action = this.actions[index];
                if (action.trigger >= ActionManager.OnPickTrigger && action.trigger <= ActionManager.OnPointerOutTrigger) {
                    return true;
                }
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionManager.prototype, "hasPickTriggers", {
        /**
         * Does this action manager has pick triggers
         */
        get: function () {
            for (var index = 0; index < this.actions.length; index++) {
                var action = this.actions[index];
                if (action.trigger >= ActionManager.OnPickTrigger && action.trigger <= ActionManager.OnPickUpTrigger) {
                    return true;
                }
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Registers an action to this action manager
     * @param action defines the action to be registered
     * @return the action amended (prepared) after registration
     */
    ActionManager.prototype.registerAction = function (action) {
        if (action.trigger === ActionManager.OnEveryFrameTrigger) {
            if (this.getScene().actionManager !== this) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_7__.Logger.Warn("OnEveryFrameTrigger can only be used with scene.actionManager");
                return null;
            }
        }
        this.actions.push(action);
        if (ActionManager.Triggers[action.trigger]) {
            ActionManager.Triggers[action.trigger]++;
        }
        else {
            ActionManager.Triggers[action.trigger] = 1;
        }
        action._actionManager = this;
        action._prepare();
        return action;
    };
    /**
     * Unregisters an action to this action manager
     * @param action defines the action to be unregistered
     * @return a boolean indicating whether the action has been unregistered
     */
    ActionManager.prototype.unregisterAction = function (action) {
        var index = this.actions.indexOf(action);
        if (index !== -1) {
            this.actions.splice(index, 1);
            ActionManager.Triggers[action.trigger] -= 1;
            if (ActionManager.Triggers[action.trigger] === 0) {
                delete ActionManager.Triggers[action.trigger];
            }
            action._actionManager = null;
            return true;
        }
        return false;
    };
    /**
     * Process a specific trigger
     * @param trigger defines the trigger to process
     * @param evt defines the event details to be processed
     */
    ActionManager.prototype.processTrigger = function (trigger, evt) {
        for (var index = 0; index < this.actions.length; index++) {
            var action = this.actions[index];
            if (action.trigger === trigger) {
                if (evt) {
                    if (trigger === ActionManager.OnKeyUpTrigger || trigger === ActionManager.OnKeyDownTrigger) {
                        var parameter = action.getTriggerParameter();
                        if (parameter && parameter !== evt.sourceEvent.keyCode) {
                            if (!parameter.toLowerCase) {
                                continue;
                            }
                            var lowerCase = parameter.toLowerCase();
                            if (lowerCase !== evt.sourceEvent.key) {
                                var unicode = evt.sourceEvent.charCode ? evt.sourceEvent.charCode : evt.sourceEvent.keyCode;
                                var actualkey = String.fromCharCode(unicode).toLowerCase();
                                if (actualkey !== lowerCase) {
                                    continue;
                                }
                            }
                        }
                    }
                }
                action._executeCurrent(evt);
            }
        }
    };
    /**
     * @param target
     * @param propertyPath
     * @hidden
     */
    ActionManager.prototype._getEffectiveTarget = function (target, propertyPath) {
        var properties = propertyPath.split(".");
        for (var index = 0; index < properties.length - 1; index++) {
            target = target[properties[index]];
        }
        return target;
    };
    /**
     * @param propertyPath
     * @hidden
     */
    ActionManager.prototype._getProperty = function (propertyPath) {
        var properties = propertyPath.split(".");
        return properties[properties.length - 1];
    };
    /**
     * Serialize this manager to a JSON object
     * @param name defines the property name to store this manager
     * @returns a JSON representation of this manager
     */
    ActionManager.prototype.serialize = function (name) {
        var root = {
            children: new Array(),
            name: name,
            type: 3,
            properties: new Array(), // Empty for root but required
        };
        for (var i = 0; i < this.actions.length; i++) {
            var triggerObject = {
                type: 0,
                children: new Array(),
                name: ActionManager.GetTriggerName(this.actions[i].trigger),
                properties: new Array(),
            };
            var triggerOptions = this.actions[i].triggerOptions;
            if (triggerOptions && typeof triggerOptions !== "number") {
                if (triggerOptions.parameter instanceof Node) {
                    triggerObject.properties.push(_action__WEBPACK_IMPORTED_MODULE_4__.Action._GetTargetProperty(triggerOptions.parameter));
                }
                else {
                    var parameter = {};
                    _Misc_deepCopier__WEBPACK_IMPORTED_MODULE_8__.DeepCopier.DeepCopy(triggerOptions.parameter, parameter, ["mesh"]);
                    if (triggerOptions.parameter && triggerOptions.parameter.mesh) {
                        parameter._meshId = triggerOptions.parameter.mesh.id;
                    }
                    triggerObject.properties.push({ name: "parameter", targetType: null, value: parameter });
                }
            }
            // Serialize child action, recursively
            this.actions[i].serialize(triggerObject);
            // Add serialized trigger
            root.children.push(triggerObject);
        }
        return root;
    };
    /**
     * Creates a new ActionManager from a JSON data
     * @param parsedActions defines the JSON data to read from
     * @param object defines the hosting mesh
     * @param scene defines the hosting scene
     */
    ActionManager.Parse = function (parsedActions, object, scene) {
        var actionManager = new ActionManager(scene);
        if (object === null) {
            scene.actionManager = actionManager;
        }
        else {
            object.actionManager = actionManager;
        }
        // instanciate a new object
        var instanciate = function (name, params) {
            var internalClassType = (0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_9__.GetClass)("BABYLON." + name);
            if (internalClassType) {
                var newInstance = Object.create(internalClassType.prototype);
                // eslint-disable-next-line prefer-spread
                newInstance.constructor.apply(newInstance, params);
                return newInstance;
            }
        };
        var parseParameter = function (name, value, target, propertyPath) {
            if (propertyPath === null) {
                // String, boolean or float
                var floatValue = parseFloat(value);
                if (value === "true" || value === "false") {
                    return value === "true";
                }
                else {
                    return isNaN(floatValue) ? value : floatValue;
                }
            }
            var effectiveTarget = propertyPath.split(".");
            var values = value.split(",");
            // Get effective Target
            for (var i = 0; i < effectiveTarget.length; i++) {
                target = target[effectiveTarget[i]];
            }
            // Return appropriate value with its type
            if (typeof target === "boolean") {
                return values[0] === "true";
            }
            if (typeof target === "string") {
                return values[0];
            }
            // Parameters with multiple values such as Vector3 etc.
            var split = new Array();
            for (var i = 0; i < values.length; i++) {
                split.push(parseFloat(values[i]));
            }
            if (target instanceof _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3) {
                return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(split);
            }
            if (target instanceof _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4) {
                return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(split);
            }
            if (target instanceof _Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color3) {
                return _Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color3.FromArray(split);
            }
            if (target instanceof _Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color4) {
                return _Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color4.FromArray(split);
            }
            return parseFloat(values[0]);
        };
        // traverse graph per trigger
        var traverse = function (parsedAction, trigger, condition, action, combineArray) {
            if (combineArray === void 0) { combineArray = null; }
            if (parsedAction.detached) {
                return;
            }
            var parameters = new Array();
            var target = null;
            var propertyPath = null;
            var combine = parsedAction.combine && parsedAction.combine.length > 0;
            // Parameters
            if (parsedAction.type === 2) {
                parameters.push(actionManager);
            }
            else {
                parameters.push(trigger);
            }
            if (combine) {
                var actions = new Array();
                for (var j = 0; j < parsedAction.combine.length; j++) {
                    traverse(parsedAction.combine[j], ActionManager.NothingTrigger, condition, action, actions);
                }
                parameters.push(actions);
            }
            else {
                for (var i = 0; i < parsedAction.properties.length; i++) {
                    var value = parsedAction.properties[i].value;
                    var name_1 = parsedAction.properties[i].name;
                    var targetType = parsedAction.properties[i].targetType;
                    if (name_1 === "target") {
                        if (targetType !== null && targetType === "SceneProperties") {
                            value = target = scene;
                        }
                        else {
                            value = target = scene.getNodeByName(value);
                        }
                    }
                    else if (name_1 === "parent") {
                        value = scene.getNodeByName(value);
                    }
                    else if (name_1 === "sound") {
                        // Can not externalize to component, so only checks for the presence off the API.
                        if (scene.getSoundByName) {
                            value = scene.getSoundByName(value);
                        }
                    }
                    else if (name_1 !== "propertyPath") {
                        if (parsedAction.type === 2 && name_1 === "operator") {
                            value = _condition__WEBPACK_IMPORTED_MODULE_3__.ValueCondition[value];
                        }
                        else {
                            value = parseParameter(name_1, value, target, name_1 === "value" ? propertyPath : null);
                        }
                    }
                    else {
                        propertyPath = value;
                    }
                    parameters.push(value);
                }
            }
            if (combineArray === null) {
                parameters.push(condition);
            }
            else {
                parameters.push(null);
            }
            // If interpolate value action
            if (parsedAction.name === "InterpolateValueAction") {
                var param = parameters[parameters.length - 2];
                parameters[parameters.length - 1] = param;
                parameters[parameters.length - 2] = condition;
            }
            // Action or condition(s) and not CombineAction
            var newAction = instanciate(parsedAction.name, parameters);
            if (newAction instanceof _condition__WEBPACK_IMPORTED_MODULE_3__.Condition && condition !== null) {
                var nothing = new _directActions__WEBPACK_IMPORTED_MODULE_5__.DoNothingAction(trigger, condition);
                if (action) {
                    action.then(nothing);
                }
                else {
                    actionManager.registerAction(nothing);
                }
                action = nothing;
            }
            if (combineArray === null) {
                if (newAction instanceof _condition__WEBPACK_IMPORTED_MODULE_3__.Condition) {
                    condition = newAction;
                    newAction = action;
                }
                else {
                    condition = null;
                    if (action) {
                        action.then(newAction);
                    }
                    else {
                        actionManager.registerAction(newAction);
                    }
                }
            }
            else {
                combineArray.push(newAction);
            }
            for (var i = 0; i < parsedAction.children.length; i++) {
                traverse(parsedAction.children[i], trigger, condition, newAction, null);
            }
        };
        // triggers
        for (var i = 0; i < parsedActions.children.length; i++) {
            var triggerParams = void 0;
            var trigger = parsedActions.children[i];
            if (trigger.properties.length > 0) {
                var param = trigger.properties[0].value;
                var value = trigger.properties[0].targetType === null ? param : scene.getMeshByName(param);
                if (value._meshId) {
                    value.mesh = scene.getMeshById(value._meshId);
                }
                triggerParams = { trigger: ActionManager[trigger.name], parameter: value };
            }
            else {
                triggerParams = ActionManager[trigger.name];
            }
            for (var j = 0; j < trigger.children.length; j++) {
                if (!trigger.detached) {
                    traverse(trigger.children[j], triggerParams, null, null);
                }
            }
        }
    };
    /**
     * Get a trigger name by index
     * @param trigger defines the trigger index
     * @returns a trigger name
     */
    ActionManager.GetTriggerName = function (trigger) {
        switch (trigger) {
            case 0:
                return "NothingTrigger";
            case 1:
                return "OnPickTrigger";
            case 2:
                return "OnLeftPickTrigger";
            case 3:
                return "OnRightPickTrigger";
            case 4:
                return "OnCenterPickTrigger";
            case 5:
                return "OnPickDownTrigger";
            case 6:
                return "OnPickUpTrigger";
            case 7:
                return "OnLongPressTrigger";
            case 8:
                return "OnPointerOverTrigger";
            case 9:
                return "OnPointerOutTrigger";
            case 10:
                return "OnEveryFrameTrigger";
            case 11:
                return "OnIntersectionEnterTrigger";
            case 12:
                return "OnIntersectionExitTrigger";
            case 13:
                return "OnKeyDownTrigger";
            case 14:
                return "OnKeyUpTrigger";
            case 15:
                return "OnPickOutTrigger";
            default:
                return "";
        }
    };
    /**
     * Nothing
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.NothingTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_NothingTrigger;
    /**
     * On pick
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnPickTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnPickTrigger;
    /**
     * On left pick
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnLeftPickTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnLeftPickTrigger;
    /**
     * On right pick
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnRightPickTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnRightPickTrigger;
    /**
     * On center pick
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnCenterPickTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnCenterPickTrigger;
    /**
     * On pick down
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnPickDownTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnPickDownTrigger;
    /**
     * On double pick
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnDoublePickTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnDoublePickTrigger;
    /**
     * On pick up
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnPickUpTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnPickUpTrigger;
    /**
     * On pick out.
     * This trigger will only be raised if you also declared a OnPickDown
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnPickOutTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnPickOutTrigger;
    /**
     * On long press
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnLongPressTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnLongPressTrigger;
    /**
     * On pointer over
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnPointerOverTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnPointerOverTrigger;
    /**
     * On pointer out
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnPointerOutTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnPointerOutTrigger;
    /**
     * On every frame
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnEveryFrameTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnEveryFrameTrigger;
    /**
     * On intersection enter
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnIntersectionEnterTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnIntersectionEnterTrigger;
    /**
     * On intersection exit
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnIntersectionExitTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnIntersectionExitTrigger;
    /**
     * On key down
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnKeyDownTrigger = _Engines_constants__WEBPACK_IMPORTED_MODULE_11__.Constants.ACTION_OnKeyDownTrigger;
    /**
     * On key up
     * @see https://doc.babylonjs.com/how_to/how_to_use_actions#triggers
     */
    ActionManager.OnKeyUpTrigger = 15;
    return ActionManager;
}(_abstractActionManager__WEBPACK_IMPORTED_MODULE_10__.AbstractActionManager));



/***/ }),

/***/ "../../../lts/core/dist/Actions/condition.js":
/*!***************************************************!*\
  !*** ../../../lts/core/dist/Actions/condition.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Condition": () => (/* binding */ Condition),
/* harmony export */   "PredicateCondition": () => (/* binding */ PredicateCondition),
/* harmony export */   "StateCondition": () => (/* binding */ StateCondition),
/* harmony export */   "ValueCondition": () => (/* binding */ ValueCondition)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "../../../lts/core/dist/Actions/action.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Misc/typeStore */ "../../../lts/core/dist/Misc/typeStore.js");



/**
 * A Condition applied to an Action
 */
var Condition = /** @class */ (function () {
    /**
     * Creates a new Condition
     * @param actionManager the manager of the action the condition is applied to
     */
    function Condition(actionManager) {
        this._actionManager = actionManager;
    }
    /**
     * Check if the current condition is valid
     * @returns a boolean
     */
    Condition.prototype.isValid = function () {
        return true;
    };
    /**
     * Internal only
     * @param propertyPath
     * @hidden
     */
    Condition.prototype._getProperty = function (propertyPath) {
        return this._actionManager._getProperty(propertyPath);
    };
    /**
     * Internal only
     * @param target
     * @param propertyPath
     * @hidden
     */
    Condition.prototype._getEffectiveTarget = function (target, propertyPath) {
        return this._actionManager._getEffectiveTarget(target, propertyPath);
    };
    /**
     * Serialize placeholder for child classes
     * @returns the serialized object
     */
    Condition.prototype.serialize = function () { };
    /**
     * Internal only
     * @param serializedCondition
     * @hidden
     */
    Condition.prototype._serialize = function (serializedCondition) {
        return {
            type: 2,
            children: [],
            name: serializedCondition.name,
            properties: serializedCondition.properties,
        };
    };
    return Condition;
}());

/**
 * Defines specific conditional operators as extensions of Condition
 */
var ValueCondition = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ValueCondition, _super);
    /**
     * Creates a new ValueCondition
     * @param actionManager manager for the action the condition applies to
     * @param target for the action
     * @param propertyPath path to specify the property of the target the conditional operator uses
     * @param value the value compared by the conditional operator against the current value of the property
     * @param operator the conditional operator, default ValueCondition.IsEqual
     */
    function ValueCondition(actionManager, target, 
    /** path to specify the property of the target the conditional operator uses  */
    propertyPath, 
    /** the value compared by the conditional operator against the current value of the property */
    value, 
    /** the conditional operator, default ValueCondition.IsEqual */
    operator) {
        if (operator === void 0) { operator = ValueCondition.IsEqual; }
        var _this = _super.call(this, actionManager) || this;
        _this.propertyPath = propertyPath;
        _this.value = value;
        _this.operator = operator;
        _this._target = target;
        _this._effectiveTarget = _this._getEffectiveTarget(target, _this.propertyPath);
        _this._property = _this._getProperty(_this.propertyPath);
        return _this;
    }
    Object.defineProperty(ValueCondition, "IsEqual", {
        /**
         * returns the number for IsEqual
         */
        get: function () {
            return ValueCondition._IsEqual;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValueCondition, "IsDifferent", {
        /**
         * Returns the number for IsDifferent
         */
        get: function () {
            return ValueCondition._IsDifferent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValueCondition, "IsGreater", {
        /**
         * Returns the number for IsGreater
         */
        get: function () {
            return ValueCondition._IsGreater;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValueCondition, "IsLesser", {
        /**
         * Returns the number for IsLesser
         */
        get: function () {
            return ValueCondition._IsLesser;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Compares the given value with the property value for the specified conditional operator
     * @returns the result of the comparison
     */
    ValueCondition.prototype.isValid = function () {
        switch (this.operator) {
            case ValueCondition.IsGreater:
                return this._effectiveTarget[this._property] > this.value;
            case ValueCondition.IsLesser:
                return this._effectiveTarget[this._property] < this.value;
            case ValueCondition.IsEqual:
            case ValueCondition.IsDifferent: {
                var check = void 0;
                if (this.value.equals) {
                    check = this.value.equals(this._effectiveTarget[this._property]);
                }
                else {
                    check = this.value === this._effectiveTarget[this._property];
                }
                return this.operator === ValueCondition.IsEqual ? check : !check;
            }
        }
        return false;
    };
    /**
     * Serialize the ValueCondition into a JSON compatible object
     * @returns serialization object
     */
    ValueCondition.prototype.serialize = function () {
        return this._serialize({
            name: "ValueCondition",
            properties: [
                _action__WEBPACK_IMPORTED_MODULE_1__.Action._GetTargetProperty(this._target),
                { name: "propertyPath", value: this.propertyPath },
                { name: "value", value: _action__WEBPACK_IMPORTED_MODULE_1__.Action._SerializeValueAsString(this.value) },
                { name: "operator", value: ValueCondition.GetOperatorName(this.operator) },
            ],
        });
    };
    /**
     * Gets the name of the conditional operator for the ValueCondition
     * @param operator the conditional operator
     * @returns the name
     */
    ValueCondition.GetOperatorName = function (operator) {
        switch (operator) {
            case ValueCondition._IsEqual:
                return "IsEqual";
            case ValueCondition._IsDifferent:
                return "IsDifferent";
            case ValueCondition._IsGreater:
                return "IsGreater";
            case ValueCondition._IsLesser:
                return "IsLesser";
            default:
                return "";
        }
    };
    /**
     * Internal only
     * @hidden
     */
    ValueCondition._IsEqual = 0;
    /**
     * Internal only
     * @hidden
     */
    ValueCondition._IsDifferent = 1;
    /**
     * Internal only
     * @hidden
     */
    ValueCondition._IsGreater = 2;
    /**
     * Internal only
     * @hidden
     */
    ValueCondition._IsLesser = 3;
    return ValueCondition;
}(Condition));

/**
 * Defines a predicate condition as an extension of Condition
 */
var PredicateCondition = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(PredicateCondition, _super);
    /**
     * Creates a new PredicateCondition
     * @param actionManager manager for the action the condition applies to
     * @param predicate defines the predicate function used to validate the condition
     */
    function PredicateCondition(actionManager, 
    /** defines the predicate function used to validate the condition */
    predicate) {
        var _this = _super.call(this, actionManager) || this;
        _this.predicate = predicate;
        return _this;
    }
    /**
     * @returns the validity of the predicate condition
     */
    PredicateCondition.prototype.isValid = function () {
        return this.predicate();
    };
    return PredicateCondition;
}(Condition));

/**
 * Defines a state condition as an extension of Condition
 */
var StateCondition = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(StateCondition, _super);
    /**
     * Creates a new StateCondition
     * @param actionManager manager for the action the condition applies to
     * @param target of the condition
     * @param value to compare with target state
     */
    function StateCondition(actionManager, target, 
    /** Value to compare with target state  */
    value) {
        var _this = _super.call(this, actionManager) || this;
        _this.value = value;
        _this._target = target;
        return _this;
    }
    /**
     * Gets a boolean indicating if the current condition is met
     * @returns the validity of the state
     */
    StateCondition.prototype.isValid = function () {
        return this._target.state === this.value;
    };
    /**
     * Serialize the StateCondition into a JSON compatible object
     * @returns serialization object
     */
    StateCondition.prototype.serialize = function () {
        return this._serialize({
            name: "StateCondition",
            properties: [_action__WEBPACK_IMPORTED_MODULE_1__.Action._GetTargetProperty(this._target), { name: "value", value: this.value }],
        });
    };
    return StateCondition;
}(Condition));

(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("BABYLON.ValueCondition", ValueCondition);
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("BABYLON.PredicateCondition", PredicateCondition);
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("BABYLON.StateCondition", StateCondition);


/***/ }),

/***/ "../../../lts/core/dist/Actions/directActions.js":
/*!*******************************************************!*\
  !*** ../../../lts/core/dist/Actions/directActions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CombineAction": () => (/* binding */ CombineAction),
/* harmony export */   "DoNothingAction": () => (/* binding */ DoNothingAction),
/* harmony export */   "ExecuteCodeAction": () => (/* binding */ ExecuteCodeAction),
/* harmony export */   "IncrementValueAction": () => (/* binding */ IncrementValueAction),
/* harmony export */   "PlayAnimationAction": () => (/* binding */ PlayAnimationAction),
/* harmony export */   "SetParentAction": () => (/* binding */ SetParentAction),
/* harmony export */   "SetStateAction": () => (/* binding */ SetStateAction),
/* harmony export */   "SetValueAction": () => (/* binding */ SetValueAction),
/* harmony export */   "StopAnimationAction": () => (/* binding */ StopAnimationAction),
/* harmony export */   "SwitchBooleanAction": () => (/* binding */ SwitchBooleanAction)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc/logger */ "../../../lts/core/dist/Misc/logger.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "../../../lts/core/dist/Actions/action.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Engines/constants */ "../../../lts/core/dist/Engines/constants.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Misc/typeStore */ "../../../lts/core/dist/Misc/typeStore.js");






/**
 * This defines an action responsible to toggle a boolean once triggered.
 * @see https://doc.babylonjs.com/how_to/how_to_use_actions
 */
var SwitchBooleanAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SwitchBooleanAction, _super);
    /**
     * Instantiate the action
     * @param triggerOptions defines the trigger options
     * @param target defines the object containing the boolean
     * @param propertyPath defines the path to the boolean property in the target object
     * @param condition defines the trigger related conditions
     */
    function SwitchBooleanAction(triggerOptions, target, propertyPath, condition) {
        var _this = _super.call(this, triggerOptions, condition) || this;
        _this.propertyPath = propertyPath;
        _this._target = _this._effectiveTarget = target;
        return _this;
    }
    /** @hidden */
    SwitchBooleanAction.prototype._prepare = function () {
        this._effectiveTarget = this._getEffectiveTarget(this._effectiveTarget, this.propertyPath);
        this._property = this._getProperty(this.propertyPath);
    };
    /**
     * Execute the action toggle the boolean value.
     */
    SwitchBooleanAction.prototype.execute = function () {
        this._effectiveTarget[this._property] = !this._effectiveTarget[this._property];
    };
    /**
     * Serializes the actions and its related information.
     * @param parent defines the object to serialize in
     * @returns the serialized object
     */
    SwitchBooleanAction.prototype.serialize = function (parent) {
        return _super.prototype._serialize.call(this, {
            name: "SwitchBooleanAction",
            properties: [_action__WEBPACK_IMPORTED_MODULE_3__.Action._GetTargetProperty(this._target), { name: "propertyPath", value: this.propertyPath }],
        }, parent);
    };
    return SwitchBooleanAction;
}(_action__WEBPACK_IMPORTED_MODULE_3__.Action));

/**
 * This defines an action responsible to set a the state field of the target
 *  to a desired value once triggered.
 * @see https://doc.babylonjs.com/how_to/how_to_use_actions
 */
var SetStateAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SetStateAction, _super);
    /**
     * Instantiate the action
     * @param triggerOptions defines the trigger options
     * @param target defines the object containing the state property
     * @param value defines the value to store in the state field
     * @param condition defines the trigger related conditions
     */
    function SetStateAction(triggerOptions, target, value, condition) {
        var _this = _super.call(this, triggerOptions, condition) || this;
        _this.value = value;
        _this._target = target;
        return _this;
    }
    /**
     * Execute the action and store the value on the target state property.
     */
    SetStateAction.prototype.execute = function () {
        this._target.state = this.value;
    };
    /**
     * Serializes the actions and its related information.
     * @param parent defines the object to serialize in
     * @returns the serialized object
     */
    SetStateAction.prototype.serialize = function (parent) {
        return _super.prototype._serialize.call(this, {
            name: "SetStateAction",
            properties: [_action__WEBPACK_IMPORTED_MODULE_3__.Action._GetTargetProperty(this._target), { name: "value", value: this.value }],
        }, parent);
    };
    return SetStateAction;
}(_action__WEBPACK_IMPORTED_MODULE_3__.Action));

/**
 * This defines an action responsible to set a property of the target
 *  to a desired value once triggered.
 * @see https://doc.babylonjs.com/how_to/how_to_use_actions
 */
var SetValueAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SetValueAction, _super);
    /**
     * Instantiate the action
     * @param triggerOptions defines the trigger options
     * @param target defines the object containing the property
     * @param propertyPath defines the path of the property to set in the target
     * @param value defines the value to set in the property
     * @param condition defines the trigger related conditions
     */
    function SetValueAction(triggerOptions, target, propertyPath, value, condition) {
        var _this = _super.call(this, triggerOptions, condition) || this;
        _this.propertyPath = propertyPath;
        _this.value = value;
        _this._target = _this._effectiveTarget = target;
        return _this;
    }
    /** @hidden */
    SetValueAction.prototype._prepare = function () {
        this._effectiveTarget = this._getEffectiveTarget(this._effectiveTarget, this.propertyPath);
        this._property = this._getProperty(this.propertyPath);
    };
    /**
     * Execute the action and set the targeted property to the desired value.
     */
    SetValueAction.prototype.execute = function () {
        this._effectiveTarget[this._property] = this.value;
        if (this._target.markAsDirty) {
            this._target.markAsDirty(this._property);
        }
    };
    /**
     * Serializes the actions and its related information.
     * @param parent defines the object to serialize in
     * @returns the serialized object
     */
    SetValueAction.prototype.serialize = function (parent) {
        return _super.prototype._serialize.call(this, {
            name: "SetValueAction",
            properties: [
                _action__WEBPACK_IMPORTED_MODULE_3__.Action._GetTargetProperty(this._target),
                { name: "propertyPath", value: this.propertyPath },
                { name: "value", value: _action__WEBPACK_IMPORTED_MODULE_3__.Action._SerializeValueAsString(this.value) },
            ],
        }, parent);
    };
    return SetValueAction;
}(_action__WEBPACK_IMPORTED_MODULE_3__.Action));

/**
 * This defines an action responsible to increment the target value
 *  to a desired value once triggered.
 * @see https://doc.babylonjs.com/how_to/how_to_use_actions
 */
var IncrementValueAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(IncrementValueAction, _super);
    /**
     * Instantiate the action
     * @param triggerOptions defines the trigger options
     * @param target defines the object containing the property
     * @param propertyPath defines the path of the property to increment in the target
     * @param value defines the value value we should increment the property by
     * @param condition defines the trigger related conditions
     */
    function IncrementValueAction(triggerOptions, target, propertyPath, value, condition) {
        var _this = _super.call(this, triggerOptions, condition) || this;
        _this.propertyPath = propertyPath;
        _this.value = value;
        _this._target = _this._effectiveTarget = target;
        return _this;
    }
    /** @hidden */
    IncrementValueAction.prototype._prepare = function () {
        this._effectiveTarget = this._getEffectiveTarget(this._effectiveTarget, this.propertyPath);
        this._property = this._getProperty(this.propertyPath);
        if (typeof this._effectiveTarget[this._property] !== "number") {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Warn("Warning: IncrementValueAction can only be used with number values");
        }
    };
    /**
     * Execute the action and increment the target of the value amount.
     */
    IncrementValueAction.prototype.execute = function () {
        this._effectiveTarget[this._property] += this.value;
        if (this._target.markAsDirty) {
            this._target.markAsDirty(this._property);
        }
    };
    /**
     * Serializes the actions and its related information.
     * @param parent defines the object to serialize in
     * @returns the serialized object
     */
    IncrementValueAction.prototype.serialize = function (parent) {
        return _super.prototype._serialize.call(this, {
            name: "IncrementValueAction",
            properties: [
                _action__WEBPACK_IMPORTED_MODULE_3__.Action._GetTargetProperty(this._target),
                { name: "propertyPath", value: this.propertyPath },
                { name: "value", value: _action__WEBPACK_IMPORTED_MODULE_3__.Action._SerializeValueAsString(this.value) },
            ],
        }, parent);
    };
    return IncrementValueAction;
}(_action__WEBPACK_IMPORTED_MODULE_3__.Action));

/**
 * This defines an action responsible to start an animation once triggered.
 * @see https://doc.babylonjs.com/how_to/how_to_use_actions
 */
var PlayAnimationAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(PlayAnimationAction, _super);
    /**
     * Instantiate the action
     * @param triggerOptions defines the trigger options
     * @param target defines the target animation or animation name
     * @param from defines from where the animation should start (animation frame)
     * @param to defines where the animation should stop (animation frame)
     * @param loop defines if the animation should loop or stop after the first play
     * @param condition defines the trigger related conditions
     */
    function PlayAnimationAction(triggerOptions, target, from, to, loop, condition) {
        var _this = _super.call(this, triggerOptions, condition) || this;
        _this.from = from;
        _this.to = to;
        _this.loop = loop;
        _this._target = target;
        return _this;
    }
    /** @hidden */
    PlayAnimationAction.prototype._prepare = function () { };
    /**
     * Execute the action and play the animation.
     */
    PlayAnimationAction.prototype.execute = function () {
        var scene = this._actionManager.getScene();
        scene.beginAnimation(this._target, this.from, this.to, this.loop);
    };
    /**
     * Serializes the actions and its related information.
     * @param parent defines the object to serialize in
     * @returns the serialized object
     */
    PlayAnimationAction.prototype.serialize = function (parent) {
        return _super.prototype._serialize.call(this, {
            name: "PlayAnimationAction",
            properties: [
                _action__WEBPACK_IMPORTED_MODULE_3__.Action._GetTargetProperty(this._target),
                { name: "from", value: String(this.from) },
                { name: "to", value: String(this.to) },
                { name: "loop", value: _action__WEBPACK_IMPORTED_MODULE_3__.Action._SerializeValueAsString(this.loop) || false },
            ],
        }, parent);
    };
    return PlayAnimationAction;
}(_action__WEBPACK_IMPORTED_MODULE_3__.Action));

/**
 * This defines an action responsible to stop an animation once triggered.
 * @see https://doc.babylonjs.com/how_to/how_to_use_actions
 */
var StopAnimationAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(StopAnimationAction, _super);
    /**
     * Instantiate the action
     * @param triggerOptions defines the trigger options
     * @param target defines the target animation or animation name
     * @param condition defines the trigger related conditions
     */
    function StopAnimationAction(triggerOptions, target, condition) {
        var _this = _super.call(this, triggerOptions, condition) || this;
        _this._target = target;
        return _this;
    }
    /** @hidden */
    StopAnimationAction.prototype._prepare = function () { };
    /**
     * Execute the action and stop the animation.
     */
    StopAnimationAction.prototype.execute = function () {
        var scene = this._actionManager.getScene();
        scene.stopAnimation(this._target);
    };
    /**
     * Serializes the actions and its related information.
     * @param parent defines the object to serialize in
     * @returns the serialized object
     */
    StopAnimationAction.prototype.serialize = function (parent) {
        return _super.prototype._serialize.call(this, {
            name: "StopAnimationAction",
            properties: [_action__WEBPACK_IMPORTED_MODULE_3__.Action._GetTargetProperty(this._target)],
        }, parent);
    };
    return StopAnimationAction;
}(_action__WEBPACK_IMPORTED_MODULE_3__.Action));

/**
 * This defines an action responsible that does nothing once triggered.
 * @see https://doc.babylonjs.com/how_to/how_to_use_actions
 */
var DoNothingAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(DoNothingAction, _super);
    /**
     * Instantiate the action
     * @param triggerOptions defines the trigger options
     * @param condition defines the trigger related conditions
     */
    function DoNothingAction(triggerOptions, condition) {
        if (triggerOptions === void 0) { triggerOptions = _Engines_constants__WEBPACK_IMPORTED_MODULE_4__.Constants.ACTION_NothingTrigger; }
        return _super.call(this, triggerOptions, condition) || this;
    }
    /**
     * Execute the action and do nothing.
     */
    DoNothingAction.prototype.execute = function () { };
    /**
     * Serializes the actions and its related information.
     * @param parent defines the object to serialize in
     * @returns the serialized object
     */
    DoNothingAction.prototype.serialize = function (parent) {
        return _super.prototype._serialize.call(this, {
            name: "DoNothingAction",
            properties: [],
        }, parent);
    };
    return DoNothingAction;
}(_action__WEBPACK_IMPORTED_MODULE_3__.Action));

/**
 * This defines an action responsible to trigger several actions once triggered.
 * @see https://doc.babylonjs.com/how_to/how_to_use_actions
 */
var CombineAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(CombineAction, _super);
    /**
     * Instantiate the action
     * @param triggerOptions defines the trigger options
     * @param children defines the list of aggregated animations to run
     * @param condition defines the trigger related conditions
     * @param enableChildrenConditions defines if the children actions conditions should be check before execution
     */
    function CombineAction(triggerOptions, children, condition, enableChildrenConditions) {
        if (enableChildrenConditions === void 0) { enableChildrenConditions = true; }
        var _this = _super.call(this, triggerOptions, condition) || this;
        _this.children = children;
        _this.enableChildrenConditions = enableChildrenConditions;
        return _this;
    }
    /** @hidden */
    CombineAction.prototype._prepare = function () {
        for (var index = 0; index < this.children.length; index++) {
            this.children[index]._actionManager = this._actionManager;
            this.children[index]._prepare();
        }
    };
    /**
     * Execute the action and executes all the aggregated actions.
     * @param evt
     */
    CombineAction.prototype.execute = function (evt) {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var action = _a[_i];
            if (!this.enableChildrenConditions || action._evaluateConditionForCurrentFrame()) {
                action.execute(evt);
            }
        }
    };
    /**
     * Serializes the actions and its related information.
     * @param parent defines the object to serialize in
     * @returns the serialized object
     */
    CombineAction.prototype.serialize = function (parent) {
        var serializationObject = _super.prototype._serialize.call(this, {
            name: "CombineAction",
            properties: [],
            combine: [],
        }, parent);
        for (var i = 0; i < this.children.length; i++) {
            serializationObject.combine.push(this.children[i].serialize(null));
        }
        return serializationObject;
    };
    return CombineAction;
}(_action__WEBPACK_IMPORTED_MODULE_3__.Action));

/**
 * This defines an action responsible to run code (external event) once triggered.
 * @see https://doc.babylonjs.com/how_to/how_to_use_actions
 */
var ExecuteCodeAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ExecuteCodeAction, _super);
    /**
     * Instantiate the action
     * @param triggerOptions defines the trigger options
     * @param func defines the callback function to run
     * @param condition defines the trigger related conditions
     */
    function ExecuteCodeAction(triggerOptions, func, condition) {
        var _this = _super.call(this, triggerOptions, condition) || this;
        _this.func = func;
        return _this;
    }
    /**
     * Execute the action and run the attached code.
     * @param evt
     */
    ExecuteCodeAction.prototype.execute = function (evt) {
        this.func(evt);
    };
    return ExecuteCodeAction;
}(_action__WEBPACK_IMPORTED_MODULE_3__.Action));

/**
 * This defines an action responsible to set the parent property of the target once triggered.
 * @see https://doc.babylonjs.com/how_to/how_to_use_actions
 */
var SetParentAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SetParentAction, _super);
    /**
     * Instantiate the action
     * @param triggerOptions defines the trigger options
     * @param target defines the target containing the parent property
     * @param parent defines from where the animation should start (animation frame)
     * @param condition defines the trigger related conditions
     */
    function SetParentAction(triggerOptions, target, parent, condition) {
        var _this = _super.call(this, triggerOptions, condition) || this;
        _this._target = target;
        _this._parent = parent;
        return _this;
    }
    /** @hidden */
    SetParentAction.prototype._prepare = function () { };
    /**
     * Execute the action and set the parent property.
     */
    SetParentAction.prototype.execute = function () {
        if (this._target.parent === this._parent) {
            return;
        }
        var invertParentWorldMatrix = this._parent.getWorldMatrix().clone();
        invertParentWorldMatrix.invert();
        this._target.position = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.TransformCoordinates(this._target.position, invertParentWorldMatrix);
        this._target.parent = this._parent;
    };
    /**
     * Serializes the actions and its related information.
     * @param parent defines the object to serialize in
     * @returns the serialized object
     */
    SetParentAction.prototype.serialize = function (parent) {
        return _super.prototype._serialize.call(this, {
            name: "SetParentAction",
            properties: [_action__WEBPACK_IMPORTED_MODULE_3__.Action._GetTargetProperty(this._target), _action__WEBPACK_IMPORTED_MODULE_3__.Action._GetTargetProperty(this._parent)],
        }, parent);
    };
    return SetParentAction;
}(_action__WEBPACK_IMPORTED_MODULE_3__.Action));

(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__.RegisterClass)("BABYLON.SetParentAction", SetParentAction);
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__.RegisterClass)("BABYLON.ExecuteCodeAction", ExecuteCodeAction);
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__.RegisterClass)("BABYLON.DoNothingAction", DoNothingAction);
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__.RegisterClass)("BABYLON.StopAnimationAction", StopAnimationAction);
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__.RegisterClass)("BABYLON.PlayAnimationAction", PlayAnimationAction);
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__.RegisterClass)("BABYLON.IncrementValueAction", IncrementValueAction);
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__.RegisterClass)("BABYLON.SetValueAction", SetValueAction);
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__.RegisterClass)("BABYLON.SetStateAction", SetStateAction);
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__.RegisterClass)("BABYLON.SetParentAction", SetParentAction);


/***/ }),

/***/ "../../../lts/core/dist/Actions/directAudioActions.js":
/*!************************************************************!*\
  !*** ../../../lts/core/dist/Actions/directAudioActions.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaySoundAction": () => (/* binding */ PlaySoundAction),
/* harmony export */   "StopSoundAction": () => (/* binding */ StopSoundAction)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "../../../lts/core/dist/Actions/action.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Misc/typeStore */ "../../../lts/core/dist/Misc/typeStore.js");



/**
 * This defines an action helpful to play a defined sound on a triggered action.
 */
var PlaySoundAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(PlaySoundAction, _super);
    /**
     * Instantiate the action
     * @param triggerOptions defines the trigger options
     * @param sound defines the sound to play
     * @param condition defines the trigger related conditions
     */
    function PlaySoundAction(triggerOptions, sound, condition) {
        var _this = _super.call(this, triggerOptions, condition) || this;
        _this._sound = sound;
        return _this;
    }
    /** @hidden */
    PlaySoundAction.prototype._prepare = function () { };
    /**
     * Execute the action and play the sound.
     */
    PlaySoundAction.prototype.execute = function () {
        if (this._sound !== undefined) {
            this._sound.play();
        }
    };
    /**
     * Serializes the actions and its related information.
     * @param parent defines the object to serialize in
     * @returns the serialized object
     */
    PlaySoundAction.prototype.serialize = function (parent) {
        return _super.prototype._serialize.call(this, {
            name: "PlaySoundAction",
            properties: [{ name: "sound", value: this._sound.name }],
        }, parent);
    };
    return PlaySoundAction;
}(_action__WEBPACK_IMPORTED_MODULE_1__.Action));

/**
 * This defines an action helpful to stop a defined sound on a triggered action.
 */
var StopSoundAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(StopSoundAction, _super);
    /**
     * Instantiate the action
     * @param triggerOptions defines the trigger options
     * @param sound defines the sound to stop
     * @param condition defines the trigger related conditions
     */
    function StopSoundAction(triggerOptions, sound, condition) {
        var _this = _super.call(this, triggerOptions, condition) || this;
        _this._sound = sound;
        return _this;
    }
    /** @hidden */
    StopSoundAction.prototype._prepare = function () { };
    /**
     * Execute the action and stop the sound.
     */
    StopSoundAction.prototype.execute = function () {
        if (this._sound !== undefined) {
            this._sound.stop();
        }
    };
    /**
     * Serializes the actions and its related information.
     * @param parent defines the object to serialize in
     * @returns the serialized object
     */
    StopSoundAction.prototype.serialize = function (parent) {
        return _super.prototype._serialize.call(this, {
            name: "StopSoundAction",
            properties: [{ name: "sound", value: this._sound.name }],
        }, parent);
    };
    return StopSoundAction;
}(_action__WEBPACK_IMPORTED_MODULE_1__.Action));

(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("BABYLON.PlaySoundAction", PlaySoundAction);
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("BABYLON.StopSoundAction", StopSoundAction);


/***/ }),

/***/ "../../../lts/core/dist/Actions/index.js":
/*!***********************************************!*\
  !*** ../../../lts/core/dist/Actions/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractActionManager": () => (/* reexport safe */ _abstractActionManager__WEBPACK_IMPORTED_MODULE_0__.AbstractActionManager),
/* harmony export */   "Action": () => (/* reexport safe */ _action__WEBPACK_IMPORTED_MODULE_1__.Action),
/* harmony export */   "ActionEvent": () => (/* reexport safe */ _actionEvent__WEBPACK_IMPORTED_MODULE_2__.ActionEvent),
/* harmony export */   "ActionManager": () => (/* reexport safe */ _actionManager__WEBPACK_IMPORTED_MODULE_3__.ActionManager),
/* harmony export */   "CombineAction": () => (/* reexport safe */ _directActions__WEBPACK_IMPORTED_MODULE_5__.CombineAction),
/* harmony export */   "Condition": () => (/* reexport safe */ _condition__WEBPACK_IMPORTED_MODULE_4__.Condition),
/* harmony export */   "DoNothingAction": () => (/* reexport safe */ _directActions__WEBPACK_IMPORTED_MODULE_5__.DoNothingAction),
/* harmony export */   "ExecuteCodeAction": () => (/* reexport safe */ _directActions__WEBPACK_IMPORTED_MODULE_5__.ExecuteCodeAction),
/* harmony export */   "IncrementValueAction": () => (/* reexport safe */ _directActions__WEBPACK_IMPORTED_MODULE_5__.IncrementValueAction),
/* harmony export */   "InterpolateValueAction": () => (/* reexport safe */ _interpolateValueAction__WEBPACK_IMPORTED_MODULE_7__.InterpolateValueAction),
/* harmony export */   "PlayAnimationAction": () => (/* reexport safe */ _directActions__WEBPACK_IMPORTED_MODULE_5__.PlayAnimationAction),
/* harmony export */   "PlaySoundAction": () => (/* reexport safe */ _directAudioActions__WEBPACK_IMPORTED_MODULE_6__.PlaySoundAction),
/* harmony export */   "PredicateCondition": () => (/* reexport safe */ _condition__WEBPACK_IMPORTED_MODULE_4__.PredicateCondition),
/* harmony export */   "SetParentAction": () => (/* reexport safe */ _directActions__WEBPACK_IMPORTED_MODULE_5__.SetParentAction),
/* harmony export */   "SetStateAction": () => (/* reexport safe */ _directActions__WEBPACK_IMPORTED_MODULE_5__.SetStateAction),
/* harmony export */   "SetValueAction": () => (/* reexport safe */ _directActions__WEBPACK_IMPORTED_MODULE_5__.SetValueAction),
/* harmony export */   "StateCondition": () => (/* reexport safe */ _condition__WEBPACK_IMPORTED_MODULE_4__.StateCondition),
/* harmony export */   "StopAnimationAction": () => (/* reexport safe */ _directActions__WEBPACK_IMPORTED_MODULE_5__.StopAnimationAction),
/* harmony export */   "StopSoundAction": () => (/* reexport safe */ _directAudioActions__WEBPACK_IMPORTED_MODULE_6__.StopSoundAction),
/* harmony export */   "SwitchBooleanAction": () => (/* reexport safe */ _directActions__WEBPACK_IMPORTED_MODULE_5__.SwitchBooleanAction),
/* harmony export */   "ValueCondition": () => (/* reexport safe */ _condition__WEBPACK_IMPORTED_MODULE_4__.ValueCondition)
/* harmony export */ });
/* harmony import */ var _abstractActionManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractActionManager */ "../../../lts/core/dist/Actions/abstractActionManager.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "../../../lts/core/dist/Actions/action.js");
/* harmony import */ var _actionEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionEvent */ "../../../lts/core/dist/Actions/actionEvent.js");
/* harmony import */ var _actionManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionManager */ "../../../lts/core/dist/Actions/actionManager.js");
/* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./condition */ "../../../lts/core/dist/Actions/condition.js");
/* harmony import */ var _directActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directActions */ "../../../lts/core/dist/Actions/directActions.js");
/* harmony import */ var _directAudioActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directAudioActions */ "../../../lts/core/dist/Actions/directAudioActions.js");
/* harmony import */ var _interpolateValueAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interpolateValueAction */ "../../../lts/core/dist/Actions/interpolateValueAction.js");










/***/ }),

/***/ "../../../lts/core/dist/Actions/interpolateValueAction.js":
/*!****************************************************************!*\
  !*** ../../../lts/core/dist/Actions/interpolateValueAction.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterpolateValueAction": () => (/* binding */ InterpolateValueAction)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "../../../lts/core/dist/Actions/action.js");
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Misc/logger */ "../../../lts/core/dist/Misc/logger.js");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Misc/observable */ "../../../lts/core/dist/Misc/observable.js");
/* harmony import */ var _Maths_math_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Maths/math.color */ "../../../lts/core/dist/Maths/math.color.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Animations_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Animations/animation */ "../../../lts/core/dist/Animations/animation.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Misc/typeStore */ "../../../lts/core/dist/Misc/typeStore.js");








/**
 * This defines an action responsible to change the value of a property
 * by interpolating between its current value and the newly set one once triggered.
 * @see https://doc.babylonjs.com/how_to/how_to_use_actions
 */
var InterpolateValueAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(InterpolateValueAction, _super);
    /**
     * Instantiate the action
     * @param triggerOptions defines the trigger options
     * @param target defines the object containing the value to interpolate
     * @param propertyPath defines the path to the property in the target object
     * @param value defines the target value at the end of the interpolation
     * @param duration defines the time it will take for the property to interpolate to the value.
     * @param condition defines the trigger related conditions
     * @param stopOtherAnimations defines if the other scene animations should be stopped when the action has been triggered
     * @param onInterpolationDone defines a callback raised once the interpolation animation has been done
     */
    function InterpolateValueAction(triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations, onInterpolationDone) {
        if (duration === void 0) { duration = 1000; }
        var _this = _super.call(this, triggerOptions, condition) || this;
        /**
         * Defines the time it will take for the property to interpolate to the value.
         */
        _this.duration = 1000;
        /**
         * Observable triggered once the interpolation animation has been done.
         */
        _this.onInterpolationDoneObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_3__.Observable();
        _this.propertyPath = propertyPath;
        _this.value = value;
        _this.duration = duration;
        _this.stopOtherAnimations = stopOtherAnimations;
        _this.onInterpolationDone = onInterpolationDone;
        _this._target = _this._effectiveTarget = target;
        return _this;
    }
    /** @hidden */
    InterpolateValueAction.prototype._prepare = function () {
        this._effectiveTarget = this._getEffectiveTarget(this._effectiveTarget, this.propertyPath);
        this._property = this._getProperty(this.propertyPath);
    };
    /**
     * Execute the action starts the value interpolation.
     */
    InterpolateValueAction.prototype.execute = function () {
        var _this = this;
        var scene = this._actionManager.getScene();
        var keys = [
            {
                frame: 0,
                value: this._effectiveTarget[this._property],
            },
            {
                frame: 100,
                value: this.value,
            },
        ];
        var dataType;
        if (typeof this.value === "number") {
            dataType = _Animations_animation__WEBPACK_IMPORTED_MODULE_6__.Animation.ANIMATIONTYPE_FLOAT;
        }
        else if (this.value instanceof _Maths_math_color__WEBPACK_IMPORTED_MODULE_4__.Color3) {
            dataType = _Animations_animation__WEBPACK_IMPORTED_MODULE_6__.Animation.ANIMATIONTYPE_COLOR3;
        }
        else if (this.value instanceof _Maths_math_vector__WEBPACK_IMPORTED_MODULE_5__.Vector3) {
            dataType = _Animations_animation__WEBPACK_IMPORTED_MODULE_6__.Animation.ANIMATIONTYPE_VECTOR3;
        }
        else if (this.value instanceof _Maths_math_vector__WEBPACK_IMPORTED_MODULE_5__.Matrix) {
            dataType = _Animations_animation__WEBPACK_IMPORTED_MODULE_6__.Animation.ANIMATIONTYPE_MATRIX;
        }
        else if (this.value instanceof _Maths_math_vector__WEBPACK_IMPORTED_MODULE_5__.Quaternion) {
            dataType = _Animations_animation__WEBPACK_IMPORTED_MODULE_6__.Animation.ANIMATIONTYPE_QUATERNION;
        }
        else {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Warn("InterpolateValueAction: Unsupported type (" + typeof this.value + ")");
            return;
        }
        var animation = new _Animations_animation__WEBPACK_IMPORTED_MODULE_6__.Animation("InterpolateValueAction", this._property, 100 * (1000.0 / this.duration), dataType, _Animations_animation__WEBPACK_IMPORTED_MODULE_6__.Animation.ANIMATIONLOOPMODE_CONSTANT);
        animation.setKeys(keys);
        if (this.stopOtherAnimations) {
            scene.stopAnimation(this._effectiveTarget);
        }
        var wrapper = function () {
            _this.onInterpolationDoneObservable.notifyObservers(_this);
            if (_this.onInterpolationDone) {
                _this.onInterpolationDone();
            }
        };
        scene.beginDirectAnimation(this._effectiveTarget, [animation], 0, 100, false, 1, wrapper);
    };
    /**
     * Serializes the actions and its related information.
     * @param parent defines the object to serialize in
     * @returns the serialized object
     */
    InterpolateValueAction.prototype.serialize = function (parent) {
        return _super.prototype._serialize.call(this, {
            name: "InterpolateValueAction",
            properties: [
                _action__WEBPACK_IMPORTED_MODULE_1__.Action._GetTargetProperty(this._target),
                { name: "propertyPath", value: this.propertyPath },
                { name: "value", value: _action__WEBPACK_IMPORTED_MODULE_1__.Action._SerializeValueAsString(this.value) },
                { name: "duration", value: _action__WEBPACK_IMPORTED_MODULE_1__.Action._SerializeValueAsString(this.duration) },
                { name: "stopOtherAnimations", value: _action__WEBPACK_IMPORTED_MODULE_1__.Action._SerializeValueAsString(this.stopOtherAnimations) || false },
            ],
        }, parent);
    };
    return InterpolateValueAction;
}(_action__WEBPACK_IMPORTED_MODULE_1__.Action));

(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_7__.RegisterClass)("BABYLON.InterpolateValueAction", InterpolateValueAction);


/***/ }),

/***/ "../../../lts/core/dist/Animations/animatable.interface.js":
/*!*****************************************************************!*\
  !*** ../../../lts/core/dist/Animations/animatable.interface.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../lts/core/dist/Animations/animatable.js":
/*!*******************************************************!*\
  !*** ../../../lts/core/dist/Animations/animatable.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animatable": () => (/* binding */ Animatable)
/* harmony export */ });
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "../../../lts/core/dist/Animations/animation.js");
/* harmony import */ var _runtimeAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runtimeAnimation */ "../../../lts/core/dist/Animations/runtimeAnimation.js");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Misc/observable */ "../../../lts/core/dist/Misc/observable.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scene */ "../../../lts/core/dist/scene.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Misc/precisionDate */ "../../../lts/core/dist/Misc/precisionDate.js");
/* harmony import */ var _Bones_bone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Bones/bone */ "../../../lts/core/dist/Bones/bone.js");







/**
 * Class used to store an actual running animation
 */
var Animatable = /** @class */ (function () {
    /**
     * Creates a new Animatable
     * @param scene defines the hosting scene
     * @param target defines the target object
     * @param fromFrame defines the starting frame number (default is 0)
     * @param toFrame defines the ending frame number (default is 100)
     * @param loopAnimation defines if the animation must loop (default is false)
     * @param speedRatio defines the factor to apply to animation speed (default is 1)
     * @param onAnimationEnd defines a callback to call when animation ends if it is not looping
     * @param animations defines a group of animation to add to the new Animatable
     * @param onAnimationLoop defines a callback to call when animation loops
     * @param isAdditive defines whether the animation should be evaluated additively
     */
    function Animatable(scene, 
    /** defines the target object */
    target, 
    /** defines the starting frame number (default is 0) */
    fromFrame, 
    /** defines the ending frame number (default is 100) */
    toFrame, 
    /** defines if the animation must loop (default is false)  */
    loopAnimation, speedRatio, 
    /** defines a callback to call when animation ends if it is not looping */
    onAnimationEnd, animations, 
    /** defines a callback to call when animation loops */
    onAnimationLoop, 
    /** defines whether the animation should be evaluated additively */
    isAdditive) {
        if (fromFrame === void 0) { fromFrame = 0; }
        if (toFrame === void 0) { toFrame = 100; }
        if (loopAnimation === void 0) { loopAnimation = false; }
        if (speedRatio === void 0) { speedRatio = 1.0; }
        if (isAdditive === void 0) { isAdditive = false; }
        this.target = target;
        this.fromFrame = fromFrame;
        this.toFrame = toFrame;
        this.loopAnimation = loopAnimation;
        this.onAnimationEnd = onAnimationEnd;
        this.onAnimationLoop = onAnimationLoop;
        this.isAdditive = isAdditive;
        this._localDelayOffset = null;
        this._pausedDelay = null;
        this._manualJumpDelay = null;
        this._runtimeAnimations = new Array();
        this._paused = false;
        this._speedRatio = 1;
        this._weight = -1.0;
        this._syncRoot = null;
        this._frameToSyncFromJump = null;
        /**
         * Gets or sets a boolean indicating if the animatable must be disposed and removed at the end of the animation.
         * This will only apply for non looping animation (default is true)
         */
        this.disposeOnEnd = true;
        /**
         * Gets a boolean indicating if the animation has started
         */
        this.animationStarted = false;
        /**
         * Observer raised when the animation ends
         */
        this.onAnimationEndObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        /**
         * Observer raised when the animation loops
         */
        this.onAnimationLoopObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        this._scene = scene;
        if (animations) {
            this.appendAnimations(target, animations);
        }
        this._speedRatio = speedRatio;
        scene._activeAnimatables.push(this);
    }
    Object.defineProperty(Animatable.prototype, "syncRoot", {
        /**
         * Gets the root Animatable used to synchronize and normalize animations
         */
        get: function () {
            return this._syncRoot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animatable.prototype, "masterFrame", {
        /**
         * Gets the current frame of the first RuntimeAnimation
         * Used to synchronize Animatables
         */
        get: function () {
            if (this._runtimeAnimations.length === 0) {
                return 0;
            }
            return this._runtimeAnimations[0].currentFrame;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animatable.prototype, "weight", {
        /**
         * Gets or sets the animatable weight (-1.0 by default meaning not weighted)
         */
        get: function () {
            return this._weight;
        },
        set: function (value) {
            if (value === -1) {
                // -1 is ok and means no weight
                this._weight = -1;
                return;
            }
            // Else weight must be in [0, 1] range
            this._weight = Math.min(Math.max(value, 0), 1.0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animatable.prototype, "speedRatio", {
        /**
         * Gets or sets the speed ratio to apply to the animatable (1.0 by default)
         */
        get: function () {
            return this._speedRatio;
        },
        set: function (value) {
            for (var index = 0; index < this._runtimeAnimations.length; index++) {
                var animation = this._runtimeAnimations[index];
                animation._prepareForSpeedRatioChange(value);
            }
            this._speedRatio = value;
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    /**
     * Synchronize and normalize current Animatable with a source Animatable
     * This is useful when using animation weights and when animations are not of the same length
     * @param root defines the root Animatable to synchronize with (null to stop synchronizing)
     * @returns the current Animatable
     */
    Animatable.prototype.syncWith = function (root) {
        this._syncRoot = root;
        if (root) {
            // Make sure this animatable will animate after the root
            var index = this._scene._activeAnimatables.indexOf(this);
            if (index > -1) {
                this._scene._activeAnimatables.splice(index, 1);
                this._scene._activeAnimatables.push(this);
            }
        }
        return this;
    };
    /**
     * Gets the list of runtime animations
     * @returns an array of RuntimeAnimation
     */
    Animatable.prototype.getAnimations = function () {
        return this._runtimeAnimations;
    };
    /**
     * Adds more animations to the current animatable
     * @param target defines the target of the animations
     * @param animations defines the new animations to add
     */
    Animatable.prototype.appendAnimations = function (target, animations) {
        var _this = this;
        for (var index = 0; index < animations.length; index++) {
            var animation = animations[index];
            var newRuntimeAnimation = new _runtimeAnimation__WEBPACK_IMPORTED_MODULE_1__.RuntimeAnimation(target, animation, this._scene, this);
            newRuntimeAnimation._onLoop = function () {
                _this.onAnimationLoopObservable.notifyObservers(_this);
                if (_this.onAnimationLoop) {
                    _this.onAnimationLoop();
                }
            };
            this._runtimeAnimations.push(newRuntimeAnimation);
        }
    };
    /**
     * Gets the source animation for a specific property
     * @param property defines the property to look for
     * @returns null or the source animation for the given property
     */
    Animatable.prototype.getAnimationByTargetProperty = function (property) {
        var runtimeAnimations = this._runtimeAnimations;
        for (var index = 0; index < runtimeAnimations.length; index++) {
            if (runtimeAnimations[index].animation.targetProperty === property) {
                return runtimeAnimations[index].animation;
            }
        }
        return null;
    };
    /**
     * Gets the runtime animation for a specific property
     * @param property defines the property to look for
     * @returns null or the runtime animation for the given property
     */
    Animatable.prototype.getRuntimeAnimationByTargetProperty = function (property) {
        var runtimeAnimations = this._runtimeAnimations;
        for (var index = 0; index < runtimeAnimations.length; index++) {
            if (runtimeAnimations[index].animation.targetProperty === property) {
                return runtimeAnimations[index];
            }
        }
        return null;
    };
    /**
     * Resets the animatable to its original state
     */
    Animatable.prototype.reset = function () {
        var runtimeAnimations = this._runtimeAnimations;
        for (var index = 0; index < runtimeAnimations.length; index++) {
            runtimeAnimations[index].reset(true);
        }
        this._localDelayOffset = null;
        this._pausedDelay = null;
    };
    /**
     * Allows the animatable to blend with current running animations
     * @see https://doc.babylonjs.com/babylon101/animations#animation-blending
     * @param blendingSpeed defines the blending speed to use
     */
    Animatable.prototype.enableBlending = function (blendingSpeed) {
        var runtimeAnimations = this._runtimeAnimations;
        for (var index = 0; index < runtimeAnimations.length; index++) {
            runtimeAnimations[index].animation.enableBlending = true;
            runtimeAnimations[index].animation.blendingSpeed = blendingSpeed;
        }
    };
    /**
     * Disable animation blending
     * @see https://doc.babylonjs.com/babylon101/animations#animation-blending
     */
    Animatable.prototype.disableBlending = function () {
        var runtimeAnimations = this._runtimeAnimations;
        for (var index = 0; index < runtimeAnimations.length; index++) {
            runtimeAnimations[index].animation.enableBlending = false;
        }
    };
    /**
     * Jump directly to a given frame
     * @param frame defines the frame to jump to
     */
    Animatable.prototype.goToFrame = function (frame) {
        var _a;
        var runtimeAnimations = this._runtimeAnimations;
        if (runtimeAnimations[0]) {
            var fps = runtimeAnimations[0].animation.framePerSecond;
            this._frameToSyncFromJump = (_a = this._frameToSyncFromJump) !== null && _a !== void 0 ? _a : runtimeAnimations[0].currentFrame;
            var delay = this.speedRatio === 0 ? 0 : (((frame - this._frameToSyncFromJump) / fps) * 1000) / this.speedRatio;
            this._manualJumpDelay = -delay;
        }
        for (var index = 0; index < runtimeAnimations.length; index++) {
            runtimeAnimations[index].goToFrame(frame);
        }
    };
    /**
     * Pause the animation
     */
    Animatable.prototype.pause = function () {
        if (this._paused) {
            return;
        }
        this._paused = true;
    };
    /**
     * Restart the animation
     */
    Animatable.prototype.restart = function () {
        this._paused = false;
    };
    Animatable.prototype._raiseOnAnimationEnd = function () {
        if (this.onAnimationEnd) {
            this.onAnimationEnd();
        }
        this.onAnimationEndObservable.notifyObservers(this);
    };
    /**
     * Stop and delete the current animation
     * @param animationName defines a string used to only stop some of the runtime animations instead of all
     * @param targetMask - a function that determines if the animation should be stopped based on its target (all animations will be stopped if both this and animationName are empty)
     */
    Animatable.prototype.stop = function (animationName, targetMask) {
        if (animationName || targetMask) {
            var idx = this._scene._activeAnimatables.indexOf(this);
            if (idx > -1) {
                var runtimeAnimations = this._runtimeAnimations;
                for (var index = runtimeAnimations.length - 1; index >= 0; index--) {
                    var runtimeAnimation = runtimeAnimations[index];
                    if (animationName && runtimeAnimation.animation.name != animationName) {
                        continue;
                    }
                    if (targetMask && !targetMask(runtimeAnimation.target)) {
                        continue;
                    }
                    runtimeAnimation.dispose();
                    runtimeAnimations.splice(index, 1);
                }
                if (runtimeAnimations.length == 0) {
                    this._scene._activeAnimatables.splice(idx, 1);
                    this._raiseOnAnimationEnd();
                }
            }
        }
        else {
            var index = this._scene._activeAnimatables.indexOf(this);
            if (index > -1) {
                this._scene._activeAnimatables.splice(index, 1);
                var runtimeAnimations = this._runtimeAnimations;
                for (var index_1 = 0; index_1 < runtimeAnimations.length; index_1++) {
                    runtimeAnimations[index_1].dispose();
                }
                this._raiseOnAnimationEnd();
            }
        }
    };
    /**
     * Wait asynchronously for the animation to end
     * @returns a promise which will be fulfilled when the animation ends
     */
    Animatable.prototype.waitAsync = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.onAnimationEndObservable.add(function () {
                resolve(_this);
            }, undefined, undefined, _this, true);
        });
    };
    /**
     * @param delay
     * @hidden
     */
    Animatable.prototype._animate = function (delay) {
        if (this._paused) {
            this.animationStarted = false;
            if (this._pausedDelay === null) {
                this._pausedDelay = delay;
            }
            return true;
        }
        if (this._localDelayOffset === null) {
            this._localDelayOffset = delay;
            this._pausedDelay = null;
        }
        else if (this._pausedDelay !== null) {
            this._localDelayOffset += delay - this._pausedDelay;
            this._pausedDelay = null;
        }
        if (this._manualJumpDelay !== null) {
            this._localDelayOffset += this._manualJumpDelay;
            this._manualJumpDelay = null;
            this._frameToSyncFromJump = null;
        }
        if (this._weight === 0) {
            // We consider that an animation with a weight === 0 is "actively" paused
            return true;
        }
        // Animating
        var running = false;
        var runtimeAnimations = this._runtimeAnimations;
        var index;
        for (index = 0; index < runtimeAnimations.length; index++) {
            var animation = runtimeAnimations[index];
            var isRunning = animation.animate(delay - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
            running = running || isRunning;
        }
        this.animationStarted = running;
        if (!running) {
            if (this.disposeOnEnd) {
                // Remove from active animatables
                index = this._scene._activeAnimatables.indexOf(this);
                this._scene._activeAnimatables.splice(index, 1);
                // Dispose all runtime animations
                for (index = 0; index < runtimeAnimations.length; index++) {
                    runtimeAnimations[index].dispose();
                }
            }
            this._raiseOnAnimationEnd();
            if (this.disposeOnEnd) {
                this.onAnimationEnd = null;
                this.onAnimationLoop = null;
                this.onAnimationLoopObservable.clear();
                this.onAnimationEndObservable.clear();
            }
        }
        return running;
    };
    return Animatable;
}());

_scene__WEBPACK_IMPORTED_MODULE_3__.Scene.prototype._animate = function () {
    if (!this.animationsEnabled) {
        return;
    }
    // Getting time
    var now = _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_5__.PrecisionDate.Now;
    if (!this._animationTimeLast) {
        if (this._pendingData.length > 0) {
            return;
        }
        this._animationTimeLast = now;
    }
    this.deltaTime = this.useConstantAnimationDeltaTime ? 16.0 : (now - this._animationTimeLast) * this.animationTimeScale;
    this._animationTimeLast = now;
    var animatables = this._activeAnimatables;
    if (animatables.length === 0) {
        return;
    }
    this._animationTime += this.deltaTime;
    var animationTime = this._animationTime;
    for (var index = 0; index < animatables.length; index++) {
        var animatable = animatables[index];
        if (!animatable._animate(animationTime) && animatable.disposeOnEnd) {
            index--; // Array was updated
        }
    }
    // Late animation bindings
    this._processLateAnimationBindings();
};
_scene__WEBPACK_IMPORTED_MODULE_3__.Scene.prototype.beginWeightedAnimation = function (target, from, to, weight, loop, speedRatio, onAnimationEnd, animatable, targetMask, onAnimationLoop, isAdditive) {
    if (weight === void 0) { weight = 1.0; }
    if (speedRatio === void 0) { speedRatio = 1.0; }
    if (isAdditive === void 0) { isAdditive = false; }
    var returnedAnimatable = this.beginAnimation(target, from, to, loop, speedRatio, onAnimationEnd, animatable, false, targetMask, onAnimationLoop, isAdditive);
    returnedAnimatable.weight = weight;
    return returnedAnimatable;
};
_scene__WEBPACK_IMPORTED_MODULE_3__.Scene.prototype.beginAnimation = function (target, from, to, loop, speedRatio, onAnimationEnd, animatable, stopCurrent, targetMask, onAnimationLoop, isAdditive) {
    if (speedRatio === void 0) { speedRatio = 1.0; }
    if (stopCurrent === void 0) { stopCurrent = true; }
    if (isAdditive === void 0) { isAdditive = false; }
    if (from > to && speedRatio > 0) {
        speedRatio *= -1;
    }
    if (stopCurrent) {
        this.stopAnimation(target, undefined, targetMask);
    }
    if (!animatable) {
        animatable = new Animatable(this, target, from, to, loop, speedRatio, onAnimationEnd, undefined, onAnimationLoop, isAdditive);
    }
    var shouldRunTargetAnimations = targetMask ? targetMask(target) : true;
    // Local animations
    if (target.animations && shouldRunTargetAnimations) {
        animatable.appendAnimations(target, target.animations);
    }
    // Children animations
    if (target.getAnimatables) {
        var animatables = target.getAnimatables();
        for (var index = 0; index < animatables.length; index++) {
            this.beginAnimation(animatables[index], from, to, loop, speedRatio, onAnimationEnd, animatable, stopCurrent, targetMask, onAnimationLoop);
        }
    }
    animatable.reset();
    return animatable;
};
_scene__WEBPACK_IMPORTED_MODULE_3__.Scene.prototype.beginHierarchyAnimation = function (target, directDescendantsOnly, from, to, loop, speedRatio, onAnimationEnd, animatable, stopCurrent, targetMask, onAnimationLoop, isAdditive) {
    if (speedRatio === void 0) { speedRatio = 1.0; }
    if (stopCurrent === void 0) { stopCurrent = true; }
    if (isAdditive === void 0) { isAdditive = false; }
    var children = target.getDescendants(directDescendantsOnly);
    var result = [];
    result.push(this.beginAnimation(target, from, to, loop, speedRatio, onAnimationEnd, animatable, stopCurrent, targetMask, undefined, isAdditive));
    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var child = children_1[_i];
        result.push(this.beginAnimation(child, from, to, loop, speedRatio, onAnimationEnd, animatable, stopCurrent, targetMask, undefined, isAdditive));
    }
    return result;
};
_scene__WEBPACK_IMPORTED_MODULE_3__.Scene.prototype.beginDirectAnimation = function (target, animations, from, to, loop, speedRatio, onAnimationEnd, onAnimationLoop, isAdditive) {
    if (isAdditive === void 0) { isAdditive = false; }
    if (speedRatio === undefined) {
        speedRatio = 1.0;
    }
    if (from > to && speedRatio > 0) {
        speedRatio *= -1;
    }
    else if (to > from && speedRatio < 0) {
        var temp = to;
        to = from;
        from = temp;
    }
    var animatable = new Animatable(this, target, from, to, loop, speedRatio, onAnimationEnd, animations, onAnimationLoop, isAdditive);
    return animatable;
};
_scene__WEBPACK_IMPORTED_MODULE_3__.Scene.prototype.beginDirectHierarchyAnimation = function (target, directDescendantsOnly, animations, from, to, loop, speedRatio, onAnimationEnd, onAnimationLoop, isAdditive) {
    if (isAdditive === void 0) { isAdditive = false; }
    var children = target.getDescendants(directDescendantsOnly);
    var result = [];
    result.push(this.beginDirectAnimation(target, animations, from, to, loop, speedRatio, onAnimationEnd, onAnimationLoop, isAdditive));
    for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
        var child = children_2[_i];
        result.push(this.beginDirectAnimation(child, animations, from, to, loop, speedRatio, onAnimationEnd, onAnimationLoop, isAdditive));
    }
    return result;
};
_scene__WEBPACK_IMPORTED_MODULE_3__.Scene.prototype.getAnimatableByTarget = function (target) {
    for (var index = 0; index < this._activeAnimatables.length; index++) {
        if (this._activeAnimatables[index].target === target) {
            return this._activeAnimatables[index];
        }
    }
    return null;
};
_scene__WEBPACK_IMPORTED_MODULE_3__.Scene.prototype.getAllAnimatablesByTarget = function (target) {
    var result = [];
    for (var index = 0; index < this._activeAnimatables.length; index++) {
        if (this._activeAnimatables[index].target === target) {
            result.push(this._activeAnimatables[index]);
        }
    }
    return result;
};
/**
 * Will stop the animation of the given target
 * @param target - the target
 * @param animationName - the name of the animation to stop (all animations will be stopped if both this and targetMask are empty)
 * @param targetMask - a function that determines if the animation should be stopped based on its target (all animations will be stopped if both this and animationName are empty)
 */
_scene__WEBPACK_IMPORTED_MODULE_3__.Scene.prototype.stopAnimation = function (target, animationName, targetMask) {
    var animatables = this.getAllAnimatablesByTarget(target);
    for (var _i = 0, animatables_1 = animatables; _i < animatables_1.length; _i++) {
        var animatable = animatables_1[_i];
        animatable.stop(animationName, targetMask);
    }
};
/**
 * Stops and removes all animations that have been applied to the scene
 */
_scene__WEBPACK_IMPORTED_MODULE_3__.Scene.prototype.stopAllAnimations = function () {
    if (this._activeAnimatables) {
        for (var i = 0; i < this._activeAnimatables.length; i++) {
            this._activeAnimatables[i].stop();
        }
        this._activeAnimatables = [];
    }
    for (var _i = 0, _a = this.animationGroups; _i < _a.length; _i++) {
        var group = _a[_i];
        group.stop();
    }
};
_scene__WEBPACK_IMPORTED_MODULE_3__.Scene.prototype._registerTargetForLateAnimationBinding = function (runtimeAnimation, originalValue) {
    var target = runtimeAnimation.target;
    this._registeredForLateAnimationBindings.pushNoDuplicate(target);
    if (!target._lateAnimationHolders) {
        target._lateAnimationHolders = {};
    }
    if (!target._lateAnimationHolders[runtimeAnimation.targetPath]) {
        target._lateAnimationHolders[runtimeAnimation.targetPath] = {
            totalWeight: 0,
            totalAdditiveWeight: 0,
            animations: [],
            additiveAnimations: [],
            originalValue: originalValue,
        };
    }
    if (runtimeAnimation.isAdditive) {
        target._lateAnimationHolders[runtimeAnimation.targetPath].additiveAnimations.push(runtimeAnimation);
        target._lateAnimationHolders[runtimeAnimation.targetPath].totalAdditiveWeight += runtimeAnimation.weight;
    }
    else {
        target._lateAnimationHolders[runtimeAnimation.targetPath].animations.push(runtimeAnimation);
        target._lateAnimationHolders[runtimeAnimation.targetPath].totalWeight += runtimeAnimation.weight;
    }
};
_scene__WEBPACK_IMPORTED_MODULE_3__.Scene.prototype._processLateAnimationBindingsForMatrices = function (holder) {
    if (holder.totalWeight === 0 && holder.totalAdditiveWeight === 0) {
        return holder.originalValue;
    }
    var normalizer = 1.0;
    var finalPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.TmpVectors.Vector3[0];
    var finalScaling = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.TmpVectors.Vector3[1];
    var finalQuaternion = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.TmpVectors.Quaternion[0];
    var startIndex = 0;
    var originalAnimation = holder.animations[0];
    var originalValue = holder.originalValue;
    var scale = 1;
    var skipOverride = false;
    if (holder.totalWeight < 1.0) {
        // We need to mix the original value in
        scale = 1.0 - holder.totalWeight;
        originalValue.decompose(finalScaling, finalQuaternion, finalPosition);
    }
    else {
        startIndex = 1;
        // We need to normalize the weights
        normalizer = holder.totalWeight;
        scale = originalAnimation.weight / normalizer;
        if (scale == 1) {
            if (holder.totalAdditiveWeight) {
                skipOverride = true;
            }
            else {
                return originalAnimation.currentValue;
            }
        }
        originalAnimation.currentValue.decompose(finalScaling, finalQuaternion, finalPosition);
    }
    // Add up the override animations
    if (!skipOverride) {
        finalScaling.scaleInPlace(scale);
        finalPosition.scaleInPlace(scale);
        finalQuaternion.scaleInPlace(scale);
        for (var animIndex = startIndex; animIndex < holder.animations.length; animIndex++) {
            var runtimeAnimation = holder.animations[animIndex];
            if (runtimeAnimation.weight === 0) {
                continue;
            }
            scale = runtimeAnimation.weight / normalizer;
            var currentPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.TmpVectors.Vector3[2];
            var currentScaling = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.TmpVectors.Vector3[3];
            var currentQuaternion = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.TmpVectors.Quaternion[1];
            runtimeAnimation.currentValue.decompose(currentScaling, currentQuaternion, currentPosition);
            currentScaling.scaleAndAddToRef(scale, finalScaling);
            currentQuaternion.scaleAndAddToRef(scale, finalQuaternion);
            currentPosition.scaleAndAddToRef(scale, finalPosition);
        }
    }
    // Add up the additive animations
    for (var animIndex = 0; animIndex < holder.additiveAnimations.length; animIndex++) {
        var runtimeAnimation = holder.additiveAnimations[animIndex];
        if (runtimeAnimation.weight === 0) {
            continue;
        }
        var currentPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.TmpVectors.Vector3[2];
        var currentScaling = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.TmpVectors.Vector3[3];
        var currentQuaternion = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.TmpVectors.Quaternion[1];
        runtimeAnimation.currentValue.decompose(currentScaling, currentQuaternion, currentPosition);
        currentScaling.multiplyToRef(finalScaling, currentScaling);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3.LerpToRef(finalScaling, currentScaling, runtimeAnimation.weight, finalScaling);
        finalQuaternion.multiplyToRef(currentQuaternion, currentQuaternion);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Quaternion.SlerpToRef(finalQuaternion, currentQuaternion, runtimeAnimation.weight, finalQuaternion);
        currentPosition.scaleAndAddToRef(runtimeAnimation.weight, finalPosition);
    }
    var workValue = originalAnimation ? originalAnimation._animationState.workValue : _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.TmpVectors.Matrix[0].clone();
    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Matrix.ComposeToRef(finalScaling, finalQuaternion, finalPosition, workValue);
    return workValue;
};
_scene__WEBPACK_IMPORTED_MODULE_3__.Scene.prototype._processLateAnimationBindingsForQuaternions = function (holder, refQuaternion) {
    if (holder.totalWeight === 0 && holder.totalAdditiveWeight === 0) {
        return refQuaternion;
    }
    var originalAnimation = holder.animations[0];
    var originalValue = holder.originalValue;
    var cumulativeQuaternion = refQuaternion;
    if (holder.totalWeight === 0 && holder.totalAdditiveWeight > 0) {
        cumulativeQuaternion.copyFrom(originalValue);
    }
    else if (holder.animations.length === 1) {
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Quaternion.SlerpToRef(originalValue, originalAnimation.currentValue, Math.min(1.0, holder.totalWeight), cumulativeQuaternion);
        if (holder.totalAdditiveWeight === 0) {
            return cumulativeQuaternion;
        }
    }
    else if (holder.animations.length > 1) {
        // Add up the override animations
        var normalizer = 1.0;
        var quaternions = void 0;
        var weights = void 0;
        if (holder.totalWeight < 1.0) {
            var scale = 1.0 - holder.totalWeight;
            quaternions = [];
            weights = [];
            quaternions.push(originalValue);
            weights.push(scale);
        }
        else {
            if (holder.animations.length === 2) {
                // Slerp as soon as we can
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Quaternion.SlerpToRef(holder.animations[0].currentValue, holder.animations[1].currentValue, holder.animations[1].weight / holder.totalWeight, refQuaternion);
                if (holder.totalAdditiveWeight === 0) {
                    return refQuaternion;
                }
            }
            quaternions = [];
            weights = [];
            normalizer = holder.totalWeight;
        }
        for (var animIndex = 0; animIndex < holder.animations.length; animIndex++) {
            var runtimeAnimation = holder.animations[animIndex];
            quaternions.push(runtimeAnimation.currentValue);
            weights.push(runtimeAnimation.weight / normalizer);
        }
        // https://gamedev.stackexchange.com/questions/62354/method-for-interpolation-between-3-quaternions
        var cumulativeAmount = 0;
        for (var index = 0; index < quaternions.length;) {
            if (!index) {
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Quaternion.SlerpToRef(quaternions[index], quaternions[index + 1], weights[index + 1] / (weights[index] + weights[index + 1]), refQuaternion);
                cumulativeQuaternion = refQuaternion;
                cumulativeAmount = weights[index] + weights[index + 1];
                index += 2;
                continue;
            }
            cumulativeAmount += weights[index];
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Quaternion.SlerpToRef(cumulativeQuaternion, quaternions[index], weights[index] / cumulativeAmount, cumulativeQuaternion);
            index++;
        }
    }
    // Add up the additive animations
    for (var animIndex = 0; animIndex < holder.additiveAnimations.length; animIndex++) {
        var runtimeAnimation = holder.additiveAnimations[animIndex];
        if (runtimeAnimation.weight === 0) {
            continue;
        }
        cumulativeQuaternion.multiplyToRef(runtimeAnimation.currentValue, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.TmpVectors.Quaternion[0]);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Quaternion.SlerpToRef(cumulativeQuaternion, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.TmpVectors.Quaternion[0], runtimeAnimation.weight, cumulativeQuaternion);
    }
    return cumulativeQuaternion;
};
_scene__WEBPACK_IMPORTED_MODULE_3__.Scene.prototype._processLateAnimationBindings = function () {
    if (!this._registeredForLateAnimationBindings.length) {
        return;
    }
    for (var index = 0; index < this._registeredForLateAnimationBindings.length; index++) {
        var target = this._registeredForLateAnimationBindings.data[index];
        for (var path in target._lateAnimationHolders) {
            var holder = target._lateAnimationHolders[path];
            var originalAnimation = holder.animations[0];
            var originalValue = holder.originalValue;
            var matrixDecomposeMode = _animation__WEBPACK_IMPORTED_MODULE_0__.Animation.AllowMatrixDecomposeForInterpolation && originalValue.m; // ie. data is matrix
            var finalValue = target[path];
            if (matrixDecomposeMode) {
                finalValue = this._processLateAnimationBindingsForMatrices(holder);
            }
            else {
                var quaternionMode = originalValue.w !== undefined;
                if (quaternionMode) {
                    finalValue = this._processLateAnimationBindingsForQuaternions(holder, finalValue || _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Quaternion.Identity());
                }
                else {
                    var startIndex = 0;
                    var normalizer = 1.0;
                    if (holder.totalWeight < 1.0) {
                        // We need to mix the original value in
                        if (originalAnimation && originalValue.scale) {
                            finalValue = originalValue.scale(1.0 - holder.totalWeight);
                        }
                        else if (originalAnimation) {
                            finalValue = originalValue * (1.0 - holder.totalWeight);
                        }
                        else if (originalValue.clone) {
                            finalValue = originalValue.clone();
                        }
                        else {
                            finalValue = originalValue;
                        }
                    }
                    else if (originalAnimation) {
                        // We need to normalize the weights
                        normalizer = holder.totalWeight;
                        var scale = originalAnimation.weight / normalizer;
                        if (scale !== 1) {
                            if (originalAnimation.currentValue.scale) {
                                finalValue = originalAnimation.currentValue.scale(scale);
                            }
                            else {
                                finalValue = originalAnimation.currentValue * scale;
                            }
                        }
                        else {
                            finalValue = originalAnimation.currentValue;
                        }
                        startIndex = 1;
                    }
                    // Add up the override animations
                    for (var animIndex = startIndex; animIndex < holder.animations.length; animIndex++) {
                        var runtimeAnimation = holder.animations[animIndex];
                        var scale = runtimeAnimation.weight / normalizer;
                        if (!scale) {
                            continue;
                        }
                        else if (runtimeAnimation.currentValue.scaleAndAddToRef) {
                            runtimeAnimation.currentValue.scaleAndAddToRef(scale, finalValue);
                        }
                        else {
                            finalValue += runtimeAnimation.currentValue * scale;
                        }
                    }
                    // Add up the additive animations
                    for (var animIndex = 0; animIndex < holder.additiveAnimations.length; animIndex++) {
                        var runtimeAnimation = holder.additiveAnimations[animIndex];
                        var scale = runtimeAnimation.weight;
                        if (!scale) {
                            continue;
                        }
                        else if (runtimeAnimation.currentValue.scaleAndAddToRef) {
                            runtimeAnimation.currentValue.scaleAndAddToRef(scale, finalValue);
                        }
                        else {
                            finalValue += runtimeAnimation.currentValue * scale;
                        }
                    }
                }
            }
            target[path] = finalValue;
        }
        target._lateAnimationHolders = {};
    }
    this._registeredForLateAnimationBindings.reset();
};
_Bones_bone__WEBPACK_IMPORTED_MODULE_6__.Bone.prototype.copyAnimationRange = function (source, rangeName, frameOffset, rescaleAsRequired, skelDimensionsRatio) {
    if (rescaleAsRequired === void 0) { rescaleAsRequired = false; }
    if (skelDimensionsRatio === void 0) { skelDimensionsRatio = null; }
    // all animation may be coming from a library skeleton, so may need to create animation
    if (this.animations.length === 0) {
        this.animations.push(new _animation__WEBPACK_IMPORTED_MODULE_0__.Animation(this.name, "_matrix", source.animations[0].framePerSecond, _animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_MATRIX, 0));
        this.animations[0].setKeys([]);
    }
    // get animation info / verify there is such a range from the source bone
    var sourceRange = source.animations[0].getRange(rangeName);
    if (!sourceRange) {
        return false;
    }
    var from = sourceRange.from;
    var to = sourceRange.to;
    var sourceKeys = source.animations[0].getKeys();
    // rescaling prep
    var sourceBoneLength = source.length;
    var sourceParent = source.getParent();
    var parent = this.getParent();
    var parentScalingReqd = rescaleAsRequired && sourceParent && sourceBoneLength && this.length && sourceBoneLength !== this.length;
    var parentRatio = parentScalingReqd && parent && sourceParent ? parent.length / sourceParent.length : 1;
    var dimensionsScalingReqd = rescaleAsRequired && !parent && skelDimensionsRatio && (skelDimensionsRatio.x !== 1 || skelDimensionsRatio.y !== 1 || skelDimensionsRatio.z !== 1);
    var destKeys = this.animations[0].getKeys();
    // loop vars declaration
    var orig;
    var origTranslation;
    var mat;
    for (var key = 0, nKeys = sourceKeys.length; key < nKeys; key++) {
        orig = sourceKeys[key];
        if (orig.frame >= from && orig.frame <= to) {
            if (rescaleAsRequired) {
                mat = orig.value.clone();
                // scale based on parent ratio, when bone has parent
                if (parentScalingReqd) {
                    origTranslation = mat.getTranslation();
                    mat.setTranslation(origTranslation.scaleInPlace(parentRatio));
                    // scale based on skeleton dimension ratio when root bone, and value is passed
                }
                else if (dimensionsScalingReqd && skelDimensionsRatio) {
                    origTranslation = mat.getTranslation();
                    mat.setTranslation(origTranslation.multiplyInPlace(skelDimensionsRatio));
                    // use original when root bone, and no data for skelDimensionsRatio
                }
                else {
                    mat = orig.value;
                }
            }
            else {
                mat = orig.value;
            }
            destKeys.push({ frame: orig.frame + frameOffset, value: mat });
        }
    }
    this.animations[0].createRange(rangeName, from + frameOffset, to + frameOffset);
    return true;
};


/***/ }),

/***/ "../../../lts/core/dist/Animations/animation.js":
/*!******************************************************!*\
  !*** ../../../lts/core/dist/Animations/animation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animation": () => (/* binding */ Animation),
/* harmony export */   "_IAnimationState": () => (/* binding */ _IAnimationState)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Maths/math.color */ "../../../lts/core/dist/Maths/math.color.js");
/* harmony import */ var _Maths_math_scalar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Maths/math.scalar */ "../../../lts/core/dist/Maths/math.scalar.js");
/* harmony import */ var _Misc_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Misc/decorators */ "../../../lts/core/dist/Misc/decorators.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Misc/typeStore */ "../../../lts/core/dist/Misc/typeStore.js");
/* harmony import */ var _animationKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animationKey */ "../../../lts/core/dist/Animations/animationKey.js");
/* harmony import */ var _animationRange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animationRange */ "../../../lts/core/dist/Animations/animationRange.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../node */ "../../../lts/core/dist/node.js");
/* harmony import */ var _Maths_math_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Maths/math.size */ "../../../lts/core/dist/Maths/math.size.js");
/* harmony import */ var _Misc_webRequest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Misc/webRequest */ "../../../lts/core/dist/Misc/webRequest.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Engines/constants */ "../../../lts/core/dist/Engines/constants.js");











/**
 * @hidden
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var _IAnimationState = /** @class */ (function () {
    function _IAnimationState() {
    }
    return _IAnimationState;
}());

/**
 * Class used to store any kind of animation
 */
var Animation = /** @class */ (function () {
    /**
     * Initializes the animation
     * @param name Name of the animation
     * @param targetProperty Property to animate
     * @param framePerSecond The frames per second of the animation
     * @param dataType The data type of the animation
     * @param loopMode The loop mode of the animation
     * @param enableBlending Specifies if blending should be enabled
     */
    function Animation(
    /**Name of the animation */
    name, 
    /**Property to animate */
    targetProperty, 
    /**The frames per second of the animation */
    framePerSecond, 
    /**The data type of the animation */
    dataType, 
    /**The loop mode of the animation */
    loopMode, 
    /**Specifies if blending should be enabled */
    enableBlending) {
        this.name = name;
        this.targetProperty = targetProperty;
        this.framePerSecond = framePerSecond;
        this.dataType = dataType;
        this.loopMode = loopMode;
        this.enableBlending = enableBlending;
        /**
         * Stores the easing function of the animation
         */
        this._easingFunction = null;
        /**
         * @hidden Internal use only
         */
        this._runtimeAnimations = new Array();
        /**
         * The set of event that will be linked to this animation
         */
        this._events = new Array();
        /**
         * Stores the blending speed of the animation
         */
        this.blendingSpeed = 0.01;
        /**
         * Stores the animation ranges for the animation
         */
        this._ranges = {};
        this.targetPropertyPath = targetProperty.split(".");
        this.dataType = dataType;
        this.loopMode = loopMode === undefined ? Animation.ANIMATIONLOOPMODE_CYCLE : loopMode;
        this.uniqueId = Animation._UniqueIdGenerator++;
    }
    /**
     * @param name
     * @param targetProperty
     * @param framePerSecond
     * @param totalFrame
     * @param from
     * @param to
     * @param loopMode
     * @param easingFunction
     * @hidden Internal use
     */
    Animation._PrepareAnimation = function (name, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction) {
        var dataType = undefined;
        if (!isNaN(parseFloat(from)) && isFinite(from)) {
            dataType = Animation.ANIMATIONTYPE_FLOAT;
        }
        else if (from instanceof _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion) {
            dataType = Animation.ANIMATIONTYPE_QUATERNION;
        }
        else if (from instanceof _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3) {
            dataType = Animation.ANIMATIONTYPE_VECTOR3;
        }
        else if (from instanceof _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2) {
            dataType = Animation.ANIMATIONTYPE_VECTOR2;
        }
        else if (from instanceof _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color3) {
            dataType = Animation.ANIMATIONTYPE_COLOR3;
        }
        else if (from instanceof _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color4) {
            dataType = Animation.ANIMATIONTYPE_COLOR4;
        }
        else if (from instanceof _Maths_math_size__WEBPACK_IMPORTED_MODULE_8__.Size) {
            dataType = Animation.ANIMATIONTYPE_SIZE;
        }
        if (dataType == undefined) {
            return null;
        }
        var animation = new Animation(name, targetProperty, framePerSecond, dataType, loopMode);
        var keys = [
            { frame: 0, value: from },
            { frame: totalFrame, value: to },
        ];
        animation.setKeys(keys);
        if (easingFunction !== undefined) {
            animation.setEasingFunction(easingFunction);
        }
        return animation;
    };
    /**
     * Sets up an animation
     * @param property The property to animate
     * @param animationType The animation type to apply
     * @param framePerSecond The frames per second of the animation
     * @param easingFunction The easing function used in the animation
     * @returns The created animation
     */
    Animation.CreateAnimation = function (property, animationType, framePerSecond, easingFunction) {
        var animation = new Animation(property + "Animation", property, framePerSecond, animationType, Animation.ANIMATIONLOOPMODE_CONSTANT);
        animation.setEasingFunction(easingFunction);
        return animation;
    };
    /**
     * Create and start an animation on a node
     * @param name defines the name of the global animation that will be run on all nodes
     * @param target defines the target where the animation will take place
     * @param targetProperty defines property to animate
     * @param framePerSecond defines the number of frame per second yo use
     * @param totalFrame defines the number of frames in total
     * @param from defines the initial value
     * @param to defines the final value
     * @param loopMode defines which loop mode you want to use (off by default)
     * @param easingFunction defines the easing function to use (linear by default)
     * @param onAnimationEnd defines the callback to call when animation end
     * @param scene defines the hosting scene
     * @returns the animatable created for this animation
     */
    Animation.CreateAndStartAnimation = function (name, target, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction, onAnimationEnd, scene) {
        var animation = Animation._PrepareAnimation(name, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction);
        if (!animation) {
            return null;
        }
        if (target.getScene) {
            scene = target.getScene();
        }
        if (!scene) {
            return null;
        }
        return scene.beginDirectAnimation(target, [animation], 0, totalFrame, animation.loopMode === 1, 1.0, onAnimationEnd);
    };
    /**
     * Create and start an animation on a node and its descendants
     * @param name defines the name of the global animation that will be run on all nodes
     * @param node defines the root node where the animation will take place
     * @param directDescendantsOnly if true only direct descendants will be used, if false direct and also indirect (children of children, an so on in a recursive manner) descendants will be used
     * @param targetProperty defines property to animate
     * @param framePerSecond defines the number of frame per second to use
     * @param totalFrame defines the number of frames in total
     * @param from defines the initial value
     * @param to defines the final value
     * @param loopMode defines which loop mode you want to use (off by default)
     * @param easingFunction defines the easing function to use (linear by default)
     * @param onAnimationEnd defines the callback to call when an animation ends (will be called once per node)
     * @returns the list of animatables created for all nodes
     * @example https://www.babylonjs-playground.com/#MH0VLI
     */
    Animation.CreateAndStartHierarchyAnimation = function (name, node, directDescendantsOnly, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction, onAnimationEnd) {
        var animation = Animation._PrepareAnimation(name, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction);
        if (!animation) {
            return null;
        }
        var scene = node.getScene();
        return scene.beginDirectHierarchyAnimation(node, directDescendantsOnly, [animation], 0, totalFrame, animation.loopMode === 1, 1.0, onAnimationEnd);
    };
    /**
     * Creates a new animation, merges it with the existing animations and starts it
     * @param name Name of the animation
     * @param node Node which contains the scene that begins the animations
     * @param targetProperty Specifies which property to animate
     * @param framePerSecond The frames per second of the animation
     * @param totalFrame The total number of frames
     * @param from The frame at the beginning of the animation
     * @param to The frame at the end of the animation
     * @param loopMode Specifies the loop mode of the animation
     * @param easingFunction (Optional) The easing function of the animation, which allow custom mathematical formulas for animations
     * @param onAnimationEnd Callback to run once the animation is complete
     * @returns Nullable animation
     */
    Animation.CreateMergeAndStartAnimation = function (name, node, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction, onAnimationEnd) {
        var animation = Animation._PrepareAnimation(name, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction);
        if (!animation) {
            return null;
        }
        node.animations.push(animation);
        return node.getScene().beginAnimation(node, 0, totalFrame, animation.loopMode === 1, 1.0, onAnimationEnd);
    };
    /**
     * Convert the keyframes for all animations belonging to the group to be relative to a given reference frame.
     * @param sourceAnimation defines the Animation containing keyframes to convert
     * @param referenceFrame defines the frame that keyframes in the range will be relative to
     * @param range defines the name of the AnimationRange belonging to the Animation to convert
     * @param cloneOriginal defines whether or not to clone the animation and convert the clone or convert the original animation (default is false)
     * @param clonedName defines the name of the resulting cloned Animation if cloneOriginal is true
     * @returns a new Animation if cloneOriginal is true or the original Animation if cloneOriginal is false
     */
    Animation.MakeAnimationAdditive = function (sourceAnimation, referenceFrame, range, cloneOriginal, clonedName) {
        if (referenceFrame === void 0) { referenceFrame = 0; }
        if (cloneOriginal === void 0) { cloneOriginal = false; }
        var animation = sourceAnimation;
        if (cloneOriginal) {
            animation = sourceAnimation.clone();
            animation.name = clonedName || animation.name;
        }
        if (!animation._keys.length) {
            return animation;
        }
        referenceFrame = referenceFrame >= 0 ? referenceFrame : 0;
        var startIndex = 0;
        var firstKey = animation._keys[0];
        var endIndex = animation._keys.length - 1;
        var lastKey = animation._keys[endIndex];
        var valueStore = {
            referenceValue: firstKey.value,
            referencePosition: _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0],
            referenceQuaternion: _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0],
            referenceScaling: _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1],
            keyPosition: _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[2],
            keyQuaternion: _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[1],
            keyScaling: _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[3],
        };
        var referenceFound = false;
        var from = firstKey.frame;
        var to = lastKey.frame;
        if (range) {
            var rangeValue = animation.getRange(range);
            if (rangeValue) {
                from = rangeValue.from;
                to = rangeValue.to;
            }
        }
        var fromKeyFound = firstKey.frame === from;
        var toKeyFound = lastKey.frame === to;
        // There's only one key, so use it
        if (animation._keys.length === 1) {
            var value = animation._getKeyValue(animation._keys[0]);
            valueStore.referenceValue = value.clone ? value.clone() : value;
            referenceFound = true;
        }
        // Reference frame is before the first frame, so just use the first frame
        else if (referenceFrame <= firstKey.frame) {
            var value = animation._getKeyValue(firstKey.value);
            valueStore.referenceValue = value.clone ? value.clone() : value;
            referenceFound = true;
        }
        // Reference frame is after the last frame, so just use the last frame
        else if (referenceFrame >= lastKey.frame) {
            var value = animation._getKeyValue(lastKey.value);
            valueStore.referenceValue = value.clone ? value.clone() : value;
            referenceFound = true;
        }
        // Find key bookends, create them if they don't exist
        var index = 0;
        while (!referenceFound || !fromKeyFound || (!toKeyFound && index < animation._keys.length - 1)) {
            var currentKey = animation._keys[index];
            var nextKey = animation._keys[index + 1];
            // If reference frame wasn't found yet, check if we can interpolate to it
            if (!referenceFound && referenceFrame >= currentKey.frame && referenceFrame <= nextKey.frame) {
                var value = void 0;
                if (referenceFrame === currentKey.frame) {
                    value = animation._getKeyValue(currentKey.value);
                }
                else if (referenceFrame === nextKey.frame) {
                    value = animation._getKeyValue(nextKey.value);
                }
                else {
                    var animationState = {
                        key: index,
                        repeatCount: 0,
                        loopMode: this.ANIMATIONLOOPMODE_CONSTANT,
                    };
                    value = animation._interpolate(referenceFrame, animationState);
                }
                valueStore.referenceValue = value.clone ? value.clone() : value;
                referenceFound = true;
            }
            // If from key wasn't found yet, check if we can interpolate to it
            if (!fromKeyFound && from >= currentKey.frame && from <= nextKey.frame) {
                if (from === currentKey.frame) {
                    startIndex = index;
                }
                else if (from === nextKey.frame) {
                    startIndex = index + 1;
                }
                else {
                    var animationState = {
                        key: index,
                        repeatCount: 0,
                        loopMode: this.ANIMATIONLOOPMODE_CONSTANT,
                    };
                    var value = animation._interpolate(from, animationState);
                    var key = {
                        frame: from,
                        value: value.clone ? value.clone() : value,
                    };
                    animation._keys.splice(index + 1, 0, key);
                    startIndex = index + 1;
                }
                fromKeyFound = true;
            }
            // If to key wasn't found yet, check if we can interpolate to it
            if (!toKeyFound && to >= currentKey.frame && to <= nextKey.frame) {
                if (to === currentKey.frame) {
                    endIndex = index;
                }
                else if (to === nextKey.frame) {
                    endIndex = index + 1;
                }
                else {
                    var animationState = {
                        key: index,
                        repeatCount: 0,
                        loopMode: this.ANIMATIONLOOPMODE_CONSTANT,
                    };
                    var value = animation._interpolate(to, animationState);
                    var key = {
                        frame: to,
                        value: value.clone ? value.clone() : value,
                    };
                    animation._keys.splice(index + 1, 0, key);
                    endIndex = index + 1;
                }
                toKeyFound = true;
            }
            index++;
        }
        // Conjugate the quaternion
        if (animation.dataType === Animation.ANIMATIONTYPE_QUATERNION) {
            valueStore.referenceValue.normalize().conjugateInPlace();
        }
        // Decompose matrix and conjugate the quaternion
        else if (animation.dataType === Animation.ANIMATIONTYPE_MATRIX) {
            valueStore.referenceValue.decompose(valueStore.referenceScaling, valueStore.referenceQuaternion, valueStore.referencePosition);
            valueStore.referenceQuaternion.normalize().conjugateInPlace();
        }
        // Subtract the reference value from all of the key values
        for (index = startIndex; index <= endIndex; index++) {
            var key = animation._keys[index];
            // If this key was duplicated to create a frame 0 key, skip it because its value has already been updated
            if (index && animation.dataType !== Animation.ANIMATIONTYPE_FLOAT && key.value === firstKey.value) {
                continue;
            }
            switch (animation.dataType) {
                case Animation.ANIMATIONTYPE_MATRIX:
                    key.value.decompose(valueStore.keyScaling, valueStore.keyQuaternion, valueStore.keyPosition);
                    valueStore.keyPosition.subtractInPlace(valueStore.referencePosition);
                    valueStore.keyScaling.divideInPlace(valueStore.referenceScaling);
                    valueStore.referenceQuaternion.multiplyToRef(valueStore.keyQuaternion, valueStore.keyQuaternion);
                    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(valueStore.keyScaling, valueStore.keyQuaternion, valueStore.keyPosition, key.value);
                    break;
                case Animation.ANIMATIONTYPE_QUATERNION:
                    valueStore.referenceValue.multiplyToRef(key.value, key.value);
                    break;
                case Animation.ANIMATIONTYPE_VECTOR2:
                case Animation.ANIMATIONTYPE_VECTOR3:
                case Animation.ANIMATIONTYPE_COLOR3:
                case Animation.ANIMATIONTYPE_COLOR4:
                    key.value.subtractToRef(valueStore.referenceValue, key.value);
                    break;
                case Animation.ANIMATIONTYPE_SIZE:
                    key.value.width -= valueStore.referenceValue.width;
                    key.value.height -= valueStore.referenceValue.height;
                    break;
                default:
                    key.value -= valueStore.referenceValue;
            }
        }
        return animation;
    };
    /**
     * Transition property of an host to the target Value
     * @param property The property to transition
     * @param targetValue The target Value of the property
     * @param host The object where the property to animate belongs
     * @param scene Scene used to run the animation
     * @param frameRate Framerate (in frame/s) to use
     * @param transition The transition type we want to use
     * @param duration The duration of the animation, in milliseconds
     * @param onAnimationEnd Callback trigger at the end of the animation
     * @returns Nullable animation
     */
    Animation.TransitionTo = function (property, targetValue, host, scene, frameRate, transition, duration, onAnimationEnd) {
        if (onAnimationEnd === void 0) { onAnimationEnd = null; }
        if (duration <= 0) {
            host[property] = targetValue;
            if (onAnimationEnd) {
                onAnimationEnd();
            }
            return null;
        }
        var endFrame = frameRate * (duration / 1000);
        transition.setKeys([
            {
                frame: 0,
                value: host[property].clone ? host[property].clone() : host[property],
            },
            {
                frame: endFrame,
                value: targetValue,
            },
        ]);
        if (!host.animations) {
            host.animations = [];
        }
        host.animations.push(transition);
        var animation = scene.beginAnimation(host, 0, endFrame, false);
        animation.onAnimationEnd = onAnimationEnd;
        return animation;
    };
    Object.defineProperty(Animation.prototype, "runtimeAnimations", {
        /**
         * Return the array of runtime animations currently using this animation
         */
        get: function () {
            return this._runtimeAnimations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "hasRunningRuntimeAnimations", {
        /**
         * Specifies if any of the runtime animations are currently running
         */
        get: function () {
            for (var _i = 0, _a = this._runtimeAnimations; _i < _a.length; _i++) {
                var runtimeAnimation = _a[_i];
                if (!runtimeAnimation.isStopped()) {
                    return true;
                }
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    /**
     * Converts the animation to a string
     * @param fullDetails support for multiple levels of logging within scene loading
     * @returns String form of the animation
     */
    Animation.prototype.toString = function (fullDetails) {
        var ret = "Name: " + this.name + ", property: " + this.targetProperty;
        ret += ", datatype: " + ["Float", "Vector3", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType];
        ret += ", nKeys: " + (this._keys ? this._keys.length : "none");
        ret += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none");
        if (fullDetails) {
            ret += ", Ranges: {";
            var first = true;
            for (var name_1 in this._ranges) {
                if (first) {
                    ret += ", ";
                    first = false;
                }
                ret += name_1;
            }
            ret += "}";
        }
        return ret;
    };
    /**
     * Add an event to this animation
     * @param event Event to add
     */
    Animation.prototype.addEvent = function (event) {
        this._events.push(event);
        this._events.sort(function (a, b) { return a.frame - b.frame; });
    };
    /**
     * Remove all events found at the given frame
     * @param frame The frame to remove events from
     */
    Animation.prototype.removeEvents = function (frame) {
        for (var index = 0; index < this._events.length; index++) {
            if (this._events[index].frame === frame) {
                this._events.splice(index, 1);
                index--;
            }
        }
    };
    /**
     * Retrieves all the events from the animation
     * @returns Events from the animation
     */
    Animation.prototype.getEvents = function () {
        return this._events;
    };
    /**
     * Creates an animation range
     * @param name Name of the animation range
     * @param from Starting frame of the animation range
     * @param to Ending frame of the animation
     */
    Animation.prototype.createRange = function (name, from, to) {
        // check name not already in use; could happen for bones after serialized
        if (!this._ranges[name]) {
            this._ranges[name] = new _animationRange__WEBPACK_IMPORTED_MODULE_6__.AnimationRange(name, from, to);
        }
    };
    /**
     * Deletes an animation range by name
     * @param name Name of the animation range to delete
     * @param deleteFrames Specifies if the key frames for the range should also be deleted (true) or not (false)
     */
    Animation.prototype.deleteRange = function (name, deleteFrames) {
        if (deleteFrames === void 0) { deleteFrames = true; }
        var range = this._ranges[name];
        if (!range) {
            return;
        }
        if (deleteFrames) {
            var from = range.from;
            var to = range.to;
            // this loop MUST go high to low for multiple splices to work
            for (var key = this._keys.length - 1; key >= 0; key--) {
                if (this._keys[key].frame >= from && this._keys[key].frame <= to) {
                    this._keys.splice(key, 1);
                }
            }
        }
        this._ranges[name] = null; // said much faster than 'delete this._range[name]'
    };
    /**
     * Gets the animation range by name, or null if not defined
     * @param name Name of the animation range
     * @returns Nullable animation range
     */
    Animation.prototype.getRange = function (name) {
        return this._ranges[name];
    };
    /**
     * Gets the key frames from the animation
     * @returns The key frames of the animation
     */
    Animation.prototype.getKeys = function () {
        return this._keys;
    };
    /**
     * Gets the highest frame rate of the animation
     * @returns Highest frame rate of the animation
     */
    Animation.prototype.getHighestFrame = function () {
        var ret = 0;
        for (var key = 0, nKeys = this._keys.length; key < nKeys; key++) {
            if (ret < this._keys[key].frame) {
                ret = this._keys[key].frame;
            }
        }
        return ret;
    };
    /**
     * Gets the easing function of the animation
     * @returns Easing function of the animation
     */
    Animation.prototype.getEasingFunction = function () {
        return this._easingFunction;
    };
    /**
     * Sets the easing function of the animation
     * @param easingFunction A custom mathematical formula for animation
     */
    Animation.prototype.setEasingFunction = function (easingFunction) {
        this._easingFunction = easingFunction;
    };
    /**
     * Interpolates a scalar linearly
     * @param startValue Start value of the animation curve
     * @param endValue End value of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns Interpolated scalar value
     */
    Animation.prototype.floatInterpolateFunction = function (startValue, endValue, gradient) {
        return _Maths_math_scalar__WEBPACK_IMPORTED_MODULE_2__.Scalar.Lerp(startValue, endValue, gradient);
    };
    /**
     * Interpolates a scalar cubically
     * @param startValue Start value of the animation curve
     * @param outTangent End tangent of the animation
     * @param endValue End value of the animation curve
     * @param inTangent Start tangent of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns Interpolated scalar value
     */
    Animation.prototype.floatInterpolateFunctionWithTangents = function (startValue, outTangent, endValue, inTangent, gradient) {
        return _Maths_math_scalar__WEBPACK_IMPORTED_MODULE_2__.Scalar.Hermite(startValue, outTangent, endValue, inTangent, gradient);
    };
    /**
     * Interpolates a quaternion using a spherical linear interpolation
     * @param startValue Start value of the animation curve
     * @param endValue End value of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns Interpolated quaternion value
     */
    Animation.prototype.quaternionInterpolateFunction = function (startValue, endValue, gradient) {
        return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Slerp(startValue, endValue, gradient);
    };
    /**
     * Interpolates a quaternion cubically
     * @param startValue Start value of the animation curve
     * @param outTangent End tangent of the animation curve
     * @param endValue End value of the animation curve
     * @param inTangent Start tangent of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns Interpolated quaternion value
     */
    Animation.prototype.quaternionInterpolateFunctionWithTangents = function (startValue, outTangent, endValue, inTangent, gradient) {
        return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Hermite(startValue, outTangent, endValue, inTangent, gradient).normalize();
    };
    /**
     * Interpolates a Vector3 linearly
     * @param startValue Start value of the animation curve
     * @param endValue End value of the animation curve
     * @param gradient Scalar amount to interpolate (value between 0 and 1)
     * @returns Interpolated scalar value
     */
    Animation.prototype.vector3InterpolateFunction = function (startValue, endValue, gradient) {
        return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Lerp(startValue, endValue, gradient);
    };
    /**
     * Interpolates a Vector3 cubically
     * @param startValue Start value of the animation curve
     * @param outTangent End tangent of the animation
     * @param endValue End value of the animation curve
     * @param inTangent Start tangent of the animation curve
     * @param gradient Scalar amount to interpolate (value between 0 and 1)
     * @returns InterpolatedVector3 value
     */
    Animation.prototype.vector3InterpolateFunctionWithTangents = function (startValue, outTangent, endValue, inTangent, gradient) {
        return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Hermite(startValue, outTangent, endValue, inTangent, gradient);
    };
    /**
     * Interpolates a Vector2 linearly
     * @param startValue Start value of the animation curve
     * @param endValue End value of the animation curve
     * @param gradient Scalar amount to interpolate (value between 0 and 1)
     * @returns Interpolated Vector2 value
     */
    Animation.prototype.vector2InterpolateFunction = function (startValue, endValue, gradient) {
        return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.Lerp(startValue, endValue, gradient);
    };
    /**
     * Interpolates a Vector2 cubically
     * @param startValue Start value of the animation curve
     * @param outTangent End tangent of the animation
     * @param endValue End value of the animation curve
     * @param inTangent Start tangent of the animation curve
     * @param gradient Scalar amount to interpolate (value between 0 and 1)
     * @returns Interpolated Vector2 value
     */
    Animation.prototype.vector2InterpolateFunctionWithTangents = function (startValue, outTangent, endValue, inTangent, gradient) {
        return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.Hermite(startValue, outTangent, endValue, inTangent, gradient);
    };
    /**
     * Interpolates a size linearly
     * @param startValue Start value of the animation curve
     * @param endValue End value of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns Interpolated Size value
     */
    Animation.prototype.sizeInterpolateFunction = function (startValue, endValue, gradient) {
        return _Maths_math_size__WEBPACK_IMPORTED_MODULE_8__.Size.Lerp(startValue, endValue, gradient);
    };
    /**
     * Interpolates a Color3 linearly
     * @param startValue Start value of the animation curve
     * @param endValue End value of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns Interpolated Color3 value
     */
    Animation.prototype.color3InterpolateFunction = function (startValue, endValue, gradient) {
        return _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color3.Lerp(startValue, endValue, gradient);
    };
    /**
     * Interpolates a Color3 cubically
     * @param startValue Start value of the animation curve
     * @param outTangent End tangent of the animation
     * @param endValue End value of the animation curve
     * @param inTangent Start tangent of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns interpolated value
     */
    Animation.prototype.color3InterpolateFunctionWithTangents = function (startValue, outTangent, endValue, inTangent, gradient) {
        return _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color3.Hermite(startValue, outTangent, endValue, inTangent, gradient);
    };
    /**
     * Interpolates a Color4 linearly
     * @param startValue Start value of the animation curve
     * @param endValue End value of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns Interpolated Color3 value
     */
    Animation.prototype.color4InterpolateFunction = function (startValue, endValue, gradient) {
        return _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color4.Lerp(startValue, endValue, gradient);
    };
    /**
     * Interpolates a Color4 cubically
     * @param startValue Start value of the animation curve
     * @param outTangent End tangent of the animation
     * @param endValue End value of the animation curve
     * @param inTangent Start tangent of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns interpolated value
     */
    Animation.prototype.color4InterpolateFunctionWithTangents = function (startValue, outTangent, endValue, inTangent, gradient) {
        return _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color4.Hermite(startValue, outTangent, endValue, inTangent, gradient);
    };
    /**
     * @param value
     * @hidden Internal use only
     */
    Animation.prototype._getKeyValue = function (value) {
        if (typeof value === "function") {
            return value();
        }
        return value;
    };
    /**
     * Evaluate the animation value at a given frame
     * @param currentFrame defines the frame where we want to evaluate the animation
     * @returns the animation value
     */
    Animation.prototype.evaluate = function (currentFrame) {
        return this._interpolate(currentFrame, {
            key: 0,
            repeatCount: 0,
            loopMode: Animation.ANIMATIONLOOPMODE_CONSTANT,
        });
    };
    /**
     * @param currentFrame
     * @param state
     * @hidden Internal use only
     */
    Animation.prototype._interpolate = function (currentFrame, state) {
        if (state.loopMode === Animation.ANIMATIONLOOPMODE_CONSTANT && state.repeatCount > 0) {
            return state.highLimitValue.clone ? state.highLimitValue.clone() : state.highLimitValue;
        }
        var keys = this._keys;
        if (keys.length === 1) {
            return this._getKeyValue(keys[0].value);
        }
        var startKeyIndex = state.key;
        if (keys[startKeyIndex].frame >= currentFrame) {
            while (startKeyIndex - 1 >= 0 && keys[startKeyIndex].frame >= currentFrame) {
                startKeyIndex--;
            }
        }
        for (var key = startKeyIndex; key < keys.length - 1; key++) {
            var endKey = keys[key + 1];
            if (endKey.frame >= currentFrame) {
                state.key = key;
                var startKey = keys[key];
                var startValue = this._getKeyValue(startKey.value);
                var endValue = this._getKeyValue(endKey.value);
                if (startKey.interpolation === _animationKey__WEBPACK_IMPORTED_MODULE_5__.AnimationKeyInterpolation.STEP) {
                    if (endKey.frame > currentFrame) {
                        return startValue;
                    }
                    else {
                        return endValue;
                    }
                }
                var useTangent = startKey.outTangent !== undefined && endKey.inTangent !== undefined;
                var frameDelta = endKey.frame - startKey.frame;
                // gradient : percent of currentFrame between the frame inf and the frame sup
                var gradient = (currentFrame - startKey.frame) / frameDelta;
                // check for easingFunction and correction of gradient
                var easingFunction = this.getEasingFunction();
                if (easingFunction !== null) {
                    gradient = easingFunction.ease(gradient);
                }
                switch (this.dataType) {
                    // Float
                    case Animation.ANIMATIONTYPE_FLOAT: {
                        var floatValue = useTangent
                            ? this.floatInterpolateFunctionWithTangents(startValue, startKey.outTangent * frameDelta, endValue, endKey.inTangent * frameDelta, gradient)
                            : this.floatInterpolateFunction(startValue, endValue, gradient);
                        switch (state.loopMode) {
                            case Animation.ANIMATIONLOOPMODE_CYCLE:
                            case Animation.ANIMATIONLOOPMODE_CONSTANT:
                                return floatValue;
                            case Animation.ANIMATIONLOOPMODE_RELATIVE:
                                return state.offsetValue * state.repeatCount + floatValue;
                        }
                        break;
                    }
                    // Quaternion
                    case Animation.ANIMATIONTYPE_QUATERNION: {
                        var quatValue = useTangent
                            ? this.quaternionInterpolateFunctionWithTangents(startValue, startKey.outTangent.scale(frameDelta), endValue, endKey.inTangent.scale(frameDelta), gradient)
                            : this.quaternionInterpolateFunction(startValue, endValue, gradient);
                        switch (state.loopMode) {
                            case Animation.ANIMATIONLOOPMODE_CYCLE:
                            case Animation.ANIMATIONLOOPMODE_CONSTANT:
                                return quatValue;
                            case Animation.ANIMATIONLOOPMODE_RELATIVE:
                                return quatValue.addInPlace(state.offsetValue.scale(state.repeatCount));
                        }
                        return quatValue;
                    }
                    // Vector3
                    case Animation.ANIMATIONTYPE_VECTOR3: {
                        var vec3Value = useTangent
                            ? this.vector3InterpolateFunctionWithTangents(startValue, startKey.outTangent.scale(frameDelta), endValue, endKey.inTangent.scale(frameDelta), gradient)
                            : this.vector3InterpolateFunction(startValue, endValue, gradient);
                        switch (state.loopMode) {
                            case Animation.ANIMATIONLOOPMODE_CYCLE:
                            case Animation.ANIMATIONLOOPMODE_CONSTANT:
                                return vec3Value;
                            case Animation.ANIMATIONLOOPMODE_RELATIVE:
                                return vec3Value.add(state.offsetValue.scale(state.repeatCount));
                        }
                        break;
                    }
                    // Vector2
                    case Animation.ANIMATIONTYPE_VECTOR2: {
                        var vec2Value = useTangent
                            ? this.vector2InterpolateFunctionWithTangents(startValue, startKey.outTangent.scale(frameDelta), endValue, endKey.inTangent.scale(frameDelta), gradient)
                            : this.vector2InterpolateFunction(startValue, endValue, gradient);
                        switch (state.loopMode) {
                            case Animation.ANIMATIONLOOPMODE_CYCLE:
                            case Animation.ANIMATIONLOOPMODE_CONSTANT:
                                return vec2Value;
                            case Animation.ANIMATIONLOOPMODE_RELATIVE:
                                return vec2Value.add(state.offsetValue.scale(state.repeatCount));
                        }
                        break;
                    }
                    // Size
                    case Animation.ANIMATIONTYPE_SIZE: {
                        switch (state.loopMode) {
                            case Animation.ANIMATIONLOOPMODE_CYCLE:
                            case Animation.ANIMATIONLOOPMODE_CONSTANT:
                                return this.sizeInterpolateFunction(startValue, endValue, gradient);
                            case Animation.ANIMATIONLOOPMODE_RELATIVE:
                                return this.sizeInterpolateFunction(startValue, endValue, gradient).add(state.offsetValue.scale(state.repeatCount));
                        }
                        break;
                    }
                    // Color3
                    case Animation.ANIMATIONTYPE_COLOR3: {
                        var color3Value = useTangent
                            ? this.color3InterpolateFunctionWithTangents(startValue, startKey.outTangent.scale(frameDelta), endValue, endKey.inTangent.scale(frameDelta), gradient)
                            : this.color3InterpolateFunction(startValue, endValue, gradient);
                        switch (state.loopMode) {
                            case Animation.ANIMATIONLOOPMODE_CYCLE:
                            case Animation.ANIMATIONLOOPMODE_CONSTANT:
                                return color3Value;
                            case Animation.ANIMATIONLOOPMODE_RELATIVE:
                                return color3Value.add(state.offsetValue.scale(state.repeatCount));
                        }
                        break;
                    }
                    // Color4
                    case Animation.ANIMATIONTYPE_COLOR4: {
                        var color4Value = useTangent
                            ? this.color4InterpolateFunctionWithTangents(startValue, startKey.outTangent.scale(frameDelta), endValue, endKey.inTangent.scale(frameDelta), gradient)
                            : this.color4InterpolateFunction(startValue, endValue, gradient);
                        switch (state.loopMode) {
                            case Animation.ANIMATIONLOOPMODE_CYCLE:
                            case Animation.ANIMATIONLOOPMODE_CONSTANT:
                                return color4Value;
                            case Animation.ANIMATIONLOOPMODE_RELATIVE:
                                return color4Value.add(state.offsetValue.scale(state.repeatCount));
                        }
                        break;
                    }
                    // Matrix
                    case Animation.ANIMATIONTYPE_MATRIX: {
                        switch (state.loopMode) {
                            case Animation.ANIMATIONLOOPMODE_CYCLE:
                            case Animation.ANIMATIONLOOPMODE_CONSTANT: {
                                if (Animation.AllowMatricesInterpolation) {
                                    return this.matrixInterpolateFunction(startValue, endValue, gradient, state.workValue);
                                }
                                return startValue;
                            }
                            case Animation.ANIMATIONLOOPMODE_RELATIVE: {
                                return startValue;
                            }
                        }
                        break;
                    }
                    default:
                        break;
                }
                break;
            }
        }
        return this._getKeyValue(keys[keys.length - 1].value);
    };
    /**
     * Defines the function to use to interpolate matrices
     * @param startValue defines the start matrix
     * @param endValue defines the end matrix
     * @param gradient defines the gradient between both matrices
     * @param result defines an optional target matrix where to store the interpolation
     * @returns the interpolated matrix
     */
    Animation.prototype.matrixInterpolateFunction = function (startValue, endValue, gradient, result) {
        if (Animation.AllowMatrixDecomposeForInterpolation) {
            if (result) {
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.DecomposeLerpToRef(startValue, endValue, gradient, result);
                return result;
            }
            return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.DecomposeLerp(startValue, endValue, gradient);
        }
        if (result) {
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.LerpToRef(startValue, endValue, gradient, result);
            return result;
        }
        return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Lerp(startValue, endValue, gradient);
    };
    /**
     * Makes a copy of the animation
     * @returns Cloned animation
     */
    Animation.prototype.clone = function () {
        var clone = new Animation(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.loopMode);
        clone.enableBlending = this.enableBlending;
        clone.blendingSpeed = this.blendingSpeed;
        if (this._keys) {
            clone.setKeys(this._keys);
        }
        if (this._ranges) {
            clone._ranges = {};
            for (var name_2 in this._ranges) {
                var range = this._ranges[name_2];
                if (!range) {
                    continue;
                }
                clone._ranges[name_2] = range.clone();
            }
        }
        return clone;
    };
    /**
     * Sets the key frames of the animation
     * @param values The animation key frames to set
     */
    Animation.prototype.setKeys = function (values) {
        this._keys = values.slice(0);
    };
    /**
     * Serializes the animation to an object
     * @returns Serialized object
     */
    Animation.prototype.serialize = function () {
        var serializationObject = {};
        serializationObject.name = this.name;
        serializationObject.property = this.targetProperty;
        serializationObject.framePerSecond = this.framePerSecond;
        serializationObject.dataType = this.dataType;
        serializationObject.loopBehavior = this.loopMode;
        serializationObject.enableBlending = this.enableBlending;
        serializationObject.blendingSpeed = this.blendingSpeed;
        var dataType = this.dataType;
        serializationObject.keys = [];
        var keys = this.getKeys();
        for (var index = 0; index < keys.length; index++) {
            var animationKey = keys[index];
            var key = {};
            key.frame = animationKey.frame;
            switch (dataType) {
                case Animation.ANIMATIONTYPE_FLOAT:
                    key.values = [animationKey.value];
                    if (animationKey.inTangent !== undefined) {
                        key.values.push(animationKey.inTangent);
                    }
                    if (animationKey.outTangent !== undefined) {
                        if (animationKey.inTangent === undefined) {
                            key.values.push(undefined);
                        }
                        key.values.push(animationKey.outTangent);
                    }
                    if (animationKey.interpolation !== undefined) {
                        if (animationKey.inTangent === undefined) {
                            key.values.push(undefined);
                        }
                        if (animationKey.outTangent === undefined) {
                            key.values.push(undefined);
                        }
                        key.values.push(animationKey.interpolation);
                    }
                    break;
                case Animation.ANIMATIONTYPE_QUATERNION:
                case Animation.ANIMATIONTYPE_MATRIX:
                case Animation.ANIMATIONTYPE_VECTOR3:
                case Animation.ANIMATIONTYPE_COLOR3:
                case Animation.ANIMATIONTYPE_COLOR4:
                    key.values = animationKey.value.asArray();
                    if (animationKey.inTangent != undefined) {
                        key.values.push(animationKey.inTangent.asArray());
                    }
                    if (animationKey.outTangent != undefined) {
                        if (animationKey.inTangent === undefined) {
                            key.values.push(undefined);
                        }
                        key.values.push(animationKey.outTangent.asArray());
                    }
                    if (animationKey.interpolation !== undefined) {
                        if (animationKey.inTangent === undefined) {
                            key.values.push(undefined);
                        }
                        if (animationKey.outTangent === undefined) {
                            key.values.push(undefined);
                        }
                        key.values.push(animationKey.interpolation);
                    }
                    break;
            }
            serializationObject.keys.push(key);
        }
        serializationObject.ranges = [];
        for (var name_3 in this._ranges) {
            var source = this._ranges[name_3];
            if (!source) {
                continue;
            }
            var range = {};
            range.name = name_3;
            range.from = source.from;
            range.to = source.to;
            serializationObject.ranges.push(range);
        }
        return serializationObject;
    };
    /**
     * @param left
     * @param right
     * @param amount
     * @hidden
     */
    Animation._UniversalLerp = function (left, right, amount) {
        var constructor = left.constructor;
        if (constructor.Lerp) {
            // Lerp supported
            return constructor.Lerp(left, right, amount);
        }
        else if (constructor.Slerp) {
            // Slerp supported
            return constructor.Slerp(left, right, amount);
        }
        else if (left.toFixed) {
            // Number
            return left * (1.0 - amount) + amount * right;
        }
        else {
            // Blending not supported
            return right;
        }
    };
    /**
     * Parses an animation object and creates an animation
     * @param parsedAnimation Parsed animation object
     * @returns Animation object
     */
    Animation.Parse = function (parsedAnimation) {
        var animation = new Animation(parsedAnimation.name, parsedAnimation.property, parsedAnimation.framePerSecond, parsedAnimation.dataType, parsedAnimation.loopBehavior);
        var dataType = parsedAnimation.dataType;
        var keys = [];
        var data;
        var index;
        if (parsedAnimation.enableBlending) {
            animation.enableBlending = parsedAnimation.enableBlending;
        }
        if (parsedAnimation.blendingSpeed) {
            animation.blendingSpeed = parsedAnimation.blendingSpeed;
        }
        for (index = 0; index < parsedAnimation.keys.length; index++) {
            var key = parsedAnimation.keys[index];
            var inTangent = undefined;
            var outTangent = undefined;
            var interpolation = undefined;
            switch (dataType) {
                case Animation.ANIMATIONTYPE_FLOAT:
                    data = key.values[0];
                    if (key.values.length >= 2) {
                        inTangent = key.values[1];
                    }
                    if (key.values.length >= 3) {
                        outTangent = key.values[2];
                    }
                    if (key.values.length >= 4) {
                        interpolation = key.values[3];
                    }
                    break;
                case Animation.ANIMATIONTYPE_QUATERNION:
                    data = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(key.values);
                    if (key.values.length >= 8) {
                        var _inTangent = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(key.values.slice(4, 8));
                        if (!_inTangent.equals(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Zero())) {
                            inTangent = _inTangent;
                        }
                    }
                    if (key.values.length >= 12) {
                        var _outTangent = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(key.values.slice(8, 12));
                        if (!_outTangent.equals(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Zero())) {
                            outTangent = _outTangent;
                        }
                    }
                    if (key.values.length >= 13) {
                        interpolation = key.values[12];
                    }
                    break;
                case Animation.ANIMATIONTYPE_MATRIX:
                    data = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.FromArray(key.values);
                    if (key.values.length >= 17) {
                        interpolation = key.values[16];
                    }
                    break;
                case Animation.ANIMATIONTYPE_COLOR3:
                    data = _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(key.values);
                    if (key.values[3]) {
                        inTangent = _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(key.values[3]);
                    }
                    if (key.values[4]) {
                        outTangent = _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(key.values[4]);
                    }
                    if (key.values[5]) {
                        interpolation = key.values[5];
                    }
                    break;
                case Animation.ANIMATIONTYPE_COLOR4:
                    data = _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color4.FromArray(key.values);
                    if (key.values[4]) {
                        inTangent = _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color4.FromArray(key.values[4]);
                    }
                    if (key.values[5]) {
                        outTangent = _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color4.FromArray(key.values[5]);
                    }
                    if (key.values[6]) {
                        interpolation = _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color4.FromArray(key.values[6]);
                    }
                    break;
                case Animation.ANIMATIONTYPE_VECTOR3:
                default:
                    data = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(key.values);
                    if (key.values[3]) {
                        inTangent = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(key.values[3]);
                    }
                    if (key.values[4]) {
                        outTangent = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(key.values[4]);
                    }
                    if (key.values[5]) {
                        interpolation = key.values[5];
                    }
                    break;
            }
            var keyData = {};
            keyData.frame = key.frame;
            keyData.value = data;
            if (inTangent != undefined) {
                keyData.inTangent = inTangent;
            }
            if (outTangent != undefined) {
                keyData.outTangent = outTangent;
            }
            if (interpolation != undefined) {
                keyData.interpolation = interpolation;
            }
            keys.push(keyData);
        }
        animation.setKeys(keys);
        if (parsedAnimation.ranges) {
            for (index = 0; index < parsedAnimation.ranges.length; index++) {
                data = parsedAnimation.ranges[index];
                animation.createRange(data.name, data.from, data.to);
            }
        }
        return animation;
    };
    /**
     * Appends the serialized animations from the source animations
     * @param source Source containing the animations
     * @param destination Target to store the animations
     */
    Animation.AppendSerializedAnimations = function (source, destination) {
        _Misc_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializationHelper.AppendSerializedAnimations(source, destination);
    };
    /**
     * Creates a new animation or an array of animations from a snippet saved in a remote file
     * @param name defines the name of the animation to create (can be null or empty to use the one from the json data)
     * @param url defines the url to load from
     * @returns a promise that will resolve to the new animation or an array of animations
     */
    Animation.ParseFromFileAsync = function (name, url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var request = new _Misc_webRequest__WEBPACK_IMPORTED_MODULE_9__.WebRequest();
            request.addEventListener("readystatechange", function () {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        var serializationObject = JSON.parse(request.responseText);
                        if (serializationObject.animations) {
                            serializationObject = serializationObject.animations;
                        }
                        if (serializationObject.length) {
                            var output = new Array();
                            for (var _i = 0, serializationObject_1 = serializationObject; _i < serializationObject_1.length; _i++) {
                                var serializedAnimation = serializationObject_1[_i];
                                output.push(_this.Parse(serializedAnimation));
                            }
                            resolve(output);
                        }
                        else {
                            var output = _this.Parse(serializationObject);
                            if (name) {
                                output.name = name;
                            }
                            resolve(output);
                        }
                    }
                    else {
                        reject("Unable to load the animation");
                    }
                }
            });
            request.open("GET", url);
            request.send();
        });
    };
    /**
     * Creates an animation or an array of animations from a snippet saved by the Inspector
     * @param snippetId defines the snippet to load
     * @returns a promise that will resolve to the new animation or a new array of animations
     */
    Animation.CreateFromSnippetAsync = function (snippetId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var request = new _Misc_webRequest__WEBPACK_IMPORTED_MODULE_9__.WebRequest();
            request.addEventListener("readystatechange", function () {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        var snippet = JSON.parse(JSON.parse(request.responseText).jsonPayload);
                        if (snippet.animations) {
                            var serializationObject = JSON.parse(snippet.animations);
                            var outputs = new Array();
                            for (var _i = 0, _a = serializationObject.animations; _i < _a.length; _i++) {
                                var serializedAnimation = _a[_i];
                                var output = _this.Parse(serializedAnimation);
                                output.snippetId = snippetId;
                                outputs.push(output);
                            }
                            resolve(outputs);
                        }
                        else {
                            var serializationObject = JSON.parse(snippet.animation);
                            var output = _this.Parse(serializationObject);
                            output.snippetId = snippetId;
                            resolve(output);
                        }
                    }
                    else {
                        reject("Unable to load the snippet " + snippetId);
                    }
                }
            });
            request.open("GET", _this.SnippetUrl + "/" + snippetId.replace(/#/g, "/"));
            request.send();
        });
    };
    Animation._UniqueIdGenerator = 0;
    /**
     * Use matrix interpolation instead of using direct key value when animating matrices
     */
    Animation.AllowMatricesInterpolation = false;
    /**
     * When matrix interpolation is enabled, this boolean forces the system to use Matrix.DecomposeLerp instead of Matrix.Lerp. Interpolation is more precise but slower
     */
    Animation.AllowMatrixDecomposeForInterpolation = true;
    /** Define the Url to load snippets */
    Animation.SnippetUrl = _Engines_constants__WEBPACK_IMPORTED_MODULE_10__.Constants.SnippetUrl;
    // Statics
    /**
     * Float animation type
     */
    Animation.ANIMATIONTYPE_FLOAT = 0;
    /**
     * Vector3 animation type
     */
    Animation.ANIMATIONTYPE_VECTOR3 = 1;
    /**
     * Quaternion animation type
     */
    Animation.ANIMATIONTYPE_QUATERNION = 2;
    /**
     * Matrix animation type
     */
    Animation.ANIMATIONTYPE_MATRIX = 3;
    /**
     * Color3 animation type
     */
    Animation.ANIMATIONTYPE_COLOR3 = 4;
    /**
     * Color3 animation type
     */
    Animation.ANIMATIONTYPE_COLOR4 = 7;
    /**
     * Vector2 animation type
     */
    Animation.ANIMATIONTYPE_VECTOR2 = 5;
    /**
     * Size animation type
     */
    Animation.ANIMATIONTYPE_SIZE = 6;
    /**
     * Relative Loop Mode
     */
    Animation.ANIMATIONLOOPMODE_RELATIVE = 0;
    /**
     * Cycle Loop Mode
     */
    Animation.ANIMATIONLOOPMODE_CYCLE = 1;
    /**
     * Constant Loop Mode
     */
    Animation.ANIMATIONLOOPMODE_CONSTANT = 2;
    return Animation;
}());

(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("BABYLON.Animation", Animation);
_node__WEBPACK_IMPORTED_MODULE_7__.Node._AnimationRangeFactory = function (name, from, to) { return new _animationRange__WEBPACK_IMPORTED_MODULE_6__.AnimationRange(name, from, to); };


/***/ }),

/***/ "../../../lts/core/dist/Animations/animationEvent.js":
/*!***********************************************************!*\
  !*** ../../../lts/core/dist/Animations/animationEvent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationEvent": () => (/* binding */ AnimationEvent)
/* harmony export */ });
/**
 * Composed of a frame, and an action function
 */
var AnimationEvent = /** @class */ (function () {
    /**
     * Initializes the animation event
     * @param frame The frame for which the event is triggered
     * @param action The event to perform when triggered
     * @param onlyOnce Specifies if the event should be triggered only once
     */
    function AnimationEvent(
    /** The frame for which the event is triggered **/
    frame, 
    /** The event to perform when triggered **/
    action, 
    /** Specifies if the event should be triggered only once**/
    onlyOnce) {
        this.frame = frame;
        this.action = action;
        this.onlyOnce = onlyOnce;
        /**
         * Specifies if the animation event is done
         */
        this.isDone = false;
    }
    /** @hidden */
    AnimationEvent.prototype._clone = function () {
        return new AnimationEvent(this.frame, this.action, this.onlyOnce);
    };
    return AnimationEvent;
}());



/***/ }),

/***/ "../../../lts/core/dist/Animations/animationGroup.js":
/*!***********************************************************!*\
  !*** ../../../lts/core/dist/Animations/animationGroup.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationGroup": () => (/* binding */ AnimationGroup),
/* harmony export */   "TargetedAnimation": () => (/* binding */ TargetedAnimation)
/* harmony export */ });
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "../../../lts/core/dist/Animations/animation.js");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc/observable */ "../../../lts/core/dist/Misc/observable.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Engines/engineStore */ "../../../lts/core/dist/Engines/engineStore.js");
/* harmony import */ var _Misc_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Misc/tags */ "../../../lts/core/dist/Misc/tags.js");




/**
 * This class defines the direct association between an animation and a target
 */
var TargetedAnimation = /** @class */ (function () {
    function TargetedAnimation() {
    }
    /**
     * Returns the string "TargetedAnimation"
     * @returns "TargetedAnimation"
     */
    TargetedAnimation.prototype.getClassName = function () {
        return "TargetedAnimation";
    };
    /**
     * Serialize the object
     * @returns the JSON object representing the current entity
     */
    TargetedAnimation.prototype.serialize = function () {
        var serializationObject = {};
        serializationObject.animation = this.animation.serialize();
        serializationObject.targetId = this.target.id;
        return serializationObject;
    };
    return TargetedAnimation;
}());

/**
 * Use this class to create coordinated animations on multiple targets
 */
var AnimationGroup = /** @class */ (function () {
    /**
     * Instantiates a new Animation Group.
     * This helps managing several animations at once.
     * @see https://doc.babylonjs.com/divingDeeper/animation/groupAnimations
     * @param name Defines the name of the group
     * @param scene Defines the scene the group belongs to
     */
    function AnimationGroup(
    /** The name of the animation group */
    name, scene) {
        if (scene === void 0) { scene = null; }
        this.name = name;
        this._targetedAnimations = new Array();
        this._animatables = new Array();
        this._from = Number.MAX_VALUE;
        this._to = -Number.MAX_VALUE;
        this._speedRatio = 1;
        this._loopAnimation = false;
        this._isAdditive = false;
        /** @hidden */
        this._parentContainer = null;
        /**
         * This observable will notify when one animation have ended
         */
        this.onAnimationEndObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        /**
         * Observer raised when one animation loops
         */
        this.onAnimationLoopObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        /**
         * Observer raised when all animations have looped
         */
        this.onAnimationGroupLoopObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        /**
         * This observable will notify when all animations have ended.
         */
        this.onAnimationGroupEndObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        /**
         * This observable will notify when all animations have paused.
         */
        this.onAnimationGroupPauseObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        /**
         * This observable will notify when all animations are playing.
         */
        this.onAnimationGroupPlayObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        /**
         * Gets or sets an object used to store user defined information for the node
         */
        this.metadata = null;
        this._scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_2__.EngineStore.LastCreatedScene;
        this.uniqueId = this._scene.getUniqueId();
        this._scene.addAnimationGroup(this);
    }
    Object.defineProperty(AnimationGroup.prototype, "from", {
        /**
         * Gets the first frame
         */
        get: function () {
            return this._from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimationGroup.prototype, "to", {
        /**
         * Gets the last frame
         */
        get: function () {
            return this._to;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimationGroup.prototype, "isStarted", {
        /**
         * Define if the animations are started
         */
        get: function () {
            return this._isStarted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimationGroup.prototype, "isPlaying", {
        /**
         * Gets a value indicating that the current group is playing
         */
        get: function () {
            return this._isStarted && !this._isPaused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimationGroup.prototype, "speedRatio", {
        /**
         * Gets or sets the speed ratio to use for all animations
         */
        get: function () {
            return this._speedRatio;
        },
        /**
         * Gets or sets the speed ratio to use for all animations
         */
        set: function (value) {
            if (this._speedRatio === value) {
                return;
            }
            this._speedRatio = value;
            for (var index = 0; index < this._animatables.length; index++) {
                var animatable = this._animatables[index];
                animatable.speedRatio = this._speedRatio;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimationGroup.prototype, "loopAnimation", {
        /**
         * Gets or sets if all animations should loop or not
         */
        get: function () {
            return this._loopAnimation;
        },
        set: function (value) {
            if (this._loopAnimation === value) {
                return;
            }
            this._loopAnimation = value;
            for (var index = 0; index < this._animatables.length; index++) {
                var animatable = this._animatables[index];
                animatable.loopAnimation = this._loopAnimation;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimationGroup.prototype, "isAdditive", {
        /**
         * Gets or sets if all animations should be evaluated additively
         */
        get: function () {
            return this._isAdditive;
        },
        set: function (value) {
            if (this._isAdditive === value) {
                return;
            }
            this._isAdditive = value;
            for (var index = 0; index < this._animatables.length; index++) {
                var animatable = this._animatables[index];
                animatable.isAdditive = this._isAdditive;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimationGroup.prototype, "targetedAnimations", {
        /**
         * Gets the targeted animations for this animation group
         */
        get: function () {
            return this._targetedAnimations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimationGroup.prototype, "animatables", {
        /**
         * returning the list of animatables controlled by this animation group.
         */
        get: function () {
            return this._animatables;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimationGroup.prototype, "children", {
        /**
         * Gets the list of target animations
         */
        get: function () {
            return this._targetedAnimations;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add an animation (with its target) in the group
     * @param animation defines the animation we want to add
     * @param target defines the target of the animation
     * @returns the TargetedAnimation object
     */
    AnimationGroup.prototype.addTargetedAnimation = function (animation, target) {
        var targetedAnimation = new TargetedAnimation();
        targetedAnimation.animation = animation;
        targetedAnimation.target = target;
        var keys = animation.getKeys();
        if (this._from > keys[0].frame) {
            this._from = keys[0].frame;
        }
        if (this._to < keys[keys.length - 1].frame) {
            this._to = keys[keys.length - 1].frame;
        }
        this._targetedAnimations.push(targetedAnimation);
        return targetedAnimation;
    };
    /**
     * This function will normalize every animation in the group to make sure they all go from beginFrame to endFrame
     * It can add constant keys at begin or end
     * @param beginFrame defines the new begin frame for all animations or the smallest begin frame of all animations if null (defaults to null)
     * @param endFrame defines the new end frame for all animations or the largest end frame of all animations if null (defaults to null)
     * @returns the animation group
     */
    AnimationGroup.prototype.normalize = function (beginFrame, endFrame) {
        if (beginFrame === void 0) { beginFrame = null; }
        if (endFrame === void 0) { endFrame = null; }
        if (beginFrame == null) {
            beginFrame = this._from;
        }
        if (endFrame == null) {
            endFrame = this._to;
        }
        for (var index = 0; index < this._targetedAnimations.length; index++) {
            var targetedAnimation = this._targetedAnimations[index];
            var keys = targetedAnimation.animation.getKeys();
            var startKey = keys[0];
            var endKey = keys[keys.length - 1];
            if (startKey.frame > beginFrame) {
                var newKey = {
                    frame: beginFrame,
                    value: startKey.value,
                    inTangent: startKey.inTangent,
                    outTangent: startKey.outTangent,
                    interpolation: startKey.interpolation,
                };
                keys.splice(0, 0, newKey);
            }
            if (endKey.frame < endFrame) {
                var newKey = {
                    frame: endFrame,
                    value: endKey.value,
                    inTangent: endKey.inTangent,
                    outTangent: endKey.outTangent,
                    interpolation: endKey.interpolation,
                };
                keys.push(newKey);
            }
        }
        this._from = beginFrame;
        this._to = endFrame;
        return this;
    };
    AnimationGroup.prototype._processLoop = function (animatable, targetedAnimation, index) {
        var _this = this;
        animatable.onAnimationLoop = function () {
            _this.onAnimationLoopObservable.notifyObservers(targetedAnimation);
            if (_this._animationLoopFlags[index]) {
                return;
            }
            _this._animationLoopFlags[index] = true;
            _this._animationLoopCount++;
            if (_this._animationLoopCount === _this._targetedAnimations.length) {
                _this.onAnimationGroupLoopObservable.notifyObservers(_this);
                _this._animationLoopCount = 0;
                _this._animationLoopFlags = [];
            }
        };
    };
    /**
     * Start all animations on given targets
     * @param loop defines if animations must loop
     * @param speedRatio defines the ratio to apply to animation speed (1 by default)
     * @param from defines the from key (optional)
     * @param to defines the to key (optional)
     * @param isAdditive defines the additive state for the resulting animatables (optional)
     * @returns the current animation group
     */
    AnimationGroup.prototype.start = function (loop, speedRatio, from, to, isAdditive) {
        var _this = this;
        if (loop === void 0) { loop = false; }
        if (speedRatio === void 0) { speedRatio = 1; }
        if (this._isStarted || this._targetedAnimations.length === 0) {
            return this;
        }
        this._loopAnimation = loop;
        this._animationLoopCount = 0;
        this._animationLoopFlags = [];
        var _loop_1 = function (index) {
            var targetedAnimation = this_1._targetedAnimations[index];
            var animatable = this_1._scene.beginDirectAnimation(targetedAnimation.target, [targetedAnimation.animation], from !== undefined ? from : this_1._from, to !== undefined ? to : this_1._to, loop, speedRatio, undefined, undefined, isAdditive !== undefined ? isAdditive : this_1._isAdditive);
            animatable.onAnimationEnd = function () {
                _this.onAnimationEndObservable.notifyObservers(targetedAnimation);
                _this._checkAnimationGroupEnded(animatable);
            };
            this_1._processLoop(animatable, targetedAnimation, index);
            this_1._animatables.push(animatable);
        };
        var this_1 = this;
        for (var index = 0; index < this._targetedAnimations.length; index++) {
            _loop_1(index);
        }
        this._speedRatio = speedRatio;
        this._isStarted = true;
        this._isPaused = false;
        this.onAnimationGroupPlayObservable.notifyObservers(this);
        return this;
    };
    /**
     * Pause all animations
     * @returns the animation group
     */
    AnimationGroup.prototype.pause = function () {
        if (!this._isStarted) {
            return this;
        }
        this._isPaused = true;
        for (var index = 0; index < this._animatables.length; index++) {
            var animatable = this._animatables[index];
            animatable.pause();
        }
        this.onAnimationGroupPauseObservable.notifyObservers(this);
        return this;
    };
    /**
     * Play all animations to initial state
     * This function will start() the animations if they were not started or will restart() them if they were paused
     * @param loop defines if animations must loop
     * @returns the animation group
     */
    AnimationGroup.prototype.play = function (loop) {
        // only if all animatables are ready and exist
        if (this.isStarted && this._animatables.length === this._targetedAnimations.length) {
            if (loop !== undefined) {
                this.loopAnimation = loop;
            }
            this.restart();
        }
        else {
            this.stop();
            this.start(loop, this._speedRatio);
        }
        this._isPaused = false;
        return this;
    };
    /**
     * Reset all animations to initial state
     * @returns the animation group
     */
    AnimationGroup.prototype.reset = function () {
        if (!this._isStarted) {
            this.play();
            this.goToFrame(0);
            this.stop();
            return this;
        }
        for (var index = 0; index < this._animatables.length; index++) {
            var animatable = this._animatables[index];
            animatable.reset();
        }
        return this;
    };
    /**
     * Restart animations from key 0
     * @returns the animation group
     */
    AnimationGroup.prototype.restart = function () {
        if (!this._isStarted) {
            return this;
        }
        for (var index = 0; index < this._animatables.length; index++) {
            var animatable = this._animatables[index];
            animatable.restart();
        }
        this.onAnimationGroupPlayObservable.notifyObservers(this);
        return this;
    };
    /**
     * Stop all animations
     * @returns the animation group
     */
    AnimationGroup.prototype.stop = function () {
        if (!this._isStarted) {
            return this;
        }
        var list = this._animatables.slice();
        for (var index = 0; index < list.length; index++) {
            list[index].stop();
        }
        this._isStarted = false;
        return this;
    };
    /**
     * Set animation weight for all animatables
     * @param weight defines the weight to use
     * @return the animationGroup
     * @see https://doc.babylonjs.com/babylon101/animations#animation-weights
     */
    AnimationGroup.prototype.setWeightForAllAnimatables = function (weight) {
        for (var index = 0; index < this._animatables.length; index++) {
            var animatable = this._animatables[index];
            animatable.weight = weight;
        }
        return this;
    };
    /**
     * Synchronize and normalize all animatables with a source animatable
     * @param root defines the root animatable to synchronize with (null to stop synchronizing)
     * @return the animationGroup
     * @see https://doc.babylonjs.com/babylon101/animations#animation-weights
     */
    AnimationGroup.prototype.syncAllAnimationsWith = function (root) {
        for (var index = 0; index < this._animatables.length; index++) {
            var animatable = this._animatables[index];
            animatable.syncWith(root);
        }
        return this;
    };
    /**
     * Goes to a specific frame in this animation group
     * @param frame the frame number to go to
     * @return the animationGroup
     */
    AnimationGroup.prototype.goToFrame = function (frame) {
        if (!this._isStarted) {
            return this;
        }
        for (var index = 0; index < this._animatables.length; index++) {
            var animatable = this._animatables[index];
            animatable.goToFrame(frame);
        }
        return this;
    };
    /**
     * Dispose all associated resources
     */
    AnimationGroup.prototype.dispose = function () {
        this._targetedAnimations = [];
        this._animatables = [];
        // Remove from scene
        var index = this._scene.animationGroups.indexOf(this);
        if (index > -1) {
            this._scene.animationGroups.splice(index, 1);
        }
        if (this._parentContainer) {
            var index_1 = this._parentContainer.animationGroups.indexOf(this);
            if (index_1 > -1) {
                this._parentContainer.animationGroups.splice(index_1, 1);
            }
            this._parentContainer = null;
        }
        this.onAnimationEndObservable.clear();
        this.onAnimationGroupEndObservable.clear();
        this.onAnimationGroupPauseObservable.clear();
        this.onAnimationGroupPlayObservable.clear();
        this.onAnimationLoopObservable.clear();
        this.onAnimationGroupLoopObservable.clear();
    };
    AnimationGroup.prototype._checkAnimationGroupEnded = function (animatable) {
        // animatable should be taken out of the array
        var idx = this._animatables.indexOf(animatable);
        if (idx > -1) {
            this._animatables.splice(idx, 1);
        }
        // all animatables were removed? animation group ended!
        if (this._animatables.length === 0) {
            this._isStarted = false;
            this.onAnimationGroupEndObservable.notifyObservers(this);
        }
    };
    /**
     * Clone the current animation group and returns a copy
     * @param newName defines the name of the new group
     * @param targetConverter defines an optional function used to convert current animation targets to new ones
     * @param cloneAnimations defines if the animations should be cloned or referenced
     * @returns the new animation group
     */
    AnimationGroup.prototype.clone = function (newName, targetConverter, cloneAnimations) {
        if (cloneAnimations === void 0) { cloneAnimations = false; }
        var newGroup = new AnimationGroup(newName || this.name, this._scene);
        for (var _i = 0, _a = this._targetedAnimations; _i < _a.length; _i++) {
            var targetAnimation = _a[_i];
            newGroup.addTargetedAnimation(cloneAnimations ? targetAnimation.animation.clone() : targetAnimation.animation, targetConverter ? targetConverter(targetAnimation.target) : targetAnimation.target);
        }
        return newGroup;
    };
    /**
     * Serializes the animationGroup to an object
     * @returns Serialized object
     */
    AnimationGroup.prototype.serialize = function () {
        var serializationObject = {};
        serializationObject.name = this.name;
        serializationObject.from = this.from;
        serializationObject.to = this.to;
        serializationObject.targetedAnimations = [];
        for (var targetedAnimationIndex = 0; targetedAnimationIndex < this.targetedAnimations.length; targetedAnimationIndex++) {
            var targetedAnimation = this.targetedAnimations[targetedAnimationIndex];
            serializationObject.targetedAnimations[targetedAnimationIndex] = targetedAnimation.serialize();
        }
        if (_Misc_tags__WEBPACK_IMPORTED_MODULE_3__.Tags && _Misc_tags__WEBPACK_IMPORTED_MODULE_3__.Tags.HasTags(this)) {
            serializationObject.tags = _Misc_tags__WEBPACK_IMPORTED_MODULE_3__.Tags.GetTags(this);
        }
        // Metadata
        if (this.metadata) {
            serializationObject.metadata = this.metadata;
        }
        return serializationObject;
    };
    // Statics
    /**
     * Returns a new AnimationGroup object parsed from the source provided.
     * @param parsedAnimationGroup defines the source
     * @param scene defines the scene that will receive the animationGroup
     * @returns a new AnimationGroup
     */
    AnimationGroup.Parse = function (parsedAnimationGroup, scene) {
        var animationGroup = new AnimationGroup(parsedAnimationGroup.name, scene);
        for (var i = 0; i < parsedAnimationGroup.targetedAnimations.length; i++) {
            var targetedAnimation = parsedAnimationGroup.targetedAnimations[i];
            var animation = _animation__WEBPACK_IMPORTED_MODULE_0__.Animation.Parse(targetedAnimation.animation);
            var id = targetedAnimation.targetId;
            if (targetedAnimation.animation.property === "influence") {
                // morph target animation
                var morphTarget = scene.getMorphTargetById(id);
                if (morphTarget) {
                    animationGroup.addTargetedAnimation(animation, morphTarget);
                }
            }
            else {
                var targetNode = scene.getNodeById(id);
                if (targetNode != null) {
                    animationGroup.addTargetedAnimation(animation, targetNode);
                }
            }
        }
        if (parsedAnimationGroup.from !== null && parsedAnimationGroup.to !== null) {
            animationGroup.normalize(parsedAnimationGroup.from, parsedAnimationGroup.to);
        }
        if (_Misc_tags__WEBPACK_IMPORTED_MODULE_3__.Tags) {
            _Misc_tags__WEBPACK_IMPORTED_MODULE_3__.Tags.AddTagsTo(animationGroup, parsedAnimationGroup.tags);
        }
        if (parsedAnimationGroup.metadata !== undefined) {
            animationGroup.metadata = parsedAnimationGroup.metadata;
        }
        return animationGroup;
    };
    /**
     * Convert the keyframes for all animations belonging to the group to be relative to a given reference frame.
     * @param sourceAnimationGroup defines the AnimationGroup containing animations to convert
     * @param referenceFrame defines the frame that keyframes in the range will be relative to
     * @param range defines the name of the AnimationRange belonging to the animations in the group to convert
     * @param cloneOriginal defines whether or not to clone the group and convert the clone or convert the original group (default is false)
     * @param clonedName defines the name of the resulting cloned AnimationGroup if cloneOriginal is true
     * @returns a new AnimationGroup if cloneOriginal is true or the original AnimationGroup if cloneOriginal is false
     */
    AnimationGroup.MakeAnimationAdditive = function (sourceAnimationGroup, referenceFrame, range, cloneOriginal, clonedName) {
        if (referenceFrame === void 0) { referenceFrame = 0; }
        if (cloneOriginal === void 0) { cloneOriginal = false; }
        var animationGroup = sourceAnimationGroup;
        if (cloneOriginal) {
            animationGroup = sourceAnimationGroup.clone(clonedName || animationGroup.name);
        }
        var targetedAnimations = animationGroup.targetedAnimations;
        for (var index = 0; index < targetedAnimations.length; index++) {
            var targetedAnimation = targetedAnimations[index];
            _animation__WEBPACK_IMPORTED_MODULE_0__.Animation.MakeAnimationAdditive(targetedAnimation.animation, referenceFrame, range);
        }
        animationGroup.isAdditive = true;
        return animationGroup;
    };
    /**
     * Returns the string "AnimationGroup"
     * @returns "AnimationGroup"
     */
    AnimationGroup.prototype.getClassName = function () {
        return "AnimationGroup";
    };
    /**
     * Creates a detailed string about the object
     * @param fullDetails defines if the output string will support multiple levels of logging within scene loading
     * @returns a string representing the object
     */
    AnimationGroup.prototype.toString = function (fullDetails) {
        var ret = "Name: " + this.name;
        ret += ", type: " + this.getClassName();
        if (fullDetails) {
            ret += ", from: " + this._from;
            ret += ", to: " + this._to;
            ret += ", isStarted: " + this._isStarted;
            ret += ", speedRatio: " + this._speedRatio;
            ret += ", targetedAnimations length: " + this._targetedAnimations.length;
            ret += ", animatables length: " + this._animatables;
        }
        return ret;
    };
    return AnimationGroup;
}());



/***/ }),

/***/ "../../../lts/core/dist/Animations/animationKey.js":
/*!*********************************************************!*\
  !*** ../../../lts/core/dist/Animations/animationKey.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationKeyInterpolation": () => (/* binding */ AnimationKeyInterpolation)
/* harmony export */ });
/**
 * Enum for the animation key frame interpolation type
 */
var AnimationKeyInterpolation;
(function (AnimationKeyInterpolation) {
    /**
     * Use tangents to interpolate between start and end values.
     */
    AnimationKeyInterpolation[AnimationKeyInterpolation["NONE"] = 0] = "NONE";
    /**
     * Do not interpolate between keys and use the start key value only. Tangents are ignored
     */
    AnimationKeyInterpolation[AnimationKeyInterpolation["STEP"] = 1] = "STEP";
})(AnimationKeyInterpolation || (AnimationKeyInterpolation = {}));


/***/ }),

/***/ "../../../lts/core/dist/Animations/animationPropertiesOverride.js":
/*!************************************************************************!*\
  !*** ../../../lts/core/dist/Animations/animationPropertiesOverride.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationPropertiesOverride": () => (/* binding */ AnimationPropertiesOverride)
/* harmony export */ });
/* harmony import */ var _Animations_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Animations/animation */ "../../../lts/core/dist/Animations/animation.js");

/**
 * Class used to override all child animations of a given target
 */
var AnimationPropertiesOverride = /** @class */ (function () {
    function AnimationPropertiesOverride() {
        /**
         * Gets or sets a value indicating if animation blending must be used
         */
        this.enableBlending = false;
        /**
         * Gets or sets the blending speed to use when enableBlending is true
         */
        this.blendingSpeed = 0.01;
        /**
         * Gets or sets the default loop mode to use
         */
        this.loopMode = _Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONLOOPMODE_CYCLE;
    }
    return AnimationPropertiesOverride;
}());



/***/ }),

/***/ "../../../lts/core/dist/Animations/animationRange.js":
/*!***********************************************************!*\
  !*** ../../../lts/core/dist/Animations/animationRange.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationRange": () => (/* binding */ AnimationRange)
/* harmony export */ });
/**
 * Represents the range of an animation
 */
var AnimationRange = /** @class */ (function () {
    /**
     * Initializes the range of an animation
     * @param name The name of the animation range
     * @param from The starting frame of the animation
     * @param to The ending frame of the animation
     */
    function AnimationRange(
    /**The name of the animation range**/
    name, 
    /**The starting frame of the animation */
    from, 
    /**The ending frame of the animation*/
    to) {
        this.name = name;
        this.from = from;
        this.to = to;
    }
    /**
     * Makes a copy of the animation range
     * @returns A copy of the animation range
     */
    AnimationRange.prototype.clone = function () {
        return new AnimationRange(this.name, this.from, this.to);
    };
    return AnimationRange;
}());



/***/ }),

/***/ "../../../lts/core/dist/Animations/easing.js":
/*!***************************************************!*\
  !*** ../../../lts/core/dist/Animations/easing.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackEase": () => (/* binding */ BackEase),
/* harmony export */   "BezierCurveEase": () => (/* binding */ BezierCurveEase),
/* harmony export */   "BounceEase": () => (/* binding */ BounceEase),
/* harmony export */   "CircleEase": () => (/* binding */ CircleEase),
/* harmony export */   "CubicEase": () => (/* binding */ CubicEase),
/* harmony export */   "EasingFunction": () => (/* binding */ EasingFunction),
/* harmony export */   "ElasticEase": () => (/* binding */ ElasticEase),
/* harmony export */   "ExponentialEase": () => (/* binding */ ExponentialEase),
/* harmony export */   "PowerEase": () => (/* binding */ PowerEase),
/* harmony export */   "QuadraticEase": () => (/* binding */ QuadraticEase),
/* harmony export */   "QuarticEase": () => (/* binding */ QuarticEase),
/* harmony export */   "QuinticEase": () => (/* binding */ QuinticEase),
/* harmony export */   "SineEase": () => (/* binding */ SineEase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Maths_math_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Maths/math.path */ "../../../lts/core/dist/Maths/math.path.js");


/**
 * Base class used for every default easing function.
 * @see https://doc.babylonjs.com/divingDeeper/animation/advanced_animations#easing-functions
 */
var EasingFunction = /** @class */ (function () {
    function EasingFunction() {
        this._easingMode = EasingFunction.EASINGMODE_EASEIN;
    }
    /**
     * Sets the easing mode of the current function.
     * @param easingMode Defines the willing mode (EASINGMODE_EASEIN, EASINGMODE_EASEOUT or EASINGMODE_EASEINOUT)
     */
    EasingFunction.prototype.setEasingMode = function (easingMode) {
        var n = Math.min(Math.max(easingMode, 0), 2);
        this._easingMode = n;
    };
    /**
     * Gets the current easing mode.
     * @returns the easing mode
     */
    EasingFunction.prototype.getEasingMode = function () {
        return this._easingMode;
    };
    /**
     * @param gradient
     * @hidden
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    EasingFunction.prototype.easeInCore = function (gradient) {
        throw new Error("You must implement this method");
    };
    /**
     * Given an input gradient between 0 and 1, this returns the corresponding value
     * of the easing function.
     * @param gradient Defines the value between 0 and 1 we want the easing value for
     * @returns the corresponding value on the curve defined by the easing function
     */
    EasingFunction.prototype.ease = function (gradient) {
        switch (this._easingMode) {
            case EasingFunction.EASINGMODE_EASEIN:
                return this.easeInCore(gradient);
            case EasingFunction.EASINGMODE_EASEOUT:
                return 1 - this.easeInCore(1 - gradient);
        }
        if (gradient >= 0.5) {
            return (1 - this.easeInCore((1 - gradient) * 2)) * 0.5 + 0.5;
        }
        return this.easeInCore(gradient * 2) * 0.5;
    };
    /**
     * Interpolation follows the mathematical formula associated with the easing function.
     */
    EasingFunction.EASINGMODE_EASEIN = 0;
    /**
     * Interpolation follows 100% interpolation minus the output of the formula associated with the easing function.
     */
    EasingFunction.EASINGMODE_EASEOUT = 1;
    /**
     * Interpolation uses EaseIn for the first half of the animation and EaseOut for the second half.
     */
    EasingFunction.EASINGMODE_EASEINOUT = 2;
    return EasingFunction;
}());

/**
 * Easing function with a circle shape (see link below).
 * @see https://easings.net/#easeInCirc
 * @see https://doc.babylonjs.com/divingDeeper/animation/advanced_animations#easing-functions
 */
var CircleEase = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(CircleEase, _super);
    function CircleEase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param gradient
     * @hidden
     */
    CircleEase.prototype.easeInCore = function (gradient) {
        gradient = Math.max(0, Math.min(1, gradient));
        return 1.0 - Math.sqrt(1.0 - gradient * gradient);
    };
    return CircleEase;
}(EasingFunction));

/**
 * Easing function with a ease back shape (see link below).
 * @see https://easings.net/#easeInBack
 * @see https://doc.babylonjs.com/divingDeeper/animation/advanced_animations#easing-functions
 */
var BackEase = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(BackEase, _super);
    /**
     * Instantiates a back ease easing
     * @see https://easings.net/#easeInBack
     * @param amplitude Defines the amplitude of the function
     */
    function BackEase(
    /** Defines the amplitude of the function */
    amplitude) {
        if (amplitude === void 0) { amplitude = 1; }
        var _this = _super.call(this) || this;
        _this.amplitude = amplitude;
        return _this;
    }
    /**
     * @param gradient
     * @hidden
     */
    BackEase.prototype.easeInCore = function (gradient) {
        var num = Math.max(0, this.amplitude);
        return Math.pow(gradient, 3.0) - gradient * num * Math.sin(3.1415926535897931 * gradient);
    };
    return BackEase;
}(EasingFunction));

/**
 * Easing function with a bouncing shape (see link below).
 * @see https://easings.net/#easeInBounce
 * @see https://doc.babylonjs.com/divingDeeper/animation/advanced_animations#easing-functions
 */
var BounceEase = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(BounceEase, _super);
    /**
     * Instantiates a bounce easing
     * @see https://easings.net/#easeInBounce
     * @param bounces Defines the number of bounces
     * @param bounciness Defines the amplitude of the bounce
     */
    function BounceEase(
    /** Defines the number of bounces */
    bounces, 
    /** Defines the amplitude of the bounce */
    bounciness) {
        if (bounces === void 0) { bounces = 3; }
        if (bounciness === void 0) { bounciness = 2; }
        var _this = _super.call(this) || this;
        _this.bounces = bounces;
        _this.bounciness = bounciness;
        return _this;
    }
    /**
     * @param gradient
     * @hidden
     */
    BounceEase.prototype.easeInCore = function (gradient) {
        var y = Math.max(0.0, this.bounces);
        var bounciness = this.bounciness;
        if (bounciness <= 1.0) {
            bounciness = 1.001;
        }
        var num9 = Math.pow(bounciness, y);
        var num5 = 1.0 - bounciness;
        var num4 = (1.0 - num9) / num5 + num9 * 0.5;
        var num15 = gradient * num4;
        var num65 = Math.log(-num15 * (1.0 - bounciness) + 1.0) / Math.log(bounciness);
        var num3 = Math.floor(num65);
        var num13 = num3 + 1.0;
        var num8 = (1.0 - Math.pow(bounciness, num3)) / (num5 * num4);
        var num12 = (1.0 - Math.pow(bounciness, num13)) / (num5 * num4);
        var num7 = (num8 + num12) * 0.5;
        var num6 = gradient - num7;
        var num2 = num7 - num8;
        return (-Math.pow(1.0 / bounciness, y - num3) / (num2 * num2)) * (num6 - num2) * (num6 + num2);
    };
    return BounceEase;
}(EasingFunction));

/**
 * Easing function with a power of 3 shape (see link below).
 * @see https://easings.net/#easeInCubic
 * @see https://doc.babylonjs.com/divingDeeper/animation/advanced_animations#easing-functions
 */
var CubicEase = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(CubicEase, _super);
    function CubicEase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param gradient
     * @hidden
     */
    CubicEase.prototype.easeInCore = function (gradient) {
        return gradient * gradient * gradient;
    };
    return CubicEase;
}(EasingFunction));

/**
 * Easing function with an elastic shape (see link below).
 * @see https://easings.net/#easeInElastic
 * @see https://doc.babylonjs.com/divingDeeper/animation/advanced_animations#easing-functions
 */
var ElasticEase = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ElasticEase, _super);
    /**
     * Instantiates an elastic easing function
     * @see https://easings.net/#easeInElastic
     * @param oscillations Defines the number of oscillations
     * @param springiness Defines the amplitude of the oscillations
     */
    function ElasticEase(
    /** Defines the number of oscillations*/
    oscillations, 
    /** Defines the amplitude of the oscillations*/
    springiness) {
        if (oscillations === void 0) { oscillations = 3; }
        if (springiness === void 0) { springiness = 3; }
        var _this = _super.call(this) || this;
        _this.oscillations = oscillations;
        _this.springiness = springiness;
        return _this;
    }
    /**
     * @param gradient
     * @hidden
     */
    ElasticEase.prototype.easeInCore = function (gradient) {
        var num2;
        var num3 = Math.max(0.0, this.oscillations);
        var num = Math.max(0.0, this.springiness);
        if (num == 0) {
            num2 = gradient;
        }
        else {
            num2 = (Math.exp(num * gradient) - 1.0) / (Math.exp(num) - 1.0);
        }
        return num2 * Math.sin((6.2831853071795862 * num3 + 1.5707963267948966) * gradient);
    };
    return ElasticEase;
}(EasingFunction));

/**
 * Easing function with an exponential shape (see link below).
 * @see https://easings.net/#easeInExpo
 * @see https://doc.babylonjs.com/divingDeeper/animation/advanced_animations#easing-functions
 */
var ExponentialEase = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ExponentialEase, _super);
    /**
     * Instantiates an exponential easing function
     * @see https://easings.net/#easeInExpo
     * @param exponent Defines the exponent of the function
     */
    function ExponentialEase(
    /** Defines the exponent of the function */
    exponent) {
        if (exponent === void 0) { exponent = 2; }
        var _this = _super.call(this) || this;
        _this.exponent = exponent;
        return _this;
    }
    /**
     * @param gradient
     * @hidden
     */
    ExponentialEase.prototype.easeInCore = function (gradient) {
        if (this.exponent <= 0) {
            return gradient;
        }
        return (Math.exp(this.exponent * gradient) - 1.0) / (Math.exp(this.exponent) - 1.0);
    };
    return ExponentialEase;
}(EasingFunction));

/**
 * Easing function with a power shape (see link below).
 * @see https://easings.net/#easeInQuad
 * @see https://doc.babylonjs.com/divingDeeper/animation/advanced_animations#easing-functions
 */
var PowerEase = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(PowerEase, _super);
    /**
     * Instantiates an power base easing function
     * @see https://easings.net/#easeInQuad
     * @param power Defines the power of the function
     */
    function PowerEase(
    /** Defines the power of the function */
    power) {
        if (power === void 0) { power = 2; }
        var _this = _super.call(this) || this;
        _this.power = power;
        return _this;
    }
    /**
     * @param gradient
     * @hidden
     */
    PowerEase.prototype.easeInCore = function (gradient) {
        var y = Math.max(0.0, this.power);
        return Math.pow(gradient, y);
    };
    return PowerEase;
}(EasingFunction));

/**
 * Easing function with a power of 2 shape (see link below).
 * @see https://easings.net/#easeInQuad
 * @see https://doc.babylonjs.com/divingDeeper/animation/advanced_animations#easing-functions
 */
var QuadraticEase = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(QuadraticEase, _super);
    function QuadraticEase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param gradient
     * @hidden
     */
    QuadraticEase.prototype.easeInCore = function (gradient) {
        return gradient * gradient;
    };
    return QuadraticEase;
}(EasingFunction));

/**
 * Easing function with a power of 4 shape (see link below).
 * @see https://easings.net/#easeInQuart
 * @see https://doc.babylonjs.com/divingDeeper/animation/advanced_animations#easing-functions
 */
var QuarticEase = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(QuarticEase, _super);
    function QuarticEase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param gradient
     * @hidden
     */
    QuarticEase.prototype.easeInCore = function (gradient) {
        return gradient * gradient * gradient * gradient;
    };
    return QuarticEase;
}(EasingFunction));

/**
 * Easing function with a power of 5 shape (see link below).
 * @see https://easings.net/#easeInQuint
 * @see https://doc.babylonjs.com/divingDeeper/animation/advanced_animations#easing-functions
 */
var QuinticEase = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(QuinticEase, _super);
    function QuinticEase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param gradient
     * @hidden
     */
    QuinticEase.prototype.easeInCore = function (gradient) {
        return gradient * gradient * gradient * gradient * gradient;
    };
    return QuinticEase;
}(EasingFunction));

/**
 * Easing function with a sin shape (see link below).
 * @see https://easings.net/#easeInSine
 * @see https://doc.babylonjs.com/divingDeeper/animation/advanced_animations#easing-functions
 */
var SineEase = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SineEase, _super);
    function SineEase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param gradient
     * @hidden
     */
    SineEase.prototype.easeInCore = function (gradient) {
        return 1.0 - Math.sin(1.5707963267948966 * (1.0 - gradient));
    };
    return SineEase;
}(EasingFunction));

/**
 * Easing function with a bezier shape (see link below).
 * @see http://cubic-bezier.com/#.17,.67,.83,.67
 * @see https://doc.babylonjs.com/divingDeeper/animation/advanced_animations#easing-functions
 */
var BezierCurveEase = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(BezierCurveEase, _super);
    /**
     * Instantiates a bezier function
     * @see http://cubic-bezier.com/#.17,.67,.83,.67
     * @param x1 Defines the x component of the start tangent in the bezier curve
     * @param y1 Defines the y component of the start tangent in the bezier curve
     * @param x2 Defines the x component of the end tangent in the bezier curve
     * @param y2 Defines the y component of the end tangent in the bezier curve
     */
    function BezierCurveEase(
    /** Defines the x component of the start tangent in the bezier curve */
    x1, 
    /** Defines the y component of the start tangent in the bezier curve */
    y1, 
    /** Defines the x component of the end tangent in the bezier curve */
    x2, 
    /** Defines the y component of the end tangent in the bezier curve */
    y2) {
        if (x1 === void 0) { x1 = 0; }
        if (y1 === void 0) { y1 = 0; }
        if (x2 === void 0) { x2 = 1; }
        if (y2 === void 0) { y2 = 1; }
        var _this = _super.call(this) || this;
        _this.x1 = x1;
        _this.y1 = y1;
        _this.x2 = x2;
        _this.y2 = y2;
        return _this;
    }
    /**
     * @param gradient
     * @hidden
     */
    BezierCurveEase.prototype.easeInCore = function (gradient) {
        return _Maths_math_path__WEBPACK_IMPORTED_MODULE_1__.BezierCurve.Interpolate(gradient, this.x1, this.y1, this.x2, this.y2);
    };
    return BezierCurveEase;
}(EasingFunction));



/***/ }),

/***/ "../../../lts/core/dist/Animations/index.js":
/*!**************************************************!*\
  !*** ../../../lts/core/dist/Animations/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animatable": () => (/* reexport safe */ _animatable__WEBPACK_IMPORTED_MODULE_0__.Animatable),
/* harmony export */   "Animation": () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_1__.Animation),
/* harmony export */   "AnimationEvent": () => (/* reexport safe */ _animationEvent__WEBPACK_IMPORTED_MODULE_5__.AnimationEvent),
/* harmony export */   "AnimationGroup": () => (/* reexport safe */ _animationGroup__WEBPACK_IMPORTED_MODULE_6__.AnimationGroup),
/* harmony export */   "AnimationKeyInterpolation": () => (/* reexport safe */ _animationKey__WEBPACK_IMPORTED_MODULE_7__.AnimationKeyInterpolation),
/* harmony export */   "AnimationPropertiesOverride": () => (/* reexport safe */ _animationPropertiesOverride__WEBPACK_IMPORTED_MODULE_2__.AnimationPropertiesOverride),
/* harmony export */   "AnimationRange": () => (/* reexport safe */ _animationRange__WEBPACK_IMPORTED_MODULE_8__.AnimationRange),
/* harmony export */   "BackEase": () => (/* reexport safe */ _easing__WEBPACK_IMPORTED_MODULE_3__.BackEase),
/* harmony export */   "BezierCurveEase": () => (/* reexport safe */ _easing__WEBPACK_IMPORTED_MODULE_3__.BezierCurveEase),
/* harmony export */   "BounceEase": () => (/* reexport safe */ _easing__WEBPACK_IMPORTED_MODULE_3__.BounceEase),
/* harmony export */   "CircleEase": () => (/* reexport safe */ _easing__WEBPACK_IMPORTED_MODULE_3__.CircleEase),
/* harmony export */   "CubicEase": () => (/* reexport safe */ _easing__WEBPACK_IMPORTED_MODULE_3__.CubicEase),
/* harmony export */   "EasingFunction": () => (/* reexport safe */ _easing__WEBPACK_IMPORTED_MODULE_3__.EasingFunction),
/* harmony export */   "ElasticEase": () => (/* reexport safe */ _easing__WEBPACK_IMPORTED_MODULE_3__.ElasticEase),
/* harmony export */   "ExponentialEase": () => (/* reexport safe */ _easing__WEBPACK_IMPORTED_MODULE_3__.ExponentialEase),
/* harmony export */   "PathCursor": () => (/* reexport safe */ _pathCursor__WEBPACK_IMPORTED_MODULE_10__.PathCursor),
/* harmony export */   "PowerEase": () => (/* reexport safe */ _easing__WEBPACK_IMPORTED_MODULE_3__.PowerEase),
/* harmony export */   "QuadraticEase": () => (/* reexport safe */ _easing__WEBPACK_IMPORTED_MODULE_3__.QuadraticEase),
/* harmony export */   "QuarticEase": () => (/* reexport safe */ _easing__WEBPACK_IMPORTED_MODULE_3__.QuarticEase),
/* harmony export */   "QuinticEase": () => (/* reexport safe */ _easing__WEBPACK_IMPORTED_MODULE_3__.QuinticEase),
/* harmony export */   "RuntimeAnimation": () => (/* reexport safe */ _runtimeAnimation__WEBPACK_IMPORTED_MODULE_4__.RuntimeAnimation),
/* harmony export */   "SineEase": () => (/* reexport safe */ _easing__WEBPACK_IMPORTED_MODULE_3__.SineEase),
/* harmony export */   "TargetedAnimation": () => (/* reexport safe */ _animationGroup__WEBPACK_IMPORTED_MODULE_6__.TargetedAnimation),
/* harmony export */   "_IAnimationState": () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_1__._IAnimationState)
/* harmony export */ });
/* harmony import */ var _animatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animatable */ "../../../lts/core/dist/Animations/animatable.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "../../../lts/core/dist/Animations/animation.js");
/* harmony import */ var _animationPropertiesOverride__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animationPropertiesOverride */ "../../../lts/core/dist/Animations/animationPropertiesOverride.js");
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easing */ "../../../lts/core/dist/Animations/easing.js");
/* harmony import */ var _runtimeAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./runtimeAnimation */ "../../../lts/core/dist/Animations/runtimeAnimation.js");
/* harmony import */ var _animationEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animationEvent */ "../../../lts/core/dist/Animations/animationEvent.js");
/* harmony import */ var _animationGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animationGroup */ "../../../lts/core/dist/Animations/animationGroup.js");
/* harmony import */ var _animationKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animationKey */ "../../../lts/core/dist/Animations/animationKey.js");
/* harmony import */ var _animationRange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animationRange */ "../../../lts/core/dist/Animations/animationRange.js");
/* harmony import */ var _animatable_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animatable.interface */ "../../../lts/core/dist/Animations/animatable.interface.js");
/* harmony import */ var _pathCursor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pathCursor */ "../../../lts/core/dist/Animations/pathCursor.js");













/***/ }),

/***/ "../../../lts/core/dist/Animations/pathCursor.js":
/*!*******************************************************!*\
  !*** ../../../lts/core/dist/Animations/pathCursor.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathCursor": () => (/* binding */ PathCursor)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");

/**
 * A cursor which tracks a point on a path
 */
var PathCursor = /** @class */ (function () {
    /**
     * Initializes the path cursor
     * @param _path The path to track
     */
    function PathCursor(_path) {
        this._path = _path;
        /**
         * Stores path cursor callbacks for when an onchange event is triggered
         */
        this._onchange = new Array();
        /**
         * The value of the path cursor
         */
        this.value = 0;
        /**
         * The animation array of the path cursor
         */
        this.animations = new Array();
    }
    /**
     * Gets the cursor point on the path
     * @returns A point on the path cursor at the cursor location
     */
    PathCursor.prototype.getPoint = function () {
        var point = this._path.getPointAtLengthPosition(this.value);
        return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(point.x, 0, point.y);
    };
    /**
     * Moves the cursor ahead by the step amount
     * @param step The amount to move the cursor forward
     * @returns This path cursor
     */
    PathCursor.prototype.moveAhead = function (step) {
        if (step === void 0) { step = 0.002; }
        this.move(step);
        return this;
    };
    /**
     * Moves the cursor behind by the step amount
     * @param step The amount to move the cursor back
     * @returns This path cursor
     */
    PathCursor.prototype.moveBack = function (step) {
        if (step === void 0) { step = 0.002; }
        this.move(-step);
        return this;
    };
    /**
     * Moves the cursor by the step amount
     * If the step amount is greater than one, an exception is thrown
     * @param step The amount to move the cursor
     * @returns This path cursor
     */
    PathCursor.prototype.move = function (step) {
        if (Math.abs(step) > 1) {
            throw "step size should be less than 1.";
        }
        this.value += step;
        this._ensureLimits();
        this._raiseOnChange();
        return this;
    };
    /**
     * Ensures that the value is limited between zero and one
     * @returns This path cursor
     */
    PathCursor.prototype._ensureLimits = function () {
        while (this.value > 1) {
            this.value -= 1;
        }
        while (this.value < 0) {
            this.value += 1;
        }
        return this;
    };
    /**
     * Runs onchange callbacks on change (used by the animation engine)
     * @returns This path cursor
     */
    PathCursor.prototype._raiseOnChange = function () {
        var _this = this;
        this._onchange.forEach(function (f) { return f(_this); });
        return this;
    };
    /**
     * Executes a function on change
     * @param f A path cursor onchange callback
     * @returns This path cursor
     */
    PathCursor.prototype.onchange = function (f) {
        this._onchange.push(f);
        return this;
    };
    return PathCursor;
}());



/***/ }),

/***/ "../../../lts/core/dist/Animations/runtimeAnimation.js":
/*!*************************************************************!*\
  !*** ../../../lts/core/dist/Animations/runtimeAnimation.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuntimeAnimation": () => (/* binding */ RuntimeAnimation)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Maths/math.color */ "../../../lts/core/dist/Maths/math.color.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ "../../../lts/core/dist/Animations/animation.js");
/* harmony import */ var _Maths_math_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Maths/math.size */ "../../../lts/core/dist/Maths/math.size.js");




// Static values to help the garbage collector
// Quaternion
var _staticOffsetValueQuaternion = Object.freeze(new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion(0, 0, 0, 0));
// Vector3
var _staticOffsetValueVector3 = Object.freeze(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero());
// Vector2
var _staticOffsetValueVector2 = Object.freeze(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.Zero());
// Size
var _staticOffsetValueSize = Object.freeze(_Maths_math_size__WEBPACK_IMPORTED_MODULE_3__.Size.Zero());
// Color3
var _staticOffsetValueColor3 = Object.freeze(_Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color3.Black());
/**
 * Defines a runtime animation
 */
var RuntimeAnimation = /** @class */ (function () {
    /**
     * Create a new RuntimeAnimation object
     * @param target defines the target of the animation
     * @param animation defines the source animation object
     * @param scene defines the hosting scene
     * @param host defines the initiating Animatable
     */
    function RuntimeAnimation(target, animation, scene, host) {
        var _this = this;
        this._events = new Array();
        /**
         * The current frame of the runtime animation
         */
        this._currentFrame = 0;
        /**
         * The original value of the runtime animation
         */
        this._originalValue = new Array();
        /**
         * The original blend value of the runtime animation
         */
        this._originalBlendValue = null;
        /**
         * The offsets cache of the runtime animation
         */
        this._offsetsCache = {};
        /**
         * The high limits cache of the runtime animation
         */
        this._highLimitsCache = {};
        /**
         * Specifies if the runtime animation has been stopped
         */
        this._stopped = false;
        /**
         * The blending factor of the runtime animation
         */
        this._blendingFactor = 0;
        /**
         * The current value of the runtime animation
         */
        this._currentValue = null;
        this._currentActiveTarget = null;
        this._directTarget = null;
        /**
         * The target path of the runtime animation
         */
        this._targetPath = "";
        /**
         * The weight of the runtime animation
         */
        this._weight = 1.0;
        /**
         * The ratio offset of the runtime animation
         */
        this._ratioOffset = 0;
        /**
         * The previous delay of the runtime animation
         */
        this._previousDelay = 0;
        /**
         * The previous ratio of the runtime animation
         */
        this._previousRatio = 0;
        this._targetIsArray = false;
        this._animation = animation;
        this._target = target;
        this._scene = scene;
        this._host = host;
        this._activeTargets = [];
        animation._runtimeAnimations.push(this);
        // State
        this._animationState = {
            key: 0,
            repeatCount: 0,
            loopMode: this._getCorrectLoopMode(),
        };
        if (this._animation.dataType === _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_MATRIX) {
            this._animationState.workValue = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Zero();
        }
        // Limits
        this._keys = this._animation.getKeys();
        this._minFrame = this._keys[0].frame;
        this._maxFrame = this._keys[this._keys.length - 1].frame;
        this._minValue = this._keys[0].value;
        this._maxValue = this._keys[this._keys.length - 1].value;
        // Add a start key at frame 0 if missing
        if (this._minFrame !== 0) {
            var newKey = { frame: 0, value: this._minValue };
            this._keys.splice(0, 0, newKey);
        }
        // Check data
        if (this._target instanceof Array) {
            var index = 0;
            for (var _i = 0, _a = this._target; _i < _a.length; _i++) {
                var target_1 = _a[_i];
                this._preparePath(target_1, index);
                this._getOriginalValues(index);
                index++;
            }
            this._targetIsArray = true;
        }
        else {
            this._preparePath(this._target);
            this._getOriginalValues();
            this._targetIsArray = false;
            this._directTarget = this._activeTargets[0];
        }
        // Cloning events locally
        var events = animation.getEvents();
        if (events && events.length > 0) {
            events.forEach(function (e) {
                _this._events.push(e._clone());
            });
        }
        this._enableBlending = target && target.animationPropertiesOverride ? target.animationPropertiesOverride.enableBlending : this._animation.enableBlending;
    }
    Object.defineProperty(RuntimeAnimation.prototype, "currentFrame", {
        /**
         * Gets the current frame of the runtime animation
         */
        get: function () {
            return this._currentFrame;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeAnimation.prototype, "weight", {
        /**
         * Gets the weight of the runtime animation
         */
        get: function () {
            return this._weight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeAnimation.prototype, "currentValue", {
        /**
         * Gets the current value of the runtime animation
         */
        get: function () {
            return this._currentValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeAnimation.prototype, "targetPath", {
        /**
         * Gets or sets the target path of the runtime animation
         */
        get: function () {
            return this._targetPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeAnimation.prototype, "target", {
        /**
         * Gets the actual target of the runtime animation
         */
        get: function () {
            return this._currentActiveTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeAnimation.prototype, "isAdditive", {
        /**
         * Gets the additive state of the runtime animation
         */
        get: function () {
            return this._host && this._host.isAdditive;
        },
        enumerable: false,
        configurable: true
    });
    RuntimeAnimation.prototype._preparePath = function (target, targetIndex) {
        if (targetIndex === void 0) { targetIndex = 0; }
        var targetPropertyPath = this._animation.targetPropertyPath;
        if (targetPropertyPath.length > 1) {
            var property = target[targetPropertyPath[0]];
            for (var index = 1; index < targetPropertyPath.length - 1; index++) {
                property = property[targetPropertyPath[index]];
            }
            this._targetPath = targetPropertyPath[targetPropertyPath.length - 1];
            this._activeTargets[targetIndex] = property;
        }
        else {
            this._targetPath = targetPropertyPath[0];
            this._activeTargets[targetIndex] = target;
        }
    };
    Object.defineProperty(RuntimeAnimation.prototype, "animation", {
        /**
         * Gets the animation from the runtime animation
         */
        get: function () {
            return this._animation;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Resets the runtime animation to the beginning
     * @param restoreOriginal defines whether to restore the target property to the original value
     */
    RuntimeAnimation.prototype.reset = function (restoreOriginal) {
        if (restoreOriginal === void 0) { restoreOriginal = false; }
        if (restoreOriginal) {
            if (this._target instanceof Array) {
                var index = 0;
                for (var _i = 0, _a = this._target; _i < _a.length; _i++) {
                    var target = _a[_i];
                    if (this._originalValue[index] !== undefined) {
                        this._setValue(target, this._activeTargets[index], this._originalValue[index], -1, index);
                    }
                    index++;
                }
            }
            else {
                if (this._originalValue[0] !== undefined) {
                    this._setValue(this._target, this._directTarget, this._originalValue[0], -1, 0);
                }
            }
        }
        this._offsetsCache = {};
        this._highLimitsCache = {};
        this._currentFrame = 0;
        this._blendingFactor = 0;
        // Events
        for (var index = 0; index < this._events.length; index++) {
            this._events[index].isDone = false;
        }
    };
    /**
     * Specifies if the runtime animation is stopped
     * @returns Boolean specifying if the runtime animation is stopped
     */
    RuntimeAnimation.prototype.isStopped = function () {
        return this._stopped;
    };
    /**
     * Disposes of the runtime animation
     */
    RuntimeAnimation.prototype.dispose = function () {
        var index = this._animation.runtimeAnimations.indexOf(this);
        if (index > -1) {
            this._animation.runtimeAnimations.splice(index, 1);
        }
    };
    /**
     * Apply the interpolated value to the target
     * @param currentValue defines the value computed by the animation
     * @param weight defines the weight to apply to this value (Defaults to 1.0)
     */
    RuntimeAnimation.prototype.setValue = function (currentValue, weight) {
        if (this._targetIsArray) {
            for (var index = 0; index < this._target.length; index++) {
                var target = this._target[index];
                this._setValue(target, this._activeTargets[index], currentValue, weight, index);
            }
            return;
        }
        this._setValue(this._target, this._directTarget, currentValue, weight, 0);
    };
    RuntimeAnimation.prototype._getOriginalValues = function (targetIndex) {
        if (targetIndex === void 0) { targetIndex = 0; }
        var originalValue;
        var target = this._activeTargets[targetIndex];
        if (target.getRestPose && this._targetPath === "_matrix") {
            // For bones
            originalValue = target.getRestPose();
        }
        else {
            originalValue = target[this._targetPath];
        }
        if (originalValue && originalValue.clone) {
            this._originalValue[targetIndex] = originalValue.clone();
        }
        else {
            this._originalValue[targetIndex] = originalValue;
        }
    };
    RuntimeAnimation.prototype._setValue = function (target, destination, currentValue, weight, targetIndex) {
        // Set value
        this._currentActiveTarget = destination;
        this._weight = weight;
        if (this._enableBlending && this._blendingFactor <= 1.0) {
            if (!this._originalBlendValue) {
                var originalValue = destination[this._targetPath];
                if (originalValue.clone) {
                    this._originalBlendValue = originalValue.clone();
                }
                else {
                    this._originalBlendValue = originalValue;
                }
            }
            if (this._originalBlendValue.m) {
                // Matrix
                if (_animation__WEBPACK_IMPORTED_MODULE_2__.Animation.AllowMatrixDecomposeForInterpolation) {
                    if (this._currentValue) {
                        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.DecomposeLerpToRef(this._originalBlendValue, currentValue, this._blendingFactor, this._currentValue);
                    }
                    else {
                        this._currentValue = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.DecomposeLerp(this._originalBlendValue, currentValue, this._blendingFactor);
                    }
                }
                else {
                    if (this._currentValue) {
                        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.LerpToRef(this._originalBlendValue, currentValue, this._blendingFactor, this._currentValue);
                    }
                    else {
                        this._currentValue = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Lerp(this._originalBlendValue, currentValue, this._blendingFactor);
                    }
                }
            }
            else {
                this._currentValue = _animation__WEBPACK_IMPORTED_MODULE_2__.Animation._UniversalLerp(this._originalBlendValue, currentValue, this._blendingFactor);
            }
            var blendingSpeed = target && target.animationPropertiesOverride ? target.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
            this._blendingFactor += blendingSpeed;
        }
        else {
            if (!this._currentValue) {
                if (currentValue === null || currentValue === void 0 ? void 0 : currentValue.clone) {
                    this._currentValue = currentValue.clone();
                }
                else {
                    this._currentValue = currentValue;
                }
            }
            else if (this._currentValue.copyFrom) {
                this._currentValue.copyFrom(currentValue);
            }
            else {
                this._currentValue = currentValue;
            }
        }
        if (weight !== -1.0) {
            this._scene._registerTargetForLateAnimationBinding(this, this._originalValue[targetIndex]);
        }
        else {
            destination[this._targetPath] = this._currentValue;
        }
        if (target.markAsDirty) {
            target.markAsDirty(this._animation.targetProperty);
        }
    };
    /**
     * Gets the loop pmode of the runtime animation
     * @returns Loop Mode
     */
    RuntimeAnimation.prototype._getCorrectLoopMode = function () {
        if (this._target && this._target.animationPropertiesOverride) {
            return this._target.animationPropertiesOverride.loopMode;
        }
        return this._animation.loopMode;
    };
    /**
     * Move the current animation to a given frame
     * @param frame defines the frame to move to
     */
    RuntimeAnimation.prototype.goToFrame = function (frame) {
        var keys = this._animation.getKeys();
        if (frame < keys[0].frame) {
            frame = keys[0].frame;
        }
        else if (frame > keys[keys.length - 1].frame) {
            frame = keys[keys.length - 1].frame;
        }
        // Need to reset animation events
        var events = this._events;
        if (events.length) {
            for (var index = 0; index < events.length; index++) {
                if (!events[index].onlyOnce) {
                    // reset events in the future
                    events[index].isDone = events[index].frame < frame;
                }
            }
        }
        this._currentFrame = frame;
        var currentValue = this._animation._interpolate(frame, this._animationState);
        this.setValue(currentValue, -1);
    };
    /**
     * @param newSpeedRatio
     * @hidden Internal use only
     */
    RuntimeAnimation.prototype._prepareForSpeedRatioChange = function (newSpeedRatio) {
        var newRatio = (this._previousDelay * (this._animation.framePerSecond * newSpeedRatio)) / 1000.0;
        this._ratioOffset = this._previousRatio - newRatio;
    };
    /**
     * Execute the current animation
     * @param delay defines the delay to add to the current frame
     * @param from defines the lower bound of the animation range
     * @param to defines the upper bound of the animation range
     * @param loop defines if the current animation must loop
     * @param speedRatio defines the current speed ratio
     * @param weight defines the weight of the animation (default is -1 so no weight)
     * @returns a boolean indicating if the animation is running
     */
    RuntimeAnimation.prototype.animate = function (delay, from, to, loop, speedRatio, weight) {
        if (weight === void 0) { weight = -1.0; }
        var animation = this._animation;
        var targetPropertyPath = animation.targetPropertyPath;
        if (!targetPropertyPath || targetPropertyPath.length < 1) {
            this._stopped = true;
            return false;
        }
        var returnValue = true;
        // Check limits
        if (from < this._minFrame || from > this._maxFrame) {
            from = this._minFrame;
        }
        if (to < this._minFrame || to > this._maxFrame) {
            to = this._maxFrame;
        }
        var range = to - from;
        var offsetValue;
        // Compute ratio which represents the frame delta between from and to
        var ratio = (delay * (animation.framePerSecond * speedRatio)) / 1000.0 + this._ratioOffset;
        var highLimitValue = 0;
        this._previousDelay = delay;
        this._previousRatio = ratio;
        if (!loop && to >= from && ratio >= range) {
            // If we are out of range and not looping get back to caller
            returnValue = false;
            highLimitValue = animation._getKeyValue(this._maxValue);
        }
        else if (!loop && from >= to && ratio <= range) {
            returnValue = false;
            highLimitValue = animation._getKeyValue(this._minValue);
        }
        else if (this._animationState.loopMode !== _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONLOOPMODE_CYCLE) {
            var keyOffset = to.toString() + from.toString();
            if (!this._offsetsCache[keyOffset]) {
                this._animationState.repeatCount = 0;
                this._animationState.loopMode = _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONLOOPMODE_CYCLE;
                var fromValue = animation._interpolate(from, this._animationState);
                var toValue = animation._interpolate(to, this._animationState);
                this._animationState.loopMode = this._getCorrectLoopMode();
                switch (animation.dataType) {
                    // Float
                    case _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_FLOAT:
                        this._offsetsCache[keyOffset] = toValue - fromValue;
                        break;
                    // Quaternion
                    case _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_QUATERNION:
                        this._offsetsCache[keyOffset] = toValue.subtract(fromValue);
                        break;
                    // Vector3
                    case _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_VECTOR3:
                        this._offsetsCache[keyOffset] = toValue.subtract(fromValue);
                        break;
                    // Vector2
                    case _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_VECTOR2:
                        this._offsetsCache[keyOffset] = toValue.subtract(fromValue);
                        break;
                    // Size
                    case _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_SIZE:
                        this._offsetsCache[keyOffset] = toValue.subtract(fromValue);
                        break;
                    // Color3
                    case _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_COLOR3:
                        this._offsetsCache[keyOffset] = toValue.subtract(fromValue);
                        break;
                    default:
                        break;
                }
                this._highLimitsCache[keyOffset] = toValue;
            }
            highLimitValue = this._highLimitsCache[keyOffset];
            offsetValue = this._offsetsCache[keyOffset];
        }
        if (offsetValue === undefined) {
            switch (animation.dataType) {
                // Float
                case _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_FLOAT:
                    offsetValue = 0;
                    break;
                // Quaternion
                case _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_QUATERNION:
                    offsetValue = _staticOffsetValueQuaternion;
                    break;
                // Vector3
                case _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_VECTOR3:
                    offsetValue = _staticOffsetValueVector3;
                    break;
                // Vector2
                case _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_VECTOR2:
                    offsetValue = _staticOffsetValueVector2;
                    break;
                // Size
                case _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_SIZE:
                    offsetValue = _staticOffsetValueSize;
                    break;
                // Color3
                case _animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_COLOR3:
                    offsetValue = _staticOffsetValueColor3;
            }
        }
        // Compute value
        var currentFrame;
        if (this._host && this._host.syncRoot) {
            var syncRoot = this._host.syncRoot;
            var hostNormalizedFrame = (syncRoot.masterFrame - syncRoot.fromFrame) / (syncRoot.toFrame - syncRoot.fromFrame);
            currentFrame = from + (to - from) * hostNormalizedFrame;
        }
        else {
            if ((ratio > 0 && from > to) || (ratio < 0 && from < to)) {
                currentFrame = returnValue && range !== 0 ? to + (ratio % range) : from;
            }
            else {
                currentFrame = returnValue && range !== 0 ? from + (ratio % range) : to;
            }
        }
        // Reset events if looping
        var events = this._events;
        if ((speedRatio > 0 && this.currentFrame > currentFrame) || (speedRatio < 0 && this.currentFrame < currentFrame)) {
            this._onLoop();
            // Need to reset animation events
            if (events.length) {
                for (var index = 0; index < events.length; index++) {
                    if (!events[index].onlyOnce) {
                        // reset event, the animation is looping
                        events[index].isDone = false;
                    }
                }
            }
        }
        this._currentFrame = currentFrame;
        this._animationState.repeatCount = range === 0 ? 0 : (ratio / range) >> 0;
        this._animationState.highLimitValue = highLimitValue;
        this._animationState.offsetValue = offsetValue;
        var currentValue = animation._interpolate(currentFrame, this._animationState);
        // Set value
        this.setValue(currentValue, weight);
        // Check events
        if (events.length) {
            for (var index = 0; index < events.length; index++) {
                // Make sure current frame has passed event frame and that event frame is within the current range
                // Also, handle both forward and reverse animations
                if ((range > 0 && currentFrame >= events[index].frame && events[index].frame >= from) ||
                    (range < 0 && currentFrame <= events[index].frame && events[index].frame <= from)) {
                    var event_1 = events[index];
                    if (!event_1.isDone) {
                        // If event should be done only once, remove it.
                        if (event_1.onlyOnce) {
                            events.splice(index, 1);
                            index--;
                        }
                        event_1.isDone = true;
                        event_1.action(currentFrame);
                    } // Don't do anything if the event has already be done.
                }
            }
        }
        if (!returnValue) {
            this._stopped = true;
        }
        return returnValue;
    };
    return RuntimeAnimation;
}());



/***/ }),

/***/ "../../../lts/core/dist/Audio/Interfaces/IAudioEngine.js":
/*!***************************************************************!*\
  !*** ../../../lts/core/dist/Audio/Interfaces/IAudioEngine.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../lts/core/dist/Audio/Interfaces/ISoundOptions.js":
/*!****************************************************************!*\
  !*** ../../../lts/core/dist/Audio/Interfaces/ISoundOptions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../lts/core/dist/Audio/analyser.js":
/*!************************************************!*\
  !*** ../../../lts/core/dist/Audio/analyser.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Analyser": () => (/* binding */ Analyser)
/* harmony export */ });
/* harmony import */ var _Engines_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/engine */ "../../../lts/core/dist/Engines/engine.js");
/* harmony import */ var _Misc_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc/tools */ "../../../lts/core/dist/Misc/tools.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Engines/engineStore */ "../../../lts/core/dist/Engines/engineStore.js");



/**
 * Class used to work with sound analyzer using fast fourier transform (FFT)
 * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music
 */
var Analyser = /** @class */ (function () {
    /**
     * Creates a new analyser
     * @param scene defines hosting scene
     */
    function Analyser(scene) {
        /**
         * Gets or sets the smoothing
         * @ignorenaming
         */
        this.SMOOTHING = 0.75;
        /**
         * Gets or sets the FFT table size
         * @ignorenaming
         */
        this.FFT_SIZE = 512;
        /**
         * Gets or sets the bar graph amplitude
         * @ignorenaming
         */
        this.BARGRAPHAMPLITUDE = 256;
        /**
         * Gets or sets the position of the debug canvas
         * @ignorenaming
         */
        this.DEBUGCANVASPOS = { x: 20, y: 20 };
        /**
         * Gets or sets the debug canvas size
         * @ignorenaming
         */
        this.DEBUGCANVASSIZE = { width: 320, height: 200 };
        scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_2__.EngineStore.LastCreatedScene;
        if (!scene) {
            return;
        }
        this._scene = scene;
        if (!_Engines_engine__WEBPACK_IMPORTED_MODULE_0__.Engine.audioEngine) {
            _Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("No audio engine initialized, failed to create an audio analyser");
            return;
        }
        this._audioEngine = _Engines_engine__WEBPACK_IMPORTED_MODULE_0__.Engine.audioEngine;
        if (this._audioEngine.canUseWebAudio && this._audioEngine.audioContext) {
            this._webAudioAnalyser = this._audioEngine.audioContext.createAnalyser();
            this._webAudioAnalyser.minDecibels = -140;
            this._webAudioAnalyser.maxDecibels = 0;
            this._byteFreqs = new Uint8Array(this._webAudioAnalyser.frequencyBinCount);
            this._byteTime = new Uint8Array(this._webAudioAnalyser.frequencyBinCount);
            this._floatFreqs = new Float32Array(this._webAudioAnalyser.frequencyBinCount);
        }
    }
    /**
     * Get the number of data values you will have to play with for the visualization
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount
     * @returns a number
     */
    Analyser.prototype.getFrequencyBinCount = function () {
        if (this._audioEngine.canUseWebAudio) {
            return this._webAudioAnalyser.frequencyBinCount;
        }
        else {
            return 0;
        }
    };
    /**
     * Gets the current frequency data as a byte array
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData
     * @returns a Uint8Array
     */
    Analyser.prototype.getByteFrequencyData = function () {
        if (this._audioEngine.canUseWebAudio) {
            this._webAudioAnalyser.smoothingTimeConstant = this.SMOOTHING;
            this._webAudioAnalyser.fftSize = this.FFT_SIZE;
            this._webAudioAnalyser.getByteFrequencyData(this._byteFreqs);
        }
        return this._byteFreqs;
    };
    /**
     * Gets the current waveform as a byte array
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteTimeDomainData
     * @returns a Uint8Array
     */
    Analyser.prototype.getByteTimeDomainData = function () {
        if (this._audioEngine.canUseWebAudio) {
            this._webAudioAnalyser.smoothingTimeConstant = this.SMOOTHING;
            this._webAudioAnalyser.fftSize = this.FFT_SIZE;
            this._webAudioAnalyser.getByteTimeDomainData(this._byteTime);
        }
        return this._byteTime;
    };
    /**
     * Gets the current frequency data as a float array
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData
     * @returns a Float32Array
     */
    Analyser.prototype.getFloatFrequencyData = function () {
        if (this._audioEngine.canUseWebAudio) {
            this._webAudioAnalyser.smoothingTimeConstant = this.SMOOTHING;
            this._webAudioAnalyser.fftSize = this.FFT_SIZE;
            this._webAudioAnalyser.getFloatFrequencyData(this._floatFreqs);
        }
        return this._floatFreqs;
    };
    /**
     * Renders the debug canvas
     */
    Analyser.prototype.drawDebugCanvas = function () {
        var _this = this;
        if (this._audioEngine.canUseWebAudio) {
            if (!this._debugCanvas) {
                this._debugCanvas = document.createElement("canvas");
                this._debugCanvas.width = this.DEBUGCANVASSIZE.width;
                this._debugCanvas.height = this.DEBUGCANVASSIZE.height;
                this._debugCanvas.style.position = "absolute";
                this._debugCanvas.style.top = this.DEBUGCANVASPOS.y + "px";
                this._debugCanvas.style.left = this.DEBUGCANVASPOS.x + "px";
                this._debugCanvasContext = this._debugCanvas.getContext("2d");
                document.body.appendChild(this._debugCanvas);
                this._registerFunc = function () {
                    _this.drawDebugCanvas();
                };
                this._scene.registerBeforeRender(this._registerFunc);
            }
            if (this._registerFunc && this._debugCanvasContext) {
                var workingArray = this.getByteFrequencyData();
                this._debugCanvasContext.fillStyle = "rgb(0, 0, 0)";
                this._debugCanvasContext.fillRect(0, 0, this.DEBUGCANVASSIZE.width, this.DEBUGCANVASSIZE.height);
                // Draw the frequency domain chart.
                for (var i = 0; i < this.getFrequencyBinCount(); i++) {
                    var value = workingArray[i];
                    var percent = value / this.BARGRAPHAMPLITUDE;
                    var height = this.DEBUGCANVASSIZE.height * percent;
                    var offset = this.DEBUGCANVASSIZE.height - height - 1;
                    var barWidth = this.DEBUGCANVASSIZE.width / this.getFrequencyBinCount();
                    var hue = (i / this.getFrequencyBinCount()) * 360;
                    this._debugCanvasContext.fillStyle = "hsl(" + hue + ", 100%, 50%)";
                    this._debugCanvasContext.fillRect(i * barWidth, offset, barWidth, height);
                }
            }
        }
    };
    /**
     * Stops rendering the debug canvas and removes it
     */
    Analyser.prototype.stopDebugCanvas = function () {
        if (this._debugCanvas) {
            if (this._registerFunc) {
                this._scene.unregisterBeforeRender(this._registerFunc);
                this._registerFunc = null;
            }
            document.body.removeChild(this._debugCanvas);
            this._debugCanvas = null;
            this._debugCanvasContext = null;
        }
    };
    /**
     * Connects two audio nodes
     * @param inputAudioNode defines first node to connect
     * @param outputAudioNode defines second node to connect
     */
    Analyser.prototype.connectAudioNodes = function (inputAudioNode, outputAudioNode) {
        if (this._audioEngine.canUseWebAudio) {
            inputAudioNode.connect(this._webAudioAnalyser);
            this._webAudioAnalyser.connect(outputAudioNode);
        }
    };
    /**
     * Releases all associated resources
     */
    Analyser.prototype.dispose = function () {
        if (this._audioEngine.canUseWebAudio) {
            this._webAudioAnalyser.disconnect();
        }
    };
    return Analyser;
}());



/***/ }),

/***/ "../../../lts/core/dist/Audio/audioEngine.js":
/*!***************************************************!*\
  !*** ../../../lts/core/dist/Audio/audioEngine.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioEngine": () => (/* binding */ AudioEngine)
/* harmony export */ });
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/observable */ "../../../lts/core/dist/Misc/observable.js");
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc/logger */ "../../../lts/core/dist/Misc/logger.js");
/* harmony import */ var _Engines_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Engines/engine */ "../../../lts/core/dist/Engines/engine.js");
/* harmony import */ var _Misc_domManagement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Misc/domManagement */ "../../../lts/core/dist/Misc/domManagement.js");




// Sets the default audio engine to Babylon.js
_Engines_engine__WEBPACK_IMPORTED_MODULE_2__.Engine.AudioEngineFactory = function (hostElement, audioContext, audioDestination) {
    return new AudioEngine(hostElement, audioContext, audioDestination);
};
/**
 * This represents the default audio engine used in babylon.
 * It is responsible to play, synchronize and analyse sounds throughout the  application.
 * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music
 */
var AudioEngine = /** @class */ (function () {
    /**
     * Instantiates a new audio engine.
     *
     * There should be only one per page as some browsers restrict the number
     * of audio contexts you can create.
     * @param hostElement defines the host element where to display the mute icon if necessary
     * @param audioContext defines the audio context to be used by the audio engine
     * @param audioDestination defines the audio destination node to be used by audio engine
     */
    function AudioEngine(hostElement, audioContext, audioDestination) {
        if (hostElement === void 0) { hostElement = null; }
        if (audioContext === void 0) { audioContext = null; }
        if (audioDestination === void 0) { audioDestination = null; }
        var _this = this;
        this._audioContext = null;
        this._audioContextInitialized = false;
        this._muteButton = null;
        this._audioDestination = null;
        /**
         * Gets whether the current host supports Web Audio and thus could create AudioContexts.
         */
        this.canUseWebAudio = false;
        /**
         * Defines if Babylon should emit a warning if WebAudio is not supported.
         * @ignoreNaming
         */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.WarnedWebAudioUnsupported = false;
        /**
         * Gets whether or not mp3 are supported by your browser.
         */
        this.isMP3supported = false;
        /**
         * Gets whether or not ogg are supported by your browser.
         */
        this.isOGGsupported = false;
        /**
         * Gets whether audio has been unlocked on the device.
         * Some Browsers have strong restrictions about Audio and won t autoplay unless
         * a user interaction has happened.
         */
        this.unlocked = true;
        /**
         * Defines if the audio engine relies on a custom unlocked button.
         * In this case, the embedded button will not be displayed.
         */
        this.useCustomUnlockedButton = false;
        /**
         * Event raised when audio has been unlocked on the browser.
         */
        this.onAudioUnlockedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Event raised when audio has been locked on the browser.
         */
        this.onAudioLockedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._tryToRun = false;
        this._onResize = function () {
            _this._moveButtonToTopLeft();
        };
        if (!(0,_Misc_domManagement__WEBPACK_IMPORTED_MODULE_3__.IsWindowObjectExist)()) {
            return;
        }
        if (typeof window.AudioContext !== "undefined" || typeof window.webkitAudioContext !== "undefined") {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.canUseWebAudio = true;
        }
        var audioElem = document.createElement("audio");
        this._hostElement = hostElement;
        this._audioContext = audioContext;
        this._audioDestination = audioDestination;
        try {
            if (audioElem &&
                !!audioElem.canPlayType &&
                (audioElem.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, "") || audioElem.canPlayType("audio/mp3").replace(/^no$/, ""))) {
                this.isMP3supported = true;
            }
        }
        catch (e) {
            // protect error during capability check.
        }
        try {
            if (audioElem && !!audioElem.canPlayType && audioElem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "")) {
                this.isOGGsupported = true;
            }
        }
        catch (e) {
            // protect error during capability check.
        }
    }
    Object.defineProperty(AudioEngine.prototype, "audioContext", {
        /**
         * Gets the current AudioContext if available.
         */
        get: function () {
            if (!this._audioContextInitialized) {
                this._initializeAudioContext();
            }
            else {
                if (!this.unlocked && !this._muteButton) {
                    this._displayMuteButton();
                }
            }
            return this._audioContext;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Flags the audio engine in Locked state.
     * This happens due to new browser policies preventing audio to autoplay.
     */
    AudioEngine.prototype.lock = function () {
        this._triggerSuspendedState();
    };
    /**
     * Unlocks the audio engine once a user action has been done on the dom.
     * This is helpful to resume play once browser policies have been satisfied.
     */
    AudioEngine.prototype.unlock = function () {
        this._triggerRunningState();
    };
    AudioEngine.prototype._resumeAudioContext = function () {
        var result;
        if (this._audioContext.resume !== undefined) {
            result = this._audioContext.resume();
        }
        return result || Promise.resolve();
    };
    AudioEngine.prototype._initializeAudioContext = function () {
        try {
            if (this.canUseWebAudio) {
                if (!this._audioContext) {
                    this._audioContext = new AudioContext();
                }
                // create a global volume gain node
                this.masterGain = this._audioContext.createGain();
                this.masterGain.gain.value = 1;
                if (!this._audioDestination) {
                    this._audioDestination = this._audioContext.destination;
                }
                this.masterGain.connect(this._audioDestination);
                this._audioContextInitialized = true;
                if (this._audioContext.state === "running") {
                    // Do not wait for the promise to unlock.
                    this._triggerRunningState();
                }
            }
        }
        catch (e) {
            this.canUseWebAudio = false;
            _Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error("Web Audio: " + e.message);
        }
    };
    AudioEngine.prototype._triggerRunningState = function () {
        var _this = this;
        if (this._tryToRun) {
            return;
        }
        this._tryToRun = true;
        this._resumeAudioContext()
            .then(function () {
            _this._tryToRun = false;
            if (_this._muteButton) {
                _this._hideMuteButton();
            }
            // Notify users that the audio stack is unlocked/unmuted
            _this.unlocked = true;
            _this.onAudioUnlockedObservable.notifyObservers(_this);
        })
            .catch(function () {
            _this._tryToRun = false;
            _this.unlocked = false;
        });
    };
    AudioEngine.prototype._triggerSuspendedState = function () {
        this.unlocked = false;
        this.onAudioLockedObservable.notifyObservers(this);
        this._displayMuteButton();
    };
    AudioEngine.prototype._displayMuteButton = function () {
        var _this = this;
        if (this.useCustomUnlockedButton || this._muteButton) {
            return;
        }
        this._muteButton = document.createElement("BUTTON");
        this._muteButton.className = "babylonUnmuteIcon";
        this._muteButton.id = "babylonUnmuteIconBtn";
        this._muteButton.title = "Unmute";
        var imageUrl = !window.SVGSVGElement
            ? "https://cdn.babylonjs.com/Assets/audio.png"
            : "data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2239%22%20height%3D%2232%22%20viewBox%3D%220%200%2039%2032%22%3E%3Cpath%20fill%3D%22white%22%20d%3D%22M9.625%2018.938l-0.031%200.016h-4.953q-0.016%200-0.031-0.016v-12.453q0-0.016%200.031-0.016h4.953q0.031%200%200.031%200.016v12.453zM12.125%207.688l8.719-8.703v27.453l-8.719-8.719-0.016-0.047v-9.938zM23.359%207.875l1.406-1.406%204.219%204.203%204.203-4.203%201.422%201.406-4.219%204.219%204.219%204.203-1.484%201.359-4.141-4.156-4.219%204.219-1.406-1.422%204.219-4.203z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";
        var css = ".babylonUnmuteIcon { position: absolute; left: 20px; top: 20px; height: 40px; width: 60px; background-color: rgba(51,51,51,0.7); background-image: url(" +
            imageUrl +
            ");  background-size: 80%; background-repeat:no-repeat; background-position: center; background-position-y: 4px; border: none; outline: none; transition: transform 0.125s ease-out; cursor: pointer; z-index: 9999; } .babylonUnmuteIcon:hover { transform: scale(1.05) } .babylonUnmuteIcon:active { background-color: rgba(51,51,51,1) }";
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(css));
        document.getElementsByTagName("head")[0].appendChild(style);
        document.body.appendChild(this._muteButton);
        this._moveButtonToTopLeft();
        this._muteButton.addEventListener("touchend", function () {
            _this._triggerRunningState();
        }, true);
        this._muteButton.addEventListener("click", function () {
            _this._triggerRunningState();
        }, true);
        window.addEventListener("resize", this._onResize);
    };
    AudioEngine.prototype._moveButtonToTopLeft = function () {
        if (this._hostElement && this._muteButton) {
            this._muteButton.style.top = this._hostElement.offsetTop + 20 + "px";
            this._muteButton.style.left = this._hostElement.offsetLeft + 20 + "px";
        }
    };
    AudioEngine.prototype._hideMuteButton = function () {
        if (this._muteButton) {
            document.body.removeChild(this._muteButton);
            this._muteButton = null;
        }
    };
    /**
     * Destroy and release the resources associated with the audio context.
     */
    AudioEngine.prototype.dispose = function () {
        if (this.canUseWebAudio && this._audioContextInitialized) {
            if (this._connectedAnalyser && this._audioContext) {
                this._connectedAnalyser.stopDebugCanvas();
                this._connectedAnalyser.dispose();
                this.masterGain.disconnect();
                this.masterGain.connect(this._audioContext.destination);
                this._connectedAnalyser = null;
            }
            this.masterGain.gain.value = 1;
        }
        this.WarnedWebAudioUnsupported = false;
        this._hideMuteButton();
        window.removeEventListener("resize", this._onResize);
        this.onAudioUnlockedObservable.clear();
        this.onAudioLockedObservable.clear();
    };
    /**
     * Gets the global volume sets on the master gain.
     * @returns the global volume if set or -1 otherwise
     */
    AudioEngine.prototype.getGlobalVolume = function () {
        if (this.canUseWebAudio && this._audioContextInitialized) {
            return this.masterGain.gain.value;
        }
        else {
            return -1;
        }
    };
    /**
     * Sets the global volume of your experience (sets on the master gain).
     * @param newVolume Defines the new global volume of the application
     */
    AudioEngine.prototype.setGlobalVolume = function (newVolume) {
        if (this.canUseWebAudio && this._audioContextInitialized) {
            this.masterGain.gain.value = newVolume;
        }
    };
    /**
     * Connect the audio engine to an audio analyser allowing some amazing
     * synchronization between the sounds/music and your visualization (VuMeter for instance).
     * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#using-the-analyser
     * @param analyser The analyser to connect to the engine
     */
    AudioEngine.prototype.connectToAnalyser = function (analyser) {
        if (this._connectedAnalyser) {
            this._connectedAnalyser.stopDebugCanvas();
        }
        if (this.canUseWebAudio && this._audioContextInitialized && this._audioContext) {
            this._connectedAnalyser = analyser;
            this.masterGain.disconnect();
            this._connectedAnalyser.connectAudioNodes(this.masterGain, this._audioContext.destination);
        }
    };
    return AudioEngine;
}());



/***/ }),

/***/ "../../../lts/core/dist/Audio/audioSceneComponent.js":
/*!***********************************************************!*\
  !*** ../../../lts/core/dist/Audio/audioSceneComponent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioSceneComponent": () => (/* binding */ AudioSceneComponent)
/* harmony export */ });
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound */ "../../../lts/core/dist/Audio/sound.js");
/* harmony import */ var _soundTrack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soundTrack */ "../../../lts/core/dist/Audio/soundTrack.js");
/* harmony import */ var _Engines_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Engines/engine */ "../../../lts/core/dist/Engines/engine.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _sceneComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sceneComponent */ "../../../lts/core/dist/sceneComponent.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scene */ "../../../lts/core/dist/scene.js");
/* harmony import */ var _abstractScene__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abstractScene */ "../../../lts/core/dist/abstractScene.js");
/* harmony import */ var _audioEngine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audioEngine */ "../../../lts/core/dist/Audio/audioEngine.js");
/* harmony import */ var _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Misc/precisionDate */ "../../../lts/core/dist/Misc/precisionDate.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Engines/engineStore */ "../../../lts/core/dist/Engines/engineStore.js");










// Adds the parser to the scene parsers.
_abstractScene__WEBPACK_IMPORTED_MODULE_6__.AbstractScene.AddParser(_sceneComponent__WEBPACK_IMPORTED_MODULE_4__.SceneComponentConstants.NAME_AUDIO, function (parsedData, scene, container, rootUrl) {
    var _a;
    // TODO: add sound
    var loadedSounds = [];
    var loadedSound;
    container.sounds = container.sounds || [];
    if (parsedData.sounds !== undefined && parsedData.sounds !== null) {
        for (var index = 0, cache = parsedData.sounds.length; index < cache; index++) {
            var parsedSound = parsedData.sounds[index];
            if ((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_2__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) {
                if (!parsedSound.url) {
                    parsedSound.url = parsedSound.name;
                }
                if (!loadedSounds[parsedSound.url]) {
                    loadedSound = _sound__WEBPACK_IMPORTED_MODULE_0__.Sound.Parse(parsedSound, scene, rootUrl);
                    loadedSounds[parsedSound.url] = loadedSound;
                    container.sounds.push(loadedSound);
                }
                else {
                    container.sounds.push(_sound__WEBPACK_IMPORTED_MODULE_0__.Sound.Parse(parsedSound, scene, rootUrl, loadedSounds[parsedSound.url]));
                }
            }
            else {
                container.sounds.push(new _sound__WEBPACK_IMPORTED_MODULE_0__.Sound(parsedSound.name, null, scene));
            }
        }
    }
    loadedSounds = [];
});
Object.defineProperty(_scene__WEBPACK_IMPORTED_MODULE_5__.Scene.prototype, "mainSoundTrack", {
    get: function () {
        var compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_4__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        if (!this._mainSoundTrack) {
            this._mainSoundTrack = new _soundTrack__WEBPACK_IMPORTED_MODULE_1__.SoundTrack(this, { mainTrack: true });
        }
        return this._mainSoundTrack;
    },
    enumerable: true,
    configurable: true,
});
_scene__WEBPACK_IMPORTED_MODULE_5__.Scene.prototype.getSoundByName = function (name) {
    var index;
    for (index = 0; index < this.mainSoundTrack.soundCollection.length; index++) {
        if (this.mainSoundTrack.soundCollection[index].name === name) {
            return this.mainSoundTrack.soundCollection[index];
        }
    }
    if (this.soundTracks) {
        for (var sdIndex = 0; sdIndex < this.soundTracks.length; sdIndex++) {
            for (index = 0; index < this.soundTracks[sdIndex].soundCollection.length; index++) {
                if (this.soundTracks[sdIndex].soundCollection[index].name === name) {
                    return this.soundTracks[sdIndex].soundCollection[index];
                }
            }
        }
    }
    return null;
};
Object.defineProperty(_scene__WEBPACK_IMPORTED_MODULE_5__.Scene.prototype, "audioEnabled", {
    get: function () {
        var compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_4__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        return compo.audioEnabled;
    },
    set: function (value) {
        var compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_4__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        if (value) {
            compo.enableAudio();
        }
        else {
            compo.disableAudio();
        }
    },
    enumerable: true,
    configurable: true,
});
Object.defineProperty(_scene__WEBPACK_IMPORTED_MODULE_5__.Scene.prototype, "headphone", {
    get: function () {
        var compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_4__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        return compo.headphone;
    },
    set: function (value) {
        var compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_4__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        if (value) {
            compo.switchAudioModeForHeadphones();
        }
        else {
            compo.switchAudioModeForNormalSpeakers();
        }
    },
    enumerable: true,
    configurable: true,
});
Object.defineProperty(_scene__WEBPACK_IMPORTED_MODULE_5__.Scene.prototype, "audioListenerPositionProvider", {
    get: function () {
        var compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_4__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        return compo.audioListenerPositionProvider;
    },
    set: function (value) {
        var compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_4__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        if (typeof value !== "function") {
            throw new Error("The value passed to [Scene.audioListenerPositionProvider] must be a function that returns a Vector3");
        }
        else {
            compo.audioListenerPositionProvider = value;
        }
    },
    enumerable: true,
    configurable: true,
});
Object.defineProperty(_scene__WEBPACK_IMPORTED_MODULE_5__.Scene.prototype, "audioPositioningRefreshRate", {
    get: function () {
        var compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_4__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        return compo.audioPositioningRefreshRate;
    },
    set: function (value) {
        var compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_4__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        compo.audioPositioningRefreshRate = value;
    },
    enumerable: true,
    configurable: true,
});
/**
 * Defines the sound scene component responsible to manage any sounds
 * in a given scene.
 */
var AudioSceneComponent = /** @class */ (function () {
    /**
     * Creates a new instance of the component for the given scene
     * @param scene Defines the scene to register the component in
     */
    function AudioSceneComponent(scene) {
        /**
         * The component name helpful to identify the component in the list of scene components.
         */
        this.name = _sceneComponent__WEBPACK_IMPORTED_MODULE_4__.SceneComponentConstants.NAME_AUDIO;
        this._audioEnabled = true;
        this._headphone = false;
        /**
         * Gets or sets a refresh rate when using 3D audio positioning
         */
        this.audioPositioningRefreshRate = 500;
        this._audioListenerPositionProvider = null;
        this._cachedCameraDirection = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3();
        this._cachedCameraPosition = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3();
        this._lastCheck = 0;
        this._invertMatrixTemp = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Matrix();
        this._cameraDirectionTemp = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3();
        scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_9__.EngineStore.LastCreatedScene;
        if (!scene) {
            return;
        }
        this.scene = scene;
        scene.soundTracks = new Array();
        scene.sounds = new Array();
    }
    Object.defineProperty(AudioSceneComponent.prototype, "audioEnabled", {
        /**
         * Gets whether audio is enabled or not.
         * Please use related enable/disable method to switch state.
         */
        get: function () {
            return this._audioEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioSceneComponent.prototype, "headphone", {
        /**
         * Gets whether audio is outputting to headphone or not.
         * Please use the according Switch methods to change output.
         */
        get: function () {
            return this._headphone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioSceneComponent.prototype, "audioListenerPositionProvider", {
        /**
         * Gets the current audio listener position provider
         */
        get: function () {
            return this._audioListenerPositionProvider;
        },
        /**
         * Sets a custom listener position for all sounds in the scene
         * By default, this is the position of the first active camera
         */
        set: function (value) {
            this._audioListenerPositionProvider = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Registers the component in a given scene
     */
    AudioSceneComponent.prototype.register = function () {
        this.scene._afterRenderStage.registerStep(_sceneComponent__WEBPACK_IMPORTED_MODULE_4__.SceneComponentConstants.STEP_AFTERRENDER_AUDIO, this, this._afterRender);
    };
    /**
     * Rebuilds the elements related to this component in case of
     * context lost for instance.
     */
    AudioSceneComponent.prototype.rebuild = function () {
        // Nothing to do here. (Not rendering related)
    };
    /**
     * Serializes the component data to the specified json object
     * @param serializationObject The object to serialize to
     */
    AudioSceneComponent.prototype.serialize = function (serializationObject) {
        serializationObject.sounds = [];
        if (this.scene.soundTracks) {
            for (var index = 0; index < this.scene.soundTracks.length; index++) {
                var soundtrack = this.scene.soundTracks[index];
                for (var soundId = 0; soundId < soundtrack.soundCollection.length; soundId++) {
                    serializationObject.sounds.push(soundtrack.soundCollection[soundId].serialize());
                }
            }
        }
    };
    /**
     * Adds all the elements from the container to the scene
     * @param container the container holding the elements
     */
    AudioSceneComponent.prototype.addFromContainer = function (container) {
        var _this = this;
        if (!container.sounds) {
            return;
        }
        container.sounds.forEach(function (sound) {
            sound.play();
            sound.autoplay = true;
            _this.scene.mainSoundTrack.addSound(sound);
        });
    };
    /**
     * Removes all the elements in the container from the scene
     * @param container contains the elements to remove
     * @param dispose if the removed element should be disposed (default: false)
     */
    AudioSceneComponent.prototype.removeFromContainer = function (container, dispose) {
        var _this = this;
        if (dispose === void 0) { dispose = false; }
        if (!container.sounds) {
            return;
        }
        container.sounds.forEach(function (sound) {
            sound.stop();
            sound.autoplay = false;
            _this.scene.mainSoundTrack.removeSound(sound);
            if (dispose) {
                sound.dispose();
            }
        });
    };
    /**
     * Disposes the component and the associated resources.
     */
    AudioSceneComponent.prototype.dispose = function () {
        var scene = this.scene;
        if (scene._mainSoundTrack) {
            scene.mainSoundTrack.dispose();
        }
        if (scene.soundTracks) {
            for (var scIndex = 0; scIndex < scene.soundTracks.length; scIndex++) {
                scene.soundTracks[scIndex].dispose();
            }
        }
    };
    /**
     * Disables audio in the associated scene.
     */
    AudioSceneComponent.prototype.disableAudio = function () {
        var scene = this.scene;
        this._audioEnabled = false;
        if (_Engines_engine__WEBPACK_IMPORTED_MODULE_2__.Engine.audioEngine && _Engines_engine__WEBPACK_IMPORTED_MODULE_2__.Engine.audioEngine.audioContext) {
            _Engines_engine__WEBPACK_IMPORTED_MODULE_2__.Engine.audioEngine.audioContext.suspend();
        }
        var i;
        for (i = 0; i < scene.mainSoundTrack.soundCollection.length; i++) {
            scene.mainSoundTrack.soundCollection[i].pause();
        }
        if (scene.soundTracks) {
            for (i = 0; i < scene.soundTracks.length; i++) {
                for (var j = 0; j < scene.soundTracks[i].soundCollection.length; j++) {
                    scene.soundTracks[i].soundCollection[j].pause();
                }
            }
        }
    };
    /**
     * Enables audio in the associated scene.
     */
    AudioSceneComponent.prototype.enableAudio = function () {
        var scene = this.scene;
        this._audioEnabled = true;
        if (_Engines_engine__WEBPACK_IMPORTED_MODULE_2__.Engine.audioEngine && _Engines_engine__WEBPACK_IMPORTED_MODULE_2__.Engine.audioEngine.audioContext) {
            _Engines_engine__WEBPACK_IMPORTED_MODULE_2__.Engine.audioEngine.audioContext.resume();
        }
        var i;
        for (i = 0; i < scene.mainSoundTrack.soundCollection.length; i++) {
            if (scene.mainSoundTrack.soundCollection[i].isPaused) {
                scene.mainSoundTrack.soundCollection[i].play();
            }
        }
        if (scene.soundTracks) {
            for (i = 0; i < scene.soundTracks.length; i++) {
                for (var j = 0; j < scene.soundTracks[i].soundCollection.length; j++) {
                    if (scene.soundTracks[i].soundCollection[j].isPaused) {
                        scene.soundTracks[i].soundCollection[j].play();
                    }
                }
            }
        }
    };
    /**
     * Switch audio to headphone output.
     */
    AudioSceneComponent.prototype.switchAudioModeForHeadphones = function () {
        var scene = this.scene;
        this._headphone = true;
        scene.mainSoundTrack.switchPanningModelToHRTF();
        if (scene.soundTracks) {
            for (var i = 0; i < scene.soundTracks.length; i++) {
                scene.soundTracks[i].switchPanningModelToHRTF();
            }
        }
    };
    /**
     * Switch audio to normal speakers.
     */
    AudioSceneComponent.prototype.switchAudioModeForNormalSpeakers = function () {
        var scene = this.scene;
        this._headphone = false;
        scene.mainSoundTrack.switchPanningModelToEqualPower();
        if (scene.soundTracks) {
            for (var i = 0; i < scene.soundTracks.length; i++) {
                scene.soundTracks[i].switchPanningModelToEqualPower();
            }
        }
    };
    AudioSceneComponent.prototype._afterRender = function () {
        var now = _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_8__.PrecisionDate.Now;
        if (this._lastCheck && now - this._lastCheck < this.audioPositioningRefreshRate) {
            return;
        }
        this._lastCheck = now;
        var scene = this.scene;
        if (!this._audioEnabled || !scene._mainSoundTrack || !scene.soundTracks || (scene._mainSoundTrack.soundCollection.length === 0 && scene.soundTracks.length === 1)) {
            return;
        }
        var audioEngine = _Engines_engine__WEBPACK_IMPORTED_MODULE_2__.Engine.audioEngine;
        if (!audioEngine) {
            return;
        }
        if (audioEngine.audioContext) {
            // A custom listener position provider was set
            // Use the users provided position instead of camera's
            if (this._audioListenerPositionProvider) {
                var position = this._audioListenerPositionProvider();
                // Make sure all coordinates were provided
                position.x = position.x || 0;
                position.y = position.y || 0;
                position.z = position.z || 0;
                // Set the listener position
                audioEngine.audioContext.listener.setPosition(position.x, position.y, position.z);
            }
            else {
                var listeningCamera = void 0;
                if (scene.activeCameras && scene.activeCameras.length > 0) {
                    listeningCamera = scene.activeCameras[0];
                }
                else {
                    listeningCamera = scene.activeCamera;
                }
                // Check if there is a listening camera
                if (listeningCamera) {
                    // Set the listener position to the listening camera global position
                    if (!this._cachedCameraPosition.equals(listeningCamera.globalPosition)) {
                        this._cachedCameraPosition.copyFrom(listeningCamera.globalPosition);
                        audioEngine.audioContext.listener.setPosition(listeningCamera.globalPosition.x, listeningCamera.globalPosition.y, listeningCamera.globalPosition.z);
                    }
                    // for VR cameras
                    if (listeningCamera.rigCameras && listeningCamera.rigCameras.length > 0) {
                        listeningCamera = listeningCamera.rigCameras[0];
                    }
                    listeningCamera.getViewMatrix().invertToRef(this._invertMatrixTemp);
                    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.TransformNormalToRef(AudioSceneComponent._CameraDirection, this._invertMatrixTemp, this._cameraDirectionTemp);
                    this._cameraDirectionTemp.normalize();
                    // To avoid some errors on GearVR
                    if (!isNaN(this._cameraDirectionTemp.x) && !isNaN(this._cameraDirectionTemp.y) && !isNaN(this._cameraDirectionTemp.z)) {
                        if (!this._cachedCameraDirection.equals(this._cameraDirectionTemp)) {
                            this._cachedCameraDirection.copyFrom(this._cameraDirectionTemp);
                            audioEngine.audioContext.listener.setOrientation(this._cameraDirectionTemp.x, this._cameraDirectionTemp.y, this._cameraDirectionTemp.z, 0, 1, 0);
                        }
                    }
                }
                // Otherwise set the listener position to 0, 0 ,0
                else {
                    // Set the listener position
                    audioEngine.audioContext.listener.setPosition(0, 0, 0);
                }
            }
            var i = void 0;
            for (i = 0; i < scene.mainSoundTrack.soundCollection.length; i++) {
                var sound = scene.mainSoundTrack.soundCollection[i];
                if (sound.useCustomAttenuation) {
                    sound.updateDistanceFromListener();
                }
            }
            if (scene.soundTracks) {
                for (i = 0; i < scene.soundTracks.length; i++) {
                    for (var j = 0; j < scene.soundTracks[i].soundCollection.length; j++) {
                        var sound = scene.soundTracks[i].soundCollection[j];
                        if (sound.useCustomAttenuation) {
                            sound.updateDistanceFromListener();
                        }
                    }
                }
            }
        }
    };
    AudioSceneComponent._CameraDirection = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, -1);
    return AudioSceneComponent;
}());

_sound__WEBPACK_IMPORTED_MODULE_0__.Sound._SceneComponentInitialization = function (scene) {
    var compo = scene._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_4__.SceneComponentConstants.NAME_AUDIO);
    if (!compo) {
        compo = new AudioSceneComponent(scene);
        scene._addComponent(compo);
    }
};


/***/ }),

/***/ "../../../lts/core/dist/Audio/index.js":
/*!*********************************************!*\
  !*** ../../../lts/core/dist/Audio/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Analyser": () => (/* reexport safe */ _analyser__WEBPACK_IMPORTED_MODULE_2__.Analyser),
/* harmony export */   "AudioEngine": () => (/* reexport safe */ _audioEngine__WEBPACK_IMPORTED_MODULE_3__.AudioEngine),
/* harmony export */   "AudioSceneComponent": () => (/* reexport safe */ _audioSceneComponent__WEBPACK_IMPORTED_MODULE_4__.AudioSceneComponent),
/* harmony export */   "Sound": () => (/* reexport safe */ _sound__WEBPACK_IMPORTED_MODULE_5__.Sound),
/* harmony export */   "SoundTrack": () => (/* reexport safe */ _soundTrack__WEBPACK_IMPORTED_MODULE_6__.SoundTrack),
/* harmony export */   "WeightedSound": () => (/* reexport safe */ _weightedsound__WEBPACK_IMPORTED_MODULE_7__.WeightedSound)
/* harmony export */ });
/* harmony import */ var _Interfaces_IAudioEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Interfaces/IAudioEngine */ "../../../lts/core/dist/Audio/Interfaces/IAudioEngine.js");
/* harmony import */ var _Interfaces_ISoundOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Interfaces/ISoundOptions */ "../../../lts/core/dist/Audio/Interfaces/ISoundOptions.js");
/* harmony import */ var _analyser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analyser */ "../../../lts/core/dist/Audio/analyser.js");
/* harmony import */ var _audioEngine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audioEngine */ "../../../lts/core/dist/Audio/audioEngine.js");
/* harmony import */ var _audioSceneComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audioSceneComponent */ "../../../lts/core/dist/Audio/audioSceneComponent.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sound */ "../../../lts/core/dist/Audio/sound.js");
/* harmony import */ var _soundTrack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soundTrack */ "../../../lts/core/dist/Audio/soundTrack.js");
/* harmony import */ var _weightedsound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weightedsound */ "../../../lts/core/dist/Audio/weightedsound.js");










/***/ }),

/***/ "../../../lts/core/dist/Audio/sound.js":
/*!*********************************************!*\
  !*** ../../../lts/core/dist/Audio/sound.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sound": () => (/* binding */ Sound)
/* harmony export */ });
/* harmony import */ var _Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/tools */ "../../../lts/core/dist/Misc/tools.js");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc/observable */ "../../../lts/core/dist/Misc/observable.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Engines_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Engines/engine */ "../../../lts/core/dist/Engines/engine.js");
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Misc/logger */ "../../../lts/core/dist/Misc/logger.js");
/* harmony import */ var _Misc_devTools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Misc/devTools */ "../../../lts/core/dist/Misc/devTools.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Engines/engineStore */ "../../../lts/core/dist/Engines/engineStore.js");







/**
 * Defines a sound that can be played in the application.
 * The sound can either be an ambient track or a simple sound played in reaction to a user action.
 * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music
 */
var Sound = /** @class */ (function () {
    /**
     * Create a sound and attach it to a scene
     * @param name Name of your sound
     * @param urlOrArrayBuffer Url to the sound to load async or ArrayBuffer, it also works with MediaStreams
     * @param scene defines the scene the sound belongs to
     * @param readyToPlayCallback Provide a callback function if you'd like to load your code once the sound is ready to be played
     * @param options Objects to provide with the current available options: autoplay, loop, volume, spatialSound, maxDistance, rolloffFactor, refDistance, distanceModel, panningModel, streaming
     */
    function Sound(name, urlOrArrayBuffer, scene, readyToPlayCallback, options) {
        if (readyToPlayCallback === void 0) { readyToPlayCallback = null; }
        var _this = this;
        var _a, _b, _c, _d, _e;
        /**
         * Does the sound autoplay once loaded.
         */
        this.autoplay = false;
        this._loop = false;
        /**
         * Does the sound use a custom attenuation curve to simulate the falloff
         * happening when the source gets further away from the camera.
         * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#creating-your-own-custom-attenuation-function
         */
        this.useCustomAttenuation = false;
        /**
         * Is this sound currently played.
         */
        this.isPlaying = false;
        /**
         * Is this sound currently paused.
         */
        this.isPaused = false;
        /**
         * Define the reference distance the sound should be heard perfectly.
         * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#creating-a-spatial-3d-sound
         */
        this.refDistance = 1;
        /**
         * Define the roll off factor of spatial sounds.
         * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#creating-a-spatial-3d-sound
         */
        this.rolloffFactor = 1;
        /**
         * Define the max distance the sound should be heard (intensity just became 0 at this point).
         * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#creating-a-spatial-3d-sound
         */
        this.maxDistance = 100;
        /**
         * Define the distance attenuation model the sound will follow.
         * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#creating-a-spatial-3d-sound
         */
        this.distanceModel = "linear";
        /**
         * Gets or sets an object used to store user defined information for the sound.
         */
        this.metadata = null;
        /**
         * Observable event when the current playing sound finishes.
         */
        this.onEndedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        this._spatialSound = false;
        this._panningModel = "equalpower";
        this._playbackRate = 1;
        this._streaming = false;
        this._startTime = 0;
        this._startOffset = 0;
        this._position = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.Zero();
        this._localDirection = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(1, 0, 0);
        this._volume = 1;
        this._isReadyToPlay = false;
        this._isDirectional = false;
        // Used if you'd like to create a directional sound.
        // If not set, the sound will be omnidirectional
        this._coneInnerAngle = 360;
        this._coneOuterAngle = 360;
        this._coneOuterGain = 0;
        this._isOutputConnected = false;
        this._urlType = "Unknown";
        this.name = name;
        scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_6__.EngineStore.LastCreatedScene;
        if (!scene) {
            return;
        }
        this._scene = scene;
        Sound._SceneComponentInitialization(scene);
        this._readyToPlayCallback = readyToPlayCallback;
        // Default custom attenuation function is a linear attenuation
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._customAttenuationFunction = function (currentVolume, currentDistance, maxDistance, refDistance, rolloffFactor) {
            if (currentDistance < maxDistance) {
                return currentVolume * (1 - currentDistance / maxDistance);
            }
            else {
                return 0;
            }
        };
        if (options) {
            this.autoplay = options.autoplay || false;
            this._loop = options.loop || false;
            // if volume === 0, we need another way to check this option
            if (options.volume !== undefined) {
                this._volume = options.volume;
            }
            this._spatialSound = (_a = options.spatialSound) !== null && _a !== void 0 ? _a : false;
            this.maxDistance = (_b = options.maxDistance) !== null && _b !== void 0 ? _b : 100;
            this.useCustomAttenuation = (_c = options.useCustomAttenuation) !== null && _c !== void 0 ? _c : false;
            this.rolloffFactor = options.rolloffFactor || 1;
            this.refDistance = options.refDistance || 1;
            this.distanceModel = options.distanceModel || "linear";
            this._playbackRate = options.playbackRate || 1;
            this._streaming = (_d = options.streaming) !== null && _d !== void 0 ? _d : false;
            this._length = options.length;
            this._offset = options.offset;
        }
        if (((_e = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _e === void 0 ? void 0 : _e.canUseWebAudio) && _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext) {
            this._soundGain = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext.createGain();
            this._soundGain.gain.value = this._volume;
            this._inputAudioNode = this._soundGain;
            this._outputAudioNode = this._soundGain;
            if (this._spatialSound) {
                this._createSpatialParameters();
            }
            this._scene.mainSoundTrack.addSound(this);
            var validParameter = true;
            // if no parameter is passed, you need to call setAudioBuffer yourself to prepare the sound
            if (urlOrArrayBuffer) {
                try {
                    if (typeof urlOrArrayBuffer === "string") {
                        this._urlType = "String";
                    }
                    else if (urlOrArrayBuffer instanceof ArrayBuffer) {
                        this._urlType = "ArrayBuffer";
                    }
                    else if (urlOrArrayBuffer instanceof HTMLMediaElement) {
                        this._urlType = "MediaElement";
                    }
                    else if (urlOrArrayBuffer instanceof MediaStream) {
                        this._urlType = "MediaStream";
                    }
                    else if (Array.isArray(urlOrArrayBuffer)) {
                        this._urlType = "Array";
                    }
                    var urls = [];
                    var codecSupportedFound = false;
                    switch (this._urlType) {
                        case "MediaElement":
                            this._streaming = true;
                            this._isReadyToPlay = true;
                            this._streamingSource = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext.createMediaElementSource(urlOrArrayBuffer);
                            if (this.autoplay) {
                                this.play(0, this._offset, this._length);
                            }
                            if (this._readyToPlayCallback) {
                                this._readyToPlayCallback();
                            }
                            break;
                        case "MediaStream":
                            this._streaming = true;
                            this._isReadyToPlay = true;
                            this._streamingSource = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext.createMediaStreamSource(urlOrArrayBuffer);
                            if (this.autoplay) {
                                this.play(0, this._offset, this._length);
                            }
                            if (this._readyToPlayCallback) {
                                this._readyToPlayCallback();
                            }
                            break;
                        case "ArrayBuffer":
                            if (urlOrArrayBuffer.byteLength > 0) {
                                codecSupportedFound = true;
                                this._soundLoaded(urlOrArrayBuffer);
                            }
                            break;
                        case "String":
                            urls.push(urlOrArrayBuffer);
                        // eslint-disable-next-line no-fallthrough
                        case "Array":
                            if (urls.length === 0) {
                                urls = urlOrArrayBuffer;
                            }
                            var _loop_1 = function (i) {
                                var url = urls[i];
                                codecSupportedFound =
                                    (options && options.skipCodecCheck) ||
                                        (url.indexOf(".mp3", url.length - 4) !== -1 && _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.isMP3supported) ||
                                        (url.indexOf(".ogg", url.length - 4) !== -1 && _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.isOGGsupported) ||
                                        url.indexOf(".wav", url.length - 4) !== -1 ||
                                        url.indexOf(".m4a", url.length - 4) !== -1 ||
                                        url.indexOf(".mp4", url.length - 4) !== -1 ||
                                        url.indexOf("blob:") !== -1;
                                if (codecSupportedFound) {
                                    // Loading sound
                                    if (!this_1._streaming) {
                                        this_1._scene._loadFile(url, function (data) {
                                            _this._soundLoaded(data);
                                        }, undefined, true, true, function (exception) {
                                            if (exception) {
                                                _Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Error("XHR " + exception.status + " error on: " + url + ".");
                                            }
                                            _Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Error("Sound creation aborted.");
                                            _this._scene.mainSoundTrack.removeSound(_this);
                                        });
                                    }
                                    // Streaming sound using HTML5 Audio tag
                                    else {
                                        this_1._htmlAudioElement = new Audio(url);
                                        this_1._htmlAudioElement.controls = false;
                                        this_1._htmlAudioElement.loop = this_1.loop;
                                        _Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.SetCorsBehavior(url, this_1._htmlAudioElement);
                                        this_1._htmlAudioElement.preload = "auto";
                                        this_1._htmlAudioElement.addEventListener("canplaythrough", function () {
                                            _this._isReadyToPlay = true;
                                            if (_this.autoplay) {
                                                _this.play(0, _this._offset, _this._length);
                                            }
                                            if (_this._readyToPlayCallback) {
                                                _this._readyToPlayCallback();
                                            }
                                        });
                                        document.body.appendChild(this_1._htmlAudioElement);
                                        this_1._htmlAudioElement.load();
                                    }
                                    return "break";
                                }
                            };
                            var this_1 = this;
                            // If we found a supported format, we load it immediately and stop the loop
                            for (var i = 0; i < urls.length; i++) {
                                var state_1 = _loop_1(i);
                                if (state_1 === "break")
                                    break;
                            }
                            break;
                        default:
                            validParameter = false;
                            break;
                    }
                    if (!validParameter) {
                        _Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Error("Parameter must be a URL to the sound, an Array of URLs (.mp3 & .ogg) or an ArrayBuffer of the sound.");
                    }
                    else {
                        if (!codecSupportedFound) {
                            this._isReadyToPlay = true;
                            // Simulating a ready to play event to avoid breaking code path
                            if (this._readyToPlayCallback) {
                                window.setTimeout(function () {
                                    if (_this._readyToPlayCallback) {
                                        _this._readyToPlayCallback();
                                    }
                                }, 1000);
                            }
                        }
                    }
                }
                catch (ex) {
                    _Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Error("Unexpected error. Sound creation aborted.");
                    this._scene.mainSoundTrack.removeSound(this);
                }
            }
        }
        else {
            // Adding an empty sound to avoid breaking audio calls for non Web Audio browsers
            this._scene.mainSoundTrack.addSound(this);
            if (_Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine && !_Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.WarnedWebAudioUnsupported) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Error("Web Audio is not supported by your browser.");
                _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.WarnedWebAudioUnsupported = true;
            }
            // Simulating a ready to play event to avoid breaking code for non web audio browsers
            if (this._readyToPlayCallback) {
                window.setTimeout(function () {
                    if (_this._readyToPlayCallback) {
                        _this._readyToPlayCallback();
                    }
                }, 1000);
            }
        }
    }
    Object.defineProperty(Sound.prototype, "loop", {
        /**
         * Does the sound loop after it finishes playing once.
         */
        get: function () {
            return this._loop;
        },
        set: function (value) {
            if (value === this._loop) {
                return;
            }
            this._loop = value;
            this.updateOptions({ loop: value });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sound.prototype, "currentTime", {
        /**
         * Gets the current time for the sound.
         */
        get: function () {
            var _a;
            if (this._htmlAudioElement) {
                return this._htmlAudioElement.currentTime;
            }
            var currentTime = this._startOffset;
            if (this.isPlaying && ((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.audioContext)) {
                currentTime += _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext.currentTime - this._startTime;
            }
            return currentTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sound.prototype, "spatialSound", {
        /**
         * Does this sound enables spatial sound.
         * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#creating-a-spatial-3d-sound
         */
        get: function () {
            return this._spatialSound;
        },
        /**
         * Does this sound enables spatial sound.
         * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#creating-a-spatial-3d-sound
         */
        set: function (newValue) {
            var _a;
            this._spatialSound = newValue;
            if (this._spatialSound && ((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext) {
                this._createSpatialParameters();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Release the sound and its associated resources
     */
    Sound.prototype.dispose = function () {
        var _a;
        if ((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) {
            if (this.isPlaying) {
                this.stop();
            }
            this._isReadyToPlay = false;
            if (this.soundTrackId === -1) {
                this._scene.mainSoundTrack.removeSound(this);
            }
            else if (this._scene.soundTracks) {
                this._scene.soundTracks[this.soundTrackId].removeSound(this);
            }
            if (this._soundGain) {
                this._soundGain.disconnect();
                this._soundGain = null;
            }
            if (this._soundPanner) {
                this._soundPanner.disconnect();
                this._soundPanner = null;
            }
            if (this._soundSource) {
                this._soundSource.disconnect();
                this._soundSource = null;
            }
            this._audioBuffer = null;
            if (this._htmlAudioElement) {
                this._htmlAudioElement.pause();
                this._htmlAudioElement.src = "";
                document.body.removeChild(this._htmlAudioElement);
            }
            if (this._streamingSource) {
                this._streamingSource.disconnect();
            }
            if (this._connectedTransformNode && this._registerFunc) {
                this._connectedTransformNode.unregisterAfterWorldMatrixUpdate(this._registerFunc);
                this._connectedTransformNode = null;
            }
        }
    };
    /**
     * Gets if the sounds is ready to be played or not.
     * @returns true if ready, otherwise false
     */
    Sound.prototype.isReady = function () {
        return this._isReadyToPlay;
    };
    /**
     * Get the current class name.
     * @returns current class name
     */
    Sound.prototype.getClassName = function () {
        return "Sound";
    };
    Sound.prototype._soundLoaded = function (audioData) {
        var _this = this;
        var _a;
        if (!((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.audioContext)) {
            return;
        }
        _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext.decodeAudioData(audioData, function (buffer) {
            _this._audioBuffer = buffer;
            _this._isReadyToPlay = true;
            if (_this.autoplay) {
                _this.play(0, _this._offset, _this._length);
            }
            if (_this._readyToPlayCallback) {
                _this._readyToPlayCallback();
            }
        }, function (err) {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Error("Error while decoding audio data for: " + _this.name + " / Error: " + err);
        });
    };
    /**
     * Sets the data of the sound from an audiobuffer
     * @param audioBuffer The audioBuffer containing the data
     */
    Sound.prototype.setAudioBuffer = function (audioBuffer) {
        var _a;
        if ((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) {
            this._audioBuffer = audioBuffer;
            this._isReadyToPlay = true;
        }
    };
    /**
     * Updates the current sounds options such as maxdistance, loop...
     * @param options A JSON object containing values named as the object properties
     */
    Sound.prototype.updateOptions = function (options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (options) {
            this.loop = (_a = options.loop) !== null && _a !== void 0 ? _a : this.loop;
            this.maxDistance = (_b = options.maxDistance) !== null && _b !== void 0 ? _b : this.maxDistance;
            this.useCustomAttenuation = (_c = options.useCustomAttenuation) !== null && _c !== void 0 ? _c : this.useCustomAttenuation;
            this.rolloffFactor = (_d = options.rolloffFactor) !== null && _d !== void 0 ? _d : this.rolloffFactor;
            this.refDistance = (_e = options.refDistance) !== null && _e !== void 0 ? _e : this.refDistance;
            this.distanceModel = (_f = options.distanceModel) !== null && _f !== void 0 ? _f : this.distanceModel;
            this._playbackRate = (_g = options.playbackRate) !== null && _g !== void 0 ? _g : this._playbackRate;
            this._length = (_h = options.length) !== null && _h !== void 0 ? _h : undefined;
            this._offset = (_j = options.offset) !== null && _j !== void 0 ? _j : undefined;
            this.setVolume((_k = options.volume) !== null && _k !== void 0 ? _k : this._volume);
            this._updateSpatialParameters();
            if (this.isPlaying) {
                if (this._streaming && this._htmlAudioElement) {
                    this._htmlAudioElement.playbackRate = this._playbackRate;
                    if (this._htmlAudioElement.loop !== this.loop) {
                        this._htmlAudioElement.loop = this.loop;
                    }
                }
                else {
                    if (this._soundSource) {
                        this._soundSource.playbackRate.value = this._playbackRate;
                        if (this._soundSource.loop !== this.loop) {
                            this._soundSource.loop = this.loop;
                        }
                        if (this._offset !== undefined && this._soundSource.loopStart !== this._offset) {
                            this._soundSource.loopStart = this._offset;
                        }
                        if (this._length !== undefined && this._length !== this._soundSource.loopEnd) {
                            this._soundSource.loopEnd = (this._offset | 0) + this._length;
                        }
                    }
                }
            }
        }
    };
    Sound.prototype._createSpatialParameters = function () {
        var _a, _b;
        if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext) {
            if (this._scene.headphone) {
                this._panningModel = "HRTF";
            }
            this._soundPanner = (_b = this._soundPanner) !== null && _b !== void 0 ? _b : _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext.createPanner();
            if (this._soundPanner && this._outputAudioNode) {
                this._updateSpatialParameters();
                this._soundPanner.connect(this._outputAudioNode);
                this._inputAudioNode = this._soundPanner;
            }
        }
    };
    Sound.prototype._updateSpatialParameters = function () {
        if (this._spatialSound && this._soundPanner) {
            if (this.useCustomAttenuation) {
                // Tricks to disable in a way embedded Web Audio attenuation
                this._soundPanner.distanceModel = "linear";
                this._soundPanner.maxDistance = Number.MAX_VALUE;
                this._soundPanner.refDistance = 1;
                this._soundPanner.rolloffFactor = 1;
                this._soundPanner.panningModel = this._panningModel;
            }
            else {
                this._soundPanner.distanceModel = this.distanceModel;
                this._soundPanner.maxDistance = this.maxDistance;
                this._soundPanner.refDistance = this.refDistance;
                this._soundPanner.rolloffFactor = this.rolloffFactor;
                this._soundPanner.panningModel = this._panningModel;
            }
        }
    };
    /**
     * Switch the panning model to HRTF:
     * Renders a stereo output of higher quality than equalpower â€” it uses a convolution with measured impulse responses from human subjects.
     * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#creating-a-spatial-3d-sound
     */
    Sound.prototype.switchPanningModelToHRTF = function () {
        this._panningModel = "HRTF";
        this._switchPanningModel();
    };
    /**
     * Switch the panning model to Equal Power:
     * Represents the equal-power panning algorithm, generally regarded as simple and efficient. equalpower is the default value.
     * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#creating-a-spatial-3d-sound
     */
    Sound.prototype.switchPanningModelToEqualPower = function () {
        this._panningModel = "equalpower";
        this._switchPanningModel();
    };
    Sound.prototype._switchPanningModel = function () {
        var _a;
        if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && this._spatialSound && this._soundPanner) {
            this._soundPanner.panningModel = this._panningModel;
        }
    };
    /**
     * Connect this sound to a sound track audio node like gain...
     * @param soundTrackAudioNode the sound track audio node to connect to
     */
    Sound.prototype.connectToSoundTrackAudioNode = function (soundTrackAudioNode) {
        var _a;
        if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && this._outputAudioNode) {
            if (this._isOutputConnected) {
                this._outputAudioNode.disconnect();
            }
            this._outputAudioNode.connect(soundTrackAudioNode);
            this._isOutputConnected = true;
        }
    };
    /**
     * Transform this sound into a directional source
     * @param coneInnerAngle Size of the inner cone in degree
     * @param coneOuterAngle Size of the outer cone in degree
     * @param coneOuterGain Volume of the sound outside the outer cone (between 0.0 and 1.0)
     */
    Sound.prototype.setDirectionalCone = function (coneInnerAngle, coneOuterAngle, coneOuterGain) {
        if (coneOuterAngle < coneInnerAngle) {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Error("setDirectionalCone(): outer angle of the cone must be superior or equal to the inner angle.");
            return;
        }
        this._coneInnerAngle = coneInnerAngle;
        this._coneOuterAngle = coneOuterAngle;
        this._coneOuterGain = coneOuterGain;
        this._isDirectional = true;
        if (this.isPlaying && this.loop) {
            this.stop();
            this.play(0, this._offset, this._length);
        }
    };
    Object.defineProperty(Sound.prototype, "directionalConeInnerAngle", {
        /**
         * Gets or sets the inner angle for the directional cone.
         */
        get: function () {
            return this._coneInnerAngle;
        },
        /**
         * Gets or sets the inner angle for the directional cone.
         */
        set: function (value) {
            var _a;
            if (value != this._coneInnerAngle) {
                if (this._coneOuterAngle < value) {
                    _Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Error("directionalConeInnerAngle: outer angle of the cone must be superior or equal to the inner angle.");
                    return;
                }
                this._coneInnerAngle = value;
                if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && this._spatialSound && this._soundPanner) {
                    this._soundPanner.coneInnerAngle = this._coneInnerAngle;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sound.prototype, "directionalConeOuterAngle", {
        /**
         * Gets or sets the outer angle for the directional cone.
         */
        get: function () {
            return this._coneOuterAngle;
        },
        /**
         * Gets or sets the outer angle for the directional cone.
         */
        set: function (value) {
            var _a;
            if (value != this._coneOuterAngle) {
                if (value < this._coneInnerAngle) {
                    _Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Error("directionalConeOuterAngle: outer angle of the cone must be superior or equal to the inner angle.");
                    return;
                }
                this._coneOuterAngle = value;
                if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && this._spatialSound && this._soundPanner) {
                    this._soundPanner.coneOuterAngle = this._coneOuterAngle;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets the position of the emitter if spatial sound is enabled
     * @param newPosition Defines the new position
     */
    Sound.prototype.setPosition = function (newPosition) {
        var _a;
        if (newPosition.equals(this._position)) {
            return;
        }
        this._position.copyFrom(newPosition);
        if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && this._spatialSound && this._soundPanner && !isNaN(this._position.x) && !isNaN(this._position.y) && !isNaN(this._position.z)) {
            this._soundPanner.positionX.value = this._position.x;
            this._soundPanner.positionY.value = this._position.y;
            this._soundPanner.positionZ.value = this._position.z;
        }
    };
    /**
     * Sets the local direction of the emitter if spatial sound is enabled
     * @param newLocalDirection Defines the new local direction
     */
    Sound.prototype.setLocalDirectionToMesh = function (newLocalDirection) {
        var _a;
        this._localDirection = newLocalDirection;
        if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && this._connectedTransformNode && this.isPlaying) {
            this._updateDirection();
        }
    };
    Sound.prototype._updateDirection = function () {
        if (!this._connectedTransformNode || !this._soundPanner) {
            return;
        }
        var mat = this._connectedTransformNode.getWorldMatrix();
        var direction = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.TransformNormal(this._localDirection, mat);
        direction.normalize();
        this._soundPanner.orientationX.value = direction.x;
        this._soundPanner.orientationY.value = direction.y;
        this._soundPanner.orientationZ.value = direction.z;
    };
    /** @hidden */
    Sound.prototype.updateDistanceFromListener = function () {
        var _a;
        if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && this._connectedTransformNode && this.useCustomAttenuation && this._soundGain && this._scene.activeCamera) {
            var distance = this._connectedTransformNode.getDistanceToCamera(this._scene.activeCamera);
            this._soundGain.gain.value = this._customAttenuationFunction(this._volume, distance, this.maxDistance, this.refDistance, this.rolloffFactor);
        }
    };
    /**
     * Sets a new custom attenuation function for the sound.
     * @param callback Defines the function used for the attenuation
     * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#creating-your-own-custom-attenuation-function
     */
    Sound.prototype.setAttenuationFunction = function (callback) {
        this._customAttenuationFunction = callback;
    };
    /**
     * Play the sound
     * @param time (optional) Start the sound after X seconds. Start immediately (0) by default.
     * @param offset (optional) Start the sound at a specific time in seconds
     * @param length (optional) Sound duration (in seconds)
     */
    Sound.prototype.play = function (time, offset, length) {
        var _this = this;
        var _a, _b, _c, _d;
        if (this._isReadyToPlay && this._scene.audioEnabled && ((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.audioContext)) {
            try {
                if (this._startOffset < 0) {
                    time = -this._startOffset;
                    this._startOffset = 0;
                }
                var startTime_1 = time ? ((_b = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _b === void 0 ? void 0 : _b.audioContext.currentTime) + time : (_c = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _c === void 0 ? void 0 : _c.audioContext.currentTime;
                if (!this._soundSource || !this._streamingSource) {
                    if (this._spatialSound && this._soundPanner) {
                        if (!isNaN(this._position.x) && !isNaN(this._position.y) && !isNaN(this._position.z)) {
                            this._soundPanner.positionX.value = this._position.x;
                            this._soundPanner.positionY.value = this._position.y;
                            this._soundPanner.positionZ.value = this._position.z;
                        }
                        if (this._isDirectional) {
                            this._soundPanner.coneInnerAngle = this._coneInnerAngle;
                            this._soundPanner.coneOuterAngle = this._coneOuterAngle;
                            this._soundPanner.coneOuterGain = this._coneOuterGain;
                            if (this._connectedTransformNode) {
                                this._updateDirection();
                            }
                            else {
                                this._soundPanner.setOrientation(this._localDirection.x, this._localDirection.y, this._localDirection.z);
                            }
                        }
                    }
                }
                if (this._streaming) {
                    if (!this._streamingSource) {
                        this._streamingSource = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext.createMediaElementSource(this._htmlAudioElement);
                        this._htmlAudioElement.onended = function () {
                            _this._onended();
                        };
                        this._htmlAudioElement.playbackRate = this._playbackRate;
                    }
                    this._streamingSource.disconnect();
                    if (this._inputAudioNode) {
                        this._streamingSource.connect(this._inputAudioNode);
                    }
                    if (this._htmlAudioElement) {
                        // required to manage properly the new suspended default state of Chrome
                        // When the option 'streaming: true' is used, we need first to wait for
                        // the audio engine to be unlocked by a user gesture before trying to play
                        // an HTML Audio element
                        var tryToPlay_1 = function () {
                            var _a, _b;
                            if ((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.unlocked) {
                                var playPromise = _this._htmlAudioElement.play();
                                // In browsers that donâ€™t yet support this functionality,
                                // playPromise wonâ€™t be defined.
                                if (playPromise !== undefined) {
                                    playPromise.catch(function () {
                                        var _a, _b;
                                        // Automatic playback failed.
                                        // Waiting for the audio engine to be unlocked by user click on unmute
                                        (_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.lock();
                                        if (_this.loop || _this.autoplay) {
                                            (_b = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _b === void 0 ? void 0 : _b.onAudioUnlockedObservable.addOnce(function () {
                                                tryToPlay_1();
                                            });
                                        }
                                    });
                                }
                            }
                            else {
                                if (_this.loop || _this.autoplay) {
                                    (_b = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _b === void 0 ? void 0 : _b.onAudioUnlockedObservable.addOnce(function () {
                                        tryToPlay_1();
                                    });
                                }
                            }
                        };
                        tryToPlay_1();
                    }
                }
                else {
                    var tryToPlay_2 = function () {
                        var _a, _b, _c;
                        if ((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.audioContext) {
                            length = length || _this._length;
                            offset = offset || _this._offset;
                            if (_this._soundSource) {
                                var oldSource_1 = _this._soundSource;
                                oldSource_1.onended = function () {
                                    oldSource_1.disconnect();
                                };
                            }
                            _this._soundSource = (_b = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _b === void 0 ? void 0 : _b.audioContext.createBufferSource();
                            if (_this._soundSource && _this._inputAudioNode) {
                                _this._soundSource.buffer = _this._audioBuffer;
                                _this._soundSource.connect(_this._inputAudioNode);
                                _this._soundSource.loop = _this.loop;
                                if (offset !== undefined) {
                                    _this._soundSource.loopStart = offset;
                                }
                                if (length !== undefined) {
                                    _this._soundSource.loopEnd = (offset | 0) + length;
                                }
                                _this._soundSource.playbackRate.value = _this._playbackRate;
                                _this._soundSource.onended = function () {
                                    _this._onended();
                                };
                                startTime_1 = time ? ((_c = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _c === void 0 ? void 0 : _c.audioContext.currentTime) + time : _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext.currentTime;
                                var actualOffset = _this.isPaused ? _this._startOffset % _this._soundSource.buffer.duration : offset ? offset : 0;
                                _this._soundSource.start(startTime_1, actualOffset, _this.loop ? undefined : length);
                            }
                        }
                    };
                    if (((_d = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _d === void 0 ? void 0 : _d.audioContext.state) === "suspended") {
                        // Wait a bit for FF as context seems late to be ready.
                        setTimeout(function () {
                            var _a;
                            if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.audioContext.state) === "suspended") {
                                // Automatic playback failed.
                                // Waiting for the audio engine to be unlocked by user click on unmute
                                _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.lock();
                                if (_this.loop || _this.autoplay) {
                                    _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.onAudioUnlockedObservable.addOnce(function () {
                                        tryToPlay_2();
                                    });
                                }
                            }
                            else {
                                tryToPlay_2();
                            }
                        }, 500);
                    }
                    else {
                        tryToPlay_2();
                    }
                }
                this._startTime = startTime_1;
                this.isPlaying = true;
                this.isPaused = false;
            }
            catch (ex) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Error("Error while trying to play audio: " + this.name + ", " + ex.message);
            }
        }
    };
    Sound.prototype._onended = function () {
        this.isPlaying = false;
        this._startOffset = 0;
        if (this.onended) {
            this.onended();
        }
        this.onEndedObservable.notifyObservers(this);
    };
    /**
     * Stop the sound
     * @param time (optional) Stop the sound after X seconds. Stop immediately (0) by default.
     */
    Sound.prototype.stop = function (time) {
        var _this = this;
        var _a;
        if (this.isPlaying) {
            if (this._streaming) {
                if (this._htmlAudioElement) {
                    this._htmlAudioElement.pause();
                    // Test needed for Firefox or it will generate an Invalid State Error
                    if (this._htmlAudioElement.currentTime > 0) {
                        this._htmlAudioElement.currentTime = 0;
                    }
                }
                else {
                    this._streamingSource.disconnect();
                }
                this.isPlaying = false;
            }
            else if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.audioContext) && this._soundSource) {
                var stopTime = time ? _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext.currentTime + time : undefined;
                this._soundSource.stop(stopTime);
                if (stopTime === undefined) {
                    this.isPlaying = false;
                    this._soundSource.onended = function () { return void 0; };
                }
                else {
                    this._soundSource.onended = function () {
                        _this.isPlaying = false;
                    };
                }
                if (!this.isPaused) {
                    this._startOffset = 0;
                }
            }
        }
    };
    /**
     * Put the sound in pause
     */
    Sound.prototype.pause = function () {
        var _a;
        if (this.isPlaying) {
            this.isPaused = true;
            if (this._streaming) {
                if (this._htmlAudioElement) {
                    this._htmlAudioElement.pause();
                }
                else {
                    this._streamingSource.disconnect();
                }
                this.isPlaying = false;
            }
            else if ((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.audioContext) {
                this.stop(0);
                this._startOffset += _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext.currentTime - this._startTime;
            }
        }
    };
    /**
     * Sets a dedicated volume for this sounds
     * @param newVolume Define the new volume of the sound
     * @param time Define time for gradual change to new volume
     */
    Sound.prototype.setVolume = function (newVolume, time) {
        var _a;
        if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && this._soundGain) {
            if (time && _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext) {
                this._soundGain.gain.cancelScheduledValues(_Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext.currentTime);
                this._soundGain.gain.setValueAtTime(this._soundGain.gain.value, _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext.currentTime);
                this._soundGain.gain.linearRampToValueAtTime(newVolume, _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine.audioContext.currentTime + time);
            }
            else {
                this._soundGain.gain.value = newVolume;
            }
        }
        this._volume = newVolume;
    };
    /**
     * Set the sound play back rate
     * @param newPlaybackRate Define the playback rate the sound should be played at
     */
    Sound.prototype.setPlaybackRate = function (newPlaybackRate) {
        this._playbackRate = newPlaybackRate;
        if (this.isPlaying) {
            if (this._streaming && this._htmlAudioElement) {
                this._htmlAudioElement.playbackRate = this._playbackRate;
            }
            else if (this._soundSource) {
                this._soundSource.playbackRate.value = this._playbackRate;
            }
        }
    };
    /**
     * Gets the volume of the sound.
     * @returns the volume of the sound
     */
    Sound.prototype.getVolume = function () {
        return this._volume;
    };
    /**
     * Attach the sound to a dedicated mesh
     * @param transformNode The transform node to connect the sound with
     * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#attaching-a-sound-to-a-mesh
     */
    Sound.prototype.attachToMesh = function (transformNode) {
        var _this = this;
        if (this._connectedTransformNode && this._registerFunc) {
            this._connectedTransformNode.unregisterAfterWorldMatrixUpdate(this._registerFunc);
            this._registerFunc = null;
        }
        this._connectedTransformNode = transformNode;
        if (!this._spatialSound) {
            this._spatialSound = true;
            this._createSpatialParameters();
            if (this.isPlaying && this.loop) {
                this.stop();
                this.play(0, this._offset, this._length);
            }
        }
        this._onRegisterAfterWorldMatrixUpdate(this._connectedTransformNode);
        this._registerFunc = function (transformNode) { return _this._onRegisterAfterWorldMatrixUpdate(transformNode); };
        this._connectedTransformNode.registerAfterWorldMatrixUpdate(this._registerFunc);
    };
    /**
     * Detach the sound from the previously attached mesh
     * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#attaching-a-sound-to-a-mesh
     */
    Sound.prototype.detachFromMesh = function () {
        if (this._connectedTransformNode && this._registerFunc) {
            this._connectedTransformNode.unregisterAfterWorldMatrixUpdate(this._registerFunc);
            this._registerFunc = null;
            this._connectedTransformNode = null;
        }
    };
    Sound.prototype._onRegisterAfterWorldMatrixUpdate = function (node) {
        var _a;
        if (!node.getBoundingInfo) {
            this.setPosition(node.absolutePosition);
        }
        else {
            var mesh = node;
            var boundingInfo = mesh.getBoundingInfo();
            this.setPosition(boundingInfo.boundingSphere.centerWorld);
        }
        if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_3__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && this._isDirectional && this.isPlaying) {
            this._updateDirection();
        }
    };
    /**
     * Clone the current sound in the scene.
     * @returns the new sound clone
     */
    Sound.prototype.clone = function () {
        var _this = this;
        if (!this._streaming) {
            var setBufferAndRun_1 = function () {
                if (_this._isReadyToPlay) {
                    clonedSound_1._audioBuffer = _this.getAudioBuffer();
                    clonedSound_1._isReadyToPlay = true;
                    if (clonedSound_1.autoplay) {
                        clonedSound_1.play(0, _this._offset, _this._length);
                    }
                }
                else {
                    window.setTimeout(setBufferAndRun_1, 300);
                }
            };
            var currentOptions = {
                autoplay: this.autoplay,
                loop: this.loop,
                volume: this._volume,
                spatialSound: this._spatialSound,
                maxDistance: this.maxDistance,
                useCustomAttenuation: this.useCustomAttenuation,
                rolloffFactor: this.rolloffFactor,
                refDistance: this.refDistance,
                distanceModel: this.distanceModel,
            };
            var clonedSound_1 = new Sound(this.name + "_cloned", new ArrayBuffer(0), this._scene, null, currentOptions);
            if (this.useCustomAttenuation) {
                clonedSound_1.setAttenuationFunction(this._customAttenuationFunction);
            }
            clonedSound_1.setPosition(this._position);
            clonedSound_1.setPlaybackRate(this._playbackRate);
            setBufferAndRun_1();
            return clonedSound_1;
        }
        // Can't clone a streaming sound
        else {
            return null;
        }
    };
    /**
     * Gets the current underlying audio buffer containing the data
     * @returns the audio buffer
     */
    Sound.prototype.getAudioBuffer = function () {
        return this._audioBuffer;
    };
    /**
     * Gets the WebAudio AudioBufferSourceNode, lets you keep track of and stop instances of this Sound.
     * @returns the source node
     */
    Sound.prototype.getSoundSource = function () {
        return this._soundSource;
    };
    /**
     * Gets the WebAudio GainNode, gives you precise control over the gain of instances of this Sound.
     * @returns the gain node
     */
    Sound.prototype.getSoundGain = function () {
        return this._soundGain;
    };
    /**
     * Serializes the Sound in a JSON representation
     * @returns the JSON representation of the sound
     */
    Sound.prototype.serialize = function () {
        var serializationObject = {
            name: this.name,
            url: this.name,
            autoplay: this.autoplay,
            loop: this.loop,
            volume: this._volume,
            spatialSound: this._spatialSound,
            maxDistance: this.maxDistance,
            rolloffFactor: this.rolloffFactor,
            refDistance: this.refDistance,
            distanceModel: this.distanceModel,
            playbackRate: this._playbackRate,
            panningModel: this._panningModel,
            soundTrackId: this.soundTrackId,
            metadata: this.metadata,
        };
        if (this._spatialSound) {
            if (this._connectedTransformNode) {
                serializationObject.connectedMeshId = this._connectedTransformNode.id;
            }
            serializationObject.position = this._position.asArray();
            serializationObject.refDistance = this.refDistance;
            serializationObject.distanceModel = this.distanceModel;
            serializationObject.isDirectional = this._isDirectional;
            serializationObject.localDirectionToMesh = this._localDirection.asArray();
            serializationObject.coneInnerAngle = this._coneInnerAngle;
            serializationObject.coneOuterAngle = this._coneOuterAngle;
            serializationObject.coneOuterGain = this._coneOuterGain;
        }
        return serializationObject;
    };
    /**
     * Parse a JSON representation of a sound to instantiate in a given scene
     * @param parsedSound Define the JSON representation of the sound (usually coming from the serialize method)
     * @param scene Define the scene the new parsed sound should be created in
     * @param rootUrl Define the rooturl of the load in case we need to fetch relative dependencies
     * @param sourceSound Define a sound place holder if do not need to instantiate a new one
     * @returns the newly parsed sound
     */
    Sound.Parse = function (parsedSound, scene, rootUrl, sourceSound) {
        var soundName = parsedSound.name;
        var soundUrl;
        if (parsedSound.url) {
            soundUrl = rootUrl + parsedSound.url;
        }
        else {
            soundUrl = rootUrl + soundName;
        }
        var options = {
            autoplay: parsedSound.autoplay,
            loop: parsedSound.loop,
            volume: parsedSound.volume,
            spatialSound: parsedSound.spatialSound,
            maxDistance: parsedSound.maxDistance,
            rolloffFactor: parsedSound.rolloffFactor,
            refDistance: parsedSound.refDistance,
            distanceModel: parsedSound.distanceModel,
            playbackRate: parsedSound.playbackRate,
        };
        var newSound;
        if (!sourceSound) {
            newSound = new Sound(soundName, soundUrl, scene, function () {
                scene._removePendingData(newSound);
            }, options);
            scene._addPendingData(newSound);
        }
        else {
            var setBufferAndRun_2 = function () {
                if (sourceSound._isReadyToPlay) {
                    newSound._audioBuffer = sourceSound.getAudioBuffer();
                    newSound._isReadyToPlay = true;
                    if (newSound.autoplay) {
                        newSound.play(0, newSound._offset, newSound._length);
                    }
                }
                else {
                    window.setTimeout(setBufferAndRun_2, 300);
                }
            };
            newSound = new Sound(soundName, new ArrayBuffer(0), scene, null, options);
            setBufferAndRun_2();
        }
        if (parsedSound.position) {
            var soundPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.FromArray(parsedSound.position);
            newSound.setPosition(soundPosition);
        }
        if (parsedSound.isDirectional) {
            newSound.setDirectionalCone(parsedSound.coneInnerAngle || 360, parsedSound.coneOuterAngle || 360, parsedSound.coneOuterGain || 0);
            if (parsedSound.localDirectionToMesh) {
                var localDirectionToMesh = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.FromArray(parsedSound.localDirectionToMesh);
                newSound.setLocalDirectionToMesh(localDirectionToMesh);
            }
        }
        if (parsedSound.connectedMeshId) {
            var connectedMesh = scene.getMeshById(parsedSound.connectedMeshId);
            if (connectedMesh) {
                newSound.attachToMesh(connectedMesh);
            }
        }
        if (parsedSound.metadata) {
            newSound.metadata = parsedSound.metadata;
        }
        return newSound;
    };
    /**
     * @param _
     * @hidden
     */
    Sound._SceneComponentInitialization = function (_) {
        throw (0,_Misc_devTools__WEBPACK_IMPORTED_MODULE_5__._WarnImport)("AudioSceneComponent");
    };
    return Sound;
}());



/***/ }),

/***/ "../../../lts/core/dist/Audio/soundTrack.js":
/*!**************************************************!*\
  !*** ../../../lts/core/dist/Audio/soundTrack.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoundTrack": () => (/* binding */ SoundTrack)
/* harmony export */ });
/* harmony import */ var _Engines_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/engine */ "../../../lts/core/dist/Engines/engine.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Engines/engineStore */ "../../../lts/core/dist/Engines/engineStore.js");


/**
 * It could be useful to isolate your music & sounds on several tracks to better manage volume on a grouped instance of sounds.
 * It will be also used in a future release to apply effects on a specific track.
 * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#using-sound-tracks
 */
var SoundTrack = /** @class */ (function () {
    /**
     * Creates a new sound track.
     * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#using-sound-tracks
     * @param scene Define the scene the sound track belongs to
     * @param options
     */
    function SoundTrack(scene, options) {
        if (options === void 0) { options = {}; }
        /**
         * The unique identifier of the sound track in the scene.
         */
        this.id = -1;
        this._isInitialized = false;
        scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_1__.EngineStore.LastCreatedScene;
        if (!scene) {
            return;
        }
        this._scene = scene;
        this.soundCollection = new Array();
        this._options = options;
        if (!this._options.mainTrack && this._scene.soundTracks) {
            this._scene.soundTracks.push(this);
            this.id = this._scene.soundTracks.length - 1;
        }
    }
    SoundTrack.prototype._initializeSoundTrackAudioGraph = function () {
        var _a;
        if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_0__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && _Engines_engine__WEBPACK_IMPORTED_MODULE_0__.Engine.audioEngine.audioContext) {
            this._outputAudioNode = _Engines_engine__WEBPACK_IMPORTED_MODULE_0__.Engine.audioEngine.audioContext.createGain();
            this._outputAudioNode.connect(_Engines_engine__WEBPACK_IMPORTED_MODULE_0__.Engine.audioEngine.masterGain);
            if (this._options) {
                if (this._options.volume) {
                    this._outputAudioNode.gain.value = this._options.volume;
                }
            }
            this._isInitialized = true;
        }
    };
    /**
     * Release the sound track and its associated resources
     */
    SoundTrack.prototype.dispose = function () {
        if (_Engines_engine__WEBPACK_IMPORTED_MODULE_0__.Engine.audioEngine && _Engines_engine__WEBPACK_IMPORTED_MODULE_0__.Engine.audioEngine.canUseWebAudio) {
            if (this._connectedAnalyser) {
                this._connectedAnalyser.stopDebugCanvas();
            }
            while (this.soundCollection.length) {
                this.soundCollection[0].dispose();
            }
            if (this._outputAudioNode) {
                this._outputAudioNode.disconnect();
            }
            this._outputAudioNode = null;
        }
    };
    /**
     * Adds a sound to this sound track
     * @param sound define the sound to add
     * @ignoreNaming
     */
    SoundTrack.prototype.addSound = function (sound) {
        var _a;
        if (!this._isInitialized) {
            this._initializeSoundTrackAudioGraph();
        }
        if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_0__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && this._outputAudioNode) {
            sound.connectToSoundTrackAudioNode(this._outputAudioNode);
        }
        if (sound.soundTrackId) {
            if (sound.soundTrackId === -1) {
                this._scene.mainSoundTrack.removeSound(sound);
            }
            else if (this._scene.soundTracks) {
                this._scene.soundTracks[sound.soundTrackId].removeSound(sound);
            }
        }
        this.soundCollection.push(sound);
        sound.soundTrackId = this.id;
    };
    /**
     * Removes a sound to this sound track
     * @param sound define the sound to remove
     * @ignoreNaming
     */
    SoundTrack.prototype.removeSound = function (sound) {
        var index = this.soundCollection.indexOf(sound);
        if (index !== -1) {
            this.soundCollection.splice(index, 1);
        }
    };
    /**
     * Set a global volume for the full sound track.
     * @param newVolume Define the new volume of the sound track
     */
    SoundTrack.prototype.setVolume = function (newVolume) {
        var _a;
        if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_0__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && this._outputAudioNode) {
            this._outputAudioNode.gain.value = newVolume;
        }
    };
    /**
     * Switch the panning model to HRTF:
     * Renders a stereo output of higher quality than equalpower â€” it uses a convolution with measured impulse responses from human subjects.
     * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#creating-a-spatial-3d-sound
     */
    SoundTrack.prototype.switchPanningModelToHRTF = function () {
        var _a;
        if ((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_0__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) {
            for (var i = 0; i < this.soundCollection.length; i++) {
                this.soundCollection[i].switchPanningModelToHRTF();
            }
        }
    };
    /**
     * Switch the panning model to Equal Power:
     * Represents the equal-power panning algorithm, generally regarded as simple and efficient. equalpower is the default value.
     * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#creating-a-spatial-3d-sound
     */
    SoundTrack.prototype.switchPanningModelToEqualPower = function () {
        var _a;
        if ((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_0__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) {
            for (var i = 0; i < this.soundCollection.length; i++) {
                this.soundCollection[i].switchPanningModelToEqualPower();
            }
        }
    };
    /**
     * Connect the sound track to an audio analyser allowing some amazing
     * synchronization between the sounds/music and your visualization (VuMeter for instance).
     * @see https://doc.babylonjs.com/how_to/playing_sounds_and_music#using-the-analyser
     * @param analyser The analyser to connect to the engine
     */
    SoundTrack.prototype.connectToAnalyser = function (analyser) {
        var _a;
        if (this._connectedAnalyser) {
            this._connectedAnalyser.stopDebugCanvas();
        }
        this._connectedAnalyser = analyser;
        if (((_a = _Engines_engine__WEBPACK_IMPORTED_MODULE_0__.Engine.audioEngine) === null || _a === void 0 ? void 0 : _a.canUseWebAudio) && this._outputAudioNode) {
            this._outputAudioNode.disconnect();
            this._connectedAnalyser.connectAudioNodes(this._outputAudioNode, _Engines_engine__WEBPACK_IMPORTED_MODULE_0__.Engine.audioEngine.masterGain);
        }
    };
    return SoundTrack;
}());



/***/ }),

/***/ "../../../lts/core/dist/Audio/weightedsound.js":
/*!*****************************************************!*\
  !*** ../../../lts/core/dist/Audio/weightedsound.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeightedSound": () => (/* binding */ WeightedSound)
/* harmony export */ });
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/logger */ "../../../lts/core/dist/Misc/logger.js");

/**
 * Wraps one or more Sound objects and selects one with random weight for playback.
 */
var WeightedSound = /** @class */ (function () {
    /**
     * Creates a new WeightedSound from the list of sounds given.
     * @param loop When true a Sound will be selected and played when the current playing Sound completes.
     * @param sounds Array of Sounds that will be selected from.
     * @param weights Array of number values for selection weights; length must equal sounds, values will be normalized to 1
     */
    function WeightedSound(loop, sounds, weights) {
        var _this = this;
        /** When true a Sound will be selected and played when the current playing Sound completes. */
        this.loop = false;
        this._coneInnerAngle = 360;
        this._coneOuterAngle = 360;
        this._volume = 1;
        /** A Sound is currently playing. */
        this.isPlaying = false;
        /** A Sound is currently paused. */
        this.isPaused = false;
        this._sounds = [];
        this._weights = [];
        if (sounds.length !== weights.length) {
            throw new Error("Sounds length does not equal weights length");
        }
        this.loop = loop;
        this._weights = weights;
        // Normalize the weights
        var weightSum = 0;
        for (var _i = 0, weights_1 = weights; _i < weights_1.length; _i++) {
            var weight = weights_1[_i];
            weightSum += weight;
        }
        var invWeightSum = weightSum > 0 ? 1 / weightSum : 0;
        for (var i = 0; i < this._weights.length; i++) {
            this._weights[i] *= invWeightSum;
        }
        this._sounds = sounds;
        for (var _a = 0, _b = this._sounds; _a < _b.length; _a++) {
            var sound = _b[_a];
            sound.onEndedObservable.add(function () {
                _this._onended();
            });
        }
    }
    Object.defineProperty(WeightedSound.prototype, "directionalConeInnerAngle", {
        /**
         * The size of cone in degrees for a directional sound in which there will be no attenuation.
         */
        get: function () {
            return this._coneInnerAngle;
        },
        /**
         * The size of cone in degrees for a directional sound in which there will be no attenuation.
         */
        set: function (value) {
            if (value !== this._coneInnerAngle) {
                if (this._coneOuterAngle < value) {
                    _Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error("directionalConeInnerAngle: outer angle of the cone must be superior or equal to the inner angle.");
                    return;
                }
                this._coneInnerAngle = value;
                for (var _i = 0, _a = this._sounds; _i < _a.length; _i++) {
                    var sound = _a[_i];
                    sound.directionalConeInnerAngle = value;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeightedSound.prototype, "directionalConeOuterAngle", {
        /**
         * Size of cone in degrees for a directional sound outside of which there will be no sound.
         * Listener angles between innerAngle and outerAngle will falloff linearly.
         */
        get: function () {
            return this._coneOuterAngle;
        },
        /**
         * Size of cone in degrees for a directional sound outside of which there will be no sound.
         * Listener angles between innerAngle and outerAngle will falloff linearly.
         */
        set: function (value) {
            if (value !== this._coneOuterAngle) {
                if (value < this._coneInnerAngle) {
                    _Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error("directionalConeOuterAngle: outer angle of the cone must be superior or equal to the inner angle.");
                    return;
                }
                this._coneOuterAngle = value;
                for (var _i = 0, _a = this._sounds; _i < _a.length; _i++) {
                    var sound = _a[_i];
                    sound.directionalConeOuterAngle = value;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeightedSound.prototype, "volume", {
        /**
         * Playback volume.
         */
        get: function () {
            return this._volume;
        },
        /**
         * Playback volume.
         */
        set: function (value) {
            if (value !== this._volume) {
                for (var _i = 0, _a = this._sounds; _i < _a.length; _i++) {
                    var sound = _a[_i];
                    sound.setVolume(value);
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    WeightedSound.prototype._onended = function () {
        if (this._currentIndex !== undefined) {
            this._sounds[this._currentIndex].autoplay = false;
        }
        if (this.loop && this.isPlaying) {
            this.play();
        }
        else {
            this.isPlaying = false;
        }
    };
    /**
     * Suspend playback
     */
    WeightedSound.prototype.pause = function () {
        this.isPaused = true;
        if (this._currentIndex !== undefined) {
            this._sounds[this._currentIndex].pause();
        }
    };
    /**
     * Stop playback
     */
    WeightedSound.prototype.stop = function () {
        this.isPlaying = false;
        if (this._currentIndex !== undefined) {
            this._sounds[this._currentIndex].stop();
        }
    };
    /**
     * Start playback.
     * @param startOffset Position the clip head at a specific time in seconds.
     */
    WeightedSound.prototype.play = function (startOffset) {
        if (!this.isPaused) {
            this.stop();
            var randomValue = Math.random();
            var total = 0;
            for (var i = 0; i < this._weights.length; i++) {
                total += this._weights[i];
                if (randomValue <= total) {
                    this._currentIndex = i;
                    break;
                }
            }
        }
        var sound = this._sounds[this._currentIndex];
        if (sound.isReady()) {
            sound.play(0, this.isPaused ? undefined : startOffset);
        }
        else {
            sound.autoplay = true;
        }
        this.isPlaying = true;
        this.isPaused = false;
    };
    return WeightedSound;
}());



/***/ }),

/***/ "../../../lts/core/dist/BakedVertexAnimation/bakedVertexAnimationManager.js":
/*!**********************************************************************************!*\
  !*** ../../../lts/core/dist/BakedVertexAnimation/bakedVertexAnimationManager.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BakedVertexAnimationManager": () => (/* binding */ BakedVertexAnimationManager)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Misc_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc/decorators */ "../../../lts/core/dist/Misc/decorators.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Engines/engineStore */ "../../../lts/core/dist/Engines/engineStore.js");




/**
 * This class is used to animate meshes using a baked vertex animation texture
 * @see https://doc.babylonjs.com/divingDeeper/animation/baked_texture_animations
 * @since 5.0
 */
var BakedVertexAnimationManager = /** @class */ (function () {
    /**
     * Creates a new BakedVertexAnimationManager
     * @param scene defines the current scene
     */
    function BakedVertexAnimationManager(scene) {
        this._texture = null;
        this._isEnabled = true;
        /**
         * Enable or disable the vertex animation manager
         */
        this.isEnabled = true;
        /**
         * The time counter, to pick the correct animation frame.
         */
        this.time = 0;
        scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_3__.EngineStore.LastCreatedScene;
        if (!scene) {
            return;
        }
        this._scene = scene;
        this.animationParameters = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector4(0, 0, 0, 30);
    }
    /** @hidden */
    BakedVertexAnimationManager.prototype._markSubMeshesAsAttributesDirty = function () {
        for (var _i = 0, _a = this._scene.meshes; _i < _a.length; _i++) {
            var mesh = _a[_i];
            if (mesh.bakedVertexAnimationManager === this) {
                mesh._markSubMeshesAsAttributesDirty();
            }
        }
    };
    /**
     * Binds to the effect.
     * @param effect The effect to bind to.
     * @param useInstances True when it's an instance.
     */
    BakedVertexAnimationManager.prototype.bind = function (effect, useInstances) {
        if (useInstances === void 0) { useInstances = false; }
        if (!this._texture || !this._isEnabled) {
            return;
        }
        var size = this._texture.getSize();
        effect.setFloat2("bakedVertexAnimationTextureSizeInverted", 1.0 / size.width, 1.0 / size.height);
        effect.setFloat("bakedVertexAnimationTime", this.time);
        if (!useInstances) {
            effect.setVector4("bakedVertexAnimationSettings", this.animationParameters);
        }
        effect.setTexture("bakedVertexAnimationTexture", this._texture);
    };
    /**
     * Clone the current manager
     * @returns a new BakedVertexAnimationManager
     */
    BakedVertexAnimationManager.prototype.clone = function () {
        var copy = new BakedVertexAnimationManager(this._scene);
        this.copyTo(copy);
        return copy;
    };
    /**
     * Sets animation parameters.
     * @param startFrame The first frame of the animation.
     * @param endFrame The last frame of the animation.
     * @param offset The offset when starting the animation.
     * @param speedFramesPerSecond The frame rate.
     */
    BakedVertexAnimationManager.prototype.setAnimationParameters = function (startFrame, endFrame, offset, speedFramesPerSecond) {
        if (offset === void 0) { offset = 0; }
        if (speedFramesPerSecond === void 0) { speedFramesPerSecond = 30; }
        this.animationParameters = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector4(startFrame, endFrame, offset, speedFramesPerSecond);
    };
    /**
     * Disposes the resources of the manager.
     * @param forceDisposeTextures - Forces the disposal of all textures.
     */
    BakedVertexAnimationManager.prototype.dispose = function (forceDisposeTextures) {
        var _a;
        if (forceDisposeTextures) {
            (_a = this._texture) === null || _a === void 0 ? void 0 : _a.dispose();
        }
    };
    /**
     * Get the current class name useful for serialization or dynamic coding.
     * @returns "BakedVertexAnimationManager"
     */
    BakedVertexAnimationManager.prototype.getClassName = function () {
        return "BakedVertexAnimationManager";
    };
    /**
     * Makes a duplicate of the current instance into another one.
     * @param vatMap define the instance where to copy the info
     */
    BakedVertexAnimationManager.prototype.copyTo = function (vatMap) {
        _Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializationHelper.Clone(function () { return vatMap; }, this);
    };
    /**
     * Serializes this vertex animation instance
     * @returns - An object with the serialized instance.
     */
    BakedVertexAnimationManager.prototype.serialize = function () {
        return _Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializationHelper.Serialize(this);
    };
    /**
     * Parses a vertex animation setting from a serialized object.
     * @param source - Serialized object.
     * @param scene Defines the scene we are parsing for
     * @param rootUrl Defines the rootUrl to load from
     */
    BakedVertexAnimationManager.prototype.parse = function (source, scene, rootUrl) {
        var _this = this;
        _Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializationHelper.Parse(function () { return _this; }, source, scene, rootUrl);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsTexture)(),
        (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markSubMeshesAsAttributesDirty")
    ], BakedVertexAnimationManager.prototype, "texture", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)(),
        (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markSubMeshesAsAttributesDirty")
    ], BakedVertexAnimationManager.prototype, "isEnabled", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], BakedVertexAnimationManager.prototype, "animationParameters", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], BakedVertexAnimationManager.prototype, "time", void 0);
    return BakedVertexAnimationManager;
}());



/***/ }),

/***/ "../../../lts/core/dist/BakedVertexAnimation/index.js":
/*!************************************************************!*\
  !*** ../../../lts/core/dist/BakedVertexAnimation/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BakedVertexAnimationManager": () => (/* reexport safe */ _bakedVertexAnimationManager__WEBPACK_IMPORTED_MODULE_0__.BakedVertexAnimationManager),
/* harmony export */   "VertexAnimationBaker": () => (/* reexport safe */ _vertexAnimationBaker__WEBPACK_IMPORTED_MODULE_1__.VertexAnimationBaker)
/* harmony export */ });
/* harmony import */ var _bakedVertexAnimationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bakedVertexAnimationManager */ "../../../lts/core/dist/BakedVertexAnimation/bakedVertexAnimationManager.js");
/* harmony import */ var _vertexAnimationBaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertexAnimationBaker */ "../../../lts/core/dist/BakedVertexAnimation/vertexAnimationBaker.js");




/***/ }),

/***/ "../../../lts/core/dist/BakedVertexAnimation/vertexAnimationBaker.js":
/*!***************************************************************************!*\
  !*** ../../../lts/core/dist/BakedVertexAnimation/vertexAnimationBaker.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertexAnimationBaker": () => (/* binding */ VertexAnimationBaker)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Materials_Textures_rawTexture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Materials/Textures/rawTexture */ "../../../lts/core/dist/Materials/Textures/rawTexture.js");
/* harmony import */ var _Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Materials/Textures/texture */ "../../../lts/core/dist/Materials/Textures/texture.js");
/* harmony import */ var _Misc_stringTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Misc/stringTools */ "../../../lts/core/dist/Misc/stringTools.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Engines/constants */ "../../../lts/core/dist/Engines/constants.js");





/**
 * Class to bake vertex animation textures.
 * @since 5.0
 */
var VertexAnimationBaker = /** @class */ (function () {
    /**
     * Create a new VertexAnimationBaker object which can help baking animations into a texture.
     * @param scene Defines the scene the VAT belongs to
     * @param mesh Defines the mesh the VAT belongs to
     */
    function VertexAnimationBaker(scene, mesh) {
        this._scene = scene;
        this._mesh = mesh;
    }
    /**
     * Bakes the animation into the texture. This should be called once, when the
     * scene starts, so the VAT is generated and associated to the mesh.
     * @param ranges Defines the ranges in the animation that will be baked.
     * @returns The array of matrix transforms for each vertex (columns) and frame (rows), as a Float32Array.
     */
    VertexAnimationBaker.prototype.bakeVertexData = function (ranges) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
            var boneCount, frameCount, textureIndex, textureSize, vertexData, _i, ranges_1, range, frameIndex;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._mesh.skeleton) {
                            throw new Error("No skeleton in this mesh.");
                        }
                        boneCount = this._mesh.skeleton.bones.length;
                        frameCount = ranges.reduce(function (previous, current) { return previous + current.to - current.from + 1; }, 0);
                        if (isNaN(frameCount)) {
                            throw new Error("Invalid animation ranges.");
                        }
                        textureIndex = 0;
                        textureSize = (boneCount + 1) * 4 * 4 * frameCount;
                        vertexData = new Float32Array(textureSize);
                        this._scene.stopAnimation(this._mesh);
                        this._mesh.skeleton.returnToRest();
                        _i = 0, ranges_1 = ranges;
                        _a.label = 1;
                    case 1:
                        if (!(_i < ranges_1.length)) return [3 /*break*/, 6];
                        range = ranges_1[_i];
                        frameIndex = range.from;
                        _a.label = 2;
                    case 2:
                        if (!(frameIndex <= range.to)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this._executeAnimationFrame(vertexData, frameIndex, textureIndex++)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        frameIndex++;
                        return [3 /*break*/, 2];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, vertexData];
                }
            });
        });
    };
    /**
     * Runs an animation frame and stores its vertex data
     *
     * @param vertexData The array to save data to.
     * @param frameIndex Current frame in the skeleton animation to render.
     * @param textureIndex Current index of the texture data.
     */
    VertexAnimationBaker.prototype._executeAnimationFrame = function (vertexData, frameIndex, textureIndex) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, _reject) {
                        _this._scene.beginAnimation(_this._mesh.skeleton, frameIndex, frameIndex, false, 1.0, function () {
                            // generate matrices
                            var skeletonMatrices = _this._mesh.skeleton.getTransformMatrices(_this._mesh);
                            vertexData.set(skeletonMatrices, textureIndex * skeletonMatrices.length);
                            resolve();
                        });
                    })];
            });
        });
    };
    /**
     * Builds a vertex animation texture given the vertexData in an array.
     * @param vertexData The vertex animation data. You can generate it with bakeVertexData().
     * @returns The vertex animation texture to be used with BakedVertexAnimationManager.
     */
    VertexAnimationBaker.prototype.textureFromBakedVertexData = function (vertexData) {
        if (!this._mesh.skeleton) {
            throw new Error("No skeleton in this mesh.");
        }
        var boneCount = this._mesh.skeleton.bones.length;
        var texture = _Materials_Textures_rawTexture__WEBPACK_IMPORTED_MODULE_1__.RawTexture.CreateRGBATexture(vertexData, (boneCount + 1) * 4, vertexData.length / ((boneCount + 1) * 4 * 4), this._scene, false, false, _Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_2__.Texture.NEAREST_NEAREST, _Engines_constants__WEBPACK_IMPORTED_MODULE_4__.Constants.TEXTURETYPE_FLOAT);
        texture.name = "VAT" + this._mesh.skeleton.name;
        return texture;
    };
    /**
     * Serializes our vertexData to an object, with a nice string for the vertexData.
     * @param vertexData The vertex array data.
     * @returns This object serialized to a JS dict.
     */
    VertexAnimationBaker.prototype.serializeBakedVertexDataToObject = function (vertexData) {
        if (!this._mesh.skeleton) {
            throw new Error("No skeleton in this mesh.");
        }
        // this converts the float array to a serialized base64 string, ~1.3x larger
        // than the original.
        var boneCount = this._mesh.skeleton.bones.length;
        var width = (boneCount + 1) * 4;
        var height = vertexData.length / ((boneCount + 1) * 4 * 4);
        var data = {
            vertexData: (0,_Misc_stringTools__WEBPACK_IMPORTED_MODULE_3__.EncodeArrayBufferToBase64)(vertexData),
            width: width,
            height: height,
        };
        return data;
    };
    /**
     * Loads previously baked data.
     * @param data The object as serialized by serializeBakedVertexDataToObject()
     * @returns The array of matrix transforms for each vertex (columns) and frame (rows), as a Float32Array.
     */
    VertexAnimationBaker.prototype.loadBakedVertexDataFromObject = function (data) {
        return new Float32Array((0,_Misc_stringTools__WEBPACK_IMPORTED_MODULE_3__.DecodeBase64ToBinary)(data.vertexData));
    };
    /**
     * Serializes our vertexData to a JSON string, with a nice string for the vertexData.
     * Should be called right after bakeVertexData().
     * @param vertexData The vertex array data.
     * @returns This object serialized to a safe string.
     */
    VertexAnimationBaker.prototype.serializeBakedVertexDataToJSON = function (vertexData) {
        return JSON.stringify(this.serializeBakedVertexDataToObject(vertexData));
    };
    /**
     * Loads previously baked data in string format.
     * @param json The json string as serialized by serializeBakedVertexDataToJSON().
     * @returns The array of matrix transforms for each vertex (columns) and frame (rows), as a Float32Array.
     */
    VertexAnimationBaker.prototype.loadBakedVertexDataFromJSON = function (json) {
        return this.loadBakedVertexDataFromObject(JSON.parse(json));
    };
    return VertexAnimationBaker;
}());



/***/ }),

/***/ "../../../lts/core/dist/Behaviors/Cameras/autoRotationBehavior.js":
/*!************************************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/Cameras/autoRotationBehavior.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoRotationBehavior": () => (/* binding */ AutoRotationBehavior)
/* harmony export */ });
/* harmony import */ var _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Events/pointerEvents */ "../../../lts/core/dist/Events/pointerEvents.js");
/* harmony import */ var _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Misc/precisionDate */ "../../../lts/core/dist/Misc/precisionDate.js");
/* harmony import */ var _Maths_math_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Maths/math.constants */ "../../../lts/core/dist/Maths/math.constants.js");



/**
 * The autoRotation behavior (AutoRotationBehavior) is designed to create a smooth rotation of an ArcRotateCamera when there is no user interaction.
 * @see https://doc.babylonjs.com/how_to/camera_behaviors#autorotation-behavior
 */
var AutoRotationBehavior = /** @class */ (function () {
    function AutoRotationBehavior() {
        this._zoomStopsAnimation = false;
        this._idleRotationSpeed = 0.05;
        this._idleRotationWaitTime = 2000;
        this._idleRotationSpinupTime = 2000;
        this.targetAlpha = null;
        this._isPointerDown = false;
        this._lastFrameTime = null;
        this._lastInteractionTime = -Infinity;
        this._cameraRotationSpeed = 0;
        this._lastFrameRadius = 0;
    }
    Object.defineProperty(AutoRotationBehavior.prototype, "name", {
        /**
         * Gets the name of the behavior.
         */
        get: function () {
            return "AutoRotation";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoRotationBehavior.prototype, "zoomStopsAnimation", {
        /**
         * Gets the flag that indicates if user zooming should stop animation.
         */
        get: function () {
            return this._zoomStopsAnimation;
        },
        /**
         * Sets the flag that indicates if user zooming should stop animation.
         */
        set: function (flag) {
            this._zoomStopsAnimation = flag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoRotationBehavior.prototype, "idleRotationSpeed", {
        /**
         * Gets the default speed at which the camera rotates around the model.
         */
        get: function () {
            return this._idleRotationSpeed;
        },
        /**
         * Sets the default speed at which the camera rotates around the model.
         */
        set: function (speed) {
            this._idleRotationSpeed = speed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoRotationBehavior.prototype, "idleRotationWaitTime", {
        /**
         * Gets the time (milliseconds) to wait after user interaction before the camera starts rotating.
         */
        get: function () {
            return this._idleRotationWaitTime;
        },
        /**
         * Sets the time (in milliseconds) to wait after user interaction before the camera starts rotating.
         */
        set: function (time) {
            this._idleRotationWaitTime = time;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoRotationBehavior.prototype, "idleRotationSpinupTime", {
        /**
         * Gets the time (milliseconds) to take to spin up to the full idle rotation speed.
         */
        get: function () {
            return this._idleRotationSpinupTime;
        },
        /**
         * Sets the time (milliseconds) to take to spin up to the full idle rotation speed.
         */
        set: function (time) {
            this._idleRotationSpinupTime = time;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoRotationBehavior.prototype, "rotationInProgress", {
        /**
         * Gets a value indicating if the camera is currently rotating because of this behavior
         */
        get: function () {
            return Math.abs(this._cameraRotationSpeed) > 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Initializes the behavior.
     */
    AutoRotationBehavior.prototype.init = function () {
        // Do nothing
    };
    /**
     * Attaches the behavior to its arc rotate camera.
     * @param camera Defines the camera to attach the behavior to
     */
    AutoRotationBehavior.prototype.attach = function (camera) {
        var _this = this;
        this._attachedCamera = camera;
        var scene = this._attachedCamera.getScene();
        this._onPrePointerObservableObserver = scene.onPrePointerObservable.add(function (pointerInfoPre) {
            if (pointerInfoPre.type === _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_0__.PointerEventTypes.POINTERDOWN) {
                _this._isPointerDown = true;
                return;
            }
            if (pointerInfoPre.type === _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_0__.PointerEventTypes.POINTERUP) {
                _this._isPointerDown = false;
            }
        });
        this._onAfterCheckInputsObserver = camera.onAfterCheckInputsObservable.add(function () {
            if (_this._reachTargetAlpha()) {
                return;
            }
            var now = _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_1__.PrecisionDate.Now;
            var dt = 0;
            if (_this._lastFrameTime != null) {
                dt = now - _this._lastFrameTime;
            }
            _this._lastFrameTime = now;
            // Stop the animation if there is user interaction and the animation should stop for this interaction
            _this._applyUserInteraction();
            var timeToRotation = now - _this._lastInteractionTime - _this._idleRotationWaitTime;
            var scale = Math.max(Math.min(timeToRotation / _this._idleRotationSpinupTime, 1), 0);
            _this._cameraRotationSpeed = _this._idleRotationSpeed * scale;
            // Step camera rotation by rotation speed
            if (_this._attachedCamera) {
                _this._attachedCamera.alpha -= _this._cameraRotationSpeed * (dt / 1000);
            }
        });
    };
    /**
     * Detaches the behavior from its current arc rotate camera.
     */
    AutoRotationBehavior.prototype.detach = function () {
        if (!this._attachedCamera) {
            return;
        }
        var scene = this._attachedCamera.getScene();
        if (this._onPrePointerObservableObserver) {
            scene.onPrePointerObservable.remove(this._onPrePointerObservableObserver);
        }
        this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver);
        this._attachedCamera = null;
    };
    /**
     * Force-reset the last interaction time
     * @param customTime an optional time that will be used instead of the current last interaction time. For example `Date.now()`
     */
    AutoRotationBehavior.prototype.resetLastInteractionTime = function (customTime) {
        this._lastInteractionTime = customTime !== null && customTime !== void 0 ? customTime : _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_1__.PrecisionDate.Now;
    };
    /**
     * Returns true if camera alpha reaches the target alpha
     * @returns true if camera alpha reaches the target alpha
     */
    AutoRotationBehavior.prototype._reachTargetAlpha = function () {
        if (this._attachedCamera && this.targetAlpha) {
            return Math.abs(this._attachedCamera.alpha - this.targetAlpha) < _Maths_math_constants__WEBPACK_IMPORTED_MODULE_2__.Epsilon;
        }
        return false;
    };
    /**
     * Returns true if user is scrolling.
     * @return true if user is scrolling.
     */
    AutoRotationBehavior.prototype._userIsZooming = function () {
        if (!this._attachedCamera) {
            return false;
        }
        return this._attachedCamera.inertialRadiusOffset !== 0;
    };
    AutoRotationBehavior.prototype._shouldAnimationStopForInteraction = function () {
        if (!this._attachedCamera) {
            return false;
        }
        var zoomHasHitLimit = false;
        if (this._lastFrameRadius === this._attachedCamera.radius && this._attachedCamera.inertialRadiusOffset !== 0) {
            zoomHasHitLimit = true;
        }
        // Update the record of previous radius - works as an approx. indicator of hitting radius limits
        this._lastFrameRadius = this._attachedCamera.radius;
        return this._zoomStopsAnimation ? zoomHasHitLimit : this._userIsZooming();
    };
    /**
     *  Applies any current user interaction to the camera. Takes into account maximum alpha rotation.
     */
    AutoRotationBehavior.prototype._applyUserInteraction = function () {
        if (this._userIsMoving() && !this._shouldAnimationStopForInteraction()) {
            this._lastInteractionTime = _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_1__.PrecisionDate.Now;
        }
    };
    // Tools
    AutoRotationBehavior.prototype._userIsMoving = function () {
        if (!this._attachedCamera) {
            return false;
        }
        return (this._attachedCamera.inertialAlphaOffset !== 0 ||
            this._attachedCamera.inertialBetaOffset !== 0 ||
            this._attachedCamera.inertialRadiusOffset !== 0 ||
            this._attachedCamera.inertialPanningX !== 0 ||
            this._attachedCamera.inertialPanningY !== 0 ||
            this._isPointerDown);
    };
    return AutoRotationBehavior;
}());



/***/ }),

/***/ "../../../lts/core/dist/Behaviors/Cameras/bouncingBehavior.js":
/*!********************************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/Cameras/bouncingBehavior.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BouncingBehavior": () => (/* binding */ BouncingBehavior)
/* harmony export */ });
/* harmony import */ var _Animations_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Animations/easing */ "../../../lts/core/dist/Animations/easing.js");
/* harmony import */ var _Animations_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Animations/animation */ "../../../lts/core/dist/Animations/animation.js");


/**
 * Add a bouncing effect to an ArcRotateCamera when reaching a specified minimum and maximum radius
 * @see https://doc.babylonjs.com/how_to/camera_behaviors#bouncing-behavior
 */
var BouncingBehavior = /** @class */ (function () {
    function BouncingBehavior() {
        /**
         * The duration of the animation, in milliseconds
         */
        this.transitionDuration = 450;
        /**
         * Length of the distance animated by the transition when lower radius is reached
         */
        this.lowerRadiusTransitionRange = 2;
        /**
         * Length of the distance animated by the transition when upper radius is reached
         */
        this.upperRadiusTransitionRange = -2;
        this._autoTransitionRange = false;
        // Animations
        this._radiusIsAnimating = false;
        this._radiusBounceTransition = null;
        this._animatables = new Array();
    }
    Object.defineProperty(BouncingBehavior.prototype, "name", {
        /**
         * Gets the name of the behavior.
         */
        get: function () {
            return "Bouncing";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BouncingBehavior.prototype, "autoTransitionRange", {
        /**
         * Gets a value indicating if the lowerRadiusTransitionRange and upperRadiusTransitionRange are defined automatically
         */
        get: function () {
            return this._autoTransitionRange;
        },
        /**
         * Sets a value indicating if the lowerRadiusTransitionRange and upperRadiusTransitionRange are defined automatically
         * Transition ranges will be set to 5% of the bounding box diagonal in world space
         */
        set: function (value) {
            var _this = this;
            if (this._autoTransitionRange === value) {
                return;
            }
            this._autoTransitionRange = value;
            var camera = this._attachedCamera;
            if (!camera) {
                return;
            }
            if (value) {
                this._onMeshTargetChangedObserver = camera.onMeshTargetChangedObservable.add(function (mesh) {
                    if (!mesh) {
                        return;
                    }
                    mesh.computeWorldMatrix(true);
                    var diagonal = mesh.getBoundingInfo().diagonalLength;
                    _this.lowerRadiusTransitionRange = diagonal * 0.05;
                    _this.upperRadiusTransitionRange = diagonal * 0.05;
                });
            }
            else if (this._onMeshTargetChangedObserver) {
                camera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver);
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Initializes the behavior.
     */
    BouncingBehavior.prototype.init = function () {
        // Do nothing
    };
    /**
     * Attaches the behavior to its arc rotate camera.
     * @param camera Defines the camera to attach the behavior to
     */
    BouncingBehavior.prototype.attach = function (camera) {
        var _this = this;
        this._attachedCamera = camera;
        this._onAfterCheckInputsObserver = camera.onAfterCheckInputsObservable.add(function () {
            if (!_this._attachedCamera) {
                return;
            }
            // Add the bounce animation to the lower radius limit
            if (_this._isRadiusAtLimit(_this._attachedCamera.lowerRadiusLimit)) {
                _this._applyBoundRadiusAnimation(_this.lowerRadiusTransitionRange);
            }
            // Add the bounce animation to the upper radius limit
            if (_this._isRadiusAtLimit(_this._attachedCamera.upperRadiusLimit)) {
                _this._applyBoundRadiusAnimation(_this.upperRadiusTransitionRange);
            }
        });
    };
    /**
     * Detaches the behavior from its current arc rotate camera.
     */
    BouncingBehavior.prototype.detach = function () {
        if (!this._attachedCamera) {
            return;
        }
        if (this._onAfterCheckInputsObserver) {
            this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver);
        }
        if (this._onMeshTargetChangedObserver) {
            this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver);
        }
        this._attachedCamera = null;
    };
    /**
     * Checks if the camera radius is at the specified limit. Takes into account animation locks.
     * @param radiusLimit The limit to check against.
     * @return Bool to indicate if at limit.
     */
    BouncingBehavior.prototype._isRadiusAtLimit = function (radiusLimit) {
        if (!this._attachedCamera) {
            return false;
        }
        if (this._attachedCamera.radius === radiusLimit && !this._radiusIsAnimating) {
            return true;
        }
        return false;
    };
    /**
     * Applies an animation to the radius of the camera, extending by the radiusDelta.
     * @param radiusDelta The delta by which to animate to. Can be negative.
     */
    BouncingBehavior.prototype._applyBoundRadiusAnimation = function (radiusDelta) {
        var _this = this;
        if (!this._attachedCamera) {
            return;
        }
        if (!this._radiusBounceTransition) {
            BouncingBehavior.EasingFunction.setEasingMode(BouncingBehavior.EasingMode);
            this._radiusBounceTransition = _Animations_animation__WEBPACK_IMPORTED_MODULE_1__.Animation.CreateAnimation("radius", _Animations_animation__WEBPACK_IMPORTED_MODULE_1__.Animation.ANIMATIONTYPE_FLOAT, 60, BouncingBehavior.EasingFunction);
        }
        // Prevent zoom until bounce has completed
        this._cachedWheelPrecision = this._attachedCamera.wheelPrecision;
        this._attachedCamera.wheelPrecision = Infinity;
        this._attachedCamera.inertialRadiusOffset = 0;
        // Animate to the radius limit
        this.stopAllAnimations();
        this._radiusIsAnimating = true;
        var animatable = _Animations_animation__WEBPACK_IMPORTED_MODULE_1__.Animation.TransitionTo("radius", this._attachedCamera.radius + radiusDelta, this._attachedCamera, this._attachedCamera.getScene(), 60, this._radiusBounceTransition, this.transitionDuration, function () { return _this._clearAnimationLocks(); });
        if (animatable) {
            this._animatables.push(animatable);
        }
    };
    /**
     * Removes all animation locks. Allows new animations to be added to any of the camera properties.
     */
    BouncingBehavior.prototype._clearAnimationLocks = function () {
        this._radiusIsAnimating = false;
        if (this._attachedCamera) {
            this._attachedCamera.wheelPrecision = this._cachedWheelPrecision;
        }
    };
    /**
     * Stops and removes all animations that have been applied to the camera
     */
    BouncingBehavior.prototype.stopAllAnimations = function () {
        if (this._attachedCamera) {
            this._attachedCamera.animations = [];
        }
        while (this._animatables.length) {
            this._animatables[0].onAnimationEnd = null;
            this._animatables[0].stop();
            this._animatables.shift();
        }
    };
    /**
     * The easing function used by animations
     */
    BouncingBehavior.EasingFunction = new _Animations_easing__WEBPACK_IMPORTED_MODULE_0__.BackEase(0.3);
    /**
     * The easing mode used by animations
     */
    BouncingBehavior.EasingMode = _Animations_easing__WEBPACK_IMPORTED_MODULE_0__.EasingFunction.EASINGMODE_EASEOUT;
    return BouncingBehavior;
}());



/***/ }),

/***/ "../../../lts/core/dist/Behaviors/Cameras/framingBehavior.js":
/*!*******************************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/Cameras/framingBehavior.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FramingBehavior": () => (/* binding */ FramingBehavior)
/* harmony export */ });
/* harmony import */ var _Animations_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Animations/easing */ "../../../lts/core/dist/Animations/easing.js");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Misc/observable */ "../../../lts/core/dist/Misc/observable.js");
/* harmony import */ var _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Events/pointerEvents */ "../../../lts/core/dist/Events/pointerEvents.js");
/* harmony import */ var _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Misc/precisionDate */ "../../../lts/core/dist/Misc/precisionDate.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Animations_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Animations/animation */ "../../../lts/core/dist/Animations/animation.js");






/**
 * The framing behavior (FramingBehavior) is designed to automatically position an ArcRotateCamera when its target is set to a mesh. It is also useful if you want to prevent the camera to go under a virtual horizontal plane.
 * @see https://doc.babylonjs.com/how_to/camera_behaviors#framing-behavior
 */
var FramingBehavior = /** @class */ (function () {
    function FramingBehavior() {
        /**
         * An event triggered when the animation to zoom on target mesh has ended
         */
        this.onTargetFramingAnimationEndObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        this._mode = FramingBehavior.FitFrustumSidesMode;
        this._radiusScale = 1.0;
        this._positionScale = 0.5;
        this._defaultElevation = 0.3;
        this._elevationReturnTime = 1500;
        this._elevationReturnWaitTime = 1000;
        this._zoomStopsAnimation = false;
        this._framingTime = 1500;
        /**
         * Define if the behavior should automatically change the configured
         * camera limits and sensibilities.
         */
        this.autoCorrectCameraLimitsAndSensibility = true;
        this._isPointerDown = false;
        this._lastInteractionTime = -Infinity;
        // Framing control
        this._animatables = new Array();
        this._betaIsAnimating = false;
    }
    Object.defineProperty(FramingBehavior.prototype, "name", {
        /**
         * Gets the name of the behavior.
         */
        get: function () {
            return "Framing";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FramingBehavior.prototype, "mode", {
        /**
         * Gets current mode used by the behavior.
         */
        get: function () {
            return this._mode;
        },
        /**
         * Sets the current mode used by the behavior
         */
        set: function (mode) {
            this._mode = mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FramingBehavior.prototype, "radiusScale", {
        /**
         * Gets the scale applied to the radius
         */
        get: function () {
            return this._radiusScale;
        },
        /**
         * Sets the scale applied to the radius (1 by default)
         */
        set: function (radius) {
            this._radiusScale = radius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FramingBehavior.prototype, "positionScale", {
        /**
         * Gets the scale to apply on Y axis to position camera focus. 0.5 by default which means the center of the bounding box.
         */
        get: function () {
            return this._positionScale;
        },
        /**
         * Sets the scale to apply on Y axis to position camera focus. 0.5 by default which means the center of the bounding box.
         */
        set: function (scale) {
            this._positionScale = scale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FramingBehavior.prototype, "defaultElevation", {
        /**
         * Gets the angle above/below the horizontal plane to return to when the return to default elevation idle
         * behaviour is triggered, in radians.
         */
        get: function () {
            return this._defaultElevation;
        },
        /**
         * Sets the angle above/below the horizontal plane to return to when the return to default elevation idle
         * behaviour is triggered, in radians.
         */
        set: function (elevation) {
            this._defaultElevation = elevation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FramingBehavior.prototype, "elevationReturnTime", {
        /**
         * Gets the time (in milliseconds) taken to return to the default beta position.
         * Negative value indicates camera should not return to default.
         */
        get: function () {
            return this._elevationReturnTime;
        },
        /**
         * Sets the time (in milliseconds) taken to return to the default beta position.
         * Negative value indicates camera should not return to default.
         */
        set: function (speed) {
            this._elevationReturnTime = speed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FramingBehavior.prototype, "elevationReturnWaitTime", {
        /**
         * Gets the delay (in milliseconds) taken before the camera returns to the default beta position.
         */
        get: function () {
            return this._elevationReturnWaitTime;
        },
        /**
         * Sets the delay (in milliseconds) taken before the camera returns to the default beta position.
         */
        set: function (time) {
            this._elevationReturnWaitTime = time;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FramingBehavior.prototype, "zoomStopsAnimation", {
        /**
         * Gets the flag that indicates if user zooming should stop animation.
         */
        get: function () {
            return this._zoomStopsAnimation;
        },
        /**
         * Sets the flag that indicates if user zooming should stop animation.
         */
        set: function (flag) {
            this._zoomStopsAnimation = flag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FramingBehavior.prototype, "framingTime", {
        /**
         * Gets the transition time when framing the mesh, in milliseconds
         */
        get: function () {
            return this._framingTime;
        },
        /**
         * Sets the transition time when framing the mesh, in milliseconds
         */
        set: function (time) {
            this._framingTime = time;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Initializes the behavior.
     */
    FramingBehavior.prototype.init = function () {
        // Do nothing
    };
    /**
     * Attaches the behavior to its arc rotate camera.
     * @param camera Defines the camera to attach the behavior to
     */
    FramingBehavior.prototype.attach = function (camera) {
        var _this = this;
        this._attachedCamera = camera;
        var scene = this._attachedCamera.getScene();
        FramingBehavior.EasingFunction.setEasingMode(FramingBehavior.EasingMode);
        this._onPrePointerObservableObserver = scene.onPrePointerObservable.add(function (pointerInfoPre) {
            if (pointerInfoPre.type === _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_2__.PointerEventTypes.POINTERDOWN) {
                _this._isPointerDown = true;
                return;
            }
            if (pointerInfoPre.type === _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_2__.PointerEventTypes.POINTERUP) {
                _this._isPointerDown = false;
            }
        });
        this._onMeshTargetChangedObserver = camera.onMeshTargetChangedObservable.add(function (mesh) {
            if (mesh) {
                _this.zoomOnMesh(mesh, undefined, function () {
                    _this.onTargetFramingAnimationEndObservable.notifyObservers();
                });
            }
        });
        this._onAfterCheckInputsObserver = camera.onAfterCheckInputsObservable.add(function () {
            // Stop the animation if there is user interaction and the animation should stop for this interaction
            _this._applyUserInteraction();
            // Maintain the camera above the ground. If the user pulls the camera beneath the ground plane, lift it
            // back to the default position after a given timeout
            _this._maintainCameraAboveGround();
        });
    };
    /**
     * Detaches the behavior from its current arc rotate camera.
     */
    FramingBehavior.prototype.detach = function () {
        if (!this._attachedCamera) {
            return;
        }
        var scene = this._attachedCamera.getScene();
        if (this._onPrePointerObservableObserver) {
            scene.onPrePointerObservable.remove(this._onPrePointerObservableObserver);
        }
        if (this._onAfterCheckInputsObserver) {
            this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver);
        }
        if (this._onMeshTargetChangedObserver) {
            this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver);
        }
        this._attachedCamera = null;
    };
    /**
     * Targets the given mesh and updates zoom level accordingly.
     * @param mesh  The mesh to target.
     * @param focusOnOriginXZ Determines if the camera should focus on 0 in the X and Z axis instead of the mesh
     * @param onAnimationEnd Callback triggered at the end of the framing animation
     */
    FramingBehavior.prototype.zoomOnMesh = function (mesh, focusOnOriginXZ, onAnimationEnd) {
        if (focusOnOriginXZ === void 0) { focusOnOriginXZ = false; }
        if (onAnimationEnd === void 0) { onAnimationEnd = null; }
        mesh.computeWorldMatrix(true);
        var boundingBox = mesh.getBoundingInfo().boundingBox;
        this.zoomOnBoundingInfo(boundingBox.minimumWorld, boundingBox.maximumWorld, focusOnOriginXZ, onAnimationEnd);
    };
    /**
     * Targets the given mesh with its children and updates zoom level accordingly.
     * @param mesh  The mesh to target.
     * @param focusOnOriginXZ Determines if the camera should focus on 0 in the X and Z axis instead of the mesh
     * @param onAnimationEnd Callback triggered at the end of the framing animation
     */
    FramingBehavior.prototype.zoomOnMeshHierarchy = function (mesh, focusOnOriginXZ, onAnimationEnd) {
        if (focusOnOriginXZ === void 0) { focusOnOriginXZ = false; }
        if (onAnimationEnd === void 0) { onAnimationEnd = null; }
        mesh.computeWorldMatrix(true);
        var boundingBox = mesh.getHierarchyBoundingVectors(true);
        this.zoomOnBoundingInfo(boundingBox.min, boundingBox.max, focusOnOriginXZ, onAnimationEnd);
    };
    /**
     * Targets the given meshes with their children and updates zoom level accordingly.
     * @param meshes  The mesh to target.
     * @param focusOnOriginXZ Determines if the camera should focus on 0 in the X and Z axis instead of the mesh
     * @param onAnimationEnd Callback triggered at the end of the framing animation
     */
    FramingBehavior.prototype.zoomOnMeshesHierarchy = function (meshes, focusOnOriginXZ, onAnimationEnd) {
        if (focusOnOriginXZ === void 0) { focusOnOriginXZ = false; }
        if (onAnimationEnd === void 0) { onAnimationEnd = null; }
        var min = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        var max = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (var i = 0; i < meshes.length; i++) {
            var boundingInfo = meshes[i].getHierarchyBoundingVectors(true);
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3.CheckExtends(boundingInfo.min, min, max);
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3.CheckExtends(boundingInfo.max, min, max);
        }
        this.zoomOnBoundingInfo(min, max, focusOnOriginXZ, onAnimationEnd);
    };
    /**
     * Targets the bounding box info defined by its extends and updates zoom level accordingly.
     * @param minimumWorld Determines the smaller position of the bounding box extend
     * @param maximumWorld Determines the bigger position of the bounding box extend
     * @param focusOnOriginXZ Determines if the camera should focus on 0 in the X and Z axis instead of the mesh
     * @param onAnimationEnd Callback triggered at the end of the framing animation
     */
    FramingBehavior.prototype.zoomOnBoundingInfo = function (minimumWorld, maximumWorld, focusOnOriginXZ, onAnimationEnd) {
        var _this = this;
        if (focusOnOriginXZ === void 0) { focusOnOriginXZ = false; }
        if (onAnimationEnd === void 0) { onAnimationEnd = null; }
        var zoomTarget;
        if (!this._attachedCamera) {
            return;
        }
        // Find target by interpolating from bottom of bounding box in world-space to top via framingPositionY
        var bottom = minimumWorld.y;
        var top = maximumWorld.y;
        var zoomTargetY = bottom + (top - bottom) * this._positionScale;
        var radiusWorld = maximumWorld.subtract(minimumWorld).scale(0.5);
        if (focusOnOriginXZ) {
            zoomTarget = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, zoomTargetY, 0);
        }
        else {
            var centerWorld = minimumWorld.add(radiusWorld);
            zoomTarget = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3(centerWorld.x, zoomTargetY, centerWorld.z);
        }
        if (!this._vectorTransition) {
            this._vectorTransition = _Animations_animation__WEBPACK_IMPORTED_MODULE_5__.Animation.CreateAnimation("target", _Animations_animation__WEBPACK_IMPORTED_MODULE_5__.Animation.ANIMATIONTYPE_VECTOR3, 60, FramingBehavior.EasingFunction);
        }
        this._betaIsAnimating = true;
        var animatable = _Animations_animation__WEBPACK_IMPORTED_MODULE_5__.Animation.TransitionTo("target", zoomTarget, this._attachedCamera, this._attachedCamera.getScene(), 60, this._vectorTransition, this._framingTime);
        if (animatable) {
            this._animatables.push(animatable);
        }
        // sets the radius and lower radius bounds
        // Small delta ensures camera is not always at lower zoom limit.
        var radius = 0;
        if (this._mode === FramingBehavior.FitFrustumSidesMode) {
            var position = this._calculateLowerRadiusFromModelBoundingSphere(minimumWorld, maximumWorld);
            if (this.autoCorrectCameraLimitsAndSensibility) {
                this._attachedCamera.lowerRadiusLimit = radiusWorld.length() + this._attachedCamera.minZ;
            }
            radius = position;
        }
        else if (this._mode === FramingBehavior.IgnoreBoundsSizeMode) {
            radius = this._calculateLowerRadiusFromModelBoundingSphere(minimumWorld, maximumWorld);
            if (this.autoCorrectCameraLimitsAndSensibility && this._attachedCamera.lowerRadiusLimit === null) {
                this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ;
            }
        }
        // Set sensibilities
        if (this.autoCorrectCameraLimitsAndSensibility) {
            var extend = maximumWorld.subtract(minimumWorld).length();
            this._attachedCamera.panningSensibility = 5000 / extend;
            this._attachedCamera.wheelPrecision = 100 / radius;
        }
        // transition to new radius
        if (!this._radiusTransition) {
            this._radiusTransition = _Animations_animation__WEBPACK_IMPORTED_MODULE_5__.Animation.CreateAnimation("radius", _Animations_animation__WEBPACK_IMPORTED_MODULE_5__.Animation.ANIMATIONTYPE_FLOAT, 60, FramingBehavior.EasingFunction);
        }
        animatable = _Animations_animation__WEBPACK_IMPORTED_MODULE_5__.Animation.TransitionTo("radius", radius, this._attachedCamera, this._attachedCamera.getScene(), 60, this._radiusTransition, this._framingTime, function () {
            _this.stopAllAnimations();
            if (onAnimationEnd) {
                onAnimationEnd();
            }
            if (_this._attachedCamera && _this._attachedCamera.useInputToRestoreState) {
                _this._attachedCamera.storeState();
            }
        });
        if (animatable) {
            this._animatables.push(animatable);
        }
    };
    /**
     * Calculates the lowest radius for the camera based on the bounding box of the mesh.
     * @param minimumWorld
     * @param maximumWorld
     * @return The minimum distance from the primary mesh's center point at which the camera must be kept in order
     *		 to fully enclose the mesh in the viewing frustum.
     */
    FramingBehavior.prototype._calculateLowerRadiusFromModelBoundingSphere = function (minimumWorld, maximumWorld) {
        var size = maximumWorld.subtract(minimumWorld);
        var boxVectorGlobalDiagonal = size.length();
        var frustumSlope = this._getFrustumSlope();
        // Formula for setting distance
        // (Good explanation: http://stackoverflow.com/questions/2866350/move-camera-to-fit-3d-scene)
        var radiusWithoutFraming = boxVectorGlobalDiagonal * 0.5;
        // Horizon distance
        var radius = radiusWithoutFraming * this._radiusScale;
        var distanceForHorizontalFrustum = radius * Math.sqrt(1.0 + 1.0 / (frustumSlope.x * frustumSlope.x));
        var distanceForVerticalFrustum = radius * Math.sqrt(1.0 + 1.0 / (frustumSlope.y * frustumSlope.y));
        var distance = Math.max(distanceForHorizontalFrustum, distanceForVerticalFrustum);
        var camera = this._attachedCamera;
        if (!camera) {
            return 0;
        }
        if (camera.lowerRadiusLimit && this._mode === FramingBehavior.IgnoreBoundsSizeMode) {
            // Don't exceed the requested limit
            distance = distance < camera.lowerRadiusLimit ? camera.lowerRadiusLimit : distance;
        }
        // Don't exceed the upper radius limit
        if (camera.upperRadiusLimit) {
            distance = distance > camera.upperRadiusLimit ? camera.upperRadiusLimit : distance;
        }
        return distance;
    };
    /**
     * Keeps the camera above the ground plane. If the user pulls the camera below the ground plane, the camera
     * is automatically returned to its default position (expected to be above ground plane).
     */
    FramingBehavior.prototype._maintainCameraAboveGround = function () {
        var _this = this;
        if (this._elevationReturnTime < 0) {
            return;
        }
        var timeSinceInteraction = _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_3__.PrecisionDate.Now - this._lastInteractionTime;
        var defaultBeta = Math.PI * 0.5 - this._defaultElevation;
        var limitBeta = Math.PI * 0.5;
        // Bring the camera back up if below the ground plane
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > limitBeta && timeSinceInteraction >= this._elevationReturnWaitTime) {
            this._betaIsAnimating = true;
            //Transition to new position
            this.stopAllAnimations();
            if (!this._betaTransition) {
                this._betaTransition = _Animations_animation__WEBPACK_IMPORTED_MODULE_5__.Animation.CreateAnimation("beta", _Animations_animation__WEBPACK_IMPORTED_MODULE_5__.Animation.ANIMATIONTYPE_FLOAT, 60, FramingBehavior.EasingFunction);
            }
            var animatabe = _Animations_animation__WEBPACK_IMPORTED_MODULE_5__.Animation.TransitionTo("beta", defaultBeta, this._attachedCamera, this._attachedCamera.getScene(), 60, this._betaTransition, this._elevationReturnTime, function () {
                _this._clearAnimationLocks();
                _this.stopAllAnimations();
            });
            if (animatabe) {
                this._animatables.push(animatabe);
            }
        }
    };
    /**
     * Returns the frustum slope based on the canvas ratio and camera FOV
     * @returns The frustum slope represented as a Vector2 with X and Y slopes
     */
    FramingBehavior.prototype._getFrustumSlope = function () {
        // Calculate the viewport ratio
        // Aspect Ratio is Height/Width.
        var camera = this._attachedCamera;
        if (!camera) {
            return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector2.Zero();
        }
        var engine = camera.getScene().getEngine();
        var aspectRatio = engine.getAspectRatio(camera);
        // Camera FOV is the vertical field of view (top-bottom) in radians.
        // Slope of the frustum top/bottom planes in view space, relative to the forward vector.
        var frustumSlopeY = Math.tan(camera.fov / 2);
        // Slope of the frustum left/right planes in view space, relative to the forward vector.
        // Provides the amount that one side (e.g. left) of the frustum gets wider for every unit
        // along the forward vector.
        var frustumSlopeX = frustumSlopeY * aspectRatio;
        return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector2(frustumSlopeX, frustumSlopeY);
    };
    /**
     * Removes all animation locks. Allows new animations to be added to any of the arcCamera properties.
     */
    FramingBehavior.prototype._clearAnimationLocks = function () {
        this._betaIsAnimating = false;
    };
    /**
     *  Applies any current user interaction to the camera. Takes into account maximum alpha rotation.
     */
    FramingBehavior.prototype._applyUserInteraction = function () {
        if (this.isUserIsMoving) {
            this._lastInteractionTime = _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_3__.PrecisionDate.Now;
            this.stopAllAnimations();
            this._clearAnimationLocks();
        }
    };
    /**
     * Stops and removes all animations that have been applied to the camera
     */
    FramingBehavior.prototype.stopAllAnimations = function () {
        if (this._attachedCamera) {
            this._attachedCamera.animations = [];
        }
        while (this._animatables.length) {
            if (this._animatables[0]) {
                this._animatables[0].onAnimationEnd = null;
                this._animatables[0].stop();
            }
            this._animatables.shift();
        }
    };
    Object.defineProperty(FramingBehavior.prototype, "isUserIsMoving", {
        /**
         * Gets a value indicating if the user is moving the camera
         */
        get: function () {
            if (!this._attachedCamera) {
                return false;
            }
            return (this._attachedCamera.inertialAlphaOffset !== 0 ||
                this._attachedCamera.inertialBetaOffset !== 0 ||
                this._attachedCamera.inertialRadiusOffset !== 0 ||
                this._attachedCamera.inertialPanningX !== 0 ||
                this._attachedCamera.inertialPanningY !== 0 ||
                this._isPointerDown);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The easing function used by animations
     */
    FramingBehavior.EasingFunction = new _Animations_easing__WEBPACK_IMPORTED_MODULE_0__.ExponentialEase();
    /**
     * The easing mode used by animations
     */
    FramingBehavior.EasingMode = _Animations_easing__WEBPACK_IMPORTED_MODULE_0__.EasingFunction.EASINGMODE_EASEINOUT;
    // Statics
    /**
     * The camera can move all the way towards the mesh.
     */
    FramingBehavior.IgnoreBoundsSizeMode = 0;
    /**
     * The camera is not allowed to zoom closer to the mesh than the point at which the adjusted bounding sphere touches the frustum sides
     */
    FramingBehavior.FitFrustumSidesMode = 1;
    return FramingBehavior;
}());



/***/ }),

/***/ "../../../lts/core/dist/Behaviors/Cameras/index.js":
/*!*********************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/Cameras/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoRotationBehavior": () => (/* reexport safe */ _autoRotationBehavior__WEBPACK_IMPORTED_MODULE_0__.AutoRotationBehavior),
/* harmony export */   "BouncingBehavior": () => (/* reexport safe */ _bouncingBehavior__WEBPACK_IMPORTED_MODULE_1__.BouncingBehavior),
/* harmony export */   "FramingBehavior": () => (/* reexport safe */ _framingBehavior__WEBPACK_IMPORTED_MODULE_2__.FramingBehavior)
/* harmony export */ });
/* harmony import */ var _autoRotationBehavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autoRotationBehavior */ "../../../lts/core/dist/Behaviors/Cameras/autoRotationBehavior.js");
/* harmony import */ var _bouncingBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bouncingBehavior */ "../../../lts/core/dist/Behaviors/Cameras/bouncingBehavior.js");
/* harmony import */ var _framingBehavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framingBehavior */ "../../../lts/core/dist/Behaviors/Cameras/framingBehavior.js");





/***/ }),

/***/ "../../../lts/core/dist/Behaviors/Meshes/attachToBoxBehavior.js":
/*!**********************************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/Meshes/attachToBoxBehavior.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachToBoxBehavior": () => (/* binding */ AttachToBoxBehavior)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");

/**
 * @hidden
 */
var FaceDirectionInfo = /** @class */ (function () {
    function FaceDirectionInfo(direction, rotatedDirection, diff, ignore) {
        if (rotatedDirection === void 0) { rotatedDirection = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(); }
        if (diff === void 0) { diff = 0; }
        if (ignore === void 0) { ignore = false; }
        this.direction = direction;
        this.rotatedDirection = rotatedDirection;
        this.diff = diff;
        this.ignore = ignore;
    }
    return FaceDirectionInfo;
}());
/**
 * A behavior that when attached to a mesh will will place a specified node on the meshes face pointing towards the camera
 */
var AttachToBoxBehavior = /** @class */ (function () {
    /**
     * Creates the AttachToBoxBehavior, used to attach UI to the closest face of the box to a camera
     * @param _ui The transform node that should be attached to the mesh
     */
    function AttachToBoxBehavior(_ui) {
        this._ui = _ui;
        /**
         *  The name of the behavior
         */
        this.name = "AttachToBoxBehavior";
        /**
         * The distance away from the face of the mesh that the UI should be attached to (default: 0.15)
         */
        this.distanceAwayFromFace = 0.15;
        /**
         * The distance from the bottom of the face that the UI should be attached to (default: 0.15)
         */
        this.distanceAwayFromBottomOfFace = 0.15;
        this._faceVectors = [
            new FaceDirectionInfo(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Up()),
            new FaceDirectionInfo(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Down()),
            new FaceDirectionInfo(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Left()),
            new FaceDirectionInfo(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Right()),
            new FaceDirectionInfo(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Forward()),
            new FaceDirectionInfo(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Forward().scaleInPlace(-1)),
        ];
        this._tmpMatrix = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix();
        this._tmpVector = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        this._zeroVector = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        this._lookAtTmpMatrix = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix();
        /* Does nothing */
    }
    /**
     *  Initializes the behavior
     */
    AttachToBoxBehavior.prototype.init = function () {
        /* Does nothing */
    };
    AttachToBoxBehavior.prototype._closestFace = function (targetDirection) {
        var _this = this;
        // Go over each face and calculate the angle between the face's normal and targetDirection
        this._faceVectors.forEach(function (v) {
            if (!_this._target.rotationQuaternion) {
                _this._target.rotationQuaternion = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(_this._target.rotation.y, _this._target.rotation.x, _this._target.rotation.z);
            }
            _this._target.rotationQuaternion.toRotationMatrix(_this._tmpMatrix);
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesToRef(v.direction, _this._tmpMatrix, v.rotatedDirection);
            v.diff = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.GetAngleBetweenVectors(v.rotatedDirection, targetDirection, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Cross(v.rotatedDirection, targetDirection));
        });
        // Return the face information of the one with the normal closest to target direction
        return this._faceVectors.reduce(function (min, p) {
            if (min.ignore) {
                return p;
            }
            else if (p.ignore) {
                return min;
            }
            else {
                return min.diff < p.diff ? min : p;
            }
        }, this._faceVectors[0]);
    };
    AttachToBoxBehavior.prototype._lookAtToRef = function (pos, up, ref) {
        if (up === void 0) { up = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0); }
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.LookAtLHToRef(this._zeroVector, pos, up, this._lookAtTmpMatrix);
        this._lookAtTmpMatrix.invert();
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromRotationMatrixToRef(this._lookAtTmpMatrix, ref);
    };
    /**
     * Attaches the AttachToBoxBehavior to the passed in mesh
     * @param target The mesh that the specified node will be attached to
     */
    AttachToBoxBehavior.prototype.attach = function (target) {
        var _this = this;
        this._target = target;
        this._scene = this._target.getScene();
        // Every frame, update the app bars position
        this._onRenderObserver = this._scene.onBeforeRenderObservable.add(function () {
            if (!_this._scene.activeCamera) {
                return;
            }
            // Find the face closest to the cameras position
            var cameraPos = _this._scene.activeCamera.position;
            if (_this._scene.activeCamera.devicePosition) {
                cameraPos = _this._scene.activeCamera.devicePosition;
            }
            var facing = _this._closestFace(cameraPos.subtract(target.position));
            if (_this._scene.activeCamera.leftCamera) {
                _this._scene.activeCamera.leftCamera.computeWorldMatrix().getRotationMatrixToRef(_this._tmpMatrix);
            }
            else {
                _this._scene.activeCamera.computeWorldMatrix().getRotationMatrixToRef(_this._tmpMatrix);
            }
            // Get camera up direction
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesToRef(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Up(), _this._tmpMatrix, _this._tmpVector);
            // Ignore faces to not select a parallel face for the up vector of the UI
            _this._faceVectors.forEach(function (v) {
                if (facing.direction.x && v.direction.x) {
                    v.ignore = true;
                }
                if (facing.direction.y && v.direction.y) {
                    v.ignore = true;
                }
                if (facing.direction.z && v.direction.z) {
                    v.ignore = true;
                }
            });
            var facingUp = _this._closestFace(_this._tmpVector);
            // Unignore faces
            _this._faceVectors.forEach(function (v) {
                v.ignore = false;
            });
            // Position the app bar on that face
            _this._ui.position.copyFrom(target.position);
            if (facing.direction.x) {
                facing.rotatedDirection.scaleToRef(target.scaling.x / 2 + _this.distanceAwayFromFace, _this._tmpVector);
                _this._ui.position.addInPlace(_this._tmpVector);
            }
            if (facing.direction.y) {
                facing.rotatedDirection.scaleToRef(target.scaling.y / 2 + _this.distanceAwayFromFace, _this._tmpVector);
                _this._ui.position.addInPlace(_this._tmpVector);
            }
            if (facing.direction.z) {
                facing.rotatedDirection.scaleToRef(target.scaling.z / 2 + _this.distanceAwayFromFace, _this._tmpVector);
                _this._ui.position.addInPlace(_this._tmpVector);
            }
            // Rotate to be oriented properly to the camera
            if (!_this._ui.rotationQuaternion) {
                _this._ui.rotationQuaternion = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(_this._ui.rotation.y, _this._ui.rotation.x, _this._ui.rotation.z);
            }
            facing.rotatedDirection.scaleToRef(-1, _this._tmpVector);
            _this._lookAtToRef(_this._tmpVector, facingUp.rotatedDirection, _this._ui.rotationQuaternion);
            // Place ui the correct distance from the bottom of the mesh
            if (facingUp.direction.x) {
                _this._ui.up.scaleToRef(_this.distanceAwayFromBottomOfFace - target.scaling.x / 2, _this._tmpVector);
            }
            if (facingUp.direction.y) {
                _this._ui.up.scaleToRef(_this.distanceAwayFromBottomOfFace - target.scaling.y / 2, _this._tmpVector);
            }
            if (facingUp.direction.z) {
                _this._ui.up.scaleToRef(_this.distanceAwayFromBottomOfFace - target.scaling.z / 2, _this._tmpVector);
            }
            _this._ui.position.addInPlace(_this._tmpVector);
        });
    };
    /**
     *  Detaches the behavior from the mesh
     */
    AttachToBoxBehavior.prototype.detach = function () {
        this._scene.onBeforeRenderObservable.remove(this._onRenderObserver);
    };
    return AttachToBoxBehavior;
}());



/***/ }),

/***/ "../../../lts/core/dist/Behaviors/Meshes/baseSixDofDragBehavior.js":
/*!*************************************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/Meshes/baseSixDofDragBehavior.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseSixDofDragBehavior": () => (/* binding */ BaseSixDofDragBehavior)
/* harmony export */ });
/* harmony import */ var _Meshes_abstractMesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Meshes/abstractMesh */ "../../../lts/core/dist/Meshes/abstractMesh.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scene */ "../../../lts/core/dist/scene.js");
/* harmony import */ var _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Events/pointerEvents */ "../../../lts/core/dist/Events/pointerEvents.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Misc/observable */ "../../../lts/core/dist/Misc/observable.js");
/* harmony import */ var _Cameras_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Cameras/camera */ "../../../lts/core/dist/Cameras/camera.js");






/**
 * Base behavior for six degrees of freedom interactions in XR experiences.
 * Creates virtual meshes that are dragged around
 * And observables for position/rotation changes
 */
var BaseSixDofDragBehavior = /** @class */ (function () {
    function BaseSixDofDragBehavior() {
        this._attachedToElement = false;
        this._virtualMeshesInfo = {};
        this._tmpVector = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3();
        this._tmpQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Quaternion();
        this._dragType = {
            NONE: 0,
            DRAG: 1,
            DRAG_WITH_CONTROLLER: 2,
            NEAR_DRAG: 3,
        };
        this._moving = false;
        this._dragging = this._dragType.NONE;
        /**
         * The list of child meshes that can receive drag events
         * If `null`, all child meshes will receive drag event
         */
        this.draggableMeshes = null;
        /**
         * How much faster the object should move when the controller is moving towards it. This is useful to bring objects that are far away from the user to them faster. Set this to 0 to avoid any speed increase. (Default: 3)
         */
        this.zDragFactor = 3;
        /**
         * In case of multipointer interaction, all pointer ids currently active are stored here
         */
        this.currentDraggingPointerIds = [];
        /**
        /**
         * If camera controls should be detached during the drag
         */
        this.detachCameraControls = true;
        /**
         * Fires each time a drag starts
         */
        this.onDragStartObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_4__.Observable();
        /**
         * Fires each time a drag happens
         */
        this.onDragObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_4__.Observable();
        /**
         *  Fires each time a drag ends (eg. mouse release after drag)
         */
        this.onDragEndObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_4__.Observable();
        /**
         * Should the behavior allow simultaneous pointers to interact with the owner node.
         */
        this.allowMultiPointer = true;
    }
    Object.defineProperty(BaseSixDofDragBehavior.prototype, "currentDraggingPointerId", {
        /**
         * The id of the pointer that is currently interacting with the behavior (-1 when no pointer is active)
         */
        get: function () {
            if (this.currentDraggingPointerIds[0] !== undefined) {
                return this.currentDraggingPointerIds[0];
            }
            return -1;
        },
        set: function (value) {
            this.currentDraggingPointerIds[0] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseSixDofDragBehavior.prototype, "currentDraggingPointerID", {
        /**
         * Get or set the currentDraggingPointerId
         * @deprecated Please use currentDraggingPointerId instead
         */
        get: function () {
            return this.currentDraggingPointerId;
        },
        set: function (currentDraggingPointerID) {
            this.currentDraggingPointerId = currentDraggingPointerID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseSixDofDragBehavior.prototype, "name", {
        /**
         *  The name of the behavior
         */
        get: function () {
            return "BaseSixDofDrag";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseSixDofDragBehavior.prototype, "isMoving", {
        /**
         *  Returns true if the attached mesh is currently moving with this behavior
         */
        get: function () {
            return this._moving;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *  Initializes the behavior
     */
    BaseSixDofDragBehavior.prototype.init = function () { };
    Object.defineProperty(BaseSixDofDragBehavior.prototype, "_pointerCamera", {
        /**
         * In the case of multiple active cameras, the cameraToUseForPointers should be used if set instead of active camera
         */
        get: function () {
            if (this._scene.cameraToUseForPointers) {
                return this._scene.cameraToUseForPointers;
            }
            else {
                return this._scene.activeCamera;
            }
        },
        enumerable: false,
        configurable: true
    });
    BaseSixDofDragBehavior.prototype._createVirtualMeshInfo = function () {
        // Setup virtual meshes to be used for dragging without dirtying the existing scene
        var dragMesh = new _Meshes_abstractMesh__WEBPACK_IMPORTED_MODULE_0__.AbstractMesh("", BaseSixDofDragBehavior._virtualScene);
        dragMesh.rotationQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Quaternion();
        var originMesh = new _Meshes_abstractMesh__WEBPACK_IMPORTED_MODULE_0__.AbstractMesh("", BaseSixDofDragBehavior._virtualScene);
        originMesh.rotationQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Quaternion();
        var pivotMesh = new _Meshes_abstractMesh__WEBPACK_IMPORTED_MODULE_0__.AbstractMesh("", BaseSixDofDragBehavior._virtualScene);
        pivotMesh.rotationQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Quaternion();
        return {
            dragging: false,
            moving: false,
            dragMesh: dragMesh,
            originMesh: originMesh,
            pivotMesh: pivotMesh,
            startingPivotPosition: new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(),
            startingPivotOrientation: new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Quaternion(),
            startingPosition: new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(),
            startingOrientation: new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Quaternion(),
            lastOriginPosition: new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(),
            lastDragPosition: new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(),
        };
    };
    BaseSixDofDragBehavior.prototype._resetVirtualMeshesPosition = function () {
        for (var i = 0; i < this.currentDraggingPointerIds.length; i++) {
            this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].pivotMesh.position.copyFrom(this._ownerNode.getAbsolutePivotPoint());
            this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].pivotMesh.rotationQuaternion.copyFrom(this._ownerNode.rotationQuaternion);
            this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].startingPivotPosition.copyFrom(this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].pivotMesh.position);
            this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].startingPivotOrientation.copyFrom(this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].pivotMesh.rotationQuaternion);
            this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].startingPosition.copyFrom(this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].dragMesh.position);
            this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].startingOrientation.copyFrom(this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].dragMesh.rotationQuaternion);
        }
    };
    BaseSixDofDragBehavior.prototype._pointerUpdate2D = function (ray, pointerId, zDragFactor) {
        if (this._pointerCamera && this._pointerCamera.cameraRigMode == _Cameras_camera__WEBPACK_IMPORTED_MODULE_5__.Camera.RIG_MODE_NONE && !this._pointerCamera._isLeftCamera && !this._pointerCamera._isRightCamera) {
            ray.origin.copyFrom(this._pointerCamera.globalPosition);
            zDragFactor = 0;
        }
        var virtualMeshesInfo = this._virtualMeshesInfo[pointerId];
        // Calculate controller drag distance in controller space
        var originDragDifference = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.TmpVectors.Vector3[0];
        ray.origin.subtractToRef(virtualMeshesInfo.lastOriginPosition, originDragDifference);
        virtualMeshesInfo.lastOriginPosition.copyFrom(ray.origin);
        var localOriginDragDifference = -_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Dot(originDragDifference, ray.direction);
        virtualMeshesInfo.originMesh.addChild(virtualMeshesInfo.dragMesh);
        virtualMeshesInfo.originMesh.addChild(virtualMeshesInfo.pivotMesh);
        this._applyZOffset(virtualMeshesInfo.dragMesh, localOriginDragDifference, zDragFactor);
        this._applyZOffset(virtualMeshesInfo.pivotMesh, localOriginDragDifference, zDragFactor);
        // Update the controller position
        virtualMeshesInfo.originMesh.position.copyFrom(ray.origin);
        var lookAt = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.TmpVectors.Vector3[0];
        ray.origin.addToRef(ray.direction, lookAt);
        virtualMeshesInfo.originMesh.lookAt(lookAt);
        virtualMeshesInfo.originMesh.removeChild(virtualMeshesInfo.dragMesh);
        virtualMeshesInfo.originMesh.removeChild(virtualMeshesInfo.pivotMesh);
    };
    BaseSixDofDragBehavior.prototype._pointerUpdateXR = function (controllerAimTransform, controllerGripTransform, pointerId, zDragFactor) {
        var virtualMeshesInfo = this._virtualMeshesInfo[pointerId];
        virtualMeshesInfo.originMesh.position.copyFrom(controllerAimTransform.position);
        if (this._dragging === this._dragType.NEAR_DRAG && controllerGripTransform) {
            virtualMeshesInfo.originMesh.rotationQuaternion.copyFrom(controllerGripTransform.rotationQuaternion);
        }
        else {
            virtualMeshesInfo.originMesh.rotationQuaternion.copyFrom(controllerAimTransform.rotationQuaternion);
        }
        virtualMeshesInfo.pivotMesh.computeWorldMatrix(true);
        virtualMeshesInfo.dragMesh.computeWorldMatrix(true);
        // Z scaling logic
        if (zDragFactor !== 0) {
            // Camera.getForwardRay modifies TmpVectors.Vector[0-3], so cache it in advance
            var cameraForwardVec = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.TmpVectors.Vector3[0];
            var originDragDirection = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.TmpVectors.Vector3[1];
            cameraForwardVec.copyFrom(this._pointerCamera.getForwardRay().direction);
            virtualMeshesInfo.originMesh.position.subtractToRef(virtualMeshesInfo.lastOriginPosition, originDragDirection);
            virtualMeshesInfo.lastOriginPosition.copyFrom(virtualMeshesInfo.originMesh.position);
            var controllerDragDistance = originDragDirection.length();
            originDragDirection.normalize();
            var cameraToDrag = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.TmpVectors.Vector3[2];
            var controllerToDrag = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.TmpVectors.Vector3[3];
            virtualMeshesInfo.dragMesh.absolutePosition.subtractToRef(this._pointerCamera.globalPosition, cameraToDrag);
            virtualMeshesInfo.dragMesh.absolutePosition.subtractToRef(virtualMeshesInfo.originMesh.position, controllerToDrag);
            var controllerToDragDistance = controllerToDrag.length();
            cameraToDrag.normalize();
            controllerToDrag.normalize();
            var controllerDragScaling = Math.abs(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Dot(originDragDirection, controllerToDrag)) * _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Dot(originDragDirection, cameraForwardVec);
            var zOffsetScaling = controllerDragScaling * zDragFactor * controllerDragDistance * controllerToDragDistance;
            // Prevent pulling the mesh through the controller
            var minDistanceFromControllerToDragMesh = 0.01;
            if (zOffsetScaling < 0 && minDistanceFromControllerToDragMesh - controllerToDragDistance > zOffsetScaling) {
                zOffsetScaling = Math.min(minDistanceFromControllerToDragMesh - controllerToDragDistance, 0);
            }
            controllerToDrag.scaleInPlace(zOffsetScaling);
            controllerToDrag.addToRef(virtualMeshesInfo.pivotMesh.absolutePosition, this._tmpVector);
            virtualMeshesInfo.pivotMesh.setAbsolutePosition(this._tmpVector);
            controllerToDrag.addToRef(virtualMeshesInfo.dragMesh.absolutePosition, this._tmpVector);
            virtualMeshesInfo.dragMesh.setAbsolutePosition(this._tmpVector);
        }
    };
    /**
     * Attaches the scale behavior the passed in mesh
     * @param ownerNode The mesh that will be scaled around once attached
     */
    BaseSixDofDragBehavior.prototype.attach = function (ownerNode) {
        var _this = this;
        this._ownerNode = ownerNode;
        this._scene = this._ownerNode.getScene();
        if (!BaseSixDofDragBehavior._virtualScene) {
            BaseSixDofDragBehavior._virtualScene = new _scene__WEBPACK_IMPORTED_MODULE_1__.Scene(this._scene.getEngine(), { virtual: true });
            BaseSixDofDragBehavior._virtualScene.detachControl();
        }
        var pickPredicate = function (m) {
            return _this._ownerNode === m || (m.isDescendantOf(_this._ownerNode) && (!_this.draggableMeshes || _this.draggableMeshes.indexOf(m) !== -1));
        };
        this._pointerObserver = this._scene.onPointerObservable.add(function (pointerInfo) {
            var pointerId = pointerInfo.event.pointerId;
            if (!_this._virtualMeshesInfo[pointerId]) {
                _this._virtualMeshesInfo[pointerId] = _this._createVirtualMeshInfo();
            }
            var virtualMeshesInfo = _this._virtualMeshesInfo[pointerId];
            var isXRPointer = pointerInfo.event.pointerType === "xr";
            if (pointerInfo.type == _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_2__.PointerEventTypes.POINTERDOWN) {
                if (!virtualMeshesInfo.dragging &&
                    pointerInfo.pickInfo &&
                    pointerInfo.pickInfo.hit &&
                    pointerInfo.pickInfo.pickedMesh &&
                    pointerInfo.pickInfo.pickedPoint &&
                    pointerInfo.pickInfo.ray &&
                    (!isXRPointer || pointerInfo.pickInfo.aimTransform) &&
                    pickPredicate(pointerInfo.pickInfo.pickedMesh)) {
                    if (!_this.allowMultiPointer && _this.currentDraggingPointerIds.length > 0) {
                        return;
                    }
                    if (_this._pointerCamera &&
                        _this._pointerCamera.cameraRigMode === _Cameras_camera__WEBPACK_IMPORTED_MODULE_5__.Camera.RIG_MODE_NONE &&
                        !_this._pointerCamera._isLeftCamera &&
                        !_this._pointerCamera._isRightCamera) {
                        pointerInfo.pickInfo.ray.origin.copyFrom(_this._pointerCamera.globalPosition);
                    }
                    _this._ownerNode.computeWorldMatrix(true);
                    var virtualMeshesInfo_1 = _this._virtualMeshesInfo[pointerId];
                    if (isXRPointer) {
                        _this._dragging = pointerInfo.pickInfo.originMesh ? _this._dragType.NEAR_DRAG : _this._dragType.DRAG_WITH_CONTROLLER;
                        virtualMeshesInfo_1.originMesh.position.copyFrom(pointerInfo.pickInfo.aimTransform.position);
                        if (_this._dragging === _this._dragType.NEAR_DRAG && pointerInfo.pickInfo.gripTransform) {
                            virtualMeshesInfo_1.originMesh.rotationQuaternion.copyFrom(pointerInfo.pickInfo.gripTransform.rotationQuaternion);
                        }
                        else {
                            virtualMeshesInfo_1.originMesh.rotationQuaternion.copyFrom(pointerInfo.pickInfo.aimTransform.rotationQuaternion);
                        }
                    }
                    else {
                        _this._dragging = _this._dragType.DRAG;
                        virtualMeshesInfo_1.originMesh.position.copyFrom(pointerInfo.pickInfo.ray.origin);
                    }
                    virtualMeshesInfo_1.lastOriginPosition.copyFrom(virtualMeshesInfo_1.originMesh.position);
                    virtualMeshesInfo_1.dragMesh.position.copyFrom(pointerInfo.pickInfo.pickedPoint);
                    virtualMeshesInfo_1.lastDragPosition.copyFrom(pointerInfo.pickInfo.pickedPoint);
                    virtualMeshesInfo_1.pivotMesh.position.copyFrom(_this._ownerNode.getAbsolutePivotPoint());
                    virtualMeshesInfo_1.pivotMesh.rotationQuaternion.copyFrom(_this._ownerNode.absoluteRotationQuaternion);
                    virtualMeshesInfo_1.startingPosition.copyFrom(virtualMeshesInfo_1.dragMesh.position);
                    virtualMeshesInfo_1.startingPivotPosition.copyFrom(virtualMeshesInfo_1.pivotMesh.position);
                    virtualMeshesInfo_1.startingOrientation.copyFrom(virtualMeshesInfo_1.dragMesh.rotationQuaternion);
                    virtualMeshesInfo_1.startingPivotOrientation.copyFrom(virtualMeshesInfo_1.pivotMesh.rotationQuaternion);
                    if (isXRPointer) {
                        virtualMeshesInfo_1.originMesh.addChild(virtualMeshesInfo_1.dragMesh);
                        virtualMeshesInfo_1.originMesh.addChild(virtualMeshesInfo_1.pivotMesh);
                    }
                    else {
                        virtualMeshesInfo_1.originMesh.lookAt(virtualMeshesInfo_1.dragMesh.position);
                    }
                    // Update state
                    virtualMeshesInfo_1.dragging = true;
                    if (_this.currentDraggingPointerIds.indexOf(pointerId) === -1) {
                        _this.currentDraggingPointerIds.push(pointerId);
                    }
                    // Detach camera controls
                    if (_this.detachCameraControls && _this._pointerCamera && !_this._pointerCamera.leftCamera) {
                        if (_this._pointerCamera.inputs && _this._pointerCamera.inputs.attachedToElement) {
                            _this._pointerCamera.detachControl();
                            _this._attachedToElement = true;
                        }
                        else {
                            _this._attachedToElement = false;
                        }
                    }
                    _this._targetDragStart(virtualMeshesInfo_1.pivotMesh.position, virtualMeshesInfo_1.pivotMesh.rotationQuaternion, pointerId);
                    _this.onDragStartObservable.notifyObservers({ position: virtualMeshesInfo_1.pivotMesh.position });
                }
            }
            else if (pointerInfo.type == _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_2__.PointerEventTypes.POINTERUP || pointerInfo.type == _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_2__.PointerEventTypes.POINTERDOUBLETAP) {
                var registeredPointerIndex = _this.currentDraggingPointerIds.indexOf(pointerId);
                // Update state
                virtualMeshesInfo.dragging = false;
                if (registeredPointerIndex !== -1) {
                    _this.currentDraggingPointerIds.splice(registeredPointerIndex, 1);
                    if (_this.currentDraggingPointerIds.length === 0) {
                        _this._moving = false;
                        _this._dragging = _this._dragType.NONE;
                        // Reattach camera controls
                        if (_this.detachCameraControls && _this._attachedToElement && _this._pointerCamera && !_this._pointerCamera.leftCamera) {
                            _this._pointerCamera.attachControl(true);
                            _this._attachedToElement = false;
                        }
                    }
                    virtualMeshesInfo.originMesh.removeChild(virtualMeshesInfo.dragMesh);
                    virtualMeshesInfo.originMesh.removeChild(virtualMeshesInfo.pivotMesh);
                    _this._targetDragEnd(pointerId);
                    _this.onDragEndObservable.notifyObservers({});
                }
            }
            else if (pointerInfo.type == _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_2__.PointerEventTypes.POINTERMOVE) {
                var registeredPointerIndex = _this.currentDraggingPointerIds.indexOf(pointerId);
                if (registeredPointerIndex !== -1 && virtualMeshesInfo.dragging && pointerInfo.pickInfo && (pointerInfo.pickInfo.ray || pointerInfo.pickInfo.aimTransform)) {
                    var zDragFactor = _this.zDragFactor;
                    // 2 pointer interaction should not have a z axis drag factor
                    // as well as near interaction
                    if (_this.currentDraggingPointerIds.length > 1 || pointerInfo.pickInfo.originMesh) {
                        zDragFactor = 0;
                    }
                    _this._ownerNode.computeWorldMatrix(true);
                    if (!isXRPointer) {
                        _this._pointerUpdate2D(pointerInfo.pickInfo.ray, pointerId, zDragFactor);
                    }
                    else {
                        _this._pointerUpdateXR(pointerInfo.pickInfo.aimTransform, pointerInfo.pickInfo.gripTransform, pointerId, zDragFactor);
                    }
                    // Get change in rotation
                    _this._tmpQuaternion.copyFrom(virtualMeshesInfo.startingPivotOrientation);
                    _this._tmpQuaternion.x = -_this._tmpQuaternion.x;
                    _this._tmpQuaternion.y = -_this._tmpQuaternion.y;
                    _this._tmpQuaternion.z = -_this._tmpQuaternion.z;
                    virtualMeshesInfo.pivotMesh.absoluteRotationQuaternion.multiplyToRef(_this._tmpQuaternion, _this._tmpQuaternion);
                    virtualMeshesInfo.pivotMesh.absolutePosition.subtractToRef(virtualMeshesInfo.startingPivotPosition, _this._tmpVector);
                    _this.onDragObservable.notifyObservers({ delta: _this._tmpVector, position: virtualMeshesInfo.pivotMesh.position, pickInfo: pointerInfo.pickInfo });
                    // Notify herited methods and observables
                    _this._targetDrag(_this._tmpVector, _this._tmpQuaternion, pointerId);
                    virtualMeshesInfo.lastDragPosition.copyFrom(virtualMeshesInfo.dragMesh.absolutePosition);
                    _this._moving = true;
                }
            }
        });
    };
    BaseSixDofDragBehavior.prototype._applyZOffset = function (node, localOriginDragDifference, zDragFactor) {
        // Determine how much the controller moved to/away towards the dragged object and use this to move the object further when its further away
        node.position.z -= node.position.z < 1 ? localOriginDragDifference * zDragFactor : localOriginDragDifference * zDragFactor * node.position.z;
        if (node.position.z < 0) {
            node.position.z = 0;
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    BaseSixDofDragBehavior.prototype._targetDragStart = function (worldPosition, worldRotation, pointerId) {
        // Herited classes can override that
    };
    BaseSixDofDragBehavior.prototype._targetDrag = function (worldDeltaPosition, worldDeltaRotation, pointerId) {
        // Herited classes can override that
    };
    BaseSixDofDragBehavior.prototype._targetDragEnd = function (pointerId) {
        // Herited classes can override that
    };
    /**
     * Detaches the behavior from the mesh
     */
    BaseSixDofDragBehavior.prototype.detach = function () {
        if (this._scene) {
            if (this.detachCameraControls && this._attachedToElement && this._pointerCamera && !this._pointerCamera.leftCamera) {
                this._pointerCamera.attachControl(true);
                this._attachedToElement = false;
            }
            this._scene.onPointerObservable.remove(this._pointerObserver);
        }
        for (var pointerId in this._virtualMeshesInfo) {
            this._virtualMeshesInfo[pointerId].originMesh.dispose();
            this._virtualMeshesInfo[pointerId].dragMesh.dispose();
        }
        this.onDragEndObservable.clear();
        this.onDragObservable.clear();
        this.onDragStartObservable.clear();
    };
    return BaseSixDofDragBehavior;
}());



/***/ }),

/***/ "../../../lts/core/dist/Behaviors/Meshes/fadeInOutBehavior.js":
/*!********************************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/Meshes/fadeInOutBehavior.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FadeInOutBehavior": () => (/* binding */ FadeInOutBehavior)
/* harmony export */ });
/**
 * A behavior that when attached to a mesh will allow the mesh to fade in and out
 */
var FadeInOutBehavior = /** @class */ (function () {
    /**
     * Instantiates the FadeInOutBehavior
     */
    function FadeInOutBehavior() {
        var _this = this;
        /**
         * Time in milliseconds to delay before fading in (Default: 0)
         */
        this.delay = 0;
        /**
         * Time in milliseconds for the mesh to fade in (Default: 300)
         */
        this.fadeInTime = 300;
        this._millisecondsPerFrame = 1000 / 60;
        this._hovered = false;
        this._hoverValue = 0;
        this._ownerNode = null;
        this._update = function () {
            if (_this._ownerNode) {
                _this._hoverValue += _this._hovered ? _this._millisecondsPerFrame : -_this._millisecondsPerFrame;
                _this._setAllVisibility(_this._ownerNode, (_this._hoverValue - _this.delay) / _this.fadeInTime);
                if (_this._ownerNode.visibility > 1) {
                    _this._setAllVisibility(_this._ownerNode, 1);
                    _this._hoverValue = _this.fadeInTime + _this.delay;
                    return;
                }
                else if (_this._ownerNode.visibility < 0) {
                    _this._setAllVisibility(_this._ownerNode, 0);
                    if (_this._hoverValue < 0) {
                        _this._hoverValue = 0;
                        return;
                    }
                }
                setTimeout(_this._update, _this._millisecondsPerFrame);
            }
        };
    }
    Object.defineProperty(FadeInOutBehavior.prototype, "name", {
        /**
         *  The name of the behavior
         */
        get: function () {
            return "FadeInOut";
        },
        enumerable: false,
        configurable: true
    });
    /**
     *  Initializes the behavior
     */
    FadeInOutBehavior.prototype.init = function () { };
    /**
     * Attaches the fade behavior on the passed in mesh
     * @param ownerNode The mesh that will be faded in/out once attached
     */
    FadeInOutBehavior.prototype.attach = function (ownerNode) {
        this._ownerNode = ownerNode;
        this._setAllVisibility(this._ownerNode, 0);
    };
    /**
     *  Detaches the behavior from the mesh
     */
    FadeInOutBehavior.prototype.detach = function () {
        this._ownerNode = null;
    };
    /**
     * Triggers the mesh to begin fading in or out
     * @param value if the object should fade in or out (true to fade in)
     */
    FadeInOutBehavior.prototype.fadeIn = function (value) {
        this._hovered = value;
        this._update();
    };
    FadeInOutBehavior.prototype._setAllVisibility = function (mesh, value) {
        var _this = this;
        mesh.visibility = value;
        mesh.getChildMeshes().forEach(function (c) {
            _this._setAllVisibility(c, value);
        });
    };
    return FadeInOutBehavior;
}());



/***/ }),

/***/ "../../../lts/core/dist/Behaviors/Meshes/followBehavior.js":
/*!*****************************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/Meshes/followBehavior.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowBehavior": () => (/* binding */ FollowBehavior)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Maths_math_scalar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Maths/math.scalar */ "../../../lts/core/dist/Maths/math.scalar.js");
/* harmony import */ var _Maths_math_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Maths/math.constants */ "../../../lts/core/dist/Maths/math.constants.js");



/**
 * A behavior that when attached to a mesh will follow a camera
 * @since 5.0.0
 */
var FollowBehavior = /** @class */ (function () {
    function FollowBehavior() {
        // Memory cache to avoid GC usage
        this._tmpQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
        this._tmpVectors = [new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3()];
        this._tmpMatrix = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix();
        this._tmpInvertView = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix();
        this._tmpForward = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        this._tmpNodeForward = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        this._tmpPosition = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        this._workingPosition = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        this._workingQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
        this._lastTick = -1;
        this._recenterNextUpdate = true;
        /**
         * Set to false if the node should strictly follow the camera without any interpolation time
         */
        this.interpolatePose = true;
        /**
         * Rate of interpolation of position and rotation of the attached node.
         * Higher values will give a slower interpolation.
         */
        this.lerpTime = 500;
        /**
         * If the behavior should ignore the pitch and roll of the camera.
         */
        this.ignoreCameraPitchAndRoll = false;
        /**
         * Pitch offset from camera (relative to Max Distance)
         * Is only effective if `ignoreCameraPitchAndRoll` is set to `true`.
         */
        this.pitchOffset = 15;
        /**
         * The vertical angle from the camera forward axis to the owner will not exceed this value
         */
        this.maxViewVerticalDegrees = 30;
        /**
         * The horizontal angle from the camera forward axis to the owner will not exceed this value
         */
        this.maxViewHorizontalDegrees = 30;
        /**
         * The attached node will not reorient until the angle between its forward vector and the vector to the camera is greater than this value
         */
        this.orientToCameraDeadzoneDegrees = 60;
        /**
         * Option to ignore distance clamping
         */
        this.ignoreDistanceClamp = false;
        /**
         * Option to ignore angle clamping
         */
        this.ignoreAngleClamp = false;
        /**
         * Max vertical distance between the attachedNode and camera
         */
        this.verticalMaxDistance = 0;
        /**
         *  Default distance from eye to attached node, i.e. the sphere radius
         */
        this.defaultDistance = 0.8;
        /**
         *  Max distance from eye to attached node, i.e. the sphere radius
         */
        this.maximumDistance = 2;
        /**
         *  Min distance from eye to attached node, i.e. the sphere radius
         */
        this.minimumDistance = 0.3;
        /**
         * Ignore vertical movement and lock the Y position of the object.
         */
        this.useFixedVerticalOffset = false;
        /**
         * Fixed vertical position offset distance.
         */
        this.fixedVerticalOffset = 0;
        /**
         * Enables/disables the behavior
         * @hidden
         */
        this._enabled = true;
    }
    Object.defineProperty(FollowBehavior.prototype, "followedCamera", {
        /**
         * The camera that should be followed by this behavior
         */
        get: function () {
            return this._followedCamera || this._scene.activeCamera;
        },
        set: function (camera) {
            this._followedCamera = camera;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FollowBehavior.prototype, "name", {
        /**
         *  The name of the behavior
         */
        get: function () {
            return "Follow";
        },
        enumerable: false,
        configurable: true
    });
    /**
     *  Initializes the behavior
     */
    FollowBehavior.prototype.init = function () { };
    /**
     * Attaches the follow behavior
     * @param ownerNode The mesh that will be following once attached
     * @param followedCamera The camera that should be followed by the node
     */
    FollowBehavior.prototype.attach = function (ownerNode, followedCamera) {
        this._scene = ownerNode.getScene();
        this.attachedNode = ownerNode;
        if (followedCamera) {
            this.followedCamera = followedCamera;
        }
        this._addObservables();
    };
    /**
     *  Detaches the behavior from the mesh
     */
    FollowBehavior.prototype.detach = function () {
        this.attachedNode = null;
        this._removeObservables();
    };
    /**
     * Recenters the attached node in front of the camera on the next update
     */
    FollowBehavior.prototype.recenter = function () {
        this._recenterNextUpdate = true;
    };
    FollowBehavior.prototype._angleBetweenVectorAndPlane = function (vector, normal) {
        // Work on copies
        this._tmpVectors[0].copyFrom(vector);
        vector = this._tmpVectors[0];
        this._tmpVectors[1].copyFrom(normal);
        normal = this._tmpVectors[1];
        vector.normalize();
        normal.normalize();
        return Math.PI / 2 - Math.acos(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Dot(vector, normal));
    };
    FollowBehavior.prototype._length2D = function (vector) {
        return Math.sqrt(vector.x * vector.x + vector.z * vector.z);
    };
    FollowBehavior.prototype._distanceClamp = function (currentToTarget, moveToDefault) {
        if (moveToDefault === void 0) { moveToDefault = false; }
        var minDistance = this.minimumDistance;
        var maxDistance = this.maximumDistance;
        var defaultDistance = this.defaultDistance;
        var direction = this._tmpVectors[0];
        direction.copyFrom(currentToTarget);
        var currentDistance = direction.length();
        direction.normalizeFromLength(currentDistance);
        if (this.ignoreCameraPitchAndRoll) {
            // If we don't account for pitch offset, the casted object will float up/down as the reference
            // gets closer to it because we will still be casting in the direction of the pitched offset.
            // To fix this, only modify the XZ position of the object.
            minDistance = this._length2D(direction) * minDistance;
            maxDistance = this._length2D(direction) * maxDistance;
            var currentDistance2D = this._length2D(currentToTarget);
            direction.scaleInPlace(currentDistance / currentDistance2D);
            currentDistance = currentDistance2D;
        }
        var clampedDistance = currentDistance;
        if (moveToDefault) {
            clampedDistance = defaultDistance;
        }
        else {
            clampedDistance = _Maths_math_scalar__WEBPACK_IMPORTED_MODULE_1__.Scalar.Clamp(currentDistance, minDistance, maxDistance);
        }
        currentToTarget.copyFrom(direction).scaleInPlace(clampedDistance);
        return currentDistance !== clampedDistance;
    };
    FollowBehavior.prototype._applyVerticalClamp = function (currentToTarget) {
        if (this.verticalMaxDistance !== 0) {
            currentToTarget.y = _Maths_math_scalar__WEBPACK_IMPORTED_MODULE_1__.Scalar.Clamp(currentToTarget.y, -this.verticalMaxDistance, this.verticalMaxDistance);
        }
    };
    FollowBehavior.prototype._toOrientationQuatToRef = function (vector, quaternion) {
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRollToRef(Math.atan2(vector.x, vector.z), Math.atan2(vector.y, Math.sqrt(vector.z * vector.z + vector.x * vector.x)), 0, quaternion);
    };
    FollowBehavior.prototype._applyPitchOffset = function (invertView) {
        var forward = this._tmpVectors[0];
        var right = this._tmpVectors[1];
        forward.copyFromFloats(0, 0, this._scene.useRightHandedSystem ? -1 : 1);
        right.copyFromFloats(1, 0, 0);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformNormalToRef(forward, invertView, forward);
        forward.y = 0;
        forward.normalize();
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformNormalToRef(right, invertView, right);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationAxisToRef(right, (this.pitchOffset * Math.PI) / 180, this._tmpQuaternion);
        forward.rotateByQuaternionToRef(this._tmpQuaternion, forward);
        this._toOrientationQuatToRef(forward, this._tmpQuaternion);
        this._tmpQuaternion.toRotationMatrix(this._tmpMatrix);
        // Since we already extracted position from the invert view matrix, we can
        // disregard the position part of the matrix in the copy
        invertView.copyFrom(this._tmpMatrix);
    };
    FollowBehavior.prototype._angularClamp = function (invertView, currentToTarget) {
        var forward = this._tmpVectors[5];
        forward.copyFromFloats(0, 0, this._scene.useRightHandedSystem ? -1 : 1);
        var right = this._tmpVectors[6];
        right.copyFromFloats(1, 0, 0);
        // forward and right are related to camera frame of reference
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformNormalToRef(forward, invertView, forward);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformNormalToRef(right, invertView, right);
        // Up is global Z
        var up = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.UpReadOnly;
        var dist = currentToTarget.length();
        if (dist < _Maths_math_constants__WEBPACK_IMPORTED_MODULE_2__.Epsilon) {
            return false;
        }
        var angularClamped = false;
        var rotationQuat = this._tmpQuaternion;
        // X-axis leashing
        if (this.ignoreCameraPitchAndRoll) {
            var angle_1 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.GetAngleBetweenVectorsOnPlane(currentToTarget, forward, right);
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationAxisToRef(right, angle_1, rotationQuat);
            currentToTarget.rotateByQuaternionToRef(rotationQuat, currentToTarget);
        }
        else {
            var angle_2 = -_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.GetAngleBetweenVectorsOnPlane(currentToTarget, forward, right);
            var minMaxAngle_1 = ((this.maxViewVerticalDegrees * Math.PI) / 180) * 0.5;
            if (angle_2 < -minMaxAngle_1) {
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationAxisToRef(right, -angle_2 - minMaxAngle_1, rotationQuat);
                currentToTarget.rotateByQuaternionToRef(rotationQuat, currentToTarget);
                angularClamped = true;
            }
            else if (angle_2 > minMaxAngle_1) {
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationAxisToRef(right, -angle_2 + minMaxAngle_1, rotationQuat);
                currentToTarget.rotateByQuaternionToRef(rotationQuat, currentToTarget);
                angularClamped = true;
            }
        }
        // Y-axis leashing
        var angle = this._angleBetweenVectorAndPlane(currentToTarget, right) * (this._scene.useRightHandedSystem ? -1 : 1);
        var minMaxAngle = ((this.maxViewHorizontalDegrees * Math.PI) / 180) * 0.5;
        if (angle < -minMaxAngle) {
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationAxisToRef(up, -angle - minMaxAngle, rotationQuat);
            currentToTarget.rotateByQuaternionToRef(rotationQuat, currentToTarget);
            angularClamped = true;
        }
        else if (angle > minMaxAngle) {
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationAxisToRef(up, -angle + minMaxAngle, rotationQuat);
            currentToTarget.rotateByQuaternionToRef(rotationQuat, currentToTarget);
            angularClamped = true;
        }
        return angularClamped;
    };
    FollowBehavior.prototype._orientationClamp = function (currentToTarget, rotationQuaternion) {
        var _a;
        // Construct a rotation quat from up vector and target vector
        var toFollowed = this._tmpVectors[0];
        toFollowed.copyFrom(currentToTarget).scaleInPlace(-1).normalize();
        var up = this._tmpVectors[1];
        var right = this._tmpVectors[2];
        // We use global up vector to orient the following node (global +Y)
        up.copyFromFloats(0, 1, 0);
        // Gram-Schmidt to create an orthonormal frame
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.CrossToRef(toFollowed, up, right);
        var length = right.length();
        if (length < _Maths_math_constants__WEBPACK_IMPORTED_MODULE_2__.Epsilon) {
            return;
        }
        right.normalizeFromLength(length);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.CrossToRef(right, toFollowed, up);
        if ((_a = this.attachedNode) === null || _a === void 0 ? void 0 : _a.getScene().useRightHandedSystem) {
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromLookDirectionRHToRef(toFollowed, up, rotationQuaternion);
        }
        else {
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromLookDirectionLHToRef(toFollowed, up, rotationQuaternion);
        }
    };
    FollowBehavior.prototype._passedOrientationDeadzone = function (currentToTarget, forward) {
        var leashToFollow = this._tmpVectors[5];
        leashToFollow.copyFrom(currentToTarget);
        leashToFollow.normalize();
        var angle = Math.abs(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.GetAngleBetweenVectorsOnPlane(forward, leashToFollow, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.UpReadOnly));
        return (angle * 180) / Math.PI > this.orientToCameraDeadzoneDegrees;
    };
    FollowBehavior.prototype._updateLeashing = function (camera) {
        if (this.attachedNode && this._enabled) {
            var oldParent = this.attachedNode.parent;
            this.attachedNode.setParent(null);
            var worldMatrix = this.attachedNode.getWorldMatrix();
            var currentToTarget = this._workingPosition;
            var rotationQuaternion = this._workingQuaternion;
            var pivot = this.attachedNode.getPivotPoint();
            var invertView = this._tmpInvertView;
            invertView.copyFrom(camera.getViewMatrix());
            invertView.invert();
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesToRef(pivot, worldMatrix, currentToTarget);
            var position = this._tmpPosition;
            position.copyFromFloats(0, 0, 0);
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesToRef(position, worldMatrix, position);
            position.scaleInPlace(-1).subtractInPlace(pivot);
            currentToTarget.subtractInPlace(camera.globalPosition);
            if (this.ignoreCameraPitchAndRoll) {
                this._applyPitchOffset(invertView);
            }
            var angularClamped = false;
            var forward = this._tmpForward;
            forward.copyFromFloats(0, 0, this._scene.useRightHandedSystem ? -1 : 1);
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformNormalToRef(forward, invertView, forward);
            var nodeForward = this._tmpNodeForward;
            nodeForward.copyFromFloats(0, 0, this._scene.useRightHandedSystem ? -1 : 1);
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformNormalToRef(nodeForward, worldMatrix, nodeForward);
            if (this._recenterNextUpdate) {
                currentToTarget.copyFrom(forward).scaleInPlace(this.defaultDistance);
            }
            else {
                if (this.ignoreAngleClamp) {
                    var currentDistance = currentToTarget.length();
                    currentToTarget.copyFrom(forward).scaleInPlace(currentDistance);
                }
                else {
                    angularClamped = this._angularClamp(invertView, currentToTarget);
                }
            }
            var distanceClamped = false;
            if (!this.ignoreDistanceClamp) {
                distanceClamped = this._distanceClamp(currentToTarget, angularClamped);
                this._applyVerticalClamp(currentToTarget);
            }
            if (this.useFixedVerticalOffset) {
                currentToTarget.y = position.y - camera.globalPosition.y + this.fixedVerticalOffset;
            }
            if (angularClamped || distanceClamped || this._passedOrientationDeadzone(currentToTarget, nodeForward) || this._recenterNextUpdate) {
                this._orientationClamp(currentToTarget, rotationQuaternion);
            }
            this._workingPosition.subtractInPlace(pivot);
            this._recenterNextUpdate = false;
            this.attachedNode.setParent(oldParent);
        }
    };
    FollowBehavior.prototype._updateTransformToGoal = function (elapsed) {
        if (!this.attachedNode || !this.followedCamera || !this._enabled) {
            return;
        }
        if (!this.attachedNode.rotationQuaternion) {
            this.attachedNode.rotationQuaternion = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity();
        }
        var oldParent = this.attachedNode.parent;
        this.attachedNode.setParent(null);
        if (!this.interpolatePose) {
            this.attachedNode.position.copyFrom(this.followedCamera.globalPosition).addInPlace(this._workingPosition);
            this.attachedNode.rotationQuaternion.copyFrom(this._workingQuaternion);
            return;
        }
        // position
        var currentDirection = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        currentDirection.copyFrom(this.attachedNode.position).subtractInPlace(this.followedCamera.globalPosition);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.SmoothToRef(currentDirection, this._workingPosition, elapsed, this.lerpTime, currentDirection);
        currentDirection.addInPlace(this.followedCamera.globalPosition);
        this.attachedNode.position.copyFrom(currentDirection);
        // rotation
        var currentRotation = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
        currentRotation.copyFrom(this.attachedNode.rotationQuaternion);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.SmoothToRef(currentRotation, this._workingQuaternion, elapsed, this.lerpTime, this.attachedNode.rotationQuaternion);
        this.attachedNode.setParent(oldParent);
    };
    FollowBehavior.prototype._addObservables = function () {
        var _this = this;
        this._lastTick = Date.now();
        this._onBeforeRender = this._scene.onBeforeRenderObservable.add(function () {
            if (!_this.followedCamera) {
                return;
            }
            var tick = Date.now();
            _this._updateLeashing(_this.followedCamera);
            _this._updateTransformToGoal(tick - _this._lastTick);
            _this._lastTick = tick;
        });
    };
    FollowBehavior.prototype._removeObservables = function () {
        if (this._onBeforeRender) {
            this._scene.onBeforeRenderObservable.remove(this._onBeforeRender);
        }
    };
    return FollowBehavior;
}());



/***/ }),

/***/ "../../../lts/core/dist/Behaviors/Meshes/handConstraintBehavior.js":
/*!*************************************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/Meshes/handConstraintBehavior.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HandConstraintBehavior": () => (/* binding */ HandConstraintBehavior),
/* harmony export */   "HandConstraintOrientation": () => (/* binding */ HandConstraintOrientation),
/* harmony export */   "HandConstraintVisibility": () => (/* binding */ HandConstraintVisibility),
/* harmony export */   "HandConstraintZone": () => (/* binding */ HandConstraintZone)
/* harmony export */ });
/* harmony import */ var _XR_webXRFeaturesManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../XR/webXRFeaturesManager */ "../../../lts/core/dist/XR/webXRFeaturesManager.js");
/* harmony import */ var _XR_features_WebXRHandTracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../XR/features/WebXRHandTracking */ "../../../lts/core/dist/XR/features/WebXRHandTracking.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");



/**
 * Zones around the hand
 */
var HandConstraintZone;
(function (HandConstraintZone) {
    /**
     * Above finger tips
     */
    HandConstraintZone[HandConstraintZone["ABOVE_FINGER_TIPS"] = 0] = "ABOVE_FINGER_TIPS";
    /**
     * Next to the thumb
     */
    HandConstraintZone[HandConstraintZone["RADIAL_SIDE"] = 1] = "RADIAL_SIDE";
    /**
     * Next to the pinky finger
     */
    HandConstraintZone[HandConstraintZone["ULNAR_SIDE"] = 2] = "ULNAR_SIDE";
    /**
     * Below the wrist
     */
    HandConstraintZone[HandConstraintZone["BELOW_WRIST"] = 3] = "BELOW_WRIST";
})(HandConstraintZone || (HandConstraintZone = {}));
/**
 * Orientations for the hand zones and for the attached node
 */
var HandConstraintOrientation;
(function (HandConstraintOrientation) {
    /**
     * Orientation is towards the camera
     */
    HandConstraintOrientation[HandConstraintOrientation["LOOK_AT_CAMERA"] = 0] = "LOOK_AT_CAMERA";
    /**
     * Orientation is determined by the rotation of the palm
     */
    HandConstraintOrientation[HandConstraintOrientation["HAND_ROTATION"] = 1] = "HAND_ROTATION";
})(HandConstraintOrientation || (HandConstraintOrientation = {}));
/**
 * Orientations for the hand zones and for the attached node
 */
var HandConstraintVisibility;
(function (HandConstraintVisibility) {
    /**
     * Constraint is always visible
     */
    HandConstraintVisibility[HandConstraintVisibility["ALWAYS_VISIBLE"] = 0] = "ALWAYS_VISIBLE";
    /**
     * Constraint is only visible when the palm is up
     */
    HandConstraintVisibility[HandConstraintVisibility["PALM_UP"] = 1] = "PALM_UP";
    /**
     * Constraint is only visible when the user is looking at the constraint.
     * Uses XR Eye Tracking if enabled/available, otherwise uses camera direction
     */
    HandConstraintVisibility[HandConstraintVisibility["GAZE_FOCUS"] = 2] = "GAZE_FOCUS";
    /**
     * Constraint is only visible when the palm is up and the user is looking at it
     */
    HandConstraintVisibility[HandConstraintVisibility["PALM_AND_GAZE"] = 3] = "PALM_AND_GAZE";
})(HandConstraintVisibility || (HandConstraintVisibility = {}));
/**
 * Hand constraint behavior that makes the attached `TransformNode` follow hands in XR experiences.
 * @since 5.0.0
 */
var HandConstraintBehavior = /** @class */ (function () {
    /**
     * Builds a hand constraint behavior
     */
    function HandConstraintBehavior() {
        this._sceneRenderObserver = null;
        this._zoneAxis = {};
        /**
         * Sets the HandConstraintVisibility level for the hand constraint
         */
        this.handConstraintVisibility = HandConstraintVisibility.PALM_AND_GAZE;
        /**
         * A number from 0.0 to 1.0, marking how restricted the direction the palm faces is for the attached node to be enabled.
         * A 1 means the palm must be directly facing the user before the node is enabled, a 0 means it is always enabled.
         * Used with HandConstraintVisibility.PALM_UP
         */
        this.palmUpStrictness = 0.95;
        /**
         * The radius in meters around the center of the hand that the user must gaze inside for the attached node to be enabled and appear.
         * Used with HandConstraintVisibility.GAZE_FOCUS
         */
        this.gazeProximityRadius = 0.15;
        /**
         * Offset distance from the hand in meters
         */
        this.targetOffset = 0.1;
        /**
         * Where to place the node regarding the center of the hand.
         */
        this.targetZone = HandConstraintZone.ULNAR_SIDE;
        /**
         * Orientation mode of the 4 zones around the hand
         */
        this.zoneOrientationMode = HandConstraintOrientation.HAND_ROTATION;
        /**
         * Orientation mode of the node attached to this behavior
         */
        this.nodeOrientationMode = HandConstraintOrientation.HAND_ROTATION;
        /**
         * Set the hand this behavior should follow. If set to "none", it will follow any visible hand (prioritising the left one).
         */
        this.handedness = "none";
        /**
         * Rate of interpolation of position and rotation of the attached node.
         * Higher values will give a slower interpolation.
         */
        this.lerpTime = 100;
        // For a right hand
        this._zoneAxis[HandConstraintZone.ABOVE_FINGER_TIPS] = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 1, 0);
        this._zoneAxis[HandConstraintZone.RADIAL_SIDE] = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(-1, 0, 0);
        this._zoneAxis[HandConstraintZone.ULNAR_SIDE] = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(1, 0, 0);
        this._zoneAxis[HandConstraintZone.BELOW_WRIST] = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, -1, 0);
    }
    Object.defineProperty(HandConstraintBehavior.prototype, "name", {
        /** gets or sets behavior's name */
        get: function () {
            return "HandConstraint";
        },
        enumerable: false,
        configurable: true
    });
    /** Enable the behavior */
    HandConstraintBehavior.prototype.enable = function () {
        this._node.setEnabled(true);
    };
    /** Disable the behavior */
    HandConstraintBehavior.prototype.disable = function () {
        this._node.setEnabled(false);
    };
    HandConstraintBehavior.prototype._getHandPose = function () {
        if (!this._handTracking) {
            return null;
        }
        // Retrieve any available hand, starting by the left
        var hand;
        if (this.handedness === "none") {
            hand = this._handTracking.getHandByHandedness("left") || this._handTracking.getHandByHandedness("right");
        }
        else {
            hand = this._handTracking.getHandByHandedness(this.handedness);
        }
        if (hand) {
            var pinkyMetacarpal = hand.getJointMesh(_XR_features_WebXRHandTracking__WEBPACK_IMPORTED_MODULE_1__.XRHandJoint.PINKY_FINGER_METACARPAL);
            var middleMetacarpal = hand.getJointMesh(_XR_features_WebXRHandTracking__WEBPACK_IMPORTED_MODULE_1__.XRHandJoint.MIDDLE_FINGER_METACARPAL);
            var wrist = hand.getJointMesh(_XR_features_WebXRHandTracking__WEBPACK_IMPORTED_MODULE_1__.XRHandJoint.WRIST);
            if (wrist && middleMetacarpal && pinkyMetacarpal) {
                var handPose = { position: middleMetacarpal.absolutePosition, quaternion: new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Quaternion(), id: hand.xrController.uniqueId };
                // palm forward
                var up = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[0];
                var forward = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[1];
                var left = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[2];
                up.copyFrom(middleMetacarpal.absolutePosition).subtractInPlace(wrist.absolutePosition).normalize();
                forward.copyFrom(pinkyMetacarpal.absolutePosition).subtractInPlace(middleMetacarpal.absolutePosition).normalize();
                // Create vectors for a rotation quaternion, where forward points out from the palm
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.CrossToRef(up, forward, forward);
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.CrossToRef(forward, up, left);
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Quaternion.FromLookDirectionLHToRef(forward, up, handPose.quaternion);
                return handPose;
            }
        }
        return null;
    };
    /**
     * Initializes the hand constraint behavior
     */
    HandConstraintBehavior.prototype.init = function () { };
    /**
     * Attaches the hand constraint to a `TransformNode`
     * @param node defines the node to attach the behavior to
     */
    HandConstraintBehavior.prototype.attach = function (node) {
        var _this = this;
        this._node = node;
        this._scene = node.getScene();
        if (!this._node.rotationQuaternion) {
            this._node.rotationQuaternion = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Quaternion.RotationYawPitchRoll(this._node.rotation.y, this._node.rotation.x, this._node.rotation.z);
        }
        var lastTick = Date.now();
        this._sceneRenderObserver = this._scene.onBeforeRenderObservable.add(function () {
            var pose = _this._getHandPose();
            _this._node.reservedDataStore = _this._node.reservedDataStore || {};
            _this._node.reservedDataStore.nearInteraction = _this._node.reservedDataStore.nearInteraction || {};
            _this._node.reservedDataStore.nearInteraction.excludedControllerId = null;
            if (pose) {
                var zoneOffset = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[0];
                var camera = _this._scene.activeCamera;
                zoneOffset.copyFrom(_this._zoneAxis[_this.targetZone]);
                var cameraLookAtQuaternion = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Quaternion[0];
                if (camera && (_this.zoneOrientationMode === HandConstraintOrientation.LOOK_AT_CAMERA || _this.nodeOrientationMode === HandConstraintOrientation.LOOK_AT_CAMERA)) {
                    var toCamera = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[1];
                    toCamera.copyFrom(camera.position).subtractInPlace(pose.position).normalize();
                    if (_this._scene.useRightHandedSystem) {
                        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Quaternion.FromLookDirectionRHToRef(toCamera, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.UpReadOnly, cameraLookAtQuaternion);
                    }
                    else {
                        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Quaternion.FromLookDirectionLHToRef(toCamera, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.UpReadOnly, cameraLookAtQuaternion);
                    }
                }
                if (_this.zoneOrientationMode === HandConstraintOrientation.HAND_ROTATION) {
                    pose.quaternion.toRotationMatrix(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Matrix[0]);
                }
                else {
                    cameraLookAtQuaternion.toRotationMatrix(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Matrix[0]);
                }
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.TransformNormalToRef(zoneOffset, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Matrix[0], zoneOffset);
                zoneOffset.scaleInPlace(_this.targetOffset);
                var targetPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[2];
                var targetRotation = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Quaternion[1];
                targetPosition.copyFrom(pose.position).addInPlace(zoneOffset);
                if (_this.nodeOrientationMode === HandConstraintOrientation.HAND_ROTATION) {
                    targetRotation.copyFrom(pose.quaternion);
                }
                else {
                    targetRotation.copyFrom(cameraLookAtQuaternion);
                }
                var elapsed = Date.now() - lastTick;
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.SmoothToRef(_this._node.position, targetPosition, elapsed, _this.lerpTime, _this._node.position);
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Quaternion.SmoothToRef(_this._node.rotationQuaternion, targetRotation, elapsed, _this.lerpTime, _this._node.rotationQuaternion);
                _this._node.reservedDataStore.nearInteraction.excludedControllerId = pose.id;
            }
            _this._setVisibility(pose);
            lastTick = Date.now();
        });
    };
    HandConstraintBehavior.prototype._setVisibility = function (pose) {
        var palmVisible = true;
        var gazeVisible = true;
        var camera = this._scene.activeCamera;
        if (camera) {
            var cameraForward = camera.getForwardRay();
            if (this.handConstraintVisibility === HandConstraintVisibility.GAZE_FOCUS || this.handConstraintVisibility === HandConstraintVisibility.PALM_AND_GAZE) {
                gazeVisible = false;
                var gaze = void 0;
                if (this._eyeTracking) {
                    gaze = this._eyeTracking.getEyeGaze();
                }
                gaze = gaze || cameraForward;
                var gazeToBehavior = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[0];
                if (pose) {
                    pose.position.subtractToRef(gaze.origin, gazeToBehavior);
                }
                else {
                    this._node.getAbsolutePosition().subtractToRef(gaze.origin, gazeToBehavior);
                }
                var projectedDistance = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.Dot(gazeToBehavior, gaze.direction);
                var projectedSquared = projectedDistance * projectedDistance;
                if (projectedDistance > 0) {
                    var radiusSquared = gazeToBehavior.lengthSquared() - projectedSquared;
                    if (radiusSquared < this.gazeProximityRadius * this.gazeProximityRadius) {
                        gazeVisible = true;
                    }
                }
            }
            if (this.handConstraintVisibility === HandConstraintVisibility.PALM_UP || this.handConstraintVisibility === HandConstraintVisibility.PALM_AND_GAZE) {
                palmVisible = false;
                if (pose) {
                    var palmDirection = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[0];
                    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.LeftHandedForwardReadOnly.rotateByQuaternionToRef(pose.quaternion, palmDirection);
                    if (_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.Dot(palmDirection, cameraForward.direction) > this.palmUpStrictness * 2 - 1) {
                        palmVisible = true;
                    }
                }
            }
        }
        this._node.setEnabled(palmVisible && gazeVisible);
    };
    /**
     * Detaches the behavior from the `TransformNode`
     */
    HandConstraintBehavior.prototype.detach = function () {
        this._scene.onBeforeRenderObservable.remove(this._sceneRenderObserver);
    };
    /**
     * Links the behavior to the XR experience in which to retrieve hand transform information.
     * @param xr xr experience
     */
    HandConstraintBehavior.prototype.linkToXRExperience = function (xr) {
        try {
            this._eyeTracking = xr.featuresManager.getEnabledFeature(_XR_webXRFeaturesManager__WEBPACK_IMPORTED_MODULE_0__.WebXRFeatureName.EYE_TRACKING);
        }
        catch (_a) { }
        try {
            this._handTracking = xr.featuresManager.getEnabledFeature(_XR_webXRFeaturesManager__WEBPACK_IMPORTED_MODULE_0__.WebXRFeatureName.HAND_TRACKING);
        }
        catch (_b) {
            alert("Hand tracking must be enabled for the Hand Menu to work");
        }
    };
    return HandConstraintBehavior;
}());



/***/ }),

/***/ "../../../lts/core/dist/Behaviors/Meshes/index.js":
/*!********************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/Meshes/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachToBoxBehavior": () => (/* reexport safe */ _attachToBoxBehavior__WEBPACK_IMPORTED_MODULE_0__.AttachToBoxBehavior),
/* harmony export */   "BaseSixDofDragBehavior": () => (/* reexport safe */ _baseSixDofDragBehavior__WEBPACK_IMPORTED_MODULE_6__.BaseSixDofDragBehavior),
/* harmony export */   "FadeInOutBehavior": () => (/* reexport safe */ _fadeInOutBehavior__WEBPACK_IMPORTED_MODULE_1__.FadeInOutBehavior),
/* harmony export */   "FollowBehavior": () => (/* reexport safe */ _followBehavior__WEBPACK_IMPORTED_MODULE_7__.FollowBehavior),
/* harmony export */   "HandConstraintBehavior": () => (/* reexport safe */ _handConstraintBehavior__WEBPACK_IMPORTED_MODULE_8__.HandConstraintBehavior),
/* harmony export */   "HandConstraintOrientation": () => (/* reexport safe */ _handConstraintBehavior__WEBPACK_IMPORTED_MODULE_8__.HandConstraintOrientation),
/* harmony export */   "HandConstraintVisibility": () => (/* reexport safe */ _handConstraintBehavior__WEBPACK_IMPORTED_MODULE_8__.HandConstraintVisibility),
/* harmony export */   "HandConstraintZone": () => (/* reexport safe */ _handConstraintBehavior__WEBPACK_IMPORTED_MODULE_8__.HandConstraintZone),
/* harmony export */   "MultiPointerScaleBehavior": () => (/* reexport safe */ _multiPointerScaleBehavior__WEBPACK_IMPORTED_MODULE_2__.MultiPointerScaleBehavior),
/* harmony export */   "PointerDragBehavior": () => (/* reexport safe */ _pointerDragBehavior__WEBPACK_IMPORTED_MODULE_3__.PointerDragBehavior),
/* harmony export */   "SixDofDragBehavior": () => (/* reexport safe */ _sixDofDragBehavior__WEBPACK_IMPORTED_MODULE_4__.SixDofDragBehavior),
/* harmony export */   "SurfaceMagnetismBehavior": () => (/* reexport safe */ _surfaceMagnetismBehavior__WEBPACK_IMPORTED_MODULE_5__.SurfaceMagnetismBehavior)
/* harmony export */ });
/* harmony import */ var _attachToBoxBehavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachToBoxBehavior */ "../../../lts/core/dist/Behaviors/Meshes/attachToBoxBehavior.js");
/* harmony import */ var _fadeInOutBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fadeInOutBehavior */ "../../../lts/core/dist/Behaviors/Meshes/fadeInOutBehavior.js");
/* harmony import */ var _multiPointerScaleBehavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiPointerScaleBehavior */ "../../../lts/core/dist/Behaviors/Meshes/multiPointerScaleBehavior.js");
/* harmony import */ var _pointerDragBehavior__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pointerDragBehavior */ "../../../lts/core/dist/Behaviors/Meshes/pointerDragBehavior.js");
/* harmony import */ var _sixDofDragBehavior__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sixDofDragBehavior */ "../../../lts/core/dist/Behaviors/Meshes/sixDofDragBehavior.js");
/* harmony import */ var _surfaceMagnetismBehavior__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./surfaceMagnetismBehavior */ "../../../lts/core/dist/Behaviors/Meshes/surfaceMagnetismBehavior.js");
/* harmony import */ var _baseSixDofDragBehavior__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./baseSixDofDragBehavior */ "../../../lts/core/dist/Behaviors/Meshes/baseSixDofDragBehavior.js");
/* harmony import */ var _followBehavior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./followBehavior */ "../../../lts/core/dist/Behaviors/Meshes/followBehavior.js");
/* harmony import */ var _handConstraintBehavior__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./handConstraintBehavior */ "../../../lts/core/dist/Behaviors/Meshes/handConstraintBehavior.js");











/***/ }),

/***/ "../../../lts/core/dist/Behaviors/Meshes/multiPointerScaleBehavior.js":
/*!****************************************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/Meshes/multiPointerScaleBehavior.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiPointerScaleBehavior": () => (/* binding */ MultiPointerScaleBehavior)
/* harmony export */ });
/* harmony import */ var _pointerDragBehavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointerDragBehavior */ "../../../lts/core/dist/Behaviors/Meshes/pointerDragBehavior.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");


/**
 * A behavior that when attached to a mesh will allow the mesh to be scaled
 */
var MultiPointerScaleBehavior = /** @class */ (function () {
    /**
     * Instantiate a new behavior that when attached to a mesh will allow the mesh to be scaled
     */
    function MultiPointerScaleBehavior() {
        this._startDistance = 0;
        this._initialScale = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
        this._targetScale = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
        this._sceneRenderObserver = null;
        this._dragBehaviorA = new _pointerDragBehavior__WEBPACK_IMPORTED_MODULE_0__.PointerDragBehavior({});
        this._dragBehaviorA.moveAttached = false;
        this._dragBehaviorB = new _pointerDragBehavior__WEBPACK_IMPORTED_MODULE_0__.PointerDragBehavior({});
        this._dragBehaviorB.moveAttached = false;
    }
    Object.defineProperty(MultiPointerScaleBehavior.prototype, "name", {
        /**
         *  The name of the behavior
         */
        get: function () {
            return "MultiPointerScale";
        },
        enumerable: false,
        configurable: true
    });
    /**
     *  Initializes the behavior
     */
    MultiPointerScaleBehavior.prototype.init = function () { };
    MultiPointerScaleBehavior.prototype._getCurrentDistance = function () {
        return this._dragBehaviorA.lastDragPosition.subtract(this._dragBehaviorB.lastDragPosition).length();
    };
    /**
     * Attaches the scale behavior the passed in mesh
     * @param ownerNode The mesh that will be scaled around once attached
     */
    MultiPointerScaleBehavior.prototype.attach = function (ownerNode) {
        var _this = this;
        this._ownerNode = ownerNode;
        // Create 2 drag behaviors such that each will only be triggered by a separate pointer
        this._dragBehaviorA.onDragStartObservable.add(function () {
            if (_this._dragBehaviorA.dragging && _this._dragBehaviorB.dragging) {
                if (_this._dragBehaviorA.currentDraggingPointerId == _this._dragBehaviorB.currentDraggingPointerId) {
                    _this._dragBehaviorA.releaseDrag();
                }
                else {
                    _this._initialScale.copyFrom(ownerNode.scaling);
                    _this._startDistance = _this._getCurrentDistance();
                }
            }
        });
        this._dragBehaviorB.onDragStartObservable.add(function () {
            if (_this._dragBehaviorA.dragging && _this._dragBehaviorB.dragging) {
                if (_this._dragBehaviorA.currentDraggingPointerId == _this._dragBehaviorB.currentDraggingPointerId) {
                    _this._dragBehaviorB.releaseDrag();
                }
                else {
                    _this._initialScale.copyFrom(ownerNode.scaling);
                    _this._startDistance = _this._getCurrentDistance();
                }
            }
        });
        // Once both drag behaviors are active scale based on the distance between the two pointers
        [this._dragBehaviorA, this._dragBehaviorB].forEach(function (behavior) {
            behavior.onDragObservable.add(function () {
                if (_this._dragBehaviorA.dragging && _this._dragBehaviorB.dragging) {
                    var ratio = _this._getCurrentDistance() / _this._startDistance;
                    _this._initialScale.scaleToRef(ratio, _this._targetScale);
                }
            });
        });
        ownerNode.addBehavior(this._dragBehaviorA);
        ownerNode.addBehavior(this._dragBehaviorB);
        // On every frame move towards target scaling to avoid jitter caused by vr controllers
        this._sceneRenderObserver = ownerNode.getScene().onBeforeRenderObservable.add(function () {
            if (_this._dragBehaviorA.dragging && _this._dragBehaviorB.dragging) {
                var change = _this._targetScale.subtract(ownerNode.scaling).scaleInPlace(0.1);
                if (change.length() > 0.01) {
                    ownerNode.scaling.addInPlace(change);
                }
            }
        });
    };
    /**
     *  Detaches the behavior from the mesh
     */
    MultiPointerScaleBehavior.prototype.detach = function () {
        var _this = this;
        this._ownerNode.getScene().onBeforeRenderObservable.remove(this._sceneRenderObserver);
        [this._dragBehaviorA, this._dragBehaviorB].forEach(function (behavior) {
            behavior.onDragStartObservable.clear();
            behavior.onDragObservable.clear();
            _this._ownerNode.removeBehavior(behavior);
        });
    };
    return MultiPointerScaleBehavior;
}());



/***/ }),

/***/ "../../../lts/core/dist/Behaviors/Meshes/pointerDragBehavior.js":
/*!**********************************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/Meshes/pointerDragBehavior.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointerDragBehavior": () => (/* binding */ PointerDragBehavior)
/* harmony export */ });
/* harmony import */ var _Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Meshes/mesh */ "../../../lts/core/dist/Meshes/mesh.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scene */ "../../../lts/core/dist/scene.js");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Misc/observable */ "../../../lts/core/dist/Misc/observable.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Events/pointerEvents */ "../../../lts/core/dist/Events/pointerEvents.js");
/* harmony import */ var _Culling_ray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Culling/ray */ "../../../lts/core/dist/Culling/ray.js");
/* harmony import */ var _Misc_pivotTools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Misc/pivotTools */ "../../../lts/core/dist/Misc/pivotTools.js");
/* harmony import */ var _Meshes_Builders_planeBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Meshes/Builders/planeBuilder */ "../../../lts/core/dist/Meshes/Builders/planeBuilder.js");








/**
 * A behavior that when attached to a mesh will allow the mesh to be dragged around the screen based on pointer events
 */
var PointerDragBehavior = /** @class */ (function () {
    /**
     * Creates a pointer drag behavior that can be attached to a mesh
     * @param options The drag axis or normal of the plane that will be dragged across. If no options are specified the drag plane will always face the ray's origin (eg. camera)
     * @param options.dragAxis
     * @param options.dragPlaneNormal
     */
    function PointerDragBehavior(options) {
        this._useAlternatePickedPointAboveMaxDragAngleDragSpeed = -1.1;
        this._activeDragButton = -1;
        /**
         * The maximum tolerated angle between the drag plane and dragging pointer rays to trigger pointer events. Set to 0 to allow any angle (default: 0)
         */
        this.maxDragAngle = 0;
        /**
         * Butttons that can be used to initiate a drag
         */
        this.dragButtons = [0, 1, 2];
        /**
         * @hidden
         */
        this._useAlternatePickedPointAboveMaxDragAngle = false;
        /**
         * The id of the pointer that is currently interacting with the behavior (-1 when no pointer is active)
         */
        this.currentDraggingPointerId = -1;
        /**
         * If the behavior is currently in a dragging state
         */
        this.dragging = false;
        /**
         * The distance towards the target drag position to move each frame. This can be useful to avoid jitter. Set this to 1 for no delay. (Default: 0.2)
         */
        this.dragDeltaRatio = 0.2;
        /**
         * If the drag plane orientation should be updated during the dragging (Default: true)
         */
        this.updateDragPlane = true;
        // Debug mode will display drag planes to help visualize behavior
        this._debugMode = false;
        this._moving = false;
        /**
         *  Fires each time the attached mesh is dragged with the pointer
         *  * delta between last drag position and current drag position in world space
         *  * dragDistance along the drag axis
         *  * dragPlaneNormal normal of the current drag plane used during the drag
         *  * dragPlanePoint in world space where the drag intersects the drag plane
         */
        this.onDragObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        /**
         *  Fires each time a drag begins (eg. mouse down on mesh)
         */
        this.onDragStartObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        /**
         *  Fires each time a drag ends (eg. mouse release after drag)
         */
        this.onDragEndObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        /**
         *  Fires each time behavior enabled state changes
         */
        this.onEnabledObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        /**
         *  If the attached mesh should be moved when dragged
         */
        this.moveAttached = true;
        this._enabled = true;
        /**
         * If pointer events should start and release the drag (Default: true)
         */
        this.startAndReleaseDragOnPointerEvents = true;
        /**
         * If camera controls should be detached during the drag
         */
        this.detachCameraControls = true;
        /**
         * If set, the drag plane/axis will be rotated based on the attached mesh's world rotation (Default: true)
         */
        this.useObjectOrientationForDragging = true;
        /**
         * Predicate to determine if it is valid to move the object to a new position when it is moved
         * @param targetPosition
         */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.validateDrag = function (targetPosition) {
            return true;
        };
        this._tmpVector = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0);
        this._alternatePickedPoint = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0);
        this._worldDragAxis = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0);
        this._targetPosition = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0);
        this._attachedToElement = false;
        this._startDragRay = new _Culling_ray__WEBPACK_IMPORTED_MODULE_5__.Ray(new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3());
        this._lastPointerRay = {};
        this._dragDelta = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3();
        // Variables to avoid instantiation in the below method
        this._pointA = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0);
        this._pointC = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0);
        this._localAxis = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0);
        this._lookAt = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0);
        this._options = options ? options : {};
        var optionCount = 0;
        if (this._options.dragAxis) {
            optionCount++;
        }
        if (this._options.dragPlaneNormal) {
            optionCount++;
        }
        if (optionCount > 1) {
            throw "Multiple drag modes specified in dragBehavior options. Only one expected";
        }
    }
    Object.defineProperty(PointerDragBehavior.prototype, "currentDraggingPointerID", {
        /**
         * Get or set the currentDraggingPointerId
         * @deprecated Please use currentDraggingPointerId instead
         */
        get: function () {
            return this.currentDraggingPointerId;
        },
        set: function (currentDraggingPointerID) {
            this.currentDraggingPointerId = currentDraggingPointerID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PointerDragBehavior.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        /**
         *  If the drag behavior will react to drag events (Default: true)
         */
        set: function (value) {
            if (value != this._enabled) {
                this.onEnabledObservable.notifyObservers(value);
            }
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PointerDragBehavior.prototype, "options", {
        /**
         * Gets the options used by the behavior
         */
        get: function () {
            return this._options;
        },
        /**
         * Sets the options used by the behavior
         */
        set: function (options) {
            this._options = options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PointerDragBehavior.prototype, "name", {
        /**
         *  The name of the behavior
         */
        get: function () {
            return "PointerDrag";
        },
        enumerable: false,
        configurable: true
    });
    /**
     *  Initializes the behavior
     */
    PointerDragBehavior.prototype.init = function () { };
    /**
     * Attaches the drag behavior the passed in mesh
     * @param ownerNode The mesh that will be dragged around once attached
     * @param predicate Predicate to use for pick filtering
     */
    PointerDragBehavior.prototype.attach = function (ownerNode, predicate) {
        var _this = this;
        this._scene = ownerNode.getScene();
        ownerNode.isNearGrabbable = true;
        this.attachedNode = ownerNode;
        // Initialize drag plane to not interfere with existing scene
        if (!PointerDragBehavior._PlaneScene) {
            if (this._debugMode) {
                PointerDragBehavior._PlaneScene = this._scene;
            }
            else {
                PointerDragBehavior._PlaneScene = new _scene__WEBPACK_IMPORTED_MODULE_1__.Scene(this._scene.getEngine(), { virtual: true });
                PointerDragBehavior._PlaneScene.detachControl();
                this._scene.onDisposeObservable.addOnce(function () {
                    PointerDragBehavior._PlaneScene.dispose();
                    PointerDragBehavior._PlaneScene = null;
                });
            }
        }
        this._dragPlane = (0,_Meshes_Builders_planeBuilder__WEBPACK_IMPORTED_MODULE_7__.CreatePlane)("pointerDragPlane", { size: this._debugMode ? 1 : 10000, updatable: false, sideOrientation: _Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Mesh.DOUBLESIDE }, PointerDragBehavior._PlaneScene);
        // State of the drag
        this.lastDragPosition = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0);
        var pickPredicate = predicate
            ? predicate
            : function (m) {
                return _this.attachedNode == m || m.isDescendantOf(_this.attachedNode);
            };
        this._pointerObserver = this._scene.onPointerObservable.add(function (pointerInfo) {
            if (!_this.enabled) {
                // If behavior is disabled before releaseDrag is ever called, call it now.
                if (_this._attachedToElement) {
                    _this.releaseDrag();
                    _this._activeDragButton = -1;
                }
                return;
            }
            if (pointerInfo.type == _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_4__.PointerEventTypes.POINTERDOWN) {
                if (_this.startAndReleaseDragOnPointerEvents &&
                    !_this.dragging &&
                    pointerInfo.pickInfo &&
                    pointerInfo.pickInfo.hit &&
                    pointerInfo.pickInfo.pickedMesh &&
                    pointerInfo.pickInfo.pickedPoint &&
                    pointerInfo.pickInfo.ray &&
                    pickPredicate(pointerInfo.pickInfo.pickedMesh)) {
                    if (_this._activeDragButton === -1 && _this.dragButtons.indexOf(pointerInfo.event.button) !== -1) {
                        _this._activeDragButton = pointerInfo.event.button;
                        _this._startDrag(pointerInfo.event.pointerId, pointerInfo.pickInfo.ray, pointerInfo.pickInfo.pickedPoint);
                    }
                }
            }
            else if (pointerInfo.type == _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_4__.PointerEventTypes.POINTERUP) {
                if (_this.startAndReleaseDragOnPointerEvents &&
                    _this.currentDraggingPointerId == pointerInfo.event.pointerId &&
                    _this._activeDragButton === pointerInfo.event.button) {
                    _this.releaseDrag();
                    _this._activeDragButton = -1;
                }
            }
            else if (pointerInfo.type == _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_4__.PointerEventTypes.POINTERMOVE) {
                var pointerId = pointerInfo.event.pointerId;
                // If drag was started with anyMouseID specified, set pointerID to the next mouse that moved
                if (_this.currentDraggingPointerId === PointerDragBehavior._AnyMouseId && pointerId !== PointerDragBehavior._AnyMouseId) {
                    var evt = pointerInfo.event;
                    var isMouseEvent = evt.pointerType === "mouse" || (!_this._scene.getEngine().hostInformation.isMobile && evt instanceof MouseEvent);
                    if (isMouseEvent) {
                        if (_this._lastPointerRay[_this.currentDraggingPointerId]) {
                            _this._lastPointerRay[pointerId] = _this._lastPointerRay[_this.currentDraggingPointerId];
                            delete _this._lastPointerRay[_this.currentDraggingPointerId];
                        }
                        _this.currentDraggingPointerId = pointerId;
                    }
                }
                // Keep track of last pointer ray, this is used simulating the start of a drag in startDrag()
                if (!_this._lastPointerRay[pointerId]) {
                    _this._lastPointerRay[pointerId] = new _Culling_ray__WEBPACK_IMPORTED_MODULE_5__.Ray(new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3());
                }
                if (pointerInfo.pickInfo && pointerInfo.pickInfo.ray) {
                    _this._lastPointerRay[pointerId].origin.copyFrom(pointerInfo.pickInfo.ray.origin);
                    _this._lastPointerRay[pointerId].direction.copyFrom(pointerInfo.pickInfo.ray.direction);
                    if (_this.currentDraggingPointerId == pointerId && _this.dragging) {
                        _this._moveDrag(pointerInfo.pickInfo.ray);
                    }
                }
            }
        });
        this._beforeRenderObserver = this._scene.onBeforeRenderObservable.add(function () {
            if (_this._moving && _this.moveAttached) {
                var needMatrixUpdate = false;
                _Misc_pivotTools__WEBPACK_IMPORTED_MODULE_6__.PivotTools._RemoveAndStorePivotPoint(_this.attachedNode);
                // Slowly move mesh to avoid jitter
                _this._targetPosition.subtractToRef(_this.attachedNode.absolutePosition, _this._tmpVector);
                _this._tmpVector.scaleInPlace(_this.dragDeltaRatio);
                _this.attachedNode.getAbsolutePosition().addToRef(_this._tmpVector, _this._tmpVector);
                if (_this.validateDrag(_this._tmpVector)) {
                    _this.attachedNode.setAbsolutePosition(_this._tmpVector);
                    needMatrixUpdate = true;
                }
                _Misc_pivotTools__WEBPACK_IMPORTED_MODULE_6__.PivotTools._RestorePivotPoint(_this.attachedNode);
                if (needMatrixUpdate) {
                    _this.attachedNode.computeWorldMatrix();
                }
            }
        });
    };
    /**
     * Force release the drag action by code.
     */
    PointerDragBehavior.prototype.releaseDrag = function () {
        if (this.dragging) {
            this.dragging = false;
            this.onDragEndObservable.notifyObservers({ dragPlanePoint: this.lastDragPosition, pointerId: this.currentDraggingPointerId });
        }
        this.currentDraggingPointerId = -1;
        this._moving = false;
        // Reattach camera controls
        if (this.detachCameraControls && this._attachedToElement && this._scene.activeCamera && !this._scene.activeCamera.leftCamera) {
            if (this._scene.activeCamera.getClassName() === "ArcRotateCamera") {
                var arcRotateCamera = this._scene.activeCamera;
                arcRotateCamera.attachControl(arcRotateCamera.inputs ? arcRotateCamera.inputs.noPreventDefault : true, arcRotateCamera._useCtrlForPanning, arcRotateCamera._panningMouseButton);
            }
            else {
                this._scene.activeCamera.attachControl(this._scene.activeCamera.inputs ? this._scene.activeCamera.inputs.noPreventDefault : true);
            }
            this._attachedToElement = false;
        }
    };
    /**
     * Simulates the start of a pointer drag event on the behavior
     * @param pointerId pointerID of the pointer that should be simulated (Default: Any mouse pointer ID)
     * @param fromRay initial ray of the pointer to be simulated (Default: Ray from camera to attached mesh)
     * @param startPickedPoint picked point of the pointer to be simulated (Default: attached mesh position)
     */
    PointerDragBehavior.prototype.startDrag = function (pointerId, fromRay, startPickedPoint) {
        if (pointerId === void 0) { pointerId = PointerDragBehavior._AnyMouseId; }
        this._startDrag(pointerId, fromRay, startPickedPoint);
        var lastRay = this._lastPointerRay[pointerId];
        if (pointerId === PointerDragBehavior._AnyMouseId) {
            lastRay = this._lastPointerRay[Object.keys(this._lastPointerRay)[0]];
        }
        if (lastRay) {
            // if there was a last pointer ray drag the object there
            this._moveDrag(lastRay);
        }
    };
    PointerDragBehavior.prototype._startDrag = function (pointerId, fromRay, startPickedPoint) {
        if (!this._scene.activeCamera || this.dragging || !this.attachedNode) {
            return;
        }
        _Misc_pivotTools__WEBPACK_IMPORTED_MODULE_6__.PivotTools._RemoveAndStorePivotPoint(this.attachedNode);
        // Create start ray from the camera to the object
        if (fromRay) {
            this._startDragRay.direction.copyFrom(fromRay.direction);
            this._startDragRay.origin.copyFrom(fromRay.origin);
        }
        else {
            this._startDragRay.origin.copyFrom(this._scene.activeCamera.position);
            this.attachedNode.getWorldMatrix().getTranslationToRef(this._tmpVector);
            this._tmpVector.subtractToRef(this._scene.activeCamera.position, this._startDragRay.direction);
        }
        this._updateDragPlanePosition(this._startDragRay, startPickedPoint ? startPickedPoint : this._tmpVector);
        var pickedPoint = this._pickWithRayOnDragPlane(this._startDragRay);
        if (pickedPoint) {
            this.dragging = true;
            this.currentDraggingPointerId = pointerId;
            this.lastDragPosition.copyFrom(pickedPoint);
            this.onDragStartObservable.notifyObservers({ dragPlanePoint: pickedPoint, pointerId: this.currentDraggingPointerId });
            this._targetPosition.copyFrom(this.attachedNode.getAbsolutePosition());
            // Detatch camera controls
            if (this.detachCameraControls && this._scene.activeCamera && this._scene.activeCamera.inputs && !this._scene.activeCamera.leftCamera) {
                if (this._scene.activeCamera.inputs.attachedToElement) {
                    this._scene.activeCamera.detachControl();
                    this._attachedToElement = true;
                }
                else {
                    this._attachedToElement = false;
                }
            }
        }
        _Misc_pivotTools__WEBPACK_IMPORTED_MODULE_6__.PivotTools._RestorePivotPoint(this.attachedNode);
    };
    PointerDragBehavior.prototype._moveDrag = function (ray) {
        this._moving = true;
        var pickedPoint = this._pickWithRayOnDragPlane(ray);
        if (pickedPoint) {
            _Misc_pivotTools__WEBPACK_IMPORTED_MODULE_6__.PivotTools._RemoveAndStorePivotPoint(this.attachedNode);
            if (this.updateDragPlane) {
                this._updateDragPlanePosition(ray, pickedPoint);
            }
            var dragLength = 0;
            // depending on the drag mode option drag accordingly
            if (this._options.dragAxis) {
                // Convert local drag axis to world if useObjectOrientationForDragging
                this.useObjectOrientationForDragging
                    ? _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.TransformCoordinatesToRef(this._options.dragAxis, this.attachedNode.getWorldMatrix().getRotationMatrix(), this._worldDragAxis)
                    : this._worldDragAxis.copyFrom(this._options.dragAxis);
                // Project delta drag from the drag plane onto the drag axis
                pickedPoint.subtractToRef(this.lastDragPosition, this._tmpVector);
                dragLength = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Dot(this._tmpVector, this._worldDragAxis);
                this._worldDragAxis.scaleToRef(dragLength, this._dragDelta);
            }
            else {
                dragLength = this._dragDelta.length();
                pickedPoint.subtractToRef(this.lastDragPosition, this._dragDelta);
            }
            this._targetPosition.addInPlace(this._dragDelta);
            this.onDragObservable.notifyObservers({
                dragDistance: dragLength,
                delta: this._dragDelta,
                dragPlanePoint: pickedPoint,
                dragPlaneNormal: this._dragPlane.forward,
                pointerId: this.currentDraggingPointerId,
            });
            this.lastDragPosition.copyFrom(pickedPoint);
            _Misc_pivotTools__WEBPACK_IMPORTED_MODULE_6__.PivotTools._RestorePivotPoint(this.attachedNode);
        }
    };
    PointerDragBehavior.prototype._pickWithRayOnDragPlane = function (ray) {
        var _this = this;
        if (!ray) {
            return null;
        }
        // Calculate angle between plane normal and ray
        var angle = Math.acos(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Dot(this._dragPlane.forward, ray.direction));
        // Correct if ray is casted from oposite side
        if (angle > Math.PI / 2) {
            angle = Math.PI - angle;
        }
        // If the angle is too perpendicular to the plane pick another point on the plane where it is looking
        if (this.maxDragAngle > 0 && angle > this.maxDragAngle) {
            if (this._useAlternatePickedPointAboveMaxDragAngle) {
                // Invert ray direction along the towards object axis
                this._tmpVector.copyFrom(ray.direction);
                this.attachedNode.absolutePosition.subtractToRef(ray.origin, this._alternatePickedPoint);
                this._alternatePickedPoint.normalize();
                this._alternatePickedPoint.scaleInPlace(this._useAlternatePickedPointAboveMaxDragAngleDragSpeed * _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Dot(this._alternatePickedPoint, this._tmpVector));
                this._tmpVector.addInPlace(this._alternatePickedPoint);
                // Project resulting vector onto the drag plane and add it to the attached nodes absolute position to get a picked point
                var dot = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Dot(this._dragPlane.forward, this._tmpVector);
                this._dragPlane.forward.scaleToRef(-dot, this._alternatePickedPoint);
                this._alternatePickedPoint.addInPlace(this._tmpVector);
                this._alternatePickedPoint.addInPlace(this.attachedNode.absolutePosition);
                return this._alternatePickedPoint;
            }
            else {
                return null;
            }
        }
        var pickResult = PointerDragBehavior._PlaneScene.pickWithRay(ray, function (m) {
            return m == _this._dragPlane;
        });
        if (pickResult && pickResult.hit && pickResult.pickedMesh && pickResult.pickedPoint) {
            return pickResult.pickedPoint;
        }
        else {
            return null;
        }
    };
    // Position the drag plane based on the attached mesh position, for single axis rotate the plane along the axis to face the camera
    PointerDragBehavior.prototype._updateDragPlanePosition = function (ray, dragPlanePosition) {
        this._pointA.copyFrom(dragPlanePosition);
        if (this._options.dragAxis) {
            this.useObjectOrientationForDragging
                ? _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.TransformCoordinatesToRef(this._options.dragAxis, this.attachedNode.getWorldMatrix().getRotationMatrix(), this._localAxis)
                : this._localAxis.copyFrom(this._options.dragAxis);
            // Calculate plane normal that is the cross product of local axis and (eye-dragPlanePosition)
            ray.origin.subtractToRef(this._pointA, this._pointC);
            this._pointC.normalize();
            if (Math.abs(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Dot(this._localAxis, this._pointC)) > 0.999) {
                // the drag axis is colinear with the (eye to position) ray. The cross product will give jittered values.
                // A new axis vector need to be computed
                if (Math.abs(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Dot(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.UpReadOnly, this._pointC)) > 0.999) {
                    this._lookAt.copyFrom(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Right());
                }
                else {
                    this._lookAt.copyFrom(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.UpReadOnly);
                }
            }
            else {
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.CrossToRef(this._localAxis, this._pointC, this._lookAt);
                // Get perpendicular line from previous result and drag axis to adjust lineB to be perpendicular to camera
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.CrossToRef(this._localAxis, this._lookAt, this._lookAt);
                this._lookAt.normalize();
            }
            this._dragPlane.position.copyFrom(this._pointA);
            this._pointA.addToRef(this._lookAt, this._lookAt);
            this._dragPlane.lookAt(this._lookAt);
        }
        else if (this._options.dragPlaneNormal) {
            this.useObjectOrientationForDragging
                ? _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.TransformCoordinatesToRef(this._options.dragPlaneNormal, this.attachedNode.getWorldMatrix().getRotationMatrix(), this._localAxis)
                : this._localAxis.copyFrom(this._options.dragPlaneNormal);
            this._dragPlane.position.copyFrom(this._pointA);
            this._pointA.addToRef(this._localAxis, this._lookAt);
            this._dragPlane.lookAt(this._lookAt);
        }
        else {
            this._dragPlane.position.copyFrom(this._pointA);
            this._dragPlane.lookAt(ray.origin);
        }
        // Update the position of the drag plane so it doesn't get out of sync with the node (eg. when moving back and forth quickly)
        this._dragPlane.position.copyFrom(this.attachedNode.getAbsolutePosition());
        this._dragPlane.computeWorldMatrix(true);
    };
    /**
     *  Detaches the behavior from the mesh
     */
    PointerDragBehavior.prototype.detach = function () {
        this._lastPointerRay = {};
        if (this.attachedNode) {
            this.attachedNode.isNearGrabbable = false;
        }
        if (this._pointerObserver) {
            this._scene.onPointerObservable.remove(this._pointerObserver);
        }
        if (this._beforeRenderObserver) {
            this._scene.onBeforeRenderObservable.remove(this._beforeRenderObserver);
        }
        if (this._dragPlane) {
            this._dragPlane.dispose();
        }
        this.releaseDrag();
        this._activeDragButton = -1;
    };
    PointerDragBehavior._AnyMouseId = -2;
    return PointerDragBehavior;
}());



/***/ }),

/***/ "../../../lts/core/dist/Behaviors/Meshes/sixDofDragBehavior.js":
/*!*********************************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/Meshes/sixDofDragBehavior.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SixDofDragBehavior": () => (/* binding */ SixDofDragBehavior)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Misc/observable */ "../../../lts/core/dist/Misc/observable.js");
/* harmony import */ var _baseSixDofDragBehavior__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseSixDofDragBehavior */ "../../../lts/core/dist/Behaviors/Meshes/baseSixDofDragBehavior.js");
/* harmony import */ var _Meshes_transformNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Meshes/transformNode */ "../../../lts/core/dist/Meshes/transformNode.js");
/* harmony import */ var _Maths_math_axis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Maths/math.axis */ "../../../lts/core/dist/Maths/math.axis.js");






/**
 * A behavior that when attached to a mesh will allow the mesh to be dragged around based on directions and origin of the pointer's ray
 */
var SixDofDragBehavior = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SixDofDragBehavior, _super);
    function SixDofDragBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._sceneRenderObserver = null;
        _this._targetPosition = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
        _this._targetOrientation = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
        _this._targetScaling = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1);
        _this._startingPosition = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
        _this._startingOrientation = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
        _this._startingScaling = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1);
        /**
         * Fires when position is updated
         */
        _this.onPositionChangedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        /**
         * The distance towards the target drag position to move each frame. This can be useful to avoid jitter. Set this to 1 for no delay. (Default: 0.2)
         */
        _this.dragDeltaRatio = 0.2;
        /**
         * If the object should rotate to face the drag origin
         */
        _this.rotateDraggedObject = true;
        /**
         * If `rotateDraggedObject` is set to `true`, this parameter determines if we are only rotating around the y axis (yaw)
         */
        _this.rotateAroundYOnly = false;
        /**
         * Should the behavior rotate 1:1 with the motion controller, when one is used.
         */
        _this.rotateWithMotionController = true;
        /**
         * Use this flag to update the target but not move the owner node towards the target
         */
        _this.disableMovement = false;
        /**
         * Should the object rotate towards the camera when we start dragging it
         */
        _this.faceCameraOnDragStart = false;
        return _this;
    }
    Object.defineProperty(SixDofDragBehavior.prototype, "name", {
        /**
         *  The name of the behavior
         */
        get: function () {
            return "SixDofDrag";
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Attaches the six DoF drag behavior
     * @param ownerNode The mesh that will be dragged around once attached
     */
    SixDofDragBehavior.prototype.attach = function (ownerNode) {
        var _this = this;
        _super.prototype.attach.call(this, ownerNode);
        ownerNode.isNearGrabbable = true;
        // Node that will save the owner's transform
        this._virtualTransformNode = new _Meshes_transformNode__WEBPACK_IMPORTED_MODULE_4__.TransformNode("virtual_sixDof", _baseSixDofDragBehavior__WEBPACK_IMPORTED_MODULE_3__.BaseSixDofDragBehavior._virtualScene);
        this._virtualTransformNode.rotationQuaternion = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.Identity();
        // On every frame move towards target scaling to avoid jitter caused by vr controllers
        this._sceneRenderObserver = ownerNode.getScene().onBeforeRenderObservable.add(function () {
            if (_this.currentDraggingPointerIds.length === 1 && _this._moving && !_this.disableMovement) {
                // 1 pointer only drags mesh
                var oldParent = ownerNode.parent;
                ownerNode.setParent(null);
                ownerNode.position.addInPlace(_this._targetPosition.subtract(ownerNode.position).scale(_this.dragDeltaRatio));
                _this.onPositionChangedObservable.notifyObservers({ position: ownerNode.absolutePosition });
                // Only rotate the mesh if it's parent has uniform scaling
                if (!oldParent || (oldParent.scaling && !oldParent.scaling.isNonUniformWithinEpsilon(0.001))) {
                    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.SlerpToRef(ownerNode.rotationQuaternion, _this._targetOrientation, _this.dragDeltaRatio, ownerNode.rotationQuaternion);
                }
                ownerNode.setParent(oldParent);
            }
        });
    };
    SixDofDragBehavior.prototype._getPositionOffsetAround = function (transformationLocalOrigin, scaling, rotation) {
        var translationMatrix = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Matrix[0]; // T
        var translationMatrixInv = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Matrix[1]; // T'
        var rotationMatrix = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Matrix[2]; // R
        var scaleMatrix = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Matrix[3]; // S
        var finalMatrix = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Matrix[4]; // T' x R x S x T
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.TranslationToRef(transformationLocalOrigin.x, transformationLocalOrigin.y, transformationLocalOrigin.z, translationMatrix); // T
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.TranslationToRef(-transformationLocalOrigin.x, -transformationLocalOrigin.y, -transformationLocalOrigin.z, translationMatrixInv); // T'
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromQuaternionToRef(rotation, rotationMatrix); // R
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.ScalingToRef(scaling, scaling, scaling, scaleMatrix);
        translationMatrixInv.multiplyToRef(rotationMatrix, finalMatrix); // T' x R
        finalMatrix.multiplyToRef(scaleMatrix, finalMatrix); // T' x R x S
        finalMatrix.multiplyToRef(translationMatrix, finalMatrix); // T' x R x S x T
        return finalMatrix.getTranslation();
    };
    SixDofDragBehavior.prototype._onePointerPositionUpdated = function (worldDeltaPosition, worldDeltaRotation) {
        var pointerDelta = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[0];
        pointerDelta.setAll(0);
        if (this._dragging === this._dragType.DRAG) {
            if (this.rotateDraggedObject) {
                if (this.rotateAroundYOnly) {
                    // Convert change in rotation to only y axis rotation
                    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.RotationYawPitchRollToRef(worldDeltaRotation.toEulerAngles().y, 0, 0, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Quaternion[0]);
                }
                else {
                    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Quaternion[0].copyFrom(worldDeltaRotation);
                }
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Quaternion[0].multiplyToRef(this._startingOrientation, this._targetOrientation);
            }
        }
        else if (this._dragging === this._dragType.NEAR_DRAG || (this._dragging === this._dragType.DRAG_WITH_CONTROLLER && this.rotateWithMotionController)) {
            worldDeltaRotation.multiplyToRef(this._startingOrientation, this._targetOrientation);
        }
        this._targetPosition.copyFrom(this._startingPosition).addInPlace(worldDeltaPosition);
    };
    SixDofDragBehavior.prototype._twoPointersPositionUpdated = function () {
        var startingPosition0 = this._virtualMeshesInfo[this.currentDraggingPointerIds[0]].startingPosition;
        var startingPosition1 = this._virtualMeshesInfo[this.currentDraggingPointerIds[1]].startingPosition;
        var startingCenter = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[0];
        startingPosition0.addToRef(startingPosition1, startingCenter);
        startingCenter.scaleInPlace(0.5);
        var startingVector = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[1];
        startingPosition1.subtractToRef(startingPosition0, startingVector);
        var currentPosition0 = this._virtualMeshesInfo[this.currentDraggingPointerIds[0]].dragMesh.absolutePosition;
        var currentPosition1 = this._virtualMeshesInfo[this.currentDraggingPointerIds[1]].dragMesh.absolutePosition;
        var currentCenter = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[2];
        currentPosition0.addToRef(currentPosition1, currentCenter);
        currentCenter.scaleInPlace(0.5);
        var currentVector = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[3];
        currentPosition1.subtractToRef(currentPosition0, currentVector);
        var scaling = currentVector.length() / startingVector.length();
        var translation = currentCenter.subtract(startingCenter);
        var rotationQuaternion = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromEulerAngles(0, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.GetAngleBetweenVectorsOnPlane(startingVector.normalize(), currentVector.normalize(), _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.UpReadOnly), 0);
        var oldParent = this._ownerNode.parent;
        this._ownerNode.setParent(null);
        var positionOffset = this._getPositionOffsetAround(startingCenter.subtract(this._virtualTransformNode.getAbsolutePivotPoint()), scaling, rotationQuaternion);
        this._virtualTransformNode.rotationQuaternion.multiplyToRef(rotationQuaternion, this._ownerNode.rotationQuaternion);
        this._virtualTransformNode.scaling.scaleToRef(scaling, this._ownerNode.scaling);
        this._virtualTransformNode.position.addToRef(translation.addInPlace(positionOffset), this._ownerNode.position);
        this.onPositionChangedObservable.notifyObservers({ position: this._ownerNode.position });
        this._ownerNode.setParent(oldParent);
    };
    SixDofDragBehavior.prototype._targetDragStart = function () {
        var pointerCount = this.currentDraggingPointerIds.length;
        var oldParent = this._ownerNode.parent;
        if (!this._ownerNode.rotationQuaternion) {
            this._ownerNode.rotationQuaternion = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.RotationYawPitchRoll(this._ownerNode.rotation.y, this._ownerNode.rotation.x, this._ownerNode.rotation.z);
        }
        var worldPivot = this._ownerNode.getAbsolutePivotPoint();
        this._ownerNode.setParent(null);
        if (pointerCount === 1) {
            this._targetPosition.copyFrom(this._ownerNode.position);
            this._targetOrientation.copyFrom(this._ownerNode.rotationQuaternion);
            this._targetScaling.copyFrom(this._ownerNode.scaling);
            if (this.faceCameraOnDragStart && this._scene.activeCamera) {
                var toCamera = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[0];
                this._scene.activeCamera.position.subtractToRef(worldPivot, toCamera);
                toCamera.normalize();
                var quat = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Quaternion[0];
                if (this._scene.useRightHandedSystem) {
                    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromLookDirectionRHToRef(toCamera, new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0), quat);
                }
                else {
                    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromLookDirectionLHToRef(toCamera, new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0), quat);
                }
                quat.normalize();
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.RotationYawPitchRollToRef(quat.toEulerAngles().y, 0, 0, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Quaternion[0]);
                this._targetOrientation.copyFrom(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Quaternion[0]);
            }
            this._startingPosition.copyFrom(this._targetPosition);
            this._startingOrientation.copyFrom(this._targetOrientation);
            this._startingScaling.copyFrom(this._targetScaling);
        }
        else if (pointerCount === 2) {
            this._virtualTransformNode.setPivotPoint(new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0), _Maths_math_axis__WEBPACK_IMPORTED_MODULE_5__.Space.LOCAL);
            this._virtualTransformNode.position.copyFrom(this._ownerNode.position);
            this._virtualTransformNode.scaling.copyFrom(this._ownerNode.scaling);
            this._virtualTransformNode.rotationQuaternion.copyFrom(this._ownerNode.rotationQuaternion);
            this._virtualTransformNode.setPivotPoint(worldPivot, _Maths_math_axis__WEBPACK_IMPORTED_MODULE_5__.Space.WORLD);
            this._resetVirtualMeshesPosition();
        }
        this._ownerNode.setParent(oldParent);
    };
    SixDofDragBehavior.prototype._targetDrag = function (worldDeltaPosition, worldDeltaRotation) {
        if (this.currentDraggingPointerIds.length === 1) {
            this._onePointerPositionUpdated(worldDeltaPosition, worldDeltaRotation);
        }
        else if (this.currentDraggingPointerIds.length === 2) {
            this._twoPointersPositionUpdated();
        }
    };
    SixDofDragBehavior.prototype._targetDragEnd = function () {
        if (this.currentDraggingPointerIds.length === 1) {
            // We still have 1 active pointer, we must simulate a dragstart with a reseted position/orientation
            this._resetVirtualMeshesPosition();
            var previousFaceCameraFlag = this.faceCameraOnDragStart;
            this.faceCameraOnDragStart = false;
            this._targetDragStart();
            this.faceCameraOnDragStart = previousFaceCameraFlag;
        }
    };
    /**
     *  Detaches the behavior from the mesh
     */
    SixDofDragBehavior.prototype.detach = function () {
        _super.prototype.detach.call(this);
        if (this._ownerNode) {
            this._ownerNode.isNearGrabbable = false;
            this._ownerNode.getScene().onBeforeRenderObservable.remove(this._sceneRenderObserver);
        }
        if (this._virtualTransformNode) {
            this._virtualTransformNode.dispose();
        }
    };
    return SixDofDragBehavior;
}(_baseSixDofDragBehavior__WEBPACK_IMPORTED_MODULE_3__.BaseSixDofDragBehavior));



/***/ }),

/***/ "../../../lts/core/dist/Behaviors/Meshes/surfaceMagnetismBehavior.js":
/*!***************************************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/Meshes/surfaceMagnetismBehavior.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurfaceMagnetismBehavior": () => (/* binding */ SurfaceMagnetismBehavior)
/* harmony export */ });
/* harmony import */ var _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Events/pointerEvents */ "../../../lts/core/dist/Events/pointerEvents.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");


/**
 * A behavior that allows a transform node to stick to a surface position/orientation
 * @since 5.0.0
 */
var SurfaceMagnetismBehavior = /** @class */ (function () {
    function SurfaceMagnetismBehavior() {
        this._attachPointLocalOffset = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3();
        this._workingPosition = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3();
        this._workingQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
        this._lastTick = -1;
        this._hit = false;
        /**
         * Distance offset from the hit point to place the target at, along the hit normal.
         */
        this.hitNormalOffset = 0.05;
        /**
         * Spatial mapping meshes to collide with
         */
        this.meshes = [];
        /**
         * Set to false if the node should strictly follow the camera without any interpolation time
         */
        this.interpolatePose = true;
        /**
         * Rate of interpolation of position and rotation of the attached node.
         * Higher values will give a slower interpolation.
         */
        this.lerpTime = 250;
        /**
         * If true, pitch and roll are omitted.
         */
        this.keepOrientationVertical = true;
        /**
         * Is this behavior reacting to pointer events
         */
        this.enabled = true;
        /**
         * Maximum distance for the node to stick to the surface
         */
        this.maxStickingDistance = 0.8;
    }
    Object.defineProperty(SurfaceMagnetismBehavior.prototype, "name", {
        /**
         * Name of the behavior
         */
        get: function () {
            return "SurfaceMagnetism";
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Function called when the behavior needs to be initialized (after attaching it to a target)
     */
    SurfaceMagnetismBehavior.prototype.init = function () { };
    /**
     * Attaches the behavior to a transform node
     * @param target defines the target where the behavior is attached to
     * @param scene the scene
     */
    SurfaceMagnetismBehavior.prototype.attach = function (target, scene) {
        this._attachedMesh = target;
        this._scene = scene || target.getScene();
        if (!this._attachedMesh.rotationQuaternion) {
            this._attachedMesh.rotationQuaternion = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.RotationYawPitchRoll(this._attachedMesh.rotation.y, this._attachedMesh.rotation.x, this._attachedMesh.rotation.z);
        }
        this.updateAttachPoint();
        this._workingPosition.copyFrom(this._attachedMesh.position);
        this._workingQuaternion.copyFrom(this._attachedMesh.rotationQuaternion);
        this._addObservables();
    };
    /**
     * Detaches the behavior
     */
    SurfaceMagnetismBehavior.prototype.detach = function () {
        this._attachedMesh = null;
        this._removeObservables();
    };
    SurfaceMagnetismBehavior.prototype._getTargetPose = function (pickingInfo) {
        if (!this._attachedMesh) {
            return null;
        }
        if (pickingInfo && pickingInfo.hit) {
            var pickedNormal = pickingInfo.getNormal(true, true);
            var pickedPoint = pickingInfo.pickedPoint;
            if (!pickedNormal || !pickedPoint) {
                return null;
            }
            pickedNormal.normalize();
            var worldTarget = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[0];
            worldTarget.copyFrom(pickedNormal);
            worldTarget.scaleInPlace(this.hitNormalOffset);
            worldTarget.addInPlace(pickedPoint);
            if (this._attachedMesh.parent) {
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Matrix[0].copyFrom(this._attachedMesh.parent.getWorldMatrix()).invert();
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformNormalToRef(worldTarget, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Matrix[0], worldTarget);
            }
            return {
                position: worldTarget,
                quaternion: _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.RotationYawPitchRoll(-Math.atan2(pickedNormal.x, -pickedNormal.z), this.keepOrientationVertical ? 0 : Math.atan2(pickedNormal.y, Math.sqrt(pickedNormal.z * pickedNormal.z + pickedNormal.x * pickedNormal.x)), 0),
            };
        }
        return null;
    };
    /**
     * Updates the attach point with the current geometry extents of the attached mesh
     */
    SurfaceMagnetismBehavior.prototype.updateAttachPoint = function () {
        this._getAttachPointOffsetToRef(this._attachPointLocalOffset);
    };
    /**
     * Finds the intersection point of the given ray onto the meshes and updates the target.
     * Transformation will be interpolated according to `interpolatePose` and `lerpTime` properties.
     * If no mesh of `meshes` are hit, this does nothing.
     * @param pickInfo The input pickingInfo that will be used to intersect the meshes
     * @returns a boolean indicating if we found a hit to stick to
     */
    SurfaceMagnetismBehavior.prototype.findAndUpdateTarget = function (pickInfo) {
        this._hit = false;
        if (!pickInfo.ray) {
            return false;
        }
        var subPicking = pickInfo.ray.intersectsMeshes(this.meshes)[0];
        if (this._attachedMesh && subPicking && subPicking.hit && subPicking.pickedMesh) {
            var pose = this._getTargetPose(subPicking);
            if (pose && _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Distance(this._attachedMesh.position, pose.position) < this.maxStickingDistance) {
                this._workingPosition.copyFrom(pose.position);
                this._workingQuaternion.copyFrom(pose.quaternion);
                this._hit = true;
            }
        }
        return this._hit;
    };
    SurfaceMagnetismBehavior.prototype._getAttachPointOffsetToRef = function (ref) {
        if (!this._attachedMesh) {
            ref.setAll(0);
            return;
        }
        var storedQuat = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Quaternion[0];
        storedQuat.copyFrom(this._attachedMesh.rotationQuaternion);
        this._attachedMesh.rotationQuaternion.copyFromFloats(0, 0, 0, 1);
        this._attachedMesh.computeWorldMatrix();
        var boundingMinMax = this._attachedMesh.getHierarchyBoundingVectors();
        var center = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[0];
        boundingMinMax.max.addToRef(boundingMinMax.min, center);
        center.scaleInPlace(0.5);
        center.z = boundingMinMax.max.z;
        // We max the z coordinate because we want the attach point to be on the back of the mesh
        var invWorld = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Matrix[0];
        this._attachedMesh.getWorldMatrix().invertToRef(invWorld);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(center, invWorld, ref);
        this._attachedMesh.rotationQuaternion.copyFrom(storedQuat);
    };
    SurfaceMagnetismBehavior.prototype._updateTransformToGoal = function (elapsed) {
        if (!this._attachedMesh || !this._hit) {
            return;
        }
        var oldParent = this._attachedMesh.parent;
        this._attachedMesh.setParent(null);
        var worldOffset = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[0];
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformNormalToRef(this._attachPointLocalOffset, this._attachedMesh.getWorldMatrix(), worldOffset);
        if (!this.interpolatePose) {
            this._attachedMesh.position.copyFrom(this._workingPosition).subtractInPlace(worldOffset);
            this._attachedMesh.rotationQuaternion.copyFrom(this._workingQuaternion);
            return;
        }
        // position
        var interpolatedPosition = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3();
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.SmoothToRef(this._attachedMesh.position, this._workingPosition, elapsed, this.lerpTime, interpolatedPosition);
        this._attachedMesh.position.copyFrom(interpolatedPosition);
        // rotation
        var currentRotation = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
        currentRotation.copyFrom(this._attachedMesh.rotationQuaternion);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.SmoothToRef(currentRotation, this._workingQuaternion, elapsed, this.lerpTime, this._attachedMesh.rotationQuaternion);
        this._attachedMesh.setParent(oldParent);
    };
    SurfaceMagnetismBehavior.prototype._addObservables = function () {
        var _this = this;
        this._pointerObserver = this._scene.onPointerObservable.add(function (pointerInfo) {
            if (_this.enabled && pointerInfo.type == _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_0__.PointerEventTypes.POINTERMOVE && pointerInfo.pickInfo) {
                _this.findAndUpdateTarget(pointerInfo.pickInfo);
            }
        });
        this._lastTick = Date.now();
        this._onBeforeRender = this._scene.onBeforeRenderObservable.add(function () {
            var tick = Date.now();
            _this._updateTransformToGoal(tick - _this._lastTick);
            _this._lastTick = tick;
        });
    };
    SurfaceMagnetismBehavior.prototype._removeObservables = function () {
        this._scene.onPointerObservable.remove(this._pointerObserver);
        this._scene.onBeforeRenderObservable.remove(this._onBeforeRender);
        this._pointerObserver = null;
        this._onBeforeRender = null;
    };
    return SurfaceMagnetismBehavior;
}());



/***/ }),

/***/ "../../../lts/core/dist/Behaviors/behavior.js":
/*!****************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/behavior.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../lts/core/dist/Behaviors/index.js":
/*!*************************************************!*\
  !*** ../../../lts/core/dist/Behaviors/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachToBoxBehavior": () => (/* reexport safe */ _Meshes_index__WEBPACK_IMPORTED_MODULE_2__.AttachToBoxBehavior),
/* harmony export */   "AutoRotationBehavior": () => (/* reexport safe */ _Cameras_index__WEBPACK_IMPORTED_MODULE_1__.AutoRotationBehavior),
/* harmony export */   "BaseSixDofDragBehavior": () => (/* reexport safe */ _Meshes_index__WEBPACK_IMPORTED_MODULE_2__.BaseSixDofDragBehavior),
/* harmony export */   "BouncingBehavior": () => (/* reexport safe */ _Cameras_index__WEBPACK_IMPORTED_MODULE_1__.BouncingBehavior),
/* harmony export */   "FadeInOutBehavior": () => (/* reexport safe */ _Meshes_index__WEBPACK_IMPORTED_MODULE_2__.FadeInOutBehavior),
/* harmony export */   "FollowBehavior": () => (/* reexport safe */ _Meshes_index__WEBPACK_IMPORTED_MODULE_2__.FollowBehavior),
/* harmony export */   "FramingBehavior": () => (/* reexport safe */ _Cameras_index__WEBPACK_IMPORTED_MODULE_1__.FramingBehavior),
/* harmony export */   "HandConstraintBehavior": () => (/* reexport safe */ _Meshes_index__WEBPACK_IMPORTED_MODULE_2__.HandConstraintBehavior),
/* harmony export */   "HandConstraintOrientation": () => (/* reexport safe */ _Meshes_index__WEBPACK_IMPORTED_MODULE_2__.HandConstraintOrientation),
/* harmony export */   "HandConstraintVisibility": () => (/* reexport safe */ _Meshes_index__WEBPACK_IMPORTED_MODULE_2__.HandConstraintVisibility),
/* harmony export */   "HandConstraintZone": () => (/* reexport safe */ _Meshes_index__WEBPACK_IMPORTED_MODULE_2__.HandConstraintZone),
/* harmony export */   "MultiPointerScaleBehavior": () => (/* reexport safe */ _Meshes_index__WEBPACK_IMPORTED_MODULE_2__.MultiPointerScaleBehavior),
/* harmony export */   "PointerDragBehavior": () => (/* reexport safe */ _Meshes_index__WEBPACK_IMPORTED_MODULE_2__.PointerDragBehavior),
/* harmony export */   "SixDofDragBehavior": () => (/* reexport safe */ _Meshes_index__WEBPACK_IMPORTED_MODULE_2__.SixDofDragBehavior),
/* harmony export */   "SurfaceMagnetismBehavior": () => (/* reexport safe */ _Meshes_index__WEBPACK_IMPORTED_MODULE_2__.SurfaceMagnetismBehavior)
/* harmony export */ });
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behavior */ "../../../lts/core/dist/Behaviors/behavior.js");
/* harmony import */ var _Cameras_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cameras/index */ "../../../lts/core/dist/Behaviors/Cameras/index.js");
/* harmony import */ var _Meshes_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Meshes/index */ "../../../lts/core/dist/Behaviors/Meshes/index.js");
/* eslint-disable import/no-internal-modules */





/***/ }),

/***/ "../../../lts/core/dist/Bones/bone.js":
/*!********************************************!*\
  !*** ../../../lts/core/dist/Bones/bone.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bone": () => (/* binding */ Bone)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Misc_arrayTools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Misc/arrayTools */ "../../../lts/core/dist/Misc/arrayTools.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node */ "../../../lts/core/dist/node.js");
/* harmony import */ var _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Maths/math.axis */ "../../../lts/core/dist/Maths/math.axis.js");





/**
 * Class used to store bone information
 * @see https://doc.babylonjs.com/how_to/how_to_use_bones_and_skeletons
 */
var Bone = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Bone, _super);
    /**
     * Create a new bone
     * @param name defines the bone name
     * @param skeleton defines the parent skeleton
     * @param parentBone defines the parent (can be null if the bone is the root)
     * @param localMatrix defines the local matrix
     * @param restPose defines the rest pose matrix
     * @param baseMatrix defines the base matrix
     * @param index defines index of the bone in the hierarchy
     */
    function Bone(
    /**
     * defines the bone name
     */
    name, skeleton, parentBone, localMatrix, restPose, baseMatrix, index) {
        if (parentBone === void 0) { parentBone = null; }
        if (localMatrix === void 0) { localMatrix = null; }
        if (restPose === void 0) { restPose = null; }
        if (baseMatrix === void 0) { baseMatrix = null; }
        if (index === void 0) { index = null; }
        var _this = _super.call(this, name, skeleton.getScene()) || this;
        _this.name = name;
        /**
         * Gets the list of child bones
         */
        _this.children = new Array();
        /** Gets the animations associated with this bone */
        _this.animations = new Array();
        /**
         * @hidden Internal only
         * Set this value to map this bone to a different index in the transform matrices
         * Set this value to -1 to exclude the bone from the transform matrices
         */
        _this._index = null;
        _this._absoluteTransform = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix();
        _this._invertedAbsoluteTransform = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix();
        _this._scalingDeterminant = 1;
        _this._worldTransform = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix();
        _this._needToDecompose = true;
        _this._needToCompose = false;
        /** @hidden */
        _this._linkedTransformNode = null;
        /** @hidden */
        _this._waitingTransformNodeId = null;
        _this._skeleton = skeleton;
        _this._localMatrix = localMatrix ? localMatrix.clone() : _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Identity();
        _this._restPose = restPose ? restPose : _this._localMatrix.clone();
        _this._baseMatrix = baseMatrix ? baseMatrix : _this._localMatrix.clone();
        _this._index = index;
        skeleton.bones.push(_this);
        _this.setParent(parentBone, false);
        if (baseMatrix || localMatrix) {
            _this._updateDifferenceMatrix();
        }
        return _this;
    }
    Object.defineProperty(Bone.prototype, "_matrix", {
        /** @hidden */
        get: function () {
            this._compose();
            return this._localMatrix;
        },
        /** @hidden */
        set: function (value) {
            this._needToCompose = false; // in case there was a pending compose
            // skip if the matrices are the same
            if (value.updateFlag === this._localMatrix.updateFlag) {
                return;
            }
            this._localMatrix.copyFrom(value);
            this._markAsDirtyAndDecompose();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets the current object class name.
     * @return the class name
     */
    Bone.prototype.getClassName = function () {
        return "Bone";
    };
    // Members
    /**
     * Gets the parent skeleton
     * @returns a skeleton
     */
    Bone.prototype.getSkeleton = function () {
        return this._skeleton;
    };
    Object.defineProperty(Bone.prototype, "parent", {
        get: function () {
            return this._parentNode;
        },
        set: function (newParent) {
            this.setParent(newParent);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets parent bone
     * @returns a bone or null if the bone is the root of the bone hierarchy
     */
    Bone.prototype.getParent = function () {
        return this.parent;
    };
    /**
     * Returns an array containing the root bones
     * @returns an array containing the root bones
     */
    Bone.prototype.getChildren = function () {
        return this.children;
    };
    /**
     * Gets the node index in matrix array generated for rendering
     * @returns the node index
     */
    Bone.prototype.getIndex = function () {
        return this._index === null ? this.getSkeleton().bones.indexOf(this) : this._index;
    };
    /**
     * Sets the parent bone
     * @param parent defines the parent (can be null if the bone is the root)
     * @param updateDifferenceMatrix defines if the difference matrix must be updated
     */
    Bone.prototype.setParent = function (parent, updateDifferenceMatrix) {
        if (updateDifferenceMatrix === void 0) { updateDifferenceMatrix = true; }
        if (this.parent === parent) {
            return;
        }
        if (this.parent) {
            var index = this.parent.children.indexOf(this);
            if (index !== -1) {
                this.parent.children.splice(index, 1);
            }
        }
        this._parentNode = parent;
        if (this.parent) {
            this.parent.children.push(this);
        }
        if (updateDifferenceMatrix) {
            this._updateDifferenceMatrix();
        }
        this.markAsDirty();
    };
    /**
     * Gets the local matrix
     * @returns a matrix
     */
    Bone.prototype.getLocalMatrix = function () {
        this._compose();
        return this._localMatrix;
    };
    /**
     * Gets the base matrix (initial matrix which remains unchanged)
     * @returns the base matrix (as known as bind pose matrix)
     */
    Bone.prototype.getBaseMatrix = function () {
        return this._baseMatrix;
    };
    /**
     * Gets the rest pose matrix
     * @returns a matrix
     */
    Bone.prototype.getRestPose = function () {
        return this._restPose;
    };
    /**
     * Sets the rest pose matrix
     * @param matrix the local-space rest pose to set for this bone
     */
    Bone.prototype.setRestPose = function (matrix) {
        this._restPose.copyFrom(matrix);
    };
    /**
     * Gets the bind pose matrix
     * @returns the bind pose matrix
     * @deprecated Please use getBaseMatrix instead
     */
    Bone.prototype.getBindPose = function () {
        return this._baseMatrix;
    };
    /**
     * Sets the bind pose matrix
     * @param matrix the local-space bind pose to set for this bone
     * @deprecated Please use updateMatrix instead
     */
    Bone.prototype.setBindPose = function (matrix) {
        this.updateMatrix(matrix);
    };
    /**
     * Gets a matrix used to store world matrix (ie. the matrix sent to shaders)
     */
    Bone.prototype.getWorldMatrix = function () {
        return this._worldTransform;
    };
    /**
     * Sets the local matrix to rest pose matrix
     */
    Bone.prototype.returnToRest = function () {
        var _a;
        if (this._linkedTransformNode) {
            var localScaling = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[0];
            var localRotation = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Quaternion[0];
            var localPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[1];
            this.getRestPose().decompose(localScaling, localRotation, localPosition);
            this._linkedTransformNode.position.copyFrom(localPosition);
            this._linkedTransformNode.rotationQuaternion = (_a = this._linkedTransformNode.rotationQuaternion) !== null && _a !== void 0 ? _a : _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.Identity();
            this._linkedTransformNode.rotationQuaternion.copyFrom(localRotation);
            this._linkedTransformNode.scaling.copyFrom(localScaling);
        }
        else {
            this._matrix = this._restPose;
        }
    };
    /**
     * Gets the inverse of the absolute transform matrix.
     * This matrix will be multiplied by local matrix to get the difference matrix (ie. the difference between original state and current state)
     * @returns a matrix
     */
    Bone.prototype.getInvertedAbsoluteTransform = function () {
        return this._invertedAbsoluteTransform;
    };
    /**
     * Gets the absolute transform matrix (ie base matrix * parent world matrix)
     * @returns a matrix
     */
    Bone.prototype.getAbsoluteTransform = function () {
        return this._absoluteTransform;
    };
    /**
     * Links with the given transform node.
     * The local matrix of this bone is copied from the transform node every frame.
     * @param transformNode defines the transform node to link to
     */
    Bone.prototype.linkTransformNode = function (transformNode) {
        if (this._linkedTransformNode) {
            this._skeleton._numBonesWithLinkedTransformNode--;
        }
        this._linkedTransformNode = transformNode;
        if (this._linkedTransformNode) {
            this._skeleton._numBonesWithLinkedTransformNode++;
        }
    };
    // Properties (matches TransformNode properties)
    /**
     * Gets the node used to drive the bone's transformation
     * @returns a transform node or null
     */
    Bone.prototype.getTransformNode = function () {
        return this._linkedTransformNode;
    };
    Object.defineProperty(Bone.prototype, "position", {
        /** Gets or sets current position (in local space) */
        get: function () {
            this._decompose();
            return this._localPosition;
        },
        set: function (newPosition) {
            this._decompose();
            this._localPosition.copyFrom(newPosition);
            this._markAsDirtyAndCompose();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bone.prototype, "rotation", {
        /** Gets or sets current rotation (in local space) */
        get: function () {
            return this.getRotation();
        },
        set: function (newRotation) {
            this.setRotation(newRotation);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bone.prototype, "rotationQuaternion", {
        /** Gets or sets current rotation quaternion (in local space) */
        get: function () {
            this._decompose();
            return this._localRotation;
        },
        set: function (newRotation) {
            this.setRotationQuaternion(newRotation);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bone.prototype, "scaling", {
        /** Gets or sets current scaling (in local space) */
        get: function () {
            return this.getScale();
        },
        set: function (newScaling) {
            this.setScale(newScaling);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bone.prototype, "animationPropertiesOverride", {
        /**
         * Gets the animation properties override
         */
        get: function () {
            return this._skeleton.animationPropertiesOverride;
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    Bone.prototype._decompose = function () {
        if (!this._needToDecompose) {
            return;
        }
        this._needToDecompose = false;
        if (!this._localScaling) {
            this._localScaling = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
            this._localRotation = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.Zero();
            this._localPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        }
        this._localMatrix.decompose(this._localScaling, this._localRotation, this._localPosition);
    };
    Bone.prototype._compose = function () {
        if (!this._needToCompose) {
            return;
        }
        if (!this._localScaling) {
            this._needToCompose = false;
            return;
        }
        this._needToCompose = false;
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.ComposeToRef(this._localScaling, this._localRotation, this._localPosition, this._localMatrix);
    };
    /**
     * Update the base and local matrices
     * @param matrix defines the new base or local matrix
     * @param updateDifferenceMatrix defines if the difference matrix must be updated
     * @param updateLocalMatrix defines if the local matrix should be updated
     */
    Bone.prototype.updateMatrix = function (matrix, updateDifferenceMatrix, updateLocalMatrix) {
        if (updateDifferenceMatrix === void 0) { updateDifferenceMatrix = true; }
        if (updateLocalMatrix === void 0) { updateLocalMatrix = true; }
        this._baseMatrix.copyFrom(matrix);
        if (updateDifferenceMatrix) {
            this._updateDifferenceMatrix();
        }
        if (updateLocalMatrix) {
            this._matrix = matrix;
        }
        else {
            this.markAsDirty();
        }
    };
    /**
     * @param rootMatrix
     * @param updateChildren
     * @hidden
     */
    Bone.prototype._updateDifferenceMatrix = function (rootMatrix, updateChildren) {
        if (updateChildren === void 0) { updateChildren = true; }
        if (!rootMatrix) {
            rootMatrix = this._baseMatrix;
        }
        if (this.parent) {
            rootMatrix.multiplyToRef(this.parent._absoluteTransform, this._absoluteTransform);
        }
        else {
            this._absoluteTransform.copyFrom(rootMatrix);
        }
        this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform);
        if (updateChildren) {
            for (var index = 0; index < this.children.length; index++) {
                this.children[index]._updateDifferenceMatrix();
            }
        }
        this._scalingDeterminant = this._absoluteTransform.determinant() < 0 ? -1 : 1;
    };
    /**
     * Flag the bone as dirty (Forcing it to update everything)
     * @returns this bone
     */
    Bone.prototype.markAsDirty = function () {
        this._currentRenderId++;
        this._childUpdateId++;
        this._skeleton._markAsDirty();
        return this;
    };
    /** @hidden */
    Bone.prototype._markAsDirtyAndCompose = function () {
        this.markAsDirty();
        this._needToCompose = true;
    };
    Bone.prototype._markAsDirtyAndDecompose = function () {
        this.markAsDirty();
        this._needToDecompose = true;
    };
    /**
     * Translate the bone in local or world space
     * @param vec The amount to translate the bone
     * @param space The space that the translation is in
     * @param tNode The TransformNode that this bone is attached to. This is only used in world space
     */
    Bone.prototype.translate = function (vec, space, tNode) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        var lm = this.getLocalMatrix();
        if (space == _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL) {
            lm.addAtIndex(12, vec.x);
            lm.addAtIndex(13, vec.y);
            lm.addAtIndex(14, vec.z);
        }
        else {
            var wm = null;
            //tNode.getWorldMatrix() needs to be called before skeleton.computeAbsoluteTransforms()
            if (tNode) {
                wm = tNode.getWorldMatrix();
            }
            this._skeleton.computeAbsoluteTransforms();
            var tmat = Bone._TmpMats[0];
            var tvec = Bone._TmpVecs[0];
            if (this.parent) {
                if (tNode && wm) {
                    tmat.copyFrom(this.parent.getAbsoluteTransform());
                    tmat.multiplyToRef(wm, tmat);
                }
                else {
                    tmat.copyFrom(this.parent.getAbsoluteTransform());
                }
            }
            else {
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.IdentityToRef(tmat);
            }
            tmat.setTranslationFromFloats(0, 0, 0);
            tmat.invert();
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(vec, tmat, tvec);
            lm.addAtIndex(12, tvec.x);
            lm.addAtIndex(13, tvec.y);
            lm.addAtIndex(14, tvec.z);
        }
        this._markAsDirtyAndDecompose();
    };
    /**
     * Set the position of the bone in local or world space
     * @param position The position to set the bone
     * @param space The space that the position is in
     * @param tNode The TransformNode that this bone is attached to.  This is only used in world space
     */
    Bone.prototype.setPosition = function (position, space, tNode) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        var lm = this.getLocalMatrix();
        if (space == _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL) {
            lm.setTranslationFromFloats(position.x, position.y, position.z);
        }
        else {
            var wm = null;
            //tNode.getWorldMatrix() needs to be called before skeleton.computeAbsoluteTransforms()
            if (tNode) {
                wm = tNode.getWorldMatrix();
            }
            this._skeleton.computeAbsoluteTransforms();
            var tmat = Bone._TmpMats[0];
            var vec = Bone._TmpVecs[0];
            if (this.parent) {
                if (tNode && wm) {
                    tmat.copyFrom(this.parent.getAbsoluteTransform());
                    tmat.multiplyToRef(wm, tmat);
                }
                else {
                    tmat.copyFrom(this.parent.getAbsoluteTransform());
                }
                tmat.invert();
            }
            else {
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.IdentityToRef(tmat);
            }
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(position, tmat, vec);
            lm.setTranslationFromFloats(vec.x, vec.y, vec.z);
        }
        this._markAsDirtyAndDecompose();
    };
    /**
     * Set the absolute position of the bone (world space)
     * @param position The position to set the bone
     * @param tNode The TransformNode that this bone is attached to
     */
    Bone.prototype.setAbsolutePosition = function (position, tNode) {
        this.setPosition(position, _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.WORLD, tNode);
    };
    /**
     * Scale the bone on the x, y and z axes (in local space)
     * @param x The amount to scale the bone on the x axis
     * @param y The amount to scale the bone on the y axis
     * @param z The amount to scale the bone on the z axis
     * @param scaleChildren sets this to true if children of the bone should be scaled as well (false by default)
     */
    Bone.prototype.scale = function (x, y, z, scaleChildren) {
        if (scaleChildren === void 0) { scaleChildren = false; }
        var locMat = this.getLocalMatrix();
        // Apply new scaling on top of current local matrix
        var scaleMat = Bone._TmpMats[0];
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.ScalingToRef(x, y, z, scaleMat);
        scaleMat.multiplyToRef(locMat, locMat);
        // Invert scaling matrix and apply the inverse to all children
        scaleMat.invert();
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var cm = child.getLocalMatrix();
            cm.multiplyToRef(scaleMat, cm);
            cm.multiplyAtIndex(12, x);
            cm.multiplyAtIndex(13, y);
            cm.multiplyAtIndex(14, z);
            child._markAsDirtyAndDecompose();
        }
        this._markAsDirtyAndDecompose();
        if (scaleChildren) {
            for (var _b = 0, _c = this.children; _b < _c.length; _b++) {
                var child = _c[_b];
                child.scale(x, y, z, scaleChildren);
            }
        }
    };
    /**
     * Set the bone scaling in local space
     * @param scale defines the scaling vector
     */
    Bone.prototype.setScale = function (scale) {
        this._decompose();
        this._localScaling.copyFrom(scale);
        this._markAsDirtyAndCompose();
    };
    /**
     * Gets the current scaling in local space
     * @returns the current scaling vector
     */
    Bone.prototype.getScale = function () {
        this._decompose();
        return this._localScaling;
    };
    /**
     * Gets the current scaling in local space and stores it in a target vector
     * @param result defines the target vector
     */
    Bone.prototype.getScaleToRef = function (result) {
        this._decompose();
        result.copyFrom(this._localScaling);
    };
    /**
     * Set the yaw, pitch, and roll of the bone in local or world space
     * @param yaw The rotation of the bone on the y axis
     * @param pitch The rotation of the bone on the x axis
     * @param roll The rotation of the bone on the z axis
     * @param space The space that the axes of rotation are in
     * @param tNode The TransformNode that this bone is attached to.  This is only used in world space
     */
    Bone.prototype.setYawPitchRoll = function (yaw, pitch, roll, space, tNode) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        if (space === _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL) {
            var quat = Bone._TmpQuat;
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.RotationYawPitchRollToRef(yaw, pitch, roll, quat);
            this.setRotationQuaternion(quat, space, tNode);
            return;
        }
        var rotMatInv = Bone._TmpMats[0];
        if (!this._getNegativeRotationToRef(rotMatInv, tNode)) {
            return;
        }
        var rotMat = Bone._TmpMats[1];
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.RotationYawPitchRollToRef(yaw, pitch, roll, rotMat);
        rotMatInv.multiplyToRef(rotMat, rotMat);
        this._rotateWithMatrix(rotMat, space, tNode);
    };
    /**
     * Add a rotation to the bone on an axis in local or world space
     * @param axis The axis to rotate the bone on
     * @param amount The amount to rotate the bone
     * @param space The space that the axis is in
     * @param tNode The TransformNode that this bone is attached to. This is only used in world space
     */
    Bone.prototype.rotate = function (axis, amount, space, tNode) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        var rmat = Bone._TmpMats[0];
        rmat.setTranslationFromFloats(0, 0, 0);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.RotationAxisToRef(axis, amount, rmat);
        this._rotateWithMatrix(rmat, space, tNode);
    };
    /**
     * Set the rotation of the bone to a particular axis angle in local or world space
     * @param axis The axis to rotate the bone on
     * @param angle The angle that the bone should be rotated to
     * @param space The space that the axis is in
     * @param tNode The TransformNode that this bone is attached to.  This is only used in world space
     */
    Bone.prototype.setAxisAngle = function (axis, angle, space, tNode) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        if (space === _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL) {
            var quat = Bone._TmpQuat;
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.RotationAxisToRef(axis, angle, quat);
            this.setRotationQuaternion(quat, space, tNode);
            return;
        }
        var rotMatInv = Bone._TmpMats[0];
        if (!this._getNegativeRotationToRef(rotMatInv, tNode)) {
            return;
        }
        var rotMat = Bone._TmpMats[1];
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.RotationAxisToRef(axis, angle, rotMat);
        rotMatInv.multiplyToRef(rotMat, rotMat);
        this._rotateWithMatrix(rotMat, space, tNode);
    };
    /**
     * Set the euler rotation of the bone in local or world space
     * @param rotation The euler rotation that the bone should be set to
     * @param space The space that the rotation is in
     * @param tNode The TransformNode that this bone is attached to. This is only used in world space
     */
    Bone.prototype.setRotation = function (rotation, space, tNode) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        this.setYawPitchRoll(rotation.y, rotation.x, rotation.z, space, tNode);
    };
    /**
     * Set the quaternion rotation of the bone in local or world space
     * @param quat The quaternion rotation that the bone should be set to
     * @param space The space that the rotation is in
     * @param tNode The TransformNode that this bone is attached to. This is only used in world space
     */
    Bone.prototype.setRotationQuaternion = function (quat, space, tNode) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        if (space === _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL) {
            this._decompose();
            this._localRotation.copyFrom(quat);
            this._markAsDirtyAndCompose();
            return;
        }
        var rotMatInv = Bone._TmpMats[0];
        if (!this._getNegativeRotationToRef(rotMatInv, tNode)) {
            return;
        }
        var rotMat = Bone._TmpMats[1];
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromQuaternionToRef(quat, rotMat);
        rotMatInv.multiplyToRef(rotMat, rotMat);
        this._rotateWithMatrix(rotMat, space, tNode);
    };
    /**
     * Set the rotation matrix of the bone in local or world space
     * @param rotMat The rotation matrix that the bone should be set to
     * @param space The space that the rotation is in
     * @param tNode The TransformNode that this bone is attached to. This is only used in world space
     */
    Bone.prototype.setRotationMatrix = function (rotMat, space, tNode) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        if (space === _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL) {
            var quat = Bone._TmpQuat;
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromRotationMatrixToRef(rotMat, quat);
            this.setRotationQuaternion(quat, space, tNode);
            return;
        }
        var rotMatInv = Bone._TmpMats[0];
        if (!this._getNegativeRotationToRef(rotMatInv, tNode)) {
            return;
        }
        var rotMat2 = Bone._TmpMats[1];
        rotMat2.copyFrom(rotMat);
        rotMatInv.multiplyToRef(rotMat, rotMat2);
        this._rotateWithMatrix(rotMat2, space, tNode);
    };
    Bone.prototype._rotateWithMatrix = function (rmat, space, tNode) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        var lmat = this.getLocalMatrix();
        var lx = lmat.m[12];
        var ly = lmat.m[13];
        var lz = lmat.m[14];
        var parent = this.getParent();
        var parentScale = Bone._TmpMats[3];
        var parentScaleInv = Bone._TmpMats[4];
        if (parent && space == _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.WORLD) {
            if (tNode) {
                parentScale.copyFrom(tNode.getWorldMatrix());
                parent.getAbsoluteTransform().multiplyToRef(parentScale, parentScale);
            }
            else {
                parentScale.copyFrom(parent.getAbsoluteTransform());
            }
            parentScaleInv.copyFrom(parentScale);
            parentScaleInv.invert();
            lmat.multiplyToRef(parentScale, lmat);
            lmat.multiplyToRef(rmat, lmat);
            lmat.multiplyToRef(parentScaleInv, lmat);
        }
        else {
            if (space == _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.WORLD && tNode) {
                parentScale.copyFrom(tNode.getWorldMatrix());
                parentScaleInv.copyFrom(parentScale);
                parentScaleInv.invert();
                lmat.multiplyToRef(parentScale, lmat);
                lmat.multiplyToRef(rmat, lmat);
                lmat.multiplyToRef(parentScaleInv, lmat);
            }
            else {
                lmat.multiplyToRef(rmat, lmat);
            }
        }
        lmat.setTranslationFromFloats(lx, ly, lz);
        this.computeAbsoluteTransforms();
        this._markAsDirtyAndDecompose();
    };
    Bone.prototype._getNegativeRotationToRef = function (rotMatInv, tNode) {
        var scaleMatrix = Bone._TmpMats[2];
        rotMatInv.copyFrom(this.getAbsoluteTransform());
        if (tNode) {
            rotMatInv.multiplyToRef(tNode.getWorldMatrix(), rotMatInv);
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.ScalingToRef(tNode.scaling.x, tNode.scaling.y, tNode.scaling.z, scaleMatrix);
        }
        else {
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.IdentityToRef(scaleMatrix);
        }
        rotMatInv.invert();
        if (isNaN(rotMatInv.m[0])) {
            // Matrix failed to invert.
            // This can happen if scale is zero for example.
            return false;
        }
        scaleMatrix.multiplyAtIndex(0, this._scalingDeterminant);
        rotMatInv.multiplyToRef(scaleMatrix, rotMatInv);
        return true;
    };
    /**
     * Get the position of the bone in local or world space
     * @param space The space that the returned position is in
     * @param tNode The TransformNode that this bone is attached to. This is only used in world space
     * @returns The position of the bone
     */
    Bone.prototype.getPosition = function (space, tNode) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        if (tNode === void 0) { tNode = null; }
        var pos = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        this.getPositionToRef(space, tNode, pos);
        return pos;
    };
    /**
     * Copy the position of the bone to a vector3 in local or world space
     * @param space The space that the returned position is in
     * @param tNode The TransformNode that this bone is attached to. This is only used in world space
     * @param result The vector3 to copy the position to
     */
    Bone.prototype.getPositionToRef = function (space, tNode, result) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        if (space == _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL) {
            var lm = this.getLocalMatrix();
            result.x = lm.m[12];
            result.y = lm.m[13];
            result.z = lm.m[14];
        }
        else {
            var wm = null;
            //tNode.getWorldMatrix() needs to be called before skeleton.computeAbsoluteTransforms()
            if (tNode) {
                wm = tNode.getWorldMatrix();
            }
            this._skeleton.computeAbsoluteTransforms();
            var tmat = Bone._TmpMats[0];
            if (tNode && wm) {
                tmat.copyFrom(this.getAbsoluteTransform());
                tmat.multiplyToRef(wm, tmat);
            }
            else {
                tmat = this.getAbsoluteTransform();
            }
            result.x = tmat.m[12];
            result.y = tmat.m[13];
            result.z = tmat.m[14];
        }
    };
    /**
     * Get the absolute position of the bone (world space)
     * @param tNode The TransformNode that this bone is attached to
     * @returns The absolute position of the bone
     */
    Bone.prototype.getAbsolutePosition = function (tNode) {
        if (tNode === void 0) { tNode = null; }
        var pos = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        this.getPositionToRef(_Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.WORLD, tNode, pos);
        return pos;
    };
    /**
     * Copy the absolute position of the bone (world space) to the result param
     * @param tNode The TransformNode that this bone is attached to
     * @param result The vector3 to copy the absolute position to
     */
    Bone.prototype.getAbsolutePositionToRef = function (tNode, result) {
        this.getPositionToRef(_Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.WORLD, tNode, result);
    };
    /**
     * Compute the absolute transforms of this bone and its children
     */
    Bone.prototype.computeAbsoluteTransforms = function () {
        this._compose();
        if (this.parent) {
            this._localMatrix.multiplyToRef(this.parent._absoluteTransform, this._absoluteTransform);
        }
        else {
            this._absoluteTransform.copyFrom(this._localMatrix);
            var poseMatrix = this._skeleton.getPoseMatrix();
            if (poseMatrix) {
                this._absoluteTransform.multiplyToRef(poseMatrix, this._absoluteTransform);
            }
        }
        var children = this.children;
        var len = children.length;
        for (var i = 0; i < len; i++) {
            children[i].computeAbsoluteTransforms();
        }
    };
    /**
     * Get the world direction from an axis that is in the local space of the bone
     * @param localAxis The local direction that is used to compute the world direction
     * @param tNode The TransformNode that this bone is attached to
     * @returns The world direction
     */
    Bone.prototype.getDirection = function (localAxis, tNode) {
        if (tNode === void 0) { tNode = null; }
        var result = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        this.getDirectionToRef(localAxis, tNode, result);
        return result;
    };
    /**
     * Copy the world direction to a vector3 from an axis that is in the local space of the bone
     * @param localAxis The local direction that is used to compute the world direction
     * @param tNode The TransformNode that this bone is attached to
     * @param result The vector3 that the world direction will be copied to
     */
    Bone.prototype.getDirectionToRef = function (localAxis, tNode, result) {
        if (tNode === void 0) { tNode = null; }
        var wm = null;
        //tNode.getWorldMatrix() needs to be called before skeleton.computeAbsoluteTransforms()
        if (tNode) {
            wm = tNode.getWorldMatrix();
        }
        this._skeleton.computeAbsoluteTransforms();
        var mat = Bone._TmpMats[0];
        mat.copyFrom(this.getAbsoluteTransform());
        if (tNode && wm) {
            mat.multiplyToRef(wm, mat);
        }
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformNormalToRef(localAxis, mat, result);
        result.normalize();
    };
    /**
     * Get the euler rotation of the bone in local or world space
     * @param space The space that the rotation should be in
     * @param tNode The TransformNode that this bone is attached to.  This is only used in world space
     * @returns The euler rotation
     */
    Bone.prototype.getRotation = function (space, tNode) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        if (tNode === void 0) { tNode = null; }
        var result = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        this.getRotationToRef(space, tNode, result);
        return result;
    };
    /**
     * Copy the euler rotation of the bone to a vector3.  The rotation can be in either local or world space
     * @param space The space that the rotation should be in
     * @param tNode The TransformNode that this bone is attached to.  This is only used in world space
     * @param result The vector3 that the rotation should be copied to
     */
    Bone.prototype.getRotationToRef = function (space, tNode, result) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        if (tNode === void 0) { tNode = null; }
        var quat = Bone._TmpQuat;
        this.getRotationQuaternionToRef(space, tNode, quat);
        quat.toEulerAnglesToRef(result);
    };
    /**
     * Get the quaternion rotation of the bone in either local or world space
     * @param space The space that the rotation should be in
     * @param tNode The TransformNode that this bone is attached to.  This is only used in world space
     * @returns The quaternion rotation
     */
    Bone.prototype.getRotationQuaternion = function (space, tNode) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        if (tNode === void 0) { tNode = null; }
        var result = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.Identity();
        this.getRotationQuaternionToRef(space, tNode, result);
        return result;
    };
    /**
     * Copy the quaternion rotation of the bone to a quaternion.  The rotation can be in either local or world space
     * @param space The space that the rotation should be in
     * @param tNode The TransformNode that this bone is attached to.  This is only used in world space
     * @param result The quaternion that the rotation should be copied to
     */
    Bone.prototype.getRotationQuaternionToRef = function (space, tNode, result) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        if (tNode === void 0) { tNode = null; }
        if (space == _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL) {
            this._decompose();
            result.copyFrom(this._localRotation);
        }
        else {
            var mat = Bone._TmpMats[0];
            var amat = this.getAbsoluteTransform();
            if (tNode) {
                amat.multiplyToRef(tNode.getWorldMatrix(), mat);
            }
            else {
                mat.copyFrom(amat);
            }
            mat.multiplyAtIndex(0, this._scalingDeterminant);
            mat.multiplyAtIndex(1, this._scalingDeterminant);
            mat.multiplyAtIndex(2, this._scalingDeterminant);
            mat.decompose(undefined, result, undefined);
        }
    };
    /**
     * Get the rotation matrix of the bone in local or world space
     * @param space The space that the rotation should be in
     * @param tNode The TransformNode that this bone is attached to.  This is only used in world space
     * @returns The rotation matrix
     */
    Bone.prototype.getRotationMatrix = function (space, tNode) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        var result = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Identity();
        this.getRotationMatrixToRef(space, tNode, result);
        return result;
    };
    /**
     * Copy the rotation matrix of the bone to a matrix.  The rotation can be in either local or world space
     * @param space The space that the rotation should be in
     * @param tNode The TransformNode that this bone is attached to.  This is only used in world space
     * @param result The quaternion that the rotation should be copied to
     */
    Bone.prototype.getRotationMatrixToRef = function (space, tNode, result) {
        if (space === void 0) { space = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL; }
        if (space == _Maths_math_axis__WEBPACK_IMPORTED_MODULE_4__.Space.LOCAL) {
            this.getLocalMatrix().getRotationMatrixToRef(result);
        }
        else {
            var mat = Bone._TmpMats[0];
            var amat = this.getAbsoluteTransform();
            if (tNode) {
                amat.multiplyToRef(tNode.getWorldMatrix(), mat);
            }
            else {
                mat.copyFrom(amat);
            }
            mat.multiplyAtIndex(0, this._scalingDeterminant);
            mat.multiplyAtIndex(1, this._scalingDeterminant);
            mat.multiplyAtIndex(2, this._scalingDeterminant);
            mat.getRotationMatrixToRef(result);
        }
    };
    /**
     * Get the world position of a point that is in the local space of the bone
     * @param position The local position
     * @param tNode The TransformNode that this bone is attached to
     * @returns The world position
     */
    Bone.prototype.getAbsolutePositionFromLocal = function (position, tNode) {
        if (tNode === void 0) { tNode = null; }
        var result = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        this.getAbsolutePositionFromLocalToRef(position, tNode, result);
        return result;
    };
    /**
     * Get the world position of a point that is in the local space of the bone and copy it to the result param
     * @param position The local position
     * @param tNode The TransformNode that this bone is attached to
     * @param result The vector3 that the world position should be copied to
     */
    Bone.prototype.getAbsolutePositionFromLocalToRef = function (position, tNode, result) {
        if (tNode === void 0) { tNode = null; }
        var wm = null;
        //tNode.getWorldMatrix() needs to be called before skeleton.computeAbsoluteTransforms()
        if (tNode) {
            wm = tNode.getWorldMatrix();
        }
        this._skeleton.computeAbsoluteTransforms();
        var tmat = Bone._TmpMats[0];
        if (tNode && wm) {
            tmat.copyFrom(this.getAbsoluteTransform());
            tmat.multiplyToRef(wm, tmat);
        }
        else {
            tmat = this.getAbsoluteTransform();
        }
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(position, tmat, result);
    };
    /**
     * Get the local position of a point that is in world space
     * @param position The world position
     * @param tNode The TransformNode that this bone is attached to
     * @returns The local position
     */
    Bone.prototype.getLocalPositionFromAbsolute = function (position, tNode) {
        if (tNode === void 0) { tNode = null; }
        var result = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        this.getLocalPositionFromAbsoluteToRef(position, tNode, result);
        return result;
    };
    /**
     * Get the local position of a point that is in world space and copy it to the result param
     * @param position The world position
     * @param tNode The TransformNode that this bone is attached to
     * @param result The vector3 that the local position should be copied to
     */
    Bone.prototype.getLocalPositionFromAbsoluteToRef = function (position, tNode, result) {
        if (tNode === void 0) { tNode = null; }
        var wm = null;
        //tNode.getWorldMatrix() needs to be called before skeleton.computeAbsoluteTransforms()
        if (tNode) {
            wm = tNode.getWorldMatrix();
        }
        this._skeleton.computeAbsoluteTransforms();
        var tmat = Bone._TmpMats[0];
        tmat.copyFrom(this.getAbsoluteTransform());
        if (tNode && wm) {
            tmat.multiplyToRef(wm, tmat);
        }
        tmat.invert();
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(position, tmat, result);
    };
    /**
     * Set the current local matrix as the restPose for this bone.
     */
    Bone.prototype.setCurrentPoseAsRest = function () {
        this.setRestPose(this.getLocalMatrix());
    };
    Bone._TmpVecs = _Misc_arrayTools__WEBPACK_IMPORTED_MODULE_2__.ArrayTools.BuildArray(2, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero);
    Bone._TmpQuat = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.Identity();
    Bone._TmpMats = _Misc_arrayTools__WEBPACK_IMPORTED_MODULE_2__.ArrayTools.BuildArray(5, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Identity);
    return Bone;
}(_node__WEBPACK_IMPORTED_MODULE_3__.Node));



/***/ }),

/***/ "../../../lts/core/dist/Bones/boneIKController.js":
/*!********************************************************!*\
  !*** ../../../lts/core/dist/Bones/boneIKController.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoneIKController": () => (/* binding */ BoneIKController)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Maths_math_axis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Maths/math.axis */ "../../../lts/core/dist/Maths/math.axis.js");


/**
 * Class used to apply inverse kinematics to bones
 * @see https://doc.babylonjs.com/how_to/how_to_use_bones_and_skeletons#boneikcontroller
 */
var BoneIKController = /** @class */ (function () {
    /**
     * Creates a new BoneIKController
     * @param mesh defines the TransformNode to control
     * @param bone defines the bone to control
     * @param options defines options to set up the controller
     * @param options.targetMesh
     * @param options.poleTargetMesh
     * @param options.poleTargetBone
     * @param options.poleTargetLocalOffset
     * @param options.poleAngle
     * @param options.bendAxis
     * @param options.maxAngle
     * @param options.slerpAmount
     */
    function BoneIKController(mesh, bone, options) {
        /**
         * Gets or sets the target position
         */
        this.targetPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        /**
         * Gets or sets the pole target position
         */
        this.poleTargetPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        /**
         * Gets or sets the pole target local offset
         */
        this.poleTargetLocalOffset = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        /**
         * Gets or sets the pole angle
         */
        this.poleAngle = 0;
        /**
         * The amount to slerp (spherical linear interpolation) to the target.  Set this to a value between 0 and 1 (a value of 1 disables slerp)
         */
        this.slerpAmount = 1;
        this._bone1Quat = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity();
        this._bone1Mat = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Identity();
        this._bone2Ang = Math.PI;
        this._maxAngle = Math.PI;
        this._rightHandedSystem = false;
        this._bendAxis = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Right();
        this._slerping = false;
        this._adjustRoll = 0;
        this._bone2 = bone;
        this._bone1 = bone.getParent();
        if (!this._bone1) {
            return;
        }
        this.mesh = mesh;
        var bonePos = bone.getPosition();
        if (bone.getAbsoluteTransform().determinant() > 0) {
            this._rightHandedSystem = true;
            this._bendAxis.x = 0;
            this._bendAxis.y = 0;
            this._bendAxis.z = -1;
            if (bonePos.x > bonePos.y && bonePos.x > bonePos.z) {
                this._adjustRoll = Math.PI * 0.5;
                this._bendAxis.z = 1;
            }
        }
        if (this._bone1.length) {
            var boneScale1 = this._bone1.getScale();
            var boneScale2 = this._bone2.getScale();
            this._bone1Length = this._bone1.length * boneScale1.y * this.mesh.scaling.y;
            this._bone2Length = this._bone2.length * boneScale2.y * this.mesh.scaling.y;
        }
        else if (this._bone1.children[0]) {
            mesh.computeWorldMatrix(true);
            var pos1 = this._bone2.children[0].getAbsolutePosition(mesh);
            var pos2 = this._bone2.getAbsolutePosition(mesh);
            var pos3 = this._bone1.getAbsolutePosition(mesh);
            this._bone1Length = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Distance(pos1, pos2);
            this._bone2Length = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Distance(pos2, pos3);
        }
        this._bone1.getRotationMatrixToRef(_Maths_math_axis__WEBPACK_IMPORTED_MODULE_1__.Space.WORLD, mesh, this._bone1Mat);
        this.maxAngle = Math.PI;
        if (options) {
            if (options.targetMesh) {
                this.targetMesh = options.targetMesh;
                this.targetMesh.computeWorldMatrix(true);
            }
            if (options.poleTargetMesh) {
                this.poleTargetMesh = options.poleTargetMesh;
                this.poleTargetMesh.computeWorldMatrix(true);
            }
            else if (options.poleTargetBone) {
                this.poleTargetBone = options.poleTargetBone;
            }
            else if (this._bone1.getParent()) {
                this.poleTargetBone = this._bone1.getParent();
            }
            if (options.poleTargetLocalOffset) {
                this.poleTargetLocalOffset.copyFrom(options.poleTargetLocalOffset);
            }
            if (options.poleAngle) {
                this.poleAngle = options.poleAngle;
            }
            if (options.bendAxis) {
                this._bendAxis.copyFrom(options.bendAxis);
            }
            if (options.maxAngle) {
                this.maxAngle = options.maxAngle;
            }
            if (options.slerpAmount) {
                this.slerpAmount = options.slerpAmount;
            }
        }
    }
    Object.defineProperty(BoneIKController.prototype, "maxAngle", {
        /**
         * Gets or sets maximum allowed angle
         */
        get: function () {
            return this._maxAngle;
        },
        set: function (value) {
            this._setMaxAngle(value);
        },
        enumerable: false,
        configurable: true
    });
    BoneIKController.prototype._setMaxAngle = function (ang) {
        if (ang < 0) {
            ang = 0;
        }
        if (ang > Math.PI || ang == undefined) {
            ang = Math.PI;
        }
        this._maxAngle = ang;
        var a = this._bone1Length;
        var b = this._bone2Length;
        this._maxReach = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(ang));
    };
    /**
     * Force the controller to update the bones
     */
    BoneIKController.prototype.update = function () {
        var bone1 = this._bone1;
        if (!bone1) {
            return;
        }
        var target = this.targetPosition;
        var poleTarget = this.poleTargetPosition;
        var mat1 = BoneIKController._TmpMats[0];
        var mat2 = BoneIKController._TmpMats[1];
        if (this.targetMesh) {
            target.copyFrom(this.targetMesh.getAbsolutePosition());
        }
        if (this.poleTargetBone) {
            this.poleTargetBone.getAbsolutePositionFromLocalToRef(this.poleTargetLocalOffset, this.mesh, poleTarget);
        }
        else if (this.poleTargetMesh) {
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesToRef(this.poleTargetLocalOffset, this.poleTargetMesh.getWorldMatrix(), poleTarget);
        }
        var bonePos = BoneIKController._TmpVecs[0];
        var zaxis = BoneIKController._TmpVecs[1];
        var xaxis = BoneIKController._TmpVecs[2];
        var yaxis = BoneIKController._TmpVecs[3];
        var upAxis = BoneIKController._TmpVecs[4];
        var tmpQuat = BoneIKController._TmpQuat;
        bone1.getAbsolutePositionToRef(this.mesh, bonePos);
        poleTarget.subtractToRef(bonePos, upAxis);
        if (upAxis.x == 0 && upAxis.y == 0 && upAxis.z == 0) {
            upAxis.y = 1;
        }
        else {
            upAxis.normalize();
        }
        target.subtractToRef(bonePos, yaxis);
        yaxis.normalize();
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.CrossToRef(yaxis, upAxis, zaxis);
        zaxis.normalize();
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.CrossToRef(yaxis, zaxis, xaxis);
        xaxis.normalize();
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.FromXYZAxesToRef(xaxis, yaxis, zaxis, mat1);
        var a = this._bone1Length;
        var b = this._bone2Length;
        var c = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Distance(bonePos, target);
        if (this._maxReach > 0) {
            c = Math.min(this._maxReach, c);
        }
        var acosa = (b * b + c * c - a * a) / (2 * b * c);
        var acosb = (c * c + a * a - b * b) / (2 * c * a);
        if (acosa > 1) {
            acosa = 1;
        }
        if (acosb > 1) {
            acosb = 1;
        }
        if (acosa < -1) {
            acosa = -1;
        }
        if (acosb < -1) {
            acosb = -1;
        }
        var angA = Math.acos(acosa);
        var angB = Math.acos(acosb);
        var angC = -angA - angB;
        if (this._rightHandedSystem) {
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.RotationYawPitchRollToRef(0, 0, this._adjustRoll, mat2);
            mat2.multiplyToRef(mat1, mat1);
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.RotationAxisToRef(this._bendAxis, angB, mat2);
            mat2.multiplyToRef(mat1, mat1);
        }
        else {
            var _tmpVec = BoneIKController._TmpVecs[5];
            _tmpVec.copyFrom(this._bendAxis);
            _tmpVec.x *= -1;
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.RotationAxisToRef(_tmpVec, -angB, mat2);
            mat2.multiplyToRef(mat1, mat1);
        }
        if (this.poleAngle) {
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.RotationAxisToRef(yaxis, this.poleAngle, mat2);
            mat1.multiplyToRef(mat2, mat1);
        }
        if (this._bone1) {
            if (this.slerpAmount < 1) {
                if (!this._slerping) {
                    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromRotationMatrixToRef(this._bone1Mat, this._bone1Quat);
                }
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromRotationMatrixToRef(mat1, tmpQuat);
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.SlerpToRef(this._bone1Quat, tmpQuat, this.slerpAmount, this._bone1Quat);
                angC = this._bone2Ang * (1.0 - this.slerpAmount) + angC * this.slerpAmount;
                this._bone1.setRotationQuaternion(this._bone1Quat, _Maths_math_axis__WEBPACK_IMPORTED_MODULE_1__.Space.WORLD, this.mesh);
                this._slerping = true;
            }
            else {
                this._bone1.setRotationMatrix(mat1, _Maths_math_axis__WEBPACK_IMPORTED_MODULE_1__.Space.WORLD, this.mesh);
                this._bone1Mat.copyFrom(mat1);
                this._slerping = false;
            }
            this._updateLinkedTransformRotation(this._bone1);
        }
        this._bone2.setAxisAngle(this._bendAxis, angC, _Maths_math_axis__WEBPACK_IMPORTED_MODULE_1__.Space.LOCAL);
        this._updateLinkedTransformRotation(this._bone2);
        this._bone2Ang = angC;
    };
    BoneIKController.prototype._updateLinkedTransformRotation = function (bone) {
        if (bone._linkedTransformNode) {
            if (!bone._linkedTransformNode.rotationQuaternion) {
                bone._linkedTransformNode.rotationQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
            }
            bone.getRotationQuaternionToRef(_Maths_math_axis__WEBPACK_IMPORTED_MODULE_1__.Space.LOCAL, null, bone._linkedTransformNode.rotationQuaternion);
        }
    };
    BoneIKController._TmpVecs = [_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero()];
    BoneIKController._TmpQuat = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity();
    BoneIKController._TmpMats = [_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Identity(), _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Identity()];
    return BoneIKController;
}());



/***/ }),

/***/ "../../../lts/core/dist/Bones/boneLookController.js":
/*!**********************************************************!*\
  !*** ../../../lts/core/dist/Bones/boneLookController.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoneLookController": () => (/* binding */ BoneLookController)
/* harmony export */ });
/* harmony import */ var _Misc_arrayTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/arrayTools */ "../../../lts/core/dist/Misc/arrayTools.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Maths/math.axis */ "../../../lts/core/dist/Maths/math.axis.js");



/**
 * Class used to make a bone look toward a point in space
 * @see https://doc.babylonjs.com/how_to/how_to_use_bones_and_skeletons#bonelookcontroller
 */
var BoneLookController = /** @class */ (function () {
    /**
     * Create a BoneLookController
     * @param mesh the TransformNode that the bone belongs to
     * @param bone the bone that will be looking to the target
     * @param target the target Vector3 to look at
     * @param options optional settings:
     * * maxYaw: the maximum angle the bone will yaw to
     * * minYaw: the minimum angle the bone will yaw to
     * * maxPitch: the maximum angle the bone will pitch to
     * * minPitch: the minimum angle the bone will yaw to
     * * slerpAmount: set the between 0 and 1 to make the bone slerp to the target.
     * * upAxis: the up axis of the coordinate system
     * * upAxisSpace: the space that the up axis is in - Space.BONE, Space.LOCAL (default), or Space.WORLD.
     * * yawAxis: set yawAxis if the bone does not yaw on the y axis
     * * pitchAxis: set pitchAxis if the bone does not pitch on the x axis
     * * adjustYaw: used to make an adjustment to the yaw of the bone
     * * adjustPitch: used to make an adjustment to the pitch of the bone
     * * adjustRoll: used to make an adjustment to the roll of the bone
     * @param options.maxYaw
     * @param options.minYaw
     * @param options.maxPitch
     * @param options.minPitch
     * @param options.slerpAmount
     * @param options.upAxis
     * @param options.upAxisSpace
     * @param options.yawAxis
     * @param options.pitchAxis
     * @param options.adjustYaw
     * @param options.adjustPitch
     * @param options.adjustRoll
     **/
    function BoneLookController(mesh, bone, target, options) {
        /**
         * The up axis of the coordinate system that is used when the bone is rotated
         */
        this.upAxis = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Up();
        /**
         * The space that the up axis is in - Space.BONE, Space.LOCAL (default), or Space.WORLD
         */
        this.upAxisSpace = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Space.LOCAL;
        /**
         * Used to make an adjustment to the yaw of the bone
         */
        this.adjustYaw = 0;
        /**
         * Used to make an adjustment to the pitch of the bone
         */
        this.adjustPitch = 0;
        /**
         * Used to make an adjustment to the roll of the bone
         */
        this.adjustRoll = 0;
        /**
         * The amount to slerp (spherical linear interpolation) to the target.  Set this to a value between 0 and 1 (a value of 1 disables slerp)
         */
        this.slerpAmount = 1;
        this._boneQuat = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.Identity();
        this._slerping = false;
        this._firstFrameSkipped = false;
        this._fowardAxis = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Forward();
        this.mesh = mesh;
        this.bone = bone;
        this.target = target;
        if (options) {
            if (options.adjustYaw) {
                this.adjustYaw = options.adjustYaw;
            }
            if (options.adjustPitch) {
                this.adjustPitch = options.adjustPitch;
            }
            if (options.adjustRoll) {
                this.adjustRoll = options.adjustRoll;
            }
            if (options.maxYaw != null) {
                this.maxYaw = options.maxYaw;
            }
            else {
                this.maxYaw = Math.PI;
            }
            if (options.minYaw != null) {
                this.minYaw = options.minYaw;
            }
            else {
                this.minYaw = -Math.PI;
            }
            if (options.maxPitch != null) {
                this.maxPitch = options.maxPitch;
            }
            else {
                this.maxPitch = Math.PI;
            }
            if (options.minPitch != null) {
                this.minPitch = options.minPitch;
            }
            else {
                this.minPitch = -Math.PI;
            }
            if (options.slerpAmount != null) {
                this.slerpAmount = options.slerpAmount;
            }
            if (options.upAxis != null) {
                this.upAxis = options.upAxis;
            }
            if (options.upAxisSpace != null) {
                this.upAxisSpace = options.upAxisSpace;
            }
            if (options.yawAxis != null || options.pitchAxis != null) {
                var newYawAxis = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Axis.Y;
                var newPitchAxis = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Axis.X;
                if (options.yawAxis != null) {
                    newYawAxis = options.yawAxis.clone();
                    newYawAxis.normalize();
                }
                if (options.pitchAxis != null) {
                    newPitchAxis = options.pitchAxis.clone();
                    newPitchAxis.normalize();
                }
                var newRollAxis = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Cross(newPitchAxis, newYawAxis);
                this._transformYawPitch = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Identity();
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromXYZAxesToRef(newPitchAxis, newYawAxis, newRollAxis, this._transformYawPitch);
                this._transformYawPitchInv = this._transformYawPitch.clone();
                this._transformYawPitch.invert();
            }
        }
        if (!bone.getParent() && this.upAxisSpace == _Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Space.BONE) {
            this.upAxisSpace = _Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Space.LOCAL;
        }
    }
    Object.defineProperty(BoneLookController.prototype, "minYaw", {
        /**
         * Gets or sets the minimum yaw angle that the bone can look to
         */
        get: function () {
            return this._minYaw;
        },
        set: function (value) {
            this._minYaw = value;
            this._minYawSin = Math.sin(value);
            this._minYawCos = Math.cos(value);
            if (this._maxYaw != null) {
                this._midYawConstraint = this._getAngleDiff(this._minYaw, this._maxYaw) * 0.5 + this._minYaw;
                this._yawRange = this._maxYaw - this._minYaw;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoneLookController.prototype, "maxYaw", {
        /**
         * Gets or sets the maximum yaw angle that the bone can look to
         */
        get: function () {
            return this._maxYaw;
        },
        set: function (value) {
            this._maxYaw = value;
            this._maxYawSin = Math.sin(value);
            this._maxYawCos = Math.cos(value);
            if (this._minYaw != null) {
                this._midYawConstraint = this._getAngleDiff(this._minYaw, this._maxYaw) * 0.5 + this._minYaw;
                this._yawRange = this._maxYaw - this._minYaw;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoneLookController.prototype, "minPitch", {
        /**
         * Gets or sets the minimum pitch angle that the bone can look to
         */
        get: function () {
            return this._minPitch;
        },
        set: function (value) {
            this._minPitch = value;
            this._minPitchTan = Math.tan(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoneLookController.prototype, "maxPitch", {
        /**
         * Gets or sets the maximum pitch angle that the bone can look to
         */
        get: function () {
            return this._maxPitch;
        },
        set: function (value) {
            this._maxPitch = value;
            this._maxPitchTan = Math.tan(value);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Update the bone to look at the target.  This should be called before the scene is rendered (use scene.registerBeforeRender())
     */
    BoneLookController.prototype.update = function () {
        //skip the first frame when slerping so that the TransformNode rotation is correct
        if (this.slerpAmount < 1 && !this._firstFrameSkipped) {
            this._firstFrameSkipped = true;
            return;
        }
        var bone = this.bone;
        var bonePos = BoneLookController._TmpVecs[0];
        bone.getAbsolutePositionToRef(this.mesh, bonePos);
        var target = this.target;
        var _tmpMat1 = BoneLookController._TmpMats[0];
        var _tmpMat2 = BoneLookController._TmpMats[1];
        var mesh = this.mesh;
        var parentBone = bone.getParent();
        var upAxis = BoneLookController._TmpVecs[1];
        upAxis.copyFrom(this.upAxis);
        if (this.upAxisSpace == _Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Space.BONE && parentBone) {
            if (this._transformYawPitch) {
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(upAxis, this._transformYawPitchInv, upAxis);
            }
            parentBone.getDirectionToRef(upAxis, this.mesh, upAxis);
        }
        else if (this.upAxisSpace == _Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Space.LOCAL) {
            mesh.getDirectionToRef(upAxis, upAxis);
            if (mesh.scaling.x != 1 || mesh.scaling.y != 1 || mesh.scaling.z != 1) {
                upAxis.normalize();
            }
        }
        var checkYaw = false;
        var checkPitch = false;
        if (this._maxYaw != Math.PI || this._minYaw != -Math.PI) {
            checkYaw = true;
        }
        if (this._maxPitch != Math.PI || this._minPitch != -Math.PI) {
            checkPitch = true;
        }
        if (checkYaw || checkPitch) {
            var spaceMat = BoneLookController._TmpMats[2];
            var spaceMatInv = BoneLookController._TmpMats[3];
            if (this.upAxisSpace == _Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Space.BONE && upAxis.y == 1 && parentBone) {
                parentBone.getRotationMatrixToRef(_Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Space.WORLD, this.mesh, spaceMat);
            }
            else if (this.upAxisSpace == _Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Space.LOCAL && upAxis.y == 1 && !parentBone) {
                spaceMat.copyFrom(mesh.getWorldMatrix());
            }
            else {
                var forwardAxis = BoneLookController._TmpVecs[2];
                forwardAxis.copyFrom(this._fowardAxis);
                if (this._transformYawPitch) {
                    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(forwardAxis, this._transformYawPitchInv, forwardAxis);
                }
                if (parentBone) {
                    parentBone.getDirectionToRef(forwardAxis, this.mesh, forwardAxis);
                }
                else {
                    mesh.getDirectionToRef(forwardAxis, forwardAxis);
                }
                var rightAxis = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Cross(upAxis, forwardAxis);
                rightAxis.normalize();
                forwardAxis = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Cross(rightAxis, upAxis);
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromXYZAxesToRef(rightAxis, upAxis, forwardAxis, spaceMat);
            }
            spaceMat.invertToRef(spaceMatInv);
            var xzlen = null;
            if (checkPitch) {
                var localTarget = BoneLookController._TmpVecs[3];
                target.subtractToRef(bonePos, localTarget);
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(localTarget, spaceMatInv, localTarget);
                xzlen = Math.sqrt(localTarget.x * localTarget.x + localTarget.z * localTarget.z);
                var pitch = Math.atan2(localTarget.y, xzlen);
                var newPitch = pitch;
                if (pitch > this._maxPitch) {
                    localTarget.y = this._maxPitchTan * xzlen;
                    newPitch = this._maxPitch;
                }
                else if (pitch < this._minPitch) {
                    localTarget.y = this._minPitchTan * xzlen;
                    newPitch = this._minPitch;
                }
                if (pitch != newPitch) {
                    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(localTarget, spaceMat, localTarget);
                    localTarget.addInPlace(bonePos);
                    target = localTarget;
                }
            }
            if (checkYaw) {
                var localTarget = BoneLookController._TmpVecs[4];
                target.subtractToRef(bonePos, localTarget);
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(localTarget, spaceMatInv, localTarget);
                var yaw = Math.atan2(localTarget.x, localTarget.z);
                var newYaw = yaw;
                if (yaw > this._maxYaw || yaw < this._minYaw) {
                    if (xzlen == null) {
                        xzlen = Math.sqrt(localTarget.x * localTarget.x + localTarget.z * localTarget.z);
                    }
                    if (this._yawRange > Math.PI) {
                        if (this._isAngleBetween(yaw, this._maxYaw, this._midYawConstraint)) {
                            localTarget.z = this._maxYawCos * xzlen;
                            localTarget.x = this._maxYawSin * xzlen;
                            newYaw = this._maxYaw;
                        }
                        else if (this._isAngleBetween(yaw, this._midYawConstraint, this._minYaw)) {
                            localTarget.z = this._minYawCos * xzlen;
                            localTarget.x = this._minYawSin * xzlen;
                            newYaw = this._minYaw;
                        }
                    }
                    else {
                        if (yaw > this._maxYaw) {
                            localTarget.z = this._maxYawCos * xzlen;
                            localTarget.x = this._maxYawSin * xzlen;
                            newYaw = this._maxYaw;
                        }
                        else if (yaw < this._minYaw) {
                            localTarget.z = this._minYawCos * xzlen;
                            localTarget.x = this._minYawSin * xzlen;
                            newYaw = this._minYaw;
                        }
                    }
                }
                if (this._slerping && this._yawRange > Math.PI) {
                    //are we going to be crossing into the min/max region?
                    var boneFwd = BoneLookController._TmpVecs[8];
                    boneFwd.copyFrom(_Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Axis.Z);
                    if (this._transformYawPitch) {
                        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(boneFwd, this._transformYawPitchInv, boneFwd);
                    }
                    var boneRotMat = BoneLookController._TmpMats[4];
                    this._boneQuat.toRotationMatrix(boneRotMat);
                    this.mesh.getWorldMatrix().multiplyToRef(boneRotMat, boneRotMat);
                    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(boneFwd, boneRotMat, boneFwd);
                    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(boneFwd, spaceMatInv, boneFwd);
                    var boneYaw = Math.atan2(boneFwd.x, boneFwd.z);
                    var angBtwTar = this._getAngleBetween(boneYaw, yaw);
                    var angBtwMidYaw = this._getAngleBetween(boneYaw, this._midYawConstraint);
                    if (angBtwTar > angBtwMidYaw) {
                        if (xzlen == null) {
                            xzlen = Math.sqrt(localTarget.x * localTarget.x + localTarget.z * localTarget.z);
                        }
                        var angBtwMax = this._getAngleBetween(boneYaw, this._maxYaw);
                        var angBtwMin = this._getAngleBetween(boneYaw, this._minYaw);
                        if (angBtwMin < angBtwMax) {
                            newYaw = boneYaw + Math.PI * 0.75;
                            localTarget.z = Math.cos(newYaw) * xzlen;
                            localTarget.x = Math.sin(newYaw) * xzlen;
                        }
                        else {
                            newYaw = boneYaw - Math.PI * 0.75;
                            localTarget.z = Math.cos(newYaw) * xzlen;
                            localTarget.x = Math.sin(newYaw) * xzlen;
                        }
                    }
                }
                if (yaw != newYaw) {
                    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(localTarget, spaceMat, localTarget);
                    localTarget.addInPlace(bonePos);
                    target = localTarget;
                }
            }
        }
        var zaxis = BoneLookController._TmpVecs[5];
        var xaxis = BoneLookController._TmpVecs[6];
        var yaxis = BoneLookController._TmpVecs[7];
        var tmpQuat = BoneLookController._TmpQuat;
        target.subtractToRef(bonePos, zaxis);
        zaxis.normalize();
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.CrossToRef(upAxis, zaxis, xaxis);
        xaxis.normalize();
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.CrossToRef(zaxis, xaxis, yaxis);
        yaxis.normalize();
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromXYZAxesToRef(xaxis, yaxis, zaxis, _tmpMat1);
        if (xaxis.x === 0 && xaxis.y === 0 && xaxis.z === 0) {
            return;
        }
        if (yaxis.x === 0 && yaxis.y === 0 && yaxis.z === 0) {
            return;
        }
        if (zaxis.x === 0 && zaxis.y === 0 && zaxis.z === 0) {
            return;
        }
        if (this.adjustYaw || this.adjustPitch || this.adjustRoll) {
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.RotationYawPitchRollToRef(this.adjustYaw, this.adjustPitch, this.adjustRoll, _tmpMat2);
            _tmpMat2.multiplyToRef(_tmpMat1, _tmpMat1);
        }
        if (this.slerpAmount < 1) {
            if (!this._slerping) {
                this.bone.getRotationQuaternionToRef(_Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Space.WORLD, this.mesh, this._boneQuat);
            }
            if (this._transformYawPitch) {
                this._transformYawPitch.multiplyToRef(_tmpMat1, _tmpMat1);
            }
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromRotationMatrixToRef(_tmpMat1, tmpQuat);
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.SlerpToRef(this._boneQuat, tmpQuat, this.slerpAmount, this._boneQuat);
            this.bone.setRotationQuaternion(this._boneQuat, _Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Space.WORLD, this.mesh);
            this._slerping = true;
        }
        else {
            if (this._transformYawPitch) {
                this._transformYawPitch.multiplyToRef(_tmpMat1, _tmpMat1);
            }
            this.bone.setRotationMatrix(_tmpMat1, _Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Space.WORLD, this.mesh);
            this._slerping = false;
        }
        this._updateLinkedTransformRotation();
    };
    BoneLookController.prototype._getAngleDiff = function (ang1, ang2) {
        var angDiff = ang2 - ang1;
        angDiff %= Math.PI * 2;
        if (angDiff > Math.PI) {
            angDiff -= Math.PI * 2;
        }
        else if (angDiff < -Math.PI) {
            angDiff += Math.PI * 2;
        }
        return angDiff;
    };
    BoneLookController.prototype._getAngleBetween = function (ang1, ang2) {
        ang1 %= 2 * Math.PI;
        ang1 = ang1 < 0 ? ang1 + 2 * Math.PI : ang1;
        ang2 %= 2 * Math.PI;
        ang2 = ang2 < 0 ? ang2 + 2 * Math.PI : ang2;
        var ab = 0;
        if (ang1 < ang2) {
            ab = ang2 - ang1;
        }
        else {
            ab = ang1 - ang2;
        }
        if (ab > Math.PI) {
            ab = Math.PI * 2 - ab;
        }
        return ab;
    };
    BoneLookController.prototype._isAngleBetween = function (ang, ang1, ang2) {
        ang %= 2 * Math.PI;
        ang = ang < 0 ? ang + 2 * Math.PI : ang;
        ang1 %= 2 * Math.PI;
        ang1 = ang1 < 0 ? ang1 + 2 * Math.PI : ang1;
        ang2 %= 2 * Math.PI;
        ang2 = ang2 < 0 ? ang2 + 2 * Math.PI : ang2;
        if (ang1 < ang2) {
            if (ang > ang1 && ang < ang2) {
                return true;
            }
        }
        else {
            if (ang > ang2 && ang < ang1) {
                return true;
            }
        }
        return false;
    };
    BoneLookController.prototype._updateLinkedTransformRotation = function () {
        var bone = this.bone;
        if (bone._linkedTransformNode) {
            if (!bone._linkedTransformNode.rotationQuaternion) {
                bone._linkedTransformNode.rotationQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
            }
            bone.getRotationQuaternionToRef(_Maths_math_axis__WEBPACK_IMPORTED_MODULE_2__.Space.LOCAL, null, bone._linkedTransformNode.rotationQuaternion);
        }
    };
    BoneLookController._TmpVecs = _Misc_arrayTools__WEBPACK_IMPORTED_MODULE_0__.ArrayTools.BuildArray(10, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero);
    BoneLookController._TmpQuat = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.Identity();
    BoneLookController._TmpMats = _Misc_arrayTools__WEBPACK_IMPORTED_MODULE_0__.ArrayTools.BuildArray(5, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Identity);
    return BoneLookController;
}());



/***/ }),

/***/ "../../../lts/core/dist/Bones/index.js":
/*!*********************************************!*\
  !*** ../../../lts/core/dist/Bones/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bone": () => (/* reexport safe */ _bone__WEBPACK_IMPORTED_MODULE_0__.Bone),
/* harmony export */   "BoneIKController": () => (/* reexport safe */ _boneIKController__WEBPACK_IMPORTED_MODULE_1__.BoneIKController),
/* harmony export */   "BoneLookController": () => (/* reexport safe */ _boneLookController__WEBPACK_IMPORTED_MODULE_2__.BoneLookController),
/* harmony export */   "Skeleton": () => (/* reexport safe */ _skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton)
/* harmony export */ });
/* harmony import */ var _bone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bone */ "../../../lts/core/dist/Bones/bone.js");
/* harmony import */ var _boneIKController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boneIKController */ "../../../lts/core/dist/Bones/boneIKController.js");
/* harmony import */ var _boneLookController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boneLookController */ "../../../lts/core/dist/Bones/boneLookController.js");
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skeleton */ "../../../lts/core/dist/Bones/skeleton.js");






/***/ }),

/***/ "../../../lts/core/dist/Bones/skeleton.js":
/*!************************************************!*\
  !*** ../../../lts/core/dist/Bones/skeleton.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Skeleton": () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var _bone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bone */ "../../../lts/core/dist/Bones/bone.js");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc/observable */ "../../../lts/core/dist/Misc/observable.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Maths/math.vector */ "../../../lts/core/dist/Maths/math.vector.js");
/* harmony import */ var _Materials_Textures_rawTexture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Materials/Textures/rawTexture */ "../../../lts/core/dist/Materials/Textures/rawTexture.js");
/* harmony import */ var _Animations_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Animations/animation */ "../../../lts/core/dist/Animations/animation.js");
/* harmony import */ var _Animations_animationRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Animations/animationRange */ "../../../lts/core/dist/Animations/animationRange.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Engines/engineStore */ "../../../lts/core/dist/Engines/engineStore.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Engines/constants */ "../../../lts/core/dist/Engines/constants.js");
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Misc/logger */ "../../../lts/core/dist/Misc/logger.js");
/* harmony import */ var _Misc_deepCopier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Misc/deepCopier */ "../../../lts/core/dist/Misc/deepCopier.js");










/**
 * Class used to handle skinning animations
 * @see https://doc.babylonjs.com/how_to/how_to_use_bones_and_skeletons
 */
var Skeleton = /** @class */ (function () {
    /**
     * Creates a new skeleton
     * @param name defines the skeleton name
     * @param id defines the skeleton Id
     * @param scene defines the hosting scene
     */
    function Skeleton(
    /** defines the skeleton name */
    name, 
    /** defines the skeleton Id */
    id, scene) {
        this.name = name;
        this.id = id;
        /**
         * Defines the list of child bones
         */
        this.bones = new Array();
        /**
         * Defines a boolean indicating if the root matrix is provided by meshes or by the current skeleton (this is the default value)
         */
        this.needInitialSkinMatrix = false;
        this._isDirty = true;
        this._meshesWithPoseMatrix = new Array();
        this._identity = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Matrix.Identity();
        this._ranges = {};
        this._lastAbsoluteTransformsUpdateId = -1;
        this._canUseTextureForBones = false;
        this._uniqueId = 0;
        /** @hidden */
        this._numBonesWithLinkedTransformNode = 0;
        /** @hidden */
        this._hasWaitingData = null;
        /** @hidden */
        this._parentContainer = null;
        /**
         * Specifies if the skeleton should be serialized
         */
        this.doNotSerialize = false;
        this._useTextureToStoreBoneMatrices = true;
        this._animationPropertiesOverride = null;
        // Events
        /**
         * An observable triggered before computing the skeleton's matrices
         */
        this.onBeforeComputeObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        this.bones = [];
        this._scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_6__.EngineStore.LastCreatedScene;
        this._uniqueId = this._scene.getUniqueId();
        this._scene.addSkeleton(this);
        //make sure it will recalculate the matrix next time prepare is called.
        this._isDirty = true;
        var engineCaps = this._scene.getEngine().getCaps();
        this._canUseTextureForBones = engineCaps.textureFloat && engineCaps.maxVertexTextureImageUnits > 0;
    }
    Object.defineProperty(Skeleton.prototype, "useTextureToStoreBoneMatrices", {
        /**
         * Gets or sets a boolean indicating that bone matrices should be stored as a texture instead of using shader uniforms (default is true).
         * Please note that this option is not available if the hardware does not support it
         */
        get: function () {
            return this._useTextureToStoreBoneMatrices;
        },
        set: function (value) {
            this._useTextureToStoreBoneMatrices = value;
            this._markAsDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Skeleton.prototype, "animationPropertiesOverride", {
        /**
         * Gets or sets the animation properties override
         */
        get: function () {
            if (!this._animationPropertiesOverride) {
                return this._scene.animationPropertiesOverride;
            }
            return this._animationPropertiesOverride;
        },
        set: function (value) {
            this._animationPropertiesOverride = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Skeleton.prototype, "isUsingTextureForMatrices", {
        /**
         * Gets a boolean indicating that the skeleton effectively stores matrices into a texture
         */
        get: function () {
            return this.useTextureToStoreBoneMatrices && this._canUseTextureForBones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Skeleton.prototype, "uniqueId", {
        /**
         * Gets the unique ID of this skeleton
         */
        get: function () {
            return this._uniqueId;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets the current object class name.
     * @return the class name
     */
    Skeleton.prototype.getClassName = function () {
        return "Skeleton";
    };
    /**
     * Returns an array containing the root bones
     * @returns an array containing the root bones
     */
    Skeleton.prototype.getChildren = function () {
        return this.bones.filter(function (b) { return !b.getParent(); });
    };
    // Members
    /**
     * Gets the list of transform matrices to send to shaders (one matrix per bone)
     * @param mesh defines the mesh to use to get the root matrix (if needInitialSkinMatrix === true)
     * @returns a Float32Array containing matrices data
     */
    Skeleton.prototype.getTransformMatrices = function (mesh) {
        if (this.needInitialSkinMatrix) {
            if (!mesh._bonesTransformMatrices) {
                this.prepare();
            }
            return mesh._bonesTransformMatrices;
        }
        if (!this._transformMatrices) {
            this.prepare();
        }
        return this._transformMatrices;
    };
    /**
     * Gets the list of transform matrices to send to shaders inside a texture (one matrix per bone)
     * @param mesh defines the mesh to use to get the root matrix (if needInitialSkinMatrix === true)
     * @returns a raw texture containing the data
     */
    Skeleton.prototype.getTransformMatrixTexture = function (mesh) {
        if (this.needInitialSkinMatrix && mesh._transformMatrixTexture) {
            return mesh._transformMatrixTexture;
        }
        return this._transformMatrixTexture;
    };
    /**
     * Gets the current hosting scene
     * @returns a scene object
     */
    Skeleton.prototype.getScene = function () {
        return this._scene;
    };
    // Methods
    /**
     * Gets a string representing the current skeleton data
     * @param fullDetails defines a boolean indicating if we want a verbose version
     * @returns a string representing the current skeleton data
     */
    Skeleton.prototype.toString = function (fullDetails) {
        var ret = "Name: ".concat(this.name, ", nBones: ").concat(this.bones.length);
        ret += ", nAnimationRanges: ".concat(this._ranges ? Object.keys(this._ranges).length : "none");
        if (fullDetails) {
            ret += ", Ranges: {";
            var first = true;
            for (var name_1 in this._ranges) {
                if (first) {
                    ret += ", ";
                    first = false;
                }
                ret += name_1;
            }
            ret += "}";
        }
        return ret;
    };
    /**
     * Get bone's index searching by name
     * @param name defines bone's name to search for
     * @return the indice of the bone. Returns -1 if not found
     */
    Skeleton.prototype.getBoneIndexByName = function (name) {
        for (var boneIndex = 0, cache = this.bones.length; boneIndex < cache; boneIndex++) {
            if (this.bones[boneIndex].name === name) {
                return boneIndex;
            }
        }
        return -1;
    };
    /**
     * Create a new animation range
     * @param name defines the name of the range
     * @param from defines the start key
     * @param to defines the end key
     */
    Skeleton.prototype.createAnimationRange = function (name, from, to) {
        // check name not already in use
        if (!this._ranges[name]) {
            this._ranges[name] = new _Animations_animationRange__WEBPACK_IMPORTED_MODULE_5__.AnimationRange(name, from, to);
            for (var i = 0, nBones = this.bones.length; i < nBones; i++) {
                if (this.bones[i].animations[0]) {
                    this.bones[i].animations[0].createRange(name, from, to);
                }
            }
        }
    };
    /**
     * Delete a specific animation range
     * @param name defines the name of the range
     * @param deleteFrames defines if frames must be removed as well
     */
    Skeleton.prototype.deleteAnimationRange = function (name, deleteFrames) {
        if (deleteFrames === void 0) { deleteFrames = true; }
        for (var i = 0, nBones = this.bones.length; i < nBones; i++) {
            if (this.bones[i].animations[0]) {
                this.bones[i].animations[0].deleteRange(name, deleteFrames);
            }
        }
        this._ranges[name] = null; // said much faster than 'delete this._range[name]'
    };
    /**
     * Gets a specific animation range
     * @param name defines the name of the range to look for
     * @returns the requested animation range or null if not found
     */
    Skeleton.prototype.getAnimationRange = function (name) {
        return this._ranges[name] || null;
    };
    /**
     * Gets the list of all animation ranges defined on this skeleton
     * @returns an array
     */
    Skeleton.prototype.getAnimationRanges = function () {
        var animationRanges = [];
        var name;
        for (name in this._ranges) {
            animationRanges.push(this._ranges[name]);
        }
        return animationRanges;
    };
    /**
     * Copy animation range from a source skeleton.
     * This is not for a complete retargeting, only between very similar skeleton's with only possible bone length differences
     * @param source defines the source skeleton
     * @param name defines the name of the range to copy
     * @param rescaleAsRequired defines if rescaling must be applied if required
     * @returns true if operation was successful
     */
    Skeleton.prototype.copyAnimationRange = function (source, name, rescaleAsRequired) {
        if (rescaleAsRequired === void 0) { rescaleAsRequired = false; }
        if (this._ranges[name] || !source.getAnimationRange(name)) {
            return false;
        }
        var ret = true;
        var frameOffset = this._getHighestAnimationFrame() + 1;
        // make a dictionary of source skeleton's bones, so exact same order or doubly nested loop is not required
        var boneDict = {};
        var sourceBones = source.bones;
        var nBones;
        var i;
        for (i = 0, nBones = sourceBones.length; i < nBones; i++) {
            boneDict[sourceBones[i].name] = sourceBones[i];
        }
        if (this.bones.length !== sourceBones.length) {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_8__.Logger.Warn("copyAnimationRange: this rig has ".concat(this.bones.length, " bones, while source as ").concat(sourceBones.length));
            ret = false;
        }
        var skelDimensionsRatio = rescaleAsRequired && this.dimensionsAtRest && source.dimensionsAtRest ? this.dimensionsAtRest.divide(source.dimensionsAtRest) : null;
        for (i = 0, nBones = this.bones.length; i < nBones; i++) {
            var boneName = this.bones[i].name;
            var sourceBone = boneDict[boneName];
            if (sourceBone) {
                ret = ret && this.bones[i].copyAnimationRange(sourceBone, name, frameOffset, rescaleAsRequired, skelDimensionsRatio);
            }
            else {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_8__.Logger.Warn("copyAnimationRange: not same rig, missing source bone " + boneName);
                ret = false;
            }
        }
        // do not call createAnimationRange(), since it also is done to bones, which was already done
        var range = source.getAnimationRange(name);
        if (range) {
            this._ranges[name] = new _Animations_animationRange__WEBPACK_IMPORTED_MODULE_5__.AnimationRange(name, range.from + frameOffset, range.to + frameOffset);
        }
        return ret;
    };
    /**
     * Forces the skeleton to go to rest pose
     */
    Skeleton.prototype.returnToRest = function () {
        for (var _i = 0, _a = this.bones; _i < _a.length; _i++) {
            var bone = _a[_i];
            if (bone._index !== -1) {
                bone.returnToRest();
            }
        }
    };
    Skeleton.prototype._getHighestAnimationFrame = function () {
        var ret = 0;
        for (var i = 0, nBones = this.bones.length; i < nBones; i++) {
            if (this.bones[i].animations[0]) {
                var highest = this.bones[i].animations[0].getHighestFrame();
                if (ret < highest) {
                    ret = highest;
                }
            }
        }
        return ret;
    };
    /**
     * Begin a specific animation range
     * @param name defines the name of the range to start
     * @param loop defines if looping must be turned on (false by default)
     * @param speedRatio defines the speed ratio to apply (1 by default)
     * @param onAnimationEnd defines a callback which will be called when animation will end
     * @returns a new animatable
     */
    Skeleton.prototype.beginAnimation = function (name, loop, speedRatio, onAnimationEnd) {
        var range = this.getAnimationRange(name);
        if (!range) {
            return null;
        }
        return this._scene.beginAnimation(this, range.from, range.to, loop, speedRatio, onAnimationEnd);
    };
    /**
     * Convert the keyframes for a range of animation on a skeleton to be relative to a given reference frame.
     * @param skeleton defines the Skeleton containing the animation range to convert
     * @param referenceFrame defines the frame that keyframes in the range will be relative to
     * @param range defines the name of the AnimationRange belonging to the Skeleton to convert
     * @returns the original skeleton
     */
    Skeleton.MakeAnimationAdditive = function (skeleton, referenceFrame, range) {
        if (referenceFrame === void 0) { referenceFrame = 0; }
        var rangeValue = skeleton.getAnimationRange(range);
        // We can't make a range additive if it doesn't exist
        if (!rangeValue) {
            return null;
        }
        // Find any current scene-level animatable belonging to the target that matches the range
        var sceneAnimatables = skeleton._scene.getAllAnimatablesByTarget(skeleton);
        var rangeAnimatable = null;
        for (var index = 0; index < sceneAnimatables.length; index++) {
            var sceneAnimatable = sceneAnimatables[index];
            if (sceneAnimatable.fromFrame === (rangeValue === null || rangeValue === void 0 ? void 0 : rangeValue.from) && sceneAnimatable.toFrame === (rangeValue === null || rangeValue === void 0 ? void 0 : rangeValue.to)) {
                rangeAnimatable = sceneAnimatable;
                break;
            }
        }
        // Convert the animations belonging to the skeleton to additive keyframes
        var animatables = skeleton.getAnimatables();
        for (var index = 0; index < animatables.length; index++) {
            var animatable = animatables[index];
            var animations = animatable.animations;
            if (!animations) {
                continue;
            }
            for (var animIndex = 0; animIndex < animations.length; animIndex++) {
                _Animations_animation__WEBPACK_IMPORTED_MODULE_4__.Animation.MakeAnimationAdditive(animations[animIndex], referenceFrame, range);
            }
        }
        // Mark the scene-level animatable as additive
        if (rangeAnimatable) {
            rangeAnimatable.isAdditive = true;
        }
        return skeleton;
    };
    /** @hidden */
    Skeleton.prototype._markAsDirty = function () {
        this._isDirty = true;
    };
    /**
     * @param mesh
     * @hidden
     */
    Skeleton.prototype._registerMeshWithPoseMatrix = function (mesh) {
        this._meshesWithPoseMatrix.push(mesh);
    };
    /**
     * @param mesh
     * @hidden
     */
    Skeleton.prototype._unregisterMeshWithPoseMatrix = function (mesh) {
        var index = this._meshesWithPoseMatrix.indexOf(mesh);
        if (index > -1) {
            this._meshesWithPoseMatrix.splice(index, 1);
        }
    };
    Skeleton.prototype._computeTransformMatrices = function (targetMatrix, initialSkinMatrix) {
        this.onBeforeComputeObservable.notifyObservers(this);
        for (var index = 0; index < this.bones.length; index++) {
            var bone = this.bones[index];
            bone._childUpdateId++;
            var parentBone = bone.getParent();
            if (parentBone) {
                bone.getLocalMatrix().multiplyToRef(parentBone.getWorldMatrix(), bone.getWorldMatrix());
            }
            else {
                if (initialSkinMatrix) {
                    bone.getLocalMatrix().multiplyToRef(initialSkinMatrix, bone.getWorldMatrix());
                }
                else {
                    bone.getWorldMatrix().copyFrom(bone.getLocalMatrix());
                }
            }
            if (bone._index !== -1) {
                var mappedIndex = bone._index === null ? index : bone._index;
                bone.getInvertedAbsoluteTransform().multiplyToArray(bone.getWorldMatrix(), targetMatrix, mappedIndex * 16);
            }
        }
        this._identity.copyToArray(targetMatrix, this.bones.length * 16);
    };
    /**
     * Build all resources required to render a skeleton
     */
    Skeleton.prototype.prepare = function () {
        // Update the local matrix of bones with linked transform nodes.
        if (this._numBonesWithLinkedTransformNode > 0) {
            for (var _i = 0, _a = this.bones; _i < _a.length; _i++) {
                var bone = _a[_i];
                if (bone._linkedTransformNode) {
                    // Computing the world matrix also computes the local matrix.
                    bone._linkedTransformNode.computeWorldMatrix();
                    bone._matrix = bone._linkedTransformNode._localMatrix;
                }
            }
        }
        if (this.needInitialSkinMatrix) {
            for (var _b = 0, _c = this._meshesWithPoseMatrix; _b < _c.length; _b++) {
                var mesh = _c[_b];
                var poseMatrix = mesh.getPoseMatrix();
                var needsUpdate = this._isDirty;
                if (!mesh._bonesTransformMatrices || mesh._bonesTransformMatrices.length !== 16 * (this.bones.length + 1)) {
                    mesh._bonesTransformMatrices = new Float32Array(16 * (this.bones.length + 1));
                    needsUpdate = true;
                }
                if (!needsUpdate) {
                    continue;
                }
                if (this._synchronizedWithMesh !== mesh) {
                    this._synchronizedWithMesh = mesh;
                    // Prepare bones
                    for (var _d = 0, _e = this.bones; _d < _e.length; _d++) {
                        var bone = _e[_d];
                        if (!bone.getParent()) {
                            var matrix = bone.getBaseMatrix();
                            matrix.multiplyToRef(poseMatrix, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Matrix[1]);
                            bone._updateDifferenceMatrix(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Matrix[1]);
                        }
                    }
                    if (this.isUsingTextureForMatrices) {
                        var textureWidth = (this.bones.length + 1) * 4;
                        if (!mesh._transformMatrixTexture || mesh._transformMatrixTexture.getSize().width !== textureWidth) {
                            if (mesh._transformMatrixTexture) {
                                mesh._transformMatrixTexture.dispose();
                            }
                            mesh._transformMatrixTexture = _Materials_Textures_rawTexture__WEBPACK_IMPORTED_MODULE_3__.RawTexture.CreateRGBATexture(mesh._bonesTransformMatrices, (this.bones.length + 1) * 4, 1, this._scene, false, false, _Engines_constants__WEBPACK_IMPORTED_MODULE_7__.Constants.TEXTURE_NEAREST_SAMPLINGMODE, _Engines_constants__WEBPACK_IMPORTED_MODULE_7__.Constants.TEXTURETYPE_FLOAT);
                        }
                    }
                }
                this._computeTransformMatrices(mesh._bonesTransformMatrices, poseMatrix);
                if (this.isUsingTextureForMatrices && mesh._transformMatrixTexture) {
                    mesh._transformMatrixTexture.update(mesh._bonesTransformMatrices);
                }
            }
        }
        else {
            if (!this._isDirty) {
                return;
            }
            if (!this._transformMatrices || this._transformMatrices.length !== 16 * (this.bones.length + 1)) {
                this._transformMatrices = new Float32Array(16 * (this.bones.length + 1));
                if (this.isUsingTextureForMatrices) {
                    if (this._transformMatrixTexture) {
                        this._transformMatrixTexture.dispose();
                    }
                    this._transformMatrixTexture = _Materials_Textures_rawTexture__WEBPACK_IMPORTED_MODULE_3__.RawTexture.CreateRGBATexture(this._transformMatrices, (this.bones.length + 1) * 4, 1, this._scene, false, false, _Engines_constants__WEBPACK_IMPORTED_MODULE_7__.Constants.TEXTURE_NEAREST_SAMPLINGMODE, _Engines_constants__WEBPACK_IMPORTED_MODULE_7__.Constants.TEXTURETYPE_FLOAT);
                }
            }
            this._computeTransformMatrices(this._transformMatrices, null);
            if (this.isUsingTextureForMatrices && this._transformMatrixTexture) {
                this._transformMatrixTexture.update(this._transformMatrices);
            }
        }
        this._isDirty = false;
    };
    /**
     * Gets the list of animatables currently running for this skeleton
     * @returns an array of animatables
     */
    Skeleton.prototype.getAnimatables = function () {
        if (!this._animatables || this._animatables.length !== this.bones.length) {
            this._animatables = [];
            for (var index = 0; index < this.bones.length; index++) {
                this._animatables.push(this.bones[index]);
            }
        }
        return this._animatables;
    };
    /**
     * Clone the current skeleton
     * @param name defines the name of the new skeleton
     * @param id defines the id of the new skeleton
     * @returns the new skeleton
     */
    Skeleton.prototype.clone = function (name, id) {
        var result = new Skeleton(name, id || name, this._scene);
        result.needInitialSkinMatrix = this.needInitialSkinMatrix;
        for (var index = 0; index < this.bones.length; index++) {
            var source = this.bones[index];
            var parentBone = null;
            var parent_1 = source.getParent();
            if (parent_1) {
                var parentIndex = this.bones.indexOf(parent_1);
                parentBone = result.bones[parentIndex];
            }
            var bone = new _bone__WEBPACK_IMPORTED_MODULE_0__.Bone(source.name, result, parentBone, source.getBaseMatrix().clone(), source.getRestPose().clone());
            bone._index = source._index;
            if (source._linkedTransformNode) {
                bone.linkTransformNode(source._linkedTransformNode);
            }
            _Misc_deepCopier__WEBPACK_IMPORTED_MODULE_9__.DeepCopier.DeepCopy(source.animations, bone.animations);
        }
        if (this._ranges) {
            result._ranges = {};
            for (var rangeName in this._ranges) {
                var range = this._ranges[rangeName];
                if (range) {
                    result._ranges[rangeName] = range.clone();
                }
            }
        }
        this._isDirty = true;
        return result;
    };
    /**
     * Enable animation blending for this skeleton
     * @param blendingSpeed defines the blending speed to apply
     * @see https://doc.babylonjs.com/babylon101/animations#animation-blending
     */
    Skeleton.prototype.enableBlending = function (blendingSpeed) {
        if (blendingSpeed === void 0) { blendingSpeed = 0.01; }
        this.bones.forEach(function (bone) {
            bone.animations.forEach(function (animation) {
                animation.enableBlending = true;
                animation.blendingSpeed = blendingSpeed;
            });
        });
    };
    /**
     * Releases all resources associated with the current skeleton
     */
    Skeleton.prototype.dispose = function () {
        this._meshesWithPoseMatrix = [];
        // Animations
        this.getScene().stopAnimation(this);
        // Remove from scene
        this.getScene().removeSkeleton(this);
        if (this._parentContainer) {
            var index = this._parentContainer.skeletons.indexOf(this);
            if (index > -1) {
                this._parentContainer.skeletons.splice(index, 1);
            }
            this._parentContainer = null;
        }
        if (this._transformMatrixTexture) {
            this._transformMatrixTexture.dispose();
            this._transformMatrixTexture = null;
        }
    };
    /**
     * Serialize the skeleton in a JSON object
     * @returns a JSON object
     */
    Skeleton.prototype.serialize = function () {
        var _a;
        var serializationObject = {};
        serializationObject.name = this.name;
        serializationObject.id = this.id;
        if (this.dimensionsAtRest) {
            serializationObject.dimensionsAtRest = this.dimensionsAtRest.asArray();
        }
        serializationObject.bones = [];
        serializationObject.needInitialSkinMatrix = this.needInitialSkinMatrix;
        for (var index = 0; index < this.bones.length; index++) {
            var bone = this.bones[index];
            var parent_2 = bone.getParent();
            var serializedBone = {
                parentBoneIndex: parent_2 ? this.bones.indexOf(parent_2) : -1,
                index: bone.getIndex(),
                name: bone.name,
                id: bone.id,
                matrix: bone.getBaseMatrix().toArray(),
                rest: bone.getRestPose().toArray(),
                linkedTransformNodeId: (_a = bone.getTransformNode()) === null || _a === void 0 ? void 0 : _a.id,
            };
            serializationObject.bones.push(serializedBone);
            if (bone.length) {
                serializedBone.length = bone.length;
            }
            if (bone.metadata) {
                serializedBone.metadata = bone.metadata;
            }
            if (bone.animations && bone.animations.length > 0) {
                serializedBone.animation = bone.animations[0].serialize();
            }
            serializationObject.ranges = [];
            for (var name_2 in this._ranges) {
                var source = this._ranges[name_2];
                if (!source) {
                    continue;
                }
                var range = {};
                range.name = name_2;
                range.from = source.from;
                range.to = source.to;
                serializationObject.ranges.push(range);
            }
        }
        return serializationObject;
    };
    /**
     * Creates a new skeleton from serialized data
     * @param parsedSkeleton defines the serialized data
     * @param scene defines the hosting scene
     * @returns a new skeleton
     */
    Skeleton.Parse = function (parsedSkeleton, scene) {
        var skeleton = new Skeleton(parsedSkeleton.name, parsedSkeleton.id, scene);
        if (parsedSkeleton.dimensionsAtRest) {
            skeleton.dimensionsAtRest = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.FromArray(parsedSkeleton.dimensionsAtRest);
        }
        skeleton.needInitialSkinMatrix = parsedSkeleton.needInitialSkinMatrix;
        var index;
        for (index = 0; index < parsedSkeleton.bones.length; index++) {
            var parsedBone = parsedSkeleton.bones[index];
            var parsedBoneIndex = parsedSkeleton.bones[index].index;
            var parentBone = null;
            if (parsedBone.parentBoneIndex > -1) {
                parentBone = skeleton.bones[parsedBone.parentBoneIndex];
            }
            var rest = parsedBone.rest ? _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Matrix.FromArray(parsedBone.rest) : null;
            var bone = new _bone__WEBPACK_IMPORTED_MODULE_0__.Bone(parsedBone.name, skeleton, parentBone, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Matrix.FromArray(parsedBone.matrix), rest, null, parsedBoneIndex);
            if (parsedBone.id !== undefined && parsedBone.id !== null) {
                bone.id = parsedBone.id;
            }
            if (parsedBone.length) {
                bone.length = parsedBone.length;
            }
            if (parsedBone.metadata) {
                bone.metadata = parsedBone.metadata;
            }
            if (parsedBone.animation) {
                bone.animations.push(_Animations_animation__WEBPACK_IMPORTED_MODULE_4__.Animation.Parse(parsedBone.animation));
            }
            if (parsedBone.linkedTransformNodeId !== undefined && parsedBone.linkedTransformNodeId !== null) {
                skeleton._hasWaitingData = true;
                bone._waitingTransformNodeId = parsedBone.linkedTransformNodeId;
            }
        }
        // placed after bones, so createAnimationRange can cascade down
        if (parsedSkeleton.ranges) {
            for (index = 0; index < parsedSkeleton.ranges.length; index++) {
                var data = parsedSkeleton.ranges[index];
                skeleton.createAnimationRange(data.name, data.from, data.to);
            }
        }
        return skeleton;
    };
    /**
     * Compute all node absolute transforms
     * @param forceUpdate defines if computation must be done even if cache is up to date
     */
    Skeleton.prototype.computeAbsoluteTransforms = function (forceUpdate) {
        if (forceUpdate === void 0) { forceUpdate = false; }
        var renderId = this._scene.getRenderId();
        if (this._lastAbsoluteTransformsUpdateId != renderId || forceUpdate) {
            this.bones[0].computeAbsoluteTransforms();
            this._lastAbsoluteTransformsUpdateId = renderId;
        }
    };
    /**
     * Gets the root pose matrix
     * @returns a matrix
     */
    Skeleton.prototype.getPoseMatrix = function () {
        var poseMatrix = null;
        if (this._meshesWithPoseMatrix.length > 0) {
            poseMatrix = this._meshesWithPoseMatrix[0].getPoseMatrix();
        }
        return poseMatrix;
    };
    /**
     * Sorts bones per internal index
     */
    Skeleton.prototype.sortBones = function () {
        var bones = new Array();
        var visited = new Array(this.bones.length);
        for (var index = 0; index < this.bones.length; index++) {
            this._sortBones(index, bones, visited);
        }
        this.bones = bones;
    };
    Skeleton.prototype._sortBones = function (index, bones, visited) {
        if (visited[index]) {
            return;
        }
        visited[index] = true;
        var bone = this.bones[index];
        if (!bone)
            return;
        if (bone._index === undefined) {
            bone._index = index;
        }
        var parentBone = bone.getParent();
        if (parentBone) {
            this._sortBones(this.bones.indexOf(parentBone), bones, visited);
        }
        bones.push(bone);
    };
    /**
     * Set the current local matrix as the restPose for all bones in the skeleton.
     */
    Skeleton.prototype.setCurrentPoseAsRest = function () {
        this.bones.forEach(function (b) {
            b.setCurrentPoseAsRest();
        });
    };
    return Skeleton;
}());



/***/ }),

/***/ "../../../lts/core/dist/Buffers/buffer.js":
/*!************************************************!*\
  !*** ../../../lts/core/dist/Buffers/buffer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Buffer": () => (/* binding */ Buffer),
/* harmony export */   "VertexBuffer": () => (/* binding */ VertexBuffer)
/* harmony export */ });
/* harmony import */ var _dataBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataBuffer */ "../../../lts/core/dist/Buffers/dataBuffer.js");

/**
 * Class used to store data that will be store in GPU memory
 */
var Buffer = /** @class */ (function () {
    /**
     * Constructor
     * @param engine the engine
     * @param data the data to use for this buffer
     * @param updatable whether the data is updatable
     * @param stride the stride (optional)
     * @param postponeInternalCreation whether to postpone creating the internal WebGL buffer (optional)
     * @param instanced whether the buffer is instanced (optional)
     * @param useBytes set to true if the stride in in bytes (optional)
     * @param divisor sets an optional divisor for instances (1 by default)
     */
    function Buffer(engine, data, updatable, stride, postponeInternalCreation, instanced, useBytes, divisor) {
        if (stride === void 0) { stride = 0; }
        if (postponeInternalCreation === void 0) { postponeInternalCreation = false; }
        if (instanced === void 0) { instanced = false; }
        if (useBytes === void 0) { useBytes = false; }
        this._isAlreadyOwned = false;
        if (engine.getScene) {
            // old versions of VertexBuffer accepted 'mesh' instead of 'engine'
            this._engine = engine.getScene().getEngine();
        }
        else {
            this._engine = engine;
        }
        this._updatable = updatable;
        this._instanced = instanced;
        this._divisor = divisor || 1;
        if (data instanceof _dataBuffer__WEBPACK_IMPORTED_MODULE_0__.DataBuffer) {
            this._data = null;
            this._buffer = data;
        }
        else {
            this._data = data;
            this._buffer = null;
        }
        this.byteStride = useBytes ? stride : stride * Float32Array.BYTES_PER_ELEMENT;
        if (!postponeInternalCreation) {
            // by default
            this.create();
        }
    }
    /**
     * Create a new VertexBuffer based on the current buffer
     * @param kind defines the vertex buffer kind (position, normal, etc.)
     * @param offset defines offset in the buffer (0 by default)
     * @param size defines the size in floats of attributes (position is 3 for instance)
     * @param stride defines the stride size in floats in the buffer (the offset to apply to reach next value when data is interleaved)
     * @param instanced defines if the vertex buffer contains indexed data
     * @param useBytes defines if the offset and stride are in bytes     *
     * @param divisor sets an optional divisor for instances (1 by default)
     * @returns the new vertex buffer
     */
    Buffer.prototype.createVertexBuffer = function (kind, offset, size, stride, instanced, useBytes, divisor) {
        if (useBytes === void 0) { useBytes = false; }
        var byteOffset = useBytes ? offset : offset * Float32Array.BYTES_PER_ELEMENT;
        var byteStride = stride ? (useBytes ? stride : stride * Float32Array.BYTES_PER_ELEMENT) : this.byteStride;
        // a lot of these parameters are ignored as they are overridden by the buffer
        return new VertexBuffer(this._engine, this, kind, this._updatable, true, byteStride, instanced === undefined ? this._instanced : instanced, byteOffset, size, undefined, undefined, true, this._divisor || divisor);
    };
    // Properties
    /**
     * Gets a boolean indicating if the Buffer is updatable?
     * @returns true if the buffer is updatable
     */
    Buffer.prototype.isUpdatable = function () {
        return this._updatable;
    };
    /**
     * Gets current buffer's data
     * @returns a DataArray or null
     */
    Buffer.prototype.getData = function () {
        return this._data;
    };
    /**
     * Gets underlying native buffer
     * @returns underlying native buffer
     */
    Buffer.prototype.getBuffer = function () {
        return this._buffer;
    };
    /**
     * Gets the stride in float32 units (i.e. byte stride / 4).
     * May not be an integer if the byte stride is not divisible by 4.
     * @returns the stride in float32 units
     * @deprecated Please use byteStride instead.
     */
    Buffer.prototype.getStrideSize = function () {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT;
    };
    // Methods
    /**
     * Store data into the buffer. Creates the buffer if not used already.
     * If the buffer was already used, it will be updated only if it is updatable, otherwise it will do nothing.
     * @param data defines the data to store
     */
    Buffer.prototype.create = function (data) {
        if (data === void 0) { data = null; }
        if (!data && this._buffer) {
            return; // nothing to do
        }
        data = data || this._data;
        if (!data) {
            return;
        }
        if (!this._buffer) {
            // create buffer
            if (this._updatable) {
                this._buffer = this._engine.createDynamicVertexBuffer(data);
                this._data = data;
            }
            else {
                this._buffer = this._engine.createVertexBuffer(data);
            }
        }
        else if (this._updatable) {
            // update buffer
            this._engine.updateDynamicVertexBuffer(this._buffer, data);
            this._data = data;
        }
    };
    /** @hidden */
    Buffer.prototype._rebuild = function () {
        this._buffer = null;
        this.create(this._data);
    };
    /**
     * Update current buffer data
     * @param data defines the data to store
     */
    Buffer.prototype.update = function (data) {
        this.create(data);
    };
    /**
     * Updates the data directly.
     * @param data the new data
     * @param offset the new offset
     * @param vertexCount the vertex count (optional)
     * @param useBytes set to true if the offset is in bytes
     */
    Buffer.prototype.updateDirectly = function (data, offset, vertexCount, useBytes) {
        if (useBytes === void 0) { useBytes = false; }
        if (!this._buffer) {
            return;
        }
        if (this._updatable) {
            // update buffer
            this._engine.updateDynamicVertexBuffer(this._buffer, data, useBytes ? offset : offset * Float32Array.BYTES_PER_ELEMENT, vertexCount ? vertexCount * this.byteStride : undefined);
            if (offset === 0 && vertexCount === undefined) {
                // Keep the data if we easily can
                this._data = data;
            }
            else {
                this._data = null;
            }
        }
    };
    /** @hidden */
    Buffer.prototype._increaseReferences = function () {
        if (!this._buffer) {
            return;
        }
        if (!this._isAlreadyOwned) {
            this._isAlreadyOwned = true;
            return;
        }
        this._buffer.references++;
    };
    /**
     * Release all resources
     */
    Buffer.prototype.dispose = function () {
        if (!this._buffer) {
            return;
        }
        if (this._engine._releaseBuffer(this._buffer)) {
            this._buffer = null;
            this._data = null;
        }
    };
    return Buffer;
}());

/**
 * Specialized buffer used to store vertex data
 */
var VertexBuffer = /** @class */ (function () {
    /**
     * Constructor
     * @param engine the engine
     * @param data the data to use for this vertex buffer
     * @param kind the vertex buffer kind
     * @param updatable whether the data is updatable
     * @param postponeInternalCreation whether to postpone creating the internal WebGL buffer (optional)
     * @param stride the stride (optional)
     * @param instanced whether the buffer is instanced (optional)
     * @param offset the offset of the data (optional)
     * @param size the number of components (optional)
     * @param type the type of the component (optional)
     * @param normalized whether the data contains normalized data (optional)
     * @param useBytes set to true if stride and offset are in bytes (optional)
     * @param divisor defines the instance divisor to use (1 by default)
     * @param takeBufferOwnership defines if the buffer should be released when the vertex buffer is disposed
     */
    function VertexBuffer(engine, data, kind, updatable, postponeInternalCreation, stride, instanced, offset, size, type, normalized, useBytes, divisor, takeBufferOwnership) {
        if (normalized === void 0) { normalized = false; }
        if (useBytes === void 0) { useBytes = false; }
        if (divisor === void 0) { divisor = 1; }
        if (takeBufferOwnership === void 0) { takeBufferOwnership = false; }
        if (data instanceof Buffer) {
            this._buffer = data;
            this._ownsBuffer = takeBufferOwnership;
        }
        else {
            this._buffer = new Buffer(engine, data, updatable, stride, postponeInternalCreation, instanced, useBytes);
            this._ownsBuffer = true;
        }
        this.uniqueId = VertexBuffer._Counter++;
        this._kind = kind;
        if (type == undefined) {
            var data_1 = this.getData();
            this.type = VertexBuffer.FLOAT;
            if (data_1 instanceof Int8Array) {
                this.type = VertexBuffer.BYTE;
            }
            else if (data_1 instanceof Uint8Array) {
                this.type = VertexBuffer.UNSIGNED_BYTE;
            }
            else if (data_1 instanceof Int16Array) {
                this.type = VertexBuffer.SHORT;
            }
            else if (data_1 instanceof Uint16Array) {
                this.type = VertexBuffer.UNSIGNED_SHORT;
            }
            else if (data_1 instanceof Int32Array) {
                this.type = VertexBuffer.INT;
            }
            else if (data_1 instanceof Uint32Array) {
                this.type = VertexBuffer.UNSIGNED_INT;
            }
        }
        else {
            this.type = type;
        }
        var typeByteLength = VertexBuffer.GetTypeByteLength(this.type);
        if (useBytes) {
            this._size = size || (stride ? stride / typeByteLength : VertexBuffer.DeduceStride(kind));
            this.byteStride = stride || this._buffer.byteStride || this._size * typeByteLength;
            this.byteOffset = offset || 0;
        }
        else {
            this._size = size || stride || VertexBuffer.DeduceStride(kind);
            this.byteStride = stride ? stride * typeByteLength : this._buffer.byteStride || this._size * typeByteLength;
            this.byteOffset = (offset || 0) * typeByteLength;
        }
        this.normalized = normalized;
        this._instanced = instanced !== undefined ? instanced : false;
        this._instanceDivisor = instanced ? divisor : 0;
        this._computeHashCode();
    }
    Object.defineProperty(VertexBuffer.prototype, "instanceDivisor", {
        /**
         * Gets or sets the instance divisor when in instanced mode
         */
        get: function () {
            return this._instanceDivisor;
        },
        set: function (value) {
            this._instanceDivisor = value;
            if (value == 0) {
                this._instanced = false;
            }
            else {
                this._instanced = true;
            }
            this._computeHashCode();
        },
        enumerable: false,
        configurable: true
    });
    VertexBuffer.prototype._computeHashCode = function () {
        // note: cast to any because the property is declared readonly
        this.hashCode =
            ((this.type - 5120) << 0) +
                ((this.normalized ? 1 : 0) << 3) +
                (this._size << 4) +
                ((this._instanced ? 1 : 0) << 6) +
                /* keep 5 bits free */
                (this.byteStride << 12);
    };
    /** @hidden */
    VertexBuffer.prototype._rebuild = function () {
        if (!this._buffer) {
            return;
        }
        this._buffer._rebuild();
    };
    /**
     * Returns the kind of the VertexBuffer (string)
     * @returns a string
     */
    VertexBuffer.prototype.getKind = function () {
        return this._kind;
    };
    // Properties
    /**
     * Gets a boolean indicating if the VertexBuffer is updatable?
     * @returns true if the buffer is updatable
     */
    VertexBuffer.prototype.isUpdatable = function () {
        return this._buffer.isUpdatable();
    };
    /**
     * Gets current buffer's data
     * @returns a DataArray or null
     */
    VertexBuffer.prototype.getData = function () {
        return this._buffer.getData();
    };
    /**
     * Gets current buffer's data as a float array. Float data is constructed if the vertex buffer data cannot be returned directly.
     * @param totalVertices number of vertices in the buffer to take into account
     * @param forceCopy defines a boolean indicating that the returned array must be cloned upon returning it
     * @returns a float array containing vertex data
     */
    VertexBuffer.prototype.getFloatData = function (totalVertices, forceCopy) {
        var data = this.getData();
        if (!data) {
            return null;
        }
        var tightlyPackedByteStride = this.getSize() * VertexBuffer.GetTypeByteLength(this.type);
        var count = totalVertices * this.getSize();
        if (this.type !== VertexBuffer.FLOAT || this.byteStride !== tightlyPackedByteStride) {
            var copy_1 = new Float32Array(count);
            this.forEach(count, function (value, index) { return (copy_1[index] = value); });
            return copy_1;
        }
        if (!(data instanceof Array || data instanceof Float32Array) || this.byteOffset !== 0 || data.length !== count) {
            if (data instanceof Array) {
                var offset = this.byteOffset / 4;
                return data.slice(offset, offset + count);
            }
            else if (data instanceof ArrayBuffer) {
                return new Float32Array(data, this.byteOffset, count);
            }
            else {
                var offset = data.byteOffset + this.byteOffset;
                if (forceCopy) {
                    var result = new Float32Array(count);
                    var source = new Float32Array(data.buffer, offset, count);
                    result.set(source);
                    return result;
                }
                // Protect against bad data
                var remainder = offset % 4;
                if (remainder) {
                    offset = Math.max(0, offset - remainder);
                }
                return new Float32Array(data.buffer, offset, count);
            }
        }
        if (forceCopy) {
            return data.slice();
        }
        return data;
    };
    /**
     * Gets underlying native buffer
     * @returns underlying native buffer
     */
    VertexBuffer.prototype.getBuffer = function () {
        return this._buffer.getBuffer();
    };
    /**
     * Gets the stride in float32 units (i.e. byte stride / 4).
     * May not be an integer if the byte stride is not divisible by 4.
     * @returns the stride in float32 units
     * @deprecated Please use byteStride instead.
     */
    VertexBuffer.prototype.getStrideSize = function () {
        return this.byteStride / VertexBuffer.GetTypeByteLength(this.type);
    };
    /**
     * Returns the offset as a multiple of the type byte length.
     * @returns the offset in bytes
     * @deprecated Please use byteOffset instead.
     */
    VertexBuffer.prototype.getOffset = function () {
        return this.byteOffset / VertexBuffer.GetTypeByteLength(this.type);
    };
    /**
     * Returns the number of components or the byte size per vertex attribute
     * @param sizeInBytes If true, returns the size in bytes or else the size in number of components of the vertex attribute (default: false)
     * @returns the number of components
     */
    VertexBuffer.prototype.getSize = function (sizeInBytes) {
        if (sizeInBytes === void 0) { sizeInBytes = false; }
        return sizeInBytes ? this._size * VertexBuffer.GetTypeByteLength(this.type) : this._size;
    };
    /**
     * Gets a boolean indicating is the internal buffer of the VertexBuffer is instanced
     * @returns true if this buffer is instanced
     */
    VertexBuffer.prototype.getIsInstanced = function () {
        return this._instanced;
    };
    /**
     * Returns the instancing divisor, zero for non-instanced (integer).
     * @returns a number
     */
    VertexBuffer.prototype.getInstanceDivisor = function () {
        return this._instanceDivisor;
    };
    // Methods
    /**
     * Store data into the buffer. If the buffer was already used it will be either recreated or updated depending on isUpdatable property
     * @param data defines the data to store
     */
    VertexBuffer.prototype.create = function (data) {
        this._buffer.create(data);
    };
    /**
     * Updates the underlying buffer according to the passed numeric array or Float32Array.
     * This function will create a new buffer if the current one is not updatable
     * @param data defines the data to store
     */
    VertexBuffer.prototype.update = function (data) {
        this._buffer.update(data);
    };
    /**
     * Updates directly the underlying WebGLBuffer according to the passed numeric array or Float32Array.
     * Returns the directly updated WebGLBuffer.
     * @param data the new data
     * @param offset the new offset
     * @param useBytes set to true if the offset is in bytes
     */
    VertexBuffer.prototype.updateDirectly = function (data, offset, useBytes) {
        if (useBytes === void 0) { useBytes = false; }
        this._buffer.updateDirectly(data, offset, undefined, useBytes);
    };
    /**
     * Disposes the VertexBuffer and the underlying WebGLBuffer.
     */
    VertexBuffer.prototype.dispose = function () {
        if (this._ownsBuffer) {
            this._buffer.dispose();
        }
    };
    /**
     * Enumerates each value of this vertex buffer as numbers.
     * @param count the number of values to enumerate
     * @param callback the callback function called for each value
     */
    VertexBuffer.prototype.forEach = function (count, callback) {
        VertexBuffer.ForEach(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, count, this.normalized, callback);
    };
    /**
     * Deduces the stride given a kind.
     * @param kind The kind string to deduce
     * @returns The deduced stride
     */
    VertexBuffer.DeduceStride = function (kind) {
        switch (kind) {
            case VertexBuffer.UVKind:
            case VertexBuffer.UV2Kind:
            case VertexBuffer.UV3Kind:
            case VertexBuffer.UV4Kind:
            case VertexBuffer.UV5Kind:
            case VertexBuffer.UV6Kind:
                return 2;
            case VertexBuffer.NormalKind:
            case VertexBuffer.PositionKind:
                return 3;
            case VertexBuffer.ColorKind:
            case VertexBuffer.MatricesIndicesKind:
            case VertexBuffer.MatricesIndicesExtraKind:
            case VertexBuffer.MatricesWeightsKind:
            case VertexBuffer.MatricesWeightsExtraKind:
            case VertexBuffer.TangentKind:
                return 4;
            default:
                throw new Error("Invalid kind '" + kind + "'");
        }
    };
    /**
     * Gets the byte length of the given type.
     * @param type the type
     * @returns the number of bytes
     */
    VertexBuffer.GetTypeByteLength = function (type) {
        switch (type) {
            case VertexBuffer.BYTE:
            case VertexBuffer.UNSIGNED_BYTE:
                return 1;
            case VertexBuffer.SHORT:
            case VertexBuffer.UNSIGNED_SHORT:
                return 2;
            case VertexBuffer.INT:
            case VertexBuffer.UNSIGNED_INT:
            case VertexBuffer.FLOAT:
                return 4;
            default:
                throw new Error("Invalid type '".concat(type, "'"));
        }
    };
    /**
     * Enumerates each value of the given parameters as numbers.
     * @param data the data to enumerate
     * @param byteOffset the byte offset of the data
     * @param byteStride the byte stride of the data
     * @param componentCount the number of components per element
     * @param componentType the type of the component
     * @param count the number of values to enumerate
     * @param normalized whether the data is normalized
     * @param callback the callback function called for each value
     */
    VertexBuffer.ForEach = function (data, byteOffset, byteStride, componentCount, componentType, count, normalized, callback) {
        if (data instanceof Array) {
            var offset = byteOffset / 4;
            var stride = byteStride / 4;
            for (var index = 0; index < count; index += componentCount) {
                for (var componentIndex = 0; componentIndex < componentCount; componentIndex++) {
                    callback(data[offset + componentIndex], index + componentIndex);
                }
                offset += stride;
            }
        }
        else {
            var dataView = data instanceof ArrayBuffer ? new DataView(data) : new DataView(data.buffer, data.byteOffset, data.byteLength);
            var componentByteLength = VertexBuffer.GetTypeByteLength(componentType);
            for (var index = 0; index < count; index += componentCount) {
                var componentByteOffset = byteOffset;
                for (var componentIndex = 0; componentIndex < componentCount; componentIndex++) {
                    var value = VertexBuffer._GetFloatValue(dataView, componentType, componentByteOffset, normalized);
                    callback(value, index + componentIndex);
                    componentByteOffset += componentByteLength;
                }
                byteOffset += byteStride;
            }
        }
    };
    VertexBuffer._GetFloatValue = function (dataView, type, byteOffset, normalized) {
        switch (type) {
            case VertexBuffer.BYTE: {
                var value = dataView.getInt8(byteOffset);
                if (normalized) {
                    value = Math.max(value / 127, -1);
                }
                return value;
            }
            case VertexBuffer.UNSIGNED_BYTE: {
                var value = dataView.getUint8(byteOffset);
                if (normalized) {
                    value = value / 255;
                }
                return value;
            }
            case VertexBuffer.SHORT: {
                var value = dataView.getInt16(byteOffset, true);
                if (normalized) {
                    value = Math.max(value / 32767, -1);
                }
                return value;
            }
            case VertexBuffer.UNSIGNED_SHORT: {
                var value = dataView.getUint16(byteOffset, true);
                if (normalized) {
                    value = value / 65535;
                }
                return value;
            }
            case VertexBuffer.INT: {
                return dataView.getInt32(byteOffset, true);
            }
            case VertexBuffer.UNSIGNED_INT: {
                return dataView.getUint32(byteOffset, true);
            }
            case VertexBuffer.FLOAT: {
                return dataView.getFloat32(byteOffset, true);
            }
            default: {
                throw new Error("Invalid component type ".concat(type));
            }
        }
    };
    VertexBuffer._Counter = 0;
    /**
     * The byte type.
     */
    VertexBuffer.BYTE = 5120;
    /**
     * The unsigned byte type.
     */
    VertexBuffer.UNSIGNED_BYTE = 5121;
    /**
     * The short type.
     */
    VertexBuffer.SHORT = 5122;
    /**
     * The unsigned short type.
     */
    VertexBuffer.UNSIGNED_SHORT = 5123;
    /**
     * The integer type.
     */
    VertexBuffer.INT = 5124;
    /**
     * The unsigned integer type.
     */
    VertexBuffer.UNSIGNED_INT = 5125;
    /**
     * The float type.
     */
    VertexBuffer.FLOAT = 5126;
    // Enums
    /**
     * Positions
     */
    VertexBuffer.PositionKind = "position";
    /**
     * Normals
     */
    VertexBuffer.NormalKind = "normal";
    /**
     * Tangents
     */
    VertexBuffer.TangentKind = "tangent";
    /**
     * Texture coordinates
     */
    VertexBuffer.UVKind = "uv";
    /**
     * Texture coordinates 2
     */
    VertexBuffer.UV2Kind = "uv2";
    /**
     * Texture coordinates 3
     */
    VertexBuffer.UV3Kind = "uv3";
    /**
     * Texture coordinates 4
     */
    VertexBuffer.UV4Kind = "uv4";
    /**
     * Texture coordinates 5
     */
    VertexBuffer.UV5Kind = "uv5";
    /**
     * Texture coordinates 6
     */
    VertexBuffer.UV6Kind = "uv6";
    /**
     * Colors
     */
    VertexBuffer.ColorKind = "color";
    /**
     * Instance Colors
     */
    VertexBuffer.ColorInstanceKind = "instanceColor";
    /**
     * Matrix indices (for bones)
     */
    VertexBuffer.MatricesIndicesKind = "matricesIndices";
    /**
     * Matrix weights (for bones)
     */
    VertexBuffer.MatricesWeightsKind = "matricesWeights";
    /**
     * Additional matrix indices (for bones)
     */
    VertexBuffer.MatricesIndicesExtraKind = "matricesIndicesExtra";
    /**
     * Additional matrix weights (for bones)
     */
    VertexBuffer.MatricesWeightsExtraKind = "matricesWeightsExtra";
    return VertexBuffer;
}());



/***/ }),

/***/ "../../../lts/core/dist/Buffers/dataBuffer.js":
/*!****************************************************!*\
  !*** ../../../lts/core/dist/Buffers/dataBuffer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataBuffer": () => (/* binding */ DataBuffer)
/* harmony export */ });
/**
 * Class used to store gfx data (like WebGLBuffer)
 */
var DataBuffer = /** @class */ (function () {
    /**
     * Constructs the buffer
     */
    function DataBuffer() {
        /**
         * Gets or sets the number of objects referencing this buffer
         */
        this.references = 0;
        /** Gets or sets the size of the underlying buffer */
        this.capacity = 0;
        /**
         * Gets or sets a boolean indicating if the buffer contains 32bits indices
         */
        this.is32Bits = false;
        this.uniqueId = DataBuffer._Counter++;
    }
    Object.defineProperty(DataBuffer.prototype, "underlyingResource", {
        /**
         * Gets the underlying buffer
         */
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    DataBuffer._Counter = 0;
    return DataBuffer;
}());



/***/ }),

/***/ "../../../lts/core/dist/Buffers/index.js":
/*!***********************************************!*\
  !*** ../../../lts/core/dist/Buffers/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Buffer": () => (/* reexport safe */ _buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer),
/* harmony export */   "DataBuffer": () => (/* reexport safe */ _dataBuffer__WEBPACK_IMPORTED_MODULE_1__.DataBuffer),
/* harmony export */   "StorageBuffer": () => (/* reexport safe */ _storageBuffer__WEBPACK_IMPORTED_MODULE_2__.StorageBuffer),
/* harmony export */   "VertexBuffer": () => (/* reexport safe */ _buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer)
/* harmony export */ });
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer */ "../../../lts/core/dist/Buffers/buffer.js");
/* harmony import */ var _dataBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataBuffer */ "../../../lts/core/dist/Buffers/dataBuffer.js");
/* harmony import */ var _storageBuffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageBuffer */ "../../../lts/core/dist/Buffers/storageBuffer.js");





/***/ }),

/***/ "../../../lts/core/dist/Buffers/storageBuffer.js":
/*!*******************************************************!*\
  !*** ../../../lts/core/dist/Buffers/storageBuffer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageBuffer": () => (/* binding */ StorageBuffer)
/* harmony export */ });
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/constants */ "../../../lts/core/dist/Engines/constants.js");

/**
 * This class is a small wrapper around a native buffer that can be read and/or written
 */
var StorageBuffer = /** @class */ (function () {
    /**
     * Creates a new storage buffer instance
     * @param engine The engine the buffer will be created inside
     * @param size The size of the buffer in bytes
     * @param creationFlags flags to use when creating the buffer (see Constants.BUFFER_CREATIONFLAG_XXX). The BUFFER_CREATIONFLAG_STORAGE flag will be automatically added.
     */
    function StorageBuffer(engine, size, creationFlags) {
        if (creationFlags === void 0) { creationFlags = _Engines_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.BUFFER_CREATIONFLAG_READWRITE; }
        this._engine = engine;
        this._engine._storageBuffers.push(this);
        this._create(size, creationFlags);
    }
    StorageBuffer.prototype._create = function (size, creationFlags) {
        this._bufferSize = size;
        this._creationFlags = creationFlags;
        this._buffer = this._engine.createStorageBuffer(size, creationFlags);
    };
    /** @hidden */
    StorageBuffer.prototype._rebuild = function () {
        this._create(this._bufferSize, this._creationFlags);
    };
    /**
     * Gets underlying native buffer
     * @returns underlying native buffer
     */
    StorageBuffer.prototype.getBuffer = function () {
        return this._buffer;
    };
    /**
     * Updates the storage buffer
     * @param data the data used to update the storage buffer
     * @param byteOffset the byte offset of the data (optional)
     * @param byteLength the byte length of the data (optional)
     */
    StorageBuffer.prototype.update = function (data, byteOffset, byteLength) {
        if (!this._buffer) {
            return;
        }
        this._engine.updateStorageBuffer(this._buffer, data, byteOffset, byteLength);
    };
    /**
     * Reads data from the storage buffer
     * @param offset The offset in the storage buffer to start reading from (default: 0)
     * @param size  The number of bytes to read from the storage buffer (default: capacity of the buffer)
     * @param buffer The buffer to write the data we have read from the storage buffer to (optional)
     * @returns If not undefined, returns the (promise) buffer (as provided by the 4th parameter) filled with the data, else it returns a (promise) Uint8Array with the data read from the storage buffer
     */
    StorageBuffer.prototype.read = function (offset, size, buffer) {
        return this._engine.readFromStorageBuffer(this._buffer, offset, size, buffer);
    };
    /**
     * Disposes the storage buffer
     */
    StorageBuffer.prototype.dispose = function () {
        var storageBuffers = this._engine._storageBuffers;
        var index = storageBuffers.indexOf(this);
        if (index !== -1) {
            storageBuffers[index] = storageBuffers[storageBuffers.length - 1];
            storageBuffers.pop();
        }
        this._engine._releaseBuffer(this._buffer);
        this._buffer = null;
    };
    return StorageBuffer;
}());



/***/ }),

/***/ "../../../lts/core/dist/Cameras/Inputs/BaseCameraMouseWheelInput.js":
/*!**************************************************************************!*\
  !*** ../../../lts/core/dist/Cameras/Inputs/BaseCameraMouseWheelInput.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseCameraMouseWheelInput": () => (/* binding */ BaseCameraMouseWheelInput)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Misc_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Misc/decorators */ "../../../lts/core/dist/Misc/decorators.js");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Misc/observable */ "../../../lts/core/dist/Misc/observable.js");
/* harmony import */ var _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Events/pointerEvents */ "../../../lts/core/dist/Events/pointerEvents.js");
/* harmony import */ var _Misc_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Misc/tools */ "../../../lts/core/dist/Misc/tools.js");
/* harmony import */ var _Events_deviceInputEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Events/deviceInputEvents */ "../../../lts/core/dist/Events/deviceInputEvents.js");






/**
 * Base class for mouse wheel input..
 * See FollowCameraMouseWheelInput in src/Cameras/Inputs/freeCameraMouseWheelInput.ts
 * for example usage.
 */
var BaseCameraMouseWheelInput = /** @class */ (function () {
    function BaseCameraMouseWheelInput() {
        /**
         * How fast is the camera moves in relation to X axis mouseWheel events.
         * Use negative value to reverse direction.
         */
        this.wheelPrecisionX = 3.0;
        /**
         * How fast is the camera moves in relation to Y axis mouseWheel events.
         * Use negative value to reverse direction.
         */
        this.wheelPrecisionY = 3.0;
        /**
         * How fast is the camera moves in relation to Z axis mouseWheel events.
         * Use negative value to reverse direction.
         */
        this.wheelPrecisionZ = 3.0;
        /**
         * Observable for when a mouse wheel move event occurs.
         */
        this.onChangedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        /**
         * Incremental value of multiple mouse wheel movements of the X axis.
         * Should be zero-ed when read.
         */
        this._wheelDeltaX = 0;
        /**
         * Incremental value of multiple mouse wheel movements of the Y axis.
         * Should be zero-ed when read.
         */
        this._wheelDeltaY = 0;
        /**
         * Incremental value of multiple mouse wheel movements of the Z axis.
         * Should be zero-ed when read.
         */
        this._wheelDeltaZ = 0;
        /**
         * Firefox uses a different scheme to report scroll distances to other
         * browsers. Rather than use complicated methods to calculate the exact
         * multiple we need to apply, let's just cheat and use a constant.
         * https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaMode
         * https://stackoverflow.com/questions/20110224/what-is-the-height-of-a-line-in-a-wheel-event-deltamode-dom-delta-line
         */
        this._ffMultiplier = 12;
        /**
         * Different event attributes for wheel data fall into a few set ranges.
         * Some relevant but dated date here:
         * https://stackoverflow.com/questions/5527601/normalizing-mousewheel-speed-across-browsers
         */
        this._normalize = 120;
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * @param noPreventDefault Defines whether event caught by the controls
     *   should call preventdefault().
     *   (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */
    BaseCameraMouseWheelInput.prototype.attachControl = function (noPreventDefault) {
        var _this = this;
        // eslint-disable-next-line prefer-rest-params
        noPreventDefault = _Misc_tools__WEBPACK_IMPORTED_MODULE_4__.Tools.BackCompatCameraNoPreventDefault(arguments);
        this._wheel = function (pointer) {
            // sanity check - this should be a PointerWheel event.
            if (pointer.type !== _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_3__.PointerEventTypes.POINTERWHEEL) {
                return;
            }
            var event = pointer.event;
            var platformScale = event.deltaMode === _Events_deviceInputEvents__WEBPACK_IMPORTED_MODULE_5__.EventConstants.DOM_DELTA_LINE ? _this._ffMultiplier : 1; // If this happens to be set to DOM_DELTA_LINE, adjust accordingly
            if (event.deltaY !== undefined) {
                // Most recent browsers versions have delta properties.
                // Firefox >= v17  (Has WebGL >= v4)
                // Chrome >=  v31  (Has WebGL >= v8)
                // Edge >=    v12  (Has WebGl >= v12)
                // https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent
                _this._wheelDeltaX += (_this.wheelPrecisionX * platformScale * event.deltaX) / _this._normalize;
                _this._wheelDeltaY -= (_this.wheelPrecisionY * platformScale * event.deltaY) / _this._normalize;
                _this._wheelDeltaZ += (_this.wheelPrecisionZ * platformScale * event.deltaZ) / _this._normalize;
            }
            else if (event.wheelDeltaY !== undefined) {
                // Unsure whether these catch anything more. Documentation
                // online is contradictory.
                _this._wheelDeltaX += (_this.wheelPrecisionX * platformScale * event.wheelDeltaX) / _this._normalize;
                _this._wheelDeltaY -= (_this.wheelPrecisionY * platformScale * event.wheelDeltaY) / _this._normalize;
                _this._wheelDeltaZ += (_this.wheelPrecisionZ * platformScale * event.wheelDeltaZ) / _this._normalize;
            }
            else if (event.wheelDelta) {
                // IE >= v9   (Has WebGL >= v11)
                // Maybe others?
                _this._wheelDeltaY -= (_this.wheelPrecisionY * event.wheelDelta) / _this._normalize;
            }
            if (event.preventDefault) {
                if (!noPreventDefault) {
                    event.preventDefault();
                }
            }
        };
        this._observer = this.camera.getScene().onPointerObservable.add(this._wheel, _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_3__.PointerEventTypes.POINTERWHEEL);
    };
    /**
     * Detach the current controls from the specified dom element.
     */
    BaseCameraMouseWheelInput.prototype.detachControl = function () {
        if (this._observer) {
            this.camera.getScene().onPointerObservable.remove(this._observer);
            this._observer = null;
            this._wheel = null;
        }
        if (this.onChangedObservable) {
            this.onChangedObservable.clear();
        }
    };
    /**
     * Called for each rendered frame.
     */
    BaseCameraMouseWheelInput.prototype.checkInputs = function () {
        this.onChangedObservable.notifyObservers({
            wheelDeltaX: this._wheelDeltaX,
            wheelDeltaY: this._wheelDeltaY,
            wheelDeltaZ: this._wheelDeltaZ,
        });
        // Clear deltas.
        this._wheelDeltaX = 0;
        this._wheelDeltaY = 0;
        this._wheelDeltaZ = 0;
    };
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */
    BaseCameraMouseWheelInput.prototype.getClassName = function () {
        return "BaseCameraMouseWheelInput";
    };
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */
    BaseCameraMouseWheelInput.prototype.getSimpleName = function () {
        return "mousewheel";
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], BaseCameraMouseWheelInput.prototype, "wheelPrecisionX", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], BaseCameraMouseWheelInput.prototype, "wheelPrecisionY", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], BaseCameraMouseWheelInput.prototype, "wheelPrecisionZ", void 0);
    return BaseCameraMouseWheelInput;
}());



/***/ }),

/***/ "../../../lts/core/dist/Cameras/Inputs/BaseCameraPointersInput.js":
/*!************************************************************************!*\
  !*** ../../../lts/core/dist/Cameras/Inputs/BaseCameraPointersInput.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseCameraPointersInput": () => (/* binding */ BaseCameraPointersInput)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Misc_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Misc/decorators */ "../../../lts/core/dist/Misc/decorators.js");
/* harmony import */ var _Misc_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Misc/tools */ "../../../lts/core/dist/Misc/tools.js");
/* harmony import */ var _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Events/pointerEvents */ "../../../lts/core/dist/Events/pointerEvents.js");




/**
 * Base class for Camera Pointer Inputs.
 * See FollowCameraPointersInput in src/Cameras/Inputs/followCameraPointersInput.ts
 * for example usage.
 */
var BaseCameraPointersInput = /** @class */ (function () {
    function BaseCameraPointersInput() {
        this._currentActiveButton = -1;
        /**
         * Defines the buttons associated with the input to handle camera move.
         */
        this.buttons = [0, 1, 2];
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */
    BaseCameraPointersInput.prototype.attachControl = function (noPreventDefault) {
        var _this = this;
        // eslint-disable-next-line prefer-rest-params
        noPreventDefault = _Misc_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.BackCompatCameraNoPreventDefault(arguments);
        var engine = this.camera.getEngine();
        var element = engine.getInputElement();
        var previousPinchSquaredDistance = 0;
        var previousMultiTouchPanPosition = null;
        this._pointA = null;
        this._pointB = null;
        this._altKey = false;
        this._ctrlKey = false;
        this._metaKey = false;
        this._shiftKey = false;
        this._buttonsPressed = 0;
        this._pointerInput = function (p) {
            var evt = p.event;
            var isTouch = evt.pointerType === "touch";
            if (engine.isInVRExclusivePointerMode) {
                return;
            }
            if (p.type !== _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_3__.PointerEventTypes.POINTERMOVE && _this.buttons.indexOf(evt.button) === -1) {
                return;
            }
            var srcElement = (evt.srcElement || evt.target);
            _this._altKey = evt.altKey;
            _this._ctrlKey = evt.ctrlKey;
            _this._metaKey = evt.metaKey;
            _this._shiftKey = evt.shiftKey;
            _this._buttonsPressed = evt.buttons;
            if (engine.isPointerLock) {
                var offsetX = evt.movementX || evt.mozMovementX || evt.webkitMovementX || evt.msMovementX || 0;
                var offsetY = evt.movementY || evt.mozMovementY || evt.webkitMovementY || evt.msMovementY || 0;
                _this.onTouch(null, offsetX, offsetY);
                _this._pointA = null;
                _this._pointB = null;
            }
            else if (p.type === _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_3__.PointerEventTypes.POINTERDOWN && (_this._currentActiveButton === -1 || isTouch)) {
                try {
                    srcElement === null || srcElement === void 0 ? void 0 : srcElement.setPointerCapture(evt.pointerId);
                }
                catch (e) {
                    //Nothing to do with the error. Execution will continue.
                }
                if (_this._pointA === null) {
                    _this._pointA = {
                        x: evt.clientX,
                        y: evt.clientY,
                        pointerId: evt.pointerId,
                        type: evt.pointerType,
                    };
                }
                else if (_this._pointB === null) {
                    _this._pointB = {
                        x: evt.clientX,
                        y: evt.clientY,
                        pointerId: evt.pointerId,
                        type: evt.pointerType,
                    };
                }
                if (_this._currentActiveButton === -1 && !isTouch) {
                    _this._currentActiveButton = evt.button;
                }
                _this.onButtonDown(evt);
                if (!noPreventDefault) {
                    evt.preventDefault();
                    element && element.focus();
                }
            }
            else if (p.type === _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_3__.PointerEventTypes.POINTERDOUBLETAP) {
                _this.onDoubleTap(evt.pointerType);
            }
            else if (p.type === _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_3__.PointerEventTypes.POINTERUP && (_this._currentActiveButton === evt.button || isTouch)) {
                try {
                    srcElement === null || srcElement === void 0 ? void 0 : srcElement.releasePointerCapture(evt.pointerId);
                }
                catch (e) {
                    //Nothing to do with the error.
                }
                if (!isTouch) {
                    _this._pointB = null; // Mouse and pen are mono pointer
                }
                //would be better to use pointers.remove(evt.pointerId) for multitouch gestures,
                //but emptying completely pointers collection is required to fix a bug on iPhone :
                //when changing orientation while pinching camera,
                //one pointer stay pressed forever if we don't release all pointers
                //will be ok to put back pointers.remove(evt.pointerId); when iPhone bug corrected
                if (engine._badOS) {
                    _this._pointA = _this._pointB = null;
                }
                else {
                    //only remove the impacted pointer in case of multitouch allowing on most
                    //platforms switching from rotate to zoom and pan seamlessly.
                    if (_this._pointB && _this._pointA && _this._pointA.pointerId == evt.pointerId) {
                        _this._pointA = _this._pointB;
                        _this._pointB = null;
                    }
                    else if (_this._pointA && _this._pointB && _this._pointB.pointerId == evt.pointerId) {
                        _this._pointB = null;
                    }
                    else {
                        _this._pointA = _this._pointB = null;
                    }
                }
                if (previousPinchSquaredDistance !== 0 || previousMultiTouchPanPosition) {
                    // Previous pinch data is populated but a button has been lifted
                    // so pinch has ended.
                    _this.onMultiTouch(_this._pointA, _this._pointB, previousPinchSquaredDistance, 0, // pinchSquaredDistance
                    previousMultiTouchPanPosition, null // multiTouchPanPosition
                    );
                    previousPinchSquaredDistance = 0;
                    previousMultiTouchPanPosition = null;
                }
                _this._currentActiveButton = -1;
                _this.onButtonUp(evt);
                if (!noPreventDefault) {
                    evt.preventDefault();
                }
            }
            else if (p.type === _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_3__.PointerEventTypes.POINTERMOVE) {
                if (!noPreventDefault) {
                    evt.preventDefault();
                }
                // One button down
                if (_this._pointA && _this._pointB === null) {
                    var offsetX = evt.clientX - _this._pointA.x;
                    var offsetY = evt.clientY - _this._pointA.y;
                    _this.onTouch(_this._pointA, offsetX, offsetY);
                    _this._pointA.x = evt.clientX;
                    _this._pointA.y = evt.clientY;
                }
                // Two buttons down: pinch
                else if (_this._pointA && _this._pointB) {
                    var ed = _this._pointA.pointerId === evt.pointerId ? _this._pointA : _this._pointB;
                    ed.x = evt.clientX;
                    ed.y = evt.clientY;
                    var distX = _this._pointA.x - _this._pointB.x;
                    var distY = _this._pointA.y - _this._pointB.y;
                    var pinchSquaredDistance = distX * distX + distY * distY;
                    var multiTouchPanPosition = {
                        x: (_this._pointA.x + _this._pointB.x) / 2,
                        y: (_this._pointA.y + _this._pointB.y) / 2,
                        pointerId: evt.pointerId,
                        type: p.type,
                    };
                    _this.onMultiTouch(_this._pointA, _this._pointB, previousPinchSquaredDistance, pinchSquaredDistance, previousMultiTouchPanPosition, multiTouchPanPosition);
                    previousMultiTouchPanPosition = multiTouchPanPosition;
                    previousPinchSquaredDistance = pinchSquaredDistance;
                }
            }
        };
        this._observer = this.camera
            .getScene()
            .onPointerObservable.add(this._pointerInput, _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_3__.PointerEventTypes.POINTERDOWN | _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_3__.PointerEventTypes.POINTERUP | _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_3__.PointerEventTypes.POINTERMOVE | _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_3__.PointerEventTypes.POINTERDOUBLETAP);
        this._onLostFocus = function () {
            _this._pointA = _this._pointB = null;
            previousPinchSquaredDistance = 0;
            previousMultiTouchPanPosition = null;
            _this.onLostFocus();
        };
        this._contextMenuBind = this.onContextMenu.bind(this);
        element && element.addEventListener("contextmenu", this._contextMenuBind, false);
        var hostWindow = this.camera.getScene().getEngine().getHostWindow();
        if (hostWindow) {
            _Misc_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.RegisterTopRootEvents(hostWindow, [{ name: "blur", handler: this._onLostFocus }]);
        }
    };
    /**
     * Detach the current controls from the specified dom element.
     */
    BaseCameraPointersInput.prototype.detachControl = function () {
        if (this._onLostFocus) {
            var hostWindow = this.camera.getScene().getEngine().getHostWindow();
            if (hostWindow) {
                _Misc_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.UnregisterTopRootEvents(hostWindow, [{ name: "blur", handler: this._onLostFocus }]);
            }
        }
        if (this._observer) {
            this.camera.getScene().onPointerObservable.remove(this._observer);
            this._observer = null;
            if (this._contextMenuBind) {
                var inputElement = this.camera.getScene().getEngine().getInputElement();
                inputElement && inputElement.removeEventListener("contextmenu", this._contextMenuBind);
            }
            this._onLostFocus = null;
        }
        this._altKey = false;
        this._ctrlKey = false;
        this._metaKey = false;
        this._shiftKey = false;
        this._buttonsPressed = 0;
        this._currentActiveButton = -1;
    };
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */
    BaseCameraPointersInput.prototype.getClassName = function () {
        return "BaseCameraPointersInput";
    };
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */
    BaseCameraPointersInput.prototype.getSimpleName = function () {
        return "pointers";
    };
    /**
     * Called on pointer POINTERDOUBLETAP event.
     * Override this method to provide functionality on POINTERDOUBLETAP event.
     * @param type
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    BaseCameraPointersInput.prototype.onDoubleTap = function (type) { };
    /**
     * Called on pointer POINTERMOVE event if only a single touch is active.
     * Override this method to provide functionality.
     * @param point
     * @param offsetX
     * @param offsetY
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    BaseCameraPointersInput.prototype.onTouch = function (point, offsetX, offsetY) { };
    /**
     * Called on pointer POINTERMOVE event if multiple touches are active.
     * Override this method to provide functionality.
     * @param _pointA
     * @param _pointB
     * @param previousPinchSquaredDistance
     * @param pinchSquaredDistance
     * @param previousMultiTouchPanPosition
     * @param multiTouchPanPosition
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    BaseCameraPointersInput.prototype.onMultiTouch = function (_pointA, _pointB, previousPinchSquaredDistance, pinchSquaredDistance, previousMultiTouchPanPosition, multiTouchPanPosition) { };
    /**
     * Called on JS contextmenu event.
     * Override this method to provide functionality.
     * @param evt
     */
    BaseCameraPointersInput.prototype.onContextMenu = function (evt) {
        evt.preventDefault();
    };
    /**
     * Called each time a new POINTERDOWN event occurs. Ie, for each button
     * press.
     * Override this method to provide functionality.
     * @param evt
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    BaseCameraPointersInput.prototype.onButtonDown = function (evt) { };
    /**
     * Called each time a new POINTERUP event occurs. Ie, for each button
     * release.
     * Override this method to provide functionality.
     * @param evt
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    BaseCameraPointersInput.prototype.onButtonUp = function (evt) { };
    /**
     * Called when window becomes inactive.
     * Override this method to provide functionality.
     */
    BaseCameraPointersInput.prototype.onLostFocus = function () { };
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], BaseCameraPointersInput.prototype, "buttons", void 0);
    return BaseCameraPointersInput;
}());



/***/ }),

/***/ "../../../lts/core/dist/Cameras/Inputs/arcRotateCameraGamepadInput.js":
/*!****************************************************************************!*\
  !*** ../../../lts/core/dist/Cameras/Inputs/arcRotateCameraGamepadInput.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArcRotateCameraGamepadInput": () => (/* binding */ ArcRotateCameraGamepadInput)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Misc_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Misc/decorators */ "../../../lts/core/dist/Misc/decorators.js");
/* harmony import */ var _Cameras_cameraInputsManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Cameras/cameraInputsManager */ "../../../lts/core/dist/Cameras/cameraInputsManager.js");
/* harmony import */ var _Gamepads_gamepad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Gamepads/gamepad */ "../../../lts/core/dist/Gamepads/gamepad.js");




/**
 * Manage the gamepad inputs to control an arc rotate camera.
 * @see https://doc.babylonjs.com/how_to/customizing_camera_inputs
 */
var ArcRotateCameraGamepadInput = /** @class */ (function () {
    function ArcRotateCameraGamepadInput() {
        /**
         * Defines the gamepad rotation sensibility.
         * This is the threshold from when rotation starts to be accounted for to prevent jittering.
         */
        this.gamepadRotationSensibility = 80;
        /**
         * Defines the gamepad move sensibility.
         * This is the threshold from when moving starts to be accounted for for to prevent jittering.
         */
        this.gamepadMoveSensibility = 40;
        this._yAxisScale = 1.0;
    }
    Object.defineProperty(ArcRotateCameraGamepadInput.prototype, "invertYAxis", {
        /**
         * Gets or sets a boolean indicating that Yaxis (for right stick) should be inverted
         */
        get: function () {
            return this._yAxisScale !== 1.0;
        },
        set: function (value) {
            this._yAxisScale = value ? -1.0 : 1.0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Attach the input controls to a specific dom element to get the input from.
     */
    ArcRotateCameraGamepadInput.prototype.attachControl = function () {
        var _this = this;
        var manager = this.camera.getScene().gamepadManager;
        this._onGamepadConnectedObserver = manager.onGamepadConnectedObservable.add(function (gamepad) {
            if (gamepad.type !== _Gamepads_gamepad__WEBPACK_IMPORTED_MODULE_3__.Gamepad.POSE_ENABLED) {
                // prioritize XBOX gamepads.
                if (!_this.gamepad || gamepad.type === _Gamepads_gamepad__WEBPACK_IMPORTED_MODULE_3__.Gamepad.XBOX) {
                    _this.gamepad = gamepad;
                }
            }
        });
        this._onGamepadDisconnectedObserver = manager.onGamepadDisconnectedObservable.add(function (gamepad) {
            if (_this.gamepad === gamepad) {
                _this.gamepad = null;
            }
        });
        this.gamepad = manager.getGamepadByType(_Gamepads_gamepad__WEBPACK_IMPORTED_MODULE_3__.Gamepad.XBOX);
    };
    /**
     * Detach the current controls from the specified dom element.
     */
    ArcRotateCameraGamepadInput.prototype.detachControl = function () {
        this.camera.getScene().gamepadManager.onGamepadConnectedObservable.remove(this._onGamepadConnectedObserver);
        this.camera.getScene().gamepadManager.onGamepadDisconnectedObservable.remove(this._onGamepadDisconnectedObserver);
        this.gamepad = null;
    };
    /**
     * Update the current camera state depending on the inputs that have been used this frame.
     * This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.
     */
    ArcRotateCameraGamepadInput.prototype.checkInputs = function () {
        if (this.gamepad) {
            var camera = this.camera;
            var rsValues = this.gamepad.rightStick;
            if (rsValues) {
                if (rsValues.x != 0) {
                    var normalizedRX = rsValues.x / this.gamepadRotationSensibility;
                    if (normalizedRX != 0 && Math.abs(normalizedRX) > 0.005) {
                        camera.inertialAlphaOffset += normalizedRX;
                    }
                }
                if (rsValues.y != 0) {
                    var normalizedRY = (rsValues.y / this.gamepadRotationSensibility) * this._yAxisScale;
                    if (normalizedRY != 0 && Math.abs(normalizedRY) > 0.005) {
                        camera.
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@cubejs-client/core'), require('rxjs/operators'), require('fast-deep-equal')) :
    typeof define === 'function' && define.amd ? define('@cubejs-client/ngx', ['exports', '@angular/core', 'rxjs', '@cubejs-client/core', 'rxjs/operators', 'fast-deep-equal'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["cubejs-client"] = global["cubejs-client"] || {}, global["cubejs-client"].ngx = {}), global.ng.core, global.rxjs, global.cubejs, global.rxjs.operators, global.equal));
})(this, (function (exports, core, rxjs, cubejs, operators, equal) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var cubejs__default = /*#__PURE__*/_interopDefaultLegacy(cubejs);
    var equal__default = /*#__PURE__*/_interopDefaultLegacy(equal);

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
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
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var CubejsClient = /** @class */ (function () {
        /**
         * @param {?} config
         */
        function CubejsClient(config) {
            var _this = this;
            this.config = config;
            this.ready$ = new rxjs.BehaviorSubject(false);
            if (this.config instanceof rxjs.Observable) {
                this.config.subscribe(( /**
                 * @return {?}
                 */function () {
                    _this.ready$.next(true);
                }));
            }
            else {
                this.ready$.next(true);
            }
        }
        /**
         * @private
         * @return {?}
         */
        CubejsClient.prototype.apiInstace = function () {
            var _this = this;
            if (!this.cubeJsApi) {
                if (this.config instanceof rxjs.Observable) {
                    this.config.subscribe(( /**
                     * @param {?} config
                     * @return {?}
                     */function (config) {
                        _this.cubeJsApi = cubejs__default["default"](config.token, config.options);
                        if (!_this.cubeJsApi) {
                            throw new Error('Cannot create CubejsApi instance. Please check that the config is passed correctly and contains all required options.');
                        }
                    }));
                }
                else {
                    this.cubeJsApi = cubejs__default["default"](this.config.token, this.config.options);
                }
            }
            return this.cubeJsApi;
        };
        /**
         * @param {?} query
         * @param {?=} options
         * @return {?}
         */
        CubejsClient.prototype.load = function (query, options) {
            return rxjs.from(( /** @type {?} */(this.apiInstace().load(query, options))));
        };
        /**
         * @param {?} query
         * @param {?=} options
         * @return {?}
         */
        CubejsClient.prototype.sql = function (query, options) {
            return rxjs.from(this.apiInstace().sql(query, options));
        };
        /**
         * @param {?} query
         * @param {?=} options
         * @return {?}
         */
        CubejsClient.prototype.dryRun = function (query, options) {
            return rxjs.from(this.apiInstace().dryRun(query, options));
        };
        /**
         * @param {?=} options
         * @return {?}
         */
        CubejsClient.prototype.meta = function (options) {
            return rxjs.from(this.apiInstace().meta(options));
        };
        /**
         * @param {?} query
         * @param {?=} params
         * @return {?}
         */
        CubejsClient.prototype.watch = function (query, params) {
            var _this = this;
            if (params === void 0) { params = {}; }
            return new rxjs.Observable(( /**
             * @param {?} observer
             * @return {?}
             */function (observer) { return query.subscribe({
                next: ( /**
                 * @param {?} query
                 * @return {?}
                 */function (query) { return __awaiter(_this, void 0, void 0, function () {
                    var resultSet;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.apiInstace().load(query, params)];
                            case 1:
                                resultSet = _a.sent();
                                observer.next(resultSet);
                                return [2 /*return*/];
                        }
                    });
                }); }),
            }); }));
        };
        return CubejsClient;
    }());
    CubejsClient.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    CubejsClient.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['config',] }] }
    ]; };
    if (false) {
        /** @type {?} */
        CubejsClient.prototype.ready$;
        /**
         * @type {?}
         * @private
         */
        CubejsClient.prototype.cubeJsApi;
        /**
         * @type {?}
         * @private
         */
        CubejsClient.prototype.config;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CubejsClientModule = /** @class */ (function () {
        function CubejsClientModule() {
        }
        /**
         * @param {?} config
         * @return {?}
         */
        CubejsClientModule.forRoot = function (config) {
            return {
                ngModule: CubejsClientModule,
                providers: [
                    CubejsClient,
                    {
                        provide: 'config',
                        useValue: config,
                    },
                ],
            };
        };
        return CubejsClientModule;
    }());
    CubejsClientModule.decorators = [
        { type: core.NgModule, args: [{
                    providers: [CubejsClient],
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: src/query-builder/common.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var StateSubject = /** @class */ (function () {
        /**
         * @param {?} value
         */
        function StateSubject(value) {
            this.subject = new rxjs.BehaviorSubject(value);
        }
        /**
         * @return {?}
         */
        StateSubject.prototype.get = function () {
            return this.subject.getValue();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        StateSubject.prototype.set = function (value) {
            this.subject.next(value);
        };
        return StateSubject;
    }());
    if (false) {
        /** @type {?} */
        StateSubject.prototype.subject;
    }

    var BaseMember = /** @class */ (function () {
        /**
         * @param {?} query
         * @param {?} field
         */
        function BaseMember(query, field) {
            this.query = query;
            this.field = field;
        }
        Object.defineProperty(BaseMember.prototype, "members", {
            /**
             * @private
             * @return {?}
             */
            get: function () {
                return this.query.asCubeQuery()[this.field] || [];
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} name
         * @return {?}
         */
        BaseMember.prototype.add = function (name) {
            var _b;
            this.query.setPartialQuery((_b = {},
                _b[this.field] = __spread(this.members, [name]),
                _b));
        };
        /**
         * @param {?} name
         * @param {?} replaceWithName
         * @return {?}
         */
        BaseMember.prototype.replace = function (name, replaceWithName) {
            var _b;
            this.query.setPartialQuery((_b = {},
                _b[this.field] = this.members.map(( /**
                 * @param {?} currentName
                 * @return {?}
                 */function (currentName) { return currentName === name ? replaceWithName : currentName; })),
                _b));
        };
        /**
         * @param {?} by
         * @return {?}
         */
        BaseMember.prototype.remove = function (by) {
            var _b;
            this.query.setPartialQuery((_b = {},
                _b[this.field] = this.query
                    .asCubeQuery()[this.field].filter(( /**
             * @param {?} currentName
             * @param {?} index
             * @return {?}
             */function (currentName, index) {
                    if (typeof by === 'string') {
                        return currentName !== by;
                    }
                    return index !== by;
                })),
                _b));
        };
        /**
         * @param {?} members
         * @return {?}
         */
        BaseMember.prototype.set = function (members) {
            var _b;
            this.query.setPartialQuery((_b = {},
                _b[this.field] = members,
                _b));
        };
        /**
         * @return {?}
         */
        BaseMember.prototype.asArray = function () {
            var _this = this;
            return (this.query.asCubeQuery()[this.field] || []).map(( /**
             * @param {?} name
             * @return {?}
             */function (name) { return _this.query.meta.resolveMember(name, _this.field); }));
        };
        return BaseMember;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        BaseMember.prototype.query;
        /**
         * @type {?}
         * @private
         */
        BaseMember.prototype.field;
    }
    var TimeDimensionMember = /** @class */ (function () {
        /**
         * @param {?} query
         */
        function TimeDimensionMember(query) {
            this.query = query;
        }
        Object.defineProperty(TimeDimensionMember.prototype, "members", {
            /**
             * @private
             * @return {?}
             */
            get: function () {
                return this.query.asCubeQuery().timeDimensions || [];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TimeDimensionMember.prototype, "granularity", {
            /**
             * @return {?}
             */
            get: function () {
                var _a;
                return (_a = this.members[0]) === null || _a === void 0 ? void 0 : _a.granularity;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} by
         * @param {?} updateWith
         * @return {?}
         */
        TimeDimensionMember.prototype.updateTimeDimension = function (by, updateWith) {
            /** @type {?} */
            var timeDimensions = this.members.map(( /**
             * @param {?} td
             * @param {?} index
             * @return {?}
             */function (td, index) {
                if (td.dimension === by || index === by) {
                    return Object.assign(Object.assign({}, td), updateWith);
                }
                return td;
            }));
            this.query.setPartialQuery({
                timeDimensions: timeDimensions,
            });
        };
        /**
         * @param {?} name
         * @return {?}
         */
        TimeDimensionMember.prototype.add = function (name) {
            this.query.setPartialQuery({
                timeDimensions: [
                    {
                        dimension: name,
                    },
                ],
            });
        };
        /**
         * @param {?} name
         * @return {?}
         */
        TimeDimensionMember.prototype.remove = function (name) {
            this.query.setPartialQuery({
                timeDimensions: this.members.filter(( /**
                 * @param {?} __0
                 * @return {?}
                 */function (_b) {
                    var dimension = _b.dimension;
                    return dimension !== name;
                })),
            });
        };
        /**
         * @param {?} timeDimensions
         * @return {?}
         */
        TimeDimensionMember.prototype.set = function (timeDimensions) {
            this.query.setPartialQuery({
                timeDimensions: timeDimensions,
            });
        };
        /**
         * @param {?} by
         * @param {?} dateRange
         * @return {?}
         */
        TimeDimensionMember.prototype.setDateRange = function (by, dateRange) {
            this.updateTimeDimension(by, { dateRange: dateRange });
        };
        /**
         * @param {?} by
         * @param {?} granularity
         * @return {?}
         */
        TimeDimensionMember.prototype.setGranularity = function (by, granularity) {
            this.updateTimeDimension(by, { granularity: granularity });
        };
        /**
         * @return {?}
         */
        TimeDimensionMember.prototype.asArray = function () {
            var _this = this;
            return (this.query.asCubeQuery().timeDimensions || []).map(( /**
             * @param {?} td
             * @return {?}
             */function (td) {
                return Object.assign(Object.assign({}, _this.query.meta.resolveMember(td.dimension, 'dimensions')), td);
            }));
        };
        return TimeDimensionMember;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TimeDimensionMember.prototype.query;
    }
    var Order = /** @class */ (function () {
        /**
         * @param {?} query
         */
        function Order(query) {
            this.query = query;
            this.orderMembers = new rxjs.BehaviorSubject([]);
            this.query.subject.subscribe(this.handleQueryChange.bind(this));
            this.orderMembers.subscribe(this.handleOrderMembersChange.bind(this));
        }
        /**
         * @private
         * @param {?} orderMembers
         * @return {?}
         */
        Order.prototype.handleOrderMembersChange = function (orderMembers) {
            /** @type {?} */
            var order = ( /** @type {?} */(orderMembers
                .filter(( /**
         * @param {?} __0
         * @return {?}
         */function (_b) {
                var order = _b.order;
                return order !== 'none';
            }))
                .reduce(( /**
         * @param {?} memo
         * @param {?} __1
         * @return {?}
         */function (memo, _b) {
                var _c;
                var id = _b.id, order = _b.order;
                return (Object.assign(Object.assign({}, memo), (_c = {}, _c[id] = order, _c)));
            }), {})));
            if (!equal__default["default"](order, this.asObject())) {
                this.query.setPartialQuery({ order: order });
            }
        };
        /**
         * @private
         * @return {?}
         */
        Order.prototype.handleQueryChange = function () {
            var _this = this;
            this.orderMembers.next(__spread(this.query.measures.asArray(), this.query.dimensions.asArray(), this.query.timeDimensions.asArray()).map(( /**
             * @param {?} __0
             * @return {?}
             */function (_b) {
                var name = _b.name, title = _b.title;
                return {
                    id: name,
                    order: _this.of(name),
                    title: title,
                };
            })));
        };
        /**
         * @param {?} id
         * @param {?} order
         * @return {?}
         */
        Order.prototype.setMemberOrder = function (id, order) {
            this.orderMembers.next(this.orderMembers.getValue().map(( /**
             * @param {?} orderMember
             * @return {?}
             */function (orderMember) {
                if (orderMember.id === id) {
                    return Object.assign(Object.assign({}, orderMember), { order: order });
                }
                return orderMember;
            })));
        };
        /**
         * @param {?} sourceIndex
         * @param {?} destinationIndex
         * @return {?}
         */
        Order.prototype.reorder = function (sourceIndex, destinationIndex) {
            this.orderMembers.next(cubejs.moveItemInArray(this.orderMembers.getValue(), sourceIndex, destinationIndex));
        };
        /**
         * @param {?} member
         * @return {?}
         */
        Order.prototype.of = function (member) {
            return (this.query.asCubeQuery().order || {})[member] || 'none';
        };
        /**
         * @param {?} order
         * @return {?}
         */
        Order.prototype.set = function (order) {
            this.query.setPartialQuery({ order: order });
        };
        /**
         * @return {?}
         */
        Order.prototype.asArray = function () {
            if (Array.isArray(this.query.asCubeQuery().order)) {
                return ( /** @type {?} */(this.query.asCubeQuery().order));
            }
            return Object.entries(this.query.asCubeQuery().order || {});
        };
        /**
         * @return {?}
         */
        Order.prototype.asObject = function () {
            return this.asArray().reduce(( /**
             * @param {?} memo
             * @param {?} __1
             * @return {?}
             */function (memo, _b) {
                var _c;
                var _d = __read(_b, 2), key = _d[0], value = _d[1];
                return (Object.assign(Object.assign({}, memo), (_c = {}, _c[key] = value, _c)));
            }), {});
        };
        return Order;
    }());
    if (false) {
        /** @type {?} */
        Order.prototype.orderMembers;
        /**
         * @type {?}
         * @private
         */
        Order.prototype.query;
    }
    var FilterMember = /** @class */ (function () {
        /**
         * @param {?} query
         */
        function FilterMember(query) {
            this.query = query;
        }
        Object.defineProperty(FilterMember.prototype, "filters", {
            /**
             * @private
             * @return {?}
             */
            get: function () {
                // TODO: update this type assertion once the QueryBuilder supports logical and/or
                return ( /** @type {?} */((this.query.asCubeQuery().filters || [])));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} by
         * @param {?} updateWith
         * @return {?}
         */
        FilterMember.prototype.update = function (by, updateWith) {
            /** @type {?} */
            var filters = this.filters.map(( /**
             * @param {?} filter
             * @param {?} index
             * @return {?}
             */function (filter, index) {
                if (index === by || filter.member === by || filter.dimension === by) {
                    return Object.assign(Object.assign({}, filter), updateWith);
                }
                return filter;
            }));
            this.query.setPartialQuery({
                filters: ( /** @type {?} */(filters)),
            });
        };
        /**
         * @param {?} filter
         * @return {?}
         */
        FilterMember.prototype.add = function (filter) {
            this.query.setPartialQuery({
                filters: __spread(this.filters, [filter]),
            });
        };
        /**
         * @param {?} by
         * @return {?}
         */
        FilterMember.prototype.remove = function (by) {
            this.query.setPartialQuery({
                filters: this.filters.filter(( /**
                 * @param {?} filter
                 * @param {?} index
                 * @return {?}
                 */function (filter, index) {
                    if (filter.member === by || filter.dimension === by || index === by) {
                        return false;
                    }
                    return true;
                })),
            });
        };
        /**
         * @param {?} filters
         * @return {?}
         */
        FilterMember.prototype.set = function (filters) {
            this.query.setPartialQuery({
                filters: filters,
            });
        };
        /**
         * @param {?} name
         * @param {?} replaceWithName
         * @return {?}
         */
        FilterMember.prototype.replace = function (name, replaceWithName) {
            this.query.setPartialQuery({
                filters: this.filters.map(( /**
                 * @param {?} filter
                 * @return {?}
                 */function (filter) {
                    var _b;
                    /** @type {?} */
                    var field = filter.member ? 'member' : 'dimension';
                    return filter.member === name || filter.dimension === name
                        ? Object.assign(Object.assign({}, filter), (_b = {}, _b[field] = replaceWithName, _b)) : filter;
                })),
            });
        };
        /**
         * @return {?}
         */
        FilterMember.prototype.asArray = function () {
            var _this = this;
            return this.filters.map(( /**
             * @param {?} filter
             * @return {?}
             */function (filter) {
                return Object.assign(Object.assign(Object.assign({}, _this.query.meta.resolveMember(filter.member || filter.dimension, [
                    'dimensions',
                    'measures',
                ])), { operators: _this.query.meta.filterOperatorsForMember(filter.member || filter.dimension, ['dimensions', 'measures']) }), filter);
            }));
        };
        return FilterMember;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FilterMember.prototype.query;
    }

    /** @enum {string} */
    var MemberType = {
        Measures: "measures",
        Dimensions: "dimensions",
        Segments: "segments",
        TimeDimensions: "timeDimensions",
        Filters: "filters",
        Order: "order",
    };
    var Query = /** @class */ (function (_super) {
        __extends(Query, _super);
        /**
         * @param {?} meta
         * @param {?=} _onBeforeChange
         */
        function Query(meta, _onBeforeChange) {
            if (_onBeforeChange === void 0) { _onBeforeChange = ( /**
             * @param {?} newQuery
             * @return {?}
             */function (newQuery) { return newQuery; }); }
            var _this = _super.call(this, {}) || this;
            _this.meta = meta;
            _this._onBeforeChange = _onBeforeChange;
            _this.init();
            return _this;
        }
        /**
         * @private
         * @return {?}
         */
        Query.prototype.init = function () {
            this.measures = new BaseMember(this, MemberType.Measures);
            this.dimensions = new BaseMember(this, MemberType.Dimensions);
            this.segments = new BaseMember(this, MemberType.Segments);
            this.timeDimensions = new TimeDimensionMember(this);
            this.filters = new FilterMember(this);
            this.order = new Order(this);
        };
        /**
         * @return {?}
         */
        Query.prototype.asCubeQuery = function () {
            return this.subject.getValue() || {};
        };
        /**
         * @param {?} query
         * @return {?}
         */
        Query.prototype.setQuery = function (query) {
            this.subject.next(this._onBeforeChange(query, this.subject.getValue(), this));
        };
        /**
         * @param {?} partialQuery
         * @return {?}
         */
        Query.prototype.setPartialQuery = function (partialQuery) {
            this.subject.next(this._onBeforeChange(Object.assign(Object.assign({}, this.subject.getValue()), partialQuery), this.subject.getValue(), this));
        };
        /**
         * @param {?} limit
         * @return {?}
         */
        Query.prototype.setLimit = function (limit) {
            this.setPartialQuery({ limit: limit });
        };
        /**
         * @return {?}
         */
        Query.prototype.isPresent = function () {
            return cubejs.isQueryPresent(this.asCubeQuery());
        };
        return Query;
    }(StateSubject));
    if (false) {
        /** @type {?} */
        Query.prototype.measures;
        /** @type {?} */
        Query.prototype.dimensions;
        /** @type {?} */
        Query.prototype.segments;
        /** @type {?} */
        Query.prototype.timeDimensions;
        /** @type {?} */
        Query.prototype.filters;
        /** @type {?} */
        Query.prototype.order;
        /** @type {?} */
        Query.prototype.meta;
        /**
         * @type {?}
         * @private
         */
        Query.prototype._onBeforeChange;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/query-builder/builder-meta.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BuilderMeta = /** @class */ (function () {
        /**
         * @param {?} meta
         */
        function BuilderMeta(meta) {
            this.meta = meta;
            this.mapMeta();
        }
        /**
         * @private
         * @return {?}
         */
        BuilderMeta.prototype.mapMeta = function () {
            var _this = this;
            /** @type {?} */
            var allDimensions = ( /** @type {?} */((this.meta.membersForQuery(null, 'dimensions'))));
            this.measures = ( /** @type {?} */(this.meta.membersForQuery(null, 'measures')));
            this.segments = this.meta.membersForQuery(null, 'segments');
            this.dimensions = allDimensions.filter(( /**
             * @param {?} __0
             * @return {?}
             */function (_a) {
                var type = _a.type;
                return type !== 'time';
            }));
            this.timeDimensions = allDimensions.filter(( /**
             * @param {?} __0
             * @return {?}
             */function (_a) {
                var type = _a.type;
                return type === 'time';
            }));
            this.filters = __spread(allDimensions, this.measures).map(( /**
             * @param {?} member
             * @return {?}
             */function (member) {
                return Object.assign(Object.assign({}, member), { operators: _this.meta.filterOperatorsForMember(member.name, [
                        'dimensions',
                        'measures',
                    ]) });
            }));
        };
        return BuilderMeta;
    }());
    if (false) {
        /** @type {?} */
        BuilderMeta.prototype.measures;
        /** @type {?} */
        BuilderMeta.prototype.dimensions;
        /** @type {?} */
        BuilderMeta.prototype.segments;
        /** @type {?} */
        BuilderMeta.prototype.timeDimensions;
        /** @type {?} */
        BuilderMeta.prototype.filters;
        /** @type {?} */
        BuilderMeta.prototype.meta;
    }

    var PivotConfig = /** @class */ (function (_super) {
        __extends(PivotConfig, _super);
        /**
         * @param {?} pivotConfig
         */
        function PivotConfig(pivotConfig) {
            return _super.call(this, pivotConfig) || this;
        }
        /**
         * @param {?} sourceIndex
         * @param {?} destinationIndex
         * @param {?} sourceAxis
         * @param {?} destinationAxis
         * @return {?}
         */
        PivotConfig.prototype.moveItem = function (sourceIndex, destinationIndex, sourceAxis, destinationAxis) {
            this.subject.next(cubejs.movePivotItem(this.get(), sourceIndex, destinationIndex, sourceAxis, destinationAxis));
        };
        /**
         * @param {?} fillMissingDates
         * @return {?}
         */
        PivotConfig.prototype.setFillMissingDates = function (fillMissingDates) {
            this.subject.next(Object.assign(Object.assign({}, this.get()), { fillMissingDates: fillMissingDates }));
        };
        return PivotConfig;
    }(StateSubject));

    var ChartType = /** @class */ (function (_super) {
        __extends(ChartType, _super);
        /**
         * @param {?} value
         */
        function ChartType(value) {
            return _super.call(this, value) || this;
        }
        return ChartType;
    }(StateSubject));

    var QueryBuilderService = /** @class */ (function () {
        function QueryBuilderService() {
            var _this = this;
            this._disableHeuristics = false;
            this._heuristicChange$ = new rxjs.Subject();
            this.builderMeta = new Promise(( /**
             * @param {?} resolve
             * @return {?}
             */function (resolve) { return (_this._resolveBuilderMeta = resolve); }));
            this.query = new Promise(( /**
             * @param {?} resolve
             * @return {?}
             */function (resolve) { return (_this._resolveQuery = resolve); }));
            this.state = new rxjs.BehaviorSubject({});
        }
        /**
         * @private
         * @return {?}
         */
        QueryBuilderService.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_c) {
                    this.pivotConfig = new PivotConfig(null);
                    this.chartType = new ChartType('line');
                    this._cubejs.meta().subscribe(( /**
                     * @param {?} meta
                     * @return {?}
                     */function (meta) {
                        _this._meta = meta;
                        _this._query = new Query(_this._meta, _this._handleQueryChange.bind(_this));
                        _this._resolveQuery(_this._query);
                        _this._resolveBuilderMeta(new BuilderMeta(_this._meta));
                    }));
                    this.subscribe();
                    if (!this._disableHeuristics) {
                        this._heuristicChange$
                            .pipe(operators.switchMap(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                            return rxjs.combineLatest([
                                _this._cubejs.dryRun(data.query).pipe(operators.catchError(( /**
                                 * @param {?} error
                                 * @return {?}
                                 */function (error) {
                                    // console.error(error);
                                    return rxjs.of(null);
                                }))),
                                rxjs.of(data.shouldApplyHeuristicOrder),
                            ]);
                        })))
                            .subscribe(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_c) {
                            var _d = __read(_c, 2), dryRunResponse = _d[0], shouldApplyHeuristicOrder = _d[1];
                            if (!dryRunResponse) {
                                return;
                            }
                            var pivotQuery = dryRunResponse.pivotQuery, queryOrder = dryRunResponse.queryOrder;
                            _this.pivotConfig.set(cubejs.ResultSet.getNormalizedPivotConfig(pivotQuery, _this.pivotConfig.get()));
                            if (shouldApplyHeuristicOrder) {
                                _this._query.order.set(queryOrder.reduce(( /**
                                 * @param {?} a
                                 * @param {?} b
                                 * @return {?}
                                 */function (a, b) { return (Object.assign(Object.assign({}, a), b)); }), {}));
                            }
                        }));
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @private
         * @param {?} newQuery
         * @param {?} oldQuery
         * @return {?}
         */
        QueryBuilderService.prototype._handleQueryChange = function (newQuery, oldQuery) {
            var _a, _b;
            var _c = cubejs.defaultHeuristics(newQuery, oldQuery, {
                meta: this._meta,
                sessionGranularity: (_b = (_a = newQuery === null || newQuery === void 0 ? void 0 : newQuery.timeDimensions) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.granularity,
            }), chartType = _c.chartType, shouldApplyHeuristicOrder = _c.shouldApplyHeuristicOrder, heuristicQuery = _c.query;
            /** @type {?} */
            var query = this._disableHeuristics
                ? newQuery
                : heuristicQuery || newQuery;
            if (cubejs.isQueryPresent(query) && !this._disableHeuristics) {
                this._heuristicChange$.next({
                    shouldApplyHeuristicOrder: Boolean(shouldApplyHeuristicOrder),
                    query: query,
                });
            }
            if (!this._disableHeuristics && chartType) {
                this.chartType.set(chartType);
            }
            return query;
        };
        /**
         * @param {?} cubejsClient
         * @return {?}
         */
        QueryBuilderService.prototype.setCubejsClient = function (cubejsClient) {
            this._cubejs = cubejsClient;
            this.init();
        };
        /**
         * @private
         * @return {?}
         */
        QueryBuilderService.prototype.subscribe = function () {
            var _this = this;
            Object.getOwnPropertyNames(this).forEach(( /**
             * @param {?} key
             * @return {?}
             */function (key) {
                if (_this[key] instanceof StateSubject) {
                    _this[key].subject.subscribe(( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        var _c;
                        return _this.setPartialState((_c = {},
                            _c[key] = value,
                            _c));
                    }));
                }
            }));
            this.query.then(( /**
             * @param {?} query
             * @return {?}
             */function (query) {
                query.subject.subscribe(( /**
                 * @param {?} cubeQuery
                 * @return {?}
                 */function (cubeQuery) {
                    _this.setPartialState({
                        query: cubeQuery,
                    });
                }));
            }));
        };
        /**
         * @param {?} state
         * @return {?}
         */
        QueryBuilderService.prototype.deserialize = function (state) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!state.query) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.query];
                        case 1:
                            (_c.sent()).setQuery(state.query);
                            _c.label = 2;
                        case 2:
                            Object.entries(state).forEach(( /**
                             * @param {?} __0
                             * @return {?}
                             */function (_c) {
                                var _d = __read(_c, 2), key = _d[0], value = _d[1];
                                if (_this[key] instanceof StateSubject) {
                                    _this[key].set(value);
                                }
                            }));
                            this.subscribe();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} partialState
         * @return {?}
         */
        QueryBuilderService.prototype.setPartialState = function (partialState) {
            this.state.next(Object.assign(Object.assign({}, this.state.getValue()), partialState));
        };
        /**
         * @return {?}
         */
        QueryBuilderService.prototype.disableHeuristics = function () {
            this._disableHeuristics = false;
        };
        /**
         * @return {?}
         */
        QueryBuilderService.prototype.enableHeuristics = function () {
            this._disableHeuristics = true;
        };
        return QueryBuilderService;
    }());
    QueryBuilderService.decorators = [
        { type: core.Injectable }
    ];
    if (false) {
        /**
         * @type {?}
         * @private
         */
        QueryBuilderService.prototype._cubejs;
        /**
         * @type {?}
         * @private
         */
        QueryBuilderService.prototype._meta;
        /**
         * @type {?}
         * @private
         */
        QueryBuilderService.prototype._query;
        /**
         * @type {?}
         * @private
         */
        QueryBuilderService.prototype._disableHeuristics;
        /**
         * @type {?}
         * @private
         */
        QueryBuilderService.prototype._resolveQuery;
        /**
         * @type {?}
         * @private
         */
        QueryBuilderService.prototype._resolveBuilderMeta;
        /**
         * @type {?}
         * @private
         */
        QueryBuilderService.prototype._heuristicChange$;
        /** @type {?} */
        QueryBuilderService.prototype.builderMeta;
        /** @type {?} */
        QueryBuilderService.prototype.query;
        /** @type {?} */
        QueryBuilderService.prototype.state;
        /** @type {?} */
        QueryBuilderService.prototype.pivotConfig;
        /** @type {?} */
        QueryBuilderService.prototype.chartType;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: cubejs-client-ngx.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.BaseMember = BaseMember;
    exports.BuilderMeta = BuilderMeta;
    exports.ChartType = ChartType;
    exports.CubejsClient = CubejsClient;
    exports.CubejsClientModule = CubejsClientModule;
    exports.FilterMember = FilterMember;
    exports.MemberType = MemberType;
    exports.Order = Order;
    exports.PivotConfig = PivotConfig;
    exports.Query = Query;
    exports.QueryBuilderService = QueryBuilderService;
    exports.TimeDimensionMember = TimeDimensionMember;
    exports["ɵa"] = StateSubject;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=cubejs-client-ngx.umd.js.map

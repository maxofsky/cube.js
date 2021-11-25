import { Injectable, Inject, NgModule } from '@angular/core';
import { __awaiter } from 'tslib';
import { BehaviorSubject, Observable, from, Subject, combineLatest, of } from 'rxjs';
import cubejs, { moveItemInArray, isQueryPresent, movePivotItem, ResultSet, defaultHeuristics } from '@cubejs-client/core';
import { switchMap, catchError } from 'rxjs/operators';
import equal from 'fast-deep-equal';

/**
 * @fileoverview added by tsickle
 * Generated from: src/client.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CubejsClient {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.ready$ = new BehaviorSubject(false);
        if (this.config instanceof Observable) {
            this.config.subscribe((/**
             * @return {?}
             */
            () => {
                this.ready$.next(true);
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
    apiInstace() {
        if (!this.cubeJsApi) {
            if (this.config instanceof Observable) {
                this.config.subscribe((/**
                 * @param {?} config
                 * @return {?}
                 */
                (config) => {
                    this.cubeJsApi = cubejs(config.token, config.options);
                    if (!this.cubeJsApi) {
                        throw new Error('Cannot create CubejsApi instance. Please check that the config is passed correctly and contains all required options.');
                    }
                }));
            }
            else {
                this.cubeJsApi = cubejs(this.config.token, this.config.options);
            }
        }
        return this.cubeJsApi;
    }
    /**
     * @param {?} query
     * @param {?=} options
     * @return {?}
     */
    load(query, options) {
        return from((/** @type {?} */ (this.apiInstace().load(query, options))));
    }
    /**
     * @param {?} query
     * @param {?=} options
     * @return {?}
     */
    sql(query, options) {
        return from(this.apiInstace().sql(query, options));
    }
    /**
     * @param {?} query
     * @param {?=} options
     * @return {?}
     */
    dryRun(query, options) {
        return from(this.apiInstace().dryRun(query, options));
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    meta(options) {
        return from(this.apiInstace().meta(options));
    }
    /**
     * @param {?} query
     * @param {?=} params
     * @return {?}
     */
    watch(query, params = {}) {
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => query.subscribe({
            next: (/**
             * @param {?} query
             * @return {?}
             */
            (query) => __awaiter(this, void 0, void 0, function* () {
                /** @type {?} */
                const resultSet = yield this.apiInstace().load(query, params);
                observer.next(resultSet);
            })),
        })));
    }
}
CubejsClient.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CubejsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
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
class CubejsClientModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
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
    }
}
CubejsClientModule.decorators = [
    { type: NgModule, args: [{
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
class StateSubject {
    /**
     * @param {?} value
     */
    constructor(value) {
        this.subject = new BehaviorSubject(value);
    }
    /**
     * @return {?}
     */
    get() {
        return this.subject.getValue();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set(value) {
        this.subject.next(value);
    }
}
if (false) {
    /** @type {?} */
    StateSubject.prototype.subject;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/query-builder/query-members.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseMember {
    /**
     * @param {?} query
     * @param {?} field
     */
    constructor(query, field) {
        this.query = query;
        this.field = field;
    }
    /**
     * @private
     * @return {?}
     */
    get members() {
        return this.query.asCubeQuery()[this.field] || [];
    }
    /**
     * @param {?} name
     * @return {?}
     */
    add(name) {
        this.query.setPartialQuery({
            [this.field]: [...this.members, name],
        });
    }
    /**
     * @param {?} name
     * @param {?} replaceWithName
     * @return {?}
     */
    replace(name, replaceWithName) {
        this.query.setPartialQuery({
            [this.field]: this.members.map((/**
             * @param {?} currentName
             * @return {?}
             */
            (currentName) => currentName === name ? replaceWithName : currentName)),
        });
    }
    /**
     * @param {?} by
     * @return {?}
     */
    remove(by) {
        this.query.setPartialQuery({
            [this.field]: this.query
                .asCubeQuery()[this.field].filter((/**
             * @param {?} currentName
             * @param {?} index
             * @return {?}
             */
            (currentName, index) => {
                if (typeof by === 'string') {
                    return currentName !== by;
                }
                return index !== by;
            })),
        });
    }
    /**
     * @param {?} members
     * @return {?}
     */
    set(members) {
        this.query.setPartialQuery({
            [this.field]: members,
        });
    }
    /**
     * @return {?}
     */
    asArray() {
        return (this.query.asCubeQuery()[this.field] || []).map((/**
         * @param {?} name
         * @return {?}
         */
        (name) => this.query.meta.resolveMember(name, this.field)));
    }
}
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
class TimeDimensionMember {
    /**
     * @param {?} query
     */
    constructor(query) {
        this.query = query;
    }
    /**
     * @private
     * @return {?}
     */
    get members() {
        return this.query.asCubeQuery().timeDimensions || [];
    }
    /**
     * @return {?}
     */
    get granularity() {
        var _a;
        return (_a = this.members[0]) === null || _a === void 0 ? void 0 : _a.granularity;
    }
    /**
     * @param {?} by
     * @param {?} updateWith
     * @return {?}
     */
    updateTimeDimension(by, updateWith) {
        /** @type {?} */
        const timeDimensions = this.members.map((/**
         * @param {?} td
         * @param {?} index
         * @return {?}
         */
        (td, index) => {
            if (td.dimension === by || index === by) {
                return Object.assign(Object.assign({}, td), updateWith);
            }
            return td;
        }));
        this.query.setPartialQuery({
            timeDimensions,
        });
    }
    /**
     * @param {?} name
     * @return {?}
     */
    add(name) {
        this.query.setPartialQuery({
            timeDimensions: [
                {
                    dimension: name,
                },
            ],
        });
    }
    /**
     * @param {?} name
     * @return {?}
     */
    remove(name) {
        this.query.setPartialQuery({
            timeDimensions: this.members.filter((/**
             * @param {?} __0
             * @return {?}
             */
            ({ dimension }) => dimension !== name)),
        });
    }
    /**
     * @param {?} timeDimensions
     * @return {?}
     */
    set(timeDimensions) {
        this.query.setPartialQuery({
            timeDimensions,
        });
    }
    /**
     * @param {?} by
     * @param {?} dateRange
     * @return {?}
     */
    setDateRange(by, dateRange) {
        this.updateTimeDimension(by, { dateRange });
    }
    /**
     * @param {?} by
     * @param {?} granularity
     * @return {?}
     */
    setGranularity(by, granularity) {
        this.updateTimeDimension(by, { granularity });
    }
    /**
     * @return {?}
     */
    asArray() {
        return (this.query.asCubeQuery().timeDimensions || []).map((/**
         * @param {?} td
         * @return {?}
         */
        (td) => {
            return Object.assign(Object.assign({}, this.query.meta.resolveMember(td.dimension, 'dimensions')), td);
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    TimeDimensionMember.prototype.query;
}
class Order {
    /**
     * @param {?} query
     */
    constructor(query) {
        this.query = query;
        this.orderMembers = new BehaviorSubject([]);
        this.query.subject.subscribe(this.handleQueryChange.bind(this));
        this.orderMembers.subscribe(this.handleOrderMembersChange.bind(this));
    }
    /**
     * @private
     * @param {?} orderMembers
     * @return {?}
     */
    handleOrderMembersChange(orderMembers) {
        /** @type {?} */
        const order = (/** @type {?} */ (orderMembers
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ order }) => order !== 'none'))
            .reduce((/**
         * @param {?} memo
         * @param {?} __1
         * @return {?}
         */
        (memo, { id, order }) => (Object.assign(Object.assign({}, memo), { [id]: order }))), {})));
        if (!equal(order, this.asObject())) {
            this.query.setPartialQuery({ order });
        }
    }
    /**
     * @private
     * @return {?}
     */
    handleQueryChange() {
        this.orderMembers.next([
            ...this.query.measures.asArray(),
            ...this.query.dimensions.asArray(),
            ...this.query.timeDimensions.asArray(),
        ].map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ name, title }) => {
            return {
                id: name,
                order: this.of(name),
                title,
            };
        })));
    }
    /**
     * @param {?} id
     * @param {?} order
     * @return {?}
     */
    setMemberOrder(id, order) {
        this.orderMembers.next(this.orderMembers.getValue().map((/**
         * @param {?} orderMember
         * @return {?}
         */
        (orderMember) => {
            if (orderMember.id === id) {
                return Object.assign(Object.assign({}, orderMember), { order });
            }
            return orderMember;
        })));
    }
    /**
     * @param {?} sourceIndex
     * @param {?} destinationIndex
     * @return {?}
     */
    reorder(sourceIndex, destinationIndex) {
        this.orderMembers.next(moveItemInArray(this.orderMembers.getValue(), sourceIndex, destinationIndex));
    }
    /**
     * @param {?} member
     * @return {?}
     */
    of(member) {
        return (this.query.asCubeQuery().order || {})[member] || 'none';
    }
    /**
     * @param {?} order
     * @return {?}
     */
    set(order) {
        this.query.setPartialQuery({ order });
    }
    /**
     * @return {?}
     */
    asArray() {
        if (Array.isArray(this.query.asCubeQuery().order)) {
            return (/** @type {?} */ (this.query.asCubeQuery().order));
        }
        return Object.entries(this.query.asCubeQuery().order || {});
    }
    /**
     * @return {?}
     */
    asObject() {
        return this.asArray().reduce((/**
         * @param {?} memo
         * @param {?} __1
         * @return {?}
         */
        (memo, [key, value]) => (Object.assign(Object.assign({}, memo), { [key]: value }))), {});
    }
}
if (false) {
    /** @type {?} */
    Order.prototype.orderMembers;
    /**
     * @type {?}
     * @private
     */
    Order.prototype.query;
}
class FilterMember {
    /**
     * @param {?} query
     */
    constructor(query) {
        this.query = query;
    }
    /**
     * @private
     * @return {?}
     */
    get filters() {
        // TODO: update this type assertion once the QueryBuilder supports logical and/or
        return (/** @type {?} */ ((this.query.asCubeQuery().filters || [])));
    }
    /**
     * @param {?} by
     * @param {?} updateWith
     * @return {?}
     */
    update(by, updateWith) {
        /** @type {?} */
        const filters = this.filters.map((/**
         * @param {?} filter
         * @param {?} index
         * @return {?}
         */
        (filter, index) => {
            if (index === by || filter.member === by || filter.dimension === by) {
                return Object.assign(Object.assign({}, filter), updateWith);
            }
            return filter;
        }));
        this.query.setPartialQuery({
            filters: (/** @type {?} */ (filters)),
        });
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    add(filter) {
        this.query.setPartialQuery({
            filters: [...this.filters, filter],
        });
    }
    /**
     * @param {?} by
     * @return {?}
     */
    remove(by) {
        this.query.setPartialQuery({
            filters: this.filters.filter((/**
             * @param {?} filter
             * @param {?} index
             * @return {?}
             */
            (filter, index) => {
                if (filter.member === by || filter.dimension === by || index === by) {
                    return false;
                }
                return true;
            })),
        });
    }
    /**
     * @param {?} filters
     * @return {?}
     */
    set(filters) {
        this.query.setPartialQuery({
            filters,
        });
    }
    /**
     * @param {?} name
     * @param {?} replaceWithName
     * @return {?}
     */
    replace(name, replaceWithName) {
        this.query.setPartialQuery({
            filters: this.filters.map((/**
             * @param {?} filter
             * @return {?}
             */
            (filter) => {
                /** @type {?} */
                const field = filter.member ? 'member' : 'dimension';
                return filter.member === name || filter.dimension === name
                    ? Object.assign(Object.assign({}, filter), { [field]: replaceWithName }) : filter;
            })),
        });
    }
    /**
     * @return {?}
     */
    asArray() {
        return this.filters.map((/**
         * @param {?} filter
         * @return {?}
         */
        (filter) => {
            return Object.assign(Object.assign(Object.assign({}, this.query.meta.resolveMember(filter.member || filter.dimension, [
                'dimensions',
                'measures',
            ])), { operators: this.query.meta.filterOperatorsForMember(filter.member || filter.dimension, ['dimensions', 'measures']) }), filter);
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterMember.prototype.query;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/query-builder/query.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const MemberType = {
    Measures: "measures",
    Dimensions: "dimensions",
    Segments: "segments",
    TimeDimensions: "timeDimensions",
    Filters: "filters",
    Order: "order",
};
class Query extends StateSubject {
    /**
     * @param {?} meta
     * @param {?=} _onBeforeChange
     */
    constructor(meta, _onBeforeChange = (/**
     * @param {?} newQuery
     * @return {?}
     */
    (newQuery) => newQuery)) {
        super({});
        this.meta = meta;
        this._onBeforeChange = _onBeforeChange;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this.measures = new BaseMember(this, MemberType.Measures);
        this.dimensions = new BaseMember(this, MemberType.Dimensions);
        this.segments = new BaseMember(this, MemberType.Segments);
        this.timeDimensions = new TimeDimensionMember(this);
        this.filters = new FilterMember(this);
        this.order = new Order(this);
    }
    /**
     * @return {?}
     */
    asCubeQuery() {
        return this.subject.getValue() || {};
    }
    /**
     * @param {?} query
     * @return {?}
     */
    setQuery(query) {
        this.subject.next(this._onBeforeChange(query, this.subject.getValue(), this));
    }
    /**
     * @param {?} partialQuery
     * @return {?}
     */
    setPartialQuery(partialQuery) {
        this.subject.next(this._onBeforeChange(Object.assign(Object.assign({}, this.subject.getValue()), partialQuery), this.subject.getValue(), this));
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    setLimit(limit) {
        this.setPartialQuery({ limit });
    }
    /**
     * @return {?}
     */
    isPresent() {
        return isQueryPresent(this.asCubeQuery());
    }
}
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
class BuilderMeta {
    /**
     * @param {?} meta
     */
    constructor(meta) {
        this.meta = meta;
        this.mapMeta();
    }
    /**
     * @private
     * @return {?}
     */
    mapMeta() {
        /** @type {?} */
        const allDimensions = (/** @type {?} */ ((this.meta.membersForQuery(null, 'dimensions'))));
        this.measures = (/** @type {?} */ (this.meta.membersForQuery(null, 'measures')));
        this.segments = this.meta.membersForQuery(null, 'segments');
        this.dimensions = allDimensions.filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type }) => type !== 'time'));
        this.timeDimensions = allDimensions.filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type }) => type === 'time'));
        this.filters = [...allDimensions, ...this.measures].map((/**
         * @param {?} member
         * @return {?}
         */
        (member) => {
            return Object.assign(Object.assign({}, member), { operators: this.meta.filterOperatorsForMember(member.name, [
                    'dimensions',
                    'measures',
                ]) });
        }));
    }
}
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/query-builder/pivot-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PivotConfig extends StateSubject {
    /**
     * @param {?} pivotConfig
     */
    constructor(pivotConfig) {
        super(pivotConfig);
    }
    /**
     * @param {?} sourceIndex
     * @param {?} destinationIndex
     * @param {?} sourceAxis
     * @param {?} destinationAxis
     * @return {?}
     */
    moveItem(sourceIndex, destinationIndex, sourceAxis, destinationAxis) {
        this.subject.next(movePivotItem(this.get(), sourceIndex, destinationIndex, sourceAxis, destinationAxis));
    }
    /**
     * @param {?} fillMissingDates
     * @return {?}
     */
    setFillMissingDates(fillMissingDates) {
        this.subject.next(Object.assign(Object.assign({}, this.get()), { fillMissingDates }));
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/query-builder/chart-type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartType extends StateSubject {
    /**
     * @param {?} value
     */
    constructor(value) {
        super(value);
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/query-builder/query-builder.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QueryBuilderService {
    constructor() {
        this._disableHeuristics = false;
        this._heuristicChange$ = new Subject();
        this.builderMeta = new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => (this._resolveBuilderMeta = resolve)));
        this.query = new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => (this._resolveQuery = resolve)));
        this.state = new BehaviorSubject({});
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pivotConfig = new PivotConfig(null);
            this.chartType = new ChartType('line');
            this._cubejs.meta().subscribe((/**
             * @param {?} meta
             * @return {?}
             */
            (meta) => {
                this._meta = meta;
                this._query = new Query(this._meta, this._handleQueryChange.bind(this));
                this._resolveQuery(this._query);
                this._resolveBuilderMeta(new BuilderMeta(this._meta));
            }));
            this.subscribe();
            if (!this._disableHeuristics) {
                this._heuristicChange$
                    .pipe(switchMap((/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => {
                    return combineLatest([
                        this._cubejs.dryRun(data.query).pipe(catchError((/**
                         * @param {?} error
                         * @return {?}
                         */
                        (error) => {
                            // console.error(error);
                            return of(null);
                        }))),
                        of(data.shouldApplyHeuristicOrder),
                    ]);
                })))
                    .subscribe((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([dryRunResponse, shouldApplyHeuristicOrder]) => {
                    if (!dryRunResponse) {
                        return;
                    }
                    const { pivotQuery, queryOrder } = dryRunResponse;
                    this.pivotConfig.set(ResultSet.getNormalizedPivotConfig(pivotQuery, this.pivotConfig.get()));
                    if (shouldApplyHeuristicOrder) {
                        this._query.order.set(queryOrder.reduce((/**
                         * @param {?} a
                         * @param {?} b
                         * @return {?}
                         */
                        (a, b) => (Object.assign(Object.assign({}, a), b))), {}));
                    }
                }));
            }
        });
    }
    /**
     * @private
     * @param {?} newQuery
     * @param {?} oldQuery
     * @return {?}
     */
    _handleQueryChange(newQuery, oldQuery) {
        var _a, _b;
        const { chartType, shouldApplyHeuristicOrder, query: heuristicQuery, } = defaultHeuristics(newQuery, oldQuery, {
            meta: this._meta,
            sessionGranularity: (_b = (_a = newQuery === null || newQuery === void 0 ? void 0 : newQuery.timeDimensions) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.granularity,
        });
        /** @type {?} */
        const query = this._disableHeuristics
            ? newQuery
            : heuristicQuery || newQuery;
        if (isQueryPresent(query) && !this._disableHeuristics) {
            this._heuristicChange$.next({
                shouldApplyHeuristicOrder: Boolean(shouldApplyHeuristicOrder),
                query,
            });
        }
        if (!this._disableHeuristics && chartType) {
            this.chartType.set(chartType);
        }
        return query;
    }
    /**
     * @param {?} cubejsClient
     * @return {?}
     */
    setCubejsClient(cubejsClient) {
        this._cubejs = cubejsClient;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    subscribe() {
        Object.getOwnPropertyNames(this).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            if (this[key] instanceof StateSubject) {
                this[key].subject.subscribe((/**
                 * @param {?} value
                 * @return {?}
                 */
                (value) => this.setPartialState({
                    [key]: value,
                })));
            }
        }));
        this.query.then((/**
         * @param {?} query
         * @return {?}
         */
        (query) => {
            query.subject.subscribe((/**
             * @param {?} cubeQuery
             * @return {?}
             */
            (cubeQuery) => {
                this.setPartialState({
                    query: cubeQuery,
                });
            }));
        }));
    }
    /**
     * @param {?} state
     * @return {?}
     */
    deserialize(state) {
        return __awaiter(this, void 0, void 0, function* () {
            if (state.query) {
                (yield this.query).setQuery(state.query);
            }
            Object.entries(state).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ([key, value]) => {
                if (this[key] instanceof StateSubject) {
                    this[key].set(value);
                }
            }));
            this.subscribe();
        });
    }
    /**
     * @param {?} partialState
     * @return {?}
     */
    setPartialState(partialState) {
        this.state.next(Object.assign(Object.assign({}, this.state.getValue()), partialState));
    }
    /**
     * @return {?}
     */
    disableHeuristics() {
        this._disableHeuristics = false;
    }
    /**
     * @return {?}
     */
    enableHeuristics() {
        this._disableHeuristics = true;
    }
}
QueryBuilderService.decorators = [
    { type: Injectable }
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

export { BaseMember, BuilderMeta, ChartType, CubejsClient, CubejsClientModule, FilterMember, MemberType, Order, PivotConfig, Query, QueryBuilderService, TimeDimensionMember, StateSubject as ɵa };
//# sourceMappingURL=cubejs-client-ngx.js.map

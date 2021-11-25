/**
 * @fileoverview added by tsickle
 * Generated from: src/query-builder/query-builder.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { ResultSet, isQueryPresent, defaultHeuristics, } from '@cubejs-client/core';
import { BehaviorSubject, combineLatest, of, Subject } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Query } from './query';
import { BuilderMeta } from './builder-meta';
import { PivotConfig } from './pivot-config';
import { ChartType } from './chart-type';
import { StateSubject } from './common';
export class QueryBuilderService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktYnVpbGRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hcHBsZS9EZXNrdG9wL2N1YmUuanMtbWFzdGVyL3BhY2thZ2VzL2N1YmVqcy1jbGllbnQtbmd4LyIsInNvdXJjZXMiOlsic3JjL3F1ZXJ5LWJ1aWxkZXIvcXVlcnktYnVpbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLFNBQVMsRUFHVCxjQUFjLEVBQ2QsaUJBQWlCLEdBQ2xCLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDaEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFTeEMsTUFBTSxPQUFPLG1CQUFtQjtJQURoQztRQUtVLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUdwQyxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBRXRDLGdCQUFXLEdBQUcsSUFBSSxPQUFPOzs7O1FBQ2hDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUMsRUFDbEQsQ0FBQztRQUNPLFVBQUssR0FBRyxJQUFJLE9BQU87Ozs7UUFDMUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsRUFDNUMsQ0FBQztRQUNPLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBcUIsRUFBRSxDQUFDLENBQUM7SUEySS9ELENBQUM7Ozs7O0lBdEllLElBQUk7O1lBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV2QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFFbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FDckIsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNuQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxFQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFakIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGlCQUFpQjtxQkFDbkIsSUFBSSxDQUNILFNBQVM7Ozs7Z0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDakIsT0FBTyxhQUFhLENBQUM7d0JBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7Ozt3QkFBQyxDQUFDLEtBQUssRUFBRSxFQUFFOzRCQUN4RCx3QkFBd0I7NEJBQ3hCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNsQixDQUFDLEVBQUMsQ0FBQzt3QkFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDO3FCQUNuQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFDLENBQ0g7cUJBQ0EsU0FBUzs7OztnQkFDUixDQUFDLENBQUMsY0FBYyxFQUFFLHlCQUF5QixDQUFDLEVBQUUsRUFBRTtvQkFDOUMsSUFBSSxDQUFDLGNBQWMsRUFBRTt3QkFDbkIsT0FBTztxQkFDUjswQkFFSyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxjQUFjO29CQUVqRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDbEIsU0FBUyxDQUFDLHdCQUF3QixDQUNoQyxVQUFVLEVBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FDdkIsQ0FDRixDQUFDO29CQUNGLElBQUkseUJBQXlCLEVBQUU7d0JBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FDbkIsVUFBVSxDQUFDLE1BQU07Ozs7O3dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsaUNBQU0sQ0FBQyxHQUFLLENBQUMsRUFBRyxHQUFFLEVBQUUsQ0FBQyxDQUNsRCxDQUFDO3FCQUNIO2dCQUNILENBQUMsRUFDRixDQUFDO2FBQ0w7UUFDSCxDQUFDO0tBQUE7Ozs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsUUFBUTs7Y0FDckMsRUFDSixTQUFTLEVBQ1QseUJBQXlCLEVBQ3pCLEtBQUssRUFBRSxjQUFjLEdBQ3RCLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtZQUN4QyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDaEIsa0JBQWtCLGNBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLGNBQWMsMENBQUcsQ0FBQywyQ0FBRyxXQUFXO1NBQy9ELENBQUM7O2NBRUksS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0I7WUFDbkMsQ0FBQyxDQUFDLFFBQVE7WUFDVixDQUFDLENBQUMsY0FBYyxJQUFJLFFBQVE7UUFFOUIsSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztnQkFDMUIseUJBQXlCLEVBQUUsT0FBTyxDQUFDLHlCQUF5QixDQUFDO2dCQUM3RCxLQUFLO2FBQ04sQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixJQUFJLFNBQVMsRUFBRTtZQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsWUFBMEI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQy9DLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLFlBQVksRUFBRTtnQkFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O2dCQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQztvQkFDbkIsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLO2lCQUNiLENBQUMsRUFDSCxDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQztvQkFDbkIsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVLLFdBQVcsQ0FBQyxLQUFLOztZQUNyQixJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFDO1lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO2dCQUM3QyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxZQUFZLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztLQUFBOzs7OztJQUVELGVBQWUsQ0FBQyxZQUFZO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxpQ0FDVixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUNyQixZQUFZLEVBQ2YsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7OztZQTFKRixVQUFVOzs7Ozs7O0lBRVQsc0NBQThCOzs7OztJQUM5QixvQ0FBb0I7Ozs7O0lBQ3BCLHFDQUFzQjs7Ozs7SUFDdEIsaURBQTRDOzs7OztJQUM1Qyw0Q0FBOEM7Ozs7O0lBQzlDLGtEQUEwRDs7Ozs7SUFDMUQsZ0RBQStDOztJQUUvQywwQ0FFRTs7SUFDRixvQ0FFRTs7SUFDRixvQ0FBNkQ7O0lBRTdELDBDQUF5Qjs7SUFDekIsd0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWV0YSxcbiAgUmVzdWx0U2V0LFxuICBRdWVyeSBhcyBUQ3ViZVF1ZXJ5LFxuICBQaXZvdENvbmZpZyBhcyBUUGl2b3RDb25maWcsXG4gIGlzUXVlcnlQcmVzZW50LFxuICBkZWZhdWx0SGV1cmlzdGljcyxcbn0gZnJvbSAnQGN1YmVqcy1jbGllbnQvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEN1YmVqc0NsaWVudCB9IGZyb20gJy4uL2NsaWVudCc7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHsgQnVpbGRlck1ldGEgfSBmcm9tICcuL2J1aWxkZXItbWV0YSc7XG5pbXBvcnQgeyBQaXZvdENvbmZpZyB9IGZyb20gJy4vcGl2b3QtY29uZmlnJztcbmltcG9ydCB7IENoYXJ0VHlwZSwgVENoYXJ0VHlwZSB9IGZyb20gJy4vY2hhcnQtdHlwZSc7XG5pbXBvcnQgeyBTdGF0ZVN1YmplY3QgfSBmcm9tICcuL2NvbW1vbic7XG5cbmV4cG9ydCB0eXBlIFRRdWVyeUJ1aWxkZXJTdGF0ZSA9IHtcbiAgcXVlcnk/OiBUQ3ViZVF1ZXJ5O1xuICBwaXZvdENvbmZpZz86IFRQaXZvdENvbmZpZztcbiAgY2hhcnRUeXBlPzogVENoYXJ0VHlwZTtcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRdWVyeUJ1aWxkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY3ViZWpzOiBDdWJlanNDbGllbnQ7XG4gIHByaXZhdGUgX21ldGE6IE1ldGE7XG4gIHByaXZhdGUgX3F1ZXJ5OiBRdWVyeTtcbiAgcHJpdmF0ZSBfZGlzYWJsZUhldXJpc3RpY3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVzb2x2ZVF1ZXJ5OiAocXVlcnk6IFF1ZXJ5KSA9PiB2b2lkO1xuICBwcml2YXRlIF9yZXNvbHZlQnVpbGRlck1ldGE6IChxdWVyeTogQnVpbGRlck1ldGEpID0+IHZvaWQ7XG4gIHByaXZhdGUgX2hldXJpc3RpY0NoYW5nZSQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgcmVhZG9ubHkgYnVpbGRlck1ldGEgPSBuZXcgUHJvbWlzZTxCdWlsZGVyTWV0YT4oXG4gICAgKHJlc29sdmUpID0+ICh0aGlzLl9yZXNvbHZlQnVpbGRlck1ldGEgPSByZXNvbHZlKVxuICApO1xuICByZWFkb25seSBxdWVyeSA9IG5ldyBQcm9taXNlPFF1ZXJ5PihcbiAgICAocmVzb2x2ZSkgPT4gKHRoaXMuX3Jlc29sdmVRdWVyeSA9IHJlc29sdmUpXG4gICk7XG4gIHJlYWRvbmx5IHN0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUUXVlcnlCdWlsZGVyU3RhdGU+KHt9KTtcblxuICBwaXZvdENvbmZpZzogUGl2b3RDb25maWc7XG4gIGNoYXJ0VHlwZTogQ2hhcnRUeXBlO1xuXG4gIHByaXZhdGUgYXN5bmMgaW5pdCgpIHtcbiAgICB0aGlzLnBpdm90Q29uZmlnID0gbmV3IFBpdm90Q29uZmlnKG51bGwpO1xuICAgIHRoaXMuY2hhcnRUeXBlID0gbmV3IENoYXJ0VHlwZSgnbGluZScpO1xuXG4gICAgdGhpcy5fY3ViZWpzLm1ldGEoKS5zdWJzY3JpYmUoKG1ldGEpID0+IHtcbiAgICAgIHRoaXMuX21ldGEgPSBtZXRhO1xuXG4gICAgICB0aGlzLl9xdWVyeSA9IG5ldyBRdWVyeShcbiAgICAgICAgdGhpcy5fbWV0YSxcbiAgICAgICAgdGhpcy5faGFuZGxlUXVlcnlDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICAgIHRoaXMuX3Jlc29sdmVRdWVyeSh0aGlzLl9xdWVyeSk7XG4gICAgICB0aGlzLl9yZXNvbHZlQnVpbGRlck1ldGEobmV3IEJ1aWxkZXJNZXRhKHRoaXMuX21ldGEpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3Vic2NyaWJlKCk7XG5cbiAgICBpZiAoIXRoaXMuX2Rpc2FibGVIZXVyaXN0aWNzKSB7XG4gICAgICB0aGlzLl9oZXVyaXN0aWNDaGFuZ2UkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgICAgICB0aGlzLl9jdWJlanMuZHJ5UnVuKGRhdGEucXVlcnkpLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgb2YoZGF0YS5zaG91bGRBcHBseUhldXJpc3RpY09yZGVyKSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoW2RyeVJ1blJlc3BvbnNlLCBzaG91bGRBcHBseUhldXJpc3RpY09yZGVyXSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFkcnlSdW5SZXNwb25zZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHsgcGl2b3RRdWVyeSwgcXVlcnlPcmRlciB9ID0gZHJ5UnVuUmVzcG9uc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucGl2b3RDb25maWcuc2V0KFxuICAgICAgICAgICAgICBSZXN1bHRTZXQuZ2V0Tm9ybWFsaXplZFBpdm90Q29uZmlnKFxuICAgICAgICAgICAgICAgIHBpdm90UXVlcnksXG4gICAgICAgICAgICAgICAgdGhpcy5waXZvdENvbmZpZy5nZXQoKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHNob3VsZEFwcGx5SGV1cmlzdGljT3JkZXIpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcXVlcnkub3JkZXIuc2V0KFxuICAgICAgICAgICAgICAgIHF1ZXJ5T3JkZXIucmVkdWNlKChhLCBiKSA9PiAoeyAuLi5hLCAuLi5iIH0pLCB7fSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUXVlcnlDaGFuZ2UobmV3UXVlcnksIG9sZFF1ZXJ5KSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hhcnRUeXBlLFxuICAgICAgc2hvdWxkQXBwbHlIZXVyaXN0aWNPcmRlcixcbiAgICAgIHF1ZXJ5OiBoZXVyaXN0aWNRdWVyeSxcbiAgICB9ID0gZGVmYXVsdEhldXJpc3RpY3MobmV3UXVlcnksIG9sZFF1ZXJ5LCB7XG4gICAgICBtZXRhOiB0aGlzLl9tZXRhLFxuICAgICAgc2Vzc2lvbkdyYW51bGFyaXR5OiBuZXdRdWVyeT8udGltZURpbWVuc2lvbnM/LlswXT8uZ3JhbnVsYXJpdHksXG4gICAgfSk7XG5cbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuX2Rpc2FibGVIZXVyaXN0aWNzXG4gICAgICA/IG5ld1F1ZXJ5XG4gICAgICA6IGhldXJpc3RpY1F1ZXJ5IHx8IG5ld1F1ZXJ5O1xuXG4gICAgaWYgKGlzUXVlcnlQcmVzZW50KHF1ZXJ5KSAmJiAhdGhpcy5fZGlzYWJsZUhldXJpc3RpY3MpIHtcbiAgICAgIHRoaXMuX2hldXJpc3RpY0NoYW5nZSQubmV4dCh7XG4gICAgICAgIHNob3VsZEFwcGx5SGV1cmlzdGljT3JkZXI6IEJvb2xlYW4oc2hvdWxkQXBwbHlIZXVyaXN0aWNPcmRlciksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlSGV1cmlzdGljcyAmJiBjaGFydFR5cGUpIHtcbiAgICAgIHRoaXMuY2hhcnRUeXBlLnNldChjaGFydFR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIHNldEN1YmVqc0NsaWVudChjdWJlanNDbGllbnQ6IEN1YmVqc0NsaWVudCkge1xuICAgIHRoaXMuX2N1YmVqcyA9IGN1YmVqc0NsaWVudDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlKCkge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKHRoaXNba2V5XSBpbnN0YW5jZW9mIFN0YXRlU3ViamVjdCkge1xuICAgICAgICB0aGlzW2tleV0uc3ViamVjdC5zdWJzY3JpYmUoKHZhbHVlKSA9PlxuICAgICAgICAgIHRoaXMuc2V0UGFydGlhbFN0YXRlKHtcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucXVlcnkudGhlbigocXVlcnkpID0+IHtcbiAgICAgIHF1ZXJ5LnN1YmplY3Quc3Vic2NyaWJlKChjdWJlUXVlcnkpID0+IHtcbiAgICAgICAgdGhpcy5zZXRQYXJ0aWFsU3RhdGUoe1xuICAgICAgICAgIHF1ZXJ5OiBjdWJlUXVlcnksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBkZXNlcmlhbGl6ZShzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5xdWVyeSkge1xuICAgICAgKGF3YWl0IHRoaXMucXVlcnkpLnNldFF1ZXJ5KHN0YXRlLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICBPYmplY3QuZW50cmllcyhzdGF0ZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodGhpc1trZXldIGluc3RhbmNlb2YgU3RhdGVTdWJqZWN0KSB7XG4gICAgICAgIHRoaXNba2V5XS5zZXQodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHNldFBhcnRpYWxTdGF0ZShwYXJ0aWFsU3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlLm5leHQoe1xuICAgICAgLi4udGhpcy5zdGF0ZS5nZXRWYWx1ZSgpLFxuICAgICAgLi4ucGFydGlhbFN0YXRlLFxuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZUhldXJpc3RpY3MoKSB7XG4gICAgdGhpcy5fZGlzYWJsZUhldXJpc3RpY3MgPSBmYWxzZTtcbiAgfVxuXG4gIGVuYWJsZUhldXJpc3RpY3MoKSB7XG4gICAgdGhpcy5fZGlzYWJsZUhldXJpc3RpY3MgPSB0cnVlO1xuICB9XG59XG4iXX0=
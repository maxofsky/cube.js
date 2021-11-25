/**
 * @fileoverview added by tsickle
 * Generated from: src/query-builder/query.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isQueryPresent } from '@cubejs-client/core';
import { StateSubject } from './common';
import { BaseMember, FilterMember, Order, TimeDimensionMember } from './query-members';
/** @enum {string} */
const MemberType = {
    Measures: "measures",
    Dimensions: "dimensions",
    Segments: "segments",
    TimeDimensions: "timeDimensions",
    Filters: "filters",
    Order: "order",
};
export { MemberType };
export class Query extends StateSubject {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FwcGxlL0Rlc2t0b3AvY3ViZS5qcy1tYXN0ZXIvcGFja2FnZXMvY3ViZWpzLWNsaWVudC1uZ3gvIiwic291cmNlcyI6WyJzcmMvcXVlcnktYnVpbGRlci9xdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQTZCLE1BQU0scUJBQXFCLENBQUM7QUFFaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFdkYsTUFBWSxVQUFVO0lBQ3BCLFFBQVEsWUFBYTtJQUNyQixVQUFVLGNBQWU7SUFDekIsUUFBUSxZQUFhO0lBQ3JCLGNBQWMsa0JBQW1CO0lBQ2pDLE9BQU8sV0FBWTtJQUNuQixLQUFLLFNBQVU7RUFDaEI7O0FBUUQsTUFBTSxPQUFPLEtBQU0sU0FBUSxZQUF3Qjs7Ozs7SUFRakQsWUFDUyxJQUFVLEVBQ1Q7Ozs7SUFBb0MsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQTtRQUVsRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFISCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1Qsb0JBQWUsR0FBZixlQUFlLENBQTJDO1FBR2xFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU8sSUFBSTtRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWlCO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxZQUFpQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDZixJQUFJLENBQUMsZUFBZSxpQ0FFYixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUN2QixZQUFZLEdBRWpCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQ3ZCLElBQUksQ0FDTCxDQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGOzs7SUFwREMseUJBQXFCOztJQUNyQiwyQkFBdUI7O0lBQ3ZCLHlCQUFxQjs7SUFDckIsK0JBQW9DOztJQUNwQyx3QkFBc0I7O0lBQ3RCLHNCQUFhOztJQUdYLHFCQUFpQjs7Ozs7SUFDakIsZ0NBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNRdWVyeVByZXNlbnQsIE1ldGEsIFF1ZXJ5IGFzIFRDdWJlUXVlcnkgfSBmcm9tICdAY3ViZWpzLWNsaWVudC9jb3JlJztcblxuaW1wb3J0IHsgU3RhdGVTdWJqZWN0IH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IHsgQmFzZU1lbWJlciwgRmlsdGVyTWVtYmVyLCBPcmRlciwgVGltZURpbWVuc2lvbk1lbWJlciB9IGZyb20gJy4vcXVlcnktbWVtYmVycyc7XG5cbmV4cG9ydCBlbnVtIE1lbWJlclR5cGUge1xuICBNZWFzdXJlcyA9ICdtZWFzdXJlcycsXG4gIERpbWVuc2lvbnMgPSAnZGltZW5zaW9ucycsXG4gIFNlZ21lbnRzID0gJ3NlZ21lbnRzJyxcbiAgVGltZURpbWVuc2lvbnMgPSAndGltZURpbWVuc2lvbnMnLFxuICBGaWx0ZXJzID0gJ2ZpbHRlcnMnLFxuICBPcmRlciA9ICdvcmRlcicsXG59XG5cbmV4cG9ydCB0eXBlIE9uQ2hhbmdlQ2FsbGJhY2sgPSAoXG4gIG5ld1F1ZXJ5OiBUQ3ViZVF1ZXJ5LFxuICBvbGRRdWVyeTogVEN1YmVRdWVyeSxcbiAgcXVlcnk6IFF1ZXJ5XG4pID0+IFRDdWJlUXVlcnk7XG5cbmV4cG9ydCBjbGFzcyBRdWVyeSBleHRlbmRzIFN0YXRlU3ViamVjdDxUQ3ViZVF1ZXJ5PiB7XG4gIG1lYXN1cmVzOiBCYXNlTWVtYmVyO1xuICBkaW1lbnNpb25zOiBCYXNlTWVtYmVyO1xuICBzZWdtZW50czogQmFzZU1lbWJlcjtcbiAgdGltZURpbWVuc2lvbnM6IFRpbWVEaW1lbnNpb25NZW1iZXI7XG4gIGZpbHRlcnM6IEZpbHRlck1lbWJlcjtcbiAgb3JkZXI6IE9yZGVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBtZXRhOiBNZXRhLFxuICAgIHByaXZhdGUgX29uQmVmb3JlQ2hhbmdlOiBPbkNoYW5nZUNhbGxiYWNrID0gKG5ld1F1ZXJ5KSA9PiBuZXdRdWVyeVxuICApIHtcbiAgICBzdXBlcih7fSk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgdGhpcy5tZWFzdXJlcyA9IG5ldyBCYXNlTWVtYmVyKHRoaXMsIE1lbWJlclR5cGUuTWVhc3VyZXMpO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IG5ldyBCYXNlTWVtYmVyKHRoaXMsIE1lbWJlclR5cGUuRGltZW5zaW9ucyk7XG4gICAgdGhpcy5zZWdtZW50cyA9IG5ldyBCYXNlTWVtYmVyKHRoaXMsIE1lbWJlclR5cGUuU2VnbWVudHMpO1xuICAgIHRoaXMudGltZURpbWVuc2lvbnMgPSBuZXcgVGltZURpbWVuc2lvbk1lbWJlcih0aGlzKTtcbiAgICB0aGlzLmZpbHRlcnMgPSBuZXcgRmlsdGVyTWVtYmVyKHRoaXMpO1xuICAgIHRoaXMub3JkZXIgPSBuZXcgT3JkZXIodGhpcyk7XG4gIH1cblxuICBhc0N1YmVRdWVyeSgpOiBUQ3ViZVF1ZXJ5IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmdldFZhbHVlKCkgfHwge307XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeTogVEN1YmVRdWVyeSkge1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KHRoaXMuX29uQmVmb3JlQ2hhbmdlKHF1ZXJ5LCB0aGlzLnN1YmplY3QuZ2V0VmFsdWUoKSwgdGhpcykpO1xuICB9XG5cbiAgc2V0UGFydGlhbFF1ZXJ5KHBhcnRpYWxRdWVyeTogUGFydGlhbDxUQ3ViZVF1ZXJ5Pikge1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KFxuICAgICAgdGhpcy5fb25CZWZvcmVDaGFuZ2UoXG4gICAgICAgIHtcbiAgICAgICAgICAuLi50aGlzLnN1YmplY3QuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAuLi5wYXJ0aWFsUXVlcnksXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuc3ViamVjdC5nZXRWYWx1ZSgpLFxuICAgICAgICB0aGlzXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHNldExpbWl0KGxpbWl0OiBudW1iZXIpIHtcbiAgICB0aGlzLnNldFBhcnRpYWxRdWVyeSh7IGxpbWl0IH0pO1xuICB9XG4gIFxuICBpc1ByZXNlbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzUXVlcnlQcmVzZW50KHRoaXMuYXNDdWJlUXVlcnkoKSk7XG4gIH1cbn1cbiJdfQ==
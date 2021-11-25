/**
 * @fileoverview added by tsickle
 * Generated from: src/query-builder/query-members.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { moveItemInArray, } from '@cubejs-client/core';
import { BehaviorSubject } from 'rxjs';
import equal from 'fast-deep-equal';
export class BaseMember {
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
export class TimeDimensionMember {
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
export class Order {
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
export class FilterMember {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktbWVtYmVycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXBwbGUvRGVza3RvcC9jdWJlLmpzLW1hc3Rlci9wYWNrYWdlcy9jdWJlanMtY2xpZW50LW5neC8iLCJzb3VyY2VzIjpbInNyYy9xdWVyeS1idWlsZGVyL3F1ZXJ5LW1lbWJlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBSUwsZUFBZSxHQUloQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxLQUFLLE1BQU0saUJBQWlCLENBQUM7QUFZcEMsTUFBTSxPQUFPLFVBQVU7Ozs7O0lBQ3JCLFlBQ1UsS0FBWSxFQUNaLEtBQTZDO1FBRDdDLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixVQUFLLEdBQUwsS0FBSyxDQUF3QztJQUNwRCxDQUFDOzs7OztJQUVKLElBQVksT0FBTztRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDekIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxJQUFZLEVBQUUsZUFBdUI7UUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDekIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUM3QyxXQUFXLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFl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LE1BQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO2dCQUNsRSxZQUFZO2dCQUNaLFVBQVU7YUFDWCxDQUFDLEtBQ0YsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUNqRCxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQ2pDLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUMzQixLQUNFLE1BQU0sRUFDVDtRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7Ozs7SUE1RWEsNkJBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVGltZURpbWVuc2lvbkdyYW51bGFyaXR5LFxuICBUUXVlcnlPcmRlck9iamVjdCxcbiAgVFF1ZXJ5T3JkZXJBcnJheSxcbiAgbW92ZUl0ZW1JbkFycmF5LFxuICBGaWx0ZXIsXG4gIFVuYXJ5RmlsdGVyLFxuICBCaW5hcnlGaWx0ZXIsXG59IGZyb20gJ0BjdWJlanMtY2xpZW50L2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgZXF1YWwgZnJvbSAnZmFzdC1kZWVwLWVxdWFsJztcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICcuL3F1ZXJ5JztcblxuZXhwb3J0IHR5cGUgVE9yZGVyID0gJ2FzYycgfCAnZGVzYycgfCAnbm9uZSc7XG5cbmV4cG9ydCB0eXBlIFRPcmRlck1lbWJlciA9IHtcbiAgaWQ6IHN0cmluZztcbiAgb3JkZXI6IFRPcmRlcjtcbiAgdGl0bGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBCYXNlTWVtYmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBxdWVyeTogUXVlcnksXG4gICAgcHJpdmF0ZSBmaWVsZDogJ21lYXN1cmVzJyB8ICdkaW1lbnNpb25zJyB8ICdzZWdtZW50cydcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0IG1lbWJlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkuYXNDdWJlUXVlcnkoKVt0aGlzLmZpZWxkXSB8fCBbXTtcbiAgfVxuXG4gIGFkZChuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnF1ZXJ5LnNldFBhcnRpYWxRdWVyeSh7XG4gICAgICBbdGhpcy5maWVsZF06IFsuLi50aGlzLm1lbWJlcnMsIG5hbWVdLFxuICAgIH0pO1xuICB9XG5cbiAgcmVwbGFjZShuYW1lOiBzdHJpbmcsIHJlcGxhY2VXaXRoTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5xdWVyeS5zZXRQYXJ0aWFsUXVlcnkoe1xuICAgICAgW3RoaXMuZmllbGRdOiB0aGlzLm1lbWJlcnMubWFwKChjdXJyZW50TmFtZSkgPT5cbiAgICAgICAgY3VycmVudE5hbWUgPT09IG5hbWUgPyByZXBsYWNlV2l0aE5hbWUgOiBjdXJyZW50TmFtZVxuICAgICAgKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZShieTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgdGhpcy5xdWVyeS5zZXRQYXJ0aWFsUXVlcnkoe1xuICAgICAgW3RoaXMuZmllbGRdOiB0aGlzLnF1ZXJ5XG4gICAgICAgIC5hc0N1YmVRdWVyeSgpXG4gICAgICAgIFt0aGlzLmZpZWxkXS5maWx0ZXIoKGN1cnJlbnROYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgYnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudE5hbWUgIT09IGJ5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpbmRleCAhPT0gYnk7XG4gICAgICAgIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0KG1lbWJlcnM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5xdWVyeS5zZXRQYXJ0aWFsUXVlcnkoe1xuICAgICAgW3RoaXMuZmllbGRdOiBtZW1iZXJzLFxuICAgIH0pO1xuICB9XG5cbiAgYXNBcnJheSgpIHtcbiAgICByZXR1cm4gKHRoaXMucXVlcnkuYXNDdWJlUXVlcnkoKVt0aGlzLmZpZWxkXSB8fCBbXSkubWFwKChuYW1lKSA9PlxuICAgICAgdGhpcy5xdWVyeS5tZXRhLnJlc29sdmVNZW1iZXIobmFtZSwgdGhpcy5maWVsZClcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaW1lRGltZW5zaW9uTWVtYmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBxdWVyeTogUXVlcnkpIHt9XG5cbiAgcHJpdmF0ZSBnZXQgbWVtYmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeS5hc0N1YmVRdWVyeSgpLnRpbWVEaW1lbnNpb25zIHx8IFtdO1xuICB9XG5cbiAgZ2V0IGdyYW51bGFyaXR5KCkge1xuICAgIHJldHVybiB0aGlzLm1lbWJlcnNbMF0/LmdyYW51bGFyaXR5O1xuICB9XG5cbiAgdXBkYXRlVGltZURpbWVuc2lvbihieTogc3RyaW5nIHwgbnVtYmVyLCB1cGRhdGVXaXRoOiBhbnkpIHtcbiAgICBjb25zdCB0aW1lRGltZW5zaW9ucyA9IHRoaXMubWVtYmVycy5tYXAoKHRkLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHRkLmRpbWVuc2lvbiA9PT0gYnkgfHwgaW5kZXggPT09IGJ5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4udGQsXG4gICAgICAgICAgLi4udXBkYXRlV2l0aCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZDtcbiAgICB9KTtcblxuICAgIHRoaXMucXVlcnkuc2V0UGFydGlhbFF1ZXJ5KHtcbiAgICAgIHRpbWVEaW1lbnNpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgYWRkKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMucXVlcnkuc2V0UGFydGlhbFF1ZXJ5KHtcbiAgICAgIHRpbWVEaW1lbnNpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkaW1lbnNpb246IG5hbWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMucXVlcnkuc2V0UGFydGlhbFF1ZXJ5KHtcbiAgICAgIHRpbWVEaW1lbnNpb25zOiB0aGlzLm1lbWJlcnMuZmlsdGVyKFxuICAgICAgICAoeyBkaW1lbnNpb24gfSkgPT4gZGltZW5zaW9uICE9PSBuYW1lXG4gICAgICApLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0KHRpbWVEaW1lbnNpb25zOiBhbnlbXSkge1xuICAgIHRoaXMucXVlcnkuc2V0UGFydGlhbFF1ZXJ5KHtcbiAgICAgIHRpbWVEaW1lbnNpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0RGF0ZVJhbmdlKGJ5OiBzdHJpbmcgfCBudW1iZXIsIGRhdGVSYW5nZTogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICB0aGlzLnVwZGF0ZVRpbWVEaW1lbnNpb24oYnksIHsgZGF0ZVJhbmdlIH0pO1xuICB9XG5cbiAgc2V0R3JhbnVsYXJpdHkoYnk6IHN0cmluZyB8IG51bWJlciwgZ3JhbnVsYXJpdHk6IFRpbWVEaW1lbnNpb25HcmFudWxhcml0eSkge1xuICAgIHRoaXMudXBkYXRlVGltZURpbWVuc2lvbihieSwgeyBncmFudWxhcml0eSB9KTtcbiAgfVxuXG4gIGFzQXJyYXkoKTogYW55W10ge1xuICAgIHJldHVybiAodGhpcy5xdWVyeS5hc0N1YmVRdWVyeSgpLnRpbWVEaW1lbnNpb25zIHx8IFtdKS5tYXAoKHRkKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLnF1ZXJ5Lm1ldGEucmVzb2x2ZU1lbWJlcih0ZC5kaW1lbnNpb24sICdkaW1lbnNpb25zJyksXG4gICAgICAgIC4uLnRkLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3JkZXIge1xuICBvcmRlck1lbWJlcnMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRPcmRlck1lbWJlcltdPihbXSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBxdWVyeTogUXVlcnkpIHtcbiAgICB0aGlzLnF1ZXJ5LnN1YmplY3Quc3Vic2NyaWJlKHRoaXMuaGFuZGxlUXVlcnlDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vcmRlck1lbWJlcnMuc3Vic2NyaWJlKHRoaXMuaGFuZGxlT3JkZXJNZW1iZXJzQ2hhbmdlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVPcmRlck1lbWJlcnNDaGFuZ2Uob3JkZXJNZW1iZXJzOiBUT3JkZXJNZW1iZXJbXSkge1xuICAgIGNvbnN0IG9yZGVyID0gb3JkZXJNZW1iZXJzXG4gICAgICAuZmlsdGVyKCh7IG9yZGVyIH0pID0+IG9yZGVyICE9PSAnbm9uZScpXG4gICAgICAucmVkdWNlKFxuICAgICAgICAobWVtbywgeyBpZCwgb3JkZXIgfSkgPT4gKHsgLi4ubWVtbywgW2lkXTogb3JkZXIgfSksXG4gICAgICAgIHt9XG4gICAgICApIGFzIFRRdWVyeU9yZGVyT2JqZWN0O1xuXG4gICAgaWYgKCFlcXVhbChvcmRlciwgdGhpcy5hc09iamVjdCgpKSkge1xuICAgICAgdGhpcy5xdWVyeS5zZXRQYXJ0aWFsUXVlcnkoeyBvcmRlciB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVF1ZXJ5Q2hhbmdlKCkge1xuICAgIHRoaXMub3JkZXJNZW1iZXJzLm5leHQoXG4gICAgICBbXG4gICAgICAgIC4uLnRoaXMucXVlcnkubWVhc3VyZXMuYXNBcnJheSgpLFxuICAgICAgICAuLi50aGlzLnF1ZXJ5LmRpbWVuc2lvbnMuYXNBcnJheSgpLFxuICAgICAgICAuLi50aGlzLnF1ZXJ5LnRpbWVEaW1lbnNpb25zLmFzQXJyYXkoKSxcbiAgICAgIF0ubWFwPFRPcmRlck1lbWJlcj4oKHsgbmFtZSwgdGl0bGUgfSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBuYW1lLFxuICAgICAgICAgIG9yZGVyOiB0aGlzLm9mKG5hbWUpLFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc2V0TWVtYmVyT3JkZXIoaWQ6IHN0cmluZywgb3JkZXI6IFRPcmRlcikge1xuICAgIHRoaXMub3JkZXJNZW1iZXJzLm5leHQoXG4gICAgICB0aGlzLm9yZGVyTWVtYmVycy5nZXRWYWx1ZSgpLm1hcCgob3JkZXJNZW1iZXIpID0+IHtcbiAgICAgICAgaWYgKG9yZGVyTWVtYmVyLmlkID09PSBpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5vcmRlck1lbWJlcixcbiAgICAgICAgICAgIG9yZGVyLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yZGVyTWVtYmVyO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVvcmRlcihzb3VyY2VJbmRleDogbnVtYmVyLCBkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLm9yZGVyTWVtYmVycy5uZXh0KFxuICAgICAgbW92ZUl0ZW1JbkFycmF5KFxuICAgICAgICB0aGlzLm9yZGVyTWVtYmVycy5nZXRWYWx1ZSgpLFxuICAgICAgICBzb3VyY2VJbmRleCxcbiAgICAgICAgZGVzdGluYXRpb25JbmRleFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBvZihtZW1iZXI6IHN0cmluZykge1xuICAgIHJldHVybiAodGhpcy5xdWVyeS5hc0N1YmVRdWVyeSgpLm9yZGVyIHx8IHt9KVttZW1iZXJdIHx8ICdub25lJztcbiAgfVxuXG4gIHNldChvcmRlcjogVFF1ZXJ5T3JkZXJPYmplY3QgfCBUUXVlcnlPcmRlckFycmF5KSB7XG4gICAgdGhpcy5xdWVyeS5zZXRQYXJ0aWFsUXVlcnkoeyBvcmRlciB9KTtcbiAgfVxuXG4gIGFzQXJyYXkoKTogVFF1ZXJ5T3JkZXJBcnJheSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5xdWVyeS5hc0N1YmVRdWVyeSgpLm9yZGVyKSkge1xuICAgICAgcmV0dXJuIHRoaXMucXVlcnkuYXNDdWJlUXVlcnkoKS5vcmRlciBhcyBUUXVlcnlPcmRlckFycmF5O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnF1ZXJ5LmFzQ3ViZVF1ZXJ5KCkub3JkZXIgfHwge30pO1xuICB9XG5cbiAgYXNPYmplY3QoKTogVFF1ZXJ5T3JkZXJPYmplY3Qge1xuICAgIHJldHVybiB0aGlzLmFzQXJyYXkoKS5yZWR1Y2UoXG4gICAgICAobWVtbywgW2tleSwgdmFsdWVdKSA9PiAoeyAuLi5tZW1vLCBba2V5XTogdmFsdWUgfSksXG4gICAgICB7fVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbHRlck1lbWJlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcXVlcnk6IFF1ZXJ5KSB7fVxuXG4gIHByaXZhdGUgZ2V0IGZpbHRlcnMoKSB7XG4gICAgLy8gVE9ETzogdXBkYXRlIHRoaXMgdHlwZSBhc3NlcnRpb24gb25jZSB0aGUgUXVlcnlCdWlsZGVyIHN1cHBvcnRzIGxvZ2ljYWwgYW5kL29yXG4gICAgcmV0dXJuICh0aGlzLnF1ZXJ5LmFzQ3ViZVF1ZXJ5KCkuZmlsdGVycyB8fCBbXSkgYXMgKFVuYXJ5RmlsdGVyIHwgQmluYXJ5RmlsdGVyKVtdO1xuICB9XG5cbiAgdXBkYXRlKGJ5OiBzdHJpbmcgfCBudW1iZXIsIHVwZGF0ZVdpdGg6IFBhcnRpYWw8RmlsdGVyPikge1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmZpbHRlcnMubWFwKChmaWx0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IGJ5IHx8IGZpbHRlci5tZW1iZXIgPT09IGJ5IHx8IGZpbHRlci5kaW1lbnNpb24gPT09IGJ5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uZmlsdGVyLFxuICAgICAgICAgIC4uLnVwZGF0ZVdpdGgsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsdGVyO1xuICAgIH0pO1xuXG4gICAgdGhpcy5xdWVyeS5zZXRQYXJ0aWFsUXVlcnkoe1xuICAgICAgZmlsdGVyczogZmlsdGVycyBhcyBGaWx0ZXJbXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFkZChmaWx0ZXI6IEZpbHRlcikge1xuICAgIHRoaXMucXVlcnkuc2V0UGFydGlhbFF1ZXJ5KHtcbiAgICAgIGZpbHRlcnM6IFsuLi50aGlzLmZpbHRlcnMsIGZpbHRlcl0sXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmUoYnk6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMucXVlcnkuc2V0UGFydGlhbFF1ZXJ5KHtcbiAgICAgIGZpbHRlcnM6IHRoaXMuZmlsdGVycy5maWx0ZXIoKGZpbHRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGZpbHRlci5tZW1iZXIgPT09IGJ5IHx8IGZpbHRlci5kaW1lbnNpb24gPT09IGJ5IHx8IGluZGV4ID09PSBieSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSksXG4gICAgfSk7XG4gIH1cblxuICBzZXQoZmlsdGVyczogRmlsdGVyW10pIHtcbiAgICB0aGlzLnF1ZXJ5LnNldFBhcnRpYWxRdWVyeSh7XG4gICAgICBmaWx0ZXJzLFxuICAgIH0pO1xuICB9XG5cbiAgcmVwbGFjZShuYW1lOiBzdHJpbmcsIHJlcGxhY2VXaXRoTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5xdWVyeS5zZXRQYXJ0aWFsUXVlcnkoe1xuICAgICAgZmlsdGVyczogdGhpcy5maWx0ZXJzLm1hcCgoZmlsdGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmlsdGVyLm1lbWJlciA/ICdtZW1iZXInIDogJ2RpbWVuc2lvbic7XG4gICAgICAgIHJldHVybiBmaWx0ZXIubWVtYmVyID09PSBuYW1lIHx8IGZpbHRlci5kaW1lbnNpb24gPT09IG5hbWVcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgLi4uZmlsdGVyLFxuICAgICAgICAgICAgICBbZmllbGRdOiByZXBsYWNlV2l0aE5hbWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBmaWx0ZXI7XG4gICAgICB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzQXJyYXkoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLmZpbHRlcnMubWFwKChmaWx0ZXIpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMucXVlcnkubWV0YS5yZXNvbHZlTWVtYmVyKGZpbHRlci5tZW1iZXIgfHwgZmlsdGVyLmRpbWVuc2lvbiwgW1xuICAgICAgICAgICdkaW1lbnNpb25zJyxcbiAgICAgICAgICAnbWVhc3VyZXMnLFxuICAgICAgICBdKSxcbiAgICAgICAgb3BlcmF0b3JzOiB0aGlzLnF1ZXJ5Lm1ldGEuZmlsdGVyT3BlcmF0b3JzRm9yTWVtYmVyKFxuICAgICAgICAgIGZpbHRlci5tZW1iZXIgfHwgZmlsdGVyLmRpbWVuc2lvbixcbiAgICAgICAgICBbJ2RpbWVuc2lvbnMnLCAnbWVhc3VyZXMnXVxuICAgICAgICApLFxuICAgICAgICAuLi5maWx0ZXIsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG4iXX0=
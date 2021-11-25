/**
 * @fileoverview added by tsickle
 * Generated from: src/query-builder/builder-meta.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class BuilderMeta {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci1tZXRhLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hcHBsZS9EZXNrdG9wL2N1YmUuanMtbWFzdGVyL3BhY2thZ2VzL2N1YmVqcy1jbGllbnQtbmd4LyIsInNvdXJjZXMiOlsic3JjL3F1ZXJ5LWJ1aWxkZXIvYnVpbGRlci1tZXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBT0EsTUFBTSxPQUFPLFdBQVc7Ozs7SUFPdEIsWUFBNEIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDcEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRU8sT0FBTzs7Y0FDUCxhQUFhLEdBQUcsbUJBQWtCLENBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FDOUMsRUFBQTtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsRUFBQSxDQUFDO1FBQzVFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2pFLHVDQUNLLE1BQU0sS0FDVCxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO29CQUN6RCxZQUFZO29CQUNaLFVBQVU7aUJBQ1gsQ0FBQyxJQUNGO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7OztJQTdCQywrQkFBeUI7O0lBQ3pCLGlDQUE2Qjs7SUFDN0IsK0JBQXdCOztJQUN4QixxQ0FBaUM7O0lBQ2pDLDhCQUE4Qzs7SUFFbEMsMkJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTWV0YSxcbiAgVEN1YmVEaW1lbnNpb24sXG4gIFRDdWJlTWVhc3VyZSxcbiAgVEN1YmVNZW1iZXIsXG59IGZyb20gJ0BjdWJlanMtY2xpZW50L2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQnVpbGRlck1ldGEge1xuICBtZWFzdXJlczogVEN1YmVNZWFzdXJlW107XG4gIGRpbWVuc2lvbnM6IFRDdWJlRGltZW5zaW9uW107XG4gIHNlZ21lbnRzOiBUQ3ViZU1lbWJlcltdO1xuICB0aW1lRGltZW5zaW9uczogVEN1YmVEaW1lbnNpb25bXTtcbiAgZmlsdGVyczogQXJyYXk8VEN1YmVNZWFzdXJlIHwgVEN1YmVEaW1lbnNpb24+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBtZXRhOiBNZXRhKSB7XG4gICAgdGhpcy5tYXBNZXRhKCk7XG4gIH1cblxuICBwcml2YXRlIG1hcE1ldGEoKSB7XG4gICAgY29uc3QgYWxsRGltZW5zaW9ucyA9IDxUQ3ViZURpbWVuc2lvbltdPihcbiAgICAgIHRoaXMubWV0YS5tZW1iZXJzRm9yUXVlcnkobnVsbCwgJ2RpbWVuc2lvbnMnKVxuICAgICk7XG5cbiAgICB0aGlzLm1lYXN1cmVzID0gPFRDdWJlTWVhc3VyZVtdPnRoaXMubWV0YS5tZW1iZXJzRm9yUXVlcnkobnVsbCwgJ21lYXN1cmVzJyk7XG4gICAgdGhpcy5zZWdtZW50cyA9IHRoaXMubWV0YS5tZW1iZXJzRm9yUXVlcnkobnVsbCwgJ3NlZ21lbnRzJyk7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gYWxsRGltZW5zaW9ucy5maWx0ZXIoKHsgdHlwZSB9KSA9PiB0eXBlICE9PSAndGltZScpO1xuICAgIHRoaXMudGltZURpbWVuc2lvbnMgPSBhbGxEaW1lbnNpb25zLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09ICd0aW1lJyk7XG4gICAgdGhpcy5maWx0ZXJzID0gWy4uLmFsbERpbWVuc2lvbnMsIC4uLnRoaXMubWVhc3VyZXNdLm1hcCgobWVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5tZW1iZXIsXG4gICAgICAgIG9wZXJhdG9yczogdGhpcy5tZXRhLmZpbHRlck9wZXJhdG9yc0Zvck1lbWJlcihtZW1iZXIubmFtZSwgW1xuICAgICAgICAgICdkaW1lbnNpb25zJyxcbiAgICAgICAgICAnbWVhc3VyZXMnLFxuICAgICAgICBdKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
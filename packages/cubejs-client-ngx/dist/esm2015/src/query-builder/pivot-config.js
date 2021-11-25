/**
 * @fileoverview added by tsickle
 * Generated from: src/query-builder/pivot-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { movePivotItem, } from '@cubejs-client/core';
import { StateSubject } from './common';
export class PivotConfig extends StateSubject {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl2b3QtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hcHBsZS9EZXNrdG9wL2N1YmUuanMtbWFzdGVyL3BhY2thZ2VzL2N1YmVqcy1jbGllbnQtbmd4LyIsInNvdXJjZXMiOlsic3JjL3F1ZXJ5LWJ1aWxkZXIvcGl2b3QtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGFBQWEsR0FHZCxNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFeEMsTUFBTSxPQUFPLFdBQVksU0FBUSxZQUEwQjs7OztJQUN6RCxZQUFZLFdBQXlCO1FBQ25DLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7Ozs7OztJQUVELFFBQVEsQ0FDTixXQUFtQixFQUNuQixnQkFBd0IsRUFDeEIsVUFBdUIsRUFDdkIsZUFBNEI7UUFFNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2YsYUFBYSxDQUNYLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFDVixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVixlQUFlLENBQ2hCLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsZ0JBQXlCO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxpQ0FDWixJQUFJLENBQUMsR0FBRyxFQUFFLEtBQ2IsZ0JBQWdCLElBQ2hCLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBtb3ZlUGl2b3RJdGVtLFxuICBQaXZvdENvbmZpZyBhcyBUUGl2b3RDb25maWcsXG4gIFRTb3VyY2VBeGlzLFxufSBmcm9tICdAY3ViZWpzLWNsaWVudC9jb3JlJztcbmltcG9ydCB7IFN0YXRlU3ViamVjdCB9IGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIFBpdm90Q29uZmlnIGV4dGVuZHMgU3RhdGVTdWJqZWN0PFRQaXZvdENvbmZpZz4ge1xuICBjb25zdHJ1Y3RvcihwaXZvdENvbmZpZzogVFBpdm90Q29uZmlnKSB7XG4gICAgc3VwZXIocGl2b3RDb25maWcpO1xuICB9XG4gIFxuICBtb3ZlSXRlbShcbiAgICBzb3VyY2VJbmRleDogbnVtYmVyLFxuICAgIGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcixcbiAgICBzb3VyY2VBeGlzOiBUU291cmNlQXhpcyxcbiAgICBkZXN0aW5hdGlvbkF4aXM6IFRTb3VyY2VBeGlzXG4gICkge1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KFxuICAgICAgbW92ZVBpdm90SXRlbShcbiAgICAgICAgdGhpcy5nZXQoKSxcbiAgICAgICAgc291cmNlSW5kZXgsXG4gICAgICAgIGRlc3RpbmF0aW9uSW5kZXgsXG4gICAgICAgIHNvdXJjZUF4aXMsXG4gICAgICAgIGRlc3RpbmF0aW9uQXhpc1xuICAgICAgKVxuICAgICk7XG4gIH1cbiAgXG4gIHNldEZpbGxNaXNzaW5nRGF0ZXMoZmlsbE1pc3NpbmdEYXRlczogYm9vbGVhbikge1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KHtcbiAgICAgIC4uLnRoaXMuZ2V0KCksXG4gICAgICBmaWxsTWlzc2luZ0RhdGVzXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * Generated from: src/query-builder/common.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
/**
 * @template T
 */
export class StateSubject {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hcHBsZS9EZXNrdG9wL2N1YmUuanMtbWFzdGVyL3BhY2thZ2VzL2N1YmVqcy1jbGllbnQtbmd4LyIsInNvdXJjZXMiOlsic3JjL3F1ZXJ5LWJ1aWxkZXIvY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUV2QyxNQUFNLE9BQU8sWUFBWTs7OztJQUd2QixZQUFZLEtBQVE7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsR0FBRztRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxLQUFRO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNGOzs7SUFiQywrQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIFN0YXRlU3ViamVjdDxUID0gYW55PiB7XG4gIHN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxUPjtcblxuICBjb25zdHJ1Y3Rvcih2YWx1ZTogVCkge1xuICAgIHRoaXMuc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QodmFsdWUpO1xuICB9XG5cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3QuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHNldCh2YWx1ZTogVCkge1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KHZhbHVlKTtcbiAgfVxufVxuIl19
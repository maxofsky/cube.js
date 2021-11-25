/**
 * @fileoverview added by tsickle
 * Generated from: src/client.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import cubejs from '@cubejs-client/core';
export class CubejsClient {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hcHBsZS9EZXNrdG9wL2N1YmUuanMtbWFzdGVyL3BhY2thZ2VzL2N1YmVqcy1jbGllbnQtbmd4LyIsInNvdXJjZXMiOlsic3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxNQVNOLE1BQU0scUJBQXFCLENBQUM7QUFRN0IsTUFBTSxPQUFPLFlBQVk7Ozs7SUFLdkIsWUFBc0MsTUFBNkI7UUFBN0IsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7UUFKNUQsV0FBTSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUtuRSxJQUFJLElBQUksQ0FBQyxNQUFNLFlBQVksVUFBVSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1lBQUMsR0FBRyxFQUFFO2dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7O0lBRU8sVUFBVTtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxNQUFNLFlBQVksVUFBVSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRXRELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNuQixNQUFNLElBQUksS0FBSyxDQUNiLHVIQUF1SCxDQUN4SCxDQUFDO3FCQUNIO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqRTtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVNLElBQUksQ0FDVCxLQUFzQixFQUN0QixPQUEyQjtRQUUzQixPQUFPLElBQUksQ0FBQyxtQkFBb0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUEsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7OztJQUVNLEdBQUcsQ0FDUixLQUFzQixFQUN0QixPQUEyQjtRQUUzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVNLE1BQU0sQ0FDWCxLQUFzQixFQUN0QixPQUEyQjtRQUUzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7O0lBRU0sSUFBSSxDQUFDLE9BQTJCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7SUFFTSxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sR0FBRyxFQUFFO1FBQzdCLE9BQU8sSUFBSSxVQUFVOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUNqQyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2QsSUFBSTs7OztZQUFFLENBQU8sS0FBSyxFQUFFLEVBQUU7O3NCQUNkLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztnQkFDN0QsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUEsQ0FBQTtTQUNGLENBQUMsRUFDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBdEVGLFVBQVU7Ozs7NENBTUksTUFBTSxTQUFDLFFBQVE7Ozs7SUFKNUIsOEJBQXFFOzs7OztJQUVyRSxpQ0FBNkI7Ozs7O0lBRWpCLDhCQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgY3ViZWpzLCB7XG4gIEN1YmVqc0FwaSxcbiAgQ3ViZUpTQXBpT3B0aW9ucyxcbiAgRHJ5UnVuUmVzcG9uc2UsXG4gIExvYWRNZXRob2RPcHRpb25zLFxuICBNZXRhLFxuICBRdWVyeSxcbiAgUmVzdWx0U2V0LFxuICBTcWxRdWVyeSxcbn0gZnJvbSAnQGN1YmVqcy1jbGllbnQvY29yZSc7XG5cbmV4cG9ydCB0eXBlIEN1YmVqc0NvbmZpZyA9IHtcbiAgdG9rZW46IHN0cmluZztcbiAgb3B0aW9ucz86IEN1YmVKU0FwaU9wdGlvbnM7XG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3ViZWpzQ2xpZW50IHtcbiAgcHVibGljIHJlYWR5JDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgcHJpdmF0ZSBjdWJlSnNBcGk6IEN1YmVqc0FwaTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogYW55IHwgT2JzZXJ2YWJsZTxhbnk+KSB7XG4gICAgaWYgKHRoaXMuY29uZmlnIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgdGhpcy5jb25maWcuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWFkeSQubmV4dCh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlYWR5JC5uZXh0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBpSW5zdGFjZSgpOiBDdWJlanNBcGkge1xuICAgIGlmICghdGhpcy5jdWJlSnNBcGkpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZyBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgICAgdGhpcy5jb25maWcuc3Vic2NyaWJlKChjb25maWcpID0+IHtcbiAgICAgICAgICB0aGlzLmN1YmVKc0FwaSA9IGN1YmVqcyhjb25maWcudG9rZW4sIGNvbmZpZy5vcHRpb25zKTtcblxuICAgICAgICAgIGlmICghdGhpcy5jdWJlSnNBcGkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgJ0Nhbm5vdCBjcmVhdGUgQ3ViZWpzQXBpIGluc3RhbmNlLiBQbGVhc2UgY2hlY2sgdGhhdCB0aGUgY29uZmlnIGlzIHBhc3NlZCBjb3JyZWN0bHkgYW5kIGNvbnRhaW5zIGFsbCByZXF1aXJlZCBvcHRpb25zLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3ViZUpzQXBpID0gY3ViZWpzKHRoaXMuY29uZmlnLnRva2VuLCB0aGlzLmNvbmZpZy5vcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jdWJlSnNBcGk7XG4gIH1cblxuICBwdWJsaWMgbG9hZChcbiAgICBxdWVyeTogUXVlcnkgfCBRdWVyeVtdLFxuICAgIG9wdGlvbnM/OiBMb2FkTWV0aG9kT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPFJlc3VsdFNldD4ge1xuICAgIHJldHVybiBmcm9tKDxQcm9taXNlPFJlc3VsdFNldD4+dGhpcy5hcGlJbnN0YWNlKCkubG9hZChxdWVyeSwgb3B0aW9ucykpO1xuICB9XG5cbiAgcHVibGljIHNxbChcbiAgICBxdWVyeTogUXVlcnkgfCBRdWVyeVtdLFxuICAgIG9wdGlvbnM/OiBMb2FkTWV0aG9kT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPFNxbFF1ZXJ5PiB7XG4gICAgcmV0dXJuIGZyb20odGhpcy5hcGlJbnN0YWNlKCkuc3FsKHF1ZXJ5LCBvcHRpb25zKSk7XG4gIH1cblxuICBwdWJsaWMgZHJ5UnVuKFxuICAgIHF1ZXJ5OiBRdWVyeSB8IFF1ZXJ5W10sXG4gICAgb3B0aW9ucz86IExvYWRNZXRob2RPcHRpb25zXG4gICk6IE9ic2VydmFibGU8RHJ5UnVuUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gZnJvbSh0aGlzLmFwaUluc3RhY2UoKS5kcnlSdW4ocXVlcnksIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHB1YmxpYyBtZXRhKG9wdGlvbnM/OiBMb2FkTWV0aG9kT3B0aW9ucyk6IE9ic2VydmFibGU8TWV0YT4ge1xuICAgIHJldHVybiBmcm9tKHRoaXMuYXBpSW5zdGFjZSgpLm1ldGEob3B0aW9ucykpO1xuICB9XG5cbiAgcHVibGljIHdhdGNoKHF1ZXJ5LCBwYXJhbXMgPSB7fSk6IE9ic2VydmFibGU8UmVzdWx0U2V0PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT5cbiAgICAgIHF1ZXJ5LnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IGFzeW5jIChxdWVyeSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdFNldCA9IGF3YWl0IHRoaXMuYXBpSW5zdGFjZSgpLmxvYWQocXVlcnksIHBhcmFtcyk7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRTZXQpO1xuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=
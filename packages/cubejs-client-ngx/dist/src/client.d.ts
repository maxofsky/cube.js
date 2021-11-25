import { Observable, BehaviorSubject } from 'rxjs';
import { CubeJSApiOptions, DryRunResponse, LoadMethodOptions, Meta, Query, ResultSet, SqlQuery } from '@cubejs-client/core';
export declare type CubejsConfig = {
    token: string;
    options?: CubeJSApiOptions;
};
export declare class CubejsClient {
    private config;
    ready$: BehaviorSubject<boolean>;
    private cubeJsApi;
    constructor(config: any | Observable<any>);
    private apiInstace;
    load(query: Query | Query[], options?: LoadMethodOptions): Observable<ResultSet>;
    sql(query: Query | Query[], options?: LoadMethodOptions): Observable<SqlQuery>;
    dryRun(query: Query | Query[], options?: LoadMethodOptions): Observable<DryRunResponse>;
    meta(options?: LoadMethodOptions): Observable<Meta>;
    watch(query: any, params?: {}): Observable<ResultSet>;
}

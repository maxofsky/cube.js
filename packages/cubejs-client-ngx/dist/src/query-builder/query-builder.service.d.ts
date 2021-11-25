import { Query as TCubeQuery, PivotConfig as TPivotConfig } from '@cubejs-client/core';
import { BehaviorSubject } from 'rxjs';
import { CubejsClient } from '../client';
import { Query } from './query';
import { BuilderMeta } from './builder-meta';
import { PivotConfig } from './pivot-config';
import { ChartType, TChartType } from './chart-type';
export declare type TQueryBuilderState = {
    query?: TCubeQuery;
    pivotConfig?: TPivotConfig;
    chartType?: TChartType;
};
export declare class QueryBuilderService {
    private _cubejs;
    private _meta;
    private _query;
    private _disableHeuristics;
    private _resolveQuery;
    private _resolveBuilderMeta;
    private _heuristicChange$;
    readonly builderMeta: Promise<BuilderMeta>;
    readonly query: Promise<Query>;
    readonly state: BehaviorSubject<TQueryBuilderState>;
    pivotConfig: PivotConfig;
    chartType: ChartType;
    private init;
    private _handleQueryChange;
    setCubejsClient(cubejsClient: CubejsClient): void;
    private subscribe;
    deserialize(state: any): Promise<void>;
    setPartialState(partialState: any): void;
    disableHeuristics(): void;
    enableHeuristics(): void;
}

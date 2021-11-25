import { Meta, Query as TCubeQuery } from '@cubejs-client/core';
import { StateSubject } from './common';
import { BaseMember, FilterMember, Order, TimeDimensionMember } from './query-members';
export declare enum MemberType {
    Measures = "measures",
    Dimensions = "dimensions",
    Segments = "segments",
    TimeDimensions = "timeDimensions",
    Filters = "filters",
    Order = "order"
}
export declare type OnChangeCallback = (newQuery: TCubeQuery, oldQuery: TCubeQuery, query: Query) => TCubeQuery;
export declare class Query extends StateSubject<TCubeQuery> {
    meta: Meta;
    private _onBeforeChange;
    measures: BaseMember;
    dimensions: BaseMember;
    segments: BaseMember;
    timeDimensions: TimeDimensionMember;
    filters: FilterMember;
    order: Order;
    constructor(meta: Meta, _onBeforeChange?: OnChangeCallback);
    private init;
    asCubeQuery(): TCubeQuery;
    setQuery(query: TCubeQuery): void;
    setPartialQuery(partialQuery: Partial<TCubeQuery>): void;
    setLimit(limit: number): void;
    isPresent(): boolean;
}

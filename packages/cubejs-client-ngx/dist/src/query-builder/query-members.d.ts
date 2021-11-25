import { TimeDimensionGranularity, TQueryOrderObject, TQueryOrderArray, Filter } from '@cubejs-client/core';
import { BehaviorSubject } from 'rxjs';
import { Query } from './query';
export declare type TOrder = 'asc' | 'desc' | 'none';
export declare type TOrderMember = {
    id: string;
    order: TOrder;
    title: string;
};
export declare class BaseMember {
    private query;
    private field;
    constructor(query: Query, field: 'measures' | 'dimensions' | 'segments');
    private get members();
    add(name: string): void;
    replace(name: string, replaceWithName: string): void;
    remove(by: string | number): void;
    set(members: string[]): void;
    asArray(): (Pick<import("@cubejs-client/core").BaseCubeMember, "title" | "name" | "shortTitle" | "isVisible"> | import("@cubejs-client/core").TCubeMeasure | import("@cubejs-client/core").TCubeDimension | {
        title: string;
        error: string;
    })[];
}
export declare class TimeDimensionMember {
    private query;
    constructor(query: Query);
    private get members();
    get granularity(): TimeDimensionGranularity;
    updateTimeDimension(by: string | number, updateWith: any): void;
    add(name: string): void;
    remove(name: string): void;
    set(timeDimensions: any[]): void;
    setDateRange(by: string | number, dateRange: string | string[]): void;
    setGranularity(by: string | number, granularity: TimeDimensionGranularity): void;
    asArray(): any[];
}
export declare class Order {
    private query;
    orderMembers: BehaviorSubject<TOrderMember[]>;
    constructor(query: Query);
    private handleOrderMembersChange;
    private handleQueryChange;
    setMemberOrder(id: string, order: TOrder): void;
    reorder(sourceIndex: number, destinationIndex: number): void;
    of(member: string): any;
    set(order: TQueryOrderObject | TQueryOrderArray): void;
    asArray(): TQueryOrderArray;
    asObject(): TQueryOrderObject;
}
export declare class FilterMember {
    private query;
    constructor(query: Query);
    private get filters();
    update(by: string | number, updateWith: Partial<Filter>): void;
    add(filter: Filter): void;
    remove(by: string | number): void;
    set(filters: Filter[]): void;
    replace(name: string, replaceWithName: string): void;
    asArray(): any[];
}

import { PivotConfig as TPivotConfig, TSourceAxis } from '@cubejs-client/core';
import { StateSubject } from './common';
export declare class PivotConfig extends StateSubject<TPivotConfig> {
    constructor(pivotConfig: TPivotConfig);
    moveItem(sourceIndex: number, destinationIndex: number, sourceAxis: TSourceAxis, destinationAxis: TSourceAxis): void;
    setFillMissingDates(fillMissingDates: boolean): void;
}

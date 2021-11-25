import { StateSubject } from './common';
export declare type TChartType = 'line' | 'area' | 'bar' | 'number' | 'table' | 'pie';
export declare class ChartType extends StateSubject<TChartType> {
    constructor(value: any);
}

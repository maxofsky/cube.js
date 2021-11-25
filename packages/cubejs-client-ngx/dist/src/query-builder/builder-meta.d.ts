import { Meta, TCubeDimension, TCubeMeasure, TCubeMember } from '@cubejs-client/core';
export declare class BuilderMeta {
    readonly meta: Meta;
    measures: TCubeMeasure[];
    dimensions: TCubeDimension[];
    segments: TCubeMember[];
    timeDimensions: TCubeDimension[];
    filters: Array<TCubeMeasure | TCubeDimension>;
    constructor(meta: Meta);
    private mapMeta;
}

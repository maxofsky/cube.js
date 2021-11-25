import { BehaviorSubject } from 'rxjs';
export declare class StateSubject<T = any> {
    subject: BehaviorSubject<T>;
    constructor(value: T);
    get(): T;
    set(value: T): void;
}

export interface Cursor<S> {
    getSnapshot(): S;
    update(fn: (state: S) => S): Cursor<S>;
    push(): void;
    subscribe(listener: () => void): () => void;
    getBy<V>(fn: (state: S) => V): V;
    createCursorOn<K extends keyof S>(key: K): Cursor<S[K]>;
}
export declare const useCursor: <S>(store: Cursor<S>) => S;
export declare class ExternalStore<S> implements Cursor<S> {
    private initState;
    private listeners;
    private state;
    constructor(initState: S);
    subscribe(listener: () => void): () => void;
    getSnapshot(): S;
    getBy<V>(fn: (state: S) => V): V;
    update(fn: (state: S) => S): this;
    push(): void;
    createCursorOn<K extends keyof S>(key: K): Cursor<S[K]>;
}
export declare class ExternalStoreCursor<S, SS> implements Cursor<SS> {
    private readonly cursor;
    private readonly getSnapshotAt;
    private readonly updateAt;
    private listeners;
    constructor(cursor: Cursor<S>, getSnapshotAt: (state: S) => SS, updateAt: (state: S, subState: SS) => S);
    getSnapshot(): SS;
    getBy<V>(fn: (state: SS) => V): V;
    update(fn: (state: SS) => SS): this;
    subscribe(listener: () => void): () => void;
    push(): void;
    createCursorOn<K extends keyof SS>(key: K): Cursor<SS[K]>;
}

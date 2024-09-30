type InspectableObject = Record<string | number | symbol, unknown>;
export declare function isPlainObject(o: unknown): o is InspectableObject;
export declare function deepEquals(node: InspectableObject, another: InspectableObject): boolean;
export declare function pick<TObj extends Record<string, any>, TKeys extends keyof TObj>(obj: TObj, ...keys: TKeys[]): Pick<TObj, TKeys>;
export declare function omit<TObj extends Record<string, any>, TKeys extends keyof TObj>(obj: TObj, ...keys: TKeys[]): Omit<TObj, TKeys>;
export declare function omitNullEntries<TObj extends Record<string, any>>(obj: TObj): {
    [K in keyof TObj]: TObj[K] extends null ? never : K;
};
export {};

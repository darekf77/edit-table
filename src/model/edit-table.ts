export interface Array {
    length: number;
}


export interface EditTable<T extends Array> {
    headers: string[];
    content: T;
};

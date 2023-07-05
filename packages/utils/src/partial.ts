export type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> }

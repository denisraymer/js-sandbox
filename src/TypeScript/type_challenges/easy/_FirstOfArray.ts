type First<T extends any[]> = 0 ? never : T[0]

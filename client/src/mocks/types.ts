export enum ResponseStatus {
    OK,
    ERROR
}

export type Response<T> = {
    status: ResponseStatus
    message: string,
    data: T[]
}

export type UseGetData<T> = (...args: any) => {
    data: Response<T>
}
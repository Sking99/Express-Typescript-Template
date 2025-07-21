import { AsyncLocalStorage } from "node:async_hooks";

type asyncLocalStorageType = {
    correlationId: string;
}

export const asyncLocalStorage = new AsyncLocalStorage<asyncLocalStorageType>();

export const getCorrelationId = (): string | undefined => {
    const asyncStore = asyncLocalStorage.getStore();
    return asyncStore?.correlationId || 'unknown error while fetching correlation ID';
};
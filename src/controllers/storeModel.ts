import { IErrorsState } from './errorHandler/model';
import { RouterState } from 'connected-react-router';
import { ILoaderState } from "./loaderReducer/models";
import { IResponseData } from './nlpData/models';
import { IPagination } from './pagination/models';

export interface IStore {
    router: RouterState;
    errors: IErrorsState;
    loader: ILoaderState;
    data: IResponseData;
    pagination: IPagination;
    textPaginationInput: string;
}

export interface IErrorResponse {
    status_code: number,
    status_message: string,
    success: boolean
}

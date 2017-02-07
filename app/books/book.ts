import { IDbImageUrl } from '../shared/image';

export interface IBook extends IDbImageUrl {
    id: string;
    category: string;
    title: string;
}

export interface IBookInfo {
    book: IBook;
    previousId: string;
    nextId: string;
}
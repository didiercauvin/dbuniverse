import { IDbImageUrl } from '../shared/image';

export interface IBook extends IDbImageUrl {
    id: number;
    category: string;
    title: string;
}
import { IDbImageUrl } from '../shared/image';

export interface ICharacter extends IDbImageUrl {
    id: string;
    category: string;
    name: string;
}

export interface ICharacterInfo {
    character: ICharacter;
    isFirst: boolean;
    isLast: boolean;
}

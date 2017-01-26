export interface ICharacter {
    id: number;
    category: string;
    imageUrl: string;
    name: string;
    description: string;
}

export interface ICharacterInfo {
    character: ICharacter;
    isFirst: boolean;
    isLast: boolean;
}
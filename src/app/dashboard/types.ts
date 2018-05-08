export interface IVideoViewDetails {
    age: number;
    region: string;
    date: string;
}

export interface IVideo {
    title: string;
    author: string;
    id: string;
    viewDetails: IVideoViewDetails[];
}

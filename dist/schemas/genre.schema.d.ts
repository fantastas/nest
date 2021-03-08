import { Document } from 'mongoose';
export declare type GenreDocument = Genre & Document;
export declare class Genre {
    genre: string;
}
export declare const GenreSchema: import("mongoose").Schema<Document<Genre>, import("mongoose").Model<Document<Genre>>, undefined>;

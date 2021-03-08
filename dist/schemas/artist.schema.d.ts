import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Genre } from './genre.schema';
export declare type ArtistDocument = Artist & Document;
export declare class Artist {
    name: string;
    songs: string[];
    genre: Genre;
}
export declare const ArtistSchema: mongoose.Schema<Document<Artist>, mongoose.Model<Document<Artist>>, undefined>;

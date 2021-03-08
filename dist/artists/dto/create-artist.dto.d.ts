import { Genre } from 'src/schemas/genre.schema';
export declare class CreateArtistDto {
    name: string;
    songs: string[];
    genre: Genre;
}

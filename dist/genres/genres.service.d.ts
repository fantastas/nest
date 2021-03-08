import { Model } from 'mongoose';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre, GenreDocument } from '../schemas/genre.schema';
import { ArtistDocument } from 'src/schemas/artist.schema';
export declare class GenresService {
    private readonly genreModel;
    private readonly artistModel;
    constructor(genreModel: Model<GenreDocument>, artistModel: Model<ArtistDocument>);
    create(res: any, createGenreDto: CreateGenreDto): Promise<Genre>;
    findAll(): Promise<Genre[]>;
    deleteMany(): Promise<Genre[]>;
    remove(res: any, genreId: any): Promise<any>;
}

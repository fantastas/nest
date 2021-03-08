import { Genre } from 'src/schemas/genre.schema';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
export declare class GenresController {
    private readonly genresService;
    constructor(genresService: GenresService);
    create(res: any, createGenreDto: CreateGenreDto): Promise<Genre>;
    findAll(res: any): Promise<void>;
    DeleteMany(): Promise<Genre[]>;
    deleteGenre(res: any, genreId: string): Promise<any>;
}

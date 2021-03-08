import { Model } from 'mongoose';
import { CreateArtistDto } from './dto/create-artist.dto';
import { Artist, ArtistDocument } from '../schemas/artist.schema';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Genre } from 'src/schemas/genre.schema';
export declare class ArtistsService {
    artistModel: Model<ArtistDocument>;
    constructor(artistModel: Model<ArtistDocument>);
    create(res: any, createArtistDto: CreateArtistDto): Promise<Artist>;
    findAll(): Promise<Artist[]>;
    deleteMany(res: any): Promise<Artist[]>;
    findOne(res: any, artistId: string): Promise<Artist>;
    update(res: any, artistId: string, updateArtistDto: UpdateArtistDto): Promise<Artist>;
    remove(res: any, artistId: string): Promise<any>;
    find(res: any, genreId: Genre): Promise<any>;
}

import { Model } from 'mongoose';
import { Artist, ArtistDocument } from '../schemas/artist.schema';
import { CreateArtistDto } from './dto/create-artist.dto';
export declare class ArtistsService {
    private artistModel;
    constructor(artistModel: Model<ArtistDocument>);
    create(createArtistDto: CreateArtistDto): Promise<Artist>;
    findAll(): Promise<Artist[]>;
}

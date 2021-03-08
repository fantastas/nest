import { Artist } from 'src/schemas/artist.schema';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
export declare class ArtistsController {
    private readonly artistsService;
    constructor(artistsService: ArtistsService);
    addArtist(res: any, createArtistDto: CreateArtistDto): Promise<Artist>;
    findAll(): Promise<Artist[]>;
    DeleteMany(res: any): Promise<Artist[]>;
    getCustomer(res: any, artistId: string): Promise<Artist>;
    updateArtist(res: any, artistId: string, updateArtistDto: UpdateArtistDto): Promise<Artist>;
    deleteArtist(res: any, artistId: string): Promise<any>;
}

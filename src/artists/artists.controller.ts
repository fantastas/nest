import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  Put,
} from '@nestjs/common';
import { Artist } from 'src/schemas/artist.schema';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  public async addArtist(@Res() res, @Body() createArtistDto: CreateArtistDto) {
    return await this.artistsService.create(res, createArtistDto);
  }

  @Get()
  public async findAll(): Promise<Artist[]> {
    return await this.artistsService.findAll();
  }

  @Delete()
  public async DeleteMany(@Res() res): Promise<Artist[]> {
    return await this.artistsService.deleteMany(res);
  }

  @Get('/:id')
  public async getCustomer(@Res() res, @Param('id') artistId: string) {
    return await this.artistsService.findOne(res, artistId);
  }

  @Put('/:id')
  public async updateArtist(
    @Res() res,
    @Param('id') artistId: string,
    @Body() updateArtistDto: UpdateArtistDto,
  ) {
    const artist = await this.artistsService.update(
      res,
      artistId,
      updateArtistDto,
    );
    return artist;
  }

  @Delete('/:id')
  public async deleteArtist(@Res() res, @Param('id') artistId: string) {
    return await this.artistsService.remove(res, artistId);
  }
}

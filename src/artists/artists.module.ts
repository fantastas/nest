import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistsController } from './artists.controller';
import { ArtistsService } from './artists.service';
import { Artist, ArtistSchema } from '../schemas/artist.schema';

const artistsFeature = MongooseModule.forFeature([
  {
    name: Artist.name,
    schema: ArtistSchema,
  },
]);

@Module({
  imports: [artistsFeature],
  controllers: [ArtistsController],
  providers: [ArtistsService],
  exports: [ArtistsService, artistsFeature],
})
export class ArtistModule {}

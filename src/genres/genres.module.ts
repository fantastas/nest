import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';
import { Genre, GenreSchema } from '../schemas/genre.schema';
import { ArtistModule } from '../artists/artists.module';
import { ArtistsService } from 'src/artists/artists.service.spec';
import { ArtistsController } from 'src/artists/artists.controller';

const genreFeature = MongooseModule.forFeature([{
  name: Genre.name, schema: GenreSchema
}]);

@Module({
  imports: [
    genreFeature,
    ArtistModule,
  ],
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule {}

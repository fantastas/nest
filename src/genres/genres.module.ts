import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';
import { Genre, GenreSchema } from '../schemas/genre.schema';
import { ArtistModule } from 'src/artists/artists.module';
import { ArtistsService } from 'src/artists/artists.service.spec';
import { ArtistsController } from 'src/artists/artists.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema }]),
    ArtistModule,
  ],
  controllers: [GenresController, ArtistsController],
  providers: [GenresService, ArtistsService],
})
export class GenresModule {}

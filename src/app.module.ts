import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistModule } from './artists/artists.module';
import { GenresModule } from './genres/genres.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    // ArtistModule,
    GenresModule,
  ],
})
export class AppModule {}

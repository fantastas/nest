import { Genre } from 'src/schemas/genre.schema';
import { IsNotEmpty } from 'class-validator';

export class CreateArtistDto {
  @IsNotEmpty()
  name: string;
  songs: string[];
  genre: Genre;
}

import { Body, Controller, Delete, Get, Post, Res } from '@nestjs/common';
import { Genre } from 'src/schemas/genre.schema';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Param } from '@nestjs/common';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  async create(@Res() res, @Body() createGenreDto: CreateGenreDto) {
    return await this.genresService.create(res, createGenreDto);
  }

  @Get()
  async findAll(@Res() res) {
    const genres = await this.genresService.findAll();
    res.send(genres);
  }

  @Delete()
  async DeleteMany(): Promise<Genre[]> {
    return this.genresService.deleteMany();
  }
  @Delete('/:id')
  public async deleteGenre(@Res() res, @Param('id') genreId: string) {
    return await this.genresService.remove(res, genreId);
  }
}

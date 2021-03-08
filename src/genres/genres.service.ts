import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre, GenreDocument } from '../schemas/genre.schema';
import { Res } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { Artist, ArtistDocument } from 'src/schemas/artist.schema';

@Injectable()
export class GenresService {
  constructor(
    @InjectModel(Genre.name)
    private readonly genreModel: Model<GenreDocument>,
    @InjectModel(Artist.name)
    private readonly artistModel: Model<ArtistDocument>,
  ) {}

  async create(@Res() res, createGenreDto: CreateGenreDto): Promise<Genre> {
    const createdGenre = new this.genreModel(createGenreDto);
    return res.status(HttpStatus.OK).json({
      message: 'Genre has been created successfully',
      createdGenre,
    });
  }

  async findAll(): Promise<Genre[]> {
    return await this.genreModel.find().exec();
  }

  async deleteMany(): Promise<Genre[]> {
    return this.genreModel.deleteMany().exec();
  }
  async remove(@Res() res, genreId: any): Promise<any> {
    if (!genreId) {
      throw new NotFoundException('Genre ID does not exist');
    }
    const deletedGenre = await this.genreModel.findByIdAndRemove(genreId);
    const inart = await this.artistModel.find(genreId);
    this.artistModel.remove(inart);
    if (!deletedGenre) {
      throw new NotFoundException('Genre does not exist');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Genre has been deleted',
      deletedGenre,
    });
  }
}

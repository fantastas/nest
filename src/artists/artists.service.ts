import { HttpStatus, Injectable, NotFoundException, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArtistDto } from './dto/create-artist.dto';
import { Artist, ArtistDocument } from '../schemas/artist.schema';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Genre } from 'src/schemas/genre.schema';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectModel(Artist.name)
    public artistModel: Model<ArtistDocument>,
  ) {}

  async create(@Res() res, createArtistDto: CreateArtistDto): Promise<Artist> {
    const createdArtist = new this.artistModel(createArtistDto);
    const isCreated = this.artistModel.findOne({ name: createdArtist.name });
    if (isCreated) {
      createdArtist.save();
      return res.status(HttpStatus.OK).json({
        message: 'Artist has been created successfully',
        createdArtist,
      });
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Artist was not created!',
        status: 400,
      });
    }
  }

  async findAll(): Promise<Artist[]> {
    return this.artistModel.find().exec();
  }

  async deleteMany(@Res() res): Promise<Artist[]> {
    this.artistModel.deleteMany().exec();
    return res.status(HttpStatus.OK).json({
      message: 'Artists have been created successfully',
    });
  }

  async findOne(@Res() res, artistId: string): Promise<Artist> {
    const artist = await this.artistModel.findById({ _id: artistId }).exec();
    if (!artist) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json(`ID: ${artistId} doesn't exist.`);
    }
    return res.status(HttpStatus.OK).json(artist);
  }

  async update(
    @Res() res,
    artistId: string,
    updateArtistDto: UpdateArtistDto,
  ): Promise<Artist> {
    try {
      const existingArtist = await this.artistModel.findByIdAndUpdate(
        { _id: artistId },
        updateArtistDto,
      );
      existingArtist.save();
      if (!existingArtist) {
        throw new NotFoundException('Artist does not exist!');
      }
      return res.status(HttpStatus.OK).json({
        message: 'Artist has been successfully updated',
        existingArtist,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Artist not updated!',
        status: 400,
      });
    }
  }

  async remove(@Res() res, artistId: string): Promise<any> {
    if (!artistId) {
      throw new NotFoundException('Artist ID does not exist');
    }
    const deletedArtist = await this.artistModel.findByIdAndRemove(artistId);
    if (!deletedArtist) {
      throw new NotFoundException('Artist does not exist');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Artist has been deleted',
      deletedArtist,
    });
  }
  async find(@Res() res, genreId: Genre): Promise<any> {
    await this.artistModel.find({ genre: genreId });
  }
}

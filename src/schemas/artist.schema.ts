import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Genre } from './genre.schema';

export type ArtistDocument = Artist & Document;

@Schema()
export class Artist {
  @Prop({ required: true })
  name: string;
  @Prop()
  songs: string[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }] })
  genre: Genre;
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);

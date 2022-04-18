import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PanoramaDocument = Panorama & Document;

@Schema()
export class Panorama {
  @Prop()
  photoURL: string;
}

export const PanoramaSchema = SchemaFactory.createForClass(Panorama);

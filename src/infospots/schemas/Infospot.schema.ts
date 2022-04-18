import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InfospotDocument = Infospot & Document;

@Schema()
export class Infospot {
  @Prop()
  panoramaId: string;
  @Prop()
  coordinateX: string;
  @Prop()
  coordinateY: string;
  @Prop()
  coordinateZ: string;
  @Prop()
  type: string;
  @Prop()
  infospotText: string;
  @Prop()
  imageLink: string;
  @Prop()
  videoLink: string;
  @Prop()
  startPanoIndex: number;
  @Prop()
  arrivePanoIndex: number;
}

export const InfospotSchema = SchemaFactory.createForClass(Infospot);

import { IsString, IsNumber } from 'class-validator';

export class CreateInfospotDto {
  @IsString()
  panoramaId: string;

  @IsNumber()
  coordinateX: number;

  @IsNumber()
  coordinateY: number;

  @IsNumber()
  coordinateZ: number;

  @IsString()
  type: string;

  @IsString()
  infospotText: string;

  @IsString()
  imageLink: string;

  @IsString()
  videoLink: string;

  @IsNumber()
  arrivePanoIndex: number;
}

import { IsString } from 'class-validator';

export class CreatePanoramaDto {
  @IsString()
  photoURL: string;
}

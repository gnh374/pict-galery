import { Controller, Get } from '@nestjs/common';
import * as imagesData from '../data/images.json';

@Controller('images')
export class ImagesController {
  @Get()
  findAll() {
    return imagesData;
  }
}
// src/presentation/controllers/item.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CreateItemDto } from '../../application/dtos/create-item.dto';
import { CreateItemUseCase } from '../../application/use-cases/create-item';

@Controller('items')
export class ItemController {
  constructor(private readonly createItemUseCase: CreateItemUseCase) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.createItemUseCase.execute(createItemDto);
  }
}

// src/application/use-cases/create-item.use-case.ts
import { Inject, Injectable } from '@nestjs/common';
import { IItemRepository } from '../../domain/repositories/item.repository.interface';
import { Item } from '../../domain/models/item.model';
import { CreateItemDto } from '../dtos/create-item.dto';

@Injectable()
export class CreateItemUseCase {
  constructor(
    @Inject('IItemRepository') private readonly itemRepository: IItemRepository,
  ) {}

  async execute(data: CreateItemDto): Promise<Item> {
    const item = new Item(undefined, data.name, data.completed);
    return this.itemRepository.create(item);
  }
}

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from '../entities/item.entity';
import { IItemRepository } from '../../domain/repositories/item.repository.interface';
import { Item } from '../../domain/models/item.model';

@Injectable()
export class TypeOrmItemRepository implements IItemRepository {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly repository: Repository<ItemEntity>,
  ) {}

  async create(item: Partial<Item>): Promise<Item> {
    const entity = this.repository.create(item);
    const savedEntity = await this.repository.save(entity);
    return this.toDomain(savedEntity);
  }

  async findAll(): Promise<Item[]> {
    const entities = await this.repository.find();
    return entities.map(this.toDomain);
  }

  async findById(id: number): Promise<Item> {
    const entity = await this.repository.findOneBy({ id });
    if (!entity) throw new Error(`Item with ID ${id} not found`);
    return this.toDomain(entity);
  }

  async update(id: number, item: Partial<Item>): Promise<Item> {
    await this.repository.update(id, item);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  private toDomain(entity: ItemEntity): Item {
    return new Item(entity.id, entity.name, entity.completed);
  }
}

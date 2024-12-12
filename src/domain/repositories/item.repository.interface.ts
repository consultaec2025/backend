import { Item } from '../models/item.model';

export interface IItemRepository {
  create(item: Partial<Item>): Promise<Item>;
  findAll(): Promise<Item[]>;
  findById(id: number): Promise<Item>;
  update(id: number, item: Partial<Item>): Promise<Item>;
  delete(id: number): Promise<void>;
}

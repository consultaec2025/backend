// src/infrastructure/config/item-config.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from '../entities/item.entity';
import { TypeOrmItemRepository } from '../repositories/item.repository';
import { CreateItemUseCase } from '../../application/use-cases/create-item';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  providers: [
    {
      provide: 'IItemRepository',
      useClass: TypeOrmItemRepository,
    },
    CreateItemUseCase,
  ],
  exports: ['IItemRepository', CreateItemUseCase],
})
export class ItemConfigModule {}

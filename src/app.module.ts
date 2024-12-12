import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/database/database.module';
import { ItemController } from './presentation/controllers/item.controller';
import { ItemConfigModule } from './infrastructure/config/item-config.module';

@Module({
  imports: [DatabaseModule, ItemConfigModule],
  controllers: [ItemController],
  providers: [],
})
export class AppModule {}

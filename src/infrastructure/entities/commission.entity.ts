import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';

@Entity('commissions')
export class Commission extends BaseEntity {
 @Column({
   type: 'varchar',
   length: 100
 })
 type: string;

 @Column({
   type: 'decimal',
   precision: 10,
   scale: 2
 })
 price: number;
}
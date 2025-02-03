import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';

@Entity('taxes')
export class Tax extends BaseEntity {
 @Column({
   type: 'varchar',
   length: 100
 })
 name: string;

 @Column({
   type: 'decimal',
   precision: 10,
   scale: 2
 })
 value: number;
}
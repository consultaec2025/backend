import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

export abstract class BaseEntity {
 @PrimaryGeneratedColumn({
   type: 'bigint',
   name: 'id',
 })
 id: number;

 @CreateDateColumn({
   name: 'created_at',
   type: 'timestamptz',
   default: () => 'CURRENT_TIMESTAMP',
 })  
 createdAt: Date;

 @UpdateDateColumn({
   name: 'updated_at', 
   type: 'timestamptz',
   default: () => 'CURRENT_TIMESTAMP',
 })
 updatedAt: Date;

 @Exclude()
 @DeleteDateColumn({
   name: 'deleted_at',
   type: 'timestamptz',
   nullable: true,
 })
 deletedAt: Date;
}
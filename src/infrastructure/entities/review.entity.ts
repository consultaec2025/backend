import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { User } from './user.entity';
import { Space } from './space.entity';

@Entity('reviews')
export class Review extends BaseEntity {
 @Column({
   type: 'varchar',
   length: 255,
   name: 'field'
 })
 field: string;

 @Column({
   type: 'varchar',
   length: 100,
   name: 'field_type'  
 })
 fieldType: string;

 @ManyToOne(() => User)
 @JoinColumn({ name: 'user_id' })
 user: User;

 @ManyToOne(() => Space)
 @JoinColumn({ name: 'space_id' })
 space: Space;
}
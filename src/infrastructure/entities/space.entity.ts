import { Entity, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { User } from './user.entity';
import { Schedule } from './schedule.entity';
import { Price } from './price.entity';

@Entity('spaces')
export class Space extends BaseEntity {
 @Column({
   type: 'varchar',
   length: 255,
 })
 name: string;

 @Column({
   type: 'varchar',
   length: 255,
 })
 address: string;

 @Column({
   type: 'varchar',
   length: 50,
 })
 phone: string;

 @ManyToOne(() => User)
 @JoinColumn({ name: 'user_id' })
 user: User;

 @OneToMany(() => Schedule, (schedule) => schedule.space)
 schedules: Schedule[];

 @OneToMany(() => Price, (price) => price.space)
 prices: Price[];

 @ManyToMany(() => User, (user) => user.spaces)
 users: User[];
}
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Space } from './space.entity';

@Entity('schedules')
export class Schedule extends BaseEntity {
 @Column({
   type: 'timestamptz',
   name: 'start_date'
 })
 startDate: Date;

 @Column({
   type: 'timestamptz',
   name: 'end_date'
 })
 endDate: Date;

 @Column({
   type: 'integer'
 })
 people: number;

 @ManyToOne(() => Space, (space) => space.schedules)
 @JoinColumn({ name: 'space_id' })
 space: Space;
}
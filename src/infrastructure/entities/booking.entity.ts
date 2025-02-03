import { Entity, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { User } from './user.entity';
import { Schedule } from './schedule.entity';
import { PaymentMethod } from './payment-method.entity';
import { Transaction } from './transaction.entity';

@Entity('bookings')
export class Booking extends BaseEntity {
 @ManyToOne(() => User)
 @JoinColumn({ name: 'user_id' })
 user: User;

 @ManyToOne(() => Schedule)
 @JoinColumn({ name: 'schedule_id' })
 schedule: Schedule;

 @ManyToOne(() => PaymentMethod)
 @JoinColumn({ name: 'payment_method_id' })
 paymentMethod: PaymentMethod;

 @Column({
   type: 'decimal',
   precision: 10,
   scale: 2
 })
 subtotal: number;

 @Column({
   type: 'decimal',
   precision: 10,
   scale: 2
 })
 total: number;

 @OneToMany(() => Transaction, (transaction) => transaction.booking)
 transactions: Transaction[];

 @ManyToMany(() => User, (user) => user.bookings)
 @JoinTable({
   name: 'booking_users',
   joinColumn: { name: 'booking_id' },
   inverseJoinColumn: { name: 'user_id' }
 })
 users: User[];
}
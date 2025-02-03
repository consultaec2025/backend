import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Booking } from './booking.entity';

@Entity('transactions')
export class Transaction extends BaseEntity {
 @ManyToOne(() => Booking, (booking) => booking.transactions)
 @JoinColumn({ name: 'booking_id' })
 booking: Booking;
}
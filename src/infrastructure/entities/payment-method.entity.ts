import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import {Booking} from "./booking.entity";

@Entity('payment_methods')
export class PaymentMethod extends BaseEntity {
    @Column({
        type: 'varchar',
        length: 100,
    })
    name: string;

    @OneToMany(() => Booking, (booking) => booking.paymentMethod)
    bookings: Booking[];

}
import { Entity, Column, ManyToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Role } from './role.entity';
import { Space } from './space.entity';
import { Booking } from './booking.entity';

@Entity('users')
export class User extends BaseEntity {
 @Column()
 name: string;

 @Column()
 address: string;

 @Column()
 phone: string;

 @Column()
 email: string;

 @ManyToMany(() => Role, (role) => role.users)
 roles: Role[];

 @ManyToMany(() => Space, (space) => space.users)
 spaces: Space[];

 @ManyToMany(() => Booking, (booking) => booking.users)
 bookings: Booking[];
}
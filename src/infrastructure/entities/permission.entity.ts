import { Entity, Column, ManyToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Role } from './role.entity';

@Entity('permissions')
export class Permission extends BaseEntity {
 @Column({
   type: 'enum',
   enum: ['read', 'write'],
 })
 type: string;

 @Column()
 section: string;

 @ManyToMany(() => Role, (role) => role.permissions)
 roles: Role[];
}
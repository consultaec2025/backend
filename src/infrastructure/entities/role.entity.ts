import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Permission } from './permission.entity';
import { User } from './user.entity';

@Entity('roles')
export class Role extends BaseEntity {
 @Column({
   type: 'enum',
   enum: ['owner', 'user', 'admin'],
 })
 name: string;

 @ManyToMany(() => Permission, (permission) => permission.roles)
 @JoinTable({
   name: 'role_permission',
   joinColumn: { name: 'role_id', referencedColumnName: 'id' },
   inverseJoinColumn: { name: 'permission_id', referencedColumnName: 'id' },
 })
 permissions: Permission[];

 @ManyToMany(() => User, (user) => user.roles)
 @JoinTable({
   name: 'user_role',
   joinColumn: { name: 'role_id', referencedColumnName: 'id' },
   inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
 })
 users: User[];
}
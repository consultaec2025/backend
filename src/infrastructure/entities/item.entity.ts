import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('items')
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  completed: boolean;
}

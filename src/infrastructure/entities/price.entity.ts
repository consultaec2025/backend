    import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
    import { BaseEntity } from './base/base.entity';
    import { Space } from './space.entity';

    @Entity('prices')
    export class Price extends BaseEntity {
    @Column({
    type: 'enum',
    enum: ['h', 'd', 'm'],
    name: 'unit_time'
    })
    unitTime: string;

    @Column({
    type: 'decimal',
    precision: 10,
    scale: 2
    })
    value: number;

    @Column({
    type: 'integer'
    })
    from: number;

    @Column({
    type: 'integer'
    })
    to: number;

    @ManyToOne(() => Space, (space) => space.prices)
    @JoinColumn({ name: 'space_id' })
    space: Space;
    }
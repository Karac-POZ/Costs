import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('costs')
export class Cost {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    datetime: Date;

    @Column()
    author: string;

    @Column('decimal')
    sum: number;

    @Column()
    category: string;

    @Column({ nullable: true })
    comment: string;
}
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Category {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, default: 0 })
    parent_id: number;

    @Column()
    name: string;

    @Column({ nullable: true, default: '' })
    note: string;
  
}

import { IsDefined, IsNumber, IsString, Min, MinLength } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(3, { always: true })
  @Column()
  sku: number;

  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(3, { always: true })
  @Column()
  name: string;

  @IsNumber()
  @Min(0, { always: true })
  @Column()
  price: number;

  // @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  // created_at: Date;

  // @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  // updated_at: Date;
}

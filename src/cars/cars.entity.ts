import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';

@Entity()
@ObjectType()
export class Cars {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  user_id: string;

  @Column({ type: 'varchar', length: 20 })
  model: string;

  @Column({ type: 'varchar', length: 20 })
  mark: string;

  @Column({ type: 'varchar', length: 20 })
  engine: string;

  @Column({ type: 'int' })
  horse_power: number;

  @Column({ type: 'date' })
  buyed_at: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'varchar', length: 20 })
  vehicle_type: string;

  @ManyToOne(() => User, (user) => user.cars)
  user: User;
}

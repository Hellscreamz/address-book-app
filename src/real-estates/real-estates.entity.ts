import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';

@Entity()
@ObjectType()
export class RealEstates {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 20 })
  real_estate_type: string;

  @CreateDateColumn({ type: 'timestamp' })
  bought_at: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int' })
  square_meters: number;

  @Column({ type: 'varchar', length: 30 })
  city: string;

  @Column({ type: 'varchar', length: 30 })
  country: string;

  @ManyToOne(() => User, (user) => user.real_estates)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

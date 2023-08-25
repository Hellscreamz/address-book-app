import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';

@Entity()
@ObjectType()
export class RealEstates {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  user_id: string;

  @Column({ type: 'varchar', length: 20 })
  real_estate_type: string;

  @Column({ type: 'date' })
  buyed_at: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int' })
  square_meters: number;

  @Column({ type: 'varchar', length: 30 })
  city: string;

  @Column({ type: 'varchar', length: 30 })
  country: string;

  @ManyToOne(() => User, (user) => user.real_estates)
  user: User;
}

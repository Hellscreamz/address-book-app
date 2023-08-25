import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';
import { Cars } from 'src/cars/cars.entity';
import { RealEstates } from 'src/real-estates/real-estates.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  first_name: string;

  @Column({ type: 'varchar', length: 100 })
  last_name: string;

  @Column({ type: 'bigint' })
  mobile_phone: number;

  @OneToMany(() => Cars, (car) => car.user, { eager: true })
  cars: Cars[];

  @OneToMany(() => RealEstates, (estate) => estate.user, { eager: true })
  real_estates: RealEstates[];
}

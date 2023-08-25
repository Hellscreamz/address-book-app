import { MigrationInterface, QueryRunner } from 'typeorm';

export class LengthFields1692954519191 implements MigrationInterface {
  name = 'LengthFields1692954519191';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "real_estates" DROP COLUMN "real_estate_type"`,
    );
    await queryRunner.query(
      `ALTER TABLE "real_estates" ADD "real_estate_type" character varying(20) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "real_estates" DROP COLUMN "city"`);
    await queryRunner.query(
      `ALTER TABLE "real_estates" ADD "city" character varying(30) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "real_estates" DROP COLUMN "country"`);
    await queryRunner.query(
      `ALTER TABLE "real_estates" ADD "country" character varying(30) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "cars_entity" DROP COLUMN "model"`);
    await queryRunner.query(
      `ALTER TABLE "cars_entity" ADD "model" character varying(20) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "cars_entity" DROP COLUMN "mark"`);
    await queryRunner.query(
      `ALTER TABLE "cars_entity" ADD "mark" character varying(20) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "cars_entity" DROP COLUMN "engine"`);
    await queryRunner.query(
      `ALTER TABLE "cars_entity" ADD "engine" character varying(20) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "cars_entity" DROP COLUMN "vehicle_type"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cars_entity" ADD "vehicle_type" character varying(20) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "address_book" DROP COLUMN "city"`);
    await queryRunner.query(
      `ALTER TABLE "address_book" ADD "city" character varying(30) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "address_book" DROP COLUMN "country"`);
    await queryRunner.query(
      `ALTER TABLE "address_book" ADD "country" character varying(30) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "address_book" DROP COLUMN "country"`);
    await queryRunner.query(
      `ALTER TABLE "address_book" ADD "country" character varying(100) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "address_book" DROP COLUMN "city"`);
    await queryRunner.query(
      `ALTER TABLE "address_book" ADD "city" character varying(100) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "cars_entity" DROP COLUMN "vehicle_type"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cars_entity" ADD "vehicle_type" character varying(100) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "cars_entity" DROP COLUMN "engine"`);
    await queryRunner.query(
      `ALTER TABLE "cars_entity" ADD "engine" character varying(50) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "cars_entity" DROP COLUMN "mark"`);
    await queryRunner.query(
      `ALTER TABLE "cars_entity" ADD "mark" character varying(100) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "cars_entity" DROP COLUMN "model"`);
    await queryRunner.query(
      `ALTER TABLE "cars_entity" ADD "model" character varying(100) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "real_estates" DROP COLUMN "country"`);
    await queryRunner.query(
      `ALTER TABLE "real_estates" ADD "country" character varying(100) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "real_estates" DROP COLUMN "city"`);
    await queryRunner.query(
      `ALTER TABLE "real_estates" ADD "city" character varying(100) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "real_estates" DROP COLUMN "real_estate_type"`,
    );
    await queryRunner.query(
      `ALTER TABLE "real_estates" ADD "real_estate_type" character varying(100) NOT NULL`,
    );
  }
}

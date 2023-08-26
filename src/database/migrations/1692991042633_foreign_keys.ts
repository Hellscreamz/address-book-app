import { MigrationInterface, QueryRunner } from 'typeorm';

export class ForeignKeys1692991042633 implements MigrationInterface {
  name = 'ForeignKeys1692991042633';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "model" character varying(20) NOT NULL, "mark" character varying(20) NOT NULL, "engine" character varying(20) NOT NULL, "horse_power" integer NOT NULL, "bought_at" date NOT NULL, "price" numeric(10,2) NOT NULL, "vehicle_type" character varying(20) NOT NULL, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "real_estates" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "real_estate_type" character varying(20) NOT NULL, "bought_at" date NOT NULL, "price" numeric(10,2) NOT NULL, "square_meters" integer NOT NULL, "city" character varying(30) NOT NULL, "country" character varying(30) NOT NULL, CONSTRAINT "PK_7213408ef49a1b9507bbadd065c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying(100) NOT NULL, "last_name" character varying(100) NOT NULL, "mobile_phone" bigint NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "address_book" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying(255) NOT NULL, "city" character varying(30) NOT NULL, "country" character varying(30) NOT NULL, "email_address" character varying(150) NOT NULL, "zip_code" integer NOT NULL, "user_id" uuid, CONSTRAINT "REL_3621dd87bd3f707b185d90d119" UNIQUE ("user_id"), CONSTRAINT "PK_188a02dee277dd0f9e488fdf06f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "cars" ADD CONSTRAINT "FK_673bd295e52580c0fb09d0fbbb8" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "real_estates" ADD CONSTRAINT "FK_92497035d488365ec79061aa59e" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "address_book" ADD CONSTRAINT "FK_3621dd87bd3f707b185d90d1197" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "address_book" DROP CONSTRAINT "FK_3621dd87bd3f707b185d90d1197"`,
    );
    await queryRunner.query(
      `ALTER TABLE "real_estates" DROP CONSTRAINT "FK_92497035d488365ec79061aa59e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cars" DROP CONSTRAINT "FK_673bd295e52580c0fb09d0fbbb8"`,
    );
    await queryRunner.query(`DROP TABLE "address_book"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "real_estates"`);
    await queryRunner.query(`DROP TABLE "cars"`);
  }
}

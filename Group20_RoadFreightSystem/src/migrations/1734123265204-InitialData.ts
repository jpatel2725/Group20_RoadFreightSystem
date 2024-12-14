import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialData1648840210261 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO truck (brand, load, capacity, year, numRepairs) VALUES
      ('Volvo', 1500, 2000, 2018, 5),
      ('Ford', 1200, 2500, 2020, 3),
      ('Tesla', 1000, 1800, 2021, 1)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM truck`);
  }
}

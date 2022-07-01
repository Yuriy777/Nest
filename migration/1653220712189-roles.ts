import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class roles1653220712189 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'roles',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'role',
            type: 'string',
          },
        ],
      }),
      true,
    );
    await queryRunner.query('insert into roles values ("admin")');
    await queryRunner.query('insert into roles values ("super-admin")');
    await queryRunner.query('insert into roles values ("user")');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

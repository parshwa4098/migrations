import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
  createdAt: false,
  updatedAt: false,
})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare phone: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;
}

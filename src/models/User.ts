import { DataTypes, Model } from 'sequelize';
import database from '../../src/config/database';
export class User extends Model {}

User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},{
    sequelize: database,
    modelName: 'User'
});



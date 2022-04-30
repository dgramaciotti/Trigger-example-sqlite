import { DataTypes, Model } from 'sequelize';
import sequelize from '../../src/config/database';
import { User } from './User';

export class Todo extends Model {}

Todo.init({
    task: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},{
    sequelize,
    modelName: 'Todo'
});

User.hasMany(Todo);
import express from 'express';
import { Router, Request, Response } from 'express';
import { Todo } from '../models/Todo';
import { User } from '../models/User';

const routes = Router();

routes.get('/users', async (req,res) => {
    const users = await User.findAll({
        include: [
            {
                model: Todo
            }
        ]
    });
    return res.send(users);
});
routes.get('/users/:id', async (req,res) => {
    const user = await User.findOne({ where: { id: req.params.id }});
    return res.send(user);
});

routes.post('/users', async (req, res) => {
    const user = req.body.user;
    try{
        const insert = await User.create({
            name: user.name,
            email: user.email
        });
        return res.send(insert);
    }catch (e){
        return res.status(500).send({error: new Error(`Failed to insert User - ${e}`)});
    }
});

routes.post('/users/bulk-create', async (req,res) => {
    try{
        const users = req.body.users;
        const inserts = await User.bulkCreate(users, {returning: true});
        return res.send(inserts);
    }catch (e){
        return res.status(500).send(`Error while bulk creating - ${e}`);
    }
})

routes.put('/users/:id', async (req,res) => {
    const user = req.body.user;
    try{
        const update = await User.update({
            name: user.name,
            email: user.email
        }, { where: { id: req.params.id } });
        return res.send(update);
    }catch (e){
        return res.status(500).send({error: new Error(`Failed to update User - ${e}`)});
    }
});

routes.delete('/users/:id', async (req,res) => {
    return res.send(User.destroy({ where: { id: req.params.id } }));
})

export default routes;

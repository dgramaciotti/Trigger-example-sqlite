import express from 'express';
import { Router } from 'express';
import { Todo } from '../models/Todo';

const routes = Router();

routes.get('/todos', async (req,res) => {
    try{
        const todos = await Todo.findAll();
        return res.send(todos);
    } catch(e){
        return res.status(500).send(`Error while getting todos - ${e}`)
    }
});

routes.get('/todos/:id', async (req,res) => {
    try{
        const todo = await Todo.findOne({ where: { id: req.params.id }});
        return res.send(todo);
    } catch(e){
        return res.status(500).send(`Error while getting todo - ${e}`)
    }
});

routes.post('/todos', async (req,res) => {
    const todo = req.body.todo;
    try{
        const insert = await Todo.create({
            ...todo
        });
        return res.send(insert);
    } catch(e){
        return res.status(500).send(`Error while creating todo - ${e}`)
    }
});

routes.post('/todos/bulk-create', async (req,res) => {
    const todos = req.body.todos;
    try{
        const inserts = await Todo.bulkCreate(todos, { returning: true });
        return res.send(inserts);
    } catch(e){
        return res.status(500).send(`Error while creating todos - ${e}`)
    }
});

routes.put('/todos/:id', async (req,res) => {
    const todo = req.body.todo;
    try{
        const update = await Todo.update({
            ...todo
        }, { where: { id: req.params.id }});
        return res.send(update);
    } catch(e){
        return res.status(500).send(`Error while updating todo - ${e}`)
    }
});

routes.delete('/todos/:id', async (req,res) => {
    return res.send(Todo.destroy({ where: { id: req.params.id } }));
});

export default routes;
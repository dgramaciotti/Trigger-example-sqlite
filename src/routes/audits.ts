import database from "../config/database";
import { Router } from 'express';

const routes = Router();


routes.get('/audits', async (req,res) => {
    try{
        const [results, ] = await database.query(`SELECT * FROM todos_audit`);
        return res.send(results);
    } catch(e){
        return res.status(500).send(`Error getting audits - ${e}`);
    }
});

export default routes;

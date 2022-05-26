import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import cors from 'cors';
import beachData from '../../data/beachData';

const handler = nc<NextApiRequest, NextApiResponse>()
    // use connect based middleware
    .use(cors())
    // express like routing for methods
    .get((_req, res) => {
        res.status(200);
        res.json({ data: beachData });
    });

export default handler;

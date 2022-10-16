import posts from 'controllers/posts';
import {Express} from 'express-serve-static-core';

export default function initRoutes(app: Express) {

  app.use('/posts', posts);

  app.get('/', (req, res) => {
    res.contentType('html');
    res.send('WTF')
  })
}
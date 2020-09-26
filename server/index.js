import express from 'express';
import initExpress from './initExpress';
import initRoutes from './routes';
import initPassport from './authent/index';
import connectMongoDb from './connectMongoDb';

const port = 3080;
const app = express();

connectMongoDb();
initPassport();
initExpress(app);
initRoutes(app);

// auth test:
/*
app.get('*', (req) => {
    const authenticated = req.isAuthenticated();

    console.log('authenticated ==> ', authenticated);
    console.log(req.user);
});
*/

app.listen(port, () => {
    console.log('--------------------------');
    console.log('===> Starting Server . . .');
    console.log(`===> Environment: ${process.env.NODE_ENV}`);
    console.log(`===> Listening at http://localhost:${port}`);
    console.log('--------------------------');
});

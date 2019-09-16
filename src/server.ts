import cors from 'cors';
import express from 'express';
import company from './company';

const app = express();
app.use(cors());
// An api endpoint that returns the mock company data
app.get('/api/getCompany', (req,res) => {
    res.json(company);
});
app.listen(3000, () => console.log('Directory backend listening'));
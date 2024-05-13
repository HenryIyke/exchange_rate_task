import express from 'express';
import { currencies } from '../models/currency'

const router = express.Router();

//List available currencies endpoint
router.get('/', (req: Request, res: Response) => {
    return res.status(200).json(currencies);
});

//save currencies to user profile endpoint
router.post('/save', (req: Request, res: Response) => {
    const {email, selectedCurrencies } = req.body;
    // Find user  by email
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(404).json({ error: 'user not found'});
    }
    // Update user's saved currencies
    user.currencies = selectedCurrencies;
    return res.status(200).json({ message: 'Currencies saved successfully', user});
});

//Check exchange rates of saved currencies endppoint
router.get('/exchange-rates/:email', (req: Request, res: Response) => {
    const email = req.params.email;
    // Find user by email
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(404).json({ error: 'user not found' });
    }
    // get exchange rates for user's saved currencies
    const exchangeRates = currencies.filter(currency => user.currencies.includes(currency.name))
    return res.status(200).json(exchangeRates);
});

export { router as currencyRoutes };
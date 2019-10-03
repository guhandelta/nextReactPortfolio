const express = require('express');
const router = express.Router();

const portfolioControllers = require('../controllers/portfolio');
const authService = require('../services/auth');

router.post('', authService.checkJWT, 
                authService.checkRole('siteOwner'),
                portfolioControllers.savePortfolio
            );

router.get('', authService.checkJWT, 
                authService.checkRole('siteOwner'), 
                portfolioControllers.getPortfolios
            );

module.exports = router;
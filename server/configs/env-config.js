IS_PROD=process.env.NODE_ENV === 'production' ? true : false;
CLIENT= IS_PROD ? 'https://linita-unity.netlify.app/' : 'http://localhost:3000';

module.exports = { CLIENT, IS_PROD };
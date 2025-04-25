// Carregar variáveis de ambiente
require('dotenv').config(); 

// Importar a biblioteca Twit (para interação com a API do Twitter)
const Twit = require('twit');

// Configurar o cliente Twitter com as chaves e tokens do arquivo .env
const twitterClient = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// Testar a conexão com a API do Twitter
twitterClient.get('account/verify_credentials', { skip_status: true }, function(err, data, response) {
    if (err) {
        console.error('Erro ao se conectar com o Twitter:', err);
    } else {
        console.log('Conectado ao Twitter com sucesso!');
        console.log(data);  // Aqui você verá os dados do seu perfil
    }
});

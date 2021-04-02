const axios = require('axios');

test('Login', async function (){
    const response = await axios({
        url: 'http://localhost:3000/api/usuario/v1/login',
        method: "post",
        data: {"email": "maykealison@gmail.com", "senha": "123456"}
    });
    console.log(response.data);
});

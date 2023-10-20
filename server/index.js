const express = require('express');
const cors = require('cors')

const app = express();
const PORT = 3001;
var dados = [{
    id:"1",first_name:"Jean", last_name:"10", email:"jeanomelhor@gmail.com", phone:1234567, password:"122344"
    
}]
var idn = 1



app.use(cors());
app.use(express.json());

app.post('/create', (req, res) => {
    const { first_name, last_name, email, phone, password } = req.body;
    idn++
    dados.push({
        id:idn,first_name, last_name, email, phone, password
       })
       console.log(dados)
       res.send(true)
});

app.get('/viewuser', (req, res) => {
  
    res.send(dados);
            
});

app.get('/user/:id', (req, res) => {
    const { id } = req.params;

    var user = dados.filter(x=> x.id === id)
 
 
    res.send(user)
});

app.put('/update', (req, res) => {
    const { id, first_name, last_name, email, phone, password } = req.body;
    var user = dados.filter(x=> x.id === id)
    dados[dados.indexOf(user[0])] = { id, first_name, last_name, email, phone, password }
    res.send(true) 
    
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    dados = dados.filter(x=> x.id != id)
    res.send(dados)

});


app.listen(PORT, () => {
            console.log("Server is Listening on Port ", PORT);
        });

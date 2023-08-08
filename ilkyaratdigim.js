const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const {v4: uuid} = require('uuid')

let users = [
    {
        id: 1,
        username: 'Ramin',
        email: 'ramin@gmail.com'
    },
    {
        id: 2,
        username: 'Revan',
        email: 'revan@gmail.com'
    },
    {
        id: 3,
        username: 'Cefer',
        email: 'cefer@gmail.com'
    },
    {   
        id:4,
        username: 'Mikhail',
        email: 'mikhail@gmail.com',
    },
]



app.get('/users',(req,res)=> {
    return res.json(users)
})


app.get('/users/:id',(req,ress) => {
    const { id } = req.params
    const { username,email } = req.body
    const user = user.find((a)=> a.id == id)
    if (user) {
        user.username = username
        user.email = email
        return res.status(200).json(user)
    } else {
        return res.ststus(400).json('user tapilmadi')
    }
})



app.post('/users',(req,res)=> {
    const {username,email} = req.body
    const newUser = {
        id:uuid(), 
        username: username,
        email: email,
    }
    users.push(newUser)
    return res.json("successfully")
})


app.delete("/users/:id",(req,res)=> {
    const {id} = req.params
    users= users.filter((user)=> user.id != id)
    return res.json("secilen user silindi")
})


app.patch('/users/:id',(req,res)=> {
    const { id } = req.params
    const { username,email } = req.body
    const user = users.find((a)=> a.id == id)
    if (user) {
        user.username = username
        user.email = email
        return res.json('user yenilendi')
    } else {
        return res.json('bele user yoxdu ')
    }
});

app.put('/users/:id',(req,res)=> {
    const { id } = req.params
    const { username,email } = req.body
    const user = users.find((a)=> a.id == id);
    if (user) {
        user.username = username
        user.email = email
        return res.json('user yenilendi');
    } else {
        return res.json('bele user yoxdu ');
    }
});


const PORT = 8000

app.listen(PORT,console.log(`Server Runnig: http://localhost: ${PORT}`))
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    'useNewUrlParser': true,
    'useCreateIndex': true
})

// const task = new Task({
//     'description': 'dAwesome Metal Tuna',
//     'completed': false
// })
// const me = new User({
//     'name': 'Andrew',
//     'age': 3,
//     'email': 'jychen@gmail.com',
//     'password': 'passWord123'
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })
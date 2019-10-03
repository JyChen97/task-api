const express = require('express');
require("./db/mongoose.js");
const userRouter = require('./router/user.js');
const taskRouter = require('./router/task.js');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
  console.log('server is up on ' + port)
})

// const myFunction = async ()=>{
//   const token = jwt.sign({'_id':'abc123'}, 'testing', {'expiresIn': '1 days'})

//   console.log(token)

//   const data = jwt.verify(token, 'testing')
//   console.log(data)
// }
// const pet = {
//   'name': 'Hal',
//   'testi': 'testing'
// }

// pet.toJSON = function (){
//   return {}
// }

// console.log(JSON.stringify(pet))
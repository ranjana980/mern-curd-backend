const express = require('express');
const mongoos = require('mongoose');
const app = express();
const EmployeeRoute = require('./routes/employees')
const bodyParser = require("body-parser")
const cors = require('cors');
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoos.set('strictQuery', false);

mongoos.connect("mongodb+srv://ranjana980:ranjana24081996@cluster0.glu3bgy.mongodb.net/?authMechanism=DEFAULT",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  }, (err) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log('connected successfully')
    }
  });

app.use(cors({
  // origin: "https://mern-curd-application-frontend.vercel.app",
  origin: "http://localhost:3000",
  // methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))


app.use('/api/employee', EmployeeRoute)


app.listen(4000, () => {
  console.log('server is running on 4000')
});

const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./util/database')
const expenseRoutes = require('./routes/expense')

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(express.static('public'));
app.use('/Expense', expenseRoutes);

sequelize.sync()
  .then(() => {
    app.listen(PORT);
  })
  .catch((error) => console.error(error));
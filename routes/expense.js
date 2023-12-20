const express = require("express");
const router = express.Router();
const Expense = require("../models/expense");
const { v4: uuidv4 } = require("uuid");


router.post("/expenses", async (req, res) => {
    try {
      const { id, expenseAmount, description, category } = req.body;
      const expense = await Expense.create({ id, expenseAmount, description, category });
      res.json(expense);
    } catch (error) {
      console.error(error);
    }
  });
  
  router.get("/expenses", async (req, res) => {
    try {
      const expenses = await Expense.findAll();
      res.json(expenses);
    } catch (error) {
      console.error(error);
    }
  });
  router.put("/expenses/:id", async (req, res) => {
    try {
      const expenseId = req.params.id;
      const { expenseAmount, description, category } = req.body;
      const existingExpense = await Expense.findByPk(expenseId);
      if (existingExpense) {
        await existingExpense.update({ expenseAmount, description, category });
        res.json(existingExpense);
      } else {
        res.json({ message: "Expense not found" });
      }
    } catch (error) {
      console.log(error);
    }
  });
  
  router.get("/expenses/:id", async (req, res) => {
    try {
      const expenseId = req.params.id;
      const response = await Expense.findByPk(expenseIdId);
      res.json(response);
    } catch (error) {
      console.error(error);
    }
  });
  
  router.delete("/expenses/:id", async (req, res) => {
    try {
      const expenseId = req.params.id;
      await Expense.findByPk(expenseId).then((expense) => expense.destroy());
      res.json({ message: "expense deleted" });
    } catch (error) {
      console.error(error);
    }
  });
  
  module.exports = router;
  
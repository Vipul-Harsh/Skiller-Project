import Project from "../Models/projectSchema.js"
import express from 'express'
import bcrypt from 'bcrypt';
import User from "../Models/UserSchema.js";
import multer from 'multer';

const router= express.Router();
router.get('/',(req,res)=>{
    res.send(`Hello world from the server router.js `);
})

router.get('/add',(req,res)=>{
res.send(`hello adding project`)
})
router.post("/add", async (req, res) => {
    try {
      const { name, description,  team,date } = req.body;
  
      const newProject = new Project({
        name,
        description,
       
        team,
        date
      });
  
      const savedRecipe = await newProject.save();
     
      res.status(201).json(savedRecipe);
    } catch (error) {
      res.status(500).json({ error: "Error adding the project to the database" });
    }
  });
  router.get('/projects', async (req, res) => {
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching projects from the database' });
    }
  });
router.post('/contact',async (req,res)=>{
  try {
    const { name, email, subject, message } = req.body;

    const newMessage= new User({
      name,
      email,
      subject,
      message,
      
    });

    const savedUser = await newMessage.save();
   
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Error adding the Message to the database" });
  }
});

export default router;














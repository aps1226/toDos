const Tasks = require('../models/TaskModel');

module.exports = {

  postTask(req,res,next){
    const item = req.body.task;
    Tasks.create({item:item},(err,data) =>{
      if(err) console.log(err);
      return next();
    })
  },

  getTasks(req,res,next){
    Tasks.find({},(err,data) =>{
      if(err)console.log(err);
      else res.send({data});
      return next();
    });
  },
  deleteTask(req,res,next){
    id = req.body.id;
    Tasks.findByIdAndDelete(id,(err,data) =>{
      if(err) console.log(err);
      return next();
    });
  }
};

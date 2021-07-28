//if bug check this
import { Model } from "../models/model.js"
//if bug check your CRUD ops-if incorrect they will be grayed out
export {
    index,
    show,
    create,
    update,
    deleteModel as delete
  }
  
  // Alternate method
  // function index(req, res) {
  //   Model.find({}, function (err, Model) {
  //     if (err) return res.status(200).json(Model)
  //     res.status(200).json(Model)
  //   })
  // }
  
  
  function index(req, res) {
    Model.find({})
    .then(model => {
      res.status(200).json(model)
    })
    .catch(err => {
      res.json(err)
    })
  }
  
  function show(req, res) {
    Model.findById(req.params.id)
    .then(Model => {
      res.json(Model)
    })
  }
  
  function create(req, res) {
    Model.create(req.body)
    .then(model => {
      res.json(model)
    })
    .catch(err => {
      res.json(err)
    })
  }
  
  function update(req, res) {
    Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((model) => {
      res.json(model)
    })
  }
  
  function deleteModel(req, res) {
    Model.findByIdAndDelete(req.params.id)
    .then(model => {
      res.json(model)
    })
  }
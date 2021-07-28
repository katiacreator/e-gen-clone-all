import { Model } from "../models/model.js"
export{
    //crud operations
    index
}

function index (req, res){
    Model.find({})
    .then(models => {
        res.render('models', {
            // models: models
            models
        })
    })
}
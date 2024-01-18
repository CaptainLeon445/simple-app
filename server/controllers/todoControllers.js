const Model = require("../models/todo")
const { getTodo } = require("../services/todoServices")

exports.getTodos=async(req, res)=>{
    try {
        const data=await getTodo()
        return res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {
        Logger.error("Error in getting todo", error)
        return res.status(400).json({
            status: "fail",
            error: error.message
        })
    }
}
import User from "./Model";
//import mongoose from "mongoose";

export default function userDeleteById (req, res){
    const userId = req.params.userId;
    
    User.findByIdAndRemove(userId)
        .then(result => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("user deletion error");
        });
}

// export const deletePost = async (req, res) => {
//     const { id } = req.params;
//
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`); // make sure the id is valid
//
//     await User.findByIdAndRemove(id);
//     res.json({ message: 'Post deleted successfully' })   // return a json message
//
// }



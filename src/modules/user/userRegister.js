import User from "./Model";


export default  function userRegister(req, res) {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    newUser.save()   /// save new user to the database
        .then( result => {
            res.status(200).json(result);

        })
        .catch( error => {
            res.status(400).json({
                message: "something went wrong",
            });
            console.log(error);
        });

}


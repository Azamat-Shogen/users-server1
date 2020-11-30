export default function cors (app) {
    // app.use((req, res, next) => {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     // res.header(
    //     //     "Access-Control-Allow-Origin",
    //     //     "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    //     // );
    //     res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    //     if (req === "OPTIONS") {
    //         res.header("Access-Control-Methods", "PUT, POST, PATCH, DELETE, GET");
    //         return res.status(200).json({});
    //     }
    //     next();
    // });


    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
        next();
    }
      
    );
}

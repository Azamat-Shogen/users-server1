
function apiNotFound(req, res){
    res.status(400).json({
        text: "Api not found"
    });
}

export default function errorHandler(app) {
    app.use(apiNotFound);
}
function mid(req, res, next) {
    try {
        if(!req.body){
            res.send("body is empty");
            return;
        }
        next();
    } catch (error) {
        next(error);
    }
}
export default mid;
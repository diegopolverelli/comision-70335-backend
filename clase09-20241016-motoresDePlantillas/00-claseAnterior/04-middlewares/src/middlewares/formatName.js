export const formatName=(req, res, next)=>{
    if(req.query.name){
        req.query.name=req.query.name.toUpperCase()
        if(!req.query.validated) req.query.validated=true
    }

    next()
}
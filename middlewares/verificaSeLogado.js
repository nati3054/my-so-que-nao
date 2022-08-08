function verificaSeLogado(req,res,next){
    if(req.session.usuario){
        next();
    } else{
        res.redirect ('/create')
        return;
    }
}

module.exports = verificaSeLogado;
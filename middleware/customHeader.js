const customHeader = (req, res, next) => {
    try{
        const apiKey = req.headers.api_key;
        if(apiKey === 'amedinac89') {
            next()
        } else {
            res.status(403)
            res.send({error:'ApiKey no es correcta'})
        }
    }catch(e){
        res.status(403)
        res.send({error:'Algo ocurrio en el custom-header'})
    }
}

module.exports = customHeader;
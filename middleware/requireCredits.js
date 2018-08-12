module.exports = (req, res, next) => {
  if(req.user.credits < 1){
    return res.status(401).send({error: 'Please buy more Credits' });
  }
  next();
};
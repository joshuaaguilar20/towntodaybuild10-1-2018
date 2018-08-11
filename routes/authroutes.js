const passport = require('passport');



module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']

    }));
    app.get('/auth/google/callback', passport.authenticate('google'),
    (req,res) => {
        res.redirect('/survery');
    }
); //will see user code in URL*** 

    // use my port or production por
    app.get('/api/logout', (req, res) => {
        req.logout();
        console.log('logged out');
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};
const admin = require('firebase-admin');

module.exports = (req, res) => {
    if(!req.body.mobile || !req.body.code) {
        return res.status(422).send({error: 'Mobile number and code must be provided'});
    }
    
    const mobile = req.body.mobile;
    const mobile_za = '+27'+mobile;
    const code = parseInt(req.body.code);
    
    admin.auth().getUser(mobile_za)
        .then(() => {
            const ref = admin.database().ref('users/' +mobile_za);
                ref.on('value', snapshot => {
                    
                    ref.off(); // i.e stop it
                    const user = snapshot.val();
                    
                    if (user.code !== code || !user.codeValid) {
                       return res.status(422).send({error:'Code not valid'}) 
                    }
                    
                    //making the existing is invalid
                    ref.update({ codeValid:false });
                    
                    //regenrate a json web token
                    admin.auth().createCustomToken(mobile_za)
                        .then(token => res.send({token:token}))
                });
        })
        .catch(err => res.status(422).send({error:err}));
}
const admin = require('firebase-admin');
const twilio = require('twilio');

const accountSid = 'AC1a89739dcdf2d297ad3f5d86d44778fd';
const authToken = '9d0a83c194ffc781521d7745b289d769';
const client = new twilio.Twilio(accountSid, authToken);

module.exports = (req, res) => {

    if(!req.body.mobile) {
        return res.status(422).send({
            error: 'You must provide a mobile number'
        });
    }

    const mobile = req.body.mobile;
    const mobile_za = '+27'+mobile;
    
    //get user with this mobile number
    admin.auth().getUser(mobile_za)
        .then(userRecord => {
           const code = Math.floor((Math.random() * 89999 + 1000));
           
           //send message with twilio
           client.messages.create({
               body:'Your otp code is ' + code,
               to:mobile_za,
               from:'+18104120459'
           }, (err, data) => {
               if (err) {return res.status(422).send(err)};
               if (data) {
                admin.database().ref('users/'+ mobile_za)
                .update({
                    code:code,
                    codeValid:true,
                    
                }, () => {
                    res.send({success:true});
                });
               }
           })
        })
        .catch(err => {
            console.log(err);
            res.status(422).send({error: 'User not found'})
        });
}
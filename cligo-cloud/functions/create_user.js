 //import service account
const admin = require('firebase-admin');

module.exports = (req, res) => {
  //verify the user provided a phone 
  if (!req.body.mobile) {
    //   errorMessage.push('');
      return res.status(422).send({
          error: "Please! Mobile number is required!"
      });
  }
  
  //Format the phone number to remove dashes and parents
  const mobile = req.body.mobile;
  const mobile_za = '+27'+mobile;
  
  //create a new user account using that phone number
  admin.auth()
    .createUser({uid:mobile_za})
    .then(user => {
      res.send(user);
    })
    .catch(err => res.status(422).send({error: err }));
  
  //Respond to the user request, saying the account was made
  
}
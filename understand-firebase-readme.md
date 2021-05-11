# We simply copied the firebase login folder in this one to set up basic login system

# made changes in login style ...by using styles in div

# made some changes in login logout system
by default we are displaying the home page and doing login logout there

# to get token of user
visit this --> [https://firebase.google.com/docs/auth/admin/verify-id-tokens#web]

than copy this code...it will give u token of user

firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
  // Send token to your backend via HTTPS
  // ...
}).catch(function(error) {
  // Handle error
});


# use of token 
now u want to give persons firebase token to server so that server actually knows who u r ...so we gonna give this token to server using axios post.

token is the only thing that is hidden and uniq=que to a user so we can check whether the request is from a authorized user or not 

# Middlewares
middleware is a set of function that will execute in server before the (app.get)...to check some req things before the server responses 

# let bearerToken = require("express-bearer-token");
we get the token of user automatically to the server (not the one that we made in the app,js)
but we can also do it manually ( to get the one we made in the app.js)

req.token = req.headers.authorization.slice(7);

# npm i firebase-admin
now since u got the the token of user

we need to install this to become admin(i.e the admin of server) so that u can make request to firebase to check whether this token is of the user who made the request to server...to cross verify

# to authorize the admin with all credentials 

go to firebase project seetings > servise accounts > generate private key > copy the code 

paste it in server
// code to authorize the admin with all credentials so that he can make request to firebase to check
var admin = require("firebase-admin");

var serviceAccount = require("./admin-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
// ends here


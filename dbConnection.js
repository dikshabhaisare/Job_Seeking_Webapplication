import mongoose from "mongoose";


export const dbConnection = () => {
    mongoose
      .connect(process.env.MONGO_URI, {
        dbName: "MERN_JOB_SEEKING_WEBAPP",
      })
      .then(() => {
        console.log("Connected to database.");
      })
      .catch((err) => {
        console.log(`Some Error occured while connecting to database. ${err}`);
      });
  };

//   // Create a new user instance
// const newUser = new User({
//   username: 'exampleUser',
//   password: 'Passw0rd!',
//   email: 'user@example.com',
//   phone: '1234567890'
// });

// // Check password strength before saving the user
// if (newUser.isPasswordStrong()) {
//   newUser.save()
//     .then(() => console.log('User created successfully! Password is strong.'))
//     .catch(error => console.log('Error creating user:', error.message));
// } else {
//   console.log('Password is weak. Please choose a stronger password.');
// }
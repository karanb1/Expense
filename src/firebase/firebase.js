import * as firebase from 'firebase' //The function of * is to grab all the exports from firebase
import expenses from '../reducers/expenses';
// and fill them in the object named firebase
                                        
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default}
//   database.ref('expenses').on('child_changed',(snapshot)=>{
//       console.log(snapshot.key,snapshot.val());
//   })

//   database.ref('expenses').on('value',(snapshot)=>{
//       const expenses = [];
//       snapshot.forEach((childSnapshot)=>{
//           expenses.push({
//               id: childSnapshot.key,
//               ...childSnapshot.val()
//           });
//       });
//       console.log(expenses);
//   })
//   database.ref('expenses').push({
//     description: "Rent",
//     note: '',
//     amount: 100,
//     createdAt: 123444
// });

// database.ref('expenses').push({
//     description: "water bill",
//     note: '',
//     amount: 1000,
//     createdAt: 1234447
// });

// database.ref('expenses').push({
//     description: "Gas bill",
//     note: '',
//     amount: 10000,
//     createdAt: 1234444
// });


//   database.ref().once('value').then((snapshot)=>{
//       const val = snapshot.val();
//       console.log(val);
//   })
//   .catch((e)=>{
//       console.log('Error fetching data',e);
//   });

//   database.ref().set({
//       name: 'karan balodi',
//       age: 23,
//       location: {
//           city: 'New Delhi',
//           country: 'India'
//       }
//   })
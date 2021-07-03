import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDyrWJDhJJ_21j84caJuXi7K39C_cJaO_g",
    authDomain: "fitness-native-2b3e0.firebaseapp.com",
    projectId: "fitness-native-2b3e0",
    storageBucket: "fitness-native-2b3e0.appspot.com",
    messagingSenderId: "734849985672",
    appId: "1:734849985672:web:6c478a5894ba45b291033d"
  };


  let app;
  if(firebase.apps.length===0){
      app=firebase.initializeApp(firebaseConfig)
  }else{
      app.firebase.app()
  }

  const db=app.firestore()
  const auth=firebase.auth()

  export {db,auth}
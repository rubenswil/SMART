import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public afAuth: AngularFireAuth) { 

  }

  login(email: string, password: string){
    return new Promise ((resolve, reject) =>{
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(userData => resolve(userData), err => reject (err));
    });
  }

  register(email: string, password: string){
    return new Promise ((resolve, reject) =>{
      this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(userData => resolve(userData), err => reject (err));
    });
  }

  getAuth(){
    return this.afAuth.authState.pipe(auth => auth);
  }

  logout(){
    return this.afAuth.auth.signOut();
  }

}

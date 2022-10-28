import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NombreService {

  constructor( private authfirebase: AngularFireAuth) { }

  async getUid() {
    const user = await this.authfirebase.currentUser;
    return user.uid;
  }

}

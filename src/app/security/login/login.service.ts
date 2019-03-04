import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/do'

import {MEAT_API} from '../../app.api'
import {User} from './user.model'

@Injectable()
export class LoginService {

	user: User

	constructor(private http: HttpClient){}

	isLoggedIn(): boolean {
		return this.user !== undefined
	}

	login(email: string, passaword: string): Observable<User> {
		return this.http.post<User>(`${MEAT_API}/login`,
			{email: email, password: passaword})
		.do(user => this.user = user)
	}
}
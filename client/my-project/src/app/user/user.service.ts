import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from 'environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from './user';

@Injectable()
export class UserService {
    private userUrl = environment.apiUrl + '/user';

    constructor(
        private http: Http
    ) { }

    public getUsers(): Observable<User[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.userUrl, options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    public addUser(user: User): Observable<User[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        const body = JSON.stringify(user);
        return this.http.post(this.userUrl, body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('Error:', error);
        return Observable.throw(error);
    }
}

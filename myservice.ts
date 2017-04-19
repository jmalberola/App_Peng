import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Operator/map';

@Injectable()

export class myService {
	
	private _url = 'url_de_firebase';

	constructor(private _http: Http){

	}

	getDatos() : Observable<myTipo[]> {
		return this._http.get(`${this._url}/aqui_pon_lo_que_quieras_recuperar.json`)
			.map((response: Response) => <myTipo[]>response.json());
				
	}


}
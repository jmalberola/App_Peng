import { Component, OnInit } from '@angular/core';

import { myService } from ...;

@Component({
	templateUrl ....
})

export class myPage {

	datos_recuperados = myTipo[];
	
	constructor(private _myService: myService){

	}

	ngOnInit(): void{
		this._myService.getDatos().subscribe(c => this.datos_recuperados=c);
	}

}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";


const _userUrl = 'http://localhost:7001/scheduler-web/resources/catalog'

@Injectable()
export class LoginGetService{

    constructor(private _httpClient: HttpClient){

    }

    checkLogin(user:String, password:String)
    {     
     
        return this._httpClient.get(`${_userUrl}/loginUser?usr=${user}&pwd=${password}`,
               {responseType:'json'})
               .catch(this.handleError);
    }
    
    handleError(error:any) 
    {
        console.log(`Error : ${error}`)
        return Observable.throw(error.json() || 'Server error' );
    }

}
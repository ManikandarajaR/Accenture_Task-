
import { Injectable } from "@angular/core";
import {HttpInterceptor,HttpRequest,HttpHandler} from "@angular/common/http";

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor { 

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log(req.url);

        const AuthToken = "My Auth Token";

        const AuthReq = req.clone(
            {
                setHeaders : {Authorization:AuthToken}
            }
        );
        return next.handle(AuthReq);

    }


}

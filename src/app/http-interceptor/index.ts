import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MyHttpInterceptor} from  "./my-http-interceptor";


export const HttpInterceptProviders = 
[
    {
        provide : HTTP_INTERCEPTORS,
        useClass : MyHttpInterceptor,
        multi : true
    }
]
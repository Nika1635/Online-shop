import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const ifloggedGuard: CanActivateFn = (route, state) => {
    let cookie = inject(CookieService)
    let router = inject(Router)
  
    if(cookie.get("token") == ""){
      router.navigate(["/"])
      alert("sign in or register")
      return false;
    }else{
      return true;
    }
};

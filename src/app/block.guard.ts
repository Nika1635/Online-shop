import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';






export const blockGuard: CanActivateFn = (route, state) => {
  let cookie = inject(CookieService)
  let router = inject(Router)

  if(cookie.get("token") == ""){
    return true;
  }else{
    router.navigate(["/"])
    return false;
  }
};

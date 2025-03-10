import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let token = inject(CookieService)
  let clonetoken = req.clone({
    headers: req.headers.set(
      "Authorization", `Bearer ${token.get("token")}`
    )
  })
  return next(clonetoken);
};

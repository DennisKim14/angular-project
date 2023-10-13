import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { SessionService } from '../service/session.service';

export const authGuard: CanActivateFn = 
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> => new Promise(async (resolve, reject) => {

  const sessionService = inject(SessionService);

  let info: any = sessionService.getItem();
  if (info != null) {
    resolve(true);
  }

})

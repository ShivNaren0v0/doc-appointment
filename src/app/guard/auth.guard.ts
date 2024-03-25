import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';
import { PatauthService } from '../services/patauth.service';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("am inside auth guard.");
  let usert = localStorage.getItem("pat");
  console.log(usert);

  if (usert != null) {
      return true
  }
  else{
    inject(Router).navigateByUrl("/patient/login");
  return false;
  }
};

import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const authdGuard: CanActivateFn = (route, state) => {
  console.log("am inside authd guard.");
  let usert = localStorage.getItem("token");
  console.log(usert);

  if (usert != null) {
      return true
  }
  else{
    inject(Router).navigateByUrl("/doctor/doctor-login");
  return false;
  }
};

import { ɵɵinject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = ɵɵinject(Router);
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};

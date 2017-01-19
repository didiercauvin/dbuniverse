import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class CategoryGuard implements CanActivate {
    
    constructor(private _router: Router) {}
    
    canActivate(route: ActivatedRouteSnapshot): boolean {
        const category = route.url[1].path;
        if (category !== "db" && category !== "dbz") {
            this._router.navigate(['/welcome']);
            return false;
        }
        
        return true;
    }
}
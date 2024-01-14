import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { IIdAble } from 'src/app/models/IIdAble';
import { ICrudService } from 'src/app/services/ICrudService';

export abstract class GenericResolver<T extends IIdAble> implements Resolve<T> {

  protected abstract service: ICrudService<T>; 
  protected abstract router: Router;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
    const id = route.params['id']
    return this.service.fetchById(id).pipe(
      catchError(err => {
        if (err.status === 404) {
          this.router.navigateByUrl('/404')
        }
        throw err;
      })
    );
  }
}
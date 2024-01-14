import { CanDeactivateFn } from '@angular/router';
import { GenericEditComponent } from './generic-edit.component';
import { IIdAble } from 'src/app/models/IIdAble';

export const genericGuard: CanDeactivateFn<GenericEditComponent<IIdAble>> = (component) => {
  if (!!component.formGroup?.dirty) {      
    return window.confirm('You have unsaved changes. Do you really want to leave?');
  }
  return true;
};

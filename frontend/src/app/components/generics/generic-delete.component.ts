import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IIdAble } from 'src/app/models/IIdAble';
import { ICrudService } from 'src/app/services/ICrudService';

@Component({
  template: ''
})
export abstract class GenericDeleteComponent<T extends IIdAble> implements OnInit {
 
  protected abstract service: ICrudService<T>;
  protected abstract route: ActivatedRoute; 
  protected abstract router: Router;

  selectedRecord?: T;

  ngOnInit(): void {
    this.route.data
    .subscribe({
      next: data => this.selectedRecord = data["data"]
    });
  }

  delete(): void {
    if (this.selectedRecord?.id) {
      this.service.delete(this.selectedRecord?.id)
      .subscribe(() => this.router.navigateByUrl('/tasks'));
    }
  }
}

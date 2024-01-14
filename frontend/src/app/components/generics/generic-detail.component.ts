import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IIdAble } from 'src/app/models/IIdAble';
import { ICrudService } from 'src/app/services/ICrudService';

@Component({
  template: ''
})
export abstract class GenericDetailComponent<T extends IIdAble> implements OnInit {
 
  protected abstract route: ActivatedRoute; 

  selectedRecord?: T;

  ngOnInit(): void {
    this.route.data
      .subscribe({
        next: data => this.selectedRecord = data["data"]
      });
  }
}

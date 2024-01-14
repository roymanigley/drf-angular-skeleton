import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IIdAble } from 'src/app/models/IIdAble';
import { ICrudService } from 'src/app/services/ICrudService';

@Component({
  template: ''
})
export abstract class GenericListComponent<T extends IIdAble> implements OnInit {

  protected abstract service: ICrudService<T>

  records: T[] = [];

  ngOnInit(): void {
      this.service.fetchAll()
      .subscribe({
        next: records => this.records = records ?? []
      })
  }
}

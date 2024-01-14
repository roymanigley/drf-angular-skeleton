import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IIdAble } from 'src/app/models/IIdAble';
import { ICrudService } from 'src/app/services/ICrudService';

@Component({
  template: ''
})
export abstract class GenericEditComponent<T extends IIdAble> implements OnInit {

  selectedRecord?: T;
  formGroup?: FormGroup;

  protected abstract route: ActivatedRoute;
  protected abstract service: ICrudService<T>;

  ngOnInit(): void {
    this.route.data
    .subscribe({
      next: data => {
        this.selectedRecord = data["data"];
        this.initFormGroup();
      },
      complete: () => this.initFormGroup()
    });
  }

  save(): void {
    console.log("save")
    if (this.selectedRecord?.id) {
      this.service.update(this.selectedRecord.id, this.formGroup?.value)
        .subscribe(() => this.onSaveSuccess())
    } else {
      this.service.create(this.formGroup?.value)
        .subscribe(() => this.onSaveSuccess())
    }
  }

  private onSaveSuccess() {
    this.formGroup?.markAsPristine()
  }

  protected abstract initFormGroup(): void;
}

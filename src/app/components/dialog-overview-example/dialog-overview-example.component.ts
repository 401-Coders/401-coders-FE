import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/shared/index';

@Component({
  selector: 'app-dialog-overview-example',
  templateUrl: './dialog-overview-example.component.html',
  styleUrls: ['./dialog-overview-example.component.scss']
})
export class DialogOverviewExampleComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogOverviewExampleComponent>, public service: UserService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('id')?.value)
        this.service.insertEmployee(this.service.form.value);
      else
        this.service.updateUser(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
    }
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}

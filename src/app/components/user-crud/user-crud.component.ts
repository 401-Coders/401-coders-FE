import { User } from './../../model/user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogOverviewExampleComponent } from '../index';
import { UserService } from './../../services/shared/index';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';


@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.scss']
})
export class UserCrudComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'phone', 'companyName', 'city', 'delete'];
  public dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, public userService: UserService, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.dataSource.data = this.userService.userList;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onCreate(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const dialogRef = this.dialog.open(DialogOverviewExampleComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.dataSource.data = this.userService.userList;
    })
  }

  onEdit(user: any) {
    this.userService.populateForm(user);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const dialogRef = this.dialog.open(DialogOverviewExampleComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.dataSource.data = this.userService.userList;
    })
  }

  onDelete(id: any) {
    console.log("id : ", id);
    if (confirm('Are you sure to delete this user?')) {
      this.userService.deleteEmployee(id);
      this.dataSource.data = this.userService.userList
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}

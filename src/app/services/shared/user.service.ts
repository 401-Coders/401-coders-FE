import { User } from './../../model/index';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userList: User[] = [];

  constructor() {
    let ELEMENT_DATA: User[] = [
      {
        id: 101,
        name: 'Test User One',
        userName: 'test1',
        email: 'test@example.com',
        street: 'street',
        suite: 'suite',
        city: 'Pune',
        zipcode: '000000',
        lat: 'test',
        lng: 'test',
        website: 'example.com',
        phone: '1234567890',
        companyName: 'Thinkitive Technologies',
        catchPhrase: 'catchPhrase',
        bs: 'Bs'
      },
      {
        id: 102,
        name: 'Test User Two',
        userName: 'test2',
        email: 'test@example.com',
        street: 'street',
        suite: 'suite',
        city: 'Pune',
        zipcode: '000000',
        lat: 'test',
        lng: 'test',
        website: 'example.com',
        phone: '1234567890',
        companyName: 'Thinkitive Technologies',
        catchPhrase: 'catchPhrase',
        bs: 'Bs'
      },
      {
        id: 103,
        name: 'Test User Three',
        userName: 'test3',
        email: 'test@example.com',
        street: 'street',
        suite: 'suite',
        city: 'Pune ',
        zipcode: '000000',
        lat: 'test',
        lng: 'test',
        website: 'example.com',
        phone: '1234567890',
        companyName: 'Thinkitive Technologies',
        catchPhrase: 'catchPhrase',
        bs: 'Bs'
      }
    ];
    this.userList = ELEMENT_DATA;
  }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    street: new FormControl(''),
    suite: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl('', [Validators.minLength(6), Validators.maxLength(6)]),
    lat: new FormControl(''),
    lng: new FormControl(''),
    website: new FormControl('', [Validators.pattern("((www.)?)(([^.]+)\.)?([a-zA-z0-9\-_]+)(.com|.net|.gov|.org|.in)(\/[^\s]*)?")]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    companyName: new FormControl(''),
    catchPhrase: new FormControl(''),
    bs: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: '',
      userName: '',
      email: '',
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      lat: '',
      lng: '',
      website: '',
      phone: '',
      companyName: '',
      catchPhrase: '',
      bs: ''
    });
  }

  updateUser(user: any) {
    console.log("user", JSON.stringify(user));
    this.userList.map((element, i) => {
      if (element.id == user.id) {
        this.userList[i] = user;
      }
    });
  }

  insertEmployee(user: any) {
    this.userList.push(
      {
        id: Math.floor(Math.random() * 999) + 100,
        name: user.name,
        userName: user.userName,
        email: user.email,
        street: user.street,
        suite: user.suite,
        city: user.city,
        zipcode: user.zipcode,
        lat: user.lat,
        lng: user.lng,
        website: user.website,
        phone: user.phone,
        companyName: user.companyName,
        catchPhrase: user.catchPhrase,
        bs: user.bs
      }
    );
  }

  deleteEmployee(id: number) {
    this.userList.map((element, i) => {
      if (element.id == id) {
        this.userList.splice(i, 1);
      }
    });
  }

  populateForm(user: any) {
    this.form.setValue(user)
  }
}

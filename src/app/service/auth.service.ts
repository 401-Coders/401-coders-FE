import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient) {}

  setSessionToken(data: any) {
   localStorage.setItem('isRememberMe', 'false');
    localStorage.setItem('accessToken', window.btoa(data.accessToken));
    localStorage.setItem('roleId', window.btoa(data.employee.roleId));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('shopList', JSON.stringify(data.employeeShops));
    localStorage.setItem('firstName', window.btoa(data.employee.firstName));
    localStorage.setItem('lastName', window.btoa(data.employee.lastName));
    localStorage.setItem('assignedShopId', window.btoa(data.assignedShop.id));
    localStorage.setItem('assetAccessToken', window.btoa(data.assetAccessToken));
    localStorage.setItem('employeeId', window.btoa(data.employee.id));
    localStorage.setItem('assignedShopName', window.btoa(data.assignedShop.name));
 }

  setLocalToken(data: any) {
    localStorage.setItem('isRememberMe', 'true');
    localStorage.setItem('accessToken', window.btoa(data.accessToken));
    localStorage.setItem('roleId', window.btoa(data.employee.roleId));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('shopList', JSON.stringify(data.employeeShops));
    localStorage.setItem('firstName', window.btoa(data.employee.firstName));
    localStorage.setItem('lastName', window.btoa(data.employee.lastName));
    localStorage.setItem('assignedShopId', window.btoa(data.assignedShop.id));
    localStorage.setItem('assignedShopName', window.btoa(data.assignedShop.name));
    localStorage.setItem('assetAccessToken', window.btoa(data.assetAccessToken));
    localStorage.setItem('employeeId', window.btoa(data.employee.id));
  }

  getAccessToken() {
    if (localStorage.getItem('isRememberMe') == 'true') {
      return window.atob(JSON.parse(localStorage.getItem('accessToken') || '{}'));
    } else {
      return window.atob(JSON.parse(localStorage.getItem('accessToken') || '{}'));
    }
  }

  // getRoleId() {
  //   if (localStorage.getItem('isRememberMe') == 'true') {
  //     return window.atob(localStorage.getItem('roleId'));
  //   } else {
  //     return window.atob(localStorage.getItem('roleId'));
  //   }
  // }

  login(model: any): any {
    return this._http
      .post<any>(`${this.baseUrl}api/v1/mgmt/session`, model, {
        observe: 'response',
      })
      .toPromise();
  }

  signup(data: any): any {
    return this._http
      .put<any>(`${this.baseUrl}api/v1/mgmt/employee-invite`, data)
      .toPromise();
  }

  resetPassword(data: any): any {
    return this._http
      .post<any>(`${this.baseUrl}api/v1/mgmt/password/reset`, data)
      .toPromise();
  }

  updatePassword(data: any): any {
    return this._http
      .post<any>(`${this.baseUrl}api/v1/mgmt/password/update`, data)
      .toPromise();
  }

  getEmployeeInfo(token: any): any {
    return this._http
      .post<any>(
        `${this.baseUrl}api/v1/mgmt/employee-invite/employee-info`,
        token
      )
      .toPromise();
  }
  getLoggedIn(): boolean {
    if (
      localStorage.getItem('isLoggedIn') == 'true' ||
      localStorage.getItem('isLoggedIn') == 'true'
    ) {
      return true;
    } else {
      return false;
    }
  }

  clearStorages() {
    sessionStorage.clear();
    localStorage.clear();
  }  

  getUserName() {
    if (localStorage.getItem('isRememberMe') == 'true') {
      return (
        window.atob(JSON.parse(localStorage.getItem('firstName') || '{}')) +
        window.atob(JSON.parse(localStorage.getItem('lastName') || '{}'))
      );
    } else {
      return (
        window.atob(JSON.parse(localStorage.getItem('firstName') || '{}')) +
        ' ' +
        window.atob(JSON.parse(localStorage.getItem('lastName') || '{}'))
      );
    }
  }

  getAssetAccessToken() {
    if (localStorage.getItem('isRememberMe') == 'true') {
      return window.atob(JSON.parse(localStorage.getItem('assetAccessToken') || '{}'));
    } else {
      return window.atob(JSON.parse(localStorage.getItem('assetAccessToken') || '{}'));
    }
  }

}

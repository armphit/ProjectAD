import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppService {
  public userlogin = "admin";
  public ad = null;
  public id_ad = null;
  public major = null;
  public name_th = null;
  public study_group_name = null;
  public study_group_id = null;
  constructor() {}
}

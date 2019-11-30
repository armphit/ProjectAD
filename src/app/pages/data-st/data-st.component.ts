import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-data-st",
  templateUrl: "./data-st.component.html",
  styleUrls: ["./data-st.component.scss"]
})
export class DataStComponent implements OnInit {
  public rootApi = "http://127.0.0.1/project/";
  public datagroup: any = null;
  public datastupload: any = null;
  public ad1: any = null;
  public major1: any = null;
  public idgroup1: any = null;
  public datastgroup: any = null;
  constructor(public dialog1: MatDialog, public http: HttpClient) {
    this.ongetstupload();
  }

  public ongetstupload() {
    this.http
      .get(this.rootApi + `select/select_st_upload.php?data`)
      .subscribe((data: any) => {
        this.datastupload = data;
        console.log(data);
      });
  }
  public ongetmajor_and_ad(
    major: any = null,
    ad: any = null,
    groupid: any = null
  ) {
    this.idgroup1 = groupid;
    this.major1 = major;
    this.ad1 = ad;
    this.ongetstgroup(groupid);
  }
  public ongetstgroup(groupid: any = null) {
    this.datastgroup = null;
    this.http
      .get(this.rootApi + `select/selectstudentgroup.php?data=` + groupid)
      .subscribe((data: any) => {
        if (data.record != null) {
          this.datastgroup = data;
        } else {
          this.datastgroup = null;
        }
      });
  }
  public onsearchstudent = (array: any, textsearch: string) => {
    if (textsearch.length > 0) {
      return [
        ...array.filter(value => value.STUDENT_NO.indexOf(textsearch) > -1),
        ...array.filter(value => value.NAME.indexOf(textsearch) > -1),
        ...array.filter(value => value.LNAME.indexOf(textsearch) > -1)
      ];
    } else {
      return array;
    }
  };

  ngOnInit() {}
}

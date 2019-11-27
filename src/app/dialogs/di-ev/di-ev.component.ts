import { AppService } from "./../../services/app.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Component, OnInit, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: "app-di-ev",
  templateUrl: "./di-ev.component.html",
  styleUrls: ["./di-ev.component.scss"]
})
export class DiEvComponent implements OnInit {
  public rootApi = "http://127.0.0.1/project/";
  public datamajor: any = null;
  public dataad: any = null;
  public namegroup: any = "ยังไม่ได้เลือก";
  public mjcodeData: any = null;
  public datagroup: any = null;
  public codegroup: any = null;
  public idGroup: any = null;
  public idad: any = null;
  public ad: any = null;
  public id_ad: any = null;
  constructor(
    public http: HttpClient,
    public dialogRef: MatDialogRef<DiEvComponent>,
    public app_service: AppService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.ongetmajor();
    this.ongetad();
    this.ongetgroup();
    this.ad = this.app_service.ad;
    this.id_ad = this.app_service.id_ad;
  }

  ngOnInit() {}
  save() {
    let data3 = {
      id_group: this.idGroup,
      id_ad: this.id_ad
    };
    console.log(data3);
    this.http
      .get(
        this.rootApi + `insert/insertgroupad.php?data=` + JSON.stringify(data3)
      )
      .subscribe((data: any) => {
        this.dialogRef.close("SAVE JA");
        Swal.fire("บันทึกเสร็จสิ้น", "", "success");
      });
  }

  public getIdGroup(idGroup1) {
    this.idGroup = idGroup1;
  }

  public getIdName(id) {
    this.idad = id;
  }

  public ongetmajor() {
    this.http
      .get(this.rootApi + `select/selectmajor.php?data`)
      .subscribe((data: any) => {
        this.datamajor = data;
      });
  }

  public namegroupch(acronym: any, code: any, name: any) {
    this.onmjcode(code);
  }

  public ongetad() {
    this.http
      .get(this.rootApi + `select/selectad.php?data`)
      .subscribe((data: any) => {
        this.dataad = data;
      });
  }

  public onmjcode(code: any) {
    let data2 = {
      mj_code: code
    };

    this.http
      .get(
        this.rootApi +
          `select/selectgroupnull.php?data=` +
          JSON.stringify(data2)
      )
      .subscribe((data: any) => {
        this.mjcodeData = data;
      });
  }

  public ongetgroup() {
    this.http
      .get(this.rootApi + `select/selectgroupnull.php?data`)
      .subscribe((data: any) => {
        this.datagroup = data;
      });
  }
}

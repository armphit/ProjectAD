import Swal from "sweetalert2";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Component, OnInit, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-di-ob",
  templateUrl: "./di-ob.component.html",
  styleUrls: ["./di-ob.component.scss"]
})
export class DiObComponent implements OnInit {
  public rootApi = "http://127.0.0.1/project/";
  public datamajor: any = null;
  public mjcodeData: any = null;
  public acronymaddgroup: any = null;
  public codeaddgroup: any = null;
  public namegroup: any = "ยังไม่ได้เลือก";
  public datagroupchange: any = null;
  constructor(
    public http: HttpClient,
    public dialogRef: MatDialogRef<DiObComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.ongetmajor();
    this.ongetgroupchange();
  }
  public ongetmajor() {
    this.http
      .get(this.rootApi + `select/selectmajor.php?data`)
      .subscribe((data: any) => {
        this.datamajor = data;
      });
  }
  public namegroupch(acronym: any, code: any, name: any) {
    this.namegroup = acronym;
    this.onmjcode(code, acronym);
    console.log(code);
  }
  public onmjcode(code: any, acronym: any) {
    let data2 = {
      mj_code: code
    };
    this.acronymaddgroup = acronym;
    this.codeaddgroup = code;
    console.log(JSON.stringify(data2));
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

  save(a) {
    let data3 = {
      study_group_name: this.acronymaddgroup + "." + a,
      mj_code: this.codeaddgroup
    };
    this.http
      .get(
        this.rootApi + `insert/insertgroup.php?data=` + JSON.stringify(data3)
      )
      .subscribe((data: any) => {
        this.dialogRef.close("SAVE JA");
        Swal.fire("บันทึกเสร็จสิ้น", "", "success");
      });
  }
  save1() {
    Swal.fire("บันทึกเสร็จสิ้น", "", "success");
  }
  public ongetgroupchange() {
    this.http
      .get(this.rootApi + `select/selectgroupchange.php?data`)
      .subscribe((data: any) => {
        this.datagroupchange = data;
      });
  }

  ngOnInit() {}
}

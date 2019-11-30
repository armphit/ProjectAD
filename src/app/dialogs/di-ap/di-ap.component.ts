import { AppService } from "./../../services/app.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-di-ap",
  templateUrl: "./di-ap.component.html",
  styleUrls: ["./di-ap.component.scss"]
})
export class DiApComponent implements OnInit {
  public rootApi = "http://127.0.0.1/project/";
  public name_th: any = null;
  public study_group_name: any = null;
  public study_group_id: any = null;
  constructor(
    public http: HttpClient,
    public app_service: AppService,
    public dialogRef: MatDialogRef<DiApComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.name_th = this.app_service.name_th;
    this.study_group_name = this.app_service.study_group_name;
    this.study_group_id = this.app_service.study_group_id;
  }
  save(a) {
    let data1 = {
      study_group_id: this.study_group_id,
      study_group_name: a
    };

    this.http
      .get(
        this.rootApi + `update/updategroup.php?data=` + JSON.stringify(data1)
      )
      .subscribe((data: any) => {
        this.dialogRef.close("SAVE JA");
        Swal.fire("บันทึกเสร็จสิ้น", "", "success");
        console.log(data);
      });
  }
  ngOnInit() {}
}

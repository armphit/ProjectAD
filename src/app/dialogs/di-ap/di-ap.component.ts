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
  constructor(
    public http: HttpClient,
    public dialogRef: MatDialogRef<DiApComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}
  save(a) {
    console.log(a);
    this.http
      .get(
        this.rootApi +
          `insert/insertprefix.php?data={"prefix_name":"` +
          a +
          `"}`
      )
      .subscribe((data: any) => {
        this.dialogRef.close("SAVE JA");
        Swal.fire("บันทึกเสร็จสิ้น", "", "success");
      });
  }
}

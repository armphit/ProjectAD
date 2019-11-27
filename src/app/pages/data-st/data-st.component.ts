import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { DiDaComponent } from "src/app/dialogs/di-da/di-da.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-data-st",
  templateUrl: "./data-st.component.html",
  styleUrls: ["./data-st.component.scss"]
})
export class DataStComponent implements OnInit {
  public rootApi = "http://127.0.0.1/project/";
  public datagroup: any = null;
  constructor(public dialog1: MatDialog, public http: HttpClient) {
    this.ongetgroup();
  }
  public ongetgroup() {
    this.http
      .get(this.rootApi + `select/selectgroup.php?data`)
      .subscribe((data: any) => {
        this.datagroup = data;
      });
  }
  openDialog1(): void {
    let dialogRef = this.dialog1.open(DiDaComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog was close");
      console.log(result);
    });
  }
  ngOnInit() {}
}

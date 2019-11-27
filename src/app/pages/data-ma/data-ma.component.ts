import { AppService } from "./../../services/app.service";
import { DiObComponent } from "./../../dialogs/di-ob/di-ob.component";
import { DiEvComponent } from "./../../dialogs/di-ev/di-ev.component";
import { HttpService } from "./../../services/http.service";
import { DiCoComponent } from "./../../dialogs/di-co/di-co.component";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DiApComponent } from "src/app/dialogs/di-ap/di-ap.component";
import { MatDialog } from "@angular/material/dialog";
import Swal from "sweetalert2";

@Component({
  selector: "app-data-ma",
  templateUrl: "./data-ma.component.html",
  styleUrls: ["./data-ma.component.scss"]
})
export class DataMaComponent implements OnInit {
  public rootApi = "http://127.0.0.1/project/";
  public dataprefix: any = null;
  public datagroup: any = null;
  public dataallgroup: any = null;
  public datastudent: any = null;
  public listStudent: any = null;
  public ad1: any = null;
  public major1: any = null;
  public datagroupchange1: any = null;

  constructor(
    public app_service: AppService,
    public http: HttpClient,
    // public prefix: MatDialog,
    // public group: MatDialog,
    public test: MatDialog,
    stgroup: MatDialog,
    private https: HttpService
  ) {
    this.ongetprefix();
    this.ongetgroup();
    this.ongetallgroup();
    this.ongetstudent();
    this.ongetgroupchange1();
  }

  public deleteprefix(prefix_id) {
    this.http
      .get(this.rootApi + `delete/deleteprefix.php?prefix_id=` + prefix_id)
      .subscribe((data: any) => {
        this.ongetprefix();
      });
  }

  public ongetprefix() {
    this.http
      .get(this.rootApi + `select/selectprefix.php?data`)
      .subscribe((data: any) => {
        this.dataprefix = data;
      });
  }

  public addprefix() {
    let dialogRef = this.test.open(DiApComponent, { width: "500" });

    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog was close");

      this.ongetprefix();
    });
  }

  public ongetgroup() {
    this.http
      .get(this.rootApi + `select/selectgroup.php?data`)
      .subscribe((data: any) => {
        this.datagroup = data;
      });
  }

  public ongetallgroup() {
    this.http
      .get(this.rootApi + `select/selectallgroup.php?data`)
      .subscribe((data: any) => {
        this.dataallgroup = data;
      });
  }

  public ongetmajor_and_ad(major: any = null, ad: any = null) {
    this.major1 = major;
    this.ad1 = ad;
    console.log(this.major1);
    console.log(this.ad1);
  }

  public addnewgroup() {
    let dialogRef = this.test.open(DiObComponent, { width: "600px" });

    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog was close");
      this.ongetgroupchange1();
    });
  }

  public addgroup() {
    let dialogRef = this.test.open(DiCoComponent, { width: "500px" });

    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog was close");

      this.ongetgroup();
    });
  }
  public ongetstudent() {
    this.http
      .get(this.rootApi + `select/selectstudent.php?data`)
      .subscribe((data: any) => {
        this.datastudent = data;
      });
  }

  public onUpload = event => {
    if (event.target.files[0]) {
      let form = new FormData();
      form.append("excel", event.target.files[0]);
      this.https.post(`readExcelStudent`, form).then((value: any) => {
        this.listStudent = value.value;
        this.insertxlsx(this.listStudent);
        //  console.log(value);
        event.target.value = "";
      });
    }
  };

  public insertxlsx(listStudent: Array<any>) {
    for (let i = 1; i < listStudent.length; i++) {
      // console.log(JSON.stringify(listStudent[i]));
      this.http
        .get(
          this.rootApi +
            `insert/insertstudent.php?data=` +
            JSON.stringify(listStudent[i])
        )
        .subscribe((data: any) => {
          // console.log(data);
        });
    }
  }

  public addtest(advice: any = null, id_ad: any = null) {
    this.app_service.ad = advice;
    this.app_service.id_ad = id_ad;
    let dialogRef = this.test.open(DiEvComponent, { width: "500px" });

    dialogRef.afterClosed().subscribe(result => {
      this.ongetgroup();
      this.ongetallgroup();
      this.ongetgroupchange1();
    });
  }
  public ongetgroupchange1() {
    this.http
      .get(this.rootApi + `select/selectgroupchange.php?data`)
      .subscribe((data: any) => {
        this.datagroupchange1 = data;
      });
  }
  public deletegroup(study_group_id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        this.http
          .get(
            this.rootApi +
              `delete/deletegroup.php?study_group_id=` +
              study_group_id
          )
          .subscribe((data: any) => {
            this.ongetgroupchange1();
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  public onsearchgroup = (array: any, textsearch: string) => {
    if (textsearch.length > 0) {
      return [
        ...array.filter(
          value => value.study_group_name.indexOf(textsearch) > -1
        )
      ];
    } else {
      return array;
    }
  };

  ngOnInit() {}
}

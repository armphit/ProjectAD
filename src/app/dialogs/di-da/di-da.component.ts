import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import Swal from "sweetalert2";

@Component({
  selector: "app-di-da",
  templateUrl: "./di-da.component.html",
  styleUrls: ["./di-da.component.scss"]
})
export class DiDaComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DiDaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}
  save() {
    this.dialogRef.close("SAVE JA");
    Swal.fire("Good job!", "You clicked the button!", "success");
  }
}

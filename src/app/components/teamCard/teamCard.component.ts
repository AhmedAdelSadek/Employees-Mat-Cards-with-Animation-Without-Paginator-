import { Component, Input, OnDestroy } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { IEmployee } from "src/app/interfaces/IEmployee";
import { ImportService } from "src/app/services/import.service";

@Component({
  selector: "teamCard",
  templateUrl: "./teamCard.component.html",
  styleUrls: ["./teamCard.component.scss"],
})
export class TeamCardComponent implements OnDestroy {
  private _unsubscribe: Subject<any>;
  cardsObs: Observable<IEmployee[]>;
  dataSource: MatTableDataSource<IEmployee>;
  employees: IEmployee[] = [];
  private _limit: number;
  @Input() set limit(cardsNumber: number) {
    this._limit = cardsNumber;
  }
  constructor (private importService: ImportService) {
    this._unsubscribe = new Subject();
    this.loadData();
  }
  loadData() {
    this.importService
      .getData()
      .pipe(takeUntil(this._unsubscribe))
      .subscribe((employees: IEmployee[]) => {
        this._limit = this._limit ?? employees.length;
        this.employees = employees.splice(0, this._limit);
        this.dataSource = new MatTableDataSource<IEmployee>(this.employees);
        this.cardsObs = this.dataSource.connect();
      });
  }
  /**
   * On destroy
   */
  ngOnDestroy(): void {
    this._unsubscribe.next(null);
    this._unsubscribe.complete();
    this.dataSource.disconnect();
  }
}

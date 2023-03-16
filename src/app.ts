//#region @notForNpm

//#region @browser
import { NgModule, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EditTableModule as EditTableModuleBase } from './lib/components/edit-table.module';


@Component({
  selector: 'app-edit-table',
  styleUrls: ['./app.scss'],
  templateUrl: './app.html',
  encapsulation: ViewEncapsulation.None,
})
export class EditTableComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@NgModule({
  imports: [EditTableModuleBase],
  exports: [EditTableComponent],
  declarations: [EditTableComponent],
  providers: [],
})
export class EditTableModule { }
//#endregion

//#region @backend
async function start(port: number) {
  console.log('hello world from backend');
}

export default start;

//#endregion

//#endregion

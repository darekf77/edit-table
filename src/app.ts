//#region @notForNpm

//#region @browser
    import { NgModule } from '@angular/core';
    import { Component, OnInit } from '@angular/core';


    @Component({
      selector: 'app-edit-table',
      template: 'hello from edit-table'
    })
    export class EditTableComponent implements OnInit {
      constructor() { }

      ngOnInit() { }
    }

    @NgModule({
      imports: [],
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
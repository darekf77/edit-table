import { Component, OnInit, Input } from '@angular/core';

import { Log, Level } from 'ng2-logger';
const log = Log.create('edit-table', Level.INFO);



enum Types {
  STRING,
  BOOLEAN
}


@Component({
  selector: 'edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss']
})
export class EditTableComponent implements OnInit {

  isArray = isArray;
  toArray = toArray;
  isBoolean = isBoolean;
  @Input() rows: any[] =
    [
      { key1: 'Bob', key2: false },
      { key1: 'Alice', key2: true }
    ];
  @Input() headers: any[] = [
    ['Name', 'key1', 'Enter your name... ', undefined],
    ['Is awesome', 'key2', true, 100]
  ];

  @Input() messageNoRows: string = 'Empty data-table....';

  onChange(e: FocusEvent, key: string, isCheckbox: boolean) {
    if (isCheckbox) {
      this.data[key] = e.target['checked'];
    } else {
      this.data[key] = e.target['value'];
    }

  }


  event = {
    addRow: false
  };
  data: Object = {};
  save() {
    const data = this.data;
    log.i('before', { o: data });
    let patterObject = this.rows[0];
    for (let key in patterObject) {
      console.log({ p: key })
      if (data[key] === undefined) {
        if (isBoolean(patterObject[key])) {
          data[key] = false;
        }
        else {
          data[key] = '';
        }
      }
    }
    log.i('after', data);
    this.rows.push(JSON.parse(JSON.stringify(data)));
    this.event.addRow = !this.event.addRow;
  }
  addRow() {
    this.data = {};
    this.event.addRow = !this.event.addRow;
  }
  cancel() {
    this.event.addRow = !this.event.addRow;
    this.data = {};
  }

  getTypes(o: Object): Types[] {
    let types: Types[] = [];
    for (let p in o) {
      if (isBoolean(o[p])) types.push(Types.BOOLEAN);
      else types.push(Types.STRING);
    }
    return types;
  }

  unedit() {
    this.edit = undefined;
  }

  edit: Object;

  isEdited(o: Object) {
    return Object.is(o, this.edit);
  }

  remove(row) {
    if (confirm("Are you sure ? ")) {
      let index = this.rows.indexOf(row);
      this.rows.splice(index, 1);
    }
  }

  constructor() {

  }

  ngOnInit() { }


}

function isBoolean(bool) {
  return typeof bool === 'boolean' ||
    (typeof bool === 'object' && typeof bool.valueOf() === 'boolean');
}

function isArray(o: any) {
  return (o instanceof Array);
}

function toArray(o: Object): string[] {
  log.d('object candidate to be array', o);
  let a = [];
  for (let i in o) {
    if (o.hasOwnProperty(i)) {
      a.push(i);
    }
  }
  log.d('object transformed', a);
  return a;
}

import { Component, OnInit, Input } from '@angular/core';

import { Log, Level } from 'ng2-logger/ng2-logger';
const log = Log.create('edit-table');

import { EditTable } from './model';

const id: string = 'edit-table';

@Component({
    selector: id,
    template: require(`./${id}.component.html`),
    styles: [require(`./${id}.component.scss`)]
})
export class EditTableComponent implements OnInit {

    @Input() rows: any[];
    @Input() headers: string[];

    data: Object = {};

    add(o) {
        this.rows.push(JSON.parse(JSON.stringify(o)));
    }

    toArray(o: Object): string[] {
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

    isBoolean(bool) {
        return typeof bool === 'boolean' ||
            (typeof bool === 'object' && typeof bool.valueOf() === 'boolean');
    }

    edit: Object;

    isEdited(o: Object) {
        return Object.is(o, this.edit);
    }

    constructor() {

    }

    ngOnInit() { }

}

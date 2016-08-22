## Edit Table ##

Edit objects in array in very nice way.

![table view](/screen.png)


import it

    import { EditTableComponent } from 'edit-table/edit-table';

include it

    ...
    directives: [EditTableComponent]
    ...

use in html 

    <edit-table
     [headers]="[ ['Name', 'key1', 'Enter your name... ', undefined],
        ['Is stupid', 'key2', true, 100]]"
        
      [rows]="[{ key1: 'Me', key2: false },
        { key1: 'Other', key2: true }]">
    </edit-table>

headers: [  'Heder name'  ,  'key_in_object',  String (placeholder) or Boolean  (checkbox), width in px ]

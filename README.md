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
     [headers]="['somethin', 'asdasdasd']"
      [rows]="[{ 'aasdsad':'asd', 'asdas':'asdasd' },
      { 'aasdsad':'asd', 'asdas':'asdasd' }]">
    </edit-table>


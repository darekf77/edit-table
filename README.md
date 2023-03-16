## Edit Table ##

Edit objects in array in very nice way.

![table view](/screen.png)


import it
```ts
    import { EditTableModule } from 'edit-table/browser';
```
include it
```ts
  ...
  imports: [EditTableModule]
  ...
```
use in html 
```html
  <edit-table
    [headers]="[ 
      ['Name', 'key1', 'Enter your name... ', undefined],
      ['Is awesome', 'key2', true, 100]
    ]"
      
    [rows]="[
      { key1: 'Me', key2: false },
      { key1: 'Other', key2: true }
    ]">
  </edit-table>
```

In you angular component:
```ts
headers: [  'Heder name'  ,  'key_in_object',  String (placeholder) or Boolean  (checkbox), width in px ]
```

# local development
```
npm i -g firedev
cd edit-table
firedev start:watch
```

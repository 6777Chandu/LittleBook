import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, names: string): any {
    const blogItems = [];

    if (names.length === 0) {
      return value;
    }
    for (const item of value) {
      if (item.title.toLowerCase().includes(names.toLowerCase())) {
        blogItems.push(item);
      }
    }
    console.log(blogItems);
  }
}

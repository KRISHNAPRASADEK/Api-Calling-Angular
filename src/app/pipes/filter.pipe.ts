import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(allUsers: any[], searchKey: string, propName: string): any[] {
    const result: any = [];
    if (!allUsers || searchKey == '' || propName == '') {
      return allUsers;
    }
    allUsers.forEach((user: any) => {
      if (
        user[propName].trim().toLowerCase().includes(searchKey.toLowerCase())
      ) {
        result.push(user);
      }
    });

    return result;
  }
}

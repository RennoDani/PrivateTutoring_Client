import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(array: any[], itemsPerPage: number, currentPage: number): any[] {
    if (!array || array.length === 0) {
      return [];
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    //console.log('pipe pagination -  startIndex:', startIndex);
    //console.log('pipe pagination -  endIndex:', endIndex);

    return array.slice(startIndex, endIndex);
  }

}

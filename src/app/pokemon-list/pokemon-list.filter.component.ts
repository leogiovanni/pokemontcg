import { Component, Pipe, PipeTransform } from '@angular/core';
import { PokemonListComponent } from './pokemon-list.component';

@Pipe({  
    name: 'myfilter',  
    pure: false  
})  
  
export class MyFilterPipe implements PipeTransform {  

    transform(list: any[], filter: any): any {  
        if (!list || !filter || filter.toString().length < 2) {  
            return list;  
        }  
        let filteredList = list.filter((item) => {
            var name = item.name.toString().toLowerCase().indexOf(filter.toString().toLowerCase()) !== -1;
            return name;
        });
        return filteredList;
    }  
} 
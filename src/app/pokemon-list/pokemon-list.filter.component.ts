import { Component, Pipe, PipeTransform } from '@angular/core';
import { PokemonListComponent } from './pokemon-list.component';

export type SortOrder = 'asc' | 'desc';

@Pipe({  
    name: 'myfilter',  
    pure: false  
})  

export class MyFilterPipe implements PipeTransform {  

    transform(list: any[], filter: any, sortOrder: SortOrder | string = 'asc', sortKey?: string): any { 
        
        let stringArray = [];

        if(list){
            stringArray = list.filter(item => typeof item[sortKey] === 'string').sort((a, b) => {
                if (a[sortKey] < b[sortKey]) return -1;
                else if (a[sortKey] > b[sortKey]) return 1;
                else return 0;
            });
        }
        
        if (!filter || filter.toString().length < 2) {  
            return stringArray;  
        }  
        let filteredList = stringArray.filter((item) => {
            var name = item.name.toString().toLowerCase().indexOf(filter.toString().toLowerCase()) !== -1;
            return name;
        });

        return filteredList;
    }  
} 
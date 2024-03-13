import { Pipe, PipeTransform } from "@angular/core";
import { Monster } from "../Model/Monsters.model";


@Pipe({
    name:'filterMonster'
})
export class FilterMonsterPipe implements PipeTransform{
    transform(value: any, searchField:any) {
        if(value.length===0 || searchField===""){
            return value
        }
        return value.filter((user:Monster)=> user.name.toLowerCase().indexOf(searchField.toLowerCase())!==-1);
        
    }
   
}
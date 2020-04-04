import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  list: Object = null;

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(
      res => {
        this.list = res.cards;
      },
      err =>{
        console.log(err);
      }
    );
  }
}

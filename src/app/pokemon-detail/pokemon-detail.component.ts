import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from '../service/pokemon.service';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  pokemon = null;
  pokemonId: String = null;

  ngOnInit() {
    this.pokemonId = this.route.snapshot.paramMap.get("id");
    this.pokemonService.getPokemonDetail(this.pokemonId).subscribe(
      res => {
        this.pokemon = res.card;
      },
      err =>{
        console.log(err);
      }
    );
  }

}
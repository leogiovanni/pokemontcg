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

  pokemon: any = null;
  pokemonId: String = null;
  loading: boolean =  true;

  ngOnInit() {
    this.pokemonId = this.route.snapshot.paramMap.get("id");
    this.pokemonService.getPokemonDetail(this.pokemonId).subscribe(
      res => {
        this.loading = false;
        this.pokemon = res.card;
      },
      err =>{
        console.log(err);
      }
    );
  }
}
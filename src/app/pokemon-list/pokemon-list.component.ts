import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private formBuilder: FormBuilder, private router: Router) { }

  list: any = null;
  form: FormGroup;
  search: string = null;
  loading: boolean = true;

  ngOnInit() {

    this.form = this.formBuilder.group({
      'search' : [null, [ Validators.minLength(2)] ]
    });

    this.pokemonService.getPokemonList().subscribe(
      res => {
        this.loading = false
        this.list = res.cards;
      },
      err =>{
        console.log(err);
      }
    );
  }

  onInputChange(form:NgForm) {
    this.search = form['search'];
  }

  details(id){
    this.router.navigate(['detail', id]);
  }
}

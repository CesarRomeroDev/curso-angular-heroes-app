import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ChildActivationStart } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];

  constructor( private HeroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  buscando() {

    this.HeroesService.getSugerencias( this.termino ).subscribe( heroes => this.heroes = heroes );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ){
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
  }

}

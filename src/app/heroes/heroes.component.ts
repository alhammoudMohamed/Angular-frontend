import { Component, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Array<Hero>>;
  // observable <String>
  selectedHero: Hero;

  constructor(private heroService: HeroesService) { }

  ngOnInit() {
    this.heroes$ = this.heroService.getHeroes();
    console.log(this.heroes$);
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}

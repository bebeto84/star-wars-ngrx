import { Component, OnInit, HostBinding, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { EntityType, CoreSwapiState } from '@sdk/shared.model';
import { Observable } from 'rxjs';
import { Character, CharacterSelector, CharacterAction } from '@sdk/character';
import { select, Store } from '@ngrx/store';
import { filter, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'mig-sw-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CharacterDetailsComponent implements OnInit {

  @HostBinding('class.mig-sw-movie-details') hostCss = true;

  readonly filmImageType: EntityType = 'films';

  character$: Observable<Character> | undefined = this.store.pipe(
    select(CharacterSelector.selectCurrent)
  );

  constructor(
    private store: Store<CoreSwapiState>,
    private router: Router) {
  }

  ngOnInit() {
    this.store.dispatch(CharacterAction.getDetail());
  }

  navigateToMovieDetails(id: string) {
    this.router.navigate(['/movies/details', id]);
  }
}

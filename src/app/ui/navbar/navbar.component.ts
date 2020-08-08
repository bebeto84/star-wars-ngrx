import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mig-sw-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @HostBinding('class.mig-sw-navbar') hostCss = true;

  constructor(
    private router: Router,
  ) {}

  navigateHome(){
    this.router.navigate(['/movies']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  activeTab: string = 'home'; // Default active tab

  constructor(private router: Router) {}

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
    if (tabName == 'home') {
      this.router.navigate(['']);
    } else this.router.navigate([tabName]);
  }
}

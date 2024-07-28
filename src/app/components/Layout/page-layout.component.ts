import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../Shared/sidebar/sidebar.component';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [RouterModule, SidebarComponent, CommonModule],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent {
  router = inject(Router)
  logoPng: string = "assets/images/logo_2.png"

  dropdownOpen = false;


  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;

  }

  logout() {
    // Implement your logout logic here
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}

import { Component } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

    selectedTab: 'normal' | 'secret' = 'normal';
    
  constructor(private router: Router , private route: ActivatedRoute) {}
  navigateTo(tab: 'normal' | 'secret') {
    this.selectedTab = tab;  
    const path = tab === 'normal' ? 'regular' : 'confidential';
    this.router.navigate([path], { relativeTo: this.route });
  
  }


}

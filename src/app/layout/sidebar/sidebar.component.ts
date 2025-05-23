import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  menuItems = [

    {
      label: 'إدارة الداخلى',
      icon: 'fa-file',
      expanded: false,
      submenu: ['', '']
    },

    {
      label: 'إدارة المستخدمين',
      icon: 'fa-users',
      expanded: false,
      submenu: ['', '']
    },

    {
      label: 'البحث عن معلومات',
      icon: 'fa-search',
      expanded: false,
      submenu: ['', '']
    },
    {
      label: 'خصائص أمنية',
      icon: 'fa-lock',
      expanded: false,
      submenu: ['', '']
    },
    {
      label: 'التقارير',
      icon: 'fa-chart-line',
      expanded: false,
      submenu: ['', '']
    }
    ,
    {
      label: 'الإعدادات',
      icon: 'fa-gear',
      expanded: false,
      submenu: ['', '']
    }
  ];

  toggleMenu(item: any) {
    item.expanded = !item.expanded;
  }



}

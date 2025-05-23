import { Component } from '@angular/core';

@Component({
  selector: 'app-incoming',
  standalone: false,
  templateUrl: './incoming.component.html',
  styleUrl: './incoming.component.css'
})
export class IncomingComponent {
    search: string = '';

  rows = [
    {
      id: 819695,
      subject: 'طلب إيقاف مؤقت للتنفيذ',
      category: 'خدمة السجلات والتقارير',
      internalExternal: 'خارجي',
      direction: 'داخل',
      date: '12-12-2023',
      comments: 2,
      urgency: 'عاجل',
      reviewed: false
    },
    {
      id: 495662,
      subject: 'طلب إيقاف مؤقت للتنفيذ',
      category: 'خدمة الإفراجات',
      internalExternal: 'داخلي',
      direction: 'داخل',
      date: '12-12-2023',
      comments: 1,
      urgency: 'عاجل',
      reviewed: true
    },
    // أضف المزيد حسب الحاجة
  ];

  get filteredRows() {
    return this.rows.filter(row =>
      Object.values(row).some(val =>
        String(val).toLowerCase().includes(this.search.toLowerCase())
      )
    );
  }

}

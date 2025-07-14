import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-page-pepsi',
  standalone: true,
  imports: [CommonModule, CountUpModule],
  templateUrl: './page-pepsi.html',
  styleUrls: ['./page-pepsi.css']
})
export class PagePepsi implements OnInit {
  users = 0;
  stock = 0;
  forecast = 0;

  // ✅ Options pour count-up
  forecastOptions = {
    suffix: '%',
    duration: 2.5
  };

  ngOnInit() {
    setTimeout(() => {
      this.users = 2430;
      this.stock = 7850;
      this.forecast = 12;

      animateOnScroll();
    }, 1000);
  }
}

// 🔽 La fonction est ici, après la classe
function animateOnScroll() {
  const elements = document.querySelectorAll('.scroll-fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        el.classList.remove('opacity-0', 'translate-y-6');
        observer.unobserve(el); // stop après apparition
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

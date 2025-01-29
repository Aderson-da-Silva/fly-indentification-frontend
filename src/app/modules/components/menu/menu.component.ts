import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: false
})
export class MenuComponent  implements OnInit {

  isDarkMode = false;

  ngOnInit() {
    // Verificar se o usuário já definiu uma preferência de tema
    const userTheme = this.getUserThemePreference();

    if (userTheme !== null) {
      // Se o usuário já escolheu um tema, respeite essa escolha
      this.isDarkMode = userTheme === 'dark';
    } else {
      // Caso contrário, use as configurações do sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.isDarkMode = prefersDark.matches;

      // Adicionar listener para mudanças no sistema (opcional)
      prefersDark.addEventListener('change', (mediaQuery) => {
        if (!this.isUserTogglingTheme()) {
          this.isDarkMode = mediaQuery.matches;
          this.updateTheme();
        }
      });
    }

    this.updateTheme();
  }

  constructor(private menu: MenuController) {}


  toggleTheme(event: any) {
    this.isDarkMode = event.detail.checked;
    this.updateTheme();

    // Save user preference
    localStorage.setItem('user-theme', this.isDarkMode ? 'dark' : 'light');
  }

  private updateTheme() {
    const htmlElement = document.documentElement; // Target <html> tag
    if (this.isDarkMode) {
      htmlElement.classList.remove('light');
      htmlElement.classList.add('dark');
    } else {
      console.log('adasd')
      htmlElement.classList.remove('dark');
      htmlElement.classList.add('light');
    }
  }

  private isUserTogglingTheme(): boolean {
    return localStorage.getItem('user-theme') !== null;
  }

  private getUserThemePreference(): string | null {
    return localStorage.getItem('user-theme'); // Retorna 'dark', 'light' ou null
  }
}

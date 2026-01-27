import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from '../../core/services/cart';
import { Auth } from '../../core/services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  cartService = inject(Cart);
  authService = inject(Auth);
  // cartCount = computed(() => this.cartService.cartCount());
}

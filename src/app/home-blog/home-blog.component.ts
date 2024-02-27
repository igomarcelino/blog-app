import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone:true,
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeComponent {
  articles = [
    {
      title: 'Novo Modelo de Carro Lançado',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      date: new Date('2024-02-26')
    },
    {
      title: 'Top 10 Carros Mais Vendidos do Ano',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      date: new Date('2024-02-25')
    },
    {
      title: 'Como Escolher o Melhor Carro Para Você',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      date: new Date('2024-02-24')
    }
  ];
}

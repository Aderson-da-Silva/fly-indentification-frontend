import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})
export class DashboardPage implements OnInit {
  generosDeMoscas = [
    {
      id: 1,
      Nome: "Drosophila",
      Descricao: "Gênero amplamente conhecido como moscas-das-frutas, utilizadas em estudos genéticos devido ao seu ciclo de vida curto."
    },
    {
      id: 2,
      Nome: "Musca",
      Descricao: "Inclui a famosa mosca doméstica (Musca domestica), frequentemente encontrada em ambientes urbanos."
    },
    {
      id: 3,
      Nome: "Calliphora",
      Descricao: "Conhecidas como moscas-varejeiras, são atraídas por matéria orgânica em decomposição."
    },
    {
      id: 4,
      Nome: "Lucilia",
      Descricao: "Gênero de moscas metálicas verdes ou azuis, frequentemente associadas a carniça."
    },
    {
      id: 5,
      Nome: "Sarcophaga",
      Descricao: "Moscas-de-carne que depositam larvas diretamente em matéria orgânica ou feridas abertas."
    },
    {
      id: 6,
      Nome: "Glossina",
      Descricao: "Conhecidas como moscas-tsé-tsé, são vetores da doença do sono na África."
    },
    {
      id: 7,
      Nome: "Simulium",
      Descricao: "Moscas pequenas também chamadas de borrachudos, conhecidas por suas picadas dolorosas."
    },
    {
      id: 8,
      Nome: "Phlebotomus",
      Descricao: "Mosquitos-palha que atuam como vetores de doenças como a leishmaniose."
    },
    {
      id: 9,
      Nome: "Chrysomya",
      Descricao: "Moscas metálicas associadas à miíase, uma infestação de larvas em tecidos vivos ou mortos."
    },
    {
      id: 10,
      Nome: "Haematobia",
      Descricao: "Conhecida como mosca-do-chifre, é um parasita comum em bovinos e outros animais de grande porte."
    }
  ];
  private resizeObserver: ResizeObserver | null = null;

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
 
}

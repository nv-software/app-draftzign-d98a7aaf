import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UtilsService } from '../../service/utils.service';
import { ArrowDownComponent } from '../../common/arrow-down/arrow-down.component';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { NgFor, NgStyle } from '@angular/common';
import { Plan } from '../../service/campaign/campaign.service';
@Component({
  selector: 'app-campain',
  standalone: true,
  templateUrl: './campain.component.html',
  styleUrl: './campain.component.css',
  imports: [
    MatIconModule,
    ArrowDownComponent,
    CarouselModule,
    ButtonModule,
    TagModule,
    NgStyle,
    NgFor
  ],
})
export class CampainComponent implements AfterViewInit {
  plans: Plan[] = [
    {
      title: 'Plano Initial',
      benefits: [
        {
          description: 'Uma reunião de estratégia inicial mensal;',
          disabled: false,
        },
        {
          description: 'Uma reunião de apresentação de resultados;',
          disabled: false,
        },
        {
          description:
            'Otimizações de campanha por nossos especialistas Google Ads;',
          disabled: false,
        },
        {
          description:
            'Desenvolvimento de uma Landing Page de alta conversão p/ um produto ou serviço;',
          disabled: true,
        },
        {
          description:
            'Gerente de conta dedicado à suas estratégias e resultados;',
          disabled: true,
        },
      ],
      minAdValue: 'R$ 100,00',
      maxAdValue: 'R$ 300,00',
      serviceValue: 'R$ 180,00',
      description:
        'Ótimo para pequenas empresas que buscam resultados no Google Ads.',
    },
    {
      title: 'Plano Plus',
      benefits: [
        {
          description: 'Reuniões de estratégia inicial mensal p/ cada produto;',
          disabled: false,
        },
        {
          description: 'Uma reunião de apresentação de resultados;',
          disabled: false,
        },
        {
          description:
            'Otimizações de campanha por nossos especialistas Google Ads;',
          disabled: false,
        },
        {
          description:
            'Desenvolvimento de uma Landing Page de alta conversão p/ um produto ou serviço;',
          disabled: false,
        },
        {
          description:
            'Gerente de conta dedicado à suas estratégias e resultados;',
          disabled: true,
        },
      ],
      minAdValue: 'R$ 300,00',
      maxAdValue: 'R$ 1500,00',
      serviceValue: 'R$ 390,00',
      description:
        'Ótimo para empresas que desejam consultoria e suporte de um gerente de conta  em suas estratégias.',
    },
    {
      title: 'Plano Premiere',
      benefits: [
        {
          description: 'Reuniões de estratégias gerais mensal;',
          disabled: false,
        },
        {
          description:
            'Reuniões quinzenais p/ acompanhamento e apresentação de resultados;',
          disabled: false,
        },
        {
          description:
            'Otimizações de campanha por nossos especialistas Google Ads;',
          disabled: false,
        },
        {
          description:
            'Desenvolvimento de uma Landing Page de alta conversão p/ um produto ou serviço;',
          disabled: false,
        },
        {
          description:
            'Gerente de conta dedicado à suas estratégias e resultados;',
          disabled: false,
        },
      ],
      minAdValue: 'R$ 1500,00',
      maxAdValue: 'R$ 5000,00',
      serviceValue: 'R$ 889,00',
      description:
        'Focado em campanhas customizadas que exploram ao máximo o seu produto, dedicamos um gerente de contas para alinhar estratégias e fazer suas vendas alavancarem.',
    },
  ];

  @ViewChild(Carousel) carousel!: Carousel;

  constructor(private utilsService: UtilsService) {}

  ngAfterViewInit(): void {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }

  openWhatsapp() {
    this.utilsService.openWhatsapp('');
  }

  scrollDown() {
    // const someScroll = window.screen.height - (window.screen.height * 0.3)

    document
      .getElementById('plan-services')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}

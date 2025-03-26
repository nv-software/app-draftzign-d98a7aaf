import { Injectable } from '@angular/core';

export interface Plan {
  title: string;
  benefits: {
    description: string;
    disabled: boolean;
  }[];
  minAdValue: string;
  maxAdValue: string;
  serviceValue: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class CampaignService {

  constructor() { }

}

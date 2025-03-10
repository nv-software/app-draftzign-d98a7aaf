import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  openWhatsapp(message: string) {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "gtm.click",
      elementId: "cta",
      elementClass: "cta",
    });
    const phone = "5511993477055"; // +55 11 99347-7055 em formato sem formatação
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
    window.open(url, "_blank");
  }
}

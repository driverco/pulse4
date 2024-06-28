import { Injectable } from '@angular/core';
import { TranslocoService, getBrowserLang } from '@jsverse/transloco';


@Injectable({
    providedIn: 'root',
})
export class LangService {
    langList = ['en', 'es'];
    constructor(
        private translocoService: TranslocoService
      ) {
        this.initLang();
       }

    private lang: string = "";
    getLang(): string {
        this.initLang();
        return this.lang;
    }
    initLang():void{
        const lang = localStorage.getItem("lang");
        if (lang == "" || lang == null){
            this.lang = getBrowserLang()!;
        }else{
            this.lang = lang;
        }
        this.translocoService.setActiveLang(this.lang);
    }
    changeLang(lang: string): void {
        this.lang = lang;
        this.translocoService.setActiveLang(lang);
        localStorage.setItem("lang", lang);
      }


}

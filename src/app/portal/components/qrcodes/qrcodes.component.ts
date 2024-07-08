import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'portal-qrcodes',
  templateUrl: './qrcodes.component.html',
  styleUrls: ['./qrcodes.component.css'],
})
export class QRCodesComponent {

  constructor(private authService: AuthService) {
   }
  

}

import { Component, OnInit } from '@angular/core';
import { IdentificacaoService } from 'src/app/services/identificacao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public fGroup: FormGroup;


  // tslint:disable-next-line: max-line-length
  constructor(private identService: IdentificacaoService, private fBuilder: FormBuilder, private router: Router) {

    this.fGroup = this.fBuilder.group({

      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],

      matricula: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])]
    });

  }

  ngOnInit() {

  }


  onSubmit() {

  }



}

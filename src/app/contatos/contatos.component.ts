import { Component, OnInit } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-contatos',
  standalone: true,
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
  imports: [CommonModule, ButtonModule, RippleModule]
})
export class ContatosComponent implements OnInit {
  isSending = false;  // Variável para controlar o estado do envio
  isSent = false;     // Variável para ocultar o botão após o envio

  ngOnInit(): void {
    emailjs.init('u-J7y_5gv8q1oxe_3'); // Inicie a biblioteca emailjs com sua chave pública
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    if (this.isSending) {
      return; // Se já estiver enviando, impede múltiplos envios
    }

    this.isSending = true; // Desativa o botão de envio

    const form = e.target as HTMLFormElement;

    emailjs.sendForm('service_inuhrcx', 'template_ssbvzni', form, {
      publicKey: 'u-J7y_5gv8q1oxe_3'
    })
      .then(() => {
        console.log('Enviado com Sucesso!');
        this.isSent = true; // Oculta o botão após o sucesso do envio
      }, (error) => {
        console.error('Falha ao enviar', (error as EmailJSResponseStatus).text);
      })
      .finally(() => {
        this.isSending = false; // Reabilita o estado de envio após o envio ou erro
      });
  }
}

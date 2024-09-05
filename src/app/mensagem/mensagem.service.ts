import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  constructor(private http: HttpClient) {}

  enviarMensagem(mensagem: any) {
    // Substitua 'seu_template_id' pelo ID do seu template no EmailJS
    const templateId = 'seu_template_id';  
    
    const data = {
      service_id: 'service_inuhrcx', // Seu service ID do EmailJS
      template_id: templateId,
      user_id: 'seu_user_id', // Seu user ID do EmailJS
      template_params: {
        nome: mensagem.nome,
        email: mensagem.email,
        mensagem: mensagem.mensagem
      }
    };

    const url = 'https://api.emailjs.com/api/v1.0/email/send'; 

    this.http.post(url, data).subscribe(
      (response) => {
        console.log('Mensagem enviada com sucesso!', response);
        // Tratar o sucesso, como exibir uma mensagem ao usuário
      },
      (error) => {
        console.error('Erro ao enviar mensagem:', error);
        // Tratar o erro, como exibir uma mensagem de erro ao usuário
      }
    );
  }
}
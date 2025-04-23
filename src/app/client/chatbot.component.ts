import { Component, EventEmitter, Input, Output } from '@angular/core';

interface ChatMessage {
  text: string;
  isUser: boolean;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  @Input() initialMessage: string = 'Bonjour ! Je suis l\'assistant virtuel de BNA Assurances. Comment puis-je vous aider aujourd\'hui ?';
  @Output() quickActionSelected = new EventEmitter<string>();

  chatMessages: ChatMessage[] = [];
  userMessage: string = '';
  showQuickActions: boolean = true;
  chatbotOpen: boolean = true;

  ngOnInit() {
    this.chatMessages.push({
      text: this.initialMessage,
      isUser: false
    });
  }

  toggleChatbot() {
    this.chatbotOpen = !this.chatbotOpen;
  }

  sendMessage() {
    if (this.userMessage.trim() === '') return;

    this.chatMessages.push({
      text: this.userMessage,
      isUser: true
    });

    setTimeout(() => {
      this.processUserMessage(this.userMessage.toLowerCase());
    }, 500);

    this.userMessage = '';
    this.showQuickActions = false;
  }

  processUserMessage(message: string) {
    let response = '';
    
    if (message.includes('bonjour') || message.includes('salut')) {
      response = 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?';
    } else if (message.includes('sinistre') || message.includes('déclarer') || message.includes('accident')) {
      response = 'Pour déclarer un sinistre, vous pouvez remplir directement le formulaire sur cette page ou cliquer sur le bouton "Déclarer un sinistre" ci-dessous.';
      this.showQuickActions = true;
    } else if (message.includes('suivre') || message.includes('dossier') || message.includes('statut')) {
      response = 'Pour suivre l\'état de votre dossier, veuillez cliquer sur le bouton "Suivre un dossier" ci-dessous. Vous serez redirigé vers notre portail client.';
      this.showQuickActions = true;
    } else if (message.includes('contact') || message.includes('appeler') || message.includes('téléphone')) {
      response = 'Vous pouvez nous contacter au 71 100 100 du lundi au vendredi de 8h à 17h. Ou utilisez le bouton "Nous contacter" ci-dessous pour plus d\'options.';
      this.showQuickActions = true;
    } else {
      response = 'Je ne suis pas sûr de comprendre. Voici quelques options qui pourraient vous aider :';
      this.showQuickActions = true;
    }

    this.chatMessages.push({
      text: response,
      isUser: false
    });
  }

  selectQuickAction(action: string) {
    this.quickActionSelected.emit(action);
  }
}
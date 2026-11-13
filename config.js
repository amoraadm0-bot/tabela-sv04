/* Configuração do envio de vídeos para o Google Drive.
   Cole aqui o "ID do cliente" criado no Google Cloud (termina em .apps.googleusercontent.com).
   Enquanto estiver vazio, o botão de enviar vídeo avisa que ainda não foi configurado. */
const GOOGLE_CLIENT_ID = "";

/* Comandos de ADM nível 2 em diante (banimento).
   ⚠ Confirme com a liderança e ajuste aqui se o comando for diferente.
   [ID] é trocado pelo nick/ID do jogador. */
const CMD_BAN = "/ban [ID]";
/* O que vai no lugar do tempo quando o ban é permanente (ex.: "0", "perm", "-1"). */
const BAN_PERMANENTE = "perm";

/* Recuperação de senha por e-mail (serviço gratuito EmailJS: emailjs.com).
   Preencha os 3 campos abaixo depois de criar a conta no EmailJS.
   Enquanto estiverem vazios, a recuperação funciona só pelo código de recuperação. */
const EMAILJS_PUBLIC_KEY = "AFc5mrnCckbJTajUG";
const EMAILJS_SERVICE_ID = "service_cwmavni";
const EMAILJS_TEMPLATE_ID = "template_i10le8j";

/* =====================================================================
   TABELA SV04 — ARQUIVO DE DADOS (É SÓ EDITAR AQUI)
   ---------------------------------------------------------------------
   Cada linha é uma infração. Para mudar algo, troque o texto entre aspas.

   { infracao: "NOME", codigo: "X.X", punicao: "TEMPO", comando: "/comando" },

   - Para ADICIONAR uma infração: copie uma linha inteira e cole embaixo.
   - Para APAGAR: apague a linha inteira.
   - Se não houver comando, deixe comando: ""  (aparece "Pedir a um superior").
   - Não apague as vírgulas no fim das linhas nem os colchetes [ ].
   ===================================================================== */

const SECOES = [
  {
    id: "kicks",
    titulo: "Kicks",
    subtitulo: "expulsar do servidor",
    coluna: "Punição",
    explicacao: "<b>/kick [ID]</b> expulsa o jogador do servidor.",
    aviso: "",
    linhas: [
      { infracao: "CF incompleto",    codigo: "2.2", punicao: "Kick", comando: "/kick [ID]" },
      { infracao: "Voltar para cela", codigo: "2.2", punicao: "Kick", comando: "/kick [ID]" },
    ],
  },

  {
    id: "prisoes",
    titulo: "Prisões",
    subtitulo: "prender na cadeia",
    coluna: "Punição",
    explicacao: "<b>/jail [nick]</b> prende o jogador pelo nick. Para soltar: <b>/unjail [nick]</b>.",
    aviso: "<b>PvP (4.2):</b> 1ª aplicação 60 min · 2ª aplicação 120 min · 3ª aplicação ban de 3 dias. Em Zona Segura: banimento direto de 3 dias. A punição deve ser aplicada no mesmo dia.",
    linhas: [
      { infracao: "CC",                        codigo: "1.17", punicao: "15 min",                      comando: "/jail [nick]" },
      { infracao: "ABUSE",                     codigo: "1.18", punicao: "60 min",                      comando: "/jail [nick]" },
      { infracao: "USE",                       codigo: "3.2",  punicao: "40 min",                      comando: "/jail [nick]" },
      { infracao: "VPA",                       codigo: "3.19", punicao: "30 min / 1 dia",              comando: "/jail [nick]" },
      { infracao: "ASF (ação em Zona Segura)", codigo: "3.20", punicao: "30 min / 1 dia",              comando: "/jail [nick]" },
      { infracao: "Forçar RP",                 codigo: "3.23", punicao: "40 min / 4 dias",             comando: "/jail [nick]" },
      { infracao: "Ofensas a player",          codigo: "3.29", punicao: "30 min",                      comando: "/jail [nick]" },
      { infracao: "Farpando ferido",           codigo: "3.32", punicao: "60 min",                      comando: "/jail [nick]" },
      { infracao: "MDM",                       codigo: "4.1",  punicao: "60 min / 3 a 7 dias",         comando: "/jail [nick]" },
      { infracao: "PvP",                       codigo: "4.2",  punicao: "60 min / 120 min / Ban 3 dias", comando: "/jail [nick]" },
      { infracao: "VDM",                       codigo: "4.3",  punicao: "60 min / 1 a 5 dias",         comando: "/jail [nick]" },
      { infracao: "MG",                        codigo: "4.4",  punicao: "60 min / 1 a 3 dias",         comando: "/jail [nick]" },
      { infracao: "CL",                        codigo: "4.5",  punicao: "60 min / 1 a 3 dias",         comando: "/jail [nick]" },
      { infracao: "DM",                        codigo: "4.6",  punicao: "60 min / 1 a 3 dias",         comando: "/jail [nick]" },
      { infracao: "RK",                        codigo: "4.7",  punicao: "60 min / 1 a 3 dias",         comando: "/jail [nick]" },
      { infracao: "SK",                        codigo: "4.8",  punicao: "60 min / 1 a 5 dias",         comando: "/jail [nick]" },
      { infracao: "TK",                        codigo: "4.9",  punicao: "40 min / 1 a 2 dias",         comando: "/jail [nick]" },
      { infracao: "SAAV",                      codigo: "4.10", punicao: "40 min / 1 a 3 dias",         comando: "/jail [nick]" },
      { infracao: "ANTIRP",                    codigo: "3.21", punicao: "60 min",                      comando: "/jail [nick]" },
      { infracao: "Flaming RP",                codigo: "4.11", punicao: "60 min / 1 a 30 dias",        comando: "/jail [nick]" },
      { infracao: "KOS",                       codigo: "4.12", punicao: "60 min / 1 a 5 dias",         comando: "/jail [nick]" },
      { infracao: "PK",                        codigo: "4.13", punicao: "60 min / 1 a 5 dias",         comando: "/jail [nick]" },
      { infracao: "RPFW",                      codigo: "4.14", punicao: "60 min / 1 a 5 dias",         comando: "/jail [nick]" },
      { infracao: "MIX",                       codigo: "4.15", punicao: "60 min / 1 a 5 dias",         comando: "/jail [nick]" },
      { infracao: "AAP",                       codigo: "4.17", punicao: "60 min / 1 a 3 dias",         comando: "/jail [nick]" },
      { infracao: "DMA",                       codigo: "4.18", punicao: "30 min",                      comando: "/jail [nick]" },
      { infracao: "NRA",                       codigo: "4.19", punicao: "20 min",                      comando: "/jail [nick]" },
      { infracao: "FAIL",                      codigo: "4.22", punicao: "60 min / 3 a 5 dias",         comando: "/jail [nick]" },
      { infracao: "TSC",                       codigo: "4.23", punicao: "10 min",                      comando: "/jail [nick]" },
      { infracao: "ECI",                       codigo: "4.24", punicao: "60 min / 1 a 5 dias",         comando: "/jail [nick]" },
    ],
  },

  {
    id: "mutes",
    titulo: "Mutes",
    subtitulo: "voip e chat",
    coluna: "Tempo",
    explicacao: "<b>/mute [ID]</b> muta o jogador. Para tirar: <b>/unmute [ID]</b>. Mal uso do /report usa <b>/unmutep [ID]</b> (muta o report); para tirar: <b>/unmuterep [ID]</b>.",
    aviso: "",
    linhas: [
      { infracao: "Flaming",                  codigo: "4.11", punicao: "60 min", comando: "/mute [ID]" },
      { infracao: "Ruídos externos",          codigo: "3.26", punicao: "40 min", comando: "/mute [ID]" },
      { infracao: "Música no VoIP",           codigo: "3.27", punicao: "40 min", comando: "/mute [ID]" },
      { infracao: "Flood no chat",            codigo: "3.28", punicao: "40 min", comando: "/mute [ID]" },
      { infracao: "Ofensas a player",         codigo: "3.29", punicao: "30 min", comando: "/mute [ID]" },
      { infracao: "Mal uso do /me /do /try",  codigo: "3.31", punicao: "40 min", comando: "/mute [ID]" },
      { infracao: "Caps Lock",                codigo: "3.33", punicao: "10 min", comando: "/mute [ID]" },
      { infracao: "Mal uso do /report",       codigo: "2.8",  punicao: "40 min", comando: "/unmutep [ID]" },
    ],
  },

  {
    id: "bans",
    titulo: "Banimentos",
    subtitulo: "banir do servidor",
    coluna: "Punição",
    explicacao: "A tabela do Admin Level 1 <b>não tem comando de ban</b>. Para banir, chame um superior responsável e informe a infração e o código.",
    aviso: "",
    linhas: [
      { infracao: "ABUSE",                                            codigo: "1.18", punicao: "Ban 20 a 30 dias",                      comando: "" },
      { infracao: "DMEDIC",                                           codigo: "1.19", punicao: "20 dias / IP",                          comando: "" },
      { infracao: "Divulgação comercial",                             codigo: "3.3",  punicao: "10 dias",                               comando: "" },
      { infracao: "Bugs",                                             codigo: "3.10", punicao: "3 dias",                                comando: "" },
      { infracao: "Venda/compra de moeda ou item por dinheiro real",  codigo: "3.11", punicao: "365 dias / 3650 dias / IP / Permanente", comando: "" },
      { infracao: "Venda de propriedades/contas por dinheiro real",   codigo: "3.15", punicao: "30 dias / IP / Permanente",             comando: "" },
      { infracao: "Quebra excessiva de regras",                       codigo: "3.13", punicao: "7 dias",                                comando: "" },
      { infracao: "Ações destrutivas ao projeto",                     codigo: "3.14", punicao: "Conforme STAFF",                        comando: "" },
      { infracao: "Ofensas à administração",                          codigo: "3.18", punicao: "5 dias",                                comando: "" },
      { infracao: "Se passando por administrador",                    codigo: "3.25", punicao: "5 a 15 dias / IP",                      comando: "" },
      { infracao: "Dark RP",                                          codigo: "3.30", punicao: "10 a 30 dias",                          comando: "" },
      { infracao: "Dark RP (casos graves)",                           codigo: "3.30", punicao: "30 a 60 dias / IP",                     comando: "" },
      { infracao: "Múltiplas contas (para transferência de dinheiro)", codigo: "4.16", punicao: "30 dias / IP / Permanente",            comando: "" },
      { infracao: "Flaming RP",                                       codigo: "4.11", punicao: "1 a 30 dias",                           comando: "" },
      { infracao: "RPFW",                                             codigo: "4.14", punicao: "1 a 5 dias",                            comando: "" },
      { infracao: "AAP",                                              codigo: "4.17", punicao: "1 a 3 dias",                            comando: "" },
      { infracao: "AI",                                               codigo: "4.20", punicao: "10 dias",                               comando: "" },
      { infracao: "INA",                                              codigo: "4.21", punicao: "5 dias",                                comando: "" },
      { infracao: "FAIL",                                             codigo: "4.22", punicao: "3 a 5 dias / Wam",                      comando: "" },
      { infracao: "TOS",                                              codigo: "4.25", punicao: "Permanente",                            comando: "" },
    ],
  },
];

/* Comandos de apoio (retirar punição e verificar) */
const APOIO = [
  { para: "Soltar da cadeia",            comando: "/unjail [nick]" },
  { para: "Tirar o mute",                comando: "/unmute [ID]" },
  { para: "Tirar o mute do report",      comando: "/unmuterep [ID]" },
  { para: "Ver reports disponíveis",     comando: "/ANS" },
  { para: "Ir até o jogador",            comando: "/goto {ID}" },
  { para: "Ver o jogador em movimento",  comando: "/re {ID}" },
  { para: "Ver administradores online",  comando: "/alist" },
  { para: "Ver suas horas online",       comando: "/myastasts" },
];

/* Avisos do rodapé */
const AVISOS = [
  { cor: "vermelho", texto: "<b>Regra de autorização:</b> é proibido usar comandos administrativos para aplicar punições sem a devida autorização, quando exigida. Antes de qualquer ação que precise de autorização, peça permissão a um superior responsável." },
  { cor: "amarelo",  texto: "<b>Importante:</b> toda punição deve seguir a infração, o código e a reincidência desta tabela. Em caso de dúvida, consulte a liderança antes de aplicar uma punição diferente do padrão." },
];

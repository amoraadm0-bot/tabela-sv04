# Manual de uso — Tabela de Punições e Comandos SV04

Tabela unificada do SV04 (Rio Rise RP): cada infração aparece com o **código**, a **punição** e o **comando** certo para aplicar.

Organizado por **Admin Amora**.

---

## 1. Como usar a tabela (para admins)

1. Abra o link do site no celular ou no PC.
2. Digite na **barra de busca** o nome ou o código da infração (ex.: `VDM`, `4.3`, `flood`). Só as linhas que batem aparecem.
3. Ou toque nos botões **Kicks · Prisões · Mutes · Banimentos · Apoio** para pular direto para a seção.
4. **Toque no comando** (botão azul) para copiar. Aparece "Copiado!". Depois é só colar no jogo e trocar `[ID]` ou `[nick]` pelo do jogador.
5. Onde aparece **"Pedir a um superior"** (banimentos), o Admin Level 1 não tem o comando. Chame um superior e informe a infração e o código.

**Lembre:** só aplique punição que exige autorização depois de pedir permissão a um superior.

---

## 2. Os arquivos do site

| Arquivo | Para que serve | Precisa editar? |
|---|---|---|
| `dados.js` | Todas as infrações, códigos, punições e comandos | **Sim, é aqui que você muda tudo** |
| `index.html` | Visual e funcionamento do site | Não |
| `README.md` | Este manual | Só se quiser |

---

## 3. Como mudar uma punição

1. Entre no GitHub com a conta e abra o repositório **tabela-sv04**.
2. Clique no arquivo **`dados.js`**.
3. Clique no **lápis** (✏️ "Edit this file"), no canto direito.
4. Ache a linha da infração. Cada linha é assim:

   ```
   { infracao: "VDM", codigo: "4.3", punicao: "60 min / 1 a 5 dias", comando: "/jail [nick]" },
   ```

5. Troque **só o texto entre aspas**. Exemplo, mudar o VDM para 90 min:

   ```
   { infracao: "VDM", codigo: "4.3", punicao: "90 min / 1 a 5 dias", comando: "/jail [nick]" },
   ```

6. Clique no botão verde **"Commit changes..."** e depois em **"Commit changes"** de novo.
7. Espere **1 a 2 minutos** e recarregue o site. A mudança já aparece.

---

## 4. Como adicionar uma infração nova

1. No `dados.js`, ache a seção certa (`Kicks`, `Prisões`, `Mutes` ou `Banimentos`).
2. **Copie uma linha inteira** de uma infração parecida.
3. **Cole embaixo** dela, dentro da mesma lista (antes do `],`).
4. Troque os textos entre aspas.
5. Salve com **"Commit changes"**.

## 5. Como apagar uma infração

Apague a **linha inteira** dela (do `{` até o `},`) e salve.

## 6. Infração sem comando

Deixe o comando vazio, com as aspas juntas:

```
comando: ""
```

Na tabela vai aparecer **"Pedir a um superior"**.

## 6.1 Mudar o significado de uma sigla

Os significados ficam numa lista só, no **fim do `dados.js`** (`SIGNIFICADOS`). Cada sigla aparece uma vez só, e o significado vale para todas as tabelas onde ela aparece (ex.: FAIL em Prisões e em Banimentos).

```
  "VDM": "Vehicle Deathmatch: atropelar jogadores de propósito",
```

- Para mudar: troque o texto da direita.
- Para uma sigla nova: copie uma linha, cole embaixo e troque os dois textos. O nome da esquerda tem que ser igual ao nome da infração na tabela.
- Na tabela, a pessoa toca no nome da infração e o significado abre embaixo.

## 7. Mudar os comandos de apoio ou os avisos

- **Comandos de apoio** (`/unjail`, `/unmute`, `/goto` etc.): ficam na lista `APOIO`, no fim do `dados.js`. Mesma regra: troque o texto entre aspas.
- **Avisos do rodapé** (Regra de autorização e Importante): ficam na lista `AVISOS`, também no fim do `dados.js`.
- **Texto explicativo de cada seção** (a frase embaixo do título): é o campo `explicacao:` de cada seção.

---

## 8. Cuidados para não quebrar o site

- **Não apague** as vírgulas `,` no fim das linhas.
- **Não apague** as aspas `"` nem os colchetes `[ ]` e chaves `{ }`.
- Se precisar escrever aspas dentro de um texto, use aspas simples: `'assim'`.
- Mude **uma coisa por vez** e confira o site depois de salvar.

### O site ficou em branco depois de editar. E agora?

Quase sempre é uma vírgula ou aspa apagada sem querer. Para voltar ao que era antes:

1. Abra o `dados.js` no GitHub.
2. Clique em **History** (ícone de relógio, no canto direito).
3. Clique na versão anterior que funcionava, depois em **"..." → View file**.
4. Copie todo o conteúdo, abra o arquivo atual com o lápis, cole por cima e salve.

---

## 9. Compartilhar com os admins

Mande o link do site no grupo da administração. Todo mundo vê sempre a versão mais nova, sem precisar mandar imagem de novo.

O repositório é **público**: qualquer pessoa com o link consegue ver a tabela. Não coloque nomes reais, senhas ou dados pessoais aqui.

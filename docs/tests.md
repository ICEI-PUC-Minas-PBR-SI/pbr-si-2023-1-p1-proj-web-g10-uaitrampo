# Plano de Testes de Software

| Item | Condições  |Resultado esperado               | Resultado Obtido  |
|--------------------|------------------------------------|----------------------------------------|------------------------------------|
| [1]Teste de Cadastro  | *Entradas do Cadastro:* CPF 224.605.740-02, Email: teste@gmail.com, Senha: 123, Checkbox marcado: Contratar, Checkbox marcado: "Li e concordo com os termos de uso acima" | Alert com mensagem: Cadastro realizado com sucesso! | Alert com mensagem: Cadastro realizado com sucesso! |
| [2]Teste de Cadastro com CPF repetido  | *Entradas do Cadastro:* CPF 224.605.740-02, Email: testedois@gmail.com, Senha: 123, Checkbox marcado: Ser Contratado, Checkbox marcado: "Li e concordo com os termos de uso acima" | Alert com mensagem: Este CPF já está cadastrado. Por favor, insira outro CPF. | Alert com mensagem: Este CPF já está cadastrado. Por favor, insira outro CPF. |
| [3]Teste de Cadastro com email inválido  | *Entradas do Cadastro:* CPF 769.845.270-07, Email: @gmail.com, Senha: 123, Checkbox marcado: Ser Contratado, Checkbox marcado: "Li e concordo com os termos de uso acima" | Alert com mensagem: Por favor, insira um email válido. | Alert com mensagem: Por favor, insira um email válido. |
| [4]Teste de Cadastro com email repetido  | *Entradas do Cadastro:* CPF 022.665.390-00, Email: teste@gmail.com, Senha: 123, Checkbox marcado: Ser Contratado, Checkbox marcado: "Li e concordo com os termos de uso acima" | Alert com mensagem: Este email já está cadastrado. Por favor, insira outro email. | Alert com mensagem: Este email já está cadastrado. Por favor, insira outro email. |
| [5]Teste de Login com dados cadastrados | *Entradas do Login:* Email: teste@gmail.com, Senha: 123 | Alert com mensagem: Login realizado com sucesso! | Alert com mensagem: Login realizado com sucesso! |
| [6]Teste de Login com dados incorretos | *Entradas do Login:* Email: a@gmail.com, Senha: adsjd | Alert com mensagem: Email ou senha incorretos. Por favor, tente novamente. | Alert com mensagem: Email ou senha incorretos. Por favor, tente novamente. | 
| [7]Teste de deslogar | Clique no botão "Deslogar" | Redirecionamento para tela de login | Redirecionamento para tela de login | 
| [8]Teste de criar publicação | *Entradas da publicação:* Descrição: Gostaria de um serviço de marketing digital que..., Número para contato: 31994252304, Email para contato: teste@gmail.com, Instagram: teste, Linkedin: Teste_ | Alert com mensagem: Publicação criada com sucesso! |  Alert com mensagem: Publicação criada com sucesso! | 
| [9]Teste de criar publicação sem descrição | *Entradas da publicação:* Descrição: , Número para contato: 31994252304, Email para contato: teste@gmail.com, Instagram: teste, Linkedin: Teste_  | Alert com mensagem: Por favor, insira uma descrição sobre o que procura | Alert com mensagem: Por favor, insira uma descrição sobre o que procura |
| [10]Teste tela principal sem descrição | Caso o usuário tenha realizado uma publicação na tela de criar publicação, deverá ser mostrada a mesma na tela inicial  | Mostrar as publicações, contendo: O que o usuário está procurando, seu Instagram,linkedin,email e número | Publicações realizadas pelos usuários, contendo seu Instagram,linkedin,email e número |
| [11]Teste tela recuperar senha | Código inserido válido e código inválido  | Abertura de modal com o resultado da validação | Alert com mensagem do resultado da validação, porém sem aparecimento das modais |

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)

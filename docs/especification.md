# Especificações do Projeto

De modo geral para especificação do projeto, existem algumas etapas para planejamento do processo de desenvolvimento, para garantir qualidade e agilidade tanto do produto quanto do processo será utilizado  o método “ágil”, dessa forma será necessário tomar algumas ações:

    • Identificação do cliente e sua necessidade: é importante entender quem será o público-alvo da plataforma, quais são
    suas necessidades e expectativas em relação ao serviço que será oferecido.
    • Estabelecer os parâmetros do sistema e do processo;
        ◦ Verificar os prazos para entrega;
        ◦ Otimizar o máximo possível o processo;
        ◦ Distribuir as tarefas da equipe.
    • Estabelecer os requisitos:
        ◦ Funcionais: funcionalidades da plataforma, ou seja, o que ela deve ser capaz de fazer.
        ◦ Não funcionais: estão relacionados ao desempenho, escalabilidade, segurança, entre outros aspectos da plataforma;
    • Verificar e documentar as restrições do projeto;
    • Acompanhar o processo de desenvolvimento: reuniões periódicas para avaliar o progresso e verificar se tudo está ocorrendo
    conforme o planejado;
    • Testar periodicamente o sistema: é importante que o sistema seja testado periodicamente para garantir sua qualidade e 
    eficiência, evitando possíveis erros e bugs;

## Personas

Persona contratante:

Letícia tem 34 anos, é professora infantil e ama crianças. Ela tem 2 filhos e adora passar tempo com a família e amigos. Incentivada pelo desemprego devido a pandemia ela decidiu criar sua própria loja de roupas para bebês. Após ter tido muito sucesso no começo ela percebeu que suas vendas começaram a cair, e por não ter muito conhecimento na área de empreendedorismo e com medo de perder sua empresa Letícia decidiu começar a aprender sobre finanças e marketing digital na internet. Apesar de ter muita vontade de aprender ela não conseguia, já que além de ter que administrar sua loja ela também tinha que cuidar de sua família. Por não ter tempo o suficiente para ambas as tarefas ela acabou por decidir em contratar um profissional da área digital para auxiliá-la no processo de remakerting e reestruturação de sua empresa.

Persona marketeira:

Ana Silva tem 27 anos e acabou de concluir sua graduação em comunicação social. Muito comunicativa, Ana sempre teve como hobbie conhecer pessoas e documentar sua vida através de fotos e vídeos. Apesar de gostar bastante de sua faculdade, Ana teve algumas experiências profissionais na área de publicidade como CLT, porém devido à falta de flexibilidade em seus horários e a estressante rotina de ter que gastar mais de 2h por dia apenas no transporte entre sua casa e seu local de trabalho, ela optou por deixar seu emprego e buscar oportunidades de trabalhar como freelancer pela internet.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Empresário          | Encontrar um profissional qualificado em marketing digital | Ajudar a aumentar a presença online da minha empresa |
|Prof. marketing dig.| Encontrar trabalhos autônomos      | Ampliar minha renda e expandir meu portfólio |
|Cliente| Encontrar trabalhos autônomos      | Ampliar minha renda e expandir meu portfólio |
|Empresário| Fornecer feedback sobre o trabalho de marketing digital que recebi      | Ajudar os profissionais a melhorar e garantir que outros clientes obtenham o mesmo nível de qualidade. |
|Designer gráfico amador       | Mudar o tamanho das fontes                 | Mais acessibilidade por conta de um problema de visão |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID    | Descrição do Requisito                                                                                   | Prioridade | Responsável |
|-------|----------------------------------------------------------------------------------------------------------|------------|-------------|
| RF-001| Permitir cadastro dos contratantes e profissionais. A página de cadastro deverá apresentar os seguintes itens: <br> Caixas de seleção: "Você quer: Contratar ou ser contratado?" <br> *apenas essa caixa deverá aparecer quando se iniciar o cadastro. O layout da página deverá mudar dependendo da escolha <br> <br> Tipo de empreendedor: amador, MEI, microempreendedor individual etc. <br> <br> CNPJ ou CPF <br> <br> Campos digitáveis: CPF ou CNPJ <br> Área reservada para descrever o usuário, e colocar o que ele procurar na plataforma. <br> <br> Campos para adição de redes sociais com ícones das respectivas redes sendo elas linkedin e instagram. Adicione também "outros" com um ícone de link. <br> <br> Aceitação de termos de uso e condições obrigatórias para conclusão do cadastro. (A definir) <br> Aceitação dos termos de responsabilidade obrigatório para conclusão do cadastro. (A definir)| ALTA |
| RF-002| Permitir alterações nos cadastros dos usuários (contratantes e prestadores de serviço). | MÉDIA |
| RF-003| Permitir exclusões nos cadastros dos usuários (contratantes e prestadores de serviço). | MÉDIA |
| RF-004| Permitir login dos usuários cadastrados, inserindo o email e a senha do usúario. | ALTA |
| RF-005| Href de "Esqueceu a senha?" para fazer recuperação via email na mesma página onde se faz o login <br> Href de "Ainda não é cadastrado? Comece por aqui." <br> <br> *Href: texto clicável com redirecionamento. | MÉDIA|
| RF-006| Página para cadastro e para trocar senha. | MÉDIA |
| RF-007| Ferramentas de comunicação entre clientes e prestadores de serviços de marketing digital. Isso deverá ser implementado no formato de chat e de comentários em publicações.| ALTA|
| RF-008| Permitir que os usuários façam buscas por meio de uma barra de pesquisa. Incluir também, um sistema de busca por palavra-chave e tipo de serviço, por meio de tags pré-feitas, sem a possibilidade de alteração por usuário. | MÉDIA |
| RF-009| Permitir adicionar, editar e excluir portfólios no formato de PDF apenas. | MÉDIA |
| RF-0010| Permitir que o usuário demonstre em seu perfil todos os serviços já feitos por ele dentro da plataforma.| BAIXA |
| RF-0011| Permitir que os usuários avaliem os prestadores de serviço. Incluir sistema de avaliação por estrelas e possibilidade de escrever comentários. | BAIXA |
| RF-0012| Permitir que usuários alterem o tamanho da fonte dos textos da plataforma para acessibilidade. A alteração deve ser feita de uma maneira que não desconfigure o layout. | BAIXA | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser fácil de usar e intuitivo, permitindo que os usuários encontrem facilmente os serviços que procuram. | ALTA | 
|RNF-002| O sistema deve ser capaz de suportar um grande número de usuários e prestadores de serviço, sem prejudicar o desempenho |  ALTA | 
|RNF-003| O sistema deve garantir a segurança das informações pessoais dos usuários |  ALTA | 
|RNF-004| O sistema deve estar disponível para uso a qualquer momento, com um tempo de inatividade mínimo. |  MÉDIA | 
|RNF-005| O sistema deve ser capaz de se integrar com outros sistemas, como sistemas de pagamento online, por exemplo. |  MÉDIA | 
|RNF-006| O sistema deve ter um tempo de resposta rápido para a busca de serviços |  MÉDIA | 
|RNF-007| O sistema deve ser compatível com diferentes dispositivos e navegadores |  MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não deve deixar de executar os requisitos de alta prioridade |
|03| As entregas parciais devem ser concluídas nos prazos  |
|04| A divisão de tarefas deve ser igualmente dividida de acordo com a capacidade de cada um|
|05| Projeto vai ser desenvolvido português                |
|06| Ficará disponivel apenas para utilização no brasil    |

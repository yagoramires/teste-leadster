# Teste para vaga de Desenvolvedor Front-End na Leadster

Este projeto é uma landing page desenvolvida com base no design fornecido pela empresa. A landing page consiste em três sessões principais, cada uma desempenhando um papel específico:

Introdução: Uma seção simples que oferece uma breve visão geral da empresa e seu propósito.

Vídeos de Projetos: Uma seção na qual uma lista de vídeos relacionados aos projetos da empresa é exibida. Esses vídeos fornecem uma visão detalhada dos projetos concluídos anteriormente e ajudam a transmitir a experiência da empresa.

Conversão: Uma seção estratégica voltada para a conversão, com o objetivo de incentivar os visitantes a tomar uma ação específica, como preencher um formulário, entrar em contato ou se inscrever em uma newsletter.

Com essas três sessões bem definidas, a landing page oferece uma experiência envolvente e informativa para os visitantes, ao mesmo tempo em que busca atingir os objetivos de negócio da empresa.

## Estrutura do Código

O projeto segue uma estrutura organizada e modular, visando facilitar a manutenção e a escalabilidade. A estrutura de pastas adotada é a seguinte:

app/: Esta pasta contém as páginas do projeto, seguindo a nova organização de pastas do Next.js, onde cada página está dentro da pasta App. Por exemplo, a página inicial está localizada em app/page.tsx.

components/: Cada seção da landing page foi dividida em componentes individuais para facilitar a manutenção e a reutilização. Cada componente possui seu próprio arquivo de estilização individual.

contexts/: Nesta pasta, esta o arquivo relacionado aos dados dos videos utilizados no projeto. Os contextos são responsáveis por compartilhar dados entre os componentes de forma eficiente e organizada.

styles/: A pasta styles contém os arquivos de estilização globais e variáveis, que são aplicados em todo o projeto.

hooks/: Aqui está localizado o custom hook criado para auxiliar na lógica e reutilização de código. Os hooks personalizados encapsulam funcionalidades específicas, tornando-as facilmente acessíveis em diferentes partes do projeto.

Essa estrutura de pastas foi adotada para garantir uma organização clara e modular do código, permitindo fácil navegação entre os arquivos e facilitando a adição de novas funcionalidades ou seções à landing page.

## Funcionalidades

A aplicação possui um conjunto de funcionalidades que visam oferecer uma experiência completa para os usuários. Algumas das principais funcionalidades incluem:

1- Filtragem por Categoria: Os usuários podem filtrar os vídeos por categoria, permitindo que eles encontrem facilmente os conteúdos de seu interesse.

2- Organização por Data de Criação: Os vídeos são organizados por data de criação, proporcionando uma ordenação cronológica e facilitando a localização dos vídeos mais recentes.

3- Paginação da Lista de Vídeos: A lista de vídeos é paginada, o que significa que os usuários podem navegar entre as diferentes páginas para acessar um número maior de vídeos de forma organizada.

4- Visualização dos Vídeos: Os usuários podem visualizar os vídeos diretamente na aplicação, permitindo que eles assistam ao conteúdo sem a necessidade de redirecionamentos externos.

5- Download de Arquivos: Os usuários têm a opção de fazer o download dos arquivos associados aos vídeos, como documentos complementares ou materiais adicionais.

6- Links Completamente Funcionais: Os links presentes na aplicação estão prontos para serem utilizados, necessitando apenas das devidas rotas para que sejam direcionados para as páginas correspondentes.

Essas funcionalidades foram implementadas para tornar a aplicação completa e fornecer uma experiência agradável aos usuários, permitindo que eles explorem, visualizem e interajam com os vídeos de maneira intuitiva e eficiente.

## Instruções de Uso

```bash
    # Clonar repositório
    $ git clone https://github.com/yagoramires/teste-leadster.git
    # Acessar o repositório
    $ cd teste-leadster
    # Instalar dependências
    $ npm install
    # Rodar aplicação em modo de desenvolvimento
    $ npm run dev
    # O servidor será iniciado na porta 3000 - acesse http://localhost:3000/
```

<h1> Autor </h1>

<div align="center" >
    <p>
        <img style="border-radius: 50%;" src="https://i.imgur.com/mDJjScy.jpg" width="150px;" />
    </p>
    <p>
        <a
            href="https://www.linkedin.com/in/yagoramires/"
            target="_blank"
            >
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
        </a>
    </p>
    <p>
        <a href="https://github.com/yagoramires" ><b>Yago Ramires</b> 🚀</a>
    </p>
</div>

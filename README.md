<h1 align="center">E-Carteiro</h1>
<p align="center">
    <a href="" alt="Version">
        <img src="https://img.shields.io/badge/version-0.0-black" />
    </a>
    <a href="" alt="NodeJs">
        <img src="https://img.shields.io/badge/backend-NodeJs-green" />
    </a>
    <a href="" alt="MongoDB">
        <img src="https://img.shields.io/badge/database-MongoDB-yellow" />
    </a>
    <a href="" alt="Express">
        <img src="https://img.shields.io/badge/bib-Express-blue" />
    </a>
    <a href="" alt="Amazon SES">
        <img src="https://img.shields.io/badge/bib-Amazon SES-red" />
    </a>
</p>

## Descrição
- Centralizar o envio de e-mails de várias aplicações em uma única aplicação.
- Enviar e-mails de um remetente para um ou mais destinatários de forma fácil.

## Requisitos Funcionais
- Receber um remetemte e destinatário e vincular com uma empresa.
- Enviar mensagem para um destinatário recebido.
- Listar destinatários por empresa.
- Visualização do progresso de envio (concluído / não concluído).

## Requisitos Não Funcionais
- Utilizar Amazon SES
- Utilizar MongoDB
- Utilizar Express
- Utilizar serviço de mensageria (Redis)

## Regras de Negócio
- Ao receber empresa, se não existir ela deve ser criada.
- Ao receber remetente e destinatário, vinculá-los com uma empresa informada.
- Deve permitir vincular uma lista de e-mails a uma empresa.

## Propostas futuras
- Enviar e-mails para uma lista de e-mails, vinculando e-mails com tags e empresa;
- Enviar mensagem de Whatsapp para uma lista de telefones, vinculando telefones com tags e empresa;
- Enviar mensagem SMS para uma lista de telefones, vinculando telefones com tags e empresa;
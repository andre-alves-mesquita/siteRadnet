<?php

class corpoDuvida
{

    //função utilizada para preencher os campos do email com os valores enviados no formulario, criando um
    // html.
    public function preencherCorpoDoEmail(
        string $nome,
        string $assunto,
        string $email,
        string $mensagem,
        string $fone
    ) {

        $arquivo = "
    <style type='text/css'>

    body {
        margin: 0px;
        font-family: Arial;
        font-size: 12px;
        color: black;
        
    }

    </style>
    <html>
    <table width='510'>
    <tr>
    <td width='500'><h3>Dúvidas, Reclamações, etc</h3></td>
</tr>
    <tr>
        <td width='500'>Nome: $nome</td>
    </tr>
    <tr>
        <td width='500'>Assunto: $assunto</td>
    </tr>
    <tr>
        <td width='500'>E-mail: $email</td>
    </tr>
    <tr>
    <td width='500'>Telefone: $fone</td>
</tr>
    <tr>
        <td width='500'>Mensagem: $mensagem</td>
    </tr>
    </table>
    </html>";

        return $arquivo;
    }
}

<?php

class corpoPreCad
{

    //função utilizada para preencher os campos do email com os valores enviados no formulario, criando um
    // html.
    public function preencherCorpoDoEmail(
        string $nome,
        string $cpf,
        string $rg,
        string $dt_nasc,
        string $nome_mae,
        string $email,
        string $tel1,
        string $tel2,
        string $endereco,
        string $pt_ref,
        string $dt_venc,
        string $pl_esc

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
        <td width='500'><h3>Pré-Cadastro do Site Radnet</h3></td>
    </tr>

    <tr>
        <td width='500'>Nome: $nome</td>
    </tr>
    <tr>
        <td width='500'>Cpf: $cpf</td>
    </tr>
    <tr>
        <td width='500'>Rg: $rg</td>
    </tr>
    <tr>
        <td width='500'>Data de Nascimento: $dt_nasc</td>
    </tr>

    <tr>
    <td width='500'>Nome da Mãe: $nome_mae</td>
</tr>
<tr>
    <td width='500'>E-mail: $email</td>
</tr>
<tr>
    <td width='500'>Telefone 1: $tel1</td>
</tr>
<tr>
    <td width='500'>Telefone 2: $tel2</td>
</tr>

<tr>
<td width='500'>Endereco: $endereco</td>
</tr>
<tr>
<td width='500'>Ponto de Referencia: $pt_ref</td>
</tr>
<tr>
<td width='500'>Data Vencimento: $dt_venc</td>
</tr>
<tr>
<td width='500'>Plano Escolhido: $pl_esc</td>
</tr>



    </table>
    </html>";

        return $arquivo;
    }
}

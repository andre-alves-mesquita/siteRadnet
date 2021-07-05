<?php

class corpoEmail
{

    //função utilizada para preencher os campos do email com os valores enviados no formulario, criando um
    // html.
    public function preencherCorpoDoEmail(
        string $email

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
    <td width='500'><h3>O seguinte email deseja receber notícias e promoções Radnet</h3></td>
</tr>
    <tr>
        <td width='500'>Email: $email</td>
    </tr>
  
    </table>
    </html>";

        return $arquivo;
    }
}

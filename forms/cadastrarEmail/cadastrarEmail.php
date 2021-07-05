<?php

require_once '../entity/email.php';
require_once '../entity/cliente.php';
require_once '../entity/ClientePreCadastro.php';

require_once 'corpoEmail.php';
require_once 'corpoDuvida.php';
require_once 'corpoPreCad.php';

require_once '../src/PHPMailer.php';
require_once '../src/SMTP.php';
require_once '../src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

switch ($_GET['service']) {
    case 'email':

        //Cria uma instandia do cliente e preenche seus valores em getters e setterss
        $Email = new email();
        $Email->setEmail($_POST['email']);

        $enviar_email = new corpoEmail();

        $arquivo = $enviar_email->preencherCorpoDoEmail(
            $Email->getEmail()

        );

        //Prenchimento das informações necessarias para o envio do email
        $mail = new PHPMailer(true);

        try {

            //$mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'precadastroradnet@gmail.com'; //Email em que irá aparecer como remetente
            $mail->Password = 'admin4521'; // senha do email para autenticação
            $mail->Port = 587;

            $mail->setFrom('precadastroradnet@gmail.com');
            $mail->addAddress('andre20naruto@gmail.com'); // Email destinatário

            $mail->isHTML(true);
            $mail->Subject = 'Teste de email via gmail'; // assunto
            $mail->Body = $arquivo;
            $mail->AltBody = $arquivo;

            if ($mail->send()) {
                echo "<script>
                        alert('Email enviado com Sucesso!');
                        window.location.href = '../../index.html';
                    </script>";
            } else {
                echo "<script>
                        alert('Falha ao enviar Email!');
                        window.location.href = '../../index.html';
                    </script>";
            }
        } catch (Exception $e) {

            echo "Erro ao enviar mensagem: {$mail->ErrorInfo}";
        }

        break;

    case 'duvida':

        //Cria uma instandia do cliente e preenche seus valores em getters e setterss
        $Cliente = new cliente();
        $Cliente->setNome($_POST['nome']);
        $Cliente->setAssunto($_POST['assunto']);
        $Cliente->setEmail($_POST['email']);
        $Cliente->setMensagem($_POST['mensagem']);
        $Cliente->setFone($_POST['fone']);

        $enviar_email = new corpoDuvida();

        $arquivo = $enviar_email->preencherCorpoDoEmail(
            $Cliente->getNome(),
            $Cliente->getAssunto(),
            $Cliente->getEmail(),
            $Cliente->getMensagem(),
            $Cliente->getFone()
        );


        //Prenchimento das informações necessarias para o envio do email
        $mail = new PHPMailer(true);

        try {

            //$mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'precadastroradnet@gmail.com'; //Email em que irá aparecer como remetente
            $mail->Password = 'admin4521'; // senha do email para autenticação
            $mail->Port = 587;

            $mail->setFrom('precadastroradnet@gmail.com');
            $mail->addAddress('andre20naruto@gmail.com'); // Email destinatário

            $mail->isHTML(true);
            $mail->Subject = 'Teste de email via gmail'; // assunto
            $mail->Body = $arquivo;
            $mail->AltBody = $arquivo;

            if ($mail->send()) {
                echo "<script>
                        alert('Email enviado com Sucesso!');
                        window.location.href = '../../index.html';
                    </script>";
            } else {
                echo "<script>
                        alert('Falha ao enviar Email!');
                        window.location.href = '../../index.html';
                    </script>";
            }
        } catch (Exception $e) {

            echo "Erro ao enviar mensagem: {$mail->ErrorInfo}";
        }

        break;

    case 'preCad':

        //Cria uma instandia do cliente e preenche seus valores em getters e setterss
        $Cliente = new clientePreCadastro();
        $Cliente->setNome($_POST['nome']);
        $Cliente->setCpf($_POST['cpf']);
        $Cliente->setRg($_POST['rg']);
        $Cliente->setDtNascString($_POST['dt_nasc']);
        $Cliente->setNomeMae($_POST['nome_mae']);
        $Cliente->setEmail($_POST['email']);
        $Cliente->setTel1($_POST['1_tel']);
        $Cliente->setTel2($_POST['2_tel']);
        $Cliente->setEndereco($_POST['endereco']);
        $Cliente->setPontoDeReferencia($_POST['pt_ref']);
        $Cliente->setDataVencimento($_POST['dt_venc']);
        $Cliente->setPlanoEscolhido($_POST['pl_esc']);

        $enviar_email = new corpoPreCad();

        $arquivo = $enviar_email->preencherCorpoDoEmail(
            $Cliente->getNome(),
            $Cliente->getCpf(),
            $Cliente->getRg(),
            $Cliente->getDtNascString(),
            $Cliente->getNomeMae(),
            $Cliente->getEmail(),
            $Cliente->getTel1(),
            $Cliente->getTel2(),
            $Cliente->getEndereco(),
            $Cliente->getPontoDeReferencia(),
            $Cliente->getDataVencimento(),
            $Cliente->getPlanoEscolhido()


        );


        //Prenchimento das informações necessarias para o envio do email
        $mail = new PHPMailer(true);

        try {

            //$mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'precadastroradnet@gmail.com'; //Email em que irá aparecer como remetente
            $mail->Password = 'admin4521'; // senha do email para autenticação
            $mail->Port = 587;

            $mail->setFrom('precadastroradnet@gmail.com');
            $mail->addAddress('andre20naruto@gmail.com'); // Email destinatário

            $mail->isHTML(true);
            $mail->Subject = 'Teste de email via gmail'; // assunto
            $mail->Body = $arquivo;
            $mail->AltBody = $arquivo;

            if ($mail->send()) {
                echo "<script>
                               alert('Email enviado com Sucesso!');
                               window.location.href = '../../index.html';
                           </script>";
            } else {
                echo "<script>
                               alert('Falha ao enviar Email!');
                               window.location.href = '../../index.html';
                           </script>";
            }
        } catch (Exception $e) {

            echo "Erro ao enviar mensagem: {$mail->ErrorInfo}";
        }



        break;

    default:

        break;
}

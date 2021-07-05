<?php


class cliente
{

    private $nome;
    private $assunto;
    private $email;
    private $fone;
    private $mensagem;


    public function getNome()
    {
        return $this->nome;
    }

    public function setNome(string $nome_cliente)
    {
        $this->nome = $nome_cliente;
    }

    public function getAssunto()
    {
        return $this->assunto;
    }

    public function setAssunto(string $assunto_cliente)
    {
        $this->assunto = $assunto_cliente;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail(string $email_cliente)
    {
        $this->email = $email_cliente;
    }

    public function getMensagem()
    {
        return $this->mensagem;
    }

    public function setMensagem(string $mensagem_cliente)
    {
        $this->mensagem = $mensagem_cliente;
    }

    public function getFone()
    {
        return $this->fone;
    }

    public function setFone(string $fone_cliente)
    {
        $this->fone = $fone_cliente;
    }
}

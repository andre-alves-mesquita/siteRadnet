<?php

class email
{

    private $email;

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail(string $email_cliente)
    {
        $this->email = $email_cliente;
    }
}

<?php

class clientePreCadastro
{
    private $nome;
    private $cpf;
    private $rg;
    private $dt_nasc;
    private $nomeMae;
    private $email;
    private $tel1;
    private $tel2;
    private $endereco;
    private $pontoDeReferencia;
    private $dataDeVencimento;
    private $plano;
    private $dt_nasc_string;


    public function getNome()
    {
        return $this->nome;
    }

    public function setNome(string $nome_cliente)
    {
        $this->nome = $nome_cliente;
    }

    public function getCpf()
    {
        return $this->cpf;
    }

    public function setCpf(string $cpf_cliente)
    {
        $cpfCorrigido = str_replace('.', '', str_replace('-', '', $cpf_cliente));

        $this->cpf = $cpfCorrigido;
    }

    public function getRg()
    {
        return $this->rg;
    }

    public function setRg(string $rg_cliente)
    {
        $this->rg = $rg_cliente;
    }

    public function getDtNasc()
    {
        return $this->dt_nasc;
    }

    public function SetDtNasc(DateTimeInterface $dt_nasc_cliente)
    {
        $this->dt_nasc = $dt_nasc_cliente;
    }

    public function getNomeMae()
    {
        return $this->nomeMae;
    }

    public function setNomeMae(string $nome_mae_cliente)
    {
        $this->nomeMae = $nome_mae_cliente;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail(string $email_cliente)
    {
        $this->email = $email_cliente;
    }


    public function getTel1()
    {
        return $this->tel1;
    }

    public function setTel1(string $tel_1_cliente)
    {
        $this->tel1 = $tel_1_cliente;
    }

    public function getTel2()
    {
        return $this->tel2;
    }

    public function setTel2(string $tel_2_cliente)
    {
        $this->tel2 = $tel_2_cliente;
    }

    public function getEndereco()
    {
        return $this->endereco;
    }

    public function setEndereco(string $endereco_cliente)
    {
        $this->endereco = $endereco_cliente;
    }

    public function getPontoDeReferencia()
    {
        return $this->pontoDeReferencia;
    }

    public function setPontoDeReferencia(string $ponto_referencia_cliente)
    {
        $this->pontoDeReferencia = $ponto_referencia_cliente;
    }

    public function getDataVencimento()
    {
        return $this->dataDeVencimento;
    }

    public function setDataVencimento(string $data_vencimento_cliente)
    {
        $this->dataDeVencimento = $data_vencimento_cliente;
    }

    public function getPlanoEscolhido()
    {
        return $this->plano;
    }

    public function setPlanoEscolhido(string $plano_escolhido_cliente)
    {

        switch ($plano_escolhido_cliente) {

            case 1:
                $plano_cliente = "START - SEM FIDELIDADE";

                break;
            case 2:
                $plano_cliente = "FAMILY - SEM FIDELIDADE";

                break;
            case 3:
                $plano_cliente = "OFFICE - SEM FIDELIDADE";

                break;
            case 4:
                $plano_cliente = "GAME - SEM FIDELIDADE";

                break;

            case 5:
                $plano_cliente = "START - COM FIDELIDADE";

                break;
            case 6:
                $plano_cliente = "FAMILY - COM FIDELIDADE";

                break;
            case 7:
                $plano_cliente = "OFFICE - COM FIDELIDADE";

                break;
            case 8:
                $plano_cliente = "GAME - COM FIDELIDADE";

                break;
        }


        $this->plano = $plano_cliente;
    }


    public function getDtNascString()
    {
        return $this->dt_nasc_string;
    }

    public function setDtNascString(string $dt_nasc_string)
    {

        $dt_corrigida = explode("-", $dt_nasc_string);

        $this->dt_nasc_string = $dt_corrigida[2] . "-" . $dt_corrigida[1] . "-" . $dt_corrigida[0];
    }
}

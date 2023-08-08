<?php

    include 'conexao.php';

    error_reporting(0);

    $cpf = $_GET['cpf'];
    $usuario = $_GET['usuario'];
    $senha = $_GET['senha'];
    $confirmsenha = $_GET['confirmsenha'];

    
    
    $query = "insert into usuarios values ('','$cpf','$usuario','$senha','$confirmsenha')";

    mysqli_query($conn,$query) or die ("Erro ao tentar inserir o dado!");
    if ($query) {echo("<script>alert('Parabéns!! Os Dados Foram Cadastrados com sucesso!');</script>");}

    mysqli_close($conn);

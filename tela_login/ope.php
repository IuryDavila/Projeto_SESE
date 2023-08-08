<?php

//session_start inicia a sessão

session_start();

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

// A próxima linha é responsável pela conexão com o banco de dados.

$con = mysqli_connect("localhost","higor","123456","cadastro")or die ("Sem Conexão com o servidor");

// A variavel $result executa o select da $query.

$query="select *FROM usuarios WHERE NOME='$usuario' AND SENHA='$senha";

$result= mysqli_query($con,$query);

if(mysqli_num_rows($result) > 0){

    $_SESSION['usuario'] =$usuario;
    $_SESSION['senha'] =$senha;

    header('location:index.html');}
    
    else{
        unset($_SESSION['usuario']);
        unset($_SESSION['senha']);
        header('location:login.html');
    }

    ?>
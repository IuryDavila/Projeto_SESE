<?php
    

    $msyql_servidor='localhost';
    $msyql_usuario='higor';
    $msyql_senha='123456';
    $msyql_database="cadastro";

    $conn = mysqli_connect($msyql_servidor,$msyql_usuario,$msyql_senha,$msyql_database) or die("Erro ao conectar!");

    if ($conn){echo("<script>alert('parabéns!! A conexão ao banco de dados ocorreu normalmente!');</script>");}


?>
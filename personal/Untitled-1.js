<html>
    <title>Ejercicio 01:</title>
<head>
    <script language="JavaScript" type="text/javascript">
    	function promedio(){
            var nota1=formulario.n1.value;
            var nota2=formulario.n2.value;
            var nota3=formulario.n3.value;
            var prom=(parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3;
            document.getElementById('resultado').value=prom;
	}
    </script>
</head>
<body>
    <form method="get" name="formulario">
        NOTA1 : <input name="n1" type="n1"> <br />
        NOTA2 : <input name="n2" type="n2"> <br />
        NOTA3 : <input name="n3" type="n3"> <br />
        <input type="button" value="Resultado" onClick="promedio()" ><br />
        PROMEDIO : <input name="resultado" id="resultado" type="text" >
    </form>
</body>
</html>
    



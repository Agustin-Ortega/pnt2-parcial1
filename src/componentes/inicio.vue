<template >

  <section class="src-componentes-inicio">
    <div class="jumbotron">
    <H4>Proyecto Parcial </H4><hr>
    <P>El formulario contendrá el nombre de quién realizó el gasto, la descripción y el
      importe. Cada campo será obligatorio, el campo nombre debe aceptar entre 3 y 15
      caracteres, sin espacios por delante ni por detrás ó intermedios. El campo importe
      debe ser numérico. Presentar los carteles de error de validación debajo de cada
      campo.
    </P>
    <p>
      La tabla representará el detalle de los gastos almacenados por el formulario. Cada
      fila de la tabla mostrará la persona que realizó el gasto, la descripción, el importe y la
      fecha de creación del gasto en formato dd/mm/yyyy h:mm:ss. Para el importe,
      agregar un $ delante del valor.
    </p><br>
    <p>
      Agregar una fila adicional en la tabla, al final, que mostrará el gasto total calculado
      automáticamente. Si el gasto total es inferior a $1000 representarlo en verde, de
      $1000 a $5000 en magenta y por encima de los $5000 en naranja.
      Extra (opcional): incluir un input, en la vista de gastos, por encima de la tabla,
      donde me permita ingresar el presupuesto que tengo asignado, y si sólo el gasto total
      supera al presupuesto me lo marque en rojo.
    
    </p>
    <p>Agustin Ortega</p>
    </div>
  </section>

</template>

<script >

  export default  {
    name: 'src-componentes-inicio',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-inicio {

  }
</style>

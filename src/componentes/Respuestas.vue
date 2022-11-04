<template >

  <div class="jumbtron">
    <h1>Respuestas</h1>
    <div class="jumbotron">
      <div class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Pregunta</th>
            <th>Respuestas</th>
          </tr>
          <tr v-for="(respuesta, index) in respuestas " v-bind:key="index">
          
    
            <td>{{respuesta.numero}}</td>
            <td>{{respuesta.respuestas}}</td>
          
          </tr>


        </table>
      </div>      
    </div>
  </div>

</template>

<script>

  export default  {
    name: 'src-componentes-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas: [
          {numero:1, respuestas:['b','c']},
          {numero:2, respuestas:'c'},
          {numero:3, respuestas:['b','d','e']},
        ]

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-respuestas {

  }
</style>

<template >

  <section class="src-componentes-formulario">
    <div class="jumbotron">

      <div id="jumbotron2" class="jumbotron">
        <h1>Formulario de Gastos</h1>
        <hr><br>
        <div id="jumbotron3" class="jumbotron">

          <vue-form :state="formState" @submit.prevent="enviar()">

            <validate tag="div">

              <label for="nombre">Nombre</label>
              <input type="text" id="nombre" class="form-control" autocomplete="off" v-model.trim="formData.nombre"
                name="nombre" required :minlength="nombreMinLength" :maxlength="nombreMaxLength" no-espacios >

              <!-- VALIDACIONES -->
              <field-messages name="nombre" show="$dirty">
                <div lass="font">Bienvenido/a {{ formData.nombre }}</div>
                <div slot="required" class="alert alert-danger mt-1">Campo Nombre requerido</div>
                <div slot="minlength" class="alert alert-warning mt-1">Este campo debe poseer al menos {{
                    nombreMinLength
                }}
                  caracteres.</div>
                <!-- VALIDACIONES -->
                <div slot="no-espacios" class="alert alert-danger mt-1">El campo no permite espacios intermedios.</div>
              </field-messages>

            </validate><br>
            <hr>
            
            
            <validate tag="div">
            
              <label for="descripcion">Descripcion</label>
              <input type="text" id="descripcion" class="form-control" autocomplete="off" v-model.trim="formData.descripcion" name="descripcion"
                required>
              <!-- VALIDACIONES -->
              <field-messages name="descripcion" show="$dirty">
                <div class="font">descripcion confirmada</div>
                <div slot="required" class="alert alert-danger mt-1">Campo descripcion requerido</div>
                <div slot="descripcion" class="alert alert-danger mt-1">descripcion no valido</div>
              </field-messages>
            
            </validate><br>

            <validate tag="div">

              <label for="importe">Importe</label>
              <input type="number" id="importe" class="form-control" autocomplete="off" v-model.number="formData.importe"
                name="importe" required :min="importeMin">
              <!-- VALIDACIONES -->
              <field-messages name="importe" show="$dirty">
                <div class="font">importe confirmado</div>
                <div slot="required" class="alert alert-danger mt-1">Campo importe requerido</div>
                <div slot="min" class="alert alert-warning mt-1">El importe debe ser mayor a {{ importeMin }}</div>
              </field-messages>

            </validate><br>
            <hr>

            <button class="btn btn-success my-3" :disabled="formState.$invalid" >Enviar</button>
          </vue-form>
        </div>
      </div>
      
        <!--      TABLA SUBMIT        -->
        <!--                            -->
        
        <h1>Detalle de Gastos</h1>
        <div v-if="datos" class="table-responsive">
          <label class="c" for="presupuesto">Presupuesto</label>
          <input type="number" id="presupuesto" class="form-control" autocomplete="off" v-model.number="formData.presupuesto"
            name="presupuesto"><br><hr>

          <table class="table table-dark">
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Importe</th>
              <th>Fecha</th>
        
            </tr>
        
            <tr v-for="(dato, index) in datos" v-bind:key="index">
              <td v-if="!dato.nombre">-</td>
              <td v-else>{{ dato.nombre }}</td>
              <td>{{dato.descripcion}}</td>
              <td>{{dato.importe}}</td>
              <td v-if="!dato.fecha">-</td>
              <td>{{ dato.fecha }}</td>
            </tr>
        
            <tr v-if=" this.total <= formData.presupuesto">
              <td></td>
              <td :style="{ color: this.calcularColor().color }">
                TOTAL
                </td>
                <td :style="{ color: this.calcularColor().color }">$ {{ this.total }}</td>
                <td></td>
                </tr>
                <tr v-else>
                  <td></td>
                  <td :style="{ color: presupuestoColor} ">
                    TOTAL: 
                  </td>
                  <td :style="{ color: presupuestoColor} "> $ {{ this.total }}</td>
                  <td></td>
                </tr>
                
                
                </table>
        </div>
        
        <div class="jumbotron">
        
        </div>
        
        
        </div>
        </section>
</template>

<script >

export default {
  name: 'src-componentes-formulario',
  props: [],
  mounted() {

  },
  data() {
    return {
      total: 0,
      formState: {},
      formData: this.datosIniciales(),
      datos: [],
      nombreMinLength: 3,
      nombreMaxLength: 15,
      importeMin: 0,
      presupuestoColor: "#FF0000",
      color: 'red',
      presupuesto: 0,

      
    }
  },
  methods: {
    datosIniciales() {
      return {
        nombre: null,
        descripcion: null,
        importe: null,
        fecha: null,
      }
    },

    enviar() {

      let aux = {...this.formData};
      this.total+= aux.importe;

      aux.fecha = new Date().toLocaleString();
      aux.importe = "$" + aux.importe.toLocaleString();
      

      this.datos.push(aux)
      this.formData = this.datosIniciales()
      this.formState._reset();
    },


    calcularColor() {
      let color 
      let total = this.total
    

     if(total < 1000){
        color = 'green'
      }else if(total < 5000)
      {
        color = 'magenta'
      }
      else if(total > 5000){
        color = 'orange'
      }
        return {
          color}
      },

  },
  computed: {


     
  }
}


</script>

<style scoped lang="css">
#jumbotron3 {
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.3rem;
  color: rgb(68, 6, 6);
  background-color: rgba(250, 235, 215, 0.932);
  
}

hr {
  color: antiquewhite;
}

#jumbotron2 {
  color: antiquewhite;
  background-color: rgb(68, 6, 6);
}

td {
  color: antiquewhite;
  font-size: large;
  text-align: center;
  background-color: rgb(68, 6, 6);
  
  padding-bottom: 1.8rem;
}

th {
  text-align: center;
}

.total{
  font-size: larger;
background-color: rgba(255, 255, 255, 0.705);
}

</style>

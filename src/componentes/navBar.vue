<template >

  <section class="src-componentes-nav-bar">
    <div class="barra">
      <div class="fixed-left">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">

            <li class="nav-item">
              <router-link to="/">
                <a id="style" align="center" class="nav-link" href="#">Inicio</a>
              </router-link>
            </li>

            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/formulario">
                  <a id="style" class="nav-link" href="#">Formulario</a>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/respuestas">
                  <a id="style" class="nav-link" href="#">Respuestas</a>
                </router-link>
              </li>

            </ul>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </div>
  </section>

</template>

<script >

export default {
  name: 'src-componentes-nav-bar',
  props: [],
  mounted() {

  },
  data() {
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
.src-componentes-nav-bar {}

#style {
  text-decoration: rgba(128, 128, 128, 0);
  color: antiquewhite;
  font-size: xx-large;
}

#style:hover {
  color: crimson;
  transition: 1s;
}
</style>

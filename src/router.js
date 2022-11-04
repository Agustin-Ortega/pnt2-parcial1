import Vue from 'vue'
import VueRouter from 'vue-router'
import Formulario from './componentes/formulario.vue'
import Inicio from './componentes/inicio.vue'
import Respuestas from './componentes/Respuestas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({

mode: 'history',
routes:[
{path:'/formulario', component: Formulario},
{path:'/inicio', component: Inicio},
{path:'/respuestas', component: Respuestas},

]
})
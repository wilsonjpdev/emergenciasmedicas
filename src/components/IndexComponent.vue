<template>
  <div>
    
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{ $store.state.titulo }}</a>
      </div>
    </nav>

    <div class="container">

      <div class="row mt-5">
        <div class="col-6 p">
          <profissionais-component />
        </div>

        <div class="col-6">
          <equipamentos-component />
        </div>
      </div>

      <div class="row mt-5 mb-5 bg-light p-2">
        <div class="col">
          <configuracao-equipe />
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col">
          <equipes-component />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfiguracaoEquipe from './ConfiguracaoEquipe.vue'
import EquipamentosComponent from './EquipamentosComponent.vue'
import EquipesComponent from './EquipesComponent.vue'
import ProfissionaisComponent from './ProfissionaisComponent.vue'

export default {
  components: { 
    ConfiguracaoEquipe,
    EquipamentosComponent,
    EquipesComponent,
    ProfissionaisComponent
  },
  name: 'IndexComponent',
  props: {
    msg: String
  }
}
</script>

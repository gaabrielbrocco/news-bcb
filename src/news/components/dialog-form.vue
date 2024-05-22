<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-center align-center my-15 text-h3  font-weight: bold">
          Projetos corporativos ativos no Banco Central do Brasil
        </div>
      </v-col>
    </v-row>
    <v-row class="my-8 py-10">
      <v-col
        cols="4"
        lg="4"
        v-for="(item, index) in controller.news.value"
        :key="index"
      >
        <v-card
          class="mx-auto"
          color="grey-lighten-1"
          width="500"
          height="500"
          rounded="lg"
          elevation="10"
        >
          <v-img
            class="mt-5"
            height="80"
            src="https://www.bcb.gov.br/assets/svg/logo-bcb.svg"
          >
          </v-img>
          <v-tooltip location="bottom" :text="item.tituloProjeto">
            <template v-slot:activator="{ props }">
              <v-card-title v-bind="props" class="mt-5 text-center">
                {{ item.tituloProjeto }}
              </v-card-title>
            </template>
          </v-tooltip>
          <v-card-subtitle class="d-flex justify-center align-center"
            >Unidade responsável: {{ item.unidadeResponsavel }}
          </v-card-subtitle>
          <v-container>
            <v-card-title class="text-overline mt-5">
              Progresso

              <div class=" text-white text-h3 font-weight-bold">
                {{ item.percentualConclusao }}%
              </div>

              <div class="text-h6 text-medium-emphasis font-weight-regular">
                {{ controller.converteDuracaoMeses(item.duracaoAtual) }}
              </div>
            </v-card-title>
            <br />
            <v-card-text>
              <v-progress-linear
                :color="controller.corProgresso(item.percentualConclusao)"
                height="20"
                :model-value="item.percentualConclusao"
                rounded="lg"
              >
              </v-progress-linear>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="mt-5">
              <v-spacer></v-spacer>

              <v-btn
                :color="controller.show.value[index] ? 'black' : '#025C75'"
                :text="
                  controller.show.value[index]
                    ? 'Menos informações'
                    : 'Mais informações'
                "
                @click="controller.showInfo(index)"
              ></v-btn>
            </v-card-actions>
          </v-container>

          <v-bottom-sheet
            persistent
            rounded
            inset
            v-model="controller.show.value[index]"
          >
            <v-card color="white">
              <v-card-text>
                <v-divider
                  class="my-5"
                  color="black"
                  :thickness="4"
                ></v-divider>
                <h3 class="mb-10 text-center">
                  <span>{{ item.tituloProjeto }}</span>
                </h3>
                <p class="text-justify d-flex align-center justify-center">
                  {{ item.objetivoProjeto }}
                </p>
                <v-divider
                  class="my-5"
                  color="black"
                  :thickness="4"
                ></v-divider>
              </v-card-text>
              <v-card-actions class="d-flex align-center justify-center">
                <v-btn
                  size="x-large"
                  icon="mdi-close"
                  @click="controller.show.value[index] = false"
                >
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-bottom-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

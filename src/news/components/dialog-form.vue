<template>
  <v-container>
    <v-app-bar color="#424549" elevation="10">
      <v-app-bar-title class="d-flex justify-center align-center">
        <div class="text-h6">Projetos corporativos ativos</div>
      </v-app-bar-title>
    </v-app-bar>
    <section style="padding: 0px 0px 30px">
      <v-row class="my-8 py-1">
        <v-col
          cols="12"
          lg="3"
          md="6"
          sm="12"
          v-for="(item, index) in controller.news.value"
          :key="index"
        >
          <v-card
            class="mx-auto"
            color="grey-lighten-1"
            width="350"
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

                <div class="text-white text-h3 font-weight-bold">
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
                  <v-card-actions class="d-flex align-end justify-end">
                    <v-btn
                      size="large"
                      icon="mdi-close"
                      @click="controller.show.value[index] = false"
                    >
                    </v-btn>
                  </v-card-actions>
                  <v-divider
                    class="mb-5"
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
              </v-card>
            </v-bottom-sheet>
          </v-card>
        </v-col>
      </v-row>
    </section>
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

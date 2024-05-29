import News from "../domain/model/news";
import { onMounted, ref } from "vue";

const newsController = (buscaNewsUseCase) => () => {
  const modelNews = ref(new News({}));
  const news = ref([]);
  const descricao = ref("");
  const show = ref(news.value.map(() => false));
  const corBarra = ref("");

  const carregando = ref(false);

  onMounted(async () => {
    try {
      carregando.value = true;
      news.value = await buscaNewsUseCase();
      console.log(news.value);
    } catch (error) {
      console.log(error);
    } finally {
      carregando.value = false;
    }
  });

  const mostraNews = async () => {
    try {
      carregando.value = true;
    } catch (error) {
      console.log(error);
    } finally {
      carregando.value = false;
    }
  };

  const showInfo = (index) => {
    console.log(index);
    show.value[index] = !show.value[index];
  };

  const converteDuracaoMeses = (meses) => {
    const anos = Math.floor(meses / 12);
    const mesesRestantes = meses % 12;

    if (!mesesRestantes) {
      return `${anos} ano(s)`;
    }
    return `${anos} ano(s) e ${mesesRestantes} mês(es)`;
  };

  const corProgresso = (percentual) => {
    if (percentual <= 50) {
      return (corBarra.value = "red");
    } else if (percentual <= 70) {
      return (corBarra.value = "warning");
    } else {
      return (corBarra.value = "success");
    }

    //teste do jack
  };

  return {
    modelNews,
    carregando,
    mostraNews,
    news,
    show,
    showInfo,
    descricao,
    converteDuracaoMeses,
    corBarra,
    corProgresso,
  };
};

export default newsController;

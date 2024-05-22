import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://olinda.bcb.gov.br/olinda/servico/SGPro2_DadosAbertosProjetos/versao/v1/odata",
});

export default axiosInstance;

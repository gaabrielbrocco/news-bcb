import News from "../../domain/model/news";

const buscaNewsRepository = (axios) => async () => {
  try {
    const response = await axios.get(
      `/ObterDadosAbertosProjetos?%24format=json`);
    return response?.data?.value ?? [];
  } catch (error) {}
};

export default buscaNewsRepository;

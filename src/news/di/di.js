import axiosInstance from "./axios";

import buscaNewsRepository from "../data/repository/buscaNewsRepository";
import buscaNewsUseCase from "../domain/usecase/buscaNewsUseCase";
import newsController from "../controller/newsController";

const instance = axiosInstance;

const buscaNewsRepositoryImpl = buscaNewsRepository(instance);
const buscaNewsUseCaseImpl = buscaNewsUseCase(buscaNewsRepositoryImpl);

const newsControllerImpl = newsController(buscaNewsUseCaseImpl);

export { newsControllerImpl };

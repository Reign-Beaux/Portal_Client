import axios, { AxiosResponse } from "axios";

export interface RequestGet {
  id?: number;
  endpoint: string;
}

const useAxios = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getAll = async <T>({id, endpoint}: RequestGet): Promise<T[]> => {
    try {
      let url = `${apiUrl}/${endpoint}`;
      if (!!id) url += `/${id}`;

      const response: AxiosResponse<T[]> = await axios.get(url);
      return response.data;
    } catch (error: any) {
      //const message = error?.response?.data ?? error.message;
      // showSnackbar(message, AlertColors.ERROR);
      return [] as T[];
    }
  };

  const getById = async <T>({id, endpoint}: RequestGet): Promise<T> => {
    try {
      const url = `${apiUrl}/${endpoint}/${id}`;
      const response: AxiosResponse<T> = await axios.get(url);
      return response.data;
    } catch (error: any) {
      //const message = error?.response?.data ?? error.message;
      // showSnackbar(message, AlertColors.ERROR);
      return {} as T;
    }
  };

  return {
    getAll,
    getById,
  };
};

export default useAxios;

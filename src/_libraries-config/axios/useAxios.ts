import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export interface RequestGet {
  id?: number;
  endpoint: string;
}

export const useAxios = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [abortController, setAbortController] = useState<AbortController | undefined>(undefined);

  const getAll = async <T>({ id, endpoint }: RequestGet): Promise<T[]> => {
    const newController = new AbortController();
    setAbortController(newController);
    try {
      let url = `${apiUrl}/${endpoint}`;
      if (!!id) url += `/${id}`;

      const response: AxiosResponse<T[]> = await axios.get(url, {
        signal: newController.signal,
      });
      return response.data;
    } catch (error: any) {
      //const message = error?.response?.data ?? error.message;
      // showSnackbar(message, AlertColors.ERROR);
      return [] as T[];
    }
  };

  const getById = async <T>({ id, endpoint }: RequestGet): Promise<T> => {
    const newController = new AbortController();
    setAbortController(newController);
    try {
      const url = `${apiUrl}/${endpoint}/${id}`;
      const response: AxiosResponse<T> = await axios.get(url, {
        signal: newController.signal,
      });
      return response.data;
    } catch (error: any) {
      //const message = error?.response?.data ?? error.message;
      // showSnackbar(message, AlertColors.ERROR);
      return {} as T;
    }
  };

  useEffect(() => {
    return () => {
      if (abortController) {
        abortController.abort();
      }
    };
  }, [abortController]);

  return {
    getAll,
    getById,
  };
};

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { changeErrorMessageToString } from "@/utils/changeErrorToString";
import baseApiUrl from "@/constant/apiUrl";
import { fetchDataBase } from "@/interface/BaseFetchData";

interface ParameterBase {
  url: string;
  headers: any;
  method: string;
  datas: any;
}

/** 인자 : {url:"some url here", header: {headers}, method: "api method", data: {datas}} */
export const useFetch = ({ url, headers, method, datas }: ParameterBase) => {
  const [fetchData, setFetchData] = useState<fetchDataBase>({
    payload: null,
    loading: true,
    error: "",
  });

  const callUrl = useCallback(() => {
    try {
      axios({
        method,
        url,
        baseURL: baseApiUrl,
        headers: {
          ...headers,
        },
        data: {
          ...datas,
        },
      }).then((res) => {
        setFetchData((prev) => ({ ...prev, payload: res.data }));
      });
    } catch (err) {
      setFetchData((prev) => ({
        ...prev,
        error: changeErrorMessageToString(err),
      }));
    } finally {
      setFetchData((prev) => ({ ...prev, loading: false }));
    }
  }, [url, method, headers, datas]);

  return [fetchData, callUrl] as const;
};

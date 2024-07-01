import { useEffect, useState } from "react";

interface FetchListProps {
  fetchDataFunction: () => Promise<any>;
}

interface UseFetchListResult<T> {
  entities: T[];
  isLoading: boolean;
}

export const useFetchList = <T>({
  fetchDataFunction,
}: FetchListProps): UseFetchListResult<T> => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [entities, setEntities] = useState<T[]>([]);

  useEffect(() => {
    fetchDataFunction()
      .then((res) => {
        setEntities(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return { entities, isLoading };
};

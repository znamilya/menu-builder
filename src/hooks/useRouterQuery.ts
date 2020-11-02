import { useRouter } from "next/router";

const useRouterQuery = (
  queryName: string,
  type: NumberConstructor | StringConstructor = String,
) => {
  const router = useRouter();
  const queryValue = router?.query[queryName];

  return queryValue ? type(queryValue) : queryValue;
};

export default useRouterQuery;

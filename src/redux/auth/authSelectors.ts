import { useAppSelector } from "../../hooks/hooksRedux";

const useAuthSelectors = () => {
  const user = useAppSelector((state) => state.auth.user);
  const isLoading = useAppSelector((state) => state.auth.isLoading);
  const authenticated = useAppSelector((state) => state.auth.authenticated);
  const error = useAppSelector((state) => state.auth.error);

  return { user, isLoading, authenticated, error };
};

export default useAuthSelectors;

import { useAppSelector } from "../../hooks/hooksRedux";

export const useStatisticsSelectors = () => {
  const statistics = useAppSelector((state) => state.statistics.statistics);

  return { statistics };
};

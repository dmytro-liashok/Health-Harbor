import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooksRedux";
import { getAllStatistics } from "../../redux/statistics/statisticsOperation";
import { useStatisticsSelectors } from "../../redux/statistics/statisticsSelectors";
import Icon from "../Icon/Icon";
import scss from "./StatisticsInfo.module.scss";

const StatisticsInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const { statistics } = useStatisticsSelectors();
  const {
    exercisesVideos,
    usersCount,
    exercisesDone,
    allBurnedColories,
    generalTimeSpend,
  } = statistics;

  useEffect(() => {
    dispatch(getAllStatistics());
  }, [dispatch]);

  return (
    <section className={scss.statisticsInfo}>
      <ul className={scss.statisticsList}>
        <li className={scss.statisticsItem}>
          <div className={scss.iconWrap}>
            <Icon className={scss.statisticsIcon} idIcon="Polygon" />
          </div>
          <div className={scss.statisticsValueWrap}>
            <div className={scss.statisticsValue}>{exercisesVideos}</div>
            <div className={scss.statisticsTitle}>Video tutorial</div>
          </div>
        </li>
        <li className={scss.statisticsItem}>
          <div className={scss.iconWrap}>
            <Icon className={scss.statisticsIcon} idIcon="Gridicons_user" />
          </div>
          <div className={scss.statisticsValueWrap}>
            <div className={scss.statisticsValue}>{usersCount}</div>
            <div className={scss.statisticsTitle}>Regist. users</div>
          </div>
        </li>
        <li className={scss.statisticsItem}>
          <div className={scss.iconWrap}>
            <Icon className={scss.statisticsIcon} idIcon="icon-dumbbell" />
          </div>
          <div className={scss.statisticsValueWrap}>
            <div className={scss.statisticsValue}>{exercisesDone}</div>
            <div className={scss.statisticsTitle}>Compl. exer.</div>
          </div>
        </li>
        <li className={scss.statisticsItem}>
          <div className={scss.iconWrap}>
            <Icon className={scss.statisticsIcon} idIcon="icon-running-stick" />
          </div>
          <div className={scss.statisticsValueWrap}>
            <div className={scss.statisticsValue}>{allBurnedColories}</div>
            <div className={scss.statisticsTitle}>Cal burned</div>
          </div>
        </li>
        <li className={scss.statisticsItem}>
          <div className={scss.iconWrap}>
            <Icon className={scss.statisticsIcon} idIcon="icon-calendar" />
          </div>
          <div className={scss.statisticsValueWrap}>
            <div className={scss.statisticsValue}>{generalTimeSpend}</div>
            <div className={scss.statisticsTitle}>Exercise h.</div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default StatisticsInfo;

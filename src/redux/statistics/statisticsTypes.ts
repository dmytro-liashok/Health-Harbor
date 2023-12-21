export interface StatisticsState {
  isLoading: boolean;
  error: any;
  statistics: ActionGetStatistics;
}

export interface ActionGetStatistics {
  exercisesVideos: number;
  usersCount: number;
  exercisesDone: number;
  allBurnedColories: number;
  generalTimeSpend: number;
}

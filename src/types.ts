export interface TimelineEvent {
  year: string;
  description: string;
}

export interface TimelinePeriod {
  name: string;
  startYear: number;
  endYear: number;
  events: TimelineEvent[];
}

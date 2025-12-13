// субьективно - читая тз, я понимаю что Event это какое то событие на таймлайне
// но в контектсе разработки Event чаще всего используется как тип события пользовательского ввода
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

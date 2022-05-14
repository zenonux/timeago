declare type FormatTypeBreak = {
    label: string;
    parse: (diffSeconds: number, date: Date, locale: string) => string;
};

declare const register: (type: string, breaks: FormatTypeBreak[]) => void;

declare const format: (time: string | number | Date, type?: string, locale?: string) => string;

export { format, register };

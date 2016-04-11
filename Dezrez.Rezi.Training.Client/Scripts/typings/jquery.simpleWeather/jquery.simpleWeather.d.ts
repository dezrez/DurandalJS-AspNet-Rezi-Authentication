

interface JQueryStatic {
    simpleWeather(param?: SimpleWeather.Options): JQuery;
}

declare module SimpleWeather {
    export interface Options {
        location: any;
        woeid?: String;
        unit?: String;
        success: (weather: any) => void;
        error: (error: any) => void;
    }
}
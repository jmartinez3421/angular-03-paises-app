export interface Country {
    flags:        Flags;
    name:         Name;
    cca2:         string;
    capital:      string[];
    region:       string;
    translations: { [key: string]: Translation };
    maps:         Maps;
    population:   number;
}

export interface Flags {
    png: string;
    svg: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    aym: Translation;
    que: Translation;
    spa: Translation;
}

export interface Translation {
    official: string;
    common:   string;
}

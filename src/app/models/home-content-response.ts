export interface Sayac {
    deger: string;
}

export interface Karistirma {
    id: string;
    yanlis: string;
    dogru: string;
}

export interface Atasoz {
    madde: string;
    anlam: string;
}

export interface Syyd {
    id: string;
    yanliskelime: string;
    dogrukelime: string;
}

export interface Kural {
    adi: string;
    url: string;
}

export interface Yabanci {
    karsid: string;
    kkelime: string;
    kkoken: string;
    kkarsilik: string;
    anlam: string;
}

export interface HomeContent {
    sayac: Sayac[];
    karistirma: Karistirma[];
    atasoz: Atasoz[];
    syyd: Syyd[];
    kural: Kural[];
    yabanci: Yabanci;
    kelime: { madde: string; anlam: string; }[];
}
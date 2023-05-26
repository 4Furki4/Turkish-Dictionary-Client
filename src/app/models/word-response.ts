export interface Yazar {
    yazar_id: string;
    tam_adi: string;
    kisa_adi: string;
    ekno: string;
}

export interface Ornek {
    ornek_id: string;
    anlam_id: string;
    ornek_sira: string;
    ornek: string;
    kac: string;
    yazar_id: string;
    yazar: Yazar[];
}

export interface Ozellik {
    ozellik_id: string;
    tur: string;
    tam_adi: string;
    kisa_adi: string;
    ekno: string;
}

export interface Anlam {
    anlam_id: string;
    madde_id: string;
    anlam_sira: string;
    fiil: string;
    tipkes: string;
    anlam: string;
    gos: string;
    orneklerListe: Ornek[];
    ozelliklerListe: Ozellik[];
}

export interface Atasozu {
    madde_id: string;
    madde: string;
    on_taki: any;
}

export interface WordResponse {
    madde_id: string;
    kac: string;
    kelime_no: string;
    cesit: string;
    anlam_gor: string;
    on_taki: any;
    madde: string;
    cesit_say: string;
    anlam_say: string;
    taki: any;
    cogul_mu: string;
    ozel_mi: string;
    lisan_kodu: string;
    lisan: string;
    telaffuz: any;
    birlesikler: string;
    font: any;
    madde_duz: string;
    gosterim_tarihi: any;
    anlamlarListe: Anlam[];
    atasozu: Atasozu[];
}
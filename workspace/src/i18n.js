import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
    initReactI18next
} from 'react-i18next';
import tableEN from './translate/table/en/table.json';
import tableDE from './translate/table/de/table.json';
import tableKO from './translate/table/ko/table.json';
import tablePT_PT from './translate/table/pt-pt/table.json';
import tablePT_BR from './translate/table/pt-br/table.json';
import tableRU from './translate/table/ru/table.json';
import tableES from './translate/table/es/table.json';
import tableHI from './translate/table/hi/table.json';
import tableZH_CN from './translate/table/zh-cn/table.json';
import tableZH_TW from './translate/table/zh-tw/table.json';
import tableBE from './translate/table/be/table.json';
import tableCS from './translate/table/cs/table.json';
import tableFIL from './translate/table/fil/table.json';
import tableFR from './translate/table/fr/table.json';
import tableIT from './translate/table/it/table.json';
import tableJA from './translate/table/ja/table.json';
import tableKK from './translate/table/kk/table.json';
import tablePL from './translate/table/pl/table.json';
import tableTH from './translate/table/th/table.json';
import tableTR from './translate/table/tr/table.json';
import tableUK from './translate/table/uk/table.json';
import stringEN from './translate/language/en/string_en.json';
import stringDE from './translate/language/de/string_de.json';
import stringKO from './translate/language/ko/string_ko.json';
import stringPT_PT from './translate/language/pt-pt/string_pt-pt.json';
import stringPT_BR from './translate/language/pt-br/string_pt-br.json';
import stringRU from './translate/language/ru/string_ru.json';
import stringES from './translate/language/es/string_es.json';
import stringHI from './translate/language/hi/string_hi.json';
import stringZH_CN from './translate/language/zh-cn/string_zh-cn.json';
import stringZH_TW from './translate/language/zh-tw/string_zh-tw.json';
import stringBE from './translate/language/be/string_be.json';
import stringCS from './translate/language/cs/string_cs.json';
import stringFIL from './translate/language/fil/string_fil.json';
import stringFR from './translate/language/fr/string_fr.json';
import stringIT from './translate/language/it/string_it.json';
import stringJA from './translate/language/ja/string_ja.json';
import stringKK from './translate/language/kk/string_kk.json';
import stringPL from './translate/language/pl/string_pl.json';
import stringTH from './translate/language/th/string_th.json';
import stringTR from './translate/language/tr/string_tr.json';
import stringUK from './translate/language/uk/string_uk.json';
import arrayEN from './translate/language/en/array_en.json';
import arrayDE from './translate/language/de/array_de.json';
import arrayKO from './translate/language/ko/array_ko.json';
import arrayPT_PT from './translate/language/pt-pt/array_pt-pt.json';
import arrayPT_BR from './translate/language/pt-br/array_pt-br.json';
import arrayRU from './translate/language/ru/array_ru.json';
import arrayES from './translate/language/es/array_es.json';
import arrayHI from './translate/language/hi/array_hi.json';
import arrayZH_CN from './translate/language/zh-cn/array_zh-cn.json';
import arrayZH_TW from './translate/language/zh-tw/array_zh-tw.json';
import arrayBE from './translate/language/be/array_be.json';
import arrayCS from './translate/language/cs/array_cs.json';
import arrayFIL from './translate/language/fil/array_fil.json';
import arrayFR from './translate/language/fr/array_fr.json';
import arrayIT from './translate/language/it/array_it.json';
import arrayJA from './translate/language/ja/array_ja.json';
import arrayKK from './translate/language/kk/array_kk.json';
import arrayPL from './translate/language/pl/array_pl.json';
import arrayTH from './translate/language/th/array_th.json';
import arrayTR from './translate/language/tr/array_tr.json';
import arrayUK from './translate/language/uk/array_uk.json';
import englishLatinNames from './translate/language/name_english_latin.json';

//Read elements
import element1 from './translate/elements/element1.json';
import element2 from './translate/elements/element2.json';
import element3 from './translate/elements/element3.json';
import element4 from './translate/elements/element4.json';
import element5 from './translate/elements/element5.json';
import element6 from './translate/elements/element6.json';
import element7 from './translate/elements/element7.json';
import element8 from './translate/elements/element8.json';
import element9 from './translate/elements/element9.json';
import element10 from './translate/elements/element10.json';
import element11 from './translate/elements/element11.json';
import element12 from './translate/elements/element12.json';
import element13 from './translate/elements/element13.json';
import element14 from './translate/elements/element14.json';
import element15 from './translate/elements/element15.json';
import element16 from './translate/elements/element16.json';
import element17 from './translate/elements/element17.json';
import element18 from './translate/elements/element18.json';
import element19 from './translate/elements/element19.json';
import element20 from './translate/elements/element20.json';
import element21 from './translate/elements/element21.json';
import element22 from './translate/elements/element22.json';
import element23 from './translate/elements/element23.json';
import element24 from './translate/elements/element24.json';
import element25 from './translate/elements/element25.json';
import element26 from './translate/elements/element26.json';
import element27 from './translate/elements/element27.json';
import element28 from './translate/elements/element28.json';
import element29 from './translate/elements/element29.json';
import element30 from './translate/elements/element30.json';
import element31 from './translate/elements/element31.json';
import element32 from './translate/elements/element32.json';
import element33 from './translate/elements/element33.json';
import element34 from './translate/elements/element34.json';
import element35 from './translate/elements/element35.json';
import element36 from './translate/elements/element36.json';
import element37 from './translate/elements/element37.json';
import element38 from './translate/elements/element38.json';
import element39 from './translate/elements/element39.json';
import element40 from './translate/elements/element40.json';
import element41 from './translate/elements/element41.json';
import element42 from './translate/elements/element42.json';
import element43 from './translate/elements/element43.json';
import element44 from './translate/elements/element44.json';
import element45 from './translate/elements/element45.json';
import element46 from './translate/elements/element46.json';
import element47 from './translate/elements/element47.json';
import element48 from './translate/elements/element48.json';
import element49 from './translate/elements/element49.json';
import element50 from './translate/elements/element50.json';
import element51 from './translate/elements/element51.json';
import element52 from './translate/elements/element52.json';
import element53 from './translate/elements/element53.json';
import element54 from './translate/elements/element54.json';
import element55 from './translate/elements/element55.json';
import element56 from './translate/elements/element56.json';
import element57 from './translate/elements/element57.json';
import element58 from './translate/elements/element58.json';
import element59 from './translate/elements/element59.json';
import element60 from './translate/elements/element60.json';
import element61 from './translate/elements/element61.json';
import element62 from './translate/elements/element62.json';
import element63 from './translate/elements/element63.json';
import element64 from './translate/elements/element64.json';
import element65 from './translate/elements/element65.json';
import element66 from './translate/elements/element66.json';
import element67 from './translate/elements/element67.json';
import element68 from './translate/elements/element68.json';
import element69 from './translate/elements/element69.json';
import element70 from './translate/elements/element70.json';
import element71 from './translate/elements/element71.json';
import element72 from './translate/elements/element72.json';
import element73 from './translate/elements/element73.json';
import element74 from './translate/elements/element74.json';
import element75 from './translate/elements/element75.json';
import element76 from './translate/elements/element76.json';
import element77 from './translate/elements/element77.json';
import element78 from './translate/elements/element78.json';
import element79 from './translate/elements/element79.json';
import element80 from './translate/elements/element80.json';
import element81 from './translate/elements/element81.json';
import element82 from './translate/elements/element82.json';
import element83 from './translate/elements/element83.json';
import element84 from './translate/elements/element84.json';
import element85 from './translate/elements/element85.json';
import element86 from './translate/elements/element86.json';
import element87 from './translate/elements/element87.json';
import element88 from './translate/elements/element88.json';
import element89 from './translate/elements/element89.json';
import element90 from './translate/elements/element90.json';
import element91 from './translate/elements/element91.json';
import element92 from './translate/elements/element92.json';
import element93 from './translate/elements/element93.json';
import element94 from './translate/elements/element94.json';
import element95 from './translate/elements/element95.json';
import element96 from './translate/elements/element96.json';
import element97 from './translate/elements/element97.json';
import element98 from './translate/elements/element98.json';
import element99 from './translate/elements/element99.json';
import element100 from './translate/elements/element100.json';
import element101 from './translate/elements/element101.json';
import element102 from './translate/elements/element102.json';
import element103 from './translate/elements/element103.json';
import element104 from './translate/elements/element104.json';
import element105 from './translate/elements/element105.json';
import element106 from './translate/elements/element106.json';
import element107 from './translate/elements/element107.json';
import element108 from './translate/elements/element108.json';
import element109 from './translate/elements/element109.json';
import element110 from './translate/elements/element110.json';
import element111 from './translate/elements/element111.json';
import element112 from './translate/elements/element112.json';
import element113 from './translate/elements/element113.json';
import element114 from './translate/elements/element114.json';
import element115 from './translate/elements/element115.json';
import element116 from './translate/elements/element116.json';
import element117 from './translate/elements/element117.json';
import element118 from './translate/elements/element118.json';
import element119 from './translate/elements/element119.json';
import element120 from './translate/elements/element120.json';
import element121 from './translate/elements/element121.json';
import element122 from './translate/elements/element122.json';
import element123 from './translate/elements/element123.json';
import element124 from './translate/elements/element124.json';
import element125 from './translate/elements/element125.json';
import element126 from './translate/elements/element126.json';
import element127 from './translate/elements/element127.json';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: {
                    periodic_table_1: 'Periodic',
                    periodic_table_2: 'Table',
                    table: tableEN,
                    string: stringEN,
                    array: arrayEN,
                    englishLatinNames: englishLatinNames,
                    element1: element1,
                    element2: element2,
                    element3: element3,
                    element4: element4,
                    element5: element5,
                    element6: element6,
                    element7: element7,
                    element8: element8,
                    element9: element9,
                    element10: element10,
                    element11: element11,
                    element12: element12,
                    element13: element13,
                    element14: element14,
                    element15: element15,
                    element16: element16,
                    element17: element17,
                    element18: element18,
                    element19: element19,
                    element20: element20,
                    element21: element21,
                    element22: element22,
                    element23: element23,
                    element24: element24,
                    element25: element25,
                    element26: element26,
                    element27: element27,
                    element28: element28,
                    element29: element29,
                    element30: element30,
                    element31: element31,
                    element32: element32,
                    element33: element33,
                    element34: element34,
                    element35: element35,
                    element36: element36,
                    element37: element37,
                    element38: element38,
                    element39: element39,
                    element40: element40,
                    element41: element41,
                    element42: element42,
                    element43: element43,
                    element44: element44,
                    element45: element45,
                    element46: element46,
                    element47: element47,
                    element48: element48,
                    element49: element49,
                    element50: element50,
                    element51: element51,
                    element52: element52,
                    element53: element53,
                    element54: element54,
                    element55: element55,
                    element56: element56,
                    element57: element57,
                    element58: element58,
                    element59: element59,
                    element60: element60,
                    element61: element61,
                    element62: element62,
                    element63: element63,
                    element64: element64,
                    element65: element65,
                    element66: element66,
                    element67: element67,
                    element68: element68,
                    element69: element69,
                    element70: element70,
                    element71: element71,
                    element72: element72,
                    element73: element73,
                    element74: element74,
                    element75: element75,
                    element76: element76,
                    element77: element77,
                    element78: element78,
                    element79: element79,
                    element80: element80,
                    element81: element81,
                    element82: element82,
                    element83: element83,
                    element84: element84,
                    element85: element85,
                    element86: element86,
                    element87: element87,
                    element88: element88,
                    element89: element89,
                    element90: element90,
                    element91: element91,
                    element92: element92,
                    element93: element93,
                    element94: element94,
                    element95: element95,
                    element96: element96,
                    element97: element97,
                    element98: element98,
                    element99: element99,
                    element100: element100,
                    element101: element101,
                    element102: element102,
                    element103: element103,
                    element104: element104,
                    element105: element105,
                    element106: element106,
                    element107: element107,
                    element108: element108,
                    element109: element109,
                    element110: element110,
                    element111: element111,
                    element112: element112,
                    element113: element113,
                    element114: element114,
                    element115: element115,
                    element116: element116,
                    element117: element117,
                    element118: element118,
                    element119: element119,
                    element120: element120,
                    element121: element121,
                    element122: element122,
                    element123: element123,
                    element124: element124,
                    element125: element125,
                    element126: element126,
                    element127: element127
                }
            },
            de: {
                translation: {
                    periodic_table_1: 'Periodensystem',
                    periodic_table_2: '⠀',
                    table: tableDE,
                    string: stringDE,
                    array: arrayDE
                }
            },
            ko: {
                translation: {
                    periodic_table_1: '주기율표',
                    periodic_table_2: '⠀',
                    table: tableKO,
                    string: stringKO,
                    array: arrayKO
                }
            },
            pt_PT: {
                translation: {
                    periodic_table_1: 'Tabela',
                    periodic_table_2: 'Periódica',
                    table: tablePT_PT,
                    string: stringPT_PT,
                    array: arrayPT_PT
                }
            },
            pt_BR: {
                translation: {
                    periodic_table_1: 'Tabela',
                    periodic_table_2: 'Periódica',
                    table: tablePT_BR,
                    string: stringPT_BR,
                    array: arrayPT_BR
                }
            },
            ru: {
                translation: {
                    periodic_table_1: 'Таблица',
                    periodic_table_2: 'Менделеева',
                    table: tableRU,
                    string: stringRU,
                    array: arrayRU
                }
            },
            es: {
                translation: {
                    periodic_table_1: 'Tabla',
                    periodic_table_2: 'Periódica',
                    table: tableES,
                    string: stringES,
                    array: arrayES
                }
            },
            hi: {
                translation: {
                    periodic_table_1: 'आवर्त सारणी',
                    periodic_table_2: '⠀',
                    table: tableHI,
                    string: stringHI,
                    array: arrayHI
                }
            },
            zh_CN: {
                translation: {
                    periodic_table_1: '元素周期表',
                    periodic_table_2: '⠀',
                    table: tableZH_CN,
                    string: stringZH_CN,
                    array: arrayZH_CN
                }
            },
            zh_TW: {
                translation: {
                    periodic_table_1: '元素週期表',
                    periodic_table_2: '⠀',
                    table: tableZH_TW,
                    string: stringZH_TW,
                    array: arrayZH_TW
                }
            },
            be: {
                translation: {
                    periodic_table_1: 'Табліца',
                    periodic_table_2: 'Мендзялеева',
                    table: tableBE,
                    string: stringBE,
                    array: arrayBE
                }
            },
            cs: {
                translation: {
                    periodic_table_1: 'Periodická',
                    periodic_table_2: 'Tabulka',
                    table: tableCS,
                    string: stringCS,
                    array: arrayCS
                }
            },
            fil: {
                translation: {
                    periodic_table_1: 'Periodic',
                    periodic_table_2: 'Table',
                    table: tableFIL,
                    string: stringFIL,
                    array: arrayFIL
                }
            },
            fr: {
                translation: {
                    periodic_table_1: 'Tableau',
                    periodic_table_2: 'Périodique',
                    table: tableFR,
                    string: stringFR,
                    array: arrayFR
                }
            },
            it: {
                translation: {
                    periodic_table_1: 'Tavola',
                    periodic_table_2: 'Periodica',
                    table: tableIT,
                    string: stringIT,
                    array: arrayIT
                }
            },
            ja: {
                translation: {
                    periodic_table_1: '周期表',
                    periodic_table_2: ' ',
                    table: tableJA,
                    string: stringJA,
                    array: arrayJA
                }
            },
            kk: {
                translation: {
                    periodic_table_1: 'Менделеев',
                    periodic_table_2: 'Кестесі',
                    table: tableKK,
                    string: stringKK,
                    array: arrayKK
                }
            },
            pl: {
                translation: {
                    periodic_table_1: 'Układ',
                    periodic_table_2: 'Okresowy',
                    table: tablePL,
                    string: stringPL,
                    array: arrayPL
                }
            },
            th: {
                translation: {
                    periodic_table_1: 'Periodic',
                    periodic_table_2: 'Table',
                    table: tableTH,
                    string: stringTH,
                    array: arrayTH
                }
            },
            tr: {
                translation: {
                    periodic_table_1: 'Periyodik',
                    periodic_table_2: 'Tablo',
                    table: tableTR,
                    string: stringTR,
                    array: arrayTR
                }
            },
            uk: {
                translation: {
                    periodic_table_1: 'Таблиця',
                    periodic_table_2: 'Менделєєва',
                    table: tableUK,
                    string: stringUK,
                    array: arrayUK
                }
            }
        },

        fallbackLng: 'en'
    });

export default i18next;
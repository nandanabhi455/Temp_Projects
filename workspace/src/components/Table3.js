import {
    Link
} from 'react-router-dom';
import {
    useTranslation
} from 'react-i18next';
import GoToHomePage from './GoToHomePage';

const Table3 = () => {
    const {
        t
    } = useTranslation();

    return ( <
        >
        <
        GoToHomePage / >
        <
        section className = 'table-3' >
        <
        div className = 'table-3__header' >
        <
        h2 className = 'table-3__title' > {
            t('string.translate.svva_alkanov_ab')
        } < /h2> <
        Link className = 'table-3__close-button'
        to = '/tables' >
        Закрыть <
        /Link> <
        /div> <
        ul className = 'table-3__list' >
        <
        li className = 'table-3__item table-3__item--methane' >
        <
        p className = 'table-3__item-name-and-density table-3__item-name-and-density--methane' >
        <
        span className = 'table-3__item-name' > {
            t('array.svva_alkanov.item0')
        } < /span> <
        span className = 'table-3__item-density' > {
            t('string.translate.svva_alkanov_plotnost')
        }
        0.415 {
            ' '
        } {
            t('string.translate.read_gramm_santim')
        } <
        /span> <
        /p> <
        p className = 'table-3__item-melting-and-boiling' >
        <
        span className = 'table-3__item-melting' > {
            t('string.translate.svva_alkanov_plav')
        } - 182.5° C <
        /span> <
        span className = 'table-3__item-boiling' > {
            t('string.translate.svva_alkanov_kip')
        } - 161.5° C <
        /span> <
        /p> <
        /li> <
        li className = 'table-3__item table-3__item--ethane' >
        <
        p className = 'table-3__item-name-and-density table-3__item-name-and-density--ethane' >
        <
        span className = 'table-3__item-name' > {
            t('array.svva_alkanov.item1')
        } < /span> <
        span className = 'table-3__item-density' > {
            t('string.translate.svva_alkanov_plotnost')
        }
        0.561 {
            ' '
        } {
            t('string.translate.read_gramm_santim')
        } <
        /span> <
        /p> <
        p className = 'table-3__item-melting-and-boiling' >
        <
        span className = 'table-3__item-melting' > {
            t('string.translate.svva_alkanov_plav')
        } - 182.8° C <
        /span> <
        span className = 'table-3__item-boiling' > {
            t('string.translate.svva_alkanov_kip')
        } - 88.6° C <
        /span> <
        /p> <
        /li> <
        li className = 'table-3__item table-3__item--propane' >
        <
        p className = 'table-3__item-name-and-density table-3__item-name-and-density--propane' >
        <
        span className = 'table-3__item-name' > {
            t('array.svva_alkanov.item2')
        } < /span> <
        span className = 'table-3__item-density' > {
            t('string.translate.svva_alkanov_plotnost')
        }
        0.583 {
            ' '
        } {
            t('string.translate.read_gramm_santim')
        } <
        /span> <
        /p> <
        p className = 'table-3__item-melting-and-boiling' >
        <
        span className = 'table-3__item-melting' > {
            t('string.translate.svva_alkanov_plav')
        } - 187.6° C <
        /span> <
        span className = 'table-3__item-boiling' > {
            t('string.translate.svva_alkanov_kip')
        } - 42.1° C <
        /span> <
        /p> <
        /li> <
        li className = 'table-3__item table-3__item--butane' >
        <
        p className = 'table-3__item-name-and-density table-3__item-name-and-density--butane' >
        <
        span className = 'table-3__item-name' > {
            t('array.svva_alkanov.item3')
        } < /span> <
        span className = 'table-3__item-density' > {
            t('string.translate.svva_alkanov_plotnost')
        }
        0.500 {
            ' '
        } {
            t('string.translate.read_gramm_santim')
        } <
        /span> <
        /p> <
        p className = 'table-3__item-melting-and-boiling' >
        <
        span className = 'table-3__item-melting' > {
            t('string.translate.svva_alkanov_plav')
        } - 138.3° C <
        /span> <
        span className = 'table-3__item-boiling' > {
            t('string.translate.svva_alkanov_kip')
        } - 0.5° C <
        /span> <
        /p> <
        /li> <
        li className = 'table-3__item table-3__item--isobutane' >
        <
        p className = 'table-3__item-name-and-density table-3__item-name-and-density--isobutane' >
        <
        span className = 'table-3__item-name' > {
            t('array.svva_alkanov.item4')
        } < /span> <
        span className = 'table-3__item-density' > {
            t('string.translate.svva_alkanov_plotnost')
        }
        0.563 {
            ' '
        } {
            t('string.translate.read_gramm_santim')
        } <
        /span> <
        /p> <
        p className = 'table-3__item-melting-and-boiling' >
        <
        span className = 'table-3__item-melting' > {
            t('string.translate.svva_alkanov_plav')
        } - 159.4° C <
        /span> <
        span className = 'table-3__item-boiling' > {
            t('string.translate.svva_alkanov_kip')
        } - 11.7° C <
        /span> <
        /p> <
        /li> <
        li className = 'table-3__item table-3__item--pentane' >
        <
        p className = 'table-3__item-name-and-density table-3__item-name-and-density--pentane' >
        <
        span className = 'table-3__item-name' > {
            t('array.svva_alkanov.item5')
        } < /span> <
        span className = 'table-3__item-density' > {
            t('string.translate.svva_alkanov_plotnost')
        }
        0.626 {
            ' '
        } {
            t('string.translate.read_gramm_santim')
        } <
        /span> <
        /p> <
        p className = 'table-3__item-melting-and-boiling' >
        <
        span className = 'table-3__item-melting' > {
            t('string.translate.svva_alkanov_plav')
        } - 129.7° C <
        /span> <
        span className = 'table-3__item-boiling' > {
            t('string.translate.svva_alkanov_kip')
        }
        36.07° C <
        /span> <
        /p> <
        /li> <
        li className = 'table-3__item table-3__item--isopentane' >
        <
        p className = 'table-3__item-name-and-density table-3__item-name-and-density--isopentane' >
        <
        span className = 'table-3__item-name' > {
            t('array.svva_alkanov.item6')
        } < /span> <
        span className = 'table-3__item-density' > {
            t('string.translate.svva_alkanov_plotnost')
        }
        0.620 {
            ' '
        } {
            t('string.translate.read_gramm_santim')
        } <
        /span> <
        /p> <
        p className = 'table-3__item-melting-and-boiling' >
        <
        span className = 'table-3__item-melting' > {
            t('string.translate.svva_alkanov_plav')
        } - 159.9° C <
        /span> <
        span className = 'table-3__item-boiling' > {
            t('string.translate.svva_alkanov_kip')
        }
        27.9° C <
        /span> <
        /p> <
        /li> <
        li className = 'table-3__item table-3__item--neopentane' >
        <
        p className = 'table-3__item-name-and-density table-3__item-name-and-density--neopentane' >
        <
        span className = 'table-3__item-name' > {
            t('array.svva_alkanov.item7')
        } < /span> <
        span className = 'table-3__item-density' > {
            t('string.translate.svva_alkanov_plotnost')
        }
        0.613 {
            ' '
        } {
            t('string.translate.read_gramm_santim')
        } <
        /span> <
        /p> <
        p className = 'table-3__item-melting-and-boiling' >
        <
        span className = 'table-3__item-melting' > {
            t('string.translate.svva_alkanov_plav')
        } - 16.6° C <
        /span> <
        span className = 'table-3__item-boiling' > {
            t('string.translate.svva_alkanov_kip')
        }
        9.5° C <
        /span> <
        /p> <
        /li> <
        /ul> <
        /section> <
        />
    );
};

export default Table3;
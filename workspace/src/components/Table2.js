import {
    Link
} from 'react-router-dom';
import {
    useTranslation
} from 'react-i18next';
import GoToHomePage from './GoToHomePage';

const Table2 = () => {
    const {
        t
    } = useTranslation();

    return ( <
        >
        <
        GoToHomePage / >
        <
        section className = 'table-2' >
        <
        div className = 'table-2__header' >
        <
        h2 className = 'table-2__title' > {
            t('string.translate.table_poly_uglerod_name')
        } < /h2> <
        Link className = 'table-2__close-button'
        to = '/tables' >
        Закрыть <
        /Link> <
        /div> <
        ul className = 'table-2__list' >
        <
        li className = 'table-2__item table-2__item--naphthalene' >
        <
        img className = 'table-2__item-image'
        src = {
            require(`../assets/images/polyaromatic-carbons/poly_1.png`).default
        }
        alt = '' /
        >
        <
        p className = 'table-2__item-info' >
        <
        span className = 'table-2__item-name' > {
            t('array.poly_uglerod_name.item0')
        } < /span> <
        span className = 'table-2__item-value' > 0.0031 g / 100 mL < /span> <
        /p> <
        /li> <
        li className = 'table-2__item table-2__item--acenaphthene' >
        <
        img className = 'table-2__item-image'
        src = {
            require(`../assets/images/polyaromatic-carbons/poly_2.png`).default
        }
        alt = '' /
        >
        <
        p className = 'table-2__item-info' >
        <
        span className = 'table-2__item-name' > {
            t('array.poly_uglerod_name.item1')
        } < /span> <
        span className = 'table-2__item-value' > 0.000347 g / 100 mL < /span> <
        /p> <
        /li> <
        li className = 'table-2__item table-2__item--fluorene' >
        <
        img className = 'table-2__item-image'
        src = {
            require(`../assets/images/polyaromatic-carbons/poly_3.png`).default
        }
        alt = '' /
        >
        <
        p className = 'table-2__item-info' >
        <
        span className = 'table-2__item-name' > {
            t('array.poly_uglerod_name.item2')
        } < /span> <
        span className = 'table-2__item-value' > 0.000019 g / 100 mL < /span> <
        /p> <
        /li> <
        li className = 'table-2__item table-2__item--phenanthrene' >
        <
        img className = 'table-2__item-image'
        src = {
            require(`../assets/images/polyaromatic-carbons/poly_4.png`).default
        }
        alt = '' /
        >
        <
        p className = 'table-2__item-info' >
        <
        span className = 'table-2__item-name' > {
            t('array.poly_uglerod_name.item3')
        } < /span> <
        span className = 'table-2__item-value' > 0.000347 g / 100 mL < /span> <
        /p> <
        /li> <
        li className = 'table-2__item table-2__item--anthracene' >
        <
        img className = 'table-2__item-image'
        src = {
            require(`../assets/images/polyaromatic-carbons/poly_5.png`).default
        }
        alt = '' /
        >
        <
        p className = 'table-2__item-info' >
        <
        span className = 'table-2__item-name' > {
            t('array.poly_uglerod_name.item4')
        } < /span> <
        span className = 'table-2__item-value' > 0.00000434 g / 100 mL < /span> <
        /p> <
        /li> <
        li className = 'table-2__item table-2__item--fluoranthene' >
        <
        img className = 'table-2__item-image'
        src = {
            require(`../assets/images/polyaromatic-carbons/poly_6.png`).default
        }
        alt = '' /
        >
        <
        p className = 'table-2__item-info' >
        <
        span className = 'table-2__item-name' > {
            t('array.poly_uglerod_name.item5')
        } < /span> <
        span className = 'table-2__item-value' > 0.0000265 g / 100 mL < /span> <
        /p> <
        /li> <
        li className = 'table-2__item table-2__item--pyrene' >
        <
        img className = 'table-2__item-image'
        src = {
            require(`../assets/images/polyaromatic-carbons/poly_7.png`).default
        }
        alt = '' /
        >
        <
        p className = 'table-2__item-info' >
        <
        span className = 'table-2__item-name' > {
            t('array.poly_uglerod_name.item6')
        } < /span> <
        span className = 'table-2__item-value' > 0.0000013 g / 100 mL < /span> <
        /p> <
        /li> <
        li className = 'table-2__item table-2__item--benzo-anthracene' >
        <
        img className = 'table-2__item-image'
        src = {
            require(`../assets/images/polyaromatic-carbons/poly_8.png`).default
        }
        alt = '' /
        >
        <
        p className = 'table-2__item-info' >
        <
        span className = 'table-2__item-name' > {
            t('array.poly_uglerod_name.item7')
        } < /span> <
        span className = 'table-2__item-value' > 0.0000014 g / 100 mL < /span> <
        /p> <
        /li> <
        li className = 'table-2__item table-2__item--chrysene' >
        <
        img className = 'table-2__item-image'
        src = {
            require(`../assets/images/polyaromatic-carbons/poly_9.png`).default
        }
        alt = '' /
        >
        <
        p className = 'table-2__item-info' >
        <
        span className = 'table-2__item-name' > {
            t('array.poly_uglerod_name.item8')
        } < /span> <
        span className = 'table-2__item-value' > 0.00000018 g / 100 mL < /span> <
        /p> <
        /li> <
        li className = 'table-2__item table-2__item--benzo-b-fluoranthene' >
        <
        img className = 'table-2__item-image'
        src = {
            require(`../assets/images/polyaromatic-carbons/poly_10.png`).default
        }
        alt = '' /
        >
        <
        p className = 'table-2__item-info' >
        <
        span className = 'table-2__item-name' > {
            t('array.poly_uglerod_name.item9')
        } < /span> <
        span className = 'table-2__item-value' > 0.00000012 g / 100 mL < /span> <
        /p> <
        /li> <
        li className = 'table-2__item table-2__item--benzo-k-fluoranthene' >
        <
        img className = 'table-2__item-image'
        src = {
            require(`../assets/images/polyaromatic-carbons/poly_11.png`).default
        }
        alt = '' /
        >
        <
        p className = 'table-2__item-info' >
        <
        span className = 'table-2__item-name' > {
            t('array.poly_uglerod_name.item10')
        } < /span> <
        span className = 'table-2__item-value' > 0.000000055 g / 100 mL < /span> <
        /p> <
        /li> <
        li className = 'table-2__item table-2__item--dibenzo-anthracene' >
        <
        img className = 'table-2__item-image'
        src = {
            require(`../assets/images/polyaromatic-carbons/poly_12.png`).default
        }
        alt = '' /
        >
        <
        p className = 'table-2__item-info' >
        <
        span className = 'table-2__item-name' > {
            t('array.poly_uglerod_name.item11')
        } < /span> <
        span className = 'table-2__item-value' > 0.00000005 g / 100 mL < /span> <
        /p> <
        /li> <
        li className = 'table-2__item table-2__item--benzo-perylene' >
        <
        img className = 'table-2__item-image'
        src = {
            require(`../assets/images/polyaromatic-carbons/poly_13.png`).default
        }
        alt = '' /
        >
        <
        p className = 'table-2__item-info' >
        <
        span className = 'table-2__item-name' > {
            t('array.poly_uglerod_name.item12')
        } < /span> <
        span className = 'table-2__item-value' > 0.000000026 g / 100 mL < /span> <
        /p> <
        /li> <
        li className = 'table-2__item table-2__item--indeno-pyrene' >
        <
        img className = 'table-2__item-image'
        src = {
            require(`../assets/images/polyaromatic-carbons/poly_14.png`).default
        }
        alt = '' /
        >
        <
        p className = 'table-2__item-info' >
        <
        span className = 'table-2__item-name' > {
            t('array.poly_uglerod_name.item13')
        } < /span> <
        span className = 'table-2__item-value' > 0.0000062 g / 100 mL < /span> <
        /p> <
        /li> <
        /ul> <
        /section> <
        />
    );
};

export default Table2;
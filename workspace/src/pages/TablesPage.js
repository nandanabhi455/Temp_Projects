import {
    Helmet
} from 'react-helmet';
import {
    useTranslation
} from 'react-i18next';
import {
    Link
} from 'react-router-dom';
import GoToHomePage from '../components/GoToHomePage.js';

const TablesPage = () => {
    const {
        t
    } = useTranslation();

    return ( <
        >
        <
        Helmet >
        <
        title > {
            `${t('string.translate.menu_tab4')} – ${t(
					'string.translate.name_ab'
				)} ${new Date().getFullYear()}`
        } < /title> <
        /Helmet> <
        GoToHomePage / >
        <
        section className = 'tables' >
        <
        h3 className = 'tables__title' > {
            t('string.translate.menu_tab4')
        } < /h3> <
        ul className = 'tables__list' >
        <
        li className = 'tables__item tables__item--1' >
        <
        Link className = 'tables__link'
        to = '/tables/table-1' >
        <
        div className = 'tables__bg-gradient' / >
        <
        h3 className = 'tables__item-title' > {
            t('string.translate.table_table_rastvor')
        } < /h3> <
        p className = 'tables__item-description' > {
            t('string.translate.table_table_rastvor_descr')
        } <
        /p> <
        /Link> <
        /li> <
        li className = 'tables__item tables__item--2' >
        <
        Link className = 'tables__link'
        to = '/tables/table-2' >
        <
        div className = 'tables__bg-gradient' / >
        <
        h3 className = 'tables__item-title' > {
            t('string.translate.table_poly_uglerod_name')
        } <
        /h3> <
        p className = 'tables__item-description' > {
            t('string.translate.table_poly_uglerod_descr')
        } <
        /p> <
        /Link> <
        /li> <
        li className = 'tables__item tables__item--3' >
        <
        Link className = 'tables__link'
        to = '/tables/table-3' >
        <
        div className = 'tables__bg-gradient' / >
        <
        h3 className = 'tables__item-title' > {
            t('string.translate.table_svva_alkanov_name')
        } <
        /h3> <
        p className = 'tables__item-description' > {
            t('string.translate.table_svva_alkanov_descr')
        } <
        /p> <
        /Link> <
        /li> <
        li className = 'tables__item tables__item--4' >
        <
        Link className = 'tables__link'
        to = '/tables/table-4' >
        <
        div className = 'tables__bg-gradient' / >
        <
        h3 className = 'tables__item-title' > {
            t('string.translate.table_electrohim_me_name')
        } <
        /h3> <
        p className = 'tables__item-description' > {
            t('string.translate.table_electrohim_me_descr')
        } <
        /p> <
        /Link> <
        /li> <
        /ul> <
        /section> <
        />
    );
};

export default TablesPage;
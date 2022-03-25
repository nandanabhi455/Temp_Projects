import {
    useTranslation
} from 'react-i18next';
import {
    Link
} from 'react-router-dom';
import GoToHomePage from './GoToHomePage';

const Table1 = () => {
    const {
        t
    } = useTranslation();

    const returnSymbol = string => {
        return string.substr(0, 1);
    };

    return ( <
        >
        <
        GoToHomePage / >
        <
        section className = 'table-1' >
        <
        div className = 'table-1__header' >
        <
        h2 className = 'table-1__title' > {
            t('string.translate.table_table_rastvor')
        } < /h2> <
        Link className = 'table-1__close-button'
        to = '/tables' >
        Закрыть <
        /Link> <
        /div> <
        table className = 'table-1__table' >
        <
        tr >
        <
        td / >
        <
        td className = 'table-1__table-header table-1__table-header--top' >
        H < sup > + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Li < sup > + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        NH < sup > 4 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        K < sup > + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Na < sup > + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Ag < sup > + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Ba < sup > 2 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Ca < sup > 2 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Mg < sup > 2 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Zn < sup > 2 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Mn < sup > 2 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Cu < sup > 2 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Cu < sup > + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Hg < sup > + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Hg < sup > 2 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Pb < sup > 2 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Fe < sup > 2 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Fe < sup > 3 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Al < sup > 3 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Cr < sup > 3 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Bi < sup > 3 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Sn < sup > 2 + < /sup> <
        /td> <
        td className = 'table-1__table-header table-1__table-header--top' >
        Sr < sup > 2 + < /sup> <
        /td> <
        /tr> <
        tr >
        <
        td className = 'table-1__table-header table-1__table-header--left' >
        OH < sup > – < /sup> <
        /td> <
        td className = 'table-1__table-cell' > * < /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        /tr> <
        tr >
        <
        td className = 'table-1__table-header table-1__table-header--left' >
        NO < sub > 3 < /sub> <
        sup > – < /sup> <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        /tr> <
        tr >
        <
        td className = 'table-1__table-header table-1__table-header--left' >
        F < sup > – < /sup> <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        /tr> <
        tr >
        <
        td className = 'table-1__table-header table-1__table-header--left' >
        Cl < sup > – < /sup> <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        /tr> <
        tr >
        <
        td className = 'table-1__table-header table-1__table-header--left' >
        Br < sup > – < /sup> <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        /tr> <
        tr >
        <
        td className = 'table-1__table-header table-1__table-header--left' >
        I < sup > – < /sup> <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        /tr> <
        tr >
        <
        td className = 'table-1__table-header table-1__table-header--left' >
        S < sup > 2– < /sup> <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        /tr> <
        tr >
        <
        td className = 'table-1__table-header table-1__table-header--left' >
        SO < sub > 3 < /sub> <
        sup > 2– < /sup> <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        /tr> <
        tr >
        <
        td className = 'table-1__table-header table-1__table-header--left' >
        SO < sub > 4 < /sub> <
        sup > 2– < /sup> <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        /tr> <
        tr >
        <
        td className = 'table-1__table-header table-1__table-header--left' >
        CO < sub > 3 < /sub> <
        sup > 2– < /sup> <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        /tr> <
        tr >
        <
        td className = 'table-1__table-header table-1__table-header--left' >
        SiO < sub > 3 < /sub> <
        sup > 2– < /sup> <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        /tr> <
        tr >
        <
        td className = 'table-1__table-header table-1__table-header--left' >
        PO < sub > 4 < /sub> <
        sup > 3– < /sup> <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        /tr> <
        tr >
        <
        td className = 'table-1__table-header table-1__table-header--left' >
        CrO < sub > 4 < /sub> <
        sup > 2– < /sup> <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /td> <
        td className = 'table-1__table-cell table-1__table-cell--decomposed' > – < /td> <
        td className = 'table-1__table-cell table-1__table-cell--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /td> <
        /tr> <
        /table> <
        div className = 'table-1__legend' >
        <
        ul className = 'table-1__legend-list' >
        <
        li className = 'table-1__legend-item' >
        <
        span className = 'table-1__legend-symbol table-1__legend-symbol--soluble' > {
            returnSymbol(t('string.translate.rastvor_group1'))
        } <
        /span> <
        span className = 'table-1__legend-name' > {
            t('string.translate.rastvor_group1')
        } < /span> <
        /li> <
        li className = 'table-1__legend-item' >
        <
        span className = 'table-1__legend-symbol table-1__legend-symbol--slightly-soluble' > {
            returnSymbol(t('string.translate.rastvor_group2'))
        } <
        /span> <
        span className = 'table-1__legend-name' > {
            t('string.translate.rastvor_group2')
        } < /span> <
        /li> <
        li className = 'table-1__legend-item' >
        <
        span className = 'table-1__legend-symbol table-1__legend-symbol--insoluble' > {
            returnSymbol(t('string.translate.rastvor_group3'))
        } <
        /span> <
        span className = 'table-1__legend-name' > {
            t('string.translate.rastvor_group3')
        } < /span> <
        /li> <
        li className = 'table-1__legend-item' >
        <
        span className = 'table-1__legend-symbol table-1__legend-symbol--decomposed' > – < /span> <
        span className = 'table-1__legend-name' > {
            t('string.translate.rastvor_group4')
        } < /span> <
        /li> <
        /ul> <
        /div> <
        /section> <
        />
    );
};

export default Table1;
import {
    Link
} from 'react-router-dom';
import {
    useTranslation
} from 'react-i18next';
import GoToHomePage from './GoToHomePage';

const Table4 = () => {
    const {
        t
    } = useTranslation();

    return ( <
        >
        <
        GoToHomePage / >
        <
        section className = 'table-4' >
        <
        div className = 'table-4__header' >
        <
        h2 className = 'table-3__title' > {
            t('string.translate.electrohim_me_ab')
        } < /h2> <
        Link className = 'table-3__close-button'
        to = '/tables' >
        Закрыть <
        /Link> <
        /div> <
        ul className = 'table-4__list' >
        <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--light-blue' > + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element3.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } - 3, 04({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--violet' > + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element55.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } - 3, 01({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--brown' > + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element19.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } - 2, 92({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--grey' > 2 + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element56.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } - 2, 90({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--dark-green' > 2 + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element20.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } - 2, 87({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--red' > + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element11.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } - 2, 71({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--yellow' > 2 + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element12.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } - 2, 36({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--yellow' > 3 + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element13.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } - 1, 66({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--orange' > 2 + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element30.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } - 0, 76({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--dark-green' > 2 + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element26.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } - 0, 44({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--dark-orange' > 2 + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element27.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } - 0, 28({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--red' > 2 + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element28.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } - 0, 25({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--light-blue' > 2 + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element50.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } - 0, 14({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--grey' > 2 + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element82.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } - 0, 13({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--violet' > 2 + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element29.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } + 0, 34({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--brown' > + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element47.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } + 0, 80({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--dark-orange' > 2 + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element80.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } + 0, 85({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--violet' > 2 + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element78.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } + 1, 28({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        li className = 'table-4__item' >
        <
        span className = 'table-4__item-circle table-4__item-circle--dark-orange' > 3 + < /span> <
        p className = 'table-4__item-info' >
        <
        span className = 'table-4__item-name' > {
            t('table.element79.name')
        } < /span> <
        span className = 'table-4__item-voltage' > {
            t('string.translate.electrohim_me_napr')
        } + 1, 5({
            t('string.translate.electrohim_me_napr_volt')
        }) <
        /span> <
        /p> <
        /li> <
        /ul> <
        /section> <
        />
    );
};

export default Table4;
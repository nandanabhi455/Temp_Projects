import {
    useState
} from 'react';
import {
    useTranslation
} from 'react-i18next';
import {
    Link
} from 'react-router-dom';
import Properties from './Properties';

const PeriodicTable = () => {
    const [currentCategory, setCurrentCategory] = useState('all-elements');
    const setValue = event => setCurrentCategory(event.target.value);
    const {
        t
    } = useTranslation();

    const classNames = 'periodic-table__element element';
    const classNamesAEM = classNames + ' alkaline-earth-metals';
    const classNamesAM = classNames + ' alkali-metals';
    const classNamesNN = classNames + ' non-metals';
    const classNamesActinides = classNames + ' actinides';
    const classNamesTM = classNames + ' transition-metals';
    const classNamesHalogens = classNames + ' halogens';
    const classNamesNG = classNames + ' noble-gases';
    const classNamesSA = classNames + ' superactinides';
    const classNamesPTM = classNames + ' post-transition-metals';
    const classNamesLanthanides = classNames + ' lanthanides';
    const classNamesMetalloids = classNames + ' metalloids';

    const [propertiesModal, setPropertiesModal] = useState(false);
    const [currentElementProp, setCurrentElementProp] = useState('table.element_.name');

    let splittedElementProp = currentElementProp.split('_');

    const openPropertiesModal = () => {
        setPropertiesModal(!propertiesModal);
    };

    const setLegendProperty = () => {
        if (currentElementProp === 'element_.PropertiesCommon.elementMasses') {
            return t('string.translate.read_atom_massa').split(':');
        } else if (currentElementProp === 'element_.ReactivityCommon.elValences') {
            return t('string.translate.rs2').split(':');
        } else if (currentElementProp === 'element_.BaseElementsData.elementOpenedYear') {
            return t('array.spinner_filter.item4');
        } else {
            return t('string.translate.table_cell_property_name');
        }
    };

    const setElementProperty = number => {
        if (t(`${splittedElementProp[0]}${number}${splittedElementProp[1]}`) === null) {
            return '----';
        } else {
            return t(`${splittedElementProp[0]}${number}${splittedElementProp[1]}`);
        }
    };

    return ( <
        >
        <
        table className = 'periodic-table' >
        <
        tbody >
        <
        tr >
        <
        td / >
        <
        td className = 'periodic-table__column-number' > 1 < /td> <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td className = 'periodic-table__column-number' > 18 < /td> <
        /tr> <
        tr >
        <
        td className = 'periodic-table__row-number' > 1 < /td> <
        td className = {
            currentCategory === 'non-metals' || currentCategory === 'all-elements' ?
            classNamesNN + ' non-metals--selected' :
                classNamesNN
        } >
        <
        Link to = '/element/1'
        className = 'element__link' >
        <
        span className = 'element__number' > 1 < /span> <
        span className = 'element__symbol' > {
            t('table.element1.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(1)
        } < /span> <
        /Link> <
        /td> <
        td className = 'periodic-table__column-number' > 2 < /td> <
        td className = 'periodic-table__categories categories'
        rowSpan = '2'
        colSpan = '10' >
        <
        div className = 'categories__wrapper' >
        <
        div className = 'categories__column' >
        <
        label className = 'categories__item' >
        <
        input type = 'radio'
        className = 'categories__input alkaline-earth-metals-input visually-hidden'
        name = 'element-category'
        value = {
            'alkaline-earth-metals'
        }
        onChange = {
            setValue
        }
        /> <
        span className = 'categories__radio alkaline-earth-metals-radio' / >
        <
        span className = 'categories__label' > {
            t('array.categ_name_new.item0')
        } < /span> <
        /label> <
        label className = 'categories__item' >
        <
        input type = 'radio'
        className = 'categories__input non-metals-input visually-hidden'
        name = 'element-category'
        value = {
            'non-metals'
        }
        onChange = {
            setValue
        }
        /> <
        span className = 'categories__radio non-metals-radio' / >
        <
        span className = 'categories__label' > {
            t('array.categ_name_new.item1')
        } < /span> <
        /label> <
        label className = 'categories__item' >
        <
        input type = 'radio'
        className = 'categories__input alkali-metals-input visually-hidden'
        name = 'element-category'
        value = {
            'alkali-metals'
        }
        onChange = {
            setValue
        }
        /> <
        span className = 'categories__radio alkali-metals-radio' / >
        <
        span className = 'categories__label' > {
            t('array.categ_name_new.item2')
        } < /span> <
        /label> <
        label className = 'categories__item' >
        <
        input type = 'radio'
        className = 'categories__input halogens-input visually-hidden'
        name = 'element-category'
        value = {
            'halogens'
        }
        onChange = {
            setValue
        }
        /> <
        span className = 'categories__radio halogens-radio' / >
        <
        span className = 'categories__label' > {
            t('array.categ_name_new.item3')
        } < /span> <
        /label> <
        /div> <
        div className = 'categories__column' >
        <
        label className = 'categories__item' >
        <
        input type = 'radio'
        className = 'categories__input transition-metals-input visually-hidden'
        name = 'element-category'
        value = {
            'transition-metals'
        }
        onChange = {
            setValue
        }
        /> <
        span className = 'categories__radio transition-metals-radio' / >
        <
        span className = 'categories__label' > {
            t('array.categ_name_new.item4')
        } < /span> <
        /label> <
        label className = 'categories__item' >
        <
        input type = 'radio'
        className = 'categories__input noble-gases-input visually-hidden'
        name = 'element-category'
        value = {
            'noble-gases'
        }
        fonChange = {
            setValue
        }
        /> <
        span className = 'categories__radio noble-gases-radio' / >
        <
        span className = 'categories__label' > {
            t('array.categ_name_new.item5')
        } < /span> <
        /label> <
        label className = 'categories__item' >
        <
        input type = 'radio'
        className = 'categories__input post-transition-metals-input visually-hidden'
        name = 'element-category'
        value = {
            'post-transition-metals'
        }
        onChange = {
            setValue
        }
        /> <
        span className = 'categories__radio post-transition-metals-radio' / >
        <
        span className = 'categories__label' > {
            t('array.categ_name_new.item6')
        } < /span> <
        /label> <
        label className = 'categories__item' >
        <
        input type = 'radio'
        className = 'categories__input lanthanides-input visually-hidden'
        name = 'element-category'
        value = {
            'lanthanides'
        }
        onChange = {
            setValue
        }
        /> <
        span className = 'categories__radio lanthanides-radio' / >
        <
        span className = 'categories__label' > {
            t('array.categ_name_new.item7')
        } < /span> <
        /label> <
        /div> <
        div className = 'categories__column' >
        <
        label className = 'categories__item' >
        <
        input type = 'radio'
        className = 'categories__input metalloids-input visually-hidden'
        name = 'element-category'
        value = {
            'metalloids'
        }
        onChange = {
            setValue
        }
        /> <
        span className = 'categories__radio metalloids-radio' / >
        <
        span className = 'categories__label' > {
            t('array.categ_name_new.item8')
        } < /span> <
        /label> <
        label className = 'categories__item' >
        <
        input type = 'radio'
        className = 'categories__input actinides-input visually-hidden'
        name = 'element-category'
        value = {
            'actinides'
        }
        onChange = {
            setValue
        }
        /> <
        span className = 'categories__radio actinides-radio' / >
        <
        span className = 'categories__label' > {
            t('array.categ_name_new.item9')
        } < /span> <
        /label> <
        label className = 'categories__item' >
        <
        input type = 'radio'
        className = 'categories__input superactinides-input visually-hidden'
        name = 'element-category'
        value = {
            'superactinides'
        }
        onChange = {
            setValue
        }
        /> <
        span className = 'categories__radio superactinides-radio' / >
        <
        span className = 'categories__label' > {
            t('array.categ_name_new.item10')
        } < /span> <
        /label> <
        label className = 'categories__item' >
        <
        input type = 'radio'
        className = 'categories__input all-elements-input visually-hidden'
        name = 'element-category'
        value = {
            'all-elements'
        }
        defaultChecked onChange = {
            setValue
        }
        /> <
        span className = 'categories__radio all-elements-radio' / >
        <
        span className = 'categories__label' > {
            t('array.categ_name_new.item11')
        } < /span> <
        /label> <
        /div> <
        /div> <
        /td> <
        td className = 'periodic-table__column-number' > 13 < /td> <
        td className = 'periodic-table__column-number' > 14 < /td> <
        td className = 'periodic-table__column-number' > 15 < /td> <
        td className = 'periodic-table__column-number' > 16 < /td> <
        td className = 'periodic-table__column-number' > 17 < /td> <
        td className = {
            currentCategory === 'noble-gases' || currentCategory === 'all-elements' ?
            classNamesNG + ' noble-gases--selected' :
                classNamesNG
        } >
        <
        Link to = '/element/2'
        className = 'element__link' >
        <
        span className = 'element__number' > 2 < /span> <
        span className = 'element__symbol' > {
            t('table.element2.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(2)
        } < /span> <
        /Link> <
        /td> <
        /tr> <
        tr >
        <
        td className = 'periodic-table__row-number' > 2 < /td> <
        td className = {
            currentCategory === 'alkali-metals' || currentCategory === 'all-elements' ?
            classNamesAM + ' alkali-metals--selected' :
                classNamesAM
        } >
        <
        Link to = '/element/3'
        className = 'element__link' >
        <
        span className = 'element__number' > 3 < /span> <
        span className = 'element__symbol' > {
            t('table.element3.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(3)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'alkaline-earth-metals' || currentCategory === 'all-elements' ?
            classNamesAEM + ' alkaline-earth-metals--selected' :
                classNamesAEM
        } >
        <
        Link to = '/element/4'
        className = 'element__link' >
        <
        span className = 'element__number' > 4 < /span> <
        span className = 'element__symbol' > {
            t('table.element4.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(4)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'metalloids' || currentCategory === 'all-elements' ?
            classNamesMetalloids + ' metalloids--selected' :
                classNamesMetalloids
        } >
        <
        Link to = '/element/5'
        className = 'element__link' >
        <
        span className = 'element__number' > 5 < /span> <
        span className = 'element__symbol' > {
            t('table.element5.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(5)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'non-metals' || currentCategory === 'all-elements' ?
            classNamesNN + ' non-metals--selected' :
                classNamesNN
        } >
        <
        Link to = '/element/6'
        className = 'element__link' >
        <
        span className = 'element__number' > 6 < /span> <
        span className = 'element__symbol' > {
            t('table.element6.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(6)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'non-metals' || currentCategory === 'all-elements' ?
            classNamesNN + ' non-metals--selected' :
                classNamesNN
        } >
        <
        Link to = '/element/7'
        className = 'element__link' >
        <
        span className = 'element__number' > 7 < /span> <
        span className = 'element__symbol' > {
            t('table.element7.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(7)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'non-metals' || currentCategory === 'all-elements' ?
            classNamesNN + ' non-metals--selected' :
                classNamesNN
        } >
        <
        Link to = '/element/8'
        className = 'element__link' >
        <
        span className = 'element__number' > 8 < /span> <
        span className = 'element__symbol' > {
            t('table.element8.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(8)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'halogens' || currentCategory === 'all-elements' ?
            classNamesHalogens + ' halogens--selected' :
                classNamesHalogens
        } >
        <
        Link to = '/element/9'
        className = 'element__link' >
        <
        span className = 'element__number' > 9 < /span> <
        span className = 'element__symbol' > {
            t('table.element9.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(9)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'noble-gases' || currentCategory === 'all-elements' ?
            classNamesNG + ' noble-gases--selected' :
                classNamesNG
        } >
        <
        Link to = '/element/10'
        className = 'element__link' >
        <
        span className = 'element__number' > 10 < /span> <
        span className = 'element__symbol' > {
            t('table.element10.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(10)
        } < /span> <
        /Link> <
        /td> <
        /tr> <
        tr >
        <
        td className = 'periodic-table__row-number' > 3 < /td> <
        td className = {
            currentCategory === 'alkali-metals' || currentCategory === 'all-elements' ?
            classNamesAM + ' alkali-metals--selected' :
                classNamesAM
        } >
        <
        Link to = '/element/11'
        className = 'element__link' >
        <
        span className = 'element__number' > 11 < /span> <
        span className = 'element__symbol' > {
            t('table.element11.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(11)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'alkaline-earth-metals' || currentCategory === 'all-elements' ?
            classNamesAEM + ' alkaline-earth-metals--selected' :
                classNamesAEM
        } >
        <
        Link to = '/element/12'
        className = 'element__link' >
        <
        span className = 'element__number' > 12 < /span> <
        span className = 'element__symbol' > {
            t('table.element12.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(12)
        } < /span> <
        /Link> <
        /td> <
        td className = 'periodic-table__column-number' > 3 < /td> <
        td className = 'periodic-table__column-number' > 4 < /td> <
        td className = 'periodic-table__column-number' > 5 < /td> <
        td className = 'periodic-table__column-number' > 6 < /td> <
        td className = 'periodic-table__column-number' > 7 < /td> <
        td className = 'periodic-table__column-number' > 8 < /td> <
        td className = 'periodic-table__column-number' > 9 < /td> <
        td className = 'periodic-table__column-number' > 10 < /td> <
        td className = 'periodic-table__column-number' > 11 < /td> <
        td className = 'periodic-table__column-number' > 12 < /td> <
        td className = {
            currentCategory === 'post-transition-metals' || currentCategory === 'all-elements' ?
            classNamesPTM + ' post-transition-metals--selected' :
                classNamesPTM
        } >
        <
        Link to = '/element/13'
        className = 'element__link' >
        <
        span className = 'element__number' > 13 < /span> <
        span className = 'element__symbol' > {
            t('table.element13.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(13)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'metalloids' || currentCategory === 'all-elements' ?
            classNamesMetalloids + ' metalloids--selected' :
                classNamesMetalloids
        } >
        <
        Link to = '/element/14'
        className = 'element__link' >
        <
        span className = 'element__number' > 14 < /span> <
        span className = 'element__symbol' > {
            t('table.element14.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(14)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'non-metals' || currentCategory === 'all-elements' ?
            classNamesNN + ' non-metals--selected' :
                classNamesNN
        } >
        <
        Link to = '/element/15'
        className = 'element__link' >
        <
        span className = 'element__number' > 15 < /span> <
        span className = 'element__symbol' > {
            t('table.element15.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(15)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'non-metals' || currentCategory === 'all-elements' ?
            classNamesNN + ' non-metals--selected' :
                classNamesNN
        } >
        <
        Link to = '/element/16'
        className = 'element__link' >
        <
        span className = 'element__number' > 16 < /span> <
        span className = 'element__symbol' > {
            t('table.element16.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(16)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'halogens' || currentCategory === 'all-elements' ?
            classNamesHalogens + ' halogens--selected' :
                classNamesHalogens
        } >
        <
        Link to = '/element/17'
        className = 'element__link' >
        <
        span className = 'element__number' > 17 < /span> <
        span className = 'element__symbol' > {
            t('table.element17.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(17)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'noble-gases' || currentCategory === 'all-elements' ?
            classNamesNG + ' noble-gases--selected' :
                classNamesNG
        } >
        <
        Link to = '/element/18'
        className = 'element__link' >
        <
        span className = 'element__number' > 18 < /span> <
        span className = 'element__symbol' > {
            t('table.element18.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(18)
        } < /span> <
        /Link> <
        /td> <
        /tr> <
        tr >
        <
        td className = 'periodic-table__row-number' > 4 < /td> <
        td className = {
            currentCategory === 'alkali-metals' || currentCategory === 'all-elements' ?
            classNamesAM + ' alkali-metals--selected' :
                classNamesAM
        } >
        <
        Link to = '/element/19'
        className = 'element__link' >
        <
        span className = 'element__number' > 19 < /span> <
        span className = 'element__symbol' > {
            t('table.element19.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(19)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'alkaline-earth-metals' || currentCategory === 'all-elements' ?
            classNamesAEM + ' alkaline-earth-metals--selected' :
                classNamesAEM
        } >
        <
        Link to = '/element/20'
        className = 'element__link' >
        <
        span className = 'element__number' > 20 < /span> <
        span className = 'element__symbol' > {
            t('table.element20.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(20)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/21'
        className = 'element__link' >
        <
        span className = 'element__number' > 21 < /span> <
        span className = 'element__symbol' > {
            t('table.element21.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(21)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/22'
        className = 'element__link' >
        <
        span className = 'element__number' > 22 < /span> <
        span className = 'element__symbol' > {
            t('table.element22.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(22)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/23'
        className = 'element__link' >
        <
        span className = 'element__number' > 23 < /span> <
        span className = 'element__symbol' > {
            t('table.element23.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(23)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/24'
        className = 'element__link' >
        <
        span className = 'element__number' > 24 < /span> <
        span className = 'element__symbol' > {
            t('table.element24.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(24)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/25'
        className = 'element__link' >
        <
        span className = 'element__number' > 25 < /span> <
        span className = 'element__symbol' > {
            t('table.element25.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(25)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/26'
        className = 'element__link' >
        <
        span className = 'element__number' > 26 < /span> <
        span className = 'element__symbol' > {
            t('table.element26.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(26)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/27'
        className = 'element__link' >
        <
        span className = 'element__number' > 27 < /span> <
        span className = 'element__symbol' > {
            t('table.element27.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(27)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/28'
        className = 'element__link' >
        <
        span className = 'element__number' > 28 < /span> <
        span className = 'element__symbol' > {
            t('table.element28.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(28)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/29'
        className = 'element__link' >
        <
        span className = 'element__number' > 29 < /span> <
        span className = 'element__symbol' > {
            t('table.element29.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(29)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/30'
        className = 'element__link' >
        <
        span className = 'element__number' > 30 < /span> <
        span className = 'element__symbol' > {
            t('table.element30.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(30)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'post-transition-metals' || currentCategory === 'all-elements' ?
            classNamesPTM + ' post-transition-metals--selected' :
                classNamesPTM
        } >
        <
        Link to = '/element/31'
        className = 'element__link' >
        <
        span className = 'element__number' > 31 < /span> <
        span className = 'element__symbol' > {
            t('table.element31.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(31)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'metalloids' || currentCategory === 'all-elements' ?
            classNamesMetalloids + ' metalloids--selected' :
                classNamesMetalloids
        } >
        <
        Link to = '/element/32'
        className = 'element__link' >
        <
        span className = 'element__number' > 32 < /span> <
        span className = 'element__symbol' > {
            t('table.element32.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(32)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'metalloids' || currentCategory === 'all-elements' ?
            classNamesMetalloids + ' metalloids--selected' :
                classNamesMetalloids
        } >
        <
        Link to = '/element/33'
        className = 'element__link' >
        <
        span className = 'element__number' > 33 < /span> <
        span className = 'element__symbol' > {
            t('table.element33.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(33)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'non-metals' || currentCategory === 'all-elements' ?
            classNamesNN + ' non-metals--selected' :
                classNamesNN
        } >
        <
        Link to = '/element/34'
        className = 'element__link' >
        <
        span className = 'element__number' > 34 < /span> <
        span className = 'element__symbol' > {
            t('table.element34.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(34)
        }
        s < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'halogens' || currentCategory === 'all-elements' ?
            classNamesHalogens + ' halogens--selected' :
                classNamesHalogens
        } >
        <
        Link to = '/element/35'
        className = 'element__link' >
        <
        span className = 'element__number' > 35 < /span> <
        span className = 'element__symbol' > {
            t('table.element35.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(35)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'noble-gases' || currentCategory === 'all-elements' ?
            classNamesNG + ' noble-gases--selected' :
                classNamesNG
        } >
        <
        Link to = '/element/36'
        className = 'element__link' >
        <
        span className = 'element__number' > 36 < /span> <
        span className = 'element__symbol' > {
            t('table.element36.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(36)
        } < /span> <
        /Link> <
        /td> <
        /tr> <
        tr >
        <
        td className = 'periodic-table__row-number' > 5 < /td> <
        td className = {
            currentCategory === 'alkali-metals' || currentCategory === 'all-elements' ?
            classNamesAM + ' alkali-metals--selected' :
                classNamesAM
        } >
        <
        Link to = '/element/37'
        className = 'element__link' >
        <
        span className = 'element__number' > 37 < /span> <
        span className = 'element__symbol' > {
            t('table.element37.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(37)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'alkaline-earth-metals' || currentCategory === 'all-elements' ?
            classNamesAEM + ' alkaline-earth-metals--selected' :
                classNamesAEM
        } >
        <
        Link to = '/element/38'
        className = 'element__link' >
        <
        span className = 'element__number' > 38 < /span> <
        span className = 'element__symbol' > {
            t('table.element38.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(38)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/39'
        className = 'element__link' >
        <
        span className = 'element__number' > 39 < /span> <
        span className = 'element__symbol' > {
            t('table.element39.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(39)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/40'
        className = 'element__link' >
        <
        span className = 'element__number' > 40 < /span> <
        span className = 'element__symbol' > {
            t('table.element40.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(40)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/41'
        className = 'element__link' >
        <
        span className = 'element__number' > 41 < /span> <
        span className = 'element__symbol' > {
            t('table.element41.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(41)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/42'
        className = 'element__link' >
        <
        span className = 'element__number' > 42 < /span> <
        span className = 'element__symbol' > {
            t('table.element42.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(42)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/43'
        className = 'element__link' >
        <
        span className = 'element__number' > 43 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element43.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(43)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/44'
        className = 'element__link' >
        <
        span className = 'element__number' > 44 < /span> <
        span className = 'element__symbol' > {
            t('table.element44.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(44)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/45'
        className = 'element__link' >
        <
        span className = 'element__number' > 45 < /span> <
        span className = 'element__symbol' > {
            t('table.element45.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(45)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/46'
        className = 'element__link' >
        <
        span className = 'element__number' > 46 < /span> <
        span className = 'element__symbol' > {
            t('table.element46.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(46)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/47'
        className = 'element__link' >
        <
        span className = 'element__number' > 47 < /span> <
        span className = 'element__symbol' > {
            t('table.element47.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(47)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/48'
        className = 'element__link' >
        <
        span className = 'element__number' > 48 < /span> <
        span className = 'element__symbol' > {
            t('table.element48.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(48)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'post-transition-metals' || currentCategory === 'all-elements' ?
            classNamesPTM + ' post-transition-metals--selected' :
                classNamesPTM
        } >
        <
        Link to = '/element/49'
        className = 'element__link' >
        <
        span className = 'element__number' > 49 < /span> <
        span className = 'element__symbol' > {
            t('table.element49.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(49)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'post-transition-metals' || currentCategory === 'all-elements' ?
            classNamesPTM + ' post-transition-metals--selected' :
                classNamesPTM
        } >
        <
        Link to = '/element/50'
        className = 'element__link' >
        <
        span className = 'element__number' > 50 < /span> <
        span className = 'element__symbol' > {
            t('table.element50.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(50)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'metalloids' || currentCategory === 'all-elements' ?
            classNamesMetalloids + ' metalloids--selected' :
                classNamesMetalloids
        } >
        <
        Link to = '/element/51'
        className = 'element__link' >
        <
        span className = 'element__number' > 51 < /span> <
        span className = 'element__symbol' > {
            t('table.element51.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(51)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'metalloids' || currentCategory === 'all-elements' ?
            classNamesMetalloids + ' metalloids--selected' :
                classNamesMetalloids
        } >
        <
        Link to = '/element/52'
        className = 'element__link' >
        <
        span className = 'element__number' > 52 < /span> <
        span className = 'element__symbol' > {
            t('table.element52.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(52)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'halogens' || currentCategory === 'all-elements' ?
            classNamesHalogens + ' halogens--selected' :
                classNamesHalogens
        } >
        <
        Link to = '/element/53'
        className = 'element__link' >
        <
        span className = 'element__number' > 53 < /span> <
        span className = 'element__symbol' > {
            t('table.element53.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(53)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'noble-gases' || currentCategory === 'all-elements' ?
            classNamesNG + ' noble-gases--selected' :
                classNamesNG
        } >
        <
        Link to = '/element/54'
        className = 'element__link' >
        <
        span className = 'element__number' > 54 < /span> <
        span className = 'element__symbol' > {
            t('table.element54.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(54)
        } < /span> <
        /Link> <
        /td> <
        /tr> <
        tr >
        <
        td className = 'periodic-table__row-number' > 6 < /td> <
        td className = {
            currentCategory === 'alkali-metals' || currentCategory === 'all-elements' ?
            classNamesAM + ' alkali-metals--selected' :
                classNamesAM
        } >
        <
        Link to = '/element/55'
        className = 'element__link' >
        <
        span className = 'element__number' > 55 < /span> <
        span className = 'element__symbol' > {
            t('table.element55.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(55)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'alkaline-earth-metals' || currentCategory === 'all-elements' ?
            classNamesAEM + ' alkaline-earth-metals--selected' :
                classNamesAEM
        } >
        <
        Link to = '/element/56'
        className = 'element__link' >
        <
        span className = 'element__number' > 56 < /span> <
        span className = 'element__symbol' > {
            t('table.element56.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(56)
        } < /span> <
        /Link> <
        /td> <
        td className = 'periodic-table__transfer' >
        57 - 71 < br / > La - Lu <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/72'
        className = 'element__link' >
        <
        span className = 'element__number' > 72 < /span> <
        span className = 'element__symbol' > {
            t('table.element72.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(72)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/73'
        className = 'element__link' >
        <
        span className = 'element__number' > 73 < /span> <
        span className = 'element__symbol' > {
            t('table.element73.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(73)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/74'
        className = 'element__link' >
        <
        span className = 'element__number' > 74 < /span> <
        span className = 'element__symbol' > {
            t('table.element74.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(74)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/75'
        className = 'element__link' >
        <
        span className = 'element__number' > 75 < /span> <
        span className = 'element__symbol' > {
            t('table.element75.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(75)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/76'
        className = 'element__link' >
        <
        span className = 'element__number' > 76 < /span> <
        span className = 'element__symbol' > {
            t('table.element76.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(76)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/77'
        className = 'element__link' >
        <
        span className = 'element__number' > 77 < /span> <
        span className = 'element__symbol' > {
            t('table.element77.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(77)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/78'
        className = 'element__link' >
        <
        span className = 'element__number' > 78 < /span> <
        span className = 'element__symbol' > {
            t('table.element78.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(78)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/79'
        className = 'element__link' >
        <
        span className = 'element__number' > 79 < /span> <
        span className = 'element__symbol' > {
            t('table.element79.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(79)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/80'
        className = 'element__link' >
        <
        span className = 'element__number' > 80 < /span> <
        span className = 'element__symbol' > {
            t('table.element80.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(80)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'post-transition-metals' || currentCategory === 'all-elements' ?
            classNamesPTM + ' post-transition-metals--selected' :
                classNamesPTM
        } >
        <
        Link to = '/element/81'
        className = 'element__link' >
        <
        span className = 'element__number' > 81 < /span> <
        span className = 'element__symbol' > {
            t('table.element81.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(81)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'post-transition-metals' || currentCategory === 'all-elements' ?
            classNamesPTM + ' post-transition-metals--selected' :
                classNamesPTM
        } >
        <
        Link to = '/element/82'
        className = 'element__link' >
        <
        span className = 'element__number' > 82 < /span> <
        span className = 'element__symbol' > {
            t('table.element82.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(83)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'post-transition-metals' || currentCategory === 'all-elements' ?
            classNamesPTM + ' post-transition-metals--selected' :
                classNamesPTM
        } >
        <
        Link to = '/element/83'
        className = 'element__link' >
        <
        span className = 'element__number' > 83 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element83.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(83)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'metalloids' || currentCategory === 'all-elements' ?
            classNamesMetalloids + ' metalloids--selected' :
                classNamesMetalloids
        } >
        <
        Link to = '/element/84'
        className = 'element__link' >
        <
        span className = 'element__number' > 84 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element84.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(84)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'halogens' || currentCategory === 'all-elements' ?
            classNamesHalogens + ' halogens--selected' :
                classNamesHalogens
        } >
        <
        Link to = '/element/85'
        className = 'element__link' >
        <
        span className = 'element__number' > 85 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element85.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(85)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'noble-gases' || currentCategory === 'all-elements' ?
            classNamesNG + ' noble-gases--selected' :
                classNamesNG
        } >
        <
        Link to = '/element/86'
        className = 'element__link' >
        <
        span className = 'element__number' > 86 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element86.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(86)
        } < /span> <
        /Link> <
        /td> <
        /tr> <
        tr >
        <
        td className = 'periodic-table__row-number' > 7 < /td> <
        td className = {
            currentCategory === 'alkali-metals' || currentCategory === 'all-elements' ?
            classNamesAM + ' alkali-metals--selected' :
                classNamesAM
        } >
        <
        Link to = '/element/87'
        className = 'element__link' >
        <
        span className = 'element__number' > 87 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element87.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(87)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'alkaline-earth-metals' || currentCategory === 'all-elements' ?
            classNamesAEM + ' alkaline-earth-metals--selected' :
                classNamesAEM
        } >
        <
        Link to = '/element/88'
        className = 'element__link' >
        <
        span className = 'element__number' > 88 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element88.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(88)
        } < /span> <
        /Link> <
        /td> <
        td className = 'periodic-table__transfer' >
        89 - 103 < br / > Ac - Lr <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/104'
        className = 'element__link' >
        <
        span className = 'element__number' > 104 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element104.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(104)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/105'
        className = 'element__link' >
        <
        span className = 'element__number' > 105 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element105.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(105)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/106'
        className = 'element__link' >
        <
        span className = 'element__number' > 106 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element106.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(106)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/107'
        className = 'element__link' >
        <
        span className = 'element__number' > 107 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element107.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(107)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/108'
        className = 'element__link' >
        <
        span className = 'element__number' > 108 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element108.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(108)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/109'
        className = 'element__link' >
        <
        span className = 'element__number' > 109 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element109.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(109)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/110'
        className = 'element__link' >
        <
        span className = 'element__number' > 110 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element110.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(110)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/111'
        className = 'element__link' >
        <
        span className = 'element__number' > 111 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element111.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(111)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'transition-metals' || currentCategory === 'all-elements' ?
            classNamesTM + ' transition-metals--selected' :
                classNamesTM
        } >
        <
        Link to = '/element/112'
        className = 'element__link' >
        <
        span className = 'element__number' > 112 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element112.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(112)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'post-transition-metals' || currentCategory === 'all-elements' ?
            classNamesPTM + ' post-transition-metals--selected' :
                classNamesPTM
        } >
        <
        Link to = '/element/113'
        className = 'element__link' >
        <
        span className = 'element__number' > 113 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element113.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(113)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'post-transition-metals' || currentCategory === 'all-elements' ?
            classNamesPTM + ' post-transition-metals--selected' :
                classNamesPTM
        } >
        <
        Link to = '/element/114'
        className = 'element__link' >
        <
        span className = 'element__number' > 114 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element114.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(114)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'post-transition-metals' || currentCategory === 'all-elements' ?
            classNamesPTM + ' post-transition-metals--selected' :
                classNamesPTM
        } >
        <
        Link to = '/element/115'
        className = 'element__link' >
        <
        span className = 'element__number' > 115 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element115.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(115)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'post-transition-metals' || currentCategory === 'all-elements' ?
            classNamesPTM + ' post-transition-metals--selected' :
                classNamesPTM
        } >
        <
        Link to = '/element/116'
        className = 'element__link' >
        <
        span className = 'element__number' > 116 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element116.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(116)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'halogens' || currentCategory === 'all-elements' ?
            classNamesHalogens + ' halogens--selected' :
                classNamesHalogens
        } >
        <
        Link to = '/element/117'
        className = 'element__link' >
        <
        span className = 'element__number' > 117 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element117.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(117)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'noble-gases' || currentCategory === 'all-elements' ?
            classNamesNG + ' noble-gases--selected' :
                classNamesNG
        } >
        <
        Link to = '/element/118'
        className = 'element__link' >
        <
        span className = 'element__number' > 118 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element118.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(118)
        } < /span> <
        /Link> <
        /td> <
        /tr> <
        tr >
        <
        td className = 'periodic-table__row-number' > 8 < /td> <
        td className = {
            currentCategory === 'alkali-metals' || currentCategory === 'all-elements' ?
            classNamesAM + ' alkali-metals--selected' :
                classNamesAM
        } >
        <
        Link to = '/element/119'
        className = 'element__link' >
        <
        span className = 'element__number' > 119 < /span> <
        span className = 'element__symbol' > {
            t('table.element119.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(119)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'alkaline-earth-metals' || currentCategory === 'all-elements' ?
            classNamesAEM + ' alkaline-earth-metals--selected' :
                classNamesAEM
        } >
        <
        Link to = '/element/120'
        className = 'element__link' >
        <
        span className = 'element__number' > 120 < /span> <
        span className = 'element__symbol' > {
            t('table.element120.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(120)
        } < /span> <
        /Link> <
        /td> <
        td className = 'periodic-table__transfer' >
        121 - 126 < br / > Ubu - Ubh <
        /td> <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        /tr> <
        tr >
        <
        td / >
        <
        td className = 'element__legend-cell'
        rowSpan = '2'
        colSpan = '2'
        align = 'center'
        verti > {
            currentElementProp !== 'table.element_.name' ? ( <
                div className = 'element__legend' >
                <
                span className = 'element__number' > {
                    t('array.spinner_filter.item3')
                } < /span> <
                span className = 'element__symbol' > {
                    t('array.spinner_filter.item2')
                } < /span> <
                span className = 'element__name' > {
                    setLegendProperty()
                } < /span> <
                /div>
            ) : null
        } <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/57'
        className = 'element__link' >
        <
        span className = 'element__number' > 57 < /span> <
        span className = 'element__symbol' > {
            t('table.element57.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(57)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/58'
        className = 'element__link' >
        <
        span className = 'element__number' > 58 < /span> <
        span className = 'element__symbol' > {
            t('table.element58.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(58)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/59'
        className = 'element__link' >
        <
        span className = 'element__number' > 59 < /span> <
        span className = 'element__symbol' > {
            t('table.element59.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(59)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/60'
        className = 'element__link' >
        <
        span className = 'element__number' > 60 < /span> <
        span className = 'element__symbol' > {
            t('table.element60.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(60)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/61'
        className = 'element__link' >
        <
        span className = 'element__number' > 61 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element61.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(61)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/62'
        className = 'element__link' >
        <
        span className = 'element__number' > 62 < /span> <
        span className = 'element__symbol' > {
            t('table.element62.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(62)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/63'
        className = 'element__link' >
        <
        span className = 'element__number' > 63 < /span> <
        span className = 'element__symbol' > {
            t('table.element63.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(63)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/64'
        className = 'element__link' >
        <
        span className = 'element__number' > 64 < /span> <
        span className = 'element__symbol' > {
            t('table.element64.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(64)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/65'
        className = 'element__link' >
        <
        span className = 'element__number' > 65 < /span> <
        span className = 'element__symbol' > {
            t('table.element65.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(65)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/66'
        className = 'element__link' >
        <
        span className = 'element__number' > 66 < /span> <
        span className = 'element__symbol' > {
            t('table.element66.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(66)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/67'
        className = 'element__link' >
        <
        span className = 'element__number' > 67 < /span> <
        span className = 'element__symbol' > {
            t('table.element67.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(67)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/68'
        className = 'element__link' >
        <
        span className = 'element__number' > 68 < /span> <
        span className = 'element__symbol' > {
            t('table.element68.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(68)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/69'
        className = 'element__link' >
        <
        span className = 'element__number' > 69 < /span> <
        span className = 'element__symbol' > {
            t('table.element69.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(69)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/70'
        className = 'element__link' >
        <
        span className = 'element__number' > 70 < /span> <
        span className = 'element__symbol' > {
            t('table.element70.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(70)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'lanthanides' || currentCategory === 'all-elements' ?
            classNamesLanthanides + ' lanthanides--selected' :
                classNamesLanthanides
        } >
        <
        Link to = '/element/71'
        className = 'element__link' >
        <
        span className = 'element__number' > 71 < /span> <
        span className = 'element__symbol' > {
            t('table.element71.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(71)
        } < /span> <
        /Link> <
        /td> <
        td / >
        <
        /tr> <
        tr >
        <
        td / >
        <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/89'
        className = 'element__link' >
        <
        span className = 'element__number' > 89 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element89.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(89)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/90'
        className = 'element__link' >
        <
        span className = 'element__number' > 90 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element90.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(90)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/91'
        className = 'element__link' >
        <
        span className = 'element__number' > 91 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element91.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(91)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/92'
        className = 'element__link' >
        <
        span className = 'element__number' > 92 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element92.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(92)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/93'
        className = 'element__link' >
        <
        span className = 'element__number' > 93 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element93.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(93)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/94'
        className = 'element__link' >
        <
        span className = 'element__number' > 94 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element94.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(94)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/95'
        className = 'element__link' >
        <
        span className = 'element__number' > 95 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element95.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(95)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/96'
        className = 'element__link' >
        <
        span className = 'element__number' > 96 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element96.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(96)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/97'
        className = 'element__link' >
        <
        span className = 'element__number' > 97 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element97.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(97)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/98'
        className = 'element__link' >
        <
        span className = 'element__number' > 98 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element98.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(98)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/99'
        className = 'element__link' >
        <
        span className = 'element__number' > 99 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element99.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(99)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/100'
        className = 'element__link' >
        <
        span className = 'element__number' > 100 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element100.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(100)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/101'
        className = 'element__link' >
        <
        span className = 'element__number' > 101 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element101.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(101)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/102'
        className = 'element__link' >
        <
        span className = 'element__number' > 102 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element102.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(102)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'actinides' || currentCategory === 'all-elements' ?
            classNamesActinides + ' actinides--selected' :
                classNamesActinides
        } >
        <
        Link to = '/element/103'
        className = 'element__link' >
        <
        span className = 'element__number' > 103 < /span> <
        span className = 'radioactive' / >
        <
        span className = 'element__symbol' > {
            t('table.element103.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(103)
        } < /span> <
        /Link> <
        /td> <
        td / >
        <
        /tr> <
        tr >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td className = {
            currentCategory === 'superactinides' || currentCategory === 'all-elements' ?
            classNamesSA + ' superactinides--selected' :
                classNamesSA
        } >
        <
        Link to = '/element/121'
        className = 'element__link' >
        <
        span className = 'element__number' > 121 < /span> <
        span className = 'element__symbol' > {
            t('table.element121.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(121)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'superactinides' || currentCategory === 'all-elements' ?
            classNamesSA + ' superactinides--selected' :
                classNamesSA
        } >
        <
        Link to = '/element/122'
        className = 'element__link' >
        <
        span className = 'element__number' > 122 < /span> <
        span className = 'element__symbol' > {
            t('table.element122.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(122)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'superactinides' || currentCategory === 'all-elements' ?
            classNamesSA + ' superactinides--selected' :
                classNamesSA
        } >
        <
        Link to = '/element/123'
        className = 'element__link' >
        <
        span className = 'element__number' > 123 < /span> <
        span className = 'element__symbol' > {
            t('table.element123.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(123)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'superactinides' || currentCategory === 'all-elements' ?
            classNamesSA + ' superactinides--selected' :
                classNamesSA
        } >
        <
        Link to = '/element/124'
        className = 'element__link' >
        <
        span className = 'element__number' > 124 < /span> <
        span className = 'element__symbol' > {
            t('table.element124.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(124)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'superactinides' || currentCategory === 'all-elements' ?
            classNamesSA + ' superactinides--selected' :
                classNamesSA
        } >
        <
        Link to = '/element/125'
        className = 'element__link' >
        <
        span className = 'element__number' > 125 < /span> <
        span className = 'element__symbol' > {
            t('table.element125.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(125)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'superactinides' || currentCategory === 'all-elements' ?
            classNamesSA + ' superactinides--selected' :
                classNamesSA
        } >
        <
        Link to = '/element/126'
        className = 'element__link' >
        <
        span className = 'element__number' > 126 < /span> <
        span className = 'element__symbol' > {
            t('table.element126.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(126)
        } < /span> <
        /Link> <
        /td> <
        td className = {
            currentCategory === 'superactinides' || currentCategory === 'all-elements' ?
            classNamesSA + ' superactinides--selected' :
                classNamesSA
        } >
        <
        Link to = '/element/127'
        className = 'element__link' >
        <
        span className = 'element__number' > 127 < /span> <
        span className = 'element__symbol' > {
            t('table.element127.symbol')
        } < /span> <
        span className = 'element__name' > {
            setElementProperty(127)
        } < /span> <
        /Link> <
        /td> <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        td / >
        <
        /tr> <
        /tbody> <
        /table> <
        p className = 'copyright' > ©{
            ' '
        } <
        a className = 'copyright__author-link'
        href = 'https://chernykh.tech/'
        target = '_blank'
        rel = 'noreferrer' >
        chernykh.tech <
        /a>{' '} /
        All rights reserved, {
            `${new Date().getFullYear()}`
        } < br / >
        Developed by: {
            ' '
        } <
        a href = 'https://t.me/firstov_me'
        className = 'copyright__developer-link'
        target = '_blank'
        rel = 'noreferrer' >
        &
        lt; firstov.me / & gt; <
        /a>{' '} <
        br / >
        0.2 .5 <
        /p> <
        button className = 'properties__button'
        onClick = {
            openPropertiesModal
        }
        /> {
            propertiesModal ? ( <
                Properties onClick = {
                    openPropertiesModal
                }
                setCurrentElementProp = {
                    setCurrentElementProp
                }
                />
            ) : null
        } <
        />
    );
};

export default PeriodicTable;
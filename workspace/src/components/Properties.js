import {
    useTranslation
} from 'react-i18next';

const Properties = ({
    onClick,
    setCurrentElementProp
}) => {
    const {
        t
    } = useTranslation();
    return ( <
        section className = 'properties' >
        <
        div className = 'properties__background'
        onClick = {
            onClick
        }
        /> <
        div className = 'properties__modal' >
        <
        h3 className = 'properties__modal-title' > {
            t('string.translate.table_cell_property')
        }: < /h3> <
        ul className = 'properties__list' >
        <
        li className = 'properties__item'
        onClick = {
            () => {
                setCurrentElementProp('table.element_.name');
                onClick();
            }
        } > {
            t('string.translate.table_cell_property_name')
        } <
        /li> <
        li className = 'properties__item'
        onClick = {
            () => {
                setCurrentElementProp('element_.PropertiesCommon.elementMasses');
                onClick();
            }
        } > {
            t('string.translate.read_atom_massa').split(':')
        } <
        /li> <
        li className = 'properties__item'
        onClick = {
            () => {
                setCurrentElementProp('element_.ReactivityCommon.elValences');
                onClick();
            }
        } > {
            t('string.translate.rs2').split(':')
        } <
        /li> <
        li className = 'properties__item'
        onClick = {
            () => {
                setCurrentElementProp('element_.BaseElementsData.elementOpenedYear');
                onClick();
            }
        } > {
            t('array.spinner_filter.item4')
        } <
        /li> <
        /ul> <
        /div> <
        /section>
    );
};

export default Properties;
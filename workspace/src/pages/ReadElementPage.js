import {
    useTranslation
} from 'react-i18next';
import {
    Link
} from 'react-router-dom';
import styled from 'styled-components';
import ReadElementProps from '../components/ReadElementProps.js';
import {
    Helmet
} from 'react-helmet';
import GoToHomePage from '../components/GoToHomePage.js';

//Elements
const ReadElementHeader = styled.div `
	height: 200px;
	position: relative;
	padding-left: 15px;
	padding-bottom: 25px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	border-bottom: 2px solid;
	border-color: ${props => props.borderColor};

	@media (min-width: 1440px) {
		height: 290px;
	}

	&::after {
		content: '';
		width: 28px;
		height: 28px;
		position: absolute;
		z-index: 1;
		left: 50%;
		margin-left: -14px;
		bottom: -30px;
		border: 14px solid transparent;
		border-top: 14px solid white;
		border-top-color: ${props => props.borderColor};
	}
`;

const ReadElementImage = styled.div `
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${props => props.backgroundColor};
	z-index: -1;
`;

const NumberAndCategory = styled.div `
	font-weight: 600;
	font-family: 'OpenSans', 'Arial', sans-serif;
	display: inline-block;
	background-color: ${props => props.backgroundColor};
	color: ${props => props.textColor};
	padding: 8px 14px;
	border-radius: 4px;
	font-size: 12px;
	text-transform: uppercase;
`;

const ElementNumber = styled.div `
	display: inline-block;
	border-right: 1px solid white;
	border-color: ${props => props.borderColor};
	padding: 5px 10px 5px 0;
	margin-right: 10px;
`;

const ReadElementPage = ({
    itemId
}) => {
    const {
        t
    } = useTranslation();
    const isRadioactive = t(`element${itemId}.BaseElementsData.elementRadioactivity`);
    const currentCategory = t(`element${itemId}.BaseElementsData.elementCategory`);

    const changeCategoryColor = () => {
        switch (currentCategory) {
            case 1:
                return '#FE1110';
            case 2:
                return '#009cc7';
            case 3:
                return '#FF8000';
            case 4:
                return '#006DA4';
            case 5:
                return '#C41D3D';
            case 6:
                return '#F5BE25';
            case 7:
                return '#00803B';
            case 8:
                return '#6F25A1';
            case 9:
                return '#CF6142';
            case 10:
                return '#57733B';
            case 11:
                return '#FFFFFF';
            default:
                return '#FFFFFF';
        }
    };

    const changeWhiteColor = () => {
        switch (currentCategory) {
            case 11:
                return '#000000';
            default:
                return '#FFFFFF';
        }
    };

    //Element Image
    const elementImage = t(`element${itemId}.BaseElementsData.elementImage`);

    return ( <
        >
        <
        Helmet >
        <
        title > {
            `${t(`element${itemId}.BaseElementsData.number`)} | ${t(
          `table.element${itemId}.symbol`
        )} – ${t(`table.element${itemId}.name`)}`
        } < /title> <
        /Helmet> <
        GoToHomePage / >
        <
        section className = 'read-element' >
        <
        ReadElementHeader borderColor = {
            changeCategoryColor
        } >
        <
        div className = 'read-element__gradient' / >
        <
        ReadElementImage backgroundColor = {
            changeCategoryColor
        }
        /> <
        div className = 'read-element__groups' > {
            isRadioactive === '+' ? ( <
                span className = 'read-element__radioactive' > {
                    t(`string.translate.ys1`).replace(':', '')
                } <
                /span>
            ) : null
        } <
        NumberAndCategory backgroundColor = {
            changeCategoryColor
        }
        textColor = {
            changeWhiteColor
        } >
        <
        ElementNumber borderColor = {
            changeWhiteColor
        } > {
            t(`element${itemId}.BaseElementsData.number`)
        } <
        /ElementNumber> <
        span className = 'read-element__category' > {
            t(`string.translate.read_cat${currentCategory}`)
        } <
        /span> <
        /NumberAndCategory> <
        /div> <
        div className = 'read-element__selected-element' >
        <
        span className = 'read-element__symbol' > {
            t(`table.element${itemId}.symbol`)
        } < /span> <
        p className = 'read-element__name-and-weight' >
        <
        span className = 'read-element__name' > {
            t(`table.element${itemId}.name`)
        } < /span> <
        br / >
        <
        span className = 'read-element__weight' > {
            `${t(`element${itemId}.PropertiesCommon.elementMasses`)} ${t(
                  `string.translate.read_gramm_moll`
                )}`
        } <
        /span> <
        /p> <
        /div> {
            elementImage !== null ? ( <
                picture >
                <
                source type = 'image/avif'
                srcSet = {
                    `${
                  require(`../assets/images/elements-avif/element_${elementImage}.avif`).default
                } 1x,
								${require(`../assets/images/elements-2x-avif/element_${elementImage}.avif`).default} 2x
								`
                }
                /> <
                source type = 'image/webp'
                srcSet = {
                    `${
                  require(`../assets/images/elements-webp/element_${elementImage}.webp`).default
                } 1x,
								${require(`../assets/images/elements-2x-webp/element_${elementImage}.webp`).default} 2x
								`
                }
                /> <
                img className = 'read-element__element-image'
                src = {
                    require(`../assets/images/elements-jpg/element_${elementImage}.jpg`).default
                }
                srcSet = {
                    `${
                  require(`../assets/images/elements-2x-jpg/element_${elementImage}.jpg`).default
                } 2x`
                }
                alt = '' /
                >
                <
                /picture>
            ) : (
                ''
            )
        } <
        /ReadElementHeader> <
        div className = 'read-element__buttons' > {
            itemId <= 1 ? ( <
                div className = 'read-element__element-link--prev-plug' / >
            ) : ( <
                Link to = {
                    `/element/${itemId - 1}`
                }
                className = 'read-element__element-link read-element__element-link--prev' >
                <
                span className = 'read-element__button-element-number' > {
                    itemId - 1
                } < /span> <
                span className = 'read-element__button-element-name' > {
                    t(`table.element${itemId - 1}.name`)
                } <
                /span> <
                /Link>
            )
        } {
            itemId >= 127 ? null : ( <
                Link to = {
                    `/element/${parseInt(itemId) + 1}`
                }
                className = 'read-element__element-link read-element__element-link--next' >
                <
                span className = 'read-element__button-element-number' > {
                    parseInt(itemId) + 1
                } < /span> <
                span className = 'read-element__button-element-name' > {
                    t(`table.element${parseInt(itemId) + 1}.name`)
                } <
                /span> <
                /Link>
            )
        } <
        /div> <
        ReadElementProps itemId = {
            itemId
        }
        /> <
        /section> <
        />
    );
};

export default ReadElementPage;
import {
    useTranslation
} from 'react-i18next';
import styled from 'styled-components';
import {
    Link
} from 'react-router-dom';
import {
    useState
} from 'react';
import {
    Helmet
} from 'react-helmet';
import GoToHomePage from '../components/GoToHomePage.js';

const ElementSymbol = styled.span `
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'OpenSans', 'Arial', sans-serif;
	font-size: 14px;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background-color: ${props => props.backgroundColor};
	color: ${props => props.textColor};
	margin-right: 13px;

	@media (min-width: 1440px) {
		width: 40px;
		height: 40px;
		font-size: 18px;
	}
`;

const SearchPage = () => {
    const {
        t
    } = useTranslation();
    let [term, setTerm] = useState('');

    const getItems = () => {
        let items = [];
        for (let i = 1; i <= 127; i++) {
            const elementCategory = t(`element${i}.BaseElementsData.elementCategory`);
            const changeCategoryColor = () => {
                switch (elementCategory) {
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
                switch (elementCategory) {
                    case 11:
                        return '#000000';
                    default:
                        return '#FFFFFF';
                }
            };
            items.push( <
                li key = {
                    i
                }
                content = {
                    t(`englishLatinNames.english_name.element_name${i}`)
                } >
                <
                Link className = 'search__elements-item'
                to = {
                    `/element/${i}`
                } >
                <
                ElementSymbol backgroundColor = {
                    changeCategoryColor
                }
                textColor = {
                    changeWhiteColor
                } > {
                    t(`table.element${i}.symbol`)
                } <
                /ElementSymbol> <
                div className = 'search__element-name-and-mass' >
                <
                span className = 'search__element-name' > {
                    t(`table.element${i}.name`)
                } < /span> <
                span className = 'search__element-mass' > {
                    `${t(
								`element${i}.PropertiesCommon.elementMasses`
							)} ${t('string.translate.read_gramm_moll')}`
                } < /span> <
                /div> <
                /Link> <
                /li>
            );
        }
        return items;
    };

    const search = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return (
                item.props.children.props.children[0].props.children
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1 ||
                item.props.content.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
                item.props.children.props.children[1].props.children[0].props.children
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1 ||
                item.props.children.props.children[1].props.children[1].props.children
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1
            );
        });
    };

    const visibleItems = search(getItems(), term);

    const onSearchChange = e => {
        setTerm(e.target.value);
    };

    const onSearchClear = () => {
        setTerm('');
    };

    return ( <
        >
        <
        Helmet >
        <
        title > {
            `${t('string.translate.menu_tab2')} – ${t(
					'string.translate.name_ab'
				)} ${new Date().getFullYear()}`
        } < /title> <
        /Helmet> <
        GoToHomePage / >
        <
        section className = 'search' >
        <
        div className = 'search__header' >
        <
        h2 className = 'search__title' > {
            t('string.translate.menu_tab2')
        } < /h2> <
        div className = 'search__form' >
        <
        input className = 'search__input'
        type = 'input'
        name = 'search'
        onChange = {
            onSearchChange
        }
        id = 'search-input'
        autoComplete = 'off'
        placeholder = {
            t(`string.translate.search_hint`)
        }
        /> <
        button className = 'search__reset-button'
        onClick = {
            onSearchClear
        }
        type = 'reset' / >
        <
        /div> <
        /div> <
        p className = 'search__results-header' > {
            t(`string.translate.rm_category_search_head`)
        } < /p> <
        ul className = 'search__elements-list' > {
            visibleItems
        } < /ul> <
        /section> <
        />
    );
};

export default SearchPage;
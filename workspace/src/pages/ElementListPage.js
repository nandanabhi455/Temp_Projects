import {
    useTranslation
} from 'react-i18next';
import styled from 'styled-components';
import {
    Link
} from 'react-router-dom';
import Select from 'react-select';
import {
    useState
} from 'react';
import {
    Helmet
} from 'react-helmet';
import GoToHomePage from '../components/GoToHomePage.js';

const ElementCell = styled.div `
  width: 60px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid ${props => props.borderColor};
  padding: 3px;
  overflow: hidden;

  @media (min-width: 1440px) {
    width: 94px;
    height: 72px;
    padding: 5px;
  }
`;

const BackgroundColor = styled.div `
  position: absolute;
  width: ${props => props.bgWidth};
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${props => props.bgColor};
`;

const ElementListPage = () => {
    const {
        t
    } = useTranslation();

    const options = [{
            value: 'atom-weight',
            label: `${t('string.translate.read_atom_massa').slice(0, -1)}`,
            color: '#006DA4'
        },
        {
            value: 'electrons',
            label: `${t('string.translate.text_electron').slice(0, -1)}`,
            color: '#F5BE25'
        },
        {
            value: 'protons',
            label: `${t('string.translate.text_proton').slice(0, -1)}`,
            color: '#CF6142'
        },
        {
            value: 'neutrons',
            label: `${t('string.translate.text_neutron').slice(0, -1)}`,
            color: '#00803B'
        },
        {
            value: 'atomic-radius',
            label: `${t('string.translate.at3').slice(0, -1)}`,
            color: '#FF8000'
        },
        {
            value: 'van-der-waals-radius',
            label: `${t('string.translate.at5').slice(0, -1)}`,
            color: '#6F25A1'
        },
        {
            value: 'covalent-radius',
            label: `${t('string.translate.at4').slice(0, -1)}`,
            color: '#CF6142'
        },
        {
            value: 'electronegativity',
            label: `${t('string.translate.rs1').slice(0, -1)}`,
            color: '#006DA4'
        },
        {
            value: 'density',
            label: `${t('string.translate.sm4').slice(0, -1)}`,
            color: '#57733B'
        }
    ];

    const dot = (color = '#006DA4', left = '0') => ({
        alignItems: 'center',
        display: 'flex',

        ':before': {
            backgroundColor: color,
            border: 'none',
            borderRadius: '50%',
            content: '""',
            display: 'block',
            position: 'absolute',
            left: left,
            top: '50%',
            marginTop: '-7px',
            height: '14px',
            width: '14px'
        }
    });

    const selectorStyles = {
        control: () => ({
            backgroundColor: '#1D222B',
            border: 'none',
            borderTop: '1px solid #2A2A37',
            borderBottom: '1px solid #2A2A37',
            marginBottom: '25px',
            borderRadius: 0,
            transitionDuration: '0.3s',
            display: 'flex',

            ':hover': {
                backgroundColor: '#2A2A37',
                borderColor: '#2A2A37',
                cursor: 'pointer'
            }
        }),
        valueContainer: styles => ({
            ...styles,
            padding: '10px',
            '@media (min-width: 1440px)': {
                padding: '15px'
            }
        }),
        indicatorSeparator: styles => ({
            ...styles,
            display: 'none'
        }),
        option: (styles, {
            data,
            isFocused,
            isSelected
        }) => {
            return {
                ...styles,
                ...dot(data.color, '17px'),
                backgroundColor: isSelected ? '#2A2A37' : isFocused ? '#2A2A37' : null,
                color: '#fff',
                padding: '12px',
                fontSize: '14px',
                borderBottom: '1px solid #2A2A37',
                transitionDuration: '0.3s',
                position: 'relative',
                paddingLeft: '45px',

                ':hover': {
                    cursor: 'pointer'
                },

                ':active': {
                    opacity: 0.5
                },

                '@media (min-width: 1440px)': {
                    padding: '17px',
                    paddingLeft: '45px',
                    fontSize: '16px'
                }
            };
        },
        menu: styles => ({ ...styles,
            borderRadius: 0,
            backgroundColor: '#1D222B',
            zIndex: 5
        }),
        menuList: () => ({
            height: 'auto'
        }),
        input: styles => ({ ...styles
        }),
        placeholder: styles => ({ ...styles,
            ...dot()
        }),
        singleValue: (styles, {
            data
        }) => ({
            ...styles,
            ...dot(data.color),
            position: 'relative',
            paddingLeft: '25px',
            paddingTop: '3px',
            display: 'inline-block',
            width: '235px',
            height: '23px',
            color: '#fff',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontSize: '14px',

            '@media (min-width: 1440px)': {
                paddingLeft: '30px',
                fontSize: '16px',
                paddingTop: '0'
            }
        })
    };

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const getItems = () => {
        let listItems = [];

        let props = {
            width: '',
            color: selectedOption.color,
            value: ''
        };

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

            if (selectedOption.value === 'atom-weight') {
                props.width = `${(Number(t(`element${i}.PropertiesCommon.elementMasses`)) / 335) * 100}%`;
                props.value = `${t(`element${i}.PropertiesCommon.elementMasses`)} ${t(
          'string.translate.read_gramm_moll'
        )}`;
            } else if (selectedOption.value === 'electrons') {
                props.width = `${(Number(t(`element${i}.BaseElementsData.elementE`)) / 127) * 100}%`;
                props.value = `${t(`element${i}.BaseElementsData.elementE`)}`;
            } else if (selectedOption.value === 'protons') {
                props.width = `${(Number(t(`element${i}.BaseElementsData.elementP`)) / 127) * 100}%`;
                props.value = `${t(`element${i}.BaseElementsData.elementP`)}`;
            } else if (selectedOption.value === 'neutrons') {
                props.width = `${(Number(t(`element${i}.BaseElementsData.elementN`)) / 209) * 100}%`;
                props.value = `${t(`element${i}.BaseElementsData.elementN`)}`;
            } else if (selectedOption.value === 'atomic-radius') {
                props.width = `${(Number(t(`element${i}.AtomicCommon.atomicRadius`)) / 299) * 100}%`;
                props.value = `${t(`element${i}.AtomicCommon.atomicRadius`)} pm`;
            } else if (selectedOption.value === 'van-der-waals-radius') {
                props.width = `${(Number(t(`element${i}.AtomicCommon.vanDerWaalsRadius`)) / 348) * 100}%`;
                props.value = `${t(`element${i}.AtomicCommon.vanDerWaalsRadius`)} pm`;
            } else if (selectedOption.value === 'covalent-radius') {
                props.width = `${(Number(t(`element${i}.AtomicCommon.covalentRadius`)) / 263) * 100}%`;
                props.value = `${t(`element${i}.AtomicCommon.covalentRadius`)} pm`;
            } else if (selectedOption.value === 'electronegativity') {
                props.width = `${
          (Number(t(`element${i}.ReactivityCommon.electronegativity`)) / 3.98) * 100
        }%`;
                props.value = `${t(`element${i}.ReactivityCommon.electronegativity`)}`;
            } else if (selectedOption.value === 'density') {
                props.width = `${(Number(t(`element${i}.PropertiesCommon.elementDensity`)) / 37.4) * 100}%`;
                props.value = `${t(`element${i}.PropertiesCommon.elementDensity`)} ${t(
          'string.translate.read_gramm_santim'
        )}`;
            }

            props.value = props.value.replace(null, '0');

            listItems.push( <
                li >
                <
                Link className = 'element-list__item'
                to = {
                    `/element/${i}`
                } >
                <
                ElementCell borderColor = {
                    changeCategoryColor
                } >
                <
                span className = 'element-list__number' > {
                    t(`element${i}.BaseElementsData.number`)
                } <
                /span> <
                span className = 'element-list__symbol' > {
                    t(`table.element${i}.symbol`)
                } < /span> <
                span className = 'element-list__name' > {
                    t(`table.element${i}.name`)
                } < /span> <
                /ElementCell> <
                div className = 'element-list__prop-wrapper' >
                <
                BackgroundColor bgWidth = {
                    props.width
                }
                bgColor = {
                    props.color
                }
                /> <
                span className = 'element-list__prop' > {
                    props.value
                } < /span> <
                /div> <
                /Link> <
                /li>
            );
        }
        return listItems;
    };

    return ( <
        >
        <
        Helmet >
        <
        title > {
            `${t('string.translate.menu_tab3')} – ${t(
          'string.translate.name_ab'
        )} ${new Date().getFullYear()}`
        } < /title> <
        /Helmet> <
        GoToHomePage / >
        <
        section className = 'element-list' >
        <
        h2 className = 'element-list__title' > {
            t('string.translate.menu_tab3')
        } < /h2> <
        Select defaultValue = {
            options[0]
        }
        onChange = {
            setSelectedOption
        }
        options = {
            options
        }
        styles = {
            selectorStyles
        }
        isSearchable = {
            false
        }
        /> <
        ul className = 'element-list__list' > {
            getItems()
        } < /ul> <
        /section> <
        />
    );
};

export default ElementListPage;
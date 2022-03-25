import styled from 'styled-components';
import {
    useTranslation
} from 'react-i18next';
import nextId from 'react-id-generator';

const OxidationStatesItem = styled.li `
	display: flex;
	align-items: center;
	justify-content: center;
	width: 27px;
	height: 27px;
	background-color: ${props => props.backgroundColor};
	border-radius: 100%;
	margin-right: 5px;
	margin-bottom: 5px;
	font-size: 13px;
`;

const ReadElementProps = ({
        itemId
    }) => {
        const {
            t
        } = useTranslation();

        //Year discovered
        const yearDiscovered = t(`element${itemId}.BaseElementsData.elementOpenedYear`);

        //CAS number
        const casNumber = t(`element${itemId}.AdditionalPro.casNumbers`);

        //Element Price
        const elementPrice = t(`element${itemId}.AdditionalPro.elementPrices`);

        //Element Openers
        const elementOpeners = t(`element${itemId}.BaseElementsData.elementOpeners`);

        //Electron Shell
        const electonShell = t(`element${itemId}.BaseElementsData.elementShells`);

        //Density
        const elementDensity = t(`element${itemId}.PropertiesCommon.elementDensity`);

        //Melting Point
        const meltingPointCelsius = t(`element${itemId}.PropertiesCommon.elementMeltingPoints`);
        const meltingPointFarenheit = (Number(meltingPointCelsius) * 9.0) / 5.0 + 32.0;
        const meltingPointKelvin = Number(meltingPointCelsius) + 273.15;

        //Boiling Point
        const boilingPointCelsius = t(`element${itemId}.PropertiesCommon.elementBoilingPoints`);
        const boilingPointFarenheit = (Number(boilingPointCelsius) * 9.0) / 5.0 + 32.0;
        const boilingPointKelvin = Number(boilingPointCelsius) + 273.15;

        //Emission spectrum
        const elementSpectrum = t(`element${itemId}.PropertiesCommon.elementSpectrum`);

        //Valence electrons
        const valenceElectrons = t(`element${itemId}.ReactivityCommon.elValences`);

        //Element group
        const elementGroup = t(`element${itemId}.PropertiesCommon.elementGroup`);

        //Oxidation states
        const oxidationStates = t(`element${itemId}.AtomicCommon.oxidationStates`);

        //Ion charge
        const ionCharge = t(`element${itemId}.AtomicCommon.ionCharge`);

        //Ionization Potential
        const ionizationPotential = t(`element${itemId}.AtomicCommon.ionizationPotential`);

        //Atomic radius
        const atomicRadius = t(`element${itemId}.AtomicCommon.atomicRadius`);

        //Covalent radius
        const covalentRadius = t(`element${itemId}.AtomicCommon.covalentRadius`);

        //VanDerWaals radius
        const vanDerWaalsRadius = t(`element${itemId}.AtomicCommon.vanDerWaalsRadius`);

        //Electronegativity
        const electronegativity = t(`element${itemId}.ReactivityCommon.electronegativity`);

        //Atom electron energy
        const atomElectronEnergy = t(`element${itemId}.ReactivityCommon.atomElectronEnergy`);

        //Electrical conductivity
        const electricalConductivity = t(`element${itemId}.ElectromagneticCommon.es_electro`);

        //Electrical type
        const electricalType = t(`element${itemId}.ElectromagneticCommon.es_etype`);

        //Magnetic type
        const magneticType = t(`element${itemId}.ElectromagneticCommon.es_mtype`);

        // Volume magnetic susceptibility
        const volumeMagnetic = t(`element${itemId}.ElectromagneticCommon.es_omvospr`);

        // Mass magnetic susceptibility
        const massMagnetic = t(`element${itemId}.ElectromagneticCommon.es_umvospr`);

        // Molar magnetic susceptibility
        const molarMagnetic = t(`element${itemId}.ElectromagneticCommon.es_mmvospr`);

        //Resistivity
        const resistivity = t(`element${itemId}.ElectromagneticCommon.es_udel`);

        //Superconducting Point
        const superconductingPoint = t(`element${itemId}.ElectromagneticCommon.es_temp`);

        const superconductingPointCelsius = Number(superconductingPoint) - 273.15;
        const superconductingPointFarenheit = (Number(superconductingPointCelsius) * 9.0) / 5.0 + 32.0;

        //Grid parameters
        const gridParameters = t(`element${itemId}.GridPro.gridParams`);

        //grid structure number
        let gridStructureNum = t(`element${itemId}.GridPro.gridStructureNum`);

        if (gridStructureNum !== null) {
            gridStructureNum = Number(gridStructureNum);
        }

        //Attitude
        const attitude = t(`element${itemId}.GridPro.ratio`);

        //Debye temperature
        const debyeTemperatureKelvin = t(`element${itemId}.GridPro.debyeTemperature`);

        const debyeTemperatureCelsius = Number(debyeTemperatureKelvin) - 273.15;
        const debyeTemperatureFarenheit = (Number(debyeTemperatureCelsius) * 9.0) / 5.0 + 32.0;

        //Universe contains
        const prevalence1 = t(`element${itemId}.PrevalenceCommon.prevalence1`);

        //Sun contains
        const prevalence2 = t(`element${itemId}.PrevalenceCommon.prevalence2`);

        //Oceans contains
        const prevalence3 = t(`element${itemId}.PrevalenceCommon.prevalence3`);

        //Human body contains
        const prevalence4 = t(`element${itemId}.PrevalenceCommon.prevalence4`);

        //The Earth's crust consists
        const prevalence5 = t(`element${itemId}.PrevalenceCommon.prevalence5`);

        //Meteorites consists
        const prevalence6 = t(`element${itemId}.PrevalenceCommon.prevalence6`);

        //UNITS
        //gramm moll
        const massUnit = t(`string.translate.read_gramm_moll`); // g/moll
        const elementDensityUnit = t(`string.translate.read_gramm_santim`); //g/cm3
        const blockUnit = t(`string.translate.read_group_block2`).replace('%1$s', ''); //block
        const ionizationPotentialUnit = t(`string.translate.at7_2`); // eV
        const electronAffinityUnit = t(`string.translate.electro_column3`); // kJ/mole
        const electricalConductivityUnit = t(`string.translate.es1_value`); // S/m
        const molarMagneticUnit = t(`string.translate.es6_value`); // m3/mol
        const resistivityUnit = '(Ω · m)'; // omega * m

        const classNames = value => {
            if (value !== null) {
                return 'read-element__props-item';
            } else {
                return 'read-element__props-item--empty';
            }
        };

        const getValue = (value, unit) => {
            if (value === null) {
                return '----';
            } else {
                return `${value}${unit}`;
            }
        };

        const getValuesWithHTML = (value, unit) => {
            if (value === null) {
                return {
                    __html: '----'
                };
            } else {
                return {
                    __html: `${value}${unit}`
                };
            }
        };

        const getYearDiscovered = () => {
            if (yearDiscovered !== null) {
                if (yearDiscovered.includes('#')) {
                    return t('string.translate.read_year_old');
                } else if (yearDiscovered.includes('*')) {
                    return yearDiscovered
                        .replace('&lt;', '<')
                        .replace('&gt;', '>')
                        .replace('*', ` ${t('string.translate.read_year_bc')}`);
                } else {
                    return yearDiscovered;
                }
            } else {
                return '----';
            }
        };

        const getFirstOpener = () => {
            if (elementOpeners !== null) {
                const parts = elementOpeners.split('/');

                switch (parts.length) {
                    case 1:
                        return t(`array.first_opener.item${parts[0]}`);
                    case 2:
                        return `${t(`array.first_opener.item${parts[0]}`)}, ${t(
						`array.first_opener.item${parts[1]}`
					)}`;
                    case 3:
                        return `${t(`array.first_opener.item${parts[0]}`)}, ${t(
						`array.first_opener.item${parts[1]}`
					)}, ${t(`array.first_opener.item${parts[2]}`)}`;
                    default:
                        return '----';
                }
            } else {
                return '----';
            }
        };

        const groupAndPeriod = () => {
            if (elementGroup.includes('/') && elementGroup.length > 1) {
                let groupParts = elementGroup.split('/');
                let groupElementPeriod = groupParts[0];
                let groupElementGroup = groupParts[1];

                return {
                    groupElementPeriod: groupElementPeriod,
                    groupElementGroup: groupElementGroup
                };
            } else {
                return {
                    groupElementPeriod: elementGroup,
                    groupElementGroup: '----'
                };
            }
        };

        const getIonCharge = () => {
            if (ionCharge != null) {
                let finalIon;
                if (ionCharge.includes('/')) {
                    let ionPart = ionCharge.split('/');
                    let ion1 = ionPart[0];
                    let ion2 = ionPart[1];
                    finalIon = `${t(`table.element${itemId}.symbol`)}${ion1.sup()}, ${t(
					`table.element${itemId}.symbol`
				)}${ion2.sup()}`;
                } else {
                    finalIon = `${t(`table.element${itemId}.symbol`)}${ionCharge.sup()}`;
                }
                return {
                    __html: finalIon
                };
            } else {
                return {
                    __html: '----'
                };
            }
        };

        let oxidationPart = oxidationStates.split(',');
        let m1 = oxidationPart[4].replace(' ', '');
        let m2 = oxidationPart[3].replace(' ', '');
        let m3 = oxidationPart[2].replace(' ', '');
        let m4 = oxidationPart[1].replace(' ', '');
        let m5 = oxidationPart[0].replace(' ', '');
        let zz = oxidationPart[5].replace(' ', '');
        let p1 = oxidationPart[6].replace(' ', '');
        let p2 = oxidationPart[7].replace(' ', '');
        let p3 = oxidationPart[8].replace(' ', '');
        let p4 = oxidationPart[9].replace(' ', '');
        let p5 = oxidationPart[10].replace(' ', '');
        let p6 = oxidationPart[11].replace(' ', '');
        let p7 = oxidationPart[12].replace(' ', '');
        let p8 = oxidationPart[13].replace(' ', '');
        let p9 = oxidationPart[14].replace(' ', '');

        const getOxidationStatesTop = value => {
            if (value !== '-' && value !== '0') {
                return '#205aad';
            } else if (value === '0') {
                return '#568ea3';
            } else {
                return '#2e2e39';
            }
        };

        const getOxidationStatesBottom = value => {
            if (value !== '-' && value !== '0') {
                return '#b7222c';
            } else if (value === '0') {
                return '#568ea3';
            } else {
                return '#2e2e39';
            }
        };

        let parts = electonShell.split('-');
        let ob1 = parseInt(parts[0].replace(/\D/g, ''));
        let ob2 = parseInt(parts[1].replace(/\D/g, ''));
        let ob3 = parseInt(parts[2].replace(/\D/g, ''));
        let ob4 = parseInt(parts[3].replace(/\D/g, ''));
        let ob5 = parseInt(parts[4].replace(/\D/g, ''));
        let ob6 = parseInt(parts[5].replace(/\D/g, ''));
        let ob7 = parseInt(parts[6].replace(/\D/g, ''));
        let ob8 = parseInt(parts[7].replace(/\D/g, ''));

        const getAtoms = (value, radius) => {
            let array = Array(value)
                .fill(0)
                .map(() => < li className = 'electron-shell__atom'
                    id = {
                        nextId()
                    }
                    style = {
                        {}
                    }
                    />);

                    for (let i = 0; i < value; i++) {
                        const angle = 360 / value;
                        const step = angle * i;
                        array[i].props.style.transform = `rotate(${step}deg) translate(0, -${radius}px)`;
                    }
                    return array;
                };

            return ( <
                >
                <
                div className = 'read-element__props-header read-element__props-header--overview' > {
                    t(`string.translate.read_obsh_head`)
                } <
                /div> <
                div className = 'read-element__props-wrapper' >
                <
                ul className = 'read-element__props-list' >
                <
                li className = 'read-element__props-item' >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.read_latin_name`)
                } < /span> <
                br / >

                <
                span className = 'read-element__props-value' > {
                    t(`englishLatinNames.latin_name.element_name${itemId}`)
                } <
                /span> <
                /li> <
                li className = 'read-element__props-item' >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.read_eng_name`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    t(`englishLatinNames.english_name.element_name${itemId}`)
                } <
                /span> <
                /li> <
                li className = {
                    classNames(yearDiscovered)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.read_year_open`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    getYearDiscovered()
                } < /span> <
                /li> <
                li className = {
                    classNames(casNumber)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.sm12`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    getValue(casNumber, ``)
                } < /span> <
                /li> <
                li className = {
                    classNames(elementPrice)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.cost`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    getValue(elementPrice, ` USD`)
                } < /span> <
                /li> <
                li className = {
                    classNames(elementOpeners)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.read_first_opener`)
                } <
                /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    getFirstOpener()
                } < /span> <
                /li> <
                li className = 'read-element__props-item' >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.el_obolochka`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    electonShell
                } < /span> <
                /li> <
                /ul> <
                div className = 'read-element__electron-shell electron-shell' >
                <
                div className = 'electron-shell__wrapper' >
                <
                ul className = 'electron-shell__center' / >
                <
                ul className = 'electron-shell__circle electron-shell__circle--1' > {
                    getAtoms(ob1, 19)
                } <
                /ul> <
                ul className = 'electron-shell__circle electron-shell__circle--2' > {
                    getAtoms(ob2, 34)
                } <
                /ul> <
                ul className = 'electron-shell__circle electron-shell__circle--3' > {
                    getAtoms(ob3, 49)
                } <
                /ul> <
                ul className = 'electron-shell__circle electron-shell__circle--4' > {
                    getAtoms(ob4, 64)
                } <
                /ul> <
                ul className = 'electron-shell__circle electron-shell__circle--5' > {
                    getAtoms(ob5, 79)
                } <
                /ul> <
                ul className = 'electron-shell__circle electron-shell__circle--6' > {
                    getAtoms(ob6, 94)
                } <
                /ul> <
                ul className = 'electron-shell__circle electron-shell__circle--7' > {
                    getAtoms(ob7, 109)
                } <
                /ul> <
                ul className = 'electron-shell__circle electron-shell__circle--8' > {
                    getAtoms(ob8, 124)
                } <
                /ul> <
                /div> <
                /div> <
                table className = 'read-element__anc-table' >
                <
                tbody >
                <
                tr >
                <
                td className = 'read-element__anc-table-key' > {
                    t(`string.translate.text_electron`)
                } < /td> <
                td className = 'read-element__anc-table-key' > {
                    t(`string.translate.text_proton`)
                } < /td> <
                td className = 'read-element__anc-table-key' > {
                    t(`string.translate.text_neutron`)
                } < /td> <
                /tr> <
                tr >
                <
                td className = 'read-element__anc-table-value' > {
                    t(`element${itemId}.BaseElementsData.elementE`)
                } <
                /td> <
                td className = 'read-element__anc-table-value' > {
                    t(`element${itemId}.BaseElementsData.elementP`)
                } <
                /td> <
                td className = 'read-element__anc-table-value' > {
                    t(`element${itemId}.BaseElementsData.elementN`)
                } <
                /td> <
                /tr> <
                /tbody> <
                /table> <
                /div> <
                div className = 'read-element__props-header read-element__props-header--properties' > {
                    t(`string.translate.calc_properties`)
                } <
                /div> <
                div className = 'read-element__props-wrapper' >
                <
                ul className = 'read-element__props-list' >
                <
                li className = 'read-element__props-item' >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.read_atom_number`)
                } <
                /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    t(`element${itemId}.PropertiesCommon.element`)
                } <
                /span> <
                /li> <
                li className = 'read-element__props-item' >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.read_atom_massa`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    `${t(`element${itemId}.PropertiesCommon.elementMasses`)} ${massUnit}`
                } <
                /span> <
                /li> <
                li className = {
                    classNames(elementDensity)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.read_density`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    getValue(elementDensity, ` ${elementDensityUnit}`)
                } <
                /span> <
                /li> <
                li className = {
                    meltingPointCelsius === '**' ?
                    'read-element__props-item--empty' :
                        'read-element__props-item'
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.read_temp1`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    meltingPointCelsius !== '**' ?
                    `${meltingPointCelsius} °C = ${meltingPointFarenheit.toFixed(
										2
								  )} °F = ${meltingPointKelvin.toFixed(2)} K` :
                        '----'
                } <
                /span> <
                /li> <
                li className = {
                    boilingPointCelsius === '**' ?
                    'read-element__props-item--empty' :
                        'read-element__props-item'
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.read_temp2`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    boilingPointCelsius !== '**' ?
                    `${boilingPointCelsius} °C = ${boilingPointFarenheit.toFixed(
										2
								  )} °F = ${boilingPointKelvin.toFixed(2)} K` :
                        '----'
                } <
                /span> <
                /li> <
                li className = {
                    classNames(valenceElectrons)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.rs2`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    getValue(valenceElectrons, '')
                } < /span> <
                /li> <
                li className = 'read-element__props-item' >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.read_period_group`)
                } <
                /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    groupAndPeriod().groupElementPeriod
                } < /span> <
                /li> <
                li className = {
                    groupAndPeriod().groupElementGroup === '----' ?
                    'read-element__props-item--empty' :
                        'read-element__props-item'
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.read_group_group`)
                } <
                /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    groupAndPeriod().groupElementGroup.includes('+') ?
                    groupAndPeriod().groupElementGroup.replace(
                        '+',
                        `${t('string.translate.element_group_a')}`
                    ) :
                        null
                } {
                    groupAndPeriod().groupElementGroup.includes('=') ?
                        groupAndPeriod().groupElementGroup.replace(
                            '=',
                            `${t('string.translate.element_group_b')}`
                        ) :
                        null
                } <
                /span> <
                /li> <
                li className = 'read-element__props-item' >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.read_group_block1`)
                } <
                /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    `${t(`element${itemId}.PropertiesCommon.elementBlock`)} ${blockUnit}`
                } <
                /span> <
                /li> <
                li className = {
                    classNames(elementSpectrum)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.read_spectr`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    elementSpectrum !== null ? ( <
                        picture >
                        <
                        source type = 'image/webp'
                        srcSet = {
                            `${
											require(`../assets/images/emission-spectrum-webp/element_spec_${elementSpectrum}.webp`)
												.default
										}`
                        }
                        /> <
                        img className = 'read-element__spectrum-image'
                        src = {
                            require(`../assets/images/emission-spectrum/element_spec_${elementSpectrum}.jpg`)
                            .default
                        }
                        alt = '' /
                        >
                        <
                        /picture>
                    ) : (
                        '----'
                    )
                } <
                /span> <
                /li> <
                /ul> <
                /div> <
                div className = 'read-element__props-header read-element__props-header--atomic-props' > {
                    t(`string.translate.at0`)
                } <
                /div> <
                div className = 'read-element__props-wrapper' >
                <
                ul className = 'read-element__props-list' >
                <
                li className = 'read-element__props-item' >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.el_config`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    t(`element${itemId}.BaseElementsData.elementConfigurations`)
                } <
                /span> <
                /li> <
                li className = 'read-element__props-item' >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.at1`)
                } < /span> <
                br / >
                <
                div className = 'read-element__props-value' >
                <
                ul className = 'read-element__oxidation-states-list read-element__oxidation-states-list--top' >
                <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesTop(zz)
                } > {
                    zz
                } <
                /OxidationStatesItem> <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesTop(m1)
                } > {
                    m1 !== '-' ? `-${m1}` : m1
                } <
                /OxidationStatesItem> <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesTop(m2)
                } > {
                    m2 !== '-' ? `-${m2}` : m2
                } <
                /OxidationStatesItem> <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesTop(m3)
                } > {
                    m3 !== '-' ? `-${m3}` : m4
                } <
                /OxidationStatesItem> <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesTop(m4)
                } > {
                    m4 !== '-' ? `-${m4}` : m4
                } <
                /OxidationStatesItem> <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesTop(m5)
                } > {
                    m5 !== '-' ? `-${m5}` : m5
                } <
                /OxidationStatesItem> <
                /ul> <
                ul className = 'read-element__oxidation-states-list' >
                <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesBottom(p1)
                } > {
                    p1 !== '-' ? `+${p1}` : p1
                } <
                /OxidationStatesItem> <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesBottom(p2)
                } > {
                    p2 !== '-' ? `+${p2}` : p2
                } <
                /OxidationStatesItem> <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesBottom(p3)
                } > {
                    p3 !== '-' ? `+${p3}` : p3
                } <
                /OxidationStatesItem> <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesBottom(p4)
                } > {
                    p4 !== '-' ? `+${p4}` : p4
                } <
                /OxidationStatesItem> <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesBottom(p5)
                } > {
                    p5 !== '-' ? `+${p5}` : p5
                } <
                /OxidationStatesItem> <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesBottom(p6)
                } > {
                    p6 !== '-' ? `+${p6}` : p6
                } <
                /OxidationStatesItem> <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesBottom(p7)
                } > {
                    p7 !== '-' ? `+${p7}` : p7
                } <
                /OxidationStatesItem> <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesBottom(p8)
                } > {
                    p8 !== '-' ? `+${p8}` : p8
                } <
                /OxidationStatesItem> <
                OxidationStatesItem backgroundColor = {
                    getOxidationStatesBottom(p9)
                } > {
                    p9 !== '-' ? `+${p9}` : p9
                } <
                /OxidationStatesItem> <
                /ul> <
                /div> <
                /li> <
                li className = {
                    getIonCharge().__html === '----' ?
                    'read-element__props-item--empty' :
                        'read-element__props-item'
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.at6`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value'
                dangerouslySetInnerHTML = {
                    getIonCharge()
                }
                /> <
                /li> <
                li className = {
                    classNames(ionizationPotential)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.at7`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    getValue(ionizationPotential, ` ${ionizationPotentialUnit}`)
                } <
                /span> <
                /li> <
                li className = {
                    classNames(atomicRadius)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.at3`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    `${getValue(atomicRadius, ' (pm)')}`
                } <
                /span> <
                /li> <
                li className = {
                    classNames(covalentRadius)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.at4`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    getValue(covalentRadius, ' (pm)')
                } < /span> <
                /li> <
                li className = {
                    classNames(vanDerWaalsRadius)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.at5`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    getValue(vanDerWaalsRadius, ' (pm)')
                } <
                /span> <
                /li> <
                /ul> <
                /div> <
                div className = 'read-element__props-header read-element__props-header--reactivity' > {
                    t(`string.translate.rs0`)
                } <
                /div> <
                div className = 'read-element__props-wrapper' >
                <
                ul className = 'read-element__props-list' >
                <
                li className = {
                    classNames(electronegativity)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.rs1`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    getValue(electronegativity, '')
                } < /span> <
                /li> <
                li className = {
                    classNames(valenceElectrons)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.rs2`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    getValue(valenceElectrons, '')
                } < /span> <
                /li> <
                li className = {
                    classNames(atomElectronEnergy)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.rs3`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    getValue(atomElectronEnergy, ` ${electronAffinityUnit}`)
                } <
                /span> <
                /li> <
                /ul> <
                /div> <
                div className = 'read-element__props-header read-element__props-header--electromagnetic-props' > {
                    t(`string.translate.es0`)
                } <
                /div> <
                div className = 'read-element__props-wrapper' >
                <
                ul className = 'read-element__props-list' >
                <
                li className = {
                    classNames(electricalConductivity)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.es1`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value'
                dangerouslySetInnerHTML = {
                    getValuesWithHTML(
                        electricalConductivity,
                        ` ${electricalConductivityUnit}`
                    )
                }
                /> <
                /li> <
                li className = {
                    classNames(electricalType)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.es2`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    electricalType !== null ? t(`array.es_etype.item${electricalType - 1}`) : '----'
                } <
                /span> <
                /li> <
                li className = {
                    classNames(magneticType)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.es3`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    magneticType !== null ? t(`array.es_mtype.item${magneticType - 1}`) : '----'
                } <
                /span> <
                /li> <
                li className = {
                    classNames(volumeMagnetic)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.es4`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value'
                dangerouslySetInnerHTML = {
                    getValuesWithHTML(volumeMagnetic, '')
                }
                /> <
                /li> <
                li className = {
                    classNames(massMagnetic)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.es5`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value'
                dangerouslySetInnerHTML = {
                    getValuesWithHTML(massMagnetic, '')
                }
                /> <
                /li> <
                li className = {
                    classNames(molarMagnetic)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.es6`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value'
                dangerouslySetInnerHTML = {
                    getValuesWithHTML(molarMagnetic, ` ${molarMagneticUnit}`)
                }
                /> <
                /li> <
                li className = {
                    classNames(resistivity)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.es7`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value'
                dangerouslySetInnerHTML = {
                    getValuesWithHTML(resistivity, ` ${resistivityUnit}`)
                }
                /> <
                /li> <
                li className = {
                    classNames(superconductingPoint)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.es8`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > { /*{getValue(superconductingPoint, '')}*/ } {
                    superconductingPoint !== null ?
                        `${superconductingPointCelsius.toFixed(
										2
								  )} °C = ${superconductingPointFarenheit.toFixed(
										2
								  )} °F = ${superconductingPoint} K` :
                        '----'
                } <
                /span> <
                /li> <
                /ul> <
                /div> <
                div className = 'read-element__props-header read-element__props-header--grid-parameters' > {
                    t(`string.translate.kr0`)
                } <
                /div> <
                div className = {
                    gridStructureNum === null ?
                    'read-element__props-wrapper' :
                        'read-element__props-wrapper--2-column'
                } >
                <
                ul className = {
                    gridStructureNum === null ?
                    'read-element__props-list' :
                        'read-element__props-list--2-column'
                } >
                <
                li className = {
                    classNames(gridStructureNum)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.kr1`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    gridStructureNum !== null ? t(`array.reshetka.item${gridStructureNum - 1}`) : '----'
                } <
                /span> <
                /li> <
                li className = {
                    classNames(gridParameters)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.kr2`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    getValue(gridParameters, '')
                } < /span> <
                /li> <
                li className = {
                    classNames(attitude)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.kr3`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    getValue(attitude, '')
                } < /span> <
                /li> <
                /ul> {
                    gridStructureNum !== null ? ( <
                        picture >
                        <
                        source type = 'image/webp'
                        srcSet = {
                            `${require(`../assets/images/crystal-grid/webp/struct${gridStructureNum}.webp`).default} 1x`
                        }
                        /> <
                        img className = 'read-element__crystal-grid-image'
                        src = {
                            require(`../assets/images/crystal-grid/gif/struct${gridStructureNum}.gif`).default
                        }
                        alt = '' /
                        >
                        <
                        /picture>
                    ) : (
                        ''
                    )
                } <
                /div> <
                div className = 'read-element__props-wrapper' >
                <
                ul className = 'read-element__props-list' >
                <
                li className = {
                    classNames(debyeTemperatureKelvin)
                } >
                <
                span className = 'read-element__props-key' > {
                    t(`string.translate.kr4`)
                } < /span> <
                br / >
                <
                span className = 'read-element__props-value' > {
                    debyeTemperatureKelvin !== null ?
                    `${debyeTemperatureCelsius.toFixed(2)} °C = ${debyeTemperatureFarenheit.toFixed(
										2
								  )} °F = ${debyeTemperatureKelvin} K` :
                        '----'
                } <
                /span> <
                /li> <
                /ul> <
                /div> <
                div className = 'read-element__props-header read-element__props-header--prevalence' > {
                    t(`string.translate.raspr`)
                } <
                /div> <
                div className = 'read-element__props-wrapper' >
                <
                ul className = 'read-element__props-list' >
                <
                li className = {
                    classNames(prevalence1)
                } >
                <
                span className = 'read-element__props-key' > {
                    `${t(`string.translate.raspr1`)} "${t(`table.element${itemId}.name`)}" ${t(
								`string.translate.na`
							)} `
                } <
                /span> <
                br / >
                <
                span className = 'read-element__props-value'
                dangerouslySetInnerHTML = {
                    getValuesWithHTML(prevalence1, '%')
                }
                /> <
                /li> <
                li className = {
                    classNames(prevalence2)
                } >
                <
                span className = 'read-element__props-key' > {
                    `${t(`string.translate.raspr2`)} "${t(`table.element${itemId}.name`)}" ${t(
								`string.translate.na`
							)} `
                } <
                /span> <
                br / >
                <
                span className = 'read-element__props-value'
                dangerouslySetInnerHTML = {
                    getValuesWithHTML(prevalence2, '%')
                }
                /> <
                /li> <
                li className = {
                    classNames(prevalence3)
                } >
                <
                span className = 'read-element__props-key' > {
                    `${t(`string.translate.raspr3`)} "${t(`table.element${itemId}.name`)}" ${t(
								`string.translate.na`
							)} `
                } <
                /span> <
                br / >
                <
                span className = 'read-element__props-value'
                dangerouslySetInnerHTML = {
                    getValuesWithHTML(prevalence3, '%')
                }
                /> <
                /li> <
                li className = {
                    classNames(prevalence4)
                } >
                <
                span className = 'read-element__props-key' > {
                    `${t(`string.translate.raspr4`)} "${t(`table.element${itemId}.name`)}" ${t(
								`string.translate.na`
							)} `
                } <
                /span> <
                br / >
                <
                span className = 'read-element__props-value'
                dangerouslySetInnerHTML = {
                    getValuesWithHTML(prevalence4, '%')
                }
                /> <
                /li> <
                li className = {
                    classNames(prevalence5)
                } >
                <
                span className = 'read-element__props-key' > {
                    `${t(`string.translate.raspr5`)} "${t(`table.element${itemId}.name`)}" ${t(
								`string.translate.na`
							)} `
                } <
                /span> <
                br / >
                <
                span className = 'read-element__props-value'
                dangerouslySetInnerHTML = {
                    getValuesWithHTML(prevalence5, '%')
                }
                /> <
                /li> <
                li className = {
                    classNames(prevalence6)
                } >
                <
                span className = 'read-element__props-key' > {
                    `${t(`string.translate.raspr6`)} "${t(`table.element${itemId}.name`)}" ${t(
								`string.translate.na`
							)} `
                } <
                /span> <
                br / >
                <
                span className = 'read-element__props-value'
                dangerouslySetInnerHTML = {
                    getValuesWithHTML(prevalence6, '%')
                }
                /> <
                /li> <
                /ul> <
                /div> <
                />
            );
        };

        export default ReadElementProps;
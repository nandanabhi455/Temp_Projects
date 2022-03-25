import {
    isAndroid,
    isIOS
} from 'react-device-detect';
import {
    useTranslation
} from 'react-i18next';

const MobileModal = () => {
    const {
        t
    } = useTranslation();

    const renderContent = () => {
        if (isAndroid) {
            return ( <
                a className = 'mobile__google-play-link'
                href = 'https://play.google.com/store/apps/details?id=mendeleev.redlime&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' >
                <
                img src = {
                    require('../assets/images/google-play.png').default
                }
                alt = 'Google Play' / >
                <
                /a>
            );
        } else if (isIOS) {
            return ( <
                a className = 'mobile__app-store-link'
                href = 'https://apps.apple.com/us/app/periodic-table-2021-chemistry/id1451726577?itsct=apps_box_badge&amp;itscg=30200' >
                <
                img src = {
                    require('../assets/images/appstore.svg').default
                }
                alt = 'Apple Appstore' / >
                <
                /a>
            );
        }
    };

    return ( <
        section className = 'mobile' >
        <
        div className = 'mobile__wrapper' >
        <
        div className = 'mobile__pt-label' >
        <
        img className = 'mobile__app-logo'
        src = {
            require('../assets/images/mobile-icon@1x.png').default
        }
        srcSet = {
            `${require('../assets/images/mobile-icon@2x.png')} 2x`
        }
        alt = ' ' /
        >
        <
        span className = 'mobile__app-name' > {
            t('periodic_table_1')
        } <
        br / > {
            t('periodic_table_2')
        }
        WEB <
        /span> <
        /div> <
        /div> <
        div className = 'mobile__apps' >
        <
        div className = 'mobile__apps-wrapper' >
        <
        h2 className = 'mobile__title' > {
            `${t('periodic_table_1')} ${t(
            'periodic_table_2'
          )} ${new Date().getFullYear()}`
        } < /h2> <
        p className = 'mobile__description' > {
            t('string.translate.mobile_modal1')
        } {
            ' '
        } <
        a href = 'https://periodic-table.tech/'
        className = 'mobile__link' >
        periodic - table.tech <
        /a>{' '} {
            t('string.translate.mobile_modal2')
        } <
        /p> <
        p className = 'mobile__description' > {
            t('string.translate.mobile_modal3')
        } < /p> <
        div className = 'mobile__store-links' > {
            renderContent()
        } < /div> <
        /div> <
        /div> <
        /section>
    );
};

export default MobileModal;
import i18next from 'i18next';
import {
    useTranslation
} from 'react-i18next';

const LanguageSelectModal = ({
    onClick
}) => {
    const changeLanguage = lng => {
        i18next.changeLanguage(lng);
    };

    const {
        t
    } = useTranslation();

    return ( <
        >
        <
        section className = 'language-select' >
        <
        div className = 'language-select__background'
        onClick = {
            onClick
        }
        /> <
        div className = 'language-select__modal' >
        <
        div className = 'language-select__header' >
        <
        h2 className = 'language-select__title' > {
            t('string.translate.pref_lang_name')
        } < /h2> <
        button className = 'language-select__close-button'
        onClick = {
            onClick
        }
        /> <
        /div> <
        ul className = 'language-select__list' >
        <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('en');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--en' >
        EN <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > English < /span> <
        span className = 'language-select__original-name' > English < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('de');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--de' >
        DE <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > German < /span> <
        span className = 'language-select__original-name' > Deutsche < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('ko');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--ko' >
        KO <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Korean < /span> <
        span className = 'language-select__original-name' > 한국어 < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('pt_BR');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--pt-br' >
        PT <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Portuguese Brazil < /span> <
        span className = 'language-select__original-name' > Português Brasil < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('pt_PT');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--pt-pt' >
        PT <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Portuguese < /span> <
        span className = 'language-select__original-name' > Português < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('ru');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--ru' >
        RU <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Russian < /span> <
        span className = 'language-select__original-name' > Русский < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('es');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--es' >
        ES <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Spanish < /span> <
        span className = 'language-select__original-name' > Español < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('hi');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--hi' >
        HI <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Hindi < /span> <
        span className = 'language-select__original-name' > हिंदी < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('zh_CN');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--zh-cn' >
        ZH <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Chinese Simplified < /span> <
        span className = 'language-select__original-name' > 简体中文 < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('zh_TW');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--zh-tw' >
        ZH <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Chinese Traditional < /span> <
        span className = 'language-select__original-name' > 中国传统的 < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('be');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--be' >
        BE <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Belorussian < /span> <
        span className = 'language-select__original-name' > Беларускі < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('cs');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--cs' >
        CS <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Czech < /span> <
        span className = 'language-select__original-name' > čeština < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('fil');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--fil' >
        FIL <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Filipino < /span> <
        span className = 'language-select__original-name' > Filipino < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('fr');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--fr' >
        FR <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > French < /span> <
        span className = 'language-select__original-name' > Française < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('it');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--it' >
        IT <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Italian < /span> <
        span className = 'language-select__original-name' > Italiano < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('ja');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--ja' >
        JA <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Japanese < /span> <
        span className = 'language-select__original-name' > 日本 < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('kk');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--kk' >
        KK <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Kazakh < /span> <
        span className = 'language-select__original-name' > Қазақша < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('pl');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--pl' >
        PL <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Polish < /span> <
        span className = 'language-select__original-name' > Polski < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('th');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--th' >
        TH <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Thai < /span> <
        span className = 'language-select__original-name' > ไทย < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('tr');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--tr' >
        TR <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Turkish < /span> <
        span className = 'language-select__original-name' > Türk < /span> <
        /div> <
        /li> <
        li className = 'language-select__language-item'
        onClick = {
            () => {
                changeLanguage('uk');
                onClick();
            }
        } >
        <
        span className = 'language-select__language-symbol language-select__language-symbol--uk' >
        UK <
        /span> <
        div className = 'language-select__name-wrapper' >
        <
        span className = 'language-select__english-name' > Ukrainian < /span> <
        span className = 'language-select__original-name' > Український < /span> <
        /div> <
        /li> <
        /ul> <
        /div> <
        /section> <
        />
    );
};

export default LanguageSelectModal;
import {
    useTranslation
} from 'react-i18next';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
import {
    Helmet
} from 'react-helmet';
import MainMenu from './MainMenu';
import PeriodicTable from './PeriodicTable';
import MobileModal from '../pages/MobileModal.js';
import ReadElementPage from '../pages/ReadElementPage.js';
import SearchPage from '../pages/SearchPage.js';
import ElementListPage from '../pages/ElementListPage.js';
import {
    useEffect,
    useState
} from 'react';
import LanguageSelectModal from './LanguageSelectModal';
import {
    isBrowser,
    isMobile,
    isIPad13
} from 'react-device-detect';
import i18next from 'i18next';
import {
    YMInitializer
} from 'react-yandex-metrika';
import ReactGA from 'react-ga';
import TablesPage from '../pages/TablesPage.js';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import Table4 from './Table4';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage.js';
import PrivacyPolicyIosPage from '../pages/PrivacyPolicyIosPage.js';

const App = () => {
        useEffect(() => {
            ReactGA.initialize('UA-197143464-1');
            ReactGA.pageview(window.location.pathname + window.location.search);
        }, []);

        const {
            t
        } = useTranslation();
        const [languageSelect, setLanguageSelect] = useState(false);
        const openLangSelectModal = () => {
            setLanguageSelect(!languageSelect);
        };

        const renderContent = () => {
                if (isMobile || isIPad13) {
                    return ( <
                        > {
                            window.location.pathname !== '/privacy-policy' && window.location.pathname !== '/privacy-policy-ios' ?
                            <
                            MobileModal / > : null
                        } <
                        Router >
                        <
                        Switch >
                        <
                        Route path = '/privacy-policy'
                        exact render = {
                            () => < PrivacyPolicyPage / >
                        }
                        /> <
                        Route path = '/privacy-policy-ios'
                        exact render = {
                            () => < PrivacyPolicyIosPage / >
                        }
                        /> <
                        /Switch> <
                        /Router> <
                        />
                    );
                } else if (isBrowser) {
                    return ( <
                        >
                        <
                        Helmet >
                        <
                        html lang = {
                            i18next.language.toUpperCase()
                        }
                        /> <
                        title > {
                            `${t('string.translate.name_ab')} ${new Date().getFullYear()}`
                        } < /title> <
                        /Helmet> <
                        YMInitializer accounts = {
                            [62339872]
                        }
                        options = {
                            {
                                webvisor: true,
                                clickmap: true,
                                trackLinks: true,
                                accurateTrackBounce: true
                            }
                        }
                        version = '2' /
                        >
                        <
                        Router > {
                            window.location.pathname !== '/privacy-policy' && window.location.pathname !== '/privacy-policy-ios' ?
                            <
                            section className = 'page-main' >
                            <
                            MainMenu onClick = {
                                openLangSelectModal
                            }
                            /> <
                            div className = 'page-main__wrapper' >
                            <
                            a href = '/'
                            className = 'page-main__title' > {
                                t('periodic_table_1')
                            } <
                            br / > {
                                t('periodic_table_2')
                            } <
                            /a> <
                            PeriodicTable / >
                            <
                            /div> <
                            /section> : null} <
                            Switch >
                            <
                            Route
                            path = '/element/:id'
                            render = {
                                ({
                                    match
                                }) => {
                                    const {
                                        id
                                    } = match.params;
                                    return <ReadElementPage itemId = {
                                        id
                                    }
                                    />;
                                }
                            }
                            /> <
                            Route path = '/privacy-policy'
                            exact render = {
                                () => < PrivacyPolicyPage / >
                            }
                            /> <
                            Route path = '/privacy-policy-ios'
                            exact render = {
                                () => < PrivacyPolicyIosPage / >
                            }
                            /> <
                            Route path = '/search'
                            component = {
                                SearchPage
                            }
                            /> <
                            Route path = '/element-list'
                            component = {
                                ElementListPage
                            }
                            /> <
                            Route path = '/tables'
                            exact component = {
                                TablesPage
                            }
                            /> <
                            Route path = '/tables/table-1'
                            component = {
                                Table1
                            }
                            /> <
                            Route path = '/tables/table-2'
                            component = {
                                Table2
                            }
                            /> <
                            Route path = '/tables/table-3'
                            component = {
                                Table3
                            }
                            /> <
                            Route path = '/tables/table-4'
                            component = {
                                Table4
                            }
                            /> <
                            /Switch> <
                            /Router> {
                                languageSelect ? < LanguageSelectModal onClick = {
                                    openLangSelectModal
                                }
                                /> : null} <
                                />
                            );
                        }
                    };

                    return < > {
                        renderContent()
                    } < />;
                };

                export default App;
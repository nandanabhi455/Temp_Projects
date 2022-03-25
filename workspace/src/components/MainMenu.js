 import {
     Link
 } from 'react-router-dom';
 import i18next from 'i18next';
 import {
     useTranslation
 } from 'react-i18next';

 const MainMenu = ({
     onClick
 }) => {
     const {
         t
     } = useTranslation();

     return ( <
         aside className = 'main-menu' >
         <
         b className = 'main-menu__logo' > Pt < /b> <
         nav className = 'main-menu__navigation navigation' >
         <
         ul className = 'navigation__list' >
         <
         li className = 'navigation__item' >
         <
         Link to = '/search'
         className = 'navigation__link navigation__link--search' > {
             t('string.translate.menu_tab2')
         } <
         /Link> <
         /li> <
         li className = 'navigation__item' >
         <
         Link to = '/element-list'
         className = 'navigation__link navigation__link--list' > {
             t('string.translate.menu_tab3')
         } <
         /Link> <
         /li> <
         li className = 'navigation__item' >
         <
         Link to = '/tables'
         className = 'navigation__link navigation__link--tables' > {
             t('string.translate.menu_tab4')
         } <
         /Link> <
         /li> <
         li className = 'navigation__item navigation__item--language' >
         <
         button className = 'navigation__language-btn'
         onClick = {
             onClick
         } > {
             i18next.language.toUpperCase().replace('_', '-')
         } <
         /button> <
         /li> <
         /ul> <
         /nav> <
         /aside>
     );
 };

 export default MainMenu;
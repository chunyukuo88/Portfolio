import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateLanguage } from './languageSlice';
import strings from '../../common/strings.js';

function Language() {
  const language = useSelector((state) => state.language.value);
  const dispatch = useDispatch();

  const languageToggler = (currentLanguage) => {
    switch (currentLanguage) {
      case 'english': return 'chinese';
      case 'chinese': return 'russian';
      case 'russian': return 'english';
      default: return 'chinese';
    };
  };

  const clickHandler = () => {
    const newLang = languageToggler(language);
    return dispatch(updateLanguage(newLang));
  };

  return (
    <button onClick={clickHandler}>
      {strings.language[language]}
    </button>
  );
}

export default Language;

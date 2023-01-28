import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateLanguage } from './languageSlice';

function Language() {
  const lang = useSelector((state) => state.language.value);
  const dispatch = useDispatch();

  const languageToggler = (language) => {
    switch (language) {
      case 'english': return 'chinese';
      case 'chinese': return 'russian';
      case 'russian': return 'english';
      default: return 'chinese';
    }
  };

  const clickHandler = () => {
    const newLang = languageToggler(lang);
    return dispatch(updateLanguage(newLang));
  };

  return (
    <button onClick={clickHandler}>
      {lang}
    </button>
  );
}

export default Language;
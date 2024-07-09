import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../app/store';
import {setWebSettings} from '../webSettingsSlice';
import { WebSettings } from '../../../types/venue';

export const useWebSettings = () => {
  const dispatch = useDispatch();
  const webSettings = useSelector((state: RootState) => state.webSettings);

  const handleSetWebSettings = (settings: WebSettings) => {
    dispatch(setWebSettings(settings));
  };

  return {
    webSettings,
    handleSetWebSettings
  }
}
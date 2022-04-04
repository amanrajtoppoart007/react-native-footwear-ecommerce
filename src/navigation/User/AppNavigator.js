import React, {useEffect} from 'react';
import {setTokenAction} from '../../slices/Auth.slice';
import {useDispatch, useSelector} from 'react-redux';
import {getToken} from '../../services/storage';
import AuthNavigator from '../AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavigator = () => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state?.auth);

  useEffect(() => {
    if (!token) {
      (async () => {
        const localToken = await getToken();
        if (localToken && localToken.length > 0) {
          dispatch(setTokenAction(localToken));
        }
      })();
    }
  }, [dispatch, token]);
  return token ? <DrawerNavigator /> : <AuthNavigator />;
};

export default AppNavigator;

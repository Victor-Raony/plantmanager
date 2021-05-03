import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';

const stackeRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackeRoutes.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>

    <stackeRoutes.Screen name="Welcome" component={Welcome} />
    <stackeRoutes.Screen name="UserIdentification" component={UserIdentification} />
    <stackeRoutes.Screen name="Confirmation" component={Confirmation} />
    <stackeRoutes.Screen name="PlantSelect" component={PlantSelect} />


  </stackeRoutes.Navigator>
)

export default AppRoutes;
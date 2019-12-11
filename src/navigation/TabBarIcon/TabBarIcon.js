import React from 'react'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function TabBarIcon({ tintColor, routeName }) {
	if (routeName === 'Spendings') {
		return <FontAwesome5 name={'money-check-alt'} size={30} color={tintColor}/>
	} else if (routeName === 'Challenges') {
		return <MaterialCommunityIcons name={'playlist-star'} size={45} color={tintColor} style={{ marginLeft: 3 }}/>
	} else if (routeName === 'Wishlist') {
		return <Octicons name={'checklist'} size={30} color={tintColor} style={{ marginLeft: 8 }}/>
	}

	return <AntDesign name={'user'} size={35} color={tintColor}/>
}

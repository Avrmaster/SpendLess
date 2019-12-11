import Icon from 'web-modules/react-web-vector-icons'
import React from 'react'

export default function TabBarIcon({ tintColor, routeName }) {

	if (routeName === 'Spendings') {
		return <Icon font='FontAwesome' name={'money'} size={30} color={tintColor}/>
	} else if (routeName === 'Challenges') {
		return <Icon font='MaterialCommunityIcons' name={'playlist-check'} size={45} color={tintColor}
		             style={{ marginLeft: 3 }}/>
	} else if (routeName === 'Wishlist') {
		return <Icon font='Octicons' name={'checklist'} size={30} color={tintColor} style={{ marginLeft: 8 }}/>
	}

	return <Icon font='AntDesign' name={'user'} size={35} color={tintColor}/>
}

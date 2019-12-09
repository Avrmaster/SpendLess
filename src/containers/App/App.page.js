import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'
import React from 'react'

// import RootContainer from 'containers/App/RootContainer'
import InitScreen from 'containers/InitScreen'
import createStore from 'reducers'

export const { store, persistor } = createStore()

class AppPage extends React.Component {

	state = {
		initAnimFinished: false,
	}

	onFinished = () => {
		this.setState({ initAnimFinished: true })
	}

	render() {

		return (
			<InitScreen
				onAnimationFinished={this.onFinished}
				loadingFinished={true}
			/>
		)

		// return (
		// 	<Provider store={store}>
		// 		<PersistGate
		// 			loading={
		// 				<InitScreen
		// 					onAnimationFinished={this.onFinished}
		// 					loadingFinished={false}
		// 				/>
		// 			}
		// 			persistor={persistor}
		// 		>
		// 			{
		// 				this.state.initAnimFinished
		// 					? <RootContainer/>
		// 					: <InitScreen
		// 						onAnimationFinished={this.onFinished}
		// 						loadingFinished={true}
		// 					/>
		// 			}
		// 		</PersistGate>
		// 	</Provider>
		// )
	}
}

export default AppPage

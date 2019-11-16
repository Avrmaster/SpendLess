import { ScrollView, RefreshControl, View, TouchableOpacity } from 'react-native'
import * as PropTypes from 'prop-types'
import React from 'react'

import { createNavigation } from 'navigation/NavigationStructure'
import ChallengeBrief from 'components/ChallengeBrief'
import Header from 'components/Header'
import Colors from '../../themes/Colors'
import LineError from '../../components/LineError/LineError.component'

export default class ChallengesTab extends React.Component {
	toDetails = createNavigation(this, 'details')

	componentDidMount(): void {
		this.props.getChallenges()
	}

	render() {
		const {
			challenges,
			challengesFetching,
			challengesError,
		} = this.props

		return (
			<View style={{ flex: 1, backgroundColor: Colors.background }}>
				<Header
					title={'Available challenges'}
					style={{
						backgroundColor: Colors.main,
					}}
				/>
				<LineError
					error={challengesError}
				/>
				<ScrollView
					style={{
						flex: 1,
						padding: 10,
					}}
					refreshControl={
						<RefreshControl
							refreshing={challengesFetching}
							onRefresh={this.props.getChallenges}
						/>
					}
				>
					{
						challenges
							.map(challenge => (
								<ChallengeBrief
									key={challenge.id}
									onPress={() => this.toDetails({ challenge })}
									challenge={challenge}
								/>
							))
					}
				</ScrollView>
			</View>
		)
	}
}

ChallengesTab.propTypes = {
	challenges: PropTypes.array.isRequired,
	challengesFetching: PropTypes.bool.isRequired,
	challengesError: PropTypes.any,

	getChallenges: PropTypes.func.isRequired,
}

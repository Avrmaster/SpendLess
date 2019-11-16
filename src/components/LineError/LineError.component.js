import React, { PureComponent } from 'react'
import * as PropTypes from 'prop-types'

import {
	ErrorText,
} from './LineError.styles'

/** @return {string} */
export function extractErrorMessage(err) {
	try {
		return JSON.parse(err.response.text).message || err.toString()
	} catch (_) {
		return err ? err.toString() : ''
	}
}

export default class LineError extends PureComponent {
	static propTypes = {
		error: PropTypes.any,
	}

	render() {
		const { error: err } = this.props
		return (
			err && (
				<ErrorText {...this.props}>
					{extractErrorMessage(err)}
				</ErrorText>
			)
		)
	}
}

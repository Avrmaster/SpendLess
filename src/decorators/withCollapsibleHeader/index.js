import { Animated, View } from 'react-native'
import React from 'react'

export default (Screen, HeaderToCollapse, StaticHeader, minHeight, maxHeight) => {
  const heightDiff = maxHeight - minHeight

  return class CollapsibleHeader extends React.Component {
    state = {
      scrollY: new Animated.Value(0),
      viewHeight: 0,
    }

    render() {
      return <View
        style={{ flex: 1 }}
        onLayout={({ nativeEvent }) => {
          this.setState({ viewHeight: nativeEvent.layout.height })
        }}
      >
        <Animated.View style={{
          transform: [{
            translateY: this.state.scrollY.interpolate({
              inputRange: [0, heightDiff],
              outputRange: [0, -heightDiff],
              extrapolate: 'clamp',
            }),
          }],
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: maxHeight,
          zIndex: 1,
        }}>
          <HeaderToCollapse
            {...this.props}
            collapsingValue={this.state.scrollY.interpolate({
              inputRange: [0, heightDiff],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            })}
          />
        </Animated.View>
        {
          StaticHeader && <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 2,
            }}
          >
            <StaticHeader {...this.props} />
          </View>
        }
        <Screen
          {...this.props}
          snapToEnd={false}
          snapToOffsets={[heightDiff]}
          contentContainerStyle={{
            paddingTop: maxHeight,
            // to compensate small content with additional padding when collapsing the header
            minHeight: this.state.viewHeight + heightDiff,
          }}
          onScroll={Animated.event(
            [{
              nativeEvent: {
                contentOffset: {
                  y: this.state.scrollY,
                },
              },
            }])}
          scrollEventThrottle={8}
        />
      </View>
    }
  }
}

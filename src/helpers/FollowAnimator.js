import { Animated } from 'react-native'

/**
 * @typedef CreateAnimConfig
 * @property {number} initValue
 * @property {Animated.Value} initAnimatedValue
 * @property {number} overshootClamping
 * @property {number} mass
 *
 * @param config {CreateAnimConfig}
 * @param goalGenerator {Function}
 */
export default function createFollowAnimation(config = {}, goalGenerator = null) {
  const initValue = config.initValue || 0

  const current = config.initAnimatedValue || new Animated.Value(initValue)
  const goal = new Animated.Value(initValue)

  const animation = Animated.spring(current, {
    toValue: (goalGenerator && (goalGenerator(goal))) || goal,
    useNativeDriver: true,
    isInteraction: false,
    overshootClamping: true,
    ...(config: any),
  })
  animation.start()

  return {
    /**
     * @returns {AnimatedValue}
     * */
    getCurrent: () => current,
    getGoal: () => goal,
    setGoal: (val) => goal.setValue(val),
    stop: () => animation.stop(),
  }
}

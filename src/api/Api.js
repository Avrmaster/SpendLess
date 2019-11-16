import ApiClient from './ApiClient'

const clientApi = new ApiClient()

export const getChallenges = userId => clientApi.app_challenges_get_all({ fromUser: { id: userId } })
export const applyChallenge = (userId, challengeId, wishId) => clientApi.app_challenges_apply({
	fromUser: { id: userId, wishlist_id: wishId },
	challengeId,
})
export const unappplyChallenge = (userId, challengeId) => clientApi.app_challenges_unapply({
	fromUser: { id: userId },
	challengeId,
})
export const getWishList = userId => clientApi.app_wishlist_get_all({ fromUser: { id: userId } })
export const getSpendings = userId => clientApi.app_items_get_all({ fromUser: { id: userId } })

export const createWishItem = (userId, name, price, photo_url) =>
	clientApi.app_wishlist_create({
		wishlistItem: {
			user_fk: userId,
			name: name,
			price: +price,
			photo_url: photo_url,
			amount: 1,
		},
	})

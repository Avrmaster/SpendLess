import ApiClient from './ApiClient'

const clientApi = new ApiClient()

export const getChallenges = userId => clientApi.app_challenges_get_all({fromUser: {id: userId}})
export const applyChallenge = (userId, challengeId, wishId) => clientApi.app_challenges_apply({
  fromUser: {id: userId, wishlist_id: wishId},
  challengeId,
})
export const unappplyChallenge = (userId, challengeId) => clientApi.app_challenges_unapply({
  fromUser: {id: userId},
  challengeId,
})
export const getWishList = userId => clientApi.app_wishlist_get_all({fromUser: {id: userId}})
export const getSpendings = userId => clientApi.app_items_get_all({fromUser: {id: userId}})
export const getSubcategories = () => clientApi.app_subcategories_get_all({})

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

export const deleteWishListItem = (itemId) => clientApi.app_wishlist_delete({itemId: itemId})

export const createSpendItem = (item) => clientApi.app_items_create({item})

export const getPieChart = userId => clientApi.app_charts_get_pie_chart_data({fromUser: {id: userId}})
export const getCategoryChart = (userId, categoryId) => clientApi.app_charts_get_line_chart_data({
  fromUser: {
    id: userId,
    category_id: categoryId,
  },
})

export const getSubCategoryChart = (userId, subCategoryId) => clientApi.app_charts_get_line_chart_data({
  fromUser: {
    id: userId,
    sub_category_id: subCategoryId,
  },
})

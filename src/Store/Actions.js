export const showDetails = (id) => {
    return {
        type: "SHOW_DETAILS",
        id: id,
    }
}
export const addToCart = (crtid) => {
    return {
        type: "ADD_TO_CART",
        cartId: crtid,
    }
}
export const modalOpen = (mdlId) => {
    return {
        type: "OPEN_MODAL",
        id: mdlId
    }
}
export const closeModal = () => {
    return {
        type: "CLOSE_MODAL",
    }
}

export const quantityInc = (id) => {
    console.log(id)
    return {
        type: "QUANTITY_INC",
        id: id
    }
}
export const quantityDec = (id) => {
    console.log(id)
    return {
        type: "QUANTITY_DEC",
        id: id
    }
}
export const clearCart = () => {
    return {
        type: "CLEAR_CART",
    }
}
export const removeProduct = (id) => {
    return {
        type: "REMOVE_PRODUCT",
        id: id
    }
}
export const productPurchased = () => {
    return {
        type: "PRODUCT_PURCHASED",
    }
}







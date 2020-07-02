import { storeProducts, detailProduct } from '../data'

const initialstate = {
    storeProd: storeProducts,
    detailProd: detailProduct,
    cart: [],
    modal: false,
    modalProduct: detailProduct,
    subTotal: 0,
    totalTax: 0,
    finalPrice: 0
}

const Reducer = (state = initialstate, action) => {
    console.log(state)
    const findProduct = (id) => {
        const product = state.storeProd.find(item => item.id === id)
        return product
    }
    const findCartProduct = (id) => {
        const product = state.cart.find(item => item.id === id)
        return product
    }

    switch (action.type) {
        case "SHOW_DETAILS":
            return {
                ...state,
                detailProd: findProduct(action.id)

            }
        case "ADD_TO_CART":
            let tempProd = [...state.storeProd]
            const index = tempProd.indexOf(findProduct(action.cartId))
            const crtProduct = tempProd[index]
            if (crtProduct.itemPurchased < 10) {
                crtProduct.inCart = true
                crtProduct.count = 1
                const price = crtProduct.price
                crtProduct.total = price
                crtProduct.itemPurchased += 1
                var prodTotal = state.subTotal + crtProduct.price
            }
            return {
                ...state,
                ...state.storeProd,
                ...state.modalProduct,
                ...state.subTotal,
                ...state.finalPrice,
                storeProd: tempProd,
                cart: [...state.cart, crtProduct],
                subTotal: prodTotal,
                totalTax: (prodTotal * 0.1).toFixed(2),
                ...state.totalTax,
                finalPrice: (prodTotal * 0.1) + prodTotal
            }
        case "OPEN_MODAL":
            let modalPrd = findProduct(action.id);
            const prce = modalPrd.price
            modalPrd.total = prce
            return {
                ...state,
                modalProduct: modalPrd,
                modal: true
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                modal: false
            }
        case "QUANTITY_INC":
            let crtInc = [...state.cart]
            let incProdInd = crtInc.indexOf(findCartProduct(action.id));
            let incProd = crtInc[incProdInd]
            let incSubTotal
            let tempTax
            if (incProd.stock > 0) {
                let count = incProd.count;
                incProd.count = count + 1;
                incProd.total += incProd.price;
                incProd.itemPurchased += 1;
                incSubTotal = state.subTotal + incProd.price
                tempTax = (incSubTotal * 0.1).toFixed(2)
            }
            return {
                ...state,
                ...state.subTotal,
                ...state.totalTax,
                cart: [...crtInc],
                subTotal: incSubTotal,
                totalTax: tempTax,
                finalPrice: incSubTotal + (incSubTotal * 0.1)


            }
        case "QUANTITY_DEC":
            let crtDec = [...state.cart]
            let decProdInd = crtDec.indexOf(findCartProduct(action.id));
            let decProd = crtDec[decProdInd]
            let decSubTotal
            let decTax
            if (decProd.count !== decProd.itemPurchased) {
                decProd.count = decProd.count - 1;
                decProd.total -= decProd.price
                decProd.itemPurchased -= 1
                decSubTotal = state.subTotal - decProd.price
                decTax = (decSubTotal * 0.1).toFixed(2)


            }
            return {
                ...state,
                ...state.totalTax,
                ...state.subTotal,
                cart: [...crtDec],
                subTotal: decSubTotal,
                totalTax: decTax,
                finalPrice: decSubTotal + (decSubTotal * 0.1)



            }
        case "CLEAR_CART":
            state.storeProd.map(prod => {
                return (
                    prod.inCart = false,
                    prod.total = 0,
                    prod.itemPurchased = 0
                )
            })
            return {
                ...state,
                ...state.cart,
                ...state.storeProd,
                cart: [],
                storeProd: storeProducts,
                subTotal: 0,
                totalTax: 0,
                finalPrice: 0

            }
        case "PRODUCT_PURCHASED":
            state.storeProd.map(prod => {
                return (
                    prod.inCart = false,
                    prod.total = 0
                )
            })
            return {
                ...state,
                ...state.cart,
                ...state.storeProd,
                cart: [],
                storeProd: storeProducts,
                subTotal: 0,
                totalTax: 0,
                finalPrice: 0

            }
        case "REMOVE_PRODUCT":
            const updatedCart = state.cart.filter(prod => prod.id !== action.id)
            console.log(updatedCart)
            let rmv = [...state.storeProd]
            let rmvind = rmv.indexOf(findProduct(action.id))
            let rmvprod = rmv[rmvind]
            rmvprod.inCart = false
            rmvprod.count = 0
            state.subTotal -= rmvprod.total
            rmvprod.total = 0
            return {
                ...state,
                ...state.cart,
                ...state.subTotal,
                cart: updatedCart,
                storeProd: rmv
            }
        default:
            return state;
    }
}
export default Reducer



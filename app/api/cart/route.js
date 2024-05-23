export const dynamic = 'force-dynamic'
import { cartModel } from '@/backend/models/cart-model'
import { userModel } from '@/backend/models/user-model'
import connectMongo from '@/backend/services/connectMongo'

export async function POST(request) {
  try {
    await connectMongo()
    const body = await request.json()
    // console.log(body)

    const email = body?.email
    const productId = body?.productId
    const quantity = body?.quantity

    const user = await userModel.findOne({ email: email })
    let cart = await cartModel.findOne({ user: user?._id })
    // console.log('user', user)

    if (cart) {
      // if cart item exist the user
      let itemIndex = cart.cartItems.findIndex((p) => p.product == productId)

      if (itemIndex > -1) {
        // if already product in cart, then update quantity
        let productItem = cart.cartItems[itemIndex]
        productItem.quantity = quantity
        cart.cartItems[itemIndex] = productItem
      } else {
        // if product does'n in cart, then add new product
        cart.cartItems.push({ product: productId, quantity: quantity })
      }
      cart = await cart.save()
      return Response.json({
        status: 200,
        success: true,
        data: cart,
        message: 'Cart updated successfully',
      })
    } else {
      // if cart have'n product the user, create new cart
      const newCart = await cartModel.create({
        user: user?._id,
        cartItems: [{ product: productId, quantity: quantity }],
      })
      return Response.json({
        status: 200,
        success: true,
        data: newCart,
        message: 'Product added successfully',
      })
    }
  } catch (err) {
    console.error(err)
    return Response.json({
      success: false,
      status: 500,
      message: 'Internal Server Error',
      data: null,
    })
  }
}

export async function GET(request) {
  try {
    await connectMongo()

    const searchParams = request.nextUrl.searchParams
    // console.log('route', searchParams)
    const email = searchParams.get('email')
    const user = await userModel.findOne({ email: email })
    const cart = await cartModel
      .findOne({ user: user?._id })
      .populate('cartItems')
      .populate('cartItems.product')

    const data = cart.cartItems.map((item) => ({
      title: item?.product?.title,
      sku: item?.product?.sku,
      price: item?.product?.price,
      category: item?.product?.category,
      quantity: item?.quantity,
      images: item?.images
    }))

    return Response.json({
      status: 200,
      success: true,
      data: data,
      message: 'Cart fetched successfully',
    })
  } catch (err) {
    console.error(err)
    return Response.json({
      success: false,
      status: 500,
      message: 'Cart fetched Error',
      data: null,
    })
  }
}

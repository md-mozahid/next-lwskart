export const dynamic = 'force-dynamic'
import { userModel } from '@/backend/models/user-model'
import { wishlistModel } from '@/backend/models/wishlist-model'
import connectMongo from '@/backend/services/connectMongo'

export async function POST(request) {
  try {
    await connectMongo()
    const body = await request.json()
    // console.log("wishlistBody", body);
    const email = body?.email
    const productId = body?.productId
    // const quantity = body?.quantity;

    const user = await userModel.findOne({ email: email })
    let wishlist = await wishlistModel.findOne({ user: user?._id })

    if (wishlist) {
      // if wishlist item exist the user
      let itemIndex = wishlist.wishlistItems.findIndex(
        (w) => w.product == productId
      )

      if (itemIndex > -1) {
        // if already product in wishlist,
        let productItem = wishlist.wishlistItems[itemIndex]
        // productItem.quantity = quantity;
        wishlist.wishlistItems[itemIndex] = productItem
      } else {
        // if product does'n in wishlist, then add new product
        wishlist.wishlistItems.push({ product: productId })
      }
      //   save the wishlist
      wishlist = await wishlist.save()
      return Response.json({
        status: 200,
        success: true,
        data: wishlist,
        message: 'Wishlist added successfully',
      })
    } else {
      // if wishlist have'n product the user, create new
      const newWishlist = await wishlistModel.create({
        user: user?._id,
        wishlistItems: [{ product: productId }],
      })
      return Response.json({
        status: 200,
        success: true,
        data: newWishlist,
        message: 'Product added to wishlist',
      })
    }
  } catch (error) {
    console.error(error)
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
    const email = searchParams.get('email')
    const user = await userModel.findOne({ email: email })
    const wishlist = await wishlistModel
      .findOne({ user: user?._id })
      .populate('wishlistItems')
      .populate('wishlistItems.product')

    const data = wishlist?.wishlistItems.map((item) => ({
      id: item?.product?.id,
      title: item?.product?.title,
      price: item?.product?.price,
      category: item?.product?.category,
      stock: item?.product?.stock,
      soldCounts: item?.product?.soldCounts,
      thumbnail: item?.product?.thumbnail,
    }))
    return Response.json({
      status: 200,
      success: true,
      data: data,
      message: 'Wishlist fetched successfully',
    })
  } catch (error) {
    console.error(error)
    return Response.json({
      success: false,
      status: 500,
      message: 'Wishlist fetched Error',
      data: null,
    })
  }
}

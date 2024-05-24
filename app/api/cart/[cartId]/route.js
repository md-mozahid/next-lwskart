export const dynamic = 'force-dynamic'
import { getCartItems } from '@/app/actions'
import { auth } from '@/auth'

export async function DELETE(request, { params: { cartId } }) {
  const session = await auth()
  const cartItems = await getCartItems(session?.user?.email)
  const cartIndex = cartItems.findIndex((cart) => cart._id === cartId)

  const cartToDelete = cartItems[cartIndex]
  console.log('cartToDelete', cartToDelete)
  cartItems.splice(cartIndex, 1)

  return Response.json(cartToDelete)
}

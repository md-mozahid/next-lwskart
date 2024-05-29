import { auth } from '@/auth'
import { removeCartItem } from '@/backend/database/queries'
import { modifyCartData } from '@/utils/modifyCartData'
import { NextResponse } from 'next/server'

export async function DELETE(request) {
  const session = await auth()
  const user = session?.user
  const userId = user?.id || ''
  const { productId } = await request.json()

  try {
    const res = await removeCartItem(userId, productId)
console.log(userId, productId)
    if (res.status === 404) {
      return new NextResponse(res.error, {
        status: 404,
        statusText: res.error,
      })
    }

    const resData = modifyCartData(res?.data?.cartItems || [])
    return Response.json(resData)
  } catch (err) {
    return new NextResponse('Internal server error', {
      status: 500,
      statusText: 'Internal server error',
    })
  }
}

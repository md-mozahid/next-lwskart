import connectMongo from '@/backend/services/connectMongo'

export async function POST(request) {
  try {
    await connectMongo()
    const body = await request.json()

    const user = body?.user
    const address = body?.address
    const totalAmount = body?.totalAmount
    const items = body?.items
    const paymentStatus = body?.paymentStatus
    const orderStatus = body?.orderStatus
    const isCompleted = body?.isCompleted

    // create a new order
    const order = new Order({
      user,
      address,
      totalAmount,
      items,
      paymentStatus,
      orderStatus,
      isCompleted,
    })

    // Save the new order
    const savedOrder = await order.save()

    return Response.json({
      success: true,
      status: 200,
      message: 'Order added successfully',
      data: savedOrder,
    })
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

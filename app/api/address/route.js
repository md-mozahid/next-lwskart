export const dynamic = 'force-dynamic'
import { addressModel } from '@/backend/models/address-model'
import { userModel } from '@/backend/models/user-model'
import connectMongo from '@/backend/services/connectMongo'

export async function POST(request) {
  try {
    await connectMongo()
    const body = await request.json()
    // console.log('body', body)
    const email = body?.email
    const title = body.title
    const contact = body.contact
    const postalCode = body.postalCode
    const address = body.address
    const houseName = body.houseName
    const addressType = body.addressType

    const userInfo = await userModel.findOne({ email: email })
    const user = userInfo._id

    // Find the user's address document
    let userAddress = await addressModel.findOne({ user: userInfo._id })

    // If the user doesn't have an address document, create a new address
    if (!userAddress) {
      userAddress = new addressModel({ user, address: [] })
    }

    //  if address type already exists
    const existingAddressIndex = userAddress.address.findIndex(
      (addr) => addr.addressType === addressType
    )

    if (existingAddressIndex !== -1) {
      // If it does, update the existing address
      userAddress.address[existingAddressIndex] = {
        title,
        contact,
        postalCode,
        address,
        houseName,
        addressType,
      }
    } else {
      // If it doesn't, add a new address
      userAddress.address.push({
        title,
        contact,
        postalCode,
        address,
        houseName,
        addressType,
      })
    }

    // Save the updated address document
    const savedAddress = await userAddress.save()

    return Response.json({
      success: true,
      status: 200,
      message: 'Address added/updated successfully',
      data: savedAddress,
    })
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

// post request
export async function GET(request) {
  try {
    await connectMongo()
    const searchParams = request.nextUrl.searchParams
    const email = searchParams.get('email')

    const user = await userModel.findOne({ email: email }).exec()

    if (!user) {
      return Response.json({
        success: false,
        status: 404,
        message: 'User not found',
        data: null,
      })
    }

    const address = await addressModel.findOne({ user: user._id }).exec()

    if (!address) {
      return Response.json({
        success: false,
        status: 404,
        message: 'No address found',
        data: null,
      })
    } else {
      return Response.json({
        success: true,
        status: 200,
        message: 'Address found',
        data: address?.address,
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

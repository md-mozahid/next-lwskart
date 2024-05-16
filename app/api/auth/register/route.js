import { userModel } from '@/models/user-model'
import connectMongo from '@/services/connectMongo'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export const POST = async (request) => {
  const { name, email, password, confirm } = await request.json()
  //   console.log(fname, lname, email, password)
  await connectMongo()
  const hashedPassword = await bcrypt.hash(password, 5)

  const newUser = {
    name,
    email,
    password: hashedPassword,
    confirm: hashedPassword,
  }
  //   console.log(newUser)

  try {
    await userModel.create(newUser)
    return new NextResponse('User has been create successful', { status: 201 })
  } catch (err) {
    return new NextResponse(err.message, { status: 500 })
  }
}

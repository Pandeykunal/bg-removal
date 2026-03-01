import { Webhook } from "svix"
import userModel from '../models/userModel.js'


// API Controller Function to manage Clerk user with database
// http://localhost:4000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        // When using express.raw(), body is a Buffer - convert to string
        const bodyString = req.body.toString()
        
        const payload = whook.verify(bodyString, {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        })

        const { data, type } = payload

        console.log('Webhook event received:', type) // Debug log

        switch (type) {

            case 'user.created':
                console.log('Creating user:', data.email_addresses[0].email_address) // Debug log
                const newUser = await userModel.create({
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url,
                })
                console.log('User created successfully:', newUser._id) // Debug log
                break;

            case 'user.updated':
                console.log('Updating user:', data.id) // Debug log
                await userModel.findOneAndUpdate(
                    { clerkId: data.id },
                    {
                        email: data.email_addresses[0].email_address,
                        firstName: data.first_name,
                        lastName: data.last_name,
                        photo: data.image_url,
                    }
                )
                console.log('User updated successfully') // Debug log
                break;

            case 'user.deleted':
                console.log('Deleting user:', data.id) // Debug log
                await userModel.findOneAndDelete({ clerkId: data.id })
                console.log('User deleted successfully') // Debug log
                break;
        }

        res.status(200).json({ success: true })

    } catch (error) {
        console.log('Webhook error:', error.message)
        res.status(400).json({ success: false, error: error.message })
    }
}

// API Controller function to get user available credits data
const userCredits = async (req, res) => {
    try {

        const { clerkId } = req.body

        // Fetching userdata using ClerkId
        const userData = await userModel.findOne({ clerkId })
        res.json({ success: true, credits: userData.creditBalance })

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

export {clerkWebhooks,  userCredits}
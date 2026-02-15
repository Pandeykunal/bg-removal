import { Webhook } from "svix"
import userModel from '../models/userModel.js'


// API Controller Function to manage Clerk user with database
// http://localhost:4000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
    try {

        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        const payload = whook.verify(req.body, {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        })

        const { data, type } = payload

        switch (type) {

            case 'user.created':
                await userModel.create({
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url,
                })
                break;

            case 'user.updated':
                await userModel.findOneAndUpdate(
                    { clerkId: data.id },
                    {
                        email: data.email_addresses[0].email_address,
                        firstName: data.first_name,
                        lastName: data.last_name,
                        photo: data.image_url,
                    }
                )
                break;

            case 'user.deleted':
                await userModel.findOneAndDelete({ clerkId: data.id })
                break;
        }

        res.status(200).json({ success: true })

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ success: false })
    }
}

export {clerkWebhooks}


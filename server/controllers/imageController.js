import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import userModel from "../models/userModel.js";

const removeBgImage = async (req, res) => {
  try {

    // ✅ Get clerkId from decoded token (set by authUser middleware)
    const { clerkId } = req.body;

    if (!clerkId) {
      return res.json({ success: false, message: "Unauthorized" });
    }

    // ✅ Find user
    const user = await userModel.findOne({ clerkId });
    if (!user) {
      return res.json({ success: false, message: "User Not Found" });
    }

    // ✅ Check credits
    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    // ✅ Check if file exists
    if (!req.file) {
      return res.json({
        success: false,
        message: "No image uploaded",
      });
    }

    const imagePath = req.file.path;
    const imageFile = fs.createReadStream(imagePath);

    // Create form data for Clipdrop
    const formdata = new FormData();
    formdata.append("image_file", imageFile);

    // Call Clipdrop API
    const { data } = await axios.post(
      "https://clipdrop-api.co/remove-background/v1",
      formdata,
      {
        headers: {
          ...formdata.getHeaders(),
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    // Convert to base64
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    // ✅ Deduct credit
    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Background Removed",
      resultImage,
      creditBalance: user.creditBalance - 1,
    });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { removeBgImage };
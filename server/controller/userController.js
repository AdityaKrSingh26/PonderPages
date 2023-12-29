
import { User } from "../model/user.js";


export const signupUser = async (req, res) => {
    try {
        const userdata = req.body;

        console.log(user);
        const user = new User(userdata);
        await user.save();

        return res.status(200).json({ msg: 'signup successful' })
    } catch (error) {
        return res.status(500).json({ msg: 'Error while signup' })
    }

}
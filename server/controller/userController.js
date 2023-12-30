import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from "../model/user.js";
import Token from '../model/token.js';


export const signupUser = async (req, res) => {
    try {
        // const salt = await bcrypt.salt();
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const userdata = {
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword
        };
        // console.log(userdata)
        const user = new User(userdata);
        await user.save();
        // console.log(user);
        return res.status(200).json({ msg: 'signup successful' })

    } catch (error) {
        return res.status(500).json({ msg: 'Error while signup hello' })
    }

}

export const loginUser = async (req, res) => {
    let user = await User.findOne({ username: req.body.username })
    if (!user) {
        return res.status(404).json({ msg: 'user does not match' });
    }

    try {
        const match = await bcrypt.compare(req.body.password, user.password)
        console.log(match);
        if (match) {
            const accessToken = jwt.sign(user.toJSON(), "access_token", { expiresIn: "15m" })
            const refreshToken = jwt.sign(user.toJSON(), "refresh_token")

            const newToken = new Token({ token: refreshToken });
            await newToken.save()

            return res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, username: user.username, name: user.name })
        } else {
            return res.status(400).json({ msg: "password mismatch" })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Error while logging user' });
    }
}
import user from "../model/User.js"

export const addUser = async (request, response) => {
    try {
        let exist = await user.findOne({ sub: request.body.sub});
        
        if(exist) {
            response.status(200).json({ message: 'user already exist' });


        }
        const newUser =  new user(request.body);
        await newUser.save();
        return response.status(200).json(newUser);

        
    } catch (error) {
        return response.status(500).json(error.message);

    }
}
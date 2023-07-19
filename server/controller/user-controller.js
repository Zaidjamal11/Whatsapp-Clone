import user from "../model/User.js"

export const addUser = async (request, response) => {
    try {
        let exist = await user.findOne({ sub: request.body.sub });

        if(exist) {
            response.status(200).json('user already exists');
            return;
        }

        const newUser = new User(request.body);
        await newUser.save();
        response.status(200).json(newUser);

        
    } catch (error) {
        response.status(500).json(error);

    }
}



export const getUsers = async (request, response) => {
    try {
        const users = await user.find({});
        return response.status(200).json(users);

    } catch (error) {
        return response.status(500).json(error.message);

    }

}
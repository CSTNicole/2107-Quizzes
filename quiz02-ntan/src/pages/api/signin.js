
import { createSignIn, getSignIns } from '../../backend/database';

// step 3, the API
export default async function handler(req, res) {
    if (req.method == 'POST') {
        const data = req.body;
        const { username, password } = data; // destructuring

        // step 4, connect to db & create cheetah
        await createSignIn(username, password);
        res.status(200).json(
            {
                success : true
            }
        );
        return;
    }

    const data = await getSignIns();

    res.status(200).json(data);
}
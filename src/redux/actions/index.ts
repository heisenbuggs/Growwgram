import { authKey } from '../../authKey';

export const getPosts = () => {
    return async () => {
        const response = await fetch(`https://api.unsplash.com/photos/random?count=10&client_id=${authKey.access_id}`);
        return {
            type: "POSTS",
            payload: response
        }
    }
}
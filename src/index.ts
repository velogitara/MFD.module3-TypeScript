import { posts } from './module.js';

interface Post {
    id: string;
    title: string;
    body: string;
}
interface NormalizedData {
    byId: { [id: string]: Post };
    allIds: string[];
}

const normalizeData = (unnormalizedData: Post[]): NormalizedData => {
    const byId: { [id: string]: Post } = {};
    const allIds: string[] = [];
    for (const post of unnormalizedData) {
        byId[post.id] = post;
        allIds.push(post.id);
    }

    return { byId, allIds };
};

console.log(normalizeData(posts));

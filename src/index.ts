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
    return unnormalizedData.reduce<NormalizedData>(
        (acc, post) => {
            acc.byId[post.id] = post;
            acc.allIds.push(post.id);
            return acc;
        },
        { byId: {}, allIds: [] }
    );
};

console.log(normalizeData(posts));

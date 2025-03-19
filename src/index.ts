const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments?_limit=20';

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const getData = (url: string): Promise<Comment[]> => {
    return fetch(url)
        .then((response: Response): Promise<Comment[]> => {
            if (!response.ok) {
                throw new Error(`Ошибка запроса: ${response.status}`);
            }
            return response.json() as Promise<Comment[]>;
        })
        .catch((error: Error): Comment[] => {
            console.log(
                '!!!!!!!!!!Произошла ошибка при выполнении запроса:',
                error
            );
            return [];
        });
};

getData(COMMENTS_URL).then((data: Comment[]) => {
    if (!data || !Array.isArray(data)) {
        console.log('No data or unexpected format');
        return;
    }
    data.forEach((item: Comment) => {
        console.log(`ID: ${item.id}, Email: ${item.email}`);
    });
});

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments?_limit=20';

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const getData = async (url: string): Promise<Comment[]> => {
    try {
        const response: Response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка запроса: ${response.status}`);
        }
        const data = await response.json();

        if (
            !Array.isArray(data) ||
            !data.every((item) => 'id' in item && 'email' in item)
        ) {
            throw new Error('Неверный формат данных');
        }
        return data as Comment[];
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        throw error;
    }
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

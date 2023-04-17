export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// 記事を取得
export const getPosts = async (): Post[] => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => json);
};

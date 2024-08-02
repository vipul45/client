import { Post } from "./post";

export interface User{
    username: string;
    token: string;
    posts: Post;
}
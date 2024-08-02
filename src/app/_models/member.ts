import { Post } from "./post";

export interface Member {
    id: number;
    username: string;
    posts: Post[];
}
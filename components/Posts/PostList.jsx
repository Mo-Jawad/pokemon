import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPosts, fetchPosts, statusState } from "./postsSlicer";

const PostList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(10));
    }, [dispatch]);

    const Posts = useSelector(allPosts);
   
   console.log(Posts);
   
    
    const status = useSelector(statusState);

    
    
    if(status == 'loading') {
        return <div>Loading...</div>
    }

    if (status === 'succeeded') {
    return (
        <section className="h-[50rem]">
            <h1 className="text-[5rem] text-center font-bold my-6">posts</h1>
    <div className="flex flex-wrap gap-6 justify-center py-8">
     {Posts.map((post) => {
            return (<article className="h-fit border-2 w-[40%] p-4" key={post.id}>
                <h3 className="font-bold">{post.title}</h3>
                <p>{post.body}</p>
            </article>)
        })
    }
    </div>
        </section>
    )
}
}

export default PostList
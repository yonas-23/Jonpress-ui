import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/Posts/PostsPagination";
import PostsTable from "@/components/Posts/PostsTable";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostsPagination />
    </>
  );
};

export default PostsPage;

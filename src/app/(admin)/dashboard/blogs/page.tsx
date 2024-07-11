import { getBlogsData } from "@/lib/db/db-helper";
import BlogList from "@/components/pages/blog-list";

export default async function DashboardPage() {
  const allBlogs = await getBlogsData();
  return <BlogList allBlogs={allBlogs} base="dashboard" />;
}

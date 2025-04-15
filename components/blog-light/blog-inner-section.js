import dynamic from "next/dynamic";
import BlogPaginationLight from "./blog-pagination";
import BlogTopSection from "./blog-top-section";
import BreadcrumbsSection from "./breadcrumbs-section";

const BlogFiltering = dynamic(() => import("./blog-filtering"), {
  ssr: false,
  loading: () => <p>Loading...</p>, // Optional fallback
});

export default function BlogInnerSection() {
  return (
    <div className="fugu--inner-section light-version">
      <div className="container">
        <BreadcrumbsSection />
        <BlogTopSection />
        <BlogFiltering />
        <BlogPaginationLight />
      </div>
    </div>
  );
}

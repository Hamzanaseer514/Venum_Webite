import GloveCard from "@/Components/GloveCard";
import { products } from "../../../Data/productdata";
import FilterDrawer from "@/Components/FilterDrawer"; // ✅ import your drawer

export default function CollectionPage({ params }) {
  const { slug } = params;
  const filtered = products.filter((p) => p.category === slug);

  return (
    <div className="p-6">
      {/* Category Title */}
      <h1 className="text-3xl font-bold capitalize mb-4">
        {slug}
      </h1>

      <div className="mb-6">
        <FilterDrawer />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <GloveCard key={product.id} glove={product} />
        ))}
      </div>
    </div>
  );
}

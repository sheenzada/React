import ProductCard from "../Component/ProductCard";


const products = [
    {id: 1, name: 'product A' , price: 10},
    {id: 2, name: 'product B' , price: 20},

];

export default function Home () {
    return (
        <div className="grid grid-cols-2 gap-4 p-8">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}
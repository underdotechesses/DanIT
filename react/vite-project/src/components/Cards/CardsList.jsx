import './Cards.scss'
import ProductCard from './ProductCard'


export default function CardsList({ data, addToCart = () => {}, cart, removeFromCart = () => {}, addToFavourite, favourite, removeFromFavourite }) {
    return (
        <div className="cards-wrapper">
            {
                data.map((product) => {
                    return (
                        <ProductCard 
                            key={product.sku}
                            data={cart}
                            addToCart={addToCart}
                            product={product}
                            name={product.name}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            sku={product.sku}
                            removeFromCart={removeFromCart}
                            addToFavourite={addToFavourite}
                            favourite={favourite}
                            removeFromFavourite={removeFromFavourite}
                        />
                    )
                })
            }
        </div>
    )
}
// TODO: create a component that displays a single bakery item

export default function Batem(item) {
    return (
        <div class="col-md-5 col-lg-4">
            <div class="card h-100">
                <img src={item.image} class="card-img-top" alt={'unknown'}/>
                <div class="card-body">
                    <h3 class="card-title">{item.name}</h3>
                    <text class="card-text">{item.description}</text>
                    <div class="flex items-center justify-between">
                        <h5 class="card-text">${item.price}</h5>
                        <button class="btn btn-outline-success" onClick={() => item.handleClick(item)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


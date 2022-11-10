// TODO: create a component that displays a single bakery item

export default function Batem(a) {
    return (
        <div class="col-md-6 col-lg-3">
            <div class="card h-100">
            <img src={a.image} class="card-img-top" alt={'unknown'}/>
                <div class="card-body">
                    <h3 class="card-title">{a.name}</h3>
                    <h5 class="card-text">{a.description}</h5>
                    <h4 class="card-text">${a.price}</h4>
                    <button class="btn btn-outline-success" onClick={() => a.handleClick(a)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

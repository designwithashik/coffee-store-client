/* eslint-disable react/prop-types */

const CoffeeCard = ({ coffee }) => {
    const {name, quantity, supplier, taste, details, photo, category} = coffee
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl text-left">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="card-body">

                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                        <button className="btn btn-success">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
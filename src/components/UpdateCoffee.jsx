
const UpdateCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const category = form.category.value;
        

        const newCoffee = { name, quantity, supplier, taste, details, photo, category }
        console.log(newCoffee)
    }
    return (
        <div className="bg-gray-500">
                <h2 className="text-3xl font-bold mt-5">Add A Coffee</h2>

            <form onSubmit={handleAddCoffee} className="bg-gray-500 p-14">
             {/* form name & quantity row */}
                <div className="md:flex gap-8 w-full">
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group ">
                        <input name="name" type="text" placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                </div><div className="form-control  w-1/2">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input name="quantity" type="text" placeholder="Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
             {/* form supplier & taste row */}
                <div className="md:flex gap-8 w-full">
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group ">
                        <input name="supplier" type="text" placeholder="Supplier" className="input input-bordered w-full" />
                    </label>
                </div><div className="form-control  w-1/2">
                    <label className="label">
                        <span className="label-text">Available taste</span>
                    </label>
                    <label className="input-group">
                        <input name="taste" type="text" placeholder="taste" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
             {/* form category & details row */}
                <div className="md:flex gap-8 w-full">
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group ">
                        <input name="category" type="text" placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div><div className="form-control  w-1/2">
                    <label className="label">
                        <span className="label-text">Available Details</span>
                    </label>
                    <label className="input-group">
                        <input name="details" type="text" placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                <div className="form-control  w-full">
                    <label className="label">
                        <span className="label-text">Available photo</span>
                    </label>
                    <label className="input-group">
                        <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                    <input type="submit" value="Submit" className="btn"/>
                </div>
           
            </form>
        </div>
    );
};

export default UpdateCoffee;
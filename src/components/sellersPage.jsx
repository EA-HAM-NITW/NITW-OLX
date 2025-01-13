import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function Sell() {
    const [selectedOption, setSelectedOption] = useState('');
    const [photos, setPhotos] = useState([]);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [pricePerDay, setPricePerDay] = useState('');
    const [isAvailableForRent, setIsAvailableForRent] = useState(false);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files); 
        setPhotos(files);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Construct the object to send
        const itemData = {
            title,
            category,
            price,
            isAvailableForRent,
            pricePerDay
        };

        try {
            const response = await fetch('http://localhost:8080/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Item created successfully:', result);
            } else {
                console.error('Failed to create item');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1 className="text-center mt-4"><b>List An Item</b></h1>
            <Form className='m-3' onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="title">
                    <Form.Label><b>Product Title</b></Form.Label>
                    <Form.Control
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Ex: Laptop"
                    />
                </Form.Group>
                
                <Form.Group className="mb-4">
                    <Form.Label><b>Upload Photos</b></Form.Label>
                    <Form.Control 
                        type="file" 
                        accept="image/*" 
                        multiple 
                        onChange={handleFileChange} 
                    />
                    <Form.Text className="text-muted">
                        You can upload multiple photos.
                    </Form.Text>
                </Form.Group>
                {photos.map((photo)=>{
                    return (<img src={URL.createObjectURL(photo)} style={{width: '100px', height: '100px', objectFit: 'cover'}}></img>)
                })}

                <Form.Group className='mb-4'>
                    <Form.Label><b>Which Category Is Your Product?</b></Form.Label>
                    <Form.Select 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        aria-label="Select A Category"
                    >
                        <option>Select Category</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Books">Books</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Laptop">Laptop</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4" controlId="price">
                    <Form.Label><b>Price</b></Form.Label>
                    <Form.Control
                        type='number'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Ex: ₹40,000"
                    />
                </Form.Group>

                <Form.Group className='mb-4'>
                    <Form.Label><b>Selling or Renting</b></Form.Label>
                    <Form.Select 
                        value={selectedOption} 
                        onChange={handleSelectChange}
                    >
                        <option>Select One</option>
                        <option value="selling">Selling</option>
                        <option value="renting">Renting</option>
                    </Form.Select>
                </Form.Group>

                {selectedOption === "renting" && (
                    <Form.Group className="mb-4" controlId="pricePerDay">
                        <Form.Label><b>Price Per Day</b></Form.Label>
                        <Form.Control
                            type="number"
                            value={pricePerDay}
                            onChange={(e) => setPricePerDay(e.target.value)}
                            placeholder="₹Price per day"
                        />
                    </Form.Group>
                )}

                <div className='d-flex justify-content-center'>
                    <Button type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );
}

export default Sell;
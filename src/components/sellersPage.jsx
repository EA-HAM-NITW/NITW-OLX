import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function Sell(){

    const [selectedOption, setSelectedOption] = useState('');
    const [photos, setPhotos] = useState([]);

    const handleSelectChange = (event) => {
        console.log(event.target.value);
        
        setSelectedOption(event.target.value); // Update the state based on selected option
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files); // Convert FileList to an array
        setPhotos(files); // Update the photos state
      };

    return(
        <div>
            <h1 className="text-center mt-4"><b>List An Item</b></h1>
            <Form className='m-3'>
                <Form.Group className="mb-4" controlId="title" >
                    <Form.Label><b>Product Title</b></Form.Label>
                    <Form.Control type='text' placeholder="Ex: Laptop" />
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
                    {photos.length > 0 && (
                        <div className="mb-4">
                        <h6>Preview:</h6>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {photos.map((photo, index) => (
                            <div key={index}>
                                <img
                                src={URL.createObjectURL(photo)}
                                alt={`Uploaded Preview ${index + 1}`}
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                />
                            </div>
                            ))}
                        </div>
                        </div>
                    )}
                <Form.Group className='mb-4'>
                    <Form.Label><b>Which Category Is Your Product?</b></Form.Label>
                    <Form.Select aria-label="Select A Category">
                        <option>Select Category</option>
                        <option value="1">Furniture</option>
                        <option value="2">Books</option>
                        <option value="3">Clothing</option>
                        <option value="4">Laptop</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mb-4'>
                    <Form.Label><b>Selling or Renting</b></Form.Label>
                    <Form.Select aria-label="Select" onChange={handleSelectChange}>
                        <option>Select One</option>
                        <option value="selling">Selling</option>
                        <option value="renting">Renting</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className='mb-4'>
                    <Form.Label><b>Select the Condition of the Item</b></Form.Label>
                    <Form.Select aria-label="Select" onChange={handleSelectChange}>
                        <option>Select One</option>
                        <option value="1">New</option>
                        <option value="2">Open Box</option>
                        <option value="3">Seller refurbished</option>
                        <option value="4">Used</option>
                        <option value="5">Parts not working</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4" controlId="price" >
                    <Form.Label><b>Price</b></Form.Label>
                    <Form.Control type='number' placeholder="Ex: ₹40,000" />
                </Form.Group>
                <div className='d-flex justify-content-center'>
                    <Button>Submit</Button>
                </div>
                
            </Form>
        </div>
    )
}

export default Sell;

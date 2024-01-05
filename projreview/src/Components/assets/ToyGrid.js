import React from 'react';
const ToyGrid = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Card 1 */}
        <div className="col-sm-4 mb-4">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/63637/crocodile-sitting-alligator-animal-63637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="card-img-top"
              alt="Card 1 Image"
              style={{ objectFit: 'cover', maxHeight: '150px' }}
            />
            <div className="card-body">
              <h5 className="card-title">Dinosaur</h5>
              <p className="card-text">This is the content of Card 1.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-sm-4 mb-4">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/792051/pexels-photo-792051.jpeg"
              className="card-img-top"
              alt="Card 2 Image"
              style={{ objectFit: 'cover', maxHeight: '150px' }}
            />
            <div className="card-body">
              <h5 className="card-title">Toy Pieces</h5>
              <p className="card-text">This is the content of Card 2.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-sm-4 mb-4">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="card-img-top"
              alt="Card 3 Image"
              style={{ objectFit: 'cover', maxHeight: '150px' }}
            />
            <div className="card-body">
              <h5 className="card-title">JoyStick</h5>
              <p className="card-text">This is the content of Card 3.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-4">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/1720957/pexels-photo-1720957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="card-img-top"
              alt="Card 3 Image"
              style={{ objectFit: 'cover', maxHeight: '150px' }}
            />
            <div className="card-body">
              <h5 className="card-title">Plane</h5>
              <p className="card-text">This is the content of Card 4.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-4">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/708774/pexels-photo-708774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="card-img-top"
              alt="Card 3 Image"
              style={{ objectFit: 'cover', maxHeight: '150px' }}
            />
            <div className="card-body">
              <h5 className="card-title">Teddy</h5>
              <p className="card-text">This is the content of Card 5.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-4">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="card-img-top"
              alt="Card 3 Image"
              style={{ objectFit: 'cover', maxHeight: '150px' }}
            />
            <div className="card-body">
              <h5 className="card-title">Soldier</h5>
              <p className="card-text">This is the content of Card 6.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyGrid;

import React, { useEffect } from 'react'
// import { data } from '../Dataas/Data';
import { useDispatch, useSelector } from 'react-redux';
import './tab1.css'
import { editProduct, getProducts,deleteProduct  } from '../../../actions/productsActions';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Table from 'react-bootstrap/Table';
import { deleteFromCart } from '../../../actions/cartAction';

function Tab1() {

  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const {loading, error, products} = productList

  const outOfStock = products?.filter(x => x.countInStock === 0)


  useEffect(() => {
    dispatch(getProducts());
  },[dispatch]);

console.log(outOfStock?.length);
  
 const data = [

  {
    heading: `${products?.length} Products`,
    text: "In your Shop",
    background: (
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,256L20,240C40,224,80,192,120,202.7C160,213,200,267,240,277.3C280,288,320,256,360,224C400,192,440,160,480,170.7C520,181,560,235,600,218.7C640,203,680,117,720,85.3C760,53,800,75,840,106.7C880,139,920,181,960,197.3C1000,213,1040,203,1080,202.7C1120,203,1160,213,1200,218.7C1240,224,1280,224,1320,202.7C1360,181,1400,139,1420,117.3L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
    ),
    class: "bg-1",
  },
  {
    heading: `${outOfStock?.length} Products`,
    text: "Out of Stock",
    background: (
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,32L24,74.7C48,117,96,203,144,213.3C192,224,240,160,288,122.7C336,85,384,75,432,90.7C480,107,528,149,576,144C624,139,672,85,720,58.7C768,32,816,32,864,64C912,96,960,160,1008,202.7C1056,245,1104,267,1152,245.3C1200,224,1248,160,1296,117.3C1344,75,1392,53,1416,42.7L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    ),
    class: "bg-2",
  },
  {
    heading: "5 Product",
    text: "You ordered",
    background: (
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,96L24,122.7C48,149,96,203,144,192C192,181,240,107,288,64C336,21,384,11,432,48C480,85,528,171,576,197.3C624,224,672,192,720,181.3C768,171,816,181,864,176C912,171,960,149,1008,165.3C1056,181,1104,235,1152,224C1200,213,1248,139,1296,128C1344,117,1392,171,1416,197.3L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    ),
    class: "bg-3",
  },
];


  return (
    <div className="right">
    <div className="row1">
      {data?.map((item) => {
        return (
          <div style={{height: '175px'}} className={"item-card " + item.class}>
            <h1>{item.heading}</h1>
            <p>{item.text}</p>
            {item.background}
          </div>
        );
      })}
    </div>

    <div className="row2">
      <div className="detail-card">
      <div className="card-title">
        <p>All Products</p>
      </div>

      <Table style={{width: '900px'}}  striped  hover>
      <thead >
        <tr >
          <th>#</th>
          <th>Id</th>
          <th>Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Delete/View</th>
        </tr>
      </thead>
      <tbody>
      {products?.map((product, index) => {
        return <tr>
          <td>{index+1}</td>
          <td>{product?._id}</td>
          <td>{product?.name}</td>
          <td style={product?.countInStock === 0 ? {color: 'red'} : {color: 'green'}} >{product?.countInStock}</td>
          <td>${product?.price}</td>
          <td >
                      <button
                        onClick={() => {
                          let a = product?._id
                          dispatch(deleteProduct(a))
                        }}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                      >
                        <DeleteOutlineIcon className="dlt-icon icn" />
                      </button>

                      <RemoveRedEyeIcon className="rm-icon icn" />
                    </td>
        </tr>
      })}
      </tbody>
    </Table>
      </div>

      
     
    </div>
  </div>
  )
}

export default Tab1
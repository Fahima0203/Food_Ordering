import axios from "axios";
import { useState, useEffect, React } from "react";
import "./card.scss"
import Nbar from './Navbar.jsx'
//import { withAlert } from 'react-alert'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FoodDisplay() {
   const [data, setData] = useState([]);
  useEffect(() => {
    axios
      //.get("https://flora-host.herokuapp.com/fetch")
      .get("http://localhost:5001/fetch")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  return (
    <>
      <Nbar />
      <br></br>
      <div className="wrapper" >
        {
          data.map((singleData) => {
            const base64data = singleData.image;
            console.log("image's binary value : ", base64data)

            return <>
              <div >
                <Card
                  img={singleData.image}
                  title={singleData.foodName}
                  description={singleData.desc}
                  price={singleData.price}
                />
              </div>
            </>
          })
        }
      </div>
    </>
  );
}

function Card(props) {
   const notify = () => toast("hi");
  return (
    <>
      <div className="card" >
        <div className="card__body">
          <img src={props.img} alt="plant_image" class="card__image" />
          <div>
            <h2 className="card__title">{props.title}</h2>
            <p className="card__btn1">Rs:{props.price}/-</p>
          </div>
          <p className="card__description" style={{ height: "50px" }}>{props.description}</p>
        </div>
        <a href="/AddedtoCart"> <button className="card__btn" onClick={notify}>Order Now</button></a>
      </div>
    </>
  );
}

export default FoodDisplay
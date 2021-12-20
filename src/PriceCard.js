import React from 'react';
import "./PriceCard.css";
const PriceCard = (props) => {
  return (
  <div class="col-lg-3 col-md-6" style={{height :'300px'},{width : '250px'}}>
  <div class="card text-center card-shadow on-hover border-0 mb-4">
    <div class="card-body font-14">
        {
            props.data.isPopular.map(obj => {
                if(obj.enable){
                    return (
                        <span class="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">{obj.name}</span>
                    )
                }
            })
        }
      <h5 class="mt-3 mb-1 font-weight-medium">{props.data.plan}</h5>
      <h6 class="subtitle font-weight-normal">{props.data.member}</h6>
      <div class="pricing my-3">
        <sup>{props.data.currency}</sup>
        <span class="monthly display-5">{props.data.price}</span>
        <small class="monthly">/{props.data.period}</small>
        <span class="d-block font-weight-medium">{props.data.offer}</span>
      </div>
      <ul class="list-inline">
        {
            props.data.features.map(obj => {
                if(obj.enable){
                    return (
                        <li class="d-block py-2">{obj.name}</li>
                    )
                }
                else{
                    return (
                        <li class="d-block py-2">&nbsp;</li>
                    )
                }
            })
        }
      </ul>
      <div class="bottom-btn">
          {
              props.data.isPopular.map(obj => {
                if(obj.enable){
                    return (<a class="btn btn-danger-gradiant btn-md text-white btn-block"><span>{obj.choose}</span></a>)
                }
                else {
                    return (<a class="btn btn-success-gradiant btn-md text-white btn-block"><span>{obj.choose}</span></a>)
                }
            })
          }
      </div>
    </div>
  </div>
</div>
  )
}
export default PriceCard;

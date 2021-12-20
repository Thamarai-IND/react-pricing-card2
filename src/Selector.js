import React from 'react'

// function myFunc() {
//     document.querySelector(".pricing1 .onoffswitch-label").click(function() {
//         document.querySelector(".pricing1 .monthly, .pricing1 .yearly").toggle();
//     });
// }

const Selector = (props) => {
  return (
    <div class="col-md-8 text-center">
        <h3 class="mt-3 font-weight-medium mb-1">{props.data.solgan}</h3>
        <h6 class="subtitle">{props.data.guarentee}</h6>
        <div class="switcher-box mt-4 d-flex align-items-center justify-content-center">
          <span class="font-14 font-weight-medium">{props.data.plans[0]}</span>
          <div class="onoffswitch position-relative mx-2">
            <input type="checkbox" name="onoffswitch1" class="onoffswitch-checkbox d-none" id="myonoffswitch1" />
            <label class="onoffswitch-label d-block overflow-hidden" for="myonoffswitch1">
							<span class="onoffswitch-inner d-block"></span>
							<span class="onoffswitch-switch d-block bg-white position-absolute"></span>
						</label>
          </div>
          <span class="font-14 font-weight-medium">{props.data.plans[1]}</span>
        </div>
    </div>
  )
}

export default Selector;

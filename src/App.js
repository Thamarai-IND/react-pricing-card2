//import logo from './logo.svg';
import './App.css';
import PriceCard from "./PriceCard.js";
import Selector from './Selector';
function App() {

  let headerData = [
    {
      solgan:"Pricing to make your work effective",
      guarentee:"We offer 100% satisfication of your Money back Guarentee",
      plans:["Monthly", "Yearly"],
    }
  ]

  let planDetails = [
    {
      isPopular :[
        {
          name:"Popular",
          choose:"Choose Plan",
          enable:false,
        }
      ],
      plan:"BASIC",
      member:"Team of 3-5 Members",
      currency:"$",
      price:28,
      period:"month",
      offer:"save $20 a year",
      features:[
        {
          name:"Perfect of small team",
          enable:true,
        },
        {
          name:"Unlimited Invoices",
          enable:true,
        },
        {
          name:"Project Management",
          enable:true,
        },
        {
          name:"Team Management",
          enable:false,
        },
        {
          name:"Time Tracking",
          enable:false,
        },
      ]
    },
    {
      isPopular :[
        {
          name:"Popular",
          choose:"Choose Plan",
          enable:true,
        }
      ],
      plan:"INTERMEDIATE",
      member:"Team of 5-10 Members",
      currency:"$",
      price:39,
      period:"month",
      offer:"save $30 a year",
      features:[
        {
          name:"Perfect of small team",
          enable:true,
        },
        {
          name:"Unlimited Invoices",
          enable:true,
        },
        {
          name:"Project Management",
          enable:true,
        },
        {
          name:"Team Management",
          enable:true,
        },
        {
          name:"Time Tracking",
          enable:false,
        },
      ]
    },
    {
      isPopular :[
        {
          name:"Popular",
          choose:"Choose Plan",
          enable:false,
        }
      ],
      plan:"HIGH CLASS",
      member:"Team of 10-25 Members",
      currency:"$",
      price:58,
      period:"month",
      offer:"save $50 a year",
      features:[
        {
          name:"Perfect of small team",
          enable:true,
        },
        {
          name:"Unlimited Invoices",
          enable:true,
        },
        {
          name:"Project Management",
          enable:true,
        },
        {
          name:"Team Management",
          enable:true,
        },
        {
          name:"Time Tracking",
          enable:true,
        },
      ]
    },
    {
      isPopular :[
        {
          name:"Popular",
          choose:"Choose Plan",
          enable:false,
        }
      ],
      plan:"SUPREME",
      member:"Team of 25-100 Members",
      currency:"$",
      price:99,
      period:"month",
      offer:"save $80 a year",
      features:[
        {
          name:"Perfect of small team",
          enable:true,
        },
        {
          name:"Unlimited Invoices",
          enable:true,
        },
        {
          name:"Project Management",
          enable:true,
        },
        {
          name:"Team Management",
          enable:true,
        },
        {
          name:"Time Tracking",
          enable:true,
        },
      ]
    }
  ];
  return (
    <div class="pricing1 py-5 bg-light">
  <div class="container">
    <div class="col-md-8 text-center">
      
      {
        headerData.map(obj => <Selector data={obj}></Selector>)
      }
    </div>
    <div class="row justify-content-center">
      <div class="row mt-5">
        {
          planDetails.map(obj => <PriceCard data={obj}></PriceCard>)
        }
      </div>
    </div>
  </div>
</div>
  );
}

export default App;

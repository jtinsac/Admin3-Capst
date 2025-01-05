import { Chart as ChartJS, defaults } from "chart.js/auto"
import Sidebar from "../components/sidebar"
import { Bar } from "react-chartjs-2"
import sourceData from "../sourceData.json"


defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";


function Dashboard(){
    return(
   <>
     <Sidebar/>
     <div className="d-container">
      <div className="d-heading">
         <h4>Welcome, Admin Window 1!</h4>
         <h5 className="dash-date">Mon, December 9, 2024</h5>
            <hr className="line"/>
      </div>
     <div className="d-content">
      <div className="topdiv">
     <div className="visit-wrapper">
      <div className="visit-card">
         <h3 className="visit-header">Visitors Today</h3>
         <button className="div">--</button>
         <h1 className="visitor-count">20</h1>
       </div>

       <div className="visit-card">
         <h3 className="visit-header">This Month</h3>
         <h1 className="mos-visitor">139</h1>
      </div>
      </div>
      
      <div className="bar-card student-dept">
   
        <Bar 
        data={{
          labels: sourceData.map((data) => data.label),
          datasets:[
            {
              label: "Number of Students",
              data: sourceData.map((data) => data.value),
            },
            
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Visitors per Dept",
            },
          },
        }}
        />

      </div>
      </div>
      <table className="user-table">
        <div className="table-heading">
        <h2 className="table-head">Recent Activity</h2>
      </div>
        <tr className="utable-head">
          <th>UserID</th>
          <th>Name</th>
          <th>Purpose</th>
          <th>Status</th>
        </tr>
       <tr className="user-details">
        <td className="userid">21hsjf23981</td>
        <td className="name"> Mark De Guzman</td>
        <td className="purpose"> Enrollment</td>
        <td className="status"> Success</td>
       </tr>
      </table>

    </div>
    </div>
   </>
    )
}

export default Dashboard
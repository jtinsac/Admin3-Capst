import Sidebar from "../components/sidebar";



function Window1(){

    return(
        <>
      <Sidebar/>
<div className="win-container">
  <div className="card">
            <h2 className = "win-heading">FINANCE WINDOW 1</h2>
    <div className="user-container">
        <div className="user-info">
            <h3>User No:</h3>
            <h3>Name:</h3>
            <h3>Email:</h3>
            <h3>Contact No:</h3>
            <h3>Purpose:</h3>
        </div>
    </div>
        <div className="queue-container">
            <h2 className="currentq">Current Queue:</h2>
            <h1 className="queue-num">001</h1>
        </div>  
        <div className="button-cont">
   <button className="btns-cancel">Cancel</button>
   <button className="btns">Recall</button>
   <button className="btns">Next Queue</button>
   </div>
  </div>
  
</div>

        </>
    )
}

export default Window1
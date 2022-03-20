import {motion} from 'framer-motion'
import './App.css';
import './profile.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import logo from './images/logo.png'
import CloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';
import ReceiptIcon from '@material-ui/icons/Receipt';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import MailIcon from '@material-ui/icons/Mail';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ReportIcon from '@material-ui/icons/Report';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import TimelineIcon from '@material-ui/icons/Timeline';
import BarChartIcon from '@material-ui/icons/BarChart';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import profile from './images/profile-1.jpg'
import profile2 from './images/profile-2.jpg'
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ShoppingCart';
import { useState } from 'react';



function App() {

  
  const MenuToggle = ()=>{
    
    setVisibility(!visibility)

  }

  const [visibility, setVisibility] = useState(false)

 
console.log(visibility)
  const profileperron ={
    hidden:{
      opacity: 0
    },
    visibility:{
      opacity: 1,
      transition:{
        duration: 1
      },
    }
  }
  return (
    <div className="container">
      <aside>
        <div className="top">
          <div className="logo">
            <img src={logo}/>
            <h2>EGA<span className="danger">TOR</span></h2>
          
          </div>
          <div className="close" id="close-btn">
               <CloseIcon/>
          </div>
        </div>
  

        <div className="sidebar">

          <a href="#" ><span><DashboardIcon/></span>
            <h3>dashBoard</h3>
          </a>
        
        

          <a href="#" ><span><PersonIcon/></span>
          <h3>Customers</h3>
          </a>
          
         
          <a href="#" ><span><ReceiptIcon/></span>
          <h3>Orders</h3>
          </a>

       
          
          <a href="#" ><span><InsertChartIcon/></span>
          
          <h3>Analytics</h3>
          </a>
        
    
          <a href="#"  >
          <span><MailIcon/></span> 
          <h3>Messages</h3>
          <span className="message-count">25</span>
          </a>
         
          <a href="#" >
            <span><AssignmentIcon/></span>
           <h3>Products</h3>
          </a>
         
        
        
          <a href="#">
            <span><ReportIcon/></span>
            <h3>Reports</h3>
          </a>
        
        
          <a href="#" ><span><SettingsIcon/></span>
          
           <h3>Settings</h3>
          </a>
         
        
          <a href="#" ><span><AddIcon/></span>
             <h3>
            AddProduct
          </h3>
          </a>
       
        
        </div>
      </aside>

      <main>
        <h1>Dashboard</h1>
        <div className="date">
          <input type="date"/>
        </div>

        <div className="insights">
          <div className="sales">
              <span className="spa"><AssignmentIcon/></span> 
            <div className="middle">
              <div className="left">
                <h3>Total Sales</h3>
                <h1> $25,024</h1>
              </div>
              <div className="progress">
                  <svg> 
                    <circle cx='38' cy="38" r='36'></circle>
                  </svg>
                <div className="number">
                  <p>81%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 24 Hours</small>

          </div>
           <div className="expenses">
             <span className="spa"><AssignmentIcon/></span> 
            <div className="middle">
              <div className="left"> 
                <h3>Total income</h3>
                <h1> $244,024</h1>
              </div>
              <div className="progress">
                  <svg> 
                    <circle cx='38' cy="38" r='36'></circle>
                  </svg>
                <div className="number">
                  <p>34%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 24 Hours</small>

          </div>
           <motion.div 
            animate={{scale:2}}
            transition={{ duration: 1 }} className="income">
             <span className="spa"><AssignmentIcon className="j"/></span> 
            <div className="middle">
              <div className="left"> 
                <h3>Total Sales</h3>
                <h1> $25,024</h1>
              </div>
              <div className="progress">
                  <svg> 
                    <circle cx='38' cy="38" r='36'></circle>
                  </svg>
                <div className="number">
                  <p>81%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 24 Hours</small>

          </motion.div>
        </div>
        <div className="recent-order">
              <h2>Recent Orders</h2>
              <table>
                <thead>
                  <tr>
                     <th>Product Name</th>
                     <th>ID</th>
                     <th>Payment</th>
                     <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>due</td>
                    <td className="warning">pending</td>
                    <td className="primary">Details</td>
                  </tr>
                    <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>due</td>
                    <td className="warning">pending</td>
                    <td className="primary">Details</td>
                  </tr>
                    <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>due</td>
                    <td className="warning">pending</td>
                    <td className="primary">Details</td>
                  </tr>
                    <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>due</td>
                    <td className="warning">pending</td>
                    <td className="primary">Details</td>
                  </tr>

                    <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>due</td>
                    <td className="warning">pending</td>
                    <td className="primary">Details</td>
                  </tr>
                </tbody>
              </table>

              <a href="#" >show All</a>
         </div>
      </main>
      <div className="right">
        <div className="top">
      
        </div>
        <div className="theme-toggler">
          <span className="jor"><Brightness6Icon/></span>
          <span  className="jor"><Brightness4Icon/></span>
        </div>
        <div className="action">
          <div onClick={MenuToggle} className="profile">
             <img src={profile} alt="2"/>
          </div>
          <motion.div
           
           animate={visibility ? "visibility" : "hidden" }
           variants={profileperron} className="menu">
            <div></div>
            <h3>someone Famous <span>Website Designer</span></h3>
            <ul>
              <li> <a href="http://"><PersonIcon/><span>My Profile</span></a></li>
               <li> <a href="http://"><EditIcon/><span>Edit</span></a></li>
                <li> <a href="http://">< SettingsIcon/><span>Settings</span></a></li>
                 <li> <a href="http://"><ExitToAppIcon/><span>Logout</span></a></li>
            </ul>
          </motion.div>
        </div>
       <div className="recent-updates">
        <h2>Recent Updates</h2>
        <div className="updates">
          <div className='update'>
            <div className='Profile-photro'>
              <img src={profile2} alt=''/>
            </div>
            <div className='message'>
              <p><b>Mike</b> received his order og NIght lion tech GPS drone</p>
              <small className='text-muted'>2 minutes ago</small>
            </div>
          </div>
            <div className='update'>
            <div className='Profile-photro'>
              <img src={profile2} alt=''/>
            </div>
            <div className='message'>
              <p><b>Mike</b> received his order og NIght lion tech GPS drone</p>
              <small className='text-muted'>2 minutes ago</small>
            </div>
          </div>
            <div className='update'>
            <div className='Profile-photro'>
              <img src={profile2} alt=''/>
            </div>
            <div className='message'>
              <p><b>Mike</b> received his order og NIght lion tech GPS drone</p>
              <small className='text-muted'>2 minutes ago</small>
            </div>
          </div>
        </div>

       </div>

       <div className='sales-analytics'>
         <h2> sales-analytics</h2>
        <div className='item online'>
          <div className='icon'> <span><ExitToAppIcon/></span></div>
          <div className='right'>
            <div className='info'>
              <h3>ONLINE OFERDS</h3>
              <small class="text-muted">Last 24 hours</small>
            </div>
            <h5 className='succes'>+39%</h5>
            <h3>3849</h3>
          </div>
        </div>
         <div className='item offline'>
          <div className='icon'> <span><EditIcon/></span></div>
          <div className='right'>
            <div className='info'>
              <h3>ONLINE OFERDS</h3>
              <small class="text-muted">Last 24 hours</small>
            </div>
            <h5 className='danger'>-17%</h5>
            <h3>3849</h3>
          </div>
        </div>
        
         <div className='item customers'>
          <div className='icon'> <span>< PersonIcon/></span></div>
          <div className='right'>
            <div className='info'>
              <h3>NEW  CUSTOMERS</h3>
              <small class="text-muted">Last 24 hours</small>
            </div>
            <h5 className='succes'>+26%</h5>
            <h3>323</h3>
          </div>
        </div>
          <div className='item add-product'> <h3> Add Product</h3> </div>
         
       </div>
       </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import HeaderBar from "../../components/HeaderBar";
import Sidebar from "../../components/SideBar";

function Home() {
 const [sidebarOpen, setSidebarOpen] = useState(true);
 
   return (
     <div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : ""}`}>
       {/* === Header with sidebar toggle === */}
       <HeaderBar
         title="Home"
         onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
       />
 
       {/* === Sidebar === */}
       <Sidebar isOpen={sidebarOpen} />
 
    
     </div>
   );
 };
 
 export default Home;
 
import React, { useState } from "react";
import Tabs from "./components/Tabs";
import Dashboard from "./components/Dashboard";
import Tasks from "./components/Tasks";
import Schedule from "./components/Schedule";
import Timer from "./components/Timer";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "tasks" && <Tasks />}
        {activeTab === "schedule" && <Schedule />}
        {activeTab === "timer" && <Timer />}
      </div>
    </div>
  );
}

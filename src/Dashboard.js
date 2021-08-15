import React from 'react'
import DashboardCard from './DashboardCard'
import Graphs from './Graphs'

function Dashboard() {
    const data = [
        {
            title: "Earnings (Monthly)",
            number: "$40,000",
            icon: "fa-calendar",
            color: "dodgerblue"
        },
        {
            title: "Earnings (Annual)",
            number: "$215,000",
            icon: "fa-dollar-sign",
            color: "#10e095"
        },
        {
            title: "Tasks",
            number: "50%",
            icon: "fa-clipboard-list",
            progressbar: true,
            color: "#36b9cc"
        },
        {
            title: "Pending Requests",
            number: "18",
            icon: "fa-comments",
            color: "#f6c23e"
        }
    ]
    return (
        <div className="container-fluid">
            <h3 class="page-title mb-4">Dashboard</h3>
            <div className="row">
                {
                    data.map((obj) => {
                        return <DashboardCard data={obj} />
                    })
                }
            </div>
            <div className="row">
                <Graphs />
            </div>
        </div>
    )
}

export default Dashboard

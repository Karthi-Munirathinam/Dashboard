import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function Graphs() {
    let data = [
        {
            month: 'Jan',
            Earnings: 0,
        },
        {
            month: 'Feb',
            Earnings: 10000,
        },
        {
            month: 'Mar',
            Earnings: 5000,
        },
        {
            month: 'Apr',
            Earnings: 15000,
        },
        {
            month: 'May',
            Earnings: 10000,
        },
        {
            month: 'Jun',
            Earnings: 20000,
        },
        {
            month: 'Jul',
            Earnings: 15000,
        },
        {
            month: 'Aug',
            Earnings: 25000,
        },
        {
            month: 'Sep',
            Earnings: 20000,
        },
        {
            month: 'Oct',
            Earnings: 30000,
        },
        {
            month: 'Nov',
            Earnings: 25000,
        },
        {
            month: 'Dec',
            Earnings: 40000,
        }

    ];


    return (
        <>
            <div class="col-xl-8 col-lg-7">
                <div class="card shadow mb-4">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                    </div>
                    <div class="card-body">
                        <div class="chart-area">
                            <ResponsiveContainer width="100%" height={350}>
                                <AreaChart
                                    data={data}
                                    margin={{
                                        top: 10,
                                        right: 0,
                                        left: 0,
                                        bottom: 0
                                    }}
                                >
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="Earnings" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} fill="#f6f8fd" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="col-xl-4 col-lg-5">
                <div class="card shadow mb-4">

                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                    </div>

                    <div class="card-body">
                        <div class="chart-pie pt-4 pb-2">
                            <canvas id="myPieChart"></canvas>
                        </div>
                        <div class="mt-4 text-center small">
                            <span class="mr-2">
                                <i class="fas fa-circle text-primary"></i> Direct
                            </span>
                            <span class="mr-2">
                                <i class="fas fa-circle text-success"></i> Social
                            </span>
                            <span class="mr-2">
                                <i class="fas fa-circle text-info"></i> Referral
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}

        </>

    )
}

export default Graphs

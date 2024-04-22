"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ReactApexChart with SSR disabled
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const TokonomicsChart = () => {
 const [series, setSeries] = useState([5, 20, 10, 10, 55]);

 const [options, setOptions] = useState({
    chart: {
      width: '100%',
      type: 'pie',
    },
    labels: ['CEX', 'LP', 'Team + Advisors', 'Marketing + Partnership', 'Presale'],
    responsive: [{
      breakpoint: 320,
      options: {
        chart: {
            width: '100%', 
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
 });

 return (
    <div>
      <div id="chart">
        <div className='w-[540px] h-[440px] lMob:w-[320px] text-[100px]'>
          
        <ReactApexChart options={options} series={series} type="pie"  width="100%" height="100%"/>
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
 );
};

export default TokonomicsChart;


import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const TokonomicsChart = () => {
 const [series, setSeries] = useState([5, 20, 10, 10, 55]);

 const windowLength = window.innerWidth
 const [options, setOptions] = useState({
    chart: {
      width: '100%', // Set the chart width to 100% to make it responsive
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
    dataLabels: {
      style: {
        fontSize: windowLength > 1100 ? '24px' : '12px', // Adjust the font size here
      }
    }
 });

 return (
    <div>
      <div id="chart" >
        <ReactApexChart options={options} series={series} type="pie"  className='w-[320px] sm:w-[520px]'/>
      </div>
      <div id="html-dist"></div>
    </div>
 );
};

export default TokonomicsChart;

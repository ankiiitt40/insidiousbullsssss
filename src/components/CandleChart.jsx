import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Chart as ChartJS, CategoryScale, LinearScale, BarController, LineController, BarElement, LineElement, PointElement, Tooltip, Filler } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarController, LineController, BarElement, LineElement, PointElement, Tooltip, Filler)

export default function CandleChart() {
  const chartRef = useRef(null)
  const [chart, setChart] = useState(null)

  useEffect(() => {
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext('2d')

    // Generate fake candlestick data
    const data = {
      labels: ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00'],
      datasets: [
        {
          label: 'Price',
          type: 'line',
          data: [100, 105, 103, 110, 108, 115, 112, 120, 118, 125],
          borderColor: '#00ff99',
          backgroundColor: 'rgba(0, 255, 153, 0.05)',
          tension: 0.4,
          fill: true,
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: '#00ff99',
          pointBorderColor: '#00ff99',
        },
        {
          label: 'Volume',
          type: 'bar',
          data: [1000, 1200, 900, 1500, 1100, 1800, 1300, 2000, 1600, 1900],
          backgroundColor: 'rgba(34, 211, 238, 0.3)',
          borderColor: '#22d3ee',
          borderWidth: 1,
          yAxisID: 'y1',
        },
      ],
    }

    const newChart = new ChartJS(ctx, {
      type: 'bar',
      data,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
          intersect: false,
          mode: 'index',
        },
        plugins: {
          legend: {
            labels: {
              color: '#a0a0a0',
              font: { size: 12 },
              padding: 20,
            },
          },
          tooltip: {
            backgroundColor: 'rgba(10, 14, 39, 0.9)',
            titleColor: '#00ff99',
            bodyColor: '#e0e0e0',
            borderColor: '#00ff99',
            borderWidth: 1,
            padding: 12,
            displayColors: true,
          },
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(0, 255, 153, 0.1)',
              drawBorder: false,
            },
            ticks: {
              color: '#a0a0a0',
            },
          },
          y: {
            position: 'left',
            grid: {
              color: 'rgba(0, 255, 153, 0.05)',
              drawBorder: false,
            },
            ticks: {
              color: '#a0a0a0',
            },
          },
          y1: {
            position: 'right',
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              color: '#a0a0a0',
            },
          },
        },
      },
    })

    setChart(newChart)

    return () => {
      newChart.destroy()
    }
  }, [])

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">Live Market Insights</span>
          </h2>
          <p className="text-gray-400 text-lg">Real-time trading analytics and price action</p>
        </motion.div>

        <motion.div
          className="glass p-8 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <canvas ref={chartRef} />
        </motion.div>
      </div>

      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
    </section>
  )
}

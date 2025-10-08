import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import bgImage from "../assets/tBack5.webp"; 

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const MonteCarloForm = () => {
  const [formData, setFormData] = useState({
    initialInvestment: 10000,
    meanReturn: 0.07,
    volatility: 0.15,
    years: 10,
    simulations: 20,
  });

  const [simulationResults, setSimulationResults] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: parseFloat(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://backend-teal-pi.vercel.app/api/simulate", formData);
      setSimulationResults(response.data.results);
    } catch (error) {
      console.error("Error running simulation:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-16 p-6 bg-white shadow-lg rounded-lg">
          <img 
            src={bgImage} 
            text="something"
            alt="Monte Carlo Simulation" 
            className="w-full h-full object-cover rounded-lg"
            style={{
                          backgroundImage: `url(${bgImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: "400px", // Adjust height as needed
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          position: "relative",
                          color: "white"
                        }}
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold bg-black/50">
            Monte Carlo Simulation
          </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Initial Investment */}
        <div>
          <label className="block font-medium mb-1">Initial Investment ($)</label>
          <input
            type="number"
            name="initialInvestment"
            value={formData.initialInvestment}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Expected Annual Return */}
        <div>
          <label className="block font-medium mb-1">Expected Annual Return (%)</label>
          <input
            type="number"
            step="0.01"
            name="meanReturn"
            value={formData.meanReturn}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Market Volatility */}
        <div>
          <label className="block font-medium mb-1">Market Volatility (%)</label>
          <input
            type="number"
            step="0.01"
            name="volatility"
            value={formData.volatility}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Investment Duration */}
        <div>
          <label className="block font-medium mb-1">Investment Duration (Years)</label>
          <input
            type="number"
            name="years"
            value={formData.years}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Number of Simulations */}
        <div>
          <label className="block font-medium mb-1">Number of Simulations</label>
          <input
            type="number"
            name="simulations"
            value={formData.simulations}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-dark text-white font-medium px-4 py-2 rounded hover:bg-blue-600 w-full transition duration-200">
          Run Simulation
        </button>
      </form>

      {/* Simulation Results */}
      {simulationResults.length > 0 && (
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Simulation Results</h3>
        <Line
          data={{
            labels: Array.from({ length: simulationResults.length }, (_, i) => `Sim ${i + 1}`), // X-axis: Simulation number
            datasets: [
              {
                label: "Investment Growth Over Time",  // Line label
                data: simulationResults,  // Y-axis: The data points for growth
                borderColor: "blue",
                borderWidth: 2,
                fill: false, // No fill beneath the line
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Investment Growth Simulation',  // Graph title
                font: {
                  size: 18,
                },
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => {
                    return `Growth: $${tooltipItem.raw.toFixed(2)}`;  // Custom tooltip formatting
                  },
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Simulation Number',  // Label for X-axis
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Investment Value ($)',  // Label for Y-axis
                },
                ticks: {
                  beginAtZero: true,  // Starts Y-axis from zero
                },
              },
            },
          }}
        />
      </div>
    )}

    {/* Graph Explanation */}
    {simulationResults.length > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-2">Explanation of the Graph:</h4>
          <ul className="list-inside list-disc text-sm">
            <li><strong>X-axis:</strong> This axis represents the number of simulations. Each data point corresponds to the result of one simulation.</li>
            <li><strong>Y-axis:</strong> This axis shows the investment value over time (in dollars).</li>
            <li><strong>Line:</strong> The line represents how the investment grows according to the simulations run. The more the line increases, the higher the investment value becomes based on your Monte Carlo simulation parameters.</li>
          </ul>
        </div>
      )}
    </div>

  );
};

export default MonteCarloForm;
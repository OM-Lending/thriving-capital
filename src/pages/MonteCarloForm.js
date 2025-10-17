import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Card, Alert } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { motion } from "framer-motion";
import bgImage from "../assets/tBack5.webp";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

const MonteCarloForm = () => {
  const [formData, setFormData] = useState({
    initialInvestment: 10000,
    meanReturn: 0.07,
    volatility: 0.15,
    years: 10,
    simulations: 20,
  });

  const [simulationResults, setSimulationResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: parseFloat(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://backend-teal-pi.vercel.app/api/simulate",
        formData
      );
      setSimulationResults(response.data.results);
    } catch (error) {
      console.error("Error running simulation:", error);
      setError("Failed to run simulation. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .monte-carlo-input {
          border: 1px solid #334155;
          border-radius: 0;
          padding: 0.85rem 1rem;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #1e293b;
          color: #e2e8f0;
        }

        .monte-carlo-input:focus {
          border-color: #64748b;
          box-shadow: none;
          outline: none;
          background: #1a2332;
        }

        .monte-carlo-label {
          font-weight: 600;
          color: #f8fafc;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .monte-carlo-btn {
          background: #f59e0b;
          border: none;
          border-radius: 0;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #0f172a;
          transition: all 0.3s ease;
          width: 100%;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .monte-carlo-btn:hover:not(:disabled) {
          background: #d97706;
          transform: translateY(-2px);
        }

        .monte-carlo-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          color: "white",
          marginTop: "-1rem",
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(0, 0, 0, 0.7) 100%)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Container style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                marginBottom: "1rem",
                textShadow: "2px 4px 12px rgba(0, 0, 0, 0.3)",
              }}
            >
              Monte Carlo Simulator
            </h1>
            <p
              style={{
                fontSize: "1.3rem",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.7",
                textShadow: "1px 2px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              Visualize potential investment outcomes with advanced simulation
              modeling
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Main Content */}
      <Container style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <Row className="g-4">
          {/* Input Form */}
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card
                style={{
                  border: "1px solid #334155",
                  borderRadius: "0",
                  padding: "2.5rem",
                  background: "#1a2332",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "700",
                    color: "#f59e0b",
                    marginBottom: "0.5rem",
                  }}
                >
                  Simulation Parameters
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "2rem",
                    fontSize: "0.95rem",
                  }}
                >
                  Enter your investment details to run the simulation
                </p>

                {error && (
                  <Alert
                    variant="danger"
                    style={{
                      borderRadius: "0",
                      border: "1px solid #334155",
                      background: "rgba(220, 53, 69, 0.1)",
                      color: "#ef4444",
                    }}
                  >
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label className="monte-carlo-label">
                      Initial Investment ($)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="initialInvestment"
                      value={formData.initialInvestment}
                      onChange={handleChange}
                      className="monte-carlo-input"
                      required
                      min="0"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="monte-carlo-label">
                      Expected Annual Return (decimal, e.g., 0.07 = 7%)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      step="0.01"
                      name="meanReturn"
                      value={formData.meanReturn}
                      onChange={handleChange}
                      className="monte-carlo-input"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="monte-carlo-label">
                      Market Volatility (decimal, e.g., 0.15 = 15%)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      step="0.01"
                      name="volatility"
                      value={formData.volatility}
                      onChange={handleChange}
                      className="monte-carlo-input"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="monte-carlo-label">
                      Investment Duration (Years)
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="years"
                      value={formData.years}
                      onChange={handleChange}
                      className="monte-carlo-input"
                      required
                      min="1"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="monte-carlo-label">
                      Number of Simulations
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="simulations"
                      value={formData.simulations}
                      onChange={handleChange}
                      className="monte-carlo-input"
                      required
                      min="1"
                      max="100"
                    />
                  </Form.Group>

                  <button
                    type="submit"
                    className="monte-carlo-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Running Simulation...
                      </>
                    ) : (
                      "Run Simulation"
                    )}
                  </button>
                </Form>
              </Card>
            </motion.div>
          </Col>

          {/* Results */}
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {simulationResults.length > 0 ? (
                <>
                  <Card
                    style={{
                      border: "none",
                      borderRadius: "18px",
                      padding: "2rem",
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                      marginBottom: "2rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: "700",
                        color: "#f59e0b",
                        marginBottom: "2rem",
                      }}
                    >
                      Simulation Results
                    </h3>
                    <Line
                      data={{
                        labels: Array.from(
                          { length: simulationResults.length },
                          (_, i) => `Sim ${i + 1}`
                        ),
                        datasets: [
                          {
                            label: "Investment Growth",
                            data: simulationResults,
                            borderColor: "#f59e0b",
                            backgroundColor: "rgba(245, 158, 11, 0.15)",
                            borderWidth: 3,
                            fill: true,
                            tension: 0.4,
                            pointRadius: 4,
                            pointHoverRadius: 6,
                            pointBackgroundColor: "#f59e0b",
                            pointBorderColor: "#fff",
                            pointBorderWidth: 2,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                          title: {
                            display: true,
                            text: "Investment Growth Simulation",
                            font: {
                              size: 18,
                              weight: "bold",
                            },
                            color: "#f8fafc",
                            padding: 20,
                          },
                          tooltip: {
                            callbacks: {
                              label: (tooltipItem) => {
                                return `Value: $${tooltipItem.raw.toLocaleString(
                                  undefined,
                                  {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }
                                )}`;
                              },
                            },
                            backgroundColor: "#1a2332",
                            padding: 12,
                            borderColor: "#64748b",
                            borderWidth: 1,
                          },
                          legend: {
                            display: true,
                            position: "top",
                            labels: {
                              color: "#f8fafc",
                              font: {
                                size: 14,
                              },
                            },
                          },
                        },
                        scales: {
                          x: {
                            title: {
                              display: true,
                              text: "Simulation Number",
                              color: "#94a3b8",
                              font: {
                                size: 14,
                                weight: "bold",
                              },
                            },
                            grid: {
                              color: "rgba(255, 255, 255, 0.08)",
                            },
                            ticks: {
                              color: "#94a3b8",
                            },
                          },
                          y: {
                            title: {
                              display: true,
                              text: "Investment Value ($)",
                              color: "#94a3b8",
                              font: {
                                size: 14,
                                weight: "bold",
                              },
                            },
                            ticks: {
                              beginAtZero: true,
                              color: "#94a3b8",
                              callback: function (value) {
                                return "$" + value.toLocaleString();
                              },
                            },
                            grid: {
                              color: "rgba(255, 255, 255, 0.08)",
                            },
                          },
                        },
                      }}
                    />
                  </Card>

                  {/* Statistics */}
                  <Card
                    style={{
                      border: "none",
                      borderRadius: "18px",
                      padding: "2rem",
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                      marginBottom: "2rem",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#f59e0b",
                        marginBottom: "1.5rem",
                      }}
                    >
                      Statistical Summary
                    </h4>
                    <Row className="g-3">
                      <Col md={6}>
                        <div
                          style={{
                            padding: "1rem",
                            background: "#0f172a",
                            borderRadius: "0",
                            border: "1px solid #334155",
                            borderLeft: "none",
                          }}
                        >
                          <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                            Average Result
                          </div>
                          <div
                            style={{
                              color: "#f8fafc",
                              fontSize: "1.5rem",
                              fontWeight: "700",
                            }}
                          >
                            $
                            {(
                              simulationResults.reduce((a, b) => a + b, 0) /
                              simulationResults.length
                            ).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div
                          style={{
                            padding: "1rem",
                            background: "#0f172a",
                            borderRadius: "0",
                            border: "1px solid #334155",
                            borderLeft: "none",
                          }}
                        >
                          <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                            Best Result
                          </div>
                          <div
                            style={{
                              color: "#f8fafc",
                              fontSize: "1.5rem",
                              fontWeight: "700",
                            }}
                          >
                            $
                            {Math.max(...simulationResults).toLocaleString(
                              undefined,
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div
                          style={{
                            padding: "1rem",
                            background: "#0f172a",
                            borderRadius: "0",
                            border: "1px solid #334155",
                            borderLeft: "none",
                          }}
                        >
                          <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                            Worst Result
                          </div>
                          <div
                            style={{
                              color: "#f8fafc",
                              fontSize: "1.5rem",
                              fontWeight: "700",
                            }}
                          >
                            $
                            {Math.min(...simulationResults).toLocaleString(
                              undefined,
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div
                          style={{
                            padding: "1rem",
                            background: "#0f172a",
                            borderRadius: "0",
                            border: "1px solid #334155",
                            borderLeft: "none",
                          }}
                        >
                          <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                            Total Simulations
                          </div>
                          <div
                            style={{
                              color: "#f8fafc",
                              fontSize: "1.5rem",
                              fontWeight: "700",
                            }}
                          >
                            {simulationResults.length}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card>

                  {/* Graph Explanation */}
                  <Card
                    style={{
                      border: "2px solid #334155",
                      borderRadius: "0",
                      padding: "2rem",
                      background: "#1a2332",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "#f59e0b",
                        marginBottom: "1rem",
                      }}
                    >
                      Understanding the Results
                    </h4>
                    <ul
                      style={{
                        color: "#94a3b8",
                        lineHeight: "1.8",
                        fontSize: "0.95rem",
                        marginBottom: 0,
                      }}
                    >
                      <li>
                        <strong>X-axis:</strong> Represents each individual
                        simulation run. Each point shows a different possible
                        outcome.
                      </li>
                      <li>
                        <strong>Y-axis:</strong> Shows the final investment
                        value in dollars after the specified time period.
                      </li>
                      <li>
                        <strong>Line:</strong> Connects all simulation outcomes,
                        showing the range of potential results based on your
                        parameters.
                      </li>
                      <li>
                        <strong>Interpretation:</strong> Higher variability
                        indicates higher risk, while clustering suggests more
                        predictable outcomes.
                      </li>
                    </ul>
                  </Card>
                </>
              ) : (
                <Card
                  style={{
                    border: "2px solid #334155",
                    borderRadius: "0",
                    padding: "4rem 2rem",
                    textAlign: "center",
                    background: "#1a2332",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#f59e0b",
                      marginBottom: "1rem",
                    }}
                  >
                    No Results Yet
                  </h4>
                  <p style={{ color: "#94a3b8", marginBottom: 0 }}>
                    Enter your investment parameters and click "Run Simulation"
                    to see potential outcomes.
                  </p>
                </Card>
              )}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MonteCarloForm;

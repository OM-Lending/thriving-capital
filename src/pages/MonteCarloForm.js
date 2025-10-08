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
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }

        .monte-carlo-input:focus {
          border-color: #198754;
          box-shadow: 0 0 0 3px rgba(25, 135, 84, 0.1);
          outline: none;
        }

        .monte-carlo-label {
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .monte-carlo-btn {
          background: linear-gradient(135deg, #198754 0%, #0d6832 100%);
          border: none;
          border-radius: 12px;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          transition: all 0.3s ease;
          width: 100%;
        }

        .monte-carlo-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(25, 135, 84, 0.3);
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
              "linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(25, 135, 84, 0.5) 100%)",
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
                  border: "none",
                  borderRadius: "18px",
                  padding: "2.5rem",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "700",
                    color: "#1a1a1a",
                    marginBottom: "0.5rem",
                  }}
                >
                  Simulation Parameters
                </h3>
                <p
                  style={{
                    color: "#6c757d",
                    marginBottom: "2rem",
                    fontSize: "0.95rem",
                  }}
                >
                  Enter your investment details to run the simulation
                </p>

                {error && (
                  <Alert
                    variant="danger"
                    style={{ borderRadius: "12px", border: "none" }}
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
                        color: "#1a1a1a",
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
                            borderColor: "#198754",
                            backgroundColor: "rgba(25, 135, 84, 0.1)",
                            borderWidth: 3,
                            fill: true,
                            tension: 0.4,
                            pointRadius: 4,
                            pointHoverRadius: 6,
                            pointBackgroundColor: "#198754",
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
                            color: "#1a1a1a",
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
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            padding: 12,
                            borderColor: "#198754",
                            borderWidth: 1,
                          },
                          legend: {
                            display: true,
                            position: "top",
                            labels: {
                              color: "#1a1a1a",
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
                              color: "#6c757d",
                              font: {
                                size: 14,
                                weight: "bold",
                              },
                            },
                            grid: {
                              color: "rgba(0, 0, 0, 0.05)",
                            },
                          },
                          y: {
                            title: {
                              display: true,
                              text: "Investment Value ($)",
                              color: "#6c757d",
                              font: {
                                size: 14,
                                weight: "bold",
                              },
                            },
                            ticks: {
                              beginAtZero: true,
                              callback: function (value) {
                                return "$" + value.toLocaleString();
                              },
                            },
                            grid: {
                              color: "rgba(0, 0, 0, 0.05)",
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
                        color: "#1a1a1a",
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
                            background: "#f8f9fa",
                            borderRadius: "12px",
                            borderLeft: "4px solid #198754",
                          }}
                        >
                          <div style={{ color: "#6c757d", fontSize: "0.9rem" }}>
                            Average Result
                          </div>
                          <div
                            style={{
                              color: "#1a1a1a",
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
                            background: "#f8f9fa",
                            borderRadius: "12px",
                            borderLeft: "4px solid #198754",
                          }}
                        >
                          <div style={{ color: "#6c757d", fontSize: "0.9rem" }}>
                            Best Result
                          </div>
                          <div
                            style={{
                              color: "#1a1a1a",
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
                            background: "#f8f9fa",
                            borderRadius: "12px",
                            borderLeft: "4px solid #dc3545",
                          }}
                        >
                          <div style={{ color: "#6c757d", fontSize: "0.9rem" }}>
                            Worst Result
                          </div>
                          <div
                            style={{
                              color: "#1a1a1a",
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
                            background: "#f8f9fa",
                            borderRadius: "12px",
                            borderLeft: "4px solid #0dcaf0",
                          }}
                        >
                          <div style={{ color: "#6c757d", fontSize: "0.9rem" }}>
                            Total Simulations
                          </div>
                          <div
                            style={{
                              color: "#1a1a1a",
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
                      border: "none",
                      borderRadius: "18px",
                      padding: "2rem",
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                      background: "#f8f9fa",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "#1a1a1a",
                        marginBottom: "1rem",
                      }}
                    >
                      Understanding the Results
                    </h4>
                    <ul
                      style={{
                        color: "#6c757d",
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
                    border: "none",
                    borderRadius: "18px",
                    padding: "4rem 2rem",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                    textAlign: "center",
                    background: "#f8f9fa",
                  }}
                >
                  <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>
                    📊
                  </div>
                  <h4
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#1a1a1a",
                      marginBottom: "1rem",
                    }}
                  >
                    No Results Yet
                  </h4>
                  <p style={{ color: "#6c757d", marginBottom: 0 }}>
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

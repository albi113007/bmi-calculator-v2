const { useState, useEffect } = React;

function getInfo(bmi) {
  if (bmi < 18.5) return {
    label: "Underweight",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.12)",
    tip: "Consider eating more nutrient-rich foods and consult a doctor."
  };
  if (bmi <= 24.9) return {
    label: "Normal weight",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.12)",
    tip: "Great! Keep maintaining a balanced diet and regular exercise."
  };
  if (bmi <= 29.9) return {
    label: "Overweight",
    color: "#f97316",
    bg: "rgba(249,115,22,0.12)",
    tip: "Try adding more physical activity and reducing processed foods."
  };
  return {
    label: "Obesity",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.12)",
    tip: "Consult a healthcare professional for a personalised plan."
  };
}

function BMIComponents() {
  const [history, setHistory] = useState([]);
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    window.addBMIResult = (bmi, weight, height) => {
      const info = getInfo(bmi);
      const entry = { bmi, weight, height, ...info, time: new Date().toLocaleTimeString() };
      setLatest(entry);
      setHistory(prev => [entry, ...prev].slice(0, 5));
    };
  }, []);

  if (!latest) return null;

  return (
    <div style={{ marginTop: "16px" }}>
      <div style={{
        background: latest.bg,
        border: `1.5px solid ${latest.color}`,
        borderRadius: "10px",
        padding: "14px 16px",
        marginBottom: "16px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <span style={{
            background: latest.color,
            color: "#fff",
            borderRadius: "20px",
            padding: "3px 12px",
            fontSize: "13px",
            fontWeight: "500"
          }}>{latest.label}</span>
          <span style={{ fontSize: "22px", fontWeight: "700", color: latest.color }}>
            {latest.bmi}
          </span>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: "#fff", opacity: 0.85 }}>
          {latest.tip}
        </p>
      </div>

      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", margin: "0 0 8px" }}>
        Recent calculations
      </p>
      {history.map((entry, i) => (
        <div key={i} style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "8px",
          padding: "8px 12px",
          marginBottom: "6px",
          fontSize: "13px",
          color: "#fff"
        }}>
          <span>{entry.height}cm / {entry.weight}kg</span>
          <span style={{ color: entry.color, fontWeight: "500" }}>{entry.bmi}</span>
          <span style={{
            background: entry.color,
            color: "#fff",
            borderRadius: "20px",
            padding: "2px 10px",
            fontSize: "12px"
          }}>{entry.label}</span>
        </div>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("bmi-react-root"));
root.render(<BMIComponents />);
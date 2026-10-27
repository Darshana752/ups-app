import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL + "/api/entries";
const box = { maxWidth: 480, margin: "40px auto", padding: 24, fontFamily: "system-ui, sans-serif" };
const input = { width: "100%", padding: 10, margin: "6px 0 16px", boxSizing: "border-box" };

export default function App() {
  const [noOfUps, setNoOfUps] = useState("");
  const [referenceNo, setReferenceNo] = useState("");
  const [rows, setRows] = useState([]);
  const [msg, setMsg] = useState("");

  const load = () =>
    fetch(API).then((r) => r.json()).then(setRows).catch(() => setMsg("Cannot reach server"));
  useEffect(() => { load(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ noOfUps: Number(noOfUps), referenceNo }),
      });
      if (!res.ok) throw new Error();
      setNoOfUps(""); setReferenceNo(""); setMsg("Saved ✔"); load();
    } catch { setMsg("Save failed"); }
  };

  return (
    <div style={box}>
      <h2>UPS Entry</h2>
      <form onSubmit={submit}>
        <label>No of UPS</label>
        <input style={input} type="number" min="1" required value={noOfUps} onChange={(e) => setNoOfUps(e.target.value)} />
        <label>Reference No</label>
        <input style={input} type="text" required value={referenceNo} onChange={(e) => setReferenceNo(e.target.value)} />
        <button style={{ padding: "10px 20px" }} type="submit">Submit</button>
        <span style={{ marginLeft: 12 }}>{msg}</span>
      </form>
      <h3>Saved entries</h3>
      <table width="100%" border="1" cellPadding="6" style={{ borderCollapse: "collapse" }}>
        <thead><tr><th>ID</th><th>No of UPS</th><th>Reference No</th></tr></thead>
        <tbody>{rows.map((r) => (<tr key={r.id}><td>{r.id}</td><td>{r.noOfUps}</td><td>{r.referenceNo}</td></tr>))}</tbody>
      </table>
    </div>
  );
}

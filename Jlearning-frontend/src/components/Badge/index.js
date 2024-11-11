export default function Badge({ text, color }) {
  return (
    <div
      style={{
        borderRadius: "5px",
        padding: "5px 10px",
        backgroundColor: color,
        color: "white",
        fontSize: "13px",
        textAlign: "center",
      }}
    >
      {text}
    </div>
  );
}

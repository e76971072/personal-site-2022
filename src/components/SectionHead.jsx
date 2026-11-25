export default function SectionHead({ label, title, children }) {
  return (
    <div className="section-head reveal">
      <p className="section-index mono">{label}</p>
      <h2>{title}</h2>
      {children && <div className="section-aside">{children}</div>}
    </div>
  );
}

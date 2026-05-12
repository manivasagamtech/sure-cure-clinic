export default function SectionHeading({ kicker, title, body, align = "left" }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

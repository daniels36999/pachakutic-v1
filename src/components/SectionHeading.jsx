export default function SectionHeading({ eyebrow, title, text, dark = false }) {
  return <div className={`section-heading ${dark ? 'on-dark' : ''}`}>
    <span className="eyebrow"><i />{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}

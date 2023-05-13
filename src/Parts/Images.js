import "./PartsCSS/ImageOnGrid.css";
export default function Images(props) {
  return (
    <div className="picture" style={{ backgroundImage: `url(${props.bg})` }}>
      <div className="white-glass">
        <p
          className="all-in-one-heading"
          style={{ fontSize: `${props.style}` }}
        >
          {props.name}
        </p>
      </div>
    </div>
  );
}

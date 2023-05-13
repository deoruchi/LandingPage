import Images from "./Images";
import "./PartsCSS/Creator.css";
export default function Creator(props) {
  console.log(props.data);
  const sd = props.data;
  const data = sd.map((item) => {
    return <Images bg={item.imgd} name={item.name} />;
  });

  return (
    <section>
      <div className="heading-creator">
        <p className="all-in-one-heading">OUR Creations</p>
        <button className="button-black">
          <strong>SEE ALL</strong>
        </button>
      </div>
      <div className="alignment-desktop">{data}</div>

      {/**put images here  */}
    </section>
  );
}

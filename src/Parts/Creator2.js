import Images from "./Images";

export default function Creator2(props) {
  const sd = props.data;
  return (
    <section>
      <div className="heading-creator2">
        <p className="all-in-one-heading">OUR Creations</p>
        {sd.map((item) => {
          return <Images bg={item.imgm} name={item.name} style="1.25rem" />;
        })}
        <button className="button-black">
          <strong>SEE ALL</strong>
        </button>
      </div>
    </section>
  );
}

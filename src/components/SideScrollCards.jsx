const SideScroller = (props) => {
  const products1 = props.products;
  return (
    <div className="relative flex item-center">
      {products1.map((item) => {
        return <img src={item.img} alt="" />;
      })}
    </div>
  );
};

export default SideScroller;

function Catty({ id, hight, url, width }) {
  console.log(id, url);

  return (
    <div className="img-wrapper">
      <img src={url} alt={id} />
      <p>
        the id of the cat is {id} with width {width} and hight {hight}
      </p>
    </div>
  );
}

export default Catty;

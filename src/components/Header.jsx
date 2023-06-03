import CardItem from "./CardItem";

const Header = ({cart}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-semibold">Wicca Sepet Uygulaması
      </h1>
      <CardItem cart={cart}/>
    </div>
  );
};

export default Header;

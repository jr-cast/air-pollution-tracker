import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import CapitalCard from './CapitalCard';
import Footer from './Footer';

const DetailsNa = () => {
  const fetchNa = useSelector((state) => state.northAmerica);
  const capitalProps = [];

  fetchNa.forEach((item) => capitalProps.push(
    <Link key={nanoid()} to="/details_api_data">
      <CapitalCard
        key={nanoid()}
        imgSrc={item.flags}
        country={item.country}
        capital={item.capital}
        lat={item.latlng[0]}
        lon={item.latlng[1]}
      />
    </Link>,
  ));
  return (
    <>
      <div className="capitalCont">
        {capitalProps}
      </div>
      <Footer />
    </>
  );
};

export default DetailsNa;

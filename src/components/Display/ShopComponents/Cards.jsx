import { useContext } from 'react';
import ItemContext from '../../Context/ItemContext';
import Card from './Card';

export default function Cards() {
  const { items } = useContext(ItemContext);

  return (
    <div className="itemContainer">
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            itemName={item.title}
            itemPrice={item.price}
            image={item.image}
            id={item.id}
          />
        );
      })}
    </div>
  );
}

// Items.propTypes = {
//   items: PropTypes.array,
// };

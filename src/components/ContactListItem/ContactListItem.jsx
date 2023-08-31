import { Item, ItemButton } from "./ContactListItem.styled."

export const ContactListItem = ({ contact:{id, name, number}, onContactDelete}) => {
  return <Item key={id}>
            <p>{name}: {number}</p>
            <ItemButton type="button" onClick={() => onContactDelete(id)}>Delete</ItemButton>
          </Item> 
}
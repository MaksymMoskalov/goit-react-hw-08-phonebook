export const ContactList = ({ contacts, onDelit }) => {
  return (
    <ul>
      {contacts !== null &&
        contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <span>{name}</span>: <b>{number}</b>{' '}
              <button type="button" onClick={() => onDelit(id)}>
                Remove
              </button>
            </li>
          );
        })}
    </ul>
  );
};

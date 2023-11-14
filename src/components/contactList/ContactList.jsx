export const ContactList = ({ contacts, onDelit }) => {
  return (
    <ul className="contacts-list">
      {contacts !== null &&
        contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className="contact-item">
              <span className="acsent">{name}: </span>{' '}
              <b className="phone-num">{number}</b>
              <button
                type="button"
                onClick={() => onDelit(id)}
                className="remove-contact-btn"
              >
                Remove
              </button>
            </li>
          );
        })}
    </ul>
  );
};

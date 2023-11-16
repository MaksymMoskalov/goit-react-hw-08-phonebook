import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: #222222;
  min-height: 100vh;
  border-radius: 10px;
  .header {
    height: 60px;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    margin-bottom: 25px;
  }

  .header-link {
    padding: 20px;
    text-decoration: none;
    font-weight: 500;
    color: #9b9b9b;
    &:hover {
      color: #11998e;
    }
    &.active {
      color: #11998e;
    }
  }

  .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
    margin-bottom: 25px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1.3rem;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #9b9b9b;
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #11998e;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }
  /* reset input */
  .form__field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login-btn {
    display: inline-flex;
    border-radius: 15px;
    background-color: #222222;
    margin-top: 35px;
    width: 200px;
    height: 40px;
    color: #9b9b9b;
    font-size: 1.3rem;
    align-items: center;
    justify-content: center;
    border: 2px solid #9b9b9b;
    cursor: pointer;
    &:hover {
      color: #11998e;
      border: 2px solid #11998e;
    }
  }

  .user-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #9b9b9b;
    border-radius: 15px;
    padding: 20px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    color: #9b9b9b;
    font-size: 1.3rem;

    @media (max-width: 768px) {
      max-width: 250px;
    }
  }
  .icon {
    display: block;
    color: #11998e;
  }
  .acsent {
    color: #11998e;
    font-weight: 500;
  }

  .contacts-container {
    display: flex;
    flex-direction: column;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 768px) {
      max-width: 300px;
      align-items: center;
    }
  }
  .phone-title {
    display: inline-flex;
    margin-left: auto;
    margin-right: auto;
    color: #11998e;
  }
  .contacts-group {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
      max-width: 400px;
    }
  }
  .right-group {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 370px;
    border: 2px solid #9b9b9b;
    border-radius: 15px;
    color: #9b9b9b;
    @media (max-width: 768px) {
      margin: 0;
      max-width: 250px;
      margin-top: 25px;
    }
  }

  .contacts-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .contacts-title {
    color: #38ef7d;
  }

  .contact-item {
    display: flex;
    margin-bottom: 15px;
  }
  .remove-contact-btn {
    margin-left: auto;
    border: 1px solid #9b9b9b;
    border-radius: 15px;
    background-color: #222222;
    color: #9b9b9b;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background-color: red;
      border: 1px solid #fff;
      color: #fff;
    }
  }
  .phone-num {
    margin-left: 5px;
    margin-right: 10px;
  }
  .error-message {
    display: block;
    margin-top: 10px;
    color: red;
  }
`;

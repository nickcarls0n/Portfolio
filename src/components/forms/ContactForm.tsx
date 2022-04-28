import React from "react";
import Button from "../../components/button/Button";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <FormWrapper>
            <h3>Contact Me</h3>
            <Form
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdvSKii47RBrkk2wV-PswPqKk3ZqiJR7jWtaS_sq3ESmZdfeA/formResponse"
              method="post"
            >
              <label className="white-text">Name</label>
              <input type="text" id="entry.1630247408" name="name" required />
              <label className="white-text">Email</label>
              <input type="email" id="email" name="entry.1807431491" required />
              <label className="white-text">How Can I Help?</label>
              <textarea name="entry.314039078" rows={5} required />
              <Button
                text="Submit"
                style={{ width: "fit-content" }}
                type="submit"
              />
            </Form>
          </FormWrapper>
        </div>
      </div>
    </>
  );
};

const FormWrapper = styled.div.attrs({
  className: "col-md-7 offset-md-1",
})`
  background: rgba(0, 0, 0, 0.66);
  padding: 40px 40px 60px 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default ContactForm;

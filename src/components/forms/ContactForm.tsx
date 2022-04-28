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
              <Label>Name</Label>
              <Input
                type="text"
                id="entry.1630247408"
                name="name"
                placeholder="Your Name"
                required
              />
              <Label>Email</Label>
              <Input
                type="email"
                id="email"
                name="entry.1807431491"
                placeholder="Your Email"
                required
              />
              <Label>How Can I Help?</Label>
              <TextArea name="entry.314039078" rows={5} required />
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

const Label = styled.label`
  color: white;
  margin-top: 24px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 12px;
  background-color: #202833;
  border: none;

  &:focus-visible {
    outline: 1px solid #66fcf1;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  background-color: #202833;
  border: none;
  margin-bottom: 24px;

  &:focus-visible {
    outline: 1px solid #66fcf1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default ContactForm;

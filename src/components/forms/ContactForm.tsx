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
                autoComplete="off"
                required
              />
              <Label>Email</Label>
              <Input
                type="email"
                id="email"
                name="entry.1807431491"
                placeholder="Your Email"
                autoComplete="nope"
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
  background: rgba(0, 0, 0, 0.8);
  padding: 40px 40px 60px 40px;
`;

const Label = styled.label`
  color: white;
  margin-top: 24px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  font-family: "Roboto Mono", monospace;
  padding: 12px;
  border: none;

  &:focus-visible {
    outline: 1px solid #66fcf1;
  }
`;

const TextArea = styled.textarea`
  font-family: "Roboto Mono", monospace;
  padding: 12px;
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

import { FormEvent, useRef, useState } from "react";
import Button from "../../components/common/button";
import { FileInput } from "../../components/common/file-input";
import { Input } from "../../components/common/input";
import { ProfessionsSelectWrapper } from "../../components/common/professions-wrapper";
import { allowedFileTypes, maxFileSize } from "../../assets/constants";
import { ErrorMsg } from "../../components/common/error-msg";
import { apiUrl } from "../../assets/constants/envs";
import { CreateUserT } from "../../types/user";

export const CreateUser = () => {
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setError("");

    const form = ev.target as HTMLFormElement;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)
      .value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const profession = (
      form.elements.namedItem("profession") as HTMLInputElement
    ).value;

    const fileInput = form.elements.namedItem("avatar") as HTMLInputElement;
    const file = fileInput?.files?.[0];

    if (file) {
      if (!allowedFileTypes.includes(file.type)) {
        setError("Invalid file type. Please select a JPEG image.");
        return;
      }
      // file size should be less than 2MB
      if (file.size > maxFileSize) {
        setError("File is too large. Please select a file smaller than 2MB.");
        return;
      }

      console.log(`Valid file selected: ${file.name}`);
    } else {
      setError("No file selected");
    }

    const responseData = await createUser({
      firstName,
      lastName,
      email,
      profession,
      avatar: file,
    });

    if (responseData.status === 201) {
      formRef?.current?.reset();
    }
  };

  const createUser = async (data: CreateUserT) => {
    const formData = new FormData();

    for (const name in data) {
      const itemName = name as keyof CreateUserT;
      const itemValue = data[itemName];

      if (!!itemValue && itemValue instanceof Blob) {
        formData.append(itemName, itemValue);
      } else if (!!itemValue) {
        if (typeof itemValue === "string") {
          formData.append(itemName, itemValue);
        } else {
          formData.append(itemName, JSON.stringify(itemValue));
        }
      }
    }

    const response = await fetch(`${apiUrl}/users`, {
      method: "POST",
      body: formData,
    });
    return await response.json();
  };

  return (
    <div>
      <h3>Create new user</h3>

      <form ref={formRef} className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <Input
          isRequired={true}
          type="text"
          name="firstName"
          label="First Name"
          placeholder="Enter first name"
        />
        <Input
          isRequired={true}
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Enter last name"
        />
        <Input
          isRequired={true}
          type="email"
          name="email"
          label="E-mail"
          placeholder="name@flowbite.com"
        />
        <ProfessionsSelectWrapper />
        <FileInput label="Avatar" name="avatar" />

        {!!error && <ErrorMsg> {error} </ErrorMsg>}

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

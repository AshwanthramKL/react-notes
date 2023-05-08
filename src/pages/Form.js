import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      <br />
      <input type="text" placeholder="Email..." {...register("email")} />
      <br />
      <input type="number" placeholder="Age..." {...register("age")} />
      <br />
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <br />
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
      />
      <br />
      <button type="sumbit">sumbit</button>
    </form>
  );
};

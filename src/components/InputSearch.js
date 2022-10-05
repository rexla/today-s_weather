import React from "react";
import { useForm } from "react-hook-form";

const InputSearch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className="flex items-center mt-4">
        <p>City:</p>
        <input
          className="ml-2 mr-4 rounded border-[1px] border-[#CBD5E0]"
          {...register("city", { required: true })}
        />
        <p>Country:</p>
        <input
          className="ml-2 mr-4 rounded border-[1px] border-[#CBD5E0]"
          {...register("country", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" value="Search" />
        <button>Clear</button>
      </div>
    </form>
  );
};

export default InputSearch;

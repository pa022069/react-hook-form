import { useForm } from "react-hook-form";

const App = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  console.log(errors);

  return (
    <div className="relative w-full h-full flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center max-w-[500px] w-full border border-solid border-gray-800 p-4 rounded-lg"
      >
        <h1 className="text-2xl font-bold my-4">React-Hook-Form</h1>
        <div className="flex flex-col py-4 w-full">
          <div className="relative">
            <input
              {...register("name", { required: true })}
              className={`transition-all peer focus:pt-6 ${
                watch("name") ? "pt-6" : ""
              } border border-solid border-gray-800 rounded-md p-3 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50`}
              type="text"
              name="name"
              id="name"
            />
            <label
              className={`transition-all opacity-50 peer-focus:opacity-100 peer-focus:top-2 peer-focus:text-xs peer-focus:translate-y-0 ${
                watch("name") ? "top-2 opacity-100 translate-y-0 text-xs" : ""
              } absolute top-1/2 left-3 transform -translate-y-1/2`}
              htmlFor="name"
            >
              Name
            </label>
          </div>
          {errors.name && (
            <span className="text-xs mt-2 text-red-600">
              This field is required
            </span>
          )}
          <br />
          <div className="relative">
            <input
              {...register("email", { required: true })}
              className={`transition-all peer focus:pt-6 ${
                watch("email") ? "pt-6" : ""
              } border border-solid border-gray-800 rounded-md p-3 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50`}
              type="email"
              name="email"
              id="email"
            />
            <label
              className={`transition-all opacity-50 peer-focus:opacity-100 peer-focus:top-2 peer-focus:text-xs peer-focus:translate-y-0 ${
                watch("email") ? "top-2 opacity-100 translate-y-0 text-xs" : ""
              } absolute top-1/2 left-3 transform -translate-y-1/2`}
              htmlFor="email"
            >
              E-mail
            </label>
          </div>
          {errors.email && (
            <span className="text-xs mt-2 text-red-600">
              This field is required
            </span>
          )}
        </div>
        <button
          className="border border-solid hover:text-white hover:bg-gray-800 rounded-lg py-1 px-6 border-gray-800"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default App;

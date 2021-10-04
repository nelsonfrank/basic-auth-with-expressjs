import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
	username: string;
	email: string;
	password: string;
}

const signup = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
	return (
		<div className='nxt-w-11/12 nxt-mx-auto'>
			<div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='nxt-max-w-2xl nxt-w-full nxt-mx-auto nxt-flex nxt-flex-col'
				>
					<h1 className='nxt-text-3xl nxt-font-semibold nxt-my-4 nxt-text-center'>
						SignUp
					</h1>

					<label
						htmlFor='username'
						className={errors.username && "nxt-text-red-600"}
					>
						Username
					</label>
					<input
						type='text'
						name='username'
						id='username'
						className={`nxt-border-2 nxt-rounded-md nxt-my-2 nxt-py-2 nxt-px-2 focus:nxt-outline-none ${
							errors.username && "nxt-border-red-500"
						}`}
						{...register("username", {
							required: "This filled is required",
							maxLength: 20,
						})}
					/>
					{errors.username && (
						<span
							role='alert'
							className='nxt-text-red-600 nxt-font-medium nxt-mb-3 '
						>
							{errors.username.message}
						</span>
					)}

					<label htmlFor='email' className={errors.email && "nxt-text-red-600"}>
						Email
					</label>
					<input
						type='email'
						name='email'
						id='email'
						className={`nxt-border-2 nxt-rounded-md nxt-my-2 nxt-py-2 nxt-px-2 focus:nxt-outline-none ${
							errors.email && "nxt-border-red-500"
						}`}
						{...register("email", {
							required: "This filled is required",
							pattern: {
								value: /\S+@\S+\.\S+/,
								message: "Invalid email address",
							},
						})}
					/>
					{errors.email && (
						<span
							role='alert'
							className='nxt-text-red-600 nxt-font-medium nxt-mb-3'
						>
							{errors.email.message}
						</span>
					)}

					<label
						htmlFor='password'
						className={errors.password && "nxt-text-red-600"}
					>
						Password
					</label>
					<input
						type='password'
						name='password'
						id='password'
						className={`nxt-border-2 nxt-rounded-md nxt-my-2 nxt-py-2 nxt-px-2 focus:nxt-outline-none ${
							errors.password && "nxt-border-red-500"
						}`}
						{...register("password", {
							required: "This filled is required",
							minLength: {
								value: 8,
								message: "Must contain at least 8 characters",
							},
							pattern: {
								value:
									/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
								message:
									"Must contain least one letter, one number and one special character",
							},
						})}
					/>
					{errors.password && (
						<span
							role='alert'
							className='nxt-text-red-600 nxt-font-medium nxt-mb-3'
						>
							{errors.password.message}
						</span>
					)}

					<div className='nxt-my-2'>
						<button
							type='submit'
							className='nxt-py-2 nxt-px-5 nxt-border-2 nxt-border-black nxt-rounded-md nxt-text-xl'
						>
							SignUp
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default signup;

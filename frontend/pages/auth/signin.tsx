// Dependencies
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

interface IFormInput {
	email: string;
	password: string;
	auth_token: string;
}

const signin = () => {
	const [Error, setError] = useState("");
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		try {
			const response = await axios.post(
				"http://localhost:4400/auth/signin",
				data
			);

			if (response.data.auth_token) {
				localStorage.setItem("auth_token", response.data.auth_token);

				// redirect to '/' page
				router.push("/");
			}
		} catch (error) {
			if (error.response) {
				setError(error.response.data);
			}
		}
	};

	return (
		<div className='nxt-w-11/12 nxt-mx-auto'>
			<div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='nxt-max-w-2xl nxt-w-full nxt-mx-auto nxt-flex nxt-flex-col'
				>
					<h1 className='nxt-text-3xl nxt-font-semibold nxt-my-4 nxt-text-center'>
						SignIn
					</h1>

					{Error && (
						<span className='nxt-text-red-600 nxt-bg-red-100 nxt-py-3 nxt-px-2 nxt-my-3 nxt-text-center nxt-rounded-sm nxt-text-lg nxt-font-medium nxt-inline-block'>
							{Error}
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
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default signin;

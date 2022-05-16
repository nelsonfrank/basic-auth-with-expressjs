// Dependencies
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import isEmpty from 'is-empty'
import { signin } from '@/api'
import { Dispatch, RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux';
interface IFormInput {
	email: string;
	password: string;
	status: string;
}

const signinPage = () => {
	const [error, setError] = useState<string>("");
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

	const userState = useSelector((state: RootState) => state.user)
	const router = useRouter();
	const dispatch = useDispatch<Dispatch>();
	const { user } = dispatch;

	useEffect(() => {
		if (!isEmpty(userState)) {
			router.push('/dashboard')
		}
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		setIsSubmitting(true)
		try {
			const [error, response] = await signin(data);
			const result = response.data
			if (response.status) {
				setIsSubmitting(false)
				user.loaded(result)
				// redirect to '/dashboard' page
				router.push("/dashboard");
			}
		} catch (error) {
			setIsSubmitting(false)
			if (!isEmpty(error.response)) {
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

					{error && (
						<span className='nxt-text-red-600 nxt-bg-red-100 nxt-py-3 nxt-px-2 nxt-my-3 nxt-text-center nxt-rounded-sm nxt-text-lg nxt-font-medium nxt-inline-block'>
							{error}
						</span>
					)}

					<label htmlFor='email' className={errors.email && "nxt-text-red-600"}>
						Email
					</label>
					<input
						type='email'
						name='email'
						id='email'
						className={`nxt-border-2 nxt-rounded-md nxt-my-2 nxt-py-2 nxt-px-2 focus:nxt-outline-none ${errors.email && "nxt-border-red-500"
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
						className={`nxt-border-2 nxt-rounded-md nxt-my-2 nxt-py-2 nxt-px-2 focus:nxt-outline-none ${errors.password && "nxt-border-red-500"
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
							disabled={isSubmitting}
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default signinPage;

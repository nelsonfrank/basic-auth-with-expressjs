const signup = () => {
	return (
		<div className='nxt-w-11/12 nxt-mx-auto'>
			<div>
				<form className='nxt-max-w-2xl nxt-w-full nxt-mx-auto'>
					<h1 className='nxt-text-3xl nxt-font-semibold nxt-my-4 nxt-text-center'>
						SignUp
					</h1>
					<div className='nxt-flex nxt-flex-col'>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							name='username'
							className='nxt-border-2 nxt-rounded-md nxt-my-2 nxt-py-2 nxt-px-2'
						/>
					</div>
					<div className='nxt-flex nxt-flex-col'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							className='nxt-border-2 nxt-rounded-md nxt-my-2 nxt-py-2 nxt-px-2'
						/>
					</div>
					<div className='nxt-flex nxt-flex-col'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							className='nxt-border-2 nxt-rounded-md nxt-my-2 nxt-py-2 nxt-px-2'
						/>
					</div>
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

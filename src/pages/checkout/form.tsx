import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

// components
import useCart from 'src/cart/hooks';
import Button from 'src/components/Button';
import { InputField } from 'src/components/InputField';
import PhoneInput2 from 'src/components/PhoneInput';
import Modal from 'src/components/Modal';
import axios from 'src/utils/axios';

// icons
import { IconCreditCard } from '@tabler/icons-react';
import { IconBrandPaypal } from '@tabler/icons-react';
import { checkout } from 'src/constants/services';

interface UserInfo {
	firstName: string;
	lastName: string;
	email: string;
	streetAddress: string;
	city: string;
	postalCode: string;
	country: string;
	state: string;
	promo_code?: string;
	size?: string;
	number: string;
	exp: string;
	cvc: string;
	shipping_type?: number;
}
function CheckoutForm() {
	const [userInfo, setUserInfo] = useState<UserInfo>({
		firstName: '',
		lastName: '',
		email: '',
		streetAddress: '',
		city: '',
		postalCode: '',
		country: '',
		state: '',
		promo_code: '',
		size: '',
		number: '',
		exp: '',
		cvc: '',
		shipping_type: 0,
	});
	const { cartItems } = useCart();
	const [paymentMethod, setPaymentMethod] = useState<number | null>(null);

	const sizes = {
		S: '6*13',
		M: '11*18',
		L: '14.5*26',
		XL: '20*36.5',
	};

	function getPayload() {
		return cartItems.map((items) => {
			return {
				product_id: item.id,
				firstName: userInfo.firstName + ' ' + userInfo.lastName,
				email: userInfo.email,
				streetAddress: userInfo.streetAddress,
				city: userInfo.city,
				postalCode: userInfo.postalCode,
				country: userInfo.country,
				state: userInfo.state,
				promo_code: userInfo.promo_code,
				size: sizes[userInfo.size],
				number: userInfo.number,
				exp_month: userInfo.exp.split('/')[0],
				exp_year: userInfo.exp.split('/')[1],
				cvc: userInfo.cvc,
				quantity: item.quantity,
				price: item.price,
				shipping_type:0
			};
		});
	}


	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setUserInfo((prevState) => ({ ...prevState, [name]: value }));
	}

	const { mutate, isPending} = useMutation({
		mutationFn: async () => {
			const res = await axios.post(checkout, {
				...getPayload(),
			});
			return res.data;
		},
		onSuccess: () => {
			setPaymentMethod(null);
		},
	})
	return (
		<div>
			<InputField
				label='Country/Region'
				placeholder=''
				name='country'
				value={userInfo.country}
				onChange={handleChange}
				error={userInfo.country === ''}
			/>
			<div className='w-full flex gap-4'>
				<InputField
					label='First name'
					fullWidth
					name='firstName'
					value={userInfo.firstName}
					onChange={handleChange}
					error={userInfo.firstName === ''}
				/>
				<InputField
					label='Last name'
					fullWidth
					name='lastName'
					value={userInfo.lastName}
					onChange={handleChange}
					error={userInfo.lastName === ''}
				/>
			</div>

			<InputField
				label='Address'
				value={userInfo.streetAddress}
				onChange={handleChange}
				name='streetAddress'
				error={userInfo.streetAddress === ''}
			/>
			<div className='w-full flex gap-4'>
				<InputField
					label='City'
					fullWidth
					name='city'
					value={userInfo.city}
					onChange={handleChange}
					error={userInfo.city === ''}
				/>
				<InputField
					label='Postal code'
					fullWidth
					name='postalCode'
					value={userInfo.postalCode}
					onChange={handleChange}
					error={userInfo.postalCode === ''}
				/>
			</div>
			<PhoneInput2 label='Phone' />
			<InputField
				label='Email'
				name='email'
				value={userInfo.email}
				onChange={handleChange}
				error={userInfo.email === ''}
			/>
			{/* <Button variant='contained' className='mt-4' fullWidth>
				Complete
			</Button> */}
			<div className='flex flex-col gap-3 mt-6'>
				<Button
					variant='contained'
					className='bg-sky-800 hover:bg-sky-900'
					onClick={() => setPaymentMethod(0)}
					disabled={isPending}
				>
					<div className='flex gap-2'>
						<p>Pay with card</p>
						<IconCreditCard size={20} />
					</div>
				</Button>
				<Button
					variant='contained'
					className='bg-yellow-500 text-black hover:bg-yellow-600'
					onClick={() => setPaymentMethod(1)}
					disabled={isPending}
				>
					<div className='flex gap-2'>
						<p>Pay with Paypal</p>
						<IconBrandPaypal size={20} />
					</div>
				</Button>
			</div>
			<Modal open={paymentMethod === 0} onClose={() => setPaymentMethod(null)}>
				<h3 className='text-center text-2xl'>Enter card info</h3>
				<div>
					<InputField label='Number' placeholder='#### - #### - #### - ####
'/>
					<div className='flex gap-4'>
						<InputField label='Expiration' placeholder='MM/YY'/>
						<InputField label='CVC' placeholder='###'/>
					</div>
				</div>
				<Button
					fullWidth
					variant='contained'
					className='mt-5'
					onClick={() => mutate()}
					disabled={isPending}
				>
					Place order
				</Button>
			</Modal>
		</div>
	);
}

export default CheckoutForm;

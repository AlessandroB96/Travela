import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51L2SMNFSHnKFsZr2Z2uYAFJNhlWHquVjW4igA47vwFgBQDPJJ7x4Qm7V4yU4jFaCiBFJzmzpSULS7OcHn6EcwZu4004c5BAfgR"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}